// FAF X-share formula — ONE source of truth for every "Share on X" we offer.
// Doctrine: every share is a distribution surface, not a courtesy link.
// Pre-fills a crafted post via web intent (text + url), never a bare URL.
//
// DEFAULT CRAFT (locked 2026-07-31 — Compactable reference):
//   1. Ship line     🏁 Just shipped: <pkg> vX — <Edition>
//   2. Cold open     one true stranger line (why care)
//   3. Receipts      1–2 scannable kill lines (split long leads)
//   4. Short row     Archive-first · dual-impl · live on PyPI
//   5. Install CTA   uvx / bunx / npm one-liner
//   6. URL           own final line (this helper appends it)
//
// Full doctrine: ~/.claude/skills/pubblog/SKILL.md § Step 4.6
// Reference post: src/routes/blog/compactable-memory/+page.svelte
//
// The page URL unfurls as an OG card on X (title + description + image),
// so DON'T repeat the full page description here — that's the card's job.
//
// Parts mode (when `text` is empty):
//   {headline}            ← ship line
//                            (blank line)
//   {point1..3}           ← cold open + receipts (scannable)
//                            (blank line)
//   {ctaPrefix} {cta}     ← e.g. "Try it → uvx claude-fafm-sdk --version"
//
// Used by <ShareX> (standalone pill) AND blog posts:
//   buildShareIntent({ text: shareText, url: shareUrl })

export function buildShareIntent({
	text = '',
	headline = '',
	point1 = '',
	point2 = '',
	point3 = '',
	cta = 'bunx faf',
	ctaPrefix = 'Try it →',
	url = '',
	hashtags = ''
} = {}) {
	// `text` = a pre-assembled tweet body (blog posts craft their own shareText).
	// Otherwise, assemble from parts (PageActions / ShareX).
	let tweet = text;
	if (!tweet) {
		const lines = [];
		if (headline) lines.push(headline);
		const pts = [point1, point2, point3].filter(Boolean);
		if (pts.length) lines.push('', ...pts);
		if (cta) lines.push('', `${ctaPrefix} ${cta}`);
		tweet = lines.join('\n');
	}

	// Put the link on its own final line inside `text` — do NOT also pass url=
	// to X's intent (X would append url onto the last line with a space and glue
	// it to the install command). Unfurl/OG still works from a full URL in body.
	tweet = tweet.replace(/\s+$/, '');
	if (url) {
		tweet = `${tweet}\n\n${url}`;
	}

	return (
		'https://twitter.com/intent/tweet?text=' + encodeURIComponent(tweet) +
		(hashtags ? '&hashtags=' + encodeURIComponent(hashtags) : '')
	);
}
