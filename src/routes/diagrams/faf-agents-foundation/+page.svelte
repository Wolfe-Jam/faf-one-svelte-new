<svelte:head>
	<title>FAF Foundation | FAF Diagrams</title>
</svelte:head>

<div class="diagram-page">
	<div class="diagram-header">
		<a href="/diagrams" class="back-link">←</a>
		<h1>FAF Foundation Architecture</h1>
		<p>.faf as source of truth for Agents.md, CLAUDE.md, GEMINI.md, and more</p>
	</div>

	<!-- THE DIAGRAM - Screenshot this area -->
	<div class="diagram-container">

		<!-- Top Layer: Agent Frameworks -->
		<div class="layer agent-layer">
			<div class="layer-label">Agent Frameworks</div>
			<div class="layer-items">
				<div class="agent-box agents-md">
					<div class="agent-icon">🤖</div>
					<div class="agent-name">Agents.md</div>
					<div class="agent-tool">OpenAI / Cursor</div>
				</div>
				<div class="agent-box conductor-md">
					<div class="agent-icon">⚡</div>
					<div class="agent-name">Conductor.md</div>
					<div class="agent-tool">Orchestration</div>
				</div>
				<div class="agent-box custom-agents">
					<div class="agent-icon">🔧</div>
					<div class="agent-name">Custom Agents</div>
					<div class="agent-tool">Your Framework</div>
				</div>
			</div>
		</div>

		<!-- Consume arrows (up from AI files) -->
		<div class="arrow-row consume-arrows">
			<div class="arrow-up">▲</div>
			<div class="arrow-label">consumes</div>
			<div class="arrow-up">▲</div>
			<div class="arrow-label">consumes</div>
			<div class="arrow-up">▲</div>
		</div>

		<!-- Middle Layer: AI-Specific Files -->
		<div class="layer ai-layer">
			<div class="layer-label">AI-Specific Context</div>
			<div class="layer-items">
				<div class="ai-box claude-box">
					<div class="ai-letter">C</div>
					<div class="ai-name">CLAUDE.md</div>
					<div class="ai-vendor">Anthropic</div>
				</div>
				<div class="ai-box gemini-box">
					<div class="ai-letter">G</div>
					<div class="ai-name">GEMINI.md</div>
					<div class="ai-vendor">Google</div>
				</div>
				<div class="ai-box grok-box">
					<div class="ai-letter">X</div>
					<div class="ai-name">GROK.md</div>
					<div class="ai-vendor">xAI</div>
				</div>
			</div>
		</div>

		<!-- Bi-sync arrows (two-way) -->
		<div class="arrow-row bisync-arrows">
			<div class="bisync-arrow">
				<span class="arrow-double">↕</span>
			</div>
			<div class="bisync-arrow">
				<span class="arrow-double">↕</span>
			</div>
			<div class="bisync-arrow">
				<span class="arrow-double">↕</span>
			</div>
		</div>

		<!-- Bi-sync label -->
		<div class="bisync-label-row">
			<div class="bisync-badge">bi-sync (8ms)</div>
		</div>

		<!-- Foundation Layer: FAF -->
		<div class="foundation-layer">
			<div class="foundation-glow"></div>
			<div class="foundation-box">
				<div class="foundation-icon">♾️</div>
				<div class="foundation-name">.faf Format Foundation</div>
				<div class="foundation-tags">
					<span class="tag">IANA-Registered</span>
					<span class="tag">Persistent</span>
					<span class="tag">Universal</span>
				</div>
				<div class="foundation-badge">Source of Truth</div>
			</div>
		</div>

		<!-- Key insight -->
		<div class="insight-section">
			<div class="insight-box">
				<div class="insight-icon">💡</div>
				<div class="insight-text">
					<strong>FAF is the foundation.</strong> Truth flows up. All AI files and agent frameworks build on the same source of truth.
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
		color: #fff;
	}

	.diagram-header p {
		color: #888;
		margin: 0;
	}

	/* THE DIAGRAM */
	.diagram-container {
		max-width: 800px;
		margin: 0 auto;
		padding: 2rem;
		background: #111;
		border-radius: 16px;
		border: 1px solid #222;
	}

	/* Layer styles */
	.layer {
		margin-bottom: 0.5rem;
	}

	.layer-label {
		font-size: 0.7rem;
		font-weight: 600;
		color: #666;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		margin-bottom: 0.75rem;
		text-align: center;
	}

	.layer-items {
		display: flex;
		justify-content: center;
		gap: 1rem;
		flex-wrap: wrap;
	}

	/* Agent boxes (top layer) */
	.agent-box {
		padding: 1rem 1.25rem;
		border-radius: 12px;
		text-align: center;
		min-width: 140px;
		border: 2px solid;
	}

	.agents-md {
		background: rgba(14, 165, 233, 0.1);
		border-color: #0ea5e9;
	}

	.conductor-md {
		background: rgba(168, 85, 247, 0.1);
		border-color: #a855f7;
	}

	.custom-agents {
		background: rgba(107, 114, 128, 0.1);
		border-color: #6b7280;
	}

	.agent-icon {
		font-size: 1.5rem;
		margin-bottom: 0.25rem;
	}

	.agent-name {
		font-family: 'SF Mono', monospace;
		font-size: 0.85rem;
		font-weight: 600;
		color: #fff;
	}

	.agent-tool {
		font-size: 0.7rem;
		color: #888;
		margin-top: 0.25rem;
	}

	/* Arrow rows */
	.arrow-row {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 2rem;
		padding: 0.75rem 0;
	}

	.consume-arrows {
		color: #4ade80;
	}

	.arrow-up {
		font-size: 1.25rem;
	}

	.arrow-label {
		font-size: 0.65rem;
		color: #666;
	}

	/* AI boxes (middle layer) */
	.ai-box {
		padding: 1rem 1.5rem;
		border-radius: 12px;
		text-align: center;
		min-width: 130px;
		border: 2px solid;
	}

	.claude-box {
		background: linear-gradient(135deg, rgba(255, 107, 53, 0.15) 0%, rgba(255, 140, 90, 0.1) 100%);
		border-color: #FF6B35;
	}

	.gemini-box {
		background: linear-gradient(135deg, rgba(66, 133, 244, 0.15) 0%, rgba(138, 43, 226, 0.1) 100%);
		border-color: #4285f4;
	}

	.grok-box {
		background: rgba(255, 255, 255, 0.05);
		border-color: #fff;
	}

	.ai-letter {
		font-size: 1.5rem;
		font-weight: 700;
		font-family: 'SF Mono', monospace;
	}

	.claude-box .ai-letter { color: #FF6B35; }
	.gemini-box .ai-letter { color: #4285f4; }
	.grok-box .ai-letter { color: #fff; }

	.ai-name {
		font-family: 'SF Mono', monospace;
		font-size: 0.8rem;
		font-weight: 600;
		color: #ccc;
		margin-top: 0.25rem;
	}

	.ai-vendor {
		font-size: 0.7rem;
		color: #666;
		margin-top: 0.25rem;
	}

	/* Bi-sync arrows */
	.bisync-arrows {
		padding: 0.5rem 0;
	}

	.bisync-arrow {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.arrow-double {
		font-size: 1.75rem;
		color: #00D4D4;
		font-weight: bold;
	}

	.bisync-label-row {
		display: flex;
		justify-content: center;
		margin-bottom: 1rem;
	}

	.bisync-badge {
		background: rgba(0, 212, 212, 0.15);
		color: #00D4D4;
		padding: 0.35rem 1rem;
		border-radius: 20px;
		font-size: 0.75rem;
		font-weight: 600;
		border: 1px solid rgba(0, 212, 212, 0.3);
	}

	/* Foundation layer */
	.foundation-layer {
		position: relative;
		margin-top: 0.5rem;
	}

	.foundation-glow {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 100%;
		height: 100%;
		background: radial-gradient(ellipse at center, rgba(74, 222, 128, 0.15) 0%, transparent 70%);
		pointer-events: none;
	}

	.foundation-box {
		position: relative;
		background: linear-gradient(135deg, #166534 0%, #15803d 50%, #16a34a 100%);
		padding: 1.5rem 2rem;
		border-radius: 16px;
		text-align: center;
		box-shadow: 0 8px 32px rgba(74, 222, 128, 0.25);
		border: 2px solid #4ade80;
	}

	.foundation-icon {
		font-size: 2rem;
		margin-bottom: 0.5rem;
		color: #fff;
		filter: brightness(1.5);
	}

	.foundation-name {
		font-size: 1.25rem;
		font-weight: 700;
		color: #fff;
		margin-bottom: 0.75rem;
	}

	.foundation-tags {
		display: flex;
		justify-content: center;
		gap: 0.5rem;
		flex-wrap: wrap;
		margin-bottom: 0.75rem;
	}

	.tag {
		background: rgba(255, 255, 255, 0.2);
		color: #fff;
		padding: 0.25rem 0.75rem;
		border-radius: 4px;
		font-size: 0.7rem;
		font-weight: 600;
	}

	.foundation-badge {
		display: inline-block;
		background: #fff;
		color: #166534;
		padding: 0.35rem 1rem;
		border-radius: 20px;
		font-size: 0.75rem;
		font-weight: 700;
	}

	/* Insight section */
	.insight-section {
		margin-top: 1.5rem;
	}

	.insight-box {
		display: flex;
		align-items: center;
		gap: 1rem;
		background: rgba(255, 255, 255, 0.03);
		border: 1px solid #333;
		border-radius: 12px;
		padding: 1rem 1.5rem;
	}

	.insight-icon {
		font-size: 1.5rem;
	}

	.insight-text {
		font-size: 0.9rem;
		color: #aaa;
	}

	.insight-text strong {
		color: #fff;
	}

	@media (max-width: 600px) {
		.layer-items {
			flex-direction: column;
			align-items: center;
		}

		.arrow-row {
			flex-direction: column;
			gap: 0.25rem;
		}

		.bisync-arrows {
			flex-direction: row;
		}
	}
</style>
