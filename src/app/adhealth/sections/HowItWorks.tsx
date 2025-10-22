// src/app/adhealth/sections/HowItWorks.tsx
"use client"

import { ChevronDown } from "lucide-react"
import Link from "next/link"

const steps = [
	{
		number: "1",
		title: "Calculate Your Score",
		description: "Use the free checklist to diagnose your account. Takes ~10 minutes. Find out if you're leaking £4k-15k/month.",
	},
	{
		number: "2",
		title: "Send 2 Screenshots",
		description: "Score below 65? Send us 2 screenshots (campaigns + top ads). We'll audit in 24-48h for £697.",
	},
	{
		number: "3",
		title: "Improve in <90 Days",
		description: (
			<>
				Fix it yourself, use your existing agency, or{" "}
				<Link
					href="/getresults"
					target="_blank"
					className="text-purple-400 hover:text-purple-300 underline underline-offset-2 font-semibold"
				>
					hire us
				</Link>{" "}
				to implement. Your choice.
			</>
		),
	},
]

export function HowItWorks() {
	return (
		<div className="max-w-6xl mx-auto">
			<div className="flex flex-col md:flex-row gap-12 md:gap-16">
				{/* Left: Sticky qualification summary */}
				<div className="md:w-2/5 md:sticky md:top-24 md:self-start">
					<div className="rounded-3xl border-2 border-muted bg-card/50 backdrop-blur-sm p-8">
						<h3 className="text-2xl font-bold mb-4">
							Not every account needs our help
						</h3>
						<p className="text-muted-foreground mb-6">
							We turn away 60-70% of businesses—not because they're bad, but because we can't confidently deliver 40%+ improvement.
						</p>

						{/* Score ranges - compact */}
						<div className="space-y-3 text-sm">
							<div className="flex items-baseline gap-2">
								<span className="font-bold text-green-400">20-64:</span>
								<span className="text-muted-foreground">Perfect fit, apply now</span>
							</div>
							<div className="flex items-baseline gap-2">
								<span className="font-bold text-orange-400">65-79:</span>
								<span className="text-muted-foreground">Borderline, might decline</span>
							</div>
							<div className="flex items-baseline gap-2">
								<span className="font-bold text-red-400">80-90:</span>
								<span className="text-muted-foreground">Already optimized, don't apply</span>
							</div>
						</div>
					</div>

					{/* Scroll indicator */}
					<div className="mt-6 flex flex-col items-center gap-2 text-muted-foreground animate-bounce">
						<span className="text-xs font-medium">See full breakdown</span>
						<ChevronDown className="w-5 h-5" />
					</div>
				</div>

				{/* Right: Steps */}
				<div className="md:w-3/5 space-y-8">
					{steps.map((step, index) => (
						<div key={step.number} className="relative">
							{/* Step card */}
							<div className="p-6 rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm hover:border-purple-500/30 transition-all">
								{/* Number */}
								<div className="flex items-start gap-4 mb-4">
									<div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 text-white text-lg font-bold flex items-center justify-center">
										{step.number}
									</div>
									<div className="flex-1">
										<h3 className="text-xl font-bold mb-2">{step.title}</h3>
										<p className="text-muted-foreground leading-relaxed">
											{step.description}
										</p>
									</div>
								</div>
							</div>

							{/* Connector line */}
							{index < steps.length - 1 && (
								<div className="ml-5 h-8 w-0.5 bg-gradient-to-b from-purple-500/50 to-transparent" />
							)}
						</div>
					))}
				</div>
			</div>
		</div>
	)
}