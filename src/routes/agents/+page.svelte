<svelte:head>
	<title>AGENTS.md — The Field Guide | FAF</title>
	<meta name="description" content="AGENTS.md field guide, plus the FAF hop for MCP and A2A — persistent project DNA. What earns a line, what to cut, and the shape agents actually read." />
	<meta property="og:title" content="AGENTS.md — The Field Guide" />
	<meta property="og:description" content="AGENTS.md field guide. MCP and A2A are different jobs. FAF is persistent project DNA." />
	<meta property="og:type" content="article" />
	<meta property="og:url" content="https://faf.one/agents" />
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content="AGENTS.md — The Field Guide" />
	<meta name="twitter:description" content="What earns a line, what to cut, and the shape agents actually read." />
</svelte:head>

<main class="page">

	<!-- Hop for AAIF / MCP / A2A further-reading. Field guide body stays AGENTS.md. Do not clobber /mcp. -->
	<section class="mcp-section" id="mcp" aria-labelledby="hop-heading">
		<h2 id="hop-heading">Looking for MCP or A2A?</h2>
		<p>
			This page is the <strong>AGENTS.md</strong> field guide and the <strong>FAF</strong> hop —
			persistent project DNA. A <code>project.faf</code> at the repo root records verified facts
			and keeps instruction surfaces true, including <code>AGENTS.md</code>.
		</p>
		<p>
			<strong>MCP</strong> is how an agent uses tools.
			<strong>A2A</strong> is how independent agents discover each other and run a task as peers.
			<strong>AGENTS.md</strong> is how the agent works in this repo.
			FAF is complementary — it does not replace the protocol, the card, or the task.
		</p>

		<h3 id="a2a">A2A</h3>
		<p>
			Today <strong>A2A</strong> is an AAIF-hosted project. The Agent Card
			<strong>declares</strong> capabilities. The task is how you find out if the declaration holds.
		</p>
		<ul class="mcp-links">
			<li><a href="https://a2a-protocol.org/latest/" target="_blank" rel="noopener">Spec — a2a-protocol.org</a></li>
			<li><a href="https://aaif.io/projects/agent2agent" target="_blank" rel="noopener">Project — Agent2Agent at AAIF</a></li>
			<li><a href="https://aaif.io/blog/a2a-joins-aaif" target="_blank" rel="noopener">Join — A2A joins AAIF</a></li>
		</ul>

		<h3>MCP / 7/28</h3>
		<p>
			<strong>mcp-better</strong> is the live <strong>7/28</strong> textbook server (protocol
			<code>2026-07-28</code>): Rust · stdio foundation · Discover · stamped list cache.
			On crates.io and the MCP Registry.
		</p>
		<ul class="mcp-links">
			<li><a href="https://github.com/Wolfe-Jam/mcp-better" target="_blank" rel="noopener">GitHub — mcp-better</a></li>
			<li><a href="https://crates.io/crates/mcp-better" target="_blank" rel="noopener">crates.io — mcp-better</a></li>
		</ul>
		<p class="mcp-note">
			FAF + MCP: <a href="/mcp">faf.one/mcp</a> — unchanged.
		</p>
	</section>

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
			and it <strong>rots</strong>; ask an AI to write the whole thing, and it <strong>bloats</strong>. Both
			drift without care. The fix is the same either way: every line traces to a fact — a real command, a real
			file, a real constraint — and the file changes in the same PR as the code.
		</p>
		<p>
			AGENTS.md quality sits on a short ladder. <strong>We work the top two rungs: BETTER and BEST.</strong>
		</p>
		<div class="ladder-wrap">
			<table class="ladder-table">
				<thead>
					<tr>
						<th>State</th>
						<th>Meaning</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td><strong>NONE</strong></td>
						<td>No agent instruction file</td>
					</tr>
					<tr>
						<td><strong>GOOD</strong></td>
						<td>Some <code>AGENTS.md</code> (or peer file) exists — quality varies</td>
					</tr>
					<tr class="rung-focus">
						<td><strong>BETTER</strong></td>
						<td>A short, current, <strong>facts-based</strong> <code>AGENTS.md</code> an agent can trust</td>
					</tr>
					<tr class="rung-focus">
						<td><strong>BEST</strong></td>
						<td>BETTER <strong>plus</strong> durable project DNA — a <code>project.faf</code> at the repo root (the <code>package.json</code> for context) that authors and syncs instruction files from verified facts for <strong>persistent project context</strong></td>
					</tr>
				</tbody>
			</table>
		</div>
		<p class="muted-note ladder-path">
			<code>NONE</code> → <code>GOOD</code> → <strong><code>BETTER</code></strong> → <strong><code>BEST</code></strong>
		</p>

		<h3>BETTER — author from repo facts</h3>
		<p>
			A dedicated human maintainer can keep a hand-written file honest. When that gets old, author the
			managed lines from what the tree already declares — real build and test commands, entry points,
			toolchain conventions. Nothing invented. Nothing padded. Hand-written judgment stays
			<strong>outside</strong> the managed markers; re-runs refresh only the facts block.
		</p>
		<pre><code>npx agents-md-facts            # author / refresh AGENTS.md
