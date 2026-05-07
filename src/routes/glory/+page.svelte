<script lang="ts">
	type Project = {
		project_id: string;
		project_name: string;
		who: string;
		new_score: number;
		has_orange: boolean;
		security_status: string;
		github_url: string;
		install_url?: string;
	};

	const PROJECTS: Project[] = [
		{
			project_id: 'faf-cli',
			project_name: 'faf-cli',
			who: 'wolfejam',
			new_score: 100,
			has_orange: true,
			security_status: 'SW-02 LOCKED',
			github_url: 'https://github.com/Wolfe-Jam/faf-cli',
			install_url: 'https://www.npmjs.com/package/faf-cli'
		},
		{
			project_id: 'claude-faf-mcp',
			project_name: 'claude-faf-mcp',
			who: 'wolfejam',
			new_score: 100,
			has_orange: true,
			security_status: 'SW-02 LOCKED',
			github_url: 'https://github.com/Wolfe-Jam/claude-faf-mcp',
			install_url: 'https://www.npmjs.com/package/claude-faf-mcp'
		},
		{
			project_id: 'gemini-faf-mcp',
			project_name: 'gemini-faf-mcp',
			who: 'Gemini Dev Team',
			new_score: 100,
			has_orange: false,
			security_status: 'ELITE',
			github_url: 'https://github.com/Wolfe-Jam/gemini-faf-mcp',
			install_url: 'https://pypi.org/project/gemini-faf-mcp/'
		}
	];

	// "Breathing" timestamp — re-renders on each page load (SSR + hydration)
	const lastMutation = new Date().toLocaleString('en-US', {
		dateStyle: 'short',
		timeStyle: 'medium'
	});

	function isUndisputed(p: Project) {
		return p.new_score === 100 && p.has_orange;
	}
</script>

<svelte:head>
	<title>THE GLORY WALL | FAF Meritocracy</title>
	<meta
		name="description"
		content="The FAF Glory Wall — projects scoring 100% on AI-readiness. Real-time meritocracy. Context that persists."
	/>
	<meta property="og:title" content="THE GLORY WALL | FAF Meritocracy" />
	<meta property="og:description" content="Projects scoring 100% on FAF AI-readiness. The trophy room." />
	<meta property="og:type" content="website" />
	<meta property="og:image" content="https://faf.one/og-image-1200x630.png?v=2" />
</svelte:head>

