// src/app/adhealth/sections/HowItWorks.tsx
"use client"

import { Calculator, Mail, Calendar } from "lucide-react"
// import Image from 'next/image';

const steps = [
	{
		number: 1,
		icon: Calculator,
		title: "Spot Your Leak",
		description:
			"Use our interactive calculator to identify which of the 7 deadly sins are draining your budget right now.",
		color: "purple",
		rotation: "rotate-6",
	},
	{
		number: 2,
		icon: Mail,
		title: "Get the Checklist",
		description: "Download the free 20-page PDF with actionable fixes you can implement today—no audit required.",
		color: "blue",
		rotation: "-rotate-6",
	},
	{
		number: 3,
		icon: Calendar,
		title: "Book Your Deep Dive",
		description: "Want the full diagnosis? Book a 48-hour expert audit. We find the waste or you don't pay.",
		color: "green",
		rotation: "rotate-12",
	},
]

const colorClasses = {
	purple: {
		bg: "bg-purple-500/20",
		border: "border-purple-500/50",
		text: "text-purple-400",
		number: "bg-purple-600",
	},
	blue: {
		bg: "bg-blue-500/20",
		border: "border-blue-500/50",
		text: "text-blue-400",
		number: "bg-blue-600",
	},
	green: {
		bg: "bg-green-500/20",
		border: "border-green-500/50",
		text: "text-green-400",
		number: "bg-green-600",
	},
}

export function HowItWorks() {
	return (
		<div className="max-w-6xl mx-auto">
			{/* Header */}
			<div className="text-center mb-20">
				<h2 className="text-4xl md:text-5xl font-bold mb-4">How It Works</h2>
				<p className="text-xl text-muted-foreground max-w-2xl mx-auto">Three steps to stop the bleeding</p>
			</div>

			{/* Steps */}
			<div className="space-y-16 md:space-y-24">
				{steps.map((step, index) => {
					const colors = colorClasses[step.color as keyof typeof colorClasses]
					const Icon = step.icon

					return (
						<div key={step.number} className="grid md:grid-cols-[auto_1fr_1fr] gap-8 md:gap-12 items-center">
							{/* Left: Number + Icon */}
							<div className="flex md:flex-col items-center md:items-start gap-4 md:gap-6">
								{/* Number Badge */}
								<div
									className={`w-12 h-12 md:w-16 md:h-16 rounded-full ${colors.number} text-white text-xl md:text-2xl font-bold flex items-center justify-center flex-shrink-0`}
								>
									{step.number}
								</div>

								{/* Icon */}
								<div
									className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl ${colors.bg} border-2 ${colors.border} flex items-center justify-center flex-shrink-0`}
								>
									<Icon className={`w-8 h-8 md:w-10 md:h-10 ${colors.text}`} />
								</div>
							</div>

							{/* Middle: Content */}
							<div className="space-y-3">
								<h3 className="text-2xl md:text-3xl font-bold">{step.title}</h3>
								<p className="text-base md:text-lg text-muted-foreground leading-relaxed">{step.description}</p>
							</div>

							{/* Right: Placeholder Image (Desktop only) */}
							<div className="hidden md:block">
								<div
									className={`relative w-full aspect-[4/3] bg-gradient-to-br ${colors.bg} ${colors.border} border-2 rounded-2xl ${step.rotation} overflow-hidden`}
								>
									{/* <Image
										src={`/assets/how-it-works/step-${step.number}.webp`}
										alt={`${step.title} preview`}
										fill
										className="object-cover"
									/> */}
									<div className="absolute inset-0 flex items-center justify-center">
										<span className="text-6xl font-black opacity-10">{step.number}</span>
									</div>
								</div>
							</div>

							{/* Mobile: Small Image Below Content */}
							<div className="md:hidden">
								<div
									className={`relative w-full max-w-[200px] mx-auto aspect-[4/3] bg-gradient-to-br ${colors.bg} ${colors.border} border-2 rounded-xl overflow-hidden`}
								>
									{/* <Image
										src={`/assets/how-it-works/step-${step.number}.webp`}
										alt={`${step.title} preview`}
										fill
										className="object-cover"
									/> */}
									<div className="absolute inset-0 flex items-center justify-center">
										<span className="text-4xl font-black opacity-10">{step.number}</span>
									</div>
								</div>
							</div>
						</div>
					)
				})}
			</div>
		</div>
	)
}
