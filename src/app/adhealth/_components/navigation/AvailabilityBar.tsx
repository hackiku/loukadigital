// src/app/adhealth/_components/navigation/AvailabilityBar.tsx

'use client';
import { useState } from 'react';

export function AvailabilityBar() {
	const [spotsLeft] = useState(7);
	const totalSpots = 20;
	const percentFilled = ((totalSpots - spotsLeft) / totalSpots) * 100;

	return (
		<div className="flex items-center justify-center gap-3">
			{/* Progress Bar */}
			<div className="relative w-24 h-6 bg-gray-800/50 rounded-full overflow-hidden border-2 border-gray-700/50">
				<div
					className="absolute inset-y-0 left-0 bg-gradient-to-br from-[#D8330C] to-red-700 rounded-full transition-all duration-500"
					style={{ width: `${percentFilled}%` }}
				>
					{/* Animated shine */}
					<div
						className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
						style={{
							animation: 'shimmer 2s infinite',
						}}
					/>
				</div>
			</div>

			{/* Spots Text */}
			<div className="flex items-center gap-1.5 text-xs">
				<span className="relative flex h-3 w-3">
					<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
					<span className="relative inline-flex rounded-full h-full w-full bg-[#D8330C]"></span>
				</span>
				<span className="text-lg text-gray-400">
					<span className="font-bold text-white">{spotsLeft}</span>/{totalSpots}
				</span>
			</div>
		</div>
	);
}