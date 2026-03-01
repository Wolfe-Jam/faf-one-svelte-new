<script lang="ts">
	import { onMount } from 'svelte';
	let mounted = false;
	onMount(() => { mounted = true; });
</script>

<svelte:head>
	<title>The 3Ws | FAF</title>
	<meta name="description" content="Every billion-dollar app started with 3 answers. WHO is it for? WHAT does it do? WHY build it? A new page that teaches anyone to describe an app idea." />
	<meta property="og:title" content="The 3Ws — Every App Starts Here" />
	<meta property="og:description" content="WHO, WHAT, WHY. Three questions. That's all a developer needs to start." />
	<meta property="og:type" content="article" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / The 3Ws
		</div>

		<h1>The 3Ws</h1>
		<p class="subtitle">The App Builders Edition</p>
		<div class="meta">
			<time datetime="2026-03-01">March 1, 2026</time>
			<span class="separator">&bull;</span>
			<span class="category">Product</span>
		</div>
	</header>

	<article class="post-content">

		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> We built <a href="/ideas">faf.one/ideas</a> — a page that teaches anyone to describe an app idea in 3 answers. It also reorders the 6Ws so the first 3 are the idea, the last 3 are the implementation.
			</p>
		</section>

		<section>
			<h2>The Problem</h2>
			<p>Someone has an app idea. They're not a developer. They sit down to describe it and&hellip; blank page.</p>
			<p>Tools like Lovable and Base44 give you a text box: <em>"Describe your app."</em> Four words of instruction for the most important input of the entire project.</p>
			<p>Most people write too much, too little, or the wrong things entirely. The idea is clear in their head. Getting it out is the hard part.</p>
		</section>

		<section>
			<h2>Three Questions</h2>
			<p>We looked at how you'd describe any successful app in the simplest possible terms. Three questions kept surfacing:</p>
			<div class="w-cards">
				<div class="w-card">
					<span class="w-badge">1W</span>
					<strong>WHO is it for?</strong>
					<p>The people who will use this. Not you — them.</p>
				</div>
				<div class="w-card">
					<span class="w-badge">2W</span>
					<strong>WHAT does it do for them?</strong>
					<p>The value they get. Not features — the outcome.</p>
				</div>
				<div class="w-card">
					<span class="w-badge">3W</span>
					<strong>WHY should we build it?</strong>
					<p>What's broken today? Why does this need to exist?</p>
				</div>
			</div>
			<p>That's it. If anybody gives you 3 good answers, you can run with it.</p>
		</section>

		<section>
			<h2>Teaching by Example</h2>
			<p>Instead of a blank page, <a href="/ideas">faf.one/ideas</a> shows how billion-dollar companies can be described in exactly this format:</p>
			<div class="example-block">
				<div class="example-name">Uber</div>
				<div class="example-row"><span class="w-tag-sm">1W</span> Anyone who needs a ride across town</div>
				<div class="example-row"><span class="w-tag-sm">2W</span> Tap a button, a car shows up in minutes, pay without cash</div>
				<div class="example-row"><span class="w-tag-sm">3W</span> Hailing taxis was broken — no pricing, no tracking, no reliability</div>
			</div>
			<p>The page types these out live, cycling through 10 real apps — Uber, Airbnb, DoorDash, Slack, Venmo, Shopify, Duolingo, TikTok, Zoom, Figma. Click anywhere to start writing your own.</p>
		</section>

		<section>
			<h2>The Reorder</h2>
			<p>The 6Ws have always been WHO, WHAT, WHERE, WHY, WHEN, HOW. We swapped WHERE and WHY:</p>
			<div class="reorder-table">
				<div class="reorder-row header">
					<span>Old</span>
					<span></span>
					<span>New</span>
				</div>
				<div class="reorder-row">
					<span>1W WHO</span>
					<span class="arrow">&rarr;</span>
					<span>1W WHO</span>
				</div>
				<div class="reorder-row">
					<span>2W WHAT</span>
					<span class="arrow">&rarr;</span>
					<span>2W WHAT</span>
				</div>
				<div class="reorder-row changed">
					<span>3W WHERE</span>
					<span class="arrow">&rarr;</span>
					<span><strong>3W WHY</strong></span>
				</div>
				<div class="reorder-row changed">
					<span>4W WHY</span>
					<span class="arrow">&rarr;</span>
					<span><strong>4W WHERE</strong></span>
				</div>
				<div class="reorder-row">
					<span>5W WHEN</span>
					<span class="arrow">&rarr;</span>
					<span>5W WHEN</span>
				</div>
				<div class="reorder-row">
					<span>6W HOW</span>
					<span class="arrow">&rarr;</span>
					<span>6W HOW</span>
				</div>
			</div>
			<p>This creates a clean split:</p>
			<ul>
				<li><strong>1W–2W–3W</strong> — The idea. WHO, WHAT, WHY. Anyone can answer these.</li>
				<li><strong>4W–5W–6W</strong> — The implementation. WHERE, WHEN, HOW. The developer fills these in.</li>
			</ul>
			<p>The arrays in faf-cli already used this order. The labels now match.</p>
		</section>

		<section>
			<h2>The Funnel</h2>
			<p>Three pages, one flow:</p>
			<div class="funnel">
				<div class="funnel-step">
					<a href="/ideas">/ideas</a>
					<span class="funnel-label">3Ws — the idea</span>
				</div>
				<div class="funnel-arrow">&darr;</div>
				<div class="funnel-step">
					<a href="/6ws">/6ws</a>
					<span class="funnel-label">6Ws — the spec</span>
				</div>
				<div class="funnel-arrow">&darr;</div>
				<div class="funnel-step">
					<span class="funnel-file">project.faf</span>
					<span class="funnel-label">AI-ready DNA</span>
				</div>
			</div>
			<p>Click "Continue to 6Ws" and your 3 answers carry forward. The developer adds WHERE, WHEN, HOW. The output becomes a <code>project.faf</code> file any AI can read.</p>
		</section>

		<section>
			<h2>Try It</h2>
			<p>Go to <a href="/ideas">faf.one/ideas</a>. Watch the demo. Click anywhere. Write your idea.</p>
			<p>Three good answers. That's enough to start.</p>
		</section>

		<section class="footer-note">
			<p>FAF defines. AI interprets.</p>
		</section>

	</article>
