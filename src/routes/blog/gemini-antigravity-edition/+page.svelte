<script lang="ts">
	import { buildShareIntent } from '#lib/shareIntent.js';

	const shareText = `🏁 Just shipped: gemini-faf-mcp v3.3.0 — The Antigravity Edition 🚀

Gemini CLI moved to Antigravity CLI. Your project context comes with it.

Install it as a plugin and it works in your project. Simple.

agy plugin · /setup · reads and writes your project, not its own folder

agy plugin install https://github.com/Wolfe-Jam/gemini-faf-mcp

Help guide what we build —
Comments · suggestions · shares welcome.`;
	const shareUrl = 'https://faf.one/blog/gemini-antigravity-edition';
	const xIntent = buildShareIntent({ text: shareText, url: shareUrl });
</script>

<svelte:head>
	<title>The Antigravity Edition 🚀 - gemini-faf-mcp v3.3.0 | FAF</title>
	<meta
		name="description"
		content="3.3.0 brings gemini-faf-mcp to Antigravity CLI: install it as a plugin and it works in your project. Simple."
	/>
	<meta property="og:title" content="The Antigravity Edition 🚀 - gemini-faf-mcp v3.3.0" />
	<meta
		property="og:description"
		content="Install it as a plugin and it works in your project. Simple."
	/>
	<meta property="og:type" content="article" />
	<meta property="og:url" content="https://faf.one/blog/gemini-antigravity-edition" />
	<meta property="og:site_name" content=".faf Format Authority" />
	<meta property="og:image" content="https://faf.one/blog/gemini-antigravity-edition-hero.png" />
	<meta property="og:image:secure_url" content="https://faf.one/blog/gemini-antigravity-edition-hero.png" />
	<meta property="og:image:type" content="image/png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:image:alt" content="gemini-faf-mcp v3.3.0: Your project, in Antigravity." />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@fafformat" />
	<meta name="twitter:creator" content="@wolfe_jam" />
	<meta name="twitter:title" content="The Antigravity Edition 🚀 - gemini-faf-mcp v3.3.0" />
	<meta
		name="twitter:description"
		content="Install it as a plugin and it works in your project. Simple."
	/>
	<meta name="twitter:image" content="https://faf.one/blog/gemini-antigravity-edition-hero.png" />
	<meta name="twitter:image:alt" content="gemini-faf-mcp v3.3.0: Your project, in Antigravity." />
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / The Antigravity Edition 🚀
		</div>
		<h1>The Antigravity Edition 🚀</h1>
		<p class="version-tag">gemini-faf-mcp v3.3.0 · The Antigravity Edition 🚀</p>
		<p class="subtitle">
			Gemini CLI's successor is Antigravity CLI. gemini-faf-mcp now installs there as a plugin,
			and it reads and writes your project.
		</p>
		<div class="meta">
			<time datetime="2026-11-14">November 14, 2026</time>
			<span class="separator">•</span>
			<span class="category release">Release</span>
		</div>
	</header>

	<div class="hero-image">
		<video
			src="/blog/gemini-antigravity-edition-hero.mp4"
			poster="/blog/gemini-antigravity-edition-hero.png"
			autoplay
			loop
			muted
			playsinline
			width="1200"
			height="630"
			aria-label="gemini-faf-mcp v3.3.0, The Antigravity Edition: Your project, in Antigravity. A rocket lifts off."
		></video>
	</div>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> <strong
					>3.3.0 brings gemini-faf-mcp to Antigravity CLI: install it as a plugin and it works in
					your project. Simple.</strong
				>
			</p>
			<div class="lead plain-english">
				<p class="plain-label">In Plain English</p>
				<p>
					<strong>Old state.</strong> Google replaced Gemini CLI with Antigravity CLI
					(<code>agy</code>). gemini-faf-mcp was a Gemini CLI extension. Antigravity starts a
					plugin's server inside the plugin's own folder, so the server couldn't see your project.
				</p>
				<p>
					<strong>Fix.</strong> The plugin now starts the server so that it knows the folder you
					ran <code>agy</code> in, and works there.
				</p>
				<p>
					<strong>New state.</strong> One install command, then <code>/setup</code> in your project.
					It finds your <code>project.faf</code>, and writes to your project, never to its own
					folder.
				</p>
			</div>
		</section>

		<section>
			<h2>What happened since The Straight Answers Edition</h2>
			<p>
				Last edition was
				<a href="/blog/gemini-straight-answers-edition">The Straight Answers Edition, for Gemini</a>
				(v3.2.0). Short tour to today:
			</p>
			<ul>
				<li>
					<strong>3.2.1</strong> — installs as an Antigravity plugin, and
					<code>agy plugin import gemini</code> converts the old extension.
				</li>
				<li><strong>3.3.0</strong> — works in your project under Antigravity. This post.</li>
			</ul>
		</section>

		<section>
			<h2>Why it matters if you use Gemini</h2>
			<p>
				Gemini CLI is retired for individual users. If you move to Antigravity CLI, your project
				context should move with you: the same <code>project.faf</code>, the same tools, the same
				<code>/setup</code>, <code>/score</code> and <code>/export</code>.
			</p>
		</section>

		<section>
			<h2>What 3.3.0 is</h2>
			<div class="table-wrap">
				<table>
					<thead>
						<tr>
							<th>Under Antigravity CLI</th>
							<th>3.2.1</th>
							<th>3.3.0</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td><code>agy plugin install</code></td>
							<td>installs</td>
							<td>installs</td>
						</tr>
						<tr>
							<td>finding your <code>project.faf</code></td>
							<td>found the plugin's own file</td>
							<td>finds yours</td>
						</tr>
						<tr>
							<td>writing <code>project.faf</code>, <code>GEMINI.md</code></td>
							<td>went into the plugin's folder</td>
							<td>go into your project</td>
						</tr>
					</tbody>
				</table>
			</div>
			<ul>
				<li>
					<strong>Why 3.2.1 missed.</strong> 3.2.1 taught the server to find your project when it
					starts in its plugin folder. But the plugin launched it through a small shell script,
					and the shell hid which folder you were in. 3.3.0 starts Python directly.
				</li>
				<li>
					<strong>Safe to start anywhere.</strong> A <code>server.py</code> (or any module) in your
					project is never run in place of the server's own. Files are read and written as UTF-8
					on every platform. An older installed copy without the fix is never used.
				</li>
				<li>
					<strong>Never wider than your project.</strong> If <code>agy</code> is run from your home
					folder, the top of the disk or the plugin's own folders, the server stays put and writes
					are refused.
				</li>
			</ul>
		</section>

		<section>
			<h2>How we got it right</h2>
			<ul>
				<li>
					After 3.2.1 shipped, we installed it the way a new user would, and it didn't work in the
					project. That run is why 3.3.0 exists.
				</li>
				<li>
					The fix had two independent reviews, then a re-check of the review fixes. The reviewers
					planted fake <code>server.py</code> files and older installed copies to try to break
					it. Both said merge.
				</li>
				<li>
					The project detection behind it (3.2.1) had two reviews and four re-checks. They found
					real gaps, such as a home folder typed in a different case, and all were fixed.
				</li>
				<li>347 tests pass, 0 fail.</li>
				<li>
					After publishing, we installed the plugin from GitHub with the real <code>agy</code>:
					it found the project's <code>project.faf</code>, wrote <code>project.faf</code> and
					<code>GEMINI.md</code> into the project, and left its own folder untouched.
				</li>
			</ul>
		</section>

		<section>
			<h2>Not claimed</h2>
			<ul>
				<li>
					Windows was not tried. The server learns your folder from the shell's working-folder
					variable, which Windows shells usually don't set, so it may stay in its plugin folder
					there.
				</li>
				<li>
					A server you add by hand to Antigravity's <code>mcp_config.json</code> (not the plugin)
					was not tried.
				</li>
				<li>
					On an Intel Mac, the first start can take minutes: a dependency (cryptography) has no
					Intel Mac build, so it compiles once. Apple silicon, Linux and Windows don't.
				</li>
			</ul>
		</section>

		<section>
			<h2>Try it</h2>
			<p><strong>Antigravity CLI:</strong></p>
			<div class="terminal-block">
				<code>agy plugin install https://github.com/Wolfe-Jam/gemini-faf-mcp</code>
			</div>
			<p class="muted-note">
				Then run <code>/setup</code> in your project. Moving from Gemini CLI:
				<code>agy plugin import gemini</code>.
			</p>
			<p><strong>Any other MCP client</strong> that runs a local server:</p>
			<div class="terminal-block">
				<code>{`{ "mcpServers": { "gemini-faf": { "command": "uvx", "args": ["gemini-faf-mcp==3.3.0"] } } }`}</code>
			</div>
			<p><strong>Claude Code:</strong></p>
			<div class="terminal-block">
				<code>claude mcp add gemini-faf-mcp -- uvx gemini-faf-mcp==3.3.0</code>
			</div>
			<p class="muted-note">
				gemini-faf-mcp is an MCP server, so the model is your client's choice.
			</p>
		</section>

		<section>
			<h2>Technical details</h2>
			<ul>
				<li><strong>Version:</strong> gemini-faf-mcp 3.3.0 (November 14, 2026), The Antigravity Edition 🚀</li>
				<li><strong>Where:</strong> PyPI · the MCP Registry · GitHub (the plugin)</li>
				<li>
					<strong>Changes:</strong>
					<a href="https://github.com/Wolfe-Jam/gemini-faf-mcp/pull/49" target="_blank" rel="noopener">#49</a>
					·
					<a href="https://github.com/Wolfe-Jam/gemini-faf-mcp/pull/51" target="_blank" rel="noopener">#51</a>
					·
					<a href="https://github.com/Wolfe-Jam/gemini-faf-mcp/pull/53" target="_blank" rel="noopener">#53</a>
					·
					<a href="https://github.com/Wolfe-Jam/gemini-faf-mcp/releases/tag/v3.3.0" target="_blank" rel="noopener"
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
			<p>Built with .faf ☑️ Your project context, in Antigravity.</p>
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
