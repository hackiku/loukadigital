// src/app/page.tsx

import { HydrateClient } from "~/trpc/server";
import { Target, Zap, Sparkles, TrendingUp } from 'lucide-react';
import { Nav } from '~/components/navigation/Nav';
import { Footer } from '~/components/navigation/Footer';
import { GrowthPlanButton } from '~/components/cta/GrowthPlanButton';
import { LogoShoutouts } from '~/components/proof/LogoShoutouts';
import { TestimonialCard } from '~/components/proof/TestimonialCard';
import { AboutSection } from './_components/about/AboutSection';
import { ClientShoutout } from "~/components/proof/ClientShoutout";
import { LogoBar } from "~/components/proof/LogoBar";

export default function HomePage() {
	return (
		<HydrateClient>
			<Nav />

			<main>
				{/* Hero */}
				<section className="relative flex flex-col items-center px-4 sm:px-12 md:px-16 lg:px-24 pt-32">
					
					<div className="border text-center flex flex-col gap-6 items-center max-w-7xl mx-auto w-full">
						<h1 className="text-[7vw] font-bold leading-tight">
							You've Built the Brand.{' '}
							<span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
								We Drive the Revenue.
							</span>
						</h1>

						<p className="text-xl md:text-2xl max-w-2xl text-muted-foreground leading-relaxed">
							Full-service marketing that drives customers, leads, and revenue while you focus on what you do best.
						</p>

						<GrowthPlanButton />

					</div>
					{/* Right: Testimonial Shoutouts */}
					
					<ClientShoutout />
					
				</section>

				{/* Services */}
				<section id="services" className="py-32 px-4 sm:px-12 md:px-16 lg:px-24 bg-muted/20">
					<div className="max-w-7xl mx-auto">
						<div className="text-center mb-20">
							<h2 className="text-3xl md:text-5xl font-bold mb-6">
								Services That{' '}
								<span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
									Actually Work
								</span>
							</h2>
							<p className="text-xl text-muted-foreground max-w-3xl mx-auto">
								We handle your growth so you can focus on your business.
							</p>
						</div>

						{/* Service Cards - 2x2 Grid */}
						<div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
							{/* Lead Generation */}
							<div className="bg-card/50 rounded-2xl p-8 border border-border/50 hover:border-purple-500/30 transition-all group">
								<div className="w-14 h-14 rounded-xl bg-gradient-to-r from-purple-600 to-blue-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
									<Target className="w-7 h-7 text-white" />
								</div>
								<h3 className="text-2xl font-bold mb-4">Lead Generation</h3>
								<p className="text-muted-foreground mb-6 leading-relaxed">
									High-converting funnels that fill your calendar with qualified prospects ready to buy.
								</p>
								<ul className="space-y-2 text-sm text-muted-foreground">
									<li>• Lead magnet funnels</li>
									<li>• VSL & webinar systems</li>
									<li>• Email automation</li>
								</ul>
							</div>

							{/* Paid Media */}
							<div className="bg-card/50 rounded-2xl p-8 border border-border/50 hover:border-blue-500/30 transition-all group">
								<div className="w-14 h-14 rounded-xl bg-gradient-to-r from-blue-600 to-purple-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
									<Zap className="w-7 h-7 text-white" />
								</div>
								<h3 className="text-2xl font-bold mb-4">Paid Media</h3>
								<p className="text-muted-foreground mb-6 leading-relaxed">
									Meta, Google, TikTok. We optimize your ad spend for maximum ROAS.
								</p>
								<ul className="space-y-2 text-sm text-muted-foreground">
									<li>• Campaign optimization</li>
									<li>• Audience targeting</li>
									<li>• Performance tracking</li>
								</ul>
							</div>

							{/* Creative */}
							<div className="bg-card/50 rounded-2xl p-8 border border-border/50 hover:border-pink-500/30 transition-all group">
								<div className="w-14 h-14 rounded-xl bg-gradient-to-r from-pink-600 to-purple-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
									<Sparkles className="w-7 h-7 text-white" />
								</div>
								<h3 className="text-2xl font-bold mb-4">Creative Production</h3>
								<p className="text-muted-foreground mb-6 leading-relaxed">
									Ad creatives, landing pages, and content that stops the scroll and drives action.
								</p>
								<ul className="space-y-2 text-sm text-muted-foreground">
									<li>• Video & static ads</li>
									<li>• Landing page design</li>
									<li>• A/B testing</li>
								</ul>
							</div>

							{/* Growth Strategy */}
							<div className="bg-card/50 rounded-2xl p-8 border border-border/50 hover:border-green-500/30 transition-all group">
								<div className="w-14 h-14 rounded-xl bg-gradient-to-r from-green-600 to-blue-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
									<TrendingUp className="w-7 h-7 text-white" />
								</div>
								<h3 className="text-2xl font-bold mb-4">Growth Strategy</h3>
								<p className="text-muted-foreground mb-6 leading-relaxed">
									Data-driven strategies that identify opportunities and scale your business profitably.
								</p>
								<ul className="space-y-2 text-sm text-muted-foreground">
									<li>• Growth audits</li>
									<li>• Conversion optimization</li>
									<li>• Analytics & reporting</li>
								</ul>
							</div>
						</div>
					</div>
				</section>

				<section className="py-20 px-4 sm:px-12 md:px-16 lg:px-24">
					<div className="max-w-7xl mx-auto">
						<div className="text-center mb-12">
							<h2>Trusted by Industry Leaders</h2>
						</div>
						<LogoBar />
					</div>
				</section>

				{/* Testimonials */}
				<section className="py-32 px-4 sm:px-12 md:px-16 lg:px-24">
					<div className="max-w-7xl mx-auto">
						<div className="text-center mb-16">
							<h2 className="text-3xl md:text-5xl font-bold mb-4">What Clients Say</h2>
							<p className="text-xl text-muted-foreground">Real businesses. Real results.</p>
						</div>

						<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
							<TestimonialCard
								testimonial={{
									id: '1',
									quote: "We've been working with Louka for over a year now and really appreciate how they take the time to know and understand our product, brand, and direction.",
									author: {
										name: 'Matthew Nagy',
										title: 'COO / Founder',
										company: 'Triumph Games',
										linkedIn: 'https://www.linkedin.com/in/matthewnagyuk/',
									},
									industry: 'Gaming',
									logo: '/assets/logos/triumph-games.png',
								}}
							/>

							<TestimonialCard
								testimonial={{
									id: '2',
									quote: "Their approach has been refreshing and has complemented our existing way of working perfectly.",
									author: {
										name: 'Rob Atherton',
										title: 'Head of International Wealth',
										company: 'Melbourne Capital Group',
										linkedIn: 'https://www.linkedin.com/in/rob-atherton-ab57198',
									},
									industry: 'Financial Services',
									logo: '/assets/logos/melbourne-capital-group.svg',
								}}
							/>

							<TestimonialCard
								testimonial={{
									id: '3',
									quote: "Tom's audit uncovered $17,000 in additional revenue we were leaving on the table every single month.",
									author: {
										name: 'Provider Partners',
										company: 'Provider Partners',
									},
									industry: 'Healthcare',
									logo: '/assets/logos/provider-partners.png',
									result: {
										metric: '$17,000/month recovered',
									},
								}}
							/>
						</div>
					</div>
				</section>

				{/* About */}
				<section id="about" className="py-32 px-4 sm:px-12 md:px-16 lg:px-24 bg-muted/20">
					<AboutSection />
				</section>

				{/* CTA */}
				<section className="py-32 px-4 sm:px-12 md:px-16 lg:px-24 bg-gradient-to-r from-purple-900/20 to-blue-900/20">
					<div className="max-w-4xl mx-auto text-center space-y-8">
						<h2 className="text-3xl md:text-5xl font-bold">Ready to Scale?</h2>
						<p className="text-xl text-muted-foreground">
							Get started today and discover how we can build your growth engine.
						</p>
						<div className="flex justify-center">
							<GrowthPlanButton />
						</div>
					</div>
				</section>
			</main>

			<Footer />
		</HydrateClient>
	);
}