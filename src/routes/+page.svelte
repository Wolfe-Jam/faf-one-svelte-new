<script lang="ts">
	let { data } = $props();
	let copied = $state(false);

	function copyCommand() {
		navigator.clipboard.writeText('npx faf-cli init');
		copied = true;
		setTimeout(() => copied = false, 2000);
	}
</script>

<svelte:head>
	<title>FAF — The Context Standard for AI</title>
	<meta name="description" content="project.faf — persistent AI context for any tool. One YAML file. Every AI tool. Zero drift. IANA registered. 47k+ downloads." />
	<meta property="og:title" content="FAF — The Context Standard for AI" />
	<meta property="og:description" content="Context that persists." />
	<meta property="og:type" content="website" />
	<meta property="og:image" content="https://faf.one/og-image-1200x630.png" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<main class="landing">

	<!-- Section 1: Hero -->
	<section class="hero">
		<img src="/orange-smiley.svg" alt="FAF" class="hero-logo" width="80" height="80" />
		<h1>The Context Standard for AI</h1>
		<p class="hero-sub">Context that persists.</p>
		<p class="hero-sub2">Across sessions. Models. Tools. Teams. Enterprises.</p>
		<div class="install-block">
			<code>npx faf-cli init</code>
			<button class="copy-btn" onclick={copyCommand}>
				{copied ? 'Copied!' : 'Copy'}
			</button>
		</div>
		<div class="hero-ctas">
			<a href="https://github.com/Wolfe-Jam/faf-cli" class="btn-primary" target="_blank" rel="noopener">Get Started</a>
			<a href="/blog" class="btn-secondary">Blog</a>
			<a href="/links" class="btn-secondary">Links</a>
		</div>
		<div class="gh-star">
			<iframe src="https://ghbtns.com/github-btn.html?user=Wolfe-Jam&repo=faf-cli&type=star&count=false&size=large"
				frameborder="0" scrolling="0" width="80" height="30"
				title="Star Wolfe-Jam/faf-cli on GitHub"></iframe>
		</div>
	</section>

	<!-- Section 2: Trust Bar -->
	<section class="trust">
		<a href="https://www.iana.org/assignments/media-types/application/vnd.faf+yaml" target="_blank" rel="noopener">IANA Registered</a>
		<span class="dot">·</span>
		<a href="https://github.com/modelcontextprotocol/servers/pull/2759" target="_blank" rel="noopener">Anthropic MCP #2759</a>
		<span class="dot">·</span>
		<span>{data.downloadCount} Downloads</span>
		<span class="dot">·</span>
		<span>5 MCP Servers</span>
	</section>

	<!-- Section 3: What It Does -->
	<section class="what">
		<div class="card cyan">
			<h3>.faf defines</h3>
			<p>Structured YAML. One file. Every slot your AI needs.</p>
		</div>
		<div class="card orange">
			<h3>.md instructs</h3>
			<p>CLAUDE.md, AGENTS.md, .cursorrules — all compatible + bi-sync'd with .faf.</p>
		</div>
		<div class="card neutral">
			<h3>AI consumes</h3>
			<p>Any AI reads your .faf. Context in milliseconds. Zero drift.</p>
		</div>
	</section>

	<!-- Section 4: Ecosystem -->
	<section class="ecosystem">
		<h2>Works with every AI tool</h2>
		<div class="platforms">
			<a href="https://npmjs.com/package/claude-faf-mcp" target="_blank" rel="noopener">Claude</a>
			<span class="dot">·</span>
			<a href="https://npmjs.com/package/grok-faf-mcp" target="_blank" rel="noopener">Grok</a>
			<span class="dot">·</span>
			<a href="https://pypi.org/project/gemini-faf-mcp" target="_blank" rel="noopener">Gemini</a>
			<span class="dot">·</span>
			<a href="https://npmjs.com/package/faf-mcp" target="_blank" rel="noopener">Cursor</a>
			<span class="dot">·</span>
			<a href="https://npmjs.com/package/faf-mcp" target="_blank" rel="noopener">Windsurf</a>
			<span class="dot">·</span>
			<a href="https://npmjs.com/package/faf-mcp" target="_blank" rel="noopener">VS Code</a>
			<span class="dot">·</span>
			<a href="https://npmjs.com/package/faf-mcp" target="_blank" rel="noopener">Any MCP</a>
		</div>
	</section>

	<!-- Section 5: Globe -->
	<section class="globe-teaser">
		<a href="https://mcpaas.live/globe" target="_blank" rel="noopener" class="globe-link">
			<h2>See where your code runs</h2>
			<p>Live 3D edge execution map — 100+ cities and growing</p>
			<span class="arrow">→</span>
		</a>
	</section>

	<!-- Section 6: Footer -->
	<footer class="landing-footer">
		<p class="footer-tagline">The Context Standard for AI</p>
		<div class="footer-links">
			<a href="https://github.com/Wolfe-Jam/faf-cli" target="_blank" rel="noopener">GitHub</a>
			<span class="dot">·</span>
			<a href="/blog">Blog</a>
			<span class="dot">·</span>
			<a href="/privacy">Privacy</a>
			<span class="dot">·</span>
			<a href="/about">About</a>
		</div>
		<p class="footer-iana">IANA Registered · application/vnd.faf+yaml</p>
		<p class="footer-copy">© {new Date().getFullYear()} FAF</p>
	</footer>

