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
import { PortfolioSamples } from "./samples/PortfolioSamples"
import { PricingCard } from "./pricing/PricingCard"
import { DeliveryTime } from "./pricing/DeliveryTime"

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
			<section id="problem" className="pt-42 md:pt-36 px-4 sm:px-12 md:px-16 lg:px-24">
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
							... on a handful of structural issues that are {" "}
							<span className="italic text-foreground underline">easy to fix</span>
							, yet{" "}
							<span className="italic text-foreground underline">devilish to diagnose</span>.
						</p>
						<p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-4">
							After reviewing 200+ Meta ad accounts
							over 5 years, we have a pretty keen eye for the (not-so-)usual suspects. And now you can, too.
						</p>
					</div>

					<LeadMagnetSection />
					
				</div>
			</section>

			<section className="py-24 -mb-12">
				<AdProblemsCarousel />
			</section>
			{/* <AdFormatsCarousel /> */}

			{/* qualification */}

			<section id="how-it-works" className="py-24 px-4 sm:px-12 md:px-16 lg:px-24">
				<div className="text-center mb-16">
					<h2 className="text-4xl md:text-5xl font-bold mb-4">What's next with this knowledge?
						</h2>
					<p className="text-xl text-muted-foreground max-w-2xl mx-auto">
						Your account score tells you how much you can improve. You choose how, when... and with whom.
					</p>
				</div>
				<HowItWorks />
			</section>



			<section id="pricing" className="py-32 px-4 sm:px-12 md:px-16 lg:px-24">
				<div className="text-center mb-16">
					<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
						Stop the bleeding.{" "}
						<span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
							Get your audit.
						</span>
					</h2>
					<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
						Limited free audits available. Regular £697 price returns after 20 spots claimed.
					</p>
				</div>

				{/* Pricing card with delivery time indicator */}
				<div className="relative">
					{/* DeliveryTime - positioned top-left, pointing down-right to card */}
					<div className="hidden md:block absolute z-10 top-2 -left-12">
						<DeliveryTime deliveryTime="24-48h" direction="down-right" />
					</div>

					<PricingCard />
				</div>
			</section>

			{/* portfolio */}

			<section id="outcomes" className="py-24 px-4 sm:px-12 md:px-16 lg:px-24">
				<div className="text-center mb-12">
					<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
						Recent{" "}
						<span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
							Wins
						</span>
					</h2>
					<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
						Real accounts, real results, last 90 days
					</p>
				</div>
				<PortfolioSamples />
			</section>


			
		</>
	)
}
