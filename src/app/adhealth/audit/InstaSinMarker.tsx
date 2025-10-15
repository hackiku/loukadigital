// src/app/adhealth/audit/InstaSinMarker.tsx

'use client';
import type { CheckItem } from '@/data/checklist';

interface InstaSinMarkerProps {
	check: CheckItem;
	position: 'top' | 'middle' | 'bottom';
	side: 'left' | 'right';
}

export function InstaSinMarker({ check, position, side }: InstaSinMarkerProps) {
	const positionStyles = {
		top: 'top-[15%]',
		middle: 'top-[45%]',
		bottom: 'top-[75%]',
	};

	const sideStyles = {
		left: '-left-32',
		right: '-right-32',
	};

	const severityColors = {
		critical: 'from-red-500 to-orange-500',
		high: 'from-orange-500 to-yellow-500',
		medium: 'from-yellow-500 to-green-500',
	};

	return (
		<div
			className={`absolute ${positionStyles[position]} ${sideStyles[side]} w-28 z-20`}
			style={{
				fontFamily: 'Comic Sans MS, cursive',
			}}
		>
			{/* Handwritten circle around sin name */}
			<div className="relative inline-block">
				{/* Sin name */}
				<div className="text-center px-2 py-1 relative z-10">
					<div className="text-xs font-bold text-foreground/90 leading-tight">
						{check.name}
					</div>
				</div>

				{/* Handdrawn circle SVG */}
				<svg
					className="absolute inset-0 w-full h-full pointer-events-none"
					style={{ transform: 'scale(1.3)' }}
					viewBox="0 0 120 60"
					preserveAspectRatio="none"
				>
					<ellipse
						cx="60"
						cy="30"
						rx="55"
						ry="25"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						className={`text-${check.severity === 'critical' ? 'red' : check.severity === 'high' ? 'orange' : 'yellow'}-500`}
						style={{
							strokeDasharray: '5,3',
						}}
					/>
				</svg>

				{/* Severity badge */}
				<div
					className={`absolute -top-2 -right-2 px-1.5 py-0.5 rounded-full text-[8px] font-bold text-white bg-gradient-to-r ${severityColors[check.severity]}`}
				>
					{check.severity === 'critical' ? '🔥' : check.severity === 'high' ? '⚠️' : '⚡'}
				</div>
			</div>

			{/* Arrow pointing to mockup */}
			<svg
				className={`absolute ${side === 'left' ? 'left-full' : 'right-full'} top-1/2 -translate-y-1/2`}
				width="40"
				height="40"
				viewBox="0 0 40 40"
				fill="none"
			>
				<defs>
					<linearGradient id={`sinGradient-${check.id}`} x1="0%" y1="0%" x2="100%" y2="0%">
						<stop offset="0%" stopColor="#a855f7" />
						<stop offset="100%" stopColor="#ec4899" />
					</linearGradient>
				</defs>
				<path
					d={side === 'left'
						? 'M 5 20 L 30 20 M 30 20 L 23 14 M 30 20 L 23 26'
						: 'M 35 20 L 10 20 M 10 20 L 17 14 M 10 20 L 17 26'
					}
					stroke={`url(#sinGradient-${check.id})`}
					strokeWidth="2.5"
					strokeLinecap="round"
				/>
			</svg>
		</div>
	);
}