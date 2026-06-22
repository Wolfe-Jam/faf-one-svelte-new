<svelte:head>
	<title>FAF Agent — OG Card | FAF Diagrams</title>
</svelte:head>

<div class="diagram-page">
	<div class="diagram-header">
		<a href="/diagrams" class="back-link">←</a>
		<h1>FAF Agent — OG Card</h1>
		<p>1.91:1 aspect ratio (1200×630px) — for X, LinkedIn, Discord, Slack unfurls of <code>faf.one/agent</code></p>
	</div>

	<!-- THE OG CARD - Screenshot this area -->
	<div class="banner-container">
		<div class="hero-banner">
			<!-- Top-left brand -->
			<div class="brand">.faf</div>

			<!-- Top-right family mark (no edition numbers on OG cards — they're forever-assets) -->
			<div class="family-mark">🐘🎙️</div>

			<!-- Center hero stack: mark + name + tagline -->
			<div class="hero-content">
				<img src="/orange-smiley.svg" alt="FAF" class="logo-mark" />
				<h2 class="hero-title">FAF Agent</h2>
				<p class="hero-subtitle">The Voice of FAF 🐘🎙️</p>
			</div>

			<!-- Bottom-left code snippet (install) -->
			<div class="code-snippet">
				<code>uvx faf-agent-mcp</code>
			</div>

			<!-- Bottom-right link — star + canonical GitHub Octocat mark (Path A) -->
			<div class="star-cta">
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
			</div>
		</div>
	</div>

	<div class="usage-note">
		<p><strong>Usage:</strong> Take screenshot of the banner area (1200×630px) for X cards, LinkedIn unfurls, Discord embeds. Save as <code>static/og/agent-og-1200x630.png</code>.</p>
		<p><strong>Tip:</strong> Use browser zoom 100% to ensure exact 1200×630px output. Target file size &lt;200 KB for WhatsApp compatibility.</p>
	</div>
</div>

<style>
	.diagram-page {
		min-height: 100vh;
		background: #f8f9fa;
		padding: 2rem;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
	}

	.diagram-header {
		max-width: 1200px;
		margin: 0 auto 2rem auto;
	}

	.back-link {
		color: #FF6B35;
		text-decoration: none;
		font-size: 0.9rem;
	}

	.back-link:hover {
		text-decoration: underline;
	}

	.diagram-header h1 {
		font-size: 2rem;
		margin: 1rem 0 0.5rem 0;
		color: #000;
	}

	.diagram-header p code {
		background: rgba(255, 107, 53, 0.1);
		color: #FF6B35;
		padding: 0.15rem 0.4rem;
		border-radius: 4px;
		font-family: 'SF Mono', 'Fira Code', monospace;
		font-size: 0.85rem;
	}

	.banner-container {
		max-width: 1200px;
		margin: 0 auto;
		background: white;
		border-radius: 16px;
		box-shadow: 0 4px 20px rgba(0, 0, 0, 0.12);
		padding: 2rem;
	}

	/* THE OG CARD - 1200x630px */
	.hero-banner {
		width: 1200px;
		height: 630px;
		background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
		position: relative;
		overflow: hidden;
		border-radius: 12px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 3rem;
		box-sizing: border-box;
	}

	/* Subtle radial glow — apophatic, dialed way down vs voice-api-banner */
	.hero-banner::after {
		content: '';
		position: absolute;
		top: -30%;
		left: -30%;
		width: 160%;
		height: 160%;
		background: radial-gradient(circle, rgba(0, 212, 212, 0.06) 0%, transparent 55%);
		pointer-events: none;
	}

	/* Top-left brand */
	.brand {
		position: absolute;
		top: 2rem;
		left: 2.5rem;
		font-size: 1.5rem;
		font-weight: 800;
		color: #FF6B35;
		letter-spacing: 0.02em;
		z-index: 10;
	}

	/* Top-right family mark (forever-asset — no version numbers) */
	.family-mark {
		position: absolute;
		top: 2rem;
		right: 2.5rem;
		font-size: 1.5rem;
		z-index: 10;
	}

	/* Hero content (center) */
	.hero-content {
		position: relative;
		z-index: 10;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.75rem;
	}

	.logo-mark {
		width: 280px;
		height: 280px;
		display: block;
		filter: drop-shadow(0 0 30px rgba(255, 107, 53, 0.2));
	}

	.hero-title {
		font-size: 5rem;
		font-weight: 800;
		margin: 0.5rem 0 0;
		color: #fff;
		line-height: 1;
		letter-spacing: -0.02em;
	}

	.hero-subtitle {
		font-size: 1.6rem;
		color: #00D4D4;
		font-weight: 600;
		margin: 0;
		letter-spacing: 0.01em;
	}

	/* Bottom-left code snippet */
	.code-snippet {
		position: absolute;
		bottom: 2rem;
		left: 2.5rem;
		background: rgba(10, 10, 10, 0.9);
		border: 1px solid #333;
		border-left: 4px solid #FF6B35;
		border-radius: 8px;
		padding: 0.55rem 1.1rem;
		z-index: 10;
	}

	.code-snippet code {
		font-family: 'SF Mono', 'Fira Code', monospace;
		font-size: 1rem;
		color: #FF6B35;
		font-weight: 600;
	}

	/* Bottom-right link — star glyph + GitHub Octocat (Path A) */
	.star-cta {
		position: absolute;
		bottom: 2rem;
		right: 2.5rem;
		z-index: 10;
		display: flex;
		align-items: center;
		gap: 0.5rem;
		color: #fff; /* fill source for currentColor on the SVG */
	}

	.star-glyph {
		font-size: 1.1rem;
		line-height: 1;
	}

	.gh-mark {
		display: block;
	}

	/* Usage note */
	.usage-note {
		max-width: 1200px;
		margin: 2rem auto 0 auto;
		padding: 1rem;
		background: #fff3cd;
		border-left: 4px solid #ffc107;
		border-radius: 8px;
		font-size: 0.9rem;
	}

	.usage-note p {
		margin: 0.5rem 0;
	}

	.usage-note code {
		background: rgba(0, 0, 0, 0.05);
		padding: 0.1rem 0.4rem;
		border-radius: 4px;
		font-family: 'SF Mono', 'Fira Code', monospace;
		font-size: 0.85rem;
	}
</style>
