<script>
	import { onMount } from 'svelte';
	import { buildShareIntent } from '$lib/shareIntent.js';

	let codeTyped = $state('');
	let showOutput = $state(false);
	let editableRepoName = $state('your-repo');
	let reactCopied = $state(false);
	let vercelCopied = $state(false);
	let userCopied = $state(false);

	const reactCommand = 'npx faf-cli@latest git https://github.com/facebook/react';
	const vercelCommand = 'npx faf-cli@latest git https://github.com/vercel/next.js';
	const command = vercelCommand; // For terminal animation

	onMount(() => {
		// Type out command
		let index = 0;
		const typeInterval = setInterval(() => {
			if (index <= command.length) {
				codeTyped = command.slice(0, index);
				index++;
			} else {
				clearInterval(typeInterval);
				setTimeout(() => {
					showOutput = true;
				}, 500);
			}
		}, 30);

		return () => clearInterval(typeInterval);
	});

	async function copyReact() {
		await navigator.clipboard.writeText(reactCommand);
		reactCopied = true;
		setTimeout(() => reactCopied = false, 2000);
	}

	async function copyVercel() {
		await navigator.clipboard.writeText(vercelCommand);
		vercelCopied = true;
		setTimeout(() => vercelCopied = false, 2000);
	}

	async function copyUser() {
		const fullCommand = `npx faf-cli@latest git https://github.com/${editableRepoName}`;
		await navigator.clipboard.writeText(fullCommand);
		userCopied = true;
		setTimeout(() => userCopied = false, 2000);
	}
</script>

<svelte:head>
	<title>Try FAF - One Command, 2 Seconds | FAF</title>
	<meta name="description" content="Try FAF with any GitHub repo in one command. No install. No clone. 2 seconds." />
</svelte:head>

