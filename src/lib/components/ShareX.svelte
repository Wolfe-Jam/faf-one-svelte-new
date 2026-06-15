<script>
	// "Share on 𝕏" intent builder — assembles a consistent tweet from parts.
	// Template:
	//   {headline}            ← hook: attention, but TRUE (not hype)
	//                            (blank line)
	//   {point1}              ← 2–3 scannable receipts/benefits
	//   {point2}
	//   {point3?}
	//                            (blank line)
	//   {ctaPrefix} {cta}     ← e.g. "Try it → bunx faf"
	// NOTE: the page URL auto-renders as an OG card on X (title + description +
	// image), so DON'T repeat the page description here — that's the card's job.
	let {
		headline = '',
		point1 = '',
		point2 = '',
		point3 = '',
		cta = 'bunx faf',
		ctaPrefix = 'Try it →',
		url = '',
		hashtags = ''
	} = $props();

	const tweet = $derived.by(() => {
		const lines = [];
		if (headline) lines.push(headline);
		const pts = [point1, point2, point3].filter(Boolean);
		if (pts.length) lines.push('', ...pts);
		if (cta) lines.push('', `${ctaPrefix} ${cta}`);
		return lines.join('\n');
	});

	const href = $derived(
		'https://twitter.com/intent/tweet?text=' + encodeURIComponent(tweet) +
		(url ? '&url=' + encodeURIComponent(url) : '') +
		(hashtags ? '&hashtags=' + encodeURIComponent(hashtags) : '')
	);
</script>

<a {href} target="_blank" rel="noopener" class="share-x" aria-label="Share on X">Share on 𝕏</a>

<style>
	.share-x {
		display: inline-flex;
		align-items: center;
		height: 32px;
		padding: 0 1.1rem;
		background: #000;
		color: #fff;
		border: 1px solid #333;
		border-radius: 6px;
		font-weight: 700;
		font-size: 0.9rem;
		text-decoration: none;
		box-sizing: border-box;
		transition: transform 0.2s ease, background 0.2s ease;
	}

	.share-x:hover {
		background: #1a1a1a;
		transform: translateY(-1px);
	}
</style>
