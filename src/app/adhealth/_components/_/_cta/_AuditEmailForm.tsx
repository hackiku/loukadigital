// src/app/adhealth/_components/cta/EmailForm.tsx
'use client';
import { useState } from 'react';
import { useAudit } from '../../_context/AuditContext';

interface EmailFormProps {
	isGoodFit: boolean;
	scoreData?: { // Make it optional
		label: string;
		color: string;
		fit: 'poor' | 'borderline' | 'good' | 'perfect' | 'critical';
	};
	mobile?: boolean;
	isFree?: boolean;
	onSubmit?: (email: string) => Promise<void>;
}

export function EmailForm({
	isGoodFit,
	scoreData,
	mobile = false,
	isFree = false,
	onSubmit
}: EmailFormProps) {
	const [email, setEmail] = useState('');
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [isSuccess, setIsSuccess] = useState(false);
	const { data, updateEmail } = useAudit();

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		if (!email || isSubmitting) return;

		setIsSubmitting(true);
		updateEmail(email);

		try {
			if (onSubmit) {
				await onSubmit(email);
			} else {
				// Default: Call your TRPC endpoint or ConvertKit directly
				await new Promise(resolve => setTimeout(resolve, 1000));
			}
			setIsSuccess(true);
		} catch (error) {
			console.error('Form submission failed:', error);
		} finally {
			setIsSubmitting(false);
		}
	};

	// Dynamic messaging based on score
	const getHelperText = () => {
		if (!scoreData) {
			return "Download the PDF checklist and get your detailed audit";
		}

		switch (scoreData.fit) {
			case 'poor':
				return "Your account is already well-optimized. Get the PDF to verify";
			case 'borderline':
				return "Looking good, but self-diagnose in detail with the PDF";
			case 'good':
				return "Significant waste detected. Get the free audit to see exactly where";
			case 'perfect':
				return "Critical waste levels. Claim your free audit spots now (limited)";
			case 'critical':
				return "Emergency-level waste. We guarantee we'll find 10x our audit fee in waste";
			default:
				return "Download the PDF checklist and get your detailed audit";
		}
	};

	// Success state
	if (isSuccess) {
		return (
			<div className="p-4 rounded-xl bg-green-500/10 border border-green-500/30">
				<p className="text-sm text-green-400 text-center font-semibold">
					✓ Check your email for the 7 Sins PDF
				</p>
				<p className="text-xs text-muted-foreground text-center mt-2">
					Want us to audit your account? Reply to the email with screenshots.
				</p>
			</div>
		);
	}

	return (
		<div className="space-y-3">
			{/* Helper Text - Always shown */}
			<p className="text-xs text-muted-foreground">
				{getHelperText()}
			</p>

			{/* Form */}
			<form
				onSubmit={handleSubmit}
				className={`flex gap-3 ${mobile ? 'flex-col' : 'flex-row items-end'}`}
			>
				<input
					type="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					placeholder="Enter your email"
					required
					disabled={isSubmitting}
					className={`
            ${mobile ? 'w-full' : 'flex-1'} 
            px-4 py-3 bg-background/50 border border-border/50 rounded-xl 
            text-sm text-foreground placeholder-muted-foreground 
            focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 
            transition-all
            disabled:opacity-50 disabled:cursor-not-allowed
          `}
				/>

				<button
					type="submit"
					disabled={isSubmitting || !email}
					className={`
            ${mobile ? 'w-full' : 'flex-shrink-0'} 
            py-3 px-6 bg-gradient-to-r from-purple-600 to-blue-600 
            hover:from-purple-500 hover:to-blue-500 
            text-white font-bold rounded-xl 
            transition-all hover:scale-[1.02] 
            text-sm relative overflow-hidden group
            disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
          `}
				>
					<span className="relative z-10">
						{isSubmitting ? (
							'Sending...'
						) : (
							<>
								Get AdLeak Audit{' '}
								<span className="relative inline-block">
									{!isFree && (
										<span className="opacity-60">— £697</span>
									)}
									{isFree && (
										<>
											<span className="opacity-40 line-through">— £697</span>
											<span
												className="absolute -top-2 -right-8 text-green-400 font-black text-lg rotate-12"
												style={{ textShadow: '0 0 10px rgba(74, 222, 128, 0.5)' }}
											>
												FREE
											</span>
										</>
									)}
								</span>
							</>
						)}
					</span>

					{/* Scarcity bar */}
					<div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-[#D8330C] to-orange-600 opacity-80" />
				</button>
			</form>
		</div>
	);
}