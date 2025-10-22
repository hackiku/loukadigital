// src/app/page.tsx

import { HydrateClient } from "~/trpc/server";
import { Target, Zap, Sparkles, TrendingUp } from 'lucide-react';
// layout
import { Nav } from '~/components/navigation/Nav';
import { Footer } from '~/components/navigation/Footer';
// cta/proof
import { GrowthPlanButton } from '~/components/cta/GrowthPlanButton';
import { LogoShoutouts } from '~/components/proof/LogoShoutouts';
import { TestimonialCard } from '~/components/proof/TestimonialCard';
import { ClientShoutout } from "~/components/proof/ClientShoutout";
import { LogoBar } from "~/components/proof/LogoBar";
// content
import { AboutSection } from './_components/about/AboutSection';
import { ServiceCard } from "./_components/services/ServiceCard";
// db
import { services } from "~/data/services";
import { AboutWrapper } from "./_components/about/AboutWrapper";
import { ServicesFunnel } from "./_components/services/ServicesFunnel";
import { SocialFloaters } from "./_components/services/SocialFloaters";
import AdHealthPage from "./adhealth/page";
import { AdLeakLink } from "~/components/cta/AdLeakLink";
import { MatthewShoutout } from "~/components/proof/MatthewShoutout";

export default function HomePage() {
	return (
		<HydrateClient>
			<Nav />

			<main>
				{/* Hero */}

				<section className="pt-32 relative flex items-center px-4 sm:px-12 md:px-16 lg:px-24">
					<div className="max-w-7xl mx-auto w-full">
						{/* Main Content */}
						<div className="flex flex-col items-start md:items-center gap-8 mb-12">
							<h1 className="text-5xl sm:text-6xl md:text-[7vw] font-bold leading-tight text-left md:text-center">
								You've Built the Brand.{' '}
								<span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
									We Drive the Revenue.
								</span>
							</h1>

							<p className="text-lg md:text-xl lg:text-2xl max-w-2xl text-muted-foreground leading-relaxed text-left md:text-center">
								Full-service marketing that drives customers, leads, and revenue while you focus on what you do best.
							</p>

							<div className="w-full max-w-sm md:max-w-md">
								<GrowthPlanButton />
							</div>
						</div>

						{/* Testimonial - Bottom Right on Desktop */}
					</div>
				</section>
				
				<div className="absolute bottom-2 md:bottom-10 left-0 _xl:right-24">
					<MatthewShoutout />
					{/* <ClientShoutout index={1} /> */}
				</div>

				<section id="services" className="pt-52 px-4 sm:px-12 md:px-16 lg:px-24">
					<div className="relative __max-w-7xl mx-auto">
						<div className="text-center mb-20">
							<h2 className="rotate-3 text-4xl md:text-7xl font-bold mb-4">
								Growth that Works
								<span className="block mt-5 ml-12 scale-90 -rotate-6">All Funnel</span>
								<span className="block mt-5 ml-12 scale-80 rotate-6">Long</span>
							</h2>
						</div>
						<div className="absolute -right-20 bottom-[25%]">
							<AdLeakLink />
						</div>
						<ServicesFunnel />
						<div className="mx-auto max-w-xs px-6 py-12">
							<GrowthPlanButton />
							{/* <p className="w-full text-center p-4">asd</p> */}
						</div>
					</div>
				</section>

				{/* logos */}

				<section className="py-20 px-4 sm:px-12 md:px-16 lg:px-24">
					<div className="max-w-2xl mx-auto">
						<div className="text-center mb-16">
							<h2 className="text-2xl md:text-4xl font-bold mb-4">Trusted by leading scalelords {' '}
								<span className="text-muted-foreground/40">from Fortune 500 to startup hotshots</span>
							</h2>
							<p className="text-xl text-muted-foreground"></p>
						</div>
					</div>
					<LogoBar />
				</section>

				{/* tesstimonials */}
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
					<AboutWrapper />
				</section>

				{/* CTA */}
				<section className="py-32 px-4 sm:px-12 md:px-16 lg:px-24 bg-gradient-to-r from-purple-900/20 to-blue-900/20">
					<div className="max-w-4xl mx-auto text-center space-y-8">
						<h2 className="text-3xl md:text-5xl font-bold">How much is your growth worth?</h2>
						<p className="text-xl text-muted-foreground">
							Find out with a free growth plan
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