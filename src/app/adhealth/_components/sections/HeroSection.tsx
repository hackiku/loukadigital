// src/app/adhealth/_components/sections/HeroSection.tsx

import { AuditDrawerTrigger } from '../cta/AuditDrawerTrigger';
import { BubbleTestimonial } from '../proof/BubbleTestimonial';

// Liquid text component - aquarium style
function LiquidText({ children }: { children: string }) {
	return (
		<span className="relative inline-block px-6 py-3 rounded-xl overflow-hidden">
			{/* Background container - the aquarium glass */}
			<span
				className="absolute inset-0 rounded-xl"
				style={{
					background: 'linear-gradient(180deg, rgba(239, 68, 68, 0.1) 0%, rgba(249, 115, 22, 0.15) 100%)',
					backdropFilter: 'blur(8px)',
				}}
			/>

			{/* Liquid fill - static wavy shape */}
			<svg
				className="absolute inset-0 w-full h-full"
				viewBox="0 0 200 100"
				preserveAspectRatio="none"
				style={{ opacity: 0.4 }}
			>
				<defs>
					<linearGradient id="liquidGrad" x1="0%" y1="0%" x2="0%" y2="100%">
						<stop offset="0%" stopColor="rgb(239, 68, 68)" stopOpacity="0.6" />
						<stop offset="100%" stopColor="rgb(249, 115, 22)" stopOpacity="0.8" />
					</linearGradient>
				</defs>
				{/* Water surface with natural wave */}
				<path
					d="M 0,35 
             C 20,32 40,38 60,35
             S 100,32 120,35
             S 160,38 180,35
             L 200,35
             L 200,100
             L 0,100
             Z"
					fill="url(#liquidGrad)"
				/>
				{/* Light refraction effect */}
				<ellipse
					cx="60"
					cy="50"
					rx="25"
					ry="15"
					fill="white"
					opacity="0.1"
				/>
				<ellipse
					cx="140"
					cy="60"
					rx="30"
					ry="18"
					fill="white"
					opacity="0.08"
				/>
			</svg>

			{/* Text with gradient */}
			<span
				className="relative z-10 font-extrabold"
				style={{
					background: 'linear-gradient(180deg, rgb(248, 113, 113) 0%, rgb(251, 146, 60) 100%)',
					WebkitBackgroundClip: 'text',
					WebkitTextFillColor: 'transparent',
					backgroundClip: 'text',
				}}
			>
				{children}
			</span>
		</span>
	);
}

interface HeroSectionProps {
	onOpenDrawer: () => void;
}

export function HeroSection({ onOpenDrawer }: HeroSectionProps) {
	return (
		<section className="relative pt-42 md:pt-46 pb-12">

			<div className="absolute border rounded-full h-32 w-32 bottom-10 left-8">
				{/* <BubbleTestimonial /> */}
				<span>img</span>
			
			</div>

			<div className="flex flex-col items-center gap-4 mx-auto max-w-4xl text-center">

				<h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4">
					<span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
						Figure out monthly {' '}
					</span>
					<LiquidText>ad spend leak</LiquidText>
					{/* <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
						monthly
					</span> */}
				</h1>


				<div className="w-full max-w-[18em]">
					<AuditDrawerTrigger variant="full" onOpen={onOpenDrawer} />
				</div>
				<p className="text-lg md:text-xl text-muted-foreground/70 mb-6 max-w-2xl">
					Free expert analysis of your ad accounts
				</p>
			</div>
		</section>
	);
}