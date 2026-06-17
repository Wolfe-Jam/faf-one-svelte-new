<script lang="ts">
	import { onMount } from 'svelte';
	import { buildShareIntent } from '$lib/shareIntent.js';
	let mounted = false;
	onMount(() => { mounted = true; });

	let copiedIndex = $state(-1);

	function copyCommand(text: string, index: number) {
		navigator.clipboard.writeText(text);
		copiedIndex = index;
		setTimeout(() => { copiedIndex = -1; }, 2000);
	}

	// Rich X share — pre-fill the crafted post, not just the URL.
	const shareText = `Your CLAUDE.md Is Not a Foundation

It's an instruction manual. And that's fine — but it's not enough.

MD explains. FAF defines. AI consumes.`;
	const shareUrl = 'https://faf.one/blog/claude-md-not-a-foundation';
	const xIntent = buildShareIntent({ text: shareText, url: shareUrl });
</script>

<svelte:head>
	<title>Your CLAUDE.md Is Not a Foundation | FAF</title>
	<meta name="description" content="It's an instruction manual. And that's fine — but it's not enough. MD explains. FAF defines. AI consumes." />
	<meta property="og:title" content="Your CLAUDE.md Is Not a Foundation" />
	<meta property="og:description" content="It's an instruction manual. And that's fine — but it's not enough." />
	<meta property="og:type" content="article" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / Your CLAUDE.md Is Not a Foundation
		</div>
		<h1>Your CLAUDE.md Is Not a Foundation</h1>
		<p class="subtitle">It's an instruction manual. And that's fine — but it's not enough.</p>
		<div class="meta">
			<time datetime="2026-03-12">March 12, 2026</time>
			<span class="separator">•</span>
			<span class="category foundation">Foundation</span>
		</div>
	</header>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> CLAUDE.md is prose. You can't parse prose reliably. You can't score it. You can't sync it in 10ms. You can't validate its structure. <code>project.faf</code> is the foundation layer — structured, scored, synced. The MD sits on top and does what MDs are good at: giving instructions.
			</p>
		</section>

		<section>
			<h2>The Setup Everyone Does</h2>
			<p>You start a project. You create a <code>CLAUDE.md</code>. You write some prose about your stack, your goals, your conventions. Claude reads it. Things go well.</p>
			<p>For about two commits.</p>
		</section>

		<section>
			<h2>What Happens Next</h2>
			<p>Your CLAUDE.md drifts. Not dramatically — slowly. You add a database. You swap frameworks. You refactor the auth layer. The CLAUDE.md still says "Express with JWT." You don't notice because it still <em>mostly</em> works. AI fills in the gaps with assumptions.</p>
			<p>This is context drift. And it's invisible until it isn't.</p>
		</section>

		<section>
			<h2>The Problem With Prose</h2>
			<p>CLAUDE.md is prose. Free-form markdown. That means:</p>
			<ul>
				<li><strong>You can't score it.</strong> Is your context 60% complete? 90%? You have no idea.</li>
				<li><strong>You can't sync it.</strong> When your project changes, who updates the MD? You? When?</li>
				<li><strong>You can't validate it.</strong> Is the information in it still true? No way to check.</li>
				<li><strong>You can't diff it semantically.</strong> Two people edit it and there's no merge strategy — just conflicting paragraphs.</li>
				<li><strong>AI interprets it differently every time.</strong> Prose is ambiguous. That's a feature for humans. It's a bug for machines.</li>
			</ul>
			<p>Try bi-syncing two markdown files. You're doing string surgery on free-form text. Good luck doing that in 10ms.</p>
		</section>

		<section>
			<h2>MDs Are Instruction Manuals</h2>
			<p>And instruction manuals are valuable. "Use this coding style." "Don't modify these files." "Always run tests before committing." That's what prose is good at — giving instructions.</p>

			<div class="insight-box">
				<h3>But an instruction manual is not a foundation.</h3>
				<p>You don't build a house on the owner's manual.</p>
			</div>
		</section>

		<section>
			<h2>What a Foundation Actually Looks Like</h2>
			<p>A foundation is structured. Parseable. Scoreable. Syncable.</p>

