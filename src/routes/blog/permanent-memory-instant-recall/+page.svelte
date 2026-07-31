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

	const shareText = "Permanent Memory. Instant Recall. .fafm — portable, cross-vendor AI memory in one IANA-registered format — is live. Two profiles: voice (grok-faf-voice) + knowledge (claude-fafm-sdk).";
	const shareUrl = "https://faf.one/blog/permanent-memory-instant-recall";
	const shareHref = buildShareIntent({ text: shareText, url: shareUrl });
</script>

<svelte:head>
	<title>Permanent Memory. Instant Recall. — .fafm is live | FAF</title>
	<meta name="description" content="Portable, cross-vendor AI memory in one IANA-registered format. Two profiles — voice (grok-faf-voice) and knowledge (claude-fafm-sdk) — both live on PyPI. memory.faf.one is up." />
	<meta property="og:title" content="Permanent Memory. Instant Recall. — .fafm is live" />
	<meta property="og:description" content="Portable, cross-vendor AI memory in .fafm. Two profiles, one IANA-registered format. claude-fafm-sdk + grok-faf-voice on PyPI; memory.faf.one live." />
	<meta property="og:type" content="article" />
	<meta property="og:url" content="https://faf.one/blog/permanent-memory-instant-recall" />
	<meta property="og:image" content="https://memory.faf.one/nelly-og.png" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:image" content="https://memory.faf.one/nelly-og.png" />
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / Permanent Memory. Instant Recall.
		</div>
		<h1>Permanent Memory. Instant Recall.</h1>
		<p class="version-tag">claude-fafm-sdk v0.1.1 · grok-faf-voice v0.3.2</p>
		<p class="subtitle"><code>.fafm</code> — portable, cross-vendor AI memory — is live.</p>
		<div class="meta">
			<time datetime="2026-05-22">May 22, 2026</time>
			<span class="separator">•</span>
			<span class="category">Launch</span>
		</div>
	</header>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> Every AI session starts from zero, and what memory exists
				is locked to one vendor. <code>.fafm</code> fixes both — one open, IANA-registered
				format your agent's memory lives in, readable by Grok, Claude, and Gemini alike.
				Two reference implementations ship today.
			</p>
		</section>

		<section>
			<h2>Two profiles, one format</h2>
			<p>
				<code>.fafm</code> (<code>application/vnd.fafm+yaml</code>) is one format with two
				profiles — and now two shipped, open reference implementations that point at each other:
			</p>
			<ul>
				<li><strong>Voice — the Voice Memory Layer (VML).</strong> The original profile:
					durable memory for voice agents, so the assistant remembers you across calls.
					<a href="https://pypi.org/project/grok-faf-voice/">grok-faf-voice</a> v0.3.2.</li>
				<li><strong>Knowledge.</strong> Typed, cross-linked memory for agent runtimes like
					Claude Code. <a href="https://pypi.org/project/claude-fafm-sdk/">claude-fafm-sdk</a> v0.1.1.</li>
			</ul>
			<p>
				One core parser, one <code>etch</code> / <code>recall</code> / <code>forget</code>
				surface. No fork.
			</p>
		</section>

		<section>
			<h2>Try it — 30 seconds, offline</h2>
			<p>The local soul works with no account and no network:</p>
			<div class="copy-box" onclick={() => copyText('uvx claude-fafm-sdk init', 'init')}>
				<code class="copy-code">uvx claude-fafm-sdk init</code>
				<button class="copy-btn">{copiedId === 'init' ? 'Copied!' : 'Copy'}</button>
			</div>
			<p>Voice side, same shape:</p>
			<div class="copy-box" onclick={() => copyText('pip install grok-faf-voice', 'voice')}>
				<code class="copy-code">pip install grok-faf-voice</code>
				<button class="copy-btn">{copiedId === 'voice' ? 'Copied!' : 'Copy'}</button>
			</div>
			<p>
				Your soul is a plain <code>.fafm</code> file you can read, diff, and commit to git.
			</p>
		</section>

		<section>
			<h2>memory.faf.one</h2>
			<p>
				When you want it hosted, <a href="https://memory.faf.one">memory.faf.one</a> is the
				front door — one free namepoint where your soul lives, with full-intel recall at
				personal scale. Pay only when you scale, never to unlock the magic.
			</p>
		</section>

		<section>
			<h2>Cross-vendor, verified</h2>
			<p>
				This isn't a claim — it's a receipt. The same open client pulled live souls authored
				for <strong>Grok, Claude, and Gemini</strong> over the same protocol. One format,
				never trapped in one model's walled garden.
			</p>
		</section>

		<section>
			<h2>The paper</h2>
			<p>
				The format is documented in the companion white paper,
				<em>Permanent Memory and Instant Recall: The .fafm Standard for Multi-Profile AI
				Agent Memory</em>, published on Zenodo:
			</p>
			<ul>
				<li>DOI: <a href="https://doi.org/10.5281/zenodo.20348942">10.5281/zenodo.20348942</a></li>
			</ul>
		</section>

		<section>
			<h2>Receipts</h2>
			<ul>
				<li><strong>IANA-registered</strong> — <code>application/vnd.fafm+yaml</code> (May 13, 2026)</li>
				<li><strong>claude-fafm-sdk v0.1.1</strong> + <strong>grok-faf-voice v0.3.2</strong> — both on PyPI, MIT</li>
				<li><strong>Cross-linked</strong> — each PyPI page + README points at the other</li>
				<li><strong>memory.faf.one</strong> — live (landing + MCP backend)</li>
				<li><strong>Zenodo paper</strong> — DOI 10.5281/zenodo.20348942</li>
			</ul>
		</section>

		<section class="share-section">
			<a class="share-btn" href={shareHref} target="_blank" rel="noopener">Share on X</a>
		</section>

		<section class="footer-note">
			<p><strong>FAF defines. MD instructs. AI codes.</strong></p>
			<p>Nelly Never Forgets. <code>.fafm 🐘</code> — persistent across sessions, devices, models. 🏎️</p>
		</section>
	</article>
