// src/app/adhealth/audit/assets/StatCard.tsx
'use client';

interface StatCardProps {
	content: string;
	className?: string;
}

export function StatCard({ content, className = '' }: StatCardProps) {
	// Don't render if no content
	if (!content) {
		return null;
	}

	return (
		<div className={`rounded-2xl border-2 border-purple-500/30 bg-gradient-to-br from-purple-500/10 to-blue-500/10 backdrop-blur-sm p-6 flex items-center justify-center text-center shadow-xl ${className}`}>
			<p className="text-xl md:text-2xl font-bold text-foreground leading-tight">
				{content}
			</p>
		</div>
	);
}