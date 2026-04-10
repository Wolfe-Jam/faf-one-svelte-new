/**
 * 🏎️ Supabase Client for FAF TURBO
 *
 * Serverless database for license storage
 */

import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { env } from '$env/dynamic/private';

// Lazy-initialize to avoid build-time errors
let supabaseClient: SupabaseClient | null = null;

/**
 * Get Supabase client (lazy-initialized)
 * Use this for server-side operations only
 */
export function getSupabase(): SupabaseClient | null {
    if (!supabaseClient) {
        const supabaseUrl = env.SUPABASE_URL2;
        const supabaseServiceKey = env.SUPABASE_SERVICE_KEY2;

        if (!supabaseUrl || !supabaseServiceKey) {
            console.warn('⚠️ Supabase not configured. Set SUPABASE_URL2 and SUPABASE_SERVICE_KEY2');
            return null;
        }

        supabaseClient = createClient(supabaseUrl, supabaseServiceKey, {
            auth: {
                autoRefreshToken: false,
                persistSession: false
            }
        });
    }
    return supabaseClient;
}

// Legacy export for compatibility (will be null at build time)
export const supabase = null as unknown as SupabaseClient;

/**
 * Database types
 */
export interface LicenseRow {
    id: string;
    key: string;
    email: string;
    tier: 'turbo' | 'legends' | 'pro';
    status: 'active' | 'past_due' | 'canceled';
    stripe_customer_id: string | null;
    stripe_subscription_id: string | null;
    created_at: string;
    expires_at: string | null;
    last_validated_at: string | null;
    license_number: number | null;
    metadata: Record<string, any>;
}
