<script lang="ts">
	import { onMount } from 'svelte';
	let mounted = false;
	onMount(() => { mounted = true; });
</script>

<svelte:head>
	<title>The Go Rusty Python Edition — faf-cli v6.1.0 | FAF</title>
	<meta name="description" content="faf-cli v6.1.0 now reads go.mod, Cargo.toml, and pyproject.toml to detect project type. Go MCP servers, Rust CLIs, Python services — scored correctly out of the box." />
	<meta property="og:title" content="The Go Rusty Python Edition — faf-cli v6.1.0" />
	<meta property="og:description" content="faf git on github/github-mcp-server: was library 22%. Now mcp 41%. Better detection before you type a single answer." />
	<meta property="og:type" content="article" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / The Go Rusty Python Edition
		</div>
		<div class="version-tag">v6.1.0</div>
		<h1>The Go Rusty Python Edition</h1>
		<p class="subtitle">Go. Rust. Python. FAF now reads their native manifests — and scores them correctly.</p>
		<div class="meta">
			<time datetime="2026-04-14">April 14, 2026</time>
			<span class="separator">•</span>
			<span class="category release">Release</span>
		</div>
	</header>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> Run <code>faf git</code> on any Go, Rust, or Python repo and get the right project type — MCP server, CLI, service, or library — detected from native manifests (<code>go.mod</code>, <code>Cargo.toml</code>, <code>pyproject.toml</code>). No more <code>type: library</code> for everything that isn't JavaScript.
			</p>
		</section>

		<section>
			<h2>The Problem</h2>

			<p>Run <code>faf git</code> on <code>github/github-mcp-server</code> — one of the most-watched MCP repos on GitHub. Before v6.1.0:</p>

			<div class="score-compare">
				<div class="score-before">
					<span class="score-label">Before</span>
					<span class="score-value red">22%</span>
					<span class="score-detail">type: library · 2/9 slots</span>
				</div>
				<div class="score-arrow">→</div>
				<div class="score-after">
					<span class="score-label">After</span>
					<span class="score-value orange">41%</span>
					<span class="score-detail">type: mcp · 7/17 slots</span>
				</div>
			</div>

			<p>Same repo. Same README. Zero user input. The difference is that FAF now reads <code>go.mod</code> and finds <code>github.com/modelcontextprotocol/go-sdk</code> — and knows exactly what this project is.</p>

			<p>The root cause: FAF's dependency signal matching only checked <code>package.json</code>. Go, Rust, and Python have their own manifest formats — and FAF was ignoring them. Everything that wasn't JavaScript fell through to the default: <code>type: library</code>. That's wrong for almost every Go and Rust project, and wrong for most Python projects.</p>
		</section>

		<section>
			<h2>What's New</h2>

			<h3>Go — <code>go.mod</code> parsing</h3>
			<p>FAF now reads <code>go.mod</code> for dependency matching. MCP detection, CLI detection, and service fallback all work:</p>
			<ul>
				<li><code>github.com/modelcontextprotocol/go-sdk</code> → <code>type: mcp</code> (covers github/github-mcp-server)</li>
				<li><code>github.com/mark3labs/mcp-go</code> → <code>type: mcp</code></li>
				<li><code>github.com/spf13/cobra</code> or <code>cmd/</code> + <code>main.go</code> → <code>type: cli</code></li>
				<li>Go service with no CLI markers → <code>type: service</code></li>
			</ul>

			<h3>Rust — <code>Cargo.toml</code> binary detection</h3>
			<p>Rust has three distinct project shapes. FAF now distinguishes them:</p>
			<ul>
				<li><code>[[bin]]</code> section or <code>categories = ["command-line-utilities"]</code> → <code>type: cli</code> (covers ripgrep)</li>
				<li><code>src/main.rs</code> + <code>clap</code> / <code>argh</code> / <code>lexopt</code> → <code>type: cli</code></li>
				<li><code>src/main.rs</code> without CLI markers → <code>type: service</code></li>
				<li><code>src/lib.rs</code> only → <code>type: library</code> (correct — it's a crate)</li>
			</ul>

			<h3>Python — <code>pyproject.toml</code> intent detection</h3>
			<ul>
				<li><code>[project.scripts]</code> / <code>console_scripts</code> → <code>type: cli</code></li>
				<li><code>setup.py</code> present → <code>type: library</code></li>
				<li><code>app.py</code> / <code>main.py</code> → <code>type: service</code></li>
				<li>FastAPI / Django / Flask detected → <code>type: backend</code> (unchanged)</li>
			</ul>

			<h3>Better default</h3>
			<p>The fallback for unrecognised projects changed from <code>library</code> to <code>service</code>. Libraries are a specific, deliberate choice — they expose an API for other packages to import. Most projects that don't match a known pattern are services or tools, not libraries.</p>
		</section>

		<section>
			<h2>Live Test: github/github-mcp-server</h2>

			<p>This is a real test run against GitHub's own MCP server — no <code>project.faf</code>, no <code>CLAUDE.md</code>, rich README:</p>

			<div class="terminal-block">
				<code>faf git https://github.com/github/github-mcp-server</code>
			</div>

			<div class="result-block">
				<div class="result-line"><span class="result-key">type:</span> <span class="result-val cyan">mcp</span></div>
				<div class="result-line"><span class="result-key">framework:</span> <span class="result-val cyan">mcp-go</span></div>
				<div class="result-line"><span class="result-key">main_language:</span> <span class="result-val">Go</span></div>
				<div class="result-line"><span class="result-key">backend:</span> <span class="result-val">MCP Go</span></div>
				<div class="result-line"><span class="result-key">api_type:</span> <span class="result-val">MCP (stdio/SSE)</span></div>
				<div class="result-line"><span class="result-key">hosting:</span> <span class="result-val">Docker</span></div>
				<div class="result-line"><span class="result-key">cicd:</span> <span class="result-val">GitHub Actions</span></div>
				<div class="result-line result-score"><span class="result-key">score:</span> <span class="result-val orange">41% — before faf go</span></div>
			</div>

			<p>7 slots filled automatically. The remaining 10 are <code>human_context</code> — the who, what, why, where, when, how that only you know. Run <code>faf go</code> for the guided interview and get to 90%+.</p>
		</section>

		<section>
			<h2>WJTTC — TIER 4 NATIVE</h2>

			<p>12 new championship tests covering every detection path. They run on every CI push:</p>

			<div class="tier-table">
				<div class="tier-row header">
					<span>#</span><span>Test</span><span>Expected</span>
				</div>
				<div class="tier-row"><span>#28</span><span>Go + mark3labs/mcp-go</span><span class="cyan">mcp</span></div>
				<div class="tier-row"><span>#29</span><span>Go + modelcontextprotocol/go-sdk</span><span class="cyan">mcp</span></div>
				<div class="tier-row"><span>#30</span><span>Go + Cobra</span><span class="cyan">cli</span></div>
				<div class="tier-row"><span>#31</span><span>Go cmd/ + main.go</span><span class="cyan">cli</span></div>
				<div class="tier-row"><span>#32</span><span>Go service (no CLI markers)</span><span class="cyan">service</span></div>
				<div class="tier-row"><span>#33</span><span>Rust [[bin]]</span><span class="cyan">cli</span></div>
				<div class="tier-row"><span>#34</span><span>Rust clap + src/main.rs</span><span class="cyan">cli</span></div>
				<div class="tier-row"><span>#35</span><span>Rust service (main, no clap)</span><span class="cyan">service</span></div>
				<div class="tier-row"><span>#36</span><span>Rust lib only</span><span class="cyan">library</span></div>
				<div class="tier-row"><span>#37</span><span>Python console_scripts</span><span class="cyan">cli</span></div>
				<div class="tier-row"><span>#38</span><span>Python main.py</span><span class="cyan">service</span></div>
				<div class="tier-row"><span>#39</span><span>Python setup.py</span><span class="cyan">library</span></div>
			</div>
		</section>

		<section>
			<h2>Try It</h2>

			<div class="terminal-block">
				<code>npm install -g faf-cli@6.1.0</code>
			</div>

			<p>Or zero-install:</p>

			<div class="terminal-block">
				<code>bunx faf git https://github.com/github/github-mcp-server</code>
			</div>
		</section>

		<section>
			<h2>The Numbers</h2>
			<ul>
				<li><strong>v6.1.0</strong> — Released April 14, 2026</li>
				<li><strong>402/402</strong> — Tests passing across 44 files</li>
				<li><strong>12 new</strong> — WJTTC TIER 4 NATIVE tests (#28–#39)</li>
				<li><strong>🏆 100%</strong> — Trophy score, synced</li>
				<li><strong>51,500+</strong> — Downloads across npm, PyPI, crates.io</li>
			</ul>
		</section>

		<section class="share-section">
			<a
				href="https://twitter.com/intent/tweet?text=faf-cli+v6.1.0+%E2%80%94+The+Go+Rusty+Python+Edition%0A%0Afaf+git+on+github%2Fgithub-mcp-server%3A+was+library+22%25.+Now+mcp+41%25.%0A%0AGo+%2B+Rust+%2B+Python+native+manifest+detection.+Zero+config.%0A%0AFAF+defines.+MD+instructs.+AI+codes.&url=https%3A%2F%2Ffaf.one%2Fblog%2Fgo-rusty-python"
				target="_blank"
				rel="noopener noreferrer"
				class="share-btn"
			>
				Share on X →
			</a>
		</section>

		<section class="footer-note">
			<p>Built with .faf ☑️ Three languages. One command. Scored correctly. 🏎️</p>
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

	.separator { color: #ccc; }

	.category {
		color: white;
		padding: 0.25rem 0.75rem;
		border-radius: 4px;
		font-size: 0.85rem;
	}

	.category.release { background: #00B8B8; }

	.post-content { font-size: 1.1rem; }

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

	p { margin-bottom: 1.25rem; }

	ul, ol { margin: 1rem 0 1.5rem 1.5rem; }

	li { margin-bottom: 0.5rem; }

	code {
		font-family: 'SF Mono', 'Fira Code', Consolas, monospace;
		background: #f0f0f0;
		padding: 0.2rem 0.4rem;
		border-radius: 4px;
		font-size: 0.9em;
	}

	/* Score comparison */
	.score-compare {
		display: flex;
		align-items: center;
		gap: 1.5rem;
		background: #1a1a1a;
		border-radius: 12px;
		padding: 2rem;
		margin: 2rem 0;
		justify-content: center;
	}

	.score-before, .score-after {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.4rem;
	}

	.score-label {
		font-size: 0.8rem;
		color: #888;
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}

	.score-value {
		font-size: 2.5rem;
		font-weight: 800;
		font-family: 'SF Mono', 'Fira Code', Consolas, monospace;
	}

	.score-value.red { color: #ff4444; }
	.score-value.orange { color: #FF6B35; }

	.score-detail {
		font-size: 0.85rem;
		color: #666;
		font-family: 'SF Mono', 'Fira Code', Consolas, monospace;
	}

	.score-arrow {
		font-size: 2rem;
		color: #00D4D4;
		font-weight: 300;
	}

	/* Result block */
	.result-block {
		background: #1a1a1a;
		border-radius: 8px;
		padding: 1.25rem 1.5rem;
		margin: 1.5rem 0;
		font-family: 'SF Mono', 'Fira Code', Consolas, monospace;
		font-size: 0.9rem;
	}

	.result-line {
		display: flex;
		gap: 1rem;
		padding: 0.2rem 0;
		color: #aaa;
	}

	.result-key { color: #888; min-width: 120px; }
	.result-val { color: #e0e0e0; }
	.result-val.cyan { color: #00D4D4; }
	.result-score .result-val.orange { color: #FF6B35; font-weight: 600; }

	/* Tier table */
	.tier-table {
		background: #f8f8f8;
		border-radius: 8px;
		overflow: hidden;
		margin: 1.5rem 0;
		font-size: 0.95rem;
	}

	.tier-row {
		display: grid;
		grid-template-columns: 2.5rem 1fr 6rem;
		padding: 0.6rem 1rem;
		border-bottom: 1px solid #eee;
		gap: 1rem;
		align-items: center;
	}

	.tier-row:last-child { border-bottom: none; }

	.tier-row.header {
		background: #1a1a1a;
		color: #888;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}

	.tier-row .cyan {
		color: #00B8B8;
		font-family: 'SF Mono', 'Fira Code', Consolas, monospace;
		font-size: 0.85rem;
	}

	/* Terminal */
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

	a { color: #FF6B35; }

	.share-section {
		margin-top: 3rem;
		text-align: center;
	}

	.share-btn {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		background: #000;
		color: white;
		padding: 0.75rem 1.5rem;
		border-radius: 6px;
		text-decoration: none;
		font-weight: 600;
		font-size: 0.95rem;
		transition: background 0.2s;
	}

	.share-btn:hover { background: #333; }

	.footer-note {
		margin-top: 3rem;
		padding-top: 2rem;
		border-top: 1px solid #eee;
		color: #888;
		font-size: 0.95rem;
		text-align: center;
	}
</style>
