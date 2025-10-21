// src/app/adhealth/_components/ui/LiquidLeakText.tsx
'use client';
import { useState, useEffect } from 'react';

interface LiquidLeakTextProps {
	children: string;
	className?: string;
}

export function LiquidLeakText({ children, className = '' }: LiquidLeakTextProps) {
	const [mounted, setMounted] = useState(false);
	const [uniqueId] = useState(() => `liquid-${Date.now()}-${Math.random().toString(36).slice(2, 11)}`);

	const borderRadius = '1rem';

	useEffect(() => {
		setMounted(true);
	}, []);

	// Render static version on server to prevent hydration mismatch
	if (!mounted) {
		return (
			<span
				className={`border border-muted-foreground/30 relative inline-block px-8 py-4 overflow-hidden ${className}`}
				style={{ borderRadius }}
			>
				<span className="relative z-10 font-extrabold text-foreground/50">
					{children}
				</span>
			</span>
		);
	}

	return (
		<span
			className={`border border-muted-foreground/30 relative inline-block px-8 py-4 overflow-hidden ${className}`}
			style={{ borderRadius }}
		>
			{/* Container with subtle glass effect */}
			<span
				className="absolute inset-0 bg-neutral-500/10 backdrop-blur-sm"
				style={{ borderRadius }}
			/>

			{/* Liquid layer - smooth gradient fill from bottom */}
			<span
				className="absolute inset-0 overflow-hidden"
				style={{ borderRadius }}
			>
				{/* Main liquid body - uniform with subtle gradient */}
				<span
					className="absolute inset-x-0 bottom-0"
					style={{
						height: '65%',
						background: 'linear-gradient(180deg, rgba(239, 68, 68, 0.75) 0%, rgba(249, 115, 22, 0.85) 50%, rgba(249, 115, 22, 0.95) 100%)',
						backdropFilter: 'blur(8px)',
						borderRadius: `0 0 ${borderRadius} ${borderRadius}`,
					}}
				>
					{/* First wave */}
					<svg
						className="absolute top-0 left-0 w-full"
						style={{ height: '45px', transform: 'translateY(-25px)' }}
						viewBox="0 0 1200 50"
						preserveAspectRatio="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<defs>
							<linearGradient id={`waveGradient-${uniqueId}`} x1="0%" y1="0%" x2="0%" y2="100%">
								<stop offset="0%" stopColor="rgba(239, 68, 68, 0.6)" />
								<stop offset="100%" stopColor="rgba(249, 115, 22, 0.1)" />
							</linearGradient>
						</defs>

						<path
							fill={`url(#waveGradient-${uniqueId})`}
							d="M0,25 Q300,10 600,25 T1200,25 L1200,50 L0,50 Z"
						>
							<animate
								attributeName="d"
								dur="2s"
								repeatCount="indefinite"
								values="
									M0,25 Q300,10 600,25 T1200,25 L1200,50 L0,50 Z;
									M0,25 Q300,40 600,25 T1200,25 L1200,50 L0,50 Z;
									M0,25 Q300,10 600,25 T1200,25 L1200,50 L0,50 Z
								"
							/>
						</path>
					</svg>

					{/* Second wave - delayed and offset */}
					<svg
						className="absolute top-0 left-0 w-full"
						style={{ height: '45px', transform: 'translateY(-22px)', opacity: 0.6 }}
						viewBox="0 0 1200 50"
						preserveAspectRatio="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<defs>
							<linearGradient id={`waveGradient2-${uniqueId}`} x1="0%" y1="0%" x2="0%" y2="100%">
								<stop offset="0%" stopColor="rgba(239, 68, 68, 0.5)" />
								<stop offset="100%" stopColor="rgba(249, 115, 22, 0.05)" />
							</linearGradient>
						</defs>

						<path
							fill={`url(#waveGradient2-${uniqueId})`}
							d="M0,28 Q300,43 600,28 T1200,28 L1200,50 L0,50 Z"
						>
							<animate
								attributeName="d"
								dur="2.3s"
								repeatCount="indefinite"
								begin="0.7s"
								values="
									M0,28 Q300,43 600,28 T1200,28 L1200,50 L0,50 Z;
									M0,28 Q300,13 600,28 T1200,28 L1200,50 L0,50 Z;
									M0,28 Q300,43 600,28 T1200,28 L1200,50 L0,50 Z
								"
							/>
						</path>
					</svg>

					{/* Floating bubbles - cartoony lab style */}
					<span
						className="absolute w-3 h-3 bg-white/40 rounded-full"
						style={{
							left: '15%',
							bottom: '20%',
							animation: 'bubble1 5s ease-in-out infinite',
							boxShadow: 'inset 0 -1px 2px rgba(255,255,255,0.6)',
						}}
					/>
					<span
						className="absolute w-2 h-2 bg-white/35 rounded-full"
						style={{
							left: '45%',
							bottom: '35%',
							animation: 'bubble2 6s ease-in-out infinite 1s',
							boxShadow: 'inset 0 -1px 2px rgba(255,255,255,0.6)',
						}}
					/>
					<span
						className="absolute w-2.5 h-2.5 bg-white/30 rounded-full"
						style={{
							left: '70%',
							bottom: '15%',
							animation: 'bubble3 5.5s ease-in-out infinite 2s',
							boxShadow: 'inset 0 -1px 2px rgba(255,255,255,0.6)',
						}}
					/>
					<span
						className="absolute w-1.5 h-1.5 bg-white/25 rounded-full"
						style={{
							left: '85%',
							bottom: '40%',
							animation: 'bubble1 4.5s ease-in-out infinite 0.5s',
							boxShadow: 'inset 0 -1px 1px rgba(255,255,255,0.6)',
						}}
					/>
					<span
						className="absolute w-2 h-2 bg-white/30 rounded-full"
						style={{
							left: '30%',
							bottom: '8%',
							animation: 'bubble2 5.2s ease-in-out infinite 1.5s',
							boxShadow: 'inset 0 -1px 2px rgba(255,255,255,0.6)',
						}}
					/>
				</span>
			</span>

			{/* Text - semi-transparent only, no gradient overlay */}
			<span
				className="relative z-10 font-extrabold text-foreground/50"
			>
				{children}
			</span>

			{/* Subtle shimmer on surface */}
			<span
				className="absolute inset-x-0 pointer-events-none"
				style={{
					bottom: '30%',
					height: '35px',
					background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.15), transparent)',
					animation: 'shimmer 3.5s ease-in-out infinite',
				}}
			/>

			<style jsx>{`
				@keyframes bubble1 {
					0%, 100% {
						transform: translateY(0px) translateX(0px) scale(1);
						opacity: 0.4;
					}
					25% {
						transform: translateY(-20px) translateX(5px) scale(1.1);
						opacity: 0.6;
					}
					50% {
						transform: translateY(-35px) translateX(-3px) scale(0.95);
						opacity: 0.5;
					}
					75% {
						transform: translateY(-20px) translateX(4px) scale(1.05);
						opacity: 0.6;
					}
				}

				@keyframes bubble2 {
					0%, 100% {
						transform: translateY(0px) translateX(0px) scale(1);
						opacity: 0.35;
					}
					30% {
						transform: translateY(-25px) translateX(-6px) scale(1.15);
						opacity: 0.55;
					}
					60% {
						transform: translateY(-40px) translateX(4px) scale(0.9);
						opacity: 0.45;
					}
					85% {
						transform: translateY(-22px) translateX(-3px) scale(1.08);
						opacity: 0.55;
					}
				}

				@keyframes bubble3 {
					0%, 100% {
						transform: translateY(0px) translateX(0px) scale(1);
						opacity: 0.3;
					}
					20% {
						transform: translateY(-15px) translateX(6px) scale(1.12);
						opacity: 0.5;
					}
					55% {
						transform: translateY(-32px) translateX(-5px) scale(0.92);
						opacity: 0.4;
					}
					80% {
						transform: translateY(-18px) translateX(3px) scale(1.06);
						opacity: 0.5;
					}
				}

				@keyframes shimmer {
					0%, 100% {
						transform: translateX(-100%);
						opacity: 0;
					}
					50% {
						transform: translateX(100%);
						opacity: 0.2;
					}
				}
			`}</style>
		</span>
	);
}