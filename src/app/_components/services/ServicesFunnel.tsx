// @ts-nocheck
// src/app/_components/services/ServicesFunnel.tsx
'use client';

import { services } from '~/data/services';

// Floating feature pills inside funnel
function FeaturePill({ feature, index }: { feature: string; index: number }) {
	const positions = [
		{ top: '15%', right: '8%', delay: 0 },
		{ top: '35%', right: '12%', delay: 0.5 },
		{ top: '55%', right: '6%', delay: 1 },
		{ bottom: '20%', right: '10%', delay: 1.5 },
	];

	const pos = positions[index % positions.length];

	return (
		<div
			className="absolute hidden lg:block pointer-events-none animate-float-pill"
			style={{
				...pos,
				animationDelay: `${pos.delay}s`,
			}}
		>
			<div className="px-3 py-1.5 rounded-lg bg-white/15 backdrop-blur-md border border-white/25 shadow-lg">
				<p className="text-xs font-medium text-white whitespace-nowrap drop-shadow">
					{feature}
				</p>
			</div>
		</div>
	);
}

// Individual funnel section
function FunnelSection({
	service,
	index,
	isLast
}: {
	service: typeof services[0];
	index: number;
	isLast: boolean;
}) {
	const isEven = index % 2 === 0;

	// Liquid colors for each section
	const liquidColors = [
		'rgba(147, 51, 234, 0.35)', // purple
		'rgba(59, 130, 246, 0.35)',  // blue
		'rgba(236, 72, 153, 0.35)',  // pink
		'rgba(34, 197, 94, 0.35)',   // green
	];

	const topColor = liquidColors[index] || liquidColors[0];
	const bottomColor = liquidColors[index + 1] || liquidColors[index];

	return (
		<div className="relative">
			{/* Main liquid section */}
			<div
				className="relative py-6 px-8 md:px-[20%]"
				style={{
					background: topColor,
				}}
			>
				{/* Content */}
				<div className={`max-w-5xl mx-auto grid lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:grid-flow-dense' : ''}`}>
					{/* Text */}
					<div className={`relative z-20 ${!isEven ? 'lg:col-start-2' : ''}`}>
						<h3 className="text-3xl md:text-4xl font-bold mb-4 text-white drop-shadow-lg">
							{service.title}
						</h3>
						<p className="text-lg text-white/95 leading-relaxed drop-shadow">
							{service.description}
						</p>

						{/* Features list on mobile */}
						<ul className="mt-6 space-y-2 lg:hidden">
							{service.features.map((feature) => (
								<li key={feature} className="flex items-center gap-2 text-white/90">
									<div className="w-1.5 h-1.5 rounded-full bg-white/60" />
									<span className="text-sm drop-shadow">{feature}</span>
								</li>
							))}
						</ul>
					</div>

					{/* Floating pills - desktop only */}
					<div className={`relative h-64 ${isEven ? 'lg:col-start-2' : 'lg:col-start-1'}`}>
						{service.features.map((feature, featureIndex) => (
							<FeaturePill key={feature} feature={feature} index={featureIndex} />
						))}
					</div>
				</div>

				{/* Top wave */}
				<svg
					className="absolute top-0 left-0 w-full"
					style={{ height: '60px', transform: 'translateY(-30px)' }}
					viewBox="0 0 1200 60"
					preserveAspectRatio="none"
				>
					<path
						fill={topColor}
						d="M0,30 Q200,15 400,30 T800,30 T1200,30 L1200,60 L0,60 Z"
					>
						<animate
							attributeName="d"
							dur="4s"
							repeatCount="indefinite"
							values="
                M0,30 Q200,15 400,30 T800,30 T1200,30 L1200,60 L0,60 Z;
                M0,30 Q200,45 400,30 T800,30 T1200,30 L1200,60 L0,60 Z;
                M0,30 Q200,15 400,30 T800,30 T1200,30 L1200,60 L0,60 Z
              "
						/>
					</path>
				</svg>
			</div>

			{/* Mixing boundary layer */}
			{!isLast && (
				<div
					className="relative h-24 overflow-hidden"
					style={{
						background: `linear-gradient(180deg, ${topColor} 0%, ${bottomColor} 100%)`,
					}}
				>
					{/* Turbulent mixing animation */}
					<div
						className="absolute inset-0"
						style={{
							background: `radial-gradient(ellipse at center, ${bottomColor} 30%, transparent 70%)`,
							animation: 'turbulence 3s ease-in-out infinite',
						}}
					/>

					{/* Mixing particles */}
					<div
						className="absolute w-3 h-3 bg-white/20 rounded-full blur-sm"
						style={{
							left: '20%',
							top: '40%',
							animation: 'mix1 4s ease-in-out infinite',
						}}
					/>
					<div
						className="absolute w-2 h-2 bg-white/15 rounded-full blur-sm"
						style={{
							left: '60%',
							top: '60%',
							animation: 'mix2 5s ease-in-out infinite 1s',
						}}
					/>
					<div
						className="absolute w-2.5 h-2.5 bg-white/15 rounded-full blur-sm"
						style={{
							left: '80%',
							top: '30%',
							animation: 'mix1 4.5s ease-in-out infinite 0.5s',
						}}
					/>
				</div>
			)}

			<style jsx>{`
        @keyframes turbulence {
          0%, 100% {
            transform: translateX(0) scale(1);
            opacity: 0.6;
          }
          50% {
            transform: translateX(10px) scale(1.1);
            opacity: 0.8;
          }
        }

        @keyframes mix1 {
          0%, 100% {
            transform: translate(0, 0);
            opacity: 0.2;
          }
          50% {
            transform: translate(20px, -10px);
            opacity: 0.4;
          }
        }

        @keyframes mix2 {
          0%, 100% {
            transform: translate(0, 0);
            opacity: 0.15;
          }
          50% {
            transform: translate(-15px, 10px);
            opacity: 0.35;
          }
        }

        @keyframes float-pill {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        :global(.animate-float-pill) {
          animation: float-pill 3s ease-in-out infinite;
        }
      `}</style>
		</div>
	);
}

// Main funnel container
export function ServicesFunnel() {
	return (
		<div className="relative max-w-6xl mx-auto">
			{/* Funnel shape container */}
			<div
				className="relative overflow-visible "
				style={{
					clipPath: 'polygon(10% 0%, 90% 0%, 80% 100%, 20% 100%)',
				}}
			>
			{/* <div
				className="relative"
				style={{
					transform: 'perspective(300px) rotateX(-2deg)',
					transformStyle: 'preserve-3d',
				}}
			> */}
				<div className="rounded-3xl overflow-hidden border border-border/30">
					{services.map((service, index) => (
						<FunnelSection
							key={service.id}
							service={service}
							index={index}
							isLast={index === services.length - 1}
						/>
					))}
				</div>
			</div>
		</div>
	);
}