npx agents-md-facts --check    # fail if missing or stale</code></pre>
		<p class="muted-note">
			Open-source, stack-agnostic — no FAF required.
			<a href="https://github.com/Wolfe-Jam/agents-md-facts" target="_blank" rel="noopener">agents-md-facts on GitHub</a>.
		</p>

		<h3>BEST — durable DNA, then export</h3>
		<p>
			When you want <strong>persistent project context</strong>, put durable DNA at the root as
			<code>project.faf</code> — the <code>package.json</code> for context. FAF scores and records that DNA,
			then authors and syncs instruction surfaces from verified facts (including <code>AGENTS.md</code>).
			Change the code, re-run export; the managed block stays current. Content you add outside the managed
			block is preserved.
		</p>
		<pre><code>npx faf-cli export --agents</code></pre>
		<p class="muted-note">
			Follow-on, not a religion. Write a great AGENTS.md by hand, or author BETTER from facts today.
			When you want root DNA underneath the file — scored, re-exportable, persistent — hand it to FAF.
		</p>
	</article>

	<article class="content">
		<h2>Further reading</h2>
		<ul>
			<li><strong>The series</strong> — <a href="https://dev.to/wolfejam/series/41937" target="_blank" rel="noopener">AGENTS.md on DEV</a> (field guide → hands-on → staleness → discipline → from facts).</li>
			<li><strong>The standard</strong> — <a href="https://agents.md" target="_blank" rel="noopener">agents.md</a> (the spec itself).</li>
			<li><strong>BETTER tooling</strong> — <a href="https://github.com/Wolfe-Jam/agents-md-facts" target="_blank" rel="noopener">agents-md-facts</a> (<code>npx agents-md-facts</code>).</li>
			<li><strong>The research</strong> — <a href="/blog/beyond-the-bloat">Beyond the Bloat</a> and <a href="/blog/recovered-in-translation">Recovered in Translation</a>: why context built from a repo's own signals — real commands, real paths, no prose — is exactly the "minimal requirements" ETH Zürich's SRI Lab pointed to.</li>
			<li><strong>The format underneath</strong> — <a href="/spec">the <code>.faf</code> format</a> and <a href="/">faf.one</a> (BEST rung).</li>
			<li><strong>Who the agent is</strong> — <code>AGENTS.md</code> is the ops briefing; <code>.fafa</code> is the passport. Wolfe, J. (2026). <a href="https://doi.org/10.5281/zenodo.21951641" target="_blank" rel="noopener"><em>Why Agents Need a Passport: .fafa — Portable Identity for the Agentic Era</em></a>.</li>
			<li><strong>BEST tooling</strong> — <a href="https://www.npmjs.com/package/faf-cli" target="_blank" rel="noopener">faf-cli on npm</a> (<code>npx faf-cli export --agents</code>).</li>
			<li><strong>A2A</strong> — <a href="https://a2a-protocol.org/latest/" target="_blank" rel="noopener">the spec</a> · <a href="https://aaif.io/blog/a2a-joins-aaif" target="_blank" rel="noopener">A2A joins AAIF</a>.</li>
			<li><strong>MCP + .faf</strong> — <a href="/mcp">faf.one/mcp</a>.</li>
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

	/* Hop box — MCP + A2A further-reading; AGENTS body stays the field guide */
	.mcp-section {
		margin: 1.5rem 0 0;
		padding: 1.15rem 1.15rem 1.05rem;
		border: 1px solid color-mix(in srgb, #00d4d4 45%, var(--faf-light-gray));
		border-radius: 10px;
		background: color-mix(in srgb, #00d4d4 8%, transparent);
	}

	.mcp-section h2 {
		font-size: 1.2rem;
		font-weight: 700;
		color: var(--faf-black);
		margin: 0 0 0.65rem;
		border: none;
		padding: 0;
	}

	.mcp-section h3 {
		font-size: 1.02rem;
		font-weight: 800;
		letter-spacing: 0.02em;
		color: var(--faf-black);
		margin: 1.05rem 0 0.45rem;
	}

	.mcp-section p {
		margin: 0 0 0.75rem;
		font-size: 0.98rem;
		line-height: 1.6;
		color: var(--faf-dark);
	}

	.mcp-section p:last-child {
		margin-bottom: 0;
	}

	.mcp-section code {
		font-size: 0.9em;
	}

	.mcp-links {
		margin: 0.25rem 0 0.85rem 1.15rem;
		padding: 0;
		font-size: 0.98rem;
		font-weight: 600;
		line-height: 1.7;
	}

	.mcp-links a {
		color: var(--faf-black);
		text-decoration: underline;
		text-underline-offset: 2px;
	}

	.mcp-links a:hover {
		color: #00a8a8;
	}

	.mcp-note {
		font-size: 0.9rem !important;
		opacity: 0.92;
	}

	.hero {
		padding: 2.5rem 0 2rem;
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

	.content h3 {
		font-size: 1.15rem;
		font-weight: 700;
		color: var(--faf-black);
		margin: 1.5rem 0 0.75rem;
	}

	.ladder-wrap {
		overflow-x: auto;
		margin: 1.25rem 0 0.75rem;
	}

	.ladder-table {
		width: 100%;
		border-collapse: collapse;
		font-size: 0.95rem;
	}

	.ladder-table th,
	.ladder-table td {
		text-align: left;
		padding: 0.65rem 0.85rem;
		border: 1px solid var(--faf-light-gray);
		color: var(--faf-dark);
		line-height: 1.5;
		vertical-align: top;
	}

	.ladder-table th {
		background: var(--faf-gray-light);
		color: var(--faf-black);
		font-weight: 700;
	}

	.ladder-table tr.rung-focus td {
		background: color-mix(in srgb, #00d4d4 10%, transparent);
	}

	.ladder-table tr.rung-focus td:first-child {
		color: var(--faf-black);
	}

	.ladder-path {
		margin-bottom: 0.5rem;
		letter-spacing: 0.02em;
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
