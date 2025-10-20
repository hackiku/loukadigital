// @ts-nocheck
// src/app/adleak/sections/HeroSection.tsx

import { Calendar } from 'lucide-react';

// cta
import { AuditDrawerTrigger } from '../_components/cta/AuditDrawerTrigger';
import { AvailabilityBar } from '../pricing/AvailabilityBar';
import { DeliveryTime } from '../pricing/DeliveryTime';

// ui
import { LiquidLeakText } from '../_components/ui/LiquidLeakText';
import { LogoShoutouts } from '../_components/proof/LogoShoutouts';
import { PlatformIcons } from '../_components/ui/PlatformIcons';

interface HeroSectionProps {
	onOpenDrawer: () => void;
}

export function HeroSection({ onOpenDrawer }: HeroSectionProps) {
	return (
		<div className="relative w-full h-full">
			{/* Bottom left testimonials - desktop only */}
			<div className="absolute bottom-0 left-0 z-10 hidden md:block max-w-sm">
				<LogoShoutouts />
			</div>

			{/* Floating platform icons */}
			<PlatformIcons />

			{/* Main Content */}
			<div className="relative mt-42 flex flex-col items-center gap-8 mx-auto w-full">
				{/* Main Headline */}
				<h1 className="flex flex-col gap-1 text-4xl md:text-6xl lg:text-7xl font-extrabold text-center">
					<span className="text-5xl md:text-7xl bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
						Figure Out & Fix
					</span>
					<br />
					<span className="-mb-2 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
						Your Monthly Meta
					</span>
					<br />
					<LiquidLeakText>Ad Spend Leak</LiquidLeakText>
				</h1>

				{/* CTA Button Container */}
				<div className="flex flex-col gap-6 md:flex-row items-center justify-center relative w-full max-w-[16em] md:max-w-[28em]">
					<div className="max-w-[17em] w-full" id="hero-cta-button">
						<AuditDrawerTrigger badge="price" onOpen={onOpenDrawer} />
					</div>
				</div>

				{/* Delivery Time Badge - positioned below button on mobile, floating on desktop */}
				<div className="relative md:absolute md:right-[5%] md:-bottom-[20%] mt-4 md:mt-0">
					<DeliveryTime targetButtonId="hero-cta-button" />
				</div>

				{/* Mobile testimonials */}
				<div className="md:hidden mt-8">
					<LogoShoutouts />
				</div>
			</div>
		</div>
	);
}