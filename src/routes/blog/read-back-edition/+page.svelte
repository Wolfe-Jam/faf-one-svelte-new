<!-- pubblog Release. Structure from mcp-better-matching-client. Styles from the token release posts. -->
<script lang="ts">
	import { buildShareIntent } from '#lib/shareIntent.js';

	const shareText = `🏁 Just shipped: grok-faf-voice v0.6.0 — The Read-Back Edition

Nothing is saved until the holder hears it back and says yes.

"Yes." saves · a correction does not · a later yes does not
Six of six live turns on 5987357

uv add grok-faf-voice==0.6.0

Help guide what we build —
Comments · suggestions · shares welcome.`;
	const shareUrl = 'https://faf.one/blog/read-back-edition';
	const xIntent = buildShareIntent({ text: shareText, url: shareUrl });
</script>

<svelte:head>
	<title>The Read-Back Edition - grok-faf-voice v0.6.0 | FAF</title>
	<meta
		name="description"
		content="Nothing is saved until the holder hears it back and says yes."
	/>
	<meta property="og:title" content="The Read-Back Edition - grok-faf-voice v0.6.0" />
	<meta
		property="og:description"
		content="Nothing is saved until the holder hears it back and says yes."
	/>
	<meta property="og:type" content="article" />
	<meta property="og:url" content="https://faf.one/blog/read-back-edition" />
	<meta property="og:site_name" content=".faf Format Authority" />
	<meta property="og:image" content="https://faf.one/blog/read-back-edition-hero.png" />
	<meta
		property="og:image:secure_url"
		content="https://faf.one/blog/read-back-edition-hero.png"
	/>
	<meta property="og:image:type" content="image/png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta
		property="og:image:alt"
		content="The Read-Back Edition — grok-faf-voice v0.6.0 · nothing is saved until the holder hears it back and says yes"
	/>
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@fafformat" />
	<meta name="twitter:creator" content="@wolfe_jam" />
	<meta name="twitter:title" content="The Read-Back Edition - grok-faf-voice v0.6.0" />
	<meta
		name="twitter:description"
		content="Nothing is saved until the holder hears it back and says yes."
	/>
	<meta name="twitter:image" content="https://faf.one/blog/read-back-edition-hero.png" />
	<meta
		name="twitter:image:alt"
		content="The Read-Back Edition — grok-faf-voice v0.6.0 · nothing is saved until the holder hears it back and says yes"
	/>
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / The Read-Back Edition
		</div>
		<h1>The Read-Back Edition</h1>
		<p class="version-tag">grok-faf-voice v0.6.0</p>
		<p class="subtitle">Nothing is saved until the holder hears it back and says yes.</p>
		<div class="meta">
			<time datetime="2026-11-04">November 4, 2026</time>
			<span class="separator">•</span>
			<span class="category release">Release</span>
		</div>
	</header>

	<div class="hero-image">
		<img
			src="/blog/read-back-edition-hero.png"
			alt="The Read-Back Edition — grok-faf-voice v0.6.0 · voices Ara, Eve, Leo, Rex, and Sal · nothing is saved until the holder hears it back and says yes"
			width="1200"
			height="630"
			loading="eager"
			decoding="async"
		/>
	</div>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> Nothing is saved until the holder hears it back and says yes.
				“Yes.” saves. A correction does not. A yes to a later question does not.
			</p>
			<div class="lead plain-english">
				<p class="plain-label">In Plain English</p>
				<p>
					<strong>Old state.</strong> With writing turned on, a remembered fact could be saved
					when the model decided to save it.
				</p>
				<p>
					<strong>Fix.</strong> The fact is read back. “Yes.” is the save.
				</p>
				<p>
					<strong>New state.</strong> A correction does not save. A yes to a later question
					does not save an earlier fact.
				</p>
			</div>
			<div class="terminal-block">
				<code>uv add grok-faf-voice==0.6.0</code>
				<code>pip3 install grok-faf-voice==0.6.0</code>
			</div>
			<p class="muted-note">
				<code>uv add</code> is the install. <code>pip3 install</code> is the same pin. Python
				3.10 or newer. There is no command-line tool, so there is no <code>uvx</code> line.
			</p>
		</section>

		<section>
			<h2>What happened since Voice Memory</h2>
			<p>
				One blog, one arc. The last grok-faf-voice write-up was
				<a href="/blog/voice-memory-layer">Voice Memory</a>, v0.1.3, on April 30. Short tour to
				today:
			</p>
			<ul>
				<li>
					<strong>0.5.0 — The Ask-First Memory Edition</strong> — the session opens on the
					memory at the namepoint, and writes the call back only when writing is turned on.
					Not a blog.
				</li>
				<li>
					<strong>0.6.0 — The Read-Back Edition</strong> — nothing is saved until the holder
					hears it back and says yes. This is the log entry.
				</li>
			</ul>
		</section>

		<section>
			<h2>What 0.6.0 is</h2>
			<p>
				<strong>Nothing is saved until the holder hears it back and says yes.</strong> “Yes.”
				saves. A correction does not. A yes to a later question does not save the earlier fact.
			</p>
			<p>
				<code>forget</code> keeps the date as an RFC 3339 string. On commit
				<code>5987357</code>, six of six live turns called the tool.
			</p>
			<p class="muted-note">
				The voice model is <code>grok-voice-3.0</code>. Those are the checks this cut proved.
				This post adds no other numbers.
			</p>
		</section>

		<section>
			<h2>Try it</h2>
			<p><strong>Install</strong></p>
			<div class="terminal-block">
				<code>uv add grok-faf-voice==0.6.0</code>
				<code>pip3 install grok-faf-voice==0.6.0</code>
			</div>
			<p><strong>Import</strong></p>
			<div class="terminal-block">
				<code>import grok_faf_voice</code>
			</div>
			<p class="muted-note">
				Cold-checked from PyPI: installs and imports.
				<a href="https://pypi.org/project/grok-faf-voice/0.6.0/" target="_blank" rel="noopener"
					>PyPI</a
				>
				·
				<a href="https://github.com/Wolfe-Jam/grok-faf-voice" target="_blank" rel="noopener"
					>repo</a
				>
				·
				<a
					href="https://github.com/Wolfe-Jam/grok-faf-voice/releases/tag/v0.6.0"
					target="_blank"
					rel="noopener">release</a
				>.
			</p>
		</section>

		<section>
			<h2>Technical details</h2>
			<ul>
				<li><strong>Version:</strong> 0.6.0 (November 4, 2026)</li>
				<li><strong>Edition:</strong> The Read-Back Edition</li>
				<li><strong>Package:</strong> grok-faf-voice on PyPI. MIT. Python 3.10 or newer.</li>
				<li><strong>Model:</strong> <code>grok-voice-3.0</code></li>
				<li>
					<strong>Save:</strong> “Yes.” saves. A correction does not. A yes to a later question
					does not.
				</li>
				<li><strong>Forget:</strong> dates stay RFC 3339 strings</li>
				<li><strong>Live:</strong> six of six turns on commit <code>5987357</code></li>
				<li>
					<strong>Contact:</strong>
					<a href="mailto:team@faf.one">team@faf.one</a>
				</li>
			</ul>
		</section>

		<section class="feedback-invite">
			<h2>Feedback welcome</h2>
			<p>
				Help guide what we build — comments and suggestions are welcome. Tell us what you want
				to see.
			</p>
			<div class="feedback-actions">
				<a href={xIntent} target="_blank" rel="noopener" class="feedback-btn">Post on X</a>
				<a
					href="https://github.com/Wolfe-Jam/grok-faf-voice/issues/new"
					target="_blank"
					rel="noopener"
					class="feedback-btn secondary"
				>
					Tell us on GitHub
				</a>
			</div>
		</section>

		<section class="footer-note">
			<p>
				Built with .faf + .fafm ☑️ Nothing is saved until the holder hears it back and says yes.
			</p>
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
