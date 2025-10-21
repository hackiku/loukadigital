// src/app/adhealth/audit/calculator/SavingsValue.tsx
"use client";
import { TrendingUp } from "lucide-react";

interface SavingsValueProps {
	amount: number;
}

export function SavingsValue({ amount }: SavingsValueProps) {
	return (
		<div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl border border-green-500/30">
			<TrendingUp className="w-4 h-4 text-green-400" />
			<div>
				<div className="text-xs text-muted-foreground">Potential Savings</div>
				<div className="text-lg font-black text-green-400">
					£{amount > 0 ? amount.toLocaleString() : '--'}
				</div>
			</div>
		</div>
	);
}