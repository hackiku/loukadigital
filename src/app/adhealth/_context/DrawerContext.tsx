// src/app/adhealth/_context/AuditContext.tsx

"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

interface DrawerContextType {
	isOpen: boolean
	openDrawer: () => void
	closeDrawer: () => void
	setIsOpen: (open: boolean) => void
}

const DrawerContext = createContext<DrawerContextType | undefined>(undefined)

export function DrawerProvider({ children }: { children: ReactNode }) {
	const [isOpen, setIsOpen] = useState(false)

	const openDrawer = () => setIsOpen(true)
	const closeDrawer = () => setIsOpen(false)

	return (
		<DrawerContext.Provider value={{ isOpen, openDrawer, closeDrawer, setIsOpen }}>{children}</DrawerContext.Provider>
	)
}

export function useDrawer() {
	const context = useContext(DrawerContext)
	if (context === undefined) {
		throw new Error("useDrawer must be used within a DrawerProvider")
	}
	return context
}
