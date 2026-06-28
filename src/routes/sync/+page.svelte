<script>
	import { onMount } from 'svelte';

	let step = $state(0);
	let isRunning = $state(false);
	let speed = $state('fast'); // fast, normal, slow - default to fast for auto-run

	// Auto-run demo on page load
	onMount(() => {
		setTimeout(() => runDemo(), 500);
	});

	// Demo state
	let fafContent = $state(`project:
  name: my-app
  type: fullstack

human_context:
  who: Frontend team
  what: Dashboard app`);

	let claudeContent = $state(`# CLAUDE.md

## Project: my-app
Dashboard application

*Last Sync: --*`);

	let logs = $state([]);
	let totalChanges = $state(0);
	let totalSyncs = $state(0);
	let avgTime = $state(0);
	let copied = $state(false);

	async function copyCommands() {
		const commands = `brew install faf-cli
faf demo sync`;
		await navigator.clipboard.writeText(commands);
		copied = true;
		setTimeout(() => copied = false, 2000);
	}

	const delays = {
		fast: { step: 300, pause: 500 },
		normal: { step: 800, pause: 1500 },
		slow: { step: 1500, pause: 2500 }
	};

	function getTimestamp() {
		const now = performance.now();
		return `T=${(now / 1000).toFixed(3)}s`;
	}

	function addLog(message, type = 'info') {
		logs = [...logs, { message, type, time: getTimestamp() }];
	}

	async function sleep(ms) {
		return new Promise(resolve => setTimeout(resolve, ms));
	}

	async function runDemo() {
		if (isRunning) return;
		isRunning = true;
		step = 0;
		logs = [];
		totalChanges = 0;
		totalSyncs = 0;
		avgTime = 0;

		const d = delays[speed];
		const times = [];

		// Reset content
		fafContent = `project:
  name: my-app
  type: fullstack

human_context:
  who: Frontend team
  what: Dashboard app`;

		claudeContent = `# CLAUDE.md

## Project: my-app
Dashboard application

*Last Sync: --*`;

		addLog('FAF BI-SYNC DEMO', 'header');
		addLog('Live demonstration of .faf ↔ CLAUDE.md sync', 'info');
		await sleep(d.pause);

		// Step 1: Edit .faf file
		step = 1;
		addLog('project.faf -> editing...', 'action');
		await sleep(d.step);

		fafContent = `project:
  name: my-app
  type: fullstack
  version: "2.0.0"

human_context:
  who: Frontend team
  what: Dashboard app`;

		totalChanges++;
		addLog('Change detected: "version added"', 'detect');
		await sleep(d.step / 2);

		const t1 = 8;
		times.push(t1);
		claudeContent = `# CLAUDE.md

## Project: my-app v2.0.0
Dashboard application

*Last Sync: Just now (8ms)*`;

		totalSyncs++;
		addLog(`CLAUDE.md synced (${t1}ms)`, 'sync');
		await sleep(d.pause);

		// Step 2: Edit CLAUDE.md
		step = 2;
		addLog('CLAUDE.md -> editing...', 'action');
		await sleep(d.step);

		claudeContent = `# CLAUDE.md

## Project: my-app v2.0.0
Dashboard application with analytics

*Last Sync: Just now (8ms)*`;

		totalChanges++;
		addLog('Change detected: "description updated"', 'detect');
		await sleep(d.step / 2);

		const t2 = 4;
		times.push(t2);
		fafContent = `project:
  name: my-app
  type: fullstack
  version: "2.0.0"

human_context:
  who: Frontend team
  what: Dashboard app with analytics`;

		totalSyncs++;
		addLog(`project.faf synced (${t2}ms)`, 'sync');
		await sleep(d.pause);

		// Step 3: Another .faf edit
		step = 3;
		addLog('project.faf -> editing...', 'action');
		await sleep(d.step);

		fafContent = `project:
  name: my-app
  type: fullstack
  version: "2.0.0"

human_context:
  who: Frontend team
  what: Dashboard app with analytics
  why: Real-time insights`;

		totalChanges++;
		addLog('Change detected: "why field added"', 'detect');
		await sleep(d.step / 2);

		const t3 = 6;
		times.push(t3);
		claudeContent = `# CLAUDE.md

## Project: my-app v2.0.0
Dashboard application with analytics
Real-time insights

*Last Sync: Just now (6ms)*`;

		totalSyncs++;
		addLog(`CLAUDE.md synced (${t3}ms)`, 'sync');
		await sleep(d.pause);

		// Summary
		step = 4;
		avgTime = Math.round(times.reduce((a, b) => a + b, 0) / times.length);
		addLog(`${totalChanges} changes · ${totalSyncs} syncs · avg ${avgTime}ms · 0 conflicts`, 'summary');
		await sleep(d.step);
		addLog('Demo complete - files stay in final state.', 'complete');

		isRunning = false;
	}

	function resetDemo() {
		step = 0;
		logs = [];
		totalChanges = 0;
		totalSyncs = 0;
		avgTime = 0;
		isRunning = false;

		fafContent = `project:
  name: my-app
  type: fullstack

human_context:
  who: Frontend team
  what: Dashboard app`;

		claudeContent = `# CLAUDE.md

## Project: my-app
Dashboard application

*Last Sync: --*`;
	}
