<script lang="ts">
	import { onMount } from 'svelte';
	import { buildShareIntent } from '$lib/shareIntent.js';
	let mounted = false;
	onMount(() => { mounted = true; });

	let copiedId = $state('');
	async function copyText(text: string, id: string) {
		await navigator.clipboard.writeText(text);
		copiedId = id;
		setTimeout(() => copiedId = '', 2000);
	}

	// Rich X share — pre-fill the crafted post, not just the URL.
	const shareText = `🏁 Just shipped: claude-faf-mcp v5.13.0 — The Heartbeat Edition

Persistent Project Context with Memory, looped for you.

Every Claude session opens grounded — carrying the intent the code can't.

npm install -g claude-faf-mcp@5.13.0`;
	const shareUrl = 'https://faf.one/blog/heartbeat-edition';
	const xIntent = buildShareIntent({ text: shareText, url: shareUrl });
</script>

<svelte:head>
	<title>The Heartbeat Edition - claude-faf-mcp v5.13.0 | FAF</title>
	<meta name="description" content="Persistent Project Context with Memory, looped for you. The SessionStart heartbeat now carries the intent the code can't — the goal and 6Ws only you can give or confirm." />
	<meta property="og:title" content="The Heartbeat Edition - claude-faf-mcp v5.13.0" />
	<meta property="og:description" content="Persistent Project Context with Memory, looped for you. Every Claude session opens grounded, carrying the intent the code can't show." />
	<meta property="og:type" content="article" />
	<meta property="og:image" content="https://faf.one/blog/heartbeat-edition-hero.png" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:image" content="https://faf.one/blog/heartbeat-edition-hero.png" />
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / The Heartbeat Edition
		</div>

		<h1>The Heartbeat Edition</h1>
		<p class="version-tag">claude-faf-mcp v5.13.0</p>
		<p class="subtitle">Every session opens grounded. Looped for you.</p>
		<div class="meta">
			<time datetime="2026-06-23">June 23, 2026</time>
			<span class="separator">&bull;</span>
			<span class="category release">Release</span>
		</div>
	</header>

	<div class="hero-image">
		<img src="/blog/heartbeat-edition-hero.png" alt="The Heartbeat Edition — claude-faf-mcp v5.13.0, the SessionStart heartbeat carrying the intent delta" />
	</div>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> Persistent Project Context with Memory, <em>looped for you</em>. The SessionStart heartbeat now carries the part the code can't show &mdash; the goal and 6Ws only you can <strong>give or confirm</strong> &mdash; so Claude opens every session grounded in what your project <em>means</em>, not just what it contains.
			</p>
		</section>

		<section>
			<h2>What's New</h2>

			<h3>The heartbeat now carries intent</h3>

			<p>The native SessionStart hook already opened every session with a one-line heartbeat. Now it carries the human part &mdash; the intent the code <em>can't</em>:</p>

			<div class="copy-box" onclick={() => copyText('faf: context ✪ 100% — fresh · +7 intent the code can\'t carry', 'beat')}>
				<code class="copy-code">faf: context &#10026; 100% &mdash; fresh &middot; +7 intent the code can't carry</code>
				<button class="copy-btn">{copiedId === 'beat' ? 'Copied!' : 'Copy'}</button>
			</div>

			<p>That <code>+N</code> counts the human intent in your <code>.faf</code> &mdash; the project <code>goal</code> plus the 6Ws (who, what, why, where, when, how). The code already tells Claude <em>how</em> your project is built; the <code>+N</code> tells it <em>what it's for</em> and <em>why</em> &mdash; the things only a human can give or confirm. It's a structural count, never a fabricated benchmark: if no intent slots are filled, the suffix simply isn't there.</p>

			<h3>Looped for you</h3>

			<p>The <code>/faf</code> loop drives your context to <code>&#127942;</code> 100% on its own &mdash; or stops <strong>honestly</strong> at the human wall. It never invents context to hit the score; it asks for what only you can give or confirm. <strong>Done-for-you to 100%, or an honest stop.</strong> A score that's earned, never faked.</p>

			<h3>For Claude Code teams</h3>

			<p><code>.faf</code> lives in the repo, so your context travels with the code &mdash; committed, versioned, done.</p>

			<ul>
				<li><strong>Commit <code>project.faf</code></strong> &mdash; every teammate's Claude starts with the same context.</li>
				<li><strong><code>git clone</code></strong> &mdash; a new dev's Claude is grounded before they write a line.</li>
				<li><strong>No drift</strong> &mdash; the score is deterministic, same on every machine and in CI. A teammate can't be <em>accidentally</em> less grounded than you.</li>
				<li><strong>Local and private</strong> &mdash; nothing leaves the machine. No accounts, no telemetry.</li>
			</ul>

			<h3>AAA on Glama &mdash; earned, not curated</h3>

			<p>claude-faf-mcp is rated <strong>AAA</strong> on the <a href="https://glama.ai/mcp/servers/Wolfe-Jam/claude-faf-mcp" target="_blank" rel="noopener">Glama MCP registry</a>. An AI graded the default tool surface for coherence &mdash; you can't buy it, you can't curate your way into it, you can't fake it. It's the same discipline as the rest of FAF: <strong>earned and falsifiable</strong>, not conferred.</p>

			<div class="badge-row">
				<a href="https://glama.ai/mcp/servers/Wolfe-Jam/claude-faf-mcp" target="_blank" rel="noopener">
					<img src="https://glama.ai/mcp/servers/Wolfe-Jam/claude-faf-mcp/badges/score.svg" alt="claude-faf-mcp Glama AAA score" />
				</a>
			</div>
		</section>

		<section>
			<h2>Try It</h2>

			<div class="copy-box" onclick={() => copyText('npm install -g claude-faf-mcp@5.13.0', 'install')}>
				<code class="copy-code">npm install -g claude-faf-mcp@5.13.0</code>
				<button class="copy-btn">{copiedId === 'install' ? 'Copied!' : 'Copy'}</button>
			</div>

			<p>Install the SessionStart hook once with <code>faf_setup</code> (preview first, your settings preserved). After that, every Claude Code session opens with the heartbeat &mdash; fresh context and the intent delta, no re-explaining. Zero-Config &mdash; one-click <code>.mcpb</code>, no terminal, no JSON.</p>

			<div class="cta-grid">
				<div class="cta-box">
					<h3>GitHub</h3>
					<p>Source and release notes.</p>
					<a href="https://github.com/Wolfe-Jam/claude-faf-mcp" class="cta-link">claude-faf-mcp</a>
				</div>
				<div class="cta-box">
					<h3>npm</h3>
					<p>Install the latest version.</p>
					<a href="https://www.npmjs.com/package/claude-faf-mcp" class="cta-link">claude-faf-mcp</a>
				</div>
			</div>
		</section>

		<section>
			<h2>The Numbers</h2>

			<ul>
				<li><strong>v5.13.0</strong> &mdash; Released June 22, 2026</li>
				<li><strong>AAA</strong> &mdash; Glama-graded, earned (not curated)</li>
				<li><strong>36 tools</strong> &mdash; 13 Core (advertised by default), the rest Extended via <code>FAF_TOOLS=all</code></li>
				<li><strong>572 tests</strong> &mdash; 0 fail, <code>&#127942;</code> 100% Trophy</li>
				<li><strong>100k+</strong> &mdash; downloads across the <code>.faf</code> ecosystem</li>
			</ul>
		</section>

		<section class="share-section">
			<a href={xIntent} target="_blank" rel="noopener" class="share-btn">Post on X</a>
		</section>

		<section class="footer-note">
			<p>Built with .faf &#9745; Looped for you. &#127950;&#65039;</p>
		</section>
	</article>
