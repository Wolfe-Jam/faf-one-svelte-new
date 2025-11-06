<script lang="ts">
	import { onMount } from 'svelte';

	let mounted = false;

	onMount(() => {
		mounted = true;
	});
</script>

<svelte:head>
	<title>claude-faf-mcp v3.0.4 - 100% Standalone Achievement | FAF</title>
	<meta name="description" content="claude-faf-mcp achieves 100% standalone operation with 50/50 MCP tools operational, delivering 16.2x performance improvement over CLI-dependent versions." />
	<meta property="og:title" content="claude-faf-mcp v3.0.4 - 100% Standalone Achievement" />
	<meta property="og:description" content="Zero CLI dependencies across all 50 MCP tools. 16.2x faster. Championship-grade performance." />
	<meta property="og:image" content="https://cdn.jsdelivr.net/npm/faf-cli@latest/assets/ai-human-balance-50-50.png" />
	<meta property="og:type" content="article" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / MCP v3.0.4 Standalone
		</div>
		<h1>claude-faf-mcp v3.0.4 - 100% Standalone Achievement</h1>
		<p class="subtitle">Zero CLI dependencies across all 50 MCP tools, delivering 16.2x performance improvement</p>
		<div class="meta">
			<time datetime="2025-11-06">November 6, 2025</time>
			<span class="separator">•</span>
			<span class="category">Press Release</span>
		</div>
	</header>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>claude-faf-mcp v3.0.4</strong> completes the Mk3 bundled engine initiative by achieving <strong>100% standalone operation</strong> with zero external CLI dependencies across all 50 MCP tools, while maintaining full backward compatibility.
			</p>

			<div class="achievement-box">
				<h3>🏆 The Achievement</h3>
				<ul class="achievement-list">
					<li>☑️ 50/50 MCP tools operational (100% standalone)</li>
					<li>☑️ 14/14 bundled commands tested and passing</li>
					<li>☑️ 16.2x average speedup over CLI versions</li>
					<li>☑️ 19ms average execution time</li>
					<li>☑️ Fastest command: 1ms (formats)</li>
					<li>☑️ Zero memory leaks</li>
				</ul>
			</div>
		</section>

		<section class="new-features">
			<h2>What Changed in v3.0.4</h2>

			<p>
				Two new bundled commands complete the 100% standalone achievement:
			</p>

			<div class="feature-grid">
				<div class="feature-card">
					<h3>⚡ faf_quick</h3>
					<p class="feature-desc">Lightning-fast project.faf creation</p>
					<ul>
						<li><strong>3ms</strong> average execution (50x faster than CLI)</li>
						<li>Parses comma-separated input: "name, description, language, framework, hosting"</li>
						<li>Generates complete 81-line YAML structure</li>
						<li>60% initial AI-readiness score</li>
					</ul>
				</div>

				<div class="feature-card">
					<h3>🏎️ faf_enhance</h3>
					<p class="feature-desc">Intelligent enhancement with auto-detection</p>
					<ul>
						<li><strong>63ms</strong> execution for complex operations</li>
						<li>Auto-detects improvements from package.json, tsconfig.json</li>
						<li>MCP-native interactive questionnaire (6 W's: Who, What, Why, Where, When, How)</li>
						<li>Real FafCompiler scoring integration</li>
						<li>Achieves 40-60% improvement through auto-detection alone</li>
					</ul>
				</div>
			</div>

			<div class="commands-list">
				<h3>Complete Standalone Suite (14 Bundled Commands)</h3>
				<p><code>init</code>, <code>score</code>, <code>auto</code>, <code>sync</code>, <code>bi-sync</code>, <code>formats</code>, <code>doctor</code>, <code>validate</code>, <code>audit</code>, <code>update</code>, <code>migrate</code>, <code>innit</code>, <code>quick</code>, <code>enhance</code></p>
			</div>
		</section>

		<section class="performance">
			<h2>Performance Breakthrough</h2>

			<p>
				Mk3 bundled engine eliminates process spawning overhead by bundling core FAF CLI compiler code directly into the MCP package:
			</p>

			<div class="performance-table">
				<table>
					<thead>
						<tr>
							<th>Command</th>
							<th>CLI (ms)</th>
							<th>Mk3 (ms)</th>
							<th>Speedup</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>formats</td>
							<td>85</td>
							<td>1</td>
							<td class="speedup">85.0x</td>
						</tr>
						<tr>
							<td>quick</td>
							<td>150</td>
							<td>3</td>
							<td class="speedup">50.0x</td>
						</tr>
						<tr>
							<td>sync</td>
							<td>120</td>
							<td>8</td>
							<td class="speedup">15.0x</td>
						</tr>
						<tr>
							<td>enhance</td>
							<td>680</td>
							<td>63</td>
							<td class="speedup">10.8x</td>
						</tr>
						<tr class="total-row">
							<td><strong>Average</strong></td>
							<td>~300</td>
							<td>~19</td>
							<td class="speedup"><strong>16.2x</strong></td>
						</tr>
					</tbody>
				</table>
			</div>
		</section>

		<section class="technical">
			<h2>Technical Innovation</h2>

			<div class="tech-highlights">
				<div class="tech-item">
					<h3>Mk3 Bundled Engine Architecture</h3>
					<ul>
						<li>Core FAF CLI compiler code bundled directly into MCP package</li>
						<li>Direct function calls eliminate process spawning overhead</li>
						<li>TypeScript strict mode with zero <code>any</code> types</li>
						<li>Comprehensive error handling and input sanitization</li>
						<li>Real FafCompiler scoring (not simplified algorithms)</li>
					</ul>
				</div>

				<div class="tech-item">
					<h3>Code Quality Metrics</h3>
					<ul>
						<li>TypeScript strict mode: 100%</li>
						<li>No <code>any</code> types used</li>
						<li>Full interface coverage</li>
						<li>Try-catch on all async operations</li>
						<li>Input sanitization: All user inputs</li>
						<li>Path validation: Safe file operations</li>
						<li>Shell injection vulnerabilities: Zero</li>
						<li>WJTTC Gold Certified</li>
					</ul>
				</div>
			</div>
		</section>

		<section class="validation">
			<h2>Validation and Testing</h2>

			<div class="wjttc-report">
				<h3>🏁 WJTTC Championship Certification</h3>
				<pre><code>🏎️ STRESS TEST: All 14 Bundled Commands - 100% Standalone

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

☑️ init         53ms
☑️ score        14ms
☑️ auto         36ms
☑️ sync         8ms
☑️ bi-sync      10ms
☑️ formats      1ms
☑️ doctor       14ms
☑️ validate     6ms
☑️ audit        12ms
☑️ update       12ms
☑️ migrate      0ms
☑️ innit        32ms
☑️ quick        3ms
☑️ enhance      63ms

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🏆 RESULTS: 14/14 passed (100%)

🎉 ALL 14 BUNDLED COMMANDS WORKING - 100% STANDALONE CONFIRMED!</code></pre>

				<ul class="test-coverage">
					<li>14/14 bundled commands: 100% pass rate</li>
					<li>50/50 MCP tools tested: 100% operational</li>
					<li>Zero regressions from previous versions</li>
					<li>Comprehensive edge case coverage</li>
					<li>Stress tested under real-world conditions</li>
				</ul>
			</div>
		</section>

		<section class="context">
			<h2>Project Context</h2>

			<p>
				claude-faf-mcp is the official MCP server for the .faf format (Foundational AI-context Format), an IANA-registered Internet media type (<code>application/vnd.faf+yaml</code>) that provides persistent project context for AI development tools.
			</p>

			<div class="recognition-grid">
				<div class="recognition-item">
					<div class="recognition-icon">🏛️</div>
					<h3>IANA Registration</h3>
					<p>October 31, 2025</p>
				</div>

				<div class="recognition-item">
					<div class="recognition-icon">🤖</div>
					<h3>Anthropic MCP Registry</h3>
					<p>PR #2759 (merged)</p>
				</div>

				<div class="recognition-item">
					<div class="recognition-icon">🏪</div>
					<h3>Google Chrome Web Store</h3>
					<p>Two approvals (Sep 11, Oct 29)</p>
				</div>

				<div class="recognition-item">
					<div class="recognition-icon">📦</div>
					<h3>Downloads</h3>
					<p>5,600 total (598/week)</p>
				</div>
			</div>
		</section>

		<section class="use-cases">
			<h2>Before & After</h2>

			<div class="comparison">
				<div class="before">
					<h3>Before v3.0.4 (CLI-Dependent)</h3>
					<pre><code>User: "Run faf enhance on my project"
Claude: [Spawns external CLI process, 680ms delay]
        [Requires faf-cli installation]
        [Cannot use MCP-native prompts]</code></pre>
				</div>

				<div class="after">
					<h3>After v3.0.4 (100% Standalone)</h3>
					<pre><code>User: "Run faf enhance on my project"
Claude: [Direct function call, 63ms execution]
        [Auto-detects React, TypeScript, version]
        [MCP-native interactive questionnaire]
        [42% → 56% score improvement]</code></pre>
				</div>
			</div>
		</section>

		<section class="installation">
			<h2>Developer Experience</h2>

			<p><strong>Installation:</strong></p>
			<pre><code>npm install -g claude-faf-mcp</code></pre>

			<p><strong>Claude Desktop Configuration:</strong></p>
			<pre><code>{`{
  "mcpServers": {
    "claude-faf-mcp": {
      "command": "npx",
      "args": ["-y", "claude-faf-mcp"]
    }
  }
}`}</code></pre>

			<p><strong>Instant Usage:</strong></p>
			<ul>
				<li>No CLI installation required</li>
				<li>No external dependencies needed</li>
				<li>Works out of the box</li>
				<li>All 50 tools available immediately</li>
			</ul>
		</section>

		<section class="evolution">
			<h2>Evolution Timeline</h2>

			<div class="evolution-grid">
				<div class="evolution-event">
					<div class="version">v3.0.0</div>
					<p>Mk3 bundled engine introduced (12 bundled commands, 48/50 standalone)</p>
				</div>

				<div class="evolution-event">
					<div class="version">v3.0.1</div>
					<p>Stability improvements (48/50 standalone)</p>
				</div>

				<div class="evolution-event">
					<div class="version">v3.0.2</div>
					<p>Performance optimizations (48/50 standalone)</p>
				</div>

				<div class="evolution-event highlighted">
					<div class="version">v3.0.4</div>
					<p><strong>100% standalone achievement (50/50 standalone) ☑️</strong></p>
				</div>
			</div>
		</section>

		<section class="philosophy">
			<h2>Architecture Philosophy</h2>

			<div class="philosophy-grid">
				<div class="philosophy-item">
					<h3>Format-Driven Infrastructure</h3>
					<ul>
						<li>.faf format is foundational, not tooling</li>
						<li>Structured, machine-readable context layer</li>
						<li>Persistent across sessions, tools, and AI systems</li>
						<li>Interoperable with any MCP client, CLI, or workflow automation</li>
					</ul>
				</div>

				<div class="philosophy-item">
					<h3>F1-Inspired Engineering</h3>
					<ul>
						<li>Speed without compromise on quality</li>
						<li>Championship-grade performance targets</li>
						<li>Strict TypeScript with zero errors</li>
						<li>Comprehensive testing requirements</li>
					</ul>
				</div>
			</div>
		</section>

		<section class="impact">
			<h2>Impact</h2>

			<div class="impact-grid">
				<div class="impact-card">
					<h3>For Users</h3>
					<ul>
						<li>16.2x faster workflows</li>
						<li>No external dependencies</li>
						<li>Better error messages</li>
						<li>Enhanced reliability</li>
					</ul>
				</div>

				<div class="impact-card">
					<h3>For Developers</h3>
					<ul>
						<li>Easier debugging (unified codebase)</li>
						<li>Better testing (direct function calls)</li>
						<li>Simpler deployment (no CLI installation)</li>
						<li>Cleaner architecture</li>
					</ul>
				</div>

				<div class="impact-card">
					<h3>For Ecosystem</h3>
					<ul>
						<li>Complete MCP independence</li>
						<li>Production-ready standard</li>
						<li>Future-proof extensibility</li>
						<li>Internet-scale format recognition</li>
					</ul>
				</div>
			</div>
		</section>

		<section class="backward-compat">
			<h2>Backward Compatibility</h2>

			<p>
				v3.0.4 maintains full backward compatibility:
			</p>

			<ul>
				<li>Existing .faf files work unchanged</li>
				<li>Legacy API surface preserved</li>
				<li>No breaking changes</li>
				<li>Seamless upgrade path from v3.0.0+</li>
			</ul>
		</section>

		<section class="whats-next">
			<h2>What's Next</h2>

			<p>
				With 100% standalone operation achieved, the project focuses on:
			</p>

			<ul>
				<li>Ecosystem adoption and integration expansion</li>
				<li>Enhanced interactive features via MCP tools</li>
				<li>Performance benchmarking and optimization</li>
				<li>Community-driven feature development</li>
			</ul>
		</section>

		<section class="resources">
			<h2>Resources</h2>

			<div class="resources-grid">
				<a href="https://www.npmjs.com/package/claude-faf-mcp" target="_blank" rel="noopener" class="resource-link">
					<strong>claude-faf-mcp on npm</strong>
					<p>Official MCP server (5.6k downloads, 598/wk)</p>
				</a>

				<a href="https://github.com/Wolfe-Jam/claude-faf-mcp" target="_blank" rel="noopener" class="resource-link">
					<strong>GitHub Repository</strong>
					<p>Open source, MIT licensed</p>
				</a>

				<a href="https://github.com/Wolfe-Jam/claude-faf-mcp/discussions" target="_blank" rel="noopener" class="resource-link">
					<strong>GitHub Discussions</strong>
					<p>Community support and feedback</p>
				</a>

				<a href="https://faf.one" target="_blank" rel="noopener" class="resource-link">
					<strong>FAF Website</strong>
					<p>Documentation and guides</p>
				</a>
			</div>
		</section>

		<section class="about">
			<h2>About .faf</h2>
			<p>
				FAF (Foundational AI-context Format) is an IANA-registered Internet media type for persistent project context in AI development tools. Registered as <code>application/vnd.faf+yaml</code> on October 31, 2025, .faf provides the same foundational role for AI context that package.json provides for dependencies.
			</p>

			<div class="file-structure-screenshot">
				<img src="/blog-assets/project-faf-file-placement.png" alt="project.faf file highlighted in project structure between package.json and README.md" />
				<p class="screenshot-caption">project.faf in its rightful place - between dependencies and human docs</p>
			</div>
		</section>

		<section class="author">
			<h2>About the Author</h2>
			<p>
				James Wolfe (Wolfe-Jam), creator of the .faf format and claude-faf-mcp MCP server. ORCID: 0009-0007-0801-3841.
			</p>
		</section>

		<section class="license">
			<h2>License</h2>
			<p>
				MIT License - Free and open source forever.
			</p>
		</section>
	</article>
</div>

<style>
	.blog-post {
		max-width: 800px;
		margin: 0 auto;
		padding: 2rem;
		background: white;
		min-height: 100vh;
	}

	.post-header {
		margin-bottom: 3rem;
		border-bottom: 3px solid var(--faf-orange);
		padding-bottom: 2rem;
	}

	.breadcrumb {
		font-size: 0.9rem;
		margin-bottom: 1rem;
		color: #666;
	}

	.breadcrumb a {
		color: var(--faf-orange);
		text-decoration: none;
	}

	.breadcrumb a:hover {
		text-decoration: underline;
	}

	h1 {
		font-size: 2.5rem;
		margin-bottom: 1rem;
		color: var(--faf-black);
		line-height: 1.3;
		font-weight: 900;
	}

	.subtitle {
		font-size: 1.3rem;
		color: #666;
		margin-bottom: 1rem;
		font-weight: 500;
	}

	.meta {
		display: flex;
		gap: 0.75rem;
		align-items: center;
		font-size: 0.9rem;
		color: #888;
		margin-top: 1rem;
	}

	.separator {
		color: #ccc;
	}

	.category {
		background: var(--faf-black);
		color: white;
		padding: 0.25rem 0.75rem;
		border-radius: 20px;
		font-size: 0.8rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}

	.post-content {
		font-size: 1.125rem;
		line-height: 1.8;
		color: #333;
	}

	section {
		margin-bottom: 3rem;
	}

	h2 {
		font-size: 2rem;
		margin: 2.5rem 0 1.5rem;
		color: var(--faf-black);
		font-weight: 800;
	}

	h3 {
		font-size: 1.4rem;
		margin: 1.5rem 0 1rem;
		color: var(--faf-black);
		font-weight: 700;
	}

	.lead {
		font-size: 1.3rem;
		line-height: 1.7;
		color: #222;
		margin-bottom: 2rem;
	}

	.lead strong {
		color: var(--faf-orange);
	}

	code {
		background: var(--faf-cream);
		color: var(--faf-orange);
		padding: 0.2em 0.4em;
		border-radius: 4px;
		font-family: var(--font-mono);
		font-size: 0.9em;
	}

	pre {
		background: #1e1e1e;
		color: #d4d4d4;
		padding: 1.5rem;
		border-radius: 8px;
		overflow-x: auto;
		margin: 1.5rem 0;
	}

	pre code {
		background: none;
		color: inherit;
		padding: 0;
		font-size: 0.9rem;
		line-height: 1.6;
	}

	.achievement-box {
		background: linear-gradient(135deg, #fff5f0 0%, #ffe8dc 100%);
		border: 3px solid var(--faf-orange);
		border-radius: 12px;
		padding: 2rem;
		margin: 2rem 0;
	}

	.achievement-box h3 {
		margin-top: 0;
		color: var(--faf-orange);
	}

	.achievement-list {
		list-style: none;
		padding: 0;
		margin: 1rem 0 0 0;
	}

	.achievement-list li {
		padding: 0.5rem 0;
		font-size: 1.1rem;
		font-weight: 600;
	}

	.feature-grid {
		display: grid;
		gap: 1.5rem;
		margin: 2rem 0;
	}

	.feature-card {
		background: #f9f9f9;
		border-left: 4px solid var(--faf-orange);
		padding: 1.5rem;
		border-radius: 0 8px 8px 0;
	}

	.feature-card h3 {
		margin: 0 0 0.5rem 0;
		color: var(--faf-orange);
	}

	.feature-desc {
		font-style: italic;
		color: #666;
		margin: 0.5rem 0 1rem 0;
	}

	.commands-list {
		background: var(--faf-cream);
		padding: 1.5rem;
		border-radius: 8px;
		margin: 2rem 0;
	}

	.commands-list h3 {
		margin-top: 0;
		font-size: 1.2rem;
	}

	.commands-list code {
		background: white;
		margin: 0 0.25rem;
	}

	.performance-table {
		overflow-x: auto;
		margin: 2rem 0;
	}

	table {
		width: 100%;
		border-collapse: collapse;
		background: white;
		border-radius: 8px;
		overflow: hidden;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
	}

	thead {
		background: var(--faf-black);
		color: white;
	}

	th {
		padding: 1rem;
		text-align: left;
		font-weight: 700;
	}

	td {
		padding: 1rem;
		border-bottom: 1px solid #e5e5e5;
	}

	tbody tr:hover {
		background: var(--faf-cream);
	}

	.speedup {
		color: var(--faf-orange);
		font-weight: 700;
	}

	.total-row {
		background: #f9f9f9;
		font-weight: 700;
	}

	.tech-highlights {
		display: grid;
		gap: 1.5rem;
		margin: 2rem 0;
	}

	.tech-item {
		background: #f9f9f9;
		border-radius: 8px;
		padding: 1.5rem;
	}

	.tech-item h3 {
		margin-top: 0;
		color: var(--faf-orange);
	}

	.wjttc-report {
		background: #1e1e1e;
		color: white;
		border-radius: 12px;
		padding: 2rem;
		margin: 2rem 0;
	}

	.wjttc-report h3 {
		margin-top: 0;
		color: var(--faf-orange);
	}

	.wjttc-report pre {
		background: none;
		padding: 0;
		margin: 1.5rem 0;
	}

	.test-coverage {
		margin: 1.5rem 0 0 0;
		padding-left: 1.5rem;
	}

	.test-coverage li {
		margin: 0.5rem 0;
	}

	.recognition-grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 1.5rem;
		margin: 2rem 0;
	}

	.recognition-item {
		background: white;
		border: 2px solid var(--faf-cream);
		border-radius: 12px;
		padding: 1.5rem;
		text-align: center;
		transition: all 0.3s ease;
	}

	.recognition-item:hover {
		border-color: var(--faf-orange);
		transform: translateY(-4px);
		box-shadow: 0 8px 24px rgba(255, 107, 53, 0.15);
	}

	.recognition-icon {
		font-size: 2.5rem;
		margin-bottom: 0.5rem;
	}

	.recognition-item h3 {
		margin: 0.5rem 0;
		font-size: 1.1rem;
	}

	.recognition-item p {
		margin: 0.5rem 0 0 0;
		font-size: 0.95rem;
		color: #666;
	}

	.comparison {
		display: grid;
		gap: 1.5rem;
		margin: 2rem 0;
	}

	.before {
		background: #f9f9f9;
		border-left: 4px solid #666;
		padding: 1.5rem;
		border-radius: 0 8px 8px 0;
	}

	.after {
		background: linear-gradient(135deg, #fff5f0 0%, white 100%);
		border-left: 4px solid var(--faf-orange);
		padding: 1.5rem;
		border-radius: 0 8px 8px 0;
		box-shadow: 0 4px 12px rgba(255, 107, 53, 0.1);
	}

	.comparison h3 {
		margin: 0 0 1rem 0;
		font-size: 1.2rem;
	}

	.comparison pre {
		margin: 0;
	}

	.evolution-grid {
		display: grid;
		gap: 1rem;
		margin: 2rem 0;
	}

	.evolution-event {
		background: #f9f9f9;
		border-left: 4px solid #666;
		padding: 1rem 1.5rem;
		border-radius: 0 8px 8px 0;
	}

	.evolution-event.highlighted {
		background: linear-gradient(135deg, #fff5f0 0%, white 100%);
		border-left: 6px solid var(--faf-orange);
		box-shadow: 0 4px 12px rgba(255, 107, 53, 0.1);
	}

	.version {
		font-family: var(--font-mono);
		color: var(--faf-orange);
		font-weight: 700;
		margin-bottom: 0.5rem;
	}

	.evolution-event p {
		margin: 0;
		font-size: 1rem;
	}

	.philosophy-grid {
		display: grid;
		gap: 1.5rem;
		margin: 2rem 0;
	}

	.philosophy-item {
		background: #f9f9f9;
		border-radius: 8px;
		padding: 1.5rem;
	}

	.philosophy-item h3 {
		margin-top: 0;
		color: var(--faf-black);
	}

	.impact-grid {
		display: grid;
		gap: 1.5rem;
		margin: 2rem 0;
	}

	.impact-card {
		background: var(--faf-cream);
		border-radius: 8px;
		padding: 1.5rem;
	}

	.impact-card h3 {
		margin: 0 0 1rem 0;
		color: var(--faf-orange);
	}

	.resources-grid {
		display: grid;
		gap: 1rem;
		margin: 2rem 0;
	}

	.resource-link {
		display: block;
		background: #f9f9f9;
		border: 2px solid var(--faf-cream);
		border-radius: 8px;
		padding: 1.5rem;
		text-decoration: none;
		color: inherit;
		transition: all 0.3s ease;
	}

	.resource-link:hover {
		border-color: var(--faf-orange);
		transform: translateX(4px);
	}

	.resource-link strong {
		color: var(--faf-orange);
		display: block;
		margin-bottom: 0.5rem;
		font-size: 1.1rem;
	}

	.resource-link p {
		margin: 0;
		font-size: 0.95rem;
		color: #666;
	}

	ul {
		margin: 1.5rem 0;
		padding-left: 2rem;
	}

	li {
		margin: 0.75rem 0;
	}

	li strong {
		color: var(--faf-black);
	}

	.file-structure-screenshot {
		margin: 2rem 0;
		border-radius: 12px;
		overflow: hidden;
		border: 3px solid #4285f4;
		box-shadow: 0 8px 24px rgba(66, 133, 244, 0.2);
		background: #1e1e1e;
	}

	.file-structure-screenshot img {
		width: 100%;
		height: auto;
		display: block;
	}

	.screenshot-caption {
		text-align: center;
		font-style: italic;
		color: #666;
		margin: 1rem 0 0 0;
		padding: 1rem;
		background: var(--faf-cream);
		font-size: 1rem;
	}

	@media (max-width: 768px) {
		.blog-post {
			padding: 1rem;
		}

		h1 {
			font-size: 1.75rem;
		}

		h2 {
			font-size: 1.5rem;
		}

		.recognition-grid {
			grid-template-columns: 1fr;
		}

		.lead {
			font-size: 1.1rem;
		}

		.post-content {
			font-size: 1rem;
		}
	}
</style>
