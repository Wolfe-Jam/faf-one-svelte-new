<svelte:head>
	<title>builder.faf.one - DOUBLE-WHAMMY Architecture | FAF Diagrams</title>
	<meta name="description" content="Flow diagram showing Rust WASM generation (211KB, 3ms) and Zig WASM scoring (2.7KB, 14μs) in browser" />
</svelte:head>

<div class="diagram-page">
	<div class="diagram-header">
		<a href="/diagrams" class="back-link">←</a>
		<h1>builder.faf.one - DOUBLE-WHAMMY Architecture</h1>
		<p>Rust WASM generates .faf (211KB, 3ms) + Zig WASM scores (2.7KB, 14μs) = Championship-grade context in browser</p>
	</div>

	<div class="diagram-container">
		<!-- Flow Steps -->
		<div class="flow-horizontal">
			<!-- Step 1: User Input -->
			<div class="flow-step">
				<div class="step-number">1</div>
				<div class="step-box">
					<div class="step-icon">🔗</div>
					<div class="step-title">GitHub URL</div>
					<div class="step-desc">User enters repo URL</div>
					<div class="step-tech">Browser Input</div>
				</div>
			</div>

			<div class="flow-arrow">→</div>

			<!-- Step 2: GitHub API -->
			<div class="flow-step">
				<div class="step-number">2</div>
				<div class="step-box">
					<div class="step-icon">📦</div>
					<div class="step-title">GitHub API</div>
					<div class="step-desc">Fetch README.md<br/>+ package.json</div>
					<div class="step-tech">Public API (no clone)</div>
				</div>
			</div>

			<div class="flow-arrow">→</div>

			<!-- Step 3: Rust WASM Generation -->
			<div class="flow-step wasm-rust">
				<div class="step-number">3</div>
				<div class="step-box rust-box">
					<div class="step-icon">🦀</div>
					<div class="step-title">Rust WASM</div>
					<div class="step-desc">Generate .faf file<br/>with full context</div>
					<div class="step-tech">
						<span class="tech-badge rust-badge">211KB</span>
						<span class="tech-badge speed-badge">~3ms</span>
					</div>
				</div>
			</div>

			<div class="flow-arrow">→</div>

			<!-- Step 4: Zig WASM Scoring -->
			<div class="flow-step wasm-zig">
				<div class="step-number">4</div>
				<div class="step-box zig-box">
					<div class="step-icon">⚡</div>
					<div class="step-title">Zig WASM</div>
					<div class="step-desc">Score generated<br/>.faf file</div>
					<div class="step-tech">
						<span class="tech-badge zig-badge">2.7KB</span>
						<span class="tech-badge speed-badge">~14μs</span>
					</div>
				</div>
			</div>

			<div class="flow-arrow">→</div>

			<!-- Step 5: Preview -->
			<div class="flow-step">
				<div class="step-number">5</div>
				<div class="step-box">
					<div class="step-icon">👁️</div>
					<div class="step-title">Preview</div>
					<div class="step-desc">Show .faf + score<br/>Monaco editor</div>
					<div class="step-tech">Browser UI</div>
				</div>
			</div>

			<div class="flow-arrow">→</div>

			<!-- Step 6: Output -->
			<div class="flow-step">
				<div class="step-number">6</div>
				<div class="step-box action-box">
					<div class="step-icon">✅</div>
					<div class="step-title">Output</div>
					<div class="step-desc">Download or<br/>Commit via OAuth</div>
					<div class="step-tech">User choice</div>
				</div>
			</div>
		</div>

		<!-- Tech Stack Summary -->
		<div class="tech-summary">
			<div class="summary-card">
				<h3>DOUBLE-WHAMMY Stack</h3>
				<div class="summary-grid">
					<div class="summary-item">
						<div class="summary-label">Rust WASM</div>
						<div class="summary-value">211KB (generation)</div>
					</div>
					<div class="summary-item">
						<div class="summary-label">Zig WASM</div>
						<div class="summary-value">2.7KB (scoring)</div>
					</div>
					<div class="summary-item">
						<div class="summary-label">Total Bundle</div>
						<div class="summary-value">213.7KB</div>
					</div>
					<div class="summary-item">
						<div class="summary-label">Combined Time</div>
						<div class="summary-value">&lt;5ms target</div>
					</div>
				</div>
			</div>

			<div class="summary-card">
				<h3>Why HYBRID Architecture?</h3>
				<ul class="benefit-list">
					<li>✅ Generate in browser (showcase tech)</li>
					<li>✅ Users see real-time generation log</li>
					<li>✅ OAuth token stays server-side (secure)</li>
					<li>✅ Preview before commit (transparency)</li>
					<li>✅ Best of both: Speed + Security</li>
				</ul>
			</div>
		</div>

		<!-- Performance Metrics -->
		<div class="metrics-row">
			<div class="metric-card rust-metric">
				<div class="metric-label">Rust WASM</div>
				<div class="metric-value">~3ms</div>
				<div class="metric-desc">Full .faf generation</div>
			</div>
			<div class="metric-card zig-metric">
				<div class="metric-label">Zig WASM</div>
				<div class="metric-value">~14μs</div>
				<div class="metric-desc">71K scores/sec</div>
			</div>
			<div class="metric-card total-metric">
				<div class="metric-label">Total Time</div>
				<div class="metric-value">&lt;5ms</div>
				<div class="metric-desc">Championship-grade</div>
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

	/* Horizontal Flow */
	.flow-horizontal {
		display: flex;
		align-items: center;
		gap: 1rem;
		overflow-x: auto;
		padding: 1rem 0 2rem 0;
	}

	.flow-step {
		flex-shrink: 0;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.5rem;
	}

	.step-number {
		width: 32px;
		height: 32px;
		background: #FF6B35;
		color: white;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		font-weight: 600;
		font-size: 0.9rem;
	}

	.step-box {
		background: white;
		border: 2px solid #e5e7eb;
		border-radius: 12px;
		padding: 1.25rem;
		width: 160px;
		text-align: center;
		transition: transform 0.2s, box-shadow 0.2s;
	}

	.step-box:hover {
		transform: translateY(-2px);
		box-shadow: 0 4px 12px rgba(0,0,0,0.1);
	}

	.rust-box {
		background: linear-gradient(135deg, #CE422B 0%, #f97316 100%);
		color: white;
		border-color: #CE422B;
	}

	.zig-box {
		background: linear-gradient(135deg, #f7a41d 0%, #fbbf24 100%);
		color: #1a1a1a;
		border-color: #f7a41d;
	}

	.action-box {
		border-color: #FF6B35;
		border-width: 3px;
	}

	.step-icon {
		font-size: 2rem;
		margin-bottom: 0.5rem;
	}

	.step-title {
		font-weight: 600;
		font-size: 0.95rem;
		margin-bottom: 0.5rem;
	}

	.step-desc {
		font-size: 0.8rem;
		color: #666;
		line-height: 1.4;
		margin-bottom: 0.75rem;
	}

	.rust-box .step-desc,
	.rust-box .step-title {
		color: white;
	}

	.step-tech {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
		font-size: 0.75rem;
		color: #888;
		font-family: 'SF Mono', monospace;
	}

	.tech-badge {
		display: inline-block;
		padding: 0.25rem 0.5rem;
		border-radius: 4px;
		font-weight: 600;
		font-size: 0.7rem;
	}

	.rust-badge {
		background: rgba(255, 255, 255, 0.2);
		color: white;
	}

	.zig-badge {
		background: rgba(0, 0, 0, 0.1);
		color: #1a1a1a;
	}

	.speed-badge {
		background: #4ade80;
		color: white;
	}

	.flow-arrow {
		font-size: 1.5rem;
		color: #FF6B35;
		font-weight: bold;
		flex-shrink: 0;
	}

	/* Tech Summary */
	.tech-summary {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1.5rem;
		margin-top: 2rem;
		padding-top: 2rem;
		border-top: 2px solid #e5e7eb;
	}

	.summary-card {
		background: #f8f9fa;
		border-radius: 12px;
		padding: 1.5rem;
	}

	.summary-card h3 {
		font-size: 1.1rem;
		margin: 0 0 1rem 0;
		color: #1a1a1a;
	}

	.summary-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1rem;
	}

	.summary-item {
		background: white;
		padding: 0.75rem;
		border-radius: 8px;
	}

	.summary-label {
		font-size: 0.75rem;
		color: #666;
		margin-bottom: 0.25rem;
	}

	.summary-value {
		font-weight: 600;
		color: #1a1a1a;
		font-family: 'SF Mono', monospace;
		font-size: 0.9rem;
	}

	.benefit-list {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.benefit-list li {
		font-size: 0.9rem;
		color: #1a1a1a;
		line-height: 1.6;
	}

	/* Metrics Row */
	.metrics-row {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1rem;
		margin-top: 2rem;
	}

	.metric-card {
		background: white;
		border: 2px solid #e5e7eb;
		border-radius: 12px;
		padding: 1.5rem;
		text-align: center;
	}

	.rust-metric {
		border-color: #CE422B;
		background: linear-gradient(135deg, rgba(206, 66, 43, 0.05) 0%, rgba(249, 115, 22, 0.05) 100%);
	}

	.zig-metric {
		border-color: #f7a41d;
		background: linear-gradient(135deg, rgba(247, 164, 29, 0.05) 0%, rgba(251, 191, 36, 0.05) 100%);
	}

	.total-metric {
		border-color: #FF6B35;
		border-width: 3px;
	}

	.metric-label {
		font-size: 0.85rem;
		color: #666;
		margin-bottom: 0.5rem;
		font-weight: 500;
	}

	.metric-value {
		font-size: 2rem;
		font-weight: 700;
		color: #FF6B35;
		font-family: 'SF Mono', monospace;
		margin-bottom: 0.5rem;
	}

	.rust-metric .metric-value {
		color: #CE422B;
	}

	.zig-metric .metric-value {
		color: #f7a41d;
	}

	.metric-desc {
		font-size: 0.8rem;
		color: #888;
	}

	/* Responsive */
	@media (max-width: 1024px) {
		.flow-horizontal {
			flex-wrap: wrap;
			justify-content: center;
		}

		.flow-arrow {
			display: none;
		}

		.tech-summary {
			grid-template-columns: 1fr;
		}

		.metrics-row {
			grid-template-columns: 1fr;
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

		.summary-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
