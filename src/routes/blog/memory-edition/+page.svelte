<script lang="ts">
	import { onMount } from 'svelte';
	import { buildShareIntent } from '$lib/shareIntent.js';
	let mounted = false;
	onMount(() => { mounted = true; });

	// Rich X share — pre-fill the crafted post (formula-based, never bare URL).
	const shareText = `🏁 Just shipped: faf-cli v7.2.0 — The Memory Edition

.faf is context. .fafm is memory.

One CLI, both IANA formats. Convert Claude memory → soul.fafm.

npm i -g faf-cli@7.2.0`;
	const shareUrl = 'https://faf.one/blog/memory-edition';
	const xIntent = buildShareIntent({ text: shareText, url: shareUrl });
</script>

<svelte:head>
	<title>The Memory Edition - faf-cli v7.2.0 | FAF</title>
	<meta name="description" content=".faf is context. .fafm is memory. faf-cli v7.2.0 ships portable agent memory in the IANA-registered .fafm format — convert Claude Code memory, etch, recall, INTEROP with claude-fafm-sdk 1.0." />
	<meta property="og:title" content="The Memory Edition - faf-cli v7.2.0" />
	<meta property="og:description" content=".faf is context. .fafm is memory. One CLI, both IANA-registered formats." />
	<meta property="og:type" content="article" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta property="og:image" content="https://faf.one/blog/memory-edition-hero.png" />
	<meta name="twitter:image" content="https://faf.one/blog/memory-edition-hero.png" />
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / The Memory Edition
		</div>
		<h1>The Memory Edition</h1>
		<p class="version-tag">faf-cli v7.2.0 · 🏆</p>
		<p class="subtitle">.faf is context. .fafm is memory.</p>
		<div class="meta">
			<time datetime="2026-07-22">July 22, 2026</time>
			<span class="separator">•</span>
			<span class="category release">Release</span>
		</div>
	</header>

	<div class="hero-image">
		<img src="/blog/memory-edition-hero.png" alt="FAF dual mark: context (orange DotFaf smiley, .faf) and memory (orange Nelly the elephant, .fafm). faf-cli v7.2.0 The Memory Edition — .faf is context. .fafm is memory." />
	</div>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> <code>.faf</code> is context. <strong><code>.fafm</code> is memory.</strong>
				v7.2.0 puts portable agent memory in the CLI you already run — convert a Claude Code memory directory to a
				<code>soul.fafm</code>, then etch, list, and recall with the same INTEROP as
				<a href="https://pypi.org/project/claude-fafm-sdk/">claude-fafm-sdk 1.0</a>.
			</p>
			<div class="terminal-block">
				<code>npm install -g faf-cli@7.2.0</code>
			</div>
		</section>

		<section>
			<p class="thesis">.faf is context. .fafm is memory.</p>
			<p>
				For a year, faf-cli authored the context layer: one scored <code>project.faf</code> →
				<code>AGENTS.md</code> · <code>CLAUDE.md</code> · the whole vendor surface. That's the foundation AI needs
				to understand your repo.
			</p>
			<p>
				Memory is the other half. Agents that forget between sessions re-ask the same questions and re-learn the
				same facts. The IANA-registered <code>.fafm</code> format
				(<code>application/vnd.fafm+yaml</code>) is how those facts travel — offline-first YAML, knowledge profile,
				cross-vendor. Python shipped the bar in <strong>claude-fafm-sdk 1.0</strong>. Today the CLI carries the same shape.
			</p>
		</section>

		<section>
			<h2>What's New</h2>
			<ul>
				<li>
					<strong><code>faf memory convert</code></strong> — Claude Code memory directory →
					<code>soul.fafm</code>. Schema-constrained (type gate, whitelist extraction — no frontmatter leak).
					Provenance rides in fact extras, not a forked schema.
				</li>
				<li>
					<strong><code>etch</code> · <code>ls</code> · <code>recall</code> · <code>show</code></strong> —
					write a fact, list ranked, deterministic filter + rank, soul summary. <code>--json</code> when you
					need a pipe.
				</li>
				<li>
					<strong>TS library</strong> — <code>Soul</code> + <code>fromClaudeDir</code> in the package root
					exports. Same INTEROP as the Python SDK: residual preserve, index rebuild, recall source of truth.
				</li>
				<li>
					<strong><code>.fafm</code> in <code>faf formats</code></strong> — discoverable next to
					<code>.faf</code> and <code>.fafb</code>.
				</li>
			</ul>
		</section>

		<section>
			<h2>Try It</h2>
			<div class="terminal-block">
				<code>npm install -g faf-cli@7.2.0</code>
				<code>faf memory convert ~/.claude/projects/.../memory -o soul.fafm</code>
				<code>faf memory recall "your query"</code>
			</div>
			<p>
				Prefer Python? Same INTEROP, same soul shape:
			</p>
			<div class="terminal-block">
				<code>pip install claude-fafm-sdk==1.0.0</code>
				<code># or: uvx claude-fafm-sdk</code>
			</div>
		</section>

		<section>
			<h2>Why both</h2>
			<p>
				<strong>Context</strong> is what the project is. <strong>Memory</strong> is what the agent learned.
				One without the other leaves the AI guessing or re-explaining. Two formats, one ecosystem, both
				IANA-registered — and now both reachable from <code>faf</code>.
			</p>
		</section>

		<section>
			<h2>The Numbers</h2>
			<ul>
				<li><strong>v7.2.0</strong> — released July 22, 2026</li>
				<li><strong>1,164 / 1,164</strong> — tests passing</li>
				<li><strong>100%</strong> — Trophy FAF score</li>
				<li><strong>INTEROP</strong> — aligned with claude-fafm-sdk 1.0</li>
				<li><strong>IANA</strong> — <code>.faf</code> + <code>.fafm</code> both registered</li>
				<li><strong>115,000+</strong> — ecosystem downloads</li>
			</ul>
		</section>

		<section class="share-section">
			<a href={xIntent} target="_blank" rel="noopener" class="share-btn">Post on X</a>
		</section>

		<section class="star-cta">
			<p>If you like our work, consider a star on the repo — it helps others find us too.</p>
			<a href="https://github.com/Wolfe-Jam/faf-cli" target="_blank" rel="noopener" class="star-btn">
				<svg viewBox="0 0 16 16" width="15" height="15" aria-hidden="true" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>
				Star faf-cli
			</a>
		</section>

		<section class="footer-note">
			<p>Built with .faf + .fafm ☑️ Context is understanding. Memory is recall. 🏎️</p>
		</section>
	</article>
