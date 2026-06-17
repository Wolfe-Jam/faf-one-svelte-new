<script>
	// Standalone "Share on 𝕏" pill. The share FORMULA lives in one place —
	// $lib/shareIntent.js (buildShareIntent) — shared with pages that keep their
	// own button styling. This component = that formula + the default pill style.
	import { buildShareIntent } from '$lib/shareIntent.js';

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

	const href = $derived(
		buildShareIntent({ headline, point1, point2, point3, cta, ctaPrefix, url, hashtags })
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
