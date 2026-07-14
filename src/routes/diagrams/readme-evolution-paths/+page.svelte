<svelte:head>
	<title>Two Paths to 100% 🏆 | FAF Diagrams</title>
</svelte:head>

<div class="diagram-page">
	<div class="diagram-header">
		<a href="/diagrams" class="back-link">←</a>
		<h1>Two Paths to 100% 🏆</h1>
		<p>README Evolution Edition - v4.1.0</p>
	</div>

	<!-- THE DIAGRAM - Screenshot this area -->
	<div class="diagram-container">
		<div class="main-title">Two Paths to Championship Context</div>

		<div class="paths-container">
			<!-- Path 1: 6Ws Builder -->
			<div class="path">
				<div class="path-header">
					<div class="path-number">Path 1</div>
					<div class="path-title">6Ws Builder</div>
					<div class="path-subtitle">New/Empty Projects</div>
				</div>

				<div class="steps">
					<div class="step">
						<div class="step-num">1</div>
						<div class="step-content">
							<div class="step-icon">📝</div>
							<div class="step-text">Visit faf.one/6ws</div>
							<div class="step-detail">Fill quick form</div>
						</div>
					</div>

					<div class="arrow-down">↓</div>

					<div class="step">
						<div class="step-num">2</div>
						<div class="step-content">
							<div class="step-icon">📋</div>
							<div class="step-text">Copy YAML</div>
							<div class="step-detail">One-click to clipboard</div>
						</div>
					</div>

					<div class="arrow-down">↓</div>

					<div class="step">
						<div class="step-num">3</div>
						<div class="step-content">
							<div class="step-icon">🤖</div>
							<div class="step-text">Paste to Claude</div>
							<div class="step-detail">"Add this to my project"</div>
						</div>
					</div>

					<div class="arrow-down">↓</div>

					<div class="step">
						<div class="step-num">4</div>
						<div class="step-content">
							<div class="step-icon">⚡</div>
							<div class="step-text">faf_human_add</div>
							<div class="step-detail">Non-interactive merge</div>
						</div>
					</div>
				</div>
			</div>

			<!-- Path 2: Auto Extract -->
			<div class="path">
				<div class="path-header">
					<div class="path-number">Path 2</div>
					<div class="path-title">Auto Extract</div>
					<div class="path-subtitle">Existing Repos</div>
				</div>

				<div class="steps">
					<div class="step">
						<div class="step-num">1</div>
						<div class="step-content">
							<div class="step-icon">🤖</div>
							<div class="step-text">Claude Desktop</div>
							<div class="step-detail">Open in your project</div>
						</div>
					</div>

					<div class="arrow-down">↓</div>

					<div class="step">
						<div class="step-num">2</div>
						<div class="step-content">
							<div class="step-icon">📄</div>
							<div class="step-text">"Extract from README"</div>
							<div class="step-detail">Say it to Claude</div>
						</div>
					</div>

					<div class="arrow-down">↓</div>

					<div class="step">
						<div class="step-num">3</div>
						<div class="step-content">
							<div class="step-icon">🔍</div>
							<div class="step-text">Review Fields</div>
							<div class="step-detail">6Ws + confidence scores</div>
						</div>
					</div>

					<div class="arrow-down">↓</div>

					<div class="step">
						<div class="step-num">4</div>
						<div class="step-content">
							<div class="step-icon">⚡</div>
							<div class="step-text">"Merge it"</div>
							<div class="step-detail">faf_readme writes to .faf</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Convergence -->
		<div class="convergence">
			<div class="converge-arrows">
				<div class="converge-line left"></div>
				<div class="converge-line right"></div>
			</div>
			<div class="result-box">
				<div class="result-icon">🏆</div>
				<div class="result-title">100% Championship Context</div>
				<div class="result-stats">
					<span>+25-35% boost</span>
					<span>•</span>
					<span>&lt;50ms fast</span>
					<span>•</span>
					<span>Zero drift</span>
				</div>
			</div>
		</div>

		<!-- Footer -->
		<div class="diagram-footer">
			<div class="footer-text">
				<strong>Before:</strong> Manual pain, drift, low scores<br>
				<strong>After:</strong> One form or one command → gold context
			</div>
		</div>
	</div>
</div>

