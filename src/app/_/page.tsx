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
import { SinSectionItem } from './audit/sins/SinSectionItem';
import { ScoreCalculator } from './audit/calculator/legacy_ScoreCalculator';
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
		<div className="min-h-screen bg-background text-foreground overflow-x-hidden">

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
			{/* <div className="hidden lg:block fixed bottom-0 right-[5%] z-30">
				<InstaMockup shouldHide={hideMockup} />
			</div> */}



			{/* MAIN */}
			<main className="px-4 sm:px-12 md:px-16 lg:px-24">

				{/* hero */}
				<section className="relative h-[95vh] flex items-center">
					<HeroSection
						onOpenDrawer={() => setIsDrawerOpen(true)}
					/>
				</section>

				{/* sins - Euler */}
				<section id="sins"
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

					<p className="flex-nowrap text-xl leading-12 md:text-3xl text-muted-foreground max-w-lg mx-auto">
						Most ad accounts leak
						<span className="m-1 px-3 py-1 bg-red-500/20 border-2 border-red-500/40 rounded-full
							text-2xl md:text-2xl font-bold text-red-400">
							30-40%
						</span>
						ad budget on easy to fix 
					</p>

					<div className="bg-background/90 backdrop-blur-md rounded-2xl p-8 border-2 border-foreground/10 shadow-2xl">
						<div className="text-xl md:text-2xl font-bold text-foreground mb-4">
							find out with the
						</div>
						<div className="text-4xl font-black text-foreground mb-3">
							7 Sins of Meta Ads
						</div>
						{/* <p className="text-base text-muted-foreground">
							Which ones may you have?{' '}
						</p> */}
					</div>

				</section>

				<section 
					id="checklist"
					className="min-h-screen">
					<AdAudit />
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