</main>

<style>
	.landing {
		max-width: 900px;
		margin: 0 auto;
		padding: 0 1.5rem;
	}

	/* Hero */
	.hero {
		text-align: center;
		padding: 6rem 0 4rem;
	}

	.hero-logo {
		margin-bottom: 1.5rem;
	}

	.hero h1 {
		font-size: clamp(2rem, 6vw, 3.2rem);
		font-weight: 800;
		color: var(--faf-black);
		margin-bottom: 0.75rem;
		letter-spacing: -0.02em;
	}

	.hero-sub {
		font-size: 1.25rem;
		color: var(--faf-gray);
		margin-bottom: 0.5rem;
	}

	.hero-sub2 {
		font-size: 0.95rem;
		color: var(--faf-gray);
		letter-spacing: 0.03em;
		margin-bottom: 2.5rem;
	}

	.install-block {
		display: inline-flex;
		align-items: center;
		gap: 0;
		background: var(--faf-gray-light);
		border: 1px solid var(--faf-light-gray);
		border-radius: 8px;
		overflow: hidden;
		margin-bottom: 2rem;
	}

	.install-block code {
		padding: 0.75rem 1.25rem;
		font-family: var(--font-mono);
		font-size: 1rem;
		color: var(--faf-black);
		background: transparent;
	}

	.copy-btn {
		padding: 0.75rem 1rem;
		border: none;
		border-left: 1px solid var(--faf-light-gray);
		background: transparent;
		color: var(--faf-gray);
		cursor: pointer;
		font-family: var(--font-sans);
		font-size: 0.85rem;
		transition: var(--transition-fast);
	}

	.copy-btn:hover {
		color: var(--faf-cyan-dark);
		background: rgba(0, 212, 212, 0.05);
	}

	.hero-ctas {
		display: flex;
		gap: 1rem;
		justify-content: center;
	}

	.gh-star {
		display: flex;
		justify-content: center;
		margin-top: 1.25rem;
		color-scheme: light;
	}

	.btn-primary {
		display: inline-block;
		padding: 0.75rem 2rem;
		background: var(--faf-orange);
		color: #fff;
		border-radius: 8px;
		text-decoration: none;
		font-weight: 600;
		transition: var(--transition-fast);
	}

	.btn-primary:hover {
		background: var(--faf-orange-dark);
	}

	.btn-secondary {
		display: inline-block;
		padding: 0.75rem 2rem;
		border: 2px solid var(--faf-black);
		color: var(--faf-black);
		background: transparent;
		border-radius: 8px;
		text-decoration: none;
		font-weight: 700;
		transition: var(--transition-fast);
	}

	.btn-secondary:hover {
		background: var(--faf-black);
		color: var(--faf-white);
	}

	/* Trust Bar */
	.trust {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-wrap: wrap;
		gap: 0.5rem;
		padding: 2rem 0;
		font-size: 0.9rem;
		color: var(--faf-gray);
		border-top: 1px solid var(--faf-light-gray);
		border-bottom: 1px solid var(--faf-light-gray);
	}

	.trust a {
		color: var(--faf-gray);
		text-decoration: none;
		transition: var(--transition-fast);
	}

	.trust a:hover {
		color: var(--faf-cyan-dark);
	}

	.dot {
		color: var(--faf-orange);
	}

	/* What It Does */
	.what {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1.5rem;
		padding: 4rem 0;
	}

	.card {
		padding: 2rem;
		border-radius: 12px;
		background: var(--faf-gray-light);
		border: 1px solid var(--faf-light-gray);
	}

	.card h3 {
		font-size: 1.1rem;
		font-weight: 700;
		margin-bottom: 0.75rem;
		font-family: var(--font-mono);
	}

	.card p {
		font-size: 0.95rem;
		color: var(--faf-gray);
		line-height: 1.6;
	}

	.card.cyan h3 { color: var(--faf-cyan-dark); }
	.card.orange h3 { color: var(--faf-orange); }
	.card.neutral h3 { color: var(--faf-black); }

	/* Ecosystem */
	.ecosystem {
		text-align: center;
		padding: 3rem 0;
	}

	.ecosystem h2 {
		font-size: 1.5rem;
		font-weight: 700;
		color: var(--faf-black);
		margin-bottom: 1.5rem;
	}

	.platforms {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-wrap: wrap;
		gap: 0.5rem;
		font-size: 0.95rem;
		color: var(--faf-gray);
	}

	.platforms a {
		color: var(--faf-gray);
		text-decoration: none;
		text-transform: uppercase;
		font-size: 0.8rem;
		font-weight: 600;
		letter-spacing: 0.05em;
		transition: var(--transition-fast);
	}

	.platforms a:hover {
		color: var(--faf-cyan-dark);
	}

	/* Globe Teaser */
	.globe-teaser {
		padding: 3rem 0;
		border-top: 1px solid var(--faf-light-gray);
	}

	.globe-link {
		display: block;
		text-align: center;
		text-decoration: none;
		padding: 2.5rem;
		border-radius: 12px;
		background: var(--faf-gray-light);
		border: 1px solid var(--faf-light-gray);
		transition: var(--transition-smooth);
	}

	.globe-link:hover {
		border-color: var(--faf-cyan-dark);
	}

	.globe-link h2 {
		font-size: 1.3rem;
		font-weight: 700;
		color: var(--faf-black);
		margin-bottom: 0.5rem;
	}

	.globe-link p {
		font-size: 0.95rem;
		color: var(--faf-gray);
		margin-bottom: 0.75rem;
	}

	.globe-link .arrow {
		color: var(--faf-orange);
		font-size: 1.4rem;
		font-weight: 700;
	}

	/* Footer */
	.landing-footer {
		text-align: center;
		padding: 4rem 0 3rem;
		border-top: 1px solid var(--faf-light-gray);
	}

	.footer-tagline {
		font-size: 1rem;
		font-weight: 600;
		color: var(--faf-black);
		margin-bottom: 1rem;
	}

	.footer-links {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
		margin-bottom: 1.5rem;
		font-size: 0.9rem;
	}

	.footer-links a {
		color: var(--faf-gray);
		text-decoration: none;
		transition: var(--transition-fast);
	}

	.footer-links a:hover {
		color: var(--faf-orange);
	}

	.footer-iana {
		font-size: 0.8rem;
		color: var(--faf-gray);
		margin-bottom: 0.5rem;
	}

	.footer-copy {
		font-size: 0.75rem;
		color: var(--faf-gray);
	}

	/* Mobile */
	@media (max-width: 768px) {
		.hero {
			padding: 4rem 0 3rem;
		}

		.what {
			grid-template-columns: 1fr;
		}

		.hero-ctas {
			flex-direction: column;
			align-items: center;
		}

		.trust {
			flex-direction: column;
			gap: 0.25rem;
		}

		.trust .dot {
			display: none;
		}
	}
</style>
