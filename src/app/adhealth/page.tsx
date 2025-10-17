// src/app/adhealth/page.tsx

"use client";
import { useState, useEffect } from 'react';
// layout
import Navbar from './_components/navigation/Navbar';
import Footer from './_components/navigation/Footer';
import { AuditDrawerContainer } from './_components/cta/AuditDrawerContainer';
import { CurrentVisitors } from './_components/proof/CurrentVisitors';
// content
import { HeroSection } from './_components/content/HeroSection';
import { InstaMockup } from './samples/InstaMockup';
import SlopFest from '../_components/dev/SlopFest';
// audit
import { SinsOverviewSection } from './audit/sins/SinsOverviewSection';
import { SinSectionItem } from './audit/sins/SinSectionItem';
import { ScoreCalculator } from './audit/calculator/ScoreCalculator';
// db
import { checks } from '~/data/checklist';
import { AdAudit } from './audit/AdAudit';

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

			{/* nav */}
			<Navbar onOpenDrawer={() => setIsDrawerOpen(true)} />

			{/* cta */}
			<AuditDrawerContainer
				isOpen={isDrawerOpen}
				onClose={() => setIsDrawerOpen(false)}
			/>

			{/* viewers */}
			<div className="fixed bottom-6 right-6 z-40">
				<CurrentVisitors />
			</div>

			{/* insta ad - hidden mobile */}
			<div className="hidden __lg:block fixed bottom-0 right-[5%] z-30">
				<InstaMockup shouldHide={hideMockup} />
			</div>


			{/* MAIN */}
			<main className="px-4 sm:px-12 md:px-16 lg:px-24">

				{/* hero */}
				<section className="relative h-[95vh] flex items-center">
					<HeroSection
						onOpenDrawer={() => setIsDrawerOpen(true)}
					/>
				</section>

				<AdAudit />
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

			</main>

			{/* FOOTER */}
			<Footer />
		</div>
	);
}