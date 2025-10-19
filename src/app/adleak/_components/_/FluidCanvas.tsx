// src/app/adhealth/leak/FluidCanvas.tsx

import { useEffect, useRef } from 'react';
import { FluidSimulation } from './fluidMath';

interface FluidCanvasProps {
	className?: string;
}

export function FluidCanvas({ className = '' }: FluidCanvasProps) {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const containerRef = useRef<HTMLDivElement>(null);
	const simulationRef = useRef<FluidSimulation | null>(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		const container = containerRef.current;
		if (!canvas || !container) return;

		const ctx = canvas.getContext('2d');
		if (!ctx) return;

		let animationId: number;
		let time = 0;

		function initCanvas() {
			if (!canvas || !container || !ctx) return;

			const rect = container.getBoundingClientRect();
			const displayWidth = Math.round(rect.width);
			const displayHeight = Math.round(rect.height);
			const fieldSize = 4;

			const fieldWidth = Math.round(displayWidth / fieldSize);
			const fieldHeight = Math.round(displayHeight / fieldSize);

			canvas.width = fieldWidth;
			canvas.height = fieldHeight;
			canvas.style.width = `${displayWidth}px`;
			canvas.style.height = `${displayHeight}px`;

			// Initialize simulation
			simulationRef.current = new FluidSimulation(fieldWidth, fieldHeight);
		}

		function drawFrame() {
			if (!ctx || !simulationRef.current) return;

			const sim = simulationRef.current;
			const imageData = ctx.createImageData(sim.fieldWidth, sim.fieldHeight);
			const data = imageData.data;

			for (let y = 0; y < sim.fieldHeight; y++) {
				for (let x = 0; x < sim.fieldWidth; x++) {
					const density = sim.getDensity(x, y);
					const pixelIdx = (y * sim.fieldWidth + x) * 4;

					// Gradient color: red-400 to orange-400
					const t = Math.min(1, density / 150);
					data[pixelIdx] = Math.floor(248 * t);     // R
					data[pixelIdx + 1] = Math.floor(113 * t); // G  
					data[pixelIdx + 2] = Math.floor(113 * t); // B
					data[pixelIdx + 3] = Math.floor(density * 0.8); // A
				}
			}

			ctx.putImageData(imageData, 0, 0);
		}

		function animate() {
			if (!simulationRef.current) return;

			time += 0.016;

			// Update simulation with time-based sources
			simulationRef.current.update(time);

			// Draw to canvas
			drawFrame();

			animationId = requestAnimationFrame(animate);
		}

		// Initialize and start
		initCanvas();
		animate();

		// Handle resize
		const handleResize = () => {
			initCanvas();
		};

		window.addEventListener('resize', handleResize);

		return () => {
			cancelAnimationFrame(animationId);
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return (
		<div
			ref={containerRef}
			className={`relative w-full h-full ${className}`}
		>
			{/* Main canvas */}
			<canvas
				ref={canvasRef}
				className="absolute inset-0 w-full h-full"
				style={{
					imageRendering: 'pixelated',
				}}
			/>

			{/* Inner container box - visualizes the "tank" */}
			<div
				className="absolute inset-0 pointer-events-none"
				style={{
					margin: '10%',
					border: '2px dashed rgba(248, 113, 113, 0.3)',
					borderRadius: '12px',
				}}
			>
				{/* Leak hole indicator - bottom right */}
				<div
					className="absolute w-8 h-8 rounded-full border-2 border-orange-400/50 bg-orange-400/20"
					style={{
						right: '-16px',
						bottom: '10%',
					}}
				>
					<div className="absolute inset-2 rounded-full bg-orange-400/40 animate-pulse" />
				</div>
			</div>

			{/* Debug info */}
			<div className="absolute top-4 left-4 text-xs font-mono text-white/60 bg-black/30 px-2 py-1 rounded">
				Fluid Simulation Test
			</div>
		</div>
	);
}