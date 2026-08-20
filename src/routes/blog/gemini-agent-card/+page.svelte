<!-- pubblog — Release model, copied from mcp-better-matching-client (gold, locked 2026-08-19). -->
<script lang="ts">
	import { buildShareIntent } from '$lib/shareIntent.js';
	import NpmPkg from '$lib/NpmPkg.svelte';

	const shareText = `🏁 Just shipped: gemini-faf-mcp v2.6.0 — The Agent Card Edition

A real agent identity card — not just a name in a JSON file.

agent.fafa built from live tool introspection, not guessed
MCP Server Card + AI Catalog entry ship alongside it

12 tools · 243 tests · Trophy 100%

uvx gemini-faf-mcp

Help guide what we build —
Comments · suggestions welcome.`;
	const shareUrl = 'https://faf.one/blog/gemini-agent-card';
	const xIntent = buildShareIntent({ text: shareText, url: shareUrl });
</script>

<svelte:head>
	<title>The Agent Card Edition - gemini-faf-mcp v2.6.0 | FAF</title>
	<meta
		name="description"
		content="A real agent.fafa passport, MCP Server Card, and AI Catalog entry — gemini-faf-mcp joins the wider agent-discovery ecosystem. gemini-faf-mcp v2.6.0 — The Agent Card Edition."
	/>
	<meta property="og:title" content="The Agent Card Edition - gemini-faf-mcp v2.6.0" />
	<meta
		property="og:description"
		content="A real agent.fafa passport, MCP Server Card, and AI Catalog entry — gemini-faf-mcp joins the wider agent-discovery ecosystem."
	/>
	<meta property="og:type" content="article" />
	<meta property="og:url" content="https://faf.one/blog/gemini-agent-card" />
	<meta property="og:site_name" content=".faf Format Authority" />
	<meta property="og:image" content="https://faf.one/blog/gemini-agent-card-hero.png" />
	<meta property="og:image:secure_url" content="https://faf.one/blog/gemini-agent-card-hero.png" />
	<meta property="og:image:type" content="image/png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta
		property="og:image:alt"
		content="The Agent Card Edition — gemini-faf-mcp v2.6.0 · a real agent identity card"
	/>
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@fafformat" />
	<meta name="twitter:creator" content="@wolfe_jam" />
	<meta name="twitter:title" content="The Agent Card Edition - gemini-faf-mcp v2.6.0" />
	<meta
		name="twitter:description"
		content="A real agent.fafa passport, MCP Server Card, and AI Catalog entry — gemini-faf-mcp joins the wider agent-discovery ecosystem."
	/>
	<meta name="twitter:image" content="https://faf.one/blog/gemini-agent-card-hero.png" />
	<meta
		name="twitter:image:alt"
		content="The Agent Card Edition — gemini-faf-mcp v2.6.0 · a real agent identity card"
	/>
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / The Agent Card Edition
		</div>
		<h1>The Agent Card Edition</h1>
		<p class="version-tag">gemini-faf-mcp v2.6.0</p>
		<p class="subtitle">A real agent identity card — not just a name in a JSON file.</p>
		<div class="meta">
			<time datetime="2026-08-20">August 20, 2026</time>
			<span class="separator">•</span>
			<span class="category release">Release</span>
		</div>
	</header>

	<div class="hero-image">
		<img
			src="/blog/gemini-agent-card-hero.png"
			alt="The Agent Card Edition — gemini-faf-mcp v2.6.0 · a real agent identity card"
			width="1200"
			height="630"
			loading="eager"
			decoding="async"
		/>
	</div>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> gemini-faf-mcp now carries a real
				<code>agent.fafa</code> passport, an MCP Server Card, and an AI Catalog entry — built from
				the server's actual tools, not hand-typed. GEMINI.md also got genuinely richer. A2A is
				explicitly not in this release — we don't claim it until it's real.
			</p>
			<div class="lead plain-english">
				<p class="plain-label">In Plain English</p>
				<p>
					<strong>Old state.</strong> gemini-faf-mcp had a name and a version number in the
					registry, but nothing that proved what it actually was — no passport, no verifiable
					card.
				</p>
				<p>
					<strong>Fix.</strong> <code>agent.fafa</code> is now built by reading the server's real
					code — its actual 12 tools, one by one — not guessed or copied from another server's
					tool list. An MCP Server Card and an AI Catalog entry ship alongside it.
				</p>
				<p>
					<strong>New state.</strong> The registry entry, the catalog entry, and the card all say
					the same true thing about the server, because they're all built from the same source.
				</p>
			</div>
			<div class="terminal-block">
				<code>uvx gemini-faf-mcp</code>
			</div>
			<p class="muted-note">
				<strong>uvx is the try.</strong> Zero-install, fetched straight from PyPI. For a permanent
				install: <code>pip3 install <NpmPkg name="gemini-faf-mcp" version="2.6.0" /></code>.
			</p>
		</section>

		<section>
			<h2>What happened since The Dart Edition</h2>
			<p>
				One blog, one arc. Last write-up was
				<a href="/blog/dart-edition">v2.5.0 — The Dart Edition</a> (Dart/Flutter detection). Short
				tour to today:
			</p>
			<ul>
				<li>
					<strong>2.5.1</strong> — one.faf namespace migration: joined the fleet on
					<code>one.faf/gemini-faf-mcp</code>. Identity housekeeping, not a blog.
				</li>
				<li>
					<strong>2.6.0</strong> — The Agent Card Edition. This is the log entry for the stretch.
				</li>
			</ul>
		</section>

		<section>
			<h2>What 2.6.0 is</h2>
			<p>
				<strong>Lesson:</strong> a registry listing is a claim. A card is proof.
			</p>
			<p>
				<code>agent.fafa</code> is authored from live introspection of the server's own code —
				every tool's real name and real docstring, read directly from <code>server.py</code>. It
				ships next to an <strong>MCP Server Card</strong> (SEP-2127, carries the FAF context block
				by construction) and a fresh <strong>AI Catalog entry</strong>
				(<code>.well-known/ai-catalog.json</code> — the spec was only ratified in November 2025).
			</p>
			<p>
				GEMINI.md also stopped being a stub. It now renders real setup and test commands and a
				"where things live" section — the same richness AGENTS.md already had, brought over to
				match.
			</p>
			<p class="muted-note">
				<strong>What's not in this release:</strong> A2A support. The tooling that builds these
				cards correctly refuses to fabricate an A2A endpoint this server doesn't serve. Real A2A
				support is planned as its own future release — not bundled in early to make this one sound
				bigger than it is.
			</p>
		</section>

		<section>
			<h2>Try it</h2>
			<p><strong>Try</strong> (zero-install, not the permanent install):</p>
			<div class="terminal-block">
				<code>uvx gemini-faf-mcp</code>
			</div>
			<p><strong>Install</strong> (PyPI):</p>
			<div class="terminal-block">
				<code>pip3 install <NpmPkg name="gemini-faf-mcp" version="2.6.0" /></code>
			</div>
			<p><strong>Add to Gemini CLI:</strong></p>
			<div class="terminal-block">
				<code>gemini extensions install https://github.com/Wolfe-Jam/gemini-faf-mcp</code>
			</div>
			<p class="muted-note">
				More depth: <a href="/blog/dart-edition">Dart/Flutter detection (v2.5.0)</a> ·
				<a href="https://github.com/Wolfe-Jam/gemini-faf-mcp" target="_blank" rel="noopener"
					>repo</a
				>
				·
				<a
					href="https://pypi.org/project/gemini-faf-mcp/2.6.0/"
					target="_blank"
					rel="noopener">PyPI</a
				>.
			</p>
		</section>

		<section>
			<h2>Technical details</h2>
			<ul>
				<li><strong>Version:</strong> 2.6.0 (August 20, 2026)</li>
				<li><strong>Identity:</strong> <code>one.faf/gemini-faf-mcp</code></li>
				<li><strong>Framework:</strong> FastMCP 3.4.7</li>
				<li><strong>Tools:</strong> 12 — unchanged this release</li>
				<li><strong>Tests:</strong> 243 passing</li>
				<li><strong>Score:</strong> Trophy 100%, 17/17 slots</li>
				<li>
					<strong>New:</strong> <code>agent.fafa</code> · MCP Server Card (SEP-2127) · AI Catalog
					entry
				</li>
				<li><strong>Not yet:</strong> A2A support — a real future release, not this one</li>
			</ul>
		</section>

		<section class="feedback-invite">
			<h2>Feedback welcome</h2>
			<p>Questions, nits, suggestions — guide the next version. Tell us what you want to see.</p>
			<div class="feedback-actions">
				<a href={xIntent} target="_blank" rel="noopener" class="feedback-btn">Post on X</a>
				<a
					href="https://github.com/Wolfe-Jam/gemini-faf-mcp/issues/new"
					target="_blank"
					rel="noopener"
					class="feedback-btn secondary"
				>
					Tell us on GitHub
				</a>
			</div>
		</section>

		<section class="footer-note">
			<p>Built with .faf ☑️ A registry listing is a claim. A card is proof. 🏎️</p>
		</section>
	</article>
