/**
 * Friends of FAF Counter
 *
 * Public GET endpoint — returns how many of the 100 numbered licenses are claimed.
 */

import type { RequestHandler } from './$types';
import { getFriendsCount } from '#lib/license-store.js';

export const GET: RequestHandler = async () => {
    try {
        const claimed = await getFriendsCount();
        return Response.json(
            { claimed, total: 100 },
            { headers: { 'Cache-Control': 'public, max-age=60' } }
        );
    } catch {
        return Response.json({ claimed: 0, total: 100 });
    }
};
