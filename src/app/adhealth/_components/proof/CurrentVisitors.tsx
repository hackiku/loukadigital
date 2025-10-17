// src/app/adhealth/_components/proof/CurrentVisitors.tsx

'use client';
import { Eye } from 'lucide-react';
import { useState, useEffect } from 'react';

export function CurrentVisitors() {
	const [count, setCount] = useState(11);

	useEffect(() => {
		// Simulate visitor count changes
		const interval = setInterval(() => {
			setCount(prev => {
				const change = Math.random() > 0.5 ? 1 : -1;
				const newCount = prev + change;
				return Math.max(7, Math.min(15, newCount)); // Keep between 7-15
			});
		}, 8000);

		return () => clearInterval(interval);
	}, []);

	return (
		<div className="rounded-full inline-flex items-center gap-2 px-3 py-1
		 		 bg-gradient-to-r from-card/90 to-muted-background/30 backdrop-blur-sm shadow-lg border">
			{/* Pulsing eye icon */}
			{/* <Eye className="w-5 h-5 text-red-400 animate-pulse" strokeWidth={2.5} /> */}
			<span className="text-xl">🇬🇧</span>
			{/* Count */}
			<span className="text-sm font-semibold text-foreground tabular-nums">
				{count}
			</span>

			{/* Flag + viewing text */}
			<div className="flex items-center gap-1.5">
				<Eye className="w-3 h-3 text-red-400/40 animate-pulse" strokeWidth={2.5} />
				{/* <span className="text-lg">🇬🇧</span> */}
				{/* <span className="text-xs font-semibold text-red-300/80 uppercase tracking-wide">
					viewing
				</span> */}
			</div>
		</div>
	);
}