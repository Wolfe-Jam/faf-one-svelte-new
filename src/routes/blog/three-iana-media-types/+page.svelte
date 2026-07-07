<script lang="ts">
	import { onMount } from 'svelte';
	import { buildShareIntent } from '$lib/shareIntent.js';

	let mounted = false;
	onMount(() => { mounted = true; });

	const shareText = `Three IANA-registered media types:

.faf — Context
.fafm — Memory
.fafa — Agents

The complete AI stack, now standardized. Verifiable in the IANA registry.`;
	const shareUrl = 'https://faf.one/blog/three-iana-media-types';
	const xIntent = buildShareIntent({ text: shareText, url: shareUrl });
</script>

<svelte:head>
	<title>Three IANA Media Types | FAF</title>
	<meta name="description" content="The trinity is complete: .faf (Context), .fafm (Memory), and .fafa (Agents) are now three IANA-registered media types — verifiable in the IANA registry." />
	<meta property="og:title" content="Three IANA Media Types" />
	<meta property="og:description" content="Context, Memory & Agents — the FAF trinity, now IANA-registered." />
	<meta property="og:type" content="article" />
	<meta property="og:image" content="https://faf.one/blog/three-iana-media-types-hero.png" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:image" content="https://faf.one/blog/three-iana-media-types-hero.png" />
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / Three IANA Media Types
		</div>

		<h1>Three IANA Media Types</h1>
		<p class="subtitle">Context, Memory &amp; Agents — the FAF trinity, now IANA-registered.</p>
		<div class="meta">
			<time datetime="2026-07-06">July 6, 2026</time>
			<span class="separator">•</span>
			<span class="category foundation">Foundation</span>
		</div>
	</header>

	<div class="hero-image">
		<img src="/blog/three-iana-media-types-hero.png" alt="The FAF trinity: .faf (Context), .fafm (Memory), .fafa (Agents) — three IANA-registered media types" />
	</div>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> The trinity is complete. <code>.faf</code> (Context), <code>.fafm</code> (Memory), and <code>.fafa</code> (Agents) are now three IANA-registered media types — official, verifiable, and registered under the same name in the IANA registry.
			</p>
		</section>

		<section>
			<h2>Three types, one stack</h2>
			<p>An AI system needs three things: to know the project, to remember across sessions, and to define what an agent is. Each now has a registered media type.</p>

			<div class="type-grid">
				<div class="type-row">
					<span class="type-ext">.faf</span>
					<span class="type-role">Context</span>
					<code class="type-mt">application/vnd.faf+yaml</code>
				</div>
				<div class="type-row">
					<span class="type-ext">.fafm</span>
					<span class="type-role">Memory</span>
					<code class="type-mt">application/vnd.fafm+yaml</code>
				</div>
				<div class="type-row">
					<span class="type-ext">.fafa</span>
					<span class="type-role">Agents</span>
					<code class="type-mt">application/vnd.fafa+yaml</code>
				</div>
			</div>

			<p><strong>.faf</strong> is the persistent project context an AI reads first. <strong>.fafm</strong> is the memory that survives across sessions. <strong>.fafa</strong> is the agent card — the agentic definition. Context, Memory, Agents.</p>
		</section>

		<section>
			<h2>Why a registered media type matters</h2>
			<p>A real IANA registration isn't a label — it's something an AI can resolve and trust by syntax alone:</p>
			<ul>
				<li>The <code>+yaml</code> suffix tells any parser exactly how to read the file.</li>
				<li>The <code>vnd.</code> tree marks it as a defined vendor format, not a guess.</li>
				<li>It's IANA-lookupable — anyone can confirm it exists.</li>
			</ul>
			<p>A minted "type" string has the shape of a media type but none of the backing. A registration is a receipt.</p>
		</section>

		<section>
			<h2>Verify it</h2>
			<p>Don't take our word for it. Each is a live entry in the IANA media types registry:</p>
			<div class="cta-grid">
				<div class="cta-box">
					<h3>.faf</h3>
					<p>Context</p>
					<a href="https://www.iana.org/assignments/media-types/application/vnd.faf+yaml" target="_blank" rel="noopener" class="cta-link">vnd.faf+yaml →</a>
				</div>
				<div class="cta-box">
					<h3>.fafm</h3>
					<p>Memory</p>
					<a href="https://www.iana.org/assignments/media-types/application/vnd.fafm+yaml" target="_blank" rel="noopener" class="cta-link">vnd.fafm+yaml →</a>
				</div>
				<div class="cta-box">
					<h3>.fafa</h3>
					<p>Agents</p>
					<a href="https://www.iana.org/assignments/media-types/application/vnd.fafa+yaml" target="_blank" rel="noopener" class="cta-link">vnd.fafa+yaml →</a>
				</div>
			</div>
		</section>

		<section>
			<h2>The Numbers</h2>
			<ul>
				<li><strong>3</strong> — IANA-registered media types</li>
				<li><strong>Context · Memory · Agents</strong> — the complete stack</li>
				<li><strong>+yaml</strong> — structured and self-describing, parseable by syntax</li>
				<li><strong>One registrant</strong> — all three under the same name in the IANA registry</li>
			</ul>
		</section>

		<section class="share-section">
			<a href={xIntent} target="_blank" rel="noopener" class="share-btn">Post on X</a>
		</section>

		<section class="footer-note signoff">
			<p class="signoff-lead">One is useful. Two is powerful. Three is a <strong>Category</strong>.</p>
			<p class="signoff-punch">Three is a crowd.</p>
		</section>
	</article>
