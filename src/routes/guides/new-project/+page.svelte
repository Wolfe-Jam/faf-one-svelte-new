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
			title: 'Define Your Project',
			file: 'README.md',
			when: 'Day 1, before any code',
			why: 'Forces you to articulate purpose. Can\'t fake it - you must know what you\'re building.',
		},
		{
			num: 2,
			title: 'Add Basic Structure',
			file: 'package.json / Cargo.toml',
			when: 'After README, before implementation',
			why: 'Detects project type, stack, and package manager.',
		},
		{
			num: 3,
			title: 'Generate project.faf',
			file: 'project.faf',
			when: 'After README + structure, before implementation',
			why: 'AI-readable context extracted from your foundation.',
			highlight: true
		},
		{
			num: 4,
			title: 'Generate CLAUDE.md',
			file: 'CLAUDE.md',
			when: 'After project.faf exists (optional)',
			why: 'Only if working primarily with Claude. project.faf works with ALL AIs.',
		},
		{
			num: 5,
			title: 'Commit the Foundation',
			file: 'Git commit',
			when: 'After .faf (and optionally CLAUDE.md)',
			why: 'AI context is committed before implementation.',
		},
		{
			num: 6,
			title: 'Build (Implementation)',
			file: 'src/, tests/',
			when: 'After foundation committed',
			why: 'AI has context to help from line one.',
		},
		{
			num: 7,
			title: 'Grow Context',
			file: 'faf auto',
			when: 'After significant progress',
			why: 'Auto-enhance from 30% → 80%.',
		},
		{
			num: 8,
			title: 'Refine',
			file: 'faf go',
			when: 'Before v1.0.0',
			why: 'Interactive polish to 85%+ (Bronze) or 100% (Trophy).',
		}
	];
</script>

<svelte:head>
	<title>New Project Guide - Start with AI-Ready Context | FAF</title>
	<meta name="description" content="Step-by-step guide to starting a new project with AI-ready context from day one. README first, .faf second, code third." />
</svelte:head>

