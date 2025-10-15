// src/app/adhealth/page.tsx

'use client';
import { useState } from 'react';
import { Navbar } from './_components/navigation/Navbar';
import { CurrentVisitors } from './_components/proof/CurrentVisitors';
import { HeroSection } from './_components/sections/HeroSection';
import { AuditDrawerContainer } from './_components/cta/AuditDrawerContainer';
import { AuditDrawerTrigger } from './_components/cta/AuditDrawerTrigger';

// import { FormSection } from './_components/sections/FormSection';
// import { BenefitsSection } from './_components/sections/BenefitsSection';
// import { QualificationSection } from './_components/sections/QualificationSection';
// import { TestimonialsSection } from './_components/proof/TestimonialsSection';

export default function AdHealthPage() {
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);

	return (
		<div className="min-h-screen bg-background text-foreground">
			{/* Navigation */}
			<Navbar onOpenDrawer={() => setIsDrawerOpen(true)} />
			{/* Current Visitors - Bottom Right */}
			<div className="fixed bottom-6 right-6 z-40">
				<CurrentVisitors />
			</div>

			{/* Global Audit Drawer - ONE instance */}
			{/* <AuditDrawerTrigger
				isOpen={isDrawerOpen}
				onClose={() => setIsDrawerOpen(false)}
			/> */}
			<AuditDrawerContainer
				isOpen={isDrawerOpen}
				onClose={() => setIsDrawerOpen(false)}
			/>

			{/* Main Content */}
			<main className="px-4 sm:px-12 md:px-16 lg:px-24">

				{/* Hero */}
				<HeroSection onOpenDrawer={() => setIsDrawerOpen(true)} />

				{/* Section 1: The Problem (Zigzag Left) */}
				<section className="pt-44 __py-24 max-w-6xl mx-auto text-center">
					<h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
						Where on Earth is the {' '}
						<span className="block bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
							money going?
						</span>
					</h2>
				</section>



				<section className="pt-44 __py-24 max-w-6xl mx-auto">
					<div className="grid md:grid-cols-2 gap-12 items-center">
						<div className="order-2 md:order-1">
							{/* <div className="w-full h-64 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-2xl flex items-center justify-center border border-border/50">
								<span className="text-muted-foreground">Visual placeholder</span>
							</div> */}
						</div>
						<div className="order-1 md:order-2">
							<h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
								Where on Earth is the {' '}
								<span className="sablock bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
									money going?
								</span>
							</h2>

						</div>
					</div>
				</section>
				

				{/* Section 3: Social Proof (Zigzag Left) */}
				<section className="py-36 max-w-6xl mx-auto">
					<div className="grid md:grid-cols-2 gap-12 items-center">
						<div className="order-2 md:order-1">
							<div className="w-full h-64 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-2xl flex items-center justify-center border border-border/50">
								<span className="text-muted-foreground">Visual placeholder</span>
							</div>
						</div>
						<div className="order-1 md:order-2">
							<h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
								Real brands,{' '}
								<span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
									real results
								</span>
							</h2>
							<p className="text-lg text-muted-foreground">
								We've helped 157+ brands find an average of $7,400/month in wasted ad spend.
								Gaming studios, healthcare companies, SaaS brands - all seeing immediate ROI.
							</p>
						</div>
					</div>
				</section>

				{/* Commented out sections - bring back as needed */}
				{/* <OutcomesSection /> */}
				{/* <FormSection /> */}
				{/* <BenefitsSection /> */}
				{/* <QualificationSection /> */}
				{/* <TestimonialsSection /> */}

			</main>

			{/* Footer */}
			<footer className="bg-card/50 border-t border-border py-8 mt-24">
				<div className="container mx-auto px-4 text-center">
					<p className="text-sm text-muted-foreground">
						2025 © Louka Digital Ltd | All Rights Reserved
					</p>
				</div>
			</footer>
		</div>
	);
}