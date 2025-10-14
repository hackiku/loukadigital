// FILE: src/app/adhealth/_components/cta/AuditForm.tsx
// =============================================================================

'use client';
import { useState } from 'react';
import { useAuditForm } from './useAuditForm';

export function AuditForm() {
	const { handleSubmit, isLoading } = useAuditForm();
	const [email, setEmail] = useState('');
	const [spend, setSpend] = useState('');

	const onSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		await handleSubmit({ email, spend });
	};

	return (
		<form onSubmit={onSubmit} className="space-y-4">
			<div>
				<input
					type="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					placeholder="Enter your email"
					required
					className="w-full px-4 py-3.5 bg-gray-900/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
				/>
			</div>

			<div>
				<select
					value={spend}
					onChange={(e) => setSpend(e.target.value)}
					required
					className="w-full px-4 py-3.5 bg-gray-900/50 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all appearance-none cursor-pointer"
				>
					<option value="">Select Monthly Ad Spend</option>
					<option value="3000-5000">$3,000 - $5,000</option>
					<option value="5000-10000">$5,000 - $10,000</option>
					<option value="10000-25000">$10,000 - $25,000</option>
					<option value="25000+">$25,000+</option>
				</select>
			</div>

			<button
				type="submit"
				disabled={isLoading}
				className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 disabled:from-gray-600 disabled:to-gray-600 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl transition-all transform hover:scale-[1.02] active:scale-95 shadow-lg disabled:transform-none"
			>
				{isLoading ? 'Submitting...' : 'Get My Free Audit →'}
			</button>
		</form>
	);
}

