// src/app/adhealth/_components/cta/ExitIntentModal.tsx
'use client';
import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { EmailForm } from './EmailForm';
import { useAudit } from '../../_context/AuditContext';

interface ExitIntentModalProps {
	isOpen: boolean;
	onClose: () => void;
}

export function ExitIntentModal({ isOpen, onClose }: ExitIntentModalProps) {
	const { data } = useAudit();
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		if (isOpen) {
			// Slight delay for animation
			setTimeout(() => setIsVisible(true), 50);
			// Prevent body scroll
			document.body.style.overflow = 'hidden';
		} else {
			setIsVisible(false);
			document.body.style.overflow = '';
		}

		return () => {
			document.body.style.overflow = '';
		};
	}, [isOpen]);

	if (!isOpen) return null;

	const hasCalculated = data.selectedSins.length > 0;

	return (
		<>
			{/* Backdrop */}
			<div
				className={`fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'
					}`}
				onClick={onClose}
			/>

			{/* Modal */}
			<div className="fixed inset-0 z-[101] flex items-center justify-center p-4">
				<div
					className={`
            relative w-full max-w-lg bg-card/95 backdrop-blur-xl 
            rounded-2xl border-2 border-purple-500/50 shadow-2xl
            transition-all duration-300 transform
            ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}
          `}
				>
					{/* Close Button */}
					<button
						onClick={onClose}
						className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors z-10"
					>
						<X className="w-6 h-6" />
					</button>

					{/* Content */}
					<div className="p-8 md:p-10">
						{/* Headline */}
						<div className="text-center mb-6">
							<h2 className="text-3xl md:text-4xl font-black mb-3">
								<span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
									Wait!
								</span>
							</h2>
							<p className="text-lg text-muted-foreground">
								{hasCalculated ? (
									<>
										You're leaving <span className="text-red-400 font-bold">£{data.monthlyWaste.toLocaleString()}/month</span> on the table
									</>
								) : (
									<>See your waste estimate in <span className="text-purple-400 font-bold">10 seconds</span></>
								)}
							</p>
						</div>

						{/* Show calculator if they haven't used it */}
						{!hasCalculated && (
							<div className="mb-6 p-6 rounded-xl bg-muted/30 border border-border/50">
								<label className="block text-sm text-muted-foreground mb-2">
									Monthly Ad Spend
								</label>
								<input
									type="range"
									min="3000"
									max="50000"
									step="1000"
									defaultValue="10000"
									className="w-full"
								/>
								<div className="text-2xl font-bold text-center mt-2">
									£10,000
								</div>
							</div>
						)}

						{/* Stats - If they've calculated */}
						{hasCalculated && (
							<div className="grid grid-cols-2 gap-4 mb-6">
								<div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30">
									<div className="text-xs text-muted-foreground mb-1">Monthly Waste</div>
									<div className="text-2xl font-bold text-red-400">
										£{data.monthlyWaste.toLocaleString()}
									</div>
								</div>
								<div className="p-4 rounded-xl bg-purple-500/10 border border-purple-500/30">
									<div className="text-xs text-muted-foreground mb-1">Yearly Impact</div>
									<div className="text-2xl font-bold text-purple-400">
										£{data.yearlyWaste.toLocaleString()}
									</div>
								</div>
							</div>
						)}

						{/* Email Form - FREE for exit intent */}
						<EmailForm
							isGoodFit={true}
							mobile={true}
							isFree={true}
						/>

						{/* Trust Badge */}
						<p className="text-xs text-center text-muted-foreground mt-4">
							Join 127 companies who found their leak this month
						</p>
					</div>
				</div>
			</div>
		</>
	);
}