</div>

<style>
	:global(body) {
		background: #fefcf8;
	}

	.blog-post {
		max-width: 760px;
		margin: 0 auto;
		padding: 2rem 1rem 4rem;
		color: #1a1a1a;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
		line-height: 1.7;
	}

	.post-header {
		margin-bottom: 2rem;
	}

	.breadcrumb {
		font-size: 0.85rem;
		margin-bottom: 1.5rem;
		color: #333;
	}
	.breadcrumb a {
		color: #00d4d4;
		text-decoration: none;
		font-weight: 600;
	}
	.breadcrumb a:hover {
		text-decoration: underline;
	}

	h1 {
		font-size: 2.4rem;
		font-weight: 800;
		margin: 0 0 0.5rem;
		color: #1a1a1a;
		letter-spacing: -0.02em;
	}

	.version-tag {
		color: #1a1a1a;
		font-weight: 700;
		font-size: 1rem;
		margin: 0 0 0.5rem;
	}

	.subtitle {
		font-size: 1.2rem;
		font-weight: 500;
		margin: 0 0 1rem;
		color: #1a1a1a;
	}

	.meta {
		font-size: 0.9rem;
		color: #333;
		display: flex;
		align-items: center;
		gap: 0.6rem;
	}
	.separator {
		color: #1a1a1a;
	}
	.category {
		padding: 0.2rem 0.7rem;
		border-radius: 999px;
		font-size: 0.78rem;
		font-weight: 700;
		color: #fff;
	}
	.category.release {
		background: #00b8b8;
	}

	.hero-image {
		margin: 0 0 2.5rem;
		border-radius: 12px;
		overflow: hidden;
	}
	.hero-image img {
		width: 100%;
		height: auto;
		display: block;
	}

	.post-content section {
		margin-bottom: 2.5rem;
	}

	h2 {
		font-size: 1.7rem;
		font-weight: 700;
		margin: 0 0 1rem;
		color: #1a1a1a;
		letter-spacing: -0.01em;
	}

	.post-content p {
		margin: 0 0 1rem;
		color: #1a1a1a;
	}
	.post-content a {
		color: #ff6b35;
		font-weight: 600;
		text-decoration: none;
	}
	.post-content a:hover {
		text-decoration: underline;
	}

	.lead {
		font-size: 1.15rem;
		padding: 1.25rem 1.35rem;
		background: #f7f5f0;
		border-radius: 8px;
		border-left: 4px solid #ff6b35;
	}

	.intro .lead + .lead {
		margin-top: 1rem;
	}
	.lead .plain-label {
		margin: 0 0 0.85rem;
		font-size: 0.82rem;
		font-weight: 800;
		letter-spacing: 0.06em;
		text-transform: uppercase;
		color: #8b5a2b;
	}
	.plain-english p {
		margin: 0 0 0.85rem;
	}
	.plain-english p:last-child {
		margin-bottom: 0;
	}

	.post-content ul {
		padding-left: 1.2rem;
		margin: 0 0 1rem;
	}
	.post-content li {
		margin-bottom: 0.65rem;
		color: #1a1a1a;
	}

	.post-content code {
		background: #e5e5e5;
		color: #1a1a1a;
		padding: 0.12rem 0.4rem;
		border-radius: 4px;
		font-family: 'SF Mono', 'Fira Code', Menlo, monospace;
		font-size: 0.9em;
	}

	.muted-note {
		font-size: 0.9rem;
		color: #555;
	}

	.terminal-block {
		background: #1a1a1a;
		border-radius: 8px;
		padding: 1rem 1.25rem;
		margin: 1.25rem 0;
		display: flex;
		flex-direction: column;
		gap: 0.4rem;
	}
	.terminal-block code {
		background: transparent;
		color: #00ff88;
		padding: 0;
		font-family: 'SF Mono', 'Fira Code', Menlo, monospace;
		font-size: 0.95rem;
	}

	.feedback-invite {
		margin-top: 1rem;
		padding: 1.5rem 1.35rem;
		background: #f7f5f0;
		border-radius: 10px;
		border-left: 4px solid #00d4d4;
	}
	.feedback-invite h2 {
		margin-top: 0;
	}
	.feedback-invite p {
		margin-bottom: 1.15rem;
	}
	.feedback-actions {
		display: flex;
		flex-wrap: wrap;
		gap: 0.65rem;
	}
	.feedback-btn {
		display: inline-flex;
		align-items: center;
		padding: 0.65rem 1.2rem;
		border-radius: 6px;
		font-size: 0.92rem;
		font-weight: 700;
		text-decoration: none;
		background: #1a1a1a;
		color: #fff !important;
	}
	.feedback-btn:hover {
		background: #000;
		text-decoration: none !important;
	}
	.feedback-btn.secondary {
		background: transparent;
		color: #1a1a1a !important;
		border: 2px solid #1a1a1a;
	}
	.feedback-btn.secondary:hover {
		background: #1a1a1a;
		color: #fff !important;
		text-decoration: none !important;
	}

	.footer-note {
		margin-top: 2rem;
		padding-top: 1.5rem;
		border-top: 1px solid #e5e5e5;
		font-size: 0.95rem;
		color: #555;
	}
</style>
