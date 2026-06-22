<script>
	let activeStep = $state(1);
	let copiedCommand = $state('');

	async function copyCommand(cmd, id) {
		await navigator.clipboard.writeText(cmd);
		copiedCommand = id;
		setTimeout(() => copiedCommand = '', 2000);
	}

	const steps = [
		{
			num: 1,
			title: 'Initial Extraction',
			file: 'faf init OR faf git',
			when: 'First step - choose based on context',
			why: 'Extract initial context from your project or any GitHub repo.',
			highlight: true
		},
		{
			num: 2,
			title: 'Auto-Enhance',
			file: 'faf auto',
			when: 'After initial extraction',
			why: 'Turbo-Cat discovers 153+ formats. Grows from 30% → 80%.',
			highlight: true
		},
		{
			num: 3,
			title: 'The Last 10-20%',
			file: 'faf go',
			when: 'When score is 80-90% (optional if already 100%)',
			why: 'Usually fills 1-2 missing 6 Ws (who/what/why). Stack detection is robust - blocker is almost always human context.',
			highlight: true
		}
	];
</script>

<svelte:head>
	<title>New Project Guide - Start with AI-Ready Context | FAF</title>
	<meta name="description" content="Step-by-step guide to starting a new project with AI-ready context from day one. README first, .faf second, code third." />
</svelte:head>

