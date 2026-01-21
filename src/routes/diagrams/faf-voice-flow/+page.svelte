<svelte:head>
	<title>FAF-Voice Flow | FAF Diagrams</title>
</svelte:head>

<div class="diagram-page">
	<div class="diagram-header">
		<a href="/diagrams" class="back-link">← All Diagrams</a>
		<h1>FAF-Voice Flow</h1>
		<p>Browser → MCPaaS → xAI Grok voice architecture</p>
	</div>

	<!-- THE DIAGRAM - Screenshot this area -->
	<div class="diagram-container">
		<!-- Step 1: Browser -->
		<div class="flow-step">
			<div class="step-number">1</div>
			<div class="step-box browser-box">
				<div class="step-icon">🌐</div>
				<div class="step-title">Browser</div>
				<div class="step-desc">FAF-Voice Client</div>
				<div class="step-details">
					<span>Microphone</span>
					<span>WebRTC</span>
				</div>
			</div>
		</div>

		<!-- Arrow -->
		<div class="flow-connector">
			<div class="connector-line horizontal"></div>
			<div class="connector-label">Session Start</div>
		</div>

		<!-- Step 2: MCPaaS -->
		<div class="flow-step">
			<div class="step-number">2</div>
			<div class="step-box mcpaas-box">
				<div class="step-icon">⚡</div>
				<div class="step-title">MCPaaS</div>
				<div class="step-desc">Edge Delivery</div>
				<div class="step-details">
					<span>&lt;50ms</span>
					<span>.faf</span>
				</div>
			</div>
		</div>

		<!-- Arrow -->
		<div class="flow-connector">
			<div class="connector-line horizontal"></div>
			<div class="connector-label">Context Injected</div>
		</div>

		<!-- Step 3: Grok -->
		<div class="flow-step">
			<div class="step-number">3</div>
			<div class="step-box grok-box">
				<div class="step-icon">G</div>
				<div class="step-title">xAI Grok</div>
				<div class="step-desc">Voice Response</div>
				<div class="step-details">
					<span>Knows You</span>
					<span>Remembers</span>
				</div>
			</div>
		</div>

		<!-- Result Section -->
		<div class="result-section">
			<div class="result-header">THE RESULT</div>
			<div class="result-grid">
				<div class="result-item success">
					<div class="result-label">Re-explanations</div>
					<div class="result-value">Zero</div>
				</div>
				<div class="result-item success">
					<div class="result-label">Context Drift</div>
					<div class="result-value">None</div>
				</div>
				<div class="result-item success">
					<div class="result-label">Session Memory</div>
					<div class="result-value">Eternal</div>
				</div>
			</div>
		</div>

		<!-- Demo Acts -->
		<div class="demo-section">
			<div class="demo-header">THE DEMO: THREE ACTS</div>
			<div class="demo-acts">
				<div class="demo-act act-problem">
					<div class="act-number">Act 1</div>
					<div class="act-title">Baseline Pain</div>
					<div class="act-desc">"What project?"</div>
				</div>
				<div class="demo-act act-transition">
					<div class="act-number">Act 2</div>
					<div class="act-title">.faf Activation</div>
					<div class="act-desc">Full context loads</div>
				</div>
				<div class="demo-act act-success">
					<div class="act-number">Act 3</div>
					<div class="act-title">Eternal Voice</div>
					<div class="act-desc">AI remembers</div>
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
		color: #000;
	}

	.diagram-header p {
		color: #666;
		margin: 0;
	}

	/* THE DIAGRAM */
	.diagram-container {
		max-width: 900px;
		margin: 0 auto;
		padding: 2rem;
		background: white;
		border-radius: 16px;
		box-shadow: 0 4px 20px rgba(0,0,0,0.08);
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
	}

	/* Flow Steps */
	.flow-step {
		position: relative;
	}

	.step-number {
		position: absolute;
		top: -10px;
		left: -10px;
		background: #FF6B35;
		color: white;
		width: 24px;
		height: 24px;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 0.75rem;
		font-weight: 700;
		z-index: 1;
	}

	.step-box {
		padding: 1.25rem 1.5rem;
		border-radius: 12px;
		text-align: center;
		min-width: 140px;
	}

	.browser-box {
		background: #f0f9ff;
		border: 2px solid #bae6fd;
	}

	.mcpaas-box {
		background: #1a1a1a;
		border: 2px solid #333;
	}

	.mcpaas-box .step-title,
	.mcpaas-box .step-desc {
		color: white;
	}

	.mcpaas-box .step-details span {
		background: rgba(255,255,255,0.15);
		color: #ccc;
	}

	.grok-box {
		background: linear-gradient(135deg, #059669 0%, #10b981 100%);
		border: 2px solid #047857;
	}

	.grok-box .step-icon,
	.grok-box .step-title,
	.grok-box .step-desc {
		color: white;
	}

	.grok-box .step-details span {
		background: rgba(255,255,255,0.25);
		color: white;
	}

	.step-icon {
		font-size: 1.5rem;
		margin-bottom: 0.25rem;
	}

	.grok-box .step-icon {
		font-family: 'SF Mono', monospace;
		font-weight: 700;
	}

	.step-title {
		font-weight: 700;
		font-size: 1rem;
		color: #000;
	}

	.step-desc {
		font-size: 0.8rem;
		color: #666;
		margin-top: 0.25rem;
	}

	.step-details {
		display: flex;
		gap: 0.5rem;
		margin-top: 0.5rem;
		justify-content: center;
		flex-wrap: wrap;
	}

	.step-details span {
		background: #e0f2fe;
		color: #0369a1;
		padding: 0.2rem 0.5rem;
		border-radius: 4px;
		font-size: 0.7rem;
		font-weight: 500;
	}

	/* Flow Connectors */
	.flow-connector {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.25rem;
	}

	.connector-line.horizontal {
		width: 50px;
		height: 3px;
		background: #FF6B35;
		border-radius: 2px;
		position: relative;
	}

	.connector-line.horizontal::after {
		content: '→';
		position: absolute;
		right: -8px;
		top: 50%;
		transform: translateY(-50%);
		color: #FF6B35;
		font-size: 1rem;
		font-weight: bold;
	}

	.connector-label {
		font-size: 0.65rem;
		color: #888;
		white-space: nowrap;
	}

	/* Result Section */
	.result-section {
		width: 100%;
		margin-top: 2rem;
		padding-top: 1.5rem;
		border-top: 2px dashed #e5e7eb;
	}

	.result-header {
		text-align: center;
		font-weight: 700;
		font-size: 0.9rem;
		color: #16a34a;
		letter-spacing: 0.05em;
		margin-bottom: 1rem;
	}

	.result-grid {
		display: flex;
		gap: 1rem;
		justify-content: center;
		flex-wrap: wrap;
	}

	.result-item {
		background: #f0fdf4;
		border: 2px solid #bbf7d0;
		border-radius: 8px;
		padding: 1rem 1.5rem;
		text-align: center;
		min-width: 130px;
	}

	.result-label {
		font-size: 0.75rem;
		color: #166534;
		font-weight: 500;
	}

	.result-value {
		font-size: 1.25rem;
		font-weight: 700;
		color: #15803d;
		margin-top: 0.25rem;
	}

	/* Demo Section */
	.demo-section {
		width: 100%;
		margin-top: 1.5rem;
		padding-top: 1.5rem;
		border-top: 2px dashed #e5e7eb;
	}

	.demo-header {
		text-align: center;
		font-weight: 700;
		font-size: 0.9rem;
		color: #666;
		letter-spacing: 0.05em;
		margin-bottom: 1rem;
	}

	.demo-acts {
		display: flex;
		gap: 1rem;
		justify-content: center;
		flex-wrap: wrap;
	}

	.demo-act {
		padding: 1rem 1.25rem;
		border-radius: 8px;
		text-align: center;
		min-width: 140px;
	}

	.act-problem {
		background: #fef2f2;
		border: 2px solid #fecaca;
	}

	.act-problem .act-number {
		color: #dc2626;
	}

	.act-transition {
		background: #fefce8;
		border: 2px solid #fef08a;
	}

	.act-transition .act-number {
		color: #ca8a04;
	}

	.act-success {
		background: #f0fdf4;
		border: 2px solid #bbf7d0;
	}

	.act-success .act-number {
		color: #16a34a;
	}

	.act-number {
		font-size: 0.7rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}

	.act-title {
		font-weight: 700;
		font-size: 0.95rem;
		color: #000;
		margin-top: 0.25rem;
	}

	.act-desc {
		font-size: 0.8rem;
		color: #666;
		margin-top: 0.25rem;
	}

	@media (max-width: 768px) {
		.diagram-container {
			flex-direction: column;
		}

		.flow-connector {
			transform: rotate(90deg);
			margin: 0.5rem 0;
		}

		.connector-line.horizontal {
			width: 30px;
		}
	}
</style>
