<script lang="ts">
	import { onMount } from 'svelte';
	let mounted = false;
	onMount(() => { mounted = true; });

	let copiedId = $state('');
	async function copyText(text: string, id: string) {
		await navigator.clipboard.writeText(text);
		copiedId = id;
		setTimeout(() => copiedId = '', 2000);
	}
</script>

<svelte:head>
	<title>The Trust Edition - claude-faf-mcp v5.8.0 | FAF</title>
	<meta name="description" content="Claude Code-native context that just works. A SessionStart hook opens every session with fresh context and a one-line ✪ heartbeat. Quiet output, typed results, a parity hash any engine can verify. 35 tools." />
	<meta property="og:title" content="The Trust Edition - claude-faf-mcp v5.8.0" />
	<meta property="og:description" content="Claude Code-native context that just works. Every session opens with faf: context ✪ 100% — fresh." />
	<meta property="og:type" content="article" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta property="og:image" content="https://faf.one/blog/trust-edition-hero.png" />
	<meta name="twitter:image" content="https://faf.one/blog/trust-edition-hero.png" />
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / The Trust Edition
		</div>

		<h1>The Trust Edition</h1>
		<p class="version-tag">claude-faf-mcp v5.8.0</p>
		<p class="subtitle">Claude Code-native context that just works.</p>
		<div class="meta">
			<time datetime="2026-06-11">June 11, 2026</time>
			<span class="separator">&bull;</span>
			<span class="category release">Release</span>
		</div>
	</header>

	<div class="hero-image">
		<img src="/blog/trust-edition-hero.png" alt="claude-faf-mcp v5.8.0 The Trust Edition — dotFaf hub with the ✪ seal, a terminal showing the session heartbeat line, and Claude Code, MCP, and IANA marks." />
	</div>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> Claude Code-native context that just works. Every session in a .faf project now opens with one line &mdash; <code>faf: context &#10026; 100% &mdash; fresh</code> &mdash; backed by quiet, parseable output, typed results, and a deterministic parity hash any engine can verify. 35 tools.
			</p>
		</section>

		<section>
			<h2>The Heartbeat</h2>

			<p>Context is a relay. Every Claude Code session start is a handover &mdash; and the baton is one line:</p>

			<pre class="heartbeat"><code>{`faf: context ✪ 100% — fresh
faf: context refreshed — ✪ 100%
faf: CLAUDE.md created — ○ 10%`}</code></pre>

			<p>A native <strong>SessionStart hook</strong> refreshes CLAUDE.md's faf-managed block from <code>project.faf</code>, then reports in. When nothing changed, nothing is written &mdash; no churn, just the heartbeat. The line does three jobs at once: it proves the integration is alive (a silent hook is indistinguishable from a broken one), it grounds Claude (&ldquo;a current .faf exists, score 100%, don't re-derive the project&rdquo;), and it puts the <strong>&#10026; seal</strong> in front of you every single session. Directories without a .faf stay fully silent &mdash; the hook never speaks where it has no business.</p>
		</section>

		<section>
			<h2>Installed Explicitly &mdash; Never Silently</h2>

			<p>The hook goes in through <code>faf_setup</code>, tool #35. It shows you the <em>exact</em> settings JSON and the exact path before anything is written. Confirm, and it merges non-destructively into your project's <code>.claude/settings.json</code> &mdash; every existing key and hook preserved, re-runs idempotent. <code>remove: true</code> takes out exactly the faf hook and nothing else.</p>

			<p>A Trust Edition that silently edited your settings would refute its own headline. So this one, doesn't.</p>
		</section>

		<section>
			<h2>Quiet. Typed. Provable.</h2>

			<p><strong>Quiet:</strong> tool output carries no emoji &mdash; plain, parseable, scriptable. Tier glyphs use the quiet ladder <code>&#9825; &#9675; &#9679; &#9671; &#9670; &#9733; &#10026;</code> &mdash; geometric symbols that render identically everywhere. One predictable format, no toggle. Even the generated CLAUDE.md block is quiet now: canonical <code>What This Is / Stack / Context</code>, matching faf-cli's export exactly.</p>

			<p><strong>Typed:</strong> the data tools return <code>structuredContent</code> with published <code>outputSchema</code> &mdash; agents parse structures, humans read text, neither gets noise.</p>

			<p><strong>Provable:</strong> every score carries a <strong>determinism parity hash</strong> &mdash; a SHA-256 over the canonical score projection, bound to the input bytes. Any conformant engine (faf-cli, the Rust kernel, this server) reproduces it, and a third party can check <code>sha256(projection) === parityHash</code> without trusting us. The <strong>&#10026; trust receipt</strong> wraps score + parity into a self-verifying artifact that means the same thing in a terminal, a CI log, and a report. FAF don't lie &mdash; and now you can verify that for yourself.</p>
		</section>

		<section>
			<h2>Enhanced Interop &mdash; a Fix, Not a Feature</h2>

			<p>Straight talk: the interop tools used to overwrite AGENTS.md, GEMINI.md, .cursorrules, and CLAUDE.md wholesale. Anything you'd written was lost. That was a bug, and it's fixed &mdash; every write now goes through a non-destructive injector. A structured .faf block owns the top of the file; everything you've written below is preserved; re-runs update the block in place. And a build-failing write-guard makes the old behavior impossible to reintroduce. <strong>Your files are enhanced, never replaced.</strong></p>
		</section>

		<section>
			<h2>Try It</h2>

			<button class="copy-box" onclick={() => copyText('npm install -g claude-faf-mcp@5.8.0', 'install')}>
				<code class="copy-code">npm install -g claude-faf-mcp@5.8.0</code>
				<span class="copy-btn">{copiedId === 'install' ? 'Copied!' : 'Copy'}</span>
			</button>

			<p>Or one-click: grab the <a href="https://github.com/Wolfe-Jam/claude-faf-mcp/releases/tag/v5.8.0">.mcpb from the release</a> and drop it on Claude Desktop. Then, in Claude Code: &ldquo;run faf_setup&rdquo; &mdash; preview the hook, confirm, and your next session opens with the baton in hand.</p>
		</section>

		<section>
			<h2>The Numbers</h2>
			<ul>
				<li><strong>v5.8.0</strong> &mdash; Released June 11, 2026</li>
				<li><strong>35 tools</strong> &mdash; verified live on <code>tools/list</code></li>
				<li><strong>547 tests, 0 fail</strong> &mdash; every pillar has its own WJTTC guard</li>
				<li><strong>&#127942; 100%</strong> &mdash; Trophy score, parity-hashed</li>
				<li><strong>IANA</strong> &mdash; <code>application/vnd.faf+yaml</code> &middot; <code>application/vnd.fafm+yaml</code></li>
			</ul>
		</section>

		<section class="share-section">
			<a class="share-btn" href="https://twitter.com/intent/tweet?text=The%20Trust%20Edition%20%E2%80%94%20claude-faf-mcp%20v5.8.0.%20Claude%20Code-native%20context%20that%20just%20works.%20Every%20session%20opens%20with%20faf%3A%20context%20%E2%9C%AA%20100%25%20%E2%80%94%20fresh.&url=https%3A%2F%2Ffaf.one%2Fblog%2Ftrust-edition" target="_blank" rel="noopener">Share on X</a>
		</section>

		<section class="footer-note">
			<p>Built with .faf &#9745;&#65039; Trust &amp; it works. &#127950;&#65039;</p>
		</section>
	</article>
