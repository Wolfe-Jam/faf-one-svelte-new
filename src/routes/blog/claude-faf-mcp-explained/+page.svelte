<script lang="ts">
	import { buildShareIntent } from '#lib/shareIntent.js';
	import NpmPkg from '#lib/NpmPkg.svelte';

	const shareText = `🏁 Just shipped: claude-faf-mcp v7.2.2

FAF defines. MD instructs. AI codes.

claude-faf-mcp keeps project.faf, your project's facts, and writes them into the CLAUDE.md Claude Code reads at the start of every session.

faf_init's force overwrite keeps a backup · Core 14 tools · .mcpb for Claude Desktop

claude mcp add faf -- npx -y claude-faf-mcp

Help guide what we build —
Comments · suggestions welcome.`;
	const shareUrl = 'https://faf.one/blog/claude-faf-mcp-explained';
	const xIntent = buildShareIntent({ text: shareText, url: shareUrl });
</script>

<svelte:head>
	<title>claude-faf-mcp, Explained - v7.2.2 | FAF</title>
	<meta
		name="description"
		content="claude-faf-mcp keeps project.faf, a small file of your project's facts, and writes it into CLAUDE.md so Claude starts each session knowing your project. 7.2.2: faf_init's force overwrite keeps its backup through faf-cli."
	/>
	<meta property="og:title" content="claude-faf-mcp, Explained - v7.2.2" />
	<meta
		property="og:description"
		content="FAF defines. MD instructs. AI codes. Where claude-faf-mcp sits between your project, CLAUDE.md and Claude."
	/>
	<meta property="og:type" content="article" />
	<meta property="og:url" content="https://faf.one/blog/claude-faf-mcp-explained" />
	<meta property="og:site_name" content=".faf Format Authority" />
	<meta property="og:image" content="https://faf.one/blog/claude-faf-mcp-explained-hero.png" />
	<meta property="og:image:secure_url" content="https://faf.one/blog/claude-faf-mcp-explained-hero.png" />
	<meta property="og:image:type" content="image/png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta
		property="og:image:alt"
		content="claude-faf-mcp v7.2.2: FAF defines. MD instructs. AI codes."
	/>
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@fafformat" />
	<meta name="twitter:creator" content="@wolfe_jam" />
	<meta name="twitter:title" content="claude-faf-mcp, Explained - v7.2.2" />
	<meta
		name="twitter:description"
		content="FAF defines. MD instructs. AI codes. Where claude-faf-mcp sits between your project, CLAUDE.md and Claude."
	/>
	<meta name="twitter:image" content="https://faf.one/blog/claude-faf-mcp-explained-hero.png" />
	<meta
		name="twitter:image:alt"
		content="claude-faf-mcp v7.2.2: FAF defines. MD instructs. AI codes."
	/>
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / claude-faf-mcp, Explained
		</div>
		<h1>claude-faf-mcp, Explained</h1>
		<p class="version-tag">claude-faf-mcp v7.2.2</p>
		<p class="subtitle">
			FAF defines. MD instructs. AI codes. What claude-faf-mcp does, where it sits, and what 7.2.2
			changes.
		</p>
		<div class="meta">
			<time datetime="2026-11-22">November 22, 2026</time>
			<span class="separator">•</span>
			<span class="category release">Release</span>
		</div>
	</header>

	<div class="hero-image">
		<video
			src="/blog/claude-faf-mcp-explained-hero.mp4"
			poster="/blog/claude-faf-mcp-explained-hero.png"
			autoplay
			loop
			muted
			playsinline
			width="1200"
			height="630"
			aria-label="claude-faf-mcp v7.2.2: FAF defines. MD instructs. AI codes."
		></video>
	</div>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> claude-faf-mcp keeps <code>project.faf</code>, a small file of your
				project's facts, and writes it into <code>CLAUDE.md</code>, so Claude starts each session
				knowing your project. <strong
					>7.2.2: <code>faf_init</code>'s force overwrite keeps its backup through faf-cli's own
					replace path (faf-cli ^8.10.1); the docs drop the unmeasured "30 seconds".</strong
				>
			</p>
			<div class="lead plain-english">
				<p class="plain-label">In Plain English</p>
				<p>
					<strong>The problem.</strong> Claude doesn't carry your project from one session to the
					next. Each new chat starts without it, so you explain the stack, the goal and the rules
					again.
				</p>
				<p>
					<strong>The fix.</strong> Write the facts down once, in one small file:
					<code>project.faf</code>. The repo supplies what it can (language, framework, build). You
					supply what only you know (the goal and the six W's: who, what, why, where, when, how).
				</p>
				<p>
					<strong>What claude-faf-mcp does.</strong> It runs inside Claude as an MCP server. It
					builds that file with you, scores it, and writes it into <code>CLAUDE.md</code>, the file
					Claude Code reads at the start of every session. Claude starts knowing your project.
				</p>
			</div>
		</section>

		<section>
			<h2>Where it sits</h2>
			<p>
				Three layers, one direction. claude-faf-mcp works on the first two, from inside Claude.
			</p>
			<div class="stack-diagram" role="img" aria-label="FAF defines: project.faf. MD instructs: CLAUDE.md, AGENTS.md and MEMORY.md. AI codes: Claude reads them. claude-faf-mcp runs inside Claude, builds project.faf and writes the MD files; faf-cli is its engine.">
				<div class="layers">
					<div class="layer">
						<p class="layer-step">1 · FAF defines</p>
						<p class="layer-file"><code>project.faf</code></p>
						<p class="layer-body">
							Your project's facts in YAML, IANA-registered. The stack from the repo; the goal and six W's
							from you. Scored 0–100%.
						</p>
					</div>
					<div class="arrow" aria-hidden="true">→</div>
					<div class="layer">
						<p class="layer-step">2 · MD instructs</p>
						<p class="layer-file"><code>CLAUDE.md</code></p>
						<p class="layer-body">
							A faf-managed block; the rest of the file stays yours. On request:
							<code>AGENTS.md</code>, <code>.cursorrules</code>, <code>GEMINI.md</code>,
							<code>copilot-instructions.md</code>, and Claude Code's <code>MEMORY.md</code>.
						</p>
					</div>
					<div class="arrow" aria-hidden="true">→</div>
					<div class="layer layer-ai">
						<p class="layer-step">3 · AI codes</p>
						<p class="layer-file">Claude</p>
						<p class="layer-body">
							Claude Code reads <code>CLAUDE.md</code> when a session starts. Other agents read
							<code>AGENTS.md</code>. In Claude Desktop, Claude reads <code>project.faf</code> through the
							server's tools.
						</p>
					</div>
				</div>
				<div class="span-bar">
					<p class="span-name">claude-faf-mcp</p>
					<p class="span-body">
						Runs inside Claude (MCP over stdio). Builds and scores <code>project.faf</code>
						(<code>faf_init</code>, <code>faf_auto</code>, <code>faf_go</code>, <code>faf_score</code>), then writes
						the MD files (<code>faf_sync</code>, <code>faf_tri_sync</code>).
					</p>
				</div>
				<div class="engine-bar">
					<p>
						<strong>Engine: faf-cli.</strong> Detection, scoring and every writer are faf-cli's own
						functions, loaded as a dependency. Same file, same score as <code>faf</code> in your
						terminal.
					</p>
				</div>
			</div>
		</section>

		<section>
			<h2>What it does, in 14 tools</h2>
			<p>A default install shows 14 tools; <code>FAF_TOOLS=all</code> shows 30.</p>
			<div class="tool-groups">
				<div class="tool-group">
					<p class="group-name">Build the file</p>
					<p>
						<code>faf_init</code> creates <code>project.faf</code>. <code>faf_auto</code> fills what the
						repo can tell. <code>faf_go</code> asks you the rest, one suggestion at a time, with its
						source.
					</p>
				</div>
				<div class="tool-group">
					<p class="group-name">Check it</p>
					<p>
						<code>faf_score</code> gives the score and tier. <code>faf_doctor</code> lists each empty
						slot and the tool that fills it. <code>faf_trust</code> attests it. <code>faf_bench</code>
						measures what the context is worth on this repo.
					</p>
				</div>
				<div class="tool-group">
					<p class="group-name">Hand it to Claude</p>
					<p>
						<code>faf_sync</code> writes <code>CLAUDE.md</code> (and other agent files on request).
						<code>faf_tri_sync</code> writes Claude Code's <code>MEMORY.md</code>.
						<code>faf_setup</code> installs a SessionStart hook for the project.
					</p>
				</div>
				<div class="tool-group">
					<p class="group-name">Remember</p>
					<p>
						<code>faf_etch</code> saves a decision or gotcha to the project's memory
						(<code>soul.fafm</code>). <code>faf_recall</code> reads it back.
					</p>
				</div>
				<div class="tool-group tool-group-wide">
					<p class="group-name">Find your way</p>
					<p>
						<code>faf_context</code> shows which project is active. <code>faf_about</code> explains the
						format.
					</p>
				</div>
			</div>
			<p class="muted-note">
				The goal and six W's are yours: Claude suggests them, and only what you confirm is written
				(<a href="/blog/claude-human-slots-edition">The Human Slots Edition</a>).
			</p>
		</section>

		<section>
			<h2>What 7.2.2 changes</h2>
			<ul>
				<li>
					<strong><code>faf_init</code> force overwrite uses faf-cli's replace backup.</strong>
					Overwriting a <code>project.faf</code> keeps the old one as
					<code>project.faf.bak-&lt;time&gt;</code>, written by faf-cli 8.10.1 and later. The copy
					this server made itself is gone, so there is one backup path, not two.
				</li>
				<li>
					<strong>Desktop extension:</strong> bundles <code>hono</code> 4.13.19 (was 4.13.13; the
					weekly npm audit fix). npm installs are unaffected.
				</li>
				<li>
					<strong>Docs:</strong> the unmeasured "30 seconds" is gone from the README and the Desktop
					extension description, which also drops "It never forgets" and aims its example prompt at
					Trophy (100%), not Gold. <code>TOOLS.md</code> shows every tool with a real call and its
					output.
				</li>
			</ul>
			<p>
				Checked after publishing: from the npm package, <code>faf_init</code> then
				<code>faf_init</code> with <code>force</code> replaced the file and left
				<code>project.faf.bak-2026-11-22T22-03-09-119Z</code> beside it.
			</p>
		</section>

		<section>
			<h2>Try it</h2>
			<div class="terminal-block">
				<code>claude mcp add faf -- npx -y claude-faf-mcp</code>
				<code>{`# or pinned:`}</code>
				<code>claude mcp add faf -- npx --yes <NpmPkg name="claude-faf-mcp" version="7.2.2" /></code>
			</div>
			<p class="muted-note">
				Claude Desktop, one click: open
				<a href="https://github.com/Wolfe-Jam/claude-faf-mcp/releases/download/v7.2.2/claude-faf-mcp-7.2.2.mcpb">claude-faf-mcp-7.2.2.mcpb</a>.
				Then pick the <code>faf</code> prompt, or ask Claude to run <code>faf_go</code>. A low score on
				a new project is normal: the goal and six W's are yours to confirm.
			</p>
		</section>

		<section>
			<h2>Technical details</h2>
			<ul>
				<li><strong>Version:</strong> 7.2.2 (November 22, 2026), a patch to 7.2</li>
				<li><strong>Tools:</strong> Core 14; 30 with <code>FAF_TOOLS=all</code></li>
				<li><strong>Built on:</strong> faf-cli ^8.10.1</li>
				<li><strong>Tests:</strong> 541 passing</li>
				<li><strong>MCP Registry:</strong> <code>one.faf/claude-faf-mcp</code></li>
				<li>
					<strong>Docs:</strong>
					<a href="https://docs.faf.one/claude-faf-mcp" target="_blank" rel="noopener">docs.faf.one/claude-faf-mcp</a>
				</li>
				<li>
					<strong>Notes:</strong>
					<a href="https://github.com/Wolfe-Jam/claude-faf-mcp/releases/tag/v7.2.2" target="_blank" rel="noopener">v7.2.2</a>
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
			<p>Built with .faf ☑️ FAF defines. MD instructs. AI codes. 🏎️</p>
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
	.hero-image video {
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

	/* Where it sits: three layers, the server's span, the engine. Stacks on phones. */
	.stack-diagram {
		background: var(--faf-section-alt);
		color: var(--faf-black);
		border: 1px solid var(--faf-border);
		border-radius: 12px;
		padding: 1.25rem;
	}
	.layers {
		display: grid;
		grid-template-columns: minmax(0, 1fr) auto minmax(0, 1fr) auto minmax(0, 1fr);
		gap: 0.6rem;
		align-items: stretch;
	}
	.layer {
		background: var(--faf-surface);
		color: var(--faf-black);
		border: 1px solid var(--faf-border);
		border-radius: 10px;
		padding: 0.9rem 0.95rem;
	}
	.layer code {
		overflow-wrap: anywhere;
	}
	.layer-ai {
		border: 2px solid var(--faf-orange);
	}
	.stack-diagram p {
		margin: 0;
		line-height: 1.5;
	}
	.layer-step {
		font-size: 0.78rem;
		font-weight: 800;
		letter-spacing: 0.06em;
		text-transform: uppercase;
	}
	.stack-diagram p.layer-file {
		font-size: 1.05rem;
		font-weight: 800;
		margin: 0.35rem 0 0.45rem;
	}
	.layer-body {
		font-size: 0.88rem;
		color: var(--faf-dark);
	}
	.arrow {
		align-self: center;
		font-size: 1.4rem;
		font-weight: 800;
		color: var(--faf-orange);
	}
	.span-bar {
		margin-top: 0.75rem;
		background: var(--faf-solid-bg);
		color: var(--faf-solid-fg);
		border-radius: 10px;
		padding: 0.85rem 1rem;
		/* spans layers 1 and 2: the server works on those two */
		width: calc(66% + 0.3rem);
	}
	.stack-diagram p.span-name {
		font-family: 'SF Mono', 'Fira Code', Menlo, monospace;
		font-weight: 800;
		color: var(--faf-solid-fg);
		margin-bottom: 0.3rem;
	}
	.span-body {
		font-size: 0.88rem;
	}
	/* two classes deep: `.post-content code` (padding 0.4rem) comes later and would win */
	.stack-diagram .span-bar code {
		color: var(--faf-solid-fg);
		background: none;
		border: none;
		padding: 0;
		margin: 0;
	}
	.engine-bar {
		margin-top: 0.6rem;
		background: var(--faf-surface);
		color: var(--faf-black);
		border: 1px dashed var(--faf-border);
		border-radius: 10px;
		padding: 0.75rem 1rem;
		font-size: 0.88rem;
	}

	.tool-groups {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 0.75rem;
		margin: 0 0 1rem;
	}
	.tool-group {
		background: var(--faf-surface);
		color: var(--faf-black);
		border: 1px solid var(--faf-border);
		border-radius: 10px;
		padding: 0.9rem 1rem;
	}
	.tool-group p {
		margin: 0;
		font-size: 0.95rem;
		line-height: 1.6;
	}
	.tool-group-wide {
		grid-column: 1 / -1;
	}
	.tool-group .group-name {
		font-weight: 800;
		margin-bottom: 0.35rem;
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

	@media (max-width: 700px) {
		.layers {
			grid-template-columns: 1fr;
		}
		.arrow {
			justify-self: center;
			transform: rotate(90deg);
		}
		.span-bar {
			width: auto;
		}
		.tool-groups {
			grid-template-columns: 1fr;
		}
	}

	@media (max-width: 600px) {
		.post-header h1 {
			font-size: 2rem;
		}
	}
</style>
