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
	<meta name="description" content="project.faf — persistent AI context for any tool. One YAML file. Every AI. IANA registered." />
	<meta property="og:title" content="FAF — The Context Standard for AI" />
	<meta property="og:description" content="Context that persists." />
	<meta property="og:type" content="website" />
	<meta property="og:image" content="https://faf.one/og-image-1200x630.png?v=2" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:image:alt" content=".faf — Project DNA for ANY AI · IANA-registered format" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="FAF — The Context Standard for AI" />
	<meta name="twitter:description" content="Context that persists." />
	<meta name="twitter:image" content="https://faf.one/og-image-1200x630.png?v=2" />
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
		<p class="hero-cta-text">
			Want FAF? <a href="/agent" class="hero-cta-link">Talk to my Agent →</a>
		</p>
		<div class="hero-ctas">
			<a href="https://github.com/Wolfe-Jam/faf-cli" class="btn-primary" target="_blank" rel="noopener">Get Started</a>
			<a href="/blog" class="btn-secondary">Blog</a>
			<a href="/links" class="btn-secondary">Links</a>
		</div>
	</section>

	<!-- Section 1.5: Blog Ticker (latest releases) -->
	<section class="blog-ticker" aria-label="Latest from the blog">
		<a href="/blog" class="ticker-label">Latest</a>
		<div class="ticker-viewport">
			<div class="ticker-track">
				<a href="/blog/projector-floor" class="ticker-item"><b>claude-faf-mcp 5.22</b> The Projector Floor — same block as MCP</a>
				<a href="/blog/projector-edition" class="ticker-item"><b>faf-cli 7.8</b> The Projector Edition — one projector, every door</a>
				<a href="/blog/memory-in-chat" class="ticker-item"><b>faf-memory-mcp 0.1.1</b> etch writes the file — in chat → memory.faf.one</a>
				<a href="/blog/swift-edition" class="ticker-item"><b>faf-cli 7.7</b> The Swift Edition — Package.swift alone ≠ app</a>
				<a href="/blog/ruby-edition" class="ticker-item"><b>faf-cli 7.6</b> The Ruby Edition — Gemfile alone ≠ Rails</a>
				<a href="/blog/jvm-edition" class="ticker-item"><b>faf-cli 7.5</b> The JVM Edition — pom / gradle alone ≠ type</a>
				<a href="/blog/csharp-edition" class="ticker-item"><b>faf-cli 7.4</b> The C# Edition — .csproj alone ≠ type</a>
				<a href="/blog/go-edition" class="ticker-item"><b>faf-cli 7.3</b> The Go Edition — go.mod alone ≠ backend</a>
				<a href="/blog/memory-is-vast" class="ticker-item"><b>Memory is vast</b> .fafm — knowledge + voice · remember and forget</a>
				<a href="/blog/compactable-memory" class="ticker-item"><b>claude-fafm-sdk 2.0</b> Compactable — epoch compact · no silent zombies</a>
				<a href="/blog/projector-floor" class="ticker-item" aria-hidden="true" tabindex="-1"><b>claude-faf-mcp 5.22</b> The Projector Floor — same block as MCP</a>
				<a href="/blog/projector-edition" class="ticker-item" aria-hidden="true" tabindex="-1"><b>faf-cli 7.8</b> The Projector Edition — one projector, every door</a>
				<a href="/blog/memory-in-chat" class="ticker-item" aria-hidden="true" tabindex="-1"><b>faf-memory-mcp 0.1.1</b> etch writes the file — in chat → memory.faf.one</a>
				<a href="/blog/swift-edition" class="ticker-item" aria-hidden="true" tabindex="-1"><b>faf-cli 7.7</b> The Swift Edition — Package.swift alone ≠ app</a>
				<a href="/blog/ruby-edition" class="ticker-item" aria-hidden="true" tabindex="-1"><b>faf-cli 7.6</b> The Ruby Edition — Gemfile alone ≠ Rails</a>
				<a href="/blog/jvm-edition" class="ticker-item" aria-hidden="true" tabindex="-1"><b>faf-cli 7.5</b> The JVM Edition — pom / gradle alone ≠ type</a>
				<a href="/blog/csharp-edition" class="ticker-item" aria-hidden="true" tabindex="-1"><b>faf-cli 7.4</b> The C# Edition — .csproj alone ≠ type</a>
				<a href="/blog/go-edition" class="ticker-item" aria-hidden="true" tabindex="-1"><b>faf-cli 7.3</b> The Go Edition — go.mod alone ≠ backend</a>
				<a href="/blog/memory-is-vast" class="ticker-item" aria-hidden="true" tabindex="-1"><b>Memory is vast</b> .fafm — knowledge + voice · remember and forget</a>
				<a href="/blog/compactable-memory" class="ticker-item" aria-hidden="true" tabindex="-1"><b>claude-fafm-sdk 2.0</b> Compactable — epoch compact · no silent zombies</a>
			</div>
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
			<p>Any AI reads your .faf. Context loads with the project.</p>
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
		color: var(--faf-cyan-text);
		background: rgba(0, 212, 212, 0.05);
	}

	.hero-cta-text {
		font-size: 0.95rem;
		color: var(--faf-gray);
		margin: -0.5rem 0 1.75rem;
		letter-spacing: 0.01em;
	}

	.hero-cta-link {
		color: var(--faf-cyan-text);
		text-decoration: none;
		font-weight: 500;
		transition: var(--transition-fast);
	}

	.hero-cta-link:hover {
		color: var(--faf-black);
		text-decoration: underline;
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

	/* Blog Ticker (latest releases) */
	.blog-ticker {
		display: flex;
		align-items: center;
		gap: 1rem;
		padding: 0.75rem 1rem;
		border-top: 1px solid var(--faf-light-gray);
		border-bottom: 1px solid var(--faf-light-gray);
		overflow: hidden;
	}
	.ticker-label {
		flex-shrink: 0;
		font-size: 0.8rem;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.08em;
		color: var(--faf-orange);
		text-decoration: none;
	}
	.ticker-label:hover {
		text-decoration: underline;
	}
	.ticker-viewport {
		flex: 1;
		overflow: hidden;
	}
	.ticker-track {
		display: inline-flex;
		gap: 2.5rem;
		white-space: nowrap;
		animation: ticker-scroll 36s linear infinite;
	}
	.blog-ticker:hover .ticker-track {
		animation-play-state: paused;
	}
	.ticker-item {
		font-size: 0.9rem;
		color: var(--faf-black);
		text-decoration: none;
	}
	.ticker-item b {
		color: var(--faf-cyan-text);
		font-weight: 700;
	}
	.ticker-item:hover {
		color: var(--faf-orange);
	}
	@keyframes ticker-scroll {
		from { transform: translateX(0); }
		to { transform: translateX(-50%); }
	}
	@media (prefers-reduced-motion: reduce) {
		.ticker-track {
			animation: none;
		}
		.ticker-viewport {
			overflow-x: auto;
		}
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
		color: var(--faf-cyan-text);
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

	.card.cyan h3 { color: var(--faf-cyan-text); }
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
		color: var(--faf-cyan-text);
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
		border-color: var(--faf-cyan-text);
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