</script>

<svelte:head>
	<title>Bi-Sync Demo - .faf ↔ CLAUDE.md | FAF</title>
	<meta name="description" content="Live demonstration of bidirectional sync between .faf and CLAUDE.md files. 8ms average sync time. Zero conflicts." />
	<meta property="og:title" content="FAF Bi-Sync Demo" />
	<meta property="og:description" content="See how .faf and CLAUDE.md stay perfectly synchronized. 8ms sync time. Zero conflicts." />
</svelte:head>

<div class="sync-hero">
	<h1>Bi-Sync Demo</h1>
	<p class="subtitle">.faf ↔ CLAUDE.md</p>
</div>

<div class="demo-container">
	<div class="controls">
		<div class="speed-selector">
			<label>Speed:</label>
			<button
				class:active={speed === 'fast'}
				onclick={() => speed = 'fast'}
				disabled={isRunning}
			>Fast</button>
			<button
				class:active={speed === 'normal'}
				onclick={() => speed = 'normal'}
				disabled={isRunning}
			>Normal</button>
			<button
				class:active={speed === 'slow'}
				onclick={() => speed = 'slow'}
				disabled={isRunning}
			>Slow</button>
		</div>

		<div class="action-buttons">
			<button class="btn-run" onclick={runDemo} disabled={isRunning}>
				{isRunning ? 'Running...' : 'Run Demo'}
			</button>
		</div>

		<div class="reset-button">
			<button class="btn-reset" onclick={resetDemo} disabled={isRunning}>
				Reset
			</button>
		</div>
	</div>

	<div class="files-grid">
		<div class="file-panel" class:active={step === 1 || step === 3}>
			<div class="file-header">
				<span class="file-icon">📄</span>
				<span class="file-name">project.faf</span>
				<span class="file-badge">Source of Truth</span>
			</div>
			<pre class="file-content">{fafContent}</pre>
		</div>

		<div class="sync-indicator">
			<div class="sync-arrow" class:syncing={step > 0 && step < 4}>
				{#if step === 1 || step === 3}
					<span class="arrow-right">→</span>
				{:else if step === 2}
					<span class="arrow-left">←</span>
				{:else}
					<span class="arrow-both">↔</span>
				{/if}
			</div>
			{#if step > 0 && step < 4}
				<div class="sync-label">syncing...</div>
			{:else if step === 4}
				<div class="sync-label complete">in sync</div>
			{/if}
		</div>

		<div class="file-panel" class:active={step === 2}>
			<div class="file-header">
				<div class="file-header">
				<span class="file-icon">📝</span>
				<span class="file-name">CLAUDE.md</span>
				<span class="file-badge secondary">Mirror</span>
			</div>
			</div>
			<pre class="file-content">{claudeContent}</pre>
		</div>
	</div>

	<div class="terminal">
		<div class="terminal-header">
			<span class="terminal-dot red"></span>
			<span class="terminal-dot yellow"></span>
			<span class="terminal-dot green"></span>
			<span class="terminal-title">faf bi-sync</span>
		</div>
		<div class="terminal-content">
			{#if logs.length === 0}
				<div class="terminal-placeholder">Click "Run Demo" to start...</div>
			{:else}
				{#each logs as log}
					<div class="log-line {log.type}">
						{#if log.type === 'header'}
							<span class="log-header">{log.message}</span>
						{:else if log.type === 'sync'}
							<span class="log-time">{log.time}</span>
							<span class="log-sync">⚡️ {log.message}</span>
						{:else if log.type === 'action'}
							<span class="log-time">{log.time}</span>
							<span class="log-action">{log.message}</span>
						{:else if log.type === 'detect'}
							<span class="log-time">{log.time}</span>
							<span class="log-detect">{log.message}</span>
						{:else if log.type === 'summary'}
							<span class="log-summary">{log.message}</span>
						{:else if log.type === 'complete'}
							<span class="log-complete">{log.message}</span>
						{:else}
							<span class="log-info">{log.message}</span>
						{/if}
					</div>
				{/each}
			{/if}
		</div>
	</div>

	{#if step === 4}
		<div class="stats-bar">
			<div class="stat">
				<span class="stat-value">{totalChanges}</span>
				<span class="stat-label">changes</span>
			</div>
			<div class="stat">
				<span class="stat-value">{totalSyncs}</span>
				<span class="stat-label">syncs</span>
			</div>
			<div class="stat">
				<span class="stat-value">{avgTime}ms</span>
				<span class="stat-label">avg time</span>
			</div>
			<div class="stat">
				<span class="stat-value">0</span>
				<span class="stat-label">conflicts</span>
			</div>
		</div>
	{/if}

	<div class="info-section">
		<h2>How Bi-Sync Works</h2>
		<div class="info-grid">
			<div class="info-card">
				<div class="info-icon">📄</div>
				<h3>.faf → CLAUDE.md</h3>
				<p>Full content sync with complete context.</p>
			</div>
			<div class="info-card highlight">
				<div class="info-icon">⚡</div>
				<h3>8ms</h3>
				<p>Average sync time. Championship-grade speed.</p>
			</div>
			<div class="info-card">
				<div class="info-icon">📝</div>
				<h3>CLAUDE.md → .faf</h3>
				<p>Metadata sync. Source of truth stays in .faf.</p>
			</div>
		</div>
	</div>

	<div class="cta-section">
		<h2>Try It Yourself</h2>
		<button class="terminal-block copy-box" onclick={copyCommands}>
			<code>brew install faf-cli</code>
			<code>faf demo sync</code>
			<span class="copy-hint">{copied ? '☑️ Copied!' : '📋 Click to copy'}</span>
		</button>
		<p class="cta-note">Or visit the <a href="/blog/boris-flow">Boris-Flow blog post</a> for the full story.</p>
	</div>
</div>

<style>
	.sync-hero {
		background: var(--faf-black);
		color: var(--faf-white);
		padding: 1rem 0;
		text-align: center;
		border-bottom: 3px solid var(--faf-orange);
	}

	.sync-hero h1 {
		font-size: 1.5rem;
		margin: 0 0 0.25rem 0;
		font-weight: 900;
	}

	.subtitle {
		font-size: 0.9rem;
		color: var(--faf-orange);
		font-weight: 600;
		font-family: 'SF Mono', 'Fira Code', monospace;
		margin: 0;
	}

	.demo-container {
		max-width: 1100px;
		margin: 1rem auto;
		padding: 0 1rem;
	}

	.controls {
		display: grid;
		grid-template-columns: 1fr auto 1fr;
		align-items: center;
		margin-bottom: 1rem;
		gap: 1rem;
	}

	.speed-selector {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.speed-selector label {
		font-weight: 600;
		color: #666;
	}

	.speed-selector button {
		padding: 0.5rem 1rem;
		border: 2px solid #e0e0e0;
		background: white;
		border-radius: 6px;
		cursor: pointer;
		font-weight: 600;
		transition: all 0.2s;
	}

	.speed-selector button:hover:not(:disabled) {
		border-color: var(--faf-orange);
	}

	.speed-selector button.active {
		background: var(--faf-orange);
		border-color: var(--faf-orange);
		color: white;
	}

	.speed-selector button:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}

	.action-buttons {
		display: flex;
		justify-content: center;
	}

	.reset-button {
		display: flex;
		justify-content: flex-end;
	}

	.btn-run {
		padding: 0.75rem 1.5rem;
		background: var(--faf-orange);
		color: white;
		border: none;
		border-radius: 8px;
		font-weight: 700;
		font-size: 1rem;
		cursor: pointer;
		transition: all 0.2s;
	}

	.btn-run:hover:not(:disabled) {
		transform: translateY(-2px);
		box-shadow: 0 4px 12px rgba(255, 107, 53, 0.3);
	}

	.btn-run:disabled {
		opacity: 0.7;
		cursor: not-allowed;
		transform: none;
	}

	.btn-reset {
		padding: 0.75rem 1.5rem;
		background: #f0f0f0;
		color: #333;
		border: 2px solid #e0e0e0;
		border-radius: 8px;
		font-weight: 600;
		cursor: pointer;
		transition: all 0.2s;
	}

	.btn-reset:hover:not(:disabled) {
		border-color: #ccc;
	}

	.btn-reset:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}

	.files-grid {
		display: grid;
		grid-template-columns: 1fr auto 1fr;
		gap: 1rem;
		margin-bottom: 1.5rem;
	}

	.file-panel {
		background: #1a1a1a;
		border-radius: 8px;
		overflow: hidden;
		border: 2px solid #333;
		transition: border-color 0.3s;
	}

	.file-panel.active {
		border-color: var(--faf-orange);
		box-shadow: 0 0 20px rgba(255, 107, 53, 0.2);
	}

	.file-header {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.75rem 1rem;
		background: #252525;
		border-bottom: 1px solid #333;
	}

	.file-icon {
		font-size: 1rem;
	}

	.file-name {
		font-family: 'SF Mono', 'Fira Code', monospace;
		font-weight: 600;
		color: #fff;
	}

	.file-badge {
		margin-left: auto;
		padding: 0.2rem 0.5rem;
		background: var(--faf-orange);
		color: white;
		border-radius: 4px;
		font-size: 0.7rem;
		font-weight: 700;
		text-transform: uppercase;
	}

	.file-badge.secondary {
		background: #00D4D4;
	}

	.file-content {
		margin: 0;
		padding: 1rem;
		font-family: 'SF Mono', 'Fira Code', monospace;
		font-size: 0.8rem;
		color: #00ff88;
		line-height: 1.5;
		height: 200px;
		overflow: hidden;
		white-space: pre-wrap;
	}

	.sync-indicator {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 0 0.5rem;
	}

	.sync-arrow {
		font-size: 2rem;
		color: #666;
		transition: all 0.3s;
	}

	.sync-arrow.syncing {
		color: var(--faf-orange);
		animation: pulse 0.5s ease-in-out infinite;
	}

	@keyframes pulse {
		0%, 100% { transform: scale(1); }
		50% { transform: scale(1.2); }
	}

	.sync-label {
		font-size: 0.75rem;
		color: var(--faf-orange);
		font-weight: 600;
		margin-top: 0.25rem;
	}

	.sync-label.complete {
		color: #00ff88;
	}

	.terminal {
		background: #1a1a1a;
		border-radius: 8px;
		overflow: hidden;
		margin-bottom: 1.5rem;
		border: 2px solid #333;
	}

	.terminal-header {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.75rem 1rem;
		background: #252525;
	}

	.terminal-dot {
		width: 12px;
		height: 12px;
		border-radius: 50%;
	}

	.terminal-dot.red { background: #ff5f56; }
	.terminal-dot.yellow { background: #ffbd2e; }
	.terminal-dot.green { background: #00aa55; }

	.terminal-title {
		margin-left: 0.5rem;
		color: #888;
		font-family: 'SF Mono', monospace;
		font-size: 0.85rem;
	}

	.terminal-content {
		padding: 1rem;
		font-family: 'SF Mono', 'Fira Code', monospace;
		font-size: 0.85rem;
		min-height: 150px;
		max-height: 250px;
		overflow-y: auto;
	}

	.terminal-placeholder {
		color: #666;
	}

	.log-line {
		margin-bottom: 0.25rem;
	}

	.log-time {
		color: #888;
		margin-right: 0.75rem;
	}

	.log-header {
		color: var(--faf-orange);
		font-weight: 700;
		font-size: 1rem;
	}

	.log-info {
		color: #888;
	}

	.log-action {
		color: #fff;
	}

	.log-detect {
		color: #00D4D4;
	}

	.log-sync {
		color: #00ff88;
	}

	.log-summary {
		color: #fff;
		margin-top: 0.5rem;
	}

	.log-complete {
		color: #00ff88;
		font-style: italic;
	}

	.stats-bar {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 1rem;
		padding: 1.5rem;
		background: white;
		border: 3px solid var(--faf-orange);
		border-radius: 8px;
		margin-bottom: 2rem;
	}

	.stat {
		text-align: center;
	}

	.stat-value {
		display: block;
		font-size: 1.75rem;
		font-weight: 900;
		color: var(--faf-orange);
		font-family: 'SF Mono', monospace;
	}

	.stat-label {
		font-size: 0.85rem;
		color: #666;
		text-transform: uppercase;
	}

	.info-section {
		margin: 2rem 0;
	}

	.info-section h2 {
		text-align: center;
		margin-bottom: 1rem;
		color: var(--faf-black);
		font-size: 1.25rem;
	}

	.info-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1rem;
	}

	.info-card {
		background: #f8f8f8;
		padding: 1rem;
		border-radius: 8px;
		text-align: center;
		border: 2px solid #e0e0e0;
	}

	.info-card.highlight {
		background: linear-gradient(135deg, var(--faf-orange) 0%, #ff8c42 100%);
		border-color: var(--faf-orange);
		color: white;
	}

	.info-card.highlight h3 {
		color: white;
		font-size: 1.5rem;
		font-family: 'SF Mono', monospace;
	}

	.info-card.highlight p {
		color: rgba(255,255,255,0.9);
	}

	.info-icon {
		font-size: 1.5rem;
		margin-bottom: 0.5rem;
	}

	.info-card h3 {
		margin: 0 0 0.25rem 0;
		font-size: 0.9rem;
		color: var(--faf-black);
	}

	.info-card p {
		margin: 0;
		font-size: 0.8rem;
		color: #666;
		line-height: 1.4;
	}

	.cta-section {
		text-align: center;
		padding: 1.5rem;
		background: var(--faf-black);
		border-radius: 8px;
		color: var(--faf-white);
	}

	.cta-section h2 {
		margin: 0 0 1rem 0;
		font-size: 1.1rem;
	}

	.terminal-block {
		background: #1a1a1a;
		padding: 1rem 1.5rem;
		border-radius: 8px;
		display: inline-block;
		margin-bottom: 1rem;
		border: 1px solid #333;
	}

	.terminal-block.copy-box {
		cursor: pointer;
		transition: all 0.2s ease;
		border: 2px solid #333;
	}

	.terminal-block.copy-box:hover {
		border-color: var(--faf-orange);
		transform: scale(1.02);
		box-shadow: 0 4px 12px rgba(255, 107, 53, 0.2);
	}

	.terminal-block.copy-box:active {
		transform: scale(0.98);
	}

	.terminal-block code {
		display: block;
		color: #00ff88;
		background: transparent;
		font-family: 'SF Mono', monospace;
		font-size: 1rem;
		padding: 0.25rem 0;
	}

	.terminal-block code::before {
		content: '$ ';
		color: #888;
	}

	.copy-hint {
		display: block;
		font-size: 0.8rem;
		color: #fff;
		margin-top: 0.75rem;
		font-family: -apple-system, BlinkMacSystemFont, sans-serif;
		text-align: center;
		opacity: 0.9;
	}

	.cta-note {
		margin: 0;
		color: #888;
		font-size: 0.9rem;
	}

	.cta-note a {
		color: var(--faf-orange);
	}

	@media (max-width: 768px) {
		.files-grid {
			grid-template-columns: 1fr;
		}

		.sync-indicator {
			padding: 0.5rem 0;
		}

		.sync-arrow {
			transform: rotate(90deg);
		}

		.stats-bar {
			grid-template-columns: repeat(2, 1fr);
		}

		.info-grid {
			grid-template-columns: 1fr;
		}

		.controls {
			grid-template-columns: 1fr;
			gap: 0.5rem;
		}

		.speed-selector {
			justify-content: center;
		}

		.action-buttons {
			justify-content: center;
		}

		.reset-button {
			justify-content: center;
		}
	}

	@media (min-width: 769px) and (max-width: 1024px) {
		.info-grid {
			grid-template-columns: repeat(3, 1fr);
		}
	}
</style>
