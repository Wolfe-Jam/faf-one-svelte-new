<!-- pubblog Release — spine copied from mcp-better-matching-client (GOLD). -->
<script lang="ts">
	import { buildShareIntent } from '$lib/shareIntent.js';
	import NpmPkg from '$lib/NpmPkg.svelte';

	const shareText = `🏁 Just shipped: faf-mcp v3.0.0 — The Compose Edition

Compose, don't port. One scorer, one set of renderers, one injector.

Runs on faf-cli 7.12 in-process · local stdio · 29 tools · Node 22+
Every number, file and claim is true.

bunx faf-mcp

Help guide what we build —
Comments · suggestions · shares welcome.`;
	const shareUrl = 'https://faf.one/blog/faf-mcp-compose';
	const xIntent = buildShareIntent({ text: shareText, url: shareUrl });
</script>

<svelte:head>
	<title>The Compose Edition - faf-mcp v3.0.0 | FAF</title>
	<meta
		name="description"
		content="Compose, don't port: faf-mcp 3.0 runs on faf-cli 7.12 in-process — one scorer, one set of renderers, one injector — and every number, file and claim this package makes is true. Local stdio, 29 tools, Node 22+."
	/>
	<meta property="og:title" content="The Compose Edition - faf-mcp v3.0.0" />
	<meta
		property="og:description"
		content="Compose, don't port: faf-mcp 3.0 runs on faf-cli 7.12 in-process — one scorer, one set of renderers, one injector."
	/>
	<meta property="og:type" content="article" />
	<meta property="og:url" content="https://faf.one/blog/faf-mcp-compose" />
	<meta property="og:site_name" content=".faf Format Authority" />
	<meta property="og:image" content="https://faf.one/blog/faf-mcp-compose-hero.png" />
	<meta property="og:image:secure_url" content="https://faf.one/blog/faf-mcp-compose-hero.png" />
	<meta property="og:image:type" content="image/png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta
		property="og:image:alt"
		content="The Compose Edition — faf-mcp v3.0.0 · compose, don't port"
	/>
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@fafformat" />
	<meta name="twitter:creator" content="@wolfe_jam" />
	<meta name="twitter:title" content="The Compose Edition - faf-mcp v3.0.0" />
	<meta
		name="twitter:description"
		content="Compose, don't port: faf-mcp 3.0 runs on faf-cli 7.12 in-process — one scorer, one set of renderers, one injector."
	/>
	<meta name="twitter:image" content="https://faf.one/blog/faf-mcp-compose-hero.png" />
	<meta
		name="twitter:image:alt"
		content="The Compose Edition — faf-mcp v3.0.0 · compose, don't port"
	/>
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / The Compose Edition
		</div>
		<h1>The Compose Edition</h1>
		<p class="version-tag">faf-mcp v3.0.0</p>
		<p class="subtitle">Compose, don't port — one scorer, one set of renderers, one injector.</p>
		<div class="meta">
			<time datetime="2026-09-10">September 10, 2026</time>
			<span class="separator">•</span>
			<span class="category release">Release</span>
		</div>
	</header>

	<div class="hero-image">
		<img
			src="/blog/faf-mcp-compose-hero.png"
			alt="The Compose Edition — faf-mcp v3.0.0 · compose, don't port"
			width="1200"
			height="630"
			loading="eager"
			decoding="async"
		/>
	</div>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> Compose, don't port: faf-mcp 3.0 runs on faf-cli 7.12 in-process —
				one scorer, one set of renderers, one injector — and every number, file and claim this
				package makes is true. Local stdio, 29 tools, Node 22+.
			</p>
			<div class="lead plain-english">
				<p class="plain-label">In Plain English</p>
				<p>
					<strong>Old state.</strong> The IDE MCP server carried its own copies of scoring, writing
					AGENTS.md / .cursorrules / GEMINI.md / CLAUDE.md, and injecting the managed block. Those
					copies drifted. Some tools shelled out to whatever <code>faf</code> was on PATH. Docs
					talked about a hosted endpoint this package does not run.
				</p>
				<p>
					<strong>Fix.</strong> Every tool composes
					<a href="/blog/open-renderers-edition">faf-cli 7.12</a> in-process. Same scorer, same
					renderers, same injector. Nothing ported. Nothing shelled out.
				</p>
				<p>
					<strong>New state.</strong> One number on disk, the same bytes the CLI writes, and every
					claim on the box is true. Local stdio. Node 22 or newer.
				</p>
			</div>
			<div class="terminal-block">
				<code>bunx faf-mcp</code>
			</div>
			<p class="muted-note">
				<strong>Install:</strong>
				<code>npm install -g <NpmPkg name="faf-mcp" version="3.0.0" /></code>
				· pin in scripts — <code>@latest</code> drifts. Needs Node 22+.
			</p>
		</section>

		<section>
			<h2>What happened since .FAF Context</h2>
			<p>
				One blog, one arc. Last write-up was
				<a href="/blog/faf-context">faf-mcp v2.3.1</a> — cwd resolution, so the server scores the
				project you have open. This is the major: stop carrying copies of faf-cli.
			</p>
			<p>
				Same-day sibling:
				<a href="/blog/open-renderers-edition">faf-cli 7.12 The Open Renderers Edition</a> opened
				the renderers. This package is the first consumer.
			</p>
		</section>

		<section>
			<h2>What 3.0.0 is</h2>
			<p>
				<strong>Lesson:</strong> compose, don't port. If faf-cli is the writer, the MCP server
				should call it — not ship a second writer that drifts.
			</p>
			<ul>
				<li>
					<strong>One score.</strong>
					<code>faf_auto</code>, <code>faf_go</code>, <code>faf_dna</code>,
					<code>faf_doctor</code>, <code>faf_bi_sync</code> all report faf-cli's
					<code>scoreFafYaml</code> on the bytes on disk. The local heuristics are gone.
				</li>
				<li>
					<strong>Same files as the CLI.</strong> AGENTS.md, GEMINI.md, .cursorrules and CLAUDE.md
					come from faf-cli's renderers and injector — the same bytes
					<code>faf export</code> writes.
				</li>
				<li>
					<strong>Nothing shells out.</strong> No <code>which faf</code>, no exec fallback, no
					"install faf-cli first" banner. The CLI is bundled. An unrelated
					<code>faf</code> on PATH is not a problem.
				</li>
				<li>
					<strong>Docs match the binary.</strong> Local stdio. No hosted endpoint, no Deploy to
					Vercel, no Streamable HTTP claim on this package.
				</li>
			</ul>
		</section>

		<section>
			<h2>Breaking, on purpose</h2>
			<ul>
				<li><strong>Node 22 or newer.</strong> 18 and 20 are end of life. CI runs 22 and 24.</li>
				<li>
					<strong>faf-cli ^7.12.0</strong> — was 6.x. The compose floor is the Open Renderers
					cut.
				</li>
				<li>
					<strong>Resource URIs</strong> are <code>faf://context</code> and
					<code>faf://status</code>. <code>claude-faf://</code> stays readable as an alias for this
					release.
				</li>
			</ul>
		</section>

		<section>
			<h2>Try it</h2>
			<p><strong>Run</strong> (no install):</p>
			<div class="terminal-block">
				<code>bunx faf-mcp</code>
			</div>
			<p><strong>Install:</strong></p>
			<div class="terminal-block">
				<code>npm install -g <NpmPkg name="faf-mcp" version="3.0.0" /></code>
			</div>
			<p>Cursor / VS Code / Windsurf / Cline — MCP config:</p>
			<div class="terminal-block">
				<code>{`{"mcpServers": {"faf": {"command": "bunx", "args": ["faf-mcp"]}}}`}</code>
			</div>
			<p class="muted-note">
				More:
				<a href="/blog/open-renderers-edition">The Open Renderers Edition (faf-cli 7.12)</a>
				·
				<a href="/blog/faf-context">.FAF Context (v2.3.1)</a>
				·
				<a
					href="https://github.com/Wolfe-Jam/faf-mcp/releases/tag/v3.0.0"
					target="_blank"
					rel="noopener">v3.0.0 release</a
				>
				·
				<a href="https://github.com/Wolfe-Jam/faf-mcp" target="_blank" rel="noopener">repo</a>.
			</p>
		</section>

		<section>
			<h2>Technical details</h2>
			<ul>
				<li><strong>Version:</strong> 3.0.0 (September 10, 2026)</li>
				<li><strong>Identity:</strong> <code>one.faf/faf-mcp</code> · npm <code>faf-mcp</code></li>
				<li><strong>Compose floor:</strong> faf-cli ^7.12.0 (The Open Renderers Edition)</li>
				<li><strong>Tools:</strong> 29 (15 Core by default · full set via <code>FAF_TOOLS=all</code>)</li>
				<li><strong>Tests:</strong> 334/334 (1 todo)</li>
				<li><strong>Transport:</strong> local stdio</li>
				<li><strong>Runtime:</strong> Node 22+</li>
				<li><strong>Score:</strong> ✪ Trophy 100%</li>
			</ul>
		</section>

		<section class="feedback-invite">
			<h2>Feedback welcome</h2>
			<p>Questions, nits, suggestions — guide the next version. Tell us what you want to see.</p>
			<div class="feedback-actions">
				<a href={xIntent} target="_blank" rel="noopener" class="feedback-btn">Post on X</a>
				<a
					href="https://github.com/Wolfe-Jam/faf-mcp/issues/new"
					target="_blank"
					rel="noopener"
					class="feedback-btn secondary"
				>
					Tell us on GitHub
				</a>
			</div>
		</section>

		<section class="footer-note">
			<p>Built with .faf ☑️ Compose, don't port. 🏎️</p>
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
		overflow-x: auto;
	}
	.terminal-block code {
		background: transparent;
		color: #00ff88;
		padding: 0;
		font-family: 'SF Mono', 'Fira Code', Menlo, monospace;
		font-size: 0.95rem;
		white-space: pre;
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
