// src/app/adhealth/_components/navigation/Navbar.tsx

'use client';
import { useState, useEffect } from 'react';
import { AvailabilityBar } from './AvailabilityBar';
import { AuditDrawerTrigger } from '../cta/AuditDrawerTrigger';
import { LogoModule } from './LogoModule';

interface NavbarProps {
	onOpenDrawer: () => void;
}

export function Navbar({ onOpenDrawer }: NavbarProps) {
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
		<>
			{/* Top gradient fade */}
			<div
				className="fixed top-0 left-0 right-0 h-32 pointer-events-none z-40"
				style={{
					background: 'linear-gradient(to bottom, hsl(var(--background)) 0%, hsl(var(--background) / 0.7) 50%, transparent 100%)'
				}}
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
				<div className="flex items-center justify-between py-3">
					{/* Logo */}
					<LogoModule />

					{/* Right side - floating components */}
					<div className="flex items-center gap-3">
						<AvailabilityBar />
						{/* <AuditDrawerTrigger variant="minimal" onOpen={onOpenDrawer} /> */}
						<AuditDrawerTrigger 
							variant="minimal"
							badge="spots"
							spotsLeft={7}
							onOpen={onOpenDrawer}
						/>

					</div>
				</div>
			</nav>
		</>
	);
}