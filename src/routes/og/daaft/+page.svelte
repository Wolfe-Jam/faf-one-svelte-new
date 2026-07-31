<script>
	// OG Image for DAAFT - 1200x630
</script>

<svelte:head>
	<title>DAAFT OG Image</title>
</svelte:head>

<div class="og-container">
	<div class="og-image">
		<div class="top-bar">
			<span class="faf-logo">.faf</span>
			<span class="verified">Verified by Claude Opus 4.5 ☑️</span>
		</div>

		<div class="main-content">
			<h1 class="headline">Don't Be <span class="daaft">DAAFT</span>.</h1>

			<div class="stats-row">
				<div class="stat">
					<span class="stat-number">91%</span>
					<span class="stat-label">tokens wasted</span>
				</div>
				<div class="stat">
					<span class="stat-number">$5,460</span>
					<span class="stat-label">/year per dev</span>
				</div>
				<div class="stat">
					<span class="stat-number">70%</span>
					<span class="stat-label">projects fail</span>
				</div>
			</div>

			<div class="cycle">
				<span class="letter d">D</span>iscover
				<span class="letter a1">A</span>ssume
				<span class="letter a2">A</span>sk
				<span class="letter f">F</span>orget
				<span class="letter t">T</span>ime+Tokens LOST
			</div>
		</div>

		<div class="bottom-bar">
			<span class="url">faf.one/daaft</span>
			<span class="tagline">The Invisible Problem Killing Your AI Productivity</span>
		</div>
	</div>
</div>

<style>
	.og-container {
		min-height: 100vh;
		background: #333;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 2rem;
	}

	.og-image {
		width: 1200px;
		height: 630px;
		background: linear-gradient(135deg, var(--faf-locked-dark) 0%, #1a1a1a 100%);
		border-radius: 0;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding: 40px 60px;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
		color: white;
		box-shadow: 0 20px 60px rgba(0,0,0,0.5);
	}

	.top-bar {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.faf-logo {
		font-size: 2rem;
		font-weight: 800;
		color: #FF6B35;
	}

	.verified {
		font-size: 1rem;
		color: #00D4D4;
	}

	.main-content {
		text-align: center;
	}

	.headline {
		font-size: 5rem;
		font-weight: 800;
		margin-bottom: 1.5rem;
	}

	.daaft {
		color: #FF6B35;
		text-shadow: none;
	}

	.stats-row {
		display: flex;
		justify-content: center;
		gap: 4rem;
		margin-bottom: 2rem;
	}

	.stat {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.stat-number {
		font-size: 3rem;
		font-weight: 800;
		color: #ff3333;
	}

	.stat-label {
		font-size: 1.1rem;
		color: #aaa;
	}

	.cycle {
		font-size: 1.4rem;
		color: #888;
		letter-spacing: 0.05em;
	}

	.letter {
		font-weight: 800;
		font-size: 1.6rem;
	}

	.letter.d { color: #FF6B35; }
	.letter.a1 { color: #FF8555; }
	.letter.a2 { color: #FFA075; }
	.letter.f { color: #fff; }
	.letter.t { color: #ff3333; }

	.bottom-bar {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.url {
		font-size: 1.5rem;
		font-weight: 700;
		color: #00D4D4;
	}

	.tagline {
		font-size: 1.1rem;
		color: #aaa;
		font-style: italic;
	}
</style>
