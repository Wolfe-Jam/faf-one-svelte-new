<script lang="ts">
	import { buildShareIntent } from '#lib/shareIntent.js';
	import NpmPkg from '#lib/NpmPkg.svelte';

	const shareText = `🏁 Just shipped: faf-cli v8.12.0 — The One Source Edition

Every agent file keeps to its lane.

project.faf holds the facts. AGENTS.md instructs. CLAUDE.md imports it.

Deep dive: the three lanes · why Claude Code missed AGENTS.md · faf-cli/fetch · the birth certificate

npx faf-cli auto

Help guide what we build —
Comments · suggestions welcome.`;
	const shareUrl = 'https://faf.one/blog/one-source-edition';
	const xIntent = buildShareIntent({ text: shareText, url: shareUrl });
</script>

<svelte:head>
	<title>The One Source Edition - faf-cli v8.12.0 | FAF</title>
	<meta
		name="description"
		content="faf-cli 8.12.0: every agent file keeps to its lane. project.faf holds the facts, AGENTS.md instructs, and CLAUDE.md imports it. A deep dive into the three lanes, the import, faf-cli/fetch and the birth certificate."
	/>
	<meta property="og:title" content="The One Source Edition - faf-cli v8.12.0" />
	<meta
		property="og:description"
		content="Every agent file keeps to its lane: project.faf holds the facts, AGENTS.md instructs, and CLAUDE.md imports it."
	/>
	<meta property="og:type" content="article" />
	<meta property="og:url" content="https://faf.one/blog/one-source-edition" />
	<meta property="og:site_name" content=".faf Format Authority" />
	<meta property="og:image" content="https://faf.one/blog/one-source-edition-hero.png" />
	<meta property="og:image:secure_url" content="https://faf.one/blog/one-source-edition-hero.png" />
	<meta property="og:image:type" content="image/png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta
		property="og:image:alt"
		content="faf-cli v8.12.0, The One Source Edition: every agent file keeps to its lane."
	/>
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@fafformat" />
	<meta name="twitter:creator" content="@wolfe_jam" />
	<meta name="twitter:title" content="The One Source Edition - faf-cli v8.12.0" />
	<meta
		name="twitter:description"
		content="Every agent file keeps to its lane: project.faf holds the facts, AGENTS.md instructs, and CLAUDE.md imports it."
	/>
	<meta name="twitter:image" content="https://faf.one/blog/one-source-edition-hero.png" />
	<meta
		name="twitter:image:alt"
		content="faf-cli v8.12.0, The One Source Edition: every agent file keeps to its lane."
	/>
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / The One Source Edition
		</div>
		<h1>The One Source Edition</h1>
		<p class="version-tag">faf-cli v8.12.0</p>
		<p class="subtitle">
			Every agent file keeps to its lane: project.faf holds the facts, AGENTS.md instructs, and
			CLAUDE.md imports it.
		</p>
		<div class="meta">
			<time datetime="2026-11-24">November 24, 2026</time>
			<span class="separator">•</span>
			<span class="category release">Release</span>
			<span class="category deep-dive">Deep Dive</span>
		</div>
	</header>

	<div class="hero-image">
		<img
			src="/blog/one-source-edition-hero.png"
			alt="faf-cli v8.12.0, The One Source Edition: every agent file keeps to its lane."
			width="1200"
			height="630"
		/>
	</div>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> Every agent file keeps to its lane: project.faf holds the facts,
				AGENTS.md instructs, and CLAUDE.md imports it. <strong
					>AGENTS.md drops its copy of the stack, CLAUDE.md pulls AGENTS.md in with one line, and
					tools get <code>faf-cli/fetch</code> to build a project.faf from a repo URL.</strong
				>
			</p>
			<div class="lead plain-english">
				<p class="plain-label">In Plain English</p>
				<p>
					<strong>The problem.</strong> A repo can hold three files for AI: project.faf, AGENTS.md and
					CLAUDE.md. When they repeat each other, they drift apart, and you can't tell which one is
					right. And by default Claude Code doesn't read AGENTS.md at all when a CLAUDE.md is there, so
					the build and test rules in it never reached Claude.
				</p>
				<p>
					<strong>The fix.</strong> Each file does one job. The facts live in one place, project.faf.
					AGENTS.md holds the instructions: how to build, test and commit. CLAUDE.md imports
					AGENTS.md, so Claude Code gets the instructions too.
				</p>
				<p>
					<strong>What changes for you.</strong> Run <code>faf export --agents</code> and
					<code>faf sync</code> as before. The files they write now stay in their lanes, and every agent
					gets the same facts and the same rules.
				</p>
			</div>
		</section>

		<nav class="contents" aria-label="In this deep dive">
			<p class="contents-label">In this deep dive</p>
			<ol>
				<li><a href="#lanes">The three lanes</a></li>
				<li><a href="#stack">Why AGENTS.md lost its Stack</a></li>
				<li><a href="#import">Why CLAUDE.md imports AGENTS.md</a></li>
				<li><a href="#what">"What is it?"</a></li>
				<li><a href="#github">A goal from GitHub</a></li>
				<li><a href="#fetch">faf-cli/fetch, for tools</a></li>
				<li><a href="#birth">The birth certificate</a></li>
				<li><a href="#reviews">How we got it right</a></li>
			</ol>
		</nav>

		<section id="lanes">
			<h2><span class="num">1</span> The three lanes</h2>
			<p>
				One source for the facts, one file for the instructions, and one line that connects Claude
				Code to both. Here is what <code>faf auto</code>, <code>faf export --agents</code> and
				<code>faf sync</code> wrote for a small Express API with 8.12.0:
			</p>
			<div class="lanes" role="img" aria-label="project.faf holds the facts. AGENTS.md holds the instructions and points to project.faf. CLAUDE.md carries faf's summary of the facts and imports AGENTS.md with one line.">
				<div class="lane lane-facts">
					<p class="lane-step">Facts</p>
					<p class="lane-file"><code>project.faf</code></p>
					<ul>
						<li>language, framework, runtime</li>
						<li>the goal and the six W's</li>
						<li>scored: 24%, 4 of 17 slots</li>
					</ul>
					<p class="lane-note">The one source. IANA-registered YAML.</p>
				</div>
				<div class="lane">
					<p class="lane-step">Instructions</p>
					<p class="lane-file"><code>AGENTS.md</code></p>
					<ul>
						<li>Setup &amp; build · Run the tests</li>
						<li>Where things live · Guardrails</li>
						<li>Definition of Done · When stuck · Commit &amp; PR</li>
						<li><strong>Project facts</strong> → <code>project.faf</code></li>
					</ul>
					<p class="lane-note">No Stack section: it points to the facts.</p>
				</div>
				<div class="lane lane-claude">
					<p class="lane-step">Claude Code</p>
					<p class="lane-file"><code>CLAUDE.md</code></p>
					<ul>
						<li>Stack, from project.faf</li>
						<li><strong>Build, test and repo rules</strong></li>
						<li><code>@AGENTS.md</code></li>
					</ul>
					<p class="lane-note">Imports the instructions. Doesn't copy them.</p>
				</div>
			</div>
			<p class="muted-note">
				Only faf's own block is written in each file. Anything you wrote outside it stays as it is.
			</p>
		</section>

		<section id="stack">
			<h2><span class="num">2</span> Why AGENTS.md lost its Stack</h2>
			<p>
				The stack is a fact, and facts belong in project.faf. Until 8.12.0, AGENTS.md carried a copy
				of it. A copy is a second source: change one, forget the other, and two agents read two
				different stacks.
			</p>
			<p>
				<a href="https://github.com/Wolfe-Jam/agents-md-facts" target="_blank" rel="noopener">agents-md-facts</a>
				describes four rungs for an AGENTS.md. 8.12.0 writes the top one:
			</p>
			<div class="ladder" role="img" aria-label="NONE: no facts. GOOD: some facts in AGENTS.md. BETTER: all the facts in AGENTS.md. BEST: project.faf holds the facts, and AGENTS.md points to it. 8.12.0 writes BEST.">
				<div class="rung"><span class="rung-name">NONE</span><span>No facts. The agent reads the repo to guess them.</span></div>
				<div class="rung"><span class="rung-name">GOOD</span><span>Some facts, written into AGENTS.md.</span></div>
				<div class="rung"><span class="rung-name">BETTER</span><span>All the facts, written into AGENTS.md.</span></div>
				<div class="rung rung-best"><span class="rung-name">BEST</span><span>project.faf holds the facts; AGENTS.md points to it. Nothing is copied. <strong>8.12.0 writes this.</strong></span></div>
			</div>
			<p>The pointer, as 8.12.0 writes it:</p>
			<div class="terminal-block wrap">
				<code>## Project facts</code>
				<code>&nbsp;</code>
				<code>{`The six W's (who, what, why, where, when, how) and the project's other facts are in \`project.faf\`.`}</code>
			</div>
		</section>

		<section id="import">
			<h2><span class="num">3</span> Why CLAUDE.md imports AGENTS.md</h2>
			<p>
				By default, Claude Code reads AGENTS.md only when there is no CLAUDE.md. faf writes both, so
				in a faf repo the build, test and repo rules in AGENTS.md never reached Claude Code. We
				measured it with <a href="https://github.com/intel/dokimi" target="_blank" rel="noopener">dokimi</a>'s
				<code>repo reach</code>:
			</p>
			<div class="reach" role="img" aria-label="Measured with dokimi repo reach. Claude Code 2.1.330 loaded CLAUDE.md only. Codex 0.169.0 loaded AGENTS.md only. With the import, CLAUDE.md brings AGENTS.md to Claude Code.">
				<div class="reach-col">
					<p class="reach-agent">Claude Code 2.1.330</p>
					<p class="reach-file">loaded <code>CLAUDE.md</code> only</p>
				</div>
				<div class="reach-col">
					<p class="reach-agent">Codex 0.169.0</p>
					<p class="reach-file">loaded <code>AGENTS.md</code> only</p>
				</div>
				<div class="reach-fix">
					<p>
						<strong>8.12.0:</strong> when an AGENTS.md sits beside CLAUDE.md, <code>faf sync</code> ends
						faf's CLAUDE.md block with one section, one line:
					</p>
					<div class="terminal-block">
						<code>## Build, test and repo rules</code>
						<code>&nbsp;</code>
						<code>@AGENTS.md</code>
					</div>
					<p>Claude Code follows the import. Each agent now gets the same rules from the same file.</p>
				</div>
			</div>
			<p class="muted-note">
				No AGENTS.md, no import. If your CLAUDE.md is a link to AGENTS.md, faf adds nothing: Claude
				already reads it.
			</p>
		</section>

		<section id="what">
			<h2><span class="num">4</span> "What is it?"</h2>
			<p>
				The <code>what</code> slot is one of the six W's. Its question read as the users' work, which
				didn't fit an app or a library. Now it asks about the project itself, in <code>faf go</code>,
				the slot table and <code>faf bench</code>:
			</p>
			<div class="compare" role="img" aria-label="Before: What are they building? From 8.12.0: What is it?">
				<div class="compare-col">
					<p class="compare-label">Before</p>
					<p class="compare-q">What are they building?</p>
				</div>
				<div class="compare-arrow" aria-hidden="true">→</div>
				<div class="compare-col compare-new">
					<p class="compare-label">8.12.0</p>
					<p class="compare-q">What is it?</p>
				</div>
			</div>
			<p>Every project has an answer to it.</p>
		</section>

		<section id="github">
			<h2><span class="num">5</span> A goal from GitHub</h2>
			<p>
				<code>faf go</code> suggests answers for the goal from what the repo already says, shows where
				each came from, and writes only what you confirm. <code>faf go --github</code> adds one more
				source: the repo's description on GitHub, from one API call.
			</p>
			<div class="flow" role="img" aria-label="Goal suggestions, in order: 1, the README. 2, the GitHub description, with --github. 3, the package.json description. You confirm one, edit it, or skip.">
				<div class="flow-step"><span class="flow-n">1</span><span>README.md</span></div>
				<div class="flow-step flow-new"><span class="flow-n">2</span><span>GitHub description <em>(with <code>--github</code>)</em></span></div>
				<div class="flow-step"><span class="flow-n">3</span><span>package.json description</span></div>
				<div class="flow-step flow-you"><span class="flow-n">✓</span><span>You confirm, edit or skip</span></div>
			</div>
			<ul>
				<li>It reads only a github.com URL from <code>origin</code>.</li>
				<li>With the goal already filled, it makes no call.</li>
				<li>Without a terminal, it says so in one line and fetches nothing.</li>
				<li>
					<code>GITHUB_TOKEN</code> or <code>GH_TOKEN</code> is sent when set, for private repos and
					rate limits.
				</li>
			</ul>
		</section>

		<section id="fetch">
			<h2><span class="num">6</span> faf-cli/fetch, for tools</h2>
			<p>
				<code>faf git &lt;url&gt;</code> builds a project.faf from any public repo. 8.12.0 opens its
				fetch step to other tools, so an MCP server can do the same without its own copy of the clone.
				It's a separate entry: the main <code>faf-cli</code> import still runs no git.
			</p>
			<div class="pipeline" role="img" aria-label="fetchRepo takes a URL, normalizes it, shallow-clones it into a temp folder without a shell or following links, and returns the folder. authorFafFromRepo returns the project.faf as data. cleanup removes the folder.">
				<div class="pipe-step"><p class="pipe-name"><code>fetchRepo(url)</code></p><p>Normalizes the URL, shallow-clones into a temp folder. No shell, links not followed.</p></div>
				<div class="pipe-arrow" aria-hidden="true">→</div>
				<div class="pipe-step"><p class="pipe-name"><code>authorFafFromRepo</code></p><p>Returns the project.faf as data, as <code>faf git</code> builds it. Nothing is written.</p></div>
				<div class="pipe-arrow" aria-hidden="true">→</div>
				<div class="pipe-step"><p class="pipe-name"><code>cleanup()</code></p><p>Removes the folder.</p></div>
			</div>
			<div class="terminal-block">
				<code>{`import { fetchRepo } from 'faf-cli/fetch';`}</code>
				<code>&nbsp;</code>
				<code>{`const repo = await fetchRepo('https://github.com/sindresorhus/ky');`}</code>
				<code>{`// repo.dir, repo.repoUrl, repo.cleanup()`}</code>
			</div>
			<p>
				A clone never waits for a login: git runs with <code>GIT_TERMINAL_PROMPT=0</code>, so a private
				or misspelled repo fails at once, as a <code>FetchRepoError</code> with <code>kind</code>
				<code>url</code> or <code>clone</code>. A clone stops after <code>timeoutMs</code> (120 s by
				default). From the npm package, <code>sindresorhus/ky</code> cloned and was filled in 0.8
				seconds.
			</p>
		</section>

		<section id="birth">
			<h2><span class="num">7</span> The birth certificate</h2>
			<p>
				<code>.faf-dna</code> records a project's first score: where it started, written once, never
				replaced. <code>faf init</code> always wrote it. <code>faf auto</code> runs init if there is
				no project.faf, and from 8.12.0 the birth certificate comes with it:
			</p>
			<div class="terminal-block">
				<code>$ faf auto</code>
				<code>created project.faf</code>
				<code>○ RED 24% 4/17 slots</code>
				<code>  🧬 Birth DNA 24% — your journey starts here (faf dna)</code>
			</div>
			<p>
				A red score on a new repo is normal: the goal and the six W's are still yours to fill.
				<code>faf go</code> asks for them.
			</p>
		</section>

		<section id="reviews">
			<h2><span class="num">8</span> How we got it right</h2>
			<div class="checks">
				<div class="check">
					<p class="check-name">Independent review</p>
					<p>
						A separate review of everything since 8.11.1 found eight things. We checked each against
						the code and fixed the ones for this release before shipping: the login wait and timeout
						in <code>fetchRepo</code>, GitHub URLs only for <code>--github</code>, and its
						no-terminal line.
					</p>
				</div>
				<div class="check">
					<p class="check-name">Release review</p>
					<p>
						Mergeable, nothing blocking. Its lockfile and wording notes were fixed in the release PR;
						a <code>bun.lock</code> note is its own issue.
					</p>
				</div>
				<div class="check">
					<p class="check-name">Tests</p>
					<p>
						2,802 tests: 2,801 pass, 1 skip, 0 fail. Windows checked on Node 22 and 24 on the
						release commit.
					</p>
				</div>
				<div class="check">
					<p class="check-name">Cold install</p>
					<p>
						After publishing, installed from npm as a new user would, and the headline features run by
						hand. Every one held.
					</p>
				</div>
			</div>
			<p class="muted-note">
				Published from GitHub Actions with npm provenance, as both <code>faf-cli</code> and
				<code>faf</code>.
			</p>
		</section>

		<section>
			<h2>Try it</h2>
			<div class="terminal-block">
				<code>npx --yes <NpmPkg name="faf-cli" version="8.12.0" /> --version</code>
				<code>cd your-project</code>
				<code>npx --yes <NpmPkg name="faf-cli" version="8.12.0" /> auto</code>
				<code>npx --yes <NpmPkg name="faf-cli" version="8.12.0" /> export --agents</code>
				<code>npx --yes <NpmPkg name="faf-cli" version="8.12.0" /> sync</code>
				<code>{`# or: npm i -g faf, then faf auto`}</code>
			</div>
			<p class="muted-note">
				Then open <code>project.faf</code>: <code># found:</code> says why the project was classified
				the way it was.
			</p>
		</section>

		<section>
			<h2>Technical details</h2>
			<ul>
				<li><strong>Version:</strong> 8.12.0 (November 24, 2026)</li>
				<li><strong>Packages:</strong> <code>faf-cli</code> and <code>faf</code> on npm; Homebrew</li>
				<li><strong>New entry:</strong> <code>faf-cli/fetch</code> (<code>fetchRepo</code>, <code>githubDescription</code>)</li>
				<li><strong>Tests:</strong> 2,802</li>
				<li>
					<strong>Docs:</strong>
					<a href="https://docs.faf.one" target="_blank" rel="noopener">docs.faf.one</a>
				</li>
				<li>
					<strong>Notes:</strong>
					<a href="https://github.com/Wolfe-Jam/faf-cli/releases/tag/v8.12.0" target="_blank" rel="noopener">v8.12.0</a>
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
			<p>Built with .faf ☑️ FAF defines. AGENTS.md instructs. AI codes. 🏎️</p>
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
		flex-wrap: wrap;
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
	.category.deep-dive {
		background: var(--faf-solid-bg);
		color: var(--faf-solid-fg);
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
		margin-bottom: 2.75rem;
	}
	.post-content h2 {
		font-size: 1.6rem;
		color: var(--faf-black);
		margin: 0 0 1rem;
		letter-spacing: -0.01em;
		display: flex;
		align-items: center;
		gap: 0.6rem;
	}
	.num {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		flex: none;
		width: 2rem;
		height: 2rem;
		border-radius: 50%;
		background: var(--faf-solid-bg);
		color: var(--faf-solid-fg);
		font-size: 1rem;
		font-weight: 800;
	}
	.post-content p {
		line-height: 1.75;
		margin: 0 0 1rem;
	}
	.post-content a {
		color: var(--faf-cyan-text);
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
		overflow-wrap: anywhere;
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

	/* Contents */
	.contents {
		background: var(--faf-section-alt);
		color: var(--faf-black);
		border-radius: 10px;
		padding: 1.25rem 1.5rem;
		margin: 0 0 2.75rem;
	}
	.contents-label {
		margin: 0 0 0.6rem;
		font-size: 0.82rem;
		font-weight: 800;
		letter-spacing: 0.06em;
		text-transform: uppercase;
	}
	.contents ol {
		margin: 0;
		padding-left: 1.4rem;
		line-height: 1.9;
		columns: 2;
		column-gap: 2rem;
	}
	.contents a {
		color: var(--faf-cyan-text);
		font-weight: 600;
	}

	/* 1 · Lanes */
	.lanes {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: 0.75rem;
		background: var(--faf-section-alt);
		color: var(--faf-black);
		border: 1px solid var(--faf-border);
		border-radius: 12px;
		padding: 1rem;
		margin: 0 0 1rem;
	}
	.lane {
		background: var(--faf-surface);
		color: var(--faf-black);
		border: 1px solid var(--faf-border);
		border-radius: 10px;
		padding: 0.9rem 0.95rem;
	}
	.lane-facts {
		border: 2px solid #00b8b8; /* literal-ok: faf-cli key colour accent border */
	}
	.lane-claude {
		border: 2px solid var(--faf-orange);
	}
	.lanes p,
	.lanes ul {
		margin: 0;
		line-height: 1.5;
	}
	.lane-step {
		font-size: 0.78rem;
		font-weight: 800;
		letter-spacing: 0.06em;
		text-transform: uppercase;
	}
	.lanes p.lane-file {
		font-size: 1.05rem;
		font-weight: 800;
		margin: 0.35rem 0 0.5rem;
	}
	.lanes ul {
		font-size: 0.88rem;
		padding-left: 1.1rem;
		color: var(--faf-dark);
	}
	.lanes p.lane-note {
		margin-top: 0.6rem;
		font-size: 0.85rem;
		font-weight: 700;
	}

	/* 2 · Ladder */
	.ladder {
		display: grid;
		gap: 0.5rem;
		margin: 0 0 1.25rem;
	}
	.rung {
		display: grid;
		grid-template-columns: 6rem minmax(0, 1fr);
		gap: 0.75rem;
		align-items: center;
		background: var(--faf-surface);
		color: var(--faf-black);
		border: 1px solid var(--faf-border);
		border-radius: 8px;
		padding: 0.65rem 0.9rem;
		font-size: 0.92rem;
		line-height: 1.5;
	}
	.rung-name {
		font-family: 'SF Mono', 'Fira Code', Menlo, monospace;
		font-weight: 800;
	}
	.rung-best {
		background: var(--faf-solid-bg);
		color: var(--faf-solid-fg);
		border-color: var(--faf-solid-bg);
	}

	/* 3 · Reach */
	.reach {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 0.75rem;
		background: var(--faf-section-alt);
		color: var(--faf-black);
		border: 1px solid var(--faf-border);
		border-radius: 12px;
		padding: 1rem;
		margin: 0 0 1rem;
	}
	.reach-col {
		background: var(--faf-surface);
		color: var(--faf-black);
		border: 1px solid var(--faf-border);
		border-radius: 10px;
		padding: 0.85rem 0.95rem;
	}
	.reach p {
		margin: 0;
		line-height: 1.5;
	}
	.reach p.reach-agent {
		font-weight: 800;
		margin-bottom: 0.3rem;
	}
	.reach-file {
		font-size: 0.92rem;
	}
	.reach-fix {
		grid-column: 1 / -1;
		background: var(--faf-surface);
		color: var(--faf-black);
		border: 2px solid var(--faf-orange);
		border-radius: 10px;
		padding: 0.9rem 1rem;
		font-size: 0.95rem;
	}
	.reach-fix .terminal-block {
		margin: 0.75rem 0;
	}

	/* 4 · Compare */
	.compare {
		display: grid;
		grid-template-columns: minmax(0, 1fr) auto minmax(0, 1fr);
		gap: 0.75rem;
		align-items: stretch;
		margin: 0 0 1rem;
	}
	.compare-col {
		background: var(--faf-surface);
		color: var(--faf-black);
		border: 1px solid var(--faf-border);
		border-radius: 10px;
		padding: 0.9rem 1rem;
	}
	.compare-new {
		border: 2px solid #00b8b8; /* literal-ok: faf-cli key colour accent border */
	}
	.compare p {
		margin: 0;
	}
	.compare p.compare-label {
		font-size: 0.78rem;
		font-weight: 800;
		letter-spacing: 0.06em;
		text-transform: uppercase;
		margin-bottom: 0.3rem;
	}
	.compare-q {
		font-size: 1.15rem;
		font-weight: 800;
	}
	.compare-arrow,
	.pipe-arrow {
		align-self: center;
		font-size: 1.4rem;
		font-weight: 800;
		color: var(--faf-orange);
	}

	/* 5 · Flow */
	.flow {
		display: grid;
		gap: 0.45rem;
		margin: 0 0 1rem;
	}
	.flow-step {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		background: var(--faf-surface);
		color: var(--faf-black);
		border: 1px solid var(--faf-border);
		border-radius: 8px;
		padding: 0.6rem 0.9rem;
		font-size: 0.95rem;
	}
	.flow-new {
		border: 2px solid #00b8b8; /* literal-ok: faf-cli key colour accent border */
	}
	.flow-you {
		background: var(--faf-solid-bg);
		color: var(--faf-solid-fg);
		border-color: var(--faf-solid-bg);
	}
	.flow-n {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		flex: none;
		width: 1.6rem;
		height: 1.6rem;
		border-radius: 50%;
		background: var(--faf-section-alt);
		color: var(--faf-black);
		font-weight: 800;
		font-size: 0.85rem;
	}

	/* 6 · Pipeline */
	.pipeline {
		display: grid;
		grid-template-columns: minmax(0, 1fr) auto minmax(0, 1fr) auto minmax(0, 1fr);
		gap: 0.6rem;
		background: var(--faf-section-alt);
		color: var(--faf-black);
		border: 1px solid var(--faf-border);
		border-radius: 12px;
		padding: 1rem;
		margin: 0 0 1rem;
	}
	.pipe-step {
		background: var(--faf-surface);
		color: var(--faf-black);
		border: 1px solid var(--faf-border);
		border-radius: 10px;
		padding: 0.8rem 0.9rem;
	}
	.pipeline p {
		margin: 0;
		font-size: 0.88rem;
		line-height: 1.5;
	}
	.pipeline p.pipe-name {
		font-weight: 800;
		margin-bottom: 0.35rem;
	}

	/* 8 · Checks */
	.checks {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 0.75rem;
		margin: 0 0 1rem;
	}
	.check {
		background: var(--faf-surface);
		color: var(--faf-black);
		border: 1px solid var(--faf-border);
		border-radius: 10px;
		padding: 0.9rem 1rem;
	}
	.check p {
		margin: 0;
		font-size: 0.93rem;
		line-height: 1.6;
	}
	.check p.check-name {
		font-weight: 800;
		margin-bottom: 0.35rem;
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
		overflow-wrap: normal;
	}

	.terminal-block.wrap code {
		white-space: pre-wrap;
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

	@media (max-width: 700px) {
		.lanes,
		.reach,
		.checks,
		.compare,
		.pipeline {
			grid-template-columns: 1fr;
		}
		.compare-arrow,
		.pipe-arrow {
			justify-self: center;
			transform: rotate(90deg);
		}
		.rung {
			grid-template-columns: 1fr;
			gap: 0.2rem;
		}
		.contents ol {
			columns: 1;
		}
	}

	@media (max-width: 600px) {
		.post-header h1 {
			font-size: 2rem;
		}
	}
</style>
