<!-- pubblog Release — spine copied from mcp-better-matching-client (GOLD). -->
<script lang="ts">
	import { buildShareIntent } from '$lib/shareIntent.js';
	import NpmPkg from '$lib/NpmPkg.svelte';

	const shareText = `🏁 Just shipped: faf-cli v7.12.0 — The Open Renderers Edition

Consumers compose instead of port. One block, every run.

Public renderers · injector · faf auto update chain
faf export --agents is idempotent again

bunx faf-cli@7.12.0 --version

Help guide what we build —
Comments · suggestions · shares welcome.`;
	const shareUrl = 'https://faf.one/blog/open-renderers-edition';
	const xIntent = buildShareIntent({ text: shareText, url: shareUrl });
</script>

<svelte:head>
	<title>The Open Renderers Edition - faf-cli v7.12.0 | FAF</title>
	<meta
		name="description"
		content="faf-cli opens its renderers, injector and faf auto update chain as public exports — consumers compose instead of port — and faf export --agents is idempotent again: one block, every run."
	/>
	<meta property="og:title" content="The Open Renderers Edition - faf-cli v7.12.0" />
	<meta
		property="og:description"
		content="faf-cli opens its renderers, injector and faf auto update chain as public exports — consumers compose instead of port."
	/>
	<meta property="og:type" content="article" />
	<meta property="og:url" content="https://faf.one/blog/open-renderers-edition" />
	<meta property="og:site_name" content=".faf Format Authority" />
	<meta property="og:image" content="https://faf.one/blog/open-renderers-edition-hero.png" />
	<meta
		property="og:image:secure_url"
		content="https://faf.one/blog/open-renderers-edition-hero.png"
	/>
	<meta property="og:image:type" content="image/png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta
		property="og:image:alt"
		content="The Open Renderers Edition — faf-cli v7.12.0 · consumers compose instead of port"
	/>
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@fafformat" />
	<meta name="twitter:creator" content="@wolfe_jam" />
	<meta name="twitter:title" content="The Open Renderers Edition - faf-cli v7.12.0" />
	<meta
		name="twitter:description"
		content="faf-cli opens its renderers, injector and faf auto update chain as public exports — consumers compose instead of port."
	/>
	<meta name="twitter:image" content="https://faf.one/blog/open-renderers-edition-hero.png" />
	<meta
		name="twitter:image:alt"
		content="The Open Renderers Edition — faf-cli v7.12.0 · consumers compose instead of port"
	/>
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / The Open Renderers Edition
		</div>
		<h1>The Open Renderers Edition</h1>
		<p class="version-tag">faf-cli v7.12.0</p>
		<p class="subtitle">Consumers compose instead of port — one block, every run.</p>
		<div class="meta">
			<time datetime="2026-09-09">September 9, 2026</time>
			<span class="separator">•</span>
			<span class="category release">Release</span>
		</div>
	</header>

	<div class="hero-image">
		<img
			src="/blog/open-renderers-edition-hero.png"
			alt="The Open Renderers Edition — faf-cli v7.12.0 · consumers compose instead of port"
			width="1200"
			height="630"
			loading="eager"
			decoding="async"
		/>
	</div>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> faf-cli opens its renderers, injector and
				<code>faf auto</code> update chain as public exports — consumers compose instead of port —
				and <code>faf export --agents</code> is idempotent again: one block, every run.
			</p>
			<div class="lead plain-english">
				<p class="plain-label">In Plain English</p>
				<p>
					<strong>Old state.</strong> MCP servers and editor extensions copied faf-cli's writers for
					<code>AGENTS.md</code>, <code>GEMINI.md</code>, <code>.cursorrules</code>,
					<code>CLAUDE.md</code>. Those copies drifted. And
					<code>faf export --agents</code> stacked its own block on every re-run.
				</p>
				<p>
					<strong>Fix.</strong> The same functions <code>faf export</code> and
					<code>faf auto</code> use are now public. The injector finds the managed block by whole
					marker lines at column 0 — not by substring.
				</p>
				<p>
					<strong>New state.</strong> Import from <code>faf-cli</code> and you write the same bytes
					the CLI writes. Re-export is one block, every run. A file the old injector stacked is
					repaired on the next export.
				</p>
			</div>
			<div class="terminal-block">
				<code>npm install -g <NpmPkg name="faf-cli" version="7.12.0" /></code>
				<code>faf export --agents</code>
			</div>
			<p class="muted-note">
				<strong>Try it without installing:</strong>
				<code>bunx <NpmPkg name="faf-cli" version="7.12.0" /> --version</code> (or
				<code>npx --yes <NpmPkg name="faf-cli" version="7.12.0" /></code>). Pin the version in
				scripts — <code>@latest</code> drifts.
			</p>
		</section>

		<section>
			<h2>What happened since The VS Code Edition</h2>
			<p>
				One blog, one arc — no post per patch. Last write-up was
				<a href="/blog/vs-code-edition">v7.11.0 The VS Code Edition</a>
				(<code>computeDrift()</code> as a library). This cut opens the rest of the write path.
			</p>
		</section>

		<section>
			<h2>What 7.12.0 is</h2>
			<p>
				<strong>Lesson:</strong> compose, don't port. The bytes
				<code>faf export</code> writes should come from one place.
			</p>
			<div class="terminal-block">
				<code
					>{`import { renderAgentsMd, enrichFromRepo, injectFafBlock, updateExistingFaf, writeFaf } from 'faf-cli';`}</code
				>
			</div>
			<ul>
				<li>
					<strong>Renderers are public</strong> —
					<code>renderAgentsMd</code> · <code>renderGeminiMd</code> ·
					<code>renderCursorrules</code> · <code>renderClaudeMd</code> ·
					<code>renderCopilotInstructions</code> and their <code>write*</code> pairs.
				</li>
				<li>
					<strong><code>enrichFromRepo(dir, data)</code></strong> — the repo-facts step
					<code>faf export --agents</code> runs first. Hand-authored values win; detection fills
					gaps.
				</li>
				<li>
					<strong><code>updateExistingFaf(dir, existing)</code></strong> — the exact chain
					<code>faf auto</code> runs on an existing <code>project.faf</code>.
					<code>faf auto</code> itself now calls it.
				</li>
				<li>
					<strong>One injector</strong> — <code>injectFafBlock</code> /
					<code>findFafBlock</code> match markers as whole lines at column 0. Fenced examples are
					skipped. An unbalanced fence inside the block cannot hide the end marker. CRLF and BOM
					survive. A block that lost its end marker is prefixed, never overwritten.
				</li>
			</ul>
		</section>

		<section>
			<h2>faf export --agents is idempotent again</h2>
			<p>
				From 7.1.4 through 7.11.0 the rendered blockquote quoted the marker tokens in prose, and
				the injector located the block by substring. Every re-run cut the old block at the quote
				and appended its stale tail — AGENTS.md grew ~49 lines per export. Both ends are fixed. A
				file already stacked is repaired on its next export.
			</p>
		</section>

		<section>
			<h2>Try it</h2>
			<p><strong>Install</strong> (global):</p>
			<div class="terminal-block">
				<code>npm install -g <NpmPkg name="faf-cli" version="7.12.0" /></code>
				<code># short name, same bits: npm install -g <NpmPkg name="faf" version="7.12.0" /></code>
			</div>
			<p><strong>Try</strong> (no install):</p>
			<div class="terminal-block">
				<code>bunx <NpmPkg name="faf-cli" version="7.12.0" /> --version</code>
				<code>bunx <NpmPkg name="faf-cli" version="7.12.0" /> export --agents</code>
			</div>
			<p class="muted-note">
				More:
				<a href="/blog/vs-code-edition">The VS Code Edition (v7.11.0)</a>
				·
				<a
					href="https://github.com/Wolfe-Jam/faf-cli/releases/tag/v7.12.0"
					target="_blank"
					rel="noopener">v7.12.0 release</a
				>
				·
				<a href="https://github.com/Wolfe-Jam/faf-cli" target="_blank" rel="noopener">repo</a>.
			</p>
		</section>

		<section>
			<h2>Technical details</h2>
			<ul>
				<li><strong>Version:</strong> 7.12.0 (September 9, 2026)</li>
				<li>
					<strong>New exports:</strong>
					<code>renderAgentsMd</code> / <code>writeAgentsMd</code> ·
					<code>renderGeminiMd</code> · <code>renderCursorrules</code> ·
					<code>renderCopilotInstructions</code> · <code>renderClaudeMd</code> /
					<code>readClaudeMd</code> / <code>parseClaudeMd</code> / <code>fafMetaTag</code> ·
					<code>injectFafBlock</code> / <code>findFafBlock</code> / <code>FAF_START</code> /
					<code>FAF_END</code> · <code>enrichFromRepo</code> ·
					<code>updateExistingFaf</code> / <code>fillEmpties</code> ·
					<code>serializeFaf</code> / <code>writeFaf</code>
				</li>
				<li>
					<strong>Packages:</strong> dual-published — <code>faf-cli</code> and <code>faf</code>, same
					version
				</li>
				<li><strong>Tests:</strong> 1417/1417</li>
				<li><strong>Score:</strong> ✪ Trophy 100%</li>
			</ul>
		</section>

		<section class="feedback-invite">
			<h2>Feedback welcome</h2>
			<p>Questions, nits, suggestions — guide the next version. Tell us what you want to see.</p>
			<div class="feedback-actions">
				<a href={xIntent} target="_blank" rel="noopener" class="feedback-btn">Post on X</a>
				<a
					href="https://github.com/Wolfe-Jam/faf-cli/issues/new"
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