<div class="try-page">
	<div class="back-nav">
		<a href="/" class="back-link">←</a>
	</div>

	<main class="content">
		<!-- Hero -->
		<section class="hero">
			<h1 class="title">Try FAF in One Line</h1>
			<p class="subtitle">No install. No clone. 2 seconds.</p>
		</section>

		<!-- Instruction -->
		<p class="instruction-line centered">Try it on any Public GitHub Repo</p>

		<!-- React Example -->
		<p class="instruction-line">facebook/react</p>
		<div class="copy-box clickable" style="background: #1a1a1a !important;" onclick={copyReact}>
			<div class="code-display" style="color: #f5f5dc !important;">
				<span class="cmd-text">npx faf-cli@latest git https://github.com/</span><span class="repo-highlight">facebook/react</span>
			</div>
			<button class="copy-btn" onclick={copyReact}>{reactCopied ? 'Copied!' : 'Copy'}</button>
		</div>

		<!-- Vercel/Next.js Example -->
		<p class="instruction-line" style="margin-top: 1rem;">vercel/next.js</p>
		<div class="copy-box clickable" style="margin-top: 0.5rem; background: #1a1a1a !important;" onclick={copyVercel}>
			<div class="code-display" style="color: #f5f5dc !important;">
				<span class="cmd-text">npx faf-cli@latest git https://github.com/</span><span class="repo-highlight">vercel/next.js</span>
			</div>
			<button class="copy-btn" onclick={copyVercel}>{vercelCopied ? 'Copied!' : 'Copy'}</button>
		</div>

		<!-- Gap -->
		<div style="margin-top: 2rem;"></div>

		<!-- Try Your Own - Editable -->
		<p class="instruction-line centered">Now try yours--it's easy!</p>
		<div class="copy-box editable-box clickable" style="margin-top: 0.5rem; background: #1a1a1a !important;" onclick={copyUser}>
			<div class="editable-display">
				<span class="cmd-prefix">npx faf-cli@latest git https://github.com/</span><input
					type="text"
					class="editable-part"
					bind:value={editableRepoName}
					onclick={(e) => { e.stopPropagation(); e.target.select(); }}
					placeholder="your-repo"
				/>
			</div>
			<button class="copy-btn" onclick={copyUser}>{userCopied ? 'Copied!' : 'Copy'}</button>
		</div>

		<!-- Terminal -->
		<section class="terminal-section">
			<div class="terminal">
				<div class="terminal-header">
					<span class="dot red"></span>
					<span class="dot yellow"></span>
					<span class="dot green"></span>
					<span class="terminal-title">Terminal</span>
				</div>
				<div class="terminal-body">
					<div class="command-line">
						<span class="prompt">$</span>
						<span class="command">{codeTyped}</span>
						<span class="cursor">|</span>
					</div>

					{#if showOutput}
						<div class="output">
							<div class="output-line">⚡️ Fetching vercel/next.js...</div>
							<div class="output-line">📦 Analyzing: package.json, tsconfig.json, turbo.json...</div>
							<div class="output-line">🎯 Detected: Monorepo, React, TypeScript, Next.js</div>
							<div class="output-line">📝 Generated project.faf <strong>(1.8s)</strong></div>
							<div class="output-line success">✅ AI-Readiness: <strong>99%</strong> 🏆</div>
						</div>
					{/if}
				</div>
			</div>
		</section>

		<!-- Explanation -->
		<section class="explanation">
			<h2 class="section-title">That's it.</h2>
			<div class="points">
				<div class="point">
					<span class="point-icon">⚡️</span>
					<div class="point-content">
						<h3>2 seconds</h3>
						<p>Analyzes any public GitHub repo without cloning</p>
					</div>
				</div>
				<div class="point">
					<span class="point-icon">🔓</span>
					<div class="point-content">
						<h3>Zero setup</h3>
						<p>No install, no auth, no config. Just run it.</p>
					</div>
				</div>
				<div class="point">
					<span class="point-icon">🌍</span>
					<div class="point-content">
						<h3>Works everywhere</h3>
						<p>React, Vue, Python, Rust, Next.js, Svelte... 154+ frameworks</p>
					</div>
				</div>
			</div>
		</section>

		<!-- What Happens Next -->
		<section class="what-next">
			<h2 class="section-title">What you just got</h2>
			<div class="what-next-content">
				<div class="file-info">
					<span class="file-icon">📁</span>
					<div class="file-details">
						<h3>react.faf</h3>
						<p class="file-location">Saved in your current directory</p>
					</div>
				</div>

				<div class="usage-steps">
					<div class="usage-step">
						<h4>View it:</h4>
						<code>cat react.faf</code>
					</div>

					<div class="usage-step">
						<h4>Use it:</h4>
						<ul>
							<li>Copy/paste into Claude/ChatGPT/Gemini</li>
							<li>Or attach the file directly</li>
							<li>Instant project context - no explaining needed</li>
						</ul>
					</div>

					<p class="usage-result">
						<strong>That's it.</strong> AI now understands the entire project.
					</p>
				</div>
			</div>
		</section>

		<!-- Did You Realize -->
		<section class="insight-callout">
			<div class="insight-box">
				<span class="insight-icon">💡</span>
				<div class="insight-content">
					<h3 class="insight-title">Do you work on React? Next.js? Any major repo?</h3>
					<p class="insight-text">
						React has <strong>243K stars</strong> and <strong>50K+ forks</strong>.
						Thousands of developers work with it every day. You know the drill:
						Clone the repo. Spend 20+ minutes (or hours) reading README, docs,
						architecture guides just to orient yourself. Then ask AI for help...
						but it doesn't know the project structure.
					</p>
					<p class="insight-text">
						<strong>Not anymore.</strong> Run <code style="background: #0a0a0a; color: #00d4d4; padding: 0.25rem 0.5rem; border-radius: 4px; font-size: 0.95rem;">faf git facebook/react</code>
						once. AI instantly understands the entire codebase. Architecture, patterns,
						conventions - everything. Ready to help from line one.
					</p>
					<p class="insight-result">
						<span class="highlight-cyan">2 seconds</span> replaces
						<span class="highlight-warm">hours</span> of orientation.
						<br><strong>This is a no-brainer.</strong>
					</p>
				</div>
			</div>
		</section>

		<!-- GitHub Star + Share -->
		<section class="social-actions">
			<h2 class="section-title">If this helped you</h2>
			<div class="social-grid">
				<a
					href="https://github.com/Wolfe-Jam/faf-cli"
					target="_blank"
					rel="noopener noreferrer"
					class="action-btn github-btn"
				>
					<svg class="github-logo" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
						<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
					</svg>
					⭐️ Star on GitHub
				</a>

				<a
					href={buildShareIntent({ headline: "Score your repo's AI-readiness — free.", point1: '0–100% in seconds. No signup.', url: 'https://faf.one/try' })}
					target="_blank"
					rel="noopener noreferrer"
					class="action-btn x-btn"
				>
					<svg class="x-logo" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
						<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
					</svg>
					Share on X
				</a>
			</div>
		</section>

		<!-- Deep Dive Link -->
		<section class="deep-dive-link">
			<div class="divider"></div>
			<h3 class="deep-dive-title">
				Want to integrate with Claude Desktop?<br>
				(or any MCP setup)
			</h3>
			<p class="deep-dive-description">
				Install the MCP server for persistent AI context in Claude Desktop
			</p>
			<a href="/docs" class="deep-dive-btn">
				Deep Dive (For MCP Developers) →
			</a>
		</section>
	</main>
</div>

<style>
	.try-page {
		min-height: 100vh;
		background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
		color: #f5f5dc;
	}

	.back-nav {
		padding: 1rem 2rem;
		border-bottom: 1px solid #333;
	}

	.back-link {
		color: #ff6b35;
		text-decoration: none;
		font-weight: 500;
		font-size: 0.95rem;
		transition: opacity 0.2s;
	}

	.back-link:hover {
		opacity: 0.8;
	}

	.content {
		max-width: 900px;
		margin: 0 auto;
		padding: 1.5rem 2rem;
	}

	/* Hero */
	.hero {
		text-align: center;
		margin-bottom: 2rem;
	}

	.title {
		font-size: clamp(2.5rem, 6vw, 4rem);
		font-weight: 900;
		color: #f5f5dc;
		margin: 0 0 1rem 0;
		letter-spacing: -0.02em;
	}

	.subtitle {
		font-size: 1.5rem;
		color: #aaa;
		font-weight: 500;
		margin: 0;
	}

	.instruction-line {
		font-size: 0.875rem;
		color: #aaa;
		font-weight: 500;
		margin: 0 0 0.5rem 0;
		text-transform: lowercase;
	}

	.instruction-line.centered {
		text-align: center;
		color: #f5f5dc;
		font-size: 1.25rem;
		font-weight: 600;
		line-height: 1.6;
		margin: 0 0 1.5rem 0;
		text-transform: none;
	}

	/* Terminal */
	.terminal-section {
		margin-bottom: 2rem;
	}

	.terminal {
		background: #0a0a0a;
		border-radius: 12px;
		overflow: hidden;
		border: 1px solid #333;
		box-shadow: 0 8px 32px rgba(0, 0, 0, 0.6);
		margin-bottom: 1.5rem;
	}

	.terminal-header {
		background: #1a1a1a;
		padding: 0.75rem 1rem;
		display: flex;
		align-items: center;
		gap: 0.5rem;
		border-bottom: 1px solid #333;
	}

	.dot {
		width: 12px;
		height: 12px;
		border-radius: 50%;
	}

	.dot.red { background: #ff5f56; }
	.dot.yellow { background: #ffbd2e; }
	.dot.green { background: #27c93f; }

	.terminal-title {
		margin-left: auto;
		font-size: 0.75rem;
		color: #666;
		text-transform: uppercase;
		letter-spacing: 0.1em;
	}

	.terminal-body {
		padding: 1.5rem;
		font-family: 'Courier New', monospace;
		min-height: 250px;
	}

	.command-line {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		margin-bottom: 1.5rem;
		flex-wrap: wrap;
	}

	.prompt {
		color: #27c93f;
		font-weight: 700;
	}

	.command {
		color: #00d4d4;
		word-break: break-all;
	}

	.cursor {
		animation: blink 1s steps(1) infinite;
		color: #00d4d4;
	}

	@keyframes blink {
		50% { opacity: 0; }
	}

	.output {
		animation: fadeIn 0.5s ease-out;
	}

	.output-line {
		margin: 0.75rem 0;
		color: #aaa;
		font-size: 0.95rem;
		line-height: 1.6;
	}

	.output-line strong {
		color: #f5f5dc;
	}

	.output-line.success {
		color: #27c93f;
		font-weight: 700;
		margin-top: 1.5rem;
		font-size: 1.1rem;
	}

	@keyframes fadeIn {
		from { opacity: 0; transform: translateY(10px); }
		to { opacity: 1; transform: translateY(0); }
	}

	/* Copy Box */
	.copy-box {
		display: flex;
		align-items: center;
		gap: 1rem;
		padding: 1rem 1.5rem;
		background: #1a1a1a !important;
		border: 1px solid #333;
		border-radius: 8px;
	}

	.copy-box.clickable {
		cursor: pointer;
		transition: border-color 0.2s;
	}

	.copy-box.clickable:hover {
		border-color: #555;
	}

	.code-display {
		flex: 1;
		font-family: 'Courier New', monospace !important;
		color: #f5f5dc !important;
		background: transparent !important;
		padding: 0 !important;
		font-size: 0.95rem;
		font-weight: 700;
		word-break: break-all;
	}

	.editable-display {
		flex: 1;
		display: flex;
		align-items: center;
		font-family: 'Courier New', monospace !important;
		font-size: 0.95rem;
		font-weight: 700;
	}

	.cmd-prefix {
		color: #f5f5dc;
	}

	.cmd-text {
		color: #f5f5dc;
	}

	.repo-highlight {
		color: #00d4d4;
		font-weight: 700;
	}

	.editable-part {
		font-family: 'Courier New', monospace !important;
		color: #00d4d4 !important;
		background: transparent !important;
		border: none;
		outline: none;
		font-size: 0.95rem;
		font-weight: 700;
		padding: 0;
		min-width: 100px;
		max-width: 300px;
	}

	.editable-part::placeholder {
		color: #00d4d4;
		opacity: 0.6;
	}

	.editable-box {
		border: 2px solid rgba(255, 107, 53, 0.4);
	}

	.editable-box:focus-within {
		border-color: #ff6b35;
		box-shadow: 0 0 0 2px rgba(255, 107, 53, 0.2);
	}

	.copy-btn {
		padding: 0.6rem 1.25rem;
		background: rgba(255, 107, 53, 0.2);
		border: 1px solid rgba(255, 107, 53, 0.4);
		color: #ff6b35;
		border-radius: 6px;
		font-weight: 600;
		font-size: 0.85rem;
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

	/* Explanation */
	.explanation {
		margin-bottom: 2rem;
	}

	.section-title {
		font-size: 2rem;
		font-weight: 700;
		color: #f5f5dc;
		text-align: center;
		margin-bottom: 2rem;
	}

	.points {
		display: grid;
		gap: 2rem;
	}

	.point {
		display: flex;
		align-items: flex-start;
		gap: 1.5rem;
		padding: 1rem;
		background: #1a1a1a;
		border: 1px solid #333;
		border-radius: 12px;
		transition: all 0.3s;
	}

	.point:hover {
		border-color: #ff6b35;
		transform: translateY(-2px);
	}

	.point-icon {
		font-size: 2rem;
		flex-shrink: 0;
	}

	.point-content h3 {
		font-size: 1.25rem;
		color: #ff6b35;
		margin: 0 0 0.5rem 0;
	}

	.point-content p {
		color: #aaa;
		margin: 0;
		line-height: 1.6;
	}

	/* What Happens Next */
	.what-next {
		margin-bottom: 2rem;
	}

	.what-next-content {
		background: #1a1a1a;
		border: 1px solid #333;
		border-radius: 12px;
		padding: 2rem;
	}

	.file-info {
		display: flex;
		align-items: center;
		gap: 1.5rem;
		margin-bottom: 2rem;
		padding-bottom: 2rem;
		border-bottom: 1px solid #333;
	}

	.file-icon {
		font-size: 3rem;
		flex-shrink: 0;
	}

	.file-details h3 {
		font-size: 1.5rem;
		color: #00d4d4;
		margin: 0 0 0.5rem 0;
		font-family: 'Courier New', monospace;
	}

	.file-location {
		color: #aaa;
		margin: 0;
		font-size: 0.95rem;
	}

	.usage-steps {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}

	.usage-step h4 {
		color: #ff6b35;
		margin: 0 0 0.75rem 0;
		font-size: 1.1rem;
	}

	.usage-step code {
		background: #0a0a0a !important;
		color: #00d4d4 !important;
		padding: 0.75rem 1rem !important;
		border-radius: 6px;
		display: block;
		font-family: 'Courier New', monospace;
		font-size: 0.95rem;
		border: 1px solid #333;
	}

	.usage-step ul {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	.usage-step li {
		color: #f5f5dc;
		padding-left: 1.5rem;
		margin-bottom: 0.5rem;
		position: relative;
	}

	.usage-step li:before {
		content: '•';
		color: #00d4d4;
		position: absolute;
		left: 0;
		font-weight: bold;
	}

	.usage-result {
		margin-top: 2rem;
		padding-top: 2rem;
		border-top: 1px solid #333;
		text-align: center;
		color: #aaa;
		font-size: 1.1rem;
		line-height: 1.6;
	}

	.usage-result strong {
		color: #f5f5dc;
		font-size: 1.25rem;
	}

	/* Insight Callout */
	.insight-callout {
		margin-bottom: 2rem;
	}

	.insight-box {
		background: linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%);
		border: 2px solid #ff6b35;
		border-radius: 12px;
		padding: 2rem;
		display: flex;
		gap: 1.5rem;
		align-items: flex-start;
	}

	.insight-icon {
		font-size: 3rem;
		flex-shrink: 0;
		filter: drop-shadow(0 0 8px rgba(255, 107, 53, 0.5));
	}

	.insight-content {
		flex: 1;
	}

	.insight-title {
		font-size: 1.75rem;
		color: #ff6b35;
		margin: 0 0 1rem 0;
		font-weight: 700;
	}

	.insight-text {
		color: #aaa;
		font-size: 1.1rem;
		line-height: 1.6;
		margin: 0 0 1rem 0;
	}

	.insight-text strong {
		color: #f5f5dc;
		font-weight: 600;
	}

	.insight-result {
		margin-top: 1.5rem;
		padding-top: 1.5rem;
		border-top: 1px solid #333;
		font-size: 1.25rem;
		color: #f5f5dc;
		font-weight: 600;
		line-height: 1.6;
	}

	.highlight-cyan {
		color: #00d4d4;
		font-weight: 700;
	}

	.highlight-warm {
		color: #ff6b35;
		font-weight: 700;
	}

	/* Social Actions */
	.social-actions {
		margin-bottom: 2rem;
	}

	.social-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1.5rem;
		max-width: 600px;
		margin: 0 auto;
	}

	.action-btn {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: 0.75rem;
		padding: 1rem 1.5rem;
		text-decoration: none;
		font-weight: 600;
		font-size: 1rem;
		border-radius: 8px;
		transition: all 0.3s;
		border: 2px solid;
	}

	.github-btn {
		background: #000;
		border-color: #333;
		color: #f5f5dc;
	}

	.github-btn:hover {
		background: #1a1a1a;
		border-color: #555;
		transform: translateY(-2px);
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
	}

	.x-btn {
		background: #000;
		border-color: #333;
		color: #f5f5dc;
	}

	.x-btn:hover {
		background: #1a1a1a;
		border-color: #555;
		transform: translateY(-2px);
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
	}

	.github-logo {
		width: 24px;
		height: 24px;
		color: #f5f5dc;
		flex-shrink: 0;
	}

	.x-logo {
		width: 20px;
		height: 20px;
		color: #f5f5dc;
		flex-shrink: 0;
	}

	/* Deep Dive Link */
	.deep-dive-link {
		text-align: center;
		padding: 2rem 0;
	}

	.divider {
		width: 100px;
		height: 2px;
		background: linear-gradient(90deg, transparent, #ff6b35, transparent);
		margin: 0 auto 2rem;
	}

	.deep-dive-title {
		font-size: 1.5rem;
		color: #f5f5dc;
		margin: 0 0 1rem 0;
	}

	.deep-dive-description {
		color: #aaa;
		font-size: 1.1rem;
		margin: 0 0 2rem 0;
	}

	.deep-dive-btn {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		padding: 1rem 2rem;
		background: rgba(255, 107, 53, 0.2);
		border: 2px solid #ff6b35;
		color: #ff6b35;
		text-decoration: none;
		font-weight: 600;
		font-size: 1.1rem;
		border-radius: 8px;
		transition: all 0.3s;
	}

	.deep-dive-btn:hover {
		background: rgba(255, 107, 53, 0.3);
		transform: translateY(-2px);
		box-shadow: 0 4px 12px rgba(255, 107, 53, 0.3);
	}

	/* Mobile */
	@media (max-width: 768px) {
		.title {
			font-size: 2.5rem;
		}

		.subtitle {
			font-size: 1.25rem;
		}

		.terminal-body {
			padding: 1rem;
		}

		.copy-box {
			flex-direction: column;
			align-items: stretch;
		}

		.copy-btn {
			width: 100%;
		}

		.point {
			flex-direction: column;
			align-items: center;
			text-align: center;
		}
	}
</style>
