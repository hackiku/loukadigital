// src/app/adhealth/leak/LiquidLeakText.tsx

export function LiquidLeakText({ children }: { children: string }) {
	const borderRadius = '1rem';

	return (
		<span
			className="relative inline-block px-8 py-4 border border-orange-500/20 overflow-hidden"
			style={{ borderRadius }}
		>
			{/* Subtle container background - the "empty" part of tank */}
			<span
				className="absolute inset-0 bg-neutral-500/15"
				style={{ borderRadius }}
			/>

			{/* Water layer - fills from bottom, wavy top edge */}
			<span
				className="absolute inset-0 overflow-hidden"
				style={{ borderRadius }}
			>
				{/* Animated water fill - solid color at bottom */}
				<span
					className="absolute inset-x-0 bottom-0"
					style={{
						height: '60%',
						background: 'linear-gradient(180deg, rgba(239, 68, 68, 0.85) 0%, rgba(249, 115, 22, 1) 100%)',
						backdropFilter: 'blur(12px)',
						borderRadius: `0 0 ${borderRadius} ${borderRadius}`,
					}}
				>
					{/* Wavy water surface - SVG for smooth curves */}
					<svg
						className="absolute top-0 left-0 w-full"
						style={{ height: '60px', transform: 'translateY(-30px)' }}
						viewBox="0 0 1200 60"
						preserveAspectRatio="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<defs>
							<linearGradient id="waterGradient" x1="0%" y1="0%" x2="0%" y2="100%">
								<stop offset="0%" stopColor="rgba(239, 68, 68, 0.9)" />
								<stop offset="100%" stopColor="rgba(249, 115, 22, 1)" />
							</linearGradient>
						</defs>

						{/* Animated wave path */}
						<path
							fill="url(#waterGradient)"
							d="M0,30 Q150,10 300,30 T600,30 T900,30 T1200,30 L1200,60 L0,60 Z"
						>
							{/* Wave 1 animation */}
							<animate
								attributeName="d"
								dur="4s"
								repeatCount="indefinite"
								values="
									M0,30 Q150,10 300,30 T600,30 T900,30 T1200,30 L1200,60 L0,60 Z;
									M0,30 Q150,50 300,30 T600,30 T900,30 T1200,30 L1200,60 L0,60 Z;
									M0,30 Q150,10 300,30 T600,30 T900,30 T1200,30 L1200,60 L0,60 Z
								"
							/>
						</path>

						{/* Secondary wave for depth */}
						<path
							fill="rgba(249, 115, 22, 0.4)"
							d="M0,35 Q200,20 400,35 T800,35 T1200,35 L1200,60 L0,60 Z"
						>
							<animate
								attributeName="d"
								dur="3s"
								repeatCount="indefinite"
								values="
									M0,35 Q200,20 400,35 T800,35 T1200,35 L1200,60 L0,60 Z;
									M0,35 Q200,45 400,35 T800,35 T1200,35 L1200,60 L0,60 Z;
									M0,35 Q200,20 400,35 T800,35 T1200,35 L1200,60 L0,60 Z
								"
							/>
						</path>
					</svg>

					{/* Floating particles/bubbles for extra life */}
					<span
						className="absolute w-2 h-2 bg-white/30 rounded-full"
						style={{
							left: '20%',
							bottom: '30%',
							animation: 'float 6s ease-in-out infinite',
						}}
					/>
					<span
						className="absolute w-1.5 h-1.5 bg-white/20 rounded-full"
						style={{
							left: '60%',
							bottom: '50%',
							animation: 'float 5s ease-in-out infinite 1s',
						}}
					/>
					<span
						className="absolute w-1 h-1 bg-white/25 rounded-full"
						style={{
							left: '80%',
							bottom: '20%',
							animation: 'float 7s ease-in-out infinite 2s',
						}}
					/>
				</span>
			</span>

			{/* Text with gradient - sits on top */}
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

			{/* Subtle shimmer effect on water surface */}
			<span
				className="absolute inset-x-0 pointer-events-none"
				style={{
					bottom: '30%',
					height: '40px',
					background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent)',
					animation: 'shimmer 3s ease-in-out infinite',
				}}
			/>

			<style jsx>{`
				@keyframes float {
					0%, 100% {
						transform: translateY(0px) translateX(0px);
						opacity: 0.3;
					}
					25% {
						transform: translateY(-15px) translateX(5px);
						opacity: 0.5;
					}
					50% {
						transform: translateY(-25px) translateX(-5px);
						opacity: 0.4;
					}
					75% {
						transform: translateY(-15px) translateX(5px);
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
						opacity: 0.3;
					}
				}
			`}</style>
		</span>
	);
}