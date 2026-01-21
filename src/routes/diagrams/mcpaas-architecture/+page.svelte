<svelte:head>
	<title>MCPaaS Architecture | FAF Diagrams</title>
</svelte:head>

<div class="diagram-page">
	<div class="diagram-header">
		<a href="/diagrams" class="back-link">← All Diagrams</a>
		<h1>MCPaaS Architecture</h1>
		<p>Cloudflare Edge → Zig-WASM → KV storage flow</p>
	</div>

	<!-- THE DIAGRAM - Screenshot this area -->
	<div class="diagram-container">
		<!-- Top Row: AI Clients -->
		<div class="clients-row">
			<div class="client-box claude">
				<span class="client-icon">C</span>
				<span class="client-name">Claude</span>
			</div>
			<div class="client-box grok">
				<span class="client-icon">G</span>
				<span class="client-name">Grok</span>
			</div>
			<div class="client-box gemini">
				<span class="client-icon">G</span>
				<span class="client-name">Gemini</span>
			</div>
			<div class="client-box other">
				<span class="client-icon">+</span>
				<span class="client-name">Any AI</span>
			</div>
		</div>

		<!-- Arrow Down -->
		<div class="flow-arrow">
			<div class="arrow-line"></div>
			<div class="arrow-label">MCP Protocol</div>
		</div>

		<!-- Middle: Cloudflare Edge -->
		<div class="edge-layer">
			<div class="edge-header">
				<span class="edge-icon">⚡</span>
				<span class="edge-title">Cloudflare Workers</span>
				<span class="edge-badge">300+ Locations</span>
			</div>
			<div class="edge-content">
				<div class="engine-box">
					<div class="engine-label">Zig-WASM Engine</div>
					<div class="engine-size">2.7KB</div>
					<div class="engine-features">
						<span class="feature">Scoring</span>
						<span class="feature">Validation</span>
						<span class="feature">Transform</span>
					</div>
				</div>
				<div class="metrics-box">
					<div class="metric">
						<span class="metric-value">&lt;1ms</span>
						<span class="metric-label">Cold Start</span>
					</div>
					<div class="metric">
						<span class="metric-value">~50ms</span>
						<span class="metric-label">P95 Latency</span>
					</div>
				</div>
			</div>
		</div>

		<!-- Arrow Down -->
		<div class="flow-arrow">
			<div class="arrow-line"></div>
			<div class="arrow-label">Read/Write</div>
		</div>

		<!-- Bottom: Storage -->
		<div class="storage-layer">
			<div class="storage-box">
				<div class="storage-icon">📦</div>
				<div class="storage-title">Cloudflare KV</div>
				<div class="storage-desc">Global Replication</div>
			</div>
			<div class="storage-content">
				<div class="faf-file">
					<code>.faf</code>
					<span>Your Project DNA</span>
				</div>
			</div>
		</div>

		<!-- Footer -->
		<div class="diagram-footer">
			<div class="footer-item">
				<span class="footer-icon">🔐</span>
				<span>OAuth 2.0 (Auth0)</span>
			</div>
			<div class="footer-item">
				<span class="footer-icon">📝</span>
				<span>IANA Registered</span>
			</div>
			<div class="footer-item">
				<span class="footer-icon">🌍</span>
				<span>mcpaas.live</span>
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
		max-width: 700px;
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
		max-width: 700px;
		margin: 0 auto;
		padding: 2rem;
		background: white;
		border-radius: 16px;
		box-shadow: 0 4px 20px rgba(0,0,0,0.08);
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
	}

	/* AI Clients Row */
	.clients-row {
		display: flex;
		gap: 1rem;
		justify-content: center;
		flex-wrap: wrap;
	}

	.client-box {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 1rem 1.5rem;
		border-radius: 12px;
		min-width: 80px;
	}

	.client-box.claude {
		background: linear-gradient(135deg, #d97706 0%, #f59e0b 100%);
		color: white;
	}

	.client-box.grok {
		background: linear-gradient(135deg, #059669 0%, #10b981 100%);
		color: white;
	}

	.client-box.gemini {
		background: linear-gradient(135deg, #2563eb 0%, #3b82f6 100%);
		color: white;
	}

	.client-box.other {
		background: #f3f4f6;
		border: 2px dashed #9ca3af;
		color: #6b7280;
	}

	.client-icon {
		font-size: 1.5rem;
		font-weight: 700;
		font-family: 'SF Mono', monospace;
	}

	.client-name {
		font-size: 0.8rem;
		font-weight: 600;
		margin-top: 0.25rem;
	}

	/* Flow Arrows */
	.flow-arrow {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.25rem;
	}

	.arrow-line {
		width: 3px;
		height: 30px;
		background: linear-gradient(to bottom, #FF6B35, #FF6B35);
		border-radius: 2px;
		position: relative;
	}

	.arrow-line::after {
		content: '▼';
		position: absolute;
		bottom: -12px;
		left: 50%;
		transform: translateX(-50%);
		color: #FF6B35;
		font-size: 0.8rem;
	}

	.arrow-label {
		font-size: 0.75rem;
		color: #666;
		font-weight: 500;
		margin-top: 0.5rem;
	}

	/* Edge Layer */
	.edge-layer {
		width: 100%;
		background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
		border-radius: 12px;
		overflow: hidden;
	}

	.edge-header {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		padding: 1rem 1.5rem;
		background: rgba(255,255,255,0.05);
		border-bottom: 1px solid rgba(255,255,255,0.1);
	}

	.edge-icon {
		font-size: 1.2rem;
	}

	.edge-title {
		color: white;
		font-weight: 700;
		font-size: 1.1rem;
	}

	.edge-badge {
		margin-left: auto;
		background: #f7a41d;
		color: #000;
		padding: 0.25rem 0.75rem;
		border-radius: 4px;
		font-size: 0.75rem;
		font-weight: 600;
	}

	.edge-content {
		display: flex;
		gap: 1.5rem;
		padding: 1.5rem;
		justify-content: center;
		flex-wrap: wrap;
	}

	.engine-box {
		background: rgba(255,255,255,0.08);
		border-radius: 8px;
		padding: 1rem 1.5rem;
		text-align: center;
	}

	.engine-label {
		color: #f7a41d;
		font-weight: 700;
		font-family: 'SF Mono', monospace;
		font-size: 0.95rem;
	}

	.engine-size {
		color: white;
		font-size: 1.5rem;
		font-weight: 700;
		margin: 0.5rem 0;
	}

	.engine-features {
		display: flex;
		gap: 0.5rem;
		flex-wrap: wrap;
		justify-content: center;
	}

	.feature {
		background: rgba(255,255,255,0.1);
		color: #ccc;
		padding: 0.2rem 0.5rem;
		border-radius: 4px;
		font-size: 0.7rem;
	}

	.metrics-box {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
		justify-content: center;
	}

	.metric {
		display: flex;
		flex-direction: column;
		align-items: center;
		background: rgba(255,255,255,0.05);
		padding: 0.5rem 1rem;
		border-radius: 6px;
	}

	.metric-value {
		color: #4ade80;
		font-size: 1.1rem;
		font-weight: 700;
		font-family: 'SF Mono', monospace;
	}

	.metric-label {
		color: #888;
		font-size: 0.7rem;
	}

	/* Storage Layer */
	.storage-layer {
		width: 100%;
		background: #f0fdf4;
		border: 2px solid #bbf7d0;
		border-radius: 12px;
		padding: 1.5rem;
		display: flex;
		gap: 1.5rem;
		align-items: center;
		justify-content: center;
		flex-wrap: wrap;
	}

	.storage-box {
		text-align: center;
	}

	.storage-icon {
		font-size: 2rem;
	}

	.storage-title {
		font-weight: 700;
		color: #166534;
		font-size: 1rem;
	}

	.storage-desc {
		color: #15803d;
		font-size: 0.8rem;
	}

	.storage-content {
		display: flex;
		align-items: center;
	}

	.faf-file {
		background: #1a1a1a;
		color: white;
		padding: 0.75rem 1.25rem;
		border-radius: 8px;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.faf-file code {
		font-family: 'SF Mono', monospace;
		font-size: 1.1rem;
		font-weight: 700;
		color: #FF6B35;
	}

	.faf-file span {
		font-size: 0.75rem;
		color: #888;
	}

	/* Footer */
	.diagram-footer {
		display: flex;
		gap: 1.5rem;
		margin-top: 1rem;
		flex-wrap: wrap;
		justify-content: center;
	}

	.footer-item {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		font-size: 0.85rem;
		color: #666;
	}

	@media (max-width: 600px) {
		.clients-row {
			gap: 0.5rem;
		}

		.client-box {
			min-width: 60px;
			padding: 0.75rem 1rem;
		}

		.edge-content {
			flex-direction: column;
			align-items: center;
		}
	}
</style>
