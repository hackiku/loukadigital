// src/app/adhealth/_hooks/useExitIntent.ts
'use client';
import { useState, useEffect, useCallback } from 'react';

interface UseExitIntentOptions {
	delay?: number; // Min time on page before showing (ms)
	sensitivity?: number; // Mouse distance from top to trigger (px)
}

export function useExitIntent(options: UseExitIntentOptions = {}) {
	const { delay = 5000, sensitivity = 50 } = options;
	const [shouldShow, setShouldShow] = useState(false);
	const [hasShown, setHasShown] = useState(false);
	const [pageLoadTime] = useState(Date.now());

	const close = useCallback(() => {
		setShouldShow(false);
	}, []);

	useEffect(() => {
		if (hasShown) return;

		// Desktop: Mouse leaving viewport from top (going to URL bar or another tab)
		const handleMouseLeave = (e: MouseEvent) => {
			const timeOnPage = Date.now() - pageLoadTime;

			// Trigger when mouse exits from top of viewport
			// e.clientY <= 0 means cursor is above viewport
			// Also check that mouse is moving upward (toElement is null when leaving page)
			if (
				e.clientY <= sensitivity &&
				!hasShown &&
				timeOnPage > delay &&
				!e.toElement && // Mouse is leaving the document entirely
				e.relatedTarget === null // Confirms exit, not just hovering over browser UI
			) {
				setShouldShow(true);
				setHasShown(true);
			}
		};

		// Mobile: Scroll to very top (reconsidering)
		const handleScroll = () => {
			const currentScrollY = window.scrollY;
			const timeOnPage = Date.now() - pageLoadTime;

			// If user scrolls back to near the top after being engaged
			const hasScrolledToTop = currentScrollY < 100;
			const hasBeenEngaged = timeOnPage > delay;
			const hasScrolledBefore = lastScrollDepth > 800; // Has scrolled down before

			if (
				!hasShown &&
				hasScrolledToTop &&
				hasBeenEngaged &&
				hasScrolledBefore
			) {
				setShouldShow(true);
				setHasShown(true);
			}

			// Track deepest scroll
			if (currentScrollY > lastScrollDepth) {
				lastScrollDepth = currentScrollY;
			}
		};

		let lastScrollDepth = 0;

		// Use mouseleave on document to catch exit intent
		document.addEventListener('mouseleave', handleMouseLeave);
		window.addEventListener('scroll', handleScroll, { passive: true });

		return () => {
			document.removeEventListener('mouseleave', handleMouseLeave);
			window.removeEventListener('scroll', handleScroll);
		};
	}, [hasShown, delay, sensitivity, pageLoadTime]);

	return { shouldShow, close };
}