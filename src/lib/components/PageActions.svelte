<script>
	// Bottom-of-page actions row.
	//
	// SITE DEFAULT (product / marketing pages): Sponsor | X POST
	//   Pass headline (+ points + cta + url) so Share on 𝕏 shows next to Sponsor.
	//   That pair IS the default chrome — one X, owned here. No second in-body X.
	//
	// BLOG: in-article owns X (prime — share-section / Feedback "Post on X").
	//   Use <PageActions /> with NO headline → Sponsor only. Never two X controls.
	//
	// RULE (locked 2026-08-03): ONE X control per page. Who owns it:
	//   site pages → this component  |  blog → in-article craft
	//
	// Share tweet = headline + points + CTA via buildShareIntent (when headline set).
	// Usage:
	//   <PageActions headline=".." point1=".." url=".." />  → site default: Sponsor | X
	//   <PageActions />                                      → Sponsor only (blog when article owns X)
	//   <PageActions headline=".." ... cta="uvx faf" />      → override CTA
	//   <PageActions headline=".." ... sponsor={false} />    → X only
	import ShareX from '$lib/components/ShareX.svelte';
	let {
		headline = '',
		point1 = '',
		point2 = '',
		point3 = '',
		cta = 'bunx faf',
		ctaPrefix = 'Try it →',
		url = '',
		hashtags = '',
		sponsor = true
	} = $props();
</script>

<div class="page-actions">
	{#if sponsor}
		<iframe src="https://github.com/sponsors/Wolfe-Jam/button" title="Sponsor Wolfe-Jam" height="32" width="114" style="border: 0; border-radius: 6px;"></iframe>
	{/if}
	{#if headline}
		<ShareX {headline} {point1} {point2} {point3} {cta} {ctaPrefix} {url} {hashtags} />
	{/if}
</div>

<style>
	.page-actions {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.9rem;
		flex-wrap: wrap;
		margin: 2.5rem 0 1rem;
	}

	.page-actions :global(iframe) {
		display: block;
	}
</style>
