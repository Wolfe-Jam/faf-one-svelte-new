<!-- pubblog — slash-tokens v1.6.5. Matching-client SPINE. Slash signal
     (#FF4400 · Evaluator). Light canvas: white, not cream/peach. Own
     full-bleed wrapper so blog cream freeze cannot wash the type. -->
<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { browser } from '$app/environment';
	import { buildShareIntent } from '$lib/shareIntent.js';
	import NpmPkg from '$lib/NpmPkg.svelte';

	onMount(() => {
		if (!browser) return;
		document.documentElement.classList.add('slash-white');
	});
	onDestroy(() => {
		if (!browser) return;
		document.documentElement.classList.remove('slash-white');
	});

	const shareText = `🏁 Just shipped: slash-tokens v1.6.5 — The Fixed Deal Edition

Solo $20 mailbox, 10% waived. Team $39 for the data.

Free forever is bunx — no account
Live ladder in the tarball. We show the savings. We don't skim.

4.8 KB WASM · Context Engineers

bunx slash-tokens

Help guide what we build —
Comments · suggestions welcome.`;
	const shareUrl = 'https://faf.one/blog/slash-tokens-fixed-deal';
	const xIntent = buildShareIntent({ text: shareText, url: shareUrl });
</script>

<svelte:head>
	<title>The Fixed Deal Edition - slash-tokens v1.6.5 | FAF</title>
	<meta
		name="description"
		content="Solo $20 mailbox, 10% waived. Team $39 for the data. slash-tokens v1.6.5 — The Fixed Deal Edition."
	/>
	<meta property="og:title" content="The Fixed Deal Edition - slash-tokens v1.6.5" />
	<meta
		property="og:description"
		content="Solo $20 mailbox, 10% waived. Team $39 for the data."
	/>
	<meta property="og:type" content="article" />
	<meta property="og:url" content="https://faf.one/blog/slash-tokens-fixed-deal" />
	<meta property="og:site_name" content=".faf Format Authority" />
	<meta property="og:image" content="https://faf.one/blog/slash-tokens-fixed-deal-hero.png" />
	<meta
		property="og:image:secure_url"
		content="https://faf.one/blog/slash-tokens-fixed-deal-hero.png"
	/>
	<meta property="og:image:type" content="image/png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta
		property="og:image:alt"
		content="The Fixed Deal Edition — slash-tokens v1.6.5 · Solo $20 mailbox, 10% waived. Team $39 for the data."
	/>
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@fafformat" />
	<meta name="twitter:creator" content="@wolfe_jam" />
	<meta name="twitter:title" content="The Fixed Deal Edition - slash-tokens v1.6.5" />
	<meta
		name="twitter:description"
		content="Solo $20 mailbox, 10% waived. Team $39 for the data."
	/>
	<meta name="twitter:image" content="https://faf.one/blog/slash-tokens-fixed-deal-hero.png" />
	<meta
		name="twitter:image:alt"
		content="The Fixed Deal Edition — slash-tokens v1.6.5 · Solo $20 mailbox, 10% waived. Team $39 for the data."
	/>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;600;700;800;900&family=Roboto+Mono:wght@400;600&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div class="slash-canvas">
<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / The Fixed Deal Edition
		</div>
		<p class="mark">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="22" height="22"
				><polygon points="60,0 20,55 48,55 38,100 80,42 52,42" fill="#FFAA00" /></svg
			>
			/slash
		</p>
		<h1>The Fixed Deal Edition</h1>
		<p class="version-tag">slash-tokens v1.6.5</p>
		<p class="subtitle">Solo $20 mailbox, 10% waived. Team $39 for the data.</p>
		<div class="meta">
			<time datetime="2026-08-25">August 25, 2026</time>
			<span class="separator">•</span>
			<span class="category release">Release</span>
		</div>
	</header>

	<div class="hero-image">
		<img
			src="/blog/slash-tokens-fixed-deal-hero.png"
			alt="The Fixed Deal Edition — slash-tokens v1.6.5 · Solo $20 mailbox, 10% waived. Team $39 for the data."
			width="1200"
			height="630"
			loading="eager"
			decoding="async"
		/>
	</div>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> Solo $20 mailbox, 10% waived. Team $39 for the data. Free forever
				is <code>bunx</code> — no account. We show the savings. We don't skim.
			</p>
			<div class="lead plain-english">
				<p class="plain-label">In Plain English</p>
				<p>
					<strong>Old state.</strong> The deal was already the deal. The tarball wasn't. Source
					had the live ladder; one cut packed a stale gitignored <code>dist/</code> —
					<code>bun test</code> runs <code>src/</code>.
				</p>
				<p>
					<strong>Fix.</strong> Rebuilt tarball. This one contains the live ladder: Grok 4.6 /
					4.3, GPT-5.6 Sol / Terra / Luna, Claude Opus 5 / Sonnet 5 / Haiku 4.5, Gemini 3.5
					Flash-Lite.
				</p>
				<p>
					<strong>New state.</strong> <code>bunx</code> is free forever. A key is optional. npm
					1.6.5 matches the meter. Same deal.
				</p>
			</div>
			<div class="terminal-block">
				<code>bunx slash-tokens</code>
			</div>
			<p class="muted-note">
				<strong>bunx is try</strong> — no account. Run it inside a project that calls an LLM. Empty
				folder → “No AI API call sites detected.” That's normal. The SDK install is
				<code>npm install <NpmPkg name="slash-tokens" version="1.6.5" /></code>.
			</p>
		</section>

		<section>
			<h2>What happened since 10:1</h2>
			<p>
				One blog, one arc — no post per patch. Last write-up was
				<a href="/blog/slash-tokens-10-1">v1.4.0 — The 10:1 Edition</a>. Short tour to today:
			</p>
			<ul>
				<li>
					<strong>1.5.x</strong> — calibration. Per-model factors on every call path. Not a blog.
				</li>
				<li>
					<strong>1.6.0–1.6.1</strong> — worker already returns <code>fee_usd</code> 0. House
					credit is $20. Identity still drifting in the tarball.
				</li>
				<li>
					<strong>1.6.2–1.6.3</strong> — The Fixed Deal in the tarball. Try path first
					(<code>bunx</code>).
				</li>
				<li>
					<strong>1.6.5</strong> — rebuilt tarball. Live ladder. This is the log entry for the
					stretch.
				</li>
			</ul>
		</section>

		<section>
			<h2>What 1.6.5 is</h2>
			<p>
				<strong>Lesson:</strong> the deal the meter runs is the deal the tarball must say.
			</p>
			<p>
				Models change. Windows grow. Slash adapts — you keep building. Cheaper tokens haven't
				shrunk the bill — usage has.
			</p>
			<p>
				<code>preflight()</code> is analysis — every cheaper option, all providers.
				<code>preflightRoute()</code> is what Slash would actually route (same provider). CLI is a
				scan of source, not a trace of runtime. <code>--version</code> / <code>--help</code> are
				not flags — they scan the current directory. Pin proof:
				<code>npm view <NpmPkg name="slash-tokens" version="1.6.5" /> version</code>.
			</p>
			<p>
				No Team/Solo price change. 10% is the comparison, waived — not a skim.
			</p>
		</section>

		<section>
			<h2>Try it</h2>
			<p><strong>Try</strong> (no account — run in a project that calls an LLM API):</p>
			<div class="terminal-block">
				<code>bunx slash-tokens</code>
				<code>npx --yes slash-tokens</code>
			</div>
			<p><strong>Install</strong> (SDK):</p>
			<div class="terminal-block">
				<code>npm install <NpmPkg name="slash-tokens" version="1.6.5" /></code>
			</div>
			<div class="terminal-block">
				<code>{`import { preflight, preflightRoute } from 'slash-tokens'`}</code>
				<code>{`const check = preflight(prompt, 'claude-opus-5')`}</code>
				<code>{`const route = preflightRoute(prompt, 'claude-opus-5')`}</code>
			</div>
			<p class="muted-note">
				See it work:
				<a
					href="https://slash-nextjs-wofejams-projects.vercel.app"
					target="_blank"
					rel="noopener">live chat</a
				>
				·
				<a href="https://mcpaas.live/slash/setup" target="_blank" rel="noopener"
					>key — $20 on the house</a
				>
				·
				<a href="https://slashtokens.com" target="_blank" rel="noopener">Team — $39 for the data</a
				>
				·
				<a href="/blog/slash-tokens-10-1">10:1 (v1.4.0)</a>
				·
				<a href="/blog/slash-tokens-launch">launch (v1.2.0)</a>
				·
				<a href="https://github.com/Wolfe-Jam/slash-tokens" target="_blank" rel="noopener">repo</a>.
			</p>
		</section>

		<section>
			<h2>Technical details</h2>
			<ul>
				<li><strong>Version:</strong> 1.6.5 (August 25, 2026)</li>
				<li><strong>Package:</strong> npm <code>slash-tokens</code></li>
				<li><strong>Try:</strong> <code>bunx</code> — no account</li>
				<li><strong>Install:</strong> <code>npm install</code> — SDK</li>
				<li><strong>WASM:</strong> 4.8 KB · sub-millisecond · zero dependencies</li>
				<li><strong>Tests:</strong> 171 pass, 2 skip (<code>cd npm && bun test</code>)</li>
				<li>
					<strong>Live ladder:</strong> Grok 4.6 / 4.3 · GPT-5.6 Sol / Terra / Luna · Claude Opus
					5 / Sonnet 5 / Haiku 4.5 · Gemini 3.5 Flash-Lite
				</li>
				<li>
					<strong>Deal:</strong> Solo $20 mailbox, 10% waived. Team $39 / $390 year. 10% is the
					comparison, not a skim.
				</li>
			</ul>
		</section>

		<section class="feedback-invite">
			<h2>Feedback welcome</h2>
			<p>Questions, nits, suggestions — guide the next version. Tell us what you want to see.</p>
			<div class="feedback-actions">
				<a href={xIntent} target="_blank" rel="noopener" class="feedback-btn">Post on X</a>
				<a
					href="https://github.com/Wolfe-Jam/slash-tokens/issues/new"
					target="_blank"
					rel="noopener"
					class="feedback-btn secondary"
				>
					Tell us on GitHub
				</a>
			</div>
		</section>

		<section class="footer-note">
			<p>Built with .faf ☑️ We show the savings. We don't skim. ⚡</p>
			<p>
				<a href="https://slashtokens.com">slashtokens.com</a>
			</p>
		</section>
	</article>
</div>
</div>

<style>
	/* Class is added/removed with this route so !important cannot leak. */
	:global(html.slash-white),
	:global(html.slash-white body) {
		background: #ffffff !important;
		color: #1a1a1a !important;
	}

	.slash-canvas {
		min-height: 100vh;
		width: 100vw;
		margin-left: calc(50% - 50vw);
		margin-right: calc(50% - 50vw);
		background: #ffffff;
		color: #1a1a1a;
	}

	.blog-post {
		max-width: 760px;
		margin: 0 auto;
		padding: 2rem 1rem 4rem;
		color: #1a1a1a;
		background: #ffffff;
		font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
		line-height: 1.7;
	}

	.post-header {
		margin-bottom: 2rem;
		border-bottom: 3px solid #ff4400;
		padding-bottom: 1.75rem;
	}

	.breadcrumb {
		font-size: 0.85rem;
		margin-bottom: 1.25rem;
		color: #555;
	}
	.breadcrumb a {
		color: #ff4400;
		text-decoration: none;
		font-weight: 600;
	}
	.breadcrumb a:hover {
		text-decoration: underline;
	}

	.mark {
		display: flex;
		align-items: center;
		gap: 0.4rem;
		color: #ff4400;
		font-weight: 900;
		font-size: 1.05rem;
		letter-spacing: -0.03em;
		margin: 0 0 0.65rem;
	}
	.mark svg {
		display: block;
	}

	h1 {
		font-size: 2.4rem;
		font-weight: 900;
		margin: 0 0 0.5rem;
		color: #1a1a1a;
		letter-spacing: -0.03em;
		line-height: 1.1;
	}

	.version-tag {
		display: inline-block;
		background: #ff4400;
		color: #fff;
		font-weight: 700;
		font-size: 0.9rem;
		margin: 0 0 0.65rem;
		padding: 0.2rem 0.7rem;
		border-radius: 4px;
		font-family: 'Roboto Mono', 'SF Mono', Menlo, monospace;
	}

	.subtitle {
		font-size: 1.2rem;
		font-weight: 700;
		margin: 0 0 1rem;
		color: #ff4400;
	}

	.meta {
		font-size: 0.9rem;
		color: #555;
		display: flex;
		align-items: center;
		gap: 0.6rem;
	}
	.separator {
		color: #bbb;
	}
	.category {
		padding: 0.2rem 0.7rem;
		border-radius: 4px;
		font-size: 0.78rem;
		font-weight: 700;
		color: #fff;
		text-transform: uppercase;
		letter-spacing: 0.04em;
	}
	.category.release {
		background: #ff4400;
	}

	.hero-image {
		margin: 0 0 2.5rem;
		border-radius: 12px;
		overflow: hidden;
		border: 1px solid #1a1a1a;
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
		font-weight: 800;
		margin: 0 0 1rem;
		color: #1a1a1a;
		letter-spacing: -0.02em;
	}

	.post-content p {
		margin: 0 0 1rem;
		color: #1a1a1a;
	}
	.post-content a {
		color: #ff4400;
		font-weight: 600;
		text-decoration: none;
	}
	.post-content a:hover {
		text-decoration: underline;
	}

	.lead {
		font-size: 1.15rem;
		padding: 1.25rem 1.35rem;
		background: #ffffff;
		border-radius: 8px;
		border: 1px solid #1a1a1a;
		border-left: 4px solid #ff4400;
		color: #1a1a1a;
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
		color: #ff4400;
	}
	.plain-english p {
		margin: 0 0 0.85rem;
		color: #1a1a1a;
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
		background: #1a1a1a;
		color: #fff;
		padding: 0.12rem 0.4rem;
		border-radius: 4px;
		font-family: 'Roboto Mono', 'SF Mono', Menlo, monospace;
		font-size: 0.9em;
	}

	.muted-note {
		font-size: 0.9rem;
		color: #555;
	}

	.terminal-block {
		background: #0a0a0a;
		border: 1px solid #1a1a1a;
		border-radius: 8px;
		padding: 1rem 1.25rem;
		margin: 1.25rem 0;
		display: flex;
		flex-direction: column;
		gap: 0.4rem;
	}
	.terminal-block code {
		background: transparent;
		color: #ff4400;
		padding: 0;
		font-family: 'Roboto Mono', 'SF Mono', Menlo, monospace;
		font-size: 0.95rem;
		font-weight: 600;
	}

	.feedback-invite {
		margin-top: 1rem;
		padding: 1.5rem 1.35rem;
		background: #ffffff;
		border-radius: 10px;
		border: 1px solid #1a1a1a;
		border-left: 4px solid #ff4400;
	}
	.feedback-invite h2 {
		margin-top: 0;
		color: #1a1a1a;
	}
	.feedback-invite p {
		margin-bottom: 1.15rem;
		color: #1a1a1a;
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
		background: #ffffff;
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
		border-top: 1px solid #1a1a1a;
		font-size: 0.95rem;
		color: #555;
	}
</style>
