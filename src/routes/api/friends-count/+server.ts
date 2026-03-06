/**
 * Friends of FAF Counter
 *
 * Public GET endpoint — returns how many of the 100 numbered licenses are claimed.
 */

import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { getFriendsCount } from '$lib/license-store';

export const GET: RequestHandler = async () => {
    try {
        const claimed = await getFriendsCount();
        return json(
            { claimed, total: 100 },
            { headers: { 'Cache-Control': 'public, max-age=60' } }
        );
    } catch {
        return json({ claimed: 0, total: 100 });
    }
};
