<svelte:head>
	<title>memory.faf.one — Nelly Never Forgets</title>
	<meta name="description" content="Portable, cross-vendor AI memory in the IANA-registered .fafm format. Offline-first claude-fafm-sdk; connect a free namepoint for full intel. Nelly Never Forgets." />
	<link rel="icon" type="image/svg+xml" href="/nelly.svg" />

	<!-- Open Graph -->
	<meta property="og:type" content="website" />
	<meta property="og:title" content="memory.faf.one — Nelly Never Forgets" />
	<meta property="og:description" content="Portable, cross-vendor AI memory in .fafm. Offline-first SDK; a free namepoint for full intel at personal scale." />
	<meta property="og:url" content="https://www.faf.one/memory" />
	<meta property="og:image" content="https://memory.faf.one/nelly-og.png" />

	<!-- Twitter Card -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="memory.faf.one — Nelly Never Forgets" />
	<meta name="twitter:description" content="Portable, cross-vendor AI memory in .fafm. Offline-first; free namepoint for full intel." />
	<meta name="twitter:image" content="https://memory.faf.one/nelly-og.png" />
</svelte:head>

<main class="page">

	<section class="hero">
		<img class="nelly" src="/nelly.svg" alt="Nelly — the FAF memory elephant" width="72" height="72" />
		<h1>memory.faf.one</h1>
		<p class="tagline"><span class="etched">etch</span> and forget</p>
		<p class="kicker"><span class="etched">etched</span> in stone… becomes <span class="etched">etched</span> in memory <span class="pml-mark">(PML)</span></p>
		<p class="sub">Nelly Never Forgets <span class="so-you-can">(so you can!)</span> — portable, cross-vendor AI memory</p>
	</section>

	<section class="content">
		<h2>What it is</h2>
		<p>The home of <code>.fafm</code> — the IANA-registered memory format — and <code>claude-fafm-sdk</code>, the open Python SDK for giving an AI agent memory that versions with your project and moves between models instead of being locked to one vendor.</p>
		<p>The local <code>Soul</code> works offline with no account. Connect a <strong>free namepoint</strong> when you want hosted, full-intel recall at personal scale.</p>
	</section>

	<section class="content">
		<h2>Two profiles, one format</h2>
		<p><strong>Voice — the Voice Memory Layer (VML).</strong> The original <code>.fafm</code> profile: durable memory for voice agents, so the assistant remembers you across calls. Reference: <a href="https://pypi.org/project/grok-faf-voice/" target="_blank" rel="noopener">grok-faf-voice</a>.</p>
		<p><strong>Knowledge.</strong> Typed, cross-linked memory for agent runtimes like Claude Code. Reference: <a href="https://pypi.org/project/claude-fafm-sdk/" target="_blank" rel="noopener">claude-fafm-sdk</a>.</p>
	</section>

	<section class="content">
		<h2>Why it exists</h2>
		<p>Every AI session starts from zero, and what memory exists is trapped in one vendor's walled garden. <code>.fafm</code> is a plain, open, versionable file your agent's memory lives in — readable by Grok, Claude, and Gemini alike. One format, never a fork.</p>
	</section>

	<section class="content">
		<h2>Receipts</h2>
		<ul class="receipts">
			<li><strong>IANA-registered</strong> — <code>application/vnd.fafm+yaml</code> (May 13, 2026)</li>
			<li><strong><a href="https://pypi.org/project/claude-fafm-sdk/" target="_blank" rel="noopener">claude-fafm-sdk on PyPI</a></strong> — v0.1.0, MIT, offline-first</li>
			<li><strong>Cross-vendor verified</strong> — one client read grok / claude / gemini souls live over the same protocol</li>
			<li><strong>Hosted backend live</strong> — <code>memory.faf.one/mcp</code> (<code>get_soul</code> / <code>write_soul</code>)</li>
			<li><strong>Companion paper</strong> — the .faf Context paper on Zenodo (DOI 10.5281/zenodo.18251362)</li>
		</ul>
	</section>

	<section class="content cta-section">
		<h2>Try it</h2>
		<pre>uvx claude-fafm-sdk init</pre>
		<a class="cta" href="https://memory.faf.one" target="_blank" rel="noopener">Open memory.faf.one →</a>
		<p class="links">
			<a href="https://pypi.org/project/claude-fafm-sdk/" target="_blank" rel="noopener">PyPI</a> ·
			<a href="https://github.com/Wolfe-Jam/claude-fafm-sdk" target="_blank" rel="noopener">GitHub</a>
		</p>
	</section>

	<section class="content footer-section">
		<p class="footer-tagline">Nelly Never Forgets.</p>
		<p class="footer-iana">Permanent Memory. Instant Recall. · application/vnd.fafm+yaml</p>
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

	.nelly {
		display: block;
		margin: 0 auto 1rem;
		image-rendering: pixelated;
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

	.tagline .etched {
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

	.kicker .etched {
		color: var(--faf-orange);
		font-style: normal;
		font-weight: 700;
	}

	.kicker .pml-mark {
		font-style: normal;
		font-size: 0.85em;
		color: var(--faf-dark);
	}

	.sub {
		font-size: 1.1rem;
		color: var(--faf-dark);
	}

	.sub .so-you-can {
		color: var(--faf-orange);
		font-weight: 600;
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

	/* Links = dark-cyan (never blue — unreadable on dark). CTA stays orange/white. */
	.content a:not(.cta) {
		color: var(--faf-cyan-dark);
		text-decoration: underline;
	}

	.content a:not(.cta):hover {
		color: var(--faf-cyan);
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

	.cta {
		display: inline-block;
		margin-top: 1rem;
		padding: 0.9rem 1.75rem;
		background: var(--faf-orange);
		color: white;
		text-decoration: none;
		font-weight: 600;
		border-radius: 8px;
		font-size: 1.05rem;
		transition: transform 0.15s ease;
	}

	.cta:hover {
		transform: translateY(-1px);
	}

	.links {
		margin-top: 1rem;
		color: var(--faf-gray);
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
		.hero h1 {
			font-size: 1.8rem;
		}
	}
</style>
