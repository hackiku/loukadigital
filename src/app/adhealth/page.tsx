// src/app/adhealth/page.tsx
import { CheckCircle } from 'lucide-react';
// ui
import { ScarcityBanner } from './_components/ui/ScarcityBanner';
import { AdHealthNavbar } from './_components/ui/AdHealthNavbar';
import { MobileStickyCTA } from './_components/ui/MobileStickyCTA';
import { AdHealthFooter } from './_components/ui/AdHealthFooter';
// sections
import { HeroSection } from './_components/sections/HeroSection';
import { OutcomesSection } from './_components/sections/OutcomesSection';
import { FormSection } from './_components/sections/FormSection';
import { BenefitsSection } from './_components/sections/BenefitsSection';
import { QualificationSection } from './_components/sections/QualificationSection';
import { TestimonialsSection } from './_components/proof/TestimonialsSection';
import { AuditDrawer } from './_components/cta/AuditDrawer';


export default function AdHealthPage() {
	return (
		<div className="min-h-screen bg-black text-white">
			<ScarcityBanner />

			<AdHealthNavbar />

			<main className="px-4 sm:px-12 md:px-16 lg:px-24">
			
				<HeroSection />
				<section className="pt-42">
					<div className="flex flex-col items-center gap-4 mx-auto max-w-4xl text-center">
						<span className="rounded-full bg-card/20 px-4 py-1 max-w-40">Ad Health</span>
						<h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
							Find your monthly <span className="block bg-accent-foreground/20 rounded-xl">ad spend leak</span>
						</h1>
						<p className="text-lg md:text-2xl text-gray-300 mb-6">
							Free expert analysis of your ad accounts
						</p>

						<AuditDrawer />
					</div>
				</section>

				<section className="pt-42">
					
					<div className="flex flex-col items-center gap-4 mx-auto max-w-4xl text-center">
						<h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
							Where's the money {' '}
							<span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
								actually going?
							</span>
						</h2>
					</div>
				</section>
			
				{/* <OutcomesSection /> */}
				<FormSection />
				<BenefitsSection />
				<QualificationSection />
				<TestimonialsSection />
			</main>

			<MobileStickyCTA />

			<AdHealthFooter />
			
		</div>
	);
}

export const metadata = {
	title: 'Free Ad Health Audit - Find Out How Much You\'re Losing | Louka Digital',
	description: 'Get a free expert analysis of your Meta ad account. 90 seconds to request, results in 48 hours, 100% confidential.',
};