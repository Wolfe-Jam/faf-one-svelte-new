<script lang="ts">
	import { onMount } from 'svelte';
	import { buildShareIntent } from '$lib/shareIntent.js';

	let mounted = false;
	let copiedId = $state('');

	async function copyText(text: string, id: string) {
		await navigator.clipboard.writeText(text);
		copiedId = id;
		setTimeout(() => copiedId = '', 2000);
	}

	onMount(() => {
		mounted = true;
	});

	// Rich X share — pre-fill the crafted post, not just the URL.
	// FAF formula (case study): the hook + the one-line essence.
	const shareText = `How MCPaaS gave Grok eternal voice memory.

Case study: browser-to-AI voice with persistent context. Zero drift. Zero re-explain.`;
	const shareUrl = 'https://faf.one/blog/grok-voice-case-study';
	const xIntent = buildShareIntent({ text: shareText, url: shareUrl });
</script>

<svelte:head>
	<title>How MCPaaS Gave Grok Eternal Voice Memory | FAF</title>
	<meta name="description" content="Case study: Building FAF-Voice with xAI's Grok API. Browser-to-AI voice with zero drift, zero re-explain. MCPaaS delivered persistent context across every session." />
	<meta property="og:title" content="How MCPaaS Gave Grok Eternal Voice Memory" />
	<meta property="og:description" content="Case study: Browser-to-AI voice with persistent context. Zero drift. Zero re-explain." />
	<meta property="og:type" content="article" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / Grok Voice Case Study
		</div>

		<h1>How MCPaaS Gave Grok Eternal Voice Memory</h1>
		<p class="version-tag">Case Study</p>
		<p class="subtitle">Building FAF-Voice: Browser-to-xAI voice with zero drift.</p>
		<div class="meta">
			<time datetime="2026-01-20">January 20, 2026</time>
			<span class="separator">•</span>
			<span class="category case-study">Case Study</span>
		</div>
	</header>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> We built a voice interface for xAI's Grok that never forgets who you are. MCPaaS delivers project context to every conversation. No re-explaining. No drift. Just talk.
			</p>
		</section>

		<section>
			<h2>The Challenge</h2>

			<p>Voice interfaces have a memory problem.</p>

			<p>You talk to an AI assistant. It helps you. Conversation ends. Next time you talk, it has no idea who you are, what you're working on, or what you discussed before.</p>

			<p>For a demo we were building with xAI's Grok API, this was unacceptable. We wanted to prove that AI voice could be <em>persistent</em>—that context could survive across sessions, platforms, and time.</p>

			<div class="challenge-box">
				<h3>The Requirements</h3>
				<ul>
					<li>Browser-based voice interface (no app install)</li>
					<li>Direct connection to xAI's Grok API</li>
					<li>Persistent project context across sessions</li>
					<li>Zero re-explaining required</li>
					<li>Works with any project that has a <code>.faf</code> file</li>
				</ul>
			</div>
		</section>

		<section>
			<h2>The Solution: FAF-Voice + MCPaaS</h2>

			<p>FAF-Voice is a browser-to-xAI voice client. You speak, Grok responds. But unlike typical voice assistants, Grok knows your project before you say a word.</p>

			<p>The secret: MCPaaS.</p>

			<p>When you start a FAF-Voice session, the client fetches your project context from MCPaaS. Grok receives your <code>.faf</code> file as part of the system prompt. Every conversation starts with full context.</p>

			<!-- FAF-VOICE ARCHITECTURE DIAGRAM -->
			<div class="arch-diagram">
				<div class="arch-row">
					<div class="arch-box browser-box">
						<div class="arch-icon">🌐</div>
						<div class="arch-label-main">Browser</div>
						<div class="arch-sublabel">Voice Input + Text Chat</div>
					</div>
				</div>
				<div class="arch-connector">
					<span>1. Fetch context</span>
				</div>
				<div class="arch-row">
					<div class="arch-box mcpaas-box">
						<div class="arch-label-main">MCPaaS</div>
						<div class="arch-sublabel">Edge Delivery</div>
					</div>
					<div class="arch-arrow">→</div>
					<div class="arch-box faf-box">
						<div class="faf-label">.faf</div>
						<div class="arch-sublabel">Your Context</div>
					</div>
				</div>
				<div class="arch-connector">
					<span>2. Context delivered</span>
				</div>
				<div class="arch-row">
					<div class="arch-box grok-box">
						<div class="arch-icon">🍊</div>
						<div class="arch-label-main">xAI Grok</div>
						<div class="arch-sublabel">Voice: Leo • Streaming</div>
						<div class="context-note">System prompt includes .faf context</div>
					</div>
				</div>
				<div class="arch-result">
					<strong>Result:</strong> Grok knows your project. Every. Single. Time.
				</div>
			</div>
		</section>

		<section>
			<h2>The Demo: Three Acts</h2>

			<p>We structured the demo as a three-act proof:</p>

			<div class="demo-acts">
				<div class="act">
					<div class="act-number">Act 1</div>
					<h3>Baseline Pain</h3>
					<p>Standard voice assistant. No context. Watch the AI ask "What project are you working on?" over and over. Experience the frustration firsthand.</p>
				</div>

				<div class="act">
					<div class="act-number">Act 2</div>
					<h3>.faf Activation</h3>
					<p>Connect MCPaaS. Load the project context. The AI now knows: stack, architecture, team, goals. Ask anything—no preamble required.</p>
				</div>

				<div class="act">
					<div class="act-number">Act 3</div>
					<h3>Eternal Voice</h3>
					<p>Close the browser. Open it again. Different device. Same context. The AI remembers. That's eternal memory.</p>
				</div>
			</div>
		</section>

		<section>
			<h2>How It Works</h2>

			<h3>1. Context Loading</h3>

			<p>When FAF-Voice initializes, it calls MCPaaS to retrieve project context:</p>

			<div class="code-block">
				<pre><code>{`// Fetch context from MCPaaS
const context = await fetch('https://mcpaas.live/api/context', {
  method: 'POST',
  headers: { 'Authorization': 'Bearer ' + token },
  body: JSON.stringify({ project_id: 'faf-voice' })
});

const { faf, score, tier } = await context.json();
// score: 94, tier: "gold"`}</code></pre>
			</div>

			<h3>2. System Prompt Injection</h3>

			<p>The <code>.faf</code> content becomes part of Grok's system prompt:</p>

			<div class="code-block">
				<pre><code>{`const systemPrompt = \`
You are a voice assistant with full project context.

PROJECT CONTEXT:
\${faf}

You know this project intimately. Never ask the user to
re-explain their stack, goals, or architecture. Just help.
\`;`}</code></pre>
			</div>

			<h3>3. Voice Streaming</h3>

			<p>xAI's Grok API handles voice with the "Leo" voice model. Responses stream back in real-time:</p>

			<div class="code-block">
				<pre><code>{`const response = await xai.chat.completions.create({
  model: 'grok-2-voice',
  voice: 'Leo',
  messages: [
    { role: 'system', content: systemPrompt },
    { role: 'user', content: userSpeech }
  ],
  stream: true
});`}</code></pre>
			</div>
		</section>

		<section>
			<h2>The Results</h2>

			<div class="results-grid">
				<div class="result-box">
					<div class="result-label">Context Load Time</div>
					<div class="result-value">&lt;50ms</div>
					<div class="result-note">Edge delivery via MCPaaS</div>
				</div>
				<div class="result-box">
					<div class="result-label">Re-explanations Required</div>
					<div class="result-value">Zero</div>
					<div class="result-note">Context persists across sessions</div>
				</div>
				<div class="result-box">
					<div class="result-label">Context Drift</div>
					<div class="result-value">None</div>
					<div class="result-note">Same .faf, every time</div>
				</div>
				<div class="result-box">
					<div class="result-label">Session Persistence</div>
					<div class="result-value">Eternal</div>
					<div class="result-note">Context survives browser close</div>
				</div>
			</div>
		</section>

		<section>
			<h2>What We Learned</h2>

			<h3>Context is Infrastructure</h3>
			<p>Treating context as an endpoint (not a chat artifact) changes everything. MCPaaS made this possible without building custom persistence logic.</p>

			<h3>Voice Needs Memory</h3>
			<p>Voice interfaces are even more frustrating without context than text. You can't paste a README into a microphone. Persistent context is essential.</p>

			<h3>Edge Delivery Matters</h3>
			<p>Voice is real-time. Any latency in context loading is noticeable. MCPaaS's sub-millisecond edge delivery made the experience seamless.</p>

			<h3>The .faf Format Works</h3>
			<p>Grok understood the <code>.faf</code> structure immediately. Project, stack, human_context—all parsed and applied correctly. The format is AI-native by design.</p>
		</section>

		<section>
			<h2>Try It Yourself</h2>

			<p>FAF-Voice is open source. You can run it locally or deploy your own instance.</p>

			<div class="cta-grid">
				<div class="cta-box">
					<h3>FAF-Voice</h3>
					<p>Source code</p>
					<a href="https://github.com/Wolfe-Jam/FAF-Voice" class="cta-link">GitHub</a>
				</div>
				<div class="cta-box">
					<h3>MCPaaS</h3>
					<p>Context endpoint</p>
					<a href="https://mcpaas.live" class="cta-link">mcpaas.live</a>
				</div>
				<div class="cta-box">
					<h3>xAI API</h3>
					<p>Grok access</p>
					<a href="https://x.ai/api" class="cta-link">x.ai/api</a>
				</div>
				<div class="cta-box">
					<h3>FAF CLI</h3>
					<p>Create .faf files</p>
					<a href="https://www.npmjs.com/package/faf-cli" class="cta-link">npm</a>
				</div>
			</div>

			<h3>Prerequisites</h3>
			<ul>
				<li>xAI API key (for Grok access)</li>
				<li>A <code>.faf</code> file for your project</li>
				<li>MCPaaS account (or self-host)</li>
			</ul>

			<h3>Quick Start</h3>

			<div class="copy-box" onclick={() => copyText('git clone https://github.com/Wolfe-Jam/FAF-Voice\nnpm install\nexport XAI_API_KEY=your_key\nexport MCPAAS_TOKEN=your_token\nnpm run dev', 'quickstart')}>
				<div class="copy-code-multi">git clone https://github.com/Wolfe-Jam/FAF-Voice<br/>npm install<br/>export XAI_API_KEY=your_key<br/>export MCPAAS_TOKEN=your_token<br/>npm run dev</div>
				<button class="copy-btn">{copiedId === 'quickstart' ? 'Copied!' : 'Copy'}</button>
			</div>
		</section>

		<section>
			<h2>What's Next</h2>

			<p>FAF-Voice is a proof of concept. We're exploring:</p>

			<ul>
				<li><strong>Multi-model support</strong> — Claude, GPT-4, Gemini with the same context layer</li>
				<li><strong>Conversation history</strong> — MCPaaS storing conversation summaries</li>
				<li><strong>Team voices</strong> — Shared project context across team members</li>
				<li><strong>Mobile apps</strong> — iOS/Android with persistent context</li>
			</ul>

			<p>The core insight remains: context should be an endpoint, not a session artifact. MCPaaS makes that possible.</p>
		</section>

		<section class="share-section">
			<a href={xIntent} target="_blank" rel="noopener" class="share-btn">Post on X</a>
		</section>

		<section class="footer-note">
			<p>
				Built with .faf ☑️ Eternal voice memory. 🏎️
			</p>
			<p class="footer-links">
				<a href="https://github.com/Wolfe-Jam/FAF-Voice">FAF-Voice</a> ·
				<a href="https://mcpaas.live">MCPaaS</a> ·
				<a href="/blog/mcpaas-launch">MCPaaS Launch Post</a>
			</p>
		</section>
	</article>
