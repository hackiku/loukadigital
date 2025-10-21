// src/app/adhealth/_components/cta/AuditDrawerContainer.tsx
'use client';

import { X } from 'lucide-react';
import Image from 'next/image';
import { AuditForm } from './AuditForm';

interface AuditDrawerContainerProps {
	isOpen: boolean;
	onClose: () => void;
}

export function AuditDrawerContainer({ isOpen, onClose }: AuditDrawerContainerProps) {
	return (
		<>
			{/* Backdrop */}
			<div
				className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
				onClick={onClose}
			/>

			{/* Elegant Drawer Panel */}
			<div
				className={`
          fixed bottom-0 right-0 z-[101]
          bg-card/95 backdrop-blur-xl border-t-2 md:border-2 border-purple-500/50
          p-6 md:p-8
          rounded-t-3xl md:rounded-2xl shadow-2xl
          transition-all duration-500 ease-out
          w-full max-w-lg
          ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}
          
          md:bottom-8 md:right-8 md:w-full md:max-w-2xl
          ${isOpen ? 'md:translate-y-0' : 'md:translate-y-16'}
        `}
			>
				{/* Close Button */}
				<button
					onClick={onClose}
					className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors z-10"
				>
					<X className="w-6 h-6" />
				</button>

				{/* Content Grid */}
				<div className="grid md:grid-cols-2 gap-8 items-center">
					{/* Left: Image (hidden on small screens for focus) */}
					<div className="hidden md:block relative w-full aspect-[500/707]">
						<Image
							src="/collateral/health-checklist-cover.webp"
							alt="Ad Health PDF Checklist"
							fill
							className="object-cover rounded-lg shadow-xl shadow-purple-500/10 transform -rotate-3"
						/>
					</div>

					{/* Right: Form & Text */}
					<div className="flex flex-col justify-center">
						<h3 className="text-2xl font-bold mb-2">
							Get the{' '}
							<span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
								7 Sins Checklist
							</span>
						</h3>
						<p className="text-muted-foreground text-sm mb-6">
							Enter your email to get the free 20-page PDF instantly in your inbox.
						</p>
						<AuditForm />
					</div>
				</div>
			</div>
		</>
	);
}