</div>

<style>
	:global(body) {
		background: #FEFCF8;
	}

	.blog-post {
		max-width: 800px;
		margin: 0 auto;
		padding: 2rem 1rem;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
		line-height: 1.7;
		color: #1a1a1a;
	}

	.post-header {
		margin-bottom: 2rem;
		border-bottom: 3px solid #FF6B35;
		padding-bottom: 2rem;
	}

	.breadcrumb {
		font-size: 0.9rem;
		margin-bottom: 1rem;
		color: #1a1a1a;
	}

	.breadcrumb a { color: #FF6B35; text-decoration: none; }
	.breadcrumb a:hover { text-decoration: underline; }

	h1 {
		font-size: 2.2rem;
		margin: 0.5rem 0;
		color: #000;
		line-height: 1.3;
	}

	.subtitle {
		font-size: 1.2rem;
		color: #1a1a1a;
		margin: 0.5rem 0 1rem 0;
	}

	.meta {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		font-size: 0.9rem;
		color: #1a1a1a;
	}

	.separator { color: #ccc; }

	.category { color: white; padding: 0.25rem 0.75rem; border-radius: 4px; font-size: 0.85rem; }
	.category.foundation { background: #1D8348; color: #fff; }

	.hero-image {
		margin: 0 0 2.5rem 0;
		border-radius: 12px;
		overflow: hidden;
		border: 1px solid #e5e5e5;
	}
	.hero-image img { width: 100%; height: auto; display: block; }

	.post-content { font-size: 1.1rem; }

	.lead {
		font-size: 1.2rem;
		line-height: 1.7;
		margin-bottom: 2rem;
		padding: 1.5rem;
		background: #fff5f0;
		border-radius: 8px;
		border-left: 4px solid #FF6B35;
		color: #1a1a1a;
	}

	h2 {
		font-size: 1.8rem;
		margin: 2.5rem 0 1rem 0;
		color: #000;
		border-bottom: 1px solid #eee;
		padding-bottom: 0.5rem;
	}

	h3 { font-size: 1.3rem; margin: 0 0 0.5rem 0; color: #000; }

	p { margin-bottom: 1.25rem; color: #1a1a1a; }
	ul { margin: 1rem 0 1.5rem 1.5rem; }
	li { margin-bottom: 0.5rem; color: #1a1a1a; }

	code {
		font-family: 'SF Mono', 'Fira Code', Consolas, monospace;
		background: #f0f0f0;
		color: #1a1a1a;
		padding: 0.2rem 0.4rem;
		border-radius: 4px;
		font-size: 0.9em;
	}

	.type-grid {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
		margin: 1.5rem 0;
	}

	.type-row {
		display: flex;
		align-items: center;
		gap: 1.25rem;
		padding: 1rem 1.25rem;
		background: #fff;
		border: 1px solid #e5e5e5;
		border-radius: 10px;
	}

	.type-ext {
		font-family: 'SF Mono', 'Fira Code', Consolas, monospace;
		font-size: 1.4rem;
		font-weight: 800;
		color: #FF6B35;
		min-width: 80px;
	}

	.type-role { font-weight: 700; color: #000; min-width: 90px; }

	.type-mt {
		font-family: 'SF Mono', 'Fira Code', Consolas, monospace;
		background: none;
		color: #1a1a1a;
		font-size: 0.9rem;
		padding: 0;
	}

	.cta-grid {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		gap: 1.25rem;
		margin: 1.5rem 0;
	}

	.cta-box {
		background: #f8f8f8;
		border: 2px solid #FF6B35;
		padding: 1.25rem;
		border-radius: 8px;
		text-align: center;
	}

	.cta-box h3 {
		margin: 0 0 0.25rem 0;
		color: #FF6B35;
		font-family: 'SF Mono', 'Fira Code', Consolas, monospace;
	}

	.cta-box p { margin: 0 0 0.75rem 0; font-size: 0.9rem; color: #1a1a1a; }

	.cta-link { color: #FF6B35; text-decoration: none; font-weight: 600; font-size: 0.9rem; }
	.cta-link:hover { text-decoration: underline; }

	.share-section { margin-top: 3rem; text-align: center; }

	.share-btn {
		display: inline-flex;
		align-items: center;
		padding: 0.6rem 1.25rem;
		border-radius: 6px;
		font-size: 0.9rem;
		font-weight: 600;
		text-decoration: none;
		background: #000;
		color: #fff;
		transition: opacity 0.2s;
	}
	.share-btn:hover { opacity: 0.85; text-decoration: none; color: #fff; }

	.footer-note {
		margin-top: 4rem;
		padding-top: 2rem;
		border-top: 1px solid #eee;
		font-size: 0.95rem;
		color: #1a1a1a;
		text-align: center;
	}

	.signoff-lead {
		font-size: 1.1rem;
		color: #1a1a1a;
		margin-bottom: 0.75rem;
	}

	.signoff-punch {
		font-size: 1.6rem;
		font-weight: 800;
		color: #000;
		margin: 0;
	}

	a { color: #FF6B35; }
	a:hover { text-decoration: none; }

	@media (max-width: 768px) {
		h1 { font-size: 1.75rem; }
		.cta-grid { grid-template-columns: 1fr; }
		.type-row { flex-direction: column; align-items: flex-start; gap: 0.4rem; }
		.blog-post { padding: 1rem; }
	}
</style>
