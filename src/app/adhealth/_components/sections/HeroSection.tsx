// src/app/adhealth/_components/sections/HeroSection.tsx

import { Calendar } from 'lucide-react';
import { LiquidLeakText } from '../../leak/LiquidLeakText';
// import { LiquidLeakText } from '../_componentsLiquidLeakText';
import { BubbleTestimonial } from '../proof/BubbleTestimonial';
import { AvailabilityBar } from '../navigation/AvailabilityBar';
import { ForFreeArrow } from '../cta/ForFreeArrow';
import { AuditDrawerTrigger } from '../cta/AuditDrawerTrigger';
import { AuditDrawerContainer } from '../cta/AuditDrawerContainer';
// import { ForFreeArrow } from './ForFreeArrow';

interface HeroSectionProps {
	onOpenDrawer: () => void;
}

export function HeroSection({ onOpenDrawer }: HeroSectionProps) {
	return (
		<section className="relative pt-32 md:pt-40  min-h-[80vh] flex items-center">
			{/* Bubble Testimonial - Bottom Left */}
			<div className="absolute -bottom-16 left-2 z-10 hidden md:block">
				<BubbleTestimonial />
			</div>

			{/* Main Content */}
			<div className="relative flex flex-col items-start gap-8 mx-auto w-full px-4">
				{/* Main Headline */}
				<h1 className="text-4xl md:text-6xl lg:text-6xl font-extrabold">
					<span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
						Figure out & fix
					</span>
					<br />
					<LiquidLeakText>ad spend leak</LiquidLeakText>
					<br />
					<span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
						monthly
					</span>
				</h1>
				
				<div className="fixed right-[40%] bottom-[50%] rotate-90">
					<ForFreeArrow />	
				</div>

				{/* CTA Button Container with Arrow */}
				<div className="flex flex-col gap-6 md:flex-row items-center justify-center relative w-full max-w-[16em] md:max-w-[28em]">
					{/* FOR FREE Arrow */}

					{/* Main CTA Button */}
					<AuditDrawerTrigger variant="full" onOpen={onOpenDrawer} />

					{/* Availability Bar */}
					{/* <div className="mt-4"> */}
						<AvailabilityBar />
					{/* </div> */}
				</div>

				{/* Mobile Testimonial */}
				<div className="md:hidden mt-8">
					<BubbleTestimonial />
				</div>
			</div>
		</section>
	);
}