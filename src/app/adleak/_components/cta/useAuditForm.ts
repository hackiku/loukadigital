// src/app/adhealth/_components/cta/useAuditForm.ts

'use client';
import { useState } from 'react';

interface FormData {
	email: string;
	spend: string;
}

export function useAuditForm() {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);

	const handleSubmit = async (data: FormData) => {
		setIsLoading(true);
		setError(null);

		try {
			// TODO: Replace with your actual API endpoint
			const response = await fetch('/api/audit-request', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(data),
			});

			if (!response.ok) throw new Error('Submission failed');

			// Success! Redirect or show success message
			window.location.href = '/thank-you';
		} catch (err) {
			setError('Something went wrong. Please try again.');
			console.error('Form submission error:', err);
		} finally {
			setIsLoading(false);
		}
	};

	return { handleSubmit, isLoading, error };
}