</div>

<style>
	.blog-post {
		max-width: 720px;
		margin: 0 auto;
		padding: 2rem 1rem;
		color: #333;
	}

	.post-header {
		border-bottom: 3px solid #FF6B35;
		padding-bottom: 1.5rem;
		margin-bottom: 2rem;
	}

	.breadcrumb {
		font-size: 0.85rem;
		color: #999;
		margin-bottom: 1rem;
	}

	.breadcrumb a {
		color: #FF6B35;
		text-decoration: none;
	}

	.breadcrumb a:hover {
		text-decoration: underline;
	}

	h1 {
		font-size: 2.5rem;
		font-weight: 800;
		color: #111;
		margin: 0 0 0.5rem;
		line-height: 1.1;
	}

	.subtitle {
		font-size: 1.2rem;
		color: #666;
		margin: 0 0 1rem;
	}

	.meta {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		font-size: 0.9rem;
		color: #999;
	}

	.separator { color: #ccc; }

	.category {
		background: #FF6B35;
		color: white;
		padding: 0.15rem 0.6rem;
		border-radius: 4px;
		font-size: 0.75rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}

	/* Content */
	.post-content {
		line-height: 1.8;
	}

	.post-content section {
		margin-bottom: 2rem;
	}

	.post-content h2 {
		font-size: 1.5rem;
		font-weight: 700;
		color: #111;
		margin: 0 0 1rem;
		padding-bottom: 0.5rem;
		border-bottom: 1px solid #eee;
	}

	.post-content p {
		margin: 0 0 1rem;
		color: #444;
	}

	.post-content a {
		color: #FF6B35;
		text-decoration: none;
	}

	.post-content a:hover {
		text-decoration: underline;
	}

	.post-content code {
		background: #f5f5f5;
		padding: 0.15rem 0.4rem;
		border-radius: 4px;
		font-size: 0.9em;
		color: #d63384;
	}

	.post-content ul {
		padding-left: 1.5rem;
		margin: 0 0 1rem;
	}

	.post-content li {
		margin-bottom: 0.5rem;
		color: #444;
	}

	/* Lead */
	.lead {
		font-size: 1.1rem;
		padding: 1.25rem;
		background: #f8f8f8;
		border-left: 4px solid #FF6B35;
		border-radius: 0 8px 8px 0;
		line-height: 1.7;
	}

	/* W Cards */
	.w-cards {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
		margin: 1.5rem 0;
	}

	.w-card {
		display: flex;
		align-items: flex-start;
		gap: 0.75rem;
		padding: 1rem;
		background: #fafafa;
		border: 1px solid #e8e8e8;
		border-radius: 8px;
	}

	.w-card strong {
		display: block;
		color: #111;
		margin-bottom: 0.2rem;
	}

	.w-card p {
		margin: 0;
		font-size: 0.9rem;
		color: #888;
	}

	.w-badge {
		background: #FF6B35;
		color: white;
		font-size: 0.7rem;
		font-weight: 700;
		padding: 0.2rem 0.45rem;
		border-radius: 4px;
		min-width: 1.8rem;
		text-align: center;
		margin-top: 0.15rem;
	}

	/* Example block */
	.example-block {
		background: #f8f8f8;
		border: 1px solid #e8e8e8;
		border-radius: 8px;
		padding: 1.25rem;
		margin: 1.25rem 0;
	}

	.example-name {
		font-weight: 700;
		font-size: 1.1rem;
		color: #111;
		margin-bottom: 0.75rem;
	}

	.example-row {
		display: flex;
		align-items: flex-start;
		gap: 0.5rem;
		margin-bottom: 0.5rem;
		font-size: 0.95rem;
		color: #444;
	}

	.w-tag-sm {
		background: #FF6B35;
		color: white;
		font-size: 0.6rem;
		font-weight: 700;
		padding: 0.1rem 0.3rem;
		border-radius: 3px;
		margin-top: 0.2rem;
	}

	/* Reorder table */
	.reorder-table {
		margin: 1.25rem 0;
		font-size: 0.95rem;
	}

	.reorder-row {
		display: grid;
		grid-template-columns: 1fr auto 1fr;
		gap: 1rem;
		padding: 0.4rem 0.75rem;
		border-radius: 4px;
	}

	.reorder-row.header {
		font-weight: 600;
		color: #999;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}

	.reorder-row.changed {
		background: #fff3ee;
	}

	.arrow {
		color: #ccc;
	}

	/* Funnel */
	.funnel {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.25rem;
		margin: 1.5rem 0;
	}

	.funnel-step {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		padding: 0.75rem 1.5rem;
		background: #fafafa;
		border: 2px solid #e8e8e8;
		border-radius: 10px;
		width: 280px;
		justify-content: center;
	}

	.funnel-step a {
		color: #FF6B35;
		font-weight: 700;
		text-decoration: none;
		font-family: monospace;
	}

	.funnel-step a:hover {
		text-decoration: underline;
	}

	.funnel-file {
		font-family: monospace;
		font-weight: 700;
		color: #111;
	}

	.funnel-label {
		color: #888;
		font-size: 0.85rem;
	}

	.funnel-arrow {
		color: #ccc;
		font-size: 1.2rem;
	}

	/* Footer */
	.footer-note {
		border-top: 1px solid #eee;
		padding-top: 1.5rem;
		text-align: center;
	}

	.footer-note p {
		color: #999;
		font-style: italic;
	}

	@media (max-width: 600px) {
		h1 { font-size: 2rem; }
		.funnel-step { width: 100%; }
	}
</style>
