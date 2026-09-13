<!-- pubblog — show / tell / explainer on the matching-client spine.
     rust-faf-mcp 0.8.0 The Lineage Edition + a call for a select few FAFb 0.9 drivers. -->
<script lang="ts">
	import { buildShareIntent } from '$lib/shareIntent.js';
	// Cloudflare Scrape Shield mangles package@version as "email" — always use NpmPkg in HTML.
	import NpmPkg from '$lib/NpmPkg.svelte';

	const shareText = `🏁 Just shipped: rust-faf-mcp v0.8.0 — The Lineage Edition

Your AI-context score now has a birth certificate — and a journey.

One .faf-dna file across faf-cli, FAFb and rust-faf-mcp.
67% → 83%: grown by two tools, read the same by both.

Building on faf-cli: FAFb, the full Rust version, is for teams. Help us finish the launch — a select few devs to drive 0.9.

npx --yes rust-faf-mcp@0.8.0

Help guide what we build —
Comments · suggestions · shares welcome.`;
	const shareUrl = 'https://faf.one/blog/lineage-edition';
	const xIntent = buildShareIntent({ text: shareText, url: shareUrl });
</script>

<svelte:head>
	<title>The Lineage Edition - rust-faf-mcp v0.8.0 | FAF</title>
	<meta
		name="description"
		content=".faf-dna lineage, the same file as faf-cli and fafb: faf_init births it, faf_auto grows it, faf_dna shows the journey. fafb scores all 33 slots for monorepos and teams."
	/>
	<meta property="og:title" content="The Lineage Edition - rust-faf-mcp v0.8.0" />
	<meta
		property="og:description"
		content="One .faf-dna across faf-cli, FAFb and rust-faf-mcp. Building on faf-cli, FAFb is the full Rust version, for teams: help us finish the launch."
	/>
	<meta property="og:type" content="article" />
	<meta property="og:url" content="https://faf.one/blog/lineage-edition" />
	<meta property="og:site_name" content=".faf Format Authority" />
	<meta property="og:image" content="https://faf.one/blog/lineage-edition-hero.png" />
	<meta property="og:image:secure_url" content="https://faf.one/blog/lineage-edition-hero.png" />
	<meta property="og:image:type" content="image/png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta
		property="og:image:alt"
		content="The Lineage Edition — rust-faf-mcp v0.8.0 · faf dna: 67% → 83%"
	/>
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@fafformat" />
	<meta name="twitter:creator" content="@wolfe_jam" />
	<meta name="twitter:title" content="The Lineage Edition - rust-faf-mcp v0.8.0" />
	<meta
		name="twitter:description"
		content="One .faf-dna across faf-cli, FAFb and rust-faf-mcp. Building on faf-cli, FAFb is the full Rust version, for teams: help us finish the launch."
	/>
	<meta name="twitter:image" content="https://faf.one/blog/lineage-edition-hero.png" />
	<meta
		name="twitter:image:alt"
		content="The Lineage Edition — rust-faf-mcp v0.8.0 · faf dna: 67% → 83%"
	/>
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / The Lineage Edition
		</div>
		<h1>The Lineage Edition</h1>
		<p class="version-tag">rust-faf-mcp v0.8.0 · faf-cli · FAFb 0.9</p>
		<p class="subtitle">
			<code>.faf-dna</code> lineage, the same file as faf-cli and fafb: <code>faf_init</code> births
			it, <code>faf_auto</code> grows it, <code>faf_dna</code> shows the journey. fafb scores all 33
			slots for monorepos and teams.
		</p>
		<div class="meta">
			<time datetime="2026-09-13">September 13, 2026</time>
			<span class="separator">•</span>
			<span class="category interop">Interop</span>
		</div>
	</header>

	<div class="hero-image">
		<img
			src="/blog/lineage-edition-hero.png"
			alt="The Lineage Edition — rust-faf-mcp v0.8.0 · faf dna: 67% → 83%"
			width="1200"
			height="630"
			loading="eager"
			decoding="async"
		/>
	</div>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> your project's AI-context score now has a birth certificate and a
				journey, in one <code>.faf-dna</code> file that faf-cli, FAFb and rust-faf-mcp all read and
				grow. rust-faf-mcp 0.8.0 adds <code>faf_dna</code> (12 tools). And building on the success of
				faf-cli, FAFb is the full Rust version, for teams. Help us finish the launch.
			</p>
			<div class="lead plain-english">
				<p class="plain-label">In Plain English</p>
				<p>
					<strong>Old state.</strong> faf-cli kept your project's lineage: the first score, every step
					up, the journey. The Rust tools didn't. Switch from faf-cli to FAFb or rust-faf-mcp, and the
					story stopped.
				</p>
				<p>
					<strong>Fix.</strong> One file, one format (<code>faf-dna-v1</code>), written byte for byte
					the same by all three. Each tool adds to a lineage the others wrote. A file none of them wrote
					is read and left as it is.
				</p>
				<p>
					<strong>New state.</strong> Start the lineage in any tool, grow it in any tool, and read the
					same journey in every tool.
				</p>
			</div>
			<div class="terminal-block">
				<code>cargo install rust-faf-mcp --version 0.8.0</code>
			</div>
			<p class="muted-note">
				<strong>Cargo is the install.</strong> The first hit compiles the Rust deps once. To try it
				without a Rust toolchain, point your MCP client at
				<code>npx --yes <NpmPkg name="rust-faf-mcp" version="0.8.0" /></code>.
			</p>
		</section>

		<section>
			<h2>One lineage, three tools</h2>
			<p>We ran it on a copy of a real repo, passing the same <code>.faf-dna</code> between tools:</p>
			<ul>
				<li>
					faf-cli <code>faf init</code> wrote <code>project.faf</code> and its birth certificate:
					<strong>67%</strong>.
				</li>
				<li>
					We filled a W (<code>why</code>). rust-faf-mcp <code>faf_auto</code> recorded the growth:
					<strong>75%</strong>.
				</li>
				<li>
					We filled another (<code>who</code>). faf-cli <code>faf auto</code> recorded it again:
					<strong>83%</strong>.
				</li>
			</ul>
			<p>Then faf-cli <code>faf dna</code> and rust-faf-mcp <code>faf_dna</code> printed the same lines:</p>
			<div class="terminal-block">
				<code>67% → 83%</code>
				<code>Birth DNA 67% (born 2026-09-13) · current 83% · growth +16%</code>
			</div>
			<p class="muted-note">FAFb reads and grows the same file too (0.9.4, <code>faf dna</code>).</p>
		</section>

		<section>
			<h2>Why a lineage</h2>
			<p>
				The birth certificate is the honest first score, even 0%. Growth from there is the
				demonstrated value of FAF: every version records its score, what changed, and when.
			</p>
			<p>
				It stays honest. Growth never touches the birth certificate: each new score is added as a new
				version, and the first score stays. And a tool only adds to a <code>.faf-dna</code> it can
				prove it wrote. Anything else it reads, leaves alone, and says why.
			</p>
		</section>

		<section>
			<h2>21 slots, 33 slots</h2>
			<p>
				faf-cli scores 21 slots. Free forever, MIT, and it never has to think about monorepos.
			</p>
			<p>
				FAFb runs every faf-cli app-type, plus app-types up to 33 slots for monorepos and teams. For
				any app-type of 21 slots or fewer, the score is the same in both.
			</p>
			<ul>
				<li><strong>Free forever:</strong> FAF-CLI · workshop · MIT · 21 slots.</li>
				<li><strong>This product:</strong> FAFb · cartridge · compiler · not free · 33 slots.</li>
			</ul>
			<p>
				FAFb also compiles <code>.faf</code> to a <code>.fafb</code> ROM. Compiler and CLI are two
				forms, not a ranking.
			</p>
		</section>

		<section class="drive-invite">
			<h2>Help us finish the launch</h2>
			<p>
				Building on the success of faf-cli, FAFb is the full Rust version, for teams. 1.0.0 is next:
				the launch. This is the final stretch.
			</p>
			<p>
				We're asking a select few devs to drive 0.9 for an hour on their own repo, and answer the same
				questions, so we can compare.
			</p>
			<ul>
				<li>A real project this month. A monorepo or team repo is a plus.</li>
				<li>Comfortable in a terminal (macOS, Linux or Windows).</li>
				<li>A blunt, honest hour.</li>
			</ul>
			<p>
				Request a drive and a password comes by email. One line installs it, no Rust toolchain
				needed. The 14-day Pro trial starts on first gated use. No card.
			</p>
			<div class="feedback-actions">
				<a href="/fafb-drive" class="feedback-btn">Request a drive</a>
			</div>
		</section>

		<section>
			<h2>Try the lineage</h2>
			<p><strong>faf-cli</strong> (free, MIT):</p>
			<div class="terminal-block">
				<code>npx faf-cli init</code>
				<code>npx faf-cli dna</code>
			</div>
			<p><strong>rust-faf-mcp</strong> (any MCP client, e.g. Claude Code):</p>
			<div class="terminal-block">
				<code>claude mcp add faf -- npx --yes <NpmPkg name="rust-faf-mcp" version="0.8.0" /></code>
			</div>
			<p class="muted-note">
				<code>faf_init</code> births the lineage · <code>faf_auto</code> grows it ·
				<code>faf_dna</code> shows it.
				<a href="https://github.com/Wolfe-Jam/rust-faf-mcp" target="_blank" rel="noopener">Repo</a>.
			</p>
		</section>

		<section>
			<h2>Technical details</h2>
			<ul>
				<li><strong>Version:</strong> rust-faf-mcp 0.8.0 (September 13, 2026), The Lineage Edition</li>
				<li><strong>Tools:</strong> 12, with the new <code>faf_dna</code></li>
				<li><strong>Identity:</strong> <code>one.faf/rust-faf-mcp</code> (MCP Registry)</li>
				<li><strong>Packages:</strong> crates.io and npm (same version) · Homebrew</li>
				<li>
					<strong>Format:</strong> <code>faf-dna-v1</code>, the same JSON as faf-cli, byte for byte
				</li>
				<li><strong>Also:</strong> faf-cli <code>faf dna</code> · FAFb 0.9.4 <code>faf dna</code></li>
			</ul>
		</section>

		<section class="feedback-invite">
			<h2>Feedback welcome</h2>
			<p>Questions, nits, suggestions — guide the next version. Tell us what you want to see.</p>
			<div class="feedback-actions">
				<a href={xIntent} target="_blank" rel="noopener" class="feedback-btn">Post on X</a>
				<a
					href="https://github.com/Wolfe-Jam/rust-faf-mcp/issues/new"
					target="_blank"
					rel="noopener"
					class="feedback-btn secondary"
				>
					Tell us on GitHub
				</a>
			</div>
		</section>

		<section class="footer-note">
			<p>Built with .faf ☑️ One lineage, three tools. 🏎️</p>
		</section>
	</article>
