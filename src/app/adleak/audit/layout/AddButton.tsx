// src/app/adhealth/audit/layout/AddButton.tsx
"use client";
import { Plus, Check } from "lucide-react";

interface AddButtonProps {
	sinId: string;
	isAdded: boolean;
	onAdd: (sinId: string) => void;
	className?: string;
}

export function AddButton({ sinId, isAdded, onAdd, className = '' }: AddButtonProps) {
	return (
		<button
			onClick={() => onAdd(sinId)}
			disabled={isAdded}
			className={`
        group relative
        ${isAdded
					? 'bg-green-500/20 border-green-500 cursor-default'
					: 'bg-purple-500/20 border-purple-500/50 hover:border-purple-500 hover:bg-purple-500/30 hover:scale-110'
				}
        border-2 rounded-xl px-4 py-2
        transition-all duration-200
        flex items-center gap-2
        ${className}
      `}
		>
			{/* Icon */}
			<div className={`
        w-5 h-5 rounded-full flex items-center justify-center
        ${isAdded ? 'bg-green-500/30' : 'bg-purple-500/30 group-hover:bg-purple-500/50'}
        transition-colors
      `}>
				{isAdded ? (
					<Check className="w-3 h-3 text-green-400" />
				) : (
					<Plus className="w-3 h-3 text-purple-400 group-hover:text-purple-300" />
				)}
			</div>

			{/* Text */}
			<span className={`
        text-sm font-semibold
        ${isAdded ? 'text-green-400' : 'text-purple-400 group-hover:text-purple-300'}
        transition-colors
      `}>
				{isAdded ? 'Added' : 'Add'}
			</span>

			{/* Pulse effect when not added */}
			{!isAdded && (
				<span className="absolute inset-0 rounded-xl border-2 border-purple-500 opacity-0 group-hover:opacity-100 group-hover:animate-ping" />
			)}
		</button>
	);
}