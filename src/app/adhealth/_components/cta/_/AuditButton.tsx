// src/app/adhealth/_components/cta/AuditButton.tsx

'use client';
import { Calendar } from 'lucide-react';
import { useState } from 'react';

interface AuditButtonProps {
	onClick?: () => void;
	variant?: 'full' | 'minimal';
	className?: string;
}

export function AuditButton({ onClick, variant = 'full', className = "" }: AuditButtonProps) {
	const [isHovered, setIsHovered] = useState(false);

	if (variant === 'minimal') {
		return (
			<button
				onClick={onClick}
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
				className={`
          group relative px-4 py-2.5 rounded-xl
          bg-gradient-to-r from-purple-600/10 to-blue-600/10
          border border-purple-500/20
          hover:border-purple-500/40
          transition-all duration-300
          ${className}
        `}
			>
				<span className="text-sm font-semibold text-foreground">
					Book <span className="text-muted-foreground">— FREE</span>
				</span>
			</button>
		);
	}

	return (
		<button
			onClick={onClick}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			className={`
        relative w-full
        bg-gradient-to-r from-purple-600 to-blue-600
        hover:from-purple-500 hover:to-blue-500
        text-white font-bold py-4 px-6 rounded-xl
        transition-all duration-300 ease-out
        hover:-translate-y-1 hover:scale-105
        ${isHovered ? 'shadow-[0_20px_60px_-15px_rgba(168,85,247,0.6)]' : 'shadow-lg'}
        active:scale-95 active:translate-y-0
        disabled:from-gray-600 disabled:to-gray-600 
        disabled:cursor-not-allowed disabled:transform-none
        ${className}
      `}
		>
			<div className="flex items-center justify-between gap-4">
				<div className="flex items-center gap-3">
					<Calendar className="w-5 h-5 opacity-70" />
					<span className="relative z-10">Book Ad Audit</span>
				</div>
				<span className="text-sm opacity-70 bg-gradient-to-r from-purple-200 to-blue-200 bg-clip-text text-transparent">
					— FREE
				</span>
			</div>

			{/* Gradient glow effect */}
			<div
				className={`
          absolute inset-0 rounded-xl
          bg-gradient-to-r from-purple-400 to-blue-400
          opacity-0 blur-xl
          transition-opacity duration-300
          ${isHovered ? 'opacity-50' : 'opacity-0'}
        `}
				style={{ zIndex: -1 }}
			/>
		</button>
	);
}