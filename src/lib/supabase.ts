/**
 * 🏎️ Supabase Client for FAF TURBO
 *
 * Serverless database for license storage
 */

import { createClient, SupabaseClient } from '@supabase/supabase-js';

// Lazy-initialize to avoid build-time errors
let supabaseClient: SupabaseClient | null = null;

/**
 * Get Supabase client (lazy-initialized)
 * Use this for server-side operations only
 */
export function getSupabase(): SupabaseClient | null {
    if (!supabaseClient) {
        const supabaseUrl = process.env.SUPABASE_URL;
        const supabaseServiceKey = process.env.SUPABASE_SERVICE_KEY;

        if (!supabaseUrl || !supabaseServiceKey) {
            console.warn('⚠️ Supabase not configured. Set SUPABASE_URL and SUPABASE_SERVICE_KEY');
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
    tier: 'turbo' | 'legends';
    status: 'active' | 'past_due' | 'canceled';
    stripe_customer_id: string | null;
    stripe_subscription_id: string | null;
    created_at: string;
    expires_at: string | null;
    last_validated_at: string | null;
    metadata: Record<string, any>;
}
