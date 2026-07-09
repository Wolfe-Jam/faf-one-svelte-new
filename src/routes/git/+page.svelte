<svelte:head>
	<title>FAF &amp; Git — Context, Versioned | FAF</title>
	<meta name="description" content="FAF is to Context what Git is to Versions. project.faf is a git-native artifact: pull instant scored context from any repo, diff it, track its score across history, and guard it in pre-commit." />
	<meta property="og:title" content="FAF &amp; Git — Context, Versioned" />
	<meta property="og:description" content="project.faf is a git-native artifact. faf git, faf diff, faf log, faf hooks — the tools your code has had for years, now for your context." />
	<meta property="og:type" content="article" />
	<meta property="og:url" content="https://faf.one/git" />
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content="FAF &amp; Git — Context, Versioned" />
	<meta name="twitter:description" content="project.faf is a git-native artifact — diff it, log its score, guard it in pre-commit." />
</svelte:head>

<main class="page">

	<header class="hero">
		<h1>Context, versioned</h1>
		<p class="sub">FAF is to Context what Git is to Versions.</p>
	</header>

	<article class="content">
		<p class="lead">
			Git gave your <em>code</em> diff, log, hooks, CI. Your <em>context</em> never got the same tools —
			it lived in a doc that drifted. FAF changes that: <code>project.faf</code> is a git-native artifact. It
			versions with your code, so the context an agent reads always matches the commit it's working on.
		</p>
		<p>Four commands give your context what your code has had for years.</p>
	</article>

	<article class="content">
		<h2>Instant context from any repo — <code>faf git</code></h2>
		<p><code>faf git owner/repo</code> turns a GitHub repo into a scored <code>project.faf</code> in one command. Point it at a dependency, a reference implementation, or a repo you're about to work in, and an agent has accurate context in seconds.</p>
		<pre><code>faf git pallets/flask              # instant, scored context → project.faf
faf git pallets/flask --ref 3.0.0  # versioned — context at a specific tag</code></pre>
		<p><code>--ref</code> pins the context to any branch or tag, so your context is versioned the same way your code is.</p>
	</article>

	<article class="content">
		<h2>Diff your context — <code>faf diff</code></h2>
		<p>A semantic diff for context: slot-by-slot deltas and the score change between two <code>.faf</code> versions. It reads git ranges the way git does — a ref, <code>A..B</code>, <code>A...B</code>.</p>
		<pre><code>faf diff HEAD~1        # against the previous commit
faf diff main..HEAD    # across a branch</code></pre>
		<p>It shows what moved — a filled slot, a changed command — and the score delta, e.g. 85% → 100% when a branch completes the picture. One flag wires it into git itself:</p>
		<pre><code>faf diff --install-driver</code></pre>
		<p>Now native <code>git diff</code>, <code>git log -p</code>, and <code>git show</code> render <code>.faf</code> score and slot deltas inline — context changes surface in the tools you already read.</p>
	</article>

	<article class="content">
		<h2>The score timeline — <code>faf log</code></h2>
		<p><code>faf log</code> walks git history and reports the <code>.faf</code> score at every commit that touched it — your context quality as a line you can watch rise, or catch regressing, across the life of the project. The trend can't be gamed.</p>
		<pre><code>faf log            # the last 20 commits that touched the .faf
faf log --all      # the full history
faf log --reverse  # oldest-first</code></pre>
	</article>

	<article class="content">
		<h2>Guard it in pre-commit — <code>faf hooks</code></h2>
		<p><code>faf hooks --install</code> adds a pre-commit context guard: it scores the staged <code>.faf</code> against HEAD and warns on a regression. Add <code>--strict</code> and a regression blocks the commit.</p>
		<pre><code>faf hooks --install           # warn on a context-score regression
