<script lang="ts">
	import { buildShareIntent } from '#lib/shareIntent.js';
	import NpmPkg from '#lib/NpmPkg.svelte';

	const shareText = `🏁 Just shipped: faf-cli v8.4.0 — The Skills Edition

FAF has known Skills for a while; we both speak YAML.
Now it's official: FAF adds Skills to the CLI.

A SKILL.md repo is skills (9 slots).
One shipped as a plugin is skills-plugin (12).

26 app types · 2226 tests

npx faf-cli@8.4.0 auto

Help guide what we build —
Comments · suggestions welcome.`;
	const shareUrl = 'https://faf.one/blog/skills-edition';
	const xIntent = buildShareIntent({ text: shareText, url: shareUrl });
</script>

<svelte:head>
	<title>The Skills Edition - faf-cli v8.4.0 | FAF</title>
	<meta
		name="description"
		content="faf knows skills: a SKILL.md repo is skills (9 slots), one shipped as a plugin is skills-plugin (12)."
	/>
	<meta property="og:title" content="The Skills Edition - faf-cli v8.4.0" />
	<meta
		property="og:description"
		content="A SKILL.md repo is skills (9 slots). One shipped as a plugin is skills-plugin (12)."
	/>
	<meta property="og:type" content="article" />
	<meta property="og:url" content="https://faf.one/blog/skills-edition" />
	<meta property="og:site_name" content=".faf Format Authority" />
	<meta property="og:image" content="https://faf.one/blog/skills-edition-hero.png" />
	<meta property="og:image:secure_url" content="https://faf.one/blog/skills-edition-hero.png" />
	<meta property="og:image:type" content="image/png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta
		property="og:image:alt"
		content="faf-cli v8.4.0, The Skills Edition: faf knows Skills"
	/>
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@fafformat" />
	<meta name="twitter:creator" content="@wolfe_jam" />
	<meta name="twitter:title" content="The Skills Edition - faf-cli v8.4.0" />
	<meta
		name="twitter:description"
		content="A SKILL.md repo is skills (9 slots). One shipped as a plugin is skills-plugin (12)."
	/>
	<meta name="twitter:image" content="https://faf.one/blog/skills-edition-hero.png" />
	<meta
		name="twitter:image:alt"
		content="faf-cli v8.4.0, The Skills Edition: faf knows Skills"
	/>
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / The Skills Edition
		</div>
		<h1>The Skills Edition</h1>
		<p class="version-tag">faf-cli v8.4.0</p>
		<p class="subtitle">
			FAF has known Skills for a while; we both speak YAML. Now it's official: FAF adds Skills to
			the CLI.
		</p>
		<div class="meta">
			<time datetime="2026-10-25">October 25, 2026</time>
			<span class="separator">•</span>
			<span class="category release">Release</span>
		</div>
	</header>

	<div class="hero-image">
		<img
			src="/blog/skills-edition-hero.png"
			alt="faf-cli v8.4.0, The Skills Edition: faf knows Skills"
			width="1200"
			height="630"
			loading="eager"
			decoding="async"
		/>
	</div>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> <strong
					>faf knows skills: a SKILL.md repo is <code>skills</code> (9 slots), one shipped as a plugin
					is <code>skills-plugin</code> (12).</strong
				>
			</p>
			<div class="lead plain-english">
				<p class="plain-label">In Plain English</p>
				<p>
					<strong>Old state.</strong> A repo of Skills is folders of <code>SKILL.md</code> files: plain
					English instructions for AI, with YAML at the top. faf had no app-type for it, so it was
					scored as a library.
				</p>
				<p>
					<strong>Fix.</strong> Two new app-types. A repo of Skills is <code>skills</code>. Skills
					published as a plugin, with a build and CI, are <code>skills-plugin</code>.
				</p>
				<p>
					<strong>New state.</strong> faf asks a Skills repo only for the slots it has. The rest are
					marked slotignored: not part of this kind of project.
				</p>
			</div>
			<div class="terminal-block">
				<code>project:</code>
				<code>  type: skills   # or: skills-plugin</code>
			</div>
		</section>

		<section>
			<h2>What 8.4 is</h2>
			<p>
				Every .faf has 33 slots. The app-type says which ones the project needs; the others are
				slotignored. App-types are types of projects, not types of file.
			</p>
			<ul>
				<li>
					<strong><code>skills</code></strong>: <code>SKILL.md</code> folders with no pipeline. The
					project and the people behind it: 9 slots.
				</li>
				<li>
					<strong><code>skills-plugin</code></strong>: skills shipped as a plugin. Adds hosting, build
					and CI/CD: 12 slots.
				</li>
				<li><strong>26 app-types</strong> on the ladder now.</li>
			</ul>
			<p>A folder with one SKILL.md, from a clean start:</p>
			<div class="terminal-block">
				<code># project.faf: type: skills</code>
				<code>faf auto</code>
				<code># 9 slots count; the other 24 are slotignored</code>
			</div>
		</section>

		<section>
			<h2>Also in 8.4.0</h2>
			<ul>
				<li>
					<strong>What goes in a slot.</strong> A new section in the guide: one succinct fact per
					slot, text or a number. Write the app-type's own name: <code>cli</code>, not
					<code>cli-tool</code>; <code>mcp</code>, not <code>mcp-server</code>. A name faf doesn't
					know is treated as <code>library</code>.
				</li>
				<li>
					<strong>A .faf whose aliases expand too far</strong> is now one line, not a stack trace.
					It was already safe; now <code>faf score</code> and <code>faf check</code> say so.
				</li>
				<li><strong><code>faf hooks-run</code></strong> exits once its line is written.</li>
				<li><strong><code>faf taf setup</code></strong> pins faf-taf-git v2.3.1.</li>
			</ul>
		</section>

		<section>
			<h2>Try it</h2>
			<div class="terminal-block">
				<code>npx --yes <NpmPkg name="faf-cli" version="8.4.0" /> --version</code>
				<code>cd your-project</code>
				<code>npx --yes <NpmPkg name="faf-cli" version="8.4.0" /> auto</code>
				<code>npx --yes <NpmPkg name="faf-cli" version="8.4.0" /> score</code>
			</div>
			<p class="muted-note">
				Open <code>project.faf</code>: <code>project.type</code> and <code># found:</code> say how faf
				read the repo. Or install it: <code>npm i -g <NpmPkg name="faf" version="8.4.0" /></code>, then
				<code>faf auto</code>. Homebrew has 8.4.0 too.
			</p>
		</section>

		<section>
			<h2>Technical details</h2>
			<ul>
				<li><strong>Version:</strong> 8.4.0 (October 24, 2026)</li>
				<li><strong>Packages:</strong> <code>faf-cli</code> and <code>faf</code> on npm (same build) · Homebrew</li>
				<li><strong>Tests:</strong> 2226 passing</li>
				<li>
					<strong>Slots:</strong> <code>skills</code> = project + human (9) ·
					<code>skills-plugin</code> = project + human + universal (12)
				</li>
				<li>
					<strong>Docs:</strong>
					<a
						href="https://github.com/Wolfe-Jam/faf-cli/blob/main/docs/SCORING.md"
						target="_blank"
						rel="noopener">SCORING.md</a
					>
					·
					<a
						href="https://github.com/Wolfe-Jam/faf-cli/blob/main/docs/GUIDE.md"
						target="_blank"
						rel="noopener">GUIDE.md</a
					>
				</li>
				<li>
					<strong>Notes:</strong>
					<a href="https://github.com/Wolfe-Jam/faf-cli/releases/tag/v8.4.0" target="_blank" rel="noopener">v8.4.0</a>
				</li>
			</ul>
		</section>

		<section class="feedback-invite">
			<h2>Feedback welcome</h2>
			<p>Questions, nits, suggestions — guide the next version. Tell us what you want to see.</p>
			<div class="feedback-actions">
				<a href={xIntent} target="_blank" rel="noopener" class="feedback-btn">Post on X</a>
				<a
					href="https://github.com/Wolfe-Jam/faf-cli/issues/new"
					target="_blank"
					rel="noopener"
					class="feedback-btn secondary"
				>
					Tell us on GitHub
				</a>
			</div>
		</section>

		<section class="footer-note">
			<p>Built with .faf ☑️ We both speak YAML. 🏎️</p>
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

	.feedback-invite {
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

	.footer-note {
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
