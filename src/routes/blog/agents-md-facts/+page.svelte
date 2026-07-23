<script lang="ts">
	import { buildShareIntent } from '$lib/shareIntent.js';
	let copiedId = $state('');

	async function copyText(text: string, id: string) {
		await navigator.clipboard.writeText(text);
		copiedId = id;
		setTimeout(() => (copiedId = ''), 2000);
	}

	// Rich X share — software release for agents-md-facts (BETTER CLI). Repo + npx first.
	const shareText = `Just shipped: agents-md-facts v0.1.0

Author a minimal AGENTS.md from your repo's facts. Never guessed.

4 commands. MIT. No FAF.

npx agents-md-facts`;
	const shareUrl = 'https://faf.one/blog/agents-md-facts';
	const xIntent = buildShareIntent({ text: shareText, url: shareUrl });
</script>

<svelte:head>
	<title>agents-md-facts v0.1.0 — Author AGENTS.md from repo facts</title>
	<meta
		name="description"
		content="Software release: agents-md-facts v0.1.0 authors a minimal AGENTS.md from your repo's real commands and paths. Never guessed. npx agents-md-facts."
	/>
	<meta property="og:title" content="agents-md-facts v0.1.0 — Author AGENTS.md from repo facts" />
	<meta
		property="og:description"
		content="Minimal AGENTS.md from repo facts. Never guessed. Four commands. MIT."
	/>
	<meta property="og:type" content="article" />
	<meta property="og:image" content="https://faf.one/blog/agents-md-facts-hero.png" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:image" content="https://faf.one/blog/agents-md-facts-hero.png" />
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / agents-md-facts
		</div>

		<p class="kicker">Software release</p>
		<h1>agents-md-facts</h1>
		<p class="version-tag">v0.1.0 · MIT · CLI</p>
		<p class="subtitle">Author a minimal AGENTS.md from your repo's facts. Never guessed.</p>
		<div class="meta">
			<time datetime="2026-07-23">July 23, 2026</time>
			<span class="separator">•</span>
			<span class="category launch">Launch</span>
		</div>
	</header>

	<div class="hero-image">
		<img
			src="/blog/agents-md-facts-hero.png"
			alt="agents-md-facts v0.1.0 — FAFA agent mark. Author a minimal AGENTS.md from repo facts. Never guessed."
		/>
	</div>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> <code>agents-md-facts</code> is a small CLI that
				<strong>authors</strong> a minimal
				<a href="https://agents.md" target="_blank" rel="noopener">AGENTS.md</a> from what your tree
				already declares — real build/test commands, entry points, toolchain conventions. Nothing
				invented. Nothing padded.
			</p>
		</section>

		<section>
			<h2>Why it exists</h2>
			<p>Hand-written agent files <strong>rot</strong>. LLM-written ones often <strong>bloat</strong> — and can reduce task success when the model pads them with plausible rules the agent then over-obeys.</p>
			<p>This tool does neither. It reads the repo and writes only facts (or short curated defaults that resolve real ambiguity). Re-run when the code moves.</p>
		</section>

		<section>
			<h2>Four commands</h2>
			<div class="copy-box" onclick={() => copyText('npx agents-md-facts', 'run')}>
				<code class="copy-code">npx agents-md-facts</code>
				<button class="copy-btn" type="button">{copiedId === 'run' ? 'Copied!' : 'Copy'}</button>
			</div>
			<ul>
				<li><strong>(default)</strong> — author / refresh <code>AGENTS.md</code> (non-destructive)</li>
				<li><code>--check</code> — exit 1 if missing or stale (CI / pre-commit)</li>
				<li><code>--dry-run</code> — print the plan; write nothing</li>
				<li><code>--stdout</code> — emit the managed block to stdout</li>
			</ul>
			<p>
				Only the block between
				<code>&lt;!-- agents:from-facts:start --&gt;</code> …
				<code>&lt;!-- agents:from-facts:end --&gt;</code>
				is managed. Everything you write outside those markers is preserved.
			</p>
		</section>

		<section>
			<h2>Keep it true in CI</h2>
			<p>Fail the build when the file drifts from the repo:</p>
			<div class="copy-box" onclick={() => copyText('npx agents-md-facts --check', 'check')}>
				<code class="copy-code">npx agents-md-facts --check</code>
				<button class="copy-btn" type="button">{copiedId === 'check' ? 'Copied!' : 'Copy'}</button>
			</div>
			<p>
				Or pin the composite Action:
				<code>uses: Wolfe-Jam/agents-md-facts@v0.1.0</code>
			</p>
		</section>

		<section>
			<h2>Try it</h2>
			<p>No global install required:</p>
			<div class="copy-box" onclick={() => copyText('npx agents-md-facts', 'try')}>
				<code class="copy-code">npx agents-md-facts</code>
				<button class="copy-btn" type="button">{copiedId === 'try' ? 'Copied!' : 'Copy'}</button>
			</div>
			<p>
				<strong>Source &amp; stars:</strong>
				<a href="https://github.com/Wolfe-Jam/agents-md-facts" target="_blank" rel="noopener"
					>github.com/Wolfe-Jam/agents-md-facts</a
				>
				·
				<strong>npm:</strong>
				<a href="https://www.npmjs.com/package/agents-md-facts" target="_blank" rel="noopener"
					>agents-md-facts@0.1.0</a
				>
			</p>
		</section>

		<section>
			<h2>The numbers</h2>
			<ul>
				<li><strong>v0.1.0</strong> — first public release (2026-07-19)</li>
				<li><strong>4 commands</strong> — default · <code>--check</code> · <code>--dry-run</code> · <code>--stdout</code></li>
				<li><strong>MIT</strong> · zero runtime dependencies · Node ≥ 18</li>
				<li><strong>Examples</strong> — Node/TS · Python · Rust · Go</li>
			</ul>
		</section>

		<section class="share-section">
			<a href={xIntent} target="_blank" rel="noopener" class="share-btn">Post on X</a>
		</section>

		<section class="footer-note">
			<p>
				Built for the open <a href="https://agents.md" target="_blank" rel="noopener">AGENTS.md</a> standard.
				<br />
				Add persistent project context:
				<a href="/agents">faf.one/agents</a>
			</p>
		</section>
	</article>
