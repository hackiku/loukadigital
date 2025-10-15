// src/app/adhealth/audit/AdFormatsCarousel.tsx

'use client';

export function AdFormatsCarousel() {
	const formats = [
		{ name: 'Instagram Story', width: 'w-48', height: 'h-80' },
		{ name: 'Facebook Feed', width: 'w-72', height: 'h-72' },
		{ name: 'TikTok', width: 'w-52', height: 'h-96' },
		{ name: 'Google Display', width: 'w-96', height: 'h-48' },
		{ name: 'Instagram Reel', width: 'w-56', height: 'h-96' },
		{ name: 'Facebook Story', width: 'w-48', height: 'h-80' },
	];

	return (
		<div className="relative w-full overflow-hidden py-8">
			<div className="flex gap-4 animate-scroll">
				{/* First set */}
				{formats.map((format, idx) => (
					<div
						key={`format-1-${idx}`}
						className={`${format.width} ${format.height} flex-shrink-0 rounded-2xl bg-gradient-to-br from-muted/20 to-muted/5 border border-muted/30 flex items-center justify-center backdrop-blur-sm`}
					>
						<span className="text-xs text-muted-foreground/50 font-semibold">
							{format.name}
						</span>
					</div>
				))}
				{/* Duplicate set for seamless loop */}
				{formats.map((format, idx) => (
					<div
						key={`format-2-${idx}`}
						className={`${format.width} ${format.height} flex-shrink-0 rounded-2xl bg-gradient-to-br from-muted/20 to-muted/5 border border-muted/30 flex items-center justify-center backdrop-blur-sm`}
					>
						<span className="text-xs text-muted-foreground/50 font-semibold">
							{format.name}
						</span>
					</div>
				))}
			</div>

			{/* Gradient fade on edges */}
			<div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent pointer-events-none" />
			<div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent pointer-events-none" />

			<style jsx>{`
				@keyframes scroll {
					0% {
						transform: translateX(0);
					}
					100% {
						transform: translateX(-50%);
					}
				}
				
				.animate-scroll {
					animation: scroll 40s linear infinite;
				}
				
				.animate-scroll:hover {
					animation-play-state: paused;
				}
			`}</style>
		</div>
	);
}