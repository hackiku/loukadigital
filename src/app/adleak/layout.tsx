// src/app/adleak/layout.tsx
'use client';

import { useState } from 'react';
import Navbar from './_components/navigation/Navbar';
import Footer from './_components/navigation/Footer';
import { CurrentVisitors } from './_components/proof/CurrentVisitors';
import { AuditDrawerContainer } from './_components/cta/AuditDrawerContainer';

interface AdLeakLayoutProps {
	children: React.ReactNode;
}

export default function AdLeakLayout({ children }: AdLeakLayoutProps) {
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);

	return (
		<div className="min-h-screen bg-background text-foreground overflow-x-hidden">
			{/* Navigation */}
			<Navbar onOpenDrawer={() => setIsDrawerOpen(true)} />

			{/* Audit Drawer/Modal */}
			<AuditDrawerContainer
				isOpen={isDrawerOpen}
				onClose={() => setIsDrawerOpen(false)}
			/>

			{/* Live Visitors Counter - Fixed Bottom Right */}
			<div className="fixed bottom-6 right-6 z-40">
				<CurrentVisitors />
			</div>

			{/* Main Content */}
			<main>
				{children}
			</main>

			{/* Footer */}
			<Footer />
		</div>
	);
}