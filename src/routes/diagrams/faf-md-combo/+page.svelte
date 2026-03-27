<svelte:head>
	<title>AI Context: Before & After | FAF Diagrams</title>
</svelte:head>

<div class="diagram-page">
	<div class="diagram-header">
		<a href="/diagrams" class="back-link">← All Diagrams</a>
		<h1>AI Context: Before & After</h1>
		<p>What your AI actually knows about your project</p>
	</div>

	<!-- THE DIAGRAM - Screenshot this area -->
	<div class="diagram-container">
		<div class="columns">
			<!-- LEFT: BEFORE -->
			<div class="column column-before">
				<div class="column-header">
					<span class="column-label label-before">CLAUDE.md Only</span>
					<span class="context-badge badge-low">~25%</span>
				</div>

				<div class="file-block file-md-bloated">
					<div class="file-header">
						<div class="file-icon icon-md-old">MD</div>
						<span class="file-name name-old">CLAUDE.md</span>
						<span class="file-lines">70 lines</span>
					</div>
					<div class="file-desc">
						Stack info + conventions + structure + rules + state — all prose, all mixed together
					</div>
				</div>

				<div class="ai-section">
					<div class="ai-label">AI has to figure out the rest</div>
					<div class="ai-task task-bad">
						<span class="ai-task-icon">⏱</span>
						Parse package.json for actual deps
					</div>
					<div class="ai-task task-bad">
						<span class="ai-task-icon">⏱</span>
						Scan directory tree for structure
					</div>
					<div class="ai-task task-bad">
						<span class="ai-task-icon">⏱</span>
						Guess architecture from file names
					</div>
					<div class="ai-task task-bad">
						<span class="ai-task-icon">⏱</span>
						Re-discover everything next session
					</div>
				</div>

				<div class="portable-row">
					<span class="portable-badge badge-locked">Claude only</span>
				</div>

				<div class="cost-bar cost-before">
					<div class="cost-label">What does ~25% mean?</div>
					<div class="cost-value cost-red">AI makes up the other 75%</div>
					<div class="cost-detail">Without full context, AI hallucinates, makes assumptions, and introduces errors you won't find until production.</div>
				</div>
			</div>

			<!-- RIGHT: AFTER -->
			<div class="column column-after">
				<div class="column-header">
					<span class="column-label label-after">.faf + CLAUDE.md</span>
					<span class="context-badge badge-full">100%</span>
				</div>

				<div class="file-block file-faf">
					<div class="file-header">
						<div class="file-icon icon-faf">.faf</div>
						<span class="file-name name-faf">project.faf</span>
						<span class="file-lines">27 lines</span>
					</div>
					<div class="file-desc">
						Structure — stack, architecture, project type. YAML. Machine-readable. Scorable.
					</div>
				</div>

				<div class="file-block file-md-lean">
					<div class="file-header">
						<div class="file-icon icon-md-new">MD</div>
						<span class="file-name name-md-new">CLAUDE.md</span>
						<span class="file-lines">23 lines</span>
					</div>
					<div class="file-desc">
						Instructions only — conventions, rules, current focus. Pure prose. No data.
					</div>
				</div>

				<div class="ai-section">
					<div class="ai-label">AI knows instantly</div>
					<div class="ai-task task-good">
						<span class="ai-task-icon">✓</span>
						Full stack context in &lt;1ms
					</div>
					<div class="ai-task task-good">
						<span class="ai-task-icon">✓</span>
						Architecture understood, no scanning
					</div>
					<div class="ai-task task-good">
						<span class="ai-task-icon">✓</span>
						Human rules separate from data
					</div>
					<div class="ai-task task-good">
						<span class="ai-task-icon">✓</span>
						Zero drift — faf sync keeps aligned
					</div>
				</div>

				<div class="portable-row">
					<span class="portable-badge badge-open">Claude</span>
					<span class="portable-badge badge-open">Cursor</span>
					<span class="portable-badge badge-open">Gemini</span>
					<span class="portable-badge badge-open">Windsurf</span>
					<span class="portable-badge badge-open">Any AI</span>
				</div>

				<div class="cost-bar cost-after">
					<div class="cost-label">What does 100% mean?</div>
					<div class="cost-value cost-green">AI is optimised for your project</div>
					<div class="cost-detail">Full context, every session, any tool. No guessing. No drift.</div>
				</div>
			</div>
		</div>

		<div class="tagline">
			<div class="tagline-main">FAF defines. CLAUDE.md instructs. AI consumes.</div>
			<div class="tagline-sub">application/vnd.faf+yaml — IANA registered</div>
		</div>
	</div>
</div>

