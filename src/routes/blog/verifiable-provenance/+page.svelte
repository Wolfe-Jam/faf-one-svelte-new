<script lang="ts">
	import { onMount } from 'svelte';
	import { buildShareIntent } from '$lib/shareIntent.js';
	let mounted = false;
	onMount(() => {
		mounted = true;
	});

	const shareText = `🏁 Just shipped: claude-fafm-sdk v1.4.0 — Verifiable Provenance

1.3 proved a packet travels intact; 1.4 proves which key sealed it.

pip install 'claude-fafm-sdk[sign]'
keygen · seal --sign · verify -k

Optional Ed25519. Not a PKI. Receipt still zero-crypto.`;
	const shareUrl = 'https://faf.one/blog/verifiable-provenance';
	const xIntent = buildShareIntent({ text: shareText, url: shareUrl });
</script>

<svelte:head>
	<title>Verifiable Provenance - claude-fafm-sdk v1.4.0 | FAF</title>
	<meta
		name="description"
		content="claude-fafm-sdk 1.4.0 ships Verifiable Provenance: optional Ed25519 signatures over the SPK1 payload — which key sealed it. Integrity (CRC) and provenance stay separate. [sign] extra; receipt stays zero-crypto."
	/>
	<meta property="og:title" content="Verifiable Provenance - claude-fafm-sdk v1.4.0" />
	<meta
		property="og:description"
		content="1.3 proved a packet travels intact; 1.4 proves which key sealed it — optional Ed25519 over the same payload CRC covers."
	/>
	<meta property="og:type" content="article" />
	<meta property="og:url" content="https://faf.one/blog/verifiable-provenance" />
	<meta property="og:site_name" content=".faf Format Authority" />
	<meta
		property="og:image"
		content="https://faf.one/blog-assets/verifiable-provenance-hero.png?v=6"
	/>
	<meta
		property="og:image:secure_url"
		content="https://faf.one/blog-assets/verifiable-provenance-hero.png?v=6"
	/>
	<meta property="og:image:type" content="image/png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta
		property="og:image:alt"
		content="Verifiable Provenance — claude-fafm-sdk v1.4.0 · optional Ed25519"
	/>
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@fafformat" />
	<meta name="twitter:creator" content="@wolfe_jam" />
	<meta name="twitter:title" content="Verifiable Provenance - claude-fafm-sdk v1.4.0" />
	<meta
		name="twitter:description"
		content="1.3 proved a packet travels intact; 1.4 proves which key sealed it — optional Ed25519."
	/>
	<meta
		name="twitter:image"
		content="https://faf.one/blog-assets/verifiable-provenance-hero.png?v=6"
	/>
	<meta
		name="twitter:image:alt"
		content="Verifiable Provenance — claude-fafm-sdk v1.4.0 · optional Ed25519"
	/>
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / Verifiable Provenance
		</div>
		<h1>Verifiable Provenance</h1>
		<p class="version-tag">claude-fafm-sdk v1.4.0 · Verifiable Provenance · 🏆</p>
		<p class="subtitle">
			1.3 proved a packet travels <em>intact</em>; 1.4 proves
			<em>which key sealed it</em> — optional Ed25519 over the same payload CRC covers.
		</p>
		<div class="meta">
			<time datetime="2026-07-27">July 27, 2026</time>
			<span class="separator">•</span>
			<span class="category release">Release</span>
		</div>
	</header>

	<div class="hero-image">
		<img
			src="https://faf.one/blog-assets/verifiable-provenance-hero.png?v=6"
			alt="Verifiable Provenance — claude-fafm-sdk v1.4.0 hero card"
			width="1200"
			height="630"
			loading="eager"
			decoding="async"
		/>
	</div>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> <code>claude-fafm-sdk</code> <strong>1.4.0</strong> ships
				<strong>Verifiable Provenance</strong> — optional <strong>Ed25519</strong> signatures on
				Soul-Packets. Integrity (CRC) and provenance (signature) stay separate. Opt-in via the
				<code>[sign]</code> extra; the base SDK and <code>uvx claude-fafm-sdk receipt</code> stay
				<strong>zero-crypto</strong>.
			</p>
			<div class="terminal-block">
				<code>pip install 'claude-fafm-sdk[sign]'</code>
				<code>claude-fafm-sdk keygen --out ./keys</code>
				<code>claude-fafm-sdk seal -f soul.fafm -o soul.fafmp --sign --key ./keys/sign.pem</code>
				<code>claude-fafm-sdk verify -k ./keys/sign.pub.pem soul.fafmp</code>
				<code># → signature OK (exit 0)</code>
			</div>
		</section>

		<section>
			<h2>CRC answered “intact.” Provenance answers “which key.”</h2>
			<p>
				1.2 sealed a soul into an <code>SPK1</code> packet with CRC-32 — integrity only. 1.3 made
				that story one command:
				<code>uvx claude-fafm-sdk receipt</code>. A stranger could prove the bytes weren’t mangled.
			</p>
			<p>
				What CRC never claimed: <em>which key sealed these bytes</em>. That’s not a human identity,
				not a trust product, not encryption. It’s a key binding. 1.4 adds it as an
				<strong>optional</strong> layer on the same transport.
			</p>
			<p>
				Signature covers the <strong>same raw payload</strong> CRC covers. Flag bit 0 =
				<code>SIGNED</code>. Trailer is a fixed <strong>64-byte</strong> Ed25519 signature — no
				<code>key_id</code>, no embedded pubkey (later). Unsigned seals stay
				<strong>byte-identical</strong> to 1.2/1.3.
			</p>
		</section>

		<section>
			<h2>What's New</h2>
			<ul>
				<li>
					<strong><code>[sign]</code> extra → <code>cryptography</code></strong> — Ed25519 only when
					you install it. Missing extra → clean “install <code>claude-fafm-sdk[sign]</code>” message,
					never a raw <code>ImportError</code>.
				</li>
				<li>
					<strong>Library</strong> — <code>sign_packet</code> / <code>verify_packet</code> /
					<code>generate_keypair</code> (top-level exports). PEM-only keys in 1.4-min.
				</li>
				<li>
					<strong>CLI</strong> — <code>keygen</code> (writes <code>sign.pem</code> at 0600 +
					<code>sign.pub.pem</code>), <code>seal --sign --key</code>, <code>verify -k</code>.
				</li>
				<li>
					<strong>Strict open</strong> — <code>from_packet</code> and CLI <code>open</code> refuse a
					signed packet (point at <code>verify</code>). <code>merge_packet</code> never CRC-opens a
					signed peer; pass <code>public_key</code> or reject.
				</li>
				<li>
					<strong>Receipt unchanged</strong> — <code>uvx claude-fafm-sdk receipt</code> still GREEN,
					still zero-crypto.
				</li>
			</ul>
		</section>

		<section>
			<h2>How to run it</h2>
			<div class="terminal-block">
				<code># provenance path (opt-in crypto):</code>
				<code>pip install 'claude-fafm-sdk[sign]==1.4.0'</code>
				<code>claude-fafm-sdk keygen --out ./keys</code>
				<code>claude-fafm-sdk seal -f soul.fafm -o signed.fafmp --sign --key ./keys/sign.pem</code>
				<code>claude-fafm-sdk verify -k ./keys/sign.pub.pem signed.fafmp</code>
			</div>
			<div class="terminal-block">
				<code># integrity path (still zero-crypto):</code>
				<code>uvx --from 'claude-fafm-sdk==1.4.0' claude-fafm-sdk receipt</code>
				<code># → TIER-2 RECEIPT GREEN</code>
			</div>
		</section>

		<section>
			<h2>Honesty bounds</h2>
			<ul>
				<li>
					<strong>Provenance, never “trust.”</strong> A key signed these payload bytes — not a human
					identity, not a PKI, not “authenticated memory.”
				</li>
				<li>
					<strong>Strip-downgrade is possible</strong> — drop the 64-byte trailer and clear
					<code>SIGNED</code> → equivalent unsigned packet of the same payload. The flag is not
					signed. Demand verify when you need provenance.
				</li>
				<li>
					<strong>Old 1.2/1.3 readers reject</strong> full signed files (length-exact) — they do not
					silently CRC-open them.
				</li>
				<li>
					<strong><code>SPK1</code> ≠ <code>FAFB</code></strong> — not project-binary signing, no
					<code>FLAG_SIGNED</code> interop with the FAFB format.
				</li>
				<li>
					<strong>Merge oracle untouched</strong> — transport only; CvRDT dual-impl remains the 1.1
					story. Deletes still don’t converge
					<em>(→ Forgettable Memory / 1.5)</em>.
				</li>
				<li><strong>No encryption</strong> in this edition.</li>
			</ul>
		</section>

		<section>
			<h2>The Numbers</h2>
			<ul>
				<li><strong>v1.4.0</strong> — production on PyPI (Verifiable Provenance)</li>
				<li><strong>Optional Ed25519</strong> — fixed 64-byte trailer, payload-aligned with CRC</li>
				<li><strong>Zero-crypto base</strong> — receipt + seal/merge/open without <code>[sign]</code></li>
				<li>
					<strong>PyPI:</strong>
					<a href="https://pypi.org/project/claude-fafm-sdk/1.4.0/" target="_blank" rel="noopener"
						>claude-fafm-sdk 1.4.0</a
					>
				</li>
				<li>
					<strong>GitHub:</strong>
					<a
						href="https://github.com/Wolfe-Jam/claude-fafm-sdk/releases/tag/v1.4.0"
						target="_blank"
						rel="noopener">v1.4.0 release</a
					>
				</li>
			</ul>
		</section>

		<section>
			<h2>The arc</h2>
			<p>
				<strong>Mergeable → Sendable → Provable → Verifiable → Forgettable.</strong>
			</p>
			<ul>
				<li>1.1 Mergeable Memory — souls join (CvRDT)</li>
				<li>1.2 Sendable Memory — SPK1 + CRC travel</li>
				<li>1.3 Provable Receipt — one-command stranger proof</li>
				<li><strong>1.4 Verifiable Provenance</strong> — which key sealed it</li>
				<li>1.5 Forgettable Memory — tombstones (next)</li>
			</ul>
		</section>

		<section class="share-section">
			<a href={xIntent} target="_blank" rel="noopener" class="share-btn">Post on X</a>
		</section>

		<section class="star-cta">
			<p>Portable memory with optional provenance. Star the SDK if it earns it.</p>
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
			<p>
				Built with .faf + .fafm ☑️ Memory that moves, merges, sends, proves — and can say which key
				sealed it. 🏎️
			</p>
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

	.hero-image {
		margin: 0 0 2.5rem;
		border-radius: 12px;
		overflow: hidden;
		border: 1px solid #e5e5e5;
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
