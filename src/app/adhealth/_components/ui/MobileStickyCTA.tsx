// src/app/adhealth/_components/ui/MobileStickyCTA.tsx

'use client';
import { useEffect, useState } from 'react';
import { ChevronUp, Download } from 'lucide-react';
import { useDrawer } from '../../_context/DrawerContext';

export function MobileStickyCTA() {
	const [isVisible, setIsVisible] = useState(false);
	const [isExpanded, setIsExpanded] = useState(false);
	const [lastScrollY, setLastScrollY] = useState(0);
	const { openDrawer } = useDrawer();

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollY = window.scrollY;
			const scrollingUp = currentScrollY < lastScrollY;

			// Show after scrolling past hero (600px)
			const shouldShow = currentScrollY > 600;
			setIsVisible(shouldShow);

			// Pop up when scrolling up (like navbar but opposite)
			if (shouldShow && scrollingUp && Math.abs(currentScrollY - lastScrollY) > 50) {
				setIsExpanded(true);
				// Auto-collapse after 3s
				setTimeout(() => setIsExpanded(false), 3000);
			} else if (!scrollingUp) {
				setIsExpanded(false);
			}

			setLastScrollY(currentScrollY);
		};

		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => window.removeEventListener('scroll', handleScroll);
	}, [lastScrollY]);

	if (!isVisible) return null;

	return (
		<div
			className={`md:hidden fixed bottom-0 left-0 right-0 z-40 transition-transform duration-300 ${isExpanded ? 'translate-y-0' : 'translate-y-[calc(100%-2rem)]'
				}`}
		>
			{/* Tab handle */}
			<div
				className="flex justify-center cursor-pointer"
				onClick={() => setIsExpanded(!isExpanded)}
			>
				<div className="bg-gradient-to-r from-purple-600/80 to-blue-600/70 px-6 py-2 rounded-t-xl flex items-center gap-2">
					<Download className="w-3 h-3 text-white/60" />
					<span className="text-xs font-semibold text-white">Free PDF</span>
					<ChevronUp
						className={`w-4 h-4 text-white transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''
							}`}
					/>
				</div>
			</div>

			{/* Expandable content */}
			<div className="bg-gradient-to-t from-black via-black/98 to-black/95 p-4 pt-2 backdrop-blur-sm border-t border-purple-500/20">
				<button
					onClick={() => {
						openDrawer();
						setIsExpanded(false);
					}}
					className="mx-auto w-3/4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-bold py-3.5 rounded-xl shadow-lg transform active:scale-95 transition-all flex items-center justify-center gap-2"
				>
					<Download className="w-5 h-5" />
					<span>Get Free Checklist</span>
				</button>
				<p className="text-xs text-center text-muted-foreground mt-2">
					Find your ad waste in ~10 minutes
				</p>
			</div>
		</div>
	);
}