<script lang="ts">
	import { buildShareIntent } from '#lib/shareIntent.js';
	import NpmPkg from '#lib/NpmPkg.svelte';

	const shareText = `🏁 Just shipped: faf-cli v8.3 — The Business Card Edition

Your repo's business card now says what the repo is.

A CLI or a library, from npm, PyPI or crates.io.
Only an MCP server gets MCP cards.

8.3.0 · 8.3.1 · 8.3.2 · 2222 tests

npx faf-cli card init

Help guide what we build —
Comments · suggestions · shares welcome.`;
	const shareUrl = 'https://faf.one/blog/business-card-edition';
	const xIntent = buildShareIntent({ text: shareText, url: shareUrl });
</script>

<svelte:head>
	<title>The Business Card Edition - faf-cli v8.3 | FAF</title>
	<meta
		name="description"
		content="Business cards say what the repo is: a package can be a CLI or a library, from npm, PyPI or crates.io, and only an MCP server gets MCP cards."
	/>
	<meta property="og:title" content="The Business Card Edition - faf-cli v8.3" />
	<meta
		property="og:description"
		content="A package can be a CLI or a library, from npm, PyPI or crates.io. Only an MCP server gets MCP cards."
	/>
	<meta property="og:type" content="article" />
	<meta property="og:url" content="https://faf.one/blog/business-card-edition" />
	<meta property="og:site_name" content=".faf Format Authority" />
	<meta property="og:image" content="https://faf.one/blog/business-card-edition-hero.png" />
	<meta property="og:image:secure_url" content="https://faf.one/blog/business-card-edition-hero.png" />
	<meta property="og:image:type" content="image/png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta
		property="og:image:alt"
		content="faf-cli v8.3, The Business Card Edition: your repo's card says what it is"
	/>
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@fafformat" />
	<meta name="twitter:creator" content="@wolfe_jam" />
	<meta name="twitter:title" content="The Business Card Edition - faf-cli v8.3" />
	<meta
		name="twitter:description"
		content="A package can be a CLI or a library, from npm, PyPI or crates.io. Only an MCP server gets MCP cards."
	/>
	<meta name="twitter:image" content="https://faf.one/blog/business-card-edition-hero.png" />
	<meta
		name="twitter:image:alt"
		content="faf-cli v8.3, The Business Card Edition: your repo's card says what it is"
	/>
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / The Business Card Edition
		</div>
		<h1>The Business Card Edition</h1>
		<p class="version-tag">faf-cli v8.3.2 · 8.3.0 · 8.3.1</p>
		<p class="subtitle">
			Business cards say what the repo is: a package can be a CLI or a library, from npm, PyPI or
			crates.io, and only an MCP server gets MCP cards.
		</p>
		<div class="meta">
			<time datetime="2026-10-17">October 17, 2026</time>
			<span class="separator">•</span>
			<span class="category release">Release</span>
		</div>
	</header>

	<div class="hero-image">
		<img
			src="/blog/business-card-edition-hero.png"
			alt="faf-cli v8.3, The Business Card Edition: your repo's card says what it is"
			width="1200"
			height="630"
			loading="eager"
			decoding="async"
		/>
	</div>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> <code>faf card init</code> now takes <code>--kind</code>
				(<code>mcp</code>, <code>cli</code> or <code>library</code>) and a registry prefix
				(<code>npm:</code>, <code>pypi:</code>, <code>crates:</code>). <code>faf cards</code> writes
				MCP cards only for an MCP server. Two patches since: 8.3.1 applies the same rule when there's
				only a project.faf, and 8.3.2 makes <code>faf check</code> warn about
				<code>key_files</code> paths that are gone.
			</p>
			<div class="lead plain-english">
				<p class="plain-label">In Plain English</p>
				<p>
					<strong>Old state.</strong> A repo's business card is a small file,
					<code>agent.fafa</code>, that says what the project is and where to get it. Until 8.3, the
					card assumed every package was an MCP server on npm. A Python library got a card claiming it
					was an MCP server.
				</p>
				<p>
					<strong>Fix.</strong> You say what the package is, and which registry it lives on. faf
					writes the cards that fit and skips the ones that don't, with one line saying why.
				</p>
				<p>
					<strong>New state.</strong> A CLI's card says CLI. A library's card says library. An MCP
					Server Card appears only for an MCP server.
				</p>
			</div>
			<div class="terminal-block">
				<code>npx --yes <NpmPkg name="faf-cli" version="8.3.2" /> card init</code>
			</div>
		</section>

		<section>
			<h2>What 8.3 is</h2>
			<p>
				We rolled the business card out to 14 of our own repos with 8.2.2. Some are MCP servers.
				Some are CLIs. Some are libraries on PyPI or crates.io. The card could only describe the
				first kind, so the rest came out wrong. 8.3 is what fixed it.
			</p>
			<figure class="card-pair">
				<div class="card-pair-grid">
					<img
						src="/blog/business-card-edition-faf-cli-card-light.png"
						alt="faf-cli's business card in light mode: CLI · v8.3.2, claimed, MIT"
						width="724"
						height="416"
						loading="lazy"
					/>
					<img
						src="/blog/business-card-edition-faf-cli-card-dark.png"
						alt="faf-cli's business card in dark mode: CLI · v8.3.2, claimed, MIT"
						width="724"
						height="416"
						loading="lazy"
					/>
				</div>
				<figcaption>
					faf-cli's own card, light and dark: a CLI, not an MCP server. Printed live from its
					agent.fafa by the
					<a
						href="https://wolfe-jam.github.io/agent-business-card/?repo=Wolfe-Jam/faf-cli"
						target="_blank"
						rel="noopener">business card viewer</a
					>.
				</figcaption>
			</figure>
			<ul>
				<li>
					<strong><code>--kind mcp|cli|library</code></strong> says what <code>--package</code> is.
					<code>mcp</code> stays the default, so <code>--package</code> alone writes what it did
					before.
				</li>
				<li>
					<strong>Registry prefixes:</strong> <code>npm:&lt;name&gt;</code>,
					<code>pypi:&lt;name&gt;</code>, <code>crates:&lt;name&gt;</code>. A bare name is still npm.
				</li>
				<li>
					<strong><code>--homepage &lt;url&gt;</code></strong> sets the card's homepage. Without it,
					it's <code>https://&lt;domain&gt;</code>.
				</li>
				<li>
					<strong><code>faf cards</code> writes MCP cards only for an MCP server.</strong> Everything
					else still gets its other cards, and one line says what was skipped.
				</li>
				<li>
					<strong><code>faf init</code> offers the card.</strong> When a project has none, init ends
					with a pointer to <code>faf card init</code>. It writes nothing for you.
				</li>
			</ul>
			<p>A Python library, from a clean folder:</p>
			<div class="terminal-block">
				<code>faf card init --name "Tiny Parser" --domain example.com \</code>
				<code>  --package pypi:tiny-parser --kind library ...</code>
				<code>faf cards</code>
				<code># skipped MCP Server Card and registry server.json: no mcp endpoint in agent.fafa</code>
				<code># ✓ .well-known/ai-catalog.json</code>
				<code># ✓ .well-known/ard.json</code>
			</div>
		</section>

		<section>
			<h2>Since 8.3.0</h2>
			<p>One post for the edition. The two patches since:</p>
			<ul>
				<li>
					<strong>8.3.1</strong> — <code>faf cards</code> gives MCP cards to a project.faf alone only
					when its type is mcp. We found it by installing 8.3.0 in a clean folder, the way a
					stranger would.
				</li>
				<li>
					<strong>8.3.2</strong> — <code>faf check</code> warns when a key_files path no longer
					exists. A deleted path is flagged; the file still passes, and the score doesn't change.
				</li>
			</ul>
			<div class="terminal-block">
				<code>faf check</code>
				<code>valid project.faf</code>
				<code>  ! key_files: crates/gone not found</code>
				<code>  ○ key_files: src/*.ts not checked (pattern)</code>
			</div>
		</section>

		<section>
			<h2>Try it</h2>
			<div class="terminal-block">
				<code>npx --yes <NpmPkg name="faf-cli" version="8.3.2" /> --version</code>
				<code>cd your-project</code>
				<code>npx --yes <NpmPkg name="faf-cli" version="8.3.2" /> card init</code>
				<code>npx --yes <NpmPkg name="faf-cli" version="8.3.2" /> cards</code>
			</div>
			<p class="muted-note">
				Or install it: <code>npm i -g <NpmPkg name="faf" version="8.3.2" /></code>, then
				<code>faf card init</code>. Homebrew has 8.3.2 too. See every card one repo can carry on
				<a href="/pack-of-cards">the pack of cards</a>, and view any GitHub repo's card with the
				<a href="https://wolfe-jam.github.io/agent-business-card/" target="_blank" rel="noopener"
					>business card viewer</a
				>.
			</p>
		</section>

		<section>
			<h2>Technical details</h2>
			<ul>
				<li><strong>Version:</strong> 8.3.2 (October 17, 2026). 8.3.0 and 8.3.1 shipped October 15.</li>
				<li><strong>Packages:</strong> <code>faf-cli</code> and <code>faf</code> on npm (same build) · Homebrew</li>
				<li><strong>Tests:</strong> 2222 passing</li>
				<li>
					<strong>Crates:</strong> recorded as <code>registryType: cargo</code>, the package-URL type
					for crates.io
				</li>
				<li>
					<strong>Notes:</strong>
					<a href="https://github.com/Wolfe-Jam/faf-cli/releases/tag/v8.3.0" target="_blank" rel="noopener">8.3.0</a>
					·
					<a href="https://github.com/Wolfe-Jam/faf-cli/releases/tag/v8.3.1" target="_blank" rel="noopener">8.3.1</a>
					·
					<a href="https://github.com/Wolfe-Jam/faf-cli/releases/tag/v8.3.2" target="_blank" rel="noopener">8.3.2</a>
				</li>
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
			<p>Built with .faf ☑️ The card says what the repo is. 🏎️</p>
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
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
		color: var(--faf-black);
	}

	.breadcrumb {
		font-size: 0.9rem;
		color: var(--faf-dark);
		margin-bottom: 1.5rem;
	}
	.breadcrumb a {
		color: var(--faf-cyan-text);
		text-decoration: none;
	}
	.breadcrumb a:hover {
		text-decoration: underline;
	}

	.post-header h1 {
		font-size: 2.6rem;
		margin: 0 0 0.5rem;
		color: var(--faf-black);
		letter-spacing: -0.02em;
	}

	.version-tag {
		color: var(--faf-black);
		font-weight: 700;
		font-size: 1rem;
		margin: 0 0 0.5rem;
	}

	.subtitle {
		font-size: 1.25rem;
		color: var(--faf-black);
		margin: 0 0 1rem;
		line-height: 1.5;
	}

	.meta {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		font-size: 0.9rem;
		color: var(--faf-dark);
		margin-bottom: 2.5rem;
	}
	.separator {
		color: var(--faf-dark);
	}
	.category {
		padding: 0.25rem 0.75rem;
		border-radius: 999px;
		font-size: 0.8rem;
		font-weight: 600;
		color: #fff; /* literal-ok: Release pill text, paired with its category bg */
	}
	.category.release {
		background: #00b8b8; /* literal-ok: Release category colour */
	}

	.hero-image {
		margin: -1rem -1rem 2rem -1rem;
		border-radius: 12px;
		overflow: hidden;
	}
	.hero-image img {
		width: 100%;
		height: auto;
		display: block;
	}

	/* The site-wide section rule adds 96px top and bottom; posts need none. */
	.post-content section {
		padding: 0;
		margin-bottom: 2.5rem;
	}

	.post-content h2 {
		font-size: 1.6rem;
		color: var(--faf-black);
		margin: 0 0 1rem;
		letter-spacing: -0.01em;
	}

	.post-content p {
		line-height: 1.75;
		margin: 0 0 1rem;
	}

	.post-content a {
		color: var(--faf-cyan-text);
	}

	.lead {
		font-size: 1.1rem;
		line-height: 1.8;
		background: var(--faf-surface);
		color: var(--faf-black);
		border-left: 4px solid #00b8b8; /* literal-ok: Release category accent border */
		padding: 1.25rem 1.5rem;
		border-radius: 0 8px 8px 0;
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
		color: var(--faf-black);
	}
	.plain-english p {
		margin: 0 0 0.85rem;
	}
	.plain-english p:last-child {
		margin-bottom: 0;
	}

	.post-content ul {
		line-height: 1.9;
		padding-left: 1.25rem;
	}

	.post-content code {
		padding: 0.12rem 0.4rem;
		border-radius: 4px;
		font-family: 'SF Mono', 'Fira Code', Menlo, monospace;
		font-size: 0.9em;
	}

	.terminal-block {
		background: var(--faf-solid-bg);
		border-radius: 8px;
		padding: 1.25rem 1.5rem;
		margin: 1.25rem 0;
		overflow-x: auto;
	}
	.terminal-block code {
		display: block;
		background: none;
		border: none; /* the site-wide code pill adds a hairline border */
		color: #00ff88; /* literal-ok: terminal-green inside the solid terminal block */
		font-size: 0.9rem;
		line-height: 1.7;
		padding: 0;
		white-space: pre;
	}

	.muted-note {
		font-size: 0.95rem;
		color: var(--faf-dark);
	}

	/* section-qualified: the post-wide `.post-content section { padding: 0 }` would win otherwise. */
	.post-content section.feedback-invite {
		margin-top: 1rem;
		padding: 1.5rem 1.35rem;
		background: var(--faf-section-alt);
		color: var(--faf-black);
		border-radius: 10px;
		border-left: 4px solid #00b8b8; /* literal-ok: Release category accent border */
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
	.post-content a.feedback-btn {
		display: inline-flex;
		align-items: center;
		padding: 0.65rem 1.2rem;
		border-radius: 6px;
		font-size: 0.92rem;
		font-weight: 700;
		text-decoration: none;
		background: var(--faf-solid-bg);
		color: var(--faf-solid-fg);
		border: 2px solid var(--faf-solid-bg);
	}
	.post-content a.feedback-btn:hover {
		opacity: 0.85;
	}
	.post-content a.feedback-btn.secondary {
		background: transparent;
		color: var(--faf-black);
		border: 2px solid var(--faf-black);
	}

	.post-content section.footer-note {
		text-align: center;
		color: var(--faf-dark);
		font-size: 0.95rem;
		border-top: 1px solid var(--faf-border);
		padding-top: 2rem;
	}

	@media (max-width: 600px) {
		.post-header h1 {
			font-size: 2rem;
		}
	}
	.card-pair {
		margin: 1.5rem 0 0;
	}
	.card-pair-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 0.75rem;
	}
	.card-pair img {
		display: block;
		width: 100%;
		height: auto;
		border-radius: 10px;
	}
	.card-pair figcaption {
		margin-top: 0.6rem;
		font-size: 0.9rem;
		color: var(--faf-dark);
	}
	.card-pair figcaption a {
		color: var(--faf-cyan-text);
	}
	@media (max-width: 600px) {
		.card-pair-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
