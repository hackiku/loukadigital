// src/app/adhealth/_components/navigation/Navbar.tsx

"use client"
import { useState, useEffect } from "react"
// import { AvailabilityBar } from '../../pricing/AvailabilityBar';
// import { AuditDrawerTrigger } from '../cta/AuditDrawerTrigger';
import { PDFButton } from "../cta/PDFButton"
import { LogoModule } from "./LogoModule"

interface NavbarProps {
	onOpenDrawer: () => void
}

export default function Navbar({ onOpenDrawer }: NavbarProps) {
	const [isVisible, setIsVisible] = useState(true)
	const [lastScrollY, setLastScrollY] = useState(0)

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollY = window.scrollY
			const scrollDelta = currentScrollY - lastScrollY

			if (Math.abs(scrollDelta) > 50) {
				setIsVisible(scrollDelta < 0 || currentScrollY < 100)
				setLastScrollY(currentScrollY)
			}
		}

		window.addEventListener("scroll", handleScroll, { passive: true })
		return () => window.removeEventListener("scroll", handleScroll)
	}, [lastScrollY])

	return (
		<>
			{/* Top gradient fade */}
			<div
				className="fixed -top-1 left-0 right-0 h-20 pointer-events-none z-40
                   bg-gradient-to-b from-background via-background/70 to-transparent"
			/>

			{/* Nav */}
			<nav
				className={`
          fixed top-0 left-0 right-0 z-50
          max-w-[1920px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24
          transition-all duration-300
          ${isVisible ? "translate-y-4" : "-translate-y-full"}
        `}
			>
				<div className="flex items-start justify-between py-2">
					{/* Logo */}
					<LogoModule />

					{/* Right side - PDF button with minimal text */}
					<div className="scale-80 sm:scale-100 -mr-2 sm:mr-0 flex items-center gap-3">
						<PDFButton onClick={onOpenDrawer} text="Get PDF" />
					</div>
				</div>
			</nav>
		</>
	)
}
