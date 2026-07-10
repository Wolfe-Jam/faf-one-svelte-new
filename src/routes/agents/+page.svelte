<svelte:head>
	<title>AGENTS.md — The Field Guide | FAF</title>
	<meta name="description" content="AGENTS.md is the file your coding agent reads to learn how to work in your repo. Section-by-section definitions, length discipline, the anti-patterns, and a complete worked example." />
	<meta property="og:title" content="AGENTS.md — The Field Guide" />
	<meta property="og:description" content="What earns a line, what to cut, and the shape agents actually read. Section-by-section definitions, length discipline, anti-patterns, and a complete example." />
	<meta property="og:type" content="article" />
	<meta property="og:url" content="https://faf.one/agents" />
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content="AGENTS.md — The Field Guide" />
	<meta name="twitter:description" content="What earns a line, what to cut, and the shape agents actually read." />
</svelte:head>

<main class="page">

	<header class="hero">
		<h1>AGENTS.md</h1>
		<p class="sub">The field guide — what earns a line, what to cut, and the shape agents actually read.</p>
	</header>

	<article class="content">
		<p class="lead">
			<code>README.md</code> is for humans. <code>AGENTS.md</code> is for the agent — the one file your
			coding assistant reads to learn <strong>how to work in this repo</strong>: the commands, where things
			live, the conventions, the guardrails. Every serious agent reads it now.
		</p>
		<p>
			Which is exactly why a stale one is dangerous. A human skims a stale README skeptically. An agent
			<em>acts</em> on a stale AGENTS.md — at full confidence, no second-guessing. The renamed build command,
			the guardrail you dropped, the convention you abandoned: followed to the letter. So the real question
			isn't whether to have one. It's <strong>how to keep it true.</strong> This guide is the shape of a file
			that stays true.
		</p>
	</article>

	<article class="content">
		<h2>The one rule: every line earns its place</h2>
		<p>A line stays only if it passes one test:</p>
		<ul>
			<li><strong>It resolves ambiguity</strong> — picks the canonical choice where the code has several valid ones, or</li>
			<li><strong>It caches cost</strong> — saves the agent an expensive hunt (multi-file reads, git archaeology).</li>
		</ul>
		<p>If it does neither, cut it. Short. Current. Specific. Actionable. Everything below serves that filter.</p>
	</article>

	<article class="content">
		<h2>The sections</h2>
		<p>Ordered by what an agent <em>can't</em> infer on its own — most important first.</p>
		<ol class="sections">
			<li><strong>Orientation</strong> — one line. What it is, the primary language, the key stack with versions, the project type (app / library / service). Then stop.</li>
			<li><strong>Setup &amp; build</strong> — the real, copy-pasteable commands. Run them first; paste what actually works.</li>
			<li><strong>Run the tests</strong> — the single-test command and the full-suite command. Ranked <em>above</em> build: tests are the agent's only way to check its work against reality instead of trusting a stale belief.</li>
			<li><strong>Where things live</strong> — entry points and key directories only. Never an <code>ls</code> dump — the agent can list files itself. Just the non-obvious "start here."</li>
			<li><strong>Conventions</strong> — only rules that resolve real ambiguity, written as examples ("use <code>SerializerV2</code> for new features; V1 is back-compat only"), not "write clean code." Anything the linter already enforces → point at the config, don't restate it.</li>
			<li><strong>Guardrails</strong> — Always / Ask-first / Never. (Detail below.)</li>
			<li><strong>Definition of Done</strong> — mechanically checkable, so the agent can <em>know</em> it's finished instead of guessing: "Done when lint exits 0, tests pass, changes committed."</li>
			<li><strong>When stuck</strong> — the escalation default: ask a clarifying question, propose a short plan, or open a draft PR with notes — don't push large speculative changes.</li>
			<li><strong>Security &amp; secrets</strong> — where secrets live (<code>.env</code>, see <code>.env.example</code>) and which files never to read or commit. Never the values.</li>
			<li><strong>Commit &amp; PR</strong> — message format and branch rules.</li>
		</ol>
		<p>
			<strong>Footer</strong> — a freshness marker (a last-updated date). In a monorepo, use nested AGENTS.md
			files: nearest wins, and the root points outward.
		</p>
		<p class="muted-note">
			<strong>Situational</strong> (add only if the project warrants it, and only if it passes the filter):
			an <strong>Architecture</strong> section for deployment or structure shape; <strong>non-standard tooling</strong>
			named explicitly (<code>uv</code>, <code>bun</code>, specific MCP servers — a tool named in AGENTS.md gets
			reached for far more often); and <strong>good/bad example pointers</strong> that link the canonical file
			rather than pasting it.
		</p>
	</article>

	<article class="content">
		<h2>Guardrails, in three tiers</h2>
		<p>The single highest-value section — a flat "don't" list, upgraded into a safety map the agent can actually navigate:</p>
		<pre><code>## Guardrails
