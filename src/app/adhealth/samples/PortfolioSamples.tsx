// src/app/adhealth/samples/PortfolioSamples.tsx

"use client"

import { ProblemPointer } from "./ProblemPointer"

export function AdProblemsCarousel() {
	const problems = [
		{
			id: 1,
			title: "Campaign overlap",
			direction: "left" as const,
			circlePosition: { x: "60%", y: "40%" },
			screenshotAspect: "aspect-[16/10]", // Wider screenshot
		},
		{
			id: 2,
			title: "Creative fatigue",
			direction: "right" as const,
			circlePosition: { x: "45%", y: "55%" },
			screenshotAspect: "aspect-[4/3]", // Square-ish screenshot
		},
		{
			id: 3,
			title: "iOS tracking",
			direction: "bottom" as const,
			circlePosition: { x: "50%", y: "35%" },
			screenshotAspect: "aspect-[16/9]", // Standard screenshot
		},
		{
			id: 4,
			title: "... +4 more",
			direction: "left" as const,
			circlePosition: { x: "55%", y: "50%" },
			screenshotAspect: "aspect-[5/6]", // Tall screenshot
		},
	]

	return (
		<div className="relative w-full overflow-hidden">
			<div className="flex gap-6 md:gap-8 animate-scroll-problems">
				{/* First set */}
				{problems.map((problem) => (
					<div key={`problem-1-${problem.id}`} className="flex-shrink-0 w-[280px] md:w-[400px] relative">
						{/* Screenshot placeholder with red-ish overlay */}
						<div
							className={`relative ${problem.screenshotAspect} w-full rounded-2xl overflow-hidden bg-gradient-to-br from-muted/30 to-muted/10 border border-muted/40`}
						>
							{/* Red-ish overlay to indicate problem */}
							<div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-orange-500/5 to-transparent" />

							{/* Placeholder content - simulated ad interface */}
							<div className="absolute inset-0 p-4 md:p-6">
								<div className="space-y-3">
									<div className="h-3 bg-muted-foreground/20 rounded w-3/4" />
									<div className="h-3 bg-muted-foreground/15 rounded w-1/2" />
									<div className="h-20 md:h-32 bg-muted-foreground/10 rounded mt-4" />
									<div className="h-2 bg-muted-foreground/15 rounded w-2/3" />
									<div className="h-2 bg-muted-foreground/10 rounded w-1/2" />
								</div>
							</div>

							{/* Commented out Next.js Image for when you have actual screenshots */}
							{/* <Image
                src={`/screenshots/problem-${problem.id}.png`}
                alt={problem.title}
                fill
                className="object-cover"
              /> */}

							{/* Problem pointer with arrow and circle */}
							<ProblemPointer
								problem={problem.title}
								direction={problem.direction}
								circlePosition={problem.circlePosition}
							/>
						</div>
					</div>
				))}

				{/* Duplicate set for seamless loop */}
				{problems.map((problem) => (
					<div key={`problem-2-${problem.id}`} className="flex-shrink-0 w-[280px] md:w-[400px] relative">
						<div
							className={`relative ${problem.screenshotAspect} w-full rounded-2xl overflow-hidden bg-gradient-to-br from-muted/30 to-muted/10 border border-muted/40`}
						>
							<div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-orange-500/5 to-transparent" />

							<div className="absolute inset-0 p-4 md:p-6">
								<div className="space-y-3">
									<div className="h-3 bg-muted-foreground/20 rounded w-3/4" />
									<div className="h-3 bg-muted-foreground/15 rounded w-1/2" />
									<div className="h-20 md:h-32 bg-muted-foreground/10 rounded mt-4" />
									<div className="h-2 bg-muted-foreground/15 rounded w-2/3" />
									<div className="h-2 bg-muted-foreground/10 rounded w-1/2" />
								</div>
							</div>

							{/* <Image
                src={`/screenshots/problem-${problem.id}.png`}
                alt={problem.title}
                fill
                className="object-cover"
              /> */}

							<ProblemPointer
								problem={problem.title}
								direction={problem.direction}
								circlePosition={problem.circlePosition}
							/>
						</div>
					</div>
				))}
			</div>

			{/* Gradient fade on edges */}
			<div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-background to-transparent pointer-events-none z-10" />
			<div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-background to-transparent pointer-events-none z-10" />

			<style jsx>{`
        @keyframes scroll-problems {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll-problems {
          animation: scroll-problems 45s linear infinite;
        }
        
        .animate-scroll-problems:hover {
          animation-play-state: paused;
        }
      `}</style>
		</div>
	)
}
