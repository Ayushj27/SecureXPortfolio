'use client';
import { cn } from '@/lib/utils';
import { useTheme } from 'next-themes';
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

type DottedSurfaceProps = Omit<React.ComponentProps<'div'>, 'ref'>;

const WAVE_SPEED = 2.8;
const WAVE_AMPLITUDE = 62;

export function DottedSurface({ className, ...props }: DottedSurfaceProps) {
	const { theme } = useTheme();

	const containerRef = useRef<HTMLDivElement>(null);
	const sceneRef = useRef<{
		scene: THREE.Scene;
		camera: THREE.PerspectiveCamera;
		renderer: THREE.WebGLRenderer;
		particles: THREE.Points[];
		animationId: number;
		count: number;
	} | null>(null);

	useEffect(() => {
		if (!containerRef.current) return;

		const SEPARATION = 150;
		const AMOUNTX = 40;
		const AMOUNTY = 60;

		const width = containerRef.current.clientWidth || window.innerWidth;
		const height = containerRef.current.clientHeight || window.innerHeight;

		// Scene setup
		const scene = new THREE.Scene();
		const isDark = theme === 'dark' || !theme;
		const fogColor = isDark ? 0x000000 : 0xffffff;
		scene.fog = new THREE.Fog(fogColor, 2000, 10000);

		const camera = new THREE.PerspectiveCamera(
			60,
			width / height,
			1,
			10000,
		);
		camera.position.set(0, 355, 1220);

		const renderer = new THREE.WebGLRenderer({
			alpha: true,
			antialias: true,
		});
		renderer.setPixelRatio(window.devicePixelRatio);
		renderer.setSize(width, height);
		renderer.setClearColor(fogColor, 0);

		containerRef.current.appendChild(renderer.domElement);

		// Create particles
		const positions: number[] = [];
		const colors: number[] = [];

		const geometry = new THREE.BufferGeometry();

		for (let ix = 0; ix < AMOUNTX; ix++) {
			for (let iy = 0; iy < AMOUNTY; iy++) {
				const x = ix * SEPARATION - (AMOUNTX * SEPARATION) / 2;
				const y = 0;
				const z = iy * SEPARATION - (AMOUNTY * SEPARATION) / 2;

				positions.push(x, y, z);
				if (isDark) {
					colors.push(0.8, 0.8, 0.8);
				} else {
					colors.push(0.2, 0.2, 0.2);
				}
			}
		}

		geometry.setAttribute(
			'position',
			new THREE.Float32BufferAttribute(positions, 3),
		);
		geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));

		const material = new THREE.PointsMaterial({
			size: 8,
			vertexColors: true,
			transparent: true,
			opacity: 0.6,
			sizeAttenuation: true,
		});

		const points = new THREE.Points(geometry, material);
		scene.add(points);

		// Store initial references immediately
		sceneRef.current = {
			scene,
			camera,
			renderer,
			particles: [points],
			animationId: 0,
			count: 0,
		};

		const startTime = performance.now();
		let animationId: number;

		const animate = () => {
			animationId = requestAnimationFrame(animate);
			if (sceneRef.current) {
				sceneRef.current.animationId = animationId;
			}
			
			const elapsedTime = (performance.now() - startTime) / 1000;
			const positionAttribute = geometry.getAttribute('position') as THREE.BufferAttribute;
			
			for (let i = 0; i < positionAttribute.count; i++) {
				const ix = Math.floor(i / AMOUNTY);
				const iy = i % AMOUNTY;

				const y =
					Math.sin((ix + elapsedTime * WAVE_SPEED) * 0.3) * WAVE_AMPLITUDE +
					Math.cos((iy + elapsedTime * (WAVE_SPEED * 0.9)) * 0.5) * WAVE_AMPLITUDE;

				positionAttribute.setY(i, y);
			}

			positionAttribute.needsUpdate = true;
			renderer.render(scene, camera);
		};

		const handleResize = () => {
			if (!containerRef.current) return;
			const w = containerRef.current.clientWidth || window.innerWidth;
			const h = containerRef.current.clientHeight || window.innerHeight;
			if (!w || !h) return;

			camera.aspect = w / h;
			camera.updateProjectionMatrix();
			renderer.setSize(w, h);
		};

		const resizeObserver = new ResizeObserver(handleResize);
		resizeObserver.observe(containerRef.current);
		window.addEventListener('resize', handleResize);
		animate();

		return () => {
			resizeObserver.disconnect();
			window.removeEventListener('resize', handleResize);

			if (sceneRef.current) {
				cancelAnimationFrame(sceneRef.current.animationId);

				sceneRef.current.scene.traverse((object: THREE.Object3D) => {
					if (object instanceof THREE.Points) {
						object.geometry.dispose();
						if (Array.isArray(object.material)) {
							object.material.forEach((m: THREE.Material) => m.dispose());
						} else {
							object.material.dispose();
						}
					}
				});

				sceneRef.current.renderer.dispose();

				if (containerRef.current && sceneRef.current.renderer.domElement) {
					containerRef.current.removeChild(
						sceneRef.current.renderer.domElement,
					);
				}
			}
		};
	}, []); // Removed theme dependency to prevent scene reset

	useEffect(() => {
		if (!sceneRef.current) return;

		const isDark = theme === 'dark' || !theme;
		const fogColor = isDark ? 0x000000 : 0xffffff;
		const particleColor = isDark ? 0.8 : 0.2;

		sceneRef.current.scene.fog = new THREE.Fog(fogColor, 2000, 10000);
		sceneRef.current.renderer.setClearColor(fogColor, 0);

		sceneRef.current.particles.forEach((points) => {
			const colorAttribute = points.geometry.getAttribute('color') as THREE.BufferAttribute;
			for (let i = 0; i < colorAttribute.count; i++) {
				colorAttribute.setXYZ(i, particleColor, particleColor, particleColor);
			}
			colorAttribute.needsUpdate = true;
		});
	}, [theme]);

	return (
		<div
			ref={containerRef}
			className={cn('pointer-events-none fixed inset-0 z-[-1]', className)}
			{...props}
		/>
	);
}
