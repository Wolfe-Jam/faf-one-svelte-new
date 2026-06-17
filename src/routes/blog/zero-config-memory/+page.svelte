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

	const shareText = "Zero-Config Memory. Just push — your .fafm soul goes live and cross-vendor, readable by Grok, Claude, and Gemini. No claim page, no key to copy. claude-fafm-sdk v0.3.0.";
	const shareUrl = "https://faf.one/blog/zero-config-memory";
	const shareHref = buildShareIntent({ text: shareText, url: shareUrl });
</script>

<svelte:head>
	<title>Zero-Config Memory — claude-fafm-sdk v0.3.0 | FAF</title>
	<meta name="description" content="Just push. Your .fafm soul auto-provisions a namepoint and goes live — readable by any model, with no claim page and no key to copy. claude-fafm-sdk v0.3.0." />
	<meta property="og:title" content="Zero-Config Memory — claude-fafm-sdk v0.3.0" />
	<meta property="og:description" content="Just push — a namepoint auto-provisions and your .fafm soul goes live, cross-vendor. Structured memory round-trips intact. claude-fafm-sdk v0.3.0 on PyPI." />
	<meta property="og:type" content="article" />
	<meta property="og:url" content="https://faf.one/blog/zero-config-memory" />
	<meta property="og:image" content="https://faf.one/blog/zero-config-memory-hero.png" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:image" content="https://faf.one/blog/zero-config-memory-hero.png" />
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / Zero-Config Memory
		</div>
		<h1>Zero-Config Memory</h1>
		<p class="version-tag">claude-fafm-sdk v0.3.0</p>
		<p class="subtitle">Just push. Your soul goes live, cross-vendor — no setup.</p>
		<div class="meta">
			<time datetime="2026-05-23">May 23, 2026</time>
			<span class="separator">•</span>
			<span class="category">Release</span>
		</div>
	</header>

	<div class="hero-image">
		<img src="/blog/zero-config-memory-hero.png" alt="FAF family flash card: context (the orange DotFaf smiley, .faf) and memory (orange Nelly the elephant, .fafm), joined by a bi-sync symbol. faf is the smiley; fafm is Nelly." />
	</div>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> The <code>.fafm</code> launch gave your agent portable
				memory. v0.3.0 makes the hosted side effortless — just <code>push</code>. A namepoint
				auto-provisions, your soul goes live, and any model can read it. No claim page, no key
				to copy.
			</p>
		</section>

		<section>
			<h2>The next chapter</h2>
			<p>
				Last week <a href="/blog/permanent-memory-instant-recall">Permanent Memory. Instant
				Recall.</a> shipped <code>.fafm</code> — one open, IANA-registered format your agent's
				memory lives in. The local soul worked offline from day one. The missing piece was the
				hosted loop: getting that soul live and cross-vendor without a setup tax.
			</p>
			<p>That tax is gone.</p>
		</section>

		<section>
			<h2>Just push</h2>
			<p>Make a soul, then push it. On the first push, a namepoint provisions itself:</p>
			<div class="copy-box" onclick={() => copyText('uvx claude-fafm-sdk init', 'init')}>
				<code class="copy-code">uvx claude-fafm-sdk init</code>
				<button class="copy-btn">{copiedId === 'init' ? 'Copied!' : 'Copy'}</button>
			</div>
			<div class="copy-box" onclick={() => copyText('claude-fafm-sdk namepoint push', 'push')}>
				<code class="copy-code">claude-fafm-sdk namepoint push</code>
				<button class="copy-btn">{copiedId === 'push' ? 'Copied!' : 'Copy'}</button>
			</div>
			<p>
				That's it — no account screen, no token to paste. Your soul is live and readable by
				Grok, Claude, and Gemini over the same protocol. <code>pull</code> and <code>sync</code>
				keep local and hosted reconciled.
			</p>
			<div class="hero-diagram" role="img" aria-label="Zero-config flow: a local .fafm soul, one push, a live namepoint, readable by Claude, Grok and Gemini.">
				<div class="flow">
					<div class="node">
						<span class="node-label">Local soul</span>
						<code class="node-code">soul.fafm</code>
					</div>
					<span class="arrow">&rarr;</span>
					<div class="node node-action">
						<span class="node-label">One push</span>
						<code class="node-code">namepoint push</code>
					</div>
					<span class="arrow">&rarr;</span>
					<div class="node">
						<span class="node-label">Live, hosted</span>
						<code class="node-code">mcpaas.live/you</code>
					</div>
				</div>
				<div class="readers">
					<span class="readers-label">Readable by</span>
					<div class="chips">
						<span class="chip">Claude</span>
						<span class="chip">Grok</span>
						<span class="chip">Gemini</span>
					</div>
				</div>
			</div>
		</section>

		<section>
			<h2>Two doors: try it, or keep it</h2>
			<p>
				<strong>First touch is anonymous.</strong> That auto-provisioned namepoint is
				session-like — lose this machine and it's gone. That's deliberate: it's the exact
				feeling of statelessness that memory exists to fix.
			</p>
			<p>
				<strong>Keep it when you mean it.</strong> One command claims a named, recoverable
				namepoint:
			</p>
			<div class="copy-box" onclick={() => copyText('claude-fafm-sdk namepoint claim --email you@example.com', 'claim')}>
				<code class="copy-code">claude-fafm-sdk namepoint claim --email you@example.com</code>
				<button class="copy-btn">{copiedId === 'claim' ? 'Copied!' : 'Copy'}</button>
			</div>
		</section>

		<section>
			<h2>Structure survives the round-trip</h2>
			<p>
				The whole <code>.fafm</code> document lives at the namepoint — not loose notes. So a
				fact's id, type, and priority come back exactly as you wrote them. Push, pull from a
				fresh machine, and your structured memory is intact, ranked, and idempotent. Reads are
				public and keyless; writes use the key push hands you.
			</p>
		</section>

		<section>
			<h2>Receipts</h2>
			<ul>
				<li><strong>claude-fafm-sdk v0.3.0</strong> — on PyPI, MIT</li>
				<li><strong>Zero-config</strong> — first <code>push</code> auto-provisions a namepoint + key</li>
				<li><strong>Structured</strong> — the full <code>.fafm</code> document round-trips (ids, types, priorities preserved), verified live</li>
				<li><strong>Cross-vendor</strong> — built on <code>application/vnd.fafm+yaml</code> (IANA-registered)</li>
				<li><strong>memory.faf.one</strong> — live</li>
			</ul>
		</section>

		<section class="share-section">
			<a class="share-btn" href={shareHref} target="_blank" rel="noopener">Share on X</a>
		</section>

		<section class="footer-note">
			<img class="nelly-mark" src="/blog/nelly-gem.png" alt="Nelly, the orange elephant mark for .fafm" />
			<p><strong>FAF defines. MD instructs. AI codes.</strong></p>
			<p>Nelly Never Forgets. <code>.fafm 🐘</code> — now live in one push. 🏎️</p>
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
		border-bottom: 3px solid #FF6B35;
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
		background: #00B8B8;
		color: white;
		padding: 0.25rem 0.75rem;
		border-radius: 4px;
		font-size: 0.85rem;
	}

	.hero-image {
		margin: 0 0 2.5rem 0;
		border-radius: 12px;
		overflow: hidden;
	}
	.hero-image img {
		width: 100%;
		height: auto;
		display: block;
	}
	.nelly-mark {
		width: 72px;
		height: auto;
		display: block;
		margin: 0 auto 1rem auto;
	}

	/* Inline flow diagram — locked-dark panel (like the copy-boxes), flat colors,
	   explicit literals so it never inherits theme-aware text. */
	.hero-diagram {
		margin: 0 0 3rem 0;
		padding: 2rem 1.5rem;
		background: #1a1a1a;
		border: 1px solid #333;
		border-radius: 12px;
		text-align: center;
	}
	.flow {
		display: flex;
		align-items: stretch;
		justify-content: center;
		gap: 1rem;
		flex-wrap: wrap;
	}
	.node {
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 0.4rem;
		padding: 0.9rem 1.1rem;
		background: #0f0f0f;
		border: 1px solid #333;
		border-radius: 8px;
		min-width: 150px;
	}
	.node-action {
		border-color: #FF6B35;
	}
	.node-label {
		font-size: 0.72rem;
		text-transform: uppercase;
		letter-spacing: 0.08em;
		color: #e5e5e5;
		font-weight: 600;
	}
	.node-code {
		font-family: 'SF Mono', 'Fira Code', Consolas, monospace;
		font-size: 0.9rem;
		font-weight: 600;
		color: #00d4d4;
		background: transparent;
		padding: 0;
	}
	.node-action .node-code {
		color: #FF6B35;
	}
	.arrow {
		display: flex;
		align-items: center;
		color: #FF6B35;
		font-size: 1.4rem;
		font-weight: 700;
	}
	.readers {
		margin-top: 1.75rem;
	}
	.readers-label {
		display: block;
		font-size: 0.72rem;
		text-transform: uppercase;
		letter-spacing: 0.08em;
		color: #e5e5e5;
		font-weight: 600;
		margin-bottom: 0.75rem;
	}
	.chips {
		display: flex;
		justify-content: center;
		gap: 0.6rem;
		flex-wrap: wrap;
	}
	.chip {
		padding: 0.45rem 1rem;
		background: #0f0f0f;
		border: 1px solid #00d4d4;
		border-radius: 999px;
		color: #fff;
		font-size: 0.85rem;
		font-weight: 600;
	}

	.post-content {
		font-size: 1.1rem;
	}

	.lead {
		font-size: 1.2rem;
		line-height: 1.7;
		margin-bottom: 2rem;
		padding: 1.5rem;
		background: #fff5f0;
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
		border: 1px solid #fff;
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
		background: rgba(255, 107, 53, 0.2);
		border: 1px solid rgba(255, 107, 53, 0.4);
		color: #ff6b35;
		border-radius: 6px;
		font-weight: 600;
		font-size: 0.8rem;
		cursor: pointer;
		transition: all 0.2s;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		white-space: nowrap;
	}
	.copy-btn:hover { background: rgba(255, 107, 53, 0.3); border-color: #ff6b35; }
	.copy-btn:active { transform: scale(0.95); }

	@media (max-width: 768px) {
		h1 {
			font-size: 1.75rem;
		}

		.blog-post {
			padding: 1rem;
		}

		.flow {
			flex-direction: column;
		}
		.node {
			width: 100%;
		}
		.arrow {
			justify-content: center;
			transform: rotate(90deg);
		}
	}
</style>
