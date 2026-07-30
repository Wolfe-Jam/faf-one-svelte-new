<script lang="ts">
	import { onMount } from 'svelte';
	import { buildShareIntent } from '$lib/shareIntent.js';
	let mounted = false;
	onMount(() => {
		mounted = true;
	});

	const shareText = `🏁 Just shipped: mcp-better v0.2.0 — BETTER textbook for 7/28

Built for MCP 2026-07-28. Honest surface. Discover + stamped tools/list.
stdio default · Streamable HTTP on the road.

cargo install mcp-better --version 0.2.0
# first install: deps once — one-time wait`;
	const shareUrl = 'https://faf.one/blog/mcp-better';
	const xIntent = buildShareIntent({ text: shareText, url: shareUrl });
</script>

<svelte:head>
	<title>mcp-better v0.2.0 — BETTER textbook for 7/28 | FAF</title>
	<meta
		name="description"
		content="mcp-better: AAIF-verified modern MCP textbook for protocol 2026-07-28 (7/28). Why it was built, what BETTER means, who it’s for, what’s next. Rust · rmcp 3 · crates.io + Registry."
	/>
	<meta property="og:title" content="mcp-better v0.2.0 — BETTER textbook for 7/28" />
	<meta
		property="og:description"
		content="Built for 7/28 — not bolted onto last year. Honest Discover surface. Who it’s for, what BETTER means, what’s next."
	/>
	<meta property="og:type" content="article" />
	<meta property="og:url" content="https://faf.one/blog/mcp-better" />
	<meta property="og:site_name" content=".faf Format Authority" />
	<meta property="og:image" content="https://faf.one/blog/mcp-better-hero.png?v=1" />
	<meta property="og:image:secure_url" content="https://faf.one/blog/mcp-better-hero.png?v=1" />
	<meta property="og:image:type" content="image/png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta
		property="og:image:alt"
		content="mcp-better v0.2.0 — BETTER textbook · built for 7/28 · MCP + AAIF"
	/>
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@fafformat" />
	<meta name="twitter:creator" content="@wolfe_jam" />
	<meta name="twitter:title" content="mcp-better v0.2.0 — BETTER textbook for 7/28" />
	<meta
		name="twitter:description"
		content="Rust · rmcp 3 · Discover · stamped tools/list. First cargo install compiles deps once — one-time wait."
	/>
	<meta name="twitter:image" content="https://faf.one/blog/mcp-better-hero.png?v=1" />
	<meta
		name="twitter:image:alt"
		content="mcp-better v0.2.0 — BETTER textbook · built for 7/28 · MCP + AAIF"
	/>
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / mcp-better
		</div>
		<h1>mcp-better</h1>
		<p class="version-tag">v0.2.0 · BETTER textbook · built for 7/28 · ✪</p>
		<p class="subtitle">
			A small real MCP server for protocol <strong>2026-07-28</strong> — honest surface, not a legacy
			bolt-on.
		</p>
		<div class="meta">
			<time datetime="2026-07-30">July 30, 2026</time>
			<span class="separator">•</span>
			<span class="category release">Release</span>
		</div>
	</header>

	<div class="hero-image">
		<img
			src="/blog/mcp-better-hero.png?v=1"
			alt="mcp-better v0.2.0 — BETTER textbook · built for 7/28. MCP and AAIF marks."
			width="1200"
			height="630"
			loading="eager"
			decoding="async"
		/>
	</div>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> <code>mcp-better</code> is live on
				<strong>crates.io</strong> and the <strong>MCP Registry</strong> —
				<code>io.github.Wolfe-Jam/mcp-better</code> @ <strong>0.2.0</strong>. A BETTER-tier textbook
				for the <strong>7/28</strong> model: Rust · <code>rmcp</code> 3 · Discover · stamped
				<code>tools/list</code>. Default <strong>stdio</strong>; v0.2 adds opt-in
				<strong>Streamable HTTP</strong> in the same era.
			</p>
			<div class="terminal-block">
				<code>cargo install mcp-better --version 0.2.0</code>
				<code>mcp-better --help</code>
			</div>
			<p class="install-note">
				First cargo install compiles the ecosystem once (not 100+ of our tools — just Rust deps).
				One-time wait; then you’re done.
			</p>
		</section>

		<section>
			<h2>What is 7/28?</h2>
			<p>
				<strong>7/28</strong> is the speakable era name for the modern MCP release. Humans say 7/28.
				Machines negotiate the protocol version string <code>2026-07-28</code> on the wire.
			</p>
			<table class="simple-table">
				<thead>
					<tr>
						<th>Name</th>
						<th>What it is</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td><strong>7/28</strong></td>
						<td>Era name — brandable, short, human</td>
					</tr>
					<tr>
						<td><strong>2026-07-28</strong></td>
						<td>Protocol version — the date string SDKs and clients negotiate</td>
					</tr>
				</tbody>
			</table>
			<p>
				That release is the largest update to MCP since launch: stateless remote servers, Discover
				lifecycle, list-cache stamps, and a path that doesn’t force every host through last year’s
				initialize cargo-cult. Building <em>for</em> 7/28 means your claims match what Discover and
				<code>tools/list</code> actually return — not a banner that says “modern” while the wire is
				still 2024-shaped.
			</p>
		</section>

		<section>
			<h2>Why this was built</h2>
			<p>
				When 7/28 landed, three paths showed up fast:
			</p>
			<ul>
				<li><strong>A — Wrap legacy.</strong> Slap a date on an old server. Ship vibes.</li>
				<li><strong>B — Wait.</strong> Let the ecosystem sort it out.</li>
				<li>
					<strong>C — Build real.</strong> Greenfield to the modern model, small enough to verify.
				</li>
			</ul>
			<p>
				We took <strong>C</strong>. Lessons from <strong>AAIF</strong> work (Agentic AI Foundation —
				discipline, honest claims, evidence over slogans) kept the surface tiny: two tools, stamped
				list, Discover-first smoke, CI that fails if purity or smokes break.
			</p>
			<p>
				Not a platform. Not a FAF product install. A <strong>textbook you can run</strong> so teams
				can learn 7/28 without inventing their own “good enough” server first.
			</p>
		</section>

		<section>
			<h2>What makes it BETTER?</h2>
			<p>The ladder is intentional:</p>
			<pre class="ladder">NONE  →  GOOD  →  [BETTER]  →  BEST
                         ▲
                      this repo</pre>
			<table class="simple-table">
				<thead>
					<tr>
						<th>Tier</th>
						<th>Meaning</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td><strong>NONE</strong></td>
						<td>No MCP / no agent-context discipline</td>
					</tr>
					<tr>
						<td><strong>GOOD</strong></td>
						<td>MCP works — often legacy initialize, unstamped lists, mixed protocol claims</td>
					</tr>
					<tr>
						<td><strong>BETTER</strong></td>
						<td>
							Modern MCP <em>honestly</em> built for 7/28 — Discover, stamped lists, claimed =
							tested
						</td>
					</tr>
					<tr>
						<td><strong>BEST</strong></td>
						<td>
							Persistent project DNA for agents —
							<a href="https://faf.one/agents">faf.one/agents</a> (one hop up)
						</td>
					</tr>
				</tbody>
			</table>
			<p><strong>BETTER means, concretely:</strong></p>
			<ol>
				<li>
					<strong>Protocol honesty</strong> — claim 7/28 / <code>2026-07-28</code> only for surfaces
					you implement and test.
				</li>
				<li>
					<strong>Discover-compatible</strong> — prefer Discover (or Auto → 7/28), not only legacy
					initialize.
				</li>
				<li>
					<strong>List cache stamps</strong> — <code>tools/list</code> returns positive
					<code>ttlMs</code> and <code>cacheScope</code> (static catalog → <code>public</code>). SDK
					defaults are often unstamped; we stamp on purpose.
				</li>
				<li>
					<strong>Stable tool order</strong> — same process, same order across N list calls.
				</li>
				<li>
					<strong>Transports in one era</strong> — stdio (default) and Streamable HTTP
					(<code>--http</code>) share the same 7/28 claim surface; HTTP is more road, not a new
					protocol era.
				</li>
				<li>
					<strong>BETTER purity</strong> — no <code>project.faf</code> tax on this repo’s main. It’s
					a protocol textbook, not a FAF install funnel.
				</li>
			</ol>
		</section>

		<section>
			<h2>Who is it for?</h2>
			<ul>
				<li>
					<strong>MCP builders</strong> learning 7/28 without forking a mega-server — copy the
					patterns (Discover, stamps, dual smoke).
				</li>
				<li>
					<strong>Host authors</strong> (Cursor, Claude Desktop, custom) who need a green stdio
					binary that negotiates modern protocol and returns an honest list.
				</li>
				<li>
					<strong>AAIF / ecosystem peers</strong> who want a small, Registry-listed cargo package
					with evidence bars (CI, smokes, SECURITY.md for HTTP).
				</li>
				<li>
					<strong>Teams teaching MCP</strong> — two tools (<code>health</code>, <code>echo</code>)
					is enough to demo lifecycle without drowning students in product scope.
				</li>
			</ul>
			<p>
				If you need persistent project context, multi-format DNA, and agent memory — that’s
				<strong>BEST</strong>, not this crate. Start at
				<a href="https://faf.one/agents">faf.one/agents</a>.
			</p>
		</section>

		<section>
			<h2>What’s in the box (0.1 → 0.2)</h2>
			<ul>
				<li>
					<strong>v0.1</strong> — 7/28 over <strong>stdio</strong>: Discover,
					<code>ttlMs=60000</code> / <code>cacheScope=public</code>, tools
					<code>health</code> + <code>echo</code>, CI + stdio smoke.
				</li>
				<li>
					<strong>v0.2</strong> — same era + <strong>Streamable HTTP</strong>
					(<code>--http</code>), <code>Mcp-Method</code> / <code>Mcp-Name</code> smoke, loopback Host
					guards, SECURITY.md threat posture (no auth/TLS — local demo only).
				</li>
				<li>
					<strong>Registry</strong> — package transport is <strong>stdio only by design</strong>
					(<code>cargo install</code> / host spawn). HTTP is opt-in local demo in the same binary.
				</li>
			</ul>
		</section>

		<section>
			<h2>What’s next</h2>
			<ul>
				<li>
					<strong>Keep the era honest</strong> — more road inside 7/28, not rebranding every
					transport as a new “protocol.”
				</li>
				<li>
					<strong>Harder smokes where they earn their keep</strong> — host matrix notes stay
					docs-grade; CI stays the ship bar.
				</li>
				<li>
					<strong>BEST remains one hop up</strong> — persistent context is not smuggled into the
					textbook.
				</li>
				<li>
					<strong>Feedback welcome</strong> — issues and stars if the textbook earns them.
				</li>
			</ul>
		</section>

		<section>
			<h2>Try it</h2>
			<div class="terminal-block">
				<code># install (crates.io)</code>
				<code>cargo install mcp-better --version 0.2.0</code>
				<code>mcp-better --help</code>
			</div>
			<p class="install-note">
				First cargo install compiles the ecosystem once (not 100+ of our tools — just Rust deps).
				One-time wait; then you’re done.
			</p>
			<div class="terminal-block">
				<code># optional local HTTP demo — no auth; loopback only</code>
				<code>mcp-better --http</code>
				<code># http://127.0.0.1:8787/mcp</code>
			</div>
			<div class="terminal-block">
				<code># from source — full ship bar</code>
				<code>git clone https://github.com/Wolfe-Jam/mcp-better.git</code>
				<code>cd mcp-better &amp;&amp; bash scripts/ci.sh</code>
			</div>
			<p>
				Release:
				<a
					href="https://github.com/Wolfe-Jam/mcp-better/releases/tag/v0.2.0"
					target="_blank"
					rel="noopener">v0.2.0</a
				>
				· crates:
				<a href="https://crates.io/crates/mcp-better" target="_blank" rel="noopener">mcp-better</a>
				· Registry: <code>io.github.Wolfe-Jam/mcp-better</code>
			</p>
		</section>

		<section>
			<h2>The numbers</h2>
			<ul>
				<li><strong>v0.2.0</strong> — crates.io + MCP Registry + GitHub Release</li>
				<li><strong>2 tools</strong> — <code>health</code>, <code>echo</code> (stable order)</li>
				<li><strong>2 smokes</strong> — stdio Discover · Streamable HTTP (list + health + echo)</li>
				<li><strong>Identity</strong> — <code>io.github.Wolfe-Jam/mcp-better</code> (cargo)</li>
				<li><strong>Purity</strong> — no <code>project.faf</code> on main</li>
			</ul>
		</section>

		<section class="share-section">
			<a href={xIntent} target="_blank" rel="noopener" class="share-btn">Post on X</a>
		</section>

		<section class="star-cta">
			<p>Small honest surface. Star it if the textbook earns it.</p>
			<a
				href="https://github.com/Wolfe-Jam/mcp-better"
				target="_blank"
				rel="noopener"
				class="star-btn"
			>
				Star mcp-better
			</a>
		</section>

		<section class="footer-note">
			<p>
				BETTER purity: no project.faf tax. Protocol textbook, not a FAF product install. Built for
				7/28. 🏎️
			</p>
		</section>
	</article>
