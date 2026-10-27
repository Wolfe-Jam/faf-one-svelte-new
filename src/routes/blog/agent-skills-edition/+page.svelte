<script lang="ts">
	import { buildShareIntent } from '#lib/shareIntent.js';
	import NpmPkg from '#lib/NpmPkg.svelte';

	const shareText = `🏁 Just shipped: faf-cli v8.5.0 — The Agent Skills Edition

faf knows a skills repo when it sees one.

SKILL.md folders → skills (10 slots).
Add a plugin manifest → skills-plugin (14).
A CLI that ships a skill stays a CLI.

2246 tests

npx faf-cli@8.5.0 init

Help guide what we build —
Comments · suggestions welcome.`;
	const shareUrl = 'https://faf.one/blog/agent-skills-edition';
	const xIntent = buildShareIntent({ text: shareText, url: shareUrl });
</script>

<svelte:head>
	<title>The Agent Skills Edition - faf-cli v8.5.0 | FAF</title>
	<meta
		name="description"
		content="faf knows a skills repo when it sees one, and the skills types name their framework: skills is 10 slots, skills-plugin is 14."
	/>
	<meta property="og:title" content="The Agent Skills Edition - faf-cli v8.5.0" />
	<meta
		property="og:description"
		content="faf knows a skills repo when it sees one. skills is 10 slots, skills-plugin is 14."
	/>
	<meta property="og:type" content="article" />
	<meta property="og:url" content="https://faf.one/blog/agent-skills-edition" />
	<meta property="og:site_name" content=".faf Format Authority" />
	<meta property="og:image" content="https://faf.one/blog/agent-skills-edition-hero.png" />
	<meta property="og:image:secure_url" content="https://faf.one/blog/agent-skills-edition-hero.png" />
	<meta property="og:image:type" content="image/png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta
		property="og:image:alt"
		content="faf-cli v8.5.0, The Agent Skills Edition: faf knows a skills repo when it sees one"
	/>
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@fafformat" />
	<meta name="twitter:creator" content="@wolfe_jam" />
	<meta name="twitter:title" content="The Agent Skills Edition - faf-cli v8.5.0" />
	<meta
		name="twitter:description"
		content="faf knows a skills repo when it sees one. skills is 10 slots, skills-plugin is 14."
	/>
	<meta name="twitter:image" content="https://faf.one/blog/agent-skills-edition-hero.png" />
	<meta
		name="twitter:image:alt"
		content="faf-cli v8.5.0, The Agent Skills Edition: faf knows a skills repo when it sees one"
	/>
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / The Agent Skills Edition
		</div>
		<h1>The Agent Skills Edition</h1>
		<p class="version-tag">faf-cli v8.5.0</p>
		<p class="subtitle">
			8.4 gave skills their own app-types. 8.5 finds them on its own, and names the format.
		</p>
		<div class="meta">
			<time datetime="2026-10-27">October 27, 2026</time>
			<span class="separator">•</span>
			<span class="category release">Release</span>
		</div>
	</header>

	<div class="hero-image">
		<img
			src="/blog/agent-skills-edition-hero.png"
			alt="faf-cli v8.5.0, The Agent Skills Edition: faf knows a skills repo when it sees one"
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
					>faf knows a skills repo when it sees one, and the skills types name their framework:
					<code>skills</code> is 10 slots, <code>skills-plugin</code> is 14.</strong
				>
			</p>
			<div class="lead plain-english">
				<p class="plain-label">In Plain English</p>
				<p>
					<strong>Old state.</strong> faf had app-types for skills, but you had to write the type in
					yourself. Left to itself, faf read a repo of <code>SKILL.md</code> folders as a library.
				</p>
				<p>
					<strong>Fix.</strong> <code>faf init</code> now looks for <code>SKILL.md</code> folders,
					and for a Claude Code plugin manifest beside them.
				</p>
				<p>
					<strong>New state.</strong> A skills repo is read as one, and the file says why. The
					framework slot names the format: Agent Skills, or Claude Code plugin.
				</p>
			</div>
			<div class="terminal-block">
				<code>project:</code>
				<code>  type: skills-plugin  # found: 7 SKILL.md folders + .claude-plugin/plugin.json</code>
				<code>stack:</code>
				<code>  frontend: Claude Code plugin</code>
			</div>
		</section>

		<section>
			<h2>What 8.5 is</h2>
			<ul>
				<li>
					<strong><code>faf init</code> detects skills repos.</strong> <code>SKILL.md</code> folders
					(under <code>skills/</code>, at the top level, or one <code>SKILL.md</code> at the root)
					make a repo <code>skills</code>. Add <code>.claude-plugin/plugin.json</code> and it's
					<code>skills-plugin</code>.
				</li>
				<li>
					<strong>A code repo that ships a skill keeps its type.</strong> Skills are checked last,
					after every code signal. faf-cli ships <code>skills/faf-expert</code> and stays
					<code>cli</code>.
				</li>
				<li>
					<strong>Only real skills count.</strong> A project's own <code>.claude/skills</code>, and
					<code>SKILL.md</code> files deeper down (test fixtures), don't make it a skills repo.
				</li>
				<li>
					<strong><code>skills</code> is 10 slots</strong> (was 9): project + human, plus the
					framework.
				</li>
				<li>
					<strong><code>skills-plugin</code> is 14</strong> (was 12): project + human + universal,
					plus the framework and the runtime (what runs its build and scripts).
				</li>
				<li>
					<strong><code>faf auto</code> fills a slot the type adds</strong>, even where an older
					file says <code>slotignored</code>. It keeps the type a file already has.
				</li>
			</ul>
		</section>

		<section>
			<h2>Check the skills themselves</h2>
			<p>
				faf scores the repo. <a href="/blog/skills-ladder">skills-ladder</a> rates each
				<code>SKILL.md</code> inside it GOOD, BETTER or BEST.
			</p>
			<div class="terminal-block">
				<code>npx skills-ladder .</code>
			</div>
		</section>

		<section>
			<h2>Try it</h2>
			<div class="terminal-block">
				<code>npx --yes <NpmPkg name="faf-cli" version="8.5.0" /> --version</code>
				<code>cd your-skills-repo</code>
				<code>npx --yes <NpmPkg name="faf-cli" version="8.5.0" /> init</code>
				<code>npx --yes <NpmPkg name="faf-cli" version="8.5.0" /> score</code>
			</div>
			<p class="muted-note">
				Open <code>project.faf</code>: <code>project.type</code> and <code># found:</code> say how faf
				read the repo. A RED score on a new file is normal; the human slots are yours to fill. Or
				install it: <code>npm i -g <NpmPkg name="faf" version="8.5.0" /></code>, then
				<code>faf auto</code>. Homebrew has 8.5.0 too.
			</p>
		</section>

		<section>
			<h2>Technical details</h2>
			<ul>
				<li><strong>Version:</strong> 8.5.0 (October 26, 2026)</li>
				<li><strong>Packages:</strong> <code>faf-cli</code> and <code>faf</code> on npm (same build) · Homebrew</li>
				<li><strong>Tests:</strong> 2246 passing</li>
				<li>
					<strong>Slots:</strong> <code>skills</code> = project + human + framework (10) ·
					<code>skills-plugin</code> = project + human + universal + framework + runtime (14)
				</li>
				<li>
					<strong>Docs:</strong>
					<a
						href="https://github.com/Wolfe-Jam/faf-cli/blob/main/docs/SCORING.md"
						target="_blank"
						rel="noopener">SCORING.md</a
					>
				</li>
				<li>
					<strong>Notes:</strong>
					<a href="https://github.com/Wolfe-Jam/faf-cli/releases/tag/v8.5.0" target="_blank" rel="noopener">v8.5.0</a>
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
			<p>Built with .faf ☑️ It knows a skills repo when it sees one. 🏎️</p>
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
