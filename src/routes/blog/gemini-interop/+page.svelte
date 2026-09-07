<!-- pubblog — Release model, copied from gemini-agent-card / mcp-better-matching-client (gold, locked 2026-08-19). -->
<script lang="ts">
	import { buildShareIntent } from '$lib/shareIntent.js';

	const shareText = `🏁 Just shipped: gemini-faf-mcp v2.7.0 — The Interop Edition

Stop hand-keeping AGENTS.md. Your .faf authors it — and GEMINI.md — through one shared tool every FAF package uses.

faf_agents / faf_gemini were 4-field stubs. Now full, family-standard docs.
New faf_migrate brings an old .faf up to the current format.

13 tools · 245 tests · Trophy 100% · fastmcp 4

uvx gemini-faf-mcp

Help guide what we build —
Comments · suggestions welcome.`;
	const shareUrl = 'https://faf.one/blog/gemini-interop';
	const xIntent = buildShareIntent({ text: shareText, url: shareUrl });
</script>

<svelte:head>
	<title>The Interop Edition - gemini-faf-mcp v2.7.0 | FAF</title>
	<meta
		name="description"
		content="faf_agents and faf_gemini now author family-standard AGENTS.md / GEMINI.md, and a new faf_migrate brings a .faf up to the current format. gemini-faf-mcp v2.7.0 — The Interop Edition."
	/>
	<meta property="og:title" content="The Interop Edition - gemini-faf-mcp v2.7.0" />
	<meta
		property="og:description"
		content="faf_agents and faf_gemini now author family-standard AGENTS.md / GEMINI.md, and a new faf_migrate brings a .faf up to the current format."
	/>
	<meta property="og:type" content="article" />
	<meta property="og:url" content="https://faf.one/blog/gemini-interop" />
	<meta property="og:site_name" content=".faf Format Authority" />
	<meta property="og:image" content="https://faf.one/blog/gemini-interop-hero.png" />
	<meta property="og:image:secure_url" content="https://faf.one/blog/gemini-interop-hero.png" />
	<meta property="og:image:type" content="image/png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta
		property="og:image:alt"
		content="The Interop Edition — gemini-faf-mcp v2.7.0 · your .faf writes AGENTS.md and GEMINI.md"
	/>
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@fafformat" />
	<meta name="twitter:creator" content="@wolfe_jam" />
	<meta name="twitter:title" content="The Interop Edition - gemini-faf-mcp v2.7.0" />
	<meta
		name="twitter:description"
		content="faf_agents and faf_gemini now author family-standard AGENTS.md / GEMINI.md, and a new faf_migrate brings a .faf up to the current format."
	/>
	<meta name="twitter:image" content="https://faf.one/blog/gemini-interop-hero.png" />
	<meta
		name="twitter:image:alt"
		content="The Interop Edition — gemini-faf-mcp v2.7.0 · your .faf writes AGENTS.md and GEMINI.md"
	/>
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / The Interop Edition
		</div>
		<h1>The Interop Edition</h1>
		<p class="version-tag">gemini-faf-mcp v2.7.0</p>
		<p class="subtitle">
			<code>faf_agents</code> and <code>faf_gemini</code> now author family-standard AGENTS.md / GEMINI.md,
			and a new <code>faf_migrate</code> brings a .faf up to the current format.
		</p>
		<div class="meta">
			<time datetime="2026-09-06">September 6, 2026</time>
			<span class="separator">•</span>
			<span class="category release">Release</span>
		</div>
	</header>

	<div class="hero-image">
		<img
			src="/blog/gemini-interop-hero.png"
			alt="The Interop Edition — gemini-faf-mcp v2.7.0 · your .faf writes AGENTS.md and GEMINI.md"
			width="1200"
			height="630"
			loading="eager"
			decoding="async"
		/>
	</div>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> <code>faf_agents</code> and <code>faf_gemini</code> used to write thin
				stub files. They now author the full, family-standard AGENTS.md and GEMINI.md — the same
				shape every other FAF tool produces, because they call the same authoring tool. New
				<code>faf_migrate</code> brings an old <code>.faf</code> up to the current format so it has
				current input.
			</p>
			<div class="lead plain-english">
				<p class="plain-label">In Plain English</p>
				<p>
					<strong>Old state.</strong> <code>faf_agents</code> gave you four headings —
					<code>## Project</code>, <code>## Context</code>, <code>## Stack</code> — with "N/A" in
					most of them, plus who/why marketing copy that has no business in an agent's operating
					file. <code>faf_gemini</code> wrote YAML frontmatter and an embedded score. Every FAF tool
					that authored these files did it a little differently.
				</p>
				<p>
					<strong>Fix.</strong> Both tools now call one authoring tool that lives in
					<code>faf-python-sdk</code> — a Python port of the same logic faf-cli uses, kept in
					parity. The AGENTS.md you get is the full shape: setup, tests, where things live,
					conventions, a three-tier guardrails ladder, definition of done, when stuck, security,
					commit &amp; PR, stack. No "who/why" section — that belongs in your README and your
					<code>.faf</code>, not your agent ops file. GEMINI.md follows Gemini CLI's own
					hierarchical, <code>@file</code>-importable convention.
				</p>
				<p>
					<strong>New state.</strong> The AGENTS.md faf-cli writes and the one gemini-faf-mcp writes
					are the same document shape, because they are the same code. One implementation, one
					standard, across the family.
				</p>
			</div>
			<div class="terminal-block">
				<code>uvx gemini-faf-mcp</code>
			</div>
			<p class="muted-note">
				<strong>uvx is the try.</strong> Zero-install, fetched straight from PyPI. For a permanent
				install: <code>pip3 install gemini-faf-mcp==2.7.0</code>.
			</p>
		</section>

		<section>
			<h2>What happened since The Agent Card Edition</h2>
			<p>
				One blog, one arc. Last write-up was
				<a href="/blog/gemini-agent-card">v2.6.0 — The Agent Card Edition</a> (a real
				<code>agent.fafa</code> passport, MCP Server Card, AI Catalog entry). 2.7.0 is the next log
				entry — the doc tools got real.
			</p>
			<p>
				"The Interop Edition" is a shared name. <code>faf-python-sdk</code> 1.3.0 shipped the same
				day with the same title — it is where the shared AGENTS.md / GEMINI.md authoring tool now
				lives. gemini-faf-mcp 2.7.0 is the first server to wrap it. Same work, two packages.
			</p>
		</section>

		<section>
			<h2>What 2.7.0 is</h2>
			<p>
				<strong>Lesson:</strong> a file your tools write for you is only useful if every tool writes
				the same one.
			</p>
			<p>
				<code>faf_agents</code> and <code>faf_gemini</code> are now three-line wrappers over one
				authoring tool in <code>faf-python-sdk</code>. The projection is deterministic — same
				<code>.faf</code> in, same Markdown out — and it is the BETTER shape faf-cli's
				<code>faf export</code> already produced. Commands are classified and ordered
				(install → build → dev), the guardrails render as a three-tier ladder (Always OK / Ask first
				/ Never), and there is a Definition of Done and a "When stuck" section. Human Context is
				deliberately left out.
			</p>
			<p>
				<code>faf_migrate</code> is the new thirteenth tool. It bumps a <code>.faf</code> to the
				current format version, ensures the section roots exist, and re-serializes — legacy slot
				names still score through the registry's aliases. Pass <code>dry_run</code> to preview the
				change without writing. It is parity with faf-cli's <code>faf migrate</code>.
			</p>
			<p class="muted-note">
				<strong>Also in this release:</strong> <code>fastmcp</code> floor moved to 4.0.0, Python 3.10
				is dropped (<code>requires-python &gt;=3.11</code>), and the 245-test suite now runs in CI on
				3.11 / 3.12 / 3.13 on every push — it used to run only locally.
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
				<code>pip3 install gemini-faf-mcp==2.7.0</code>
			</div>
			<p><strong>Add to Gemini CLI:</strong></p>
			<div class="terminal-block">
				<code>gemini extensions install https://github.com/Wolfe-Jam/gemini-faf-mcp</code>
			</div>
			<p><strong>Then, in Gemini CLI:</strong></p>
			<div class="terminal-block">
				<code>Run faf_agents to write my AGENTS.md</code>
				<code>Run faf_migrate --dry-run on my project.faf</code>
			</div>
			<p class="muted-note">
				More depth: <a href="/blog/gemini-agent-card">The Agent Card Edition (v2.6.0)</a> ·
				<a href="https://github.com/Wolfe-Jam/gemini-faf-mcp" target="_blank" rel="noopener">repo</a>
				·
				<a href="https://pypi.org/project/gemini-faf-mcp/2.7.0/" target="_blank" rel="noopener"
					>PyPI</a
				>.
			</p>
		</section>

		<section>
			<h2>Technical details</h2>
			<ul>
				<li><strong>Version:</strong> 2.7.0 (September 6, 2026)</li>
				<li><strong>Identity:</strong> <code>one.faf/gemini-faf-mcp</code></li>
				<li><strong>Framework:</strong> FastMCP 4 (floor <code>&gt;=4.0.0</code>)</li>
				<li><strong>Runtime:</strong> Python 3.11+ (3.10 dropped)</li>
				<li>
					<strong>Depends on:</strong> <code>faf-python-sdk &gt;=1.3.0</code> — where the authoring
					tool lives
				</li>
				<li><strong>Tools:</strong> 13 (+1 — <code>faf_migrate</code>)</li>
				<li><strong>Tests:</strong> 245 passing — now in CI on 3.11 / 3.12 / 3.13</li>
				<li><strong>Score:</strong> Trophy 100%, 17/17 slots</li>
				<li>
					<strong>Changed:</strong> <code>faf_agents</code> / <code>faf_gemini</code> rewritten as
					SDK wrappers; <code>faf_init</code> / <code>faf_auto</code> templates emit
					<code>faf_version: "3.0"</code>
				</li>
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
			<p>Built with .faf ☑️ One authoring tool. One standard. Every FAF surface. 🏎️</p>
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
