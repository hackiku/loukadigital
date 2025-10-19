// src/components/navigation/Nav.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Linkedin } from 'lucide-react';
import { GrowthPlanButton } from '~/components/cta/GrowthPlanButton';

export function Nav() {
	return (
		<nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
			<div className="px-4 sm:px-12 md:px-16 lg:px-24 py-4">
				<div className="flex items-center justify-between">
					{/* Left: Logo + Socials */}
					<div className="flex items-center gap-6">
						<Link href="/" className="flex items-center">
							<Image
								src="/assets/logos/louka-logo.jpg"
								alt="Louka Digital"
								width={48}
								height={48}
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
								<Instagram className="w-5 h-5" />
							</a>
							<a
								href="https://www.tiktok.com/@loukadigital"
								target="_blank"
								rel="noopener noreferrer"
								className="text-muted-foreground hover:text-foreground transition-colors"
							>
								<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
									<path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
								</svg>
							</a>
							<a
								href="https://www.linkedin.com/company/louka-digital"
								target="_blank"
								rel="noopener noreferrer"
								className="text-muted-foreground hover:text-foreground transition-colors"
							>
								<Linkedin className="w-5 h-5" />
							</a>
						</div>
					</div>

					{/* Center: Nav Links */}
					<div className="hidden md:flex items-center gap-8">
						<a href="#services" className="text-foreground/80 hover:text-foreground transition-colors font-medium">
							Services
						</a>
						<a href="#about" className="text-foreground/80 hover:text-foreground transition-colors font-medium">
							About
						</a>
						<a href="#contact" className="text-foreground/80 hover:text-foreground transition-colors font-medium">
							Contact
						</a>
					</div>

					{/* Right: CTA */}
					<GrowthPlanButton variant="minimal" />
				</div>
			</div>
		</nav>
	);
}