// src/app/adhealth/_components/cta/AuditButton.tsx

'use client';
import { Calendar } from 'lucide-react';
import { useState } from 'react';

interface AuditButtonProps {
	onClick?: () => void;
	children?: React.ReactNode;
	className?: string;
}

export function AuditButton({ onClick, children = "Get My Free Audit →", className = "" }: AuditButtonProps) {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<button
			onClick={onClick}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			className={`
        relative w-full
        bg-gradient-to-r from-purple-600 to-blue-600
        hover:from-purple-500 hover:to-blue-500
        text-white font-bold py-4 rounded-xl
        transition-all duration-300 ease-out
        hover:-translate-y-1 hover:scale-105
        ${isHovered ? 'shadow-[0_20px_60px_-15px_rgba(168,85,247,0.6)]' : 'shadow-lg'}
        active:scale-95 active:translate-y-0
        disabled:from-gray-600 disabled:to-gray-600 
        disabled:cursor-not-allowed disabled:transform-none
        ${className}
      `}
		>
			<div className="flex items-center flex-inline gap-4 mx-auto">
			<Calendar />
			<span className="relative z-10">{children}</span>
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