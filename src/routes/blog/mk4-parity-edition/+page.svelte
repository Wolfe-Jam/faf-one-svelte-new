<script lang="ts">
	import { onMount } from 'svelte';
	let mounted = false;
	onMount(() => { mounted = true; });

	let copiedId = $state('');
	async function copyText(text: string, id: string) {
		await navigator.clipboard.writeText(text);
		copiedId = id;
		setTimeout(() => copiedId = '', 2000);
	}
</script>

<svelte:head>
	<title>The Mk4 Python Edition — faf-python-sdk v1.1.1 + gemini-faf-mcp v2.2.0 | FAF</title>
	<meta name="description" content="Same engine, same scores, same truth. The Mk4 Championship Scoring Engine now runs in Python. 33 slots. Enterprise-ready." />
	<meta property="og:title" content="The Mk4 Python Edition" />
	<meta property="og:description" content="Same engine, same scores, same truth. Mk4 scoring now runs in Python. 33 slots. Enterprise-ready." />
	<meta property="og:type" content="article" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta property="og:image" content="https://faf.one/blog/FAF-Python-Context-you-can-depend-on.png" />
	<meta name="twitter:image" content="https://faf.one/blog/FAF-Python-Context-you-can-depend-on.png" />
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / Mk4 Python Edition
		</div>

		<h1>The Mk4 Python Edition</h1>
		<p class="version-tag">faf-python-sdk v1.1.1 + gemini-faf-mcp v2.2.0</p>
		<p class="subtitle">Same engine. Same scores. Same truth. Context you can depend on.</p>
		<div class="meta">
			<time datetime="2026-03-29">March 29, 2026</time>
			<span class="separator">&bull;</span>
			<span class="category release">Release</span>
		</div>
	</header>

	<div class="hero-image">
		<img src="/blog/FAF-Python-Context-you-can-depend-on.png" alt="Mk4 Championship Scoring Engine — Python, Rust, and TypeScript in parity around DotFaf" />
	</div>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> The Mk4 Championship Scoring Engine now runs in Python. Score a <code>.faf</code> file in Rust, TypeScript, or Python &mdash; you get the same number. 396 tests across both packages, including 129 new WJTTC championship tests that caught 3 defects standard CI missed.
			</p>
		</section>

		<section>
			<h2>Why Now</h2>
			<p>AI struggles to remember project context. That's the problem FAF solves &mdash; and 47K+ downloads across npm, PyPI, and crates.io prove developers agree. When <code>gemini-faf-mcp</code> landed on PyPI, Gemini and Google developers showed up fast. The traction was immediate.</p>
			<p>Based on that demand, we've overhauled the Python scoring engine to enterprise level. The Mk4 Championship Scoring Engine &mdash; the same Rust-WASM kernel that powers <code>faf-cli</code> &mdash; now runs natively in Python. The best context memory tooling ever built for FastMCP, Gemini Extensions, and Python AI pipelines.</p>
		</section>

		<section>
			<h2>The Fix</h2>
			<p>Port the Mk4 engine from Rust to Python. Not WASM &mdash; the binary was compiled with wasm-bindgen (JavaScript-only imports). Pure Python. ~150 lines. Same 21 slots, same 8 placeholder rejections, same formula, same rounding.</p>

			<div class="parity-table">
				<table>
					<thead>
						<tr>
							<th>Input</th>
							<th>Rust</th>
							<th>TypeScript</th>
							<th>Python</th>
						</tr>
					</thead>
					<tbody>
						<tr><td>3 project slots</td><td>14%</td><td>14%</td><td>14%</td></tr>
						<tr><td>6 human_context</td><td>29%</td><td>29%</td><td>29%</td></tr>
						<tr><td>11/21 half-filled</td><td>52%</td><td>52%</td><td>52%</td></tr>
						<tr><td>21/21 full</td><td>100%</td><td>100%</td><td>100%</td></tr>
						<tr><td>4 slotignored, 17/17</td><td>100%</td><td>100%</td><td>100%</td></tr>
					</tbody>
				</table>
			</div>

			<p>Every row identical. Not by coincidence &mdash; by 50 parity tests ported directly from the Rust test suite with identical inputs and expected outputs.</p>
		</section>

		<section>
			<h2>WJTTC: Championship-Grade Testing</h2>
			<p>We built 129 new <a href="https://github.com/Wolfe-Jam/WJTTC">WJTTC</a> tests for this release &mdash; adversarial inputs, concurrency under load, security hardening, null bytes, YAML bombs, path traversal. The kind of inputs that real projects generate at scale.</p>
			<p>The suite caught 3 crash-level defects that standard testing and CI missed. All three were fixed before publish. That's the point of championship-grade testing &mdash; you break it in the lab so it never breaks in the field.</p>

			<div class="bug-list">
				<div class="bug-item">
					<span class="bug-label">Caught</span>
					<p>Unhandled YAML parse errors on non-printable characters &mdash; null bytes, control characters, binary content.</p>
				</div>
				<div class="bug-item">
					<span class="bug-label">Caught</span>
					<p>Type boundary failure when <code>project</code> field contains <code>null</code> instead of a mapping &mdash; common in hand-edited files.</p>
				</div>
				<div class="bug-item">
					<span class="bug-label">Caught</span>
					<p>Type boundary failure when <code>project</code> field contains a non-dict value &mdash; <code>AttributeError</code> on a hot path.</p>
				</div>
			</div>

			<p>396 tests standing between your users and an unhandled exception.</p>
		</section>

		<section>
			<h2>V6 Tier Alignment</h2>
			<p>Tiers are now clean uppercase strings matching faf-cli v6. Only Trophy gets the emoji. Everything else uses Unicode geometry.</p>

			<pre><code>{`100%  🏆 TROPHY
 99%  ★ GOLD
 95%  ◆ SILVER
 85%  ◇ BRONZE
 70%  ● GREEN
 55%  ● YELLOW
  1%  ○ RED
  0%  ♡ WHITE`}</code></pre>

			<p>Only Trophy gets full graphical recognition. Everything else is earned quietly. Clean in terminals. Clean in JSON. Clean in CI logs. Renders everywhere.</p>
		</section>

		<section>
			<h2>Enterprise Ready</h2>
			<p>Base scoring covers 21 universal slots. Enterprise scoring adds 12 more &mdash; monorepo tooling, cache layers, search infrastructure, remote build orchestration. 33 slots total.</p>

			<pre><code>{`from faf_sdk import score_faf, LicenseTier

result = score_faf(yaml_content, LicenseTier.ENTERPRISE)
# 33 slots — monorepo, cache, search, storage, remote build`}</code></pre>

			<p>33 slots. Google Cloud, enterprise-ready. From solo projects to 200-package monorepos &mdash; one engine, one standard. The same API whether you're in Python, Rust, or TypeScript.</p>
		</section>

		<section>
			<h2>The Context Standard</h2>
			<p><code>package.json</code> defines your dependencies. <code>pyproject.toml</code> defines your build. <code>project.faf</code> defines your context. One structured file in your project root &mdash; scored, validated, portable &mdash; that AI reads in milliseconds instead of spending tokens interpreting what you're building.</p>
			<p>Memory is an active space. Frontier labs and well-funded teams are building solutions &mdash; but most are building memory, not context. Memory recalls conversations. Context knows your project. FAF has been shipping structured project context since October 2025 &mdash; IANA-registered, MIT-licensed, improving every tool it touches. We're open to enhancing all of them.</p>
			<p>Don't waste tokens explaining your project. Define it once from the root. Let AI read, not guess.</p>
		</section>

		<section>
			<h2>Also Shipped</h2>
			<ul>
				<li>Removed dead code (<code>sync_faf.py</code> &mdash; superseded by <code>faf bi-sync</code>)</li>
				<li><code>faf_score</code> and <code>faf_validate</code> now return slot-level detail: <code>populated</code>, <code>active</code>, <code>total</code></li>
				<li>Tier names aligned to faf-cli v6 &mdash; clean strings, not emoji</li>
				<li>mypy clean across the SDK</li>
			</ul>
		</section>

		<section>
			<h2>Try It</h2>

			<div class="copy-box" onclick={() => copyText('pip install faf-python-sdk', 'install-sdk')}>
				<code class="copy-code">pip install faf-python-sdk</code>
				<button class="copy-btn">{copiedId === 'install-sdk' ? 'Copied!' : 'Copy'}</button>
			</div>

			<div class="copy-box" onclick={() => copyText('pip install gemini-faf-mcp', 'install-mcp')}>
				<code class="copy-code">pip install gemini-faf-mcp</code>
				<button class="copy-btn">{copiedId === 'install-mcp' ? 'Copied!' : 'Copy'}</button>
			</div>

			<div class="cta-grid">
				<div class="cta-box">
					<h3>faf-python-sdk</h3>
					<p>The foundation. Mk4 scoring engine.</p>
					<a href="https://pypi.org/project/faf-python-sdk/" class="cta-link">PyPI</a>
				</div>
				<div class="cta-box">
					<h3>gemini-faf-mcp</h3>
					<p>12 MCP tools for Gemini CLI.</p>
					<a href="https://pypi.org/project/gemini-faf-mcp/" class="cta-link">PyPI</a>
				</div>
			</div>
		</section>

		<section>
			<h2>The Numbers</h2>
			<ul>
				<li><strong>faf-python-sdk v1.1.1</strong> &mdash; 175 tests, 100% Trophy</li>
				<li><strong>gemini-faf-mcp v2.2.0</strong> &mdash; 221 tests, 100% Trophy</li>
				<li><strong>396 total</strong> &mdash; tests across both packages</li>
				<li><strong>129 new</strong> &mdash; WJTTC championship tests</li>
				<li><strong>3 bugs</strong> &mdash; found and sealed</li>
				<li><strong>47K+</strong> &mdash; total FAF downloads across 3 registries</li>
			</ul>
		</section>

		<section class="share-section">
			<a href="https://twitter.com/intent/tweet?text=Same%20engine.%20Same%20scores.%20Same%20truth.%20The%20Mk4%20Championship%20Scoring%20Engine%20now%20runs%20in%20Python%20%E2%80%94%20100%25%20parity%20with%20Rust%20and%20TypeScript.%20396%20tests.%203%20crash%20bugs%20found%20and%20fixed.&url=https://faf.one/blog/mk4-parity-edition" target="_blank" rel="noopener" class="share-btn">Post on X</a>
		</section>

		<section class="footer-note">
			<p>Built with .faf &#9745; They remember your conversations. We remember your project. &#128024; Nelly Never Forgets</p>
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
		background: #00B8B8;
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

	.post-content {
		font-size: 1.1rem;
	}

	.lead {
		font-size: 1.2rem;
		line-height: 1.7;
		margin-bottom: 2rem;
		padding: 1.5rem;
		background: var(--faf-surface)5f0;
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

	.parity-table {
		margin: 2rem 0;
		overflow-x: auto;
	}

	.parity-table table {
		width: 100%;
		border-collapse: collapse;
		font-family: 'SF Mono', 'Fira Code', Consolas, monospace;
		font-size: 0.9rem;
	}

	.parity-table th {
		background: #1a1a1a;
		color: #00D4D4;
		padding: 0.75rem 1rem;
		text-align: center;
		font-weight: 600;
	}

	.parity-table th:first-child {
		text-align: left;
	}

	.parity-table td {
		padding: 0.6rem 1rem;
		border-bottom: 1px solid #eee;
		text-align: center;
	}

	.parity-table td:first-child {
		text-align: left;
		color: #666;
	}

	.parity-table tr:hover td {
		background: var(--faf-surface)5f0;
	}

	.bug-list {
		margin: 1.5rem 0;
	}

	.bug-item {
		background: var(--faf-surface)5f0;
		border-left: 4px solid #FF6B35;
		padding: 1rem 1.5rem;
		margin-bottom: 1rem;
		border-radius: 0 8px 8px 0;
	}

	.bug-item p {
		margin: 0;
	}

	.bug-label {
		display: inline-block;
		background: #FF6B35;
		color: white;
		padding: 0.15rem 0.5rem;
		border-radius: 4px;
		font-size: 0.75rem;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		margin-bottom: 0.5rem;
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
	.copy-btn {
		padding: 0.5rem 1rem;
		background: var(--faf-orange);
		border: 1.5px solid var(--faf-border-strong);
		color: var(--faf-on-accent);
		border-radius: 6px;
		font-weight: 600;
		font-size: 0.8rem;
		cursor: pointer;
		transition: all 0.2s;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		white-space: nowrap;
	}
	.copy-btn:hover { background: var(--faf-orange); color: var(--faf-on-accent); border-color: #ff6b35; }
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