<div class="guide-page">
	<div class="back-nav">
		<a href="/" class="back-link">←</a>
	</div>

	<main class="content">
		<!-- Hero -->
		<section class="hero">
			<h1 class="title">New Project Guide</h1>
			<p class="subtitle">Start with AI-ready context from day one</p>
			<div class="golden-rule">
				<span class="rule-icon">🏆</span>
				<p class="rule-text">README first, .faf second, code third.</p>
			</div>
		</section>

		<!-- Philosophy -->
		<section class="philosophy">
			<h2 class="section-title">Why This Order Matters</h2>
			<div class="philosophy-grid">
				<div class="philosophy-card">
					<h3>README First</h3>
					<p>Forces you to articulate purpose before code. Human-readable definition that you can't fake.</p>
				</div>
				<div class="philosophy-card">
					<h3>project.faf Second</h3>
					<p>AI-readable version of your README context. Structured YAML format that machines can parse.</p>
				</div>
				<div class="philosophy-card">
					<h3>Code Third</h3>
					<p>Implementation follows definition. AI has context to help from the start. No documentation debt.</p>
				</div>
			</div>
		</section>

		<!-- README Tools -->
		<section class="readme-tools">
			<h2 class="section-title">README Generation Tools</h2>
			<p class="section-intro">Don't have a README yet? We've got you covered with two easy options:</p>
			<div class="tools-grid">
				<div class="tool-card">
					<h3>🌐 Web Tool: The 6 Ws</h3>
					<p class="tool-description">Fill out a simple form answering who/what/why/where/when/how. Copy the generated README.</p>
					<a href="https://www.faf.one/6ws" class="tool-link" target="_blank" rel="noopener noreferrer">
						faf.one/6ws →
					</a>
				</div>
				<div class="tool-card">
					<h3>⌨️ CLI Tool</h3>
					<p class="tool-description">Interactive command-line tool that asks the 6 Ws and generates a README for you.</p>
					<pre class="tool-command"><code>faf readme</code></pre>
					<p class="tool-note">Asks questions, writes README.md instantly</p>
				</div>
			</div>
		</section>

		<!-- The Workflow -->
		<section class="workflow">
			<h2 class="section-title">The 3 Magic Tools</h2>
			<p class="workflow-intro">Simple, powerful, championship-grade workflow.</p>

			<div class="steps-container">
				{#each steps as step}
					<div class="step-card" class:highlight={step.highlight} class:active={activeStep === step.num}>
						<div class="step-header">
							<div class="step-num">{step.num}</div>
							<div class="step-info">
								<h3 class="step-title">{step.title}</h3>
								<p class="step-file">{step.file}</p>
							</div>
						</div>

						<div class="step-details">
							<div class="detail-row">
								<span class="detail-label">When:</span>
								<span class="detail-value">{step.when}</span>
							</div>
							<div class="detail-row">
								<span class="detail-label">Why:</span>
								<span class="detail-value">{step.why}</span>
							</div>
						</div>

						{#if step.num === 1}
							<div class="code-example highlight-box">
								<div class="command-header">
									<span class="command-label">Decision: Choose your path</span>
								</div>
								<div class="decision-tree">
									<div class="decision-option">
										<h4>Have a GitHub repo URL?</h4>
										<div class="command-box">
											<pre><code>npx faf-cli git https://github.com/facebook/react</code></pre>
											<button
												class="copy-btn-inline"
												onclick={() => copyCommand('npx faf-cli git https://github.com/facebook/react', 'git')}
											>
												{copiedCommand === 'git' ? 'Copied!' : 'Copy'}
											</button>
										</div>
										<p class="option-note">⏱️ 2 seconds → 30-50% score. No clone needed!</p>
									</div>
									<div class="decision-divider">OR</div>
									<div class="decision-option">
										<h4>Working locally?</h4>
										<div class="command-box">
											<pre><code>faf init</code></pre>
											<button
												class="copy-btn-inline"
												onclick={() => copyCommand('faf init', 'init')}
											>
												{copiedCommand === 'init' ? 'Copied!' : 'Copy'}
											</button>
										</div>
										<p class="option-note">Extracts from your local files (README, package.json, etc.)</p>
									</div>
								</div>
							</div>
						{/if}

						{#if step.num === 2}
							<div class="code-example highlight-box">
								<div class="command-header">
									<span class="command-label">Auto-enhance your context:</span>
									<button
										class="copy-btn-inline"
										onclick={() => copyCommand('faf auto', 'auto')}
									>
										{copiedCommand === 'auto' ? 'Copied!' : 'Copy'}
									</button>
								</div>
								<pre><code>faf auto</code></pre>
								<div class="result-preview">
									<p class="result-label">What happens:</p>
									<ul class="result-list">
										<li>✨ Turbo-Cat discovers 153+ format types</li>
										<li>📊 Auto-fills detected stack slots</li>
										<li>🚀 Grows score from 30% → 80%</li>
										<li>⚡ Zero questions asked - fully automated</li>
									</ul>
								</div>
							</div>
						{/if}

						{#if step.num === 3}
							<div class="code-example highlight-box">
								<div class="command-header">
									<span class="command-label">The final 10-20% (optional if already 100%):</span>
									<button
										class="copy-btn-inline"
										onclick={() => copyCommand('faf go', 'go')}
									>
										{copiedCommand === 'go' ? 'Copied!' : 'Copy'}
									</button>
								</div>
								<pre><code>faf go</code></pre>
								<div class="result-preview">
									<p class="result-label">Interactive polish:</p>
									<ul class="result-list">
										<li>💡 Usually fills 1-2 missing 6 Ws (who/what/why/where/when/how)</li>
										<li>🎯 Stack detection is robust - blocker is human context</li>
										<li>🏆 80-90% → 100% Trophy</li>
										<li>⚡ Skip if faf auto already got you to 100%!</li>
									</ul>
								</div>
							</div>
						{/if}
					</div>
				{/each}
			</div>
		</section>

		<!-- Score Progression -->
		<section class="timeline">
			<h2 class="section-title">Score Progression</h2>
			<div class="timeline-table">
				<table>
					<thead>
						<tr>
							<th>Step</th>
							<th>Command</th>
							<th>Score</th>
							<th>What Happens</th>
						</tr>
					</thead>
					<tbody>
						<tr class="highlight-row">
							<td>1</td>
							<td><code>faf init</code> or <code>faf git</code></td>
							<td><strong>30-50%</strong></td>
							<td>Initial extraction from README + package files</td>
						</tr>
						<tr class="highlight-row">
							<td>2</td>
							<td><code>faf auto</code></td>
							<td><strong>80%</strong></td>
							<td>Turbo-Cat auto-discovers formats and fills slots</td>
						</tr>
						<tr class="highlight-row">
							<td>3</td>
							<td><code>faf go</code></td>
							<td><strong>100% 🏆</strong></td>
							<td>Interactive polish to championship grade</td>
						</tr>
					</tbody>
				</table>
			</div>
		</section>

		<!-- AI-Specific Files -->
		<section class="ai-files">
			<h2 class="section-title">AI-Specific Context Files</h2>
			<p class="section-intro">project.faf works with ALL AIs. But each AI also has its own prose version:</p>
			<div class="ai-files-grid">
				<div class="ai-file-card">
					<h3>CLAUDE.md</h3>
					<p>For Anthropic Claude</p>
					<code>faf bi-sync</code>
				</div>
				<div class="ai-file-card">
					<h3>GEMINI.md</h3>
					<p>For Google Gemini</p>
					<code>faf gemini</code>
				</div>
				<div class="ai-file-card">
					<h3>project.faf</h3>
					<p>Universal (all AIs)</p>
					<code>Always generated</code>
				</div>
			</div>
			<p class="ai-files-note">💡 <strong>Tip:</strong> project.faf is the source of truth. AI-specific files are generated from it.</p>
		</section>

		<!-- Common Mistakes -->
		<section class="mistakes">
			<h2 class="section-title">Common Mistakes</h2>

			<div class="mistake-grid">
				<div class="mistake-card wrong">
					<div class="mistake-header">
						<span class="mistake-icon">❌</span>
						<h3>Wrong: Skipping the Magic Tools</h3>
					</div>
					<pre><code># Just use faf init
faf init
# Stop here, start coding
# Score: 30% (incomplete)</code></pre>
					<p class="mistake-problem"><strong>Problem:</strong> Missing 70% of potential context. faf auto and faf go are free wins!</p>
				</div>

				<div class="mistake-card wrong">
					<div class="mistake-header">
						<span class="mistake-icon">❌</span>
						<h3>Wrong: Using faf init on GitHub Repos</h3>
					</div>
					<pre><code>git clone https://github.com/facebook/react
cd react
faf init  # Slow! Wrong tool!</code></pre>
					<p class="mistake-problem"><strong>Problem:</strong> Use faf git instead - no clone needed, 2 seconds.</p>
				</div>

				<div class="mistake-card right">
					<div class="mistake-header">
						<span class="mistake-icon">✅</span>
						<h3>Right: All 3 Magic Tools</h3>
					</div>
					<pre><code># 1. Initial extraction
faf init  # or: faf git <url>

# 2. Auto-enhance
faf auto

# 3. Polish
faf go

# Result: 100% 🏆</code></pre>
					<p class="mistake-problem"><strong>Result:</strong> Championship-grade AI context in 3 commands.</p>
				</div>
			</div>
		</section>

		<!-- Quick Reference -->
		<section class="quick-ref">
			<h2 class="section-title">Quick Reference</h2>

			<div class="ref-box caveat">
				<h3>💡 What Blocks 100%?</h3>
				<p class="answer">With a <strong>good README</strong>, <code>faf auto</code> can often reach 100% without needing <code>faf go</code>. And <code>faf git</code> on well-documented repos can score 100% on its own!</p>
				<p class="answer"><strong>When stuck at 80-90%:</strong> It's <em>very often</em> 1-2 missing 6 Ws (who/what/why/where/when/how). Tech stack detection is robust - the blocker is almost always human context.</p>
				<p class="answer"><code>faf go</code> asks 1-2 targeted questions like "Who is this for?" or "Why did you build this?" and you're at 100%.</p>
			</div>

			<div class="ref-box">
				<h3>The Decision Tree</h3>
				<ul class="decision-list">
					<li>Have a GitHub URL? → <code>faf git</code> (might be 100% already!)</li>
					<li>Working locally? → <code>faf init</code> then <code>faf auto</code></li>
					<li>Want to polish? → <code>faf go</code> (if not already 100%)</li>
				</ul>
			</div>

			<div class="ref-box">
				<h3>One-Liner</h3>
				<p class="one-liner">"faf init → faf auto → faf go = 100% 🏆"</p>
			</div>
		</section>

		<!-- Next Steps -->
		<section class="next-steps">
			<h2 class="section-title">Next Steps</h2>
			<div class="next-grid">
				<a href="/docs" class="next-card">
					<h3>Existing Project?</h3>
					<p>Use <code>faf git</code> or <code>faf auto</code> to add context to any repo</p>
					<span class="next-arrow">→</span>
				</a>
				<a href="/try" class="next-card">
					<h3>Try It Now</h3>
					<p>Generate context for any GitHub repo in 2 seconds</p>
					<span class="next-arrow">→</span>
				</a>
				<a href="/docs" class="next-card">
					<h3>Full Documentation</h3>
					<p>Complete reference for all FAF commands</p>
					<span class="next-arrow">→</span>
				</a>
			</div>
		</section>
	</main>
</div>

<style>
	.guide-page {
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
		max-width: 1200px;
		margin: 0 auto;
		padding: 2rem 2rem 4rem;
	}

	/* Hero */
	.hero {
		text-align: center;
		margin-bottom: 3rem;
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
		margin: 0 0 2rem 0;
	}

	.golden-rule {
		display: inline-flex;
		align-items: center;
		gap: 1rem;
		background: linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%);
		border: 2px solid #ff6b35;
		border-radius: 12px;
		padding: 1.5rem 2rem;
		margin: 0 auto;
	}

	.rule-icon {
		font-size: 2rem;
		flex-shrink: 0;
	}

	.rule-text {
		font-size: 1.25rem;
		font-weight: 700;
		color: #ff6b35;
		margin: 0;
	}

	/* Section Title */
	.section-title {
		font-size: 2rem;
		font-weight: 700;
		color: #f5f5dc;
		margin-bottom: 2rem;
		text-align: center;
	}

	/* Philosophy */
	.philosophy {
		margin-bottom: 4rem;
	}

	.philosophy-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		gap: 2rem;
	}

	.philosophy-card {
		background: #1a1a1a;
		border: 1px solid #333;
		border-radius: 12px;
		padding: 2rem;
		transition: all 0.3s;
	}

	.philosophy-card:hover {
		border-color: #ff6b35;
		transform: translateY(-4px);
	}

	.philosophy-card h3 {
		color: #ff6b35;
		font-size: 1.25rem;
		margin: 0 0 1rem 0;
	}

	.philosophy-card p {
		color: #aaa;
		line-height: 1.6;
		margin: 0;
	}

	/* README Tools */
	.readme-tools {
		margin-bottom: 4rem;
	}

	.tools-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 2rem;
	}

	.tool-card {
		background: linear-gradient(135deg, #1a1a1a 0%, #0a2a2a 100%);
		border: 2px solid #00d4d4;
		border-radius: 12px;
		padding: 2rem;
		transition: all 0.3s;
	}

	.tool-card:hover {
		border-color: #00ffff;
		transform: translateY(-4px);
		box-shadow: 0 8px 24px rgba(0, 212, 212, 0.2);
	}

	.tool-card h3 {
		color: #00d4d4;
		font-size: 1.25rem;
		margin: 0 0 1rem 0;
	}

	.tool-description {
		color: #aaa;
		line-height: 1.6;
		margin: 0 0 1.5rem 0;
	}

	.tool-link {
		display: inline-block;
		color: #ff6b35;
		text-decoration: none;
		font-weight: 600;
		font-size: 1.1rem;
		padding: 0.75rem 1.5rem;
		background: rgba(255, 107, 53, 0.1);
		border: 1px solid rgba(255, 107, 53, 0.3);
		border-radius: 8px;
		transition: all 0.2s;
	}

	.tool-link:hover {
		background: rgba(255, 107, 53, 0.2);
		border-color: #ff6b35;
		transform: translateX(4px);
	}

	.tool-command {
		background: #0a0a0a;
		border: 1px solid #333;
		border-radius: 6px;
		padding: 1rem;
		margin: 0 0 0.75rem 0;
	}

	.tool-command code {
		color: #00d4d4;
		font-family: 'Courier New', monospace;
		font-size: 1rem;
	}

	.tool-note {
		color: #888;
		font-size: 0.9rem;
		font-style: italic;
		margin: 0;
	}

	/* Workflow */
	.workflow {
		margin-bottom: 4rem;
	}

	.workflow-intro {
		text-align: center;
		color: #aaa;
		font-size: 1.1rem;
		margin: -1rem 0 2rem 0;
	}

	.steps-container {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}

	.decision-tree {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}

	.decision-option h4 {
		color: #00d4d4;
		font-size: 1.1rem;
		margin: 0 0 1rem 0;
	}

	.decision-divider {
		text-align: center;
		color: #ff6b35;
		font-weight: 700;
		font-size: 1.25rem;
		padding: 1rem 0;
	}

	.command-box {
		display: flex;
		align-items: center;
		gap: 1rem;
		background: #000;
		border: 1px solid #333;
		border-radius: 6px;
		padding: 1rem;
	}

	.command-box pre {
		flex: 1;
		margin: 0;
	}

	.command-box code {
		color: #f5f5dc;
		font-family: 'Courier New', monospace;
		font-size: 0.9rem;
	}

	.option-note {
		color: #888;
		font-size: 0.9rem;
		margin: 0.75rem 0 0 0;
		font-style: italic;
	}

	.step-card {
		background: #1a1a1a;
		border: 1px solid #333;
		border-radius: 12px;
		padding: 2rem;
		transition: all 0.3s;
	}

	.step-card.highlight {
		border: 2px solid #00d4d4;
		background: linear-gradient(135deg, #1a1a1a 0%, #0a2a2a 100%);
	}

	.step-card:hover {
		border-color: #555;
	}

	.step-header {
		display: flex;
		align-items: flex-start;
		gap: 1.5rem;
		margin-bottom: 1.5rem;
	}

	.step-num {
		width: 48px;
		height: 48px;
		background: #ff6b35;
		color: #0a0a0a;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 1.5rem;
		font-weight: 900;
		flex-shrink: 0;
	}

	.step-card.highlight .step-num {
		background: #00d4d4;
	}

	.step-info {
		flex: 1;
	}

	.step-title {
		font-size: 1.5rem;
		color: #f5f5dc;
		margin: 0 0 0.5rem 0;
		font-weight: 700;
	}

	.step-file {
		color: #00d4d4;
		font-family: 'Courier New', monospace;
		font-size: 0.95rem;
		margin: 0;
	}

	.step-details {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
		margin-bottom: 1.5rem;
	}

	.detail-row {
		display: flex;
		gap: 0.75rem;
	}

	.detail-label {
		color: #ff6b35;
		font-weight: 600;
		min-width: 60px;
	}

	.detail-value {
		color: #aaa;
		line-height: 1.6;
	}

	.code-example {
		background: #0a0a0a;
		border: 1px solid #333;
		border-radius: 8px;
		padding: 1.5rem;
		margin-top: 1rem;
	}

	.code-example.highlight-box {
		border: 2px solid #00d4d4;
		background: #0a1a1a;
	}

	.code-example pre {
		margin: 0;
		overflow-x: auto;
	}

	.code-example code {
		color: #f5f5dc;
		font-family: 'Courier New', monospace;
		font-size: 0.9rem;
		line-height: 1.6;
	}

	.command-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 1rem;
	}

	.command-label {
		color: #00d4d4;
		font-weight: 600;
		font-size: 0.9rem;
	}

	.copy-btn-inline {
		padding: 0.4rem 1rem;
		background: rgba(0, 212, 212, 0.2);
		border: 1px solid rgba(0, 212, 212, 0.4);
		color: #00d4d4;
		border-radius: 6px;
		font-weight: 600;
		font-size: 0.8rem;
		cursor: pointer;
		transition: all 0.2s;
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}

	.copy-btn-inline:hover {
		background: rgba(0, 212, 212, 0.3);
		border-color: #00d4d4;
	}

	.result-preview {
		margin-top: 1.5rem;
		padding-top: 1.5rem;
		border-top: 1px solid #333;
	}

	.result-label {
		color: #00d4d4;
		font-weight: 600;
		margin: 0 0 0.75rem 0;
	}

	.result-list {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	.result-list li {
		color: #aaa;
		padding-left: 1.5rem;
		margin-bottom: 0.5rem;
		position: relative;
	}

	.result-list li:before {
		content: '';
		position: absolute;
		left: 0;
		top: 0.5rem;
		width: 4px;
		height: 4px;
		background: #00d4d4;
		border-radius: 50%;
	}

	.code-note {
		color: #888;
		font-size: 0.85rem;
		margin: 1rem 0 0 0;
		font-style: italic;
	}

	/* Score Progression */
	.timeline {
		margin-bottom: 4rem;
	}

	/* AI-Specific Files */
	.ai-files {
		margin-bottom: 4rem;
	}

	.section-intro {
		text-align: center;
		color: #aaa;
		font-size: 1.05rem;
		margin: -1rem 0 2rem 0;
		line-height: 1.6;
	}

	.ai-files-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 1.5rem;
		margin-bottom: 1.5rem;
	}

	.ai-file-card {
		background: #1a1a1a;
		border: 1px solid #333;
		border-radius: 12px;
		padding: 1.5rem;
		text-align: center;
		transition: all 0.3s;
	}

	.ai-file-card:hover {
		border-color: #00d4d4;
		transform: translateY(-2px);
	}

	.ai-file-card h3 {
		color: #00d4d4;
		font-size: 1.25rem;
		margin: 0 0 0.5rem 0;
		font-family: 'Courier New', monospace;
	}

	.ai-file-card p {
		color: #aaa;
		margin: 0 0 1rem 0;
		font-size: 0.95rem;
	}

	.ai-file-card code {
		color: #ff6b35;
		background: #0a0a0a;
		padding: 0.5rem 1rem;
		border-radius: 6px;
		display: inline-block;
		font-size: 0.85rem;
	}

	.ai-files-note {
		text-align: center;
		color: #aaa;
		font-size: 1rem;
		margin: 0;
		padding: 1.5rem;
		background: rgba(0, 212, 212, 0.1);
		border-radius: 8px;
	}

	.ai-files-note strong {
		color: #00d4d4;
	}

	/* Timeline */

	.timeline-table {
		overflow-x: auto;
	}

	.timeline-table table {
		width: 100%;
		border-collapse: collapse;
		background: #1a1a1a;
		border: 1px solid #333;
		border-radius: 12px;
		overflow: hidden;
	}

	.timeline-table th {
		background: #0a0a0a;
		color: #ff6b35;
		padding: 1rem;
		text-align: left;
		font-weight: 600;
		border-bottom: 2px solid #333;
	}

	.timeline-table td {
		padding: 1rem;
		color: #aaa;
		border-bottom: 1px solid #333;
	}

	.timeline-table tr:last-child td {
		border-bottom: none;
	}

	.timeline-table .highlight-row {
		background: rgba(0, 212, 212, 0.1);
	}

	.timeline-table .highlight-row td {
		color: #f5f5dc;
	}

	/* Mistakes */
	.mistakes {
		margin-bottom: 4rem;
	}

	.mistake-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
		gap: 2rem;
	}

	.mistake-card {
		background: #1a1a1a;
		border: 2px solid #333;
		border-radius: 12px;
		padding: 2rem;
	}

	.mistake-card.wrong {
		border-color: #ff3333;
		background: linear-gradient(135deg, #1a1a1a 0%, #2a1010 100%);
	}

	.mistake-card.right {
		border-color: #27c93f;
		background: linear-gradient(135deg, #1a1a1a 0%, #102a10 100%);
	}

	.mistake-header {
		display: flex;
		align-items: center;
		gap: 1rem;
		margin-bottom: 1.5rem;
	}

	.mistake-icon {
		font-size: 2rem;
		flex-shrink: 0;
	}

	.mistake-header h3 {
		color: #f5f5dc;
		font-size: 1.1rem;
		margin: 0;
		font-weight: 700;
	}

	.mistake-card pre {
		background: #0a0a0a;
		border: 1px solid #333;
		border-radius: 8px;
		padding: 1rem;
		margin-bottom: 1rem;
		overflow-x: auto;
	}

	.mistake-card code {
		color: #f5f5dc;
		font-family: 'Courier New', monospace;
		font-size: 0.85rem;
		line-height: 1.6;
	}

	.mistake-problem {
		color: #aaa;
		margin: 0;
		font-size: 0.95rem;
	}

	.mistake-problem strong {
		color: #f5f5dc;
	}

	/* Quick Reference */
	.quick-ref {
		margin-bottom: 4rem;
	}

	.ref-box {
		background: #1a1a1a;
		border: 1px solid #333;
		border-radius: 12px;
		padding: 2rem;
		margin-bottom: 1.5rem;
	}

	.ref-box:last-child {
		margin-bottom: 0;
	}

	.ref-box.caveat {
		border: 2px solid #00d4d4;
		background: linear-gradient(135deg, #1a1a1a 0%, #0a2a2a 100%);
	}

	.ref-box.caveat h3 {
		color: #00d4d4;
	}

	.ref-box h3 {
		color: #ff6b35;
		font-size: 1.25rem;
		margin: 0 0 1rem 0;
	}

	.decision-list {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	.decision-list li {
		color: #aaa;
		padding: 0.75rem 0;
		border-bottom: 1px solid #333;
		font-size: 1.05rem;
		line-height: 1.6;
	}

	.decision-list li:last-child {
		border-bottom: none;
	}

	.decision-list code {
		color: #00d4d4;
		background: #0a0a0a;
		padding: 0.25rem 0.5rem;
		border-radius: 4px;
		font-family: 'Courier New', monospace;
	}

	.one-liner {
		color: #00d4d4;
		font-size: 1.5rem;
		font-weight: 700;
		margin: 0;
		font-family: 'Courier New', monospace;
	}

	.answer {
		color: #aaa;
		line-height: 1.8;
		margin: 0;
		font-size: 1.05rem;
	}

	/* Next Steps */
	.next-steps {
		margin-bottom: 2rem;
	}

	.next-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		gap: 2rem;
	}

	.next-card {
		background: #1a1a1a;
		border: 2px solid #333;
		border-radius: 12px;
		padding: 2rem;
		text-decoration: none;
		display: flex;
		flex-direction: column;
		transition: all 0.3s;
		position: relative;
	}

	.next-card:hover {
		border-color: #ff6b35;
		transform: translateY(-4px);
	}

	.next-card h3 {
		color: #ff6b35;
		font-size: 1.25rem;
		margin: 0 0 0.75rem 0;
	}

	.next-card p {
		color: #aaa;
		line-height: 1.6;
		margin: 0;
		flex: 1;
	}

	.next-arrow {
		color: #ff6b35;
		font-size: 1.5rem;
		margin-top: 1rem;
		font-weight: 700;
	}

	/* Mobile */
	@media (max-width: 768px) {
		.title {
			font-size: 2.5rem;
		}

		.subtitle {
			font-size: 1.25rem;
		}

		.golden-rule {
			flex-direction: column;
			text-align: center;
		}

		.philosophy-grid,
		.mistake-grid,
		.next-grid {
			grid-template-columns: 1fr;
		}

		.step-header {
			flex-direction: column;
		}

		.detail-row {
			flex-direction: column;
			gap: 0.25rem;
		}
	}
</style>
