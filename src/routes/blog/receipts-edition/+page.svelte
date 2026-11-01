<script lang="ts">
	import { buildShareIntent } from '#lib/shareIntent.js';
	import NpmPkg from '#lib/NpmPkg.svelte';

	const shareText = `🏁 Just shipped: faf-cli v8.7.0 — The Receipts Edition

Proof your tests ran, kept in git after the CI logs expire.

faf taf receipts shows them in your terminal.
taf setup writes the workflow: JavaScript, Python, Go. Red runs get one too.

Deep dive: diagrams · the push race · two reviews · 2333 tests

npx faf-cli@8.7.0 taf receipts

Help guide what we build —
Comments · suggestions welcome.`;
	const shareUrl = 'https://faf.one/blog/receipts-edition';
	const xIntent = buildShareIntent({ text: shareText, url: shareUrl });
</script>

<svelte:head>
	<title>The Receipts Edition - faf-cli v8.7.0 | FAF</title>
	<meta
		name="description"
		content="Your Test Receipts, in your terminal: faf taf receipts shows them, taf setup writes the recipe for JavaScript (Jest, Vitest, Bun), Python and Go, and every test run on your default branch gets one, red ones too."
	/>
	<meta property="og:title" content="The Receipts Edition - faf-cli v8.7.0" />
	<meta
		property="og:description"
		content="A deep dive: what a Test Receipt is, where it lives, how a red run still gets one, and what happens when two runs race for the push."
	/>
	<meta property="og:type" content="article" />
	<meta property="og:url" content="https://faf.one/blog/receipts-edition" />
	<meta property="og:site_name" content=".faf Format Authority" />
	<meta property="og:image" content="https://faf.one/blog/receipts-edition-hero.png" />
	<meta property="og:image:secure_url" content="https://faf.one/blog/receipts-edition-hero.png" />
	<meta property="og:image:type" content="image/png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta
		property="og:image:alt"
		content="faf-cli v8.7.0, The Receipts Edition: your Test Receipts, in your terminal"
	/>
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@fafformat" />
	<meta name="twitter:creator" content="@wolfe_jam" />
	<meta name="twitter:title" content="The Receipts Edition - faf-cli v8.7.0" />
	<meta
		name="twitter:description"
		content="A deep dive: what a Test Receipt is, where it lives, how a red run still gets one, and what happens when two runs race for the push."
	/>
	<meta name="twitter:image" content="https://faf.one/blog/receipts-edition-hero.png" />
	<meta
		name="twitter:image:alt"
		content="faf-cli v8.7.0, The Receipts Edition: your Test Receipts, in your terminal"
	/>
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / The Receipts Edition
		</div>
		<h1>The Receipts Edition</h1>
		<p class="version-tag">faf-cli v8.7.0</p>
		<p class="subtitle">
			Proof your tests ran, kept in git after the CI logs expire. A deep dive into how it works.
		</p>
		<div class="meta">
			<time datetime="2026-11-01">November 1, 2026</time>
			<span class="separator">•</span>
			<span class="category release">Release</span>
			<span class="category deep-dive">Deep Dive</span>
		</div>
	</header>

	<div class="hero-image">
		<img
			src="/blog/receipts-edition-hero.png"
			alt="faf-cli v8.7.0, The Receipts Edition: your Test Receipts, in your terminal"
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
					>Your Test Receipts, in your terminal: <code>faf taf receipts</code> shows them,
					<code>taf setup</code> writes the recipe for JavaScript (Jest, Vitest, Bun), Python and Go,
					and every test run on your default branch gets one, red ones too.</strong
				>
			</p>
			<div class="lead plain-english">
				<p class="plain-label">In Plain English</p>
				<p>
					<strong>Old state.</strong> Your CI ran the tests and said green or red. Then the logs
					expired. Six months later, "was main green before that release?" has no answer anyone can
					check.
				</p>
				<p>
					<strong>Fix.</strong> Every run writes one line of proof into git: when, the result,
					passed out of total. It's a receipt, and receipts are kept.
				</p>
				<p>
					<strong>New state.</strong> <code>faf taf setup</code> writes the workflow that prints them.
					<code>faf taf receipts</code> reads them back, in your terminal.
				</p>
			</div>
		</section>

		<nav class="contents" aria-label="In this deep dive">
			<p class="contents-label">In this deep dive</p>
			<ol>
				<li><a href="#anatomy">Anatomy of a receipt</a></li>
				<li><a href="#where">Where receipts live</a></li>
				<li><a href="#red-runs">A red run still gets one</a></li>
				<li><a href="#race">Two runs, one push</a></li>
				<li><a href="#setup">How taf setup picks the recipe</a></li>
				<li><a href="#branch">Which branch gets receipts</a></li>
				<li><a href="#read">Reading them back</a></li>
				<li><a href="#reviews">How we got it right</a></li>
			</ol>
		</nav>

		<section id="anatomy">
			<h2><span class="num">1</span> Anatomy of a receipt</h2>
			<p>
				This is a real one, from faf-cli's own release run. It is a few lines of YAML appended to a
				file called <code>.taf</code>:
			</p>
			<div class="terminal-block">
				<code>{`  - timestamp: 2026-10-31T23:34:07.345Z`}</code>
				<code>{`    result: PASSED`}</code>
				<code>{`    tests:`}</code>
				<code>{`      total: 2333`}</code>
				<code>{`      passed: 2332`}</code>
				<code>{`      failed: 0`}</code>
				<code>{`      skipped: 1`}</code>
				<code>{`    trigger: github-actions`}</code>
			</div>
			<div class="diagram anatomy" role="img" aria-label="The four parts of a receipt: when, the result, the counts, and what ran it">
				<div class="part">
					<p class="part-key">timestamp</p>
					<p class="part-what">When it ran. UTC, to the millisecond.</p>
				</div>
				<div class="part">
					<p class="part-key">result</p>
					<p class="part-what"><code>PASSED</code> or <code>FAILED</code>. One word, no maybe.</p>
				</div>
				<div class="part">
					<p class="part-key">tests</p>
					<p class="part-what">Total, passed, failed, skipped. Read from your runner's own output.</p>
				</div>
				<div class="part">
					<p class="part-key">trigger</p>
					<p class="part-what">What ran it. Here, a GitHub Actions run.</p>
				</div>
			</div>
			<p>
				Nothing else. No score, no grade, no opinion. A receipt says what the test runner said, at
				the moment it said it. It's small on purpose: faf-cli has 420 of them, one per run.
			</p>
		</section>

		<section id="where">
			<h2><span class="num">2</span> Where receipts live</h2>
			<p>
				Not on <code>main</code>. Receipts go to their own branch, <code>taf-receipts</code>, which
				holds one file: <code>.taf</code>. Your code history and your test history stay apart, and
				neither clutters the other.
			</p>
			<div class="diagram lanes" role="img" aria-label="Two branches: main gets your commits; taf-receipts gets one receipt commit per CI run, and only grows">
				<div class="lane">
					<p class="lane-name"><code>main</code></p>
					<div class="track">
						<span class="dot"></span><span class="dot"></span><span class="dot"></span><span class="dot"></span><span class="dot"></span>
					</div>
					<p class="lane-note">your commits</p>
				</div>
				<div class="lane">
					<p class="lane-name"><code>taf-receipts</code></p>
					<div class="track">
						<span class="dot receipt"></span><span class="dot receipt"></span><span class="dot receipt fail"></span><span class="dot receipt"></span><span class="dot receipt"></span><span class="grow">→ only grows</span>
					</div>
					<p class="lane-note">one receipt per run, red ones too</p>
				</div>
			</div>
			<p>
				The receipts branch is <strong>append-only</strong>. Each run adds one commit with one
				receipt. Nothing is rewritten and nothing is force-pushed, so the history can be checked
				the same way you check any git history.
			</p>
		</section>

		<section id="red-runs">
			<h2><span class="num">3</span> A red run still gets one</h2>
			<p>
				The obvious workflow records only green runs: the tests fail, the job stops, and the receipt
				step never runs. That's a record of the good days only. <code>taf setup</code> writes it the
				other way round:
			</p>
			<ol class="diagram flow" aria-label="The four steps of a run">
				<li class="step">
					<p class="step-name">Checkout and install</p>
					<p class="step-what">Your toolchain, your lockfile.</p>
				</li>
				<li class="step">
					<p class="step-name">Run tests</p>
					<p class="step-what">
						<code>continue-on-error: true</code>. A failure is noted, and the job keeps going.
					</p>
				</li>
				<li class="step key">
					<p class="step-name">Print the receipt</p>
					<p class="step-what">Runs either way: <code>PASSED</code> or <code>FAILED</code>. Default branch only.</p>
				</li>
				<li class="step fail">
					<p class="step-name">Fail the job if the tests failed</p>
					<p class="step-what">The last step. Your CI is still red when it should be.</p>
				</li>
			</ol>
			<p>
				So the receipt is written <em>before</em> the job fails. The red day is on the record, and
				the red X is still on the commit. Pull requests run the tests too, but print no receipt: the
				record is for what landed.
			</p>
		</section>

		<section id="race">
			<h2><span class="num">4</span> Two runs, one push</h2>
			<p>
				Two pushes to main a minute apart start two runs. Both finish close together. Both add a
				receipt on top of the same branch tip, and both push. Git takes the first and rejects the
				second. Before faf-taf-git 2.4.3, that second receipt was lost, with a warning nobody reads.
			</p>
			<div class="diagram race" role="img" aria-label="Run A pushes first. Run B is rejected, fetches the branch, adds its receipt on top of A's, and pushes again">
				<div class="runner">
					<p class="runner-name">Run A</p>
					<p class="beat">adds receipt A</p>
					<p class="beat ok">push → accepted</p>
				</div>
				<div class="runner">
					<p class="runner-name">Run B</p>
					<p class="beat">adds receipt B</p>
					<p class="beat no">push → rejected (A got there first)</p>
					<p class="beat">fetch the branch again</p>
					<p class="beat">add receipt B on top of A</p>
					<p class="beat ok">push → accepted</p>
				</div>
			</div>
			<p>
				Now the run that lost the race fetches, adds its receipt on top of the winner's, and pushes
				again, up to 5 tries. With runs racing on purpose, 4 at once kept 4 receipts every time.
				Only at 6 at once did one run lose out, and it says so in the log.
			</p>
			<p>
				<strong>Why not just queue the runs?</strong> GitHub's <code>concurrency</code> group looks
				like the answer, and our first recipe used one. But GitHub keeps only one run waiting: when
				a third arrives, the waiting one is cancelled. No tests, no receipt. The retry keeps every
				run; the queue quietly drops one. So the recipe has no concurrency group.
			</p>
		</section>

		<section id="setup">
			<h2><span class="num">5</span> How <code>taf setup</code> picks the recipe</h2>
			<p>
				faf-taf-git reads Jest, Vitest, Bun and WJTTC output, and JUnit XML. So
				<code>faf taf setup</code> asks a few questions of your repo, in order, and writes a step
				whose output can actually be read:
			</p>
			<ol class="diagram ladder" aria-label="The questions taf setup asks, in order">
				<li class="rung">
					<p class="q">A <code>package.json</code>, and its <code>test</code> script runs Jest or Vitest?</p>
					<p class="a">Your <code>test</code> script, via npm, pnpm, yarn or bun, from the lockfile.</p>
				</li>
				<li class="rung">
					<p class="q"><code>bun test</code> with a Bun lockfile?</p>
					<p class="a"><code>bun run test</code>.</p>
				</li>
				<li class="rung">
					<p class="q">Python: <code>pyproject.toml</code>, <code>setup.py</code>, <code>setup.cfg</code>, <code>requirements.txt</code> or <code>pytest.ini</code>?</p>
					<p class="a"><code>pytest --junitxml=report.xml</code>.</p>
				</li>
				<li class="rung">
					<p class="q">Go: <code>go.mod</code>?</p>
					<p class="a"><code>gotestsum --junitfile report.xml</code>.</p>
				</li>
				<li class="rung last">
					<p class="q">Anything else, or another JavaScript runner?</p>
					<p class="a">A <code>TODO</code> placeholder to fill in.</p>
				</li>
			</ol>
			<p>
				<strong>The <code>test</code> script decides, not your dependencies.</strong> A repo with
				Jest installed whose <code>test</code> script runs mocha gets the placeholder, because mocha's
				output isn't one faf-taf-git reads. <code>npm run test:unit</code> is followed to the script
				it hands over to. The rule: never write a step that would go red on every run.
			</p>
			<p>
				<strong>The small things that would have bitten.</strong> Go's setup pins the toolchain in
				<code>go.mod</code>, and gotestsum needs Go 1.24, so the install uses
				<code>GOTOOLCHAIN=auto</code>: a <code>go 1.22</code> repo still gets it. pnpm's setup step
				needs a version unless <code>package.json</code> pins pnpm, so <code>taf setup</code> adds one
				only when it isn't pinned. Both would otherwise fail at install, on every run.
			</p>
		</section>

		<section id="branch">
			<h2><span class="num">6</span> Which branch gets receipts</h2>
			<p>
				Receipts are for your default branch. <code>taf setup</code> works it out without touching
				the network, in this order:
			</p>
			<ol class="diagram ladder" aria-label="How taf setup finds the default branch">
				<li class="rung">
					<p class="q">Does git know origin's default (<code>origin/HEAD</code>)?</p>
					<p class="a">Use it.</p>
				</li>
				<li class="rung">
					<p class="q">Does origin have <code>main</code>, or <code>master</code>?</p>
					<p class="a">Use that.</p>
				</li>
				<li class="rung">
					<p class="q">Does origin have just one branch?</p>
					<p class="a">Use it.</p>
				</li>
				<li class="rung last">
					<p class="q">Otherwise</p>
					<p class="a">Your current branch, and faf says it's a guess: check <code>branches:</code> before you commit.</p>
				</li>
			</ol>
			<p>
				A clone can be missing <code>origin/HEAD</code>, and the current branch might be a feature
				branch. Asking origin's branches first means a guess is rare, and when it happens you're
				told.
			</p>
		</section>

		<section id="read">
			<h2><span class="num">7</span> Reading them back</h2>
			<p>Fetch the branch, then ask:</p>
			<div class="terminal-block">
				<code>{`$ git fetch origin taf-receipts`}</code>
				<code>{`$ faf taf receipts --limit 4`}</code>
				<code>{`TAF receipts — faf-cli · 420 on origin/taf-receipts · times in UTC`}</code>
				<code>{`  2026-10-31 23:34  PASSED    2332/2333  1 skipped`}</code>
				<code>{`  2026-10-31 23:23  PASSED    2332/2333  1 skipped`}</code>
				<code>{`  2026-10-31 22:11  PASSED    2315/2316  1 skipped`}</code>
				<code>{`  2026-10-31 08:51  PASSED    2301/2302  1 skipped`}</code>
				<code>{`  last 4: 4 PASSED`}</code>
				<code>{`  as of your last fetch (git fetch origin taf-receipts)`}</code>
			</div>
			<ul>
				<li>
					<strong>Reads, never writes, never fetches.</strong> It reads <code>origin/taf-receipts</code>,
					then a local <code>taf-receipts</code>, then a <code>.taf</code> in the folder. Fetch when
					you want the latest.
				</li>
				<li>
					<strong><code>--json</code></strong> gives the same receipts to a script: source, project,
					total and the list.
				</li>
				<li>
					<strong><code>--ref</code></strong> reads any point in the past, such as
					<code>origin/taf-receipts~20</code>. A ref that looks like an option is refused.
				</li>
				<li><strong>Times are UTC</strong> and sorted as times, whatever zone a receipt was written in.</li>
				<li>
					<strong>Plain text when piped.</strong> Colour shows only in a terminal; piped output, CI
					logs and agent tools get none. <code>NO_COLOR</code> and <code>FORCE_COLOR</code> are respected.
				</li>
			</ul>
		</section>

		<section id="reviews">
			<h2><span class="num">8</span> How we got it right</h2>
			<p>
				A release about proof should be able to show its own. Before 8.7.0 shipped, its code went to
				two independent reviews, each told to run things, not read them, and to report only.
			</p>
			<div class="table-wrap">
				<table>
					<thead>
						<tr><th>Review</th><th>Verdict</th><th>What it found</th><th>Then</th></tr>
					</thead>
					<tbody>
						<tr>
							<td>Full review</td>
							<td>Ship after fixes</td>
							<td>
								1 blocker: the Go recipe failed at install on any <code>go.mod</code> below 1.24. 7 more:
								unreadable runner output, the pnpm version, the queue that drops runs, a
								<code>--ref</code> that git read as an option, the branch, skipped Go tests counted as passed,
								and a headline that claimed too much.
							</td>
							<td>All fixed, in faf-cli and in faf-taf-git 2.4.3</td>
						</tr>
						<tr>
							<td>Targeted re-check</td>
							<td>Ship after fixes</td>
							<td>
								7 cases still wrong at the edges: a clone with no <code>origin/HEAD</code>, a branch named
								<code>release/v1+x</code>, a mocha script with Jest installed, an npm
								<code>packageManager</code> beside a pnpm lockfile, a time with no zone, a partial clone, and
								4 changelog lines.
							</td>
							<td>All fixed, each with a test</td>
						</tr>
					</tbody>
				</table>
			</div>
			<p>
				Every finding was reproduced before it was fixed, and every code fix came with a test. The
				headline changed too: "every run" became "every test run on your default branch",
				because that's what's true.
			</p>
		</section>

		<section>
			<h2>Try it</h2>
			<div class="terminal-block">
				<code>npx --yes <NpmPkg name="faf-cli" version="8.7.0" /> --version</code>
				<code>cd your-project</code>
				<code>npx --yes <NpmPkg name="faf-cli" version="8.7.0" /> taf setup</code>
				<code>npx --yes <NpmPkg name="faf-cli" version="8.7.0" /> taf setup --write</code>
				<code>git fetch origin taf-receipts</code>
				<code>npx --yes <NpmPkg name="faf-cli" version="8.7.0" /> taf receipts</code>
			</div>
			<p class="muted-note">
				<code>taf setup</code> prints the workflow; <code>--write</code> saves it to
				<code>.github/workflows/taf.yml</code> and never replaces one that's there. Commit and push,
				and the next run on your default branch prints the first receipt. Or install it:
				<code>npm i -g <NpmPkg name="faf" version="8.7.0" /></code>. Homebrew has 8.7.0 too.
			</p>
		</section>

		<section>
			<h2>What gets no receipt</h2>
			<ul>
				<li>Pull request runs, by design.</li>
				<li>A run that fails before its tests start: the install or the toolchain.</li>
				<li>A run whose output faf-taf-git can't read. The placeholder is there to stop you writing one.</li>
				<li>The odd run when 6 or more finish at once: one can lose the push race, and says so.</li>
			</ul>
		</section>

		<section>
			<h2>Technical details</h2>
			<ul>
				<li><strong>Version:</strong> faf-cli 8.7.0 (October 31, 2026) · pins faf-taf-git 2.4.3</li>
				<li><strong>Packages:</strong> <code>faf-cli</code> and <code>faf</code> on npm (same build) · Homebrew</li>
				<li><strong>Tests:</strong> 2333 passing (faf-taf-git: 100)</li>
				<li>
					<strong>Docs:</strong>
					<a href="https://docs.faf.one/taf" target="_blank" rel="noopener">docs.faf.one/taf</a>
				</li>
				<li>
					<strong>Notes:</strong>
					<a href="https://github.com/Wolfe-Jam/faf-cli/releases/tag/v8.7.0" target="_blank" rel="noopener">v8.7.0</a>
					·
					<a href="https://github.com/Wolfe-Jam/faf-taf-git/releases/tag/v2.4.3" target="_blank" rel="noopener">faf-taf-git v2.4.3</a>
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
			<p>Built with .faf ☑️ Every run, on the record. 🏎️</p>
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
		color: #fff; /* literal-ok: category pill text, paired with its category bg */
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
		scroll-margin-top: 1.5rem;
	}

	.post-content h2 {
		font-size: 1.6rem;
		color: var(--faf-black);
		margin: 0 0 1rem;
		letter-spacing: -0.01em;
		display: flex;
		align-items: center;
		gap: 0.6rem;
		flex-wrap: wrap;
	}
	.num {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 2rem;
		height: 2rem;
		border-radius: 50%;
		background: var(--faf-solid-bg);
		color: var(--faf-solid-fg);
		font-size: 1rem;
		font-weight: 800;
		flex-shrink: 0;
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

	/* Diagrams: HTML boxes, so the text stays readable at any width. */
	.diagram {
		margin: 1.5rem 0;
		padding: 0;
		list-style: none;
	}
	.diagram p {
		margin: 0;
		line-height: 1.5;
	}

	.anatomy {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 0.75rem;
	}
	.part {
		background: var(--faf-surface);
		color: var(--faf-black);
		border: 1px solid var(--faf-border);
		border-top: 4px solid #00b8b8; /* literal-ok: Release category accent border */
		border-radius: 8px;
		padding: 0.9rem 1rem;
	}
	.part-key {
		font-family: 'SF Mono', 'Fira Code', Menlo, monospace;
		font-weight: 800;
		margin-bottom: 0.35rem !important;
	}
	.part-what {
		font-size: 0.95rem;
	}

	.lanes {
		background: var(--faf-surface);
		color: var(--faf-black);
		border: 1px solid var(--faf-border);
		border-radius: 10px;
		padding: 1.25rem 1.5rem;
		display: grid;
		gap: 1.25rem;
	}
	.lane {
		display: grid;
		grid-template-columns: 9rem 1fr;
		grid-template-rows: auto auto;
		column-gap: 1rem;
		align-items: center;
	}
	.lane-name {
		grid-row: 1 / span 2;
		font-weight: 700;
	}
	.track {
		display: flex;
		align-items: center;
		gap: 0;
		flex-wrap: wrap;
		row-gap: 0.4rem;
	}
	.dot {
		width: 1.1rem;
		height: 1.1rem;
		border-radius: 50%;
		background: var(--faf-black);
		position: relative;
		margin-right: 1.6rem;
	}
	.dot::after {
		content: '';
		position: absolute;
		left: 100%;
		top: 50%;
		width: 1.6rem;
		border-top: 2px solid var(--faf-black);
	}
	.dot:last-of-type::after {
		display: none;
	}
	.dot.receipt {
		background: #00b8b8; /* literal-ok: Release accent, a passing receipt */
	}
	.dot.receipt.fail {
		background: var(--faf-orange);
	}
	.grow {
		font-weight: 700;
		font-size: 0.95rem;
	}
	.lane-note {
		font-size: 0.9rem;
		margin-top: 0.35rem !important;
	}

	.flow {
		display: grid;
		gap: 0.6rem;
		counter-reset: step;
	}
	.step {
		counter-increment: step;
		position: relative;
		background: var(--faf-surface);
		color: var(--faf-black);
		border: 1px solid var(--faf-border);
		border-left: 4px solid var(--faf-black);
		border-radius: 8px;
		padding: 0.85rem 1rem 0.85rem 3.25rem;
	}
	.step::before {
		content: counter(step);
		position: absolute;
		left: 1rem;
		top: 0.85rem;
		width: 1.6rem;
		height: 1.6rem;
		border-radius: 50%;
		background: var(--faf-solid-bg);
		color: var(--faf-solid-fg);
		font-weight: 800;
		font-size: 0.85rem;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.step.key {
		border-left-color: #00b8b8; /* literal-ok: Release accent, the receipt step */
	}
	.step.fail {
		border-left-color: var(--faf-orange);
	}
	.step-name {
		font-weight: 800;
	}
	.step-what {
		font-size: 0.95rem;
	}

	.race {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 0.75rem;
		align-items: start;
	}
	.runner {
		background: var(--faf-surface);
		color: var(--faf-black);
		border: 1px solid var(--faf-border);
		border-radius: 10px;
		padding: 1rem 1.1rem;
		display: grid;
		gap: 0.45rem;
	}
	.runner-name {
		font-weight: 800;
		font-size: 1.05rem;
	}
	.beat {
		font-family: 'SF Mono', 'Fira Code', Menlo, monospace;
		font-size: 0.88rem;
		padding-left: 0.75rem;
		border-left: 3px solid var(--faf-border);
	}
	.beat.ok {
		border-left-color: #00b8b8; /* literal-ok: Release accent, an accepted push */
		font-weight: 700;
	}
	.beat.no {
		border-left-color: var(--faf-orange);
		font-weight: 700;
	}

	.ladder {
		display: grid;
		gap: 0.5rem;
	}
	.rung {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1rem;
		background: var(--faf-surface);
		color: var(--faf-black);
		border: 1px solid var(--faf-border);
		border-radius: 8px;
		padding: 0.8rem 1rem;
		align-items: center;
	}
	.rung .q {
		font-weight: 700;
	}
	.rung .a {
		font-size: 0.95rem;
		padding-left: 1rem;
		border-left: 3px solid #00b8b8; /* literal-ok: Release accent, the answer */
	}
	.rung.last .a {
		border-left-color: var(--faf-black);
	}

	.table-wrap {
		overflow-x: auto;
		margin: 1.25rem 0;
	}
	table {
		width: 100%;
		border-collapse: collapse;
		font-size: 0.95rem;
		background: var(--faf-surface);
		color: var(--faf-black);
	}
	th {
		text-align: left;
		background: var(--faf-section-alt);
		color: var(--faf-black);
		padding: 0.65rem 0.75rem;
		border-bottom: 2px solid var(--faf-border);
	}
	td {
		padding: 0.7rem 0.75rem;
		border-bottom: 1px solid var(--faf-border);
		vertical-align: top;
		line-height: 1.55;
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

	@media (max-width: 680px) {
		.post-header h1 {
			font-size: 2rem;
		}
		.anatomy {
			grid-template-columns: 1fr 1fr;
		}
		.race,
		.rung {
			grid-template-columns: 1fr;
		}
		.rung .a {
			padding-left: 0.75rem;
		}
		.lane {
			grid-template-columns: 1fr;
		}
		.lane-name {
			grid-row: auto;
			margin-bottom: 0.4rem !important;
		}
		.contents ol {
			columns: 1;
		}
	}
</style>
