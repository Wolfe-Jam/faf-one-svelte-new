<script lang="ts">
	import { onMount } from 'svelte';
	let mounted = false;
	let copiedId = $state('');

	async function copyText(text: string, id: string) {
		await navigator.clipboard.writeText(text);
		copiedId = id;
		setTimeout(() => copiedId = '', 2000);
	}

	onMount(() => { mounted = true; });

	// Rich X share — pre-fill the crafted post, not just the URL.
	const shareText = `👻 Just shipped: faf-cli v4.2.0 — The Voice API Edition

The answer is 4.2.0 = 42. Eternal voice memory for xAI Grok. Zero drift. Zero re-explain.

Save Our Souls.`;
	const shareUrl = 'https://faf.one/blog/voice-api-edition';
	const xIntent = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;
</script>

<svelte:head>
	<title>Voice API Edition - faf-cli v4.2.0 | FAF</title>
	<meta name="description" content="Save Our Souls 👻 - Eternal voice memory for Grok Collections. One command fixes voice drift forever. 91% token reclaim. Zero re-explaining." />
	<meta property="og:title" content="Voice API Edition - faf-cli v4.2.0" />
	<meta property="og:description" content="The answer is 4.2.0 = 42. Eternal voice memory for xAI Grok. Zero drift. Zero re-explain." />
	<meta property="og:type" content="article" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / Voice API Edition
		</div>
		<h1>👻 Voice API Edition</h1>
		<p class="subtitle">Save Our Souls - The Answer is 4.2.0 = 42</p>
		<div class="meta">
			<time datetime="2026-02-03">February 3, 2026</time>
			<span class="separator">•</span>
			<span class="category xai">xAI Edition</span>
		</div>
	</header>

	<div class="hero-link">
		<a href="/diagrams/voice-api-banner">
			<img src="/diagrams/voice-api-banner-preview.png" alt="Voice API Edition - faf-cli v4.2.0" />
		</a>
		<p class="image-caption">Eternal voice memory for Grok Collections 🍊 <a href="/diagrams/voice-api-banner">View full banner →</a></p>
	</div>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> Every AI conversation starts with "Here's my project..." Voice drift costs you 91% of your tokens. Today, we fix that. Forever. One command: <code>faf init --xai</code>
			</p>
		</section>

		<section>
			<h2>The Problem: Voice Drift</h2>
			<p>
				You spend hours training your AI on your project's voice:
			</p>
			<ul>
				<li>Architecture decisions</li>
				<li>Code style preferences</li>
				<li>Team conventions</li>
				<li>Project history</li>
				<li>Why things are the way they are</li>
			</ul>
			<p>
				Then you close the chat. <strong>It's all gone.</strong>
			</p>
			<p>
				Next session, you start over. Every. Single. Time.
			</p>

			<h3>The Hidden Tax</h3>
			<p>At scale, voice drift is devastating:</p>
			<ul>
				<li><strong>91% token reclaim</strong> - measured, not claimed</li>
				<li><strong>$47M/day</strong> at xAI scale (conservative estimate)</li>
				<li><strong>Thousands of hours</strong> re-explaining the same context</li>
				<li><strong>Trust erosion</strong> - AI that forgets you can't serve you</li>
			</ul>
			<p>
				This isn't a bug. It's systemic context amnesia.
			</p>
		</section>

		<section>
			<h2>The Solution: FAF Voice Persistence</h2>
			<p>
				<strong>What if your AI never forgot?</strong>
			</p>
			<p>
				Not your chat history. Your <strong>voice</strong> - the way you think, build, and solve problems.
			</p>
			<p>
				That's what <code>faf init --xai</code> does.
			</p>

			<div class="copy-box" onclick={() => copyText('cd your-project\nfaf init --xai', 'init-xai')}>
				<div class="copy-code-multi">cd your-project<br/>faf init --xai</div>
				<button class="copy-btn">{copiedId === 'init-xai' ? 'Copied!' : 'Copy'}</button>
			</div>

			<h3>What Gets Added to project.faf</h3>
			<div class="terminal-block">
				<code>{`grok:
  voice: Leo
  tone: Polite, dry British wit, technically precise
  persona: |-
    You are the voice of this project's eternal memory.
    Base every response on the files in this collection.
    Never override with general knowledge unless asked.
    Stay mission-focused. Zero drift.
  retrieval_mode: hybrid
  escape_phrase: outside collection

xai_collections:
  ready: true
  upload_order:
    - project.faf
    - architecture.md
    - skills.md
    - grok.md
  notes: Upload to xAI Collections for eternal Grok memory`}</code>
			</div>
		</section>

		<section>
			<h2>The Voice Persona: Leo</h2>
			<p>
				<strong>Leo</strong> is your project's eternal memory:
			</p>
			<ul>
				<li><strong>Polite, dry British wit</strong> - technically precise</li>
				<li><strong>Context-first</strong> - always refers to your project files</li>
				<li><strong>Mission-focused</strong> - zero drift from project goals</li>
				<li><strong>Hybrid retrieval</strong> - uses Collections, falls back gracefully</li>
			</ul>

			<h3>Upload to xAI Collections</h3>
			<p>Your project.faf becomes the <strong>source of truth</strong> for Grok:</p>
			<ol>
				<li>Grok reads your project DNA (architecture, goals, conventions)</li>
				<li>Every response is <strong>grounded in your project</strong></li>
				<li>General knowledge only when explicitly requested</li>
				<li>Voice persists <strong>forever</strong></li>
			</ol>
		</section>

		<section>
			<h2>Why This Matters</h2>

			<h3>For Individual Developers</h3>
			<div class="code-comparison">
				<div>
					<h4>❌ Before</h4>
					<ul>
						<li>Re-explain project every session</li>
						<li>AI makes wrong assumptions</li>
						<li>Context drift accumulates</li>
						<li>Trust erodes</li>
					</ul>
				</div>
				<div>
					<h4>✅ After</h4>
					<ul>
						<li>Grok knows your project DNA</li>
						<li>Responses grounded in your files</li>
						<li>Zero re-explaining</li>
						<li>Trust builds</li>
					</ul>
				</div>
			</div>

			<h3>For Teams at Scale</h3>
			<p>At 10,000 developers:</p>
			<ul>
				<li><strong>1.75B tokens/day wasted</strong> on re-discovery</li>
				<li><strong>$47M/day</strong> in drift tax (at xAI scale)</li>
				<li><strong>Thousands of hours</strong> lost to context setup</li>
			</ul>
			<p>
				Voice persistence isn't a feature. <strong>It's infrastructure.</strong>
			</p>
		</section>

		<section>
			<h2>The Philosophy: Save Our Souls 👻</h2>
			<p>
				Voice drift is a <strong>ghost problem</strong>:
			</p>
			<ul>
				<li>Invisible until measured</li>
				<li>Expensive at scale</li>
				<li>Solvable with structure</li>
			</ul>
			<p>
				<strong>FAF Voice API</strong> exorcises the ghost:
			</p>
			<ul>
				<li>Project DNA in <code>project.faf</code></li>
				<li>Voice persona in <code>grok:</code> section</li>
				<li>Collections upload in <code>xai_collections:</code></li>
				<li>Eternal memory in Grok</li>
			</ul>
			<p class="highlight">
				<strong>One format. One file. Forever.</strong>
			</p>
		</section>

		<section>
			<h2>Technical Deep Dive</h2>

			<h3>Retrieval Strategy: Hybrid Mode</h3>
			<div class="terminal-block">
				<code>retrieval_mode: hybrid</code>
			</div>
			<p><strong>How it works:</strong></p>
			<ol>
				<li><strong>Context-first</strong> - Search project files in Collections</li>
				<li><strong>Grounded responses</strong> - Base answers on your architecture</li>
				<li><strong>Fallback gracefully</strong> - Use general knowledge when appropriate</li>
				<li><strong>Escape phrase</strong> - User can request "outside collection" explicitly</li>
			</ol>

			<h3>Collections Upload Order</h3>
			<div class="terminal-block">
				<code>{`upload_order:
  - project.faf       # Project DNA (architecture, goals, conventions)
  - architecture.md   # System design
  - skills.md         # Team capabilities
  - grok.md           # Voice customization`}</code>
			</div>
			<p><strong>Why this order?</strong></p>
			<ol>
				<li><strong>Foundation first</strong> - project.faf sets context</li>
				<li><strong>Architecture second</strong> - system design informs responses</li>
				<li><strong>Capabilities third</strong> - what the team can build</li>
				<li><strong>Customization last</strong> - voice refinements</li>
			</ol>
		</section>

		<section>
			<h2>Real-World Impact</h2>

			<h3>Case Study: FAF Voice Demo</h3>
			<p><strong>Scenario:</strong> Browser-to-AI voice with persistent memory</p>
			<ul>
				<li><strong>Problem:</strong> Voice drift after every session</li>
				<li><strong>Solution:</strong> FAF Voice + Grok Collections</li>
				<li><strong>Result:</strong> Zero drift, zero re-explain</li>
			</ul>

			<p><strong>The Holy Grail:</strong></p>
			<ol>
				<li><strong>Baseline Pain</strong> - Show voice drift problem</li>
				<li><strong>FAF Activation</strong> - Load project.faf to Collections</li>
				<li><strong>Eternal Voice</strong> - Grok remembers forever</li>
			</ol>

			<div class="tip-box">
				<p><strong>Demo:</strong> <a href="https://github.com/Wolfe-Jam/FAF-Voice" target="_blank">github.com/Wolfe-Jam/FAF-Voice</a></p>
			</div>
		</section>

		<section>
			<h2>The Answer: 4.2.0 = 42</h2>
			<p><strong>Why this version number matters:</strong></p>
			<p>
				42 = The meaning of life, the universe, and everything<br>
				4.2.0 = The meaning of eternal voice memory
			</p>
			<p class="highlight">
				No 4.2.1 allowed. <strong>This IS the answer.</strong>
			</p>
		</section>

		<section>
			<h2>Try It Now</h2>
			<div class="copy-box" onclick={() => copyText('npm install -g faf-cli@4.2.0', 'install-cli')}>
				<code class="copy-code">npm install -g faf-cli@4.2.0</code>
				<button class="copy-btn">{copiedId === 'install-cli' ? 'Copied!' : 'Copy'}</button>
			</div>
			<div class="copy-box" onclick={() => copyText('cd your-project\nfaf init --xai', 'tryit-init')}>
				<div class="copy-code-multi">cd your-project<br/>faf init --xai</div>
				<button class="copy-btn">{copiedId === 'tryit-init' ? 'Copied!' : 'Copy'}</button>
			</div>

			<h3>Verify Installation</h3>
			<div class="copy-box" onclick={() => copyText('faf --version', 'verify-version')}>
				<code class="copy-code">faf --version</code>
				<button class="copy-btn">{copiedId === 'verify-version' ? 'Copied!' : 'Copy'}</button>
			</div>
			<div class="copy-box" onclick={() => copyText('cat project.faf | grep "grok:"', 'verify-grep')}>
				<code class="copy-code">cat project.faf | grep "grok:"</code>
				<button class="copy-btn">{copiedId === 'verify-grep' ? 'Copied!' : 'Copy'}</button>
			</div>
		</section>

		<section>
			<h2>For the xAI Team</h2>
			<p><strong>This is for you.</strong></p>
			<p>
				We've watched Grok evolve. We've seen Collections emerge. We've felt the voice drift problem at scale.
			</p>
			<p>
				<strong>FAF Voice API</strong> is our answer to that problem.
			</p>
			<p>It's:</p>
			<ul>
				<li>✅ <strong>Open source</strong> (MIT license)</li>
				<li>✅ <strong>Battle-tested</strong> (25k+ downloads)</li>
				<li>✅ <strong>IANA-registered</strong> (application/vnd.faf+yaml)</li>
				<li>✅ <strong>Anthropic-merged</strong> (MCP ecosystem #2759)</li>
			</ul>
			<p class="highlight">
				<strong>One format. One file. Universal AI context.</strong><br>
				Now with eternal voice for Grok.
			</p>
		</section>

		<section>
			<h2>The Numbers</h2>
			<ul>
				<li><strong>v4.2.0</strong> - Released February 3, 2026</li>
				<li><strong>671/671</strong> - Tests passing</li>
				<li><strong>100% 🏆</strong> - Trophy tier</li>
				<li><strong>25,000+</strong> - npm downloads</li>
				<li><strong>91%</strong> - Token reclaim (measured)</li>
			</ul>
		</section>

		<section>
			<h2>What's Next</h2>
			<p><strong>Voice-API Edition is just the beginning.</strong></p>
			<p>Coming soon:</p>
			<ul>
				<li>Real-time voice sync across sessions</li>
				<li>Multi-AI voice consistency</li>
				<li>Team voice profiles</li>
				<li>Voice drift analytics</li>
			</ul>
			<p class="highlight">
				<strong>The goal:</strong> Zero re-explain. Forever. Everywhere.
			</p>
		</section>

		<section class="share-section">
			<a href={xIntent} target="_blank" rel="noopener" class="share-btn">Post on X</a>
		</section>

		<section class="footer-note">
			<p>Built with .faf ☑️ For Elon Musk and the Grok team 🍊🏎️</p>
			<p style="margin-top: 1rem; font-style: italic; color: #666;">
				We see what you're building. We're here to help.
			</p>
			<p style="margin-top: 0.5rem; color: #999;">
				- wolfejam | FAF Foundation
			</p>
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
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
		line-height: 1.6;
	}

	.post-header {
		margin-bottom: 2rem;
		border-bottom: 2px solid #eee;
		padding-bottom: 2rem;
	}

	.hero-link {
		margin: 0 -1rem 3rem -1rem;
		overflow: hidden;
		border-radius: 8px;
	}

	.hero-link img {
		width: 100%;
		height: auto;
		display: block;
		border-radius: 8px;
		transition: transform 0.2s;
	}

	.hero-link a:hover img {
		transform: scale(1.02);
	}

	.image-caption {
		text-align: center;
		font-size: 0.9rem;
		color: #666;
		font-style: italic;
		margin-top: 0.5rem;
		padding: 0 1rem;
	}

	.image-caption a {
		color: var(--faf-cyan-text);
		text-decoration: none;
	}

	.image-caption a:hover {
		text-decoration: underline;
	}

	.breadcrumb {
		font-size: 0.9rem;
		color: #666;
		margin-bottom: 1rem;
	}

	.breadcrumb a {
		color: var(--faf-cyan-text);
		text-decoration: none;
	}

	.breadcrumb a:hover {
		text-decoration: underline;
	}

	h1 {
		font-size: 2.5rem;
		font-weight: 700;
		margin: 0.5rem 0;
		color: #000;
	}

	.subtitle {
		font-size: 1.3rem;
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
		padding: 0.25rem 0.75rem;
		border-radius: 4px;
		font-weight: 500;
		font-size: 0.85rem;
	}

	.category.xai {
		background: #000;
		color: white;
	}

	.intro {
		background: #fff5f0;
		padding: 1.5rem;
		border-radius: 8px;
		border-left: 4px solid #FF6B35;
		margin-bottom: 2rem;
	}

	.lead {
		font-size: 1.1rem;
		margin: 0;
	}

	.post-content section {
		margin-bottom: 2.5rem;
	}

	h2 {
		font-size: 1.8rem;
		color: #000;
		margin: 2rem 0 1rem 0;
		border-bottom: 1px solid #eee;
		padding-bottom: 0.5rem;
	}

	h3 {
		font-size: 1.3rem;
		color: #333;
		margin: 1.5rem 0 0.75rem 0;
	}

	h4 {
		font-size: 1.1rem;
		color: #FF6B35;
		margin: 1rem 0 0.5rem 0;
	}

	p {
		margin: 1rem 0;
		color: #333;
	}

	.highlight {
		background: #fffaf0;
		border-left: 4px solid #FF6B35;
		padding: 1rem;
		margin: 1rem 0;
		border-radius: 4px;
	}

	.terminal-block {
		background: #f5f5f5;
		border: 1px solid #ddd;
		border-radius: 6px;
		padding: 1rem;
		margin: 1rem 0;
		overflow-x: auto;
	}

	.terminal-block code {
		font-family: 'SF Mono', Monaco, 'Cascadia Code', monospace;
		font-size: 0.9rem;
		color: #333;
		white-space: pre;
		display: block;
	}

	code {
		background: #f5f5f5;
		padding: 0.2rem 0.4rem;
		border-radius: 3px;
		font-family: 'SF Mono', Monaco, monospace;
		font-size: 0.9em;
		color: #c7254e;
	}

	ul, ol {
		margin: 1rem 0;
		padding-left: 1.5rem;
	}

	li {
		margin: 0.5rem 0;
		color: #333;
	}

	.code-comparison {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 2rem;
		margin: 2rem 0;
	}

	.tip-box {
		background: linear-gradient(135deg, rgba(0, 212, 212, 0.1) 0%, rgba(0, 212, 212, 0.05) 100%);
		border: 1px solid #00D4D4;
		border-left: 4px solid #00D4D4;
		border-radius: 8px;
		padding: 1.25rem;
		margin: 1.5rem 0;
	}

	.tip-box p {
		margin: 0;
		font-size: 0.95rem;
		line-height: 1.6;
	}

	.tip-box a {
		color: var(--faf-cyan-text);
		font-weight: 600;
		text-decoration: none;
	}

	.tip-box a:hover {
		text-decoration: underline;
	}

	@media (max-width: 768px) {
		.code-comparison {
			grid-template-columns: 1fr;
		}
	}

	a {
		color: var(--faf-cyan-text);
		text-decoration: none;
	}

	a:hover {
		text-decoration: underline;
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
		text-align: center;
		padding: 2rem 0;
		border-top: 2px solid #eee;
		margin-top: 3rem;
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
	.copy-box:hover { border-color: #555; }
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
	.copy-code-multi {
		flex: 1;
		font-family: 'Monaco', 'Courier New', monospace;
		color: #00d4d4;
		font-size: 0.9rem;
		font-weight: 600;
		line-height: 1.6;
	}
	.code-comment { color: #666; font-weight: 400; }
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
	.copy-btn:hover { background: rgba(255, 107, 53, 0.3); border-color: #ff6b35; }
	.copy-btn:active { transform: scale(0.95); }
</style>
