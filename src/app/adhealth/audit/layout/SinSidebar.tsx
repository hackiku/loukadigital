// src/app/adhealth/audit/layout/SinSidebar.tsx
'use client';
import { sins } from '~/data/audit';
import { SinCheckbox } from '../sins/SinCheckbox';

interface SinSidebarProps {
	selectedSins: string[];
	onToggle: (sinId: string) => void;
	isExpanded: boolean;
	monthlyBudget: number;
}

export function SinSidebar({ selectedSins, onToggle, isExpanded, monthlyBudget }: SinSidebarProps) {
	return (
		<div className={`flex flex-col items-start gap-2 transition-all duration-500 overflow-hidden ${isExpanded ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
			}`}>
			{sins.map(sin => (
				<SinCheckbox
					key={sin.id}
					sin={sin}
					isSelected={selectedSins.includes(sin.id)}
					onToggle={() => onToggle(sin.id)}
					monthlyBudget={monthlyBudget}
				/>
			))}
		</div>
	);
}