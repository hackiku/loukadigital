// src/app/adhealth/audit/layout/AuditTriggerWrapper.tsx
'use client';

interface AuditTriggerWrapperProps {
	currentSinNumber: number;
	monthlyBudget: number;
	savings: number;
	selectedCount: number;
	totalCount: number;
	onBudgetChange: (budget: number) => void;
	onClick: () => void;
	isExpanded: boolean;
}

export function AuditTriggerWrapper(props: AuditTriggerWrapperProps) {
	// If AuditTrigger breaks, just render a simple button
	return (
		<button
			onClick={props.onClick}
			className="px-6 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-bold rounded-xl transition-all"
		>
			{props.isExpanded ? 'Collapse' : 'Expand Calculator'}
			<div className="text-sm opacity-80 mt-1">
				{props.selectedCount}/{props.totalCount} sins • £{props.savings.toLocaleString()} waste
			</div>
		</button>
	);
}