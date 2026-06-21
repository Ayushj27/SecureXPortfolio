"use client";

import React from 'react';
import { AlertTriangle } from 'lucide-react';
import { IconContainer, Radar } from '@/components/ui/radar-effect';

const ATTACK_SURFACE_POINTS = [
    'Internet-Facing Assets',
    'Shadow IT Exposure',
    'Exposed Services & Ports',
    'Critical Vulnerabilities (Reachable)',
    'Leaked Credentials',
    'Cloud Misconfigurations',
    'Public Data Exposure',
    'Attack Entry Points',
];

export default function RadarEffectDemo() {
    const topRow = ATTACK_SURFACE_POINTS.slice(0, 3);
    const middleRow = ATTACK_SURFACE_POINTS.slice(3, 5);
    const bottomRow = ATTACK_SURFACE_POINTS.slice(5, 8);

    return (
        <div className="flex w-full items-center justify-center p-6 md:p-8">
            <div className="relative flex h-96 w-full max-w-4xl flex-col items-center justify-center space-y-4 overflow-hidden px-4 py-6">
                <div className="mx-auto w-full max-w-3xl">
                    <div className="flex w-full items-center justify-center space-x-4 md:justify-between md:space-x-0">
                        {topRow.map((point, idx) => (
                            <IconContainer
                                key={point}
                                text={point}
                                delay={0.15 + idx * 0.08}
                                icon={<AlertTriangle className="h-7 w-7 text-cyan-400" />}
                            />
                        ))}
                    </div>
                </div>

                <div className="mx-auto w-full max-w-xl">
                    <div className="flex w-full items-center justify-center space-x-8 md:justify-between md:space-x-0">
                        {middleRow.map((point, idx) => (
                            <IconContainer
                                key={point}
                                text={point}
                                delay={0.45 + idx * 0.1}
                                icon={<AlertTriangle className="h-7 w-7 text-cyan-400" />}
                            />
                        ))}
                    </div>
                </div>

                <div className="mx-auto w-full max-w-3xl">
                    <div className="flex w-full items-center justify-center space-x-4 md:justify-between md:space-x-0">
                        {bottomRow.map((point, idx) => (
                            <IconContainer
                                key={point}
                                text={point}
                                delay={0.65 + idx * 0.08}
                                icon={<AlertTriangle className="h-7 w-7 text-cyan-400" />}
                            />
                        ))}
                    </div>
                </div>

                <Radar className="absolute -bottom-12 opacity-80" />
                <div className="absolute bottom-0 z-[41] h-px w-full bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
            </div>
        </div>
    );
}
