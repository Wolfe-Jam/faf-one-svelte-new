import type { RequestHandler } from './$types';
import { findLicenseByKey } from '#lib/license-store.js';
import { isValidKeyFormat } from '#lib/license-generator.js';

/**
 * 🏎️ License Validation Endpoint
 *
 * Called by faf-turbo CLI to validate license keys
 *
 * POST /api/validate-license
 * Body: { key: "FAF-XXXX-XXXX-XXXX-XXXX" }
 *
 * Returns:
 * - valid: boolean
 * - tier: string (if valid)
 * - status: string (if valid)
 * - message: string
 */

export const POST: RequestHandler = async ({ request }) => {
    try {
        // Parse JSON body
        let body;
        try {
            body = await request.json();
        } catch (parseError) {
            // Malformed JSON
            return Response.json({
                valid: false,
                message: 'Invalid JSON in request body'
            }, { status: 400 });
        }

        const { key } = body;

        // Validate format
        if (!isValidKeyFormat(key)) {
            return Response.json({
                valid: false,
                message: 'Invalid license key format'
            }, { status: 400 });
        }

        // Find license
        const license = await findLicenseByKey(key);

        if (!license) {
            return Response.json({
                valid: false,
                message: 'License key not found'
            }, { status: 404 });
        }

        // Check status
        if (license.status !== 'active') {
            return Response.json({
                valid: false,
                message: `License is ${license.status}`,
                status: license.status
            });
        }

        // Valid license
        return Response.json({
            valid: true,
            tier: license.tier,
            status: license.status,
            message: 'License validated successfully'
        });

    } catch (error) {
        console.error('❌ Validation error:', error);
        return Response.json({
            valid: false,
            message: 'Validation failed'
        }, { status: 500 });
    }
};
