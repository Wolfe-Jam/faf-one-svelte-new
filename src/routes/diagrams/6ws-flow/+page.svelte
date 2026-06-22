<svelte:head>
	<title>6Ws Flow - Universal AI Context | FAF Diagrams</title>
	<meta name="description" content="Flow diagram showing how 6Ws questionnaire generates README sections, .faf files, and enables universal AI context" />
</svelte:head>

<div class="diagram-page">
	<div class="diagram-header">
		<a href="/diagrams" class="back-link">←</a>
		<h1>6Ws Flow - Universal AI Context</h1>
		<p>Answer 6 questions → Better READMEs + AI-ready context → Standard emerges</p>
	</div>

	<div class="diagram-container">
		<!-- Top Section: Two Entry Points -->
		<div class="entry-points">
			<div class="entry-box cli-entry">
				<div class="entry-icon">⌨️</div>
				<div class="entry-title">CLI</div>
				<div class="entry-code">faf readme</div>
				<div class="entry-desc">Terminal workflow</div>
			</div>

			<div class="entry-box web-entry">
				<div class="entry-icon">🌐</div>
				<div class="entry-title">Web</div>
				<div class="entry-code">faf.one/6ws</div>
				<div class="entry-desc">Browser form</div>
			</div>
		</div>

		<!-- Converge Arrow -->
		<div class="flow-arrow-down">↓</div>

		<!-- Center: 6Ws Questionnaire -->
		<div class="questionnaire-box">
			<div class="questionnaire-header">
				<div class="q-title">📋 6Ws Questionnaire</div>
				<div class="q-subtitle">Answer 6 questions to unlock AI context</div>
			</div>
			<div class="questions-grid">
				<div class="question-item">
					<div class="q-number">1W</div>
					<div class="q-label">WHO</div>
					<div class="q-example">Who is this for?</div>
				</div>
				<div class="question-item">
					<div class="q-number">2W</div>
					<div class="q-label">WHAT</div>
					<div class="q-example">What does it do?</div>
				</div>
				<div class="question-item">
					<div class="q-number">3W</div>
					<div class="q-label">WHERE</div>
					<div class="q-example">Where does it run?</div>
				</div>
				<div class="question-item">
					<div class="q-number">4W</div>
					<div class="q-label">WHY</div>
					<div class="q-example">Why does it exist?</div>
				</div>
				<div class="question-item">
					<div class="q-number">5W</div>
					<div class="q-label">WHEN</div>
					<div class="q-example">When to use it?</div>
				</div>
				<div class="question-item">
					<div class="q-number">6W</div>
					<div class="q-label">HOW</div>
					<div class="q-example">How to get started?</div>
				</div>
			</div>
		</div>

		<!-- Diverge Arrow -->
		<div class="flow-arrow-down">↓</div>

		<!-- Bottom Section: Four Outputs -->
		<div class="outputs-grid">
			<div class="output-box readme-output">
				<div class="output-icon">📄</div>
				<div class="output-title">README.md</div>
				<div class="output-desc">Markdown section<br/>(copy/paste ready)</div>
				<div class="output-badge">Human-readable</div>
			</div>

			<div class="output-box faf-output">
				<div class="output-icon">🏎️</div>
				<div class="output-title">project.faf</div>
				<div class="output-desc">Complete .faf file<br/>(AI-ready context)</div>
				<div class="output-badge faf-badge">AI-readable</div>
			</div>

			<div class="output-box share-output">
				<div class="output-icon">🔗</div>
				<div class="output-title">Share Link</div>
				<div class="output-desc">faf.one/6ws?share=<br/>abc123</div>
				<div class="output-badge">Team collab</div>
			</div>

			<div class="output-box github-output">
				<div class="output-icon">✅</div>
				<div class="output-title">GitHub Commit</div>
				<div class="output-desc">OAuth integration<br/>(direct commit)</div>
				<div class="output-badge github-badge">One-click</div>
			</div>
		</div>

		<!-- The Flywheel -->
		<div class="flywheel-section">
			<h3>The Adoption Flywheel</h3>
			<div class="flywheel-steps">
				<div class="flywheel-item">
					<div class="flywheel-number">1</div>
					<div class="flywheel-text">More READMEs with 6Ws</div>
				</div>
				<div class="flywheel-arrow">→</div>
				<div class="flywheel-item">
					<div class="flywheel-number">2</div>
					<div class="flywheel-text">AIs learn to look for them</div>
				</div>
				<div class="flywheel-arrow">→</div>
				<div class="flywheel-item">
					<div class="flywheel-number">3</div>
					<div class="flywheel-text">Becomes expected standard</div>
				</div>
				<div class="flywheel-arrow">→</div>
				<div class="flywheel-item">
					<div class="flywheel-number">4</div>
					<div class="flywheel-text">FAF auto-extraction improves</div>
				</div>
				<div class="flywheel-arrow cycle-arrow">↻</div>
			</div>
		</div>

		<!-- Value Props -->
		<div class="value-props">
			<div class="value-card">
				<h4>🎯 Low Barrier</h4>
				<p>Simple form, no YAML knowledge needed</p>
			</div>
			<div class="value-card">
				<h4>📚 Better READMEs</h4>
				<p>Improves docs for humans too</p>
			</div>
			<div class="value-card">
				<h4>🤖 AI Training</h4>
				<p>More projects → AIs expect it → standard</p>
			</div>
			<div class="value-card">
				<h4>🔄 Universal</h4>
				<p>Works with or without FAF</p>
			</div>
		</div>
	</div>
