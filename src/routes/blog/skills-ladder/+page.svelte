<script lang="ts">
	import { buildShareIntent } from '#lib/shareIntent.js';
	import NpmPkg from '#lib/NpmPkg.svelte';

	const shareText = `🏁 Just shipped: skills-ladder v0.1.1

A skill tells an agent what to do. The spec has no field for what it writes, whether it publishes, or when it's done.

The FAF Block glues those facts into the skill.
skills-ladder checks they're there: GOOD · BETTER · BEST.

Read-only · Node 22+ · MIT

npx skills-ladder .

Help guide what we build —
Comments · suggestions welcome.`;
	const shareUrl = 'https://faf.one/blog/skills-ladder';
	const xIntent = buildShareIntent({ text: shareText, url: shareUrl });

	const block = `v: 1
needs: [git, gh >= 2.40]
reads: [git history, GitHub pull requests]
writes: [CHANGELOG.md]
network: [github.com (read)]
publishes: false
done_when: CHANGELOG.md has one new section; nothing pushed`;
</script>

<svelte:head>
	<title>skills-ladder: Glue a Skill's Facts Into the Skill | FAF</title>
	<meta
		name="description"
		content="Glue a skill's facts into the skill, then check they're there. skills-ladder rates any SKILL.md GOOD, BETTER or BEST; BEST means its facts are in a FAF Block."
	/>
	<meta property="og:title" content="skills-ladder: Glue a Skill's Facts Into the Skill" />
	<meta
		property="og:description"
		content="The FAF Block puts a skill's facts at the top of its body. skills-ladder checks they're there: GOOD, BETTER, BEST."
	/>
	<meta property="og:type" content="article" />
	<meta property="og:url" content="https://faf.one/blog/skills-ladder" />
	<meta property="og:site_name" content=".faf Format Authority" />
	<meta property="og:image" content="https://faf.one/blog/skills-ladder-hero.png" />
	<meta property="og:image:secure_url" content="https://faf.one/blog/skills-ladder-hero.png" />
	<meta property="og:image:type" content="image/png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:image:alt" content="skills-ladder v0.1.1: glue a skill's facts into the skill" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@fafformat" />
	<meta name="twitter:creator" content="@wolfe_jam" />
	<meta name="twitter:title" content="skills-ladder: Glue a Skill's Facts Into the Skill" />
	<meta
		name="twitter:description"
		content="The FAF Block puts a skill's facts at the top of its body. skills-ladder checks they're there: GOOD, BETTER, BEST."
	/>
	<meta name="twitter:image" content="https://faf.one/blog/skills-ladder-hero.png" />
	<meta name="twitter:image:alt" content="skills-ladder v0.1.1: glue a skill's facts into the skill" />
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / skills-ladder
		</div>
		<h1>Glue a Skill's Facts Into the Skill</h1>
		<p class="version-tag">skills-ladder v0.1.1</p>
		<p class="subtitle">Glue a skill's facts into the skill, then check they're there.</p>
		<div class="meta">
			<time datetime="2026-10-25">October 25, 2026</time>
			<span class="separator">•</span>
			<span class="category launch">Launch</span>
		</div>
	</header>

	<div class="hero-image">
		<img
			src="/blog/skills-ladder-hero.png"
			alt="skills-ladder v0.1.1: glue a skill's facts into the skill"
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
					>skills-ladder is on npm. It rates any <code>SKILL.md</code> GOOD, BETTER or BEST. BEST means
					the skill's facts are in a FAF Block.</strong
				>
			</p>
			<div class="lead plain-english">
				<p class="plain-label">In Plain English</p>
				<p>
					<strong>Old state.</strong> A skill tells an agent when to use it and what to do. The format has
					one free-text line for environment needs (<code>compatibility</code>), and no field for what the
					skill reads and writes, whether it publishes, or when it's done.
				</p>
				<p>
					<strong>Fix.</strong> A FAF Block: those facts as YAML at the top of the skill's body, between
					two markers.
				</p>
				<p>
					<strong>New state.</strong> The agent has every fact the moment it opens the skill.
					skills-ladder checks they're there.
				</p>
			</div>
		</section>

		<section>
			<h2>The FAF Block</h2>
			<p>
				An agent chooses a skill by its description, then follows its body. The
				<a href="https://agentskills.io/specification" target="_blank" rel="noopener"
					>Agent Skills specification</a
				> covers the choosing, plus an optional free-text <code>compatibility</code> line. A FAF Block
				(also called a Context Block) carries the rest as named facts:
			</p>
			<div class="terminal-block">
				<code>{block}</code>
			</div>
			<ul>
				<li><strong>One set of facts.</strong> What it needs, reads and writes, where it reaches, whether it publishes, when it's done.</li>
				<li>
					<strong><code>done_when</code></strong> is the finished state of the work, never a step in the
					conversation: an agent stops at whatever it names.
				</li>
				<li>
					<strong>Valid in any skill today.</strong> The spec puts no rules on the body, and the body
					loads only when the skill is used, so the block costs nothing while an agent is choosing.
				</li>
			</ul>
		</section>

		<section>
			<h2>The ladder</h2>
			<ul>
				<li>
					<strong>GOOD:</strong> valid. The specification's hard rules, the same ones its reference
					validator (<code>skills-ref</code>) checks.
				</li>
				<li>
					<strong>BETTER:</strong> says what it does and when to use it, what it needs, what it touches,
					its steps, and when it's done.
				</li>
				<li><strong>BEST:</strong> BETTER, with those facts in a FAF Block.</li>
			</ul>
			<p>
				The specification asks only for GOOD. BETTER and BEST are our view of what an agent needs
				beyond that. Read-only: skills-ladder never changes a file.
			</p>
		</section>

		<section>
			<h2>We ran it on ours first</h2>
			<p>
				The seven FAF Skills were all GOOD. Each got a FAF Block with facts taken from its own text, and
				all seven went to BEST (<a
					href="https://github.com/Wolfe-Jam/faf-skills/pull/12"
					target="_blank"
					rel="noopener">faf-skills #12</a
				>). Along the way they found two bugs in the checker, both fixed with tests.
			</p>
			<p>
				A skill's block can point to its repo's <code>project.faf</code>: a small YAML file of
				structured facts that define the project's context for AI, registered with IANA as
				<a
					href="https://www.iana.org/assignments/media-types/application/vnd.faf+yaml"
					target="_blank"
					rel="noopener"><code>application/vnd.faf+yaml</code></a
				>. faf-cli knows Skills repos as the app-types <code>skills</code> and
				<code>skills-plugin</code>.
			</p>
		</section>

		<section>
			<h2>Try it</h2>
			<div class="terminal-block">
				<code>npx --yes <NpmPkg name="skills-ladder" version="0.1.1" /> .</code>
				<code># in CI: fail when a skill is below a rung</code>
				<code>npx --yes <NpmPkg name="skills-ladder" version="0.1.1" /> skills --fail-under BETTER</code>
			</div>
			<p class="muted-note">
				Needs Node 22 or later. <code>--json</code> for machines, <code>--all</code> to see every check.
				Or install it: <code>npm install -g <NpmPkg name="skills-ladder" version="0.1.1" /></code>.
			</p>
		</section>

		<section>
			<h2>Technical details</h2>
			<ul>
				<li><strong>Version:</strong> 0.1.1 (October 25, 2026)</li>
				<li><strong>Package:</strong> <code>skills-ladder</code> on npm · MIT · Node 22+</li>
				<li><strong>Tests:</strong> 28 passing · CI on Ubuntu, macOS and Windows, Node 22 and 24</li>
				<li><strong>Library:</strong> <code>import &#123; checkPath &#125; from "skills-ladder"</code></li>
				<li>
					<strong>Docs:</strong>
					<a href="https://github.com/Wolfe-Jam/skills-ladder#readme" target="_blank" rel="noopener"
						>README</a
					>
					·
					<a
						href="https://github.com/Wolfe-Jam/skills-ladder/releases/tag/v0.1.1"
						target="_blank"
						rel="noopener">v0.1.1</a
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
					href="https://github.com/Wolfe-Jam/skills-ladder/issues/new"
					target="_blank"
					rel="noopener"
					class="feedback-btn secondary"
				>
					Tell us on GitHub
				</a>
			</div>
		</section>

		<section class="footer-note">
			<p>Built with .faf ☑️ Facts, glued in. 🏎️</p>
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
		color: #fff; /* literal-ok: Launch pill text, paired with its category bg */
	}
	.category.launch {
		background: var(--faf-orange);
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
		border-left: 4px solid var(--faf-orange);
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
		border-left: 4px solid var(--faf-orange);
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
