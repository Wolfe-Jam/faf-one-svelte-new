<script lang="ts">
	import { buildShareIntent } from '#lib/shareIntent.js';
	import NpmPkg from '#lib/NpmPkg.svelte';

	const shareText = `🏁 Just shipped: The Instructions Edition
claude-faf-mcp v7.1.0 · faf-mcp v4.1.0 · grok-faf-mcp v2.2.0

Each server now tells the model how its tools fit together.

Server instructions in initialize: 637 · 642 · 615 characters.
faf-cli 8.5.0 inside: a repo of SKILL.md folders reads as skills.

523 · 413 · 617 tests

claude mcp add claude-faf-mcp -- npx -y claude-faf-mcp@7.1.0

Help guide what we build —
Comments · suggestions welcome.`;
	const shareUrl = 'https://faf.one/blog/instructions-edition';
	const xIntent = buildShareIntent({ text: shareText, url: shareUrl });
</script>

<svelte:head>
	<title>The Instructions Edition - claude-faf-mcp v7.1.0 · faf-mcp v4.1.0 · grok-faf-mcp v2.2.0 | FAF</title>
	<meta
		name="description"
		content="Three FAF MCP servers now tell the model how their tools fit together: server instructions in initialize, plus faf-cli 8.5.0, which knows a skills repo when it sees one."
	/>
	<meta property="og:title" content="The Instructions Edition - three FAF MCP servers" />
	<meta
		property="og:description"
		content="Each server now tells the model how its tools fit together. Plus faf-cli 8.5.0, which knows a skills repo when it sees one."
	/>
	<meta property="og:type" content="article" />
	<meta property="og:url" content="https://faf.one/blog/instructions-edition" />
	<meta property="og:site_name" content=".faf Format Authority" />
	<meta property="og:image" content="https://faf.one/blog/instructions-edition-hero.png" />
	<meta property="og:image:secure_url" content="https://faf.one/blog/instructions-edition-hero.png" />
	<meta property="og:image:type" content="image/png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta
		property="og:image:alt"
		content="The Instructions Edition: claude-faf-mcp, faf-mcp and grok-faf-mcp tell the model how their tools fit together"
	/>
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@fafformat" />
	<meta name="twitter:creator" content="@wolfe_jam" />
	<meta name="twitter:title" content="The Instructions Edition - three FAF MCP servers" />
	<meta
		name="twitter:description"
		content="Each server now tells the model how its tools fit together. Plus faf-cli 8.5.0, which knows a skills repo when it sees one."
	/>
	<meta name="twitter:image" content="https://faf.one/blog/instructions-edition-hero.png" />
	<meta
		name="twitter:image:alt"
		content="The Instructions Edition: claude-faf-mcp, faf-mcp and grok-faf-mcp tell the model how their tools fit together"
	/>
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / The Instructions Edition
		</div>
		<h1>The Instructions Edition</h1>
		<p class="version-tag">claude-faf-mcp v7.1.0 · faf-mcp v4.1.0 · grok-faf-mcp v2.2.0</p>
		<p class="subtitle">
			Each tool already said what it does. Now each server says how the tools fit together.
		</p>
		<div class="meta">
			<time datetime="2026-10-28">October 28, 2026</time>
			<span class="separator">•</span>
			<span class="category release">Release</span>
		</div>
	</header>

	<div class="hero-image">
		<img
			src="/blog/instructions-edition-hero.png"
			alt="The Instructions Edition: claude-faf-mcp, faf-mcp and grok-faf-mcp tell the model how their tools fit together"
			width="1200"
			height="630"
			loading="eager"
			decoding="async"
		/>
	</div>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> <strong
					>Three FAF MCP servers now tell the model how their tools fit together: server
					instructions in <code>initialize</code>, plus faf-cli 8.5.0, which knows a skills repo when
					it sees one.</strong
				>
			</p>
			<div class="lead plain-english">
				<p class="plain-label">In Plain English</p>
				<p>
					<strong>Old state.</strong> Every tool had a description of what it does. Nothing said which
					tool to call first, or that the human facts in <code>project.faf</code> come from the user,
					not the model.
				</p>
				<p>
					<strong>Fix.</strong> MCP lets a server send <code>instructions</code> when a client
					connects. All three servers now send a short set: how the tools relate, and the rules
					between them.
				</p>
				<p>
					<strong>New state.</strong> A client that passes them on gives the model the map before
					its first call. And <code>faf_init</code> reads a skills repo as one.
				</p>
			</div>
		</section>

		<section>
			<h2>Three servers, one edition</h2>
			<div class="table-wrap">
				<table>
					<thead>
						<tr>
							<th>Server</th>
							<th>Instructions</th>
							<th>Tools</th>
							<th>Tests</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td><strong>claude-faf-mcp</strong> v7.1.0</td>
							<td>637 characters</td>
							<td>14</td>
							<td>523</td>
						</tr>
						<tr>
							<td><strong>faf-mcp</strong> v4.1.0</td>
							<td>642 characters</td>
							<td>15</td>
							<td>413</td>
						</tr>
						<tr>
							<td><strong>grok-faf-mcp</strong> v2.2.0</td>
							<td>615 characters</td>
							<td>12</td>
							<td>617</td>
						</tr>
					</tbody>
				</table>
			</div>
			<p class="muted-note">
				Lengths and tool counts were read from the published npm packages, on a clean machine, after
				release.
			</p>
		</section>

		<section>
			<h2>What the instructions say</h2>
			<ul>
				<li>
					<strong>claude-faf-mcp.</strong> One project at a time. Read <code>project.faf</code> first.
					The human slots come from the user, not invented. <code>project.faf</code> is the one-way
					source for <code>CLAUDE.md</code> and <code>MEMORY.md</code>. <code>faf_etch</code> only when
					asked.
				</li>
				<li>
					<strong>faf-mcp.</strong> One project at a time (<code>faf_context</code>). Start with
					<code>faf_doctor</code> or <code>faf_score</code>; <code>faf_auto</code> or
					<code>faf_git</code> when there is no <code>project.faf</code>. Human fields come from the
					user through <code>faf_go</code> or <code>faf_check</code>. <code>project.faf</code> is the
					source for <code>CLAUDE.md</code>, <code>AGENTS.md</code>, <code>.cursorrules</code> and
					<code>GEMINI.md</code>.
				</li>
				<li>
					<strong>grok-faf-mcp.</strong> Two jobs: context (<code>project.faf</code>) and memory
					(<code>.fafm</code>). Which tools serve each, <code>faf_get_orchestration_policy</code>
					before <code>faf_orchestrate_recommendation</code>, and <code>rag_query</code> needs an xAI
					Collection.
				</li>
			</ul>
			<p>
				Relationships and rules only. Each tool's own description still says what it does. Every
				server has a test that the instructions are sent, stay under 1,000 characters, and name only
				tools on its list.
			</p>
		</section>

		<section>
			<h2>Skills repos, through the tools</h2>
			<p>
				All three now run on faf-cli 8.5.0, <a href="/blog/agent-skills-edition"
					>The Agent Skills Edition</a
				>. Point <code>faf_init</code> (or <code>faf_auto</code>) at a repo:
			</p>
			<ul>
				<li><code>SKILL.md</code> folders make it <code>skills</code> (10 slots).</li>
				<li>Add <code>.claude-plugin/plugin.json</code> and it's <code>skills-plugin</code> (14 slots).</li>
				<li>A CLI or library that ships a skill keeps its type.</li>
			</ul>
			<p>
				faf-cli tests the detection itself. Each server adds a test that its own tool reaches it,
				over MCP.
			</p>
		</section>

		<section>
			<h2>Not claimed</h2>
			<ul>
				<li>
					Instructions are offered to the client. The client decides whether the model sees them.
				</li>
				<li>
					Detection reads files only: <code>SKILL.md</code> folders and
					<code>.claude-plugin/plugin.json</code>. It does not check that a skill is well written.
				</li>
			</ul>
		</section>

		<section>
			<h2>Try it</h2>
			<div class="terminal-block">
				<code>claude mcp add claude-faf-mcp -- npx --yes <NpmPkg name="claude-faf-mcp" version="7.1.0" /></code>
				<code>claude mcp add faf-mcp -- npx --yes <NpmPkg name="faf-mcp" version="4.1.0" /></code>
				<code>claude mcp add grok-faf-mcp -- npx --yes <NpmPkg name="grok-faf-mcp" version="2.2.0" /></code>
			</div>
			<p class="muted-note">
				Pick the one for your client. Each is a stdio MCP server: run on its own in a terminal, it
				waits silently for a client. Homebrew has all three:
				<code>brew install Wolfe-Jam/faf/claude-faf-mcp</code> (or <code>faf-mcp</code>,
				<code>grok-faf-mcp</code>).
			</p>
		</section>

		<section>
			<h2>Technical details</h2>
			<ul>
				<li><strong>Versions:</strong> claude-faf-mcp 7.1.0 · faf-mcp 4.1.0 · grok-faf-mcp 2.2.0</li>
				<li><strong>Where:</strong> npm · Homebrew · the MCP Registry</li>
				<li><strong>faf-cli:</strong> ^8.5.0 in all three (was ^8.0.0)</li>
				<li>
					<strong>Also fixed:</strong> MCP SDK 1.32.1 and hono 4.13.13 advisories; claude-faf-mcp's
					<code>--version</code> and <code>--help</code> now print and exit
				</li>
				<li>
					<strong>Notes:</strong>
					<a href="https://github.com/Wolfe-Jam/claude-faf-mcp/releases/tag/v7.1.0" target="_blank" rel="noopener"
						>claude-faf-mcp</a
					>
					·
					<a href="https://github.com/Wolfe-Jam/faf-mcp/releases/tag/v4.1.0" target="_blank" rel="noopener"
						>faf-mcp</a
					>
					·
					<a href="https://github.com/Wolfe-Jam/grok-faf-mcp/releases/tag/v2.2.0" target="_blank" rel="noopener"
						>grok-faf-mcp</a
					>
				</li>
			</ul>
		</section>

		<section class="feedback-invite">
			<h2>Feedback welcome</h2>
			<p>Questions, nits, suggestions — guide the next version. Tell us what you want to see.</p>
			<div class="feedback-actions">
				<a href={xIntent} target="_blank" rel="noopener" class="feedback-btn">Post on X</a>
				<a
					href="https://github.com/Wolfe-Jam/claude-faf-mcp/issues/new"
					target="_blank"
					rel="noopener"
					class="feedback-btn secondary"
				>
					Tell us on GitHub
				</a>
			</div>
		</section>

		<section class="footer-note">
			<p>Built with .faf ☑️ Each tool says what it does. Now the server says how they fit. 🏎️</p>
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

	.table-wrap {
		overflow-x: auto;
		margin: 0 0 1rem;
	}
	table {
		width: 100%;
		border-collapse: collapse;
		background: var(--faf-surface);
		color: var(--faf-black);
		font-size: 0.98rem;
	}
	th,
	td {
		text-align: left;
		padding: 0.6rem 0.85rem;
		border: 1px solid var(--faf-border);
	}
	th {
		background: var(--faf-section-alt);
		color: var(--faf-black);
		font-weight: 700;
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
</style>