</div>

<style>
	/* Light theme — plain :global(body), no !important (prevents nav flash) */
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
		color: #00D4D4;
		text-decoration: none;
		font-weight: 600;
	}
	.breadcrumb a:hover {
		text-decoration: underline;
	}

	h1 {
		font-size: 2.6rem;
		font-weight: 800;
		margin: 0 0 0.5rem;
		color: #1a1a1a;
		letter-spacing: -0.02em;
	}

	.version-tag {
		color: #FF6B35;
		font-weight: 700;
		font-size: 1rem;
		margin: 0 0 0.5rem;
	}

	.subtitle {
		font-size: 1.25rem;
		color: #333;
		font-weight: 500;
		margin: 0 0 1rem;
	}

	.meta {
		font-size: 0.9rem;
		color: #333;
		display: flex;
		align-items: center;
		gap: 0.6rem;
	}
	.separator { color: #1a1a1a; }
	.category {
		padding: 0.2rem 0.7rem;
		border-radius: 999px;
		font-size: 0.78rem;
		font-weight: 700;
		color: #fff;
	}
	.category.release { background: #00B8B8; }

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
	h2 code {
		background: transparent;
		color: #FF6B35;
		padding: 0;
		font-size: 0.92em;
	}

	.post-content p {
		margin: 0 0 1rem;
		color: #1a1a1a;
	}

	.lead {
		font-size: 1.15rem;
	}

	.thesis {
		font-size: 1.5rem;
		font-weight: 800;
		color: #FF6B35;
		letter-spacing: -0.01em;
		line-height: 1.3;
		margin: 0 0 1.25rem;
	}

	.post-content ul {
		padding-left: 1.2rem;
		margin: 0 0 1rem;
	}
	.post-content li {
		margin-bottom: 0.5rem;
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

	.share-section {
		margin-top: 3rem;
		text-align: center;
	}
	.share-btn {
		display: inline-flex;
		align-items: center;
		padding: 0.7rem 1.5rem;
		border-radius: 6px;
		font-size: 0.95rem;
		font-weight: 700;
		text-decoration: none;
		background: #1a1a1a;
		color: #fff;
	}
	.share-btn:hover {
		background: #000;
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
		h1 { font-size: 2rem; }
		h2 { font-size: 1.4rem; }
		.thesis { font-size: 1.25rem; }
	}
</style>
