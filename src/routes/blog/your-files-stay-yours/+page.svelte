<script lang="ts">
	import { buildShareIntent } from '#lib/shareIntent.js';
	import NpmPkg from '#lib/NpmPkg.svelte';

	const shareText = `🏁 Just shipped: grok-faf-mcp v2.2.4 — The Instructions Edition

Your CLAUDE.md is yours. faf_sync writes next to it, never over it.

Hand-written files kept · refused files named · same writer as faf-cli

npx --yes grok-faf-mcp@2.2.4

Help guide what we build —
Comments · suggestions · shares welcome.`;
	const shareUrl = 'https://faf.one/blog/your-files-stay-yours';
	const xIntent = buildShareIntent({ text: shareText, url: shareUrl });
</script>

<svelte:head>
	<title>Your files stay yours - grok-faf-mcp v2.2.4 | FAF</title>
	<meta
		name="description"
		content="faf_sync keeps your hand-written files, writes the context files it names, and tells you what it couldn't write. grok-faf-mcp v2.2.4."
	/>
	<meta property="og:title" content="Your files stay yours - grok-faf-mcp v2.2.4" />
	<meta
		property="og:description"
		content="faf_sync keeps your hand-written files, writes the context files it names, and tells you what it couldn't write."
	/>
	<meta property="og:type" content="article" />
	<meta property="og:url" content="https://faf.one/blog/your-files-stay-yours" />
	<meta property="og:site_name" content=".faf Format Authority" />
	<meta property="og:image" content="https://faf.one/blog/your-files-stay-yours-hero.png" />
	<meta property="og:image:secure_url" content="https://faf.one/blog/your-files-stay-yours-hero.png" />
	<meta property="og:image:type" content="image/png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta
		property="og:image:alt"
		content="grok-faf-mcp v2.2.4: faf_sync keeps your hand-written files"
	/>
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@fafformat" />
	<meta name="twitter:creator" content="@wolfe_jam" />
	<meta name="twitter:title" content="Your files stay yours - grok-faf-mcp v2.2.4" />
	<meta
		name="twitter:description"
		content="faf_sync keeps your hand-written files, writes the context files it names, and tells you what it couldn't write."
	/>
	<meta name="twitter:image" content="https://faf.one/blog/your-files-stay-yours-hero.png" />
	<meta
		name="twitter:image:alt"
		content="grok-faf-mcp v2.2.4: faf_sync keeps your hand-written files"
	/>
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / Your files stay yours
		</div>
		<h1>Your files stay yours</h1>
		<p class="version-tag">grok-faf-mcp v2.2.4 · The Instructions Edition</p>
		<p class="subtitle">
			Your CLAUDE.md and .cursorrules hold your team's rules. faf now writes next to them, never over
			them.
		</p>
		<div class="meta">
			<time datetime="2026-11-05">November 5, 2026</time>
			<span class="separator">•</span>
			<span class="category release">Release</span>
		</div>
	</header>

	<div class="hero-image">
		<img
			src="/blog/your-files-stay-yours-hero.png"
			alt="grok-faf-mcp v2.2.4: faf_sync keeps your hand-written files"
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
					>faf_sync keeps your hand-written files, writes the context files it names, and tells you
					what it couldn't write.</strong
				>
			</p>
			<div class="lead plain-english">
				<p class="plain-label">In Plain English</p>
				<p>
					<strong>Old state.</strong> grok-faf-mcp had its own copy of the code that writes faf's
					block into your context files. In a few cases it replaced a whole hand-written file with
					the block, then replied that your content was preserved.
				</p>
				<p>
					<strong>Fix.</strong> It now writes through faf-cli's own writer, the one faf-cli,
					faf-mcp and claude-faf-mcp already use. faf replaces only the block it wrote, between its
					own marker lines. Everything else in the file is yours.
				</p>
				<p>
					<strong>New state.</strong> Run <code>faf_sync</code> any time. Your rules stay. A file faf
					can't safely write is left exactly as it was, and the reply names it and says why.
				</p>
			</div>
		</section>

		<section>
			<h2>What happened since The Instructions Edition</h2>
			<p>
				One blog, one arc. Last write-up was
				<a href="/blog/instructions-edition">The Instructions Edition</a> (v2.2.0). Short tour to
				today:
			</p>
			<ul>
				<li>
					<strong>2.2.1</strong> — one rule for project questions: read <code>project.faf</code>
					first.
				</li>
				<li><strong>2.2.2</strong> — cleanup: removes leftover two-way sync wording.</li>
				<li>
					<strong>2.2.3</strong> — <code>faf_write</code> can no longer overwrite the birth
					certificate or your context files.
				</li>
				<li>
					<strong>2.2.4</strong> — <code>faf_sync</code> keeps your hand-written files. This post.
				</li>
			</ul>
		</section>

		<section>
			<h2>Why it matters if you use Grok or Cursor</h2>
			<p>
				Your <code>CLAUDE.md</code>, <code>.cursorrules</code> and <code>.windsurfrules</code> are where
				your team writes down how the project works: never deploy on Friday, which tests to run, what
				not to touch. A context tool that can wipe those is worse than no context tool at all.
			</p>
			<ul>
				<li>
					<strong>Safe to run.</strong> Point your agent at <code>faf_sync</code> without checking
					your rules first.
				</li>
				<li>
					<strong>No surprises.</strong> If a file can't be written (not UTF-8, a link out of the
					project), you're told which one and why. The others still sync.
				</li>
				<li>
					<strong>Quiet git diffs.</strong> A repeat sync leaves the file byte-for-byte the same, so
					your history only shows real changes.
				</li>
			</ul>
		</section>

		<section>
			<h2>What 2.2.4 is</h2>
			<p>
				faf writes its block between two marker lines, <code>&lt;!-- faf:start --&gt;</code> and
				<code>&lt;!-- faf:end --&gt;</code>. The rule is simple: <strong
					>faf replaces only text it can prove it wrote.</strong
				> If the file has a matching pair of marker lines, only what's between them is updated. If it
				doesn't, faf puts its block on top and keeps everything else.
			</p>
			<p>
				That rule already lived in faf-cli. grok-faf-mcp now calls faf-cli's writer instead of
				keeping its own copy, so every FAF tool that writes your context files behaves the same way.
			</p>
			<div class="table-wrap">
				<table>
					<thead>
						<tr>
							<th>When your file…</th>
							<th>Before</th>
							<th>Now</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>starts with a line that looks like faf's</td>
							<td>the whole file was replaced</td>
							<td>block on top, every line kept, and the reply says why</td>
						</tr>
						<tr>
							<td>has a start marker but no end marker</td>
							<td>everything after it was cut</td>
							<td>nothing cut</td>
						</tr>
						<tr>
							<td>mentions the markers in its text</td>
							<td>the wrong part could be replaced</td>
							<td>only whole marker lines count</td>
						</tr>
						<tr>
							<td>isn't UTF-8, or links out of the project</td>
							<td>rewritten or written through</td>
							<td>left exactly as it was, named in the reply</td>
						</tr>
						<tr>
							<td>is one of several, and one is refused</td>
							<td>the sync stopped part way</td>
							<td>the others sync; the reply lists both</td>
						</tr>
					</tbody>
				</table>
			</div>
			<p>
				And <code>faf_sync</code> now writes the context files it names: the ones that exist
				(<code>CLAUDE.md</code>, <code>.cursorrules</code>, <code>.windsurfrules</code>,
				<code>.clinerules</code>), or <code>CLAUDE.md</code> when there are none. Before 2.2.4 it
				wrote none of them. One change to know about: in a project with no context files,
				<code>faf_sync</code> now creates <code>CLAUDE.md</code>.
			</p>
		</section>

		<section>
			<h2>How we got it right</h2>
			<ul>
				<li>
					An audit of the five FAF MCP servers found the problem, with exact reproductions.
				</li>
				<li>
					We fixed it once, as a master, and turned the audit's reproductions into 7 tests. All 7
					fail on 2.2.3 and pass on 2.2.4.
				</li>
				<li>
					Two independent reviews followed. Each found things to tidy (what the reply says, which
					files <code>faf_sync</code> really writes). All fixed before release.
				</li>
				<li>
					After publishing, we installed 2.2.4 from npm on a clean machine and ran the same cases
					through a real MCP client: 0 findings.
				</li>
			</ul>
			<p class="muted-note">Full suite on the release: 672 tests pass, 0 fail.</p>
		</section>

		<section>
			<h2>Not claimed</h2>
			<ul>
				<li>
					The hosted endpoint (<code>mcpaas.live/grok</code>) serves the scoring tools and writes no
					files. This fix is in the local package, the one that writes your files.
				</li>
				<li>
					<code>.cursorrules</code>, <code>.windsurfrules</code> and <code>.clinerules</code> keep
					the HTML-style markers they already have.
				</li>
				<li>
					<code>faf_sync</code> doesn't write <code>AGENTS.md</code> or <code>GEMINI.md</code>.
				</li>
			</ul>
		</section>

		<section>
			<h2>Try it</h2>
			<p><strong>Cursor</strong> (<code>.cursor/mcp.json</code>), or any IDE that runs a local MCP server:</p>
			<div class="terminal-block">
				<code>{`{ "mcpServers": { "grok-faf-mcp": { "command": "npx", "args": ["--yes", "grok-faf-mcp"] } } }`}</code>
			</div>
			<p><strong>Claude Code:</strong></p>
			<div class="terminal-block">
				<code>claude mcp add grok-faf-mcp -- npx --yes <NpmPkg name="grok-faf-mcp" version="2.2.4" /></code>
			</div>
			<p><strong>Grok</strong>, for scoring on a URL (<code>~/.grok/config.toml</code>):</p>
			<div class="terminal-block">
				<code>[mcp_servers.grok-faf-mcp]</code>
				<code>url = "https://mcpaas.live/grok/mcp/v1"</code>
			</div>
			<p class="muted-note">
				Then ask your agent to run <code>faf_sync</code>. Homebrew has it too:
				<code>brew install Wolfe-Jam/faf/grok-faf-mcp</code>.
			</p>
		</section>

		<section>
			<h2>Technical details</h2>
			<ul>
				<li><strong>Version:</strong> grok-faf-mcp 2.2.4 (November 5, 2026), The Instructions Edition</li>
				<li><strong>Where:</strong> npm · Homebrew · the MCP Registry</li>
				<li><strong>Writer:</strong> faf-cli's own (faf-cli ^8.5.0)</li>
				<li>
					<strong>Changes:</strong>
					<a href="https://github.com/Wolfe-Jam/grok-faf-mcp/pull/186" target="_blank" rel="noopener">#186</a>
					·
					<a href="https://github.com/Wolfe-Jam/grok-faf-mcp/pull/187" target="_blank" rel="noopener">#187</a>
					·
					<a href="https://github.com/Wolfe-Jam/grok-faf-mcp/pull/188" target="_blank" rel="noopener">#188</a>
					·
					<a href="https://github.com/Wolfe-Jam/grok-faf-mcp/releases/tag/v2.2.4" target="_blank" rel="noopener"
						>release notes</a
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
					href="https://github.com/Wolfe-Jam/grok-faf-mcp/issues/new"
					target="_blank"
					rel="noopener"
					class="feedback-btn secondary"
				>
					Tell us on GitHub
				</a>
			</div>
		</section>

		<section class="footer-note">
			<p>Built with .faf ☑️ faf writes next to your words, never over them.</p>
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
