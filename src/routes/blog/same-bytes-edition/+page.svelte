<!-- pubblog Release. Structure from mcp-better-matching-client. Styles from the token release posts. -->
<script lang="ts">
	import { buildShareIntent } from '#lib/shareIntent.js';
	import NpmPkg from '#lib/NpmPkg.svelte';

	const shareText = `🏁 Just shipped: faf-zeph v0.1.0 — The Same Bytes Edition

The wasm you install is the wasm in the repo.

Reference .faf scored 100 · 2,986 bytes · same file

npm install faf-zeph

Help guide what we build —
Comments · suggestions · shares welcome.`;
	const shareUrl = 'https://faf.one/blog/same-bytes-edition';
	const xIntent = buildShareIntent({ text: shareText, url: shareUrl });
	const sample = `import { load } from "faf-zeph";

const zeph = await load();
const value = zeph.score(fafText);`;
</script>

<svelte:head>
	<title>The Same Bytes Edition - faf-zeph v0.1.0 | FAF</title>
	<meta
		name="description"
		content="Loads the ZEPH wasm and calls score, validate, tier, and find_section. The wasm in the install is the wasm in the repo."
	/>
	<meta property="og:title" content="The Same Bytes Edition - faf-zeph v0.1.0" />
	<meta
		property="og:description"
		content="Loads the ZEPH wasm and calls score, validate, tier, and find_section."
	/>
	<meta property="og:type" content="article" />
	<meta property="og:url" content="https://faf.one/blog/same-bytes-edition" />
	<meta property="og:site_name" content=".faf Format Authority" />
	<meta property="og:image" content="https://faf.one/blog/same-bytes-edition-hero.png" />
	<meta
		property="og:image:secure_url"
		content="https://faf.one/blog/same-bytes-edition-hero.png"
	/>
	<meta property="og:image:type" content="image/png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta
		property="og:image:alt"
		content="The Same Bytes Edition — faf-zeph v0.1.0 · the wasm you install is the wasm in the repo"
	/>
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@fafformat" />
	<meta name="twitter:creator" content="@wolfe_jam" />
	<meta name="twitter:title" content="The Same Bytes Edition - faf-zeph v0.1.0" />
	<meta
		name="twitter:description"
		content="Loads the ZEPH wasm and calls score, validate, tier, and find_section."
	/>
	<meta name="twitter:image" content="https://faf.one/blog/same-bytes-edition-hero.png" />
	<meta
		name="twitter:image:alt"
		content="The Same Bytes Edition — faf-zeph v0.1.0 · the wasm you install is the wasm in the repo"
	/>
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / The Same Bytes Edition
		</div>
		<h1>The Same Bytes Edition</h1>
		<p class="version-tag">faf-zeph v0.1.0</p>
		<p class="subtitle">
			Loads the ZEPH wasm and calls score, validate, tier, and find_section.
		</p>
		<div class="meta">
			<time datetime="2026-11-03">November 3, 2026</time>
			<span class="separator">•</span>
			<span class="category release">Release</span>
		</div>
	</header>

	<div class="hero-image">
		<img
			src="/blog/same-bytes-edition-hero.png"
			alt="The Same Bytes Edition — faf-zeph v0.1.0 · the wasm you install is the wasm in the repo"
			width="1200"
			height="630"
			loading="eager"
			decoding="async"
		/>
	</div>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> Loads the ZEPH wasm and calls score, validate, tier, and
				find_section. The wasm in the package is the wasm in the repo. 2,986 bytes. A clean
				install scored the reference <code>.faf</code> at 100.
			</p>
			<div class="lead plain-english">
				<p class="plain-label">In Plain English</p>
				<p>
					<strong>Old state.</strong> The wasm lived as a file in the repository. Using it meant
					taking that file and writing the call yourself.
				</p>
				<p>
					<strong>Fix.</strong> <code>faf-zeph</code> puts that same file in an npm package.
					<code>load()</code> is the call.
				</p>
				<p>
					<strong>New state.</strong> Install it, pass your <code>.faf</code> text, and call
					score, validate, tier, and find_section. The file you installed matches the file in
					the repo. On a clean install, the reference document scored 100.
				</p>
			</div>
			<div class="terminal-block">
				<code>npm install <NpmPkg name="faf-zeph" version="0.1.0" /></code>
			</div>
			<p class="muted-note">
				Needs Node 18 or newer. There is no command-line tool. The install is the library.
			</p>
		</section>

		<section>
			<h2>What happened since The ZEPH Edition</h2>
			<p>
				One blog, one arc. The last ZEPH write-up was
				<a href="/blog/zeph-edition">The ZEPH Edition</a>, grok-faf-mcp v1.6.0, on June 20. That
				post is the server. This post is the package.
			</p>
			<ul>
				<li>
					<strong>June 20</strong> — the server post. The wasm stayed a file you fetched.
				</li>
				<li>
					<strong>faf-zeph 0.1.0</strong> — the same wasm, as an npm install. This is the log
					entry.
				</li>
			</ul>
		</section>

		<section>
			<h2>What 0.1.0 is</h2>
			<p>
				<strong>The bytes match.</strong> The wasm inside the package is
				<code>docs/cascade.wasm</code> in
				<a
					href="https://github.com/Wolfe-Jam/xai-faf-zeph/blob/faf-zeph-0.1.0/docs/cascade.wasm"
					target="_blank"
					rel="noopener">xai-faf-zeph</a
				>. Both files are 2,986 bytes. Both hash to
				<code>e0e7f7cbe81a1f56c96e201300b47324</code>.
			</p>
			<p>
				<code>load()</code> reads that file. Then you call <code>score</code>,
				<code>validate</code>, <code>tier</code>, and <code>findSection</code>.
				<code>score</code> takes the <code>.faf</code> document as a string. A clean install
				scored the reference document in the repo at 100. A missing section returns
				<code>4294967295</code>.
			</p>
			<p class="muted-note">
				This post does not publish a timing number. The package does not time itself.
			</p>
		</section>

		<section>
			<h2>Try it</h2>
			<p><strong>Install</strong></p>
			<div class="terminal-block">
				<code>npm install <NpmPkg name="faf-zeph" version="0.1.0" /></code>
			</div>
			<p><strong>Call it</strong></p>
			<div class="terminal-block">
				<code>{sample}</code>
			</div>
			<p class="muted-note">
				<code>fafText</code> is your <code>.faf</code> document.
				<a href="https://www.npmjs.com/package/faf-zeph" target="_blank" rel="noopener">npm</a>
				·
				<a href="https://github.com/Wolfe-Jam/xai-faf-zeph" target="_blank" rel="noopener">repo</a>
				·
				<a
					href="https://github.com/Wolfe-Jam/xai-faf-zeph/releases/tag/faf-zeph-0.1.0"
					target="_blank"
					rel="noopener">release</a
				>.
			</p>
		</section>

		<section>
			<h2>Technical details</h2>
			<ul>
				<li><strong>Version:</strong> 0.1.0 (November 3, 2026)</li>
				<li><strong>Edition:</strong> The Same Bytes Edition</li>
				<li><strong>Package:</strong> faf-zeph on npm. MIT. Node 18 or newer.</li>
				<li>
					<strong>Calls:</strong> <code>score</code>, <code>validate</code>, <code>tier</code>,
					<code>find_section</code>
				</li>
				<li><strong>Wasm:</strong> 2,986 bytes, the same file as <code>docs/cascade.wasm</code></li>
				<li><strong>Receipt:</strong> reference <code>.faf</code> scored 100 on a clean install</li>
				<li><strong>Missing section:</strong> <code>4294967295</code></li>
				<li>
					<strong>Contact:</strong>
					<a href="mailto:team@faf.one">team@faf.one</a>
				</li>
			</ul>
		</section>

		<section class="feedback-invite">
			<h2>Feedback welcome</h2>
			<p>Questions, nits, suggestions — guide the next version. Tell us what you want to see.</p>
			<div class="feedback-actions">
				<a href={xIntent} target="_blank" rel="noopener" class="feedback-btn">Post on X</a>
				<a
					href="https://github.com/Wolfe-Jam/xai-faf-zeph/issues/new"
					target="_blank"
					rel="noopener"
					class="feedback-btn secondary"
				>
					Tell us on GitHub
				</a>
			</div>
		</section>

		<section class="footer-note">
			<p>Built with .faf ☑️ The wasm you install is the wasm in the repo. 🏎️</p>
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
