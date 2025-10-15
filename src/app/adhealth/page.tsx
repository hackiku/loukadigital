// src/app/adhealth/page.tsx

"use client";
import { useState, useEffect } from 'react';
// ui
import { Navbar } from './_components/navigation/Navbar';
import { AuditDrawerContainer } from './_components/cta/AuditDrawerContainer';
import { AuditDrawerTrigger } from './_components/cta/AuditDrawerTrigger';
import { CurrentVisitors } from './_components/proof/CurrentVisitors';
import { InstaMockup } from './audit/InstaMockup';
// content
import { HeroSection } from './_components/sections/HeroSection';
import { ChecklistOverview } from './audit/ChecklistOverview';
import { ScoreCalculator } from './audit/ScoreCalculator';
import { WasteEstimator } from './audit/WasteEstimator';
import { ResultsProof } from './audit/ResultsProof';
import { SinSectionItem } from './audit/SinSectionItem';
import { AdFormatsCarousel } from './audit/AdFormatsCarousel';
// db
import { checks } from '~/data/checklist';

export default function AdHealthPage() {
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);
	const [hideMockup, setHideMockup] = useState(false);

	// Get first 7 checks for the sins
	const sins = checks.slice(0, 7);

	// Detect when to hide mockup (when creative fatigue section is in view)
	useEffect(() => {
		const handleScroll = () => {
			const creativeFatigueSection = document.getElementById('creative-fatigue-section');
			if (creativeFatigueSection) {
				const rect = creativeFatigueSection.getBoundingClientRect();
				const windowHeight = window.innerHeight;
				// Hide when section enters viewport
				setHideMockup(rect.top < windowHeight && rect.bottom > 0);
			}
		};

		window.addEventListener('scroll', handleScroll, { passive: true });
		handleScroll(); // Initial call
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<div className="min-h-screen bg-background text-foreground">

			{/* Navigation */}
			<Navbar onOpenDrawer={() => setIsDrawerOpen(true)} />

			{/* Current Visitors - Bottom Right */}
			<div className="fixed bottom-6 right-6 z-40">
				<CurrentVisitors />
			</div>

			{/* Sticky Instagram Mockup - Hidden on mobile */}
			<div className="hidden lg:block fixed bottom-0 right-[5%] z-30">
				<InstaMockup shouldHide={hideMockup} />
			</div>

			{/* Global Audit Drawer */}
			<AuditDrawerContainer
				isOpen={isDrawerOpen}
				onClose={() => setIsDrawerOpen(false)}
			/>

			{/* Main Content */}
			<main className="px-4 sm:px-12 md:px-16 lg:px-24">

				{/* HERO SECTION */}
				<section className="relative _py-32 _md:py-40 h-[90vh] flex items-center">
					<HeroSection
						onOpenDrawer={() => setIsDrawerOpen(true)}
					/>
				</section>

				{/* WHERE IS THE INSTA MONEY GOING? */}
				<section id="where-money-section" className="py-24 max-w-6xl mx-auto">
					<h2 className="text-4xl md:text-5xl lg:text-5xl font-bold mb-6 leading-tight">
						Where on Earth does the{' '}
						<br />
						<span className="mt-2 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
							Insta Ad money
						</span>{' '}go?
					</h2>
					<p className="text-2xl md:text-3xl text-muted-foreground max-w-3xl">
						Most accounts leak 30-40% on overlap, fatigue & dead placements.
						<br />
						<strong className="text-foreground text-3xl md:text-4xl">£7,400/month</strong> gone without a trace.
					</p>
				</section>

				{/* FIRST 3 SINS - Left side while mockup is sticky right */}
				<section className="py-12 max-w-4xl mr-auto space-y-8">
					<SinSectionItem check={checks[0]} />
					<SinSectionItem check={checks[1]} />
					<SinSectionItem check={checks[2]} />
				</section>

				{/* AD FORMATS CAROUSEL + CTA */}
				<section id="creative-fatigue-section" className="py-24 max-w-6xl mx-auto">
					<div className="text-center mb-12">
						<h2 className="text-3xl md:text-4xl font-bold mb-4">
							{checks[4].name}
						</h2>
						<p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
							{checks[4].tagline}
						</p>
					</div>

					<AdFormatsCarousel />

					<div className="flex justify-center mt-12">
						<div className="max-w-sm w-full">
							<AuditDrawerTrigger
								badge="spots"
								spotsLeft={7}
								onOpen={() => setIsDrawerOpen(true)}
							/>
						</div>
					</div>
				</section>

				<section className="relative h-[80vh] rounded-3xl overflow-hidden flex items-center justify-center my-24">
					{/* 45deg Striped Background */}
					<div
						className="absolute inset-0 bg-card/20"
						style={{
							backgroundImage: `repeating-linear-gradient(
				45deg,
				transparent,
				transparent 20px,
				rgba(255, 255, 255, 0.03) 20px,
				rgba(255, 255, 255, 0.03) 40px
			)`
						}}
					/>
					<h2 className="relative z-10 text-[5rem] font-thin tracking-wider text-muted-foreground/20"
						style={{ fontWeight: 100 }}>
						SLOPFEST</h2>
				</section>

				{/* THE 7 CHECKS */}
				<section className="py-24 max-w-6xl mx-auto">
					<ChecklistOverview />
				</section>

				{/* WASTE ESTIMATOR */}
				<section className="py-24 max-w-4xl mx-auto">
					<WasteEstimator />
				</section>

				{/* SCORE CALCULATOR */}
				<section className="py-24 max-w-4xl mx-auto">
					<ScoreCalculator />
				</section>

				{/* RESULTS & PROOF */}
				<section className="py-24 max-w-6xl mx-auto">
					<ResultsProof />
				</section>

				{/* SOCIAL PROOF SECTION */}
				<section className="py-24 max-w-6xl mx-auto">
					<div className="text-center mb-12">
						<h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
							Real brands,{' '}
							<span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
								real results
							</span>
						</h2>
						<p className="text-lg text-muted-foreground">
							We've helped 200+ brands find an average of £7,400/month in wasted ad spend.
							<br />
							Gaming studios, healthcare companies, SaaS brands - all seeing immediate ROI.
						</p>
					</div>
				</section>

				{/* FINAL CTA */}
				<section className="py-24 max-w-4xl mx-auto text-center">
					<div className="p-8 md:p-12 rounded-2xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 border-2 border-purple-500/30">
						<h2 className="text-3xl md:text-5xl font-bold mb-4">
							Ready to Find Your{' '}
							<span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
								£7K+ Monthly Leak?
							</span>
						</h2>
						<p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
							Get a free expert audit delivered in 48 hours. No fluff, just actionable fixes.
						</p>
						<button
							onClick={() => setIsDrawerOpen(true)}
							className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-bold rounded-xl transition-all hover:scale-105 shadow-lg text-lg"
						>
							Book Your Free Audit →
						</button>
						<p className="text-sm text-muted-foreground mt-4">
							<span className="inline-flex items-center gap-2">
								<span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
								157 audits completed this month
							</span>
						</p>
					</div>
				</section>

			</main>

			{/* FOOTER */}
			<footer className="rounded-lg bg-gradient-to-br from-[#FEC5E2] to-[#81B3CA] m-5 p-8 md:p-12 mt-24">
				<div className="max-w-6xl mx-auto">
					<h2 className="text-5xl md:text-7xl font-extrabold mb-4">LOUKA.</h2>
					<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
						<p className="text-sm text-gray-700">
							2025 © Louka Digital Ltd | All Rights Reserved
						</p>
						<div className="flex gap-6 text-sm text-gray-700">
							<a href="/privacy" className="hover:text-gray-900 transition-colors">
								Privacy
							</a>
							<a href="/terms" className="hover:text-gray-900 transition-colors">
								Terms
							</a>
							<a href="/contact" className="hover:text-gray-900 transition-colors">
								Contact
							</a>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
}