<pre><code>{`# project.faf — structured, not prose
project:
  name: my-app
  goal: Real-time analytics dashboard
  version: 2.1.0

stack:
  language: TypeScript
  framework: React
  backend: Node.js
  database: PostgreSQL
  hosting: Vercel`}</code></pre>

			<p>21 slots. Each one filled, ignored, or missing. No interpretation needed. AI doesn't <em>guess</em> your stack — it <em>reads</em> it.</p>

			<div class="formula-box">
				<code>(filled + ignored) / 21 = your AI-readiness</code>
			</div>

			<p>At 55%, AI is flipping coins. At 100%, AI is optimized. You know exactly where you stand.</p>
		</section>

		<section>
			<h2>The Hierarchy</h2>

<pre><code>{`README.md    → Prose for humans
CLAUDE.md    → Prose for Claude (instructions)
project.faf  → Structure for ANY AI (foundation)`}</code></pre>

			<p>They're not competitors. They're layers.</p>

			<p><code>project.faf</code> is the foundation — structured data, scored, synced in 10ms, portable across Claude, Gemini, Grok, Cursor, any AI.</p>

			<p>CLAUDE.md sits on top and does what it's good at: "Here's how I want you to work." Instructions. Preferences. Personality.</p>

			<p>But without the foundation underneath? Those instructions are built on assumptions. And assumptions drift.</p>
		</section>

		<section>
			<h2>The Bi-Sync Proof</h2>

			<div class="copy-box" onclick={() => copyCommand('faf bi-sync', 0)}>
				<code class="copy-code">faf bi-sync</code>
				<button class="copy-btn">{copiedIndex === 0 ? 'Copied!' : 'Copy'}</button>
			</div>

			<p>8 milliseconds. <code>project.faf</code> ↔ <code>CLAUDE.md</code>. Structured data flows into prose, prose references back to structure. Deterministic. Validated. No string surgery.</p>

			<p>Now try that with two markdown files.</p>
		</section>

		<section>
			<h2>The Real Cost of No Foundation</h2>
			<p>Without structured context, every AI session starts with rediscovery:</p>
			<ul>
				<li>AI re-discovers your project (wastes tokens)</li>
				<li>AI asks questions you've answered before (wastes time)</li>
				<li>AI makes wrong assumptions → rework (wastes hours)</li>
				<li>Context drifts → compounding errors → project delays</li>
			</ul>

			<a href="/daaft" class="insight-link">
				<div class="insight-box danger">
					<h3>$5,460/year per developer</h3>
					<p>Not a guess — a measurement. Read the full DAAFT analysis →</p>
				</div>
			</a>
		</section>

		<section>
			<h2>What To Do</h2>
			<p>You don't have to throw away your CLAUDE.md. Keep it. It's good at what it does.</p>
			<p>Just give it a foundation.</p>

			<div class="copy-box" onclick={() => copyCommand('bunx faf-cli auto', 1)}>
				<code class="copy-code">bunx faf-cli auto</code>
				<button class="copy-btn">{copiedIndex === 1 ? 'Copied!' : 'Copy'}</button>
			</div>

			<div class="copy-box alt" onclick={() => copyCommand('npx faf-cli auto', 2)}>
				<code class="copy-code">npx faf-cli auto</code>
				<button class="copy-btn">{copiedIndex === 2 ? 'Copied!' : 'Copy'}</button>
			</div>

			<p>One command. Reads your project. Creates <code>project.faf</code>. Scores it. Syncs CLAUDE.md. Done.</p>

			<div class="layer-rule">
				<strong>Your CLAUDE.md is not a foundation. <code>project.faf</code> is.</strong>
			</div>
		</section>

		<section class="share-section">
			<a href={xIntent} target="_blank" rel="noopener" class="share-btn">Post on X</a>
		</section>

		<section class="footer-note">
			<p>MD explains. FAF defines. AI consumes.</p>
			<p>Built with .faf ☑️ One file to define them all. ✍️</p>
		</section>
	</article>
</div>

