// src/app/adhealth/_components/proof/CurrentVisitors.tsx

'use client';
import { Users } from 'lucide-react';
import { useState, useEffect } from 'react';

export function CurrentVisitors() {
	const [count, setCount] = useState(7);

	useEffect(() => {
		// Simulate visitor count changes
		const interval = setInterval(() => {
			setCount(prev => {
				const change = Math.random() > 0.5 ? 1 : -1;
				const newCount = prev + change;
				return Math.max(5, Math.min(12, newCount)); // Keep between 5-12
			});
		}, 8000);

		return () => clearInterval(interval);
	}, []);

	return (
		<div className="inline-flex items-center gap-2 px-3 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-sm">
			<span className="relative flex h-2 w-2">
				<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
				<span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
			</span>
			<Users className="w-4 h-4 text-purple-300" />
			<span className="text-purple-300">
				<span className="font-semibold text-white">{count}</span> UK visitors viewing
			</span>
		</div>
	);
}