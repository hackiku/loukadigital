// src/app/adhealth/page.tsx

import { ScarcityBanner } from './_components/ui/ScarcityBanner';
import { HeroSection } from './_components/sections/HeroSection';
import { OutcomesSection } from './_components/sections/OutcomesSection';
import { FormSection } from './_components/sections/FormSection';
import { BenefitsSection } from './_components/sections/BenefitsSection';
import { QualificationSection } from './_components/sections/QualificationSection';
import { TestimonialsSection } from './_components/proof/TestimonialsSection';
import { MobileStickyCTA } from './_components/ui/MobileStickyCTA';

export default function AdHealthPage() {
	return (
		<div className="min-h-screen bg-black text-white">
			<ScarcityBanner />

			<a
				href="/"
				className="fixed top-16 left-4 z-40 block group"
				aria-label="Louka Digital"
			>
				<div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center font-bold text-black text-xs md:text-sm hover:scale-110 transition-transform shadow-lg">
					LOUKA
				</div>
			</a>

			<main className="pt-24 pb-20 md:pb-8">
				<HeroSection />
				<OutcomesSection />
				<FormSection />
				<BenefitsSection />
				<QualificationSection />
				<TestimonialsSection />
			</main>

			<MobileStickyCTA />

			<footer className="bg-purple-300 text-black py-8">
				<div className="container mx-auto px-4">
					<div className="text-center mb-6">
						<p className="font-bold text-sm md:text-base">
							2025 © | Copyright by Louka Digital Ltd | All Rights Reserved |
							<a className="text-black hover:underline ml-1 mr-1" href="/privacy">Privacy Policy</a> |
							<a className="text-black hover:underline ml-1" href="/terms">Terms</a>
						</p>
					</div>
					<div className="max-w-4xl mx-auto">
						<div className="text-xs text-gray-700 leading-relaxed text-center">
							<p>
								The ad account audit and recommendations provided are based on the information you submit.
								Results and savings potential are estimates and not guarantees. Actual performance improvements
								will vary based on implementation, market conditions, and other factors beyond our control.
							</p>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
}

export const metadata = {
	title: 'Free Ad Health Audit - Find Out How Much You\'re Losing | Louka Digital',
	description: 'Get a free expert analysis of your Meta ad account. 90 seconds to request, results in 48 hours, 100% confidential.',
};