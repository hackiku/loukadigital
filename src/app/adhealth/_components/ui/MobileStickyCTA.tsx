// src/app/adhealth/_components/ui/MobileStickyCTA.tsx

'use client';
import { useEffect, useState } from 'react';

export function MobileStickyCTA() {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			// Show after scrolling past hero
			setIsVisible(window.scrollY > 600);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const scrollToForm = () => {
		document.getElementById('audit-form')?.scrollIntoView({
			behavior: 'smooth',
			block: 'center'
		});
	};

	if (!isVisible) return null;

	return (
		<div className="md:hidden fixed bottom-0 left-0 right-0 z-40 p-4 bg-gradient-to-t from-black via-black/95 to-transparent">
			<button
				onClick={scrollToForm}
				className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-bold py-4 rounded-xl shadow-lg transform active:scale-95 transition-all"
			>
				Get My Free Audit →
			</button>
		</div>
	);
}