</div>

<style>
	:global(body) {
		background: #fefcf8;
	}

	.blog-post {
		max-width: 760px;
		margin: 0 auto;
		padding: 2rem 1rem 4rem;
		color: #1a1a1a;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
		line-height: 1.7;
	}

	.post-header {
		margin-bottom: 2rem;
	}

	.breadcrumb {
		font-size: 0.85rem;
		margin-bottom: 1.5rem;
		color: #333;
	}
	.breadcrumb a {
		color: #00d4d4;
		text-decoration: none;
		font-weight: 600;
	}
	.breadcrumb a:hover {
		text-decoration: underline;
	}

	h1 {
		font-size: 2.4rem;
		font-weight: 800;
		margin: 0 0 0.5rem;
		color: #1a1a1a;
		letter-spacing: -0.02em;
	}

	.version-tag {
		color: #1a1a1a;
		font-weight: 700;
		font-size: 1rem;
		margin: 0 0 0.5rem;
	}

	.subtitle {
		font-size: 1.2rem;
		font-weight: 500;
		margin: 0 0 1rem;
		color: #1a1a1a;
	}
	.subtitle code {
		background: #e5e5e5;
		color: #1a1a1a;
		padding: 0.12rem 0.4rem;
		border-radius: 4px;
		font-family: 'SF Mono', 'Fira Code', Menlo, monospace;
		font-size: 0.9em;
	}

	.meta {
		font-size: 0.9rem;
		color: #333;
		display: flex;
		align-items: center;
		gap: 0.6rem;
	}
	.separator {
		color: #1a1a1a;
	}
	.category {
		padding: 0.2rem 0.7rem;
		border-radius: 999px;
		font-size: 0.78rem;
		font-weight: 700;
		color: #fff;
	}
	.category.interop {
		background: #7d3c98;
	}

	.hero-image {
		margin: 0 0 2.5rem;
		border-radius: 12px;
		overflow: hidden;
	}
	.hero-image img {
		width: 100%;
		height: auto;
		display: block;
	}

	.post-content section {
		margin-bottom: 2.5rem;
	}

	h2 {
		font-size: 1.7rem;
		font-weight: 700;
		margin: 0 0 1rem;
		color: #1a1a1a;
		letter-spacing: -0.01em;
	}

	.post-content p {
		margin: 0 0 1rem;
		color: #1a1a1a;
	}
	.post-content a {
		color: #ff6b35;
		font-weight: 600;
		text-decoration: none;
	}
	.post-content a:hover {
		text-decoration: underline;
	}

	.lead {
		font-size: 1.15rem;
		padding: 1.25rem 1.35rem;
		background: #f7f5f0;
		border-radius: 8px;
		border-left: 4px solid #ff6b35;
	}

	.intro .lead + .lead {
		margin-top: 1rem;
	}
	.lead .plain-label {
		margin: 0 0 0.85rem;
		font-size: 0.82rem;
		font-weight: 800;
		letter-spacing: 0.06em;
		text-transform: uppercase;
		color: #8b5a2b;
	}
	.plain-english p {
		margin: 0 0 0.85rem;
	}
	.plain-english p:last-child {
		margin-bottom: 0;
	}

	.post-content ul {
		padding-left: 1.2rem;
		margin: 0 0 1rem;
	}
	.post-content li {
		margin-bottom: 0.65rem;
		color: #1a1a1a;
	}

	.post-content code {
		background: #e5e5e5;
		color: #1a1a1a;
		padding: 0.12rem 0.4rem;
		border-radius: 4px;
		font-family: 'SF Mono', 'Fira Code', Menlo, monospace;
		font-size: 0.9em;
	}

	.muted-note {
		font-size: 0.9rem;
		color: #555;
	}

	.terminal-block {
		background: #1a1a1a;
		border-radius: 8px;
		padding: 1rem 1.25rem;
		margin: 1.25rem 0;
		display: flex;
		flex-direction: column;
		gap: 0.4rem;
	}
	.terminal-block code {
		background: transparent;
		color: #00ff88;
		padding: 0;
		font-family: 'SF Mono', 'Fira Code', Menlo, monospace;
		font-size: 0.95rem;
	}

	.drive-invite {
		padding: 1.5rem 1.35rem;
		background: #f7f5f0;
		border-radius: 10px;
		border-left: 4px solid #ff6b35;
	}
	.drive-invite h2 {
		margin-top: 0;
	}

	.feedback-invite {
		margin-top: 1rem;
		padding: 1.5rem 1.35rem;
		background: #f7f5f0;
		border-radius: 10px;
		border-left: 4px solid #00d4d4;
	}
	.feedback-invite h2 {
		margin-top: 0;
	}
	.feedback-invite p {
		margin-bottom: 1.15rem;
	}
	.feedback-actions {
		display: flex;
		flex-wrap: wrap;
		gap: 0.65rem;
	}
	.feedback-btn {
		display: inline-flex;
		align-items: center;
		padding: 0.65rem 1.2rem;
		border-radius: 6px;
		font-size: 0.92rem;
		font-weight: 700;
		text-decoration: none;
		background: #1a1a1a;
		color: #fff !important;
	}
	.feedback-btn:hover {
		background: #000;
		text-decoration: none !important;
	}
	.feedback-btn.secondary {
		background: transparent;
		color: #1a1a1a !important;
		border: 2px solid #1a1a1a;
	}
	.feedback-btn.secondary:hover {
		background: #1a1a1a;
		color: #fff !important;
		text-decoration: none !important;
	}

	.footer-note {
		margin-top: 2rem;
		padding-top: 1.5rem;
		border-top: 1px solid #e5e5e5;
		font-size: 0.95rem;
		color: #555;
	}
</style>