</div>

<style>
	:global(body) {
		background: var(--faf-cream);
		color: var(--faf-dark);
	}

	.blog-post {
		max-width: 800px;
		margin: 0 auto;
		padding: 2rem 1rem;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
		line-height: 1.7;
		color: var(--faf-dark);
	}

	.post-header {
		margin-bottom: 3rem;
		border-bottom: 3px solid #000000;
		padding-bottom: 2rem;
	}

	.breadcrumb {
		font-size: 0.9rem;
		margin-bottom: 1rem;
		color: var(--faf-dark);
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
		color: var(--faf-dark);
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
		color: var(--faf-dark);
		margin: 0.5rem 0 1rem 0;
	}

	.meta {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		font-size: 0.9rem;
		color: var(--faf-dark);
	}

	.separator {
		color: var(--faf-light-gray);
	}

	.category {
		background: #FF6B35;
		color: white;
		padding: 0.25rem 0.75rem;
		border-radius: 4px;
		font-size: 0.85rem;
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
		color: #1a1a1a; /* bg is locked light (peach); text MUST also be locked dark, otherwise inherits var(--faf-dark) which flips to light text on light bg in dark theme */
		border-radius: 8px;
		border-left: 4px solid #FF6B35;
	}

	h2 {
		font-size: 1.8rem;
		margin: 3rem 0 1.5rem 0;
		color: var(--faf-dark);
		border-bottom: 1px solid var(--faf-light-gray);
		padding-bottom: 0.5rem;
	}

	p {
		margin-bottom: 1.25rem;
	}

	ul {
		margin: 1rem 0 1.5rem 1.5rem;
	}

	li {
		margin-bottom: 0.5rem;
	}

	code {
		font-family: 'SF Mono', 'Fira Code', Consolas, monospace;
		background: var(--faf-gray-light);
		color: var(--faf-dark); /* explicit — don't inherit .lead's locked #1a1a1a (which goes dark-on-dark inside a theme-aware code bg) */
		padding: 0.2rem 0.4rem;
		border-radius: 4px;
		font-size: 0.9em;
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
		color: var(--faf-dark);
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
		color: #00d4d4;
		background: transparent;
		padding: 0;
		font-size: 0.95rem;
		font-weight: 600;
		border-radius: 0;
	}
	.copy-btn {
		padding: 0.5rem 1rem;
		background: var(--faf-orange);
		border: 1.5px solid var(--faf-border-strong);
		color: var(--faf-on-accent);
		border-radius: 6px;
		font-weight: 600;
		font-size: 0.8rem;
		cursor: pointer;
		transition: all 0.2s;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		white-space: nowrap;
	}
	.copy-btn:hover { background: var(--faf-orange); color: var(--faf-on-accent); border-color: #ff6b35; }
	.copy-btn:active { transform: scale(0.95); }

	@media (max-width: 768px) {
		h1 {
			font-size: 1.75rem;
		}

		.blog-post {
			padding: 1rem;
		}
	}
</style>
