// src/app/adhealth/_components/scarcity/ExitIntentModal.tsx
'use client';
import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { AuditForm } from '../cta/AuditForm';

interface ExitIntentModalProps {
	isOpen: boolean;
	onClose: () => void;
}

export function ExitIntentModal({ isOpen, onClose }: ExitIntentModalProps) {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		if (isOpen) {
			setTimeout(() => setIsVisible(true), 50);
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
            rounded-2xl border-2 border-red-500/50 shadow-2xl
            transition-all duration-300 transform
            ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}
          `}
				>
					{/* Close Button */}
					<button
						onClick={onClose}
						className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors z-10"
						aria-label="Close"
					>
						<X className="w-6 h-6" />
					</button>

					{/* Content */}
					<div className="p-8 md:p-10">
						{/* Headline */}
						<div className="text-center mb-8">
							<h2 className="text-3xl md:text-4xl font-black mb-3">
								<span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
									Wait! Before You Go...
								</span>
							</h2>
							<p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
								Most accounts leak{' '}
								<span className="text-red-400 font-bold">£4k-15k/month</span>
								{' '}on fixable issues. 
							</p>
							<p className="text-base text-muted-foreground mt-2">
								Get the free diagnostic checklist and find yours in ~10 minutes 👇
							</p>
						</div>

						{/* Form */}
						<AuditForm />

						{/* Trust Badge */}
						{/* <div className="flex items-center justify-center gap-2 mt-6 pt-6 border-t border-border/50">
							<div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
							<p className="text-xs text-muted-foreground">
								<span className="text-foreground font-semibold">127 companies</span> found their leak this month
							</p>
						</div> */}
					</div>
				</div>
			</div>
		</>
	);
}