// src/app/adhealth/_hooks/useAuditForm.ts

"use client"
import { useAudit } from "../_context/AuditContext"
import { api } from "~/trpc/react"

export function useAuditForm() {
	const { data, updateEmail } = useAudit()

	const submitAuditMutation = api.leads.submitAudit.useMutation({
		onSuccess: () => {
			console.log("[v0] Form submitted successfully")
		},
		onError: (error) => {
			console.error("[v0] Form submission error:", error)
		},
	})

	const handleSubmit = async (email: string) => {
		if (!email || submitAuditMutation.isPending) return

		updateEmail(email)

		submitAuditMutation.mutate({
			email,
			monthlyBudget: data.monthlyBudget,
			selectedSins: data.selectedSins,
			monthlyWaste: data.monthlyWaste,
			yearlyWaste: data.yearlyWaste,
			score: data.score,
			fit: data.fit,
		})
	}

	return {
		handleSubmit,
		isSubmitting: submitAuditMutation.isPending,
		isSuccess: submitAuditMutation.isSuccess,
		error: submitAuditMutation.error?.message ?? null,
	}
}
