<script>
	import { onMount } from 'svelte';

	let frame = $state(0);
	let isRunning = $state(false);
	let interval;

	const projects = [
		{ name: '100% Big Orange', score: 100, color: '#FF6B35', emoji: '🍊' },
		{ name: '90% Gold', score: 90, color: '#FFD700', emoji: '🥇' },
		{ name: '75% Silver', score: 75, color: '#C0C0C0', emoji: '🥈' },
		{ name: '50% Red', score: 50, color: '#ff4444', emoji: '🔴' },
		{ name: '0% Dead', score: 0, color: '#333', emoji: '💀' }
	];

	// Health over 10 sessions based on score
	const healthCurves = {
		100: [100, 100, 100, 100, 100, 100, 100, 100, 100, 100], // Stable
		90:  [100, 95, 88, 92, 85, 80, 75, 82, 78, 85],          // Wobbles but survives
		75:  [100, 90, 82, 70, 55, 40, 25, 0, 0, 0],             // Declines, fails @7
		50:  [100, 75, 50, 25, 0, 0, 0, 0, 0, 0],                // Fast crash @4
		0:   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]                      // Never alive
	};

	function getHealth(score, frame) {
		return healthCurves[score][frame] || 0;
	}

	function getStatus(score, frame) {
		const health = getHealth(score, frame);
		if (score === 100) return { text: 'OPTIMIZED', color: '#00cc44' };
		if (score === 0) return { text: 'NEVER ALIVE', color: '#666' };
		if (health === 0) return { text: 'FATAL', color: '#ff4444' };
		if (health < 30) return { text: 'TERMINAL', color: '#ff8800' };
		if (health < 60) return { text: 'DRIFTING', color: '#ffcc00' };
		if (health < 85) return { text: 'UNSTABLE', color: '#88cc00' };
		return { text: 'STABLE', color: '#00cc44' };
	}

	function start() {
		if (isRunning) return;
		clearInterval(interval);
		frame = 0;
		isRunning = true;
		interval = setInterval(() => {
			if (frame < 9) {
				frame++;
			} else {
				clearInterval(interval);
				isRunning = false;
			}
		}, 800);
	}

	function reset() {
		clearInterval(interval);
		isRunning = false;
		frame = 0;
	}

	onMount(() => {
		// Auto-run simulation on load
		setTimeout(() => start(), 500);
		return () => clearInterval(interval);
	});
</script>