</div>

<style>
	:global(body) {
		background: var(--faf-page-bg);
	}

	.blog-post {
		max-width: 800px;
		margin: 0 auto;
		padding: 2rem 1rem;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
		line-height: 1.7;
		color: #333;
	}

	.post-header {
		margin-bottom: 2rem;
		border-bottom: 3px solid #000000;
		padding-bottom: 2rem;
	}

	.breadcrumb {
		font-size: 0.9rem;
		margin-bottom: 1rem;
		color: #666;
	}

	.breadcrumb a {
		color: #FF6B35;
		text-decoration: none;
	}

	.breadcrumb a:hover {
		text-decoration: underline;
	}

	h1 {
		font-size: 2.2rem;
		margin: 0.5rem 0;
		color: #000;
		line-height: 1.3;
	}

	.version-tag {
		display: inline-block;
		background: #FF6B35;
		color: white;
		padding: 0.25rem 0.75rem;
		border-radius: 4px;
		font-size: 0.9rem;
		font-weight: 600;
		margin: 0.5rem 0;
		font-family: 'SF Mono', 'Fira Code', Consolas, monospace;
	}

	.subtitle {
		font-size: 1.2rem;
		color: #666;
		margin: 0.5rem 0 1rem 0;
	}

	.meta {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		font-size: 0.9rem;
		color: #666;
	}

	.separator {
		color: #ccc;
	}

	.category {
		background: #FF6B35;
		color: white;
		padding: 0.25rem 0.75rem;
		border-radius: 4px;
		font-size: 0.85rem;
	}

	.category.release {
		background: #00B8B8;
	}

	.hero-image {
		margin: 0 -1rem 2rem -1rem;
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
		background: var(--faf-surface)5f0;
		border-radius: 8px;
		border-left: 4px solid #FF6B35;
	}

	h2 {
		font-size: 1.8rem;
		margin: 3rem 0 1.5rem 0;
		color: #000;
		border-bottom: 1px solid #eee;
		padding-bottom: 0.5rem;
	}

	h3 {
		font-size: 1.3rem;
		margin: 2rem 0 1rem 0;
		color: #333;
	}

	p {
		margin-bottom: 1.25rem;
	}

	ul, ol {
		margin: 1rem 0 1.5rem 1.5rem;
	}

	li {
		margin-bottom: 0.5rem;
	}

	code {
		font-family: 'SF Mono', 'Fira Code', Consolas, monospace;
		background: #f0f0f0;
		color: #1a1a1a;
		padding: 0.2rem 0.4rem;
		border-radius: 4px;
		font-size: 0.9em;
	}

	.badge-row {
		margin: 1.5rem 0;
	}

	.badge-row img {
		height: 20px;
		display: block;
	}

	.cta-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1.5rem;
		margin: 2rem 0;
	}

	.cta-box {
		background: #f8f8f8;
		border: 2px solid #FF6B35;
		padding: 1.5rem;
		border-radius: 8px;
		text-align: center;
	}

	.cta-box h3 {
		margin: 0 0 0.5rem 0;
		color: #FF6B35;
	}

	.cta-box p {
		margin: 0 0 1rem 0;
		font-size: 0.95rem;
		color: #666;
	}

	.cta-link {
		color: #FF6B35;
		text-decoration: none;
		font-weight: 600;
	}

	.cta-link:hover {
		text-decoration: underline;
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
		text-decoration: none;
		color: #fff;
	}

	.footer-note {
		margin-top: 4rem;
		padding-top: 2rem;
		border-top: 1px solid #eee;
		font-size: 0.95rem;
		color: #666;
		text-align: center;
	}

	a {
		color: #FF6B35;
	}

	a:hover {
		text-decoration: none;
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
	.copy-box:hover { border-color: #555; }
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
	.copy-btn {
		padding: 0.5rem 1rem;
		background: rgba(255, 255, 255, 0.1);
		border: 1px solid rgba(255, 255, 255, 0.25);
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
	.copy-btn:hover { background: rgba(255, 255, 255, 0.2); border-color: #fff; }
	.copy-btn:active { transform: scale(0.95); }

	@media (max-width: 768px) {
		h1 {
			font-size: 1.75rem;
		}

		.cta-grid {
			grid-template-columns: 1fr;
		}

		.blog-post {
			padding: 1rem;
		}
	}
</style>
