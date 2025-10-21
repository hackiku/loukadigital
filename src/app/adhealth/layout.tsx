// src/app/adhealth/layout.tsx
"use client"

import type React from "react"
// layout
import Navbar from "./_components/navigation/Navbar"
import Footer from "./_components/navigation/Footer"
// conversion
import { PDFDrawer } from "./_components/cta/PDFDrawer"
import { PDFContainer } from "./_components/cta/PDFContainer"
import { ExitIntentModal } from "./_components/scarcity/ExitIntentModal"
import { MobileStickyCTA } from "./_components/ui/MobileStickyCTA"
import { CurrentVisitors } from "./_components/proof/CurrentVisitors"
// context
import { AuditProvider } from "./_context/AuditContext"
import { DrawerProvider, useDrawer } from "./_context/DrawerContext"
// hooks
import { useExitIntent } from "./_hooks/useExitIntent"

interface AdLeakLayoutProps {
	children: React.ReactNode
}

function LayoutContent({ children }: AdLeakLayoutProps) {
	const { isOpen, openDrawer, setIsOpen } = useDrawer()
	const { shouldShow: showExitIntent, close: closeExitIntent } = useExitIntent({
		delay: 5000,
		aggressive: false,
	})

	return (
		<div className="min-h-screen bg-background text-foreground overflow-x-hidden">
			{/* Navigation */}
			<Navbar onOpenDrawer={openDrawer} />

			{/* PDF Drawer */}
			<PDFDrawer open={isOpen} onOpenChange={setIsOpen}>
				<PDFContainer />
			</PDFDrawer>

			{/* Exit Intent Modal */}
			<ExitIntentModal isOpen={showExitIntent} onClose={closeExitIntent} />

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
	)
}

export default function AdLeakLayout({ children }: AdLeakLayoutProps) {
	return (
		<AuditProvider>
			<DrawerProvider>
				<LayoutContent>{children}</LayoutContent>
			</DrawerProvider>
		</AuditProvider>
	)
}
