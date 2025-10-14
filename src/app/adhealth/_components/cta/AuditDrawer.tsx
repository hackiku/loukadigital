// src/app/adhealth/_components/cta/AuditDrawer.tsx

'use client';
import { useState } from 'react';
import { Calendar, X } from 'lucide-react';
import { AuditForm } from './AuditForm';
import { AuditButton } from './AuditButton';

interface AuditDrawerProps {
	triggerText?: string;
	peekOnHover?: boolean;
}

export function AuditDrawer({ triggerText = "Book Free Audit", peekOnHover = true }: AuditDrawerProps) {
	const [isOpen, setIsOpen] = useState(false);
	const [isPeeking, setIsPeeking] = useState(false);

	return (
		<>
			{/* Trigger Button */}
			<div
				onMouseEnter={() => peekOnHover && setIsPeeking(true)}
				onMouseLeave={() => setIsPeeking(false)}
			>
				<AuditButton onClick={() => setIsOpen(true)}>
					{triggerText}
				</AuditButton>
			</div>

			{/* Backdrop */}
			{isOpen && (
				<div
					className="fixed inset-0 bg-black/80 z-50 transition-opacity duration-300"
					onClick={() => setIsOpen(false)}
				/>
			)}

			{/* Drawer */}
			<div
				className={`
          fixed bottom-0 left-0 right-0 z-50 mx-4 md:mx-12 
          bg-[#1a2332] border-t-2 border-purple-500/50
          rounded-t-3xl shadow-2xl
          transition-transform duration-500 ease-out
          ${isOpen ? 'translate-y-0' : isPeeking ? 'translate-y-[calc(100%-80px)]' : 'translate-y-full'}
        `}
			>
				{/* Handle */}
				<div className="flex justify-center pt-4 pb-8">
					<div className="w-12 h-1.5 bg-gray-600 rounded-full" />
				</div>

				{/* Close Button */}
				{isOpen && (
					<button
						onClick={() => setIsOpen(false)}
						className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
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
						<p className="text-gray-400 text-center mb-6 text-sm md:text-base">
							90 seconds to request • Delivered in 48 hours • 100% confidential
						</p>

						<AuditForm />

						<p className="text-center text-gray-500 text-xs mt-4">
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