<main class="glory">
	<header class="glory-header">
		<h1>THE GLORY WALL</h1>
		<p class="subtitle">Real-time SW-02 Telemetry · FAF Meritocracy</p>

		<div class="legend">
			<span class="legend-item">
				<span class="legend-icon">🍊</span>
				THE UNDISPUTED
			</span>
			<span class="legend-item">
				<span class="legend-icon">🏆</span>
				THE ELITE
			</span>
		</div>
	</header>

	<section class="grid">
		{#each PROJECTS as project}
			{@const undisputed = isUndisputed(project)}
			<a
				href={project.github_url}
				target="_blank"
				rel="noopener"
				class="card-link"
				aria-label="{project.project_name} — view on GitHub"
			>
				<div class="card-wrapper" class:undisputed>
					<article class="card">
						<header class="card-head">
							<div>
								<span class="guardian">CONTEXT GUARDIAN: {project.who}</span>
								<h3 class="project-name">{project.project_name}</h3>
							</div>
							<div class="emoji">{undisputed ? '🍊' : '🏆'}</div>
						</header>

						<div class="metrics">
							<div class="metric">
								<p class="metric-label">LOGIC SCORE</p>
								<p class="metric-value" class:score-undisputed={undisputed}>
									{project.new_score}%
								</p>
							</div>
							<div class="metric">
								<p class="metric-label">STATUS</p>
								<p class="metric-status">{project.security_status}</p>
							</div>
						</div>

						<div class="footer-row">
							<span class="dot" class:dot-undisputed={undisputed}></span>
							Last Mutation: {lastMutation}
						</div>
					</article>
				</div>
			</a>
		{/each}
	</section>

	<footer class="glory-footer">
		<p class="motto">EFFICIENCY IS THE GOAL, BUT WE PLAY FOR THE 🏆. YNWA.</p>
		<nav class="exits">
			<a href="/">faf.one</a>
			<span class="sep">·</span>
			<a href="/blog">Blog</a>
			<span class="sep">·</span>
			<a
				href="https://twitter.com/intent/tweet?text=The%20FAF%20Glory%20Wall%20%E2%80%94%20projects%20scoring%20100%25%20on%20AI-readiness.%20%F0%9F%8D%8A&url=https%3A%2F%2Ffaf.one%2Fglory"
				target="_blank"
				rel="noopener">Share on X</a
			>
		</nav>
	</footer>
</main>

<style>
	.glory {
		min-height: 100vh;
		background: #000;
		color: #fff;
		padding: 0 1.5rem;
	}

	.glory-header {
		max-width: 1280px;
		margin: 0 auto;
		padding: 4rem 0 2rem;
		text-align: center;
	}

	.glory-header h1 {
		font-size: clamp(2.5rem, 6vw, 4rem);
		font-weight: 900;
		letter-spacing: -0.04em;
		font-style: italic;
		margin: 0 0 1rem;
		line-height: 1;
	}

	.subtitle {
		font-family: ui-monospace, 'SFMono-Regular', Menlo, monospace;
		font-size: 0.875rem;
		color: #6b7280;
		margin: 0;
	}

	.legend {
		display: flex;
		justify-content: center;
		gap: 2rem;
		margin-top: 2rem;
		font-family: ui-monospace, 'SFMono-Regular', Menlo, monospace;
		font-size: 0.75rem;
	}

	.legend-item {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.legend-icon {
		font-size: 1.5rem;
	}

	.grid {
		max-width: 1280px;
		margin: 0 auto;
		display: grid;
		grid-template-columns: 1fr;
		gap: 2rem;
	}
	@media (min-width: 768px) {
		.grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}
	@media (min-width: 1024px) {
		.grid {
			grid-template-columns: repeat(3, 1fr);
		}
	}

	.card-link {
		display: block;
		text-decoration: none;
		color: inherit;
		transition: transform 0.2s ease;
	}
	.card-link:hover {
		transform: translateY(-2px);
	}

	.card-wrapper {
		position: relative;
		padding: 4px;
		border-radius: 1rem;
		background: #27272a;
		transition: all 0.5s ease;
	}

	.card-wrapper.undisputed {
		background: linear-gradient(135deg, #f97316, #ea580c, #dc2626);
		box-shadow: 0 0 30px rgba(249, 115, 22, 0.3);
		animation: orange-glow 2s ease-in-out infinite;
	}

	@keyframes orange-glow {
		0%,
		100% {
			box-shadow: 0 0 15px rgba(249, 115, 22, 0.4);
			filter: brightness(1);
		}
		50% {
			box-shadow: 0 0 35px rgba(249, 115, 22, 0.7);
			filter: brightness(1.3);
		}
	}

	.card {
		background: #09090b;
		border-radius: 0.75rem;
		padding: 1.5rem;
		height: 100%;
		border: 1px solid rgba(39, 39, 42, 0.5);
		display: flex;
		flex-direction: column;
	}

	.card-head {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		margin-bottom: 1rem;
	}

	.guardian {
		font-size: 0.625rem;
		font-family: ui-monospace, 'SFMono-Regular', Menlo, monospace;
		color: #71717a;
		text-transform: uppercase;
		letter-spacing: 0.2em;
	}

	.project-name {
		font-size: 1.25rem;
		font-weight: 700;
		color: #fff;
		margin: 0.25rem 0 0;
	}

	.emoji {
		font-size: 1.875rem;
		filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.3));
	}

	.metrics {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1rem;
		margin-bottom: 1.5rem;
	}

	.metric {
		background: rgba(24, 24, 27, 0.5);
		padding: 0.75rem;
		border-radius: 0.5rem;
		border: 1px solid #27272a;
	}

	.metric-label {
		font-size: 0.625rem;
		color: #71717a;
		font-family: ui-monospace, 'SFMono-Regular', Menlo, monospace;
		margin: 0;
	}

	.metric-value {
		font-size: 1.125rem;
		font-weight: 700;
		color: #d4d4d8;
		margin: 0.25rem 0 0;
	}

	.metric-value.score-undisputed {
		color: #fb923c;
	}

	.metric-status {
		font-size: 0.75rem;
		font-weight: 700;
		color: #d4d4d8;
		text-transform: uppercase;
		margin: 0.25rem 0 0;
	}

	.footer-row {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		font-size: 0.5625rem;
		font-family: ui-monospace, 'SFMono-Regular', Menlo, monospace;
		color: #52525b;
		text-transform: uppercase;
		margin-top: auto;
	}

	.dot {
		display: inline-block;
		width: 6px;
		height: 6px;
		border-radius: 50%;
		background: #3f3f46;
	}

	.dot-undisputed {
		background: #f97316;
		animation: ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;
	}

	@keyframes ping {
		75%,
		100% {
			transform: scale(2);
			opacity: 0;
		}
	}

	.glory-footer {
		max-width: 1280px;
		margin: 6rem auto 2rem;
		text-align: center;
	}

	.motto {
		font-family: ui-monospace, 'SFMono-Regular', Menlo, monospace;
		font-size: 0.75rem;
		color: #a1a1aa;
		text-transform: uppercase;
		letter-spacing: 0.2em;
		margin: 0 0 1.5rem;
	}

	.exits {
		display: flex;
		justify-content: center;
		gap: 0.75rem;
		font-family: ui-monospace, 'SFMono-Regular', Menlo, monospace;
		font-size: 0.75rem;
	}

	.exits a {
		color: #a1a1aa;
		text-decoration: none;
		transition: color 0.2s;
	}
	.exits a:hover {
		color: #fb923c;
	}

	.sep {
		color: #3f3f46;
	}
</style>
