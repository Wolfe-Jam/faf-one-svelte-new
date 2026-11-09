<script lang="ts">
	import { buildShareIntent } from '#lib/shareIntent.js';

	const shareText = `🏁 Just shipped: gemini-faf-mcp v3.2.0 — The Straight Answers Edition

When a tool fails, it says so. Your client sees an error, not a quiet success.

isError on every failure · same reason text · /faf:setup checks before it creates

uvx gemini-faf-mcp==3.2.0

Help guide what we build —
Comments · suggestions · shares welcome.`;
	const shareUrl = 'https://faf.one/blog/gemini-straight-answers-edition';
	const xIntent = buildShareIntent({ text: shareText, url: shareUrl });
</script>

<svelte:head>
	<title>The Straight Answers Edition, for Gemini - gemini-faf-mcp v3.2.0 | FAF</title>
	<meta
		name="description"
		content="Every gemini-faf-mcp failure now reaches your client as an error: MCP's isError is set, the reason text is unchanged, and /faf:setup checks before it creates."
	/>
	<meta property="og:title" content="The Straight Answers Edition, for Gemini - gemini-faf-mcp v3.2.0" />
	<meta
		property="og:description"
		content="Every gemini-faf-mcp failure now reaches your client as an error, with the same reason text."
	/>
	<meta property="og:type" content="article" />
	<meta property="og:url" content="https://faf.one/blog/gemini-straight-answers-edition" />
	<meta property="og:site_name" content=".faf Format Authority" />
	<meta property="og:image" content="https://faf.one/blog/gemini-straight-answers-edition-hero.png" />
	<meta property="og:image:secure_url" content="https://faf.one/blog/gemini-straight-answers-edition-hero.png" />
	<meta property="og:image:type" content="image/png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:image:alt" content="gemini-faf-mcp v3.2.0: When a tool fails, it says so." />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@fafformat" />
	<meta name="twitter:creator" content="@wolfe_jam" />
	<meta name="twitter:title" content="The Straight Answers Edition, for Gemini - gemini-faf-mcp v3.2.0" />
	<meta
		name="twitter:description"
		content="Every gemini-faf-mcp failure now reaches your client as an error, with the same reason text."
	/>
	<meta name="twitter:image" content="https://faf.one/blog/gemini-straight-answers-edition-hero.png" />
	<meta name="twitter:image:alt" content="gemini-faf-mcp v3.2.0: When a tool fails, it says so." />
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / The Straight Answers Edition, for Gemini
		</div>
		<h1>The Straight Answers Edition, for Gemini</h1>
		<p class="version-tag">gemini-faf-mcp v3.2.0 · The Straight Answers Edition</p>
		<p class="subtitle">
			A missing file, a refused write, a file that isn't valid YAML: your client now sees each one
			as an error, with the same reason as before.
		</p>
		<div class="meta">
			<time datetime="2026-11-09">November 9, 2026</time>
			<span class="separator">•</span>
			<span class="category release">Release</span>
		</div>
	</header>

	<div class="hero-image">
		<video
			src="/blog/gemini-straight-answers-edition-hero.mp4"
			poster="/blog/gemini-straight-answers-edition-hero.png"
			autoplay
			loop
			muted
			playsinline
			width="1200"
			height="630"
			aria-label="gemini-faf-mcp v3.2.0, The Straight Answers Edition: the card types in, When a tool fails, it says so."
		></video>
	</div>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> <strong
					>Every gemini-faf-mcp failure now reaches your client as an error: MCP's isError is set,
					the reason text is unchanged, and /faf:setup checks before it creates.</strong
				>
			</p>
			<div class="lead plain-english">
				<p class="plain-label">In Plain English</p>
				<p>
					<strong>Old state.</strong> When a gemini-faf-mcp tool failed, it said so in its reply
					text, but the reply itself was marked as a success. A client that checks the success flag
					carried on as if nothing went wrong.
				</p>
				<p>
					<strong>Fix.</strong> Every failure now sets MCP's <code>isError</code> flag. The words
					in the reply are exactly the same; only the flag changes.
				</p>
				<p>
					<strong>New state.</strong> Gemini CLI, Antigravity or any MCP client can tell a result
					from a failure without reading the text. A success looks the same as before, byte for
					byte.
				</p>
			</div>
		</section>

		<section>
			<h2>What happened since The New Era Edition</h2>
			<p>
				Last edition was <a href="/blog/gemini-new-era-edition">The New Era Edition, for Gemini</a>
				(v3.1.0). Short tour to today:
			</p>
			<ul>
				<li>
					<strong>3.1.1</strong> — <code>--version</code> and <code>--help</code> answer and exit.
				</li>
				<li>
					<strong>3.1.2</strong> — <a href="/blog/gemini-md-stays-yours">your GEMINI.md stays yours</a>.
				</li>
				<li><strong>3.2.0</strong> — straight answers. This post.</li>
			</ul>
		</section>

		<section>
			<h2>Why it matters if you use Gemini CLI or Antigravity</h2>
			<p>
				Agents decide what to do next from the last tool's result. If a failed call is marked as a
				success, the agent can carry on with nothing, or report work that never happened. A clear
				error lets it stop, retry, or tell you.
			</p>
		</section>

		<section>
			<h2>What 3.2.0 is</h2>
			<div class="table-wrap">
				<table>
					<thead>
						<tr>
							<th>When…</th>
							<th>3.1.2</th>
							<th>3.2.0</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>a file is missing</td>
							<td>reason in the text, marked success</td>
							<td>same text, marked as an error</td>
						</tr>
						<tr>
							<td>a write is refused (not UTF-8, a link out of the project)</td>
							<td>reason in the text, marked success</td>
							<td>same text, marked as an error</td>
						</tr>
						<tr>
							<td>a path is outside the project</td>
							<td>reason in the text, marked success</td>
							<td>same text, marked as an error</td>
						</tr>
						<tr>
							<td><code>faf_score</code> gets a file that isn't valid YAML</td>
							<td>scored 0, no reason given</td>
							<td>an error: "Invalid YAML: …"</td>
						</tr>
						<tr>
							<td><code>faf_model</code> gets an unknown type</td>
							<td>reason in the text, marked success</td>
							<td>an error, with the list of types</td>
						</tr>
					</tbody>
				</table>
			</div>
			<ul>
				<li>
					<strong>"Valid YAML" means what faf-cli reads.</strong> <code>faf_score</code> checks the
					file with the same reader the score uses, so a file faf-cli scores is never called
					invalid. Duplicate keys and more than one document are errors; an empty file still scores
					0, White.
				</li>
				<li>
					<strong><code>/faf:setup</code> checks before it creates.</strong> It looks for a
					<code>project.faf</code> in this folder first and scores it; it only creates one when
					there is none. A file in a parent folder doesn't count.
				</li>
			</ul>
			<p>
				<strong>Heads up:</strong> Python scripts that call these tools through FastMCP's
				<code>Client.call_tool</code> now get a <code>ToolError</code> on a failure unless they pass
				<code>raise_on_error=False</code>. That's why this is 3.2.0, not a patch.
			</p>
		</section>

		<section>
			<h2>How we got it right</h2>
			<ul>
				<li>
					Two independent reviews, each in its own session: one in a cloud session, one on a local
					machine. Both ran the code. Then four re-checks of the fixes.
				</li>
				<li>
					The reviews found real gaps: two tools that reported failures in a different shape, and a
					first YAML check that disagreed with the scorer. All fixed before release.
				</li>
				<li>
					A 20-input table, run through a real MCP client: errors now match exactly what faf-cli
					can't read, and every other input scores as it did in 3.1.2.
				</li>
				<li>
					A server that marks every result as an error now fails over 100 tests, so a success that
					turns into an error can't slip through. 320 tests pass in CI.
				</li>
				<li>
					After publishing, we installed 3.2.0 from PyPI on a clean machine: 13 tools, all
					labelled, and a failing call comes back as an error.
				</li>
			</ul>
		</section>

		<section>
			<h2>Not claimed</h2>
			<ul>
				<li>
					How Gemini CLI shows an error result was not tried by hand. The reason text reaches the
					model either way.
				</li>
				<li>
					YAML that isn't a mapping (a list, a single value) still scores 0 in
					<code>faf_score</code>, as faf-cli scores it. <code>faf_read</code> and
					<code>faf_validate</code> reject it.
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
				<code>{`{ "mcpServers": { "gemini-faf": { "command": "uvx", "args": ["gemini-faf-mcp==3.2.0"] } } }`}</code>
			</div>
			<p><strong>Claude Code:</strong></p>
			<div class="terminal-block">
				<code>claude mcp add gemini-faf-mcp -- uvx gemini-faf-mcp==3.2.0</code>
			</div>
			<p class="muted-note">Then run <code>/faf:setup</code> in your project.</p>
		</section>

		<section>
			<h2>Technical details</h2>
			<ul>
				<li><strong>Version:</strong> gemini-faf-mcp 3.2.0 (November 9, 2026), The Straight Answers Edition</li>
				<li><strong>Where:</strong> PyPI · the MCP Registry</li>
				<li>
					<strong>Changes:</strong>
					<a href="https://github.com/Wolfe-Jam/gemini-faf-mcp/pull/47" target="_blank" rel="noopener">#47</a>
					·
					<a href="https://github.com/Wolfe-Jam/gemini-faf-mcp/releases/tag/v3.2.0" target="_blank" rel="noopener"
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
			<p>Built with .faf ☑️ A failure that looks like a failure.</p>
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
