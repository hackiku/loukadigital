// src/app/adhealth/_hooks/useExitIntent.ts
'use client';
import { useState, useEffect, useCallback } from 'react';

interface UseExitIntentOptions {
	delay?: number; // Min time on page before showing (ms)
	aggressive?: boolean; // Show on any upward scroll on mobile
}

export function useExitIntent(options: UseExitIntentOptions = {}) {
	const { delay = 5000, aggressive = false } = options;
	const [shouldShow, setShouldShow] = useState(false);
	const [hasShown, setHasShown] = useState(false);
	const [pageLoadTime] = useState(Date.now());

	const close = useCallback(() => {
		setShouldShow(false);
	}, []);

	useEffect(() => {
		if (hasShown) return;

		// Desktop: Mouse leaving viewport from top
		const handleMouseLeave = (e: MouseEvent) => {
			const timeOnPage = Date.now() - pageLoadTime;

			if (
				e.clientY <= 0 &&
				!hasShown &&
				timeOnPage > delay
			) {
				setShouldShow(true);
				setHasShown(true);
			}
		};

		// Mobile: Rapid scroll up (user reconsidering)
		let lastScrollY = window.scrollY;
		let lastScrollTime = Date.now();

		const handleScroll = () => {
			const currentScrollY = window.scrollY;
			const currentTime = Date.now();
			const scrollDelta = lastScrollY - currentScrollY;
			const timeDelta = currentTime - lastScrollTime;
			const timeOnPage = currentTime - pageLoadTime;

			// Rapid upward scroll = user reconsidering
			const isRapidUpScroll = scrollDelta > 100 && timeDelta < 200;
			const hasScrolledEnough = currentScrollY > 800;
			const hasBeenOnPageLongEnough = timeOnPage > delay;

			if (
				!hasShown &&
				hasScrolledEnough &&
				hasBeenOnPageLongEnough &&
				(isRapidUpScroll || (aggressive && scrollDelta > 50))
			) {
				setShouldShow(true);
				setHasShown(true);
			}

			lastScrollY = currentScrollY;
			lastScrollTime = currentTime;
		};

		document.addEventListener('mouseleave', handleMouseLeave);
		window.addEventListener('scroll', handleScroll, { passive: true });

		return () => {
			document.removeEventListener('mouseleave', handleMouseLeave);
			window.removeEventListener('scroll', handleScroll);
		};
	}, [hasShown, delay, aggressive, pageLoadTime]);

	return { shouldShow, close };
}