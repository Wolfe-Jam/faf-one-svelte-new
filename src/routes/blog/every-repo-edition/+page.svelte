<script lang="ts">
	import { buildShareIntent } from '#lib/shareIntent.js';
	import NpmPkg from '#lib/NpmPkg.svelte';

	const shareText = `🏁 Just shipped: faf-cli v8.13.0 — The Every Repo Edition

More repos come out right on the first run.

A Cargo workspace takes its name, type and goal from the crate that names it.
An Agent Plugins package is typed agent-plugin, and can reach 100%.
AGENTS.md now says what runs before a release, and what CI checks.

2834 tests · npm + Homebrew

npx faf-cli@8.13.0 auto

Help guide what we build —
Comments · suggestions welcome.`;
	const shareUrl = 'https://faf.one/blog/every-repo-edition';
	const xIntent = buildShareIntent({ text: shareText, url: shareUrl });
</script>

<svelte:head>
	<title>The Every Repo Edition - faf-cli v8.13.0 | FAF</title>
	<meta
		name="description"
		content="faf auto knows Cargo workspaces and Agent Plugins, and AGENTS.md carries the release gate and the CI checks."
	/>
	<meta property="og:title" content="The Every Repo Edition - faf-cli v8.13.0" />
	<meta
		property="og:description"
		content="faf auto knows Cargo workspaces and Agent Plugins, and AGENTS.md carries the release gate and the CI checks."
	/>
	<meta property="og:type" content="article" />
	<meta property="og:url" content="https://faf.one/blog/every-repo-edition" />
	<meta property="og:site_name" content=".faf Format Authority" />
	<meta property="og:image" content="https://faf.one/blog/every-repo-edition-hero.png" />
	<meta property="og:image:secure_url" content="https://faf.one/blog/every-repo-edition-hero.png" />
	<meta property="og:image:type" content="image/png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta
		property="og:image:alt"
		content="faf-cli v8.13.0, The Every Repo Edition: knows Cargo workspaces and Agent Plugins."
	/>
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@fafformat" />
	<meta name="twitter:creator" content="@wolfe_jam" />
	<meta name="twitter:title" content="The Every Repo Edition - faf-cli v8.13.0" />
	<meta
		name="twitter:description"
		content="faf auto knows Cargo workspaces and Agent Plugins, and AGENTS.md carries the release gate and the CI checks."
	/>
	<meta name="twitter:image" content="https://faf.one/blog/every-repo-edition-hero.png" />
	<meta
		name="twitter:image:alt"
		content="faf-cli v8.13.0, The Every Repo Edition: knows Cargo workspaces and Agent Plugins."
	/>
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / The Every Repo Edition
		</div>
		<h1>The Every Repo Edition</h1>
		<p class="version-tag">faf-cli v8.13.0</p>
		<p class="subtitle">
			faf auto knows Cargo workspaces and Agent Plugins, and AGENTS.md carries the release gate and
			the CI checks.
		</p>
		<div class="meta">
			<time datetime="2026-11-26">November 26, 2026</time>
			<span class="separator">•</span>
			<span class="category release">Release</span>
		</div>
	</header>

	<div class="hero-image">
		<img
			src="/blog/every-repo-edition-hero.png"
			alt="faf-cli v8.13.0, The Every Repo Edition: knows Cargo workspaces and Agent Plugins. AGENTS.md carries the release gate and the CI checks."
			width="1200"
			height="630"
		/>
	</div>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> <strong
					>faf auto knows Cargo workspaces and Agent Plugins, and AGENTS.md carries the release gate
					and the CI checks.</strong
				>
			</p>
			<div class="lead plain-english">
				<p class="plain-label">In Plain English</p>
				<p>
					<strong>Old state.</strong> A Rust workspace has no <code>[package]</code> at its root, so
					<code>faf auto</code> named the project after its folder and guessed its type. A plugin
					made only of a manifest and skills had no type of its own. AGENTS.md told agents how to
					build and test, but not what runs before a release or what CI checks.
				</p>
				<p>
					<strong>Fix.</strong> faf reads the crate that names the workspace, gives Agent Plugins
					packages their own type, and reads the release step and the CI workflows the repo already
					declares.
				</p>
				<p>
					<strong>New state.</strong> axum comes out as <code>axum</code>, a library, with its own
					description as the goal suggestion. A plugin is typed <code>agent-plugin</code> and can
					reach 100%. AGENTS.md has a <strong>Before a release</strong> section and a
					<strong>CI</strong> section.
				</p>
			</div>
			<div class="terminal-block">
				<code>{`$ faf auto        # in a Cargo workspace laid out like axum's`}</code>
				<code>{` `}</code>
				<code>{`project:`}</code>
				<code>{`  name: axum`}</code>
				<code>{`  main_language: Rust`}</code>
				<code>{`  type: library  # found: axum/Cargo.toml (workspace member axum): src/lib.rs`}</code>
			</div>
		</section>

		<section>
			<h2>What 8.13 is</h2>
			<ul>
				<li>
					<strong>Cargo workspaces.</strong> The member that names the project wins: the one named
					like the folder, else the only member, else the one the members' common prefix names
					(<code>axum</code>, <code>axum-core</code>, <code>axum-extra</code> → <code>axum</code>).
					Its name, its type and its <code>description</code> are used. A member's
					<code>description = {'{'} workspace = true {'}'}</code> takes the workspace's. Members outside
					the project are not read.
				</li>
				<li>
					<strong>A single crate</strong> takes its name from <code>[package].name</code>, and a
					library crate says <code>src/lib.rs</code> in <code># found:</code> instead of the fallback.
				</li>
				<li>
					<strong><code>agent-plugin</code>, a new app-type.</strong> A <code>plugin.json</code> or
					<code>mcp.json</code> with the agent-plugins.org <code>$schema</code>, at the root or in
					<code>plugins/&lt;name&gt;/</code>, and no code is typed <code>agent-plugin</code>. It has 11
					slots: there is nothing to build, so no build, runtime or CI slot. A plugin we tested was
					typed <code>library</code> before (67%) and now reaches ✪ 100%.
				</li>
				<li>
					<strong>AGENTS.md: Before a release.</strong> <code>faf export --agents</code> says what
					<code>npm publish</code> runs first (<code>prepublishOnly</code>, <code>prepack</code>, a
					<code>release</code> script), or that nothing does.
				</li>
				<li>
					<strong>AGENTS.md: CI.</strong> The repo's own commands each GitHub Actions check runs on a
					change, main check first. Only workflows inside the project are read.
				</li>
				<li>
					<strong>CLAUDE.md imports AGENTS.md, from any writer.</strong> <code>faf sync</code> and
					the new library function <code>syncClaudeMd</code> write the same block, so tools built on
					faf-cli no longer flip the file between two versions. When the import is missing,
					<code>faf export --agents</code> says so: <code>run 'faf sync' so CLAUDE.md imports AGENTS.md</code>.
				</li>
				<li>
					<strong><code>faf auto</code> runs <code>init</code> first</strong> when there is no
					<code>project.faf</code>, so the first run writes the file and its birth certificate.
				</li>
				<li>
					<strong>Windows:</strong> a project with no name of its own is named after its folder, not
					the folder's whole path.
				</li>
			</ul>
		</section>

		<section>
			<h2>What AGENTS.md gains</h2>
			<p>From a repo whose <code>package.json</code> has a <code>prepublishOnly</code> script:</p>
			<div class="terminal-block">
				<code>{`## Before a release`}</code>
				<code>{` `}</code>
				<code>{`\`npm publish\` runs \`prepublishOnly\` first:`}</code>
				<code>{` `}</code>
				<code>{`npm run build && npm test`}</code>
				<code>{` `}</code>
				<code>{`## CI`}</code>
			</div>
			<p>
				These two sections match what
				<a href="https://github.com/Wolfe-Jam/agents-md-facts" target="_blank" rel="noopener"
					>agents-md-facts</a
				> writes: a test runs both on the same repos and fails if either differs. They are instructions
				only, no stack and no six W's.
			</p>
		</section>

		<section>
			<h2>Try it</h2>
			<div class="terminal-block">
				<code>npx --yes <NpmPkg name="faf-cli" version="8.13.0" /> --version</code>
				<code>cd your-project</code>
				<code>npx --yes <NpmPkg name="faf-cli" version="8.13.0" /> auto             # runs init on a new repo</code>
				<code>npx --yes <NpmPkg name="faf-cli" version="8.13.0" /> export --agents  # AGENTS.md</code>
				<code>npx --yes <NpmPkg name="faf-cli" version="8.13.0" /> sync             # CLAUDE.md, with the import</code>
			</div>
			<p class="muted-note">
				A RED score on a new repo is normal: the goal and six W's are yours to fill. Read
				<code># found:</code> in <code>project.faf</code> to see why the project got its type. Or
				install it: <code>npm i -g <NpmPkg name="faf" version="8.13.0" /></code>, then
				<code>faf auto</code>. Homebrew has 8.13.0 too.
			</p>
		</section>

		<section>
			<h2>Technical details</h2>
			<ul>
				<li><strong>Version:</strong> 8.13.0 (November 26, 2026)</li>
				<li>
					<strong>Packages:</strong> <code>faf-cli</code> and <code>faf</code> on npm (same build) ·
					Homebrew
				</li>
				<li><strong>Tests:</strong> 2834 passing; Windows nightly green on Node 22 and 24</li>
				<li><strong>App-types:</strong> 27</li>
				<li>
					<strong>Docs:</strong>
					<a href="https://docs.faf.one/export" target="_blank" rel="noopener">docs.faf.one/export</a>
					(what AGENTS.md carries)
				</li>
				<li>
					<strong>Notes:</strong>
					<a
						href="https://github.com/Wolfe-Jam/faf-cli/releases/tag/v8.13.0"
						target="_blank"
						rel="noopener">v8.13.0</a
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
			<p>Built with .faf ☑️ More repos, read right on the first run. 🏎️</p>
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
