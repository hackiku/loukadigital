// src/app/adhealth/sections/QualificationSection.tsx
"use client"

import { CheckCircle2, XCircle, AlertCircle } from "lucide-react"

export function QualificationSection() {
	return (
		<div className="max-w-4xl mx-auto">
			<div className="text-center mb-12">
				<h2 className="text-3xl md:text-4xl font-bold mb-4">
					Not every account needs our help
				</h2>
				<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
					Some are already well-optimized. Some have fundamental business issues. Some don't have enough volume.
				</p>
			</div>

			{/* Main stat */}
			<div className="mb-12 p-8 rounded-2xl border-2 border-muted bg-muted/20 text-center">
				<p className="text-xl md:text-2xl text-muted-foreground mb-4">
					We turn away <span className="text-foreground font-bold">60-70% of businesses</span> that inquire
				</p>
				<p className="text-base text-muted-foreground">
					Not because they're bad, but because we can't confidently deliver 40%+ improvement
				</p>
			</div>

			{/* Score ranges */}
			<div className="space-y-4">
				{/* Perfect Fit */}
				<div className="p-6 rounded-xl border-2 border-green-500/30 bg-green-500/5">
					<div className="flex items-start gap-4">
						<div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
							<CheckCircle2 className="w-6 h-6 text-green-400" />
						</div>
						<div className="flex-1">
							<div className="flex items-baseline gap-3 mb-2">
								<h3 className="text-xl font-bold">20-64 Points: Perfect Fit</h3>
								<span className="text-sm text-green-400 font-semibold">Apply immediately</span>
							</div>
							<p className="text-muted-foreground">
								Multiple major issues detected. Very confident in 40%+ improvement. High likelihood of acceptance.
							</p>
						</div>
					</div>
				</div>

				{/* Borderline */}
				<div className="p-6 rounded-xl border-2 border-orange-500/30 bg-orange-500/5">
					<div className="flex items-start gap-4">
						<div className="flex-shrink-0 w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center">
							<AlertCircle className="w-6 h-6 text-orange-400" />
						</div>
						<div className="flex-1">
							<div className="flex items-baseline gap-3 mb-2">
								<h3 className="text-xl font-bold">65-79 Points: Borderline</h3>
								<span className="text-sm text-orange-400 font-semibold">Apply (might be declined)</span>
							</div>
							<p className="text-muted-foreground">
								Could hit 40%, could fall short. We'll review your screenshots and decide if we can confidently help.
							</p>
						</div>
					</div>
				</div>

				{/* Already Optimized */}
				<div className="p-6 rounded-xl border-2 border-red-500/30 bg-red-500/5">
					<div className="flex items-start gap-4">
						<div className="flex-shrink-0 w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center">
							<XCircle className="w-6 h-6 text-red-400" />
						</div>
						<div className="flex-1">
							<div className="flex items-baseline gap-3 mb-2">
								<h3 className="text-xl font-bold">80-90 Points: Already Optimized</h3>
								<span className="text-sm text-red-400 font-semibold">Don't apply</span>
							</div>
							<p className="text-muted-foreground">
								Your account is top 10%. We'll decline you. Keep doing what you're doing.
							</p>
						</div>
					</div>
				</div>
			</div>

			{/* Why 40%? callout */}
			<div className="mt-12 p-6 rounded-xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/20">
				<h4 className="text-lg font-bold mb-3 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
					Why 40%?
				</h4>
				<div className="space-y-3 text-sm text-muted-foreground">
					<p>
						<span className="text-foreground font-semibold">10-20% improvement</span> could be luck (seasonality, market changes, random variance)
					</p>
					<p>
						<span className="text-foreground font-semibold">40%+ improvement</span> is undeniable structural improvement that proves our methodology works
					</p>
				</div>
			</div>
		</div>
	)
}