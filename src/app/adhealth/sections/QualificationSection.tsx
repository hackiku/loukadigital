// src/app/adhealth/sections/QualificationSection.tsx
"use client"

import { Check, X } from "lucide-react"

export function QualificationSection() {
	return (
		<div className="max-w-4xl mx-auto">
			<div className="text-center mb-12">
				<h2 className="text-3xl md:text-4xl font-bold mb-4">Is This For You?</h2>
				<p className="text-lg text-muted-foreground">This audit works best for specific types of advertisers</p>
			</div>

			<div className="grid md:grid-cols-2 gap-8">
				{/* Perfect If */}
				<div className="p-8 rounded-2xl border-2 border-green-500/30 bg-green-500/5">
					<div className="flex items-center gap-3 mb-6">
						<div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
							<Check className="w-6 h-6 text-green-400" />
						</div>
						<h3 className="text-xl font-bold">Perfect if you:</h3>
					</div>
					<ul className="space-y-3 text-muted-foreground">
						<li className="flex items-start gap-3">
							<Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
							<span>Spend £3,000+ per month on Meta ads</span>
						</li>
						<li className="flex items-start gap-3">
							<Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
							<span>Run campaigns in the UK or similar markets</span>
						</li>
						<li className="flex items-start gap-3">
							<Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
							<span>Suspect your ads could perform better</span>
						</li>
						<li className="flex items-start gap-3">
							<Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
							<span>Want actionable fixes, not vague advice</span>
						</li>
					</ul>
				</div>

				{/* Not For */}
				<div className="p-8 rounded-2xl border-2 border-red-500/30 bg-red-500/5">
					<div className="flex items-center gap-3 mb-6">
						<div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center">
							<X className="w-6 h-6 text-red-400" />
						</div>
						<h3 className="text-xl font-bold">Not for you if:</h3>
					</div>
					<ul className="space-y-3 text-muted-foreground">
						<li className="flex items-start gap-3">
							<X className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
							<span>You spend less than £1,000/month on ads</span>
						</li>
						<li className="flex items-start gap-3">
							<X className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
							<span>You're looking for someone to run your ads</span>
						</li>
						<li className="flex items-start gap-3">
							<X className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
							<span>You need creative design or copywriting</span>
						</li>
						<li className="flex items-start gap-3">
							<X className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
							<span>You want a full-service agency retainer</span>
						</li>
					</ul>
				</div>
			</div>

			<p className="text-center text-sm text-muted-foreground mt-8">
				This is a diagnostic audit, not ongoing management. We find the problems, you fix them (or hire us to).
			</p>
		</div>
	)
}
