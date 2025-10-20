// src/app/adleak/_context/AuditContext.tsx

'use client';
import { createContext, useContext, useState, useCallback } from 'react';
import type { ReactNode } from 'react';

interface AuditData {
	monthlyBudget: number;
	selectedSins: string[];
	monthlyWaste: number;
	yearlyWaste: number;
	score: number;
	fit: 'poor' | 'borderline' | 'good' | 'perfect' | 'critical';
	email?: string;
}

interface AuditContextValue {
	data: AuditData;
	updateBudget: (budget: number) => void;
	updateSins: (sins: string[]) => void;
	updateWaste: (monthly: number, yearly: number) => void;
	updateScore: (score: number, fit: AuditData['fit']) => void;
	updateEmail: (email: string) => void;
}

const AuditContext = createContext<AuditContextValue | undefined>(undefined);

export function AuditProvider({ children }: { children: ReactNode }) {
	const [data, setData] = useState<AuditData>({
		monthlyBudget: 10000,
		selectedSins: [],
		monthlyWaste: 0,
		yearlyWaste: 0,
		score: 90,
		fit: 'poor',
	});

	// ✅ USE CALLBACK TO PREVENT RECREATING FUNCTIONS
	const updateBudget = useCallback((budget: number) => {
		setData(prev => ({ ...prev, monthlyBudget: budget }));
	}, []);

	const updateSins = useCallback((sins: string[]) => {
		setData(prev => ({ ...prev, selectedSins: sins }));
	}, []);

	const updateWaste = useCallback((monthly: number, yearly: number) => {
		setData(prev => ({
			...prev,
			monthlyWaste: monthly,
			yearlyWaste: yearly
		}));
	}, []);

	const updateScore = useCallback((score: number, fit: AuditData['fit']) => {
		setData(prev => ({ ...prev, score, fit }));
	}, []);

	const updateEmail = useCallback((email: string) => {
		setData(prev => ({ ...prev, email }));
	}, []);

	return (
		<AuditContext.Provider
			value={{
				data,
				updateBudget,
				updateSins,
				updateWaste,
				updateScore,
				updateEmail,
			}}
		>
			{children}
		</AuditContext.Provider>
	);
}

export function useAudit() {
	const context = useContext(AuditContext);
	if (!context) {
		throw new Error('useAudit must be used within AuditProvider');
	}
	return context;
}