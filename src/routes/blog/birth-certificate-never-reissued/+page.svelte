<script lang="ts">
	import { buildShareIntent } from '#lib/shareIntent.js';
	import NpmPkg from '#lib/NpmPkg.svelte';

	const shareText = `🏁 Just shipped: faf-mcp v4.1.2 — The Instructions Edition

Your project's birth certificate is written once. Your agent can't rewrite it.

faf_write refuses .faf-dna, and asks before it overwrites your context files.
faf_dna won't issue a second one when git shows the first.

npx --yes faf-mcp@4.1.2

Help guide what we build —
Comments · suggestions · shares welcome.`;
	const shareUrl = 'https://faf.one/blog/birth-certificate-never-reissued';
	const xIntent = buildShareIntent({ text: shareText, url: shareUrl });
</script>

<svelte:head>
	<title>One birth certificate, never reissued - faf-mcp v4.1.2 | FAF</title>
	<meta
		name="description"
		content="faf_write can no longer overwrite the birth certificate or your context files, and faf_dna never issues a second one. faf-mcp v4.1.2."
	/>
	<meta property="og:title" content="One birth certificate, never reissued - faf-mcp v4.1.2" />
	<meta
		property="og:description"
		content="faf_write can no longer overwrite the birth certificate or your context files, and faf_dna never issues a second one."
	/>
	<meta property="og:type" content="article" />
	<meta property="og:url" content="https://faf.one/blog/birth-certificate-never-reissued" />
	<meta property="og:site_name" content=".faf Format Authority" />
	<meta property="og:image" content="https://faf.one/blog/birth-certificate-never-reissued-hero.png" />
	<meta property="og:image:secure_url" content="https://faf.one/blog/birth-certificate-never-reissued-hero.png" />
	<meta property="og:image:type" content="image/png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:image:alt" content="faf-mcp v4.1.2: One birth certificate. Never reissued." />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@fafformat" />
	<meta name="twitter:creator" content="@wolfe_jam" />
	<meta name="twitter:title" content="One birth certificate, never reissued - faf-mcp v4.1.2" />
	<meta
		name="twitter:description"
		content="faf_write can no longer overwrite the birth certificate or your context files, and faf_dna never issues a second one."
	/>
	<meta name="twitter:image" content="https://faf.one/blog/birth-certificate-never-reissued-hero.png" />
	<meta name="twitter:image:alt" content="faf-mcp v4.1.2: One birth certificate. Never reissued." />
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / One birth certificate, never reissued
		</div>
		<h1>One birth certificate, never reissued</h1>
		<p class="version-tag">faf-mcp v4.1.2 · The Instructions Edition</p>
		<p class="subtitle">
			<code>.faf-dna</code> records your project's honest first score. Now no tool call can rewrite it,
			and your context files are overwritten only when you ask.
		</p>
		<div class="meta">
			<time datetime="2026-11-05">November 5, 2026</time>
			<span class="separator">•</span>
			<span class="category release">Release</span>
		</div>
	</header>

	<div class="hero-image">
		<video
			src="/blog/birth-certificate-never-reissued-hero.mp4"
			poster="/blog/birth-certificate-never-reissued-hero.png"
			autoplay
			loop
			muted
			playsinline
			width="1200"
			height="630"
			aria-label="faf-mcp v4.1.2, The Instructions Edition: the card types in, One birth certificate. Never reissued."
		></video>
	</div>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> <strong
					>faf_write can no longer overwrite the birth certificate or your context files, and faf_dna
					never issues a second one.</strong
				>
			</p>
			<div class="lead plain-english">
				<p class="plain-label">In Plain English</p>
				<p>
					<strong>Old state.</strong> <code>faf_write</code> wrote any path it was given inside the
					project, with a plain overwrite. It could replace <code>.faf-dna</code>,
					<code>project.faf</code> or your <code>CLAUDE.md</code>, and reply OK. If
					<code>.faf-dna</code> was deleted, <code>faf_dna</code> issued a new one.
				</p>
				<p>
					<strong>Fix.</strong> <code>faf_write</code> refuses <code>.faf-dna</code> every time.
					Existing context files need <code>overwrite: true</code>. <code>faf_dna</code> creates the
					certificate once, and if git shows one existed, it tells you how to restore it instead of
					issuing another.
				</p>
				<p>
					<strong>New state.</strong> The birth certificate is written once. Your context files are
					overwritten only when you ask for it.
				</p>
			</div>
		</section>

		<section>
			<h2>What happened since The Instructions Edition</h2>
			<p>
				Last write-up was <a href="/blog/instructions-edition">The Instructions Edition</a> (v4.1.0).
				Short tour to today:
			</p>
			<ul>
				<li>
					<strong>4.1.1</strong> — one rule for project questions: read <code>project.faf</code> first.
				</li>
				<li>
					<strong>4.1.2</strong> — the birth certificate is written once, and your context files are
					overwritten only when you ask. This post.
				</li>
			</ul>
		</section>

		<section>
			<h2>Why it matters if you use Cursor, Windsurf or Claude Code</h2>
			<p>
				<code>.faf-dna</code> is written once, when the project is first scored: its honest
				starting point. Every later score is measured against it. A birth certificate an agent can rewrite proves
				nothing.
			</p>
			<ul>
				<li>
					<strong>Agents call tools freely.</strong> A write tool that can replace your
					<code>CLAUDE.md</code> without asking is a risk you shouldn't have to watch for.
				</li>
				<li>
					<strong>History stays true.</strong> If <code>.faf-dna</code> goes missing, git still has it.
					<code>faf_dna</code> points you there rather than starting a new history.
				</li>
			</ul>
		</section>

		<section>
			<h2>What 4.1.2 is</h2>
			<div class="table-wrap">
				<table>
					<thead>
						<tr>
							<th>When the agent asks for…</th>
							<th>Before</th>
							<th>Now</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td><code>faf_write</code> to <code>.faf-dna</code></td>
							<td>replaced, replied OK</td>
							<td>refused, with or without <code>overwrite: true</code>, by any spelling or link</td>
						</tr>
						<tr>
							<td><code>faf_write</code> over an existing <code>project.faf</code>, <code>*.faf</code>, <code>CLAUDE.md</code> or <code>AGENTS.md</code></td>
							<td>replaced</td>
							<td>refused unless it passes <code>overwrite: true</code></td>
						</tr>
						<tr>
							<td><code>faf_write</code> into <code>.git/</code> or outside the project</td>
							<td>written</td>
							<td>refused</td>
						</tr>
						<tr>
							<td><code>faf_dna</code> twice at the same moment</td>
							<td>two certificates reported</td>
							<td>exactly one created</td>
						</tr>
						<tr>
							<td><code>faf_dna</code> after <code>.faf-dna</code> was deleted</td>
							<td>a new one issued</td>
							<td>refused when git shows it existed, with the restore steps</td>
						</tr>
					</tbody>
				</table>
			</div>
			<p>The restore steps it prints, latest version first:</p>
			<div class="terminal-block">
				<code>git log --all --reflog --diff-filter=AM --oneline -- .faf-dna</code>
				<code>git checkout &lt;sha&gt; -- .faf-dna</code>
			</div>
			<p>
				It looks in every branch, the reflog, a stash, a linked worktree and a shared clone's source.
				If it can't read the history, it refuses rather than guess. New files and other files in the
				project write as before, and writes land in one step with file permissions kept.
			</p>
		</section>

		<section>
			<h2>How we got it right</h2>
			<ul>
				<li>An audit of the five FAF MCP servers found the problem, with exact reproductions.</li>
				<li>
					The fix was reviewed independently before merge, and each review's findings were fixed.
				</li>
				<li>
					After publishing, we installed 4.1.2 from npm on a clean machine and ran the cases by hand:
					<code>.faf-dna</code> refused and byte-for-byte unchanged, an existing
					<code>project.faf</code> refused, <code>.git/hooks</code> refused, a new file written, and a
					deleted-but-committed certificate refused with the restore steps.
				</li>
			</ul>
		</section>

		<section>
			<h2>Not claimed</h2>
			<ul>
				<li>
					<code>faf_write</code> and <code>faf_dna</code> are in the full tool set
					(<code>FAF_TOOLS=all</code>). Every tool stays callable by name either way.
				</li>
				<li>
					It doesn't stop you deleting <code>.faf-dna</code> by hand. Git keeps the record, and
					<code>faf_dna</code> points you to it.
				</li>
				<li>Other files in the project are written as before.</li>
			</ul>
		</section>

		<section>
			<h2>Try it</h2>
			<p><strong>Cursor</strong> (<code>.cursor/mcp.json</code>), or any IDE that runs a local MCP server:</p>
			<div class="terminal-block">
				<code>{`{ "mcpServers": { "faf-mcp": { "command": "npx", "args": ["--yes", "faf-mcp"], "env": { "FAF_TOOLS": "all" } } } }`}</code>
			</div>
			<p><strong>Claude Code:</strong></p>
			<div class="terminal-block">
				<code>claude mcp add faf-mcp -e FAF_TOOLS=all -- npx --yes <NpmPkg name="faf-mcp" version="4.1.2" /></code>
			</div>
			<p class="muted-note">
				<code>FAF_TOOLS=all</code> lists the full set, including <code>faf_write</code> and
				<code>faf_dna</code>. Without it you get the 15 core tools.
			</p>
		</section>

		<section>
			<h2>Technical details</h2>
			<ul>
				<li><strong>Version:</strong> faf-mcp 4.1.2 (November 5, 2026), The Instructions Edition</li>
				<li><strong>Where:</strong> npm · the MCP Registry</li>
				<li>
					<strong>Changes:</strong>
					<a href="https://github.com/Wolfe-Jam/faf-mcp/pull/110" target="_blank" rel="noopener">#110</a>
					·
					<a href="https://github.com/Wolfe-Jam/faf-mcp/pull/111" target="_blank" rel="noopener">#111</a>
					·
					<a href="https://github.com/Wolfe-Jam/faf-mcp/releases/tag/v4.1.2" target="_blank" rel="noopener"
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
					href="https://github.com/Wolfe-Jam/faf-mcp/issues/new"
					target="_blank"
					rel="noopener"
					class="feedback-btn secondary"
				>
					Tell us on GitHub
				</a>
			</div>
		</section>

		<section class="footer-note">
			<p>Built with .faf ☑️ Written once. Kept for good.</p>
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
