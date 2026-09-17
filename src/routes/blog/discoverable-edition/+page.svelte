<!-- pubblog: Release. Spine copied from mcp-better-matching-client (gold). -->
<script lang="ts">
	import { buildShareIntent } from '$lib/shareIntent.js';
	import NpmPkg from '$lib/NpmPkg.svelte';

	const shareText = `🏁 Just shipped: faf-cli v7.16.1 — The Discoverable Edition

A card nobody can find is not a card.

The identifier we used to emit passed one spec's validator and failed the other's — a space inside a URN.
Now the catalog names who publishes it, and every row is keyed the way the specs say.

AI Catalog discoverable · ARD conformant · one primary key

npx faf-cli@7.16.1 --version

Help guide what we build —
Comments · suggestions · shares welcome.`;
	const shareUrl = 'https://faf.one/blog/discoverable-edition';
	const xIntent = buildShareIntent({ text: shareText, url: shareUrl });
</script>

<svelte:head>
	<title>The Discoverable Edition - faf-cli v7.16.1 | FAF</title>
	<meta
		name="description"
		content="A card nobody can find is not a card. faf cards now names who publishes your catalog, keys every row the way the specs say to, and writes the ARD manifest agent search engines read."
	/>
	<meta property="og:title" content="The Discoverable Edition - faf-cli v7.16.1" />
	<meta
		property="og:description"
		content="A card nobody can find is not a card. The catalog names its publisher, every row is keyed the way the specs say, and faf writes the ARD manifest."
	/>
	<meta property="og:type" content="article" />
	<meta property="og:url" content="https://faf.one/blog/discoverable-edition" />
	<meta property="og:site_name" content=".faf Format Authority" />
	<meta property="og:image" content="https://faf.one/blog/discoverable-edition-hero.png" />
	<meta property="og:image:secure_url" content="https://faf.one/blog/discoverable-edition-hero.png" />
	<meta property="og:image:type" content="image/png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:image:alt" content="The Discoverable Edition — faf-cli v7.16.1 · a card nobody can find is not a card" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@fafformat" />
	<meta name="twitter:creator" content="@wolfe_jam" />
	<meta name="twitter:title" content="The Discoverable Edition - faf-cli v7.16.1" />
	<meta
		name="twitter:description"
		content="A card nobody can find is not a card. The catalog names its publisher, every row is keyed the way the specs say, and faf writes the ARD manifest."
	/>
	<meta name="twitter:image" content="https://faf.one/blog/discoverable-edition-hero.png" />
	<meta name="twitter:image:alt" content="The Discoverable Edition — faf-cli v7.16.1 · a card nobody can find is not a card" />
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / The Discoverable Edition
		</div>
		<h1>The Discoverable Edition</h1>
		<p class="version-tag">faf-cli v7.16.1</p>
		<p class="subtitle">A card nobody can find is not a card.</p>
		<div class="meta">
			<time datetime="2026-09-16">September 16, 2026</time>
			<span class="separator">•</span>
			<span class="category release">Release</span>
		</div>
	</header>

	<div class="hero-image">
		<img
			src="/blog/discoverable-edition-hero.png"
			alt="The Discoverable Edition — faf-cli v7.16.1 · a card nobody can find is not a card"
			width="1200"
			height="630"
			loading="eager"
			decoding="async"
		/>
	</div>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> A card nobody can find is not a card. The catalog <code>faf cards</code> writes now names who publishes it, keys every row the way the specs say to, and can be written as the ARD manifest agent search engines read.
			</p>
			<div class="lead plain-english">
				<p class="plain-label">In Plain English</p>
				<p>
					<strong>Old state.</strong> You published a catalog of your agent's cards, and it was
					technically valid — but it never said who published it, and its row names were built from
					whatever your homepage happened to be. Search engines for agents either skipped it or
					filed it under the wrong owner.
				</p>
				<p>
					<strong>Fix.</strong> Name the publisher. Key every row off the domain your
					<code>.fafa</code> actually declares. Write the file the agent search engines come looking
					for.
				</p>
				<p>
					<strong>New state.</strong> The same command writes a catalog that reads as
					<em>discoverable</em>, with identifiers both specs accept.
				</p>
			</div>
			<div class="terminal-block">
				<code>npm install -g <NpmPkg name="faf-cli" version="7.16.1" /></code>
				<code>faf cards --target catalog,ard</code>
			</div>
		</section>

		<section>
			<h2>The receipt</h2>
			<p>
				This edition exists because of one line. Here is the identifier faf-cli used to emit for an
				agent whose short name was <code>Weather Bot</code>:
			</p>
			<div class="terminal-block">
				<code>urn:air:acme.example:a2a:Weather Bot</code>
			</div>
			<p>
				The AI Catalog validator accepts that. ARD's conformance tool rejects it outright — three
				errors, <em>"does not match RFC 8141 URN pattern"</em>. Same file, same line, two verdicts.
				A URN may not carry a space, and a display name is free text.
			</p>
			<p>
				It was also keyed to the wrong publisher: the host of your homepage, rather than the domain
				your <code>.fafa</code> declares. So a catalog could name one publisher at the top and file
				every row under another.
			</p>
			<p>
				Both are fixed, and both paths — the CLI and the library — now derive one identifier. An
				identifier is a catalog's primary key. It was worth fixing before anyone was holding a
				reference to it.
			</p>
		</section>

		<section>
			<h2>Naming who publishes</h2>
			<p>
				AI Catalog reads a catalog at Level 1 <em>minimal</em> until it names a host. With a host, it
				reads as Level 2 <em>discoverable</em>. <code>faf cards --target catalog</code> wrote the
				first; now it writes the second.
			</p>
			<p>
				<code>displayName</code> is the field that earns the level — and an empty one is
				<strong>invalid</strong>, not merely minimal. So a <code>.fafa</code> that names nobody gets
				no host at all: a minimal catalog that validates beats a discoverable one that doesn't.
			</p>
			<p>
				On a catalog you share with other publishers, <code>host</code> is the one key faf adds, and
				only when the catalog names none. A host already there is yours, and stays byte for byte.
			</p>
		</section>

		<section>
			<h2>Where the manifest actually lives</h2>
			<p>
				<code>faf cards --target ard</code> writes <code>/.well-known/ard.json</code> — the rows plus
				the search hints registries index on, read from your <code>.fafa</code>:
				<code>metadata.cards.keywords</code> become tags, <code>metadata.cards.examples</code> become
				representative queries.
			</p>
			<p>
				Choosing that path took reading both the spec and its tooling, because they disagree. The
				ARD prose still points at <code>/.well-known/ai-catalog.json</code>; ARD's own conformance
				CLI says a consumer <strong>MUST</strong> fetch <code>/.well-known/ard.json</code> and calls
				the other one the predecessor. The tool is newer than the document, so faf writes what
				consumers are told to fetch — and <code>--target catalog,ard</code> writes both.
			</p>
			<p>
				One more thing the tool taught us: a manifest with no representative queries is valid and
				unfindable, because the semantic index is built from that field. Rather than write a card
				nobody can find, <code>faf cards</code> now says so in one line and names the key to fill in.
			</p>
		</section>

		<section>
			<h2>Bounds</h2>
			<ul>
				<li>
					<strong>Specs move, and these two are early.</strong> ARD says "Proposal"; its prose and
					its conformance tool currently disagree about the well-known path. We wrote to the tool
					and said why.
				</li>
				<li>
					<strong>A schema URL upstream is missing.</strong> A Server Card carries a
					<code>$schema</code>, and the spec names one URL for it. That URL returns 404 today. We
					write it as the spec names it; it resolves when upstream publishes the file.
				</li>
				<li>
					<strong>Identifiers changed.</strong> If your <code>.fafa</code> declares a domain other
					than its homepage host, or its name was never a handle, your rows get different
					identifiers than 7.15 wrote. That is the fix, and it is a breaking one for anything
					holding the old key.
				</li>
				<li>
					<strong>Windows ships, Windows isn't gated.</strong> faf-cli runs on Windows and builds a
					Windows binary; there is no Windows job in CI, by a documented decision. A real pre-merge
					Windows gate is a tracked follow-up.
				</li>
			</ul>
		</section>

		<section>
			<h2>Try it</h2>
			<p><strong>Install:</strong></p>
			<div class="terminal-block">
				<code>npm install -g <NpmPkg name="faf-cli" version="7.16.1" /></code>
				<code>faf cards --check</code>
			</div>
			<p><strong>Try</strong> (no install):</p>
			<div class="terminal-block">
				<code>npx --yes <NpmPkg name="faf-cli" version="7.16.1" /> --version</code>
			</div>
			<p class="muted-note">
				<code>--check</code> prints the cards without writing them. Same CLI under the shorter name:
				<code>npm i -g <NpmPkg name="faf" version="7.16.1" /></code>. More:
				<a href="https://docs.faf.one/cards" target="_blank" rel="noopener">docs.faf.one/cards</a>
				·
				<a href="https://github.com/Wolfe-Jam/faf-cli/releases/tag/v7.16.1" target="_blank" rel="noopener">release notes</a>
				·
				<a href="https://github.com/Wolfe-Jam/faf-cli" target="_blank" rel="noopener">repo</a>.
			</p>
		</section>

		<section>
			<h2>Technical details</h2>
			<ul>
				<li><strong>Version:</strong> 7.16.1 (September 16, 2026)</li>
				<li><strong>Packages:</strong> <code>faf-cli</code> and <code>faf</code> (same bits) · Homebrew</li>
				<li><strong>New target:</strong> <code>faf cards --target ard</code> → <code>/.well-known/ard.json</code></li>
				<li><strong>Checked with:</strong> ai-catalog-cli v0.2.2 · ARD conformance CLI v0.9.1</li>
				<li><strong>Tests:</strong> 2050 passing</li>
			</ul>
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
			<p>Built with .faf ☑️ A card nobody can find is not a card. 🏎️</p>
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

	.version-tag {
		color: #1a1a1a;
		font-weight: 700;
		font-size: 1rem;
		margin: 0 0 0.5rem;
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
	.category.release {
		background: #00b8b8;
	}

	.hero-image {
		margin: 0 0 2.5rem;
		border-radius: 12px;
		overflow: hidden;
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
