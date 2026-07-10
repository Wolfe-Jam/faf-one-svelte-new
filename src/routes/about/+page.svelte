<svelte:head>
	<title>About FAF — The Context Standard for AI</title>
	<meta name="description" content="FAF is the persistent AI context format. IANA registered. 47k+ downloads. 5 MCP servers." />
</svelte:head>

<main class="page">

	<section class="hero">
		<h1>About FAF</h1>
		<p class="sub">The Context Standard for AI</p>
	</section>

	<section class="content">
		<h2>What is .faf?</h2>
		<p><code>project.faf</code> is a structured YAML file that lives in your repo. It tells any AI tool what your project is, how it's built, and who it's for. One file, every tool, every session.</p>
		<p>Think of it as <code>package.json</code> for AI context. Your dependencies have a manifest — now your context does too.</p>
	</section>

	<section class="content">
		<h2>Why it exists</h2>
		<p>Every AI session starts from zero. Your AI re-discovers your stack, your goals, your conventions — every time. That's 91% wasted context.</p>
		<p><code>project.faf</code> fixes that. Define once, AI remembers forever. Across sessions, models, tools, teams, and enterprises.</p>
	</section>

	<section class="content">
		<h2>Credentials</h2>
		<ul>
			<li><strong>IANA Registered</strong> — <a href="https://www.iana.org/assignments/media-types/application/vnd.faf+yaml" target="_blank" rel="noopener"><code>application/vnd.faf+yaml</code></a></li>
			<li><strong>Anthropic MCP #2759</strong> — <a href="https://github.com/modelcontextprotocol/servers/pull/2759" target="_blank" rel="noopener">merged into official registry</a></li>
			<li><strong>47k+ downloads</strong> — npm, PyPI, crates.io</li>
			<li><strong>5 MCP servers</strong> — Claude, Grok, Gemini, Cursor, Rust</li>
			<li><strong>IETF standardization</strong> — in progress</li>
			<li><strong>Zenodo/CERN</strong> — <a href="https://zenodo.org/records/18251362" target="_blank" rel="noopener">academic publication</a></li>
		</ul>
	</section>

	<section class="content">
		<h2>The ecosystem</h2>
		<div class="ecosystem-grid">
			<div class="eco-item">
				<strong>faf-cli</strong>
				<span>Universal CLI — npm</span>
			</div>
			<div class="eco-item">
				<strong>claude-faf-mcp</strong>
				<span>Anthropic — npm</span>
			</div>
			<div class="eco-item">
				<strong>grok-faf-mcp</strong>
				<span>xAI — npm</span>
			</div>
			<div class="eco-item">
				<strong>gemini-faf-mcp</strong>
				<span>Google — PyPI</span>
			</div>
			<div class="eco-item">
				<strong>faf-mcp</strong>
				<span>Universal — npm</span>
			</div>
			<div class="eco-item">
				<strong>faf-rust-sdk</strong>
				<span>Rust — crates.io</span>
			</div>
		</div>
	</section>

	<section class="content">
		<h2>The three layers</h2>
		<p><code>.faf</code> defines. <code>.md</code> instructs. AI consumes.</p>
		<p>The foundation layer (<code>project.faf</code>) holds structured facts. The instruction layer (<code>CLAUDE.md</code>, <code>AGENTS.md</code>, <code>.cursorrules</code>) holds prose guidance — authored from <code>.faf</code>. The AI reads both.</p>
	</section>

	<section class="content">
		<h2>Origin</h2>
		<p>Created by <a href="https://wolfejam.dev" target="_blank" rel="noopener">Wolfe James</a>. AI context R&D since 2024. FAF launched 2025 — now IANA-registered and shipping across 3 registries.</p>
		<p>Contact: <a href="mailto:team@faf.one">team@faf.one</a></p>
	</section>

	<section class="content footer-section">
		<p class="footer-tagline">The Context Standard for AI</p>
		<p class="footer-iana">IANA Registered · application/vnd.faf+yaml</p>
	</section>

</main>

<style>
	.page {
		max-width: 700px;
		margin: 0 auto;
		padding: 0 1.5rem;
	}

	.hero {
		text-align: center;
		padding: 4rem 0 2rem;
		border-bottom: 1px solid var(--faf-light-gray);
		margin-bottom: 2rem;
	}

	.hero h1 {
		font-size: 2.2rem;
		font-weight: 800;
		color: var(--faf-black);
		margin-bottom: 0.5rem;
	}

	.sub {
		font-size: 1.1rem;
		color: var(--faf-gray);
	}

	.content {
		padding: 1.5rem 0;
	}

	.content h2 {
		font-size: 1.3rem;
		font-weight: 700;
		color: var(--faf-black);
		margin-bottom: 1rem;
	}

	.content p {
		color: var(--faf-dark);
		line-height: 1.7;
		margin-bottom: 1rem;
	}

	.content ul {
		list-style: none;
		padding: 0;
	}

	.content li {
		padding: 0.5rem 0;
		color: var(--faf-dark);
		border-bottom: 1px solid var(--faf-light-gray);
	}

	.content li:last-child {
		border-bottom: none;
	}

	.content a {
		color: var(--faf-orange);
		text-decoration: none;
	}

	.content a:hover {
		text-decoration: underline;
	}

	code {
		font-family: var(--font-mono);
		background: var(--faf-gray-light);
		padding: 0.15rem 0.4rem;
		border-radius: 4px;
		font-size: 0.9em;
		color: var(--faf-cyan-text);
	}

	.ecosystem-grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 0.75rem;
		margin-top: 1rem;
	}

	.eco-item {
		padding: 1rem;
		background: var(--faf-gray-light);
		border: 1px solid var(--faf-light-gray);
		border-radius: 8px;
	}

	.eco-item strong {
		display: block;
		color: var(--faf-black);
		font-family: var(--font-mono);
		font-size: 0.9rem;
		margin-bottom: 0.25rem;
	}

	.eco-item span {
		color: var(--faf-gray);
		font-size: 0.85rem;
	}

	.footer-section {
		text-align: center;
		padding: 3rem 0;
		border-top: 1px solid var(--faf-light-gray);
		margin-top: 2rem;
	}

	.footer-tagline {
		font-weight: 600;
		color: var(--faf-black);
	}

	.footer-iana {
		font-size: 0.8rem;
		color: var(--faf-gray);
		margin-top: 0.5rem;
	}

	@media (max-width: 768px) {
		.ecosystem-grid {
			grid-template-columns: 1fr;
		}

		.hero h1 {
			font-size: 1.8rem;
		}
	}
</style>