faf hooks --install --strict  # block the commit on a regression</code></pre>
		<p>Context stops rotting quietly, because a drop shows up before it lands — not three sprints later when an agent trusts the stale version.</p>
	</article>

	<article class="content">
		<h2>In CI</h2>
		<p>The same commands gate a pipeline. Require a readiness threshold, surface what changed, and keep regressions off the branch:</p>
		<ul>
			<li><code>faf score</code> — fail the build below your bar (target: Trophy 100%).</li>
			<li><code>faf diff main..HEAD</code> — show the reviewer exactly what context moved.</li>
			<li><code>faf hooks --install --strict</code> — regressions never reach the PR in the first place.</li>
		</ul>
		<p>Context becomes something you can <em>require</em>, the way you require green tests.</p>
		<p><strong>Proof over time.</strong> <code>faf log</code> tracks your context <em>score</em> across commits; its sibling <strong>TAF</strong> does the same for your <em>tests</em> — an append-only receipt on every CI run, committed to a <code>taf-receipts</code> branch, git-anchored and impossible to game. Anyone can go green once; the timeline is the proof. → <a href="https://github.com/Wolfe-Jam/faf-taf-git" target="_blank" rel="noopener">faf-taf-git</a></p>
	</article>

	<article class="content">
		<h2>Why it matters</h2>
		<p>Git made code changes legible — diffable, reversible, attributable. FAF does the same for context: <code>project.faf</code> is versioned, diffable, and scored at every commit. The context an agent reads travels with the branch and matches the code, instead of drifting in a doc nobody updated.</p>
		<p><strong>Verified and true. Scored and recorded — at every commit.</strong> That's context, versioned.</p>
		<p class="muted-note">Built under the WJTTC test discipline — Brake · Engine · Aero · Tyres — where every artifact's test ships in the same commit as the artifact. The proof travels with the change.</p>
	</article>

	<article class="content">
		<h2>Further reading</h2>
		<ul>
			<li><strong>The format</strong> — <a href="/spec">the <code>.faf</code> spec</a> (<code>application/vnd.faf+yaml</code>, IANA-registered).</li>
			<li><strong>The AGENTS.md field guide</strong> — <a href="/agents">faf.one/agents</a>.</li>
			<li><strong>faf-cli</strong> — <a href="https://www.npmjs.com/package/faf-cli" target="_blank" rel="noopener">on npm</a> (<code>npx faf-cli git owner/repo</code>).</li>
		</ul>
	</article>

	<section class="content footer-section">
		<p class="footer-tagline">Context, versioned.</p>
		<p class="footer-iana">FAF is to Context what Git is to Versions.</p>
	</section>

</main>

<style>
	.page {
		max-width: 780px;
		margin: 0 auto;
		padding: 0 1.5rem;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
	}

	.hero {
		padding: 4rem 0 2rem;
		border-bottom: 1px solid var(--faf-light-gray);
		margin-bottom: 1rem;
	}

	.hero h1 {
		font-size: 2.4rem;
		font-weight: 800;
		color: var(--faf-black);
		margin-bottom: 0.5rem;
	}

	.sub {
		font-size: 1.15rem;
		color: var(--faf-dark);
		font-weight: 600;
		line-height: 1.5;
	}

	.content {
		padding: 1.25rem 0;
	}

	.content h2 {
		font-size: 1.45rem;
		font-weight: 700;
		color: var(--faf-black);
		margin-bottom: 1rem;
		border-bottom: 1px solid var(--faf-light-gray);
		padding-bottom: 0.4rem;
	}

	.content p {
		color: var(--faf-dark);
		line-height: 1.7;
		margin-bottom: 1rem;
	}

	.lead {
		font-size: 1.2rem;
		line-height: 1.7;
		color: var(--faf-black);
	}

	.content ul {
		margin: 0.5rem 0 1rem 1.4rem;
		padding: 0;
	}

	.content li {
		color: var(--faf-dark);
		line-height: 1.65;
		margin-bottom: 0.6rem;
	}

	.content strong {
		color: var(--faf-black);
	}

	.muted-note {
		font-size: 0.95rem;
		color: var(--faf-dark);
	}

	.content a {
		color: var(--faf-orange);
		text-decoration: none;
		font-weight: 600;
	}

	.content a:hover {
		text-decoration: underline;
	}

	code {
		font-family: var(--font-mono), 'SF Mono', Consolas, monospace;
		background: var(--faf-gray-light);
		color: var(--faf-cyan-text);
		padding: 0.15rem 0.4rem;
		border-radius: 4px;
		font-size: 0.9em;
	}

	pre {
		background: var(--faf-gray-light);
		border: 1px solid var(--faf-light-gray);
		border-radius: 8px;
		padding: 1.1rem 1.25rem;
		overflow-x: auto;
		margin: 1.25rem 0;
		line-height: 1.55;
	}

	pre code {
		background: none;
		color: var(--faf-black);
		padding: 0;
		font-size: 0.9rem;
		white-space: pre;
	}

	.footer-section {
		text-align: center;
		padding: 3rem 0;
		border-top: 1px solid var(--faf-light-gray);
		margin-top: 1.5rem;
	}

	.footer-tagline {
		font-weight: 700;
		color: var(--faf-black);
	}

	.footer-iana {
		font-size: 0.95rem;
		color: var(--faf-dark);
		margin-top: 0.4rem;
	}

	@media (max-width: 768px) {
		.hero h1 {
			font-size: 1.9rem;
		}
		.page {
			padding: 0 1rem;
		}
	}
</style>
