<script lang="ts">
	import { buildShareIntent } from '#lib/shareIntent.js';
	import NpmPkg from '#lib/NpmPkg.svelte';

	const shareText = `🏁 Just shipped: faf-cli v8.11.0 — The Project Facts Edition

Your agents now know who the project is for, and why.

AGENTS.md points to project.faf.
CLAUDE.md, GEMINI.md, .cursorrules, Copilot and llms.txt carry the six W's: one rule, one line each.

2745 tests · npm + Homebrew

npx faf-cli@8.11.0 export

Help guide what we build —
Comments · suggestions welcome.`;
	const shareUrl = 'https://faf.one/blog/project-facts-edition';
	const xIntent = buildShareIntent({ text: shareText, url: shareUrl });
</script>

<svelte:head>
	<title>The Project Facts Edition - faf-cli v8.11.0 | FAF</title>
	<meta
		name="description"
		content="The six W's now reach every agent: AGENTS.md points to project.faf, and CLAUDE.md, GEMINI.md, .cursorrules, Copilot and llms.txt carry them, one rule, one line each."
	/>
	<meta property="og:title" content="The Project Facts Edition - faf-cli v8.11.0" />
	<meta
		property="og:description"
		content="The six W's now reach every agent: AGENTS.md points to project.faf; the other context files carry them, one line each."
	/>
	<meta property="og:type" content="article" />
	<meta property="og:url" content="https://faf.one/blog/project-facts-edition" />
	<meta property="og:site_name" content=".faf Format Authority" />
	<meta property="og:image" content="https://faf.one/blog/project-facts-edition-hero.png" />
	<meta property="og:image:secure_url" content="https://faf.one/blog/project-facts-edition-hero.png" />
	<meta property="og:image:type" content="image/png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta
		property="og:image:alt"
		content="faf-cli v8.11.0, The Project Facts Edition: the six W's reach every agent."
	/>
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@fafformat" />
	<meta name="twitter:creator" content="@wolfe_jam" />
	<meta name="twitter:title" content="The Project Facts Edition - faf-cli v8.11.0" />
	<meta
		name="twitter:description"
		content="The six W's now reach every agent: AGENTS.md points to project.faf; the other context files carry them, one line each."
	/>
	<meta name="twitter:image" content="https://faf.one/blog/project-facts-edition-hero.png" />
	<meta
		name="twitter:image:alt"
		content="faf-cli v8.11.0, The Project Facts Edition: the six W's reach every agent."
	/>
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / The Project Facts Edition
		</div>
		<h1>The Project Facts Edition</h1>
		<p class="version-tag">faf-cli v8.11.0</p>
		<p class="subtitle">
			The six W's now reach every agent: AGENTS.md points to project.faf, and CLAUDE.md, GEMINI.md,
			.cursorrules, Copilot and llms.txt carry them, one rule, one line each.
		</p>
		<div class="meta">
			<time datetime="2026-11-22">November 22, 2026</time>
			<span class="separator">•</span>
			<span class="category release">Release</span>
		</div>
	</header>

	<div class="hero-image">
		<img
			src="/blog/project-facts-edition-hero.png"
			alt="faf-cli v8.11.0, The Project Facts Edition: the six W's reach every agent. AGENTS.md points to project.faf; the other files carry them."
			width="1200"
			height="630"
		/>
	</div>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> <strong
					>The six W's now reach every agent: AGENTS.md points to project.faf, and CLAUDE.md,
					GEMINI.md, .cursorrules, Copilot and llms.txt carry them, one rule, one line each.</strong
				>
			</p>
			<div class="lead plain-english">
				<p class="plain-label">In Plain English</p>
				<p>
					<strong>Old state.</strong> <code>faf export</code> wrote AGENTS.md, GEMINI.md and
					<code>.cursorrules</code> from <code>project.faf</code>, but left out the six W's (who, what,
					why, where, when, how): the facts only you know, like who the project is for and what the
					team decided. AGENTS.md named <code>project.faf</code> only in an HTML comment, which agents
					skip.
				</p>
				<p>
					<strong>Fix.</strong> AGENTS.md gets a visible pointer. The other files get the six W's
					themselves, from one rule.
				</p>
				<p>
					<strong>New state.</strong> AGENTS.md has a <code>## Project facts</code> section naming the
					facts file. CLAUDE.md, GEMINI.md, <code>.cursorrules</code>, the Copilot instructions and
					<code>llms.txt</code> show the same six W's, word for word, one line each.
				</p>
			</div>
			<div class="terminal-block">
				<code>{`$ faf export`}</code>
				<code>{` `}</code>
				<code>{`# AGENTS.md`}</code>
				<code>{`## Project facts`}</code>
				<code>{`The six W's (who, what, why, where, when, how) and the project's`}</code>
				<code>{`other facts are in \`project.faf\`.`}</code>
				<code>{` `}</code>
				<code>{`# GEMINI.md, .cursorrules, Copilot, CLAUDE.md (faf sync)`}</code>
				<code>{`- **Who:** Small shop owners`}</code>
				<code>{`- **When:** 2026.10`}</code>
			</div>
		</section>

		<section>
			<h2>Why it matters</h2>
			<p>
				We tested it before building it. On tasks where the deciding fact lived only in the six W's,
				Codex and OpenCode found the team's decision <strong>4/22</strong> times with the old
				AGENTS.md, <strong>12/21</strong> with a visible pointer, and <strong>19/20</strong> with the
				six W's in the file (<strong>9/21</strong> with no AGENTS.md). 152 runs were launched; 20
				OpenCode runs produced no output and are excluded.
			</p>
			<p>
				AGENTS.md stays a pointer: it is the file agents share, and it holds instructions, not a
				copy of the facts. The full evidence is public:
				<a
					href="https://github.com/Wolfe-Jam/context7-faf-receipt#round-4-what-agentsmd-carries-opencode-and-codex"
					target="_blank"
					rel="noopener">context7-faf-receipt, round 4</a
				>.
			</p>
		</section>

		<section>
			<h2>What 8.11 is</h2>
			<ul>
				<li>
					<strong>AGENTS.md points to the facts.</strong> A <code>## Project facts</code> section
					names the facts file by its real path: <code>project.faf</code>, a legacy
					<code>.faf</code>, or <code>../project.faf</code> one folder up. With
					<code>--output</code> outside the project it names the file alone, never a machine path.
				</li>
				<li>
					<strong>The six W's in every context file.</strong> GEMINI.md and <code>.cursorrules</code>
					gain a Context section, as CLAUDE.md and the Copilot instructions have.
					<code>llms.txt</code> and Claude Code's MEMORY.md block (Pro) show the same values.
				</li>
				<li>
					<strong>One rule, the score's.</strong> A slot the score counts as empty (empty,
					<code>slotignored</code>, TBD, N/A) is left out. Each fact is one line. CLAUDE.md no longer
					shows <code>slotignored</code> or placeholders.
				</li>
				<li>
					<strong>Numbers show as written.</strong> <code>when: 2026.10</code> stays
					<code>2026.10</code>, not <code>2026.1</code>; <code>0x1F</code> stays <code>0x1F</code>.
				</li>
				<li>
					<strong>Every file names the same facts file.</strong> The <code>claim=</code> stamp and
					the "Authored from" line follow the AGENTS.md pointer, so a legacy <code>.faf</code> says
					<code>.faf</code> everywhere.
				</li>
				<li>
					<strong><code>llms.txt</code> keeps each fact as text.</strong> A value that starts with
					<code>#</code>, <code>---</code>, <code>&lt;div&gt;</code> or <code>2026.</code> is escaped,
					so it never becomes a heading, a rule or a list.
				</li>
				<li>
					<strong><code>faf taf setup</code> writes two jobs</strong> (faf-taf-git 2.7.0): the tests
					run with a read-only token, only the receipt job can write, and a red run on the default
					branch is recorded as a <code>FAILED</code> receipt.
				</li>
			</ul>
		</section>

		<section>
			<h2>Try it</h2>
			<div class="terminal-block">
				<code>npx --yes <NpmPkg name="faf-cli" version="8.11.0" /> --version</code>
				<code>cd your-project</code>
				<code>npx --yes <NpmPkg name="faf-cli" version="8.11.0" /> auto</code>
				<code>npx --yes <NpmPkg name="faf-cli" version="8.11.0" /> go       # confirm the goal and six W's</code>
				<code>npx --yes <NpmPkg name="faf-cli" version="8.11.0" /> export   # AGENTS.md, GEMINI.md, .cursorrules</code>
				<code>npx --yes <NpmPkg name="faf-cli" version="8.11.0" /> sync     # CLAUDE.md</code>
			</div>
			<p class="muted-note">
				A RED score on a new repo is normal: the six W's are yours to fill, and only what you confirm
				is written. Or install it: <code>npm i -g <NpmPkg name="faf" version="8.11.0" /></code>, then
				<code>faf auto</code>. Homebrew has 8.11.0 too.
			</p>
		</section>

		<section>
			<h2>Technical details</h2>
			<ul>
				<li><strong>Version:</strong> 8.11.0 (November 22, 2026)</li>
				<li>
					<strong>Packages:</strong> <code>faf-cli</code> and <code>faf</code> on npm (same build) ·
					Homebrew
				</li>
				<li><strong>Tests:</strong> 2745 passing</li>
				<li>
					<strong>Docs:</strong>
					<a href="https://docs.faf.one/export" target="_blank" rel="noopener">docs.faf.one/export</a>
					(what each file carries)
				</li>
				<li>
					<strong>Notes:</strong>
					<a
						href="https://github.com/Wolfe-Jam/faf-cli/releases/tag/v8.11.0"
						target="_blank"
						rel="noopener">v8.11.0</a
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
			<p>Built with .faf ☑️ Your facts, in every agent's file. 🏎️</p>
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
