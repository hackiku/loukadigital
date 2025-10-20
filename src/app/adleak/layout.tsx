// src/app/adleak/layout.tsx
'use client';

import { useState } from 'react';
import Navbar from './_components/navigation/Navbar';
import Footer from './_components/navigation/Footer';
import { CurrentVisitors } from './_components/proof/CurrentVisitors';
import { AuditDrawerContainer } from './_components/cta/AuditDrawerContainer';
import { MobileStickyCTA } from './_components/ui/MobileStickyCTA';
import { ExitIntentModal } from './_components/cta/ExitIntentModal';
import { AuditProvider } from './_context/AuditContext';
import { useExitIntent } from './_hooks/useExitIntent';

interface AdLeakLayoutProps {
	children: React.ReactNode;
}

function LayoutContent({ children }: AdLeakLayoutProps) {
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);
	const { shouldShow: showExitIntent, close: closeExitIntent } = useExitIntent({
		delay: 5000,
		aggressive: false
	});

	return (
		<div className="min-h-screen bg-background text-foreground overflow-x-hidden">
			{/* Navigation */}
			<Navbar onOpenDrawer={() => setIsDrawerOpen(true)} />

			{/* Audit Drawer/Modal */}
			<AuditDrawerContainer
				isOpen={isDrawerOpen}
				onClose={() => setIsDrawerOpen(false)}
			/>

			{/* Exit Intent Modal */}
			<ExitIntentModal
				isOpen={showExitIntent}
				onClose={closeExitIntent}
			/>

			{/* Mobile Sticky CTA */}
			<MobileStickyCTA />

			{/* Live Visitors Counter - Fixed Bottom Right */}
			<div className="fixed bottom-6 right-6 z-40">
				<CurrentVisitors />
			</div>

			{/* Main Content */}
			<main>{children}</main>

			{/* Footer */}
			<Footer />
		</div>
	);
}

export default function AdLeakLayout({ children }: AdLeakLayoutProps) {
	return (
		<AuditProvider>
			<LayoutContent>{children}</LayoutContent>
		</AuditProvider>
	);
}