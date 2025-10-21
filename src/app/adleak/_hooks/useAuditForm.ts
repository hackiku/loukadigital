// src/app/adleak/_hooks/useAuditForm.ts
'use client';
import { useState } from 'react';
import { useAudit } from '../_context/AuditContext';

// This hook is now tailored for the AdLeak data structure
export function useAuditForm() {
	const { data, updateEmail } = useAudit();
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [isSuccess, setIsSuccess] = useState(false);
	const [error, setError] = useState<string | null>(null);

	const handleSubmit = async (email: string) => {
		if (!email || isSubmitting) return;

		setIsSubmitting(true);
		setError(null);
		updateEmail(email);

		try {
			// This will eventually hit your ConvertKit API route
			// const response = await fetch('/api/subscribe', {
			// 	method: 'POST',
			// 	headers: { 'Content-Type': 'application/json' },
			// 	body: JSON.stringify({
			// 		email,
			// 		monthlyBudget: data.monthlyBudget,
			// 		monthlyWaste: data.monthlyWaste,
			// 		score: data.score,
			// 		selectedSins: data.selectedSins.join(','),
			// 	}),
			// });
			// if (!response.ok) throw new Error('Submission failed. Please try again.');

			// Using a promise for testing until the API route is live
			await new Promise(resolve => setTimeout(resolve, 1000));

			setIsSuccess(true);
		} catch (err: any) {
			setError(err.message || 'Something went wrong.');
			console.error('Form submission error:', err);
		} finally {
			setIsSubmitting(false);
		}
	};

	return { handleSubmit, isSubmitting, isSuccess, error };
}