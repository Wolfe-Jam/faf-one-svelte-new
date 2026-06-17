// FAF X-share formula — ONE source of truth for every "Share on X" we offer.
// Doctrine: every share is a distribution surface, not a courtesy link.
// Pre-fills a crafted post via web intent (text + url), never a bare URL.
//
// The page URL auto-renders as an OG card on X (title + description + image),
// so DON'T repeat the page description here — that's the card's job.
//
//   {headline}            ← hook: attention, but TRUE (not hype)
//                            (blank line)
//   {point1..3}           ← 2–3 scannable receipts/benefits
//                            (blank line)
//   {ctaPrefix} {cta}     ← e.g. "Try it → bunx faf" (omit by passing cta: '')
//
// Used by <ShareX> (standalone pill) AND directly by pages that keep their own
// button styling: `<a href={buildShareIntent({...})} class="...">`.

export function buildShareIntent({
	headline = '',
	point1 = '',
	point2 = '',
	point3 = '',
	cta = 'bunx faf',
	ctaPrefix = 'Try it →',
	url = '',
	hashtags = ''
} = {}) {
	const lines = [];
	if (headline) lines.push(headline);
	const pts = [point1, point2, point3].filter(Boolean);
	if (pts.length) lines.push('', ...pts);
	if (cta) lines.push('', `${ctaPrefix} ${cta}`);
	const tweet = lines.join('\n');

	return (
		'https://twitter.com/intent/tweet?text=' + encodeURIComponent(tweet) +
		(url ? '&url=' + encodeURIComponent(url) : '') +
		(hashtags ? '&hashtags=' + encodeURIComponent(hashtags) : '')
	);
}
