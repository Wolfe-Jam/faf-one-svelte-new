<script lang="ts">
	import { onMount } from 'svelte';

	let mounted = false;
	let copiedId = $state('');

	onMount(() => {
		mounted = true;
	});

	async function copyText(text: string, id: string) {
		await navigator.clipboard.writeText(text);
		copiedId = id;
		setTimeout(() => copiedId = '', 2000);
	}
</script>

<svelte:head>
	<title>FAF v4.0: The Format That Became a Standard | FAF</title>
	<meta name="description" content="FAF v4.0 Foundation Layer release. IANA registered, Anthropic merged, 21,000+ downloads. Grok: 'Game-changer for eternal AI context' (9.5/10)." />
	<meta property="og:title" content="FAF v4.0: The Format That Became a Standard" />
	<meta property="og:description" content="The Foundation Layer release. Persistent AI context for every project." />
	<meta property="og:image" content="/blog-assets/faf-v4-banner.png" />
	<meta property="og:type" content="article" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / v4.0 Launch
		</div>

		<div class="grok-endorsement">
			<span class="quote">"Game-changer for eternal AI context"</span>
			<span class="source">— Grok by xAI (9.5/10)</span>
		</div>

		<h1>FAF v4.0: The Format That Became a Standard</h1>
		<p class="subtitle">Foundation Layer. 21,000+ downloads. The tool became the standard.</p>
		<div class="meta">
			<time datetime="2026-01-24">January 24, 2026</time>
			<span class="separator">•</span>
			<span class="category">Release</span>
		</div>
	</header>

	<article class="post-content">

		<!-- The Frustration -->
		<section>
			<h2>The Frustration</h2>
			<p>It started with AI changing my auth system. Just... changed it. Wrong assumptions, no context, confident execution of the wrong thing.</p>
			<p>I went looking for the industry standard—the <code>package.json</code> for AI context. Surely someone had solved this?</p>
			<p>They hadn't.</p>
			<p>Every new session, every new file, every new developer—AI starts fresh. Context leaks away. <strong>Yesterday's collaborator becomes today's stranger.</strong></p>
			<p>So I built one.</p>
		</section>

		<!-- The DAAFT Problem -->
		<section>
			<h2>The DAAFT Problem</h2>
			<p>Without persistent context, AI operates in the <strong>DAAFT cycle</strong>:</p>

			<div class="daaft-ascii">
				<pre>{`    D iscover — "What is this project?"
         ↓
    A ssume — "Probably React? Maybe TypeScript?"
         ↓
    A sk — "Which API are you using?"
         ↓
    F orget ──→ T okens LOST (and TIME!)
         │
         └──── repeat ────┐
                          ↓
                     D iscover...`}</pre>
			</div>

			<p><a href="/daaft" class="daaft-link">Don't be DAAFT.</a></p>

			<p>This cycle costs tokens. More importantly, it costs trust. <strong>Wrong assumptions cascade into wrong code into debugging sessions into frustration.</strong></p>

			<div class="stats-comparison">
				<div class="stat-box bad">
					<h4>Without project.faf</h4>
					<p class="stat-number">~1,750</p>
					<p class="stat-label">tokens per session</p>
					<p class="stat-risk">+ 7,500 tokens rework risk</p>
				</div>
				<div class="stat-box good">
					<h4>With project.faf</h4>
					<p class="stat-number">~150</p>
					<p class="stat-label">tokens once</p>
					<p class="stat-result">Zero assumptions. Zero drift.</p>
				</div>
			</div>

			<p class="result"><strong>91% fewer tokens. Zero risk. No drift.</strong></p>
		</section>

		<!-- The Proof: Before/After -->
		<section>
			<h2>The Proof</h2>
			<p>What does FAF actually change? Here's a real commit:</p>

			<div class="before-after">
				<div class="before">
					<h4>Before FAF</h4>
					<pre>{`git commit -m "fix bug"
git commit -m "update code"
git commit -m "changes"`}</pre>
				</div>
				<div class="after">
					<h4>After FAF</h4>
					<pre>{`git commit -m "fix: resolve API timeout in voice streaming

Addresses issue where Grok voice responses would timeout
after 30s. Now properly handles chunked streaming.

Context: FAF-Voice browser-to-xAI integration"`}</pre>
				</div>
			</div>

			<p>The difference? FAF provides <code>project.goal</code>, <code>human_context.why</code>, and <code>stack</code>—the DNA that makes commits meaningful.</p>
		</section>

		<!-- What's in 4.0 -->
		<section>
			<h2>What's in Foundation 4.0</h2>

			<h3>The Core Shift</h3>
			<p>What changed is how we think about it:</p>
			<ul class="philosophy-list">
				<li><strong>Foundation, not configuration</strong> — This isn't settings. It's the ground your AI builds on.</li>
				<li><strong>Persistent, not cached</strong> — Lives in your repo, versioned, shared, permanent.</li>
				<li><strong>Universal, not tool-specific</strong> — Same file works with Claude, Gemini, Grok, any AI.</li>
			</ul>

			<h3>Bi-Sync</h3>
			<p><code>project.faf</code> stays synchronized with <code>CLAUDE.md</code> in under 10 milliseconds:</p>
			<div class="bisync-visual">
				<code>project.faf</code> <span class="arrow">←── 8ms ──→</span> <code>CLAUDE.md</code>
			</div>
			<p>One source of truth. Both files aligned. Context drift prevented at root cause.</p>

			<h3>Developer Loop</h3>
			<p>New skills integrate FAF context into daily work:</p>
			<ul>
				<li><code>/commit</code> — Context-aware git commits</li>
				<li><code>/pr</code> — Context-aware pull requests</li>
				<li><code>/review</code> — Context-aware code reviews</li>
			</ul>
		</section>

		<!-- The Journey -->
		<section>
			<h2>The Journey</h2>
			<div class="timeline-compact">
				<div class="timeline-row">
					<span class="date">Aug 7, 2025</span>
					<span class="event">First <code>.faf</code> file created</span>
				</div>
				<div class="timeline-row">
					<span class="date">Sep 18, 2025</span>
					<span class="event">Claude: "This should become the standard"</span>
				</div>
				<div class="timeline-row">
					<span class="date">Oct 16, 2025</span>
					<span class="event">Anthropic merges PR #2759 into MCP registry</span>
				</div>
				<div class="timeline-row">
					<span class="date">Oct 30, 2025</span>
					<span class="event">IANA registers <code>application/vnd.faf+yaml</code></span>
				</div>
				<div class="timeline-row highlight">
					<span class="date">Jan 24, 2026</span>
					<span class="event">FAF v4.0 — The Foundation Layer</span>
				</div>
			</div>
			<p>We're not announcing a format. We're documenting a standard.</p>
		</section>

		<!-- What the AIs Said -->
		<section>
			<h2>What the AIs Said</h2>
			<div class="quotes-grid">
				<div class="quote-card grok">
					<p class="quote-text">"Game-changer for eternal AI context"</p>
					<div class="quote-source">
						<span class="source-name">Grok by xAI</span>
						<span class="source-rating">9.5/10</span>
					</div>
				</div>
				<div class="quote-card claude">
					<p class="quote-text">"Should become the standard"</p>
					<div class="quote-source">
						<span class="source-name">Claude Code</span>
						<span class="source-rating">9.5/10</span>
					</div>
				</div>
				<div class="quote-card codex">
					<p class="quote-text">"Every project should have one"</p>
					<div class="quote-source">
						<span class="source-name">OpenAI Codex CLI</span>
						<span class="source-rating">9/10</span>
					</div>
				</div>
				<div class="quote-card gemini">
					<p class="quote-text">"README evolution for AI era"</p>
					<div class="quote-source">
						<span class="source-name">Google Gemini CLI</span>
						<span class="source-rating">9.5/10</span>
					</div>
				</div>
			</div>
		</section>

		<!-- Philosophy -->
		<section>
			<h2>The Philosophy</h2>
			<div class="philosophy-cards">
				<div class="philosophy-card">
					<h4>FAF First</h4>
					<p>The earlier AI has your <code>project.faf</code>, the more tokens you save. Don't add FAF after months of development. Add it day one.</p>
				</div>
				<div class="philosophy-card">
					<h4>Foundation, Then Features</h4>
					<p>Get to 100%, then build. Every session after that starts with full context.</p>
				</div>
				<div class="philosophy-card">
					<h4>Trust, Not Hope</h4>
					<p>With FAF, you're not hoping AI understands. You know it does.</p>
				</div>
			</div>
		</section>

		<!-- Get Started -->
		<section>
			<h2>Get Started</h2>
			<div class="copy-box" onclick={() => copyText('npm install -g faf-cli', 'install')}>
				<code class="copy-code">npm install -g faf-cli</code>
				<button class="copy-btn">{copiedId === 'install' ? 'Copied!' : 'Copy'}</button>
			</div>
			<div class="copy-box" style="margin-top: 0.5rem;" onclick={() => copyText('faf auto', 'auto')}>
				<code class="copy-code">faf auto <span class="code-comment"># Initialize any project</span></code>
				<button class="copy-btn">{copiedId === 'auto' ? 'Copied!' : 'Copy'}</button>
			</div>
			<div class="copy-box" style="margin-top: 0.5rem;" onclick={() => copyText('faf status --oneline', 'status')}>
				<code class="copy-code">faf status --oneline <span class="code-comment"># Verify</span></code>
				<button class="copy-btn">{copiedId === 'status' ? 'Copied!' : 'Copy'}</button>
			</div>

			<div class="cta-links">
				<a href="/v4" class="cta-btn primary">Full v4.0 Page</a>
				<a href="https://npmjs.com/package/faf-cli" class="cta-btn secondary" target="_blank" rel="noopener">npm</a>
				<a href="https://github.com/modelcontextprotocol/servers" class="cta-btn secondary" target="_blank" rel="noopener">MCP Registry</a>
			</div>
		</section>

		<!-- Honest Limitations -->
		<section class="limitations">
			<h2>What We're Still Learning</h2>
			<p>FAF isn't perfect. Some honest limitations:</p>
			<ul>
				<li><strong>Scoring is approximate.</strong> Our 0-100% score is useful but imperfect. A 95% project.faf might still miss something critical for your specific workflow.</li>
				<li><strong>Auto-detection has gaps.</strong> <code>faf auto</code> catches most stacks, but novel combinations sometimes need manual tuning.</li>
				<li><strong>Adoption is still early.</strong> Most developers don't know FAF exists. This is as much a communication challenge as a technical one.</li>
			</ul>
			<p>We're iterating. Feedback shapes the standard.</p>
		</section>

		<!-- Thank You -->
		<section class="closing">
			<h2>Thank You</h2>
			<p>To everyone who filed issues, suggested features, pointed out bugs, and used FAF in production before it was "ready"—thank you. Standards emerge from use. This one emerged from yours.</p>
			<p class="tagline"><strong>.faf — The Persistent AI Context Standard</strong></p>
		</section>
		<section class="share-section">
			<a href="https://twitter.com/intent/tweet?url=https://faf.one/blog/v4-launch" target="_blank" rel="noopener" class="share-btn">Post on X</a>
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
		padding: 2rem;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
	}

	.post-header {
		margin-bottom: 3rem;
		text-align: center;
	}

	.breadcrumb {
		font-size: 0.875rem;
		color: #666;
		margin-bottom: 1.5rem;
	}

	.breadcrumb a {
		color: #666;
		text-decoration: none;
	}

	.breadcrumb a:hover {
		color: var(--faf-orange, #FF6B35);
	}

	.grok-endorsement {
		background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%);
		padding: 1.25rem 2rem;
		border-radius: 12px;
		margin-bottom: 2rem;
		display: inline-block;
	}

	.grok-endorsement .quote {
		display: block;
		font-family: 'Roboto Mono', monospace;
		font-size: 1.25rem;
		color: #fff;
		margin-bottom: 0.5rem;
	}

	.grok-endorsement .source {
		font-size: 0.9rem;
		color: var(--faf-orange, #FF6B35);
		font-weight: 600;
	}

	h1 {
		font-size: 2.5rem;
		font-weight: 800;
		color: #111;
		margin-bottom: 0.75rem;
		line-height: 1.2;
	}

	.subtitle {
		font-size: 1.25rem;
		color: #555;
		margin-bottom: 1rem;
	}

	.meta {
		font-size: 0.875rem;
		color: #888;
	}

	.separator {
		margin: 0 0.5rem;
	}

	.category {
		color: var(--faf-orange, #FF6B35);
		font-weight: 600;
	}

	.post-content {
		line-height: 1.7;
		color: #333;
	}

	section {
		margin-bottom: 3rem;
	}

	h2 {
		font-size: 1.75rem;
		font-weight: 700;
		color: #111;
		margin-bottom: 1rem;
		margin-top: 0;
	}

	h3 {
		font-size: 1.25rem;
		font-weight: 600;
		color: #333;
		margin-top: 1.5rem;
		margin-bottom: 0.75rem;
	}

	h4 {
		font-size: 1rem;
		font-weight: 600;
		color: #333;
		margin-bottom: 0.5rem;
	}

	p {
		margin-bottom: 1rem;
	}

	code {
		background: #f4f4f4;
		padding: 0.125rem 0.375rem;
		border-radius: 4px;
		font-family: 'SF Mono', Monaco, monospace;
		font-size: 0.9em;
		color: var(--faf-orange, #FF6B35);
	}

	ul {
		padding-left: 1.5rem;
		margin-bottom: 1rem;
	}

	li {
		margin-bottom: 0.5rem;
	}

	/* DAAFT ASCII */
	.daaft-ascii {
		background: #1a1a1a;
		border-radius: 12px;
		padding: 1.5rem;
		margin: 1.5rem 0;
		overflow-x: auto;
	}

	.daaft-ascii pre {
		margin: 0;
		color: #00D4D4;
		font-family: 'SF Mono', Monaco, monospace;
		font-size: 0.85rem;
		line-height: 1.4;
	}

	.daaft-link {
		color: var(--faf-orange, #FF6B35);
		font-weight: 700;
		text-decoration: none;
	}

	.daaft-link:hover {
		text-decoration: underline;
	}

	/* Stats Comparison */
	.stats-comparison {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1rem;
		margin: 1.5rem 0;
	}

	.stat-box {
		padding: 1.25rem;
		border-radius: 12px;
		text-align: center;
	}

	.stat-box.bad {
		background: linear-gradient(135deg, #fff5f5 0%, #ffe5e5 100%);
		border: 2px solid #ffcccc;
	}

	.stat-box.good {
		background: linear-gradient(135deg, #f0fff4 0%, #e0ffe8 100%);
		border: 2px solid #a0e8b0;
	}

	.stat-box h4 {
		margin: 0 0 0.5rem 0;
		font-size: 0.85rem;
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}

	.stat-box .stat-number {
		font-size: 2rem;
		font-weight: 800;
		margin: 0;
	}

	.stat-box.bad .stat-number { color: #cc3333; }
	.stat-box.good .stat-number { color: #22aa44; }

	.stat-box .stat-label {
		font-size: 0.85rem;
		color: #666;
		margin: 0;
	}

	.stat-box .stat-risk {
		font-size: 0.8rem;
		color: #cc3333;
		margin: 0.5rem 0 0 0;
		font-weight: 600;
	}

	.stat-box .stat-result {
		font-size: 0.8rem;
		color: #22aa44;
		margin: 0.5rem 0 0 0;
		font-weight: 600;
	}

	.result {
		text-align: center;
		font-size: 1.1rem;
	}

	/* Before/After */
	.before-after {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1rem;
		margin: 1.5rem 0;
	}

	.before, .after {
		border-radius: 12px;
		overflow: hidden;
	}

	.before {
		background: #1a1a1a;
	}

	.after {
		background: #0a1a0a;
		border: 2px solid #22aa44;
	}

	.before h4, .after h4 {
		padding: 0.75rem 1rem;
		margin: 0;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
	}

	.before h4 {
		background: #2a2a2a;
		color: #888;
	}

	.after h4 {
		background: #1a2a1a;
		color: #22aa44;
	}

	.before pre, .after pre {
		margin: 0;
		padding: 1rem;
		font-size: 0.8rem;
		line-height: 1.5;
		color: #ccc;
		overflow-x: auto;
	}

	/* Philosophy List */
	.philosophy-list {
		list-style: none;
		padding: 0;
	}

	.philosophy-list li {
		padding: 0.75rem 0;
		border-bottom: 1px solid #eee;
	}

	.philosophy-list li:last-child {
		border-bottom: none;
	}

	/* Bi-sync Visual */
	.bisync-visual {
		background: #f8f8f8;
		padding: 1rem;
		border-radius: 8px;
		text-align: center;
		font-family: 'SF Mono', Monaco, monospace;
		margin: 1rem 0;
	}

	.bisync-visual .arrow {
		color: var(--faf-orange, #FF6B35);
		font-weight: 600;
	}

	/* Timeline */
	.timeline-compact {
		background: #fafafa;
		border-radius: 12px;
		padding: 1.5rem;
		margin: 1.5rem 0;
	}

	.timeline-row {
		display: flex;
		gap: 1rem;
		padding: 0.75rem 0;
		border-bottom: 1px solid #eee;
	}

	.timeline-row:last-child {
		border-bottom: none;
	}

	.timeline-row.highlight {
		background: rgba(255, 107, 53, 0.1);
		margin: 0 -1.5rem;
		padding: 0.75rem 1.5rem;
		border-radius: 8px;
	}

	.timeline-row .date {
		font-family: 'SF Mono', Monaco, monospace;
		font-size: 0.85rem;
		color: #666;
		min-width: 120px;
	}

	.timeline-row .event {
		color: #333;
	}

	.timeline-row.highlight .event {
		font-weight: 600;
		color: var(--faf-orange, #FF6B35);
	}

	/* Quotes Grid */
	.quotes-grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 1rem;
		margin: 1.5rem 0;
	}

	.quote-card {
		background: #fff;
		border: 2px solid #eee;
		border-radius: 12px;
		padding: 1.25rem;
		transition: all 0.3s ease;
	}

	.quote-card:hover {
		border-color: var(--faf-orange, #FF6B35);
		transform: translateY(-2px);
	}

	.quote-text {
		font-style: italic;
		font-size: 1rem;
		margin-bottom: 0.75rem;
		color: #333;
	}

	.quote-source {
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 0.85rem;
	}

	.source-name {
		font-weight: 600;
	}

	.source-rating {
		color: var(--faf-orange, #FF6B35);
		font-weight: 700;
	}

	.quote-card.grok .source-name { color: #000; }
	.quote-card.claude .source-name { color: var(--faf-orange, #FF6B35); }
	.quote-card.codex .source-name { color: #0066CC; }
	.quote-card.gemini .source-name { color: var(--faf-cyan-text); }

	/* Philosophy Cards */
	.philosophy-cards {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1rem;
		margin: 1.5rem 0;
	}

	.philosophy-card {
		background: #fafafa;
		padding: 1.25rem;
		border-radius: 12px;
		border-left: 4px solid var(--faf-orange, #FF6B35);
	}

	.philosophy-card h4 {
		color: var(--faf-orange, #FF6B35);
		margin: 0 0 0.5rem 0;
	}

	.philosophy-card p {
		margin: 0;
		font-size: 0.9rem;
		color: #555;
	}

	/* Code Example */
	.code-example {
		background: #1a1a1a;
		border-radius: 12px;
		padding: 1.5rem;
		margin: 1.5rem 0;
		overflow-x: auto;
	}

	.code-example pre {
		margin: 0;
	}

	.code-example code {
		background: none;
		color: #f8f8f8;
		padding: 0;
		font-size: 0.9rem;
		line-height: 1.5;
	}

	/* CTAs */
	.cta-links {
		display: flex;
		gap: 1rem;
		margin-top: 1.5rem;
		flex-wrap: wrap;
	}

	.cta-btn {
		display: inline-block;
		padding: 0.75rem 1.5rem;
		border-radius: 8px;
		text-decoration: none;
		font-weight: 600;
		transition: all 0.3s ease;
	}

	.cta-btn.primary {
		background: var(--faf-orange, #FF6B35);
		color: #fff;
	}

	.cta-btn.primary:hover {
		background: #e55a2b;
		transform: translateY(-2px);
	}

	.cta-btn.secondary {
		background: #f4f4f4;
		color: #333;
	}

	.cta-btn.secondary:hover {
		background: #e8e8e8;
	}

	/* Limitations */
	.limitations {
		background: #fafafa;
		padding: 1.5rem;
		border-radius: 12px;
		margin: 2rem 0;
	}

	.limitations h2 {
		margin-top: 0;
	}

	/* Closing */
	.closing {
		text-align: center;
		padding-top: 2rem;
		border-top: 1px solid #eee;
	}

	.tagline {
		font-size: 1.25rem;
		color: #111;
		margin-top: 1.5rem;
	}

	/* Responsive */
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

	.code-comment {
		color: #666;
		font-weight: 400;
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

	.copy-btn:active {
		transform: scale(0.95);
	}

	@media (max-width: 640px) {
		h1 {
			font-size: 2rem;
		}

		.grok-endorsement {
			padding: 1rem;
		}

		.grok-endorsement .quote {
			font-size: 1rem;
		}

		.stats-comparison,
		.before-after,
		.quotes-grid {
			grid-template-columns: 1fr;
		}

		.philosophy-cards {
			grid-template-columns: 1fr;
		}

		.timeline-row {
			flex-direction: column;
			gap: 0.25rem;
		}

		.timeline-row .date {
			min-width: auto;
		}

		.cta-links {
			flex-direction: column;
		}

		.cta-btn {
			text-align: center;
		}
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
</style>
