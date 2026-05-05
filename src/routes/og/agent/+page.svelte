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
			<span class="star">⭐ GitHub</span>
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
		background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
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
		font-size: 1rem;
		color: #fff;
		font-weight: 600;
		font-family: 'SF Mono', 'Fira Code', monospace;
	}
</style>
