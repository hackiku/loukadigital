// src/app/adhealth/pricing/PricingCard.tsx
"use client"

import { Download, ExternalLink } from "lucide-react"
import { useDrawer } from "../_context/DrawerContext"
import { AvailabilityBar } from "../_components/scarcity/AvailabilityBar"
import Link from "next/link"

export function PricingCard() {
	const { openDrawer } = useDrawer()

	return (
		<div className="max-w-2xl mx-auto">
			{/* Main pricing card */}
			<div className="relative p-8 md:p-10 rounded-2xl border-2 border-purple-500/50 bg-card/50 backdrop-blur-sm">
				{/* Availability indicator */}
				<div className="flex justify-center mb-8">
					<AvailabilityBar variant="default" />
				</div>

				{/* Pricing */}
				<div className="text-center mb-8">
					<h3 className="text-2xl font-bold mb-4">AdHealth Audit</h3>

					{/* Crossed out price */}
					<div className="flex items-center justify-center gap-4 mb-2">
						<span className="text-3xl font-bold text-muted-foreground line-through">£697</span>
						<span className="text-5xl md:text-6xl font-black bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
							FREE
						</span>
					</div>

					<p className="text-sm text-muted-foreground mb-2">
						Limited free audits available • 24-48h delivery
					</p>
					<p className="text-xs text-muted-foreground">
						Regular price returns after 20 free spots are claimed
					</p>
				</div>

				{/* Main CTA - Get Free Audit */}
				<button
					onClick={openDrawer}
					className="w-full py-4 px-6 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-bold rounded-xl transition-all hover:scale-[1.02] text-lg mb-4 flex items-center justify-center gap-2"
				>
					<Download className="w-5 h-5" />
					<span>Get Free Audit</span>
				</button>

				{/* Divider */}
				<div className="relative my-6">
					<div className="absolute inset-0 flex items-center">
						<div className="w-full border-t border-border/50" />
					</div>
					<div className="relative flex justify-center">
						<span className="bg-card px-4 text-sm text-muted-foreground">or</span>
					</div>
				</div>

				{/* Secondary CTA - Full service */}
				<Link
					href="/getresults"
					target="_blank"
					className="block w-full py-3 px-6 bg-muted/50 hover:bg-muted border border-border/50 hover:border-border text-foreground font-semibold rounded-xl transition-all text-base group"
				>
					<div className="flex items-center justify-center gap-2">
						<span>Want us to fix it for you?</span>
						<ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
					</div>
				</Link>

				{/* Fine print */}
				<p className="text-xs text-center text-muted-foreground mt-6">
					Use your existing agency to implement, DIY it, or hire us. Your choice.
				</p>
			</div>

			{/* Trust elements below */}
			<div className="mt-8 text-center space-y-2">
				<p className="text-sm text-muted-foreground">
					<span className="text-foreground font-semibold">Money-back guarantee:</span> If we don't find £697+ in monthly waste, you don't pay
				</p>
				<p className="text-xs text-muted-foreground">
					Based on 200+ audits over 5 years
				</p>
			</div>
		</div>
	)
}