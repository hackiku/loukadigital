// src/app/adhealth/_components/cta/AuditDrawerTrigger.tsx
// Simple button that triggers the drawer via callback

'use client';
import { Calendar } from 'lucide-react';

interface AuditDrawerTriggerProps {
	variant?: 'full' | 'minimal';
	onOpen: () => void;
}

export function AuditDrawerTrigger({ variant = 'full', onOpen }: AuditDrawerTriggerProps) {
	if (variant === 'minimal') {
		return (
			<button
				onClick={onOpen}
				className="group relative px-4 py-2.5 rounded-xl bg-gradient-to-r from-purple-600/10 to-blue-600/10 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
			>
				<span className="text-sm font-semibold text-foreground">
					Book <span className="text-muted-foreground">— FREE</span>
				</span>
			</button>
		);
	}

	return (
		<button
			onClick={onOpen}
			className="relative w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-105 shadow-lg hover:shadow-[0_20px_60px_-15px_rgba(168,85,247,0.6)] active:scale-95 active:translate-y-0"
		>
			<div className="flex items-center justify-between gap-4">
				<div className="flex items-center gap-3">
					<Calendar className="w-5 h-5 opacity-70" />
					<span>Book Ad Audit</span>
				</div>
				<span className="text-sm opacity-70 bg-gradient-to-r from-purple-200 to-blue-200 bg-clip-text text-transparent">
					— FREE
				</span>
			</div>
		</button>
	);
}

