<script lang="ts">
	import { buildShareIntent } from '$lib/shareIntent.js';

	const shareText = `FAF is on the A2A partners page.

Listed alongside Adobe, AWS, Cisco, IBM, Microsoft — checked by Google's A2A partnerships lead against the IANA registration and a live Agent Card.

Complementary. We don't replace the card.

#A2A #AAIF

Help guide what we build —
Comments · suggestions welcome.`;
	const shareUrl = 'https://faf.one/blog/a2a-partner';
	const xIntent = buildShareIntent({ text: shareText, url: shareUrl });
</script>

<svelte:head>
	<title>FAF is an A2A partner | FAF</title>
	<meta
		name="description"
		content="FAF is listed on the A2A partners page — checked by Google's A2A partnerships lead against the IANA registration and a live Agent Card. Complementary. We don't replace the card."
	/>
	<meta property="og:title" content="FAF is an A2A partner" />
	<meta
		property="og:description"
		content="Listed alongside Adobe, AWS, Cisco, IBM, Microsoft. A credential, not an endorsement."
	/>
	<meta property="og:type" content="article" />
	<meta property="og:url" content="https://faf.one/blog/a2a-partner" />
	<meta property="og:image" content="https://faf.one/blog/a2a-partner-hero.png" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="FAF is an A2A partner" />
	<meta
		name="twitter:description"
		content="On the A2A partners page — Google-checked against the IANA registration and a live Agent Card."
	/>
	<meta name="twitter:image" content="https://faf.one/blog/a2a-partner-hero.png" />
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / FAF is an A2A partner
		</div>
		<h1>FAF is an A2A partner</h1>
		<p class="subtitle">Vetted, listed, complementary.</p>
		<div class="meta">
			<time datetime="2026-09-01">September 1, 2026</time>
			<span class="separator">•</span>
			<span class="category interop">Interop</span>
		</div>
	</header>

	<div class="hero-image">
		<img
			src="/blog/a2a-partner-hero.png"
			alt="FAF is an A2A partner — Agentic AI Foundation and Agent2Agent marks, listed Aug 31, 2026."
			width="1200"
			height="630"
			loading="eager"
			decoding="async"
		/>
	</div>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> FAF is on the A2A partners list &mdash; checked by Google's A2A
				partnerships lead against the IANA registration and a live Agent Card. Complementary. We
				do not replace the card.
			</p>
		</section>

		<section>
			<h2>Two dates</h2>
			<p>
				<strong>28 August 2026</strong> &mdash; A2A joined the
				<a href="https://aaif.io/blog/a2a-joins-aaif" target="_blank" rel="noopener"
					>Agentic AI Foundation</a
				>
				(AAIF), the neutral Linux Foundation home that already hosts MCP, goose and AGENTS.md.
				A2A moved under vendor-neutral governance.
			</p>
			<p>
				<strong>31 August 2026</strong> &mdash; FAF was added to the
				<a href="https://a2a-protocol.org/latest/partners/" target="_blank" rel="noopener"
					>A2A partners list</a
				>. The pull request was merged by Google's A2A partnerships lead, after a check against
				the IANA registration (<code>application/vnd.faf+yaml</code>) and a live, resolving
				Agent Card.
			</p>
		</section>

		<section>
			<h2>What the list is</h2>
			<p>
				The A2A partners page is roughly 170 organisations
				<em>"helping build, codify, and adopt A2A."</em> Adobe, AWS, Cisco, IBM, Microsoft, SAP,
				Salesforce, ServiceNow &mdash; and now FAF.
			</p>
			<p>
				It is a directory of adoption, not an endorsement. FAF earned the entry the same way
				anything does here: a working implementation, checked against public artifacts.
			</p>
		</section>

		<section>
			<h2>Complementary</h2>
			<p>
				<a href="/blog/fafa-speaks-a2a">FAFA &mdash; the Voice of FAF</a> speaks A2A. A live
				Agent Card on the apex. JSON-RPC <code>message/send</code> on the door. A peer discovers
				it and calls it.
			</p>
			<p>
				<strong>MCP equips. A2A delegates.</strong> The project DNA stays in
				<code>project.faf</code>. The passport is <code>.fafa</code>. The A2A card is how a peer
				finds the voice.
			</p>
			<p>
				IANA registration (<code>application/vnd.faf+yaml</code>,
				<code>application/vnd.fafa+yaml</code>) is the credential &mdash; not the reason we speak
				A2A.
			</p>
		</section>

		<section>
			<h2>Related</h2>
			<ul>
				<li>
					<a href="https://a2a-protocol.org/latest/partners/" target="_blank" rel="noopener"
						>A2A partners page</a
					>
					&mdash; the list
				</li>
				<li><a href="/blog/fafa-speaks-a2a">FAFA speaks A2A</a> &mdash; the implementation</li>
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
			<p>Help guide what we build &mdash; comments &middot; suggestions welcome.</p>
			<div class="feedback-actions">
				<a class="feedback-btn" href={xIntent} target="_blank" rel="noopener">Post on X</a>
			</div>
		</section>

		<section class="footer-note">
			<p>Built with .faf + .fafa ☑️ The card declares. The list confirms. 🏎️</p>
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