<div class="survival-container">
	<h2>Context Drift is Fatal</h2>
	<p class="subtitle">The C is the Cancer in Code. FAF is the cure.</p>

	<div class="controls">
		<button onclick={start} disabled={isRunning}>
			{isRunning ? 'Running...' : 'Run Again'}
		</button>
		<span class="session">Session: {frame + 1}/10</span>
	</div>

	<div class="projects-grid">
		{#each projects as project}
			{@const health = getHealth(project.score, frame)}
			{@const status = getStatus(project.score, frame)}
			<div class="project-card" class:dead={health === 0 && project.score !== 0} class:never-alive={project.score === 0}>
				<div class="project-header">
					<span class="emoji">{project.emoji}</span>
					<span class="name">{project.name}</span>
				</div>

				<div class="health-bar-container">
					<div
						class="health-bar"
						style="width: {health}%; background: {project.color};"
					></div>
				</div>

				<div class="health-value">
				{#if project.score === 0}
					<span class="dead-text">DEAD</span>
				{:else if health === 0}
					<span class="died-text">DIED</span>
				{:else}
					{health}%
				{/if}
			</div>

				<div class="status" style="color: {status.color};">
					{status.text}
				</div>

				<div class="heartbeat">
					{#each {length: 10} as _, i}
						<span
							class="beat"
							class:active={i <= frame}
							class:dead={i <= frame && healthCurves[project.score][i] === 0 && project.score !== 0}
							style="background: {i <= frame ? (healthCurves[project.score][i] > 0 ? project.color : '#ff4444') : '#333'};"
						></span>
					{/each}
				</div>
			</div>
		{/each}
	</div>

	<div class="legend">
		<h3>The Story</h3>
		<ul>
			<li><strong>100%</strong> Zero drift. Eternal context. Cancer-free. Optimized for AI.</li>
			<li><strong>90%</strong> Minor drift. Fights it off. Survives. Good info for AI.</li>
			<li><strong>75%</strong> Drift spreads. Terminal at session 7. Too low for AI.</li>
			<li><strong>50%</strong> Aggressive drift. Fatal by session 4.</li>
			<li><strong>0%</strong> Born without context. Never alive.</li>
		</ul>
	</div>
</div>

<style>
	.survival-container {
		background: #1a1a1a;
		border-radius: 16px;
		padding: 2rem;
		color: white;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
	}

	h2 {
		text-align: center;
		font-size: 2rem;
		margin-bottom: 0.5rem;
		color: #FF6B35;
	}

	.subtitle {
		text-align: center;
		color: #888;
		margin-bottom: 2rem;
	}

	.controls {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 1rem;
		margin-bottom: 2rem;
	}

	button {
		background: #FF6B35;
		color: white;
		border: none;
		padding: 0.75rem 1.5rem;
		border-radius: 8px;
		font-weight: 600;
		cursor: pointer;
		transition: all 0.3s;
	}

	button:hover:not(:disabled) {
		background: #e85a2c;
		transform: translateY(-2px);
	}

	button:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}

	.session {
		font-family: 'Roboto Mono', monospace;
		color: #00D4D4;
		font-weight: 600;
	}

	.projects-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: 1rem;
		margin-bottom: 2rem;
	}

	.project-card {
		background: #2a2a2a;
		border-radius: 12px;
		padding: 1.5rem;
		transition: all 0.5s;
	}

	.project-card.dead {
		opacity: 0.6;
		background: #1a1a1a;
		border: 3px solid #ff4444;
		box-shadow: 0 0 20px rgba(255, 68, 68, 0.4), inset 0 0 20px rgba(255, 68, 68, 0.1);
	}

	.project-card.never-alive {
		opacity: 0.3;
		background: #111;
	}

	.project-header {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		margin-bottom: 1rem;
	}

	.emoji {
		font-size: 1.5rem;
	}

	.name {
		font-weight: 600;
		font-size: 0.9rem;
	}

	.health-bar-container {
		height: 20px;
		background: #333;
		border-radius: 10px;
		overflow: hidden;
		margin-bottom: 0.5rem;
	}

	.health-bar {
		height: 100%;
		border-radius: 10px;
		transition: width 0.5s ease-out;
	}

	.health-value {
		text-align: center;
		font-family: 'Roboto Mono', monospace;
		font-size: 1.5rem;
		font-weight: 700;
		margin-bottom: 0.5rem;
	}

	.died-text {
		color: #ff6666;
		font-weight: 900;
		text-shadow: 0 0 15px rgba(255, 100, 100, 1);
	}

	.dead-text {
		color: #fff;
		font-weight: 900;
	}

	.status {
		text-align: center;
		font-weight: 700;
		font-size: 0.8rem;
		letter-spacing: 0.1em;
		margin-bottom: 1rem;
	}

	.heartbeat {
		display: flex;
		gap: 4px;
		justify-content: center;
	}

	.beat {
		width: 8px;
		height: 16px;
		border-radius: 2px;
		transition: all 0.3s;
	}

	.beat.active {
		transform: scaleY(1.2);
	}

	.beat.dead {
		background: #ff4444 !important;
	}

	.legend {
		background: #2a2a2a;
		border-radius: 12px;
		padding: 1.5rem;
	}

	.legend h3 {
		color: #FF6B35;
		margin-bottom: 1rem;
	}

	.legend ul {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	.legend li {
		padding: 0.5rem 0;
		border-bottom: 1px solid #333;
		color: #ccc;
	}

	.legend li:last-child {
		border-bottom: none;
	}

	.legend strong {
		color: white;
	}

	@media (max-width: 768px) {
		.projects-grid {
			grid-template-columns: 1fr;
		}

		h2 {
			font-size: 1.5rem;
		}
	}
</style>
