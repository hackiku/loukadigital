// src/app/adhealth/sections/HowItWorks.tsx
"use client"

import React from 'react';

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
		description: "Fix it yourself, use your existing agency, or hire us to implement. Your choice.",
	},
]

// Helper function to render the description, applying the link specifically to step 3
const renderDescription = (step: typeof steps[0]) => {
	if (step.number !== "3") {
		return <p className="text-base text-muted-foreground leading-relaxed">{step.description}</p>;
	}

	// Special handling for Step 3: Insert the "hire us" link
	const parts = step.description.split(', or hire us to implement.');

	return (
		<p className="text-base text-muted-foreground leading-relaxed">
			{parts[0]}
			, or
			<a
				href="/getresults"
				target="_blank"
				className="font-semibold text-purple-400 hover:text-purple-300 transition-colors underline"
			>
				hire us
			</a>
			to implement.
			{parts[1]}
		</p>
	);
};


export function HowItWorks() {
	return (
		<div className="max-w-5xl mx-auto">
			<div className="grid md:grid-cols-3 gap-8 md:gap-12">
				{steps.map((step) => (
					<div key={step.number} className="relative">
						{/* Number badge */}
						<div className="mb-6">
							<div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 text-white text-xl font-bold">
								{step.number}
							</div>
						</div>

						{/* Content */}
						<h3 className="text-xl md:text-2xl font-bold mb-3">{step.title}</h3>

						{/* Render the description using the helper function */}
						{renderDescription(step)}

						{/* Connector line (desktop only) */}
						{step.number !== "3" && (
							<div className="hidden md:block absolute top-6 left-full w-full h-0.5 bg-gradient-to-r from-purple-500/50 to-transparent -z-10" />
						)}
					</div>
				))}
			</div>
		</div>
	)
}