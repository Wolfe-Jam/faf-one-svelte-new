<script lang="ts">
	import { onMount } from 'svelte';
	import { buildShareIntent } from '$lib/shareIntent.js';
	let mounted = false;
	onMount(() => {
		mounted = true;
	});

	const shareText = `🏁 Just shipped: claude-fafm-sdk v1.5.1 — Forgettable Memory

A delete is state. Tombstones travel. Forget converges on both transports.

Could have been 2.0. We shipped 1.5 — same lattice, one honest reopen.

uvx claude-fafm-sdk --version`;
	const shareUrl = 'https://faf.one/blog/forgettable-memory';
	const xIntent = buildShareIntent({ text: shareText, url: shareUrl });
</script>

<svelte:head>
	<title>Forgettable Memory - claude-fafm-sdk v1.5.1 | FAF</title>
	<meta
		name="description"
		content="claude-fafm-sdk 1.5.1 ships Forgettable Memory: convergent delete via tombstones — LWW graveyard on the CvRDT, packet + hosted. Rare lattice work. Could have been 2.0; we kept the arc honest as 1.5."
	/>
	<meta property="og:title" content="Forgettable Memory - claude-fafm-sdk v1.5.1" />
	<meta
		property="og:description"
		content="A delete is state. Tombstones travel. Forget converges — packet and hosted. Full arc closed."
	/>
	<meta property="og:type" content="article" />
	<meta property="og:url" content="https://faf.one/blog/forgettable-memory" />
	<meta property="og:site_name" content=".faf Format Authority" />
	<meta property="og:image" content="https://faf.one/blog/forgettable-memory-hero.png?v=2" />
	<meta
		property="og:image:secure_url"
		content="https://faf.one/blog/forgettable-memory-hero.png?v=2"
	/>
	<meta property="og:image:type" content="image/png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta
		property="og:image:alt"
		content="Forgettable Memory — claude-fafm-sdk v1.5.1 · convergent delete via tombstones"
	/>
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@fafformat" />
	<meta name="twitter:creator" content="@wolfe_jam" />
	<meta name="twitter:title" content="Forgettable Memory - claude-fafm-sdk v1.5.1" />
	<meta
		name="twitter:description"
		content="A delete is state. Tombstones travel. Forget converges on both transports."
	/>
	<meta name="twitter:image" content="https://faf.one/blog/forgettable-memory-hero.png?v=2" />
	<meta
		name="twitter:image:alt"
		content="Forgettable Memory — claude-fafm-sdk v1.5.1 · convergent delete via tombstones"
	/>
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / Forgettable Memory
		</div>
		<h1>Forgettable Memory</h1>
		<p class="version-tag">claude-fafm-sdk v1.5.1 · Forgettable Memory · ✪</p>
		<p class="subtitle">
			1.4 proved <em>which key</em> sealed a packet; 1.5 makes a delete
			<strong>state</strong> — tombstones travel the lattice, and forget
			<strong>converges</strong> on both transports.
		</p>
		<div class="meta">
			<time datetime="2026-07-29">July 29, 2026</time>
			<span class="separator">•</span>
			<span class="category release">Release</span>
		</div>
	</header>

	<div class="hero-image">
		<img
			src="/blog/forgettable-memory-hero.png?v=2"
			alt="Forgettable Memory — claude-fafm-sdk v1.5.1. A delete is state; tombstones travel; forget converges."
			width="1200"
			height="630"
			loading="eager"
			decoding="async"
		/>
	</div>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> <code>claude-fafm-sdk</code> <strong>1.5.1</strong> ships
				<strong>Forgettable Memory</strong> — the missing half of a grown-up CvRDT. Until now every
				edition only <em>grew</em> the soul: delete was absence, and merge resurrected whatever a
				peer still held. Now <code>forget</code> writes a <strong>tombstone</strong> that rides with
				the soul, joins as an LWW max-register, and <strong>suppresses</strong> the fact on emit.
				Packet path <em>and</em> hosted namepoint path. Rare code. Honest bounds. Full arc closed.
			</p>
			<div class="terminal-block">
				<code># zero install:</code>
				<code>uvx claude-fafm-sdk --version</code>
				<code># → 1.5.1</code>
				<code>uvx claude-fafm-sdk forget --help</code>
			</div>
		</section>

		<section>
			<h2>Could have been 2.0. We didn’t.</h2>
			<p>
				Tombstones re-open the merge oracle. That is not a patch — it’s a lattice change. Plenty of
				systems would stamp <strong>2.0</strong> on “we finally have delete.” We chose
				<strong>1.5</strong> on purpose.
			</p>
			<p>
				Why? Because the <em>story</em> was always one arc, not a reboot:
			</p>
			<ul>
				<li><strong>1.1</strong> Mergeable — join without a coordinator</li>
				<li><strong>1.2</strong> Sendable — seal · send · merge</li>
				<li><strong>1.3</strong> Provable — stranger receipt, one command</li>
				<li><strong>1.4</strong> Verifiable — which key sealed it</li>
				<li><strong>1.5</strong> Forgettable — delete is state</li>
			</ul>
			<p>
				2.0 would imply “throw out what you learned.” 1.5 says: same frozen discipline, one deliberate
				re-open, dual-implementation green, hand-golden gate — <em>then</em> ship. Semver is not a
				marketing amp; it’s a contract with strangers who already trust 1.x.
			</p>
			<p>
				And yes: if we only shipped packet-path forget and left hosted resurrection as a footgun,
				that would have been a <em>half</em> 1.5. So <strong>1.5.1</strong> is the production cut —
				hosted <code>pull</code> / <code>sync</code> go through the same <code>merge_souls</code>
				CvRDT. There is no production 1.5.0. First 1.5.x on PyPI is <strong>1.5.1</strong>.
			</p>
		</section>

		<section>
			<h2>Tombstones are rare code</h2>
			<p>
				Most “agent memory” products only ever append. Delete is UI theater — the backend still
				merges whatever last wrote. Distributed systems people know better: without a
				<strong>delete as state</strong>, absence is not information. Peers that lag will keep
				bringing the corpse back.
			</p>
			<p>
				A tombstone is not a secure erase. It is a <strong>lattice marker</strong> — a little
				gravestone that travels with the soul and says: “this fact lost; do not resurrect on
				join.” That is the difference between hope and convergence.
			</p>
			<p>What we actually ship:</p>
			<ul>
				<li>
					<strong><code>Soul.forget(id)</code> / <code>forget_text</code></strong> — remove the live
					fact <em>and</em> write a tombstone. Forgetting an id you no longer hold still suppresses
					it on later merge.
				</li>
				<li>
					<strong>CLI</strong> — <code>forget &lt;id&gt;</code> and
					<code>forget --text "…"</code> (id-less, matched by normalized text).
				</li>
				<li>
					<strong>LWW-tombstone-map above field-merge</strong> — delete-wins on ties; tags join under
					Rule T so the association gap doesn’t resurrect.
				</li>
				<li>
					<strong>GC out forever as debt</strong> — we don’t pretend compaction is free; the
					graveyard is honest debt until a later edition designs it.
				</li>
			</ul>
			<p>
				This is the same rigor that froze the merge oracle in 1.1 — not vibes, not a feature flag
				named <code>soft_delete</code>. Dual-impl differential still green after the reopen.
			</p>
		</section>

		<section>
			<h2>What's New (1.5.0 lattice + 1.5.1 hosted)</h2>
			<ul>
				<li>
					<strong>Forgettable Memory (packet)</strong> — tombstones on
					<code>seal</code> / <code>merge</code> / <code>merge_souls</code>. The deliberate oracle
					re-open, held to the same gate as the join itself.
				</li>
				<li>
					<strong>Hosted forget converges</strong> — namepoint <code>pull</code> /
					<code>sync</code> no longer re-add facts additively. They reconcile via
					<strong><code>merge_souls</code></strong> so a local tombstone suppresses a peer that
					still holds the fact.
				</li>
				<li>
					<strong><code>Namepoint.soul()</code></strong> — structured hosted read returns the
					<strong>full</strong> soul (facts <em>and</em> tombstones). <code>facts()</code> for
					recall stays facts-only.
				</li>
				<li>
					<strong>No wire change for push</strong> — tombstones were already storable; the read /
					reconcile side was the bug. Id-less tombstones round-trip by <code>txt_hash</code>.
				</li>
			</ul>
		</section>

		<section>
			<h2>Both transports — or it didn’t count</h2>
			<p>
				Portable memory has two roads: the <strong>packet</strong> (file, air-gap, chat) and the
				<strong>hosted namepoint</strong> (push / pull / sync). Convergent forget on only one road is
				a demo. On both, it’s a product.
			</p>
			<div class="terminal-block">
				<code># packet path (local soul):</code>
				<code>claude-fafm-sdk forget -f soul.fafm secret-id</code>
				<code>claude-fafm-sdk seal -f soul.fafm -o out.fafmp</code>
				<code># peer merges → forgotten stays forgotten</code>
			</div>
			<div class="terminal-block">
				<code># hosted path:</code>
				<code>claude-fafm-sdk forget -f soul.fafm secret-id</code>
				<code>claude-fafm-sdk push   # tombstones ride the YAML</code>
				<code>claude-fafm-sdk pull   # merge_souls — not additive re-add</code>
			</div>
			<p>
				If you still see a forgotten fact after pull, file a bug — that was the 1.5.0→1.5.1 gap, and
				it is closed on production PyPI.
			</p>
		</section>

		<section>
			<h2>Honesty bounds</h2>
			<ul>
				<li>
					<strong>Tombstone ≠ secure erase.</strong> Disk, backups, and logs can still hold bytes.
					We claim lattice convergence, not forensic destruction.
				</li>
				<li>
					<strong>Delete-wins on ties</strong> under Rule T — intentional; document it if your app
					wants “last writer wins including resurrection.”
				</li>
				<li>
					<strong>No automatic GC</strong> of the graveyard in 1.5 — debt is visible, not magical.
				</li>
				<li>
					<strong>1.4 provenance unchanged</strong> — optional Ed25519 stays opt-in; base path still
					zero-crypto.
				</li>
				<li>
					<strong>Grow/update-only is retired for delete</strong> — that bound from 1.1–1.4 is
					lifted here, on purpose, with evidence.
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
				<code>pip install claude-fafm-sdk==1.5.1</code>
			</div>
			<div class="terminal-block">
				<code># etch → forget → recall (ephemeral):</code>
				<code
					>uv run --with claude-fafm-sdk==1.5.1 python -c "from claude_fafm_sdk import Soul; s=Soul('@demo'); s.etch('never ship this', id='secret'); s.forget('secret'); print([f.id for f in s.facts])"</code
				>
			</div>
			<p>
				Release:
				<a
					href="https://github.com/Wolfe-Jam/claude-fafm-sdk/releases/tag/v1.5.1"
					target="_blank"
					rel="noopener">v1.5.1</a
				>
				· PyPI:
				<a href="https://pypi.org/project/claude-fafm-sdk/1.5.1/" target="_blank" rel="noopener"
					>claude-fafm-sdk 1.5.1</a
				>
			</p>
		</section>

		<section>
			<h2>The Numbers</h2>
			<ul>
				<li><strong>v1.5.1</strong> — production on PyPI (Forgettable Memory · both transports)</li>
				<li><strong>232 tests</strong> green · 2 skipped · dual-impl still green after oracle reopen</li>
				<li><strong>No 1.5.0 on prod</strong> — packet + hosted ship as one cut</li>
				<li>
					<strong>PyPI:</strong>
					<a href="https://pypi.org/project/claude-fafm-sdk/1.5.1/" target="_blank" rel="noopener"
						>claude-fafm-sdk 1.5.1</a
					>
				</li>
				<li>
					<strong>GitHub:</strong>
					<a
						href="https://github.com/Wolfe-Jam/claude-fafm-sdk/releases/tag/v1.5.1"
						target="_blank"
						rel="noopener">v1.5.1 release</a
					>
				</li>
			</ul>
		</section>

		<section>
			<h2>The arc — complete</h2>
			<p>
				<strong>Mergeable → Sendable → Provable → Verifiable → Forgettable.</strong>
			</p>
			<ul>
				<li>1.1 Mergeable Memory — souls join (CvRDT)</li>
				<li>1.2 Sendable Memory — SPK1 + CRC travel</li>
				<li>1.3 Provable Receipt — one-command stranger proof</li>
				<li>1.4 Verifiable Provenance — which key sealed it</li>
				<li>
					<strong>1.5 Forgettable Memory</strong> — tombstones · both transports · full stop on the
					volume
				</li>
			</ul>
			<p>
				Memory that grows, moves, proves, signs — and can finally
				<em>let go</em> without lying about the join. Championship engineering, volume car energy:
				you drive it every day; the track car still exists when you want F1.
			</p>
			<p>
				Nelly never forgets… unless you ask her to. And then the whole fleet agrees.
			</p>
		</section>

		<section class="share-section">
			<a href={xIntent} target="_blank" rel="noopener" class="share-btn">Post on X</a>
		</section>

		<section class="star-cta">
			<p>Portable memory that can forget for real. Star the SDK if it earns it.</p>
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
				Built with .faf + .fafm ☑️ Memory that moves, merges, sends, proves, signs — and forgets
				without resurrecting. 🏎️
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
