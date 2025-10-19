// src/app/adhealth/audit/SinSectionItem.tsx

'use client';
import type { CheckItem } from '~/data/checklist';

interface SinSectionItemProps {
	check: CheckItem;
}

export function SinSectionItem({ check }: SinSectionItemProps) {
	return (
		<div className="flex items-start gap-6">
			{/* Number Circle with Pulse */}
			<div className="relative flex-shrink-0">
				<span className="absolute inset-0 rounded-full bg-purple-500/30 animate-ping" />
				<div className="relative w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
					<span className="text-white font-bold text-lg">{check.number}</span>
				</div>
			</div>

			{/* Content */}
			<div className="flex-1">
				<div className="flex items-start justify-between gap-4 mb-2">
					<h3 className="text-xl md:text-2xl font-bold">{check.name}</h3>
					<div className="flex-shrink-0 px-3 py-1 rounded-full bg-red-500/20 border border-red-500/30">
						<span className="text-sm font-semibold text-red-400">
							{check.wasteCalculation.example.output}
						</span>
					</div>
				</div>
				<p className="text-muted-foreground">{check.tagline}</p>
			</div>

			{/* Arrow pointing right to mockup */}
			<svg
				className="flex-shrink-0 hidden lg:block"
				width="60"
				height="24"
				viewBox="0 0 60 24"
				fill="none"
			>
				<defs>
					<linearGradient id={`arrow-${check.id}`} x1="0%" y1="0%" x2="100%" y2="0%">
						<stop offset="0%" stopColor="#a855f7" />
						<stop offset="100%" stopColor="#ec4899" />
					</linearGradient>
				</defs>
				<path
					d="M 5 12 L 50 12 M 50 12 L 43 6 M 50 12 L 43 18"
					stroke={`url(#arrow-${check.id})`}
					strokeWidth="2.5"
					strokeLinecap="round"
				/>
			</svg>
		</div>
	);
}