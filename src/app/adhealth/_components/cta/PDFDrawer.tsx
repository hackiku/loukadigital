// src/app/adhealth/_components/cta/PDFDrawer.tsx
"use client"

import type React from "react"

// Import necessary components
import {
	Drawer, 
	DrawerContent, 
	DrawerClose, 
	// Make sure to import DrawerHeader
	DrawerTitle, 
	DrawerHeader
} from "~/components/ui/drawer"
import { X } from "lucide-react"

interface PDFDrawerProps {
	open: boolean
	onOpenChange: (open: boolean) => void
	children: React.ReactNode
}

export function PDFDrawer({ open, onOpenChange, children }: PDFDrawerProps) {
	return (
		<Drawer open={open} onOpenChange={onOpenChange}>
			<DrawerContent className="max-w-2xl mx-auto">
				
				<DrawerHeader className="sr-only">
					<DrawerTitle>Meta Ad 7 Sins Checklist Download</DrawerTitle>
				</DrawerHeader>

				<DrawerClose className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors z-10">
					<X className="w-6 h-6" />
				</DrawerClose>
				
				{/* This is where your PDFContainer (children) goes */}
				{children}
			</DrawerContent>
		</Drawer>
	)
}