<svelte:head>
	<title>Voice Drift Problem → Solution | FAF Diagrams</title>
</svelte:head>

<div class="diagram-page">
	<div class="diagram-header">
		<a href="/diagrams" class="back-link">←</a>
		<h1>Voice Drift: Problem → Solution</h1>
		<p>Before/After comparison showing the voice persistence problem and FAF solution</p>
	</div>

	<!-- THE DIAGRAM - Screenshot this area -->
	<div class="diagram-container">
		<div class="comparison-grid">
			<!-- LEFT: PROBLEM -->
			<div class="column problem-column">
				<h3 class="column-title problem-title">❌ Without FAF</h3>

				<div class="session-box problem-box">
					<div class="session-header">
						<span class="session-label">Session 1</span>
						<span class="token-cost">1,750 tokens</span>
					</div>
					<div class="session-content">
						<p class="quote">"Here's my project architecture..."</p>
						<p class="quote">"Our code style is..."</p>
						<p class="quote">"The team prefers..."</p>
					</div>
					<div class="session-footer problem-footer">
						✓ AI learns your voice
					</div>
				</div>

				<div class="arrow-down problem-arrow">↓</div>
				<div class="drift-label">Session closes</div>
				<div class="arrow-down problem-arrow">↓</div>

				<div class="session-box problem-box">
					<div class="session-header">
						<span class="session-label">Session 2</span>
						<span class="token-cost">1,750 tokens</span>
					</div>
					<div class="session-content">
						<p class="quote">"Here's my project architecture..."</p>
						<p class="quote">"Our code style is..."</p>
						<p class="quote">"The team prefers..."</p>
					</div>
					<div class="session-footer problem-footer">
						⚠️ Everything forgotten
					</div>
				</div>

				<div class="stat-box problem-stat">
					<div class="stat-value">91%</div>
					<div class="stat-label">Tokens wasted on re-discovery</div>
				</div>
			</div>

			<!-- RIGHT: SOLUTION -->
			<div class="column solution-column">
				<h3 class="column-title solution-title">✅ With FAF Voice API</h3>

				<div class="command-box">
					<code>faf init --xai</code>
				</div>

				<div class="arrow-down solution-arrow">↓</div>

				<div class="session-box solution-box">
					<div class="session-header">
						<span class="session-label">One-time setup</span>
						<span class="token-cost">150 tokens</span>
					</div>
					<div class="session-content">
						<p class="faf-file">📄 project.faf created</p>
						<p class="faf-section">grok: voice: Leo</p>
						<p class="faf-section">persona: eternal memory</p>
						<p class="faf-section">retrieval_mode: hybrid</p>
					</div>
					<div class="session-footer solution-footer">
						✓ Voice persisted forever
					</div>
				</div>

				<div class="arrow-down solution-arrow">↓</div>
				<div class="eternal-label">Every session after</div>
				<div class="arrow-down solution-arrow">↓</div>

				<div class="session-box solution-box">
					<div class="session-header">
						<span class="session-label">All sessions</span>
						<span class="token-cost">0 setup tokens</span>
					</div>
					<div class="session-content">
						<p class="success-text">🚀 Grok reads project.faf</p>
						<p class="success-text">🧠 Voice remembered</p>
						<p class="success-text">⚡ Zero re-explain</p>
					</div>
					<div class="session-footer solution-footer">
						✓ Eternal memory active
					</div>
				</div>

				<div class="stat-box solution-stat">
					<div class="stat-value">91%</div>
					<div class="stat-label">Token reclaim achieved</div>
				</div>
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
		max-width: 1000px;
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
		font-size: 2rem;
		margin: 1rem 0 0.5rem 0;
		color: #000;
	}

	.diagram-container {
		max-width: 1000px;
		margin: 0 auto;
		padding: 2rem;
		background: var(--faf-surface);
		border-radius: 16px;
		box-shadow: 0 4px 20px rgba(0,0,0,0.08);
	}

	.comparison-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 3rem;
	}

	.column {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.column-title {
		font-size: 1.5rem;
		font-weight: 700;
		text-align: center;
		padding: 0.75rem;
		border-radius: 8px;
		margin: 0 0 1rem 0;
	}

	.problem-title {
		background: #fef2f2;
		color: #dc2626;
		border: 2px solid #fecaca;
	}

	.solution-title {
		background: #f0fdf4;
		color: #16a34a;
		border: 2px solid #bbf7d0;
	}

	.session-box {
		background: var(--faf-surface);
		border-radius: 12px;
		overflow: hidden;
		box-shadow: 0 2px 8px rgba(0,0,0,0.08);
	}

	.problem-box {
		border: 2px solid #fecaca;
	}

	.solution-box {
		border: 2px solid #bbf7d0;
	}

	.session-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0.75rem 1rem;
		background: #f8f9fa;
		border-bottom: 1px solid #e5e7eb;
	}

	.session-label {
		font-weight: 600;
		font-size: 0.9rem;
		color: #1a1a1a;
	}

	.token-cost {
		font-family: 'SF Mono', monospace;
		font-size: 0.85rem;
		color: #666;
		background: var(--faf-surface);
		padding: 0.25rem 0.5rem;
		border-radius: 4px;
	}

	.session-content {
		padding: 1rem;
		min-height: 100px;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.quote {
		font-size: 0.9rem;
		color: #666;
		font-style: italic;
		margin: 0;
		padding-left: 0.75rem;
		border-left: 2px solid #e5e7eb;
	}

	.faf-file {
		font-family: 'SF Mono', monospace;
		font-size: 0.9rem;
		color: #1a1a1a;
		font-weight: 600;
		margin: 0;
	}

	.faf-section {
		font-family: 'SF Mono', monospace;
		font-size: 0.85rem;
		color: var(--faf-green-light);
		margin: 0;
		padding-left: 1rem;
	}

	.success-text {
		font-size: 0.9rem;
		color: #16a34a;
		font-weight: 500;
		margin: 0;
	}

	.session-footer {
		padding: 0.75rem 1rem;
		font-size: 0.85rem;
		font-weight: 600;
		text-align: center;
	}

	.problem-footer {
		background: #fef2f2;
		color: #dc2626;
	}

	.solution-footer {
		background: #f0fdf4;
		color: #16a34a;
	}

	.arrow-down {
		text-align: center;
		font-size: 1.5rem;
		font-weight: bold;
		padding: 0.5rem 0;
	}

	.problem-arrow {
		color: #dc2626;
	}

	.solution-arrow {
		color: #16a34a;
	}

	.drift-label {
		text-align: center;
		font-size: 0.9rem;
		color: #dc2626;
		font-weight: 600;
		padding: 0.5rem;
		background: #fef2f2;
		border-radius: 6px;
	}

	.eternal-label {
		text-align: center;
		font-size: 0.9rem;
		color: #16a34a;
		font-weight: 600;
		padding: 0.5rem;
		background: #f0fdf4;
		border-radius: 6px;
	}

	.command-box {
		background: #1a1a1a;
		padding: 1rem;
		border-radius: 8px;
		text-align: center;
	}

	.command-box code {
		font-family: 'SF Mono', monospace;
		font-size: 1.1rem;
		color: var(--faf-green-light);
		font-weight: 600;
	}

	.stat-box {
		margin-top: 1rem;
		padding: 1.5rem;
		border-radius: 12px;
		text-align: center;
	}

	.problem-stat {
		background: linear-gradient(135deg, #fef2f2 0%, #fee2e2 100%);
		border: 2px solid #fecaca;
	}

	.solution-stat {
		background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%);
		border: 2px solid #bbf7d0;
	}

	.stat-value {
		font-size: 3rem;
		font-weight: 900;
		margin-bottom: 0.5rem;
	}

	.problem-stat .stat-value {
		color: #dc2626;
	}

	.solution-stat .stat-value {
		color: #16a34a;
	}

	.stat-label {
		font-size: 0.9rem;
		font-weight: 600;
		color: #666;
	}

	@media (max-width: 768px) {
		.comparison-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