</div>

<style>
	.diagram-page {
		min-height: 100vh;
		background: #f8f9fa;
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
		font-weight: 500;
	}

	.back-link:hover {
		text-decoration: underline;
	}

	h1 {
		font-size: 2rem;
		margin: 1rem 0 0.5rem 0;
		color: #1a1a1a;
	}

	.diagram-header p {
		color: #666;
		font-size: 1rem;
	}

	.diagram-container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 2rem;
		background: white;
		border-radius: 16px;
		box-shadow: 0 4px 20px rgba(0,0,0,0.08);
	}

	/* Entry Points */
	.entry-points {
		display: flex;
		justify-content: center;
		gap: 3rem;
		margin-bottom: 2rem;
	}

	.entry-box {
		background: white;
		border: 3px solid #e5e7eb;
		border-radius: 12px;
		padding: 1.5rem 2rem;
		text-align: center;
		min-width: 200px;
		transition: transform 0.2s, box-shadow 0.2s;
	}

	.entry-box:hover {
		transform: translateY(-2px);
		box-shadow: 0 4px 12px rgba(0,0,0,0.1);
	}

	.cli-entry {
		border-color: #1a1a1a;
		background: linear-gradient(135deg, rgba(26, 26, 26, 0.02) 0%, rgba(26, 26, 26, 0.05) 100%);
	}

	.web-entry {
		border-color: #FF6B35;
		background: linear-gradient(135deg, rgba(255, 107, 53, 0.02) 0%, rgba(255, 107, 53, 0.05) 100%);
	}

	.entry-icon {
		font-size: 2.5rem;
		margin-bottom: 0.5rem;
	}

	.entry-title {
		font-size: 1.2rem;
		font-weight: 600;
		color: #1a1a1a;
		margin-bottom: 0.5rem;
	}

	.entry-code {
		font-family: 'SF Mono', monospace;
		font-size: 0.9rem;
		color: #FF6B35;
		margin-bottom: 0.5rem;
		font-weight: 600;
	}

	.entry-desc {
		font-size: 0.85rem;
		color: #666;
	}

	/* Flow Arrows */
	.flow-arrow-down {
		text-align: center;
		font-size: 2rem;
		color: #FF6B35;
		font-weight: bold;
		margin: 1rem 0;
	}

	/* Questionnaire Box */
	.questionnaire-box {
		background: linear-gradient(135deg, #FF6B35 0%, #ff8555 100%);
		border-radius: 16px;
		padding: 2rem;
		margin: 2rem 0;
		box-shadow: 0 4px 20px rgba(255, 107, 53, 0.2);
	}

	.questionnaire-header {
		text-align: center;
		margin-bottom: 1.5rem;
	}

	.q-title {
		font-size: 1.5rem;
		font-weight: 700;
		color: white;
		margin-bottom: 0.5rem;
	}

	.q-subtitle {
		font-size: 0.95rem;
		color: rgba(255, 255, 255, 0.9);
	}

	.questions-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1rem;
	}

	.question-item {
		background: white;
		border-radius: 12px;
		padding: 1.25rem;
		text-align: center;
		transition: transform 0.2s;
	}

	.question-item:hover {
		transform: translateY(-2px);
	}

	.q-number {
		min-width: 38px;
		height: 28px;
		padding: 0 0.5rem;
		background: #FF6B35;
		color: white;
		border-radius: 14px;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		font-weight: 600;
		font-size: 0.8rem;
		margin-bottom: 0.75rem;
		font-family: 'SF Mono', monospace;
	}

	.q-label {
		font-size: 1.1rem;
		font-weight: 700;
		color: #1a1a1a;
		margin-bottom: 0.5rem;
		letter-spacing: 0.5px;
	}

	.q-example {
		font-size: 0.85rem;
		color: #666;
		font-style: italic;
	}

	/* Outputs Grid */
	.outputs-grid {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 1rem;
		margin: 2rem 0;
	}

	.output-box {
		background: white;
		border: 2px solid #e5e7eb;
		border-radius: 12px;
		padding: 1.5rem;
		text-align: center;
		transition: transform 0.2s, box-shadow 0.2s;
	}

	.output-box:hover {
		transform: translateY(-2px);
		box-shadow: 0 4px 12px rgba(0,0,0,0.1);
	}

	.readme-output {
		border-color: #94a3b8;
	}

	.faf-output {
		border-color: #FF6B35;
		border-width: 3px;
		background: linear-gradient(135deg, rgba(255, 107, 53, 0.02) 0%, rgba(255, 107, 53, 0.05) 100%);
	}

	.share-output {
		border-color: #00D4D4;
	}

	.github-output {
		border-color: #1a1a1a;
	}

	.output-icon {
		font-size: 2rem;
		margin-bottom: 0.75rem;
	}

	.output-title {
		font-size: 1rem;
		font-weight: 600;
		color: #1a1a1a;
		margin-bottom: 0.5rem;
	}

	.output-desc {
		font-size: 0.8rem;
		color: #666;
		line-height: 1.5;
		margin-bottom: 0.75rem;
		min-height: 48px;
	}

	.output-badge {
		display: inline-block;
		background: #e5e7eb;
		color: #666;
		padding: 0.25rem 0.75rem;
		border-radius: 12px;
		font-size: 0.75rem;
		font-weight: 600;
	}

	.faf-badge {
		background: #FF6B35;
		color: white;
	}

	.github-badge {
		background: #1a1a1a;
		color: white;
	}

	/* Flywheel Section */
	.flywheel-section {
		background: #f8f9fa;
		border-radius: 12px;
		padding: 2rem;
		margin: 2rem 0;
	}

	.flywheel-section h3 {
		text-align: center;
		font-size: 1.3rem;
		color: #1a1a1a;
		margin-bottom: 1.5rem;
	}

	.flywheel-steps {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
		flex-wrap: wrap;
	}

	.flywheel-item {
		background: white;
		border: 2px solid #e5e7eb;
		border-radius: 8px;
		padding: 1rem;
		min-width: 180px;
		text-align: center;
	}

	.flywheel-number {
		width: 24px;
		height: 24px;
		background: #FF6B35;
		color: white;
		border-radius: 50%;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		font-weight: 600;
		font-size: 0.75rem;
		margin-bottom: 0.5rem;
	}

	.flywheel-text {
		font-size: 0.85rem;
		color: #1a1a1a;
		font-weight: 500;
	}

	.flywheel-arrow {
		font-size: 1.5rem;
		color: #FF6B35;
		font-weight: bold;
	}

	.cycle-arrow {
		font-size: 2rem;
	}

	/* Value Props */
	.value-props {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 1rem;
		margin-top: 2rem;
		padding-top: 2rem;
		border-top: 2px solid #e5e7eb;
	}

	.value-card {
		background: #f8f9fa;
		border-radius: 8px;
		padding: 1.25rem;
	}

	.value-card h4 {
		font-size: 1rem;
		color: #1a1a1a;
		margin: 0 0 0.5rem 0;
	}

	.value-card p {
		font-size: 0.85rem;
		color: #666;
		margin: 0;
		line-height: 1.5;
	}

	/* Responsive */
	@media (max-width: 1024px) {
		.questions-grid {
			grid-template-columns: repeat(2, 1fr);
		}

		.outputs-grid {
			grid-template-columns: repeat(2, 1fr);
		}

		.value-props {
			grid-template-columns: repeat(2, 1fr);
		}

		.flywheel-steps {
			flex-direction: column;
		}

		.flywheel-arrow {
			transform: rotate(90deg);
		}

		.cycle-arrow {
			transform: rotate(0deg);
		}
	}

	@media (max-width: 640px) {
		.diagram-page {
			padding: 1rem;
		}

		.diagram-container {
			padding: 1rem;
		}

		h1 {
			font-size: 1.5rem;
		}

		.entry-points {
			flex-direction: column;
			gap: 1rem;
		}

		.questions-grid {
			grid-template-columns: 1fr;
		}

		.outputs-grid {
			grid-template-columns: 1fr;
		}

		.value-props {
			grid-template-columns: 1fr;
		}
	}
</style>
