// src/app/adhealth/_components/sections/HeroSection.tsx

import { Calendar } from 'lucide-react';
import { LiquidLeakText } from '../../leak/LiquidLeakText';
// import { LiquidLeakText } from '../_componentsLiquidLeakText';
import { AvailabilityBar } from '../navigation/AvailabilityBar';
import { ForFreeArrow } from '../cta/ForFreeArrow';
import { AuditDrawerTrigger } from '../cta/AuditDrawerTrigger';
import { AuditDrawerContainer } from '../cta/AuditDrawerContainer';
import { LogoShoutouts } from '../proof/LogoShoutouts';
import { PlatformIcons } from '../ui/PlatformIcons';
import { DeliveryTime } from '../../pricing/DeliveryTime';
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

			<PlatformIcons />
			{/* Main Content */}
			<div className="relative mt-42 flex flex-col items-center gap-8 mx-auto w-full">
				{/* Main Headline */}
				<h1 className="flex flex-col gap-1 text-4xl md:text-6xl lg:text-7xl font-extrabold text-center">
					<span className="text-7xl bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
						Figure Out & Fix
					</span>
					<br />
					<span className="-mb-2 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
						Your Monthly Meta
					</span>
					<br />
					{/* <FluidCanvas>Ad Spend Leak</FluidCanvas> */}
					<LiquidLeakText>
						Ad Spend Leak
					</LiquidLeakText>
				</h1>
				
				<div className="absolute right-[10%] bottom-[0%] rotate-12">
					<DeliveryTime />
					{/* <ForFreeArrow />	 */}
				</div>

				{/* CTA Button Container with Arrow */}
				<div className="flex flex-col gap-6 md:flex-row items-center justify-center relative w-full max-w-[16em] md:max-w-[28em]">
					{/* FOR FREE Arrow */}
					<div className="max-w-sm">
						<AuditDrawerTrigger badge="price" onOpen={onOpenDrawer} />
					</div>
					{/* Main CTA Button */}
					{/* <AuditDrawerTrigger badge="spots" spotsLeft={7} onOpen={onOpenDrawer} />	 */}
					{/* <AuditDrawerTrigger variant="full" onOpen={onOpenDrawer} /> */}
					{/* <AuditDrawerTrigger badge="free" onOpen={onOpenDrawer} /> */}
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