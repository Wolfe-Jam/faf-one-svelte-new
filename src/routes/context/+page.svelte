<svelte:head>
	<title>.faf — Foundational Context Layer</title>
	<meta name="description" content="Persistent project context for AI. The IANA-registered .faf format and the Claude Code plugin that ships it. Cross-vendor: works in Claude, Cursor, Grok, Gemini." />
	<link rel="icon" type="image/svg+xml" href="/orange-smiley.svg" />

	<!-- Open Graph -->
	<meta property="og:type" content="website" />
	<meta property="og:title" content=".faf — Foundational Context Layer" />
	<meta property="og:description" content="Persistent project context for AI. The IANA-registered .faf format and the Claude Code plugin that ships it." />
	<meta property="og:url" content="https://www.faf.one/context" />
	<meta property="og:image" content="https://www.faf.one/social-logo.png" />

	<!-- Twitter Card -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content=".faf — Foundational Context Layer" />
	<meta name="twitter:description" content="Persistent project context for AI. /plugin install faf — Claude Code." />
	<meta name="twitter:image" content="https://www.faf.one/social-logo.png" />
</svelte:head>

<main class="page">

	<section class="hero">
		<img class="smiley" src="/orange-smiley.svg" alt=".faf — the FAF smiley" width="72" height="72" />
		<h1>.faf</h1>
		<p class="sub">Foundational Context Layer — persistent project DNA</p>
	</section>

	<section class="content">
		<h2>What it is</h2>
		<p>The home of <code>.faf</code> — the IANA-registered context format — and the <strong>Claude Code plugin</strong> that brings it to your projects. A <code>.faf</code> captures your project's DNA (stack, goals, the 6 Ws) so Claude never has to ask <em>"what is this project?"</em> twice.</p>
		<p>One structured source renders to <code>CLAUDE.md</code>, <code>AGENTS.md</code>, <code>.cursorrules</code>, <code>GEMINI.md</code>. Define once, every AI reads consistent context.</p>
	</section>

	<section class="content">
		<h2>The plugin</h2>
		<pre>/plugin install faf</pre>
		<p>The plugin wraps <a href="https://www.npmjs.com/package/claude-faf-mcp" target="_blank" rel="noopener">claude-faf-mcp</a> — already listed in the official MCP Registry (PR <a href="https://github.com/modelcontextprotocol/servers/pull/2759" target="_blank" rel="noopener">#2759</a>, merged). Auto-detect your stack, score 0&ndash;100% (🏆 Trophy at 100%), and bi-sync <code>.faf</code> &harr; <code>CLAUDE.md</code>.</p>
		<p>Complementary to Anthropic's own <code>claude-md-management</code> plugin: <code>.faf</code> is the structured source that generates what <code>claude-md-management</code> maintains.</p>
	</section>

	<section class="content">
		<h2>Why it exists</h2>
		<p>Every AI session starts blank — you re-explain your project. <code>.faf</code> is a plain, structured, versionable file your project's DNA lives in. Read by Claude, Cursor, Grok, and Gemini alike. One format, never a fork.</p>
	</section>

	<section class="content">
		<h2>Receipts</h2>
		<ul class="receipts">
			<li><strong>IANA-registered</strong> &mdash; <code>application/vnd.faf+yaml</code> (October 30, 2025)</li>
			<li><strong>Companion paper</strong> &mdash; the .faf Context paper on Zenodo (DOI <a href="https://doi.org/10.5281/zenodo.18251362" target="_blank" rel="noopener">10.5281/zenodo.18251362</a>)</li>
			<li><strong><a href="https://www.npmjs.com/package/claude-faf-mcp" target="_blank" rel="noopener">claude-faf-mcp on npm</a></strong> &mdash; in the official MCP Registry; PR #2759 merged</li>
			<li><strong>Six FAF servers</strong> on the official MCP Registry (claude / grok / gemini / faf-mcp / rust-faf / WJTTC)</li>
			<li><strong>Sibling layer</strong> &mdash; <code>.fafm</code> Permanent Memory Layer &rarr; <a href="/memory">/memory</a></li>
		</ul>
	</section>

	<section class="content cta-section">
		<h2>Try it</h2>
		<pre>/plugin install faf</pre>
		<a class="cta" href="https://github.com/Wolfe-Jam/faf-plugin" target="_blank" rel="noopener">View the plugin on GitHub &rarr;</a>
		<p class="links">
			<a href="https://www.npmjs.com/package/claude-faf-mcp" target="_blank" rel="noopener">npm</a> &middot;
			<a href="https://github.com/Wolfe-Jam/faf-plugin" target="_blank" rel="noopener">Plugin</a> &middot;
			<a href="https://github.com/Wolfe-Jam/faf" target="_blank" rel="noopener">Spec</a> &middot;
			<a href="https://github.com/Wolfe-Jam/faf-cli" target="_blank" rel="noopener">CLI</a>
		</p>
	</section>

	<section class="content footer-section">
		<p class="footer-tagline">FAF defines. MD instructs. AI codes.</p>
		<p class="footer-iana">Foundational Context Layer &middot; application/vnd.faf+yaml</p>
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

	.smiley {
		display: block;
		margin: 0 auto 1rem;
	}

	.hero h1 {
		font-size: 2.2rem;
		font-weight: 800;
		color: var(--faf-black);
		margin-bottom: 0.5rem;
		font-family: var(--font-mono);
	}

	.sub {
		font-size: 1.1rem;
		color: var(--faf-dark);
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

	/* Links = dark cyan on light, brand cyan on dark. CTA stays orange. */
	.content a:not(.cta) {
		color: var(--faf-cyan-text);
		text-decoration: underline;
	}

	.content a:not(.cta):hover {
		color: var(--faf-cyan-dark);
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
		color: var(--faf-dark);
		font-size: 0.95rem;
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
		color: var(--faf-dark);
		margin-top: 0.5rem;
	}

	@media (max-width: 768px) {
		.hero h1 {
			font-size: 1.8rem;
		}
	}
</style>
