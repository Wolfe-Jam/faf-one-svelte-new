<!-- Pack of Cards — the map post. Not a release: no version, no ticker, no JustShipped card.
     Category: Custom / INDUSTRY (black pill, white word). Light page, dark hero.
     Hero is rendered by card-evolution/render_hero.py from alignment.json — never hand-edited. -->
<script lang="ts">
	import { buildShareIntent } from '$lib/shareIntent.js';
	import NpmPkg from '$lib/NpmPkg.svelte';
	import ZoomImage from '$lib/components/ZoomImage.svelte';

	const shareText = `Five agent-card specs, drawn as one map.

A2A · MCP Server Card · AI Catalog · ARD · .fafa
Every spec lives in public git, so we read every version.

30 spec versions · 269 quotes, each checked at its commit
A2A was alone for 245 days

Help guide what we build —
Comments · suggestions welcome.`;
	const shareUrl = 'https://faf.one/blog/pack-of-cards';
	const xIntent = buildShareIntent({ text: shareText, url: shareUrl });
</script>

<svelte:head>
	<title>Pack of Cards - five agent-card specs, mapped | FAF</title>
	<meta
		name="description"
		content="Machines find an agent or a server through cards. Five specs, all in public git — read version by version and drawn as one map, after Harry Beck's Underground diagram."
	/>
	<meta property="og:title" content="Pack of Cards - five agent-card specs, mapped" />
	<meta
		property="og:description"
		content="Five specs, all in public git — read version by version and drawn as one map."
	/>
	<meta property="og:type" content="article" />
	<meta property="og:url" content="https://faf.one/blog/pack-of-cards" />
	<meta property="og:site_name" content=".faf Format Authority" />
	<meta property="og:image" content="https://faf.one/blog/pack-of-cards-hero.png" />
	<meta property="og:image:secure_url" content="https://faf.one/blog/pack-of-cards-hero.png" />
	<meta property="og:image:type" content="image/png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta
		property="og:image:alt"
		content="Five agent-card specs drawn as one map: A2A, MCP Server Card, AI Catalog, ARD and .fafa"
	/>
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@fafformat" />
	<meta name="twitter:creator" content="@wolfe_jam" />
	<meta name="twitter:title" content="Pack of Cards - five agent-card specs, mapped" />
	<meta
		name="twitter:description"
		content="Five specs, all in public git — read version by version and drawn as one map."
	/>
	<meta name="twitter:image" content="https://faf.one/blog/pack-of-cards-hero.png" />
	<meta
		name="twitter:image:alt"
		content="Five agent-card specs drawn as one map: A2A, MCP Server Card, AI Catalog, ARD and .fafa"
	/>
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / Pack of Cards
		</div>
		<h1>Pack of Cards</h1>
		<p class="subtitle">Five cards. One map.</p>
		<div class="meta">
			<time datetime="2026-09-21">September 21, 2026</time>
			<span class="separator">•</span>
			<span class="category custom">INDUSTRY</span>
		</div>
	</header>

	<ZoomImage
		src="/blog/pack-of-cards-hero.png"
		alt="Five agent-card specs drawn as one map: A2A, MCP Server Card, AI Catalog, ARD and .fafa"
		width={1200}
		height={630}
	/>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> Machines find an agent or a server through cards — small files they read.
				There are five that matter, every spec lives in public git, and we read every version and drew
				them as one map, after Harry Beck's Underground diagram.
				<a href="/pack-of-cards">See the map →</a>
			</p>
			<div class="lead plain-english">
				<p class="plain-label">In Plain English</p>
				<p><strong>Five cards.</strong> Five specs, all in public git.</p>
				<p>
					<strong>Eight choices.</strong> Every card picks a name field, an identity, a discovery path,
					a media type, an encoding, an extension point, a trust model and a versioning rule.
				</p>
				<p>
					<strong>One centre.</strong> The centre line is what most cards share. Distance is what only
					one card does.
				</p>
			</div>
		</section>

		<section>
			<h2>First, the one that is not a card</h2>
			<p>
				We followed the MCP Registry closely, so start there. <code>server.json</code> is the Registry
				entry — how a server gets published, rather than a card a server serves at its own door. It is
				not on the map, and it is the piece faf-cli writes today:
			</p>
			<div class="terminal-block">
				<code>faf cards --target registry</code>
			</div>
			<p>
				32,237 latest-version entries, counted page by page from the Registry API on 2026-09-15.
				Server Card Rev 1 borrowed its shape, which is where that line branches from.
			</p>
		</section>

		<section>
			<h2>Then the cards</h2>
			<p>Five. A2A Agent Card, MCP Server Card, AI Catalog, ARD and <code>.fafa</code>.</p>
			<p>
				A2A reached Released v1.0 and joined AAIF at Growth Stage on 2026-08-27 — the one other specs
				point at when they need to describe an agent and would rather not invent a card. AI Catalog is
				moving fastest: MCP's own MCP Catalog is evolving into it, and the spec turned over
				<code>#37</code> and <code>#77</code> five weeks apart. ARD says Proposal.
				<code>.fafa</code> is ours.
			</p>
			<p>They overlap, they disagree, and they are all in public git. So we read every version.</p>
		</section>

		<section>
			<h2>How to read it</h2>
			<p>Beck's 1933 diagram dropped geography and kept order. We did the same with time.</p>
			<p>
				Time runs west to east. Each card is a line. Each station is a spec change, spaced by order,
				not by calendar. A ring marks the day two cards start or stop sharing a choice.
			</p>
			<p>
				Two views. <strong>Protocol ↔ Envelope</strong> (the default): cards defined by one protocol
				sit above the centre, protocol-neutral envelopes below.
				<strong>Strict ↔ Loose</strong>: each card's required fields against the median.
			</p>
		</section>

		<section>
			<h2>What it shows</h2>
			<ul>
				<li>
					<strong>A2A opens alone.</strong> The map starts with A2A v0.2.0 in May 2025. Nothing to compare
					it with until MCP Server Card's first draft, SEP-2127, on January 21, 2026.
				</li>
				<li>
					<strong>Twins.</strong> On June 25, 2026, AI Catalog merged #37 and #36. With ARD v0.9 already
					on <code>urn:air</code>, the two met on the centre line.
				</li>
				<li>
					<strong>A step in.</strong> On July 20, MCP Server Card moved discovery to
					<code>/.well-known/ai-catalog.json</code>.
				</li>
				<li>
					<strong>The split.</strong> On August 26, ARD v0.91 took its own <code>ard.json</code>,
					JSON-LD and a trust manifest. The twins parted. AI Catalog moved that day with no spec change
					of its own. Distance is relative.
				</li>
				<li>
					<strong>Furthest out: <code>.fafa</code>.</strong> The only card with an IANA-registered media
					type, and the only one written in YAML. Registering moved it one step further out. Different,
					not wrong.
				</li>
			</ul>
		</section>

		<section>
			<h2>How it's built</h2>
			<p>
				30 spec versions. 269 quotes, each checked against its line at its commit. Every station links
				to the spec at that commit, and
				<a href="/pack-of-cards/register">every value links to the line it was quoted from</a>.
			</p>
			<p>
				We make <code>.fafa</code>. So the rules came first, and <code>.fafa</code> landed where the rules
				put it.
			</p>
			<p>
				The choice list is a judgement. A different list draws a different map. The quotes are public,
				so anyone can check it, or redraw it.
			</p>
		</section>

		<section>
			<h2>Some interesting facts</h2>
			<ul>
				<li>
					<strong>A2A was alone for 245 days.</strong> The first card landed on 2025-05-21. There was
					nothing to compare it with until 2026-01-21.
				</li>
				<li>
					<strong>Five cards, five different extension points.</strong> Of the eight choices we track,
					<code>extension</code> is the only one where no two cards agree.
				</li>
				<li><strong>A2A asks for eight required fields. AI Catalog asks for three.</strong></li>
				<li><strong>AI Catalog shipped eight versions in 141 days. A2A shipped six in 479.</strong></li>
			</ul>
		</section>

		<section>
			<h2>Three ways to name a card</h2>
			<p>A media type is the label a machine reads before it opens the file.</p>
			<p>None of these five specs requires one. They landed on three different answers.</p>
			<p><strong>A2A Agent Card and ARD name no media type.</strong></p>
			<p>
				<strong>
					AI Catalog uses <code>application/ai-catalog+json</code>. MCP Server Card uses
					<code>application/mcp-server-card+json</code>.
				</strong>
				Neither is registered.
			</p>
			<p>
				<strong>
					<code>.fafa</code> uses <code>application/vnd.fafa+yaml</code>, registered with IANA on
					2026-06-26.
				</strong>
			</p>
			<p class="muted-note">Every value above links to the line it was quoted from.</p>
		</section>

		<section>
			<h2>What it cost us to keep up</h2>
			<p>
				The map carries our own lane too, because keeping up is the hard part and we have not always
				managed it.
			</p>
			<p>
				AI Catalog merged <code>#37</code> on June 25. We conformed on June 26 — <strong>one day</strong>.
			</p>
			<p>
				AI Catalog merged <code>#77</code> on July 30, moving extensions to a map. We answered in
				<strong>three days</strong> and used an array. It stayed wrong for
				<strong>forty-five</strong>, and working group parsers rejected the document the whole time.
			</p>
			<p>Speed is not currency on its own. The check is.</p>
		</section>

		<section>
			<h2>Five, out of thirty-six</h2>
			<p>
				Five cards are drawn. We checked thirty-one more against one test: a public spec with git
				history, describing an agent or a server so machines can find it. Eight pass, seven are
				borderline, sixteen are out — each listed with the reason, on the page.
			</p>
			<p>
				A card that does not make the map is not a lesser card. It is a card that answers a different
				question.
			</p>
		</section>

		<section>
			<h2>Get your pack</h2>
			<p>
				Seven answers describe an agent or a server: name, short name, domain, what it does, version,
				where it runs, what it can do. From those, faf-cli writes the <code>.fafa</code> and projects
				every card that has a place for it — correct to each spec, checked by each spec's own validator.
			</p>
			<div class="terminal-block">
				<code>npx <NpmPkg name="faf-cli" version="latest" /> cards --target catalog,ard</code>
			</div>
			<p class="muted-note">
				<a href="/pack-of-cards">The map</a>
				·
				<a href="/pack-of-cards/register">the register</a>
				·
				<a href="https://docs.faf.one/cards" target="_blank" rel="noopener">how the cards work</a>
			</p>
		</section>

		<section class="feedback-invite">
			<h2>Feedback welcome</h2>
			<p>Questions, nits, suggestions — guide the next version. Tell us what you want to see.</p>
			<div class="feedback-actions">
				<a href={xIntent} target="_blank" rel="noopener" class="feedback-btn">Post on X</a>
				<a
					href="https://github.com/Wolfe-Jam/faf-cli/issues/new"
					target="_blank"
					rel="noopener"
					class="feedback-btn secondary"
				>
					Tell us on GitHub
				</a>
			</div>
		</section>

		<section class="footer-note">
			<p>Built with .faf ☑️ Five cards. One map. 🏎️</p>
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
		font-size: 2.4rem;
		font-weight: 800;
		margin: 0 0 0.5rem;
		color: #1a1a1a;
		letter-spacing: -0.02em;
	}

	.subtitle {
		font-size: 1.2rem;
		font-weight: 500;
		margin: 0 0 1rem;
		color: #1a1a1a;
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
	.category.custom {
		background: #1a1a1a;
		color: #fff;
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
	.post-content a {
		color: #ff6b35;
		font-weight: 600;
		text-decoration: none;
	}
	.post-content a:hover {
		text-decoration: underline;
	}

	.lead {
		font-size: 1.15rem;
		padding: 1.25rem 1.35rem;
		background: #f7f5f0;
		border-radius: 8px;
		border-left: 4px solid #ff6b35;
	}

	.intro .lead + .lead {
		margin-top: 1rem;
	}
	.lead .plain-label {
		margin: 0 0 0.85rem;
		font-size: 0.82rem;
		font-weight: 800;
		letter-spacing: 0.06em;
		text-transform: uppercase;
		color: #8b5a2b;
	}
	.plain-english p {
		margin: 0 0 0.85rem;
	}
	.plain-english p:last-child {
		margin-bottom: 0;
	}

	.post-content ul {
		padding-left: 1.2rem;
		margin: 0 0 1rem;
	}
	.post-content li {
		margin-bottom: 0.65rem;
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

	.muted-note {
		font-size: 0.9rem;
		color: #555;
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
		font-size: 0.95rem;
	}

	.feedback-invite {
		margin-top: 1rem;
		padding: 1.5rem 1.35rem;
		background: #f7f5f0;
		border-radius: 10px;
		border-left: 4px solid #00d4d4;
	}
	.feedback-invite h2 {
		margin-top: 0;
	}
	.feedback-invite p {
		margin-bottom: 1.15rem;
	}
	.feedback-actions {
		display: flex;
		flex-wrap: wrap;
		gap: 0.65rem;
	}
	.feedback-btn {
		display: inline-flex;
		align-items: center;
		padding: 0.65rem 1.2rem;
		border-radius: 6px;
		font-size: 0.92rem;
		font-weight: 700;
		text-decoration: none;
		background: #1a1a1a;
		color: #fff !important;
	}
	.feedback-btn:hover {
		background: #000;
		text-decoration: none !important;
	}
	.feedback-btn.secondary {
		background: transparent;
		color: #1a1a1a !important;
		border: 2px solid #1a1a1a;
	}
	.feedback-btn.secondary:hover {
		background: #1a1a1a;
		color: #fff !important;
		text-decoration: none !important;
	}

	.footer-note {
		margin-top: 2rem;
		padding-top: 1.5rem;
		border-top: 1px solid #e5e5e5;
		font-size: 0.95rem;
		color: #555;
	}
</style>
