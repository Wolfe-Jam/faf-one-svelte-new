<!-- pubblog GOLD — default Release model. Locked 2026-08-19. Copy this file.
     ~/.claude/skills/pubblog/references/release-matching-client.md -->
<script lang="ts">
	import { buildShareIntent } from '$lib/shareIntent.js';

	const shareText = `🏁 Just shipped: mcp-better v0.5.0 — matching client completes MRTR

The peer is two-sided. 0.4.3 proved the server can pause; this cut is the client that resumes.

health → echo → confirm_echo · mrtr-client
Cargo is the install · npx is try

cargo install mcp-better --version 0.5.0

Help guide what we build —
Comments · suggestions · shares welcome.`;
	const shareUrl = 'https://faf.one/blog/mcp-better-matching-client';
	const xIntent = buildShareIntent({ text: shareText, url: shareUrl });
</script>

<svelte:head>
	<title>Matching client completes MRTR - mcp-better v0.5.0 | FAF</title>
	<meta
		name="description"
		content="The peer is two-sided. 0.4.3 proved the server can pause; this cut is the client that resumes. mcp-better v0.5.0 — matching client completes MRTR."
	/>
	<meta property="og:title" content="Matching client completes MRTR - mcp-better v0.5.0" />
	<meta
		property="og:description"
		content="The peer is two-sided. 0.4.3 proved the server can pause; this cut is the client that resumes."
	/>
	<meta property="og:type" content="article" />
	<meta property="og:url" content="https://faf.one/blog/mcp-better-matching-client" />
	<meta property="og:site_name" content=".faf Format Authority" />
	<meta property="og:image" content="https://faf.one/blog/mcp-better-matching-client-hero.png" />
	<meta
		property="og:image:secure_url"
		content="https://faf.one/blog/mcp-better-matching-client-hero.png"
	/>
	<meta property="og:image:type" content="image/png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta
		property="og:image:alt"
		content="Matching client — mcp-better v0.5.0 · the peer is two-sided"
	/>
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@fafformat" />
	<meta name="twitter:creator" content="@wolfe_jam" />
	<meta name="twitter:title" content="Matching client completes MRTR - mcp-better v0.5.0" />
	<meta
		name="twitter:description"
		content="The peer is two-sided. 0.4.3 proved the server can pause; this cut is the client that resumes."
	/>
	<meta name="twitter:image" content="https://faf.one/blog/mcp-better-matching-client-hero.png" />
	<meta
		name="twitter:image:alt"
		content="Matching client — mcp-better v0.5.0 · the peer is two-sided"
	/>
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / Matching client
		</div>
		<h1>Matching client completes MRTR</h1>
		<p class="version-tag">mcp-better v0.5.0 · BETTER textbook · 7/28</p>
		<p class="subtitle">The peer is two-sided.</p>
		<div class="meta">
			<time datetime="2026-08-18">August 18, 2026</time>
			<span class="separator">•</span>
			<span class="category release">Release</span>
		</div>
	</header>

	<div class="hero-image">
		<img
			src="/blog/mcp-better-matching-client-hero.png"
			alt="Matching client — mcp-better v0.5.0 · the peer is two-sided"
			width="1200"
			height="630"
			loading="eager"
			decoding="async"
		/>
	</div>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> matching client completes MRTR. 0.4.3 proved the server can pause;
				this cut is the client that resumes. Same three tools —
				<code>health</code> → <code>echo</code> → <code>confirm_echo</code>. Cargo is the install.
				<code>npx</code> is try.
			</p>
			<div class="lead plain-english">
				<p class="plain-label">In Plain English</p>
				<p>
					<strong>Old state.</strong> The server could stop mid-call and ask “do you mean it?”
					The textbook listed a client. That client never finished the confirm. Half a handshake.
				</p>
				<p>
					<strong>Fix.</strong> A tiny matching client. It sees the pause, sends
					<code>CONFIRM</code> with the sealed state, and completes — or it refuses a wrong
					confirm and a tampered state.
				</p>
				<p>
					<strong>New state.</strong> The peer is two-sided. Run
					<code>mrtr-client</code> against live 0.5.0 and the retry is on the wire.
				</p>
			</div>
			<div class="terminal-block">
				<code>cargo install mcp-better --version 0.5.0</code>
				<code>mcp-better --help</code>
			</div>
			<p class="muted-note">
				<strong>We are Cargo.</strong> That is the install. First hit compiles Rust deps once (often
				100+ units — not 100 tools of ours). One lived first-hit on this cut: 6 minutes 02 seconds.
				Then the binary is instant. To skip the compile, <strong>try</strong> with
				<code>npx mcp-better</code> — that is not the install. We do not offer
				<code>npm install</code>.
			</p>
		</section>

		<section>
			<h2>What happened since Dual Package</h2>
			<p>
				One blog, one arc — no post per patch. Last write-up was
				<a href="/blog/mcp-better-dual-package">v0.4.2 Dual Package</a>. Short tour to today:
			</p>
			<ul>
				<li>
					<strong>0.4.3</strong> — server half: <code>confirm_echo</code> (MRTR) + optional Agent
					Skills. Not a blog.
				</li>
				<li>
					<strong>0.4.4</strong> — honesty: the book names the catalog that already shipped. No
					new tool. Not tagged.
				</li>
				<li>
					<strong>0.5.0</strong> — matching client completes MRTR. This is the log entry for the
					stretch.
				</li>
			</ul>
			<p>
				Still <strong>7/28</strong>. Still identity
				<code>io.github.Wolfe-Jam/mcp-better</code>. Still no fourth tool.
			</p>
		</section>

		<section>
			<h2>What 0.5.0 is</h2>
			<p>
				<strong>Lesson:</strong> the peer is two-sided. 0.4.3 proved the server can pause; this cut
				is the client that resumes.
			</p>
			<p>
				<code>mrtr-client</code> negotiates Discover <code>2026-07-28</code>, calls
				<code>confirm_echo</code>, takes R1 <code>input_required</code>, echoes the sealed
				<code>requestState</code> with <code>CONFIRM</code>, and completes. Wrong confirm text
				fails. Tampered state fails. The retry stays visible
				(<code>call_tool_once</code>, not a silent auto-retry).
			</p>
			<div class="terminal-block">
				<code>git clone https://github.com/Wolfe-Jam/mcp-better.git</code>
				<code>cd mcp-better</code>
				<code>MCP_BETTER_BIN="$(pwd)/target/debug/mcp-better" cargo run --example mrtr-client</code>
			</div>
			<p class="muted-note">
				The example lives in the tree. Install from crates.io is the binary; the matching client is
				the lesson you run from source.
			</p>
		</section>

		<section>
			<h2>Try it</h2>
			<p><strong>Install</strong> (Cargo):</p>
			<div class="terminal-block">
				<code>cargo install mcp-better --version 0.5.0</code>
				<code>mcp-better --help</code>
			</div>
			<p><strong>Try</strong> (no Rust toolchain — not the install):</p>
			<div class="terminal-block">
				<code>npx mcp-better --help</code>
			</div>
			<p class="muted-note">
				More depth:
				<a href="/blog/mcp-better-dual-package">Dual Package (v0.4.2)</a>
				·
				<a href="/blog/mcp-better">origin (v0.2)</a>
				·
				<a
					href="https://github.com/Wolfe-Jam/mcp-better/blob/v0.5.0/docs/MRTR-CONFIRM-ECHO.md"
					target="_blank"
					rel="noopener">MRTR confirm_echo</a
				>
				·
				<a
					href="https://github.com/Wolfe-Jam/mcp-better"
					target="_blank"
					rel="noopener">repo</a
				>.
			</p>
		</section>

		<section>
			<h2>Technical details</h2>
			<ul>
				<li><strong>Version:</strong> 0.5.0 (August 18, 2026)</li>
				<li><strong>Protocol:</strong> 2026-07-28 (7/28)</li>
				<li><strong>Identity:</strong> <code>io.github.Wolfe-Jam/mcp-better</code></li>
				<li><strong>Packages:</strong> crates.io + npm shim (same version). Cargo is the install.</li>
				<li>
					<strong>Tools:</strong> <code>health</code> → <code>echo</code> →
					<code>confirm_echo</code> (no fourth tool)
				</li>
				<li>
					<strong>Lesson:</strong> example <code>mrtr-client</code> completes the confirm
				</li>
				<li><strong>Transports:</strong> stdio default · <code>--http</code> local demo only</li>
				<li>
					<strong>Ladder:</strong> NONE | GOOD | <strong>[BETTER]</strong> | BEST — textbook for
					<strong>AGENTS.md</strong>
				</li>
			</ul>
		</section>

		<section class="feedback-invite">
			<h2>Feedback welcome</h2>
			<p>Questions, nits, suggestions — guide the next version. Tell us what you want to see.</p>
			<div class="feedback-actions">
				<a href={xIntent} target="_blank" rel="noopener" class="feedback-btn">Post on X</a>
				<a
					href="https://github.com/Wolfe-Jam/mcp-better/issues/new"
					target="_blank"
					rel="noopener"
					class="feedback-btn secondary"
				>
					Tell us on GitHub
				</a>
			</div>
		</section>

		<section class="footer-note">
			<p>Built with .faf ☑️ The peer is two-sided. 🏎️</p>
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
	.category.release {
		background: #00b8b8;
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