- Always: read files, run the tests, build.
- Ask first: dependency installs, deletions, migrations, schema changes.
- Never: force-push, push to main, write to prod, commit secrets.</code></pre>
		<p>Now the agent knows what's free, what needs a human, and what's a landmine — before it acts, not after.</p>
	</article>

	<article class="content">
		<h2>How long?</h2>
		<ul>
			<li><strong>Start 20–50 lines.</strong> Grow a section only when an agent repeatedly gets it wrong; cut it when the convention changes.</li>
			<li><strong>~150 lines is the practical ceiling.</strong> Past that, inference cost climbs with no measurable gain.</li>
			<li><strong>32 KiB is the hard ceiling</strong> — some agents truncate beyond it. Over budget → split into nested files, don't cram.</li>
		</ul>
	</article>

	<article class="content">
		<h2>Anti-patterns</h2>
		<ol class="anti">
			<li><strong>Letting an AI write the whole thing.</strong> The strongest finding in the field: auto-generated instruction files measurably <em>reduce</em> task success — the model pads them with plausible-sounding rules the agent then over-obeys. Author from truth, not from a guess.</li>
			<li><strong>Duplicating the README.</strong> README is what and why; AGENTS.md is how-to-work-here.</li>
			<li><strong>Vague prose</strong> ("be careful", "clean code"). No verification hook — ignored.</li>
			<li><strong>Directory dumps.</strong> The agent can run <code>ls</code>.</li>
			<li><strong>Restating linter-enforced style.</strong> Point at the config; don't hand-copy the rules.</li>
			<li><strong>Staleness.</strong> Update it in the <em>same PR</em> as the change — a stale file is obeyed with full precision.</li>
			<li><strong>Secrets in the file.</strong> Ever.</li>
		</ol>
	</article>

	<article class="content">
		<h2>A complete example</h2>
		<p>Around 35 lines. Every line traces to a real command, a real file, or a real constraint — nothing invented:</p>
		<pre><code># AGENTS.md — faf-cli

CLI for the .faf context format. TypeScript (Bun runtime). Type: CLI tool.

## Setup &amp; build
bun install
bun run build

## Run the tests
bun run test              # full suite
bun test tests/interop    # a single area

## Where things live
- src/cli.ts — entry point (command dispatch)
- src/interop/ — the exporters (AGENTS.md, CLAUDE.md, ...)
- src/detect/ — repo detection (stack, commands, key files)
- tests/ — bun test suites

## Conventions
- Stage files by name — never git add -A.
- Match the surrounding file's idiom; keep tsc clean.

## Guardrails
- Always: read files, run bun run test, build.
- Ask first: dependency installs, deleting files, changing .github/workflows.
- Never: git push --force, push straight to main, commit secrets.

## Definition of Done
Done when: bun run lint exits 0, bun run test passes, changes committed with a conventional message.

## When stuck
Ask a clarifying question, propose a short plan, or open a draft PR — don't push large speculative changes.

## Security &amp; secrets
Secrets live in .env (see .env.example). Never read or commit .env.

## Commit &amp; PR
Conventional commits (feat: / fix: / test:). Branch off main; never commit to main directly.</code></pre>
	</article>

	<article class="content">
		<h2>Keeping it true</h2>
		<p>
			Getting the file right is an afternoon. Keeping it true — across every repo, on every change, forever —
			is the part that breaks. There are two failure modes, and they're opposite: hand-write it and leave it,
			and it <strong>rots</strong>; ask an AI to write it, and it <strong>bloats</strong>. And they both drift
			without care and attention — which is rarely sustained.
		</p>
		<p>The rule that fixes both is simple: every line traces to a fact — a real command, a real file, a real constraint — and the file changes in the same PR as the code. Simple, and rarely kept.</p>
		<p>You have two options. A dedicated, effective human maintainer can do this — sustaining the discipline on every change, in every repo. Or FAF can do it for you, with minimal human checks as required, per repo.</p>
		<p><code>faf export --agents</code> reads your repo, discerns what matters, and authors the definitions from the intel it finds — your real build and test commands, the key files, the conventions your linters enforce, the guardrails. Every line is verified and true — sourced from the repo, not invented — which is exactly why it sidesteps the bloat trap above. Change the code, re-run it, it's current. It keeps anything you hand-added.</p>
		<pre><code>npx faf-cli export --agents</code></pre>
		<p class="muted-note">
			Works with or without — a follow-on, not a religion. Write a great AGENTS.md by hand today. When keeping
			it true gets old, hand it to FAF: it reads the repo, discerns, and authors the definitions from intel.
			<strong>Verified and true. Scored and recorded. Done For You.</strong>
		</p>
	</article>

	<article class="content">
		<h2>Further reading</h2>
		<ul>
			<li><strong>The standard</strong> — <a href="https://agents.md" target="_blank" rel="noopener">agents.md</a> (the spec itself).</li>
			<li><strong>The research</strong> — <a href="/blog/beyond-the-bloat">Beyond the Bloat</a> and <a href="/blog/recovered-in-translation">Recovered in Translation</a>: why context built from a repo's own signals — real commands, real paths, no prose — is exactly the "minimal requirements" ETH Zürich's SRI Lab pointed to.</li>
			<li><strong>The format underneath</strong> — <a href="/spec">the <code>.faf</code> format</a> and <a href="/">faf.one</a>.</li>
			<li><strong>faf-cli</strong> — <a href="https://www.npmjs.com/package/faf-cli" target="_blank" rel="noopener">on npm</a> (<code>npx faf-cli export --agents</code>).</li>
		</ul>
	</article>

	<section class="content footer-section">
		<p class="footer-tagline">Write one well. Keep it honest.</p>
		<p class="footer-iana">Your agent is only as good as the last true thing you told it.</p>
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
		font-family: var(--font-mono), 'SF Mono', Consolas, monospace;
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

	.content ul,
	.content ol {
		margin: 0.5rem 0 1rem 1.4rem;
		padding: 0;
	}

	.content li {
		color: var(--faf-dark);
		line-height: 1.65;
		margin-bottom: 0.6rem;
	}

	.sections li,
	.anti li {
		margin-bottom: 0.85rem;
	}

	.content strong {
		color: var(--faf-black);
	}

	.muted-note {
		font-size: 0.98rem;
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
