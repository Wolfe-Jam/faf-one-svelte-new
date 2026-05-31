<svelte:head>
	<title>uvx and go · pypi.faf.one</title>
	<meta name="description" content="FAF on PyPI — six packages, one IANA-registered family. Gemini MCP, Claude .fafm SDK, Grok Voice, Python SDK, Voice MCP, slash-tokens. Two implement Zenodo papers." />
	<link rel="icon" type="image/svg+xml" href="/orange-smiley.svg" />

	<!-- Open Graph -->
	<meta property="og:type" content="website" />
	<meta property="og:title" content="uvx and go · pypi.faf.one" />
	<meta property="og:description" content="FAF on PyPI — six packages, one IANA-registered family. Two implement Zenodo papers. uvx and go." />
	<meta property="og:url" content="https://www.faf.one/pypi" />
	<meta property="og:image" content="https://www.faf.one/orange-smiley.svg" />

	<!-- Twitter Card -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="uvx and go · pypi.faf.one" />
	<meta name="twitter:description" content="FAF on PyPI — six packages, one IANA-registered family. uvx and go." />
	<meta name="twitter:image" content="https://www.faf.one/orange-smiley.svg" />
</svelte:head>

<main class="page">

	<section class="hero">
		<img class="smiley" src="/orange-smiley.svg" alt="FAF" width="72" height="72" />
		<h1>pypi.faf.one</h1>
		<p class="tagline"><span class="brand">uvx</span> and go</p>
		<p class="kicker">Six packages. One <span class="brand">IANA-registered</span> family.</p>
		<p class="sub">The FAF Python ecosystem — <span class="so-you-can">two implement Zenodo papers, all share the same standard.</span></p>
		<p class="live-link"><a href="https://pypi.faf.one" target="_blank" rel="noopener">Live discovery → pypi.faf.one</a></p>
	</section>

	<section class="content">
		<h2>What it is</h2>
		<p>Six packages on PyPI built on the same IANA-registered <code>.faf</code> and <code>.fafm</code> formats. Two of them — <a href="https://pypi.org/project/claude-fafm-sdk/" target="_blank" rel="noopener">claude-fafm-sdk</a> and <a href="https://pypi.org/project/gemini-faf-mcp/" target="_blank" rel="noopener">gemini-faf-mcp</a> — are reference implementations of <strong>Zenodo-published papers</strong>. The rest extend the family across voice, agents, and the Python SDK that ties them together.</p>
		<p>Every number on this page is real, dated, and from <code>pypistats.org</code> <code>without_mirrors</code> only — no bot inflation, no mirror double-counting.</p>
	</section>

	<section class="content">
		<h2>The family</h2>

		<div class="pkg">
			<div class="pkg-head">
				<code>claude-fafm-sdk</code>
				<span class="ver">v0.4.0</span>
				<span class="badge">100% recent</span>
			</div>
			<p class="pkg-role">Claude <code>.fafm</code> SDK — multi-profile AI agent memory, offline-first.</p>
			<p class="pkg-stats"><strong>660</strong> total · <strong>660 / wk</strong> · velocity leader · implements the <a href="https://doi.org/10.5281/zenodo.20348942" target="_blank" rel="noopener">Memory paper</a></p>
			<pre>uvx claude-fafm-sdk</pre>
		</div>

		<div class="pkg">
			<div class="pkg-head">
				<code>gemini-faf-mcp</code>
				<span class="ver">v2.2.5</span>
			</div>
			<p class="pkg-role">Persistent project context for Google Gemini — MCP server, IANA-registered <code>.faf</code> format.</p>
			<p class="pkg-stats"><strong>1,832</strong> total · <strong>105 / wk</strong> · implements the <a href="https://doi.org/10.5281/zenodo.18251362" target="_blank" rel="noopener">Context paper</a></p>
			<pre>uvx gemini-faf-mcp</pre>
		</div>

		<div class="pkg">
			<div class="pkg-head">
				<code>grok-faf-voice</code>
				<span class="ver">latest</span>
			</div>
			<p class="pkg-role">LiveKit + Grok voice SDK with <code>.fafm</code> voice-memory profile (VML).</p>
			<p class="pkg-stats"><strong>767</strong> total · <strong>175 / wk</strong></p>
			<pre>uvx grok-faf-voice</pre>
		</div>

		<div class="pkg">
			<div class="pkg-head">
				<code>faf-python-sdk</code>
				<span class="ver">latest</span>
			</div>
			<p class="pkg-role">The Python SDK for <code>.faf</code> — parse, score, validate from any Python project.</p>
			<p class="pkg-stats"><strong>1,058</strong> total · <strong>35 / wk</strong></p>
			<pre>uvx faf-python-sdk</pre>
		</div>

		<div class="pkg">
			<div class="pkg-head">
				<code>faf-agent-mcp</code>
				<span class="ver">latest</span>
			</div>
			<p class="pkg-role">Voice of FAF — MCP server for agent voice profiles.</p>
			<p class="pkg-stats"><strong>632</strong> total · <strong>8 / wk</strong></p>
			<pre>uvx faf-agent-mcp</pre>
		</div>

		<div class="pkg">
			<div class="pkg-head">
				<code>slash-tokens</code>
				<span class="ver">latest</span>
			</div>
			<p class="pkg-role">Pre-flight publish checks — Python sibling of the npm package.</p>
			<p class="pkg-stats"><strong>289</strong> total · <strong>15 / wk</strong></p>
			<pre>uvx slash-tokens</pre>
		</div>
	</section>

	<section class="content">
		<h2>Why it exists</h2>
		<p>Every Python AI tool currently invents its own context shape. <code>.faf</code> is the IANA-registered standard that lets them share one — same file readable by Gemini, Claude, Grok. <code>.fafm</code> is the memory profile: durable agent memory in a portable, versionable file.</p>
		<p>FAF on PyPI is six surfaces of the same standard. Different vendors, different runtimes, one format underneath.</p>
	</section>

	<section class="content">
		<h2>Receipts</h2>
		<ul class="receipts">
			<li><strong>IANA</strong> — <code>application/vnd.faf+yaml</code> · <code>application/vnd.fafm+yaml</code></li>
			<li><strong>Context paper</strong> (.faf) — <a href="https://doi.org/10.5281/zenodo.18251362" target="_blank" rel="noopener">DOI 10.5281/zenodo.18251362</a> · CC BY 4.0 · CERN-hosted (Zenodo)</li>
			<li><strong>Memory paper</strong> (.fafm) — <a href="https://doi.org/10.5281/zenodo.20348942" target="_blank" rel="noopener">DOI 10.5281/zenodo.20348942</a> · CC BY 4.0 · CERN-hosted (Zenodo)</li>
			<li><strong>MCP Registry</strong> — FAF Ecosystem <strong>#2759</strong> (Anthropic-merged)</li>
			<li><strong>Measured</strong> — 2026-05-30 · <code>pypistats.org</code> · <code>without_mirrors</code> only</li>
		</ul>
	</section>

	<section class="content cta-section">
		<h2>Try it</h2>
		<p>Lead with <code>uvx</code> — zero install, runs at the current version. Use <code>pip3</code> when you want a project pin.</p>
		<pre>uvx claude-fafm-sdk init</pre>
		<p class="links">
			<a href="https://pypi.org/user/wolfejam/" target="_blank" rel="noopener">all FAF on PyPI</a>
			·
			<a href="https://github.com/Wolfe-Jam" target="_blank" rel="noopener">all FAF on GitHub</a>
			·
			<a href="https://faf.one" target="_blank" rel="noopener">faf.one</a>
			·
			<a href="https://pypi.faf.one" target="_blank" rel="noopener">pypi.faf.one (live)</a>
		</p>
	</section>

	<section class="footer-section">
		<p>Built with .faf + .fafm &#9745; Permanent Memory. Instant Recall. 🏎️</p>
	</section>

