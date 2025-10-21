// src/app/adhealth/_components/cta/PDFButton.tsx
'use client';

import { Download } from 'lucide-react';

interface PDFButtonProps {
	onClick: () => void;
	text?: string;
}

export function PDFButton({ onClick, text = 'Get Free Checklist' }: PDFButtonProps) {
	return (
		// Ensure the parent div can handle the shadow/translation space
		<div className="relative inline-block cursor-pointer">
			<div
				// Depth layer - uses inset-0 to match the width/height of the parent div
				className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#FEC5E2] to-[#81B3CA] translate-x-1 translate-y-1"
				aria-hidden="true"
			/>
			<button
				onClick={onClick}
				className="relative cursor-pointer
                   px-6 py-3.5
                   rounded-xl 
                   bg-gradient-to-r from-purple-600/90 to-blue-600/90 
								 hover:border-purple-500/40 
                   transition-all duration-200 
                   hover:translate-x-1 hover:translate-y-1 
                   active:translate-x-1 active:translate-y-1                     
                   shadow-lg hover:shadow-lg hover:shadow-purple-500/50
                   group"
			>
				<div className="flex items-center gap-3 whitespace-nowrap">
					<Download className="w-5 h-5 opacity-80 group-hover:opacity-100 transition-opacity" /> {/* Increased icon size */}
					<span className="text-base font-bold text-white">{text}</span> {/* Increased text size and boldness */}
				</div>
			</button>
		</div>
	);
}