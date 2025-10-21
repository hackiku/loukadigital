// src/app/adhealth/_components/cta/AuditForm.tsx
"use client"
import { useState, useEffect, useRef } from "react"
import type React from "react"

import { useAudit } from "../../_context/AuditContext"
import { useAuditForm } from "../../_hooks/useAuditForm"
import { Slider } from "~/components/ui/slider"

export function AuditForm() {
	const { data, updateBudget } = useAudit()
	const [email, setEmail] = useState("")
	const emailInputRef = useRef<HTMLInputElement>(null)
	const { handleSubmit, isSubmitting, isSuccess, error } = useAuditForm()

	useEffect(() => {
		if (typeof window !== "undefined" && window.innerWidth >= 768) {
			emailInputRef.current?.focus()
		}
	}, [])

	const onSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		handleSubmit(email)
	}

	if (isSuccess) {
		return (
			<div className="p-4 rounded-xl bg-green-500/10 border border-green-500/30 text-center">
				<p className="text-base text-green-400 font-semibold">✓ Check your email for the Meta Ads Checklist PDF!</p>
				<p className="text-xs text-muted-foreground mt-2">
					Want our team to run a full audit? Just reply to that email.
				</p>
			</div>
		)
	}

	const budgetTicks = [1000, 5000, 10000, 15000, 25000]

	return (
		<form onSubmit={onSubmit} className="space-y-6">
			{/* Monthly Ad Spend Slider */}
			<div className="space-y-3">
				<div className="flex justify-between items-baseline">
					<label htmlFor="budget" className="text-sm font-medium text-muted-foreground">
						Monthly Meta Ad Spend
					</label>
					<span className="text-lg font-bold text-foreground">£{data.monthlyBudget.toLocaleString()}</span>
				</div>
				<Slider
					id="budget"
					min={1000}
					max={25000}
					step={500}
					value={[data.monthlyBudget]}
					onValueChange={(value) => updateBudget(value[0]!)}
				/>
				<div className="flex justify-between">
					{budgetTicks.map((tick) => (
						<button
							key={tick}
							type="button"
							onClick={() => updateBudget(tick)}
							className={`text-xs transition-colors ${data.monthlyBudget === tick
								? "font-bold text-purple-400"
								: "text-muted-foreground hover:text-foreground"
								}`}
						>
							{tick >= 1000 ? `£${tick / 1000}k` : `£${tick}`}
						</button>
					))}
				</div>
			</div>

			{/* Email Input */}
			<input
				ref={emailInputRef}
				type="email"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				placeholder="Enter your email"
				required
				disabled={isSubmitting}
				className="w-full px-4 py-3 bg-background/50 border border-border/50 rounded-xl text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all disabled:opacity-50"
			/>

			{/* Submit Button */}
			<button
				type="submit"
				disabled={isSubmitting || !email}
				className="w-full py-3 px-6 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-bold rounded-xl transition-all hover:scale-[1.02] text-sm disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
			>
				{isSubmitting ? "Sending..." : "Download Free PDF"}
			</button>

			{error && <p className="text-xs text-red-400 text-center">{error}</p>}
		</form>
	)
}
