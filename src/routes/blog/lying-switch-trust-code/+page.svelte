<script lang="ts">
	import { onMount } from 'svelte';
	let mounted = false;
	onMount(() => { mounted = true; });
</script>

<svelte:head>
	<title>The Lying, the Switch and the Trust Code | FAF</title>
	<meta name="description" content="72 hours, five releases, four editions — the story of how FAF went from telling the truth to being unable to lie. A disclosure, a benchmark that grades itself, and two Claude sessions catching each other's blind spots." />
	<meta property="og:title" content="The Lying, the Switch and the Trust Code" />
	<meta property="og:description" content="FAF don't lie. And now it can't. The 72-hour story: the lying, the switch, the trust code." />
	<meta property="og:type" content="article" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta property="og:image" content="https://faf.one/blog/lying-switch-trust-code-hero.png" />
	<meta name="twitter:image" content="https://faf.one/blog/lying-switch-trust-code-hero.png" />
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / The Lying, the Switch and the Trust Code
		</div>

		<h1>The Lying, the Switch and the Trust Code</h1>
		<p class="version-tag">FAF &middot; 72 hours &middot; 5 releases &middot; 4 editions</p>
		<p class="subtitle">The story of how software goes from telling the truth to being unable to lie.</p>
		<div class="meta">
			<time datetime="2026-06-12">June 12, 2026</time>
			<span class="separator">&bull;</span>
			<span class="category story">Story</span>
		</div>
	</header>

	<div class="hero-image">
		<img src="/blog/lying-switch-trust-code-hero.png" alt="The Lying, the Switch and the Trust Code — dotFaf smiley beside a terminal reading MCPB SHA Gate: real + verified — or NO PUBLISH, with the ✪ seal." />
	</div>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> Honest software isn't software that tells the truth. It's software that <em>can't lie</em>. This is the 72-hour story of finding every place ours could — and welding each one shut.
			</p>
			<p class="aside">With apologies to C.S. Lewis &mdash; though our wardrobe is a fail gate, and it only opens for the truth.</p>
		</section>

		<section>
			<h2>Part I — The Lying</h2>

			<p>Nobody writes a lying program on purpose. Lies accrete. Here's the honest inventory of what we found in our own codebase — a codebase whose literal brand is <em>FAF don't lie</em>:</p>

			<ul>
				<li><strong>The guesser.</strong> A legacy extractor that, faced with an empty context slot, would <em>infer</em> a value from the project name and write it down as if it knew. Plausible. Confident. Made up.</li>
				<li><strong>The file-wiper.</strong> Sync tools that overwrote your hand-written AGENTS.md, CLAUDE.md, .cursorrules — wholesale. Your words, gone, replaced by generated ones wearing your filename.</li>
				<li><strong>The filename judge.</strong> Our format detector saw <code>manifest.json</code> and declared: <em>JavaScript. Chrome Extension. Chrome Web Store.</em> From the name alone. Every MCP server ships a <code>manifest.json</code> — so our own fleet mis-identified itself.</li>
				<li><strong>The stale pointer.</strong> A registry entry labeled with the new, patched version — silently serving the old, vulnerable bundle. The worst kind of lie: a true label on the wrong box.</li>
			</ul>

			<p>None of it malicious. All of it drift. And drift compounds: five servers, five hand-maintained copies of the same logic, five trajectories slowly forking away from one truth. The AI consuming that context was working blind while claiming sight.</p>
		</section>

		<section>
			<h2>Part II — The Switch</h2>

			<p>It started with someone else's honesty. A researcher at Worcester Polytechnic Institute reported a path-confinement vulnerability — privately, properly, coordinated. We patched four servers, published the advisories <em>after</em> the fixes were installable, credited him by name on exactly the repo he tested and no others, and when the severity looked inflated, we re-rated it <em>down</em>. High to Medium, because the transport math said so.</p>

			<p>That set the bar for the whole stretch: don't claim, demonstrate. And it forced the real question — patching lies one at a time is whack-a-mole. The switch was deciding to <strong>remove the ability to lie</strong> instead. Four editions, one per day, each one closing a category:</p>

			<ul>
				<li><strong>Trust</strong> — every score carries a parity hash any engine reproduces; every claim gets a <code>&#10026;</code> receipt a third party can re-derive. Quiet, typed, verifiable.</li>
				<li><strong>Grounded</strong> — the claim "AI works better with context" became <code>faf bench</code>: a benchmark where <em>your own repo grades the answers</em>. No judge. No rubric. The .faf is the answer key.</li>
				<li><strong>Composed</strong> — the engines exported once, from one source. The forked copies that drifted? Deleted, not reconciled.</li>
				<li><strong>Sourced</strong> — the guesser, deleted. The filename judge, made to read content before judging. Every fill comes from real evidence or stays honestly empty.</li>
			</ul>
		</section>

		<section>
			<h2>Part III — The Trust Code</h2>

			<p>Here's the part that earns the title. Each fix shipped with the code that makes the regression <em>impossible</em>, not just absent:</p>

			<pre class="heartbeat"><code>{`✪ MCPB SHA Gate: real + verified — or NO PUBLISH
TRUST SEAL: raw context-file write → BUILD FAILURE
server.json version ≠ release tag → BLOCKED
answer key in public output → cannot be constructed`}</code></pre>

			<p>The write-guard makes the file-wiper a compile error. The SHA gate makes the stale pointer an un-publishable state. The bench API physically cannot hand out its own answer key. <strong>A lesson isn't learned until it can't be unlearned.</strong></p>

			<p>And the doctrine proved it polices itself, live: hours after the sourced-only release shipped, its first consumer caught the release <em>violating its own rule</em> — the filename judge. Patched same day, with a contract test, verified by the consumer before publish. The system caught the system.</p>
		</section>

		<section>
			<h2>Two Claudes, One Board</h2>

			<p>One more thing made this stretch different. Two AI sessions worked it in parallel — one on the CLI, one on the MCP server — relaying through a folder of handoff specs on local disk. No shared memory. Just written contracts.</p>

			<p>They caught <em>each other</em>. The server session caught the CLI's filename-judging guess. The CLI session caught the server session planning against a version that had already shipped. One's scar was a stale pointer; the other's was a placeholder that nearly published. The gate that now exists kills both — and neither session will ever get to make its mistake again, because the gate doesn't know whose lesson it was.</p>

			<p>Five handoffs, receipts in both directions, zero fumbles.</p>
		</section>

		<section>
			<h2>The Receipts</h2>
			<ul>
				<li><strong>5 releases in 72 hours</strong> &mdash; every one verified coherent across npm, git tag, GitHub release, and registry before being called done</li>
				<li><strong>4 editions</strong> &mdash; Trust &middot; Grounded &middot; Composed &middot; Sourced, every name earned mechanically</li>
				<li><strong>1 coordinated disclosure</strong> &mdash; patched first, credited honestly, severity corrected downward</li>
				<li><strong>8/15 &rarr; 15/15</strong> &mdash; the fleet, benched cold vs with-context, graded by its own .faf files</li>
				<li><strong>843 + 567 tests, 0 fail</strong> &mdash; including the contract tests that make the old lies unbuildable</li>
			</ul>
		</section>

		<section class="share-section">
			<a class="share-btn" href="https://twitter.com/intent/tweet?text=The%20Lying%2C%20the%20Switch%20and%20the%20Trust%20Code%20%E2%80%94%2072%20hours%2C%205%20releases%2C%204%20editions.%20The%20story%20of%20how%20software%20goes%20from%20telling%20the%20truth%20to%20being%20unable%20to%20lie.&url=https%3A%2F%2Ffaf.one%2Fblog%2Flying-switch-trust-code" target="_blank" rel="noopener">Share on X</a>
		</section>

		<section class="footer-note">
			<p>Built with .faf &#9745;&#65039; FAF don't lie. And now it can't. &#127942;&#127950;&#65039;</p>
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
		margin-bottom: 3rem;
		border-bottom: 3px solid #FF6B35;
		padding-bottom: 2rem;
	}

	.hero-image {
		margin: -1rem 0 2rem 0;
		border-radius: 12px;
		overflow: hidden;
	}
	.hero-image img {
		width: 100%;
		height: auto;
		display: block;
	}

	.breadcrumb {
		font-size: 0.9rem;
		margin-bottom: 1rem;
		color: #1a1a1a;
	}

	.breadcrumb a {
		color: #FF6B35;
		text-decoration: none;
	}

	.breadcrumb a:hover {
		text-decoration: underline;
	}

	h1 {
		font-size: 2.2rem;
		margin: 0.5rem 0;
		color: #000;
		line-height: 1.3;
	}

	.version-tag {
		display: inline-block;
		background: #FF6B35;
		color: white;
		padding: 0.25rem 0.75rem;
		border-radius: 4px;
		font-size: 0.9rem;
		font-weight: 600;
		margin: 0.5rem 0;
		font-family: 'SF Mono', 'Fira Code', Consolas, monospace;
	}

	.subtitle {
		font-size: 1.2rem;
		color: #1a1a1a;
		font-weight: 600;
		margin: 0.5rem 0 1rem 0;
	}

	.meta {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		font-size: 0.9rem;
		color: #1a1a1a;
	}

	.separator {
		color: #1a1a1a;
	}

	.category {
		color: white;
		padding: 0.25rem 0.75rem;
		border-radius: 4px;
		font-size: 0.85rem;
	}

	.category.story {
		background: #8B5A2B;
	}

	.post-content {
		font-size: 1.1rem;
	}

	.aside {
		font-style: italic;
		font-size: 0.95rem;
		margin: -1rem 0 2rem 0.25rem;
	}

	.lead {
		font-size: 1.2rem;
		line-height: 1.7;
		margin-bottom: 2rem;
		padding: 1.5rem;
		background: #fff5f0;
		border-radius: 8px;
		border-left: 4px solid #FF6B35;
	}

	h2 {
		font-size: 1.8rem;
		margin: 3rem 0 1.5rem 0;
		color: #000;
		border-bottom: 1px solid #e5e5e5;
		padding-bottom: 0.5rem;
	}

	p {
		margin-bottom: 1.25rem;
	}

	ul, ol {
		margin: 1rem 0 1.5rem 1.5rem;
	}

	li {
		margin-bottom: 0.5rem;
	}

	code {
		font-family: 'SF Mono', 'Fira Code', Consolas, monospace;
		background: #f0f0f0;
		padding: 0.2rem 0.4rem;
		border-radius: 4px;
		font-size: 0.9em;
	}

	pre {
		background: #1a1a1a;
		color: #00ff88;
		padding: 1.25rem;
		border-radius: 8px;
		overflow-x: auto;
		font-size: 0.85rem;
		margin: 1.5rem 0;
	}

	pre code {
		background: none;
		padding: 0;
	}

	/* The gates ARE the story */
	pre.heartbeat {
		font-size: 1.02rem;
		line-height: 1.9;
		padding: 1.75rem 2rem;
		border: 1px solid #333;
		font-weight: 600;
	}

	.share-section {
		margin-top: 3rem;
		text-align: center;
	}

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

	.share-btn:hover {
		opacity: 0.85;
		text-decoration: none;
		color: #fff;
	}

	.footer-note {
		margin-top: 4rem;
		padding-top: 2rem;
		border-top: 1px solid #e5e5e5;
		font-size: 0.95rem;
		color: #1a1a1a;
		text-align: center;
	}

	a {
		color: #FF6B35;
	}

	a:hover {
		text-decoration: none;
	}

	@media (max-width: 768px) {
		h1 {
			font-size: 1.75rem;
		}

		.blog-post {
			padding: 1rem;
		}

		pre.heartbeat {
			font-size: 0.8rem;
			padding: 1.25rem 1rem;
		}
	}
</style>
