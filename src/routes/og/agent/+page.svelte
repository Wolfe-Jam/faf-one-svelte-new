<script>
	// OG Image for FAF Agent — 1200x630
	// Render in dev (`npm run dev`), navigate to /og/agent, screenshot to PNG,
	// save as /static/og/agent-og-1200x630.png
</script>

<svelte:head>
	<title>FAF Agent OG Image</title>
</svelte:head>

<div class="og-container">
	<div class="og-image">
		<div class="top-bar">
			<span class="faf-logo">.faf 🐘🎙️</span>
			<span class="meta">faf.one/agent</span>
		</div>

		<div class="main-content">
			<div class="left">
				<img src="/orange-smiley.svg" alt="FAF" class="logo-mark" />
			</div>
			<div class="right">
				<h1 class="name">FAF Agent</h1>
				<p class="role">The Voice of FAF</p>
				<p class="bio">Cites the spec on every answer, or refuses out of scope without drama.</p>
				<p class="install"><code>pip install faf-agent-mcp</code></p>
			</div>
		</div>

		<div class="bottom-bar">
			<span class="audience">For humans, agents, teams, and models.</span>
			<span class="iana">IANA · application/vnd.faf+yaml</span>
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
		padding: 50px 70px;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
		color: #fff;
		box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
		border: 1px solid #00D4D4;
		box-sizing: border-box;
	}

	.top-bar {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.faf-logo {
		font-size: 1.75rem;
		font-weight: 800;
		color: #FF6B35;
		letter-spacing: 0.02em;
	}

	.meta {
		font-size: 1.1rem;
		color: #00D4D4;
		font-weight: 600;
	}

	.main-content {
		display: flex;
		align-items: center;
		gap: 3.5rem;
		flex: 1;
		padding: 1rem 0;
	}

	.left {
		flex-shrink: 0;
	}

	.logo-mark {
		width: 280px;
		height: 280px;
		display: block;
	}

	.right {
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.name {
		font-size: 5rem;
		font-weight: 800;
		margin: 0;
		color: #fff;
		line-height: 1;
		letter-spacing: -0.02em;
	}

	.role {
		font-size: 1.6rem;
		color: #00D4D4;
		font-weight: 600;
		margin: 0.5rem 0 1.25rem;
	}

	.bio {
		font-size: 1.25rem;
		color: #ccc;
		line-height: 1.45;
		margin: 0 0 1.5rem;
		max-width: 560px;
	}

	.install {
		margin: 0;
	}

	.install code {
		display: inline-block;
		font-family: 'SF Mono', 'Fira Code', monospace;
		font-size: 1.15rem;
		color: #FF6B35;
		background: #1a1a1a;
		border: 1px solid #333;
		padding: 0.5rem 1rem;
		border-radius: 8px;
	}

	.bottom-bar {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.audience {
		font-size: 1rem;
		color: #888;
		font-style: italic;
	}

	.iana {
		font-size: 0.95rem;
		color: #00D4D4;
		font-family: 'SF Mono', 'Fira Code', monospace;
	}
</style>