</div>

<style>
	:global(body) {
		background: var(--faf-page-bg, #fefcf8);
	}

	/* Bright #00D4D4 = fills / bars / pills.
	   Link/kicker text: mid cyan #00a8a8 (brighter than site --faf-cyan-text #006e6e on cream). */
	.blog-post {
		--agents-cyan-text: #00a8a8;
		max-width: 800px;
		margin: 0 auto;
		padding: 2rem 1rem;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
		line-height: 1.7;
		color: #1a1a1a;
	}

	.post-header {
		margin-bottom: 2rem;
		border-bottom: 3px solid #00d4d4;
		padding-bottom: 2rem;
	}

	.breadcrumb {
		font-size: 0.9rem;
		margin-bottom: 1rem;
		color: #1a1a1a;
	}

	.breadcrumb a {
		color: var(--agents-cyan-text);
		text-decoration: none;
	}
	.breadcrumb a:hover {
		text-decoration: underline;
	}

	.kicker {
		font-family: 'SF Mono', 'Fira Code', Consolas, monospace;
		font-size: 0.9rem;
		font-weight: 700;
		letter-spacing: 0.02em;
		color: var(--agents-cyan-text);
		margin: 0 0 0.25rem 0;
		text-transform: uppercase;
	}

	h1 {
		font-size: 2.4rem;
		margin: 0.25rem 0;
		color: #000;
		line-height: 1.2;
		font-family: 'SF Mono', 'Fira Code', Consolas, monospace;
	}

	.version-tag {
		display: inline-block;
		background: #00d4d4;
		color: #0a0a0a;
		padding: 0.25rem 0.75rem;
		border-radius: 4px;
		font-size: 0.9rem;
		font-weight: 700;
		margin: 0.75rem 0 0.5rem 0;
		font-family: 'SF Mono', 'Fira Code', Consolas, monospace;
	}

	.subtitle {
		font-size: 1.2rem;
		color: #1a1a1a;
		margin: 0.5rem 0 1rem 0;
	}

	.meta {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		font-size: 0.9rem;
		color: #1a1a1a;
	}

	.separator {
		color: var(--agents-cyan-text);
	}

	.category {
		color: white;
		padding: 0.25rem 0.75rem;
		border-radius: 4px;
		font-size: 0.85rem;
		font-weight: 600;
	}

	.category.launch {
		background: #00d4d4;
		color: #0a0a0a;
	}

	.hero-image {
		margin: 0 0 2rem 0;
		border-radius: 12px;
		overflow: hidden;
	}

	.hero-image img {
		width: 100%;
		height: auto;
		display: block;
	}

	.post-content {
		font-size: 1.1rem;
	}

	.lead {
		font-size: 1.2rem;
		line-height: 1.7;
		margin-bottom: 2rem;
		padding: 1.5rem;
		background: color-mix(in srgb, var(--faf-surface, #f5f5f0) 90%, transparent);
		border-radius: 8px;
		border-left: 4px solid #00d4d4; /* bright accent bar */
	}

	h2 {
		font-size: 1.8rem;
		margin: 3rem 0 1.25rem 0;
		color: #000;
		border-bottom: 1px solid #e5e5e5;
		padding-bottom: 0.5rem;
	}

	p {
		margin-bottom: 1.25rem;
	}
	strong {
		color: #000;
	}

	ul {
		margin: 1rem 0 1.5rem 1.5rem;
	}
	li {
		margin-bottom: 0.6rem;
	}

	code {
		font-family: 'SF Mono', 'Fira Code', Consolas, monospace;
		background: #f0f0f0;
		color: #1a1a1a;
		padding: 0.2rem 0.4rem;
		border-radius: 4px;
		font-size: 0.9em;
	}

	.copy-box {
		display: flex;
		align-items: center;
		gap: 1rem;
		padding: 1rem 1.5rem;
		background: #1a1a1a;
		border: 1px solid #333;
		border-radius: 8px;
		margin: 1rem 0;
		cursor: pointer;
		transition: border-color 0.2s;
	}

	.copy-box:hover {
		border-color: #555;
	}

	.copy-code {
		flex: 1;
		font-family: 'Monaco', 'Courier New', monospace;
		color: #00ff88;
		background: transparent;
		padding: 0;
		font-size: 0.95rem;
		font-weight: 600;
		border-radius: 0;
	}

	.copy-code::before {
		content: '$ ';
		color: #888;
	}

	.copy-btn {
		padding: 0.5rem 1rem;
		background: #000;
		border: 1px solid #333;
		color: #fff;
		border-radius: 6px;
		font-weight: 600;
		font-size: 0.8rem;
		cursor: pointer;
		transition: all 0.2s;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		white-space: nowrap;
	}

	.copy-btn:hover {
		border-color: #555;
	}
	.copy-btn:active {
		transform: scale(0.95);
	}

	.share-section {
		margin-top: 3rem;
		text-align: center;
	}

	.share-btn {
		display: inline-flex;
		align-items: center;
		padding: 0.6rem 1.25rem;
		border-radius: 6px;
		font-size: 0.9rem;
		font-weight: 600;
		text-decoration: none;
		background: #000;
		color: #fff;
		transition: opacity 0.2s;
	}

	.share-btn:hover {
		opacity: 0.85;
		color: #fff;
	}

	.footer-note {
		margin-top: 4rem;
		padding-top: 2rem;
		border-top: 1px solid #e5e5e5;
		font-size: 0.95rem;
		color: #1a1a1a;
		text-align: center;
	}

	a {
		color: var(--agents-cyan-text);
	}
	a:hover {
		text-decoration: none;
	}

	@media (max-width: 768px) {
		h1 {
			font-size: 1.9rem;
		}
		.blog-post {
			padding: 1rem;
		}
	}
</style>
