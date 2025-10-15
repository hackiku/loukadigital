// src/app/adhealth/leak/LiquidLeakText.tsx

export function LiquidLeakText({ children }: { children: string }) {
	return (
		<span className="relative inline-block px-6 py-3 rounded-xl overflow-visible">
			{/* Background container */}
			<span
				className="absolute inset-0 rounded-xl"
				style={{
					background: 'linear-gradient(180deg, rgba(239, 68, 68, 0.12) 0%, rgba(249, 115, 22, 0.18) 100%)',
					backdropFilter: 'blur(8px)',
				}}
			/>

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

			{/* Liquid Drip SVG - positioned below text */}
			<svg
				className="absolute left-1/2 -translate-x-1/2 pointer-events-none"
				style={{ top: '100%', marginTop: '-8px' }}
				width="200"
				height="120"
				viewBox="0 0 200 120"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<defs>
					<linearGradient id="dripGradient" x1="0%" y1="0%" x2="0%" y2="100%">
						<stop offset="0%" stopColor="rgb(239, 68, 68)" stopOpacity="0.8" />
						<stop offset="100%" stopColor="rgb(249, 115, 22)" stopOpacity="0.9" />
					</linearGradient>

					{/* Filter for gooey effect */}
					<filter id="gooey">
						<feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
						<feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -8" result="goo" />
						<feComposite in="SourceGraphic" in2="goo" operator="atop" />
					</filter>
				</defs>

				{/* Main drip blob */}
				<g filter="url(#gooey)">
					{/* Top puddle */}
					<ellipse cx="100" cy="10" rx="60" ry="12" fill="url(#dripGradient)" opacity="0.6">
						<animate attributeName="ry" values="12;14;12" dur="3s" repeatCount="indefinite" />
					</ellipse>

					{/* Drip stream 1 */}
					<path d="M 85 15 Q 83 35 85 55 Q 87 70 88 85 Q 88 95 85 100"
						stroke="url(#dripGradient)"
						strokeWidth="8"
						fill="none"
						opacity="0.7">
						<animate attributeName="d"
							values="M 85 15 Q 83 35 85 55 Q 87 70 88 85 Q 88 95 85 100;
                             M 85 15 Q 81 35 83 55 Q 85 70 86 85 Q 87 95 85 100;
                             M 85 15 Q 83 35 85 55 Q 87 70 88 85 Q 88 95 85 100"
							dur="4s"
							repeatCount="indefinite" />
					</path>

					{/* Drip stream 2 */}
					<path d="M 115 15 Q 117 35 115 55 Q 113 70 112 85 Q 112 95 115 100"
						stroke="url(#dripGradient)"
						strokeWidth="8"
						fill="none"
						opacity="0.7">
						<animate attributeName="d"
							values="M 115 15 Q 117 35 115 55 Q 113 70 112 85 Q 112 95 115 100;
                             M 115 15 Q 119 35 117 55 Q 115 70 114 85 Q 113 95 115 100;
                             M 115 15 Q 117 35 115 55 Q 113 70 112 85 Q 112 95 115 100"
							dur="4.5s"
							repeatCount="indefinite" />
					</path>

					{/* Bottom drip blob 1 */}
					<ellipse cx="85" cy="102" rx="12" ry="16" fill="url(#dripGradient)">
						<animate attributeName="cy" values="102;105;102" dur="3s" repeatCount="indefinite" />
						<animate attributeName="ry" values="16;18;16" dur="3s" repeatCount="indefinite" />
					</ellipse>

					{/* Bottom drip blob 2 */}
					<ellipse cx="115" cy="102" rx="12" ry="16" fill="url(#dripGradient)">
						<animate attributeName="cy" values="105;102;105" dur="3.5s" repeatCount="indefinite" />
						<animate attributeName="ry" values="18;16;18" dur="3.5s" repeatCount="indefinite" />
					</ellipse>

					{/* Small droplets */}
					<circle cx="100" cy="70" r="4" fill="url(#dripGradient)" opacity="0.5">
						<animate attributeName="cy" values="70;110;70" dur="5s" repeatCount="indefinite" />
						<animate attributeName="opacity" values="0.5;0;0.5" dur="5s" repeatCount="indefinite" />
					</circle>
				</g>
			</svg>
		</span>
	);
}