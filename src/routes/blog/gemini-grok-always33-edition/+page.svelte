<!-- pubblog Release — gemini-faf-mcp v3.0.0 + grok-faf-mcp v2.0.0, The Always33 Edition.
     Part IV of the Always33 series (overview: /blog/always33). Chrome copied from faf-mcp-always33-edition. -->
<script lang="ts">
	import { buildShareIntent } from '$lib/shareIntent.js';

	const shareText = `🏁 Just shipped: gemini-faf-mcp v3 + grok-faf-mcp v2 — The Always33 Edition

Same score in Gemini and Grok.

One engine, across frontier models.
Upgrading? Run faf auto once and your score is back.

PyPI + Gemini CLI · npm + mcpaas.live · same score as faf-cli

uvx gemini-faf-mcp

Help guide what we build —
Comments · suggestions · shares welcome.`;
	const shareUrl = 'https://faf.one/blog/gemini-grok-always33-edition';
	const xIntent = buildShareIntent({ text: shareText, url: shareUrl });
</script>

<svelte:head>
	<title>The Always33 Edition - gemini-faf-mcp v3 · grok-faf-mcp v2 | FAF</title>
	<meta
		name="description"
		content="Same score in Gemini and Grok. gemini-faf-mcp v3 and grok-faf-mcp v2 score with the always-33 engine: one engine, across frontier models."
	/>
	<meta property="og:title" content="The Always33 Edition - gemini-faf-mcp v3 · grok-faf-mcp v2" />
	<meta
		property="og:description"
		content="Same score in Gemini and Grok. One engine, across frontier models."
	/>
	<meta property="og:type" content="article" />
	<meta property="og:url" content="https://faf.one/blog/gemini-grok-always33-edition" />
	<meta property="og:site_name" content=".faf Format Authority" />
	<meta property="og:image" content="https://faf.one/blog/gemini-grok-always33-edition-hero.png" />
	<meta
		property="og:image:secure_url"
		content="https://faf.one/blog/gemini-grok-always33-edition-hero.png"
	/>
	<meta property="og:image:type" content="image/png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta
		property="og:image:alt"
		content="gemini-faf-mcp v3 and grok-faf-mcp v2, The Always33 Edition: same score in Gemini and Grok. One engine, across frontier models."
	/>
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@fafformat" />
	<meta name="twitter:creator" content="@wolfe_jam" />
	<meta
		name="twitter:title"
		content="The Always33 Edition - gemini-faf-mcp v3 · grok-faf-mcp v2"
	/>
	<meta
		name="twitter:description"
		content="Same score in Gemini and Grok. One engine, across frontier models."
	/>
	<meta
		name="twitter:image"
		content="https://faf.one/blog/gemini-grok-always33-edition-hero.png"
	/>
	<meta
		name="twitter:image:alt"
		content="gemini-faf-mcp v3 and grok-faf-mcp v2, The Always33 Edition: same score in Gemini and Grok. One engine, across frontier models."
	/>
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / gemini-faf-mcp v3 · grok-faf-mcp v2
		</div>
		<h1>The Always33 Edition</h1>
		<p class="version-tag">gemini-faf-mcp v3.0.0 · grok-faf-mcp v2.0.0 · Always33 series, Part IV</p>
		<p class="subtitle">Same score in Gemini and Grok. One engine, across frontier models.</p>
		<div class="meta">
			<time datetime="2026-09-30">September 30, 2026</time>
			<span class="separator">•</span>
			<span class="category release">Release</span>
		</div>
	</header>

	<div class="hero-image">
		<img
			src="/blog/gemini-grok-always33-edition-hero.png"
			alt="gemini-faf-mcp v3 and grok-faf-mcp v2, The Always33 Edition: same score in Gemini and Grok. One engine, across frontier models."
			width="1200"
			height="630"
			loading="eager"
			decoding="async"
		/>
	</div>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> gemini-faf-mcp v3 and grok-faf-mcp v2 score with the always-33
				engine, so Gemini and Grok give your file the same number as faf-cli. Upgrading? Run
				<code>faf auto</code> once. It marks the 12 enterprise slots <code>slotignored</code>, and
				your score is back.
			</p>
			<div class="lead plain-english">
				<p class="plain-label">In Plain English</p>
				<p>
					<strong>Old state.</strong> Gemini and Grok each scored on the older 21-slot model. The
					always-33 tools counted 33. The same file could read differently depending on which
					model you asked.
				</p>
				<p>
					<strong>Fix.</strong> Both now score with the always-33 engine. Slots that are not
					applicable to a project are marked <code>slotignored</code>, and do not score.
				</p>
				<p>
					<strong>New state.</strong> Same score in Gemini and Grok, and the same as faf-cli,
					Claude and your IDE.
				</p>
			</div>
			<p><strong>Gemini CLI:</strong></p>
			<div class="terminal-block">
				<code>gemini extensions install https://github.com/Wolfe-Jam/gemini-faf-mcp</code>
			</div>
			<p><strong>Grok:</strong> add to <code>~/.grok/config.toml</code>, then restart (or <code>/mcps r</code>):</p>
			<div class="terminal-block">
				<code>[mcp_servers.grok-faf-mcp]</code>
				<code>url = "https://mcpaas.live/grok/mcp/v1"</code>
			</div>
			<p class="muted-note">
				gemini-faf-mcp also runs with <code>uvx gemini-faf-mcp</code> (PyPI). grok-faf-mcp also runs
				locally with <code>npx grok-faf-mcp</code> or
				<code>brew install wolfe-jam/faf/grok-faf-mcp</code>.
			</p>
		</section>

		<section>
			<h2>What happened since the last posts</h2>
			<p>
				One blog, one arc. The last write-ups were
				<a href="/blog/gemini-interop">gemini-faf-mcp v2.7 The Interop Edition</a> and
				<a href="/blog/no-fluff-edition">grok-faf-mcp v1.10 The No-Fluff Edition</a>. Short tour
				to today:
			</p>
			<ul>
				<li>
					<strong>gemini-faf-mcp v2.8</strong>: The Full-Facts Edition. <code>faf_auto</code>
					grounds its detection in the repo's own files, and every <code>faf_model</code> template
					scores 100%. Then a dependency patch and a privacy patch: the start-up ping is now
					opt-in. Not a blog.
				</li>
				<li>
					<strong>gemini-faf-mcp v3.0.0</strong> and <strong>grok-faf-mcp v2.0.0</strong>: The
					Always33 Edition. This is the log entry for the stretch.
				</li>
			</ul>
			<p>
				This is Part IV of the Always33 series. Part I was
				<a href="/blog/always33-edition">faf-cli v8</a>, where the engine was authored. Part II was
				<a href="/blog/claude-always33-edition">claude-faf-mcp v7</a>, Part III
				<a href="/blog/faf-mcp-always33-edition">faf-mcp v4</a>. The overview is
				<a href="/blog/always33">The Always33 Suite</a>.
			</p>
		</section>

		<section>
			<h2>gemini-faf-mcp v3</h2>
			<p>
				<strong>The Always33 engine, in Python.</strong> gemini-faf-mcp now needs
				<strong>faf-python-sdk 2.0.0</strong>, whose scorer returns exactly what faf-kernel returns.
				Every tool that reports a score (<code>faf_score</code>, <code>faf_validate</code>,
				<code>faf_context</code>, <code>faf_gemini</code>, <code>faf_agents</code>,
				<code>faf_auto</code>) scores the always-33 way.
			</p>
			<ul>
				<li>
					<strong>Fresh files start complete.</strong> When <code>faf_auto</code> creates a
					<code>project.faf</code>, it writes all 12 enterprise slots, <code>slotignored</code>
					unless detection fills them. A FastAPI project scores 77, the same as under v2.
				</li>
				<li>
					<strong>The 15 <code>faf_model</code> templates</strong> carry the 12 enterprise slots.
					The <code>monorepo</code> template fills four of them. Every template still scores 100%.
				</li>
				<li>
					<strong>Existing files:</strong> without the 12 markers, a file with 21 slots filled
					reads 64%. <code>faf auto</code> (faf-cli) writes the markers and the score returns.
				</li>
			</ul>
		</section>

		<section>
			<h2>grok-faf-mcp v2</h2>
			<p>
				<strong>The Always33 engine, on npm and at the edge.</strong> grok-faf-mcp composes
				<strong>faf-cli ^8.0.0</strong>. <code>faf_score</code>, <code>refresh_faf</code>,
				<code>faf_trust</code> and the context resources all score with faf-cli v8's kernel. The
				hosted endpoint, <code>mcpaas.live/grok/mcp/v1</code>, scores with the same kernel, so the
				hosted and local numbers match. Checked live: faf-python-sdk 56, mcp-context-card 56,
				faf-cli ✪ 100.
			</p>
			<ul>
				<li>
					<strong>Scoring never uses a <code>faf</code> from your PATH.</strong> Everything composes
					faf-cli in-process, so the answer is the same on every machine.
				</li>
				<li>
					<strong><code>faf_init</code> writes a real project.faf</strong> with faf-cli, including
					the 12 enterprise markers, and reports its real score.
				</li>
				<li>
					<strong>ZEPH is opt-in.</strong> The Zig fast path gives the older 21-slot number, so it
					no longer replaces the always-33 score by default. <code>USE_ZEPH=1</code> turns it on.
				</li>
				<li>
					<strong><code>faf_score</code> counts slots the way faf-cli does</strong>: populated of
					active (for example 11/15), not of 33.
				</li>
				<li><strong>One kernel copy.</strong> The only kernel in an install is faf-cli's.</li>
			</ul>
		</section>

		<section>
			<h2>Upgrading: run <code>faf auto</code> once</h2>
			<p>
				Both are major releases for the same reason. A <code>.faf</code> without the 12 enterprise
				markers now counts them as empty: 21 filled is 64%. Run <code>faf auto</code> (faf-cli) and
				the score returns. A new file from <code>faf_auto</code> in Gemini or
				<code>faf_init</code> in Grok already carries the markers. Anything that gates on
				<code>faf_score</code> should re-check its threshold.
			</p>
		</section>

		<section>
			<h2>Try it</h2>
			<p><strong>Gemini CLI</strong>, after installing the extension:</p>
			<div class="terminal-block">
				<code>/faf:setup</code>
				<code>/faf:score</code>
			</div>
			<p>
				<strong>Grok</strong>, with the hosted endpoint added: ask it to run
				<code>faf_score</code> on your <code>project.faf</code>.
			</p>
			<p class="muted-note">
				More depth:
				<a href="/blog/always33">The Always33 Suite</a>
				·
				<a
					href="https://github.com/Wolfe-Jam/gemini-faf-mcp/blob/main/CHANGELOG.md"
					target="_blank"
					rel="noopener">gemini CHANGELOG</a
				>
				·
				<a
					href="https://github.com/Wolfe-Jam/grok-faf-mcp/blob/main/CHANGELOG.md"
					target="_blank"
					rel="noopener">grok CHANGELOG</a
				>.
			</p>
		</section>

		<section>
			<h2>Technical details</h2>
			<ul>
				<li>
					<strong>gemini-faf-mcp:</strong> 3.0.0 (September 28, 2026) · PyPI + Gemini CLI extension ·
					13 tools · 266 tests · scoring via faf-python-sdk 2.0.0
				</li>
				<li>
					<strong>grok-faf-mcp:</strong> 2.0.0 (September 27, 2026) · npm + Homebrew + hosted
					<code>mcpaas.live/grok/mcp/v1</code> · 12 tools local, 19 hosted · scoring via faf-cli v8
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
			<p>Built with .faf ☑️ One engine, across frontier models. 🏎️</p>
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