</div>

<style>
	:global(body) {
		background: #fefcf8;
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

	.install-note {
		font-size: 0.95rem;
		color: #333;
		font-style: italic;
		margin: 0.5rem 0 1.25rem;
	}

	.ladder {
		background: #f0f0f0;
		border-radius: 8px;
		padding: 1rem 1.25rem;
		font-family: 'SF Mono', Menlo, monospace;
		font-size: 0.95rem;
		overflow-x: auto;
		margin: 0 0 1.25rem;
		color: #1a1a1a;
	}

	.simple-table {
		width: 100%;
		border-collapse: collapse;
		margin: 0 0 1.25rem;
		font-size: 0.95rem;
	}
	.simple-table th,
	.simple-table td {
		text-align: left;
		padding: 0.55rem 0.75rem;
		border-bottom: 1px solid #e5e5e5;
		color: #1a1a1a;
		vertical-align: top;
	}
	.simple-table th {
		font-weight: 700;
		background: #f5f5f5;
	}

	.post-content ul,
	.post-content ol {
		padding-left: 1.2rem;
		margin: 0 0 1rem;
	}
	.post-content li {
		margin-bottom: 0.5rem;
		color: #1a1a1a;
	}

	.post-content a {
		color: #00b8b8;
		font-weight: 600;
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
