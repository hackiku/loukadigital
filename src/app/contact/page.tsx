// src/app/contact/page.tsx
// src/app/contact/page.tsx

import { redirect } from 'next/navigation';

/**
 * Server Component to handle a permanent redirect from /contact to /getresults.
 * This ensures the redirect happens early in the request lifecycle (server-side).
 */
export default function ContactRedirectPage() {
	// Perform a 307 Temporary Redirect by default, 
	// or specify 'permanent' for a 308 Permanent Redirect.
	// Assuming /getresults is the actual path to your main lead page (Audit/Results).
	redirect('/getresults');

	// Note: The redirect function throws an error that Next.js catches internally, 
	// so no subsequent code runs, but TypeScript requires a return value 
	// if not relying purely on 'redirect'.
	// If you prefer a 301, use: redirect('/getresults', 'permanent');
}

// Optional: You might want to define metadata if the redirect is slow or fails
export const metadata = {
	title: 'Contact - Redirecting...',
	robots: {
		index: false,
		follow: false,
	}
}