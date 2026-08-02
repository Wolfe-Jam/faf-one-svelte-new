<script lang="ts">
	import { onMount } from 'svelte';
	import { buildShareIntent } from '$lib/shareIntent.js';
	import NpmPkg from '$lib/NpmPkg.svelte';
	let mounted = false;
	onMount(() => {
		mounted = true;
	});

	// Three pillars for a Go reader: what · why · what's in it for them.
	const shareText = `🏁 faf-cli v7.3.0 — The Go Edition

What: content-aware Go for AI context
Why: go.mod alone ≠ backend
For you: Gin stays Gin · pure libs stay libs

npm i -g faf-cli@7.3.0
cd your-module && faf auto`;
	const shareUrl = 'https://faf.one/blog/go-edition';
	const xIntent = buildShareIntent({ text: shareText, url: shareUrl });
</script>

<svelte:head>
	<title>The Go Edition - faf-cli v7.3.0 | FAF</title>
	<meta
		name="description"
		content="The Go Edition: what it is, why it exists, what’s in it for Go devs. go.mod alone ≠ backend — agents get Gin, Cobra, MCP, or library, not a generic service."
	/>
	<meta property="og:title" content="The Go Edition - faf-cli v7.3.0" />
	<meta
		property="og:description"
		content="What it is · why it exists · what’s in it for Go devs. go.mod alone ≠ backend."
	/>
	<meta property="og:type" content="article" />
	<meta property="og:url" content="https://faf.one/blog/go-edition" />
	<meta property="og:site_name" content=".faf Format Authority" />
	<meta property="og:image" content="https://faf.one/blog/go-edition-hero.png?v=1" />
	<meta property="og:image:secure_url" content="https://faf.one/blog/go-edition-hero.png?v=1" />
	<meta property="og:image:type" content="image/png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:image:alt" content="The Go Edition — faf-cli v7.3.0 · go.mod alone ≠ backend" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@fafformat" />
	<meta name="twitter:creator" content="@wolfe_jam" />
	<meta name="twitter:title" content="The Go Edition - faf-cli v7.3.0" />
	<meta
		name="twitter:description"
		content="What it is · why it exists · what’s in it for Go devs. go.mod alone ≠ backend."
	/>
	<meta name="twitter:image" content="https://faf.one/blog/go-edition-hero.png?v=1" />
	<meta name="twitter:image:alt" content="The Go Edition — faf-cli v7.3.0 · go.mod alone ≠ backend" />
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / The Go Edition
		</div>
		<h1>The Go Edition</h1>
		<p class="version-tag">faf-cli v7.3.0</p>
		<p class="subtitle">
			What it is · why it exists · what’s in it for Go devs
		</p>
		<div class="meta">
			<time datetime="2026-08-01">August 1, 2026</time>
			<span class="separator">•</span>
			<span class="category release">Release</span>
		</div>
	</header>

	<div class="hero-image">
		<img
			src="/blog/go-edition-hero.png?v=1"
			alt="The Go Edition — faf-cli v7.3.0. go.mod alone ≠ backend."
			width="1200"
			height="630"
			loading="eager"
			decoding="async"
		/>
	</div>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> <code>faf-cli</code> <strong>7.3.0</strong> understands Go modules the
				way you do — from <code>require</code> paths and layout, not from the fact that
				<code>go.mod</code> exists. Kill line: <strong><code>go.mod</code> alone ≠ backend.</strong>
			</p>
			<div class="terminal-block">
				<code>npm install -g <NpmPkg name="faf-cli" version="7.3.0" /></code>
				<code>cd your-module && faf auto && faf score</code>
			</div>
		</section>

		<section>
			<h2>What it is</h2>
			<p>
				<strong>The Go Edition</strong> is content-aware Go detection in
				<code>faf-cli</code>. You run <code>faf auto</code> in a module; it reads your
				<code>go.mod</code> (and light layout), then writes durable project context into
				<code>project.faf</code> so AI agents know what they’re standing in.
			</p>
			<p>It classifies your module as one of:</p>
			<ul>
				<li><strong>MCP server</strong> — e.g. mark3labs/mcp-go, official go-sdk</li>
				<li>
					<strong>Backend</strong> — Gin, Echo, Fiber, Chi, gRPC, Connect, Kratos, go-zero, Hertz…
				</li>
				<li>
					<strong>CLI</strong> — Cobra, urfave/cli, Kingpin, Kong; or <code>cmd/</code> / root
					<code>package main</code>
				</li>
				<li><strong>Library</strong> — pure module, no server/CLI/MCP signal</li>
			</ul>
			<p>
				Also recorded: the <code>module</code> path and an inspectable found-line (e.g.
				<code>go.mod + github.com/gin-gonic/gin (Go backend)</code>). Not a black box.
			</p>
		</section>

		<section>
			<h2>Why it exists</h2>
			<p class="thesis">Every Go project has a go.mod. Not every Go project is a backend.</p>
			<p>
				Libraries, CLIs, HTTP APIs, gRPC services, and MCP servers all start the same way:
				<code>module …</code> and a <code>require</code> block. Filename-only tooling treats them as
				the same thing — usually “some Go service.”
			</p>
			<p>
				Wrong shape at the root means wrong AI context: the agent invents handlers you don’t have,
				skips packages you do, or “refactors” a library like an API. The Go Edition exists so the
				first fact agents get is the one you already encoded in deps and layout —
				<strong>what the module actually is</strong>.
			</p>
		</section>

		<section>
			<h2>What’s in it for Go devs</h2>
			<ul>
				<li>
					<strong>Agents that match the repo.</strong> Gin stays Gin. A pure package stays a library.
					Cobra tools don’t get mistaken for HTTP services.
				</li>
				<li>
					<strong>Zero new config.</strong> No tags, no extra manifest. It uses
					<code>go.mod</code> + idiomatic layout you already ship.
				</li>
				<li>
					<strong>Conflict rules you’d write yourself.</strong> MCP over Gin when both are present;
					server over Cobra; layout only when requires don’t decide;
					<code>go.mod</code> alone never means backend.
				</li>
				<li>
					<strong>Honest fallbacks.</strong> Unknown framework paths fall through to layout or
					library — not a fake “backend” label.
				</li>
			</ul>

			<div class="table-wrap">
				<table>
					<thead>
						<tr>
							<th>Your module looks like…</th>
							<th>What agents get</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td><code>github.com/gin-gonic/gin</code> (Echo / Fiber / Chi / gRPC / …)</td>
							<td><code>backend</code> + framework name</td>
						</tr>
						<tr>
							<td><code>github.com/spf13/cobra</code> or <code>urfave/cli</code></td>
							<td><code>cli</code></td>
						</tr>
						<tr>
							<td><code>cmd/…/*.go</code> or root <code>package main</code></td>
							<td><code>cli</code> (when no server dep)</td>
						</tr>
						<tr>
							<td>mcp-go / official go-sdk</td>
							<td><code>mcp</code></td>
						</tr>
						<tr>
							<td>Module only — no server/CLI/MCP signal</td>
							<td><code>library</code></td>
						</tr>
					</tbody>
				</table>
			</div>
		</section>

		<section>
			<h2>Try it</h2>
			<div class="terminal-block">
				<code>npm install -g <NpmPkg name="faf-cli" version="7.3.0" /></code>
				<code>cd path/to/your/module</code>
				<code>faf auto</code>
				<code>faf score</code>
			</div>
			<p>
				Open <code>project.faf</code>. A Gin service should show backend + Gin. A package with no
				server/CLI/MCP signal should show library.
			</p>
			<p class="muted-note">
				Same binary also on npm as <code><NpmPkg name="faf" version="7.3.0" /></code> if you want the
				short name.
			</p>
		</section>

		<section>
			<h2>Bounds</h2>
			<ul>
				<li>
					<strong>Does:</strong> classify from <code>go.mod</code> + light layout (16-fixture suite).
				</li>
				<li>
					<strong>Does not:</strong> know every path in the ecosystem, or treat bare
					<code>package main</code> as a production HTTP service.
				</li>
			</ul>
		</section>

		<section class="feedback-invite">
			<h2>Feedback welcome</h2>
			<p>
				Missed a framework you ship with? Wrong shape on a real module? Tell us — we will build more.
				Open an issue or say so in public; the detection map grows from what Gophers actually use.
			</p>
			<div class="feedback-actions">
				<a
					href="https://github.com/Wolfe-Jam/faf-cli/issues/new?title=Go%20detection%3A%20&amp;body=Module%20shape%20%2F%20go.mod%20snippet%20%28redact%20secrets%29%3A%0A%0AExpected%3A%0A%0AGot%3A%0A"
					target="_blank"
					rel="noopener"
					class="feedback-btn"
				>
					Open a GitHub issue
				</a>
				<a href={xIntent} target="_blank" rel="noopener" class="feedback-btn secondary">Post on X</a>
			</div>
		</section>

		<section class="star-cta">
			<p>If this saves you a wrong agent brief, a star helps the next module find it.</p>
			<a href="https://github.com/Wolfe-Jam/faf-cli" target="_blank" rel="noopener" class="star-btn">
				<svg viewBox="0 0 16 16" width="15" height="15" aria-hidden="true" fill="currentColor"
					><path
						d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
					/></svg
				>
				Star faf-cli
			</a>
		</section>

		<section class="footer-note">
			<p>Built with .faf ☑️ go.mod alone ≠ backend.</p>
		</section>
	</article>
</div>

<style>
	:global(body) {
		background: var(--faf-page-bg);
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
	.subtitle a {
		color: #ff6b35;
		font-weight: 600;
		text-decoration: none;
	}
	.subtitle a:hover {
		text-decoration: underline;
	}
	.subtitle code {
		font-family: 'SF Mono', 'Fira Code', Menlo, monospace;
		background: #e5e5e5;
		padding: 0.12rem 0.4rem;
		border-radius: 4px;
		font-size: 0.9em;
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

	.thesis {
		font-size: 1.5rem;
		font-weight: 800;
		letter-spacing: -0.01em;
		line-height: 1.3;
		margin: 0 0 1.25rem;
		color: #1a1a1a;
	}

	.post-content ul,
	.post-content ol {
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

	.table-wrap {
		overflow-x: auto;
		margin: 0 0 1.25rem;
		border-radius: 8px;
		border: 1px solid #e5e5e5;
	}
	.post-content table {
		width: 100%;
		border-collapse: collapse;
		font-size: 0.95rem;
	}
	.post-content th,
	.post-content td {
		text-align: left;
		padding: 0.75rem 1rem;
		border-bottom: 1px solid #e5e5e5;
		vertical-align: top;
		color: #1a1a1a;
	}
	.post-content th {
		background: #f7f5f0;
		font-weight: 700;
		font-size: 0.82rem;
		text-transform: uppercase;
		letter-spacing: 0.03em;
	}
	.post-content tr:last-child td {
		border-bottom: none;
	}
	.post-content td code {
		font-size: 0.85em;
		word-break: break-word;
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
	}

	.star-cta {
		margin-top: 2.5rem;
		text-align: center;
	}
	.star-cta p {
		color: #333;
		margin: 0 0 1rem;
	}
	.star-btn {
		display: inline-flex;
		align-items: center;
		gap: 0.45rem;
		padding: 0.45rem 0.9rem;
		border-radius: 6px;
		font-size: 0.82rem;
		font-weight: 600;
		text-decoration: none;
		background: #1a1a1a;
		color: #fff;
	}
	.star-btn svg {
		display: block;
	}
	.star-btn:hover {
		background: #000;
	}

	.footer-note {
		margin-top: 2.5rem;
		padding-top: 1.5rem;
		border-top: 1px solid #e5e5e5;
		text-align: center;
	}
	.footer-note p {
		color: #333;
		font-weight: 600;
	}

	@media (max-width: 640px) {
		h1 {
			font-size: 1.9rem;
		}
		h2 {
			font-size: 1.4rem;
		}
		.thesis {
			font-size: 1.25rem;
		}
	}
</style>
