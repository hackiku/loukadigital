// src/app/adhealth/_components/cta/PDFButton.tsx
'use client';

import { Download } from 'lucide-react';

interface PDFButtonProps {
	onClick: () => void;
	text?: string;
}

export function PDFButton({ onClick, text = 'Get Free Checklist' }: PDFButtonProps) {
	return (
		<div className="relative">
			<div
				className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#FEC5E2] to-[#81B3CA] translate-x-1 translate-y-1"
				aria-hidden="true"
			/>
			<button
				onClick={onClick}
				className="relative px-4 py-2.5 rounded-xl bg-gradient-to-r from-purple-600/90 to-blue-600/90 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-200 hover:translate-x-1 hover:translate-y-1 active:translate-x-1 active:translate-y-1 group"
			>
				<div className="flex items-center gap-2 whitespace-nowrap">
					<Download className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity" />
					<span className="text-sm font-semibold text-foreground">{text}</span>
				</div>
			</button>
		</div>
	);
}