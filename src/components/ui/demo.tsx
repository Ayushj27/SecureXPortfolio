import { cn } from '@/lib/utils';
import { DottedSurface } from '@/components/ui/dotted-surface';

export default function DemoOne() {
	return (
		<div className="relative min-h-[420px] overflow-hidden rounded-3xl border border-white/10 bg-background-elevated">
			<DottedSurface className="size-full" />
			<div className="absolute inset-0 flex items-center justify-center">
				<div
					aria-hidden="true"
					className={cn(
						'pointer-events-none absolute -top-10 left-1/2 size-full -translate-x-1/2 rounded-full',
						'bg-[radial-gradient(ellipse_at_center,rgba(237,237,239,0.12),transparent_50%)]',
						'blur-[30px]',
					)}
				/>
				<h1 className="font-mono text-4xl font-semibold text-foreground">
					Dotted Surface
				</h1>
			</div>
		</div>
	);
}