<div class="guide-page">
	<div class="back-nav">
		<a href="/" class="back-link">← Back to Home</a>
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

		<!-- The Workflow -->
		<section class="workflow">
			<h2 class="section-title">The 8-Step Workflow</h2>

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
							<div class="code-example">
								<pre><code>{`git init
# Write README with WHO/WHAT/WHY
cat > README.md << 'EOF'
# my-project

Build something amazing.

## Mission
Solve [problem] for [users].

## Tech Stack
- Node.js
- TypeScript
- Express

## Quick Start
\`\`\`bash
npm install
npm run dev
\`\`\`
EOF`}</code></pre>
							</div>
						{/if}

						{#if step.num === 2}
							<div class="code-example">
								<pre><code># For Node.js/TypeScript
npm init -y

# For Rust
cargo init

# For Python
poetry init</code></pre>
							</div>
						{/if}

						{#if step.num === 3}
							<div class="code-example highlight-box">
								<div class="command-header">
									<span class="command-label">Run this command:</span>
									<button
										class="copy-btn-inline"
										onclick={() => copyCommand('faf init', 'step3')}
									>
										{copiedCommand === 'step3' ? 'Copied!' : 'Copy'}
									</button>
								</div>
								<pre><code>faf init</code></pre>
								<div class="result-preview">
									<p class="result-label">Result:</p>
									<ul class="result-list">
										<li>✅ Reads README.md (extracts 6 Ws)</li>
										<li>✅ Reads package.json (detects stack)</li>
										<li>✅ Generates project.faf (30-50% score)</li>
										<li>✅ AI-ready before first line of code</li>
									</ul>
								</div>
							</div>
						{/if}

						{#if step.num === 4}
							<div class="code-example">
								<div class="command-header">
									<span class="command-label">Optional (Claude users only):</span>
									<button
										class="copy-btn-inline"
										onclick={() => copyCommand('faf bi-sync', 'step4')}
									>
										{copiedCommand === 'step4' ? 'Copied!' : 'Copy'}
									</button>
								</div>
								<pre><code>faf bi-sync</code></pre>
								<p class="code-note">Creates CLAUDE.md from project.faf. project.faf alone works with ALL AIs.</p>
							</div>
						{/if}

						{#if step.num === 5}
							<div class="code-example">
								<pre><code>git add README.md package.json project.faf
git commit -m "Add project foundation

- README defines purpose
- package.json defines structure
- project.faf provides AI context

AI-ready before first line of code."</code></pre>
							</div>
						{/if}

						{#if step.num === 6}
							<div class="code-example">
								<pre><code># Now write your actual code
mkdir src
touch src/index.ts

# AI has context from day 1
# Attach project.faf to Claude/ChatGPT/Gemini
# "Help me build the API router"</code></pre>
							</div>
						{/if}

						{#if step.num === 7}
							<div class="code-example">
								<div class="command-header">
									<span class="command-label">Auto-enhance your context:</span>
									<button
										class="copy-btn-inline"
										onclick={() => copyCommand('faf auto', 'step7')}
									>
										{copiedCommand === 'step7' ? 'Copied!' : 'Copy'}
									</button>
								</div>
								<pre><code>faf auto</code></pre>
								<p class="code-note">Turbo-Cat discovers 153+ formats, grows score from 30% → 80%.</p>
							</div>
						{/if}

						{#if step.num === 8}
							<div class="code-example">
								<div class="command-header">
									<span class="command-label">Polish to perfection:</span>
									<button
										class="copy-btn-inline"
										onclick={() => copyCommand('faf go', 'step8')}
									>
										{copiedCommand === 'step8' ? 'Copied!' : 'Copy'}
									</button>
								</div>
								<pre><code>faf go</code></pre>
								<p class="code-note">Interactive interview to fill remaining gaps. Reach 85%+ (Bronze) or 100% (Trophy).</p>
							</div>
						{/if}
					</div>
				{/each}
			</div>
		</section>

		<!-- Timeline -->
		<section class="timeline">
			<h2 class="section-title">Timing Chart</h2>
			<div class="timeline-table">
				<table>
					<thead>
						<tr>
							<th>Step</th>
							<th>File</th>
							<th>When</th>
							<th>Score</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>1</td>
							<td>README.md</td>
							<td>Day 1</td>
							<td>-</td>
						</tr>
						<tr>
							<td>2</td>
							<td>package.json</td>
							<td>Day 1-2</td>
							<td>-</td>
						</tr>
						<tr class="highlight-row">
							<td>3</td>
							<td><strong>project.faf</strong></td>
							<td><strong>After docs</strong></td>
							<td><strong>30-50%</strong></td>
						</tr>
						<tr>
							<td>4</td>
							<td>CLAUDE.md</td>
							<td>Optional</td>
							<td>-</td>
						</tr>
						<tr>
							<td>5</td>
							<td>Git commit</td>
							<td>Before code</td>
							<td>-</td>
						</tr>
						<tr>
							<td>6</td>
							<td>src/index.ts</td>
							<td>Implementation</td>
							<td>-</td>
						</tr>
						<tr>
							<td>7</td>
							<td>faf auto</td>
							<td>Mid-dev</td>
							<td>80%</td>
						</tr>
						<tr>
							<td>8</td>
							<td>faf go</td>
							<td>Pre-release</td>
							<td>100%</td>
						</tr>
					</tbody>
				</table>
			</div>
		</section>

		<!-- Common Mistakes -->
		<section class="mistakes">
			<h2 class="section-title">Common Mistakes</h2>

			<div class="mistake-grid">
				<div class="mistake-card wrong">
					<div class="mistake-header">
						<span class="mistake-icon">❌</span>
						<h3>Wrong: Code First, Docs Later</h3>
					</div>
					<pre><code># Write all the code
git add src/
git commit -m "Initial implementation"

# Oh yeah, should add docs
echo "# Project" > README.md
faf init  # Low score, missed context</code></pre>
					<p class="mistake-problem"><strong>Problem:</strong> AI has no context during development.</p>
				</div>

				<div class="mistake-card wrong">
					<div class="mistake-header">
						<span class="mistake-icon">❌</span>
						<h3>Wrong: Empty Repo .faf</h3>
					</div>
					<pre><code>git init
faf init  # Nothing to extract from!
# Score: 5% (basically empty)</code></pre>
					<p class="mistake-problem"><strong>Problem:</strong> Can't extract 6 Ws from empty repo.</p>
				</div>

				<div class="mistake-card right">
					<div class="mistake-header">
						<span class="mistake-icon">✅</span>
						<h3>Right: Definition → Documentation → Implementation</h3>
					</div>
					<pre><code># 1. Define
README.md (WHO/WHAT/WHY)

# 2. Document for AI
faf init → project.faf (30-50%)

# 3. Build
src/index.ts (code)

# 4. Grow
faf auto → 80%</code></pre>
					<p class="mistake-problem"><strong>Result:</strong> AI context available from day 1.</p>
				</div>
			</div>
		</section>

		<!-- Quick Reference -->
		<section class="quick-ref">
			<h2 class="section-title">Quick Reference</h2>
			<div class="ref-box">
				<h3>One-Liner</h3>
				<p class="one-liner">"README first, .faf second, code third."</p>
			</div>
			<div class="ref-box">
				<h3>When to Add project.faf</h3>
				<p class="answer">After your README, before your first code. You need enough context to answer the 6 Ws. Usually this is when you have a README and basic structure (package.json, Cargo.toml, etc.). That gives you 30-50% initial score, then it grows as you build.</p>
			</div>
		</section>

		<!-- Next Steps -->
		<section class="next-steps">
			<h2 class="section-title">Next Steps</h2>
			<div class="next-grid">
				<a href="/guides/existing-project" class="next-card">
					<h3>Existing Project?</h3>
					<p>Add AI context to projects already in progress</p>
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

	/* Workflow */
	.workflow {
		margin-bottom: 4rem;
	}

	.steps-container {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
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

	/* Timeline */
	.timeline {
		margin-bottom: 4rem;
	}

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

	.ref-box h3 {
		color: #ff6b35;
		font-size: 1.25rem;
		margin: 0 0 1rem 0;
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
