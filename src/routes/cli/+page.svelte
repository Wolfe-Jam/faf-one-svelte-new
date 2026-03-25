<script>
	let copied = $state(false);

	function copyCommand() {
		navigator.clipboard.writeText('bunx faf-cli auto');
		copied = true;
		setTimeout(() => copied = false, 2000);
	}
</script>

<svelte:head>
	<title>faf-cli — The AI-Context CLI | faf.one</title>
	<meta name="description" content="faf-cli — Define. Build. Lock. Relax. 38k+ downloads. IANA-registered format." />
	<meta property="og:title" content="faf-cli — The AI-Context CLI" />
	<meta property="og:description" content="One command. 100% AI-Context. 38k+ npm downloads." />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<main>
	<section class="hero">
		<h1>faf-cli</h1>
		<p class="tagline">Define. Build. Lock. Relax.</p>
		<p class="sub">The CLI that gives AI instant, persistent project context.</p>

		<div class="spacer"></div>

		<button class="install" onclick={copyCommand}>
			<code>bunx faf-cli auto</code>
			<span class="copy-hint">{copied ? 'Copied!' : 'click to copy'}</span>
		</button>
		<p class="manifesto">FAF defines. MD explains. AI interprets.</p>
	</section>

	<section class="what">
		<h2>What it does</h2>
		<div class="grid">
			<div class="card">
				<strong>faf init</strong>
				<p>Create .faf from your project</p>
			</div>
			<div class="card">
				<strong>faf auto</strong>
				<p>Zero to 100% in one command</p>
			</div>
			<div class="card">
				<strong>faf go</strong>
				<p>Guided interview to gold code</p>
			</div>
			<div class="card">
				<strong>faf bi-sync</strong>
				<p>.faf ↔ CLAUDE.md — free forever</p>
			</div>
			<div class="card">
				<strong>faf git &lt;url&gt;</strong>
				<p>Instant .faf from any GitHub repo</p>
			</div>
			<div class="card">
				<strong>faf score</strong>
				<p>Rate your AI-readiness 0-100%</p>
			</div>
		</div>
	</section>

	<section class="star-cta">
		<p class="star-intro">faf-cli is free, open source, and IANA-registered.</p>
		<p class="star-ask">A star is one click that goes a long way</p>
		<a href="https://github.com/Wolfe-Jam/faf-cli" class="star-button" target="_blank" rel="noopener">
			⭐ Star on GitHub
		</a>
		<p class="star-stats">19,484 downloads — 21 stars — help us close the gap</p>
	</section>

	<section class="links">
		<a href="https://github.com/Wolfe-Jam/faf-cli" target="_blank" rel="noopener">GitHub</a>
		<a href="https://www.npmjs.com/package/faf-cli" target="_blank" rel="noopener">npm</a>
		<a href="https://www.iana.org/assignments/media-types/application/vnd.faf+yaml" target="_blank" rel="noopener">IANA</a>
		<a href="/">faf.one</a>
	</section>
</main>

<style>
	:global(body) { background: #0a0a0a !important; color: #eee; }

	main {
		max-width: 640px;
		margin: 0 auto;
		padding: 3rem 1.5rem;
		color: #eee;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
	}

	.hero {
		text-align: center;
		margin-bottom: 3rem;
		padding-top: 1rem;
	}

	.spacer {
		height: 2rem;
	}

	h1 {
		font-size: 3rem;
		font-weight: 700;
		margin: 0.5rem 0;
		color: #fff;
	}

	.tagline {
		font-size: 1.2rem;
		color: #00D4D4;
		font-weight: 600;
		margin: 0.5rem 0;
	}

	.sub {
		color: #999;
		font-size: 1rem;
		margin: 0.5rem 0 1.5rem;
	}

	.install {
		display: inline-flex;
		align-items: center;
		gap: 0.75rem;
		background-color: #1a1a1a;
		border: 1px solid #333;
		border-radius: 20px;
		padding: 0.5rem 1.5rem;
		color-scheme: dark;
		cursor: pointer;
		transition: border-color 0.2s;
	}

	.install:hover {
		border-color: #555;
	}

	.copy-hint {
		font-size: 0.75rem;
		color: #555;
		transition: color 0.2s;
	}

	.install:hover .copy-hint {
		color: #888;
	}

	.install code {
		font-size: 1.1rem;
		color: #FF6B35;
		font-family: 'SF Mono', 'Fira Code', monospace;
		background: none;
		padding: 0;
	}

	h2 {
		font-size: 1.3rem;
		color: #fff;
		margin-bottom: 1rem;
	}

	.what {
		margin-bottom: 3rem;
	}

	.grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 0.75rem;
	}

	.card {
		background: #111;
		border: 1px solid #222;
		border-radius: 8px;
		padding: 1rem;
	}

	.card strong {
		color: #00D4D4;
		font-family: 'SF Mono', 'Fira Code', monospace;
		font-size: 0.9rem;
	}

	.card p {
		color: #888;
		font-size: 0.85rem;
		margin: 0.3rem 0 0;
	}

	.star-cta {
		text-align: center;
		padding: 2.5rem 1.5rem;
		background: #111;
		border: 1px solid #222;
		border-radius: 12px;
		margin-bottom: 2rem;
	}

	.star-intro {
		color: #888;
		font-size: 0.95rem;
		margin: 0 0 0.5rem;
	}

	.star-ask {
		color: #fff;
		font-size: 1.3rem;
		font-weight: 600;
		margin: 0 0 1.5rem;
	}

	.star-button {
		display: inline-block;
		background: #FF6B35;
		color: #fff;
		text-decoration: none;
		padding: 0.8rem 2rem;
		border-radius: 8px;
		font-size: 1.1rem;
		font-weight: 600;
		transition: background 0.2s;
	}

	.star-button:hover {
		background: #ff8555;
	}

	.star-stats {
		color: #666;
		font-size: 0.8rem;
		margin: 1rem 0 0;
	}

	.links {
		display: flex;
		justify-content: center;
		gap: 1.5rem;
		padding: 1rem 0;
	}

	.links a {
		color: #666;
		text-decoration: none;
		font-size: 0.9rem;
		transition: color 0.2s;
	}

	.links a:hover {
		color: #00D4D4;
	}

	.manifesto {
		color: #888;
		font-size: 0.95rem;
		font-weight: 600;
		margin: 1.2rem 0 0;
		letter-spacing: 0.02em;
	}

	@media (max-width: 480px) {
		h1 { font-size: 2.2rem; }
		.grid { grid-template-columns: 1fr; }
		.star-ask { font-size: 1.1rem; }
	}
</style>