<style>
	:global(body) {
		background: #0a0a0a;
	}

	.diagram-page {
		min-height: 100vh;
		background: #0a0a0a;
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

	.diagram-header h1 {
		font-size: 2rem;
		margin: 1rem 0 0.5rem 0;
		color: #f5f5f5;
	}

	.diagram-header p {
		color: #666;
		font-size: 14px;
		font-family: 'SF Mono', monospace;
	}

	.diagram-container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 48px;
		background: #111;
		border-radius: 20px;
		border: 1px solid #222;
	}

	.columns {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 32px;
	}

	.column {
		border-radius: 16px;
		padding: 28px;
	}

	.column-before {
		background: #1a1a1a;
		border: 2px solid #dc2626;
	}

	.column-after {
		background: #1a1a1a;
		border: 2px solid #00D4D4;
	}

	.column-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 24px;
	}

	.column-label {
		font-size: 13px;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		padding: 4px 12px;
		border-radius: 4px;
	}

	.label-before {
		background: rgba(220, 38, 38, 0.2);
		color: #f87171;
	}

	.label-after {
		background: rgba(0, 212, 212, 0.15);
		color: #00D4D4;
	}

	.context-badge {
		font-family: 'SF Mono', monospace;
		font-size: 24px;
		font-weight: 800;
	}

	.badge-low { color: #f87171; }
	.badge-full { color: #00D4D4; }

	.file-block {
		border-radius: 10px;
		padding: 16px 20px;
		margin-bottom: 16px;
	}

	.file-header {
		display: flex;
		align-items: center;
		gap: 8px;
		margin-bottom: 10px;
	}

	.file-icon {
		width: 20px;
		height: 20px;
		border-radius: 4px;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 9px;
		font-weight: 700;
		flex-shrink: 0;
	}

	.icon-md-old { background: #d97706; color: #000; }
	.icon-faf { background: #FF6B35; color: #fff; }
	.icon-md-new { background: #00D4D4; color: #000; }

	.file-name {
		font-family: 'SF Mono', monospace;
		font-size: 14px;
		font-weight: 600;
	}

	.name-old { color: #fbbf24; }
	.name-faf { color: #FF6B35; }
	.name-md-new { color: #00D4D4; }

	.file-lines {
		font-family: 'SF Mono', monospace;
		font-size: 11px;
		color: #666;
		margin-left: auto;
	}

	.file-desc {
		font-size: 12px;
		color: #999;
		line-height: 1.5;
	}

	.file-md-bloated {
		background: #252525;
		border: 1px solid #444;
	}

	.file-faf {
		background: #1a2a1a;
		border: 1px solid #2d5a2d;
	}

	.file-md-lean {
		background: #1a2525;
		border: 1px solid #2d4a4a;
	}

	.ai-section {
		margin-top: 20px;
		padding-top: 16px;
		border-top: 1px solid #333;
	}

	.ai-label {
		font-size: 11px;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.08em;
		color: #666;
		margin-bottom: 12px;
	}

	.ai-task {
		display: flex;
		align-items: center;
		gap: 10px;
		padding: 8px 12px;
		border-radius: 6px;
		margin-bottom: 6px;
		font-size: 13px;
	}

	.ai-task-icon {
		font-size: 14px;
		flex-shrink: 0;
		width: 20px;
		text-align: center;
	}

	.task-bad {
		background: rgba(220, 38, 38, 0.08);
		color: #f87171;
	}

	.task-good {
		background: rgba(0, 212, 212, 0.08);
		color: #00D4D4;
	}

	.portable-row {
		display: flex;
		gap: 6px;
		flex-wrap: wrap;
		margin-top: 12px;
	}

	.portable-badge {
		font-size: 10px;
		font-weight: 600;
		padding: 3px 8px;
		border-radius: 3px;
		font-family: 'SF Mono', monospace;
	}

	.badge-locked {
		background: rgba(220, 38, 38, 0.15);
		color: #f87171;
		border: 1px solid rgba(220, 38, 38, 0.3);
	}

	.badge-open {
		background: rgba(0, 212, 212, 0.1);
		color: #00D4D4;
		border: 1px solid rgba(0, 212, 212, 0.2);
	}

	.cost-bar {
		margin-top: 20px;
		padding: 16px 20px;
		border-radius: 10px;
		text-align: center;
	}

	.cost-before {
		background: rgba(220, 38, 38, 0.1);
		border: 1px solid rgba(220, 38, 38, 0.3);
	}

	.cost-after {
		background: rgba(0, 212, 212, 0.1);
		border: 1px solid rgba(0, 212, 212, 0.3);
	}

	.cost-label {
		font-size: 11px;
		text-transform: uppercase;
		letter-spacing: 0.08em;
		color: #888;
		margin-bottom: 4px;
	}

	.cost-value {
		font-family: 'SF Mono', monospace;
		font-size: 18px;
		font-weight: 700;
	}

	.cost-red { color: #f87171; }
	.cost-green { color: #00D4D4; }

	.cost-detail {
		font-size: 11px;
		color: #666;
		margin-top: 4px;
	}

	.tagline {
		text-align: center;
		margin-top: 32px;
		padding-top: 24px;
		border-top: 1px solid #222;
	}

	.tagline-main {
		font-size: 16px;
		color: #FF6B35;
		font-weight: 600;
		margin-bottom: 6px;
	}

	.tagline-sub {
		font-size: 12px;
		color: #555;
		font-family: 'SF Mono', monospace;
	}

	@media (max-width: 768px) {
		.columns {
			grid-template-columns: 1fr;
		}

		.diagram-container {
			padding: 24px;
		}

		.diagram-page {
			padding: 1rem;
		}

		.context-badge {
			font-size: 18px;
		}
	}
</style>
