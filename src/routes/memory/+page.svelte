<script>
	import PageActions from '$lib/components/PageActions.svelte';
</script>

<svelte:head>
	<title>PM.IR. · etch and forget · .fafm discovery</title>
	<meta
		name="description"
		content="PM.IR. — Permanent Memory. Instant Recall. .fafm maps it. One format. Two edges. One Soul. etch and forget. Nelly Never Forgets (so you can!)."
	/>
	<link rel="icon" type="image/svg+xml" href="/nelly.svg" />

	<!-- Open Graph -->
	<meta property="og:type" content="website" />
	<meta property="og:title" content="PM.IR. · etch and forget · .fafm discovery" />
	<meta
		property="og:description"
		content="Permanent Memory. Instant Recall. .fafm maps it. Knowledge + voice. Nelly Never Forgets (so you can!)."
	/>
	<meta property="og:url" content="https://faf.one/memory" />
	<meta property="og:image" content="https://memory.faf.one/nelly-og.png" />

	<!-- Twitter Card -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="PM.IR. · etch and forget · .fafm discovery" />
	<meta
		name="twitter:description"
		content="Permanent Memory. Instant Recall. .fafm maps it. One format. Two edges. One Soul."
	/>
	<meta name="twitter:image" content="https://memory.faf.one/nelly-og.png" />
</svelte:head>

<main class="page">

	<section class="hero">
		<img class="nelly" src="/nelly.svg" alt="Nelly — pixel origin, early faf-cli" width="72" height="72" />
		<h1>memory.faf.one</h1>
		<p class="tagline"><span class="etched">etch</span> and forget</p>
		<p class="kicker">
			<strong>PM.IR.</strong> — Permanent Memory. Instant Recall.
		</p>
		<p class="sub">
			<code>.fafm</code> maps it. One format. Two edges. One Soul.
			<br />
			Nelly Never Forgets <span class="so-you-can">(so you can!)</span>
		</p>
	</section>

	<section class="content">
		<h2>What it is</h2>
		<p>
			Discovery home for <code>.fafm</code> — the IANA-registered memory format — on
			<strong>faf.one</strong>. Portable AI memory that versions with your project and moves between
			models instead of being locked to one vendor.
		</p>
		<p>
			The local <code>Soul</code> works offline with no account. Connect a
			<strong>free namepoint</strong> when you want hosted, full-intel recall at personal scale.
			<strong>Technical home for devs:</strong>
			<a href="https://memory.faf.one" target="_blank" rel="noopener">memory.faf.one</a>.
		</p>
	</section>

	<section class="content">
		<h2>Two profiles, one format</h2>
		<p>
			Same soul file. Two edges — knowledge and voice.
		</p>
		<p><strong>Voice — the Voice Memory Layer (VML).</strong> Durable memory for voice agents, so the assistant remembers you across calls. Reference: <a href="https://pypi.org/project/grok-faf-voice/" target="_blank" rel="noopener">grok-faf-voice</a>.</p>
		<p><strong>Knowledge.</strong> Typed, cross-linked memory for agent runtimes like Claude Code. Reference: <a href="https://pypi.org/project/claude-fafm-sdk/" target="_blank" rel="noopener">claude-fafm-sdk</a> · Compactable 2.0.</p>
	</section>

	<section class="content">
		<h2>Why it exists</h2>
		<p>
			Every AI session starts from zero, and what memory exists is often trapped in one vendor's
			walled garden. Memory is vast — humans need to remember and forget. <code>.fafm</code> maps
			both: a plain, open, versionable soul readable by Grok, Claude, and Gemini. One format. Never
			a fork.
		</p>
	</section>

	<section class="content">
		<h2>Receipts</h2>
		<ul class="receipts">
			<li><strong>IANA-registered</strong> — <code>application/vnd.fafm+yaml</code> (May 13, 2026)</li>
			<li>
				<strong
					><a href="https://pypi.org/project/claude-fafm-sdk/" target="_blank" rel="noopener"
						>claude-fafm-sdk on PyPI</a
					></strong
				>
				— Compactable 2.0, MIT, offline-first ·
				<a href="/blog/compactable-memory">Compactable</a> ·
				<a href="/blog/forgettable-memory">Forgettable</a>
			</li>
			<li><strong>Cross-vendor verified</strong> — one client read grok / claude / gemini souls live over the same protocol</li>
			<li><strong>Hosted backend live</strong> — <code>memory.faf.one/mcp</code> (<code>get_soul</code> / <code>write_soul</code>)</li>
			<li>
				<strong>Thesis</strong> —
				<a href="/blog/memory-is-vast">Memory is vast</a> ·
				<a href="/blog/permanent-memory-instant-recall">PM.IR.</a> —
				Permanent Memory. Instant Recall.
			</li>
			<li>
				<strong>Memory paper</strong> — Zenodo
				<a href="https://doi.org/10.5281/zenodo.20348942" target="_blank" rel="noopener"
					>10.5281/zenodo.20348942</a
				>
			</li>
		</ul>
	</section>

	<section class="content cta-section">
		<h2>Try it</h2>
		<pre>uvx claude-fafm-sdk init</pre>
		<a class="cta" href="https://memory.faf.one" target="_blank" rel="noopener">Open memory.faf.one →</a>
		<p class="links">
			<a href="https://pypi.org/project/claude-fafm-sdk/" target="_blank" rel="noopener">PyPI</a> ·
			<a href="https://github.com/Wolfe-Jam/claude-fafm-sdk" target="_blank" rel="noopener">GitHub</a> ·
			<a href="/blog/memory-is-vast">Memory is vast</a>
		</p>
		<PageActions
			headline="🏁 PM.IR. — Permanent Memory. Instant Recall."
			point1=".fafm maps it. One format. Two edges. One Soul."
			point2="etch and forget · Nelly Never Forgets (so you can!)"
			cta=""
			url="https://faf.one/memory"
			hashtags=""
		/>
	</section>

	<section class="content footer-section">
		<!-- History: pixel hero above → landed mark here (early faf-cli → brand now) -->
		<img class="nelly-mark" src="/nelly-mark.png" alt="Nelly — landed .fafm mark" width="96" height="84" />
		<p class="footer-tagline">Nelly Never Forgets.</p>
		<p class="footer-iana">PM.IR. — Permanent Memory. Instant Recall. · application/vnd.fafm+yaml</p>
		<p class="footer-iana" style="margin-top: 0.35rem">
			Technical home: <a href="https://memory.faf.one" target="_blank" rel="noopener">memory.faf.one</a>
		</p>
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
		color: var(--faf-cyan-text);
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

	.nelly-mark {
		width: 96px;
		height: auto;
		display: block;
		margin: 0 auto 1.25rem auto;
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
