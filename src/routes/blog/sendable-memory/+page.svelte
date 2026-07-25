<script lang="ts">
	import { onMount } from 'svelte';
	import { buildShareIntent } from '$lib/shareIntent.js';
	let mounted = false;
	onMount(() => {
		mounted = true;
	});

	const shareText = `🏁 Just shipped: claude-fafm-sdk v1.2.0 — Sendable Memory

1.1 made souls mergeable; 1.2 makes them sendable.

CRC = integrity, not auth. Grow/update-only.

uvx claude-fafm-sdk --version`;
	const shareUrl = 'https://faf.one/blog/sendable-memory';
	const xIntent = buildShareIntent({ text: shareText, url: shareUrl });
</script>

<svelte:head>
	<title>Sendable Memory - claude-fafm-sdk v1.2.0 | FAF</title>
	<meta
		name="description"
		content="claude-fafm-sdk 1.2.0 ships Sendable Memory: seal a .fafm soul into a CRC-integrity .fafmp packet, send the file, merge on arrival — same CvRDT, Tier-2 stranger receipt."
	/>
	<meta property="og:title" content="Sendable Memory - claude-fafm-sdk v1.2.0" />
	<meta
		property="og:description"
		content="1.1 made souls mergeable; 1.2 makes them sendable — seal, send, merge."
	/>
	<meta property="og:type" content="article" />
	<meta property="og:image" content="https://faf.one/blog/sendable-memory-hero.png" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:image" content="https://faf.one/blog/sendable-memory-hero.png" />
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / Sendable Memory
		</div>
		<h1>Sendable Memory</h1>
		<p class="version-tag">claude-fafm-sdk v1.2.0 · Sendable Memory · 🏆</p>
		<p class="subtitle">
			1.1 made souls <strong>mergeable</strong>; 1.2 makes them <strong>sendable</strong> —
			seal a soul into a CRC-integrity <code>.fafmp</code>, send the file, merge on arrival.
		</p>
		<div class="meta">
			<time datetime="2026-07-25">July 25, 2026</time>
			<span class="separator">•</span>
			<span class="category release">Release</span>
		</div>
	</header>

	<div class="hero-image">
		<img
			src="/blog/sendable-memory-hero.png"
			alt="Sendable Memory — claude-fafm-sdk v1.2.0. Seal a soul into a CRC-integrity .fafmp packet and merge on arrival."
		/>
	</div>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> <code>claude-fafm-sdk</code> <strong>1.2.0</strong> ships
				<strong>Sendable Memory</strong> — seal a portable <code>.fafm</code> soul into an
				<code>SPK1</code> packet (CRC-32 integrity), send the file, and
				<code>merge_packet</code> on arrival through the same state-based
				<strong>CvRDT</strong> from 1.1. CLI <code>seal</code> / <code>merge</code> + a 60-second
				Tier-2 receipt a stranger can re-run. Grow/update-only — we do <em>not</em> claim deletes
				converge. CRC is integrity, <em>not</em> authentication.
			</p>
			<div class="terminal-block">
				<code># zero install — uv first:</code>
				<code>uvx claude-fafm-sdk --version</code>
				<code>uvx claude-fafm-sdk quickstart</code>
			</div>
		</section>

		<section>
			<h2>Why sendable matters</h2>
			<p>
				<strong>1.1 Mergeable Memory</strong> proved two offline souls can join without a
				coordinator. Portable memory also has to <em>travel</em>: write once, hand a file across
				an air gap or a chat, open fail-closed, merge into the local lattice.
			</p>
			<p>
				Hosted namepoint push/pull stays a rendezvous. Packet mode is the other path —
				<strong>file transport only</strong> for the Tier-2 demo. The join did not change; the
				transport wrapped it.
			</p>
		</section>

		<section>
			<h2>What's New</h2>
			<ul>
				<li>
					<strong>Packet API</strong> — top-level <code>to_packet</code> /
					<code>from_packet</code> / <code>merge_packet</code> (+ file helpers,
					<code>PacketError</code>). An <code>SPK1</code> packet is a 16-byte little-endian header
					+ canonical <code>.fafm</code> YAML, sealed with <strong>CRC-32 of the payload
					only</strong>.
				</li>
				<li>
					<strong>CLI <code>seal</code> / <code>merge</code></strong> —
					<code>claude-fafm-sdk seal -f soul.fafm -o out.fafmp</code> and
					<code>merge -f soul.fafm packet.fafmp</code>. Fail-closed: a bad packet exits non-zero
					and never rewrites the local soul.
				</li>
				<li>
					<strong>Byte-identity</strong> — seals of the same logical state are byte-for-byte equal
					(canonical dump by construction); a wire-hex golden pins the exact bytes for
					cross-language interop.
				</li>
				<li>
					<strong><code>PACKET.md</code> / <code>RECEIPT.md</code></strong> — layout + the
					60-second proof (<code>examples/tier2_receipt.sh</code>).
				</li>
				<li>
					<strong>Hardening</strong> — residual-field goldens + encoding-lock fuzz. Merge oracle
					stays closed.
				</li>
			</ul>
		</section>

		<section>
			<h2>The 60-second arc</h2>
			<p>
				A stranger runs the whole product proof — etch → seal → send a file → merge → recall —
				and falsifies it:
			</p>
			<ul>
				<li><strong>CRC reject</strong> — bit-flip the payload → non-zero exit, local soul not clobbered</li>
				<li><strong>Double-merge</strong> — same packet twice → idempotent (no dup facts)</li>
				<li><strong>Both-ways</strong> — cross-merge sealed replicas → same logical soul</li>
			</ul>
			<div class="diagram-image">
				<img
					src="/blog/sendable-memory-arc.png"
					alt="A etch → seal .fafmp → file send → B merge → recall; falsifiers: CRC reject, double-merge, both-ways"
				/>
			</div>
			<p>
				Ingest is still the CvRDT:
				<code>merge_packet(local, data) = merge_souls(local, from_packet(data))</code>. No new
				lattice.
			</p>
		</section>

		<section>
			<h2>Honesty bounds</h2>
			<ul>
				<li><strong>CRC = integrity, not authentication</strong> — no signing, no encryption in v0.</li>
				<li><strong><code>SPK1</code> ≠ project <code>FAFB</code></strong> — extension
					<code>.fafmp</code>; no IANA media type claimed for the packet seal.</li>
				<li><strong>Grow/update-only</strong> — offline delete convergence stays out until tombstones.</li>
				<li><strong>Same namepoint</strong> across replicas — the CvRDT rule from 1.1.</li>
				<li><strong>Method, not endorsement</strong> — dual-impl merge from 1.1 still stands; packet
					layer is transport, not a second oracle.</li>
			</ul>
		</section>

		<section>
			<h2>Try It</h2>
			<div class="terminal-block">
				<code># zero install:</code>
				<code>uvx claude-fafm-sdk --version</code>
				<code>uvx claude-fafm-sdk quickstart</code>
			</div>
			<div class="terminal-block">
				<code># seal → open in one line (ephemeral):</code>
				<code
					>uv run --with claude-fafm-sdk python -c "from claude_fafm_sdk import to_packet, from_packet, Soul; s=Soul('@demo'); s.etch('ships sendable memory', id='why'); p=to_packet(s); print(p[:4], from_packet(p).facts[0].text)"</code
				>
			</div>
			<div class="terminal-block">
				<code># classic floor:</code>
				<code>pip install claude-fafm-sdk==1.2.0</code>
			</div>
			<p>60-second Tier-2 receipt (from source — tests are not inside the wheel):</p>
			<div class="terminal-block">
				<code>git clone https://github.com/Wolfe-Jam/claude-fafm-sdk && cd claude-fafm-sdk</code>
				<code>git checkout v1.2.0 && uv pip install -e ".[dev]"</code>
				<code>bash examples/tier2_receipt.sh</code>
			</div>
			<p>
				A reader who re-runs that receipt <strong>is</strong> the public proof. Private review
				transcripts stay private.
			</p>
		</section>

		<section>
			<h2>The Numbers</h2>
			<ul>
				<li><strong>v1.2.0</strong> — production on PyPI (Sendable Memory)</li>
				<li><strong>T3 + T4</strong> — sealed packet + CLI/receipt in one release</li>
				<li><strong>Tier-2 receipt</strong> — etch→seal→merge→recall + three falsifiers</li>
				<li>
					<strong>PyPI:</strong>
					<a href="https://pypi.org/project/claude-fafm-sdk/1.2.0/" target="_blank" rel="noopener"
						>claude-fafm-sdk 1.2.0</a
					>
				</li>
			</ul>
		</section>

		<section class="share-section">
			<a href={xIntent} target="_blank" rel="noopener" class="share-btn">Post on X</a>
		</section>

		<section class="star-cta">
			<p>Portable memory that merges — and travels. Star the SDK if it earns it.</p>
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
			<p>Built with .faf + .fafm ☑️ Memory that moves — merges — and sends. 🏎️</p>
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
