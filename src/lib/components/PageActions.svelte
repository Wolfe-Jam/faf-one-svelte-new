<script>
	// Bottom-of-page actions row.
	// - Sponsor button ALWAYS shows — fits any page (even legal/pricing: a B2B reader may convert).
	// - Share-on-𝕏 shows ONLY when `headline` is passed — keep it to genuine pages of interest
	//   (wolfejam: "if in doubt, don't"). The share tweet is built from headline + points + CTA.
	// Usage:
	//   <PageActions />                                              → sponsor only
	//   <PageActions headline=".." point1=".." point2=".." url=".." hashtags=".." /> → sponsor + share
	//   <PageActions headline=".." ... cta="uvx faf" />              → override the CTA
	//   <PageActions headline=".." ... sponsor={false} />            → share only
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
