<script lang="ts">
	import { onMount } from 'svelte';

	let mounted = false;

	onMount(() => {
		mounted = true;
	});

	let copiedId = $state('');
	async function copyText(text: string, id: string) {
		await navigator.clipboard.writeText(text);
		copiedId = id;
		setTimeout(() => copiedId = '', 2000);
	}
</script>

<svelte:head>
	<title>The Hardened Edition - gemini-faf-mcp v1.1.0 | FAF</title>
	<meta name="description" content="gemini-faf-mcp gets input validation, YAML safety checks, and 14 new tests. 3k+ PyPI downloads with zero advertising." />
	<meta property="og:title" content="The Hardened Edition - gemini-faf-mcp v1.1.0" />
	<meta property="og:description" content="Input validation, YAML round-trip safety, 57/57 tests. The Gemini bridge hardens up." />
	<meta property="og:type" content="article" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / The Hardened Edition
		</div>

		<h1>The Hardened Edition</h1>
		<p class="version-tag">gemini-faf-mcp v1.1.0</p>
		<p class="subtitle">3k+ downloads earned a quality pass. Every endpoint hardened.</p>
		<div class="meta">
			<time datetime="2026-03-07">March 7, 2026</time>
			<span class="separator">-</span>
			<span class="category release">Release</span>
		</div>
	</header>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> gemini-faf-mcp hit 3,000+ PyPI downloads in two weeks with zero advertising. That kind of momentum demands a quality pass. Input validation on every PUT, YAML round-trip safety before every commit, and 14 new tests. From 43 to 57. Every endpoint now returns <code>X-FAF-Version</code>.
			</p>
		</section>

		<section>
			<h2>Why Now</h2>
			<p>When a package grows faster than expected, you have two choices: ride the wave or harden the foundation. We chose the foundation.</p>
			<p>The score calculation was wrong. <code>sync_faf.py</code> was counting top-level YAML keys against a hardcoded 21-slot total instead of reading <code>scores.faf_score</code>. GEMINI.md showed 42% when the actual score was 100%. Fixed.</p>
			<p>The PUT endpoint accepted arbitrary JSON with no limits. A malicious payload could create a massive YAML file and commit it to GitHub. Fixed.</p>
		</section>

		<section>
			<h2>What's New</h2>

			<h3>Input Validation</h3>
			<p>Every PUT request is now validated before processing:</p>

			<pre><code>{`MAX_UPDATES    = 50      # No payload bombs
MAX_KEY_LENGTH = 100     # No key stuffing
MAX_VALUE_LENGTH = 10000 # No value flooding

# Returns 400 with clear error if exceeded`}</code></pre>

			<h3>YAML Round-Trip Safety</h3>
			<p>Before committing to GitHub, every mutation is now round-trip tested:</p>

			<pre><code>{`yaml.safe_load(yaml.dump(data)) == data  # Must match
# If not: 400, commit blocked`}</code></pre>

			<p>Special characters, nested structures, unicode — if it doesn't survive the round-trip, it doesn't get committed.</p>

			<h3>X-FAF-Version Header</h3>
			<p>Every response now includes the endpoint version. Clients can verify they're talking to the right deployment.</p>

			<pre><code>{`X-FAF-Agent-Detected: gemini
X-FAF-Version: 1.1.0`}</code></pre>

			<h3>find_faf_file</h3>
			<p>Now exported in the package. Discovers <code>project.faf</code>, <code>.faf</code>, or any <code>*.faf</code> file in a directory.</p>
		</section>

		<section>
			<h2>Try It</h2>

			<div class="copy-box" onclick={() => copyText('pip install gemini-faf-mcp', 'install')}>
				<code class="copy-code">pip install gemini-faf-mcp</code>
				<button class="copy-btn">{copiedId === 'install' ? 'Copied!' : 'Copy'}</button>
			</div>

			<div class="copy-box" onclick={() => copyText('from gemini_faf_mcp import FAFClient, find_faf_file\n\nclient = FAFClient(local=True)\nfaf_path = find_faf_file(".")\ndna = client.get_project_dna(faf_path)', 'usage')}>
				<div class="copy-code-multi">from gemini_faf_mcp import FAFClient, find_faf_file<br/><br/>client = FAFClient(local=True)<br/>faf_path = find_faf_file(".")<br/>dna = client.get_project_dna(faf_path)</div>
				<button class="copy-btn">{copiedId === 'usage' ? 'Copied!' : 'Copy'}</button>
			</div>

			<div class="cta-grid">
				<div class="cta-box">
					<h3>PyPI</h3>
					<p>Install the latest version.</p>
					<a href="https://pypi.org/project/gemini-faf-mcp/" class="cta-link">gemini-faf-mcp</a>
				</div>
				<div class="cta-box">
					<h3>GitHub</h3>
					<p>View the source and release notes.</p>
					<a href="https://github.com/Wolfe-Jam/gemini-faf-mcp/releases/tag/v1.1.0" class="cta-link">v1.1.0 Release</a>
				</div>
			</div>
		</section>

		<section>
			<h2>The Numbers</h2>

			<ul>
				<li><strong>v1.1.0</strong> - Released March 7, 2026</li>
				<li><strong>57/57</strong> - Tests passing (7 tiers + integration)</li>
				<li><strong>100%</strong> - Trophy score</li>
				<li><strong>3,000+</strong> - PyPI downloads (zero advertising)</li>
				<li><strong>14</strong> - New Tier 7 unit tests</li>
			</ul>
		</section>

		<section>
			<h2>The Ecosystem</h2>

			<div class="ecosystem-table">
				<table>
					<thead>
						<tr>
							<th>Package</th>
							<th>Platform</th>
							<th>Registry</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td><a href="https://npmjs.com/package/claude-faf-mcp">claude-faf-mcp</a></td>
							<td>Anthropic</td>
							<td>npm + MCP #2759</td>
						</tr>
						<tr class="highlight">
							<td><a href="https://pypi.org/project/gemini-faf-mcp/">gemini-faf-mcp</a></td>
							<td>Google</td>
							<td>PyPI</td>
						</tr>
						<tr>
							<td><a href="https://npmjs.com/package/grok-faf-mcp">grok-faf-mcp</a></td>
							<td>xAI</td>
							<td>npm</td>
						</tr>
						<tr>
							<td><a href="https://npmjs.com/package/faf-cli">faf-cli</a></td>
							<td>Universal</td>
							<td>npm</td>
						</tr>
					</tbody>
				</table>
			</div>
		</section>

		<section class="footer-note">
			<p>Built with .faf</p>
		</section>
	</article>
