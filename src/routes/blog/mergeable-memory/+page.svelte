<script lang="ts">
	import { onMount } from 'svelte';
	import { buildShareIntent } from '$lib/shareIntent.js';
	let mounted = false;
	onMount(() => {
		mounted = true;
	});

	const shareText = `🏁 Just shipped: claude-fafm-sdk v1.1.1 — Mergeable Memory

Two offline souls merge and converge — state-based CvRDT, dual-impl verified.

Grow/update-only. Method, not endorsement.

pip install claude-fafm-sdk==1.1.1`;
	const shareUrl = 'https://faf.one/blog/mergeable-memory';
	const xIntent = buildShareIntent({ text: shareText, url: shareUrl });
</script>

<svelte:head>
	<title>Mergeable Memory - claude-fafm-sdk v1.1.1 | FAF</title>
	<meta
		name="description"
		content="claude-fafm-sdk 1.1.1 ships Soul-Packet merge: a state-based CvRDT for portable .fafm memory — dual-implementation verified, grow/update-only, stranger-runnable receipt."
	/>
	<meta property="og:title" content="Mergeable Memory - claude-fafm-sdk v1.1.1" />
	<meta
		property="og:description"
		content="Two offline souls merge and converge — state-based CvRDT, dual-impl verified."
	/>
	<meta property="og:type" content="article" />
	<meta property="og:image" content="https://faf.one/blog/mergeable-memory-hero.png" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:image" content="https://faf.one/blog/mergeable-memory-hero.png" />
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / Mergeable Memory
		</div>
		<h1>Mergeable Memory</h1>
		<p class="version-tag">claude-fafm-sdk v1.1.1 · Mergeable Memory · 🏆</p>
		<p class="subtitle">
			Two offline souls merge and converge — a state-based
			<strong>CvRDT</strong>, dual-implementation verified.
		</p>
		<div class="meta">
			<time datetime="2026-07-24">July 24, 2026</time>
			<span class="separator">•</span>
			<span class="category release">Release</span>
		</div>
	</header>

	<div class="hero-image">
		<img
			src="/blog/mergeable-memory-hero.png"
			alt="Mergeable Memory — claude-fafm-sdk v1.1.1. Two offline souls merge and converge — state-based CvRDT."
		/>
	</div>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> <code>claude-fafm-sdk</code> <strong>1.1.1</strong> ships
				<strong>Soul-Packet merge</strong> — a coordinator-free join so two offline
				<code>.fafm</code> souls converge. It’s a state-based <strong>CvRDT</strong> under a
				frozen encoding lock, checked by <strong>two independent implementations</strong>
				(N-version differential). Grow/update-only in v1 — we do <em>not</em> claim deletes
				converge.
			</p>
			<div class="terminal-block">
				<code># 30-second wow, zero install:</code>
				<code>uvx claude-fafm-sdk quickstart</code>
			</div>
		</section>

		<section>
			<h2>Why mergeable matters</h2>
			<p>
				Hosted pull is a rendezvous: one living copy, everyone reads it. Portable memory also needs a
				<strong>packet mode</strong> — write once, send a soul, merge on arrival, no coordinator.
			</p>
			<p>
				1.0 gave you offline etch / recall / INTEROP. <strong>1.1</strong> adds the lattice: a
				<code>merge_souls(a, b)</code> that is commutative, associative, and idempotent under logical
				equality. Sealed send (CRC packet) is next; the join has to be honest first.
			</p>
		</section>

		<section>
			<h2>What's New</h2>
			<ul>
				<li>
					<strong><code>merge_souls(a, b)</code></strong> — state-based CvRDT join: facts by id
					(field-level LWW + set-union tags/links), id-less G-Set, opaque maps, sessions G-Set,
					derived index rebuild.
				</li>
				<li>
					<strong><code>MERGE.md</code></strong> — frozen merge spec + property oracle (public
					receipt surface).
				</li>
				<li>
					<strong>WJTTC + N-version suites</strong> — C/A/I laws and a clean-room differential that
					must agree on every input.
				</li>
				<li>
					<strong>Empty-timestamp pin</strong> — <code>""</code> is ABSENT at the Fact model so
					hashes and order stay deterministic (seal-ready later).
				</li>
			</ul>
		</section>

		<section>
			<h2>N-version: why two implementations</h2>
			<p>
				A single green test suite can prove “this code converges.” It cannot prove the
				<em>spec</em> is free of order bugs that only show under another encoding. So we froze the
				oracle first, then ran two independent merges against it. The differential caught a real
				footgun (empty-string timestamps) before production.
			</p>
			<div class="diagram-image">
				<img
					src="/blog/mergeable-memory-nversion.png"
					alt="N-version differential: frozen oracle feeds two independent merge implementations that must converge to the same logical soul"
				/>
			</div>
			<p>
				Public framing stays method-first: <em>two independent implementations converge under a
				frozen encoding lock</em> — not a vendor endorsement story.
			</p>
		</section>

		<section>
			<h2>What kind of CRDT</h2>
			<p>
				Exact type: <strong>state-based CvRDT</strong> — a product of join-semilattices. Merge is the
				least-upper-bound over whole souls.
			</p>
			<div class="diagram-image">
				<img
					src="/blog/mergeable-memory-lattice.png"
					alt="Soul merge as a product of join-semilattices: LWW fact map, G-Set id-less facts, max-registers, opaque LWW maps, sessions G-Set, derived index"
				/>
			</div>
			<p>
				<strong>Honesty bounds:</strong> grow/update-only. Offline delete sync is out of the packet
				path until tombstones. Sealed-packet send / CRC is the next volume — not claimed in 1.1.1.
			</p>
		</section>

		<section>
			<h2>Try It</h2>
			<div class="terminal-block">
				<code># 30-second wow, zero install:</code>
				<code>uvx claude-fafm-sdk quickstart</code>
			</div>
			<div class="terminal-block">
				<code># try the merge, ephemeral (no install):</code>
				<code
					>uv run --with claude-fafm-sdk python -c "from claude_fafm_sdk import merge_souls, Soul; a=Soul('@demo'); b=Soul('@demo'); b.etch('ships mergeable memory', id='why'); print(merge_souls(a,b).facts[0].text)"</code
				>
			</div>
			<div class="terminal-block">
				<code># or classic:</code>
				<code>pip install claude-fafm-sdk==1.1.1</code>
			</div>
			<p>
				Full property suite (from source — tests are not inside the wheel):
			</p>
			<div class="terminal-block">
				<code>git clone https://github.com/Wolfe-Jam/claude-fafm-sdk && cd claude-fafm-sdk</code>
				<code>git checkout v1.1.1 && uv pip install -e ".[dev]"</code>
				<code
					>pytest tests/test_wjttc_merge_crdt.py tests/test_nversion_differential.py</code
				>
			</div>
			<p>
				A reader who re-runs that suite <strong>is</strong> the public receipt. Private review
				transcripts stay private.
			</p>
		</section>

		<section>
			<h2>The Numbers</h2>
			<ul>
				<li><strong>v1.1.1</strong> — production (1.1.0 was TestPyPI staging only)</li>
				<li><strong>14 + 19</strong> — WJTTC merge laws + N-version differential tests</li>
				<li><strong>CvRDT</strong> — dual-implementation verified under encoding lock</li>
				<li>
					<strong>PyPI:</strong>
					<a href="https://pypi.org/project/claude-fafm-sdk/1.1.1/" target="_blank" rel="noopener"
						>claude-fafm-sdk 1.1.1</a
					>
				</li>
			</ul>
		</section>

		<section class="share-section">
			<a href={xIntent} target="_blank" rel="noopener" class="share-btn">Post on X</a>
		</section>

		<section class="star-cta">
			<p>Portable memory that merges. Star the SDK if it earns it.</p>
			<a
				href="https://github.com/Wolfe-Jam/claude-fafm-sdk"
				target="_blank"
				rel="noopener"
				class="star-btn"
			>
				<svg
					viewBox="0 0 16 16"
					width="15"
					height="15"
					aria-hidden="true"
					fill="currentColor"
					><path
						d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
					/></svg
				>
				Star claude-fafm-sdk
			</a>
		</section>

		<section class="footer-note">
			<p>Built with .faf + .fafm ☑️ Memory that moves — and merges. 🏎️</p>
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
		font-size: 2.6rem;
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
		font-size: 1.25rem;
		font-weight: 500;
		margin: 0 0 1rem;
		color: #333;
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

	.hero-image,
	.diagram-image {
		margin: 0 0 2.5rem;
		border-radius: 12px;
		overflow: hidden;
		border: 1px solid #e5e5e5;
	}
	.hero-image img,
	.diagram-image img {
		width: 100%;
		height: auto;
		display: block;
	}
	.diagram-image {
		margin: 1.25rem 0 1.75rem;
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

	.lead {
		font-size: 1.15rem;
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
		font-size: 0.9rem;
		white-space: pre-wrap;
		word-break: break-word;
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
		padding: 0.65rem 1.25rem;
		border-radius: 6px;
		font-size: 0.95rem;
		font-weight: 700;
		text-decoration: none;
		background: #fff;
		color: #1a1a1a;
		border: 2px solid #1a1a1a;
	}
	.star-btn:hover {
		background: #f5f5f5;
	}

	.footer-note {
		margin-top: 2.5rem;
		padding-top: 1.5rem;
		border-top: 1px solid #e5e5e5;
		text-align: center;
		color: #333;
		font-weight: 600;
	}
</style>
