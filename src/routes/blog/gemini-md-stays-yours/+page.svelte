<script lang="ts">
	import { buildShareIntent } from '#lib/shareIntent.js';

	const shareText = `🏁 Just shipped: gemini-faf-mcp v3.1.2 — The New Era Edition

Your GEMINI.md is yours. faf writes its own block, never over your words.

Hand-written lines kept · refused files named · same rules as faf-cli

uvx gemini-faf-mcp==3.1.2

Help guide what we build —
Comments · suggestions · shares welcome.`;
	const shareUrl = 'https://faf.one/blog/gemini-md-stays-yours';
	const xIntent = buildShareIntent({ text: shareText, url: shareUrl });
</script>

<svelte:head>
	<title>Your GEMINI.md stays yours - gemini-faf-mcp v3.1.2 | FAF</title>
	<meta
		name="description"
		content="faf_gemini and faf_agents keep your hand-written GEMINI.md and AGENTS.md, and tell you what they couldn't write. gemini-faf-mcp v3.1.2."
	/>
	<meta property="og:title" content="Your GEMINI.md stays yours - gemini-faf-mcp v3.1.2" />
	<meta
		property="og:description"
		content="faf_gemini and faf_agents keep your hand-written GEMINI.md and AGENTS.md, and tell you what they couldn't write."
	/>
	<meta property="og:type" content="article" />
	<meta property="og:url" content="https://faf.one/blog/gemini-md-stays-yours" />
	<meta property="og:site_name" content=".faf Format Authority" />
	<meta property="og:image" content="https://faf.one/blog/gemini-md-stays-yours-hero.png" />
	<meta property="og:image:secure_url" content="https://faf.one/blog/gemini-md-stays-yours-hero.png" />
	<meta property="og:image:type" content="image/png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:image:alt" content="gemini-faf-mcp v3.1.2: Your GEMINI.md stays yours." />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@fafformat" />
	<meta name="twitter:creator" content="@wolfe_jam" />
	<meta name="twitter:title" content="Your GEMINI.md stays yours - gemini-faf-mcp v3.1.2" />
	<meta
		name="twitter:description"
		content="faf_gemini and faf_agents keep your hand-written GEMINI.md and AGENTS.md, and tell you what they couldn't write."
	/>
	<meta name="twitter:image" content="https://faf.one/blog/gemini-md-stays-yours-hero.png" />
	<meta name="twitter:image:alt" content="gemini-faf-mcp v3.1.2: Your GEMINI.md stays yours." />
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / Your GEMINI.md stays yours
		</div>
		<h1>Your GEMINI.md stays yours</h1>
		<p class="version-tag">gemini-faf-mcp v3.1.2 · The New Era Edition</p>
		<p class="subtitle">
			GEMINI.md and AGENTS.md hold how your project works. faf now writes next to your words, never
			over them.
		</p>
		<div class="meta">
			<time datetime="2026-11-05">November 5, 2026</time>
			<span class="separator">•</span>
			<span class="category release">Release</span>
		</div>
	</header>

	<div class="hero-image">
		<video
			src="/blog/gemini-md-stays-yours-hero.mp4"
			poster="/blog/gemini-md-stays-yours-hero.png"
			autoplay
			loop
			muted
			playsinline
			width="1200"
			height="630"
			aria-label="gemini-faf-mcp v3.1.2, The New Era Edition: the card types in, Your GEMINI.md stays yours."
		></video>
	</div>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> <strong
					>faf_gemini and faf_agents keep your hand-written GEMINI.md and AGENTS.md, and tell you what
					they couldn't write.</strong
				>
			</p>
			<div class="lead plain-english">
				<p class="plain-label">In Plain English</p>
				<p>
					<strong>Old state.</strong> gemini-faf-mcp had its own copy of the code that writes faf's
					block into GEMINI.md and AGENTS.md. In a few cases it cut hand-written lines, then replied
					"existing content preserved" either way.
				</p>
				<p>
					<strong>Fix.</strong> It now follows faf-cli's rules, the same ones faf-cli, faf-mcp,
					claude-faf-mcp and grok-faf-mcp use. faf replaces only the block between its own marker
					lines. Everything else in the file is yours.
				</p>
				<p>
					<strong>New state.</strong> Run <code>faf_gemini</code> or <code>faf_agents</code> any time.
					Your lines stay. A file faf can't safely write is left exactly as it was, and the reply says
					why.
				</p>
			</div>
		</section>

		<section>
			<h2>What happened since The New Era Edition</h2>
			<p>
				Last write-up was <a href="/blog/gemini-new-era-edition">The New Era Edition, for Gemini</a>
				(v3.1.0). Short tour to today:
			</p>
			<ul>
				<li>
					<strong>3.1.1</strong> — <code>gemini-faf-mcp --version</code> and <code>--help</code> answer
					and exit, instead of starting the server.
				</li>
				<li>
					<strong>3.1.2</strong> — <code>faf_gemini</code> and <code>faf_agents</code> keep your
					hand-written files. This post.
				</li>
			</ul>
		</section>

		<section>
			<h2>Why it matters if you use Gemini CLI or Antigravity</h2>
			<p>
				<code>GEMINI.md</code> is where you tell Gemini how your project works: which tests to run,
				what not to touch, how you like things done. <code>AGENTS.md</code> does the same for every
				other agent. A context tool that can cut those is worse than none.
			</p>
			<ul>
				<li>
					<strong>Safe to run.</strong> Ask Gemini to update the files without checking them first.
				</li>
				<li>
					<strong>No surprises.</strong> If a file can't be written, the reply says which one and why.
				</li>
				<li>
					<strong>Quiet git diffs.</strong> A second run leaves one faf block, so your history only
					shows real changes.
				</li>
			</ul>
		</section>

		<section>
			<h2>What 3.1.2 is</h2>
			<p>
				faf writes its block between two marker lines, <code>&lt;!-- faf:start --&gt;</code> and
				<code>&lt;!-- faf:end --&gt;</code>. <strong>faf replaces only text it can prove it wrote.</strong>
				A matching pair of marker lines means only what's between them is updated. Without one, faf
				puts its block on top and keeps everything else.
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
							<td>treated as faf's own, replaced</td>
							<td>never reclaimed; every line kept</td>
						</tr>
						<tr>
							<td>has a start marker but no end marker</td>
							<td>everything after it was cut</td>
							<td>nothing cut</td>
						</tr>
						<tr>
							<td>mentions the markers in its text or a code example</td>
							<td>the wrong part could be replaced</td>
							<td>only whole marker lines outside code count</td>
						</tr>
						<tr>
							<td>isn't UTF-8, or links out of the project</td>
							<td>rewritten or written through</td>
							<td>left exactly as it was; the reply says why</td>
						</tr>
					</tbody>
				</table>
			</div>
			<p>
				Writes land in one step, and keep the file's permissions, Windows line endings and a leading
				BOM. The <code>/faf:export</code> command no longer asks Gemini to write the files itself; the
				tools do it.
			</p>
		</section>

		<section>
			<h2>How we got it right</h2>
			<ul>
				<li>An audit of the five FAF MCP servers found the problem, with exact reproductions.</li>
				<li>
					We fixed it once, in faf-cli's rules, then ported those rules to Python with the audit's
					cases as tests. Independent reviews followed, and their findings were fixed before release.
				</li>
				<li>
					After publishing, we ran 3.1.2 from PyPI on a clean machine: a marker quoted in prose
					ignored, a second run idempotent, a non-UTF-8 file and a link out of the project both
					refused and left untouched. 0 findings.
				</li>
			</ul>
			<p class="muted-note">Full suite on the release: 308 tests pass, 0 fail.</p>
		</section>

		<section>
			<h2>Not claimed</h2>
			<ul>
				<li>
					A refusal comes back as <code>success: false</code> with the reason, like every gemini-faf-mcp
					error. It doesn't set MCP's <code>isError</code> flag.
				</li>
				<li>
					The fix is in the local package (<code>uvx</code>), the one that writes your files.
				</li>
			</ul>
		</section>

		<section>
			<h2>Try it</h2>
			<p><strong>Gemini CLI:</strong></p>
			<div class="terminal-block">
				<code>gemini extensions install https://github.com/Wolfe-Jam/gemini-faf-mcp</code>
			</div>
			<p><strong>Antigravity</strong>, or any client that runs a local MCP server:</p>
			<div class="terminal-block">
				<code>{`{ "mcpServers": { "gemini-faf": { "command": "uvx", "args": ["gemini-faf-mcp==3.1.2"] } } }`}</code>
			</div>
			<p><strong>Claude Code:</strong></p>
			<div class="terminal-block">
				<code>claude mcp add gemini-faf-mcp -- uvx gemini-faf-mcp==3.1.2</code>
			</div>
			<p class="muted-note">Then ask Gemini to run <code>faf_gemini</code> or <code>faf_agents</code>.</p>
		</section>

		<section>
			<h2>Technical details</h2>
			<ul>
				<li><strong>Version:</strong> gemini-faf-mcp 3.1.2 (November 5, 2026), The New Era Edition</li>
				<li><strong>Where:</strong> PyPI · the MCP Registry</li>
				<li>
					<strong>Changes:</strong>
					<a href="https://github.com/Wolfe-Jam/gemini-faf-mcp/pull/45" target="_blank" rel="noopener">#45</a>
					·
					<a href="https://github.com/Wolfe-Jam/gemini-faf-mcp/releases/tag/v3.1.2" target="_blank" rel="noopener"
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
					href="https://github.com/Wolfe-Jam/gemini-faf-mcp/issues/new"
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
