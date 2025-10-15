// src/app/adhealth/_components/ui/ScarcityBanner.tsx

'use client';
import { Clock } from 'lucide-react';
import { useState, useEffect } from 'react';

export function ScarcityBanner() {
	const [spotsLeft, setSpotsLeft] = useState(17);

	return (
		<div className="fixed top-0 left-0 right-0 z-50 overflow-hidden">
			<div className="bg-gradient-to-r from-orange-600 via-red-600 to-orange-600 animate-gradient-x">
				<div className="container mx-auto px-4 py-3">
					<div className="flex items-center justify-center gap-2 md:gap-3 text-center">
						<Clock className="w-4 h-4 md:w-5 md:h-5 text-white animate-pulse flex-shrink-0" />
						<div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2 text-xs md:text-base">
							<span className="text-white font-bold">Limited Availability:</span>
							<span className="text-white">
								Only <span className="font-bold text-base md:text-xl px-2 py-0.5 bg-white/20 rounded">{spotsLeft} out of 20</span> spots left
							</span>
						</div>
						<Clock className="w-4 h-4 md:w-5 md:h-5 text-white animate-pulse flex-shrink-0" />
					</div>
				</div>
			</div>
		</div>
	);
}
