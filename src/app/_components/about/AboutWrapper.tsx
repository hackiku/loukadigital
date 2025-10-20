// src/app/_components/about/AboutWrapper.tsx
'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { MissionStatement } from './MissionStatement';
import { Philosophy } from './Philosophy';

export function AboutWrapper() {
	const imageRef = useRef<HTMLDivElement>(null);
	const [imageOpacity, setImageOpacity] = useState(0.3);
	const [imageTransform, setImageTransform] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			if (!imageRef.current) return;

			const rect = imageRef.current.getBoundingClientRect();
			const windowHeight = window.innerHeight;

			// Calculate visibility (0 to 1)
			const visibility = Math.max(
				0,
				Math.min(1, (windowHeight - rect.top) / windowHeight)
			);

			// Fade in as scrolled into view
			setImageOpacity(0.3 + visibility * 0.7);

			// Subtle parallax effect
			setImageTransform(visibility * -20);
		};

		window.addEventListener('scroll', handleScroll, { passive: true });
		handleScroll(); // Initial call

		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<div className="space-y-16">
			{/* Masonry Grid */}
			<div className="grid md:grid-cols-2 gap-8 items-start">
				{/* Left Column */}
				<div className="space-y-8">
					{/* Intro Text */}
					<div>
						<h2 className="text-3xl md:text-5xl font-bold mb-4">About Louka</h2>
						<p className="text-xl text-muted-foreground leading-relaxed">
							We're a team of growth experts who actually deliver. No fluff, no vanity metrics—just strategic marketing that drives revenue.
						</p>
					</div>

					{/* Philosophy */}
					<div>
						<h3 className="text-2xl font-bold mb-6">Our Philosophy</h3>
						<Philosophy />
					</div>
				</div>

				{/* Right Column - Mission with negative margin */}
				<div className="md:-mt-8">
					<MissionStatement />
				</div>
			</div>

			{/* Podcast Image - Full Width with Parallax */}
			<div
				ref={imageRef}
				className="relative w-full h-[400px] md:h-[500px] rounded-3xl overflow-hidden"
				style={{
					opacity: imageOpacity,
					transform: `translateY(${imageTransform}px)`,
					transition: 'opacity 0.3s ease-out',
				}}
			>
				<Image
					src="/collateral/podcast.jpeg"
					alt="Louka Digital Team"
					fill
					className="object-cover"
				/>
			</div>
		</div>
	);
}