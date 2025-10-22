// src/app/adhealth/samples/PortfolioSamples.tsx
"use client"

import Image from "next/image"
import { PortfolioPointer } from "./PortfolioPointer"

export function PortfolioSamples() {
	const samples = [
		{
			id: 1,
			title: "Kajabi Overseas",
			metric: "+127% ROAS in 60 days",
			screenshotPath: "/portfolio/results/kajabi-overseas.jpeg",
			aspectRatio: "aspect-[9/16]", // Mobile screenshot
			circlePosition: { x: "50%", y: "30%" },
		},
		{
			id: 2,
			title: "E-commerce Brand",
			metric: "£8.2k/mo waste recovered",
			screenshotPath: null, // Placeholder
			aspectRatio: "aspect-square",
			circlePosition: { x: "55%", y: "45%" },
		},
		{
			id: 3,
			title: "SaaS Company",
			metric: "42% budget saved",
			screenshotPath: null, // Placeholder
			aspectRatio: "aspect-video",
			circlePosition: { x: "60%", y: "40%" },
		},
	]

	return (
		<div className="relative w-full overflow-hidden">
			<div className="flex gap-6 md:gap-8 animate-scroll-portfolio">
				{/* First set */}
				{samples.map((sample) => (
					<div key={`portfolio-1-${sample.id}`} className="flex-shrink-0 w-[280px] md:w-[360px] relative">
						<div className={`relative ${sample.aspectRatio} w-full rounded-2xl overflow-hidden border-2 border-border/50 bg-muted/20`}>
							{sample.screenshotPath ? (
								<Image
									src={sample.screenshotPath}
									alt={sample.title}
									fill
									className="object-cover"
								/>
							) : (
								// Placeholder with gradient
								<div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-green-500/10">
									<div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
										<div className="text-4xl font-black opacity-10 mb-4">{sample.id}</div>
										<div className="space-y-2">
											<div className="h-3 bg-muted-foreground/20 rounded w-3/4 mx-auto" />
											<div className="h-3 bg-muted-foreground/15 rounded w-1/2 mx-auto" />
											<div className="h-20 bg-muted-foreground/10 rounded mt-4" />
										</div>
									</div>
								</div>
							)}

							{/* Portfolio pointer with result */}
							<PortfolioPointer
								label={sample.metric}
								circlePosition={sample.circlePosition}
							/>
						</div>

						{/* Title below */}
						<p className="mt-3 text-sm font-semibold text-center text-muted-foreground">
							{sample.title}
						</p>
					</div>
				))}

				{/* Duplicate set for seamless loop */}
				{samples.map((sample) => (
					<div key={`portfolio-2-${sample.id}`} className="flex-shrink-0 w-[280px] md:w-[360px] relative">
						<div className={`relative ${sample.aspectRatio} w-full rounded-2xl overflow-hidden border-2 border-border/50 bg-muted/20`}>
							{sample.screenshotPath ? (
								<Image
									src={sample.screenshotPath}
									alt={sample.title}
									fill
									className="object-cover"
								/>
							) : (
								<div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-green-500/10">
									<div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
										<div className="text-4xl font-black opacity-10 mb-4">{sample.id}</div>
										<div className="space-y-2">
											<div className="h-3 bg-muted-foreground/20 rounded w-3/4 mx-auto" />
											<div className="h-3 bg-muted-foreground/15 rounded w-1/2 mx-auto" />
											<div className="h-20 bg-muted-foreground/10 rounded mt-4" />
										</div>
									</div>
								</div>
							)}

							<PortfolioPointer
								label={sample.metric}
								circlePosition={sample.circlePosition}
							/>
						</div>

						<p className="mt-3 text-sm font-semibold text-center text-muted-foreground">
							{sample.title}
						</p>
					</div>
				))}
			</div>

			{/* Gradient fades */}
			<div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-background to-transparent pointer-events-none z-10" />
			<div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-background to-transparent pointer-events-none z-10" />

			<style jsx>{`
        @keyframes scroll-portfolio {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll-portfolio {
          animation: scroll-portfolio 40s linear infinite;
        }
        
        .animate-scroll-portfolio:hover {
          animation-play-state: paused;
        }
      `}</style>
		</div>
	)
}