</main>

<style>
	:global(body) {
		background: var(--faf-cream);
		color: var(--faf-black);
	}

	.page {
		max-width: 760px;
		margin: 0 auto;
		padding: 1rem 1.25rem 4rem;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
	}

	.hero {
		text-align: center;
		padding: 4rem 0 2rem;
		border-bottom: 1px solid var(--faf-light-gray);
		margin-bottom: 2rem;
	}

	.smiley {
		display: block;
		margin: 0 auto 1rem;
	}

	.hero h1 {
		font-size: 2.2rem;
		font-weight: 800;
		color: var(--faf-black);
		margin-bottom: 0.5rem;
	}

	.tagline {
		font-size: 1.5rem;
		font-weight: 800;
		color: var(--faf-black);
		margin: 0.75rem 0 0.5rem;
		letter-spacing: -0.01em;
	}

	.tagline .brand {
		color: var(--faf-orange);
		font-weight: 800;
	}

	.kicker {
		font-size: 1rem;
		color: var(--faf-dark);
		font-style: italic;
		font-weight: 500;
		line-height: 1.5;
		margin: 0 0 0.75rem;
	}

	.kicker .brand {
		color: var(--faf-orange);
		font-style: normal;
		font-weight: 700;
	}

	.sub {
		font-size: 1.1rem;
		color: var(--faf-dark);
	}

	.sub .so-you-can {
		color: var(--faf-cyan-text);
		font-weight: 600;
	}

	.live-link {
		margin: 1.5rem 0 0;
		text-align: center;
	}

	.live-link a {
		display: inline-block;
		padding: 0.7rem 1.4rem;
		background: var(--faf-orange);
		color: var(--faf-cream);
		border-radius: 999px;
		font-weight: 700;
		text-decoration: none;
		font-family: var(--font-mono);
		font-size: 0.95rem;
		letter-spacing: -0.01em;
	}

	.live-link a:hover {
		background: var(--faf-black);
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

	.content a:not(.cta) {
		color: var(--faf-cyan-dark);
		text-decoration: underline;
	}

	.content a:not(.cta):hover {
		color: var(--faf-cyan);
	}

	.pkg {
		padding: 1rem 0 1.25rem;
		border-bottom: 1px solid var(--faf-light-gray);
	}

	.pkg:last-child {
		border-bottom: none;
	}

	.pkg-head {
		display: flex;
		align-items: baseline;
		gap: 0.75rem;
		flex-wrap: wrap;
		margin-bottom: 0.35rem;
	}

	.pkg-head code {
		background: none;
		padding: 0;
		font-size: 1.05rem;
		font-weight: 700;
		color: var(--faf-black);
	}

	.pkg-head .ver {
		font-family: var(--font-mono);
		font-size: 0.85rem;
		color: var(--faf-dark);
		font-weight: 600;
	}

	.pkg-head .badge {
		background: var(--faf-orange);
		color: white;
		padding: 0.15rem 0.55rem;
		border-radius: 4px;
		font-size: 0.7rem;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}

	.pkg-role {
		margin: 0.25rem 0 0.5rem 0;
	}

	.pkg-stats {
		font-size: 0.95rem;
		color: var(--faf-dark);
		margin: 0.25rem 0 0.6rem 0;
	}

	.pkg-stats strong {
		color: var(--faf-orange);
		font-family: var(--font-mono);
	}

	.receipts {
		list-style: none;
		padding: 0;
	}

	.receipts li {
		padding: 0.5rem 0;
		color: var(--faf-dark);
		border-bottom: 1px solid var(--faf-light-gray);
	}

	.receipts li:last-child {
		border-bottom: none;
	}

	.receipts strong {
		color: var(--faf-black);
	}

	code {
		font-family: var(--font-mono);
		background: var(--faf-gray-light);
		padding: 0.15rem 0.4rem;
		border-radius: 4px;
		font-size: 0.9em;
		color: var(--faf-cyan-text);
	}

	pre {
		font-family: var(--font-mono);
		background: var(--faf-gray-light);
		border: 1px solid var(--faf-light-gray);
		border-radius: 8px;
		padding: 0.9rem 1.1rem;
		color: var(--faf-dark);
		overflow-x: auto;
	}

	.cta-section {
		text-align: center;
		padding: 2rem 0;
	}

	.links {
		margin-top: 1.25rem;
		font-size: 0.95rem;
	}

	.footer-section {
		text-align: center;
		padding: 3rem 0 1rem;
		border-top: 1px solid var(--faf-light-gray);
		margin-top: 2rem;
		color: var(--faf-dark);
	}

	@media (max-width: 600px) {
		.hero h1 { font-size: 1.85rem; }
		.tagline { font-size: 1.25rem; }
	}
</style>
