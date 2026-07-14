<script lang="ts">
	import { onMount } from 'svelte';
	let mounted = false;
	let copiedId = $state('');
	onMount(() => { mounted = true; });

	async function copyText(text: string, id: string) {
		await navigator.clipboard.writeText(text);
		copiedId = id;
		setTimeout(() => copiedId = '', 2000);
	}
</script>

<svelte:head>
	<title>WJTTC: Championship-Grade Testing You Can Self-Host | FAF</title>
	<meta name="description" content="WJTTC v1.4.0 — self-host championship-grade MCP testing in any project. Earn the 🏆 Trophy at 100%. Big Orange 🍊 is AI-curated, no human gatekeeper. Free forever." />
	<meta property="og:title" content="WJTTC: Championship-Grade Testing You Can Self-Host" />
	<meta property="og:description" content="Self-host championship-grade MCP testing. Trophy 🏆 at 100%. Big Orange 🍊 curated by AI — no human gatekeeper. Free forever." />
	<meta property="og:type" content="article" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / WJTTC Self-Hosting
		</div>
		<h1>🏎️ Championship-Grade Testing You Can Self-Host</h1>
		<p class="subtitle">WJTTC v1.4.0 — How I Test Every FAF App, and How You Can Too</p>
		<div class="meta">
			<time datetime="2026-03-21">March 21, 2026</time>
			<span class="separator">•</span>
			<span class="category wjttc">WJTTC Ecosystem</span>
		</div>
	</header>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				Every FAF app — claude-faf-mcp, faf-cli, faf-mcp, grok-faf-mcp — passes through the same testing system before it ships. That system is WJTTC. It's free, it's open source, and you can self-host it in your own project right now.
			</p>
		</section>

		<section>
			<h2>The Numbers</h2>
			<ul>
				<li><strong>v1.4.0</strong> — Latest release</li>
				<li><strong>105</strong> — Internal tests passing</li>
				<li><strong>52</strong> — Certification tests across 9 tiers</li>
				<li><strong>100% 🏆</strong> — WJTTC's own FAF score (earned, not given)</li>
				<li><strong>3 servers</strong> — Big Orange 🍊 certified</li>
				<li><strong>43k+</strong> — FAF ecosystem downloads</li>
				<li><strong>$0</strong> — Cost to certify, self-host, and adopt</li>
			</ul>
		</section>

		<section>
			<h2>How I Use It</h2>
			<p>In my Claude Code workflow, WJTTC is wired into the development cycle. Here's the actual flow:</p>

			<div class="flow-steps">
				<div class="flow-step">
					<span class="step-num">1</span>
					<div>
						<strong>Build the MCP server</strong>
						<p>Write tools, handlers, protocol compliance — the usual.</p>
					</div>
				</div>
				<div class="flow-step">
					<span class="step-num">2</span>
					<div>
						<strong>Run WJTTC certification</strong>
						<p>52 tests across 9 tiers. Protocol, tools, errors, performance, FAF awareness — everything.</p>
					</div>
				</div>
				<div class="flow-step">
					<span class="step-num">3</span>
					<div>
						<strong>Fix what fails, run again</strong>
						<p>WJTTC tells you exactly what's wrong. Fix it. Certify again. Repeat until 100%.</p>
					</div>
				</div>
				<div class="flow-step">
					<span class="step-num">4</span>
					<div>
						<strong>Ship with confidence</strong>
						<p>100% = 🏆 Trophy. The server is certified. It works.</p>
					</div>
				</div>
			</div>

			<div class="copy-box" onclick={() => copyText('npx wjttc certify --mcp "npx your-server"', 'certify')}>
				<code class="copy-code">npx wjttc certify --mcp "npx your-server"</code>
				<button class="copy-btn">{copiedId === 'certify' ? 'Copied!' : 'Copy'}</button>
			</div>

			<p>That's it. One command. 52 tests. A real score.</p>
		</section>

		<section>
			<h2>The Problem WJTTC Solves</h2>
			<p>MCP servers are becoming infrastructure. People rely on them. But there's no standard way to know if one actually works — not just "runs without crashing," but works <em>correctly</em> across protocol compliance, error handling, tool validation, and edge cases.</p>

			<p>I built WJTTC because I needed it myself. The FAF ecosystem has 9+ tools across TypeScript, Rust, Python, and Zig. Every one of them needs to be tested to the same standard. Not "good enough." Championship grade.</p>

			<p>The name comes from F1 racing: <strong>when brakes must work flawlessly, so must our software</strong>.</p>
		</section>

		<section>
			<h2>Self-Hosting: Your Project, Your Tests</h2>
			<p>WJTTC isn't just a certifier you run once. You can self-host the entire testing infrastructure in your own project.</p>

			<div class="copy-box" onclick={() => copyText('npm install -g wjttc@1.4.0', 'install')}>
				<code class="copy-code">npm install -g wjttc@1.4.0</code>
				<button class="copy-btn">{copiedId === 'install' ? 'Copied!' : 'Copy'}</button>
			</div>
			<div class="copy-box" style="margin-top: 0.5rem;" onclick={() => copyText('wjttc init', 'init')}>
				<code class="copy-code">wjttc init</code>
				<button class="copy-btn">{copiedId === 'init' ? 'Copied!' : 'Copy'}</button>
			</div>

			<div class="terminal-output">
				<code>🚀 WJTTC Initialization Complete!

