<!-- pubblog Release — faf-python-sdk v2.0.0 + mcpaas.live v1.8, The Always33 Edition.
     Part V of the Always33 series (overview: /blog/always33). Chrome copied from gemini-grok-always33-edition. -->
<script lang="ts">
	import { buildShareIntent } from '#lib/shareIntent.js';

	const shareText = `🏁 Just shipped: faf-python-sdk v2 + mcpaas.live v1.8 — The Always33 Edition

Beyond JavaScript, out to the edge.

The same score in Python and on mcpaas.live.
Python matches the kernel on 845 of 845 test files.

PyPI · hosted MCP for Claude, Grok and IDEs · README badges

pip install faf-python-sdk

Help guide what we build —
Comments · suggestions · shares welcome.`;
	const shareUrl = 'https://faf.one/blog/python-edge-always33-edition';
	const xIntent = buildShareIntent({ text: shareText, url: shareUrl });
</script>

<svelte:head>
	<title>The Always33 Edition - faf-python-sdk v2 · mcpaas.live v1.8 | FAF</title>
	<meta
		name="description"
		content="Beyond JavaScript, out to the edge. faf-python-sdk v2 and mcpaas.live v1.8 give the same always-33 score as faf-cli, in Python and on the hosted edge."
	/>
	<meta property="og:title" content="The Always33 Edition - faf-python-sdk v2 · mcpaas.live v1.8" />
	<meta
		property="og:description"
		content="Beyond JavaScript, out to the edge. The same score in Python and on mcpaas.live."
	/>
	<meta property="og:type" content="article" />
	<meta property="og:url" content="https://faf.one/blog/python-edge-always33-edition" />
	<meta property="og:site_name" content=".faf Format Authority" />
	<meta property="og:image" content="https://faf.one/blog/python-edge-always33-edition-hero.png" />
	<meta
		property="og:image:secure_url"
		content="https://faf.one/blog/python-edge-always33-edition-hero.png"
	/>
	<meta property="og:image:type" content="image/png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta
		property="og:image:alt"
		content="faf-python-sdk v2 and mcpaas.live v1.8, The Always33 Edition: beyond JavaScript, out to the edge. The same score in Python and on mcpaas.live."
	/>
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@fafformat" />
	<meta name="twitter:creator" content="@wolfe_jam" />
	<meta
		name="twitter:title"
		content="The Always33 Edition - faf-python-sdk v2 · mcpaas.live v1.8"
	/>
	<meta
		name="twitter:description"
		content="Beyond JavaScript, out to the edge. The same score in Python and on mcpaas.live."
	/>
	<meta
		name="twitter:image"
		content="https://faf.one/blog/python-edge-always33-edition-hero.png"
	/>
	<meta
		name="twitter:image:alt"
		content="faf-python-sdk v2 and mcpaas.live v1.8, The Always33 Edition: beyond JavaScript, out to the edge. The same score in Python and on mcpaas.live."
	/>
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / faf-python-sdk v2 · mcpaas.live v1.8
		</div>
		<h1>The Always33 Edition</h1>
		<p class="version-tag">faf-python-sdk v2.0.0 · mcpaas.live v1.8 · Always33 series, Part V</p>
		<p class="subtitle">Beyond JavaScript, out to the edge. The same score in Python and on mcpaas.live.</p>
		<div class="meta">
			<time datetime="2026-09-30">September 30, 2026</time>
			<span class="separator">•</span>
			<span class="category release">Release</span>
		</div>
	</header>

	<div class="hero-image">
		<img
			src="/blog/python-edge-always33-edition-hero.png"
			alt="faf-python-sdk v2 and mcpaas.live v1.8, The Always33 Edition: beyond JavaScript, out to the edge. The same score in Python and on mcpaas.live."
			width="1200"
			height="630"
			loading="eager"
			decoding="async"
		/>
	</div>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> faf-python-sdk v2 returns the kernel's score in pure Python, and
				mcpaas.live v1.8 scores every hosted route with the kernel. Python apps and the edge now
				give your file the same number as faf-cli. Upgrading? Run <code>faf auto</code> once and
				your score is back.
			</p>
			<div class="lead plain-english">
				<p class="plain-label">In Plain English</p>
				<p>
					<strong>Old state.</strong> The Python SDK and the hosted server each had their own
					scorer. On 80 FAF repos, the hosted one matched always-33 on only 47.
				</p>
				<p>
					<strong>Fix.</strong> Python matches the kernel file for file, and the edge runs the
					kernel itself. Slots that are not applicable to a project are marked
					<code>slotignored</code>, and do not score.
				</p>
				<p>
					<strong>New state.</strong> The same score in Python, on the hosted MCP routes, on
					README badges, and in every other FAF tool.
				</p>
			</div>
			<p><strong>Python:</strong></p>
			<div class="terminal-block">
				<code>pip install faf-python-sdk</code>
			</div>
			<p><strong>The edge:</strong> point an MCP client at a hosted route, with nothing to install:</p>
			<div class="terminal-block">
				<code>https://mcpaas.live/claude/mcp/v1</code>
				<code>https://mcpaas.live/grok/mcp/v1</code>
			</div>
			<p class="muted-note">
				Or <code>uv add faf-python-sdk</code>. On claude.ai, add the Claude route as a custom
				connector (Settings → Connectors, no sign-in), as in
				<a href="/blog/claude-always33-edition">Part II</a>.
			</p>
		</section>

		<section>
			<h2>Where this fits</h2>
			<p>
				This is Part V of the Always33 series. Part I was
				<a href="/blog/always33-edition">faf-cli v8</a>, where the engine was authored. Then
				<a href="/blog/claude-always33-edition">claude-faf-mcp v7</a>,
				<a href="/blog/faf-mcp-always33-edition">faf-mcp v4</a> and
				<a href="/blog/gemini-grok-always33-edition">gemini-faf-mcp v3 and grok-faf-mcp v2</a>. Part V
				takes the same number past JavaScript and off your machine. The overview is
				<a href="/blog/always33">The Always33 Suite</a>.
			</p>
		</section>

		<section>
			<h2>faf-python-sdk v2</h2>
			<p>
				<strong>The kernel's number, in pure Python.</strong> <code>score_faf(yaml)</code> returns
				what faf-kernel returns, on every file. A parity test checks the score, tier, counts and
				every slot state against the kernel's own answers: <strong>845 of 845</strong> files match,
				from real <code>project.faf</code> files to deliberately awkward YAML.
			</p>
			<div class="terminal-block">
				<code>from faf_sdk import score_faf</code>
				<code>result = score_faf(open("project.faf").read())</code>
				<code>print(result.score, result.tier)</code>
			</div>
			<ul>
				<li>
					<strong>Always 33 slots.</strong> A file with the 21 base slots filled and no markers
					scores 64%. The same file plus the 12 <code>slotignored</code> markers scores 100%.
				</li>
				<li>
					<strong>It never raises.</strong> Unreadable YAML scores 0 with every slot empty, for
					any <code>str</code> or <code>bytes</code> input.
				</li>
				<li>
					<strong>Breaking changes are listed.</strong> Slot names follow the kernel
					(<code>stack.framework</code>, not <code>stack.frontend</code>), <code>tier=</code> no
					longer changes the slot count, <code>tbd</code> and <code>todo</code> count as empty, and
					rounding is half away from zero. The CHANGELOG has the full list.
				</li>
			</ul>
		</section>

		<section>
			<h2>mcpaas.live v1.8</h2>
			<p>
				<strong>The kernel, at the edge.</strong> The hosted MCP routes
				(<code>/claude/mcp</code>, <code>/grok/mcp</code>, <code>/faf/mcp</code>) score with the
				same kernel as faf-cli, claude-faf-mcp and faf-mcp. So do the README score badges, the
				repo cards and the GitHub pages. Checked live after deploy: the same numbers on all three
				routes.
			</p>
			<p>Seven patches followed in two days. The ones you can see:</p>
			<ul>
				<li><code>faf_validate</code> gives the same answer as <code>faf_score</code>.</li>
				<li>Trophy is ✪ on tool output, and the Trophy mark draws on badges and cards.</li>
				<li>
					Files from GitHub are read as UTF-8, so a ✪ or an em dash no longer breaks a score.
				</li>
				<li><code>/health</code> and <code>/info</code> name the engine that scores.</li>
				<li>
					<strong>Souls are never scored.</strong> A soul is a personal record, not project
					context, so it gets no score, percentage or tier.
				</li>
			</ul>
		</section>

		<section>
			<h2>Upgrading: run <code>faf auto</code> once</h2>
			<p>
				A <code>.faf</code> without the 12 enterprise markers now counts them as empty in Python
				and at the edge: 21 filled is 64%. Run <code>faf auto</code> (faf-cli) and the score
				returns. If you gate on <code>score_faf</code> or a badge, re-check the threshold.
			</p>
		</section>

		<section>
			<h2>Try it</h2>
			<div class="terminal-block">
				<code>pip install faf-python-sdk</code>
			</div>
			<p>
				<strong>Or at the edge:</strong> add <code>https://mcpaas.live/claude/mcp/v1</code> to
				claude.ai, or the Grok route to <code>~/.grok/config.toml</code>, and ask for
				<code>faf_score</code>.
			</p>
			<p class="muted-note">
				More depth:
				<a href="/blog/always33">The Always33 Suite</a>
				·
				<a
					href="https://github.com/Wolfe-Jam/faf-python-sdk/blob/main/CHANGELOG.md"
					target="_blank"
					rel="noopener">faf-python-sdk CHANGELOG</a
				>
				·
				<a href="https://mcpaas.live" target="_blank" rel="noopener">mcpaas.live</a>.
			</p>
		</section>

		<section>
			<h2>Technical details</h2>
			<ul>
				<li>
					<strong>faf-python-sdk:</strong> 2.0.0 (September 28, 2026) · PyPI · pure Python ·
					845/845 kernel parity
				</li>
				<li>
					<strong>mcpaas.live:</strong> 1.8.0 to 1.8.7 (September 27 to 28, 2026) · Cloudflare edge ·
					hosted MCP routes for Claude, Grok and IDEs · badges and repo cards
				</li>
				<li><strong>Edition:</strong> The Always33 Edition</li>
				<li>
					<strong>Scoring:</strong> the always-33 engine; 21 slots filled, the 12 enterprise slots
					<code>slotignored</code>
				</li>
			</ul>
		</section>

		<section class="feedback-invite">
			<h2>Feedback welcome</h2>
			<p>Questions, nits, suggestions: guide the next version. Tell us what you want to see.</p>
			<div class="feedback-actions">
				<a href={xIntent} target="_blank" rel="noopener" class="feedback-btn">Post on X</a>
				<a
					href="https://github.com/Wolfe-Jam/faf-python-sdk/issues/new"
					target="_blank"
					rel="noopener"
					class="feedback-btn secondary"
				>
					Tell us on GitHub
				</a>
			</div>
		</section>

		<section class="footer-note">
			<p>Built with .faf ☑️ Beyond JavaScript, out to the edge. 🏎️</p>
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

	.post-content section > h3 {
		font-size: 1.3rem;
		font-weight: 800;
		color: #1a1a1a;
		margin: 2rem 0 0.75rem;
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
		margin-top: 2rem;
	}
	.intro .plain-english + p {
		margin-top: 2rem;
	}
	.lead .plain-label {
		margin: 0 0 0.85rem;
		font-size: 0.82rem;
		font-weight: 800;
		letter-spacing: 0.06em;
		text-transform: uppercase;
		color: #1a1a1a;
	}
	/* In Plain English is black and white */
	.lead.plain-english {
		border-left-color: #1a1a1a;
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
		color: #333;
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
		border: none; /* the global code rule adds a hairline */
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
		color: #333;
	}
</style>
