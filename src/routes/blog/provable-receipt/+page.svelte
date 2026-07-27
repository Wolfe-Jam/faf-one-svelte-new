<script lang="ts">
	import { onMount } from 'svelte';
	import { buildShareIntent } from '$lib/shareIntent.js';
	let mounted = false;
	onMount(() => {
		mounted = true;
	});

	const shareText = `🏁 Just shipped: claude-fafm-sdk v1.3.0 — Provable Receipt

1.2 made memory sendable; 1.3 makes the proof one command.

uvx claude-fafm-sdk receipt   → TIER-2 RECEIPT GREEN

Don't take our word. Run it.`;
	const shareUrl = 'https://faf.one/blog/provable-receipt';
	const xIntent = buildShareIntent({ text: shareText, url: shareUrl });
</script>

<svelte:head>
	<title>Provable Receipt - claude-fafm-sdk v1.3.0 | FAF</title>
	<meta
		name="description"
		content="claude-fafm-sdk 1.3.0 ships Provable Receipt: the 60-second Tier-2 proof — etch → seal → send → merge → recall + falsifiers — as one command, uvx claude-fafm-sdk receipt. No clone."
	/>
	<meta property="og:title" content="Provable Receipt - claude-fafm-sdk v1.3.0" />
	<meta
		property="og:description"
		content="1.2 made memory sendable; 1.3 makes the proof one command — uvx claude-fafm-sdk receipt."
	/>
	<meta property="og:type" content="article" />
	<meta property="og:image" content="https://faf.one/blog-assets/provable-receipt-hero.png?v=2" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:image" content="https://faf.one/blog-assets/provable-receipt-hero.png?v=2" />
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / Provable Receipt
		</div>
		<h1>Provable Receipt</h1>
		<p class="version-tag">claude-fafm-sdk v1.3.0 · Provable Receipt · 🏆</p>
		<div class="meta">
			<time datetime="2026-07-26">July 26, 2026</time>
			<span class="separator">•</span>
			<span class="category release">Release</span>
		</div>
	</header>

	<div class="hero-image">
		<img
			src="https://faf.one/blog-assets/provable-receipt-hero.png?v=2"
			alt="Provable Receipt — claude-fafm-sdk v1.3.0 hero card"
			width="1200"
			height="630"
			loading="eager"
			decoding="async"
		/>
	</div>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> <code>claude-fafm-sdk</code> <strong>1.3.0</strong> ships
				<strong>Provable Receipt</strong> — the 60-second proof that memory can seal, send, and
				merge now runs as <strong>one command from the published package</strong>:
			</p>
			<div class="terminal-block">
				<code>uvx claude-fafm-sdk receipt</code>
				<code># → TIER-2 RECEIPT GREEN (exit 0)</code>
			</div>
			<p>
				No <code>git clone</code>, no dev setup. It runs the whole arc — etch → seal → send a file
				→ merge → recall — then <strong>tries to break it</strong> (bit-flip the packet, merge it
				twice, cross-merge two replicas) and shows you the falsifiers hold. The merge underneath is
				unchanged: the same dual-implementation-verified CvRDT from 1.1.
			</p>
		</section>

		<section>
			<h2>A proof you can't run isn't a proof</h2>
			<p>
				1.2 shipped <strong>Sendable Memory</strong> with a receipt — a falsifiable, 60-second demo
				that a soul can be sealed into a packet, sent as a file, and merged on arrival. Good. But
				running that receipt meant cloning the repo and installing test dependencies.
			</p>
			<p>
				That's a gap. If the whole idea is <em>don't take our word, check it yourself</em>, then
				checking it yourself has to be trivial — otherwise the receipt is a receipt in name only. A
				proof behind a setup wall is a weaker claim than it looks.
			</p>
			<p>
				So 1.3 closes the wall. The receipt now lives <strong>inside the package</strong>, one
				command away:
			</p>
			<div class="terminal-block">
				<code>uvx claude-fafm-sdk receipt</code>
			</div>
			<p>A reader who runs that line <strong>is</strong> the proof. That's the whole point.</p>
		</section>

		<section>
			<h2>What's New</h2>
			<ul>
				<li>
					<strong><code>claude-fafm-sdk receipt</code></strong> — runs the full Tier-2 arc
					in-process (etch → seal → send a file → merge → recall) and the three falsifiers below.
					Exit 0 + a GREEN banner on pass; non-zero if any check fails. <code>--json</code> for a
					machine-readable PASS.
				</li>
				<li>
					<strong><code>claude-fafm-sdk open</code></strong> — open a <code>.fafmp</code> packet →
					write <code>.fafm</code> or print a summary. Fail-closed: a bad packet exits non-zero,
					never a partial write.
				</li>
			</ul>
		</section>

		<section>
			<h2>The 60 seconds, and the three falsifiers</h2>
			<p>
				The happy path is one line; the <em>credibility</em> is that it also tries to break itself:
			</p>
			<div class="terminal-block">
				<code>uvx claude-fafm-sdk receipt</code>
			</div>
			<div class="terminal-block">
				<code>=== TIER-2 RECEIPT GREEN ===</code>
				<code>  etch → seal → send → merge → recall      OK</code>
				<code>  CRC-reject — bit-flip rejected           OK</code>
				<code>  double-merge idempotent                  OK</code>
				<code>  both-ways converge                       OK</code>
			</div>
			<ul>
				<li>
					<strong>CRC-reject</strong> — flip one byte of a sealed packet → it's rejected, the local
					soul is untouched.
				</li>
				<li>
					<strong>Double-merge idempotent</strong> — apply the same packet twice → no duplicate
					facts.
				</li>
				<li>
					<strong>Both-ways converge</strong> — seal two replicas, cross-merge them → the same
					logical soul either direction.
				</li>
			</ul>
			<div class="diagram-image">
				<img
					src="https://faf.one/blog-assets/provable-receipt-flow.png?v=2"
					alt="One command, three falsifiers: etch → seal → send → merge → recall"
					width="1200"
					height="480"
					loading="lazy"
					decoding="async"
				/>
			</div>
			<p>Green, or it doesn't ship. <code>--json</code> gives you the same result machine-readable, for CI or a paper.</p>
		</section>

		<section>
			<h2>Honesty bounds</h2>
			<ul>
				<li>
					<strong>The receipt exercises transport + ingest</strong> — sealing, sending, and the
					CvRDT merge on arrival. It does <strong>not</strong> re-prove the dual-implementation
					merge itself; that's the 1.1 story and it still stands.
				</li>
				<li>
					<strong>CRC = integrity, not authentication</strong> — a packet proves it wasn't
					corrupted, not <em>who</em> sent it. No signing, no encryption.
					<em>(Signing is the next edition — Verifiable Provenance.)</em>
				</li>
				<li>
					<strong>Grow/update-only</strong> — deletes don't converge yet.
					<em>(That's the edition after — Forgettable Memory.)</em>
				</li>
				<li>
					<strong>Same namepoint</strong> across replicas, and <code>SPK1</code> is the packet seal
					— not the full FAFB binary, no IANA media type.
				</li>
			</ul>
		</section>

		<section>
			<h2>Try It</h2>
			<div class="terminal-block">
				<code># the proof, one command:</code>
				<code>uvx claude-fafm-sdk receipt</code>
			</div>
			<div class="terminal-block">
				<code># open a packet you were sent:</code>
				<code>uvx claude-fafm-sdk open soul.fafmp</code>
			</div>
			<div class="terminal-block">
				<code># classic floor:</code>
				<code>pip install claude-fafm-sdk==1.3.0</code>
			</div>
			<p>
				That first line clones nothing, sets up nothing, and either prints GREEN or tells you exactly
				which check failed. Private notes stay private; the receipt is public — because you can run
				it.
			</p>
		</section>

		<section>
			<h2>The Numbers</h2>
			<ul>
				<li><strong>v1.3.0</strong> — production on PyPI (Provable Receipt)</li>
				<li><strong>1 command</strong> — <code>uvx claude-fafm-sdk receipt</code>, no git clone</li>
				<li>
					<strong>3 falsifiers</strong> — CRC-reject · double-merge idempotent · both-ways converge
				</li>
				<li>
					<strong>PyPI:</strong>
					<a href="https://pypi.org/project/claude-fafm-sdk/1.3.0/" target="_blank" rel="noopener"
						>claude-fafm-sdk 1.3.0</a
					>
				</li>
			</ul>
		</section>

		<section class="share-section">
			<a href={xIntent} target="_blank" rel="noopener" class="share-btn">Post on X</a>
		</section>

		<section class="star-cta">
			<p>Portable memory that proves itself. Star the SDK if it earns it.</p>
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
			<p>Built with .faf + .fafm ☑️ Memory that moves, merges, sends — and proves itself. 🏎️</p>
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