☑️ Test directories created (brake/engine/aero)
☑️ Pre-commit hook installed (Rocket Science Grade)
☑️ package.json scripts added
☑️ Example brake test generated
☑️ WJTTC-TESTING.md created

Your project now has championship-grade testing infrastructure.</code>
			</div>

			<p>One command installs the full F1 testing philosophy into your project:</p>

			<div class="tier-grid">
				<div class="tier">
					<h4>🛑 Brake Tests</h4>
					<p>Fast, critical. Must pass before every commit. Under 30 seconds.</p>
				</div>
				<div class="tier">
					<h4>⚙️ Engine Tests</h4>
					<p>Core functionality. The heart of your application.</p>
				</div>
				<div class="tier">
					<h4>🏎️ Aero Tests</h4>
					<p>Performance benchmarks. Speed under pressure.</p>
				</div>
			</div>
		</section>

		<section>
			<h2>In CI/CD: Automate the Standard</h2>
			<p>Self-hosting means your CI pipeline enforces the same standards locally and in the cloud. WJTTC ships with a GitHub Action:</p>

			<div class="terminal-block">
				<code>{`# .github/workflows/wjttc.yml
name: WJTTC Certification
on: [push, pull_request]

jobs:
  certify:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
      - run: npm ci
      - run: npx wjttc certify --mcp "npx ./dist/index.js"`}</code>
			</div>

			<p>Every push. Every PR. Championship standards enforced automatically. No human has to remember to run the tests — the pipeline does it.</p>
		</section>

		<section>
			<h2>The 9 Tiers</h2>
			<p>WJTTC doesn't just check "does it run." It validates across 9 tiers, from basic protocol compliance to FAF integration:</p>

			<div class="tiers-table">
				<div class="tier-row"><span class="tier-num">1</span><span class="tier-name">Protocol</span><span class="tier-desc">MCP protocol compliance</span></div>
				<div class="tier-row"><span class="tier-num">2</span><span class="tier-name">Discovery</span><span class="tier-desc">Tool listing and capability reporting</span></div>
				<div class="tier-row"><span class="tier-num">3</span><span class="tier-name">Execution</span><span class="tier-desc">Tool calls return correct results</span></div>
				<div class="tier-row"><span class="tier-num">4</span><span class="tier-name">Errors</span><span class="tier-desc">Graceful error handling</span></div>
				<div class="tier-row"><span class="tier-num">5</span><span class="tier-name">Edge Cases</span><span class="tier-desc">Malformed input, boundary conditions</span></div>
				<div class="tier-row"><span class="tier-num">6</span><span class="tier-name">Performance</span><span class="tier-desc">Response time and throughput</span></div>
				<div class="tier-row"><span class="tier-num">7</span><span class="tier-name">Security</span><span class="tier-desc">Input validation, injection resistance</span></div>
				<div class="tier-row"><span class="tier-num">8</span><span class="tier-name">FAF</span><span class="tier-desc">project.faf validation and scoring</span></div>
				<div class="tier-row"><span class="tier-num">9</span><span class="tier-name">Receipt</span><span class="tier-desc">TAF receipt validation</span></div>
			</div>

			<p>49 scored tests + 3 validation checks = 52 total. Progressive adoption: run 7 tiers, 8, or all 9 — all valid certification levels.</p>
		</section>

		<section>
			<h2>🍊 Big Orange: The Badge You Can't Game</h2>

			<div class="hero-image">
				<img src="/images/big-orange-origin.png" alt="Orange Ford Escort alongside a McLaren F1 car — both in papaya orange" />
				<p class="image-caption">The origin story: McLaren switched to Papaya Orange in 1968 — the year wolfejam was born. His first car? An orange Ford Escort, 1977 model. The Big 🍊 is earned around here.</p>
			</div>

			<p class="dev-note"><strong>Dev note:</strong> wolfejam is obsessed with F1. The original slogan was <em>"if your car will go 220 miles per hour, your brakes better work flawlessly"</em> — we toned it down for general release.</p>

			<p><strong>Big Orange 🍊 is not a score.</strong> You can't calculate your way to it. There's no human gatekeeper handing them out. No lobbying, no subjectivity, no gaming the system.</p>

			<p>Big Orange is <strong>curated by AI</strong>. The evaluation looks at:</p>

			<ul>
				<li>☑️ <strong>Consecutive 100% builds</strong> — not just one pass, sustained excellence</li>
				<li>☑️ <strong>Documentation quality</strong> — clear, accurate, maintained</li>
				<li>☑️ <strong>README standards</strong> — install, usage, examples, no fluff</li>
				<li>☑️ <strong>Active bi-sync</strong> — .faf and CLAUDE.md staying in alignment</li>
				<li>☑️ <strong>Best practice comparison</strong> — measured against the best of your app type</li>
			</ul>

			<p>No human decides. AI evaluates the evidence. The badge is either earned or it isn't.</p>

			<p class="highlight">
				<strong>Current Big Orange 🍊 holders:</strong><br>
				claude-faf-mcp · faf-mcp · grok-faf-mcp<br><br>
				Three servers that didn't just pass every test once — they maintained championship standards across consecutive builds, documentation, and engineering practice. Hard to get. That's the point.
			</p>
		</section>

		<section>
			<h2>🏆 Trophy at 100%</h2>
			<p>Big Orange sits above the scoring system. Below it, the ladder starts with the <strong>🏆 Trophy</strong> — score 100% on WJTTC certification. 52 tests, all passing, no skips, no workarounds.</p>

			<div class="score-table">
				<div class="score-row trophy"><span>100%</span><span>🏆 Trophy</span></div>
				<div class="score-row"><span>99%</span><span>🥇 Gold</span></div>
				<div class="score-row"><span>95%</span><span>🥈 Silver</span></div>
				<div class="score-row"><span>85%</span><span>🥉 Bronze</span></div>
				<div class="score-row"><span>70%</span><span>🟢 Green</span></div>
				<div class="score-row"><span>55%</span><span>🟡 Yellow</span></div>
			</div>

			<p>Every FAF MCP server ships at 🏆. That's the standard. Not aspirational — actual. And above it, for those who sustain that standard — Big Orange 🍊.</p>
		</section>

		<section>
			<h2>Adopting WJTTC: Three Paths</h2>

			<div class="paths-grid">
				<div class="path-card">
					<h3>☑️ Certify Only</h3>
					<p>Run the certifier against your MCP server. Get a score. See what passes and what doesn't.</p>
					<div class="copy-box" onclick={() => copyText('npx wjttc certify --mcp "npx your-server"', 'path1')}>
						<code class="copy-code">npx wjttc certify --mcp "npx your-server"</code>
						<button class="copy-btn">{copiedId === 'path1' ? 'Copied!' : 'Copy'}</button>
					</div>
				</div>
				<div class="path-card">
					<h3>☑️ Self-Host Locally</h3>
					<p>Install the full testing infrastructure in your project. Pre-commit hooks, test structure, documentation.</p>
					<div class="copy-box" onclick={() => copyText('wjttc init', 'path2')}>
						<code class="copy-code">wjttc init</code>
						<button class="copy-btn">{copiedId === 'path2' ? 'Copied!' : 'Copy'}</button>
					</div>
				</div>
				<div class="path-card">
					<h3>☑️ CI/CD Pipeline</h3>
					<p>Automate certification in GitHub Actions. Every push, every PR — championship standards enforced.</p>
					<div class="copy-box" onclick={() => copyText('npx wjttc certify --mcp "npx ./dist/index.js"', 'path3')}>
						<code class="copy-code">npx wjttc certify --mcp "npx ./dist/index.js"</code>
						<button class="copy-btn">{copiedId === 'path3' ? 'Copied!' : 'Copy'}</button>
					</div>
				</div>
			</div>

			<p>All three are free. All three are real. Use one, use all three — the standard is the same.</p>
		</section>

		<section>
			<h2>Claude Code Skills</h2>
			<p>If you're in Claude Code, WJTTC has two skills built in:</p>

			<ul>
				<li><strong>/wjttc-builder</strong> — Auto-generates championship-grade test suites for any project. Analyzes your codebase, identifies the critical tiers, creates the test plan and files.</li>
				<li><strong>/wjttc-tester</strong> — F1-inspired testing expert. Tests your software and writes detailed WJTTC reports with findings and recommendations.</li>
			</ul>

			<p>Both are merged into the <a href="https://github.com/anthropics/skills/pull/190" target="_blank" rel="noopener">official Anthropic skills registry</a> (PR #190).</p>
		</section>

		<section>
			<h2>The Philosophy</h2>
			<blockquote class="big-quote">
				<p>"We are a service to the army of free devs!"</p>
				<cite>— wolfejam</cite>
			</blockquote>

			<p>WJTTC exists because testing should be accessible. Championship standards shouldn't require enterprise budgets. If you're building MCP servers — or any software where reliability matters — you deserve the same tools that built the FAF ecosystem.</p>

			<p>Free to certify. Free to self-host. Free to put in your CI pipeline. The Trophy 🏆 is yours to earn. Big Orange 🍊 is harder — but the path is open to everyone.</p>
		</section>

		<section>
			<h2>Links</h2>
			<ul>
				<li><a href="https://www.npmjs.com/package/wjttc" target="_blank" rel="noopener">npm: wjttc</a></li>
				<li><a href="https://github.com/Wolfe-Jam/wjttc" target="_blank" rel="noopener">GitHub: Wolfe-Jam/wjttc</a></li>
				<li><a href="https://github.com/Wolfe-Jam/wjttc/releases/tag/v1.4.0" target="_blank" rel="noopener">Release Notes</a></li>
				<li><a href="https://github.com/Wolfe-Jam/wjttc/blob/main/SPECIFICATION.md" target="_blank" rel="noopener">Specification</a></li>
				<li><a href="/ecosystem" rel="noopener">FAF Ecosystem</a></li>
			</ul>
		</section>

		<section class="share-section">
			<a href="https://twitter.com/intent/tweet?text=Championship-grade%20MCP%20testing%20you%20can%20self-host.%20Trophy%20%F0%9F%8F%86%20at%20100%25.%20Big%20Orange%20%F0%9F%8D%8A%20curated%20by%20AI.%20Free%20forever.&url=https://faf.one/blog/wjttc-self-hosting" target="_blank" rel="noopener" class="share-btn">Post on X</a>
		</section>

		<section class="footer-note">
			<p>Built with .faf ☑️ Service to the army of free devs 🏎️</p>
		</section>
	</article>
</div>

<style>
	:global(body) {
		background: var(--faf-page-bg);
	}

	.blog-post {
		max-width: 800px;
		margin: 0 auto;
		padding: 2rem 1rem;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
		line-height: 1.6;
	}

	.post-header {
		margin-bottom: 2rem;
		border-bottom: 2px solid #eee;
		padding-bottom: 2rem;
	}

	.breadcrumb {
		font-size: 0.9rem;
		color: #666;
		margin-bottom: 1rem;
	}

	.breadcrumb a {
		color: var(--faf-cyan-text);
		text-decoration: none;
	}

	.breadcrumb a:hover {
		text-decoration: underline;
	}

	h1 {
		font-size: 2.5rem;
		font-weight: 700;
		margin: 0.5rem 0;
		color: #000;
	}

	.subtitle {
		font-size: 1.3rem;
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
		padding: 0.25rem 0.75rem;
		border-radius: 4px;
		font-weight: 500;
		font-size: 0.85rem;
	}

	.category.wjttc {
		background: var(--faf-foundation-green);
		color: white;
	}

	.intro {
		background: var(--faf-surface)5f0;
		padding: 1.5rem;
		border-radius: 8px;
		border-left: 4px solid #FF6B35;
		margin-bottom: 2rem;
	}

	.lead {
		font-size: 1.1rem;
		margin: 0;
	}

	.post-content section {
		margin-bottom: 2.5rem;
	}

	h2 {
		font-size: 1.8rem;
		color: #000;
		margin: 2rem 0 1rem 0;
		border-bottom: 1px solid #eee;
		padding-bottom: 0.5rem;
	}

	h3 {
		font-size: 1.3rem;
		color: #333;
		margin: 1.5rem 0 0.75rem 0;
	}

	h4 {
		font-size: 1.1rem;
		color: #FF6B35;
		margin: 1rem 0 0.5rem 0;
	}

	p {
		margin: 1rem 0;
		color: #333;
	}

	em {
		font-style: italic;
	}

	.highlight {
		background: var(--faf-surface)af0;
		border-left: 4px solid #FF6B35;
		padding: 1rem 1.25rem;
		margin: 1.5rem 0;
		border-radius: 4px;
	}

	/* Flow steps */
	.flow-steps {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		margin: 1.5rem 0;
	}

	.flow-step {
		display: flex;
		gap: 1rem;
		align-items: flex-start;
	}

	.step-num {
		display: flex;
		align-items: center;
		justify-content: center;
		min-width: 2rem;
		height: 2rem;
		background: #FF6B35;
		color: white;
		border-radius: 50%;
		font-weight: 700;
		font-size: 0.9rem;
		margin-top: 0.1rem;
	}

	.flow-step div p {
		margin: 0.25rem 0 0 0;
		font-size: 0.95rem;
		color: #666;
	}

	/* Tier grid */
	.tier-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1rem;
		margin: 1.5rem 0;
	}

	.tier {
		background: #f9f9f9;
		border-left: 4px solid var(--faf-foundation-green);
		padding: 1rem;
		border-radius: 4px;
	}

	.tier h4 {
		margin: 0 0 0.5rem 0;
		color: var(--faf-foundation-green);
	}

	.tier p {
		margin: 0;
		font-size: 0.9rem;
		color: #666;
	}

	/* Tiers table */
	.tiers-table {
		margin: 1.5rem 0;
		border: 1px solid #e0e0e0;
		border-radius: 8px;
		overflow: hidden;
	}

	.tier-row {
		display: grid;
		grid-template-columns: 3rem 7rem 1fr;
		padding: 0.6rem 1rem;
		border-bottom: 1px solid #f0f0f0;
		font-size: 0.95rem;
		align-items: center;
	}

	.tier-row:last-child {
		border-bottom: none;
	}

	.tier-row:nth-child(odd) {
		background: #fafafa;
	}

	.tier-num {
		font-weight: 700;
		color: #FF6B35;
	}

	.tier-name {
		font-weight: 600;
		color: #333;
	}

	.tier-desc {
		color: #666;
	}

	/* Score table */
	.score-table {
		display: inline-flex;
		flex-direction: column;
		gap: 0;
		margin: 1rem 0;
		border: 1px solid #e0e0e0;
		border-radius: 8px;
		overflow: hidden;
	}

	.score-row {
		display: flex;
		gap: 1.5rem;
		padding: 0.5rem 1.5rem;
		font-size: 0.95rem;
		border-bottom: 1px solid #f0f0f0;
	}

	.score-row:last-child {
		border-bottom: none;
	}

	.score-row span:first-child {
		font-weight: 700;
		color: #333;
		min-width: 3rem;
	}

	.score-row.trophy {
		background: var(--faf-surface)af0;
	}

	/* Paths grid */
	.paths-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
		gap: 1.5rem;
		margin: 1.5rem 0;
	}

	.path-card {
		border: 2px solid #e0e0e0;
		border-radius: 10px;
		padding: 1.5rem;
		transition: border-color 0.2s;
	}

	.path-card:hover {
		border-color: #FF6B35;
	}

	.path-card h3 {
		margin: 0 0 0.5rem 0;
		font-size: 1.15rem;
	}

	.path-card p {
		font-size: 0.9rem;
		color: #666;
		margin: 0 0 1rem 0;
	}

	.path-card .copy-box {
		margin: 0;
	}

	/* Terminal blocks */
	.terminal-block {
		background: #f5f5f5;
		border: 1px solid #ddd;
		border-radius: 6px;
		padding: 1rem;
		margin: 1rem 0;
		overflow-x: auto;
	}

	.terminal-block code {
		font-family: 'SF Mono', Monaco, 'Cascadia Code', monospace;
		font-size: 0.9rem;
		color: #333;
		white-space: pre;
		display: block;
	}

	code {
		background: #f5f5f5;
		padding: 0.2rem 0.4rem;
		border-radius: 3px;
		font-family: 'SF Mono', Monaco, monospace;
		font-size: 0.9em;
		color: #c7254e;
	}

	ul, ol {
		margin: 1rem 0;
		padding-left: 1.5rem;
	}

	li {
		margin: 0.5rem 0;
		color: #333;
	}

	.big-quote {
		background: var(--faf-surface)af0;
		border-left: 4px solid #FF6B35;
		padding: 1.5rem 2rem;
		margin: 2rem 0;
		border-radius: 8px;
	}

	.big-quote p {
		font-size: 1.4rem;
		font-weight: 500;
		font-style: italic;
		color: #000;
		margin: 0 0 1rem 0;
	}

	.big-quote cite {
		font-size: 1rem;
		color: #666;
		font-style: normal;
	}

	a {
		color: var(--faf-cyan-text);
		text-decoration: none;
	}

	a:hover {
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
		text-align: center;
		padding: 2rem 0;
		border-top: 2px solid #eee;
		margin-top: 3rem;
	}

	.footer-note p {
		color: #666;
		font-style: italic;
	}

	.copy-box {
		display: flex;
		align-items: center;
		gap: 1rem;
		padding: 1rem 1.5rem;
		background: var(--faf-locked-dark-elevated);
		border: 1px solid #333;
		border-radius: 8px;
		margin: 1rem 0;
		cursor: pointer;
		transition: border-color 0.2s;
	}

	.copy-box:hover {
		border-color: #555;
	}

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

	.terminal-output {
		background: var(--faf-locked-dark-elevated);
		padding: 1.25rem;
		border-radius: 8px;
		margin: 0.5rem 0 1.5rem;
		border: 1px solid #222;
	}

	.terminal-output code {
		display: block;
		color: #e0e0e0;
		background: none;
		padding: 0;
		font-size: 0.85rem;
		line-height: 1.5;
		white-space: pre-wrap;
	}

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

	.copy-btn:hover {
		background: rgba(255, 107, 53, 0.3);
		border-color: #ff6b35;
	}

	.copy-btn:active {
		transform: scale(0.95);
	}

	.hero-image {
		margin: 1.5rem 0;
		border-radius: 10px;
		overflow: hidden;
		border: 2px solid #e0e0e0;
	}

	.hero-image img {
		width: 100%;
		display: block;
	}

	.image-caption {
		padding: 1rem 1.25rem;
		background: #fafafa;
		font-size: 0.9rem;
		color: #666;
		margin: 0;
		line-height: 1.5;
		border-top: 1px solid #e0e0e0;
	}

	.dev-note {
		background: #f0f7f0;
		border-left: 4px solid var(--faf-foundation-green);
		padding: 0.75rem 1rem;
		border-radius: 4px;
		font-size: 0.95rem;
		margin: 1rem 0 1.5rem 0;
	}

	@media (max-width: 768px) {
		h1 { font-size: 2rem; }
		.subtitle { font-size: 1.1rem; }
		.tier-grid { grid-template-columns: 1fr; }
		.paths-grid { grid-template-columns: 1fr; }
		.tier-row { grid-template-columns: 2.5rem 5rem 1fr; font-size: 0.85rem; }
	}
</style>