<style>
	.diagram-page {
		min-height: 100vh;
		background: var(--faf-locked-dark);
		padding: 2rem;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
	}

	.diagram-header {
		max-width: 1200px;
		margin: 0 auto 2rem auto;
	}

	.back-link {
		color: #FF6B35;
		text-decoration: none;
		font-size: 0.9rem;
	}

	.back-link:hover {
		text-decoration: underline;
	}

	h1 {
		font-size: 2.5rem;
		margin: 1rem 0 0.5rem 0;
		color: #f5f5f5;
	}

	.diagram-header p {
		color: #888;
		font-size: 1.1rem;
	}

	.diagram-container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 3rem;
		background: #1a1a1a;
		border-radius: 16px;
		border: 1px solid #333;
	}

	.main-title {
		text-align: center;
		font-size: 2rem;
		font-weight: 700;
		color: #f5f5f5;
		margin-bottom: 3rem;
	}

	.paths-container {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 3rem;
		margin-bottom: 3rem;
	}

	.path {
		background: var(--faf-locked-dark);
		border-radius: 12px;
		padding: 2rem;
		border: 2px solid #333;
	}

	.path-header {
		margin-bottom: 2rem;
		text-align: center;
	}

	.path-number {
		display: inline-block;
		background: #FF6B35;
		color: white;
		padding: 0.25rem 1rem;
		border-radius: 20px;
		font-size: 0.875rem;
		font-weight: 600;
		margin-bottom: 0.5rem;
	}

	.path-title {
		font-size: 1.5rem;
		font-weight: 700;
		color: #f5f5f5;
		margin-bottom: 0.25rem;
	}

	.path-subtitle {
		font-size: 0.9rem;
		color: #888;
	}

	.steps {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.step {
		display: flex;
		align-items: flex-start;
		gap: 1rem;
		background: #1a1a1a;
		border: 1px solid #333;
		border-radius: 8px;
		padding: 1rem;
	}

	.step-num {
		flex-shrink: 0;
		width: 28px;
		height: 28px;
		background: #FF6B35;
		color: white;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		font-weight: 600;
		font-size: 0.875rem;
	}

	.step-content {
		flex: 1;
	}

	.step-icon {
		font-size: 1.5rem;
		margin-bottom: 0.5rem;
	}

	.step-text {
		font-size: 1rem;
		font-weight: 600;
		color: #f5f5f5;
		margin-bottom: 0.25rem;
	}

	.step-detail {
		font-size: 0.875rem;
		color: #888;
	}

	.arrow-down {
		text-align: center;
		color: #FF6B35;
		font-size: 1.5rem;
		font-weight: bold;
		padding: 0.5rem 0;
	}

	.convergence {
		margin-top: 3rem;
		position: relative;
	}

	.converge-arrows {
		display: flex;
		justify-content: center;
		margin-bottom: 1rem;
		height: 60px;
		position: relative;
	}

	.converge-line {
		position: absolute;
		width: 2px;
		height: 60px;
		background: #FF6B35;
		top: 0;
	}

	.converge-line.left {
		left: 25%;
		transform: rotate(-20deg);
		transform-origin: top center;
	}

	.converge-line.right {
		right: 25%;
		transform: rotate(20deg);
		transform-origin: top center;
	}

	.result-box {
		background: linear-gradient(135deg, #FF6B35 0%, #FF8555 100%);
		border-radius: 12px;
		padding: 2rem;
		text-align: center;
		max-width: 600px;
		margin: 0 auto;
	}

	.result-icon {
		font-size: 3rem;
		margin-bottom: 1rem;
	}

	.result-title {
		font-size: 1.75rem;
		font-weight: 700;
		color: white;
		margin-bottom: 1rem;
	}

	.result-stats {
		color: white;
		font-size: 1rem;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.75rem;
	}

	.diagram-footer {
		margin-top: 3rem;
		padding-top: 2rem;
		border-top: 1px solid #333;
		text-align: center;
	}

	.footer-text {
		color: #888;
		line-height: 1.8;
	}

	.footer-text strong {
		color: #f5f5f5;
	}

	@media (max-width: 768px) {
		.diagram-container {
			padding: 1.5rem;
		}

		.main-title {
			font-size: 1.5rem;
		}

		.paths-container {
			grid-template-columns: 1fr;
			gap: 2rem;
		}

		.converge-line.left {
			left: 35%;
		}

		.converge-line.right {
			right: 35%;
		}

		.result-title {
			font-size: 1.25rem;
		}
	}
</style>
