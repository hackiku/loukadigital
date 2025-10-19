// src/app/adhealth/_hooks/useExitIntent.ts

'use client';
import { useState, useEffect } from 'react';

export function useExitIntent() {
	const [shouldShow, setShouldShow] = useState(false);
	const [hasShown, setHasShown] = useState(false);

	useEffect(() => {
		// Don't show if already shown
		if (hasShown) return;

		const handleMouseLeave = (e: MouseEvent) => {
			// Only trigger if mouse leaves from top of viewport
			if (e.clientY <= 0 && !hasShown) {
				setShouldShow(true);
				setHasShown(true);
			}
		};

		// Mobile: trigger on scroll up quickly
		let lastScrollY = window.scrollY;
		const handleScroll = () => {
			const currentScrollY = window.scrollY;
			if (lastScrollY - currentScrollY > 100 && currentScrollY > 500 && !hasShown) {
				setShouldShow(true);
				setHasShown(true);
			}
			lastScrollY = currentScrollY;
		};

		document.addEventListener('mouseleave', handleMouseLeave);
		window.addEventListener('scroll', handleScroll);

		return () => {
			document.removeEventListener('mouseleave', handleMouseLeave);
			window.removeEventListener('scroll', handleScroll);
		};
	}, [hasShown]);

	const close = () => setShouldShow(false);

	return { shouldShow, close };
}