<style>
	:global(body) {
		background: #FEFCF8 !important;
		color: #333 !important;
	}

	:global(html) {
		background: #FEFCF8 !important;
	}

	.blog-post {
		max-width: 800px;
		margin: 0 auto;
		padding: 2rem 1rem;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
		line-height: 1.7;
		color: #333;
	}

	.post-header {
		margin-bottom: 3rem;
		border-bottom: 3px solid #FF6B35;
		padding-bottom: 2rem;
	}

	.breadcrumb {
		font-size: 0.9rem;
		margin-bottom: 1rem;
		color: #666;
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

	.subtitle {
		font-size: 1.2rem;
		color: #666;
		margin: 0.5rem 0 1rem 0;
	}

	.meta {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		font-size: 0.9rem;
		color: #666;
	}

	.separator {
		color: #ccc;
	}

	.category {
		background: #FF6B35;
		color: white;
		padding: 0.25rem 0.75rem;
		border-radius: 4px;
		font-size: 0.85rem;
	}

	.category.foundation {
		background: #1a2744;
	}

	.post-content {
		font-size: 1.1rem;
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
		border-bottom: 1px solid #eee;
		padding-bottom: 0.5rem;
	}

	p {
		margin-bottom: 1.25rem;
	}

	ul {
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
		color: #00D4D4;
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

	.insight-box {
		background: #f0fffe;
		border: 2px solid #00D4D4;
		border-radius: 8px;
		padding: 1.5rem;
		margin: 2rem 0;
		text-align: center;
	}

	.insight-box h3 {
		color: #00B8B8;
		margin: 0 0 0.75rem 0;
		font-size: 1.4rem;
	}

	.insight-box p {
		margin: 0;
		font-size: 1.2rem;
		color: #008B8B;
	}

	.insight-box.danger {
		background: #f0fffe;
		border-color: #00D4D4;
	}

	.insight-box.danger h3 {
		color: var(--faf-cyan-text);
	}

	.insight-box.danger p {
		color: #008B8B;
	}

	.formula-box {
		background: #1a1a1a;
		padding: 1.5rem 2rem;
		border-radius: 8px;
		text-align: center;
		margin: 2rem 0;
	}

	.formula-box code {
		color: #00D4D4;
		background: none;
		font-size: 1.2rem;
		font-weight: 600;
	}

	.layer-rule {
		text-align: center;
		font-size: 1.15rem;
		color: #000;
		margin: 2rem 0;
	}

	.copy-box {
		display: flex;
		align-items: center;
		gap: 1rem;
		padding: 1rem 1.5rem;
		background: #1a1a1a;
		border: 1px solid #333;
		border-radius: 8px;
		margin: 1rem 0;
		cursor: pointer;
		transition: border-color 0.2s;
	}

	.copy-box:hover {
		border-color: #555;
	}

	.copy-box.alt {
		background: #222;
		border-color: #2a2a2a;
		margin-top: -0.25rem;
	}

	.copy-box.alt .copy-code {
		color: #888;
	}

	.copy-code {
		flex: 1;
		font-family: 'Monaco', 'Courier New', monospace;
		color: #00d4d4;
		background: transparent;
		padding: 0;
		font-size: 0.95rem;
		font-weight: 600;
		border-radius: 0;
	}

	.copy-btn {
		padding: 0.5rem 1rem;
		background: rgba(255, 107, 53, 0.2);
		border: 1px solid rgba(255, 107, 53, 0.4);
		color: #ff6b35;
		border-radius: 6px;
		font-weight: 600;
		font-size: 0.8rem;
		cursor: pointer;
		transition: all 0.2s;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		white-space: nowrap;
	}

	.copy-btn:hover {
		background: rgba(255, 107, 53, 0.3);
		border-color: #ff6b35;
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
		border-top: 1px solid #eee;
		font-size: 0.95rem;
		color: #666;
		text-align: center;
	}

	a {
		color: #FF6B35;
	}

	a:hover {
		text-decoration: none;
	}

	.insight-link {
		text-decoration: none;
	}

	.insight-link:hover .insight-box {
		transform: translateY(-2px);
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
	}

	.insight-link .insight-box {
		transition: all 0.2s;
		cursor: pointer;
	}

	@media (max-width: 768px) {
		h1 {
			font-size: 1.75rem;
		}

		.blog-post {
			padding: 1rem;
		}
	}
</style>
