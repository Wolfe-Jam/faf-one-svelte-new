<svelte:head>
	<title>The FAF Trinity — Context · Memory · Agents | FAF</title>
	<meta name="description" content="The FAF Trinity, interactive: Context (.faf), Memory (.fafm), Agents (.fafa). Click a point to open it; the spacebar reads the whole at human speed or AI cache speed." />
	<meta property="og:title" content="The FAF Trinity — interactive" />
	<meta property="og:description" content="Context · Memory · Agents — the FAF format family, explained by touch." />
	<meta property="og:type" content="website" />
	<meta name="twitter:card" content="summary" />
</svelte:head>

<!-- The tool itself is the self-contained static file at /trinity.html (bulletproof
     vanilla HTML/CSS/JS). This route exists so /trinity is a real page — crawlable,
     in the sitemap, and a clean URL — while the fixed layout chrome (Home/Map/Blog
     badges, z-index 900+) floats over the auto-z-index iframe, staying reachable. -->
<iframe src="/trinity.html" title="The FAF Trinity — interactive" class="trinity-frame"></iframe>

<style>
	:global(body) { background: #060607; }
	.trinity-frame {
		position: fixed;
		inset: 0;
		width: 100%;
		height: 100%;
		border: 0;
		display: block;
	}
</style>
