// src/app/adleak/_components/cta/GetPDFButton.tsx
'use client';

interface GetPDFButtonProps {
	variant?: 'default' | 'minimal' | 'hero';
	className?: string;
}

export function GetPDFButton({ variant = 'default', className = '' }: GetPDFButtonProps) {
	const scrollToAudit = () => {
		const auditSection = document.getElementById('audit');
		if (auditSection) {
			auditSection.scrollIntoView({
				behavior: 'smooth',
				block: 'center'
			});

			// Optional: Trigger the sticky modal to open after scroll
			// Wait for scroll to finish, then trigger modal
			setTimeout(() => {
				const stickyButton = document.querySelector('[data-sticky-trigger]') as HTMLElement;
				if (stickyButton) {
					stickyButton.click();
				}
			}, 800);
		}
	};

	// Minimal variant (for navbar)
	if (variant === 'minimal') {
		return (
			<button
				onClick={scrollToAudit}
				className={`px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-semibold rounded-xl transition-all hover:scale-105 text-sm ${className}`}
			>
				Get PDF
			</button>
		);
	}

	// Hero variant (large, prominent)
	if (variant === 'hero') {
		return (
			<button
				onClick={scrollToAudit}
				className={`px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-bold rounded-xl transition-all hover:scale-105 text-lg shadow-xl shadow-purple-500/25 ${className}`}
			>
				Download Free PDF
			</button>
		);
	}

	// Default variant
	return (
		<button
			onClick={scrollToAudit}
			className={`px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-bold rounded-xl transition-all hover:scale-105 ${className}`}
		>
			Get Free PDF
		</button>
	);
}