// src/lib/convertkit.ts

import { env } from "~/env"; 

const CK_API_BASE = "https://api.convertkit.com/v3";

export async function subscribeToForm({
	formId,
	email,
	firstName,
	fields = {},
}: {
	formId: string;
	email: string;
	firstName?: string;
	fields?: Record<string, string>;
}) {
	const res = await fetch(`${CK_API_BASE}/forms/${formId}/subscribe`, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({
			api_key: env.CONVERTKIT_API_KEY,
			email,
			first_name: firstName,
			fields,
		}),
	});

	if (!res.ok) {
		const text = await res.text();
		throw new Error(`ConvertKit error: ${text}`);
	}

	return res.json();
}