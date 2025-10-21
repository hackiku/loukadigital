// src/app/adhealth/_components/cta/PDFDrawer.tsx
"use client"

import type React from "react"

import { Drawer, DrawerContent, DrawerClose, DrawerTitle } from "~/components/ui/drawer"
import { X } from "lucide-react"
// import { VisuallyHidden } from "@radix-ui/react-visually-hidden"

interface PDFDrawerProps {
	open: boolean
	onOpenChange: (open: boolean) => void
	children: React.ReactNode
}

export function PDFDrawer({ open, onOpenChange, children }: PDFDrawerProps) {
	return (
		<Drawer open={open} onOpenChange={onOpenChange}>
			<DrawerContent className="max-w-2xl mx-auto">
				{/* <VisuallyHidden> */}
					{/* <DrawerTitle>Download PDF Checklist</DrawerTitle> */}
				{/* </VisuallyHidden> */}
				<DrawerClose className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors z-10">
					<X className="w-6 h-6" />
				</DrawerClose>
				{children}
			</DrawerContent>
		</Drawer>
	)
}
