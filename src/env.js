import { defineEnvVars } from '@sveltejs/kit/env';

// Read at runtime. A variable that is not set reads as '' (every caller
// checks these with a truthy test, so '' behaves as missing did before).
export const variables = defineEnvVars({
	SUPABASE_URL2: { schema: (input) => input ?? '' },
	SUPABASE_SERVICE_KEY2: { schema: (input) => input ?? '' },
	RESEND_API_KEY: { schema: (input) => input ?? '' },
	STRIPE_SECRET_KEY: { schema: (input) => input ?? '' },
	FAFB_DRIVE_SECRET: { schema: (input) => input ?? '' },
	FAFB_DRIVE_ALLOW: { schema: (input) => input ?? '' }
});
