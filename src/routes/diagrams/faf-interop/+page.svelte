<svelte:head>
	<title>FAF Interoperability | FAF Diagrams</title>
</svelte:head>

<div class="diagram-page">
	<div class="diagram-header">
		<a href="/diagrams" class="back-link">←</a>
		<h1>FAF Interoperability</h1>
		<p>.faf ↔ CLAUDE.md ↔ GEMINI.md ↔ conductor/ sync</p>
	</div>

	<!-- THE DIAGRAM - Screenshot this area -->
	<div class="diagram-container">
		<!-- Center: .faf file -->
		<div class="center-hub">
			<div class="faf-core">
				<div class="faf-icon">📄</div>
				<div class="faf-label">.faf</div>
				<div class="faf-sublabel">Project DNA</div>
				<div class="faf-badge">Source of Truth</div>
			</div>
		</div>

		<!-- Sync arrows and targets -->
		<div class="sync-targets">
			<!-- Claude -->
			<div class="sync-target">
				<div class="sync-arrow claude-arrow">
					<span class="arrow-icon">↔</span>
					<span class="sync-label">bi-sync</span>
				</div>
				<div class="target-box claude-target">
					<div class="target-icon">C</div>
					<div class="target-label">CLAUDE.md</div>
					<div class="target-tool">Claude Code</div>
				</div>
			</div>

			<!-- Gemini -->
			<div class="sync-target">
				<div class="sync-arrow gemini-arrow">
					<span class="arrow-icon">↔</span>
					<span class="sync-label">bi-sync</span>
				</div>
				<div class="target-box gemini-target">
					<div class="target-icon">G</div>
					<div class="target-label">GEMINI.md</div>
					<div class="target-tool">Gemini CLI</div>
				</div>
			</div>

			<!-- Conductor -->
			<div class="sync-target">
				<div class="sync-arrow conductor-arrow">
					<span class="arrow-icon">↔</span>
					<span class="sync-label">bi-sync</span>
				</div>
				<div class="target-box conductor-target">
					<div class="target-icon">⚡</div>
					<div class="target-label">conductor/</div>
					<div class="target-tool">Gemini Agent</div>
				</div>
			</div>

			<!-- Cursor -->
			<div class="sync-target">
				<div class="sync-arrow cursor-arrow">
					<span class="arrow-icon">↔</span>
					<span class="sync-label">bi-sync</span>
				</div>
				<div class="target-box cursor-target">
					<div class="target-icon">.cursorrules</div>
					<div class="target-label">.cursorrules</div>
					<div class="target-tool">Cursor IDE</div>
				</div>
			</div>
		</div>

		<!-- Benefits Section -->
		<div class="benefits-section">
			<div class="benefit-item">
				<div class="benefit-icon">✏️</div>
				<div class="benefit-text">
					<strong>Edit Once</strong>
					<span>Change .faf, all files update</span>
				</div>
			</div>
			<div class="benefit-item">
				<div class="benefit-icon">🔄</div>
				<div class="benefit-text">
					<strong>Bi-Directional</strong>
					<span>Changes sync both ways</span>
				</div>
			</div>
			<div class="benefit-item">
				<div class="benefit-icon">⚡</div>
				<div class="benefit-text">
					<strong>&lt;8ms Sync</strong>
					<span>Championship-grade speed</span>
				</div>
			</div>
		</div>

		<!-- Command Example -->
		<div class="command-section">
			<div class="command-header">SYNC COMMAND</div>
			<div class="command-box">
				<code>faf sync</code>
			</div>
			<div class="command-desc">Syncs .faf with all target files in your project</div>
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

	.diagram-header p {
		color: #666;
		margin: 0;
	}

	/* THE DIAGRAM */
	.diagram-container {
		max-width: 800px;
		margin: 0 auto;
		padding: 2rem;
		background: var(--faf-surface);
		border-radius: 16px;
		box-shadow: 0 4px 20px rgba(0,0,0,0.08);
	}

	/* Center Hub */
	.center-hub {
		display: flex;
		justify-content: center;
		margin-bottom: 2rem;
	}

	.faf-core {
		background: linear-gradient(135deg, #FF6B35 0%, #FF5722 100%);
		color: white;
		padding: 1.5rem 2.5rem;
		border-radius: 16px;
		text-align: center;
		box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
	}

	.faf-icon {
		font-size: 2rem;
		margin-bottom: 0.25rem;
	}

	.faf-label {
		font-family: 'SF Mono', monospace;
		font-size: 1.5rem;
		font-weight: 700;
	}

	.faf-sublabel {
		font-size: 0.85rem;
		opacity: 0.9;
	}

	.faf-badge {
		background: rgba(255,255,255,0.25);
		padding: 0.25rem 0.75rem;
		border-radius: 4px;
		font-size: 0.7rem;
		font-weight: 600;
		margin-top: 0.75rem;
		display: inline-block;
	}

	/* Sync Targets */
	.sync-targets {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 1.5rem;
		margin-bottom: 2rem;
	}

	.sync-target {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.5rem;
	}

	.sync-arrow {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.arrow-icon {
		font-size: 1.5rem;
		font-weight: bold;
	}

	.claude-arrow .arrow-icon { color: #d97706; }
	.gemini-arrow .arrow-icon { color: #2563eb; }
	.conductor-arrow .arrow-icon { color: #7c3aed; }
	.cursor-arrow .arrow-icon { color: #059669; }

	.sync-label {
		font-size: 0.65rem;
		color: #888;
		font-weight: 500;
	}

	.target-box {
		padding: 1rem 1.5rem;
		border-radius: 12px;
		text-align: center;
		min-width: 150px;
	}

	.claude-target {
		background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
		border: 2px solid #fbbf24;
	}

	.gemini-target {
		background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%);
		border: 2px solid #60a5fa;
	}

	.conductor-target {
		background: linear-gradient(135deg, #ede9fe 0%, #ddd6fe 100%);
		border: 2px solid #a78bfa;
	}

	.cursor-target {
		background: linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%);
		border: 2px solid #34d399;
	}

	.target-icon {
		font-size: 1.25rem;
		font-weight: 700;
		font-family: 'SF Mono', monospace;
	}

	.claude-target .target-icon { color: #92400e; }
	.gemini-target .target-icon { color: #1d4ed8; }
	.conductor-target .target-icon { color: #6d28d9; }
	.cursor-target .target-icon { color: #047857; font-size: 0.7rem; }

	.target-label {
		font-family: 'SF Mono', monospace;
		font-size: 0.85rem;
		font-weight: 600;
		color: #333;
		margin-top: 0.25rem;
	}

	.target-tool {
		font-size: 0.7rem;
		color: #666;
		margin-top: 0.25rem;
	}

	/* Benefits Section */
	.benefits-section {
		display: flex;
		gap: 1rem;
		justify-content: center;
		flex-wrap: wrap;
		padding: 1.5rem;
		background: #f8f9fa;
		border-radius: 12px;
		margin-bottom: 1.5rem;
	}

	.benefit-item {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		padding: 0.75rem 1rem;
		background: var(--faf-surface);
		border-radius: 8px;
		box-shadow: 0 2px 6px rgba(0,0,0,0.05);
	}

	.benefit-icon {
		font-size: 1.25rem;
	}

	.benefit-text {
		display: flex;
		flex-direction: column;
	}

	.benefit-text strong {
		font-size: 0.85rem;
		color: #000;
	}

	.benefit-text span {
		font-size: 0.75rem;
		color: #666;
	}

	/* Command Section */
	.command-section {
		text-align: center;
	}

	.command-header {
		font-size: 0.75rem;
		font-weight: 600;
		color: #888;
		letter-spacing: 0.05em;
		margin-bottom: 0.5rem;
	}

	.command-box {
		display: inline-block;
		background: #1a1a1a;
		padding: 0.75rem 2rem;
		border-radius: 8px;
	}

	.command-box code {
		font-family: 'SF Mono', monospace;
		color: var(--faf-green-light);
		font-size: 1.1rem;
		font-weight: 600;
	}

	.command-desc {
		font-size: 0.8rem;
		color: #666;
		margin-top: 0.5rem;
	}

	@media (max-width: 600px) {
		.sync-targets {
			grid-template-columns: 1fr;
		}

		.benefits-section {
			flex-direction: column;
		}
	}
</style>
