// src/app/adhealth/_components/pricing/DeliveryTime.tsx

'use client';
import { useEffect, useState, useRef } from 'react';
import { Clock } from 'lucide-react';

interface DeliveryTimeProps {
	deliveryTime?: string;
	targetButtonId?: string;
	className?: string;
}

export function DeliveryTime({
	deliveryTime = '48h',
	targetButtonId = 'hero-cta-button',
	className = ''
}: DeliveryTimeProps) {
	const badgeRef = useRef<HTMLDivElement>(null);
	const [arrowPath, setArrowPath] = useState('');
	const [arrowOpacity, setArrowOpacity] = useState(0);

	useEffect(() => {
		const calculateArrowPath = () => {
			const badge = badgeRef.current;
			const target = document.getElementById(targetButtonId);

			if (!badge || !target) {
				setArrowOpacity(0);
				return;
			}

			const badgeRect = badge.getBoundingClientRect();
			const targetRect = target.getBoundingClientRect();

			// Start point: bottom-right of badge
			const startX = badgeRect.right - 10;
			const startY = badgeRect.bottom + 5;

			// End point: top-center of button
			const endX = targetRect.left + targetRect.width / 2;
			const endY = targetRect.top - 10;

			// Only show arrow if target is below and to the right-ish
			const validPlacement = endY > startY && Math.abs(endX - startX) < 600;

			if (!validPlacement) {
				setArrowOpacity(0);
				return;
			}

			// Control points for smooth curve
			const deltaX = endX - startX;
			const deltaY = endY - startY;

			const control1X = startX + deltaX * 0.3;
			const control1Y = startY + deltaY * 0.1;

			const control2X = startX + deltaX * 0.7;
			const control2Y = startY + deltaY * 0.6;

			// Cubic bezier for smooth swoopy arrow
			const path = `M ${startX} ${startY} C ${control1X} ${control1Y}, ${control2X} ${control2Y}, ${endX} ${endY}`;

			setArrowPath(path);
			setArrowOpacity(1);
		};

		// Initial calculation
		const timer = setTimeout(calculateArrowPath, 100);

		// Recalculate on resize
		const handleResize = () => {
			calculateArrowPath();
		};

		window.addEventListener('resize', handleResize);

		return () => {
			clearTimeout(timer);
			window.removeEventListener('resize', handleResize);
		};
	}, [targetButtonId]);

	return (
		<>
			{/* Badge with hand-drawn circle */}
			<div
				ref={badgeRef}
				className={`relative inline-block ${className}`}
			>
				{/* Hand-drawn circle background */}
				<svg
					className="absolute -inset-4 w-auto h-auto"
					style={{
						left: '-1rem',
						top: '-1rem',
						width: 'calc(100% + 2rem)',
						height: 'calc(100% + 2rem)',
					}}
					viewBox="0 0 200 100"
					preserveAspectRatio="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<defs>
						<linearGradient id="circleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
							<stop offset="0%" stopColor="#a855f7" />
							<stop offset="100%" stopColor="#ec4899" />
						</linearGradient>
					</defs>
					{/* Rough hand-drawn ellipse */}
					<ellipse
						cx="100"
						cy="50"
						rx="95"
						ry="45"
						fill="none"
						stroke="url(#circleGradient)"
						strokeWidth="3"
						strokeLinecap="round"
						opacity="0.6"
						style={{
							// Imperfect hand-drawn feel
							transform: 'rotate(-2deg)',
							transformOrigin: 'center',
						}}
					/>
					{/* Second stroke for thickness variation */}
					<ellipse
						cx="100"
						cy="50"
						rx="95"
						ry="45"
						fill="none"
						stroke="url(#circleGradient)"
						strokeWidth="2"
						strokeLinecap="round"
						opacity="0.4"
						strokeDasharray="8 4"
						style={{
							transform: 'rotate(1deg)',
							transformOrigin: 'center',
						}}
					/>
				</svg>

				{/* Content */}
				<div className="relative flex items-center gap-3 px-6 py-3 bg-background/80 backdrop-blur-sm rounded-full border-2 border-purple-500/30">
					<Clock className="w-8 h-8 text-purple-400" />
					<span className="text-4xl font-black text-foreground tracking-tight">
						{deliveryTime}
					</span>
				</div>
			</div>

			{/* SVG Arrow Overlay - Full Viewport */}
			{arrowPath && (
				<svg
					className="fixed inset-0 w-full h-full pointer-events-none"
					style={{
						zIndex: 45,
						opacity: arrowOpacity,
						transition: 'opacity 0.3s ease-out'
					}}
					xmlns="http://www.w3.org/2000/svg"
				>
					<defs>
						<linearGradient id="arrowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
							<stop offset="0%" stopColor="#a855f7">
								<animate
									attributeName="stop-color"
									values="#a855f7;#ec4899;#3b82f6;#a855f7"
									dur="4s"
									repeatCount="indefinite"
								/>
							</stop>
							<stop offset="100%" stopColor="#ec4899">
								<animate
									attributeName="stop-color"
									values="#ec4899;#3b82f6;#a855f7;#ec4899"
									dur="4s"
									repeatCount="indefinite"
								/>
							</stop>
						</linearGradient>

						{/* Arrowhead marker */}
						<marker
							id="arrowhead"
							markerWidth="12"
							markerHeight="12"
							refX="10"
							refY="6"
							orient="auto"
						>
							<polygon
								points="0 0, 12 6, 0 12"
								fill="url(#arrowGradient)"
							/>
						</marker>

						{/* Glow filter */}
						<filter id="arrowGlow">
							<feGaussianBlur stdDeviation="2" result="coloredBlur" />
							<feMerge>
								<feMergeNode in="coloredBlur" />
								<feMergeNode in="SourceGraphic" />
							</feMerge>
						</filter>
					</defs>

					{/* The curved arrow path */}
					<path
						d={arrowPath}
						stroke="url(#arrowGradient)"
						strokeWidth="4"
						fill="none"
						strokeLinecap="round"
						markerEnd="url(#arrowhead)"
						filter="url(#arrowGlow)"
						className="animate-draw-arrow"
					/>
				</svg>
			)}

			<style jsx>{`
				@keyframes draw-arrow {
					0% {
						stroke-dasharray: 1000;
						stroke-dashoffset: 1000;
					}
					100% {
						stroke-dasharray: 1000;
						stroke-dashoffset: 0;
					}
				}

				.animate-draw-arrow {
					animation: draw-arrow 1.5s ease-out forwards;
					animation-delay: 0.5s;
					stroke-dasharray: 1000;
					stroke-dashoffset: 1000;
				}
			`}</style>
		</>
	);
}