<script>
	// OG Image for FAF Agent — 1200x630
	// Mirrors MCPaaS card pattern: large central mark, name h1, tagline subtitle.
	// Render in dev (`npm run dev`), navigate to /og/agent, screenshot the
	// 1200x630 card, save as /static/og/agent-og-1200x630.png.
</script>

<svelte:head>
	<title>FAF Agent OG Image</title>
</svelte:head>

<div class="og-container">
	<div class="og-image">
		<div class="top-bar">
			<span class="brand">.faf</span>
			<span class="quirk">🐘🎙️</span>
		</div>

		<div class="hero">
			<img src="/orange-smiley.svg" alt="FAF" class="logo-mark" />
			<h1 class="name">FAF Agent</h1>
			<p class="tagline">The Voice of FAF 🐘🎙️</p>
			<div class="vml-block">
				<p class="vml-mark">VML</p>
				<p class="vml-name">Voice Memory Layer</p>
			</div>
		</div>

		<div class="bottom-bar">
			<span class="url">faf.one/agent</span>
			<span class="star">
				<span class="star-glyph">⭐</span>
				<svg
					class="gh-mark"
					viewBox="0 0 16 16"
					width="22"
					height="22"
					fill="currentColor"
					aria-label="GitHub"
				>
					<path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
				</svg>
			</span>
		</div>
	</div>
</div>

<style>
	:global(body) {
		background: #333 !important;
		margin: 0;
	}

	.og-container {
		min-height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 2rem;
	}

	.og-image {
		width: 1200px;
		height: 630px;
		background: linear-gradient(135deg, var(--faf-locked-dark) 0%, #1a1a1a 100%);
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding: 40px 60px;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
		color: #fff;
		box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
		box-sizing: border-box;
	}

	.top-bar {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.brand {
		font-size: 1.6rem;
		font-weight: 800;
		color: #FF6B35;
		letter-spacing: 0.02em;
	}

	.quirk {
		font-size: 1.5rem;
	}

	.hero {
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 0.75rem;
	}

	.logo-mark {
		width: 280px;
		height: 280px;
		display: block;
	}

	.name {
		font-size: 5rem;
		font-weight: 800;
		margin: 0.5rem 0 0;
		color: #fff;
		line-height: 1;
		letter-spacing: -0.02em;
	}

	.tagline {
		font-size: 1.6rem;
		color: #00D4D4;
		font-weight: 600;
		margin: 0;
		letter-spacing: 0.01em;
	}

	.vml-block {
		margin-top: 2.25rem;
		text-align: center;
	}

	.vml-mark {
		font-size: 1.5rem;
		font-weight: 700;
		color: #f5f5f5;
		margin: 0;
		letter-spacing: 0.22em;
	}

	.vml-name {
		font-size: 0.8rem;
		color: #888;
		font-weight: 400;
		margin: 0.3rem 0 0;
		letter-spacing: 0.08em;
	}

	.bottom-bar {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.url {
		font-size: 1.1rem;
		color: #00D4D4;
		font-weight: 600;
		font-family: 'SF Mono', 'Fira Code', monospace;
	}

	.star {
		display: inline-flex;
		align-items: center;
		gap: 0.4rem;
		color: #fff; /* SVG inherits via currentColor */
	}

	.star-glyph {
		font-size: 1.1rem;
		line-height: 1;
	}

	.gh-mark {
		display: block;
	}
</style>
