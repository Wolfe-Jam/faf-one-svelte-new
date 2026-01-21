<svelte:head>
	<title>MCPaaS Before/After | FAF Diagrams</title>
</svelte:head>

<div class="diagram-page">
	<div class="diagram-header">
		<a href="/diagrams" class="back-link">← All Diagrams</a>
		<h1>MCPaaS Before/After</h1>
		<p>Context persistence: Session memory vs Eternal memory</p>
	</div>

	<!-- THE DIAGRAM - Screenshot this area -->
	<div class="diagram-container">
		<div class="diagram-column">
			<h3 class="diagram-title problem-title">Before MCPaaS</h3>
			<div class="diagram-content problem-bg">
				<div class="session-box">
					<div class="session-label">Session 1</div>
					<div class="session-status success">AI knows context</div>
				</div>
				<div class="arrow-down">↓</div>
				<div class="session-box">
					<div class="session-label">Session 2</div>
					<div class="session-status failure">AI knows NOTHING</div>
				</div>
				<div class="arrow-down">↓</div>
				<div class="session-box">
					<div class="session-label">Session 3</div>
					<div class="session-status failure">AI knows NOTHING</div>
				</div>
				<div class="diagram-footer problem-footer">
					<strong>No Persistence</strong>
					<span>Context dies with each session.</span>
				</div>
			</div>
		</div>

		<div class="diagram-column">
			<h3 class="diagram-title solution-title">After MCPaaS</h3>
			<div class="diagram-content solution-bg">
				<div class="session-box connected">
					<div class="session-label">Session 1</div>
					<div class="session-status success">Calls MCPaaS</div>
				</div>
				<div class="connector-line"></div>
				<div class="session-box connected">
					<div class="session-label">Session 2</div>
					<div class="session-status success">Calls MCPaaS</div>
				</div>
				<div class="connector-line"></div>
				<div class="session-box connected">
					<div class="session-label">Session 3</div>
					<div class="session-status success">Calls MCPaaS</div>
				</div>
				<div class="connector-line"></div>
				<div class="mcpaas-box">
					<div class="mcpaas-label">.faf</div>
					<div class="mcpaas-sublabel">Your Context</div>
				</div>
				<div class="diagram-footer solution-footer">
					<strong>.faf Format Foundation</strong>
					<div class="badge-row">
						<span class="badge">IANA-Registered</span>
						<span class="badge">Persistent</span>
						<span class="badge">Universal</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.diagram-page {
		min-height: 100vh;
		background: #0a0a0a;
		padding: 2rem;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
	}

	.diagram-header {
		max-width: 900px;
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
		color: #f5f5f5;
	}

	.diagram-header p {
		color: #888;
		margin: 0;
	}

	/* THE DIAGRAM */
	.diagram-container {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 2rem;
		max-width: 900px;
		margin: 0 auto;
		padding: 2rem;
		background: #1a1a1a;
		border-radius: 16px;
		border: 1px solid #333;
	}

	.diagram-column {
		display: flex;
		flex-direction: column;
	}

	.diagram-title {
		text-align: center;
		font-size: 1.3rem;
		font-weight: 700;
		margin: 0 0 1rem 0;
		padding-bottom: 0.75rem;
		border-bottom: 3px solid;
	}

	.problem-title {
		color: #f87171;
		border-color: #f87171;
	}

	.solution-title {
		color: #00D4D4;
		border-color: #00D4D4;
	}

	.diagram-content {
		flex: 1;
		padding: 1.5rem;
		border-radius: 12px;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.75rem;
	}

	.problem-bg {
		background: #1f1315;
		border: 2px solid #7f1d1d;
	}

	.solution-bg {
		background: #0d1f1f;
		border: 2px solid #115e59;
	}

	.session-box {
		background: #2a2a2a;
		padding: 1rem 1.5rem;
		border-radius: 8px;
		border: 1px solid #444;
		text-align: center;
		width: 100%;
		max-width: 180px;
	}

	.session-box.connected {
		border-left: 4px solid #00D4D4;
	}

	.session-label {
		font-weight: 700;
		font-size: 1rem;
		color: #f5f5f5;
	}

	.session-status {
		font-size: 0.85rem;
		margin-top: 0.25rem;
		font-weight: 500;
	}

	.session-status.success {
		color: #4ade80;
	}

	.session-status.failure {
		color: #f87171;
	}

	.arrow-down {
		color: #f87171;
		font-size: 1.5rem;
		font-weight: bold;
	}

	.connector-line {
		width: 3px;
		height: 16px;
		background: #00D4D4;
		border-radius: 2px;
	}

	.mcpaas-box {
		background: #FF6B35;
		color: white;
		padding: 1rem 2rem;
		border-radius: 8px;
		text-align: center;
	}

	.mcpaas-label {
		font-weight: 700;
		font-family: 'SF Mono', monospace;
		font-size: 1.2rem;
	}

	.mcpaas-sublabel {
		font-size: 0.8rem;
		color: rgba(255,255,255,0.8);
	}

	.diagram-footer {
		margin-top: auto;
		padding: 1rem 1.5rem;
		border-radius: 8px;
		text-align: center;
		width: 100%;
	}

	.problem-footer {
		background: #7f1d1d;
		color: #fecaca;
	}

	.problem-footer span {
		display: block;
		font-size: 0.9rem;
		margin-top: 0.25rem;
		color: #fca5a5;
	}

	.solution-footer {
		background: #00D4D4;
		color: #0a0a0a;
	}

	.badge-row {
		display: flex;
		gap: 0.5rem;
		justify-content: center;
		margin-top: 0.5rem;
		flex-wrap: wrap;
	}

	.badge {
		background: #0a0a0a;
		color: #00D4D4;
		padding: 0.25rem 0.6rem;
		border-radius: 4px;
		font-size: 0.75rem;
		font-weight: 600;
	}

	@media (max-width: 768px) {
		.diagram-container {
			grid-template-columns: 1fr;
		}
	}
</style>
