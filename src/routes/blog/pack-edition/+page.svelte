<!-- pubblog: Release. Spine copied from mcp-better-matching-client (gold). -->
<script lang="ts">
	import { buildShareIntent } from '$lib/shareIntent.js';
	import NpmPkg from '$lib/NpmPkg.svelte';

	const shareText = `🏁 Just shipped: faf-cli v7.15.0 — The Pack Edition

Agents and MCP servers are found through cards. Keep three by hand and they disagree.

Answer a few questions; faf-cli writes the .fafa and projects every card from it.
Neutral by default — nothing of ours in your cards unless you ask.

A2A · MCP Server Card · registry server.json · AI Catalog · ARD

npx faf-cli@7.15.0 --version

Help guide what we build —
Comments · suggestions · shares welcome.`;
	const shareUrl = 'https://faf.one/blog/pack-edition';
	const xIntent = buildShareIntent({ text: shareText, url: shareUrl });
</script>

<svelte:head>
	<title>The Pack Edition - faf-cli v7.15.0 | FAF</title>
	<meta
		name="description"
		content="Answer a few questions about an agent or MCP server and get every card it needs: the A2A Agent Card, the MCP Server Card, the registry server.json, an AI Catalog and an ARD manifest."
	/>
	<meta property="og:title" content="The Pack Edition - faf-cli v7.15.0" />
	<meta
		property="og:description"
		content="Answers in. Every card out. One .fafa, written from your answers, projected onto every card that has a place for it."
	/>
	<meta property="og:type" content="article" />
	<meta property="og:url" content="https://faf.one/blog/pack-edition" />
	<meta property="og:site_name" content=".faf Format Authority" />
	<meta property="og:image" content="https://faf.one/blog/pack-edition-hero.png" />
	<meta property="og:image:secure_url" content="https://faf.one/blog/pack-edition-hero.png" />
	<meta property="og:image:type" content="image/png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:image:alt" content="The Pack Edition — faf-cli v7.15.0 · answers in, every card out" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@fafformat" />
	<meta name="twitter:creator" content="@wolfe_jam" />
	<meta name="twitter:title" content="The Pack Edition - faf-cli v7.15.0" />
	<meta
		name="twitter:description"
		content="Answers in. Every card out. One .fafa, written from your answers, projected onto every card that has a place for it."
	/>
	<meta name="twitter:image" content="https://faf.one/blog/pack-edition-hero.png" />
	<meta name="twitter:image:alt" content="The Pack Edition — faf-cli v7.15.0 · answers in, every card out" />
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / The Pack Edition
		</div>
		<h1>The Pack Edition</h1>
		<p class="version-tag">faf-cli v7.15.0</p>
		<p class="subtitle">Answers in. Every card out.</p>
		<div class="meta">
			<time datetime="2026-09-15">September 15, 2026</time>
			<span class="separator">•</span>
			<span class="category release">Release</span>
		</div>
	</header>

	<div class="hero-image">
		<img
			src="/blog/pack-edition-hero.png"
			alt="The Pack Edition — faf-cli v7.15.0 · answers in, every card out"
			width="1200"
			height="630"
			loading="eager"
			decoding="async"
		/>
	</div>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> Answer a few questions about an agent or MCP server and get every card it needs. faf-cli writes the <code>.fafa</code> from the answers and projects it onto the A2A Agent Card, the MCP Server Card, the MCP Registry <code>server.json</code>, an AI Catalog and an ARD manifest, in Node or in a browser.
			</p>
			<div class="lead plain-english">
				<p class="plain-label">In Plain English</p>
				<p>
					<strong>Old state.</strong> Agents and MCP servers are found through cards: small files
					other machines read. There are several, they overlap, and they ask the same things in
					different words. Keep three by hand and you get three that disagree.
				</p>
				<p>
					<strong>Fix.</strong> Answer a few questions once — name, short name, domain, what it does,
					version, where it runs, what it can do. faf-cli writes a <code>.fafa</code> from those
					answers and projects every card from that one file.
				</p>
				<p>
					<strong>New state.</strong> One source, every card. Your cards carry nothing of ours unless
					you ask for it.
				</p>
			</div>
			<div class="terminal-block">
				<code>npm install -g <NpmPkg name="faf-cli" version="7.15.0" /></code>
				<code>faf cards --target a2a,mcp,registry,catalog</code>
			</div>
		</section>

		<section>
			<h2>What 7.15.0 is</h2>
			<p>
				<strong>Lesson:</strong> the cards all describe the same thing; only the wording differs. So
				write the thing once and let the projector speak each dialect.
			</p>
			<p>
				<code>answersToFafa</code> turns a handful of answers into a <code>.fafa</code>.
				<code>buildPack</code> takes that file and writes the cards you asked for. Identifiers are
				built for you: a <code>urn:air</code> for the catalog and ARD, a reverse-DNS name for the MCP
				pair, and the well-known URLs each card is served from.
			</p>
			<div class="terminal-block">
				<code>import &#123; buildPack &#125; from 'faf-cli';</code>
				<code></code>
				<code>const pack = buildPack(answers, &#123; cards: ['a2a', 'server_card', 'ai_catalog'] &#125;);</code>
			</div>
			<p class="muted-note">
				The same projector runs in a browser: <code>import &#123; buildPack &#125; from
				'faf-cli/pack'</code> — one module, no Node built-ins, types included.
			</p>
		</section>

		<section>
			<h2>The cards it writes</h2>
			<ul>
				<li>
					<strong>A2A Agent Card</strong> — served at <code>/.well-known/agent-card.json</code>, how
					other agents find yours.
				</li>
				<li>
					<strong>MCP Server Card</strong> — describes a remote MCP server so clients can connect.
				</li>
				<li>
					<strong>MCP Registry <code>server.json</code></strong> — the registry's own entry.
					Publishing it stays your step.
				</li>
				<li>
					<strong>AI Catalog</strong> — one list of every card on your domain, at
					<code>/.well-known/ai-catalog.json</code>.
				</li>
				<li>
					<strong>ARD manifest</strong> — what agent search engines read from your domain.
				</li>
				<li>
					<strong>The <code>.fafa</code></strong> — the file the rest are built from. It is ours, it
					is IANA-registered, and you keep it.
				</li>
			</ul>
		</section>

		<section>
			<h2>Neutral by default</h2>
			<p>
				A card faf-cli writes for you carries no extension of ours and no FAF media type unless you
				pass one. The <code>.fafa</code> is listed in your catalog only if you ask for it. What you
				publish describes your agent, not our format.
			</p>
			<p>
				<code>faf cards</code> still adds FAF's context extension to FAF's own card — that path is
				unchanged, and the output is byte for byte what it was.
			</p>
		</section>

		<section>
			<h2>Bounds</h2>
			<ul>
				<li>
					<strong>Specs move, and two are early.</strong> The MCP Server Card says "Experimental";
					ARD says "Proposal". The cards are written to what those specs say today.
				</li>
				<li>
					<strong>Publishing is yours.</strong> We write the <code>server.json</code>; you publish it
					to the registry with the registry's own tooling.
				</li>
				<li>
					<strong>Some things can't map exactly.</strong> Identity and trust differ between cards,
					and the projector never invents what a spec doesn't define.
				</li>
				<li>
					<strong>A schema URL upstream is missing.</strong> A Server Card carries a
					<code>$schema</code>, and the spec names one URL for it. That URL returns 404 today. We
					write it as the spec names it; it resolves when upstream publishes the file.
				</li>
			</ul>
		</section>

		<section>
			<h2>Checked</h2>
			<p>
				Every card type is run through its own spec's validator before release: the AI Catalog CLI,
				ARD's conformance tool, and the published schemas for the Server Card, the registry
				<code>server.json</code> and the <code>.fafa</code>. Twenty-four files across eight
				situations, no failures. The suite is 2037 tests, green.
			</p>
		</section>

		<section>
			<h2>Try it</h2>
			<p><strong>Install:</strong></p>
			<div class="terminal-block">
				<code>npm install -g <NpmPkg name="faf-cli" version="7.15.0" /></code>
				<code>faf cards --check</code>
			</div>
			<p><strong>Try</strong> (no install):</p>
			<div class="terminal-block">
				<code>npx --yes <NpmPkg name="faf-cli" version="7.15.0" /> --version</code>
			</div>
			<p class="muted-note">
				<code>--check</code> prints the cards without writing them. Same CLI under the shorter name:
				<code>npm i -g <NpmPkg name="faf" version="7.15.0" /></code>. More:
				<a href="https://github.com/Wolfe-Jam/faf-cli/releases/tag/v7.15.0" target="_blank" rel="noopener">release notes</a>
				·
				<a href="https://github.com/Wolfe-Jam/faf-cli" target="_blank" rel="noopener">repo</a>.
			</p>
		</section>

		<section>
			<h2>Technical details</h2>
			<ul>
				<li><strong>Version:</strong> 7.15.0 (September 15, 2026)</li>
				<li><strong>Packages:</strong> <code>faf-cli</code> and <code>faf</code> (same bits) · Homebrew</li>
				<li>
					<strong>New exports:</strong> <code>answersToFafa</code> · <code>buildPack</code> ·
					<code>projectPack</code> · <code>projectA2ACard</code> · <code>projectServerCard</code> ·
					<code>projectServerJson</code> · <code>projectAiCatalog</code> · <code>projectArd</code>
				</li>
				<li><strong>Browser:</strong> <code>faf-cli/pack</code> — no Node built-ins, types included</li>
				<li><strong>Tests:</strong> 2037 passing</li>
				<li><strong>Unchanged:</strong> <code>faf cards</code> and <code>buildA2ACard</code> output</li>
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
			<p>Built with .faf ☑️ Answers in. Every card out. 🏎️</p>
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
