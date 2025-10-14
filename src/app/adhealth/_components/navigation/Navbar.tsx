// src/app/adhealth/_components/navigation/Navbar.tsx

'use client';
import { useState, useEffect } from 'react';
import { AvailabilityBar } from './AvailabilityBar';
import { AuditButton } from '../cta/AuditButton';
import { AuditDrawer } from '../cta/AuditDrawer';

export function Navbar() {
	const [isVisible, setIsVisible] = useState(true);
	const [lastScrollY, setLastScrollY] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollY = window.scrollY;
			const scrollDelta = currentScrollY - lastScrollY;

			if (Math.abs(scrollDelta) > 50) {
				setIsVisible(scrollDelta < 0 || currentScrollY < 100);
				setLastScrollY(currentScrollY);
			}
		};

		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => window.removeEventListener('scroll', handleScroll);
	}, [lastScrollY]);

	return (
		<nav
			className={`
        fixed top-0 left-0 right-0 z-50
        max-w-[1920px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24
        transition-all duration-300
        ${isVisible ? 'translate-y-4' : '-translate-y-full'}
      `}
		>
			<div className="relative">
				{/* Gradient glow */}
				<div
					className="absolute inset-0 opacity-30 blur-xl -z-10 rounded-full transition-all duration-300"
					style={{
						background: `radial-gradient(
              circle at 50% 50%,
              rgba(168, 85, 247, 0.15),
              rgba(59, 130, 246, 0.1),
              transparent 70%
            )`
					}}
				/>

				{/* Nav content */}
				<div className="bg-card/80 backdrop-blur-xl border border-border/50 shadow-lg rounded-full">
					<div className="flex items-center justify-between py-3 px-6">
						{/* Logo */}
						<a href="/" className="flex-shrink-0">
							<div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center font-bold text-black text-xs hover:scale-110 transition-transform">
								LOU
							</div>
						</a>

						{/* Right side */}
						<div className="flex items-center gap-3">
							<AvailabilityBar />
							<AuditButton variant="minimal" />
							{/* <AuditDrawer variant="minimal" /> */}
						</div>
					</div>
				</div>

				{/* Fade gradient at top */}
				<div
					className="absolute -top-20 left-0 right-0 h-20 pointer-events-none"
					style={{
						background: 'linear-gradient(to bottom, rgba(0,0,0,0.8), transparent)'
					}}
				/>
			</div>
		</nav>
	);
}