</div>

<style>
	:global(body) {
		background: #FEFCF8;
	}

	.blog-post {
		max-width: 800px;
		margin: 0 auto;
		padding: 2rem 1rem;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
		line-height: 1.7;
		color: #1a1a1a;
	}

	.post-header {
		margin-bottom: 3rem;
		border-bottom: 3px solid #FF6B35;
		padding-bottom: 2rem;
	}

	.hero-image {
		margin: -1rem 0 2rem 0;
		border-radius: 12px;
		overflow: hidden;
	}
	.hero-image img {
		width: 100%;
		height: auto;
		display: block;
	}

	.breadcrumb {
		font-size: 0.9rem;
		margin-bottom: 1rem;
		color: #1a1a1a;
	}

	.breadcrumb a {
		color: #FF6B35;
		text-decoration: none;
	}

	.breadcrumb a:hover {
		text-decoration: underline;
	}

	h1 {
		font-size: 2.2rem;
		margin: 0.5rem 0;
		color: #000;
		line-height: 1.3;
	}

	.version-tag {
		display: inline-block;
		background: #FF6B35;
		color: white;
		padding: 0.25rem 0.75rem;
		border-radius: 4px;
		font-size: 0.9rem;
		font-weight: 600;
		margin: 0.5rem 0;
		font-family: 'SF Mono', 'Fira Code', Consolas, monospace;
	}

	.subtitle {
		font-size: 1.2rem;
		color: #1a1a1a;
		font-weight: 600;
		margin: 0.5rem 0 1rem 0;
	}

	.meta {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		font-size: 0.9rem;
		color: #1a1a1a;
	}

	.separator {
		color: #1a1a1a;
	}

	.category {
		color: white;
		padding: 0.25rem 0.75rem;
		border-radius: 4px;
		font-size: 0.85rem;
	}

	.category.release {
		background: #00B8B8;
	}

	.post-content {
		font-size: 1.1rem;
	}

	.lead {
		font-size: 1.2rem;
		line-height: 1.7;
		margin-bottom: 2rem;
		padding: 1.5rem;
		background: #fff5f0;
		border-radius: 8px;
		border-left: 4px solid #FF6B35;
	}

	h2 {
		font-size: 1.8rem;
		margin: 3rem 0 1.5rem 0;
		color: #000;
		border-bottom: 1px solid #e5e5e5;
		padding-bottom: 0.5rem;
	}

	p {
		margin-bottom: 1.25rem;
	}

	ul, ol {
		margin: 1rem 0 1.5rem 1.5rem;
	}

	li {
		margin-bottom: 0.5rem;
	}

	code {
		font-family: 'SF Mono', 'Fira Code', Consolas, monospace;
		background: #f0f0f0;
		padding: 0.2rem 0.4rem;
		border-radius: 4px;
		font-size: 0.9em;
	}

	pre {
		background: #1a1a1a;
		color: #00ff88;
		padding: 1.25rem;
		border-radius: 8px;
		overflow-x: auto;
		font-size: 0.85rem;
		margin: 1.5rem 0;
	}

	pre code {
		background: none;
		padding: 0;
	}

	/* The heartbeat is the headline of the release — display treatment, not a footnote */
	pre.heartbeat {
		font-size: 1.5rem;
		line-height: 2.1;
		padding: 2.25rem 2.5rem;
		border: 1px solid #333;
		font-weight: 600;
	}

	@media (max-width: 768px) {
		pre.heartbeat {
			font-size: 1.05rem;
			padding: 1.5rem 1.25rem;
		}
	}

	.share-section {
		margin-top: 3rem;
		text-align: center;
	}

	.share-btn {
		display: inline-flex;
		align-items: center;
		padding: 0.6rem 1.25rem;
		border-radius: 6px;
		font-size: 0.9rem;
		font-weight: 600;
		text-decoration: none;
		background: #000;
		color: #fff;
		transition: opacity 0.2s;
	}

	.share-btn:hover {
		opacity: 0.85;
		text-decoration: none;
		color: #fff;
	}

	.footer-note {
		margin-top: 4rem;
		padding-top: 2rem;
		border-top: 1px solid #e5e5e5;
		font-size: 0.95rem;
		color: #1a1a1a;
		text-align: center;
	}

	a {
		color: #FF6B35;
	}

	a:hover {
		text-decoration: none;
	}

	.copy-box {
		display: flex;
		align-items: center;
		gap: 1rem;
		padding: 1rem 1.5rem;
		background: #1a1a1a;
		border: 1px solid #333;
		border-radius: 8px;
		margin: 1rem 0;
		cursor: pointer;
		transition: border-color 0.2s;
		width: 100%;
	}
	.copy-box:hover { border-color: #555; }
	.copy-code {
		flex: 1;
		font-family: 'Monaco', 'Courier New', monospace;
		color: #00ff88; /* green = go signal; matches the heartbeat terminal */
		background: transparent;
		padding: 0;
		font-size: 0.95rem;
		font-weight: 600;
		border-radius: 0;
		text-align: left;
	}
	.copy-btn {
		padding: 0.5rem 1rem;
		background: #000;
		border: 1px solid #555;
		color: #fff;
		border-radius: 6px;
		font-weight: 600;
		font-size: 0.8rem;
		cursor: pointer;
		transition: all 0.2s;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		white-space: nowrap;
	}
	.copy-btn:hover { border-color: #fff; }
	.copy-btn:active { transform: scale(0.95); }

	@media (max-width: 768px) {
		h1 {
			font-size: 1.75rem;
		}

		.blog-post {
			padding: 1rem;
		}
	}
</style>
