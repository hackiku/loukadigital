// src/app/adhealth/_components/sections/HeroSection.tsx

import { Calendar } from 'lucide-react';
import { LiquidLeakText } from '../../leak/LiquidLeakText';
// import { LiquidLeakText } from '../_componentsLiquidLeakText';
import { BubbleTestimonial } from '../proof/BubbleTestimonial';
import { AvailabilityBar } from '../navigation/AvailabilityBar';
import { ForFreeArrow } from '../cta/ForFreeArrow';
import { AuditDrawerTrigger } from '../cta/AuditDrawerTrigger';
import { AuditDrawerContainer } from '../cta/AuditDrawerContainer';
import { LogoShoutouts } from '../proof/LogoShoutouts';
// import { ForFreeArrow } from './ForFreeArrow';

interface HeroSectionProps {
	onOpenDrawer: () => void;
}

export function HeroSection({ onOpenDrawer }: HeroSectionProps) {
	return (
		<div className="relative w-full h-full">
			
			<div className="absolute bottom-0 left-0 z-10 hidden md:block max-w-sm">
				<LogoShoutouts />
			</div>

			{/* Main Content */}
			<div className="relative mt-42 flex flex-col items-center gap-8 mx-auto w-full">
				{/* Main Headline */}
				<h1 className="text-4xl md:text-6xl lg:text-6xl font-extrabold text-center">
					<span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
						Find & Plug Your Monthly
					</span>
					<br />
					<LiquidLeakText>Ad Spend Leak</LiquidLeakText>
					<br />
					{/* <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
						monthly
					</span> */}
				</h1>
				
				<div className="absolute right-[30%] bottom-[55%] rotate-90">
					<ForFreeArrow />	
				</div>

				{/* CTA Button Container with Arrow */}
				<div className="flex flex-col gap-6 md:flex-row items-center justify-center relative w-full max-w-[16em] md:max-w-[28em]">
					{/* FOR FREE Arrow */}
					<div className="max-w-sm">
						<AuditDrawerTrigger badge="spots" spotsLeft={7} onOpen={onOpenDrawer} />	
					</div>
					{/* Main CTA Button */}
					{/* <AuditDrawerTrigger variant="full" onOpen={onOpenDrawer} /> */}
					{/* <AuditDrawerTrigger badge="free" onOpen={onOpenDrawer} /> */}
					{/* <AuditDrawerTrigger badge="price" onOpen={onOpenDrawer} /> */}
					{/* <AuditDrawerTrigger badge="none" onOpen={onOpenDrawer} /> */}

					{/* <AvailabilityBar /> */}
				</div>

				{/* mobile testimonial */}
				<div className="md:hidden mt-8">
					<LogoShoutouts />
				</div>
			</div>
		</div>
	);
}