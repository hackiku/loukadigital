// src/app/adhealth/audit/InstaMockup.tsx

'use client';
import { useEffect, useState } from 'react';

interface InstaMockupProps {
	shouldHide?: boolean;
}

export function InstaMockup({ shouldHide = false }: InstaMockupProps) {
	const [scrollProgress, setScrollProgress] = useState(0);
	const [isHovered, setIsHovered] = useState(false);
	const [isManuallyHidden, setIsManuallyHidden] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const scrollY = window.scrollY;
			const windowHeight = window.innerHeight;

			// Detect when we reach the "Where on Earth" section (roughly 90vh)
			const whereSection = document.getElementById('where-money-section');
			if (whereSection) {
				const rect = whereSection.getBoundingClientRect();
				// Start animation when section is in view, complete in 800px
				const sectionTop = scrollY - (whereSection.offsetTop - windowHeight);
				const progress = Math.min(Math.max(sectionTop / 800, 0), 1);
				setScrollProgress(progress);
			}
		};

		window.addEventListener('scroll', handleScroll, { passive: true });
		handleScroll(); // Initial call
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const handleClick = () => {
		if (shouldHide || isManuallyHidden) {
			setIsManuallyHidden(false);
		} else {
			setIsManuallyHidden(true);
		}
	};

	// Interpolate rotation from +15deg to 0deg (straighten up)
	const rotation = 15 - (scrollProgress * 15);
	// Start more to the right, shift left as we scroll
	const translateX = 80 - (scrollProgress * 80);
	// Start lower, come up as we scroll
	const translateY = 35 - (scrollProgress * 20);

	// Determine if we should be in hidden state
	const isHidden = shouldHide || isManuallyHidden;

	// Hide state: bounce away to the right
	const hideTranslateX = isHidden ? (isHovered ? 280 : 400) : 0;
	const hideRotation = isHidden ? 15 : 0;

	return (
		<div
			className="relative pointer-events-auto cursor-pointer"
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			onClick={handleClick}
		>
			<div
				className="relative w-[320px] h-[580px] bg-gradient-to-br from-purple-900 via-pink-800 to-orange-600 rounded-3xl shadow-2xl overflow-hidden transition-all duration-500 ease-out"
				style={{
					transform: `
						rotate(${rotation + hideRotation}deg) 
						translateX(${translateX + hideTranslateX}px) 
						translateY(${translateY}%)
					`,
				}}
			>
				{/* Instagram Header */}
				<div className="absolute top-0 left-0 right-0 bg-black/20 backdrop-blur-sm p-4 flex items-center gap-3 z-10">
					<div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-400 to-purple-400 flex items-center justify-center">
						<span className="text-white font-bold text-sm">AD</span>
					</div>
					<div className="flex-1">
						<div className="text-white font-semibold text-sm">your_brand</div>
						<div className="text-white/60 text-xs">Sponsored</div>
					</div>
					<div className="text-white text-xl">⋯</div>
				</div>

				{/* Main Ad Image Area */}
				<div className="absolute inset-0 flex items-center justify-center">
					<div className="text-center px-8">
						<div className="text-white text-4xl font-black mb-4">50% OFF</div>
						<div className="text-white text-xl font-bold mb-2">Summer Sale</div>
						<div className="text-white/80 text-sm">Limited Time Only</div>
					</div>
				</div>

				{/* Instagram Action Bar */}
				<div className="absolute bottom-0 left-0 right-0 bg-black/20 backdrop-blur-sm p-4 z-10">
					<div className="flex items-center gap-4 mb-3">
						<div className="text-white text-2xl">♡</div>
						<div className="text-white text-2xl">💬</div>
						<div className="text-white text-2xl">✈</div>
						<div className="flex-1" />
						<div className="text-white text-2xl">🔖</div>
					</div>
					<div className="text-white/60 text-xs mb-2">234 likes</div>
					<div className="text-white text-sm">
						<span className="font-semibold">your_brand</span> Check out our amazing deals...
					</div>
				</div>

				{/* Subtle grid overlay for "data" feel */}
				<div
					className="absolute inset-0 opacity-5 pointer-events-none"
					style={{
						backgroundImage: `repeating-linear-gradient(
						0deg,
						transparent,
						transparent 20px,
						white 20px,
						white 21px
					),
					repeating-linear-gradient(
						90deg,
						transparent,
						transparent 20px,
						white 20px,
						white 21px
					)`
					}}
				/>
			</div>
		</div>
	);
}