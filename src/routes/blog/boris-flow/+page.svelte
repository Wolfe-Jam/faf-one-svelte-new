<script lang="ts">
	import { onMount } from 'svelte';
	import { buildShareIntent } from '$lib/shareIntent.js';

	let mounted = false;
	let copiedId = $state('');

	async function copyText(text: string, id: string) {
		await navigator.clipboard.writeText(text);
		copiedId = id;
		setTimeout(() => copiedId = '', 2000);
	}

	onMount(() => {
		mounted = true;
	});

	// Rich X share — pre-fill the crafted post, not just the URL.
	const shareText = `The Day We Added BORIS-FLOW

.faf brought the format. Boris brought the workflow. AI brought Gold Code.

12 integration tests for championship-grade AI context.`;
	const shareUrl = 'https://faf.one/blog/boris-flow';
	const xIntent = buildShareIntent({ text: shareText, url: shareUrl });
</script>

<svelte:head>
	<title>The Day We Added BORIS-FLOW | FAF</title>
	<meta name="description" content=".faf brought the format. Boris brought the workflow. AI brought Gold Code. 12 integration tests for championship-grade AI context." />
	<meta property="og:title" content="The Day We Added BORIS-FLOW" />
	<meta property="og:description" content=".faf brought the format. Boris brought the workflow. AI brought Gold Code." />
	<meta property="og:image" content="/blog-assets/boris-flow-banner.png" />
	<meta property="og:type" content="article" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / BORIS-FLOW
		</div>

		<h1>The Day We Added BORIS-FLOW</h1>
		<p class="subtitle">.faf brought the format. Boris brought the workflow. AI brought Gold Code.</p>
		<div class="meta">
			<time datetime="2026-02-03">February 3, 2026</time>
			<span class="separator">•</span>
			<span class="category">Engineering</span>
		</div>
	</header>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> We studied how Boris Cherny (creator of Claude Code) structures his projects - subagents, slash commands, MCP servers, Bun runtime - and built a 12-test integration suite that validates all of it. Now .faf detects and preserves the complete Claude Code ecosystem. Every publish passes Boris-Flow or it doesn't ship.
			</p>
		</section>

		<section class="revision-note">
			<h3>📝 Revision Note</h3>
			<p>
				<strong>Originally published:</strong> January 7, 2026<br>
				<strong>Updated:</strong> February 3, 2026
			</p>
			<p>
				Since launching Boris-Flow in January, we've integrated it into the WJTTC certification workflow and faf-cli documentation. This update adds practical guidance on <strong>when to run Boris-Flow</strong> and how it validates project structure before WJTTC Tier 8 certification. See the new "When to Run Boris-Flow" section below.
			</p>
			<p>
				<strong>What's new:</strong> Workflow recommendations, WJTTC integration, pre-certification best practices.
			</p>
		</section>

		<section>
			<h2>The Problem</h2>

			<p>Claude Code has evolved. It's not just CLAUDE.md anymore. Modern Claude Code projects have:</p>

			<ul>
				<li><code>.claude/agents/*.md</code> - Specialized subagents for different tasks</li>
				<li><code>.claude/commands/*.md</code> - Custom slash commands</li>
				<li><code>.claude/settings.json</code> - Permissions and configuration</li>
				<li><code>.mcp.json</code> - MCP server integrations (Slack, BigQuery, Sentry)</li>
				<li>Bun runtime detection (<code>bun.lockb</code>)</li>
			</ul>

			<p>If your AI context format doesn't understand this structure, you're working with half a blueprint. Context drift is inevitable.</p>
		</section>

		<section>
			<h2>The Inspiration</h2>

			<p><a href="https://x.com/bcherny/status/2007179832300581177" target="_blank" rel="noopener">Boris Cherny</a> created Claude Code. His setup is the reference implementation:</p>

			<ul>
				<li>5 subagents for specialized tasks</li>
				<li>Custom slash commands for workflows</li>
				<li>MCP servers for external services</li>
				<li>Bun as the runtime</li>
				<li>Everything wired together</li>
			</ul>

			<p>We asked: what if .faf could detect all of this automatically? What if we could validate that detection with real tests?</p>

			<div class="insight-box">
				<h3>The Insight</h3>
				<p>Don't guess what a Claude Code project looks like. Model it on the creator's actual setup. Then test against that model.</p>
			</div>
		</section>

		<section>
			<h2>Boris-Flow: The Test Suite</h2>

			<p>12 integration tests that must pass before any faf-cli publish:</p>

			<div class="gif-container">
				<img src="/blog-assets/boris-flow.gif" alt="Boris-Flow integration tests running - all 12 tests passing" />
			</div>

			<details>
				<summary>View full test output</summary>
				<pre><code>{`$ ./tests/boris-flow.test.sh
🏎️BORIS-FLOW INTEGRATION TEST

🏎️ Using local build: /Users/wolfejam/FAF/cli/dist/cli.js

1️⃣ Testing --version...
✅ faf --version (got: 3.4.4)

2️⃣ Creating Claude Code project...
✅ Created Claude Code structure

3️⃣ Testing faf init...
✅ faf init created project.faf

4️⃣ Checking type detection...
✅ Detected CLI type (got: cli-ts)

5️⃣ Checking language detection...
✅ Language detected (got: TypeScript)

6️⃣ Checking Claude Code detection...
✅ claude_code section exists
✅ Claude Code detected: true
✅ Subagents detected (got: 2)

7️⃣ Testing faf auto...
✅ faf auto maintained score (67 → 67)

8️⃣ Filling human context...
✅ human-set commands succeeded

9️⃣ Testing final score...
✅ Final score is 100% (got: 100%)

🔟 Testing non-TTY safety...
✅ faf enhance safe in non-TTY (100 → 100)

🏆 BORIS-FLOW: ALL 12 TESTS PASSED

✅ Demo ready
✅ Safe to publish
   Final score: 100%`}</code></pre>
			</details>

			<p>If any test fails, the publish stops. No exceptions.</p>
		</section>

		<section>
			<h2>What .faf Now Detects</h2>

			<p>Run <code>faf init</code> on a Claude Code project and the output includes:</p>

			<pre><code>{`claude_code:
  detected: true
  claude_md: true
  subagents:
    - code-reviewer
    - test-runner
    - docs-writer
  commands:
    - pubpro
    - deploy
  permissions:
    - Bash(npm:*)
    - Read(**)
  mcp_servers:
    - slack
    - bigquery`}</code></pre>

			<p>Complete metadata. Ready for any AI to understand your Claude Code setup instantly.</p>
		</section>

		<section>
			<h2>When to Run Boris-Flow</h2>

			<p>Boris-Flow isn't just for faf-cli maintainers — it's a validation tool for anyone using .faf files. Here are the key scenarios:</p>

			<table class="workflow-table">
				<thead>
					<tr>
						<th>Scenario</th>
						<th>Why Run Boris-Flow</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td><strong>Before <code>faf init</code></strong></td>
						<td>Validates faf-cli installation works correctly on your machine</td>
					</tr>
					<tr>
						<td><strong>After major .faf changes</strong></td>
						<td>Re-validates project structure remains valid</td>
					</tr>
					<tr>
						<td><strong>Before WJTTC certification</strong></td>
						<td>Pre-validates .faf file for Tier 8 (FAF Documentation) tests</td>
					</tr>
					<tr>
						<td><strong>Before publishing</strong></td>
						<td>Ensures no regressions in faf-cli (maintainers only)</td>
					</tr>
					<tr>
						<td><strong>Team onboarding</strong></td>
						<td>Proves faf-cli works and demonstrates 100% scoring</td>
					</tr>
				</tbody>
			</table>

			<div class="workflow-example">
				<h3>Pre-Certification Workflow</h3>
				<p>WJTTC users can now validate their .faf files before running certification:</p>
				<div class="copy-box" onclick={() => copyText('cd your-project\nfaf init && faf auto\nfaf score\ngit clone https://github.com/Wolfe-Jam/faf-cli\ncd faf-cli && ./tests/boris-flow.test.sh\ncd ../your-project\nnpx wjttc certify --mcp "npx your-server"', 'precert')}>
					<div class="copy-code-multi">cd your-project<br/>faf init && faf auto<br/>faf score<br/>git clone https://github.com/Wolfe-Jam/faf-cli<br/>cd faf-cli && ./tests/boris-flow.test.sh<br/>cd ../your-project<br/>npx wjttc certify --mcp "npx your-server"</div>
					<button class="copy-btn">{copiedId === 'precert' ? 'Copied!' : 'Copy'}</button>
				</div>
				<p>Boris-Flow validates the structure that WJTTC Tier 8 tests. Running it first helps ensure you pass Tier 8.</p>
			</div>

			<p><strong>Where it's documented:</strong></p>
			<ul>
				<li><a href="https://github.com/Wolfe-Jam/wjttc#pre-certification-best-practices">WJTTC README</a> - Pre-certification best practices</li>
				<li><a href="https://github.com/Wolfe-Jam/faf-cli#boris-flow-integration-tests">faf-cli README</a> - Complete Boris-Flow documentation</li>
			</ul>
		</section>

		<section>
			<h2>Live Bi-Sync Demo</h2>

			<p>We also shipped <code>faf demo sync</code> - a live demonstration of bidirectional sync:</p>

			<pre><code>{`$ faf demo sync

┌─────────────────────────────────────────────┐
│ FAF BI-SYNC DEMO                            │
│ Live demonstration of .faf <-> CLAUDE.md sync│
└─────────────────────────────────────────────┘

Starting demo...
├─ Files detected:
│  📄 project.faf
│  CLAUDE.md

T=39.589s  🌀 CLAUDE.md  -> editing...
T=40.092s  🔗 Change detected: "DEMO rule added"
T=40.602s  ⚡ project.faf synced (9ms)

T=41.603s  🌀 project.faf  -> editing...
T=42.108s  🔗 Change detected: "demo_marker updated"
T=42.610s  ⚡ CLAUDE.md synced (1ms)

T=43.611s  🌀 CLAUDE.md  -> editing...
T=44.111s  🔗 Change detected: "context update"
T=44.612s  ⚡ project.faf synced (1ms)

3 changes  ·  3 syncs  ·  avg 4ms  ·  0 conflicts

Demo complete - no files changed.

✨ Try: faf bi-sync - Set up real bi-sync for your project`}</code></pre>

			<p>Every faf-cli user can now demo bi-sync to their team. Built-in evangelism.</p>

			<p><strong><a href="/sync">Try the interactive web demo →</a></strong></p>
		</section>

		<section>
			<h2>Why This Matters</h2>

			<p>Context drift happens when your AI doesn't know your project structure. With Boris-Flow:</p>

			<table>
				<thead>
					<tr>
						<th>Before</th>
						<th>After</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>AI guesses your setup</td>
						<td>AI knows your exact Claude Code structure</td>
					</tr>
					<tr>
						<td>Subagents invisible</td>
						<td>Subagents listed by name</td>
					</tr>
					<tr>
						<td>MCP servers unknown</td>
						<td>MCP servers detected</td>
					</tr>
					<tr>
						<td>Runtime assumed</td>
						<td>Bun/Node detected from lockfile</td>
					</tr>
					<tr>
						<td>Permissions unclear</td>
						<td>Permissions extracted from settings.json</td>
					</tr>
				</tbody>
			</table>

			<p><strong>One format. Complete AI context. Zero drift.</strong></p>
		</section>

		<section>
			<h2>Try It</h2>

			<div class="copy-box" onclick={() => copyText('brew install faf-cli\nfaf init && faf auto', 'tryit')}>
				<div class="copy-code-multi">brew install faf-cli<br/>faf init && faf auto</div>
				<button class="copy-btn">{copiedId === 'tryit' ? 'Copied!' : 'Copy'}</button>
			</div>

			<p>That's it. Your Claude Code structure is now captured in project.faf.</p>

			<div class="brave-section">
				<p class="brave-note">For the brave:</p>
				<div class="copy-box" onclick={() => copyText('cd your-project\nnpx faf-cli yolo', 'yolo')}>
					<div class="copy-code-multi">cd your-project<br/>npx faf-cli yolo</div>
					<button class="copy-btn">{copiedId === 'yolo' ? 'Copied!' : 'Copy'}</button>
				</div>
				<p class="brave-desc">Downloads faf-cli via npx and runs yolo — init + auto + aggressive extraction in one command. May take a minute on first run.</p>
			</div>

			<div class="cta-grid">
				<div class="cta-box">
					<h3>Get Started</h3>
					<p>Install faf-cli and run Boris-Flow yourself.</p>
					<a href="https://github.com/Wolfe-Jam/faf-cli" class="cta-link">GitHub</a>
				</div>
				<div class="cta-box">
					<h3>View Tests</h3>
					<p>See the 12 tests that validate every publish.</p>
					<a href="https://github.com/Wolfe-Jam/faf-cli/blob/main/tests/boris-flow.test.sh" class="cta-link">boris-flow.test.sh</a>
				</div>
			</div>
		</section>

		<section>
			<h2>The FAF Tier System</h2>

			<div class="gold-code-box">
				<p>At FAF-Score 100% AI is optimized. No more guessing, peak AI performance is activated 🏆 Gold Code mode enabled</p>
			</div>

			<table class="tier-table">
				<thead>
					<tr>
						<th>Score</th>
						<th>Tier</th>
						<th>Meaning</th>
					</tr>
				</thead>
				<tbody>
					<tr class="tier-gold">
						<td>🏆 100%</td>
						<td>Gold Code</td>
						<td>AI Optimized</td>
					</tr>
					<tr>
						<td>🥇 99%+</td>
						<td>Gold</td>
						<td>Exceptional</td>
					</tr>
					<tr>
						<td>🥈 95%+</td>
						<td>Silver</td>
						<td>Excellent</td>
					</tr>
					<tr>
						<td>🥉 85%+</td>
						<td>Bronze</td>
						<td>Production ready</td>
					</tr>
					<tr>
						<td>🟢 70%+</td>
						<td>Green</td>
						<td>Good foundation</td>
					</tr>
					<tr>
						<td>🟡 55%+</td>
						<td>Yellow</td>
						<td>Needs work</td>
					</tr>
					<tr>
						<td>🔴 &lt;55%</td>
						<td>Red</td>
						<td>Critical gaps</td>
					</tr>
				</tbody>
			</table>

			<p class="tier-footer">GOAL 🏆 100% then bi-sync for eternal Context-Mirroring</p>
		</section>

		<section>
			<h2>The Numbers</h2>

			<ul>
				<li><strong>v3.4.4</strong> - Released January 7, 2026</li>
				<li><strong>12/12</strong> - Boris-Flow tests pass</li>
				<li><strong>609/629</strong> - Full test suite (20 intentionally skipped)</li>
				<li><strong>100%</strong> - FAF score on faf-cli itself</li>
				<li><strong>4ms</strong> - Average bi-sync time</li>
				<li><strong>21,000+</strong> - npm downloads</li>
			</ul>
		</section>

		<section class="share-section">
			<a href={xIntent} target="_blank" rel="noopener" class="share-btn">Post on X</a>
		</section>

		<section class="footer-note">
			<p>
				Built with .faf ☑️ Inspired by Boris Cherny. Championship-grade engineering. 🏎️
			</p>
		</section>
	</article>
</div>

<style>
	:global(body) {
		background: #FEFCF8;
	}

	.blog-post {
		max-width: 800px;
		margin: 0 auto;
		padding: 2rem 1rem;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
		line-height: 1.7;
		color: #333;
	}

	.post-header {
		margin-bottom: 3rem;
		border-bottom: 2px solid #FF6B35;
		padding-bottom: 2rem;
	}

	.breadcrumb {
		font-size: 0.9rem;
		margin-bottom: 1rem;
		color: #666;
	}

	.breadcrumb a {
		color: #FF6B35;
		text-decoration: none;
	}

	.breadcrumb a:hover {
		text-decoration: underline;
	}

	h1 {
		font-size: 2.2rem;
		margin: 0.5rem 0;
		color: #000;
		line-height: 1.3;
	}

	.subtitle {
		font-size: 1.2rem;
		color: #666;
		margin: 0.5rem 0 1rem 0;
	}

	.meta {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		font-size: 0.9rem;
		color: #666;
	}

	.separator {
		color: #ccc;
	}

	.category {
		background: #FF6B35;
		color: white;
		padding: 0.25rem 0.75rem;
		border-radius: 4px;
		font-size: 0.85rem;
	}

	.revision-badge {
		background: #00D4D4;
		color: white;
		padding: 0.25rem 0.75rem;
		border-radius: 4px;
		font-size: 0.85rem;
		font-weight: 600;
	}

	.post-content {
		font-size: 1.1rem;
	}

	.lead {
		font-size: 1.2rem;
		line-height: 1.7;
		margin-bottom: 2rem;
		padding: 1.5rem;
		background: #f8f8f8;
		border-radius: 8px;
	}

	h2 {
		font-size: 1.8rem;
		margin: 3rem 0 1.5rem 0;
		color: #000;
		border-bottom: 1px solid #eee;
		padding-bottom: 0.5rem;
	}

	p {
		margin-bottom: 1.25rem;
	}

	ul {
		margin: 1rem 0 1.5rem 1.5rem;
	}

	li {
		margin-bottom: 0.5rem;
	}

	code {
		font-family: 'SF Mono', 'Fira Code', Consolas, monospace;
		background: #f0f0f0;
		padding: 0.2rem 0.4rem;
		border-radius: 4px;
		font-size: 0.9em;
	}

	pre {
		background: #1a1a1a;
		color: #00ff88;
		padding: 1.25rem;
		border-radius: 8px;
		overflow-x: auto;
		font-size: 0.85rem;
		margin: 1.5rem 0;
	}

	pre code {
		background: none;
		padding: 0;
	}

	.gif-container {
		margin: 1.5rem 0;
		border-radius: 8px;
		overflow: hidden;
		border: 2px solid #333;
	}

	.gif-container img {
		width: 100%;
		display: block;
	}

	details {
		margin: 1.5rem 0;
	}

	summary {
		cursor: pointer;
		font-weight: 600;
		color: #FF6B35;
		padding: 0.5rem 0;
	}

	summary:hover {
		text-decoration: underline;
	}

	.insight-box {
		background: linear-gradient(135deg, rgba(255, 107, 53, 0.1) 0%, rgba(0, 212, 212, 0.1) 100%);
		border: 1px solid #FF6B35;
		border-radius: 8px;
		padding: 1.5rem;
		margin: 2rem 0;
	}

	.insight-box h3 {
		color: #FF6B35;
		margin: 0 0 0.75rem 0;
	}

	.insight-box p {
		margin: 0;
	}

	.revision-note {
		background: linear-gradient(135deg, rgba(0, 212, 212, 0.1) 0%, rgba(0, 212, 212, 0.05) 100%);
		border: 1px solid #00D4D4;
		border-left: 4px solid #00D4D4;
		border-radius: 8px;
		padding: 1.5rem;
		margin: 2rem 0;
	}

	.revision-note h3 {
		color: var(--faf-cyan-text);
		margin: 0 0 0.75rem 0;
		font-size: 1.3rem;
	}

	.revision-note p {
		margin-bottom: 0.75rem;
	}

	.revision-note p:last-child {
		margin-bottom: 0;
	}

	.workflow-table {
		margin: 1.5rem 0;
	}

	.workflow-table td:first-child {
		font-weight: 600;
		width: 35%;
	}

	.workflow-example {
		background: #f8f8f8;
		border: 2px solid #00D4D4;
		border-radius: 8px;
		padding: 1.5rem;
		margin: 2rem 0;
	}

	.workflow-example h3 {
		color: var(--faf-cyan-text);
		margin: 0 0 1rem 0;
		font-size: 1.2rem;
	}

	.workflow-example p {
		margin-bottom: 1rem;
	}

	.workflow-example p:last-child {
		margin-bottom: 0;
		font-size: 0.95rem;
		color: #666;
		font-style: italic;
	}

	table {
		width: 100%;
		border-collapse: collapse;
		margin: 1.5rem 0;
	}

	th, td {
		padding: 0.75rem;
		text-align: left;
		border-bottom: 1px solid #eee;
	}

	th {
		background: #f8f8f8;
		font-weight: 600;
		color: #333;
	}

	.tier-table {
		font-size: 1rem;
	}

	.tier-table td:first-child {
		font-family: 'SF Mono', monospace;
		font-weight: 600;
	}

	.tier-gold {
		background: linear-gradient(90deg, rgba(255, 215, 0, 0.15) 0%, rgba(255, 215, 0, 0.05) 100%);
	}

	.tier-gold td {
		font-weight: 700;
	}

	.gold-code-box {
		background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%);
		border: 2px solid gold;
		border-radius: 8px;
		padding: 1.25rem 1.5rem;
		margin: 1.5rem 0;
		text-align: center;
	}

	.gold-code-box p {
		margin: 0;
		color: #fff;
		font-weight: 600;
		font-size: 1.1rem;
	}

	.tier-footer {
		text-align: center;
		font-weight: 600;
		color: #666;
		font-style: italic;
		margin-top: 1rem;
	}

	.brave-section {
		margin: 1.5rem 0;
		padding: 1rem;
		background: #f8f8f8;
		border-radius: 8px;
		border-left: 3px solid #FF6B35;
	}

	.brave-note {
		font-size: 0.95rem;
		color: #FF6B35;
		font-weight: 600;
		font-style: italic;
		margin: 0 0 0.75rem 0;
	}

	.brave-desc {
		font-size: 0.9rem;
		color: #666;
		margin: 0.75rem 0 0 0;
	}

	.terminal-block.small {
		padding: 0.75rem 1rem;
		margin: 0;
	}

	.terminal-block.small code {
		font-size: 0.9rem;
	}

	.terminal-block {
		background: #1a1a1a;
		padding: 1.25rem;
		border-radius: 8px;
		margin: 1.5rem 0;
	}

	.terminal-block code {
		display: block;
		color: #00ff88;
		background: none;
		padding: 0.25rem 0;
		font-size: 1rem;
	}

	.terminal-block code::before {
		content: '$ ';
		color: #888;
	}

	.cta-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1.5rem;
		margin: 2rem 0;
	}

	.cta-box {
		background: #f8f8f8;
		border: 2px solid #FF6B35;
		padding: 1.5rem;
		border-radius: 8px;
		text-align: center;
	}

	.cta-box h3 {
		margin: 0 0 0.5rem 0;
		color: #FF6B35;
	}

	.cta-box p {
		margin: 0 0 1rem 0;
		font-size: 0.95rem;
		color: #666;
	}

	.cta-link {
		color: #FF6B35;
		text-decoration: none;
		font-weight: 600;
	}

	.cta-link:hover {
		text-decoration: underline;
	}

	.share-section {
		margin-top: 3rem;
		text-align: center;
	}

	.share-btn {
		display: inline-flex;
		align-items: center;
		padding: 0.6rem 1.25rem;
		border-radius: 6px;
		font-size: 0.9rem;
		font-weight: 600;
		text-decoration: none;
		background: #000;
		color: #fff;
		transition: opacity 0.2s;
	}

	.share-btn:hover {
		opacity: 0.85;
		text-decoration: none;
		color: #fff;
	}

	.footer-note {
		margin-top: 4rem;
		padding-top: 2rem;
		border-top: 1px solid #eee;
		font-size: 0.95rem;
		color: #666;
		text-align: center;
	}

	a {
		color: #FF6B35;
	}

	a:hover {
		text-decoration: none;
	}

	.copy-box {
		display: flex;
		align-items: center;
		gap: 1rem;
		padding: 1rem 1.5rem;
		background: #1a1a1a;
		border: 1px solid #333;
		border-radius: 8px;
		margin: 1rem 0;
		cursor: pointer;
		transition: border-color 0.2s;
	}
	.copy-box:hover { border-color: #555; }
	.copy-code {
		flex: 1;
		font-family: 'Monaco', 'Courier New', monospace;
		color: #00d4d4;
		background: transparent;
		padding: 0;
		font-size: 0.95rem;
		font-weight: 600;
		border-radius: 0;
	}
	.copy-code-multi {
		flex: 1;
		font-family: 'Monaco', 'Courier New', monospace;
		color: #00d4d4;
		font-size: 0.9rem;
		font-weight: 600;
		line-height: 1.6;
	}
	.code-comment { color: #666; font-weight: 400; }
	.copy-btn {
		padding: 0.5rem 1rem;
		background: rgba(255, 107, 53, 0.2);
		border: 1px solid rgba(255, 107, 53, 0.4);
		color: #ff6b35;
		border-radius: 6px;
		font-weight: 600;
		font-size: 0.8rem;
		cursor: pointer;
		transition: all 0.2s;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		white-space: nowrap;
	}
	.copy-btn:hover { background: rgba(255, 107, 53, 0.3); border-color: #ff6b35; }
	.copy-btn:active { transform: scale(0.95); }

	@media (max-width: 768px) {
		h1 {
			font-size: 1.75rem;
		}

		.cta-grid {
			grid-template-columns: 1fr;
		}

		.blog-post {
			padding: 1rem;
		}
	}
</style>
