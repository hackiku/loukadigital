// src/app/adhealth/audit/calculator/BudgetSlider.tsx
'use client';
import { useState } from 'react';

interface BudgetSliderProps {
	value: number;
	onChange: (value: number) => void;
}

export function BudgetSlider({ value, onChange }: BudgetSliderProps) {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="relative">
			{/* Budget Display */}
			<button
				onClick={() => setIsOpen(!isOpen)}
				className="px-3 py-2 rounded-full bg-muted/50 hover:bg-muted border border-border/50 transition-all"
			>
				<span className="text-md font-semibold text-foreground">
					£{value.toLocaleString()}
				</span>
				<span className="text-xs text-muted-foreground ml-1">/mo</span>
			</button>

			{/* Slider Popup */}
			{isOpen && (
				<>
					{/* Backdrop to close */}
					<div
						className="fixed inset-0 z-10"
						onClick={() => setIsOpen(false)}
					/>

					<div className="absolute bottom-full left-0 mb-2 p-4 bg-card rounded-xl border border-border/50 shadow-xl min-w-[280px] z-20">
						<label className="text-xs text-muted-foreground mb-2 block">Monthly Ad Spend</label>
						<input
							type="range"
							min="1000"
							max="50000"
							step="1000"
							value={value}
							onChange={(e) => onChange(Number(e.target.value))}
							className="w-full h-2 bg-muted rounded-full appearance-none cursor-pointer accent-purple-500"
						/>
						<div className="flex justify-between text-xs text-muted-foreground mt-2">
							<span>£1k</span>
							<span>£25k</span>
							<span>£50k</span>
						</div>
					</div>
				</>
			)}
		</div>
	);
}