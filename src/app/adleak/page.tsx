// src/app/adleak/page.tsx
import type { Metadata } from 'next';
import { HeroSection } from './sections/HeroSection';
import { AdAudit } from './audit/AdAudit';
import { WhatYouGet } from './audit/WhatYouGet';
import { ResultsCard } from './_components/proof/ResultsCard';
import { Guarantee } from './pricing/Guarantee';
import { ArrowDown } from 'lucide-react';

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

			{/* Sins Intro */}
			<section id="sins" className="py-44 px-4 sm:px-12 md:px-16 lg:px-24">
				<div className="max-w-7xl mx-auto">
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

					<p className="border flex-nowrap text-xl rotate-12
												leading-12 md:text-3xl text-muted-foreground max-w-lg ml-auto mb-12">
						Most ad accounts leak <br />
						<span className="m-1 px-3 py-1 bg-red-500/20 border-2 border-red-500/40 rounded-full text-2xl md:text-2xl font-bold text-red-400">
							<ArrowDown /> 30-40%
						</span>
						<span>
							ad budget on <strong className="text-foreground">easy to fix</strong>
							yet <strong className="text-foreground">devilish to diagnose</strong> issues
						</span>
						
					</p>
				</div>
			</section>

			<section id="sins" className="py-44 px-4 sm:px-12 md:px-16 lg:px-24">
				<div className="max-w-7xl mx-auto">
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

					<p className="flex-nowrap text-xl leading-12 md:text-3xl text-muted-foreground max-w-lg mx-auto mb-12">
						Most ad accounts leak
						<span className="m-1 px-3 py-1 bg-red-500/20 border-2 border-red-500/40 rounded-full text-2xl md:text-2xl font-bold text-red-400">
							30-40%
						</span>
						ad budget on easy to fix issues
					</p>

					<div className="bg-background/90 backdrop-blur-md rounded-2xl p-8 border-2 border-foreground/10 shadow-2xl">
						<div className="text-xl md:text-2xl font-bold text-foreground mb-4">
							find out with the
						</div>
						<div className="text-4xl font-black text-foreground mb-3">
							7 Sins of Meta Ads
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