</div>

<style>
	:global(body) {
		background: var(--faf-page-bg);
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

	.version-tag {
		display: inline-block;
		background: var(--faf-green-light);
		color: #000;
		padding: 0.25rem 0.75rem;
		border-radius: 4px;
		font-size: 0.9rem;
		font-weight: 600;
		margin: 0.5rem 0;
		font-family: 'SF Mono', 'Fira Code', Consolas, monospace;
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

	.category.case-study {
		background: var(--faf-green-light);
		color: #000;
	}

	.post-content {
		font-size: 1.1rem;
	}

	.lead {
		font-size: 1.2rem;
		line-height: 1.7;
		margin-bottom: 2rem;
		padding: 1.5rem;
		background: #f0fff4;
		border-radius: 8px;
		border-left: 4px solid var(--faf-green-light);
	}

	h2 {
		font-size: 1.8rem;
		margin: 3rem 0 1.5rem 0;
		color: #000;
		border-bottom: 1px solid #eee;
		padding-bottom: 0.5rem;
	}

	h3 {
		font-size: 1.3rem;
		margin: 2rem 0 1rem 0;
		color: #333;
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

	.challenge-box {
		background: var(--faf-surface)5f0;
		border: 2px solid #FF6B35;
		border-radius: 8px;
		padding: 1.5rem;
		margin: 2rem 0;
	}

	.challenge-box h3 {
		margin: 0 0 1rem 0;
		color: #FF6B35;
	}

	.challenge-box ul {
		margin: 0;
	}

	/* ARCHITECTURE DIAGRAM */
	.arch-diagram {
		background: #f8f9fa;
		padding: 2rem;
		border-radius: 12px;
		margin: 2rem 0;
	}

	.arch-row {
		display: flex;
		justify-content: center;
		gap: 1rem;
		align-items: center;
	}

	.arch-box {
		padding: 1rem 1.5rem;
		border-radius: 8px;
		text-align: center;
	}

	.browser-box {
		background: var(--faf-surface);
		border: 2px solid #e5e7eb;
		min-width: 180px;
	}

	.mcpaas-box {
		background: #FF6B35;
		color: white;
		min-width: 140px;
	}

	.faf-box {
		background: #1a1a1a;
		color: white;
		min-width: 120px;
	}

	.faf-label {
		font-weight: 700;
		font-family: 'SF Mono', monospace;
		font-size: 1.1rem;
	}

	.grok-box {
		background: linear-gradient(135deg, var(--faf-green-light) 0%, #22c55e 100%);
		color: #000;
		min-width: 200px;
	}

	.arch-icon {
		font-size: 1.5rem;
		margin-bottom: 0.25rem;
	}

	.arch-label-main {
		font-weight: 700;
		font-size: 1rem;
	}

	.arch-sublabel {
		font-size: 0.8rem;
		opacity: 0.8;
	}

	.context-note {
		font-size: 0.75rem;
		margin-top: 0.5rem;
		padding: 0.25rem 0.5rem;
		background: rgba(255,255,255,0.3);
		border-radius: 4px;
	}

	.arch-arrow {
		font-size: 1.5rem;
		color: #666;
	}

	.arch-connector {
		text-align: center;
		padding: 0.75rem 0;
		color: #666;
		font-size: 0.85rem;
	}

	.arch-connector span {
		background: #e5e7eb;
		padding: 0.25rem 0.75rem;
		border-radius: 4px;
	}

	.arch-result {
		text-align: center;
		margin-top: 1.5rem;
		padding: 1rem;
		background: #f0fdf4;
		border: 2px solid var(--faf-green-light);
		border-radius: 8px;
		color: #166534;
	}

	.demo-acts {
		display: grid;
		gap: 1.5rem;
		margin: 2rem 0;
	}

	.act {
		background: #f8f8f8;
		border-radius: 8px;
		padding: 1.5rem;
		border-left: 4px solid var(--faf-green-light);
	}

	.act-number {
		font-size: 0.85rem;
		font-weight: 700;
		color: var(--faf-green-light);
		text-transform: uppercase;
		letter-spacing: 0.1em;
		margin-bottom: 0.5rem;
	}

	.act h3 {
		margin: 0 0 0.5rem 0;
		color: #000;
	}

	.act p {
		margin: 0;
		color: #666;
	}

	.code-block {
		background: #1a1a1a;
		border-radius: 8px;
		padding: 1.25rem;
		margin: 1.5rem 0;
		overflow-x: auto;
	}

	.code-block pre {
		margin: 0;
	}

	.code-block code {
		display: block;
		color: #00ff88;
		background: none;
		padding: 0;
		font-size: 0.9rem;
		line-height: 1.5;
	}

	.results-grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 1rem;
		margin: 2rem 0;
	}

	.result-box {
		background: #1a1a1a;
		padding: 1.5rem;
		border-radius: 8px;
		text-align: center;
	}

	.result-label {
		font-size: 0.85rem;
		color: #888;
		margin-bottom: 0.5rem;
	}

	.result-value {
		font-size: 2rem;
		font-weight: 700;
		color: var(--faf-green-light);
		font-family: 'SF Mono', 'Fira Code', Consolas, monospace;
	}

	.result-note {
		font-size: 0.8rem;
		color: #666;
		margin-top: 0.5rem;
	}

	.cta-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1.5rem;
		margin: 2rem 0;
	}

	.cta-box {
		background: #f8f8f8;
		border: 2px solid var(--faf-green-light);
		padding: 1.5rem;
		border-radius: 8px;
		text-align: center;
	}

	.cta-box h3 {
		margin: 0 0 0.5rem 0;
		color: var(--faf-green-light);
		font-size: 1.1rem;
	}

	.cta-box p {
		margin: 0 0 0.75rem 0;
		font-size: 0.9rem;
		color: #666;
	}

	.cta-link {
		color: var(--faf-green-light);
		text-decoration: none;
		font-weight: 600;
		font-size: 0.95rem;
	}

	.cta-link:hover {
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
		margin-top: 4rem;
		padding-top: 2rem;
		border-top: 1px solid #eee;
		font-size: 0.95rem;
		color: #666;
		text-align: center;
	}

	.footer-links {
		margin-top: 1rem;
		font-size: 0.9rem;
	}

	.footer-links a {
		color: var(--faf-green-light);
		text-decoration: none;
	}

	.footer-links a:hover {
		text-decoration: underline;
	}

	a {
		color: #FF6B35;
	}

	a:hover {
		text-decoration: none;
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

	@media (max-width: 768px) {
		h1 {
			font-size: 1.75rem;
		}

		.cta-grid {
			grid-template-columns: 1fr;
		}

		.results-grid {
			grid-template-columns: 1fr;
		}

		.blog-post {
			padding: 1rem;
		}

		.architecture-diagram pre {
			font-size: 0.6rem;
		}
	}
</style>
