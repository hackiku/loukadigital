// @ts-nocheck

// src/app/adhealth/page.tsx
import type { Metadata } from "next"
// content
import { HeroSection } from "./sections/HeroSection"
import { WhatYouGet } from "./sections/WhatYouGet"
import { Guarantee } from "./pricing/Guarantee"
import { HowItWorks } from "./sections/HowItWorks"
import { SinsBox } from "./sections/SinsBox"
import { QualificationSection } from "./sections/QualificationSection"

export const metadata: Metadata = {
	title: "Adhealth Audit - Find Your Meta Ad Spend Leak | Louka Digital",
	description:
		"UK businesses lose 30-40% of their Meta ad budget on fixable issues. Get a 48-hour technical audit showing exactly where your £ is going.",
	openGraph: {
		title: "Stop Your Meta Ad Spend Leak",
		description: "Find & fix your monthly Meta ad waste in 48 hours. £697 audit or free if we don't find enough waste.",
		type: "website",
	},
}

export default function AdLeakPage() {
	return (
		<>
			{/* Hero */}
			<section className="relative h-[95vh] flex items-center px-4 sm:px-12 md:px-16 lg:px-24">
				<HeroSection />
			</section>

			{/* sins */}
			<section id="sins" className="mt-72 md:mt-36 px-4 sm:px-12 md:px-16 lg:px-24">
				<div className="max-w-4xl mx-auto">
					{/* Headline */}
					<div className="max-w-xl mb-16">
						<h2 className="text-4xl md:text-5xl lg:text-5xl font-bold mb-8 leading-tight">
							Most Meta ad accounts leak 
							<span className="px-3 md:px-5 py-1 md:py-1 bg-red-500/20 rounded-full border-2 border-red-500/40">
								<span className="font-black text-red-400">40% +</span>
							</span>{" "}
							budget
						</h2>

						<p className="text-2xl md:text-3xl text-muted-foreground leading-relaxed mb-4">
							... on easy-to-fix yet {" "}
							<span className="__font-semibold italic text-foreground underline">devilish to diagnose</span>
							{" "} technical issues
						</p>
					</div>

					{/* <SinsBox /> */}
				</div>
			</section>

			{/* What You Get - Deliverables */}
			<section id="what-you-get" className="py-32 px-4 sm:px-12 md:px-16 lg:px-24">
				<WhatYouGet />
			</section>

			{/* How It Works */}
			<section
				id="how-it-works"
				className="py-32 px-4 sm:px-12 md:px-16 lg:px-24 bg-gradient-to-b from-background to-purple-500/5"
			>
				<HowItWorks />
			</section>

			{/* Qualification Section */}
			<section id="qualification" className="py-32 px-4 sm:px-12 md:px-16 lg:px-24">
				<QualificationSection />
			</section>

			{/* Social Proof - Recent Results */}
			<section id="outcomes" className="py-32 px-4 sm:px-12 md:px-16 lg:px-24">
				<div className="max-w-7xl mx-auto">
					<div className="text-center mb-16">
						<span className="inline-block rounded-full bg-card border px-4 py-2 font-semibold text-sm text-muted-foreground mb-4">
							OUTCOMES
						</span>
						<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
							Here's What We've{" "}
							<span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
								Found Lately
							</span>
						</h2>
						<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
							Real accounts, real waste, real savings. These are actual findings from the past 30 days.
						</p>
					</div>
				</div>
			</section>

			{/* Risk Reversal - Guarantee */}
			<section id="guarantee" className="py-32 px-4 sm:px-12 md:px-16 lg:px-24">
				<Guarantee />
			</section>

			{/* Pricing */}
			<section id="pricing" className="py-32 px-4 sm:px-12 md:px-16 lg:px-24">
				<div className="max-w-7xl mx-auto">
					<div className="text-center mb-16">
						<span className="inline-block rounded-full bg-card border px-4 py-2 font-semibold text-sm text-muted-foreground mb-4">
							PRICING
						</span>
						<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
							80/20 your ad budget <br />
							with an{" "}
							<span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
								expert audit
							</span>
						</h2>
						<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
							One-time payment. Full refund if we don't find at least £697 in monthly waste.
						</p>
					</div>

					{/* Add PricingCard component here when ready */}
					<div className="max-w-md mx-auto p-8 rounded-2xl border-2 border-purple-500/50 bg-card/50 backdrop-blur-sm">
						<div className="text-center">
							<h3 className="text-2xl font-bold mb-2">AdLeak Audit</h3>
							<div className="text-5xl font-black mb-4">
								<span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">£697</span>
							</div>
							<p className="text-sm text-muted-foreground mb-6">
								One-time payment • 48-hour delivery • Money-back guarantee
							</p>
							<button className="w-full py-4 px-6 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-bold rounded-xl transition-all hover:scale-105 text-lg">
								Book Your Audit
							</button>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
