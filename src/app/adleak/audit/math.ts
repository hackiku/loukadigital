// src/app/adleak/audit/math.ts
import { sins } from '~/data/audit';

export function calculateWaste(monthlyBudget: number, selectedSins: string[]): number {
	if (selectedSins.length === 0) return 0;

	const totalPercent = selectedSins.reduce((sum, sinId) => {
		const sin = sins.find(s => s.id === sinId);
		return sum + (sin?.wastePercent || 0);
	}, 0);

	const avgPercent = totalPercent / selectedSins.length;
	return Math.round((monthlyBudget * avgPercent) / 100);
}

export function calculateScore(selectedSins: string[]): number {
	const maxScore = 90;
	const passedSins = sins.length - selectedSins.length;
	return Math.round((passedSins / sins.length) * maxScore);
}

export function getScoreLabel(score: number): {
	label: string;
	color: string;
	fit: 'poor' | 'borderline' | 'good' | 'perfect' | 'critical';
} {
	if (score >= 80) return { label: 'Already Optimized', color: 'text-green-400', fit: 'poor' };
	if (score >= 65) return { label: 'Borderline', color: 'text-yellow-400', fit: 'borderline' };
	if (score >= 45) return { label: 'Good Fit', color: 'text-blue-400', fit: 'good' };
	if (score >= 20) return { label: 'Perfect Fit', color: 'text-purple-400', fit: 'perfect' };
	return { label: 'Critical', color: 'text-red-400', fit: 'critical' };
}