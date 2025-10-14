// src/app/adhealth/_components/cta/AuditDrawerContainer.tsx

'use client';
import { X } from 'lucide-react';
import { AuditForm } from './AuditForm';

interface AuditDrawerContainerProps {
	isOpen: boolean;
	onClose: () => void;
}

export function AuditDrawerContainer({ isOpen, onClose }: AuditDrawerContainerProps) {
	return (
		<>
			{/* Backdrop */}
			{isOpen && (
				<div
					className="fixed inset-0 bg-background/80 backdrop-blur-sm z-[100]"
					onClick={onClose}
				/>
			)}

			{/* Drawer */}
			<div
				className={`
          fixed bottom-0 left-0 right-0 z-[101]
          bg-card border-t-2 border-purple-500/50
          rounded-t-3xl shadow-2xl
          transition-transform duration-500 ease-out
          ${isOpen ? 'translate-y-0' : 'translate-y-full'}
        `}
			>
				{/* Handle */}
				<div className="flex justify-center pt-4 pb-2">
					<div className="w-12 h-1.5 bg-muted rounded-full" />
				</div>

				{/* Close Button */}
				{isOpen && (
					<button
						onClick={onClose}
						className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors z-10"
					>
						<X className="w-6 h-6" />
					</button>
				)}

				{/* Content */}
				<div className="px-4 pb-8 md:px-8 max-h-[80vh] overflow-y-auto">
					<div className="max-w-2xl mx-auto">
						<h3 className="text-2xl md:text-3xl font-bold text-center mb-2">
							Get Your Free{' '}
							<span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
								Ad Health Audit
							</span>
						</h3>
						<p className="text-muted-foreground text-center mb-6 text-sm md:text-base">
							90 seconds to request • Delivered in 48 hours • 100% confidential
						</p>

						<AuditForm />

						<p className="text-center text-muted-foreground text-xs mt-4">
							<span className="inline-flex items-center gap-2">
								<span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
								157 audits completed this month
							</span>
						</p>
					</div>
				</div>
			</div>
		</>
	);
}