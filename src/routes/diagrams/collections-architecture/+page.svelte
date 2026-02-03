<svelte:head>
	<title>xAI Collections + FAF Architecture | FAF Diagrams</title>
</svelte:head>

<div class="diagram-page">
	<div class="diagram-header">
		<a href="/diagrams" class="back-link">← All Diagrams</a>
		<h1>xAI Collections + FAF Architecture</h1>
		<p>How project.faf enables eternal voice memory in Grok Collections</p>
	</div>

	<!-- THE DIAGRAM - Screenshot this area -->
	<div class="diagram-container">
		<!-- Top: Developer action -->
		<div class="action-box">
			<div class="action-icon">👨‍💻</div>
			<div class="action-content">
				<div class="action-title">Developer runs:</div>
				<code class="action-command">faf init --xai</code>
			</div>
		</div>

		<div class="flow-arrow">↓</div>

		<!-- FAF File Created -->
		<div class="file-box">
			<div class="file-header">
				<span class="file-icon">📄</span>
				<span class="file-name">project.faf</span>
				<span class="file-badge">Voice Configuration</span>
			</div>
			<div class="file-content">
				<div class="yaml-line"><span class="yaml-key">grok:</span></div>
				<div class="yaml-line indent"><span class="yaml-key">voice:</span> <span class="yaml-value">Leo</span></div>
				<div class="yaml-line indent"><span class="yaml-key">tone:</span> <span class="yaml-value">Polite, dry British wit</span></div>
				<div class="yaml-line indent"><span class="yaml-key">persona:</span> <span class="yaml-value">Eternal memory</span></div>
				<div class="yaml-line indent"><span class="yaml-key">retrieval_mode:</span> <span class="yaml-value">hybrid</span></div>
				<div class="yaml-line"><span class="yaml-key">xai_collections:</span></div>
				<div class="yaml-line indent"><span class="yaml-key">ready:</span> <span class="yaml-value">true</span></div>
			</div>
		</div>

		<div class="flow-arrow">↓</div>

		<!-- Upload to Collections -->
		<div class="upload-box">
			<div class="upload-header">📤 Upload to xAI Collections</div>
			<div class="upload-order">
				<div class="upload-item">
					<span class="upload-number">1</span>
					<span class="upload-file">project.faf</span>
					<span class="upload-desc">Project DNA</span>
				</div>
				<div class="upload-item">
					<span class="upload-number">2</span>
					<span class="upload-file">architecture.md</span>
					<span class="upload-desc">System design</span>
				</div>
				<div class="upload-item">
					<span class="upload-number">3</span>
					<span class="upload-file">skills.md</span>
					<span class="upload-desc">Team capabilities</span>
				</div>
			</div>
		</div>

		<div class="flow-arrow">↓</div>

		<!-- Grok with Collections -->
		<div class="grok-box">
			<div class="grok-header">
				<div class="grok-logo">🍊 Grok with Collections</div>
				<div class="grok-status">✓ Voice Loaded</div>
			</div>
			<div class="grok-content">
				<div class="retrieval-section">
					<div class="retrieval-title">Hybrid Retrieval Strategy</div>
					<div class="retrieval-steps">
						<div class="retrieval-step">
							<span class="step-num">1</span>
							<span class="step-text">Search project files in Collections</span>
						</div>
						<div class="retrieval-step">
							<span class="step-num">2</span>
							<span class="step-text">Ground responses in your architecture</span>
						</div>
						<div class="retrieval-step">
							<span class="step-num">3</span>
							<span class="step-text">Fallback to general knowledge (if needed)</span>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="flow-arrow">↓</div>

		<!-- Result: Eternal Memory -->
		<div class="result-box">
			<div class="result-icon">👻</div>
			<div class="result-title">Eternal Voice Memory</div>
			<div class="result-benefits">
				<div class="benefit-item">
					<span class="benefit-icon">✓</span>
					<span class="benefit-text">Zero re-explaining</span>
				</div>
				<div class="benefit-item">
					<span class="benefit-icon">✓</span>
					<span class="benefit-text">91% token reclaim</span>
				</div>
				<div class="benefit-item">
					<span class="benefit-icon">✓</span>
					<span class="benefit-text">Context persists forever</span>
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
		max-width: 800px;
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
		max-width: 800px;
		margin: 0 auto;
		padding: 2rem;
		background: white;
		border-radius: 16px;
		box-shadow: 0 4px 20px rgba(0,0,0,0.08);
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1.5rem;
	}

	.flow-arrow {
		color: #4ade80;
		font-size: 2rem;
		font-weight: bold;
	}

	.action-box {
		display: flex;
		align-items: center;
		gap: 1.5rem;
		padding: 1.5rem 2rem;
		background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%);
		border: 2px solid #4ade80;
		border-radius: 12px;
		width: 100%;
	}

	.action-icon {
		font-size: 3rem;
	}

	.action-content {
		flex: 1;
	}

	.action-title {
		font-size: 0.9rem;
		color: #666;
		margin-bottom: 0.5rem;
		font-weight: 600;
	}

	.action-command {
		font-family: 'SF Mono', monospace;
		font-size: 1.5rem;
		color: #16a34a;
		font-weight: 700;
		background: white;
		padding: 0.5rem 1rem;
		border-radius: 6px;
		display: inline-block;
	}

	.file-box {
		width: 100%;
		background: #1a1a1a;
		border-radius: 12px;
		overflow: hidden;
		box-shadow: 0 4px 16px rgba(0,0,0,0.2);
	}

	.file-header {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		padding: 1rem 1.5rem;
		background: #2a2a2a;
		border-bottom: 1px solid #333;
	}

	.file-icon {
		font-size: 1.5rem;
	}

	.file-name {
		font-family: 'SF Mono', monospace;
		font-size: 1.1rem;
		color: #f5f5f5;
		font-weight: 600;
		flex: 1;
	}

	.file-badge {
		background: #4ade80;
		color: #0a0a0a;
		padding: 0.25rem 0.75rem;
		border-radius: 4px;
		font-size: 0.8rem;
		font-weight: 700;
	}

	.file-content {
		padding: 1.5rem;
		font-family: 'SF Mono', monospace;
		font-size: 0.95rem;
		line-height: 1.8;
	}

	.yaml-line {
		color: #f5f5f5;
	}

	.yaml-line.indent {
		padding-left: 2rem;
	}

	.yaml-key {
		color: #FF6B35;
		font-weight: 600;
	}

	.yaml-value {
		color: #4ade80;
	}

	.upload-box {
		width: 100%;
		background: white;
		border: 2px solid #00D4D4;
		border-radius: 12px;
		overflow: hidden;
	}

	.upload-header {
		background: #00D4D4;
		color: white;
		padding: 1rem 1.5rem;
		font-size: 1.1rem;
		font-weight: 700;
		text-align: center;
	}

	.upload-order {
		padding: 1rem;
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}

	.upload-item {
		display: flex;
		align-items: center;
		gap: 1rem;
		padding: 0.75rem 1rem;
		background: #f8f9fa;
		border-radius: 8px;
	}

	.upload-number {
		background: #00D4D4;
		color: white;
		width: 2rem;
		height: 2rem;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		font-weight: 700;
		font-size: 0.9rem;
	}

	.upload-file {
		font-family: 'SF Mono', monospace;
		font-weight: 600;
		color: #1a1a1a;
		flex: 1;
	}

	.upload-desc {
		font-size: 0.85rem;
		color: #666;
	}

	.grok-box {
		width: 100%;
		background: white;
		border: 2px solid #4ade80;
		border-radius: 12px;
		overflow: hidden;
	}

	.grok-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1rem 1.5rem;
		background: linear-gradient(135deg, #4ade80 0%, #22c55e 100%);
		color: white;
	}

	.grok-logo {
		font-size: 1.2rem;
		font-weight: 700;
	}

	.grok-status {
		background: rgba(255,255,255,0.3);
		padding: 0.25rem 0.75rem;
		border-radius: 4px;
		font-size: 0.85rem;
		font-weight: 600;
	}

	.grok-content {
		padding: 1.5rem;
	}

	.retrieval-section {
		background: #f0fdf4;
		padding: 1.5rem;
		border-radius: 8px;
	}

	.retrieval-title {
		font-size: 1.1rem;
		font-weight: 700;
		color: #16a34a;
		margin-bottom: 1rem;
		text-align: center;
	}

	.retrieval-steps {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}

	.retrieval-step {
		display: flex;
		align-items: center;
		gap: 1rem;
		padding: 0.75rem;
		background: white;
		border-radius: 6px;
	}

	.step-num {
		background: #4ade80;
		color: white;
		width: 1.75rem;
		height: 1.75rem;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		font-weight: 700;
		font-size: 0.85rem;
	}

	.step-text {
		font-size: 0.95rem;
		color: #1a1a1a;
	}

	.result-box {
		width: 100%;
		background: linear-gradient(135deg, #1a1a1a 0%, #2a1a0a 100%);
		border: 2px solid #FF6B35;
		border-radius: 12px;
		padding: 2rem;
		text-align: center;
		color: white;
	}

	.result-icon {
		font-size: 4rem;
		margin-bottom: 1rem;
	}

	.result-title {
		font-size: 1.75rem;
		font-weight: 700;
		color: #FF6B35;
		margin-bottom: 1.5rem;
	}

	.result-benefits {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}

	.benefit-item {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.75rem;
		font-size: 1.1rem;
	}

	.benefit-icon {
		color: #4ade80;
		font-weight: 700;
		font-size: 1.25rem;
	}

	.benefit-text {
		color: #f5f5f5;
	}
</style>
