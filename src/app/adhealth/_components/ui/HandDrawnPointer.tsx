// src/app/adhealth/_components/ui/HandDrawnPointer.tsx

'use client';
import { useEffect, useState } from 'react';

interface HandDrawnPointerProps {
	text: string;
	pointDirection?: 'right' | 'down';
	className?: string;
}

export function HandDrawnPointer({
	text,
	pointDirection = 'right',
	className = ''
}: HandDrawnPointerProps) {
	const [circleSvg, setCircleSvg] = useState('');
	const [arrowSvg, setArrowSvg] = useState('');

	useEffect(() => {
		// Load circle SVG
		fetch('/assets/hand-drawn-circle.svg')
			.then(res => res.text())
			.then(svg => {
				const recolored = svg.replace(/fill="[^"]*"/g, 'fill="#a855f7"');
				setCircleSvg(`data:image/svg+xml;base64,${btoa(recolored)}`);
			});

		// Load arrow SVG
		fetch('/assets/hand-drawn-arrow.svg')
			.then(res => res.text())
			.then(svg => {
				const recolored = svg.replace(/fill="[^"]*"/g, 'fill="#a855f7"');
				setArrowSvg(`data:image/svg+xml;base64,${btoa(recolored)}`);
			});
	}, []);

	// Desktop: arrow points right, Mobile: arrow points down
	const arrowRotation = pointDirection === 'down' ? 120 : -15;
	const arrowSize = pointDirection === 'down' ? 'h-32 w-auto' : 'h-40 md:h-48 lg:h-56 w-auto';

	return (
		<div className={`relative inline-flex flex-col items-center ${className}`}>
			{/* Circle with text */}
			<div className="rotate-6 relative inline-flex items-center justify-center">
				{/* Hand-drawn circle background */}
				<div className="absolute -inset-0 flex items-center justify-center pointer-events-none">
					{circleSvg && (
						<img
							src={circleSvg}
							alt=""
							className="w-full h-full object-contain pointer-events-none select-none"
							draggable={false}
							style={{
								transform: 'scale(1.4)',
							}}
						/>
					)}
				</div>

				{/* Text content */}
				<div className="relative z-10 flex items-center justify-center p-6 max-w-[140px]">
					<span className="text-purple-400 text-lg font-semibold tracking-tight text-center leading-tight">
						{text}
					</span>
				</div>
			</div>

			{/* Hand-drawn arrow - sized independently */}
			<div
				className="absolute pointer-events-nonborder"
				style={{
					top: pointDirection === 'down' ? '150%' : '45%',
					left: pointDirection === 'down' ? '50%' : '100%',
					transformOrigin: 'top left',
					transform: `rotate(${arrowRotation}deg) ${pointDirection === 'down' ? 'translateX(-50%)' : 'translateX(-1rem)'}`,
					marginLeft: pointDirection === 'right' ? '-0.5rem' : '0',
				}}
			>
				{arrowSvg && (
					<img
						src={arrowSvg}
						alt=""
						className={`${arrowSize} pointer-events-none select-none`}
						draggable={false}
					/>
				)}
			</div>
		</div>
	);
}