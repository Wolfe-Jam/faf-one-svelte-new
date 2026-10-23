/**
 * In-memory rate limit for endpoints that send email.
 * Per isolate only: it stops bursts from one client, not a spread-out attack.
 * A Cloudflare WAF rate-limit rule is the durable layer.
 */
const hits = new Map<string, number[]>();

/** True if `key` has made fewer than `max` calls in the last `windowMs`; records the call. */
export function allow(key: string, max: number, windowMs: number): boolean {
	const now = Date.now();
	const recent = (hits.get(key) || []).filter((t) => now - t < windowMs);
	if (recent.length >= max) {
		hits.set(key, recent);
		return false;
	}
	recent.push(now);
	hits.set(key, recent);
	if (hits.size > 5000) {
		for (const [k, ts] of hits) {
			if (ts.every((t) => now - t >= windowMs)) hits.delete(k);
		}
	}
	return true;
}
