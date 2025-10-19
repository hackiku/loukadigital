// src/components/navigation/Nav.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Linkedin } from 'lucide-react';
import { GrowthPlanButton } from '~/components/cta/GrowthPlanButton';

export function Nav() {
	const [isVisible, setIsVisible] = useState(true);
	const [lastScrollY, setLastScrollY] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollY = window.scrollY;
			const scrollDelta = currentScrollY - lastScrollY;

			// Show nav when scrolling up or at top, hide when scrolling down
			if (Math.abs(scrollDelta) > 50) {
				setIsVisible(scrollDelta < 0 || currentScrollY < 100);
				setLastScrollY(currentScrollY);
			}
		};

		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => window.removeEventListener('scroll', handleScroll);
	}, [lastScrollY]);

	return (
		<>
			{/* Top gradient fade */}
			<div
				className="fixed -top-1 left-0 right-0 h-20 pointer-events-none z-40
                   bg-gradient-to-b from-background via-background/70 to-transparent"
			/>

			{/* Nav */}
			<nav
				className={`
          fixed top-0 left-0 right-0 z-50
          max-w-[1920px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24
          transition-all duration-300
          ${isVisible ? 'translate-y-4' : '-translate-y-full'}
        `}
			>
				<div className="flex items-center justify-between py-2">
					{/* Left: Logo + Socials */}
					<div className="flex items-center gap-6">
						<Link href="/" className="flex items-center">
							<Image
								src="/assets/logos/louka-logo.jpg"
								alt="Louka Digital"
								width={40}
								height={40}
								className="rounded-full"
							/>
						</Link>

						{/* Social Links */}
						<div className="hidden md:flex items-center gap-4">
							<a
								href="https://www.instagram.com/loukadigital"
								target="_blank"
								rel="noopener noreferrer"
								className="text-muted-foreground hover:text-foreground transition-colors"
							>
								<Instagram className="w-4 h-4" />
							</a>
							<a
								href="https://www.tiktok.com/@loukadigital"
								target="_blank"
								rel="noopener noreferrer"
								className="text-muted-foreground hover:text-foreground transition-colors"
							>
								<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
									<path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
								</svg>
							</a>
							<a
								href="https://www.linkedin.com/company/louka-digital"
								target="_blank"
								rel="noopener noreferrer"
								className="text-muted-foreground hover:text-foreground transition-colors"
							>
								<Linkedin className="w-4 h-4" />
							</a>
						</div>
					</div>

					{/* Center: Nav Links */}
					<div className="hidden md:flex items-center gap-8">
						<a href="#services" className="text-sm text-foreground/80 hover:text-foreground transition-colors font-medium">
							Services
						</a>
						<a href="#about" className="text-sm text-foreground/80 hover:text-foreground transition-colors font-medium">
							About
						</a>
						<a href="#contact" className="text-sm text-foreground/80 hover:text-foreground transition-colors font-medium">
							Contact
						</a>
					</div>

					{/* Right: CTA */}
					<GrowthPlanButton variant="minimal" />
				</div>
			</nav>
		</>
	);
}