// src/app/adleak/_components/scarcity/AvailabilityBar.tsx
'use client';
import { useState } from 'react';

interface AvailabilityBarProps {
	variant?: 'default' | 'compact';
}

export function AvailabilityBar({ variant = 'default' }: AvailabilityBarProps) {
	const [spotsLeft] = useState(7);
	const totalSpots = 20;
	const percentFilled = ((totalSpots - spotsLeft) / totalSpots) * 100;

	// Compact variant (for navbar, etc)
	if (variant === 'compact') {
		return (
			<div className="flex items-center gap-2">
				{/* Mini Progress Bar */}
				<div className="relative w-16 h-4 bg-muted/50 rounded-full overflow-hidden border border-border/50">
					<div
						className="absolute inset-y-0 left-0 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full transition-all duration-500"
						style={{ width: `${percentFilled}%` }}
					/>
				</div>

				{/* Count */}
				<div className="flex items-center gap-1">
					<span className="relative flex h-2 w-2">
						<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
						<span className="relative inline-flex rounded-full h-full w-full bg-green-500" />
					</span>
					<span className="text-sm font-bold text-foreground">
						{spotsLeft}<span className="text-muted-foreground">/{totalSpots}</span>
					</span>
				</div>
			</div>
		);
	}

	// Default variant (full width with text)
	return (
		<div className="flex items-center gap-4">
			{/* Progress Bar */}
			<div className="relative w-32 h-5 bg-muted/50 rounded-full overflow-hidden border border-border/50">
				<div
					className="absolute inset-y-0 left-0 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full transition-all duration-500"
					style={{ width: `${percentFilled}%` }}
				>
					{/* Shimmer effect */}
					<div
						className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"
					/>
				</div>
			</div>

			{/* Spots Available */}
			<div className="flex items-center gap-2">
				<span className="relative flex h-2.5 w-2.5">
					<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
					<span className="relative inline-flex rounded-full h-full w-full bg-green-500" />
				</span>
				<div className="text-sm">
					<span className="font-bold text-foreground">{spotsLeft}</span>
					<span className="text-muted-foreground"> spots available</span>
				</div>
			</div>
		</div>
	);
}