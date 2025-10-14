// src/app/adhealth/_components/navigation/AvailabilityBar.tsx

'use client';
import { useState, useEffect } from 'react';

export function AvailabilityBar() {
	const [spotsLeft, setSpotsLeft] = useState(17);
	const totalSpots = 20;
	const percentFilled = ((totalSpots - spotsLeft) / totalSpots) * 100;

	return (
		<div className="flex items-center gap-3 px-4 py-2 bg-card/30 backdrop-blur-sm rounded-xl border border-border/50">
			{/* Progress Bar */}
			<div className="relative w-24 h-2 bg-muted/30 rounded-full overflow-hidden">
				<div
					className="absolute inset-y-0 left-0 bg-gradient-to-r from-green-500 to-emerald-400 rounded-full transition-all duration-500"
					style={{ width: `${percentFilled}%` }}
				>
					{/* Animated shine */}
					<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-[shimmer_2s_infinite]" />
				</div>
			</div>

			{/* Spots Text */}
			<div className="flex items-center gap-1.5 text-xs">
				<span className="relative flex h-2 w-2">
					<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
					<span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
				</span>
				<span className="text-muted-foreground">
					<span className="font-bold text-foreground">{spotsLeft}</span>/{totalSpots} spots
				</span>
			</div>
		</div>
	);
}

// Add to animations.css:
/*
@keyframes shimmer {
	0% { transform: translateX(-100%); }
	100% { transform: translateX(100%); }
}
*/