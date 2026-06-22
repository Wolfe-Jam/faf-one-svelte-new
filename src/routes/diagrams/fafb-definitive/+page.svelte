<svelte:head>
	<title>FAFb — The Definitive Edition | FAF Diagrams</title>
</svelte:head>

<div class="diagram-page">
	<div class="diagram-header">
		<a href="/diagrams" class="back-link">←</a>
		<h1>FAFb Architecture</h1>
		<p>Compile flow — screenshot the diagram below</p>
	</div>

	<!-- THE DIAGRAM - Screenshot this area -->
	<div class="diagram-container">
		<div class="diagram-title">FAFb — The Definitive Edition</div>
		<div class="diagram-subtitle">faf-rust-sdk v2.0.0 · The Definitive Binary for Context in the AI Era</div>

		<div class="compile-flow">
			<!-- LEFT: YAML Source -->
			<div class="source-side">
				<div class="source-label">.faf (YAML)</div>
				<div class="yaml-block">
					<div class="yaml-line"><span class="yaml-key">project:</span></div>
					<div class="yaml-line yaml-indent"><span class="yaml-key">name:</span> my-app</div>
					<div class="yaml-line"><span class="yaml-key">tech_stack:</span></div>
					<div class="yaml-line yaml-indent">- Rust</div>
					<div class="yaml-line yaml-indent">- WASM</div>
					<div class="yaml-line"><span class="yaml-key">compliance:</span></div>
					<div class="yaml-line yaml-indent"><span class="yaml-key">soc2:</span> true</div>
					<div class="yaml-line"><span class="yaml-key">docs:</span></div>
					<div class="yaml-line yaml-indent">- README.md</div>
				</div>
				<div class="source-meta">IANA: application/vnd.faf+yaml</div>
			</div>

			<!-- MIDDLE: Compile Arrow -->
			<div class="compile-arrow">
				<div class="arrow-label">compile()</div>
				<div class="arrow-body">
					<div class="arrow-line"></div>
					<div class="arrow-head">▶</div>
				</div>
				<div class="arrow-detail">CRC32 sealed</div>
				<div class="arrow-detail">deterministic</div>
			</div>

			<!-- RIGHT: FAFb Binary -->
			<div class="binary-side">
				<div class="binary-label">.fafb (Binary)</div>
				<div class="binary-stack">
					<div class="binary-layer header-layer">
						<div class="layer-name">HEADER</div>
						<div class="layer-detail">32 bytes · Magic "FAFB" · CRC32</div>
					</div>

					<div class="section-data-group">
						<div class="section-data-label">SECTION DATA</div>
						<div class="chunks-row">
							<div class="chunk dna-chunk">
								<div class="chunk-class">DNA</div>
								<div class="chunk-items">project<br/>tech_stack<br/>commands</div>
							</div>
							<div class="chunk context-chunk">
								<div class="chunk-class">Context</div>
								<div class="chunk-items">compliance</div>
							</div>
							<div class="chunk pointer-chunk">
								<div class="chunk-class">Pointer</div>
								<div class="chunk-items">docs</div>
							</div>
						</div>
					</div>

					<div class="binary-layer string-table-layer">
						<div class="layer-name">STRING TABLE</div>
						<div class="layer-detail">unlimited names · O(1) lookup</div>
					</div>

					<div class="binary-layer section-table-layer">
						<div class="layer-name">SECTION TABLE</div>
						<div class="layer-detail">16 bytes/entry · priority · classification</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Bottom bar -->
		<div class="bottom-bar">
			<div class="bottom-item">
				<span class="bottom-label">Solo Dev</span>
				<span class="bottom-arrow">→</span>
				<span class="bottom-label">Fortune 500</span>
			</div>
			<div class="bottom-divider">·</div>
			<div class="bottom-item">
				<span class="bottom-value">256 sections</span>
			</div>
			<div class="bottom-divider">·</div>
			<div class="bottom-item">
				<span class="bottom-value">MIT</span>
			</div>
			<div class="bottom-divider">·</div>
			<div class="bottom-item">
				<span class="bottom-value">313 tests</span>
			</div>
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
		color: #888;
	}

	.diagram-header h1 {
		color: #f5f5f5;
		font-size: 1.5rem;
		margin: 1rem 0 0.25rem 0;
	}

	.diagram-header p {
		color: #666;
		font-size: 0.9rem;
	}

	.back-link {
		color: #CE422B;
		text-decoration: none;
		font-size: 0.9rem;
	}

	/* === THE DIAGRAM === */
	.diagram-container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 2.5rem 3rem;
		background: #1a1a1a;
		border-radius: 16px;
		border: 1px solid #333;
		/* 1200x630 ratio */
		aspect-ratio: 1200 / 630;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.diagram-title {
		text-align: center;
		font-size: 1.8rem;
		font-weight: 700;
		color: #f5f5f5;
		letter-spacing: -0.02em;
	}

	.diagram-subtitle {
		text-align: center;
		font-size: 0.95rem;
		color: #f5f5f5;
		margin-bottom: 1.5rem;
		font-family: 'SF Mono', monospace;
	}

	/* Compile Flow */
	.compile-flow {
		display: flex;
		align-items: center;
		gap: 2rem;
		flex: 1;
		min-height: 0;
	}

	/* Source Side */
	.source-side {
		flex: 0 0 28%;
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}

	.source-label {
		font-family: 'SF Mono', monospace;
		font-size: 0.85rem;
		font-weight: 600;
		color: #FF6B35;
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}

	.yaml-block {
		background: #111;
		border: 1px solid #333;
		border-left: 3px solid #FF6B35;
		border-radius: 8px;
		padding: 1rem;
		font-family: 'SF Mono', monospace;
		font-size: 0.75rem;
		line-height: 1.6;
		color: #ccc;
	}

	.yaml-key { color: #00D4D4; }
	.yaml-indent { padding-left: 1rem; }

	.source-meta {
		font-size: 0.7rem;
		color: #f5f5f5;
		font-weight: 700;
		font-family: 'SF Mono', monospace;
	}

	/* Compile Arrow */
	.compile-arrow {
		flex: 0 0 12%;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.5rem;
	}

	.arrow-label {
		font-family: 'SF Mono', monospace;
		font-size: 0.85rem;
		font-weight: 600;
		color: #CE422B;
		background: rgba(206, 66, 43, 0.15);
		padding: 0.3rem 0.8rem;
		border-radius: 4px;
		border: 1px solid rgba(206, 66, 43, 0.3);
	}

	.arrow-body {
		display: flex;
		align-items: center;
		gap: 0;
		width: 100%;
	}

	.arrow-line {
		flex: 1;
		height: 3px;
		background: linear-gradient(90deg, #CE422B, #FF6B35);
		border-radius: 2px;
	}

	.arrow-head {
		color: #FF6B35;
		font-size: 1.2rem;
		margin-left: -2px;
	}

	.arrow-detail {
		font-size: 0.65rem;
		color: #f5f5f5;
		font-family: 'SF Mono', monospace;
	}

	/* Binary Side */
	.binary-side {
		flex: 1;
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}

	.binary-label {
		font-family: 'SF Mono', monospace;
		font-size: 0.85rem;
		font-weight: 600;
		color: #CE422B;
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}

	.binary-stack {
		display: flex;
		flex-direction: column;
		gap: 0.4rem;
	}

	.binary-layer {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0.6rem 1rem;
		border-radius: 6px;
		font-family: 'SF Mono', monospace;
	}

	.layer-name {
		font-size: 0.8rem;
		font-weight: 700;
		color: #f5f5f5;
	}

	.layer-detail {
		font-size: 0.65rem;
		color: #f5f5f5;
	}

	.header-layer {
		background: #CE422B;
		border: 1px solid #e05535;
	}

	.header-layer .layer-name { color: #fff; }
	.header-layer .layer-detail { color: #fff; font-weight: 700; }

	.section-data-group {
		background: #111;
		border: 1px solid #333;
		border-radius: 6px;
		padding: 0.6rem;
	}

	.section-data-label {
		font-family: 'SF Mono', monospace;
		font-size: 0.65rem;
		color: #aaa;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		margin-bottom: 0.5rem;
	}

	.chunks-row {
		display: flex;
		gap: 0.5rem;
	}

	.chunk {
		flex: 1;
		padding: 0.5rem 0.75rem;
		border-radius: 4px;
		text-align: center;
	}

	.chunk-class {
		font-family: 'SF Mono', monospace;
		font-size: 0.7rem;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		margin-bottom: 0.3rem;
	}

	.chunk-items {
		font-family: 'SF Mono', monospace;
		font-size: 0.6rem;
		line-height: 1.5;
	}

	.dna-chunk {
		background: rgba(206, 66, 43, 0.15);
		border: 1px solid rgba(206, 66, 43, 0.3);
	}
	.dna-chunk .chunk-class { color: #CE422B; }
	.dna-chunk .chunk-items { color: #e08070; }

	.context-chunk {
		background: rgba(0, 212, 212, 0.1);
		border: 1px solid rgba(0, 212, 212, 0.25);
	}
	.context-chunk .chunk-class { color: #00D4D4; }
	.context-chunk .chunk-items { color: #66dddd; }

	.pointer-chunk {
		background: rgba(255, 107, 53, 0.1);
		border: 1px solid rgba(255, 107, 53, 0.25);
	}
	.pointer-chunk .chunk-class { color: #FF6B35; }
	.pointer-chunk .chunk-items { color: #ff9966; }

	.string-table-layer {
		background: #222;
		border: 1px solid #444;
	}

	.section-table-layer {
		background: #222;
		border: 1px solid #444;
	}

	/* Bottom Bar */
	.bottom-bar {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 1rem;
		padding-top: 1rem;
		border-top: 1px solid #333;
		margin-top: 0.5rem;
	}

	.bottom-item {
		display: flex;
		align-items: center;
		gap: 0.4rem;
	}

	.bottom-label {
		font-size: 0.75rem;
		color: #f5f5f5;
		font-family: 'SF Mono', monospace;
	}

	.bottom-arrow {
		color: #CE422B;
		font-size: 0.8rem;
	}

	.bottom-value {
		font-size: 0.75rem;
		color: #f5f5f5;
		font-family: 'SF Mono', monospace;
		font-weight: 600;
	}

	.bottom-divider {
		color: #444;
		font-size: 1rem;
	}

	@media (max-width: 768px) {
		.diagram-container {
			aspect-ratio: auto;
			padding: 1.5rem;
		}

		.compile-flow {
			flex-direction: column;
		}

		.source-side {
			flex: none;
			width: 100%;
		}

		.compile-arrow {
			flex: none;
			transform: rotate(90deg);
		}

		.binary-side {
			width: 100%;
		}

		.chunks-row {
			flex-direction: column;
		}
	}
</style>
