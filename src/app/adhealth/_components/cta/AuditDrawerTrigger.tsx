// src/app/adleak/_components/cta/AuditDrawerTrigger.tsx
'use client';
import { DownloadCloud } from 'lucide-react'; // Changed icon for clarity

type BadgeVariant = 'free' | 'spots' | 'price' | 'none';

interface AuditDrawerTriggerProps {
	variant?: 'full' | 'minimal';
	onOpen: () => void;
	badge?: BadgeVariant;
	spotsLeft?: number;
	totalSpots?: number;
}

export function AuditDrawerTrigger({
	variant = 'full',
	onOpen,
	badge = 'free',
	spotsLeft = 7,
	totalSpots = 20
}: AuditDrawerTriggerProps) {

	// Badge component (no changes needed here)
	const Badge = () => {
		// ... (same badge logic as before)
		if (badge === 'none') return null;
		if (badge === 'free') return <span className="text-sm font-semibold text-purple-100">— FREE</span>;
		if (badge === 'spots') return (
			<div className="flex items-center gap-1.5">
				<span className="relative flex h-2 w-2">
					<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
					<span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
				</span>
				<span className="text-sm font-semibold text-purple-100">{spotsLeft}/{totalSpots}</span>
			</div>
		);
		if (badge === 'price') return <span className="text-sm font-semibold text-purple-100">£0</span>;
		return null;
	};

	if (variant === 'minimal') {
		return (
			<div className="relative">
				<div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#FEC5E2] to-[#81B3CA] translate-x-1 translate-y-1" aria-hidden="true" />
				<button onClick={onOpen} className="relative px-4 py-2.5 rounded-xl bg-gradient-to-r from-purple-600/90 to-blue-600/90 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-200 hover:translate-x-1 hover:translate-y-1 active:translate-x-1 active:translate-y-1 group">
					<div className="flex items-center gap-2 whitespace-nowrap">
						<span className="text-sm font-semibold text-foreground">Get PDF</span>
						<Badge />
					</div>
				</button>
			</div>
		);
	}

	return (
		<div className="relative w-full">
			<div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#FEC5E2] to-[#81B3CA] translate-x-1 translate-y-1" aria-hidden="true" />
			<button onClick={onOpen} className="relative w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-bold py-4 px-6 rounded-xl transition-all duration-200 ease-out shadow-lg hover:translate-x-1 hover:translate-y-1 active:translate-x-1 active:translate-y-1 group">
				<div className="flex items-center justify-between gap-3 whitespace-nowrap">
					<div className="flex items-center gap-3">
						<DownloadCloud className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity" />
						<span>Download PDF Checklist</span>
					</div>
					<Badge />
				</div>
			</button>
		</div>
	);
}