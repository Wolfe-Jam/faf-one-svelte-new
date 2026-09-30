<!-- pubblog Release — claude-faf-mcp v7.0.0, The Always33 Edition. Post 2 of the Always33 series
     (overview: /blog/always33). Chrome copied from the faf-cli v8 post (always33-edition). -->
<script lang="ts">
	import { buildShareIntent } from '$lib/shareIntent.js';
	// Cloudflare Scrape Shield mangles package@version as "email" — always use NpmPkg in HTML.
	import NpmPkg from '$lib/NpmPkg.svelte';

	const shareText = `🏁 Just shipped: claude-faf-mcp v7.0.0 — The Always33 Edition

New era, new engine.

Unified scoring in Claude Code, Desktop and claude.ai.
Upgrading? Run faf_auto: 56% → ✪ 100% on the v7-era file we tested.

14 tools · 513 tests · same score as faf-cli

claude mcp add faf -- npx -y claude-faf-mcp

Help guide what we build —
Comments · suggestions · shares welcome.`;
	const shareUrl = 'https://faf.one/blog/claude-always33-edition';
	const xIntent = buildShareIntent({ text: shareText, url: shareUrl });
</script>

<svelte:head>
	<title>The Always33 Edition - claude-faf-mcp v7.0.0 | FAF</title>
	<meta
		name="description"
		content="New era, new engine. Unified scoring, now in Claude Code and Claude Desktop: claude-faf-mcp v7 scores with faf-cli 8's always-33 kernel."
	/>
	<meta property="og:title" content="The Always33 Edition - claude-faf-mcp v7.0.0" />
	<meta
		property="og:description"
		content="New era, new engine. Unified scoring in Claude Code, Desktop and claude.ai."
	/>
	<meta property="og:type" content="article" />
	<meta property="og:url" content="https://faf.one/blog/claude-always33-edition" />
	<meta property="og:site_name" content=".faf Format Authority" />
	<meta property="og:image" content="https://faf.one/blog/claude-always33-edition-hero.png" />
	<meta
		property="og:image:secure_url"
		content="https://faf.one/blog/claude-always33-edition-hero.png"
	/>
	<meta property="og:image:type" content="image/png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta
		property="og:image:alt"
		content="claude-faf-mcp v7.0.0, The Always33 Edition: new era, new engine. Unified scoring in Claude Code, Desktop and claude.ai."
	/>
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@fafformat" />
	<meta name="twitter:creator" content="@wolfe_jam" />
	<meta name="twitter:title" content="The Always33 Edition - claude-faf-mcp v7.0.0" />
	<meta
		name="twitter:description"
		content="New era, new engine. Unified scoring in Claude Code, Desktop and claude.ai."
	/>
	<meta name="twitter:image" content="https://faf.one/blog/claude-always33-edition-hero.png" />
	<meta
		name="twitter:image:alt"
		content="claude-faf-mcp v7.0.0, The Always33 Edition: new era, new engine. Unified scoring in Claude Code, Desktop and claude.ai."
	/>
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / claude-faf-mcp v7
		</div>
		<h1>The Always33 Edition</h1>
		<p class="version-tag">claude-faf-mcp v7.0.0 · Always33 series, Part II</p>
		<p class="subtitle">New era, new engine. Unified scoring in Claude Code, Desktop and claude.ai.</p>
		<div class="meta">
			<time datetime="2026-09-29">September 29, 2026</time>
			<span class="separator">•</span>
			<span class="category release">Release</span>
		</div>
	</header>

	<div class="hero-image">
		<img
			src="/blog/claude-always33-edition-hero.png"
			alt="claude-faf-mcp v7.0.0, The Always33 Edition: new era, new engine. Unified scoring in Claude Code, Desktop and claude.ai."
			width="1200"
			height="630"
			loading="eager"
			decoding="async"
		/>
	</div>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> claude-faf-mcp v7 scores with faf-cli 8's always-33 kernel, so
				Claude gets the same number as faf-cli and faf-kernel. Upgrading from v6? Run
				<code>faf_auto</code> once. It marks the 12 enterprise slots <code>slotignored</code>, and
				your score is back.
			</p>
			<div class="lead plain-english">
				<p class="plain-label">In Plain English</p>
				<p>
					<strong>Old state.</strong> claude-faf-mcp used faf-cli 7's scoring, which counted 21
					slots. The always-33 tools counted 33. Claude and the rest of FAF could show different
					numbers for the same file.
				</p>
				<p>
					<strong>Fix.</strong> v7 composes faf-cli 8. Every tool's score now comes from the
					always-33 kernel. Slots that are not applicable to a project are marked
					<code>slotignored</code>, and do not score.
				</p>
				<p>
					<strong>New state.</strong> Unified scoring. Claude gives your file the same score as
					faf-cli, and as every other FAF tool.
				</p>
			</div>
			<p><strong>Claude Code:</strong></p>
			<div class="terminal-block">
				<code>claude mcp add faf -- npx -y claude-faf-mcp</code>
			</div>
			<p class="muted-note">
				<strong>Claude Desktop:</strong> one click with the
				<a
					href="https://github.com/Wolfe-Jam/claude-faf-mcp/releases/download/v7.0.0/claude-faf-mcp-7.0.0.mcpb"
					target="_blank"
					rel="noopener">claude-faf-mcp-7.0.0.mcpb</a
				>
				extension, which runs the server bundled inside it. Or add
				<code>npx -y claude-faf-mcp</code> to <code>claude_desktop_config.json</code>.
			</p>
			<p class="muted-note">
				<strong>claude.ai:</strong> add <code>https://mcpaas.live/claude/mcp/v1</code> as a custom
				connector (Settings → Connectors, no sign-in). It's the hosted edge version: 19 read-only
				tools and the same Always33 score. It can't reach files on your machine, so paste a
				<code>.faf</code> or point it at a GitHub repo.
			</p>
		</section>

		<section>
			<h2>What happened since The Projector Floor</h2>
			<p>
				One blog, one arc. The last claude-faf-mcp write-up was
				<a href="/blog/projector-floor">v5.22 The Projector Floor</a>. Short tour to today:
			</p>
			<ul>
				<li><strong>v5.22.1</strong>: a patch on The Projector Floor. Not a blog.</li>
				<li>
					<strong>v6.0.0</strong>: The Earned Badge Edition. Every badge earned, none claimed: it
					composes faf-cli, touches only what it wrote, and every tool tells the truth. Not a blog.
				</li>
				<li>
					<strong>v7.0.0</strong>: The Always33 Edition. This is the log entry for the stretch.
				</li>
			</ul>
			<p>
				This is Part II of the Always33 series. Part I was
				<a href="/blog/always33-edition">faf-cli v8</a>, where the engine was authored. The overview
				is <a href="/blog/always33">The Always33 Suite</a>.
			</p>
		</section>

		<section>
			<h2>What v7 is</h2>
			<p>
				<strong>The Always33 engine, in Claude.</strong> claude-faf-mcp composes
				<strong>faf-cli ^8.0.0</strong>. The old range, ^7.13.1, could never reach 8.x. Every
				tool's score is now faf-cli 8's, from the always-33 kernel. Checked live:
				<code>faf_score</code> gave faf-python-sdk 56, mcp-context-card 56 and faf-cli ✪ 100, the
				same as faf-cli v8 and the reference always-33 scorer.
			</p>
			<p>
				<strong>Your 21 slots, and the 12 enterprise slots in view.</strong> faf-cli fills the 21
				base slots and marks the 12 enterprise slots <code>slotignored</code> unless your app type
				uses them. Those slots drop out of the count.
			</p>
			<h3>Upgrading: run <code>faf_auto</code> once</h3>
			<p>
				This is why v7 is a major release. A <code>.faf</code> without the 12 enterprise markers
				now counts them as empty: 21 filled is 64%. Run <code>faf_auto</code>. It writes the
				markers and the score returns. On a v7-era file we tested:
			</p>
			<div class="terminal-block">
				<code>faf_auto   56% → ✪ 100%</code>
			</div>
			<p>
				Anything that gates on <code>faf_score</code> should re-check its threshold. The npx config
				and the SessionStart hook are not pinned, so they move to v7 on their next start. To stay
				on v6, write <code><NpmPkg name="claude-faf-mcp" version="6" /></code> in your config. The <code>.mcpb</code> runs the
				version it was built from.
			</p>
			<h3>Also in v7</h3>
			<ul>
				<li>
					<code>tbd</code> and <code>todo</code>, in any case, count as empty, the same as
					faf-cli v8.
				</li>
				<li>
					The test fixtures that score 100% are written the faf-cli way: 21 slots plus the 12
					enterprise markers.
				</li>
			</ul>
		</section>

		<section>
			<h2>Try it</h2>
			<p><strong>Claude Code:</strong></p>
			<div class="terminal-block">
				<code>claude mcp add faf -- npx -y claude-faf-mcp</code>
			</div>
			<p>
				<strong>Then, in Claude:</strong> ask it to run <code>faf_auto</code>, then
				<code>faf_score</code>. Or pick the <code>faf</code> prompt from your host's prompt list.
			</p>
			<p class="muted-note">
				More depth:
				<a href="/blog/always33-edition">faf-cli v8</a>
				·
				<a href="/blog/always33">The Always33 Suite</a>
				·
				<a
					href="https://github.com/Wolfe-Jam/claude-faf-mcp/blob/main/CHANGELOG.md"
					target="_blank"
					rel="noopener">CHANGELOG</a
				>
				·
				<a href="https://github.com/Wolfe-Jam/claude-faf-mcp" target="_blank" rel="noopener"
					>repo</a
				>.
			</p>
		</section>

		<section>
			<h2>Technical details</h2>
			<ul>
				<li><strong>Version:</strong> 7.0.0 (September 26, 2026)</li>
				<li><strong>Edition:</strong> The Always33 Edition</li>
				<li>
					<strong>Scoring:</strong> faf-cli 8's always-33 kernel (Rust → WASM); 21 slots filled,
					the 12 enterprise slots <code>slotignored</code>
				</li>
				<li><strong>Tools:</strong> Core 14 (30 with <code>FAF_TOOLS=all</code>)</li>
				<li><strong>Tests:</strong> 513</li>
				<li><strong>Runs in:</strong> Claude Code · Claude Desktop (<code>.mcpb</code> or config) · claude.ai (hosted connector, 19 read-only tools)</li>
				<li><strong>Needs:</strong> Node 22 or later</li>
			</ul>
		</section>

		<section class="feedback-invite">
			<h2>Feedback welcome</h2>
			<p>Questions, nits, suggestions: guide the next version. Tell us what you want to see.</p>
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
			<p>Built with .faf ☑️ New era, new engine. 🏎️</p>
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
