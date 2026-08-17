<script lang="ts">
	import { buildShareIntent } from '$lib/shareIntent.js';

	const shareText = `FAFA speaks A2A.

A live Agent Card. A working JSON-RPC door.

GET https://faf.one/.well-known/agent-card.json

#AAIF #A2A

Help guide what we build —
Comments · suggestions welcome.`;
	const shareUrl = 'https://faf.one/blog/fafa-speaks-a2a';
	const xIntent = buildShareIntent({ text: shareText, url: shareUrl });

	const curlBlock = `curl https://faf.one/.well-known/agent-card.json

curl -X POST https://faf-voice.vercel.app/api/a2a \\
  -H 'Content-Type: application/json' \\
  -d '{"jsonrpc":"2.0","id":"1","method":"message/send",
       "params":{"message":{"messageId":"m1","role":"user",
         "parts":[{"kind":"text","text":"What is .faf?"}]}}}'`;
</script>

<svelte:head>
	<title>FAFA speaks A2A | FAF</title>
	<meta
		name="description"
		content="FAFA is a live A2A peer. Agent Card on the apex. JSON-RPC message/send on the door. Complementary — we don't replace the card."
	/>
	<meta property="og:title" content="FAFA speaks A2A" />
	<meta
		property="og:description"
		content="A live Agent Card. A working door. Complementary to A2A."
	/>
	<meta property="og:type" content="article" />
	<meta property="og:url" content="https://faf.one/blog/fafa-speaks-a2a" />
	<meta property="og:image" content="https://faf.one/blog/fafa-speaks-a2a-hero.png" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="FAFA speaks A2A" />
	<meta
		name="twitter:description"
		content="A live Agent Card. A working JSON-RPC door."
	/>
	<meta name="twitter:image" content="https://faf.one/blog/fafa-speaks-a2a-hero.png" />
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / FAFA speaks A2A
		</div>
		<h1>FAFA speaks A2A</h1>
		<p class="subtitle">A live Agent Card. A working door.</p>
		<div class="meta">
			<time datetime="2026-08-17">August 17, 2026</time>
			<span class="separator">•</span>
			<span class="category interop">Interop</span>
		</div>
	</header>

	<div class="hero-image">
		<img
			src="/blog/fafa-speaks-a2a-hero.png"
			alt="FAFA speaks A2A — live Agent Card, JSON-RPC 1.0 door."
			width="1200"
			height="630"
			loading="eager"
			decoding="async"
		/>
	</div>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> FAFA — the Voice of FAF — is a live A2A peer. Protocol 1.0.
				JSON-RPC <code>message/send</code>. Complementary. We do not replace the card.
			</p>
		</section>

		<section>
			<h2>What it is</h2>
			<p>
				An independent agent other agents can discover and call. The Agent Card is at the spec
				path on this host. The door is JSON-RPC 1.0. A human page sits in front for anyone who
				would rather read than curl.
			</p>
			<ul>
				<li>
					<strong>Card</strong> —
					<a href="https://faf.one/.well-known/agent-card.json"
						>https://faf.one/.well-known/agent-card.json</a
					>
				</li>
				<li>
					<strong>Door</strong> —
					<a href="https://faf-voice.vercel.app/api/a2a"
						>https://faf-voice.vercel.app/api/a2a</a
					>
				</li>
				<li>
					<strong>Page</strong> — <a href="/agent">faf.one/agent</a>
				</li>
			</ul>
			<p>
				The card resolves. <code>message/send</code> returns a message with
				<code>messageId</code> and <code>contextId</code>.
			</p>
		</section>

		<section>
			<h2>How to call it</h2>
			<pre><code>{curlBlock}</code></pre>
		</section>

		<section>
			<h2>Complementary</h2>
			<p>
				<strong>MCP equips. A2A delegates.</strong> FAFA uses both doors. The project DNA stays
				in <code>project.faf</code>. The passport is <code>.fafa</code>. The A2A card is how a
				peer finds the voice.
			</p>
			<p>
				IANA registration (<code>application/vnd.fafa+yaml</code>,
				<code>application/vnd.faf+yaml</code>) is the credential — not the reason we speak A2A.
			</p>
		</section>

		<section>
			<h2>Related</h2>
			<ul>
				<li><a href="/agent">faf.one/agent</a> — human page</li>
				<li><a href="/context">faf.one/context</a> — extension key (pointer at <code>.faf</code>)</li>
				<li>
					<a href="https://a2a-protocol.org/latest/" target="_blank" rel="noopener">A2A spec</a>
				</li>
				<li>
					<a href="https://aaif.io/blog/a2a-joins-aaif" target="_blank" rel="noopener"
						>A2A joins AAIF</a
					>
				</li>
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
			<p>Built with .faf + .fafa ☑️ The card declares. The task is the test.</p>
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

	@media (max-width: 768px) {
		h1 {
			font-size: 1.9rem;
		}
	}
</style>
