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
import { SinsOverviewSection } from './audit/SinsOverviewSection';
import { SinSectionItem } from './audit/SinSectionItem';
import { ScoreCalculator } from './audit/ScoreCalculator';
// db
import { checks } from '~/data/checklist';
import SlopFest from '../_components/dev/SlopFest';

export default function AdHealthPage() {
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);
	const [hideMockup, setHideMockup] = useState(false);

	// Detect when to hide mockup (when sins overview is in view)
	useEffect(() => {
		const handleScroll = () => {
			const sinsSection = document.getElementById('sins-overview-section');
			if (sinsSection) {
				const rect = sinsSection.getBoundingClientRect();
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

			{/* Sticky Insta Mockup - Hidden on mobile */}
			<div className="hidden __lg:block fixed bottom-0 right-[5%] z-30">
				<InstaMockup shouldHide={hideMockup} />
			</div>

			{/* Global Audit Drawer */}
			<AuditDrawerContainer
				isOpen={isDrawerOpen}
				onClose={() => setIsDrawerOpen(false)}
			/>

			{/* MAIN */}
			<main className="px-4 sm:px-12 md:px-16 lg:px-24">

				{/* hero */}
				<section className="relative h-[95vh] flex items-center">
					<HeroSection
						onOpenDrawer={() => setIsDrawerOpen(true)}
					/>
				</section>

				{/* sins - Euler */}
				<section id="sins-overview-section"
					className="py-44 max-w-7xl mx-auto"
				>
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

					<SinsOverviewSection />
				</section>

				{/* 3 sins */}
				<section className="pb-32 max-w-4xl mr-auto space-y-28">
					{checks[0] && <SinSectionItem check={checks[0]} />}
					{checks[1] && <SinSectionItem check={checks[1]} />}
					{checks[2] && <SinSectionItem check={checks[2]} />}
				</section>


				{/* pricing */}
				<section
					id="pricing"
					className="py-32 max-w-7xl mx-auto"
				>
					<div className="mb-16 text-center">
						<span className="rounded-full bg-card border p-3 font-semibold text-sm text-muted-foreground">PRICING</span>
						<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold my-6 leading-tight">
							80/20 your ad budget {' '}
							<br />
							with an <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
								expert audit
							</span>{' '}
						</h2>
					</div>
				</section>


				{/* Dev Components */}
				<SlopFest />

				<ScoreCalculator />

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