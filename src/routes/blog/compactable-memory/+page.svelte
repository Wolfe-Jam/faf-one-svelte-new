<script lang="ts">
	import { onMount } from 'svelte';
	import { buildShareIntent } from '$lib/shareIntent.js';
	let mounted = false;
	onMount(() => {
		mounted = true;
	});

	const shareText = `🏁 Just shipped: claude-fafm-sdk v2.0.0 — Compactable

Compactable Forgettable Memory. Epoch compact pays tombstone debt; cross-epoch merge refuses — no silent zombies.

uvx claude-fafm-sdk --version`;
	const shareUrl = 'https://faf.one/blog/compactable-memory';
	const xIntent = buildShareIntent({ text: shareText, url: shareUrl });
</script>

<svelte:head>
	<title>Compactable - claude-fafm-sdk v2.0.0 | FAF</title>
	<meta
		name="description"
		content="claude-fafm-sdk 2.0.0 ships Compactable Forgettable Memory: epoch compact pays tombstone debt; cross-epoch merge refuses — no silent zombies. Plus a blind SuperGrok Expert HEAVY review."
	/>
	<meta property="og:title" content="Compactable - claude-fafm-sdk v2.0.0" />
	<meta
		property="og:description"
		content="Epoch compact pays tombstone debt; cross-epoch merge refuses — no silent zombies. Arc complete through Compactable."
	/>
	<meta property="og:type" content="article" />
	<meta property="og:url" content="https://faf.one/blog/compactable-memory" />
	<meta property="og:site_name" content=".faf Format Authority" />
	<meta property="og:image" content="https://faf.one/blog/compactable-memory-hero.png" />
	<meta
		property="og:image:secure_url"
		content="https://faf.one/blog/compactable-memory-hero.png"
	/>
	<meta property="og:image:type" content="image/png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta
		property="og:image:alt"
		content="Compactable — claude-fafm-sdk v2.0.0 · epoch compact · no silent zombies"
	/>
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@fafformat" />
	<meta name="twitter:creator" content="@wolfe_jam" />
	<meta name="twitter:title" content="Compactable - claude-fafm-sdk v2.0.0" />
	<meta
		name="twitter:description"
		content="Epoch compact pays tombstone debt; cross-epoch merge refuses — no silent zombies."
	/>
	<meta name="twitter:image" content="https://faf.one/blog/compactable-memory-hero.png" />
	<meta
		name="twitter:image:alt"
		content="Compactable — claude-fafm-sdk v2.0.0 · epoch compact · no silent zombies"
	/>
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / Compactable
		</div>
		<h1>Compactable</h1>
		<p class="version-tag">claude-fafm-sdk v2.0.0 · Compactable · ✪</p>
		<p class="subtitle">
			1.5 made a delete <strong>state</strong>. 2.0 lets you
			<strong>pay the graveyard</strong> without silent zombies —
			epoch compact, archive-first, refuse by default.
		</p>
		<div class="meta">
			<time datetime="2026-07-31">July 31, 2026</time>
			<span class="separator">•</span>
			<span class="category release">Release</span>
		</div>
	</header>

	<div class="hero-image">
		<img
			src="/blog/compactable-memory-hero.png"
			alt="Compactable — claude-fafm-sdk v2.0.0. Epoch compact pays tombstone debt; cross-epoch merge refuses — no silent zombies."
			width="1200"
			height="630"
			loading="eager"
			decoding="async"
		/>
	</div>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> <code>claude-fafm-sdk</code> <strong>2.0.0</strong> ships
				<strong>Compactable Forgettable Memory</strong>. Epoch compact pays tombstone debt;
				cross-epoch merge refuses — no silent zombies. Second deliberate lattice re-open after
				1.5 tombstones. Archive-first. Receipt on the wire. Dual-impl held. Live on PyPI.
			</p>
			<div class="terminal-block">
				<code># zero install:</code>
				<code>uvx claude-fafm-sdk --version</code>
				<code># → 2.0.0</code>
				<code
					>uvx claude-fafm-sdk compact --epoch --at 2026-07-31T12:00:00Z --archive soul.e0.fafm</code
				>
			</div>
		</section>

		<section>
			<h2>Why 2.0 this time</h2>
			<p>
				1.5 could have been stamped 2.0 — tombstones re-open the merge oracle. We kept that cut
				as <strong>1.5</strong>: same arc, one honest re-open, dual-impl green. The
				<em>next</em> hard problem was different.
			</p>
			<p>
				Grow-only graveyards are honest… until the debt is the product. Pure CRDTs often ignore
				that. Compacting without a lineage barrier resurrects forgotten facts when a lagging
				peer or pre-forget packet arrives. That is the Cassandra zombie pattern — and it is
				exactly what multi-agent memory will hit if you “just GC tombstones.”
			</p>
			<p>
				<strong>2.0 answer:</strong> pay debt only by <strong>epoch snapshot</strong> — a
				deliberate lineage break. Cross-epoch merge <strong>refuses</strong>. Pre-compact souls
				stay mergeable among themselves. Compact ≠ secure erase. Archives keep the prior soul.
			</p>
		</section>

		<section>
			<h2>The arc — through Compactable</h2>
			<ul>
				<li><strong>1.1</strong> Mergeable — join without a coordinator</li>
				<li><strong>1.2</strong> Sendable — seal · send · merge</li>
				<li><strong>1.3</strong> Provable — stranger receipt, one command</li>
				<li><strong>1.4</strong> Verifiable — which key sealed it</li>
				<li><strong>1.5</strong> Forgettable — delete is state (both roads)</li>
				<li><strong>1.6–1.7</strong> Policy → tombstone · debt · residual risk (folded into the 1.7 install line)</li>
				<li>
					<strong>2.0 Compactable</strong> — epoch compact · refuse · migrate · dual-impl
				</li>
			</ul>
			<p>
				<strong
					>Mergeable → Sendable → Provable → Verifiable → Forgettable → Compactable.</strong
				>
			</p>
		</section>

		<section>
			<h2>What's New in 2.0.0</h2>
			<ul>
				<li>
					<strong><code>Soul.epoch</code> (E1)</strong> — default 0; same-epoch merge only;
					<code>EpochMismatch</code> on cross-epoch; packet + hosted identical barrier.
				</li>
				<li>
					<strong><code>compact --epoch</code> (E3–E4)</strong> — observable facts only; empty
					tombstones; epoch+1; <code>CompactionReceipt</code> on the wire; archive-first CLI.
				</li>
				<li>
					<strong><code>migrate</code> (E2)</strong> — explicit <code>refuse</code> |
					<code>project-live</code>; never silent inside merge.
				</li>
				<li>
					<strong>Zombie suite Z1–Z8</strong> — hand goldens; dual-impl projection with
					<code>reference_merge</code>.
				</li>
				<li>
					<strong>TAF receipts</strong> — CI prints proof over time to the
					<code>taf-receipts</code> branch (sister of FAF).
				</li>
			</ul>
			<p>
				Watermark / peer-frontier GC is <strong>2.0.1+</strong> — not this cut. Needs membership
				+ frontier exchange. Packet-only topologies stay epoch-only.
			</p>
		</section>

		<section>
			<h2>Honesty bounds (unchanged doctrine)</h2>
			<ul>
				<li>
					<strong>Tombstone ≠ secure erase.</strong> Disk, backups, and logs can still hold
					bytes.
				</li>
				<li>
					<strong>Compact ≠ wipe.</strong> Prior soul is archived; old packets may still exist.
				</li>
				<li>
					<strong>Refuse beats hope.</strong> Cross-epoch merge does not “take max epoch and
					join.”
				</li>
				<li>
					<strong>1.5 lattice held.</strong> T1–T8 tombstones, policies, debt, residual still
					green.
				</li>
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
				<code># classic floor:</code>
				<code>pip install claude-fafm-sdk==2.0.0</code>
			</div>
			<div class="terminal-block">
				<code># pay tombstone debt (archive-first):</code>
				<code
					>claude-fafm-sdk compact --epoch -f soul.fafm --at 2026-07-31T12:00:00Z --archive soul.e0.fafm</code
				>
				<code
					># explicit migrate (not merge):</code
				>
				<code
					>claude-fafm-sdk migrate --to 1 --mode project-live -f soul.fafm --at 2026-07-31T12:00:00Z --archive pre.fafm</code
				>
			</div>
			<p>
				Release:
				<a
					href="https://github.com/Wolfe-Jam/claude-fafm-sdk/releases/tag/v2.0.0"
					target="_blank"
					rel="noopener">v2.0.0</a
				>
				· PyPI:
				<a href="https://pypi.org/project/claude-fafm-sdk/2.0.0/" target="_blank" rel="noopener"
					>claude-fafm-sdk 2.0.0</a
				>
				· Spec: <a href="https://github.com/Wolfe-Jam/claude-fafm-sdk/blob/main/MERGE.md" target="_blank" rel="noopener">MERGE §11</a>
				· <a href="/blog/forgettable-memory">Forgettable Memory (1.5)</a>
			</p>
		</section>

		<section>
			<h2>The Numbers</h2>
			<ul>
				<li><strong>v2.0.0</strong> — live on PyPI (Compactable · epoch · dual-impl)</li>
				<li><strong>Edition</strong> — Compactable</li>
				<li>
					<strong>Lead</strong> — Compactable Forgettable Memory. Epoch compact pays tombstone
					debt; cross-epoch merge refuses — no silent zombies.
				</li>
				<li>
					<strong>Acid</strong> — stranger install from live index · forget · debt · policy ·
					seal · merge · compact 0→1
				</li>
				<li>
					<strong>PyPI:</strong>
					<a href="https://pypi.org/project/claude-fafm-sdk/2.0.0/" target="_blank" rel="noopener"
						>claude-fafm-sdk 2.0.0</a
					>
				</li>
				<li>
					<strong>GitHub:</strong>
					<a
						href="https://github.com/Wolfe-Jam/claude-fafm-sdk/releases/tag/v2.0.0"
						target="_blank"
						rel="noopener">v2.0.0 release</a
					>
				</li>
			</ul>
		</section>

		<!-- ═══════════════════════════════════════════════════════════
		     Blind SuperGrok Expert HEAVY review (independent, post-ship)
		     ═══════════════════════════════════════════════════════════ -->
		<section class="expert-review">
			<h2>Blind SuperGrok Expert Review</h2>
			<p class="review-meta">
				<strong>Mode:</strong> SuperGrok · Expert · HEAVY &nbsp;·&nbsp;
				<strong>Blind:</strong> independent product read after 2.0.0 shipped — not a commissioned
				marketing pass. Reproduced here as external mirror of the cut.
			</p>

			<p>
				<strong>claude-fafm-sdk</strong> is the reference Python SDK for the IANA-registered
				<code>.fafm</code> format (<code>application/vnd.fafm+yaml</code>). It provides
				offline-first, portable, cross-vendor AI agent memory that versions with a project and
				moves between models instead of living inside one vendor’s walled garden.
			</p>
			<p>
				<strong>Current release:</strong> 2.0.0 (“Compactable”) — very recent.<br />
				<strong>Requires:</strong> Python ≥3.10<br />
				<strong>Core dependency:</strong> <code>pyyaml≥6.0</code><br />
				<strong>Optional extras:</strong> <code>[namepoint]</code> (fastmcp),
				<code>[sign]</code> (cryptography for Ed25519)<br />
				<strong>License:</strong> MIT<br />
				<strong>Home:</strong>
				<a href="https://faf.one/memory" target="_blank" rel="noopener">faf.one/memory</a>
				·
				<strong>Repo:</strong>
				<a href="https://github.com/Wolfe-Jam/claude-fafm-sdk" target="_blank" rel="noopener"
					>Wolfe-Jam/claude-fafm-sdk</a
				>
			</p>

			<h3>Core model</h3>
			<ul>
				<li>
					<strong>Soul</strong> — the local, offline-first memory object (facts + tombstones +
					epoch).
				</li>
				<li>
					<strong>Fact</strong> — typed, optionally linked memory unit (text +
					id/type/priority/tags/links/timestamp).
				</li>
				<li>
					<strong>Tombstone</strong> — convergent delete (LWW-style). Forgotten stays forgotten
					across merges and transports.
				</li>
				<li>
					<strong>Epoch</strong> — barrier that prevents silent cross-epoch merges. Compaction or
					explicit migration is required to move forward.
				</li>
				<li>
					<strong>Namepoint</strong> — optional hosted address for push/pull/sync
					(personal-scale free tier; paid for scale).
				</li>
				<li>
					<strong>Packet</strong> (<code>.fafmp</code>) — sealed transport form that carries
					epoch + tombstones.
				</li>
			</ul>
			<p>
				The product arc is deliberate and well-documented:
			</p>
			<p class="arc-line">
				<strong>Mergeable → Sendable → Provable → Verifiable → Forgettable → Compactable</strong>
			</p>
			<p>
				2.0 adds epoch compaction (pay tombstone debt safely, archive-first, with receipts) and
				explicit migration modes so the lattice stays honest as memory grows.
			</p>

			<h3>Developer experience</h3>
			<p>Installation and first-run are clean:</p>
			<div class="terminal-block">
				<code>uv add claude-fafm-sdk</code>
				<code># or</code>
				<code>uvx claude-fafm-sdk quickstart</code>
			</div>
			<p>
				CLI surface is practical: <code>init</code>, <code>etch</code>, <code>recall</code>,
				<code>ls</code>, <code>forget</code>, <code>debt</code>, <code>compact</code>,
				<code>migrate</code>, <code>seal</code>, etc. The Python API is correspondingly simple
				(<code>Soul.etch</code>, <code>Soul.forget</code>, <code>Soul.recall</code>,
				<code>Soul.save</code> / <code>load</code>).
			</p>
			<p>
				Docs emphasize falsifiable receipts, dual-transport convergence (packet + hosted), and
				clear bounds (tombstone ≠ secure erase, compact ≠ wipe). Companion pieces (INTEROP,
				MERGE, PACKET, PROVENANCE) and the Zenodo paper give the format real grounding.
			</p>

			<h3>Strengths</h3>
			<ul>
				<li>
					<strong>True offline-first</strong> with optional hosted layer — rare and correctly
					prioritized.
				</li>
				<li>
					<strong>Convergent forget</strong> via tombstones is the right primitive for multi-agent
					/ multi-vendor memory.
				</li>
				<li>
					<strong>Epoch + compaction</strong> in 2.0 is a mature response to the “grow-only
					graveyard” problem that pure CRDTs often ignore.
				</li>
				<li>Minimal base surface + clean extras.</li>
				<li>
					Explicit cross-vendor intent (compatible with the voice profile in
					<code>grok-faf-voice</code> and the broader FAF family).
				</li>
				<li>uvx-friendly and “30-second wow” path exists.</li>
			</ul>

			<h3>Observations / maturity notes</h3>
			<ul>
				<li>
					Repo is still low-visibility (early public traction for a specialized format).
				</li>
				<li>
					Download volume and ecosystem adoption are still building; the package is more
					“reference implementation + format steward” than mass-market library right now.
				</li>
				<li>
					2.0 is brand new. The lattice changes (epoch barrier, compaction) are significant —
					worth testing carefully if you already have 1.5.x souls in production.
				</li>
				<li>
					Hosted namepoint path is optional and correctly kept out of the core dependency set.
				</li>
				<li>
					No GC in the base lattice (by design at personal scale); compaction is the controlled
					debt-payment mechanism.
				</li>
			</ul>

			<h3>Bottom line</h3>
			<p>
				This is a high-quality, opinionated, correctly scoped SDK for a real problem (AI memory
				that isn’t trapped inside one model or one session). The design is coherent, the
				guarantees are explicit, and the progression from mergeable → forgettable → compactable
				shows thoughtful iteration rather than feature sprawl.
			</p>
			<p>
				If you’re building agents that need durable, portable, deletable memory that can move
				between Claude, Grok, Gemini, or local runtimes, this is currently one of the cleanest
				open options available. The format registration + dual-profile approach (knowledge +
				voice) gives it more legs than a typical one-off memory library.
			</p>
			<p>
				Worth pinning the version you actually want (<code>==2.0.0</code> or the 1.5.x series)
				and running the receipt / zombie suite if you’re shipping anything production-adjacent.
			</p>
		</section>

		<section class="share-section">
			<a href={xIntent} target="_blank" rel="noopener" class="share-btn">Post on X</a>
		</section>

		<section class="star-cta">
			<p>Portable memory that can forget — and compact without lying. Star the SDK if it earns it.</p>
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
				Built with .faf + .fafm ☑️ Memory that moves, merges, sends, proves, signs, forgets — and
				compacts without silent zombies. 🏎️
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

	h3 {
		font-size: 1.25rem;
		font-weight: 700;
		margin: 1.5rem 0 0.75rem;
		color: #1a1a1a;
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

	/* Expert review callout */
	.expert-review {
		background: #f7f9fa;
		border: 1px solid #e0e8ea;
		border-left: 4px solid #00d4d4;
		border-radius: 10px;
		padding: 1.5rem 1.5rem 1.25rem;
		margin: 2.5rem 0;
	}
	.expert-review h2 {
		margin-top: 0;
	}
	.review-meta {
		font-size: 0.92rem;
		color: #444;
		background: #eef6f6;
		border-radius: 6px;
		padding: 0.65rem 0.85rem;
		margin-bottom: 1.25rem;
	}
	.arc-line {
		text-align: center;
		font-size: 1.05rem;
		padding: 0.75rem 0.5rem;
		margin: 0.5rem 0 1rem;
		background: #fff;
		border-radius: 6px;
		border: 1px dashed #c8d8d8;
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
