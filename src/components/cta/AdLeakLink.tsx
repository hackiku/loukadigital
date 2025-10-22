// src/components/cta/AdLeakLink.tsx
'use client';

import Link from 'next/link';
import { AvailabilityBar } from '~/app/adhealth/_components/scarcity/AvailabilityBar';

export function AdLeakLink() {
	return (
		<div className="flex flex-col items-center gap-3">
			{/* Button */}
			<div className="relative">
				{/* 3D Shadow */}
				<div
					className="absolute inset-0 rounded-xl bg-gradient-to-br from-red-400/60 to-orange-400/60 translate-x-1 translate-y-1"
					aria-hidden="true"
				/>

				{/* Main Button */}
				<Link
					href="/adleak"
					target="_blank"
					rel="noopener noreferrer"
					className="relative block px-6 py-3 rounded-xl bg-gradient-to-r from-red-600 to-orange-600 
          hover:from-red-500 hover:to-orange-500 text-white font-bold
          transition-all duration-200 hover:translate-x-1 hover:translate-y-1"
				>
					<span className="flex items-center gap-2">
						Find your Ad Leak

						{/* Price with strikethrough + FREE label */}
						<span className="relative inline-block ml-1">
							{/* FREE label - rotated above price */}
							<span
								className="absolute -top-4 left-1/2 -translate-x-1/2 rotate-12 
                text-xs font-black text-green-400 bg-green-500/20 px-2 py-0.5 rounded 
                border border-green-500/40 whitespace-nowrap"
							>
								FREE
							</span>

							{/* Crossed out price */}
							<span className="relative opacity-60">
								<span className="relative">
									— £697
									{/* Diagonal strikethrough */}
									<span
										className="absolute inset-0 flex items-center justify-center"
										aria-hidden="true"
									>
										<span
											className="w-full h-0.5 bg-red-400 rotate-12"
											style={{ transformOrigin: 'center' }}
										/>
									</span>
								</span>
							</span>
						</span>
					</span>
				</Link>
			</div>

			{/* Availability Bar */}
			<AvailabilityBar />
		</div>
	);
}