// @ts-nocheck

// src/app/adhealth/page.tsx
import type { Metadata } from "next"
import Image from "next/image"
// content
import { HeroSection } from "./sections/HeroSection"
import { WhatYouGet } from "./sections/WhatYouGet"
import { Guarantee } from "./pricing/Guarantee"
import { HowItWorks } from "./sections/HowItWorks"
import { SinsBox } from "./sections/SinsBox"
import { QualificationSection } from "./sections/QualificationSection"
import { AdFormatsCarousel } from "./samples/AdFormatsCarousel"
import { AdProblemsCarousel } from "./samples/AdProblemsCarousel"
import { AuditForm } from "./_components/cta/AuditForm"
import { HandDrawnPointer } from "./_components/ui/HandDrawnPointer"
import { LeadMagnetSection } from "./sections/LeadMagnetSection"

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
			{/* hero */}
			<section className="relative h-screen flex items-center px-4 sm:px-12 md:px-16 lg:px-24">
				<HeroSection />
			</section>

			{/* problem */}
			<section id="problem" className="pt-32 px-4 sm:px-12 md:px-16 lg:px-24">
				<div className="md:max-w-4xl mx-auto">
					{/* Headline */}
					<div className="md:max-w-xl mb-16">
						<h2 className="text-4xl md:text-5xl lg:text-5xl font-bold mb-8 leading-tight">
							Most Meta ad accounts leak{" "}
							<span className="px-3 md:px-5 py-1 md:py-1 bg-red-500/20 rounded-full border-2 border-red-500/40">
								<span className="font-black text-red-400">40% +</span>
							</span>{" "}
							budget
						</h2>

						<p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-4">
							... on{" "}
							<span className="italic text-foreground underline">easy to fix</span>
							{" "}yet{" "}
							<span className="italic text-foreground underline">devilish to diagnose</span>
							{" "}technical issues. After reviewing 200+ Meta ad accounts
							over 5 years, we have a pretty good eye for the usual suspects. And now you can, too.
						</p>
					</div>

					<LeadMagnetSection />
					
				</div>
			</section>

			<section className="pt-24 -mb-24">
				<AdProblemsCarousel />
			</section>
			{/* <AdFormatsCarousel /> */}

			{/* How It Works */}
			<section
				id="how-it-works"
				className="py-32 px-4 sm:px-12 md:px-16 lg:px-24 bg-gradient-to-b from-background to-purple-500/5"
			>
				<div className="text-center mb-20">
					<h2 className="text-4xl md:text-5xl font-bold mb-4">How This Works</h2>
					<p className="text-xl text-muted-foreground max-w-2xl mx-auto">
						Three steps to stop the bleeding
					</p>
				</div>

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

			
		</>
	)
}
