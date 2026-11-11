<script lang="ts">
	import { buildShareIntent } from '#lib/shareIntent.js';
	import NpmPkg from '#lib/NpmPkg.svelte';

	const shareText = `🏁 Just shipped: agents-md-facts v0.2.0

AGENTS.md facts from your repo: more of them, none taken away.

CI steps, release checks, Python entry points, and what a repo lacks.

Everything 0.1.0 wrote is still written · read as declared, never judged

npx agents-md-facts

Help guide what we build —
Comments · suggestions · shares welcome.`;
	const shareUrl = 'https://faf.one/blog/agents-md-facts-0-2';
	const xIntent = buildShareIntent({ text: shareText, url: shareUrl });

	const ciExample = `.github/workflows/ci.yml (on pull_request)

# job test · ubuntu-latest
pnpm --filter widget test
npx tsc --noEmit
# 2 other steps in the file`;

	const pyExample = `uv sync    # install dependencies
uv run pytest
uv run ruff check .
uv run mypy .

- tally.cli:main — the tally command ([project.scripts])

No GitHub Actions workflows (.github/workflows/).`;
</script>

<svelte:head>
	<title>agents-md-facts v0.2.0 - More facts, nothing taken away | FAF</title>
	<meta
		name="description"
		content="agents-md-facts 0.2.0 keeps everything 0.1.0 wrote into AGENTS.md and adds CI steps, release checks, Python entry points and checks, and what a repo lacks. Read as declared, never judged."
	/>
	<meta property="og:title" content="agents-md-facts v0.2.0 - More facts, nothing taken away" />
	<meta
		property="og:description"
		content="Everything 0.1.0 wrote is still written. 0.2.0 adds CI steps, release checks, Python, and what a repo lacks."
	/>
	<meta property="og:type" content="article" />
	<meta property="og:url" content="https://faf.one/blog/agents-md-facts-0-2" />
	<meta property="og:site_name" content=".faf Format Authority" />
	<meta property="og:image" content="https://faf.one/blog/agents-md-facts-0-2-hero.png" />
	<meta property="og:image:secure_url" content="https://faf.one/blog/agents-md-facts-0-2-hero.png" />
	<meta property="og:image:type" content="image/png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:image:alt" content="agents-md-facts v0.2.0: More facts. Nothing taken away." />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@fafformat" />
	<meta name="twitter:creator" content="@wolfe_jam" />
	<meta name="twitter:title" content="agents-md-facts v0.2.0 - More facts, nothing taken away" />
	<meta
		name="twitter:description"
		content="Everything 0.1.0 wrote is still written. 0.2.0 adds CI steps, release checks, Python, and what a repo lacks."
	/>
	<meta name="twitter:image" content="https://faf.one/blog/agents-md-facts-0-2-hero.png" />
	<meta name="twitter:image:alt" content="agents-md-facts v0.2.0: More facts. Nothing taken away." />
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / agents-md-facts v0.2.0
		</div>
		<h1>agents-md-facts v0.2.0</h1>
		<p class="version-tag">agents-md-facts v0.2.0</p>
		<p class="subtitle">
			More facts in the AGENTS.md block, and nothing 0.1.0 wrote is taken away.
		</p>
		<div class="meta">
			<time datetime="2026-11-11">November 11, 2026</time>
			<span class="separator">•</span>
			<span class="category release">Release</span>
		</div>
	</header>

	<div class="hero-image">
		<video
			src="/blog/agents-md-facts-0-2-hero.mp4"
			poster="/blog/agents-md-facts-0-2-hero.png"
			autoplay
			loop
			muted
			playsinline
			width="1200"
			height="630"
			aria-label="agents-md-facts v0.2.0: the card types in, More facts. Nothing taken away."
		></video>
	</div>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> <strong
					>Everything 0.1.0 authored is still authored (setup &amp; build, tests, where things live
					with its key files, conventions, guardrails, definition of done, security &amp; secrets,
					commit &amp; PR); 0.2.0 adds to it. Detection reads what the repo declares (its scripts,
					manifests, workflows, folders and guides) and never judges what a command does.</strong
				>
			</p>
			<div class="lead plain-english">
				<p class="plain-label">In Plain English</p>
				<p>
					<strong>Old state.</strong> agents-md-facts 0.1.0 wrote a block of facts into AGENTS.md: how
					to install, build and test, where things live, and the house rules. An agent still had to
					open the workflow files to find out what CI checks, and look through package.json to learn
					what runs before a release.
				</p>
				<p>
					<strong>Fix.</strong> 0.2.0 reads more of what the repo already declares: its GitHub Actions
					workflows, its publish scripts, its Python project file. It copies what's there and says
					plainly when something isn't.
				</p>
				<p>
					<strong>New state.</strong> The agent gets those answers from the block, without searching.
					Every section 0.1.0 wrote is still in it.
				</p>
			</div>
		</section>

		<section>
			<h2>What's new in the block</h2>
			<div class="table-wrap">
				<table>
					<thead>
						<tr>
							<th>Fact</th>
							<th>What the block says</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>CI</td>
							<td>
								The workflows that run on pull requests and pushes, with each step that runs the repo's own
								scripts or its toolchain's commands, shown whole. Other steps are counted, never copied.
							</td>
						</tr>
						<tr>
							<td>Before a release</td>
							<td>
								What <code>npm publish</code> runs first (<code>prepublishOnly</code>, then
								<code>prepack</code>), or the <code>release</code> script. For a publishable package with
								neither: that <code>npm publish</code> runs no checks first.
							</td>
						</tr>
						<tr>
							<td>No CI</td>
							<td>A git repo with no GitHub Actions workflows says so.</td>
						</tr>
						<tr>
							<td>Python</td>
							<td>
								Entry points from <code>[project.scripts]</code> and <code>[tool.poetry.scripts]</code>.
								Configured <code>ruff</code>, <code>mypy</code> and <code>black</code> next to
								<code>pytest</code>, through <code>uv run</code> or <code>poetry run</code> when the lockfile
								says so.
							</td>
						</tr>
						<tr>
							<td>Where things live</td>
							<td>
								Each top-level folder git tracks, with the scripts that use it, and the entry points
								exactly as <code>bin</code>, <code>exports</code> or <code>main</code> declare them.
							</td>
						</tr>
						<tr>
							<td>Runtime</td>
							<td>
								As declared: a package.json repo is Node.js unless <code>engines</code> names Bun and
								not Node.
							</td>
						</tr>
					</tbody>
				</table>
			</div>
			<p>A CI section, from a small pnpm repo:</p>
			<div class="terminal-block"><code>{ciExample}</code></div>
			<p>A Python repo with <code>uv.lock</code>, ruff and mypy configured, and no workflows:</p>
			<div class="terminal-block"><code>{pyExample}</code></div>
		</section>

		<section>
			<h2>Why it matters</h2>
			<p>
				An agent that knows the facts spends its effort on the task, not on finding out how the repo
				works. We ran goose (CLI 1.57) on one repo with each version and asked what runs before a
				release: with 0.1.0 it took 2 shell calls and 66.8k tokens; with 0.2.0, 0 shell calls and 21.9k
				tokens. That's one run on one repo, so read it as a sign, not a benchmark.
			</p>
		</section>

		<section>
			<h2>Also in 0.2.0</h2>
			<ul>
				<li>
					<strong>The pre-commit hook works.</strong> It runs
					<code>npx <NpmPkg name="agents-md-facts" version="0.2.0" /> --check</code>, so it needs Node
					and network (pre-commit 3.2.0 or later).
				</li>
				<li><strong>The GitHub Action</strong> runs its own version by default, not <code>latest</code>.</li>
				<li><strong>CI runs on Windows too,</strong> so CRLF checkouts and paths are tested for real.</li>
				<li>
					<strong>Markers count only on a line of their own,</strong> and a file with two start markers
					is not written. Your text outside the block stays yours.
				</li>
			</ul>
			<p>
				<strong>Upgrading from 0.1.0:</strong> run <code>npx agents-md-facts</code> once. The output
				changed, so <code>--check</code> reports the old file as stale until you refresh it.
			</p>
		</section>

		<section>
			<h2>How we got it right</h2>
			<ul>
				<li>
					Independent reviews from goose and Claude. Each finding was weighed against what users
					get before anything was changed.
				</li>
				<li>
					A test checks that every section 0.1.0 wrote is still written. 188 tests pass on Ubuntu and
					Windows.
				</li>
				<li>
					After publishing, we installed 0.2.0 from npm in an empty folder and ran it on a Node repo
					and a Python repo. The examples above are its output.
				</li>
			</ul>
		</section>

		<section>
			<h2>Not claimed</h2>
			<ul>
				<li>The goose numbers are one run on one repo.</li>
				<li>
					There's no <code>--version</code> yet: an unknown flag runs the default and writes the file.
					Rejecting unknown flags is next.
				</li>
				<li>A Python repo's title uses the folder name, not the name in <code>pyproject.toml</code>.</li>
			</ul>
		</section>

		<section>
			<h2>Try it</h2>
			<div class="terminal-block">
				<code>npx agents-md-facts            # write or refresh the block
