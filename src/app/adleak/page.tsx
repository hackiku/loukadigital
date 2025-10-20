// @ts-nocheck

// src/app/adleak/page.tsx
import type { Metadata } from 'next';
import { ArrowDown, ChevronDown } from 'lucide-react';
// content
import { HeroSection } from './sections/HeroSection';
import { AdAudit } from './audit/AdAudit';
import { WhatYouGet } from './audit/WhatYouGet';
import { ResultsCard } from './_components/proof/ResultsCard';
import { Guarantee } from './pricing/Guarantee';
import { SinsIntroSection } from './sections/SinsIntroSection';
import { InstaMockup } from './samples/InstaMockup';

export const metadata: Metadata = {
	title: 'AdLeak Audit - Find Your Meta Ad Spend Leak | Louka Digital',
	description: 'UK businesses lose 30-40% of their Meta ad budget on fixable issues. Get a 48-hour technical audit showing exactly where your £ is going.',
	openGraph: {
		title: 'Stop Your Meta Ad Spend Leak',
		description: 'Find & fix your monthly Meta ad waste in 48 hours. £697 audit or free if we don\'t find enough waste.',
		type: 'website',
	},
};

export default function AdLeakPage() {

	return (
		<>
			{/* Hero */}
			<section className="relative h-[95vh] flex items-center px-4 sm:px-12 md:px-16 lg:px-24">

				<HeroSection />
			</section>

			{/* <div className="absolute right-32">
				<InstaMockup />
			</div> */}

			{/* sins */}

			<section id="sins" className="py-44 px-4 sm:px-12 md:px-16 lg:px-24">
				<div className="max-w-7xl mx-auto">
					{/* Headline */}
					<div className="mb-16">
						<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 leading-tight">
							Where on Earth does my{' '}
							<br />
							<span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
								Insta Ad money
							</span>{' '}
							go?
						</h2>
					</div>

					{/* Main paragraph */}
					<div className="max-w-2xl mb-20">
						<p className="text-2xl md:text-3xl text-muted-foreground leading-relaxed mb-4">
							Most ad accounts leak{' '} <br/>
							<span className="inline-flex items-center gap-1.5 px-3 md:px-4 py-1 md:py-1.5 bg-red-500/20 rounded-full border-2 border-red-500/40 mx-1">
								<ArrowDown className="w-5 h-5 md:w-6 md:h-6 text-red-400" />
								<span className="text-3xl md:text-4xl font-black text-red-400">30-40% ad budget</span>
							</span>{' '}
							{/* <span className="text-3xl md:text-4xl font-bold text-foreground">ad budget</span> */}
							<br/>
							on common issues that are{' '}
							<strong className="text-foreground font-semibold">easy to fix</strong> yet{' '}
							<strong className="text-foreground font-semibold">devilish to diagnose</strong>.
							We call them:
						</p>

					</div>

					{/* 7 Sins Box */}
					<div className="max-w-xl">
						<div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-orange-500/10 via-red-500/5 to-orange-600/10 p-6 md:p-8">
							<div className="relative z-10 text-center">
								<span className="text-2xl italic">find out your</span>
								<h3 className="text-3xl md:text-4xl font-black mt-2 mb-4 leading-tight">
									<span className="bg-gradient-to-r from-orange-400 via-red-400 to-orange-500 bg-clip-text text-transparent">
										7 Sins of Meta Ads
									</span>
								</h3>

								{/* Animated arrow */}
								<div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-orange-500/20 animate-bounce">
									<ChevronDown className="w-5 h-5 text-orange-400" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Interactive Audit Calculator */}
			<section id="audit" className="min-h-screen px-4 sm:px-12 md:px-16 lg:px-24">
				<AdAudit />
			</section>

			{/* What You Get - Deliverables */}
			<section id="what-you-get" className="py-32 px-4 sm:px-12 md:px-16 lg:px-24">
				<WhatYouGet />
			</section>

			{/* Social Proof - Recent Results */}
			<section id="results" className="py-32 px-4 sm:px-12 md:px-16 lg:px-24">
				<div className="max-w-7xl mx-auto">
					<div className="text-center mb-16">
						<span className="inline-block rounded-full bg-card border px-4 py-2 font-semibold text-sm text-muted-foreground mb-4">
							RECENT AUDITS
						</span>
						<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
							Here's What We've{' '}
							<span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
								Found Lately
							</span>
						</h2>
						<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
							Real accounts, real waste, real savings. These are actual findings from the past 30 days.
						</p>
					</div>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
						<ResultsCard
							companyName="Provider Partners"
							companyLogo="/assets/logos/provider-partners.png"
							industry="Health Insurance"
							testimonial="Uncovered £17,000 in additional revenue we were leaving on the table"
							metric={{
								label: "Monthly Waste Found",
								value: "£17,000",
								trend: "up"
							}}
							sinCount={5}
						/>

						<ResultsCard
							companyName="Melbourne Capital Group"
							companyLogo="/assets/logos/melbourne-capital-group.svg"
							industry="Financial Services"
							testimonial="Campaign overlap was costing us £2,400/month. Fixed in 48 hours."
							metric={{
								label: "Overlap Waste Eliminated",
								value: "£2,400/mo",
								trend: "up"
							}}
							sinCount={3}
						/>

						<ResultsCard
							companyName="Triumph Games"
							companyLogo="/assets/logos/triumph-games.png"
							industry="Gaming Studio"
							testimonial="iOS tracking issues meant we were missing 35% of conversions. Now fixed."
							metric={{
								label: "CAC Reduced",
								value: "£85 → £34",
								trend: "down"
							}}
							sinCount={4}
						/>
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
							80/20 your ad budget{' '}
							<br />
							with an{' '}
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
								<span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
									£697
								</span>
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
	);
}