</div>

<style>
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
		border-bottom: 3px solid #FF6B35;
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

	.version-tag {
		display: inline-block;
		background: #FF6B35;
		color: white;
		padding: 0.25rem 0.75rem;
		border-radius: 4px;
		font-size: 0.9rem;
		font-weight: 600;
		margin: 0.5rem 0;
		font-family: 'SF Mono', 'Fira Code', Consolas, monospace;
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

	.category.release {
		background: #FF6B35;
	}

	.post-content {
		font-size: 1.1rem;
	}

	.lead {
		font-size: 1.2rem;
		line-height: 1.7;
		margin-bottom: 2rem;
		padding: 1.5rem;
		background: #fff5f0;
		border-radius: 8px;
		border-left: 4px solid #FF6B35;
	}

	h2 {
		font-size: 1.8rem;
		margin: 3rem 0 1.5rem 0;
		color: #000;
		border-bottom: 1px solid #eee;
		padding-bottom: 0.5rem;
	}

	h3 {
		font-size: 1.3rem;
		margin: 2rem 0 1rem 0;
		color: #333;
	}

	p {
		margin-bottom: 1.25rem;
	}

	ul, ol {
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

	.ecosystem-table {
		margin: 1.5rem 0;
		overflow-x: auto;
	}

	table {
		width: 100%;
		border-collapse: collapse;
		font-size: 0.95rem;
	}

	th {
		background: #f8f8f8;
		padding: 0.75rem 1rem;
		text-align: left;
		border-bottom: 2px solid #ddd;
		font-weight: 600;
	}

	td {
		padding: 0.75rem 1rem;
		border-bottom: 1px solid #eee;
	}

	tr.highlight {
		background: #fff5f0;
		font-weight: 600;
	}

	tr.highlight td {
		border-bottom: 2px solid #FF6B35;
	}

	table a {
		color: #FF6B35;
		text-decoration: none;
	}

	table a:hover {
		text-decoration: underline;
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
