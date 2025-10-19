// src/components/cta/GrowthPlanButton.tsx
'use client';

interface GrowthPlanButtonProps {
	variant?: 'full' | 'minimal';
}

export function GrowthPlanButton({ variant = 'full' }: GrowthPlanButtonProps) {
	if (variant === 'minimal') {
		return (
			<div className="relative">
				{/* 3D Shadow */}
				<div
					className="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-400/60 to-blue-400/60 translate-x-1 translate-y-1"
					aria-hidden="true"
				/>

				{/* Button */}
				<a
					href="https://calendly.com/loukadigital/meeting"
					target="_blank"
					rel="noopener noreferrer"
					className="relative px-4 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 
          hover:from-purple-500 hover:to-blue-500 text-white font-semibold text-sm
          transition-all duration-200 hover:translate-x-1 hover:translate-y-1 block"
				>
					Book Call
				</a>
			</div>
		);
	}

	return (
		<div className="relative w-full max-w-md">
			{/* 3D Shadow */}
			<div
				className="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-400/60 to-blue-400/60 translate-x-1 translate-y-1"
				aria-hidden="true"
			/>

			{/* Button */}
			<a
				href="https://calendly.com/loukadigital/meeting"
				target="_blank"
				rel="noopener noreferrer"
				className="relative w-full py-4 px-8 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 
        hover:from-purple-500 hover:to-blue-500 text-white font-bold text-lg
        transition-all duration-200 hover:translate-x-1 hover:translate-y-1 
        flex items-center justify-center"
			>
				Get Your Growth Plan
			</a>
		</div>
	);
}