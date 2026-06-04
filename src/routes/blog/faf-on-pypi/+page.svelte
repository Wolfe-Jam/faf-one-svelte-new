<script lang="ts">
	let copiedId = $state('');
	async function copyText(text: string, id: string) {
		await navigator.clipboard.writeText(text);
		copiedId = id;
		setTimeout(() => (copiedId = ''), 2000);
	}

	const shareUrl = 'https://www.faf.one/blog/faf-on-pypi';
	const shareText =
		'FAF on PyPI — 6 packages, one IANA-registered family. Persistent Context + Permanent Memory. uvx and go.';
	const xShare = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;
</script>

<svelte:head>
	<title>FAF on PyPI | FAF</title>
	<meta
		name="description"
		content="FAF on PyPI — six packages, one IANA-registered family. Persistent Context (.faf) plus Permanent Memory (.fafm). Two implement Zenodo papers. uvx and go."
	/>
	<meta property="og:title" content="FAF on PyPI" />
	<meta
		property="og:description"
		content="Six packages. One IANA-registered family. Persistent Context plus Permanent Memory. uvx and go."
	/>
	<meta property="og:type" content="article" />
	<meta property="og:url" content="https://www.faf.one/blog/faf-on-pypi" />
	<meta property="og:image" content="https://faf.one/blog/faf-on-pypi-hero.png" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="FAF on PyPI" />
	<meta name="twitter:image" content="https://faf.one/blog/faf-on-pypi-hero.png" />
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / FAF on PyPI
		</div>

		<h1>FAF on PyPI</h1>
		<p class="subtitle">Six packages. One IANA-registered family. <span class="brand">uvx</span> and go.</p>
		<div class="meta">
			<time datetime="2026-05-31">May 31, 2026</time>
			<span class="separator">-</span>
			<span class="category launch">Launch</span>
		</div>
	</header>

	<div class="hero-image">
		<img src="/blog/faf-on-pypi-hero.png" alt="FAF on PyPI — six packages, one IANA-registered family. .faf is Context, .fafm is Memory, PyPI is where it lives." />
	</div>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> The FAF Python ecosystem is six packages on PyPI, all built on the same
				IANA-registered <code>.faf</code> and <code>.fafm</code> formats. Two are reference
				implementations of Zenodo-published papers. Persistent Context plus Permanent Memory —
				<code>uvx</code> and go.
			</p>
		</section>

		<section>
			<h2>The family</h2>

			<div class="pkg">
				<div class="pkg-head"><code>claude-fafm-sdk</code> <span class="ver">v0.4.0</span> <span class="badge">new</span></div>
				<p class="pkg-role">Portable, cross-vendor AI memory in <code>.fafm</code> — offline-first SDK; connect a free namepoint for full intel. Implements the Memory paper.</p>
				<pre>uvx claude-fafm-sdk</pre>
			</div>

			<div class="pkg">
				<div class="pkg-head"><code>faf-memory-mcp</code> <span class="ver">v0.1.0</span> <span class="badge">new</span></div>
				<p class="pkg-role">MCP server for <code>.fafm</code> — the Permanent Memory Layer (PML). Wraps claude-fafm-sdk via fastmcp. IANA-registered, cross-vendor, offline-first.</p>
				<pre>uvx faf-memory-mcp</pre>
			</div>

			<div class="pkg">
				<div class="pkg-head"><code>gemini-faf-mcp</code> <span class="ver">v2.2.5</span></div>
				<p class="pkg-role">Persistent Project Context for Google Gemini. IANA-registered <code>.faf</code> format, MCP server + Cloud Run REST API; unifies CLAUDE.md, GEMINI.md, AGENTS.md. Implements the Context paper.</p>
				<pre>uvx gemini-faf-mcp</pre>
			</div>

			<div class="pkg">
				<div class="pkg-head"><code>faf-python-sdk</code></div>
				<p class="pkg-role">Persistent project context for Python — parse, validate, and score <code>.faf</code> files. The foundation other Python FAF tools (gemini-faf-mcp, custom MCP servers, CI validators) build on. IANA-registered <code>application/vnd.faf+yaml</code>.</p>
				<pre>uvx faf-python-sdk</pre>
			</div>

			<div class="pkg">
				<div class="pkg-head"><code>grok-faf-voice</code></div>
				<p class="pkg-role">Voice Memory Layer (VML) for Grok — persistent across sessions, devices, and models. LiveKit-enabled.</p>
				<pre>uvx grok-faf-voice</pre>
			</div>

			<div class="pkg">
				<div class="pkg-head"><code>faf-agent-mcp</code></div>
				<p class="pkg-role">FAF Agent — the Voice of FAF. MCP server.</p>
				<pre>uvx faf-agent-mcp</pre>
			</div>
		</section>

		<section>
			<h2>Why it exists</h2>
			<p>
				Every Python AI tool invents its own context shape. <code>.faf</code> is the IANA-registered
				standard that lets them share one — the same file read by Gemini, Claude, and Grok.
				<code>.fafm</code> is the memory profile: durable agent memory in a portable, versionable file.
			</p>
			<p>FAF on PyPI is six surfaces of one standard. Different vendors, different runtimes, one format underneath.</p>
		</section>

		<section>
			<h2>Persistent Context + Permanent Memory</h2>
			<p>
				<code>.faf</code> carries context. <code>.fafm</code> carries memory. Both are IANA-registered,
				and each has a peer-citable paper on Zenodo, hosted at CERN. That spine is what every package
				above shares.
			</p>
		</section>

		<section>
			<h2>Receipts</h2>
			<ul class="receipts">
				<li><strong>IANA</strong> — <code>application/vnd.faf+yaml</code> &middot; <code>application/vnd.fafm+yaml</code></li>
				<li><strong>Context paper</strong> (.faf) — <a href="https://doi.org/10.5281/zenodo.18251362" target="_blank" rel="noopener">DOI 10.5281/zenodo.18251362</a> &middot; CC BY 4.0 &middot; Zenodo (CERN)</li>
				<li><strong>Memory paper</strong> (.fafm) — <a href="https://doi.org/10.5281/zenodo.20348942" target="_blank" rel="noopener">DOI 10.5281/zenodo.20348942</a> &middot; CC BY 4.0 &middot; Zenodo (CERN)</li>
				<li><strong>MCP Registry</strong> — FAF Ecosystem <strong>#2759</strong></li>
			</ul>
		</section>

		<section class="cta">
			<h2>Try it</h2>
			<p>Lead with <code>uvx</code> — zero install, runs at the current version. Use <code>pip</code> when you want a project pin.</p>
			<pre>uvx claude-fafm-sdk init</pre>
			<p class="links">
				<a href="https://pypi.org/user/wolfejam/" target="_blank" rel="noopener">all FAF on PyPI</a>
				&middot;
				<a href="https://pypi.faf.one" target="_blank" rel="noopener">pypi.faf.one</a>
				&middot;
				<a href="https://faf.one" target="_blank" rel="noopener">faf.one</a>
			</p>
		</section>

		<div class="share">
			<a class="x-share" href={xShare} target="_blank" rel="noopener">Share on X</a>
		</div>
	</article>
</div>

<style>
	:global(body) {
		background: var(--faf-cream);
		color: var(--faf-black);
	}

	.hero-image {
		max-width: 760px;
		margin: 0 auto 2rem;
		padding: 0 1.25rem;
		border-radius: 0;
		overflow: hidden;
	}
	.hero-image img {
		width: 100%;
		height: auto;
		display: block;
		border-radius: 12px;
	}

	.blog-post {
		max-width: 760px;
		margin: 0 auto;
		padding: 2rem 1.25rem 4rem;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
	}

	.breadcrumb {
		font-size: 0.9rem;
		color: var(--faf-dark);
		margin-bottom: 1.5rem;
	}
	.breadcrumb a {
		color: var(--faf-cyan-dark);
		text-decoration: none;
	}

	.post-header {
		border-bottom: 1px solid var(--faf-light-gray);
		padding-bottom: 1.5rem;
		margin-bottom: 2rem;
	}
	.post-header h1 {
		font-size: 2.4rem;
		font-weight: 800;
		color: var(--faf-black);
		margin: 0 0 0.5rem;
	}
	.subtitle {
		font-size: 1.2rem;
		color: var(--faf-dark);
		margin: 0 0 1rem;
	}
	.subtitle .brand {
		color: var(--faf-orange);
		font-weight: 700;
	}
	.meta {
		font-size: 0.9rem;
		color: var(--faf-dark);
	}
	.meta .separator {
		margin: 0 0.5rem;
	}
	.category.launch {
		color: var(--faf-orange);
		font-weight: 700;
	}

	.post-content section {
		padding: 1.25rem 0;
	}
	.post-content h2 {
		font-size: 1.4rem;
		font-weight: 700;
		color: var(--faf-black);
		margin: 0 0 1rem;
	}
	.post-content p {
		color: var(--faf-dark);
		line-height: 1.7;
		margin: 0 0 1rem;
	}
	.lead {
		font-size: 1.1rem;
	}
	.post-content a:not(.x-share) {
		color: var(--faf-cyan-dark);
		text-decoration: underline;
	}

	.pkg {
		padding: 1rem 0 1.1rem;
		border-bottom: 1px solid var(--faf-light-gray);
	}
	.pkg:last-child {
		border-bottom: none;
	}
	.pkg-head {
		display: flex;
		align-items: baseline;
		gap: 0.7rem;
		flex-wrap: wrap;
		margin-bottom: 0.3rem;
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
		color: #ffffff;
		padding: 0.1rem 0.5rem;
		border-radius: 4px;
		font-size: 0.68rem;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}
	.pkg-role {
		margin: 0.2rem 0 0.5rem;
	}

	.receipts {
		list-style: none;
		padding: 0;
		margin: 0;
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
		padding: 0.85rem 1.05rem;
		color: var(--faf-dark);
		overflow-x: auto;
		margin: 0.5rem 0 0;
	}

	.links {
		margin-top: 1.25rem;
		font-size: 0.95rem;
	}

	.share {
		margin-top: 2rem;
		padding-top: 1.5rem;
		border-top: 1px solid var(--faf-light-gray);
	}
	.x-share {
		display: inline-block;
		padding: 0.6rem 1.3rem;
		background: var(--faf-black);
		color: #ffffff;
		border-radius: 999px;
		font-weight: 700;
		text-decoration: none;
		font-size: 0.95rem;
	}
	.x-share:hover {
		background: var(--faf-orange);
		color: var(--faf-black);
	}

	@media (max-width: 600px) {
		.post-header h1 {
			font-size: 1.85rem;
		}
	}
</style>
