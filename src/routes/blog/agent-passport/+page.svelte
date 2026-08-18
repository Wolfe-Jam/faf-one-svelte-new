<script lang="ts">
	import { buildShareIntent } from '$lib/shareIntent.js';

	const shareText = `Why agents need a passport.

.fafa — a declarative YAML passport for agent identity, now on Zenodo.

Who the agent is. What it may do. Where it's reached. What it must never do.

Help guide what we build —
Comments · suggestions welcome.`;
	const shareUrl = 'https://faf.one/blog/agent-passport';
	const xIntent = buildShareIntent({ text: shareText, url: shareUrl });

	const curlBlock = `curl https://faf.one/.well-known/fafa`;
</script>

<svelte:head>
	<title>Agent Passport Paper - .fafa Edition | FAF</title>
	<meta
		name="description"
		content="Why Agents Need a Passport: .fafa — Portable Identity for the Agentic Era is on Zenodo. A declarative YAML passport for agent identity, complementary to A2A Agent Cards, MCP Server Cards, and AGENTS.md."
	/>
	<meta property="og:title" content="Agent Passport Paper - .fafa Edition" />
	<meta
		property="og:description"
		content="A declarative passport for agent identity, now formally published. Complementary to A2A, MCP, and AGENTS.md — not a replacement."
	/>
	<meta property="og:type" content="article" />
	<meta property="og:url" content="https://faf.one/blog/agent-passport" />
	<meta property="og:image" content="https://faf.one/blog/agent-passport-hero.png" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Agent Passport Paper - .fafa Edition" />
	<meta
		name="twitter:description"
		content="A declarative passport for agent identity, now on Zenodo."
	/>
	<meta name="twitter:image" content="https://faf.one/blog/agent-passport-hero.png" />
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / Agent Passport Paper
		</div>
		<h1>Agent Passport Paper</h1>
		<p class="subtitle">Portable identity for the agentic era.</p>
		<div class="meta">
			<time datetime="2026-08-17">August 17, 2026</time>
			<span class="separator">•</span>
			<span class="category research">Research</span>
		</div>
	</header>

	<div class="hero-image">
		<img
			src="/blog/agent-passport-hero.png"
			alt="Why Agents Need a Passport — .fafa portable identity for the agentic era."
			width="1200"
			height="630"
			loading="eager"
			decoding="async"
		/>
	</div>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> <em>Why Agents Need a Passport: .fafa — Portable Identity for the
				Agentic Era</em> is now on Zenodo. It defines <code>.fafa</code> as a declarative YAML
				passport for agent identity — who an agent is, what it may do, where it's reached, and
				what it must never do.
			</p>
		</section>

		<section>
			<h2>The paper</h2>
			<p>
				Identity inferred from a prompt or assembled from a protocol card doesn't travel cleanly
				between hosts, sessions, and models. The paper's claim: an agent needs its own portable
				passport, separate from any single protocol's card format.
			</p>
			<ul>
				<li>The four questions a passport answers — who, may-do, reached-where, must-never</li>
				<li>Lifecycle: author → serve → discover → project</li>
				<li>Relationship to A2A Agent Cards, MCP Server Cards, and AGENTS.md</li>
				<li>Security posture: declaration is not authorization</li>
			</ul>
			<p>
				<code>.fafa</code> (<code>application/vnd.fafa+yaml</code>, IANA-registered June 2026)
				complements these existing surfaces. It does not replace them.
			</p>
		</section>

		<section>
			<h2>Read it</h2>
			<p>
				<a href="https://doi.org/10.5281/zenodo.21951641" target="_blank" rel="noopener"
					>DOI: 10.5281/zenodo.21951641</a
				>
				· CC BY 4.0 · FAF Foundation
			</p>
			<p>
				Companion Internet-Draft:
				<a
					href="https://datatracker.ietf.org/doc/draft-wolfe-faf-agent/"
					target="_blank"
					rel="noopener">draft-wolfe-faf-agent-01</a
				>
			</p>
		</section>

		<section>
			<h2>See it live</h2>
			<p>The passport this paper describes is already served, not just specified:</p>
			<pre><code>{curlBlock}</code></pre>
			<p>
				Content-Type <code>application/vnd.fafa+yaml</code>. Source of truth:
				<a href="https://github.com/Wolfe-Jam/faf-agent" target="_blank" rel="noopener"
					>github.com/Wolfe-Jam/faf-agent</a
				>.
			</p>
		</section>

		<section>
			<h2>Related</h2>
			<ul>
				<li>
					<a href="https://github.com/Wolfe-Jam/faf/blob/main/AGENT-FORMAT.md" target="_blank"
						rel="noopener">AGENT-FORMAT.md</a
					> — the spec
				</li>
				<li>
					<a href="https://www.iana.org/assignments/media-types/application/vnd.fafa+yaml"
						target="_blank" rel="noopener">application/vnd.fafa+yaml</a
					> — IANA registration
				</li>
				<li><a href="/blog/fafa-speaks-a2a">FAFA speaks A2A</a> — the live A2A door</li>
			</ul>
		</section>

		<section class="feedback-invite">
			<h2>Feedback welcome</h2>
			<p>Help guide what we build — comments · suggestions welcome.</p>
			<div class="feedback-actions">
				<a class="feedback-btn" href={xIntent} target="_blank" rel="noopener">Post on X</a>
			</div>
		</section>

		<section class="footer-note">
			<div class="paper-trilogy">
				<span class="trilogy-label">More FAF papers</span>
				<a href="/blog/zenodo-paper">.faf — Context Architecture</a>
				<a href="/blog/permanent-memory">.fafm — Permanent Memory</a>
			</div>
			<p>Built with .faf + .fafa ☑️ Declaration is not authorization.</p>
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
	.category.research {
		background: #4a90e2;
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

	.post-content p,
	.post-content li {
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

	.post-content code {
		background: #e5e5e5;
		color: #1a1a1a;
		padding: 0.12rem 0.4rem;
		border-radius: 4px;
		font-family: 'SF Mono', 'Fira Code', Menlo, monospace;
		font-size: 0.9em;
	}

	pre {
		background: #1a1a1a;
		color: #e8e8e8;
		padding: 1.1rem 1.2rem;
		border-radius: 8px;
		overflow-x: auto;
		line-height: 1.5;
	}
	pre code {
		background: none;
		color: #00ff88;
		padding: 0;
		font-size: 0.85rem;
		white-space: pre;
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

	.footer-note {
		margin-top: 2rem;
		padding-top: 1.5rem;
		border-top: 1px solid #e5e5e5;
		font-size: 0.95rem;
		color: #555;
	}

	.paper-trilogy {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 0.6rem 1rem;
		margin-bottom: 1rem;
		font-size: 0.9rem;
	}

	.trilogy-label {
		color: #555;
		font-weight: 600;
	}

	.paper-trilogy a {
		color: #ff6b35;
		text-decoration: none;
		font-weight: 600;
	}

	.paper-trilogy a:hover {
		text-decoration: underline;
	}

	@media (max-width: 768px) {
		h1 {
			font-size: 1.9rem;
		}
	}
</style>
