/**
 * 🧪 Test Endpoint - Verify Setup
 *
 * Tests:
 * - API routes working
 * - Supabase connection
 * - Environment variables
 */

import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { getSupabase } from '$lib/supabase';
import { env } from '$env/dynamic/private';

export const GET: RequestHandler = async () => {
    const checks: Record<string, any> = {};

    // Check 1: Environment variables
    checks.envVars = {
        SUPABASE_URL: !!env.SUPABASE_URL,
        SUPABASE_SERVICE_KEY: !!env.SUPABASE_SERVICE_KEY,
        RESEND_API_KEY: !!env.RESEND_API_KEY,
        STRIPE_SECRET_KEY: !!env.STRIPE_SECRET_KEY,
    };

    // Check 2: Supabase connection
    const supabase = getSupabase();
    if (!supabase) {
        checks.supabase = {
            connected: false,
            error: 'Supabase not configured'
        };
        checks.licenseCount = { error: 'Supabase not configured' };
    } else {
        try {
            const { data, error } = await supabase
                .from('licenses')
                .select('key, email, tier, status')
                .eq('key', 'FAF-TEST-TEST-TEST-TEST')
                .single();

            if (error) {
                checks.supabase = {
                    connected: false,
                    error: error.message,
                    code: error.code
                };
            } else {
                checks.supabase = {
                    connected: true,
                    testLicense: data
                };
            }
        } catch (error) {
            checks.supabase = {
                connected: false,
                error: error instanceof Error ? error.message : 'Unknown error'
            };
        }

        // Check 3: License count
        try {
            const { count, error } = await supabase
                .from('licenses')
                .select('*', { count: 'exact', head: true });

            checks.licenseCount = error ? { error: error.message } : { total: count };
        } catch (error) {
            checks.licenseCount = {
                error: error instanceof Error ? error.message : 'Unknown error'
            };
        }
    }

    return json({
        status: 'ok',
        message: 'FAF TURBO API Test',
        timestamp: new Date().toISOString(),
        checks
    }, {
        headers: {
            'Cache-Control': 'no-store'
        }
    });
};