npx agents-md-facts --check    # exit 1 if AGENTS.md is missing or stale</code>
			</div>
			<p><strong>In CI,</strong> the GitHub Action:</p>
			<div class="terminal-block">
				<code>- uses: <NpmPkg name="Wolfe-Jam/agents-md-facts" version="v0.2.0" /></code>
			</div>
			<p><strong>Before each commit,</strong> the pre-commit hook:</p>
			<div class="terminal-block">
				<code>{`- repo: https://github.com/Wolfe-Jam/agents-md-facts
  rev: v0.2.0
  hooks:
    - id: agents-md-facts`}</code>
			</div>
			<p class="muted-note">
				Also inside <a href="/blog/mcp-context-card">mcp-context-card</a> 1.9.6: its
				<code>author_agents_md</code> tool uses 0.2.0.
			</p>
		</section>

		<section>
			<h2>Technical details</h2>
			<ul>
				<li><strong>Version:</strong> agents-md-facts 0.2.0 (November 10, 2026)</li>
				<li><strong>Where:</strong> npm · GitHub Action · pre-commit · MIT</li>
				<li>
					<strong>Dependencies:</strong> one runtime dependency, <code>yaml</code>, to read workflow
					files.
				</li>
				<li>
					<strong>Changes:</strong>
					<a href="https://github.com/Wolfe-Jam/agents-md-facts/releases/tag/v0.2.0" target="_blank" rel="noopener"
						>release notes</a
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
					href="https://github.com/Wolfe-Jam/agents-md-facts/issues/new"
					target="_blank"
					rel="noopener"
					class="feedback-btn secondary"
				>
					Tell us on GitHub
				</a>
			</div>
		</section>

		<section class="footer-note">
			<p>Built with .faf ☑️ More facts. Nothing taken away.</p>
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
	.hero-image video {
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

	.table-wrap {
		overflow-x: auto;
		margin: 0 0 1rem;
	}
	table {
		width: 100%;
		border-collapse: collapse;
		background: var(--faf-surface);
		color: var(--faf-black);
		font-size: 0.98rem;
	}
	th,
	td {
		text-align: left;
		padding: 0.6rem 0.85rem;
		border: 1px solid var(--faf-border);
	}
	th {
		background: var(--faf-section-alt);
		color: var(--faf-black);
		font-weight: 700;
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
