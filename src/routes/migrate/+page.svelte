<script lang="ts">
	let copiedId = $state('');
	async function copyText(text: string, id: string) {
		await navigator.clipboard.writeText(text);
		copiedId = id;
		setTimeout(() => copiedId = '', 2000);
	}
</script>

<svelte:head>
	<title>Migrate to Claude — Keep Your Context | FAF</title>
	<meta name="description" content="Switch AI providers without losing your project context. ChatGPT → Claude in 3 steps. The AI changes. The context stays." />
	<meta property="og:title" content="Migrate to Claude — Keep Your Context" />
	<meta property="og:description" content="ChatGPT → Claude in 3 steps. Your project DNA travels with you." />
	<meta property="og:type" content="website" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="migrate-page">
	<div class="back-nav">
		<a href="/" class="back-link">← Back to Home</a>
	</div>

	<main class="content">
		<!-- Hero -->
		<section class="hero">
			<div class="badge">New</div>
			<h1 class="title">Migrate</h1>
			<p class="subtitle">The AI changes. The context stays.</p>
			<p class="subtitle-detail">
				Switch AI providers without losing your project context. Your <code>.faf</code> file is the constant — the AI is the variable.
			</p>
		</section>

		<!-- The Flow -->
		<section class="flow-section">
			<h2 class="section-title">ChatGPT → Claude in 3 steps</h2>

			<div class="steps">
				<div class="step">
					<div class="step-number">1</div>
					<div class="step-content">
						<h4>Export your ChatGPT memories</h4>
						<p>Settings → Personalization → Memory → Manage → Export. You'll get a file with everything ChatGPT knows about you and your projects.</p>
					</div>
				</div>
				<div class="step">
					<div class="step-number">2</div>
					<div class="step-content">
						<h4>Import into Claude</h4>
						<p>Claude now supports memory imports — even on the free plan. Your imported memories become Claude's MEMORY.md. That's your RAM.</p>
					</div>
				</div>
				<div class="step">
					<div class="step-number">3</div>
					<div class="step-content">
						<h4>Sync</h4>
						<div class="copy-box" onclick={() => copyText('faf tri-sync', 'sync')}>
							<code class="copy-code">faf tri-sync</code>
							<button class="copy-btn">{copiedId === 'sync' ? 'Copied!' : 'Copy'}</button>
						</div>
						<p>Your .faf (ROM) now syncs with Claude's memory (RAM). Project context, decisions, conventions — all persistent across every session.</p>
					</div>
				</div>
			</div>
		</section>

		<!-- Why it works -->
		<section class="why-section">
			<h2 class="section-title">Why this works</h2>

			<div class="diagram">
				<div class="diagram-row">
					<div class="diagram-box old">
						<div class="diagram-label">Before</div>
						<div class="diagram-content">ChatGPT memories</div>
						<div class="diagram-note">Locked in. Can't leave.</div>
					</div>
					<div class="diagram-arrow">→</div>
					<div class="diagram-box new">
						<div class="diagram-label">After</div>
						<div class="diagram-content">.faf + Claude MEMORY.md</div>
						<div class="diagram-note">Portable. Yours forever.</div>
					</div>
				</div>
			</div>

			<div class="key-points">
				<div class="point">
					<div class="point-icon">📁</div>
					<div class="point-text">
						<strong>.faf is yours</strong> — a file in your repo. No vendor lock-in. Move between Claude, Cursor, Gemini, any AI.
					</div>
				</div>
				<div class="point">
					<div class="point-icon">🔄</div>
					<div class="point-text">
						<strong>tri-sync keeps it alive</strong> — .faf ↔ CLAUDE.md ↔ MEMORY.md. Change one, all update. Persistent across every session.
					</div>
				</div>
				<div class="point">
					<div class="point-icon">🌐</div>
					<div class="point-text">
						<strong>IANA-registered format</strong> — <code>application/vnd.faf+yaml</code>. The only standardized AI context format. Not a hack. A standard.
					</div>
				</div>
			</div>
		</section>

		<!-- Also works -->
		<section class="also-section">
			<h2 class="section-title">Also works with</h2>

			<div class="providers">
				<div class="provider">Cursor → Claude</div>
				<div class="provider">Gemini → Claude</div>
				<div class="provider">Claude → Cursor</div>
				<div class="provider">Any AI → Any AI</div>
			</div>

			<p class="also-note">
				.faf is the universal format. bi-sync keeps <code>.faf</code> ↔ <code>CLAUDE.md</code> in sync (free forever).
				tri-sync adds AGENTS.md, .cursorrules, GEMINI.md, and session memory.
			</p>
		</section>

		<!-- Try it -->
		<section class="try-section">
			<h2 class="section-title">Try it</h2>

			<div class="copy-box" onclick={() => copyText('npx faf-cli@latest score', 'score')}>
				<code class="copy-code">npx faf-cli@latest score</code>
				<button class="copy-btn">{copiedId === 'score' ? 'Copied!' : 'Copy'}</button>
			</div>

			<p class="try-note">Paste this anywhere — your terminal or your AI. Both understand it.</p>

			<div class="cta-grid">
				<a href="/pro" class="cta-box">
					<h4>FAF Pro</h4>
					<p>tri-sync from a dime a day</p>
				</a>
				<a href="https://github.com/Wolfe-Jam/faf-cli" class="cta-box" target="_blank" rel="noopener">
					<h4>GitHub</h4>
					<p>Star the repo</p>
				</a>
			</div>
		</section>
	</main>
</div>

<style>
	:global(body) {
		background: #0a0a0a !important;
	}

	.migrate-page {
		min-height: 100vh;
		background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
		color: #f5f5dc;
	}

	.back-nav {
		padding: 1rem 2rem;
		border-bottom: 1px solid #333;
	}

	.back-link {
		color: #4682B4;
		text-decoration: none;
		font-weight: 500;
		font-size: 0.95rem;
		transition: opacity 0.2s;
	}

	.back-link:hover {
		opacity: 0.8;
	}

	.content {
		max-width: 800px;
		margin: 0 auto;
		padding: 1.5rem 2rem 4rem;
	}

	/* Hero */
	.hero {
		text-align: center;
		margin-bottom: 3rem;
		padding-top: 1rem;
	}

	.badge {
		display: inline-block;
		background: rgba(39, 201, 63, 0.15);
		border: 1px solid rgba(39, 201, 63, 0.4);
		color: #27c93f;
		padding: 0.35rem 1rem;
		border-radius: 20px;
		font-size: 0.85rem;
		font-weight: 600;
		margin-bottom: 1.25rem;
		letter-spacing: 0.05em;
	}

	.title {
		font-size: clamp(3rem, 8vw, 5rem);
		font-weight: 900;
		color: #f5f5dc;
		margin: 0 0 0.75rem 0;
		letter-spacing: -0.03em;
	}

	.subtitle {
		font-size: 1.5rem;
		color: #00d4d4;
		font-weight: 600;
		margin: 0 0 0.5rem 0;
	}

	.subtitle-detail {
		font-size: 1.1rem;
		color: #aaa;
		margin: 0;
		line-height: 1.6;
	}

	.subtitle-detail code {
		background: #1a1a1a;
		color: #00d4d4;
		padding: 0.15rem 0.5rem;
		border-radius: 4px;
		font-size: 0.95rem;
	}

	/* Section titles */
	.section-title {
		font-size: 2rem;
		font-weight: 700;
		color: #f5f5dc;
		text-align: center;
		margin-bottom: 2rem;
	}

	/* Steps */
	.flow-section {
		margin-bottom: 3rem;
	}

	.steps {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}

	.step {
		display: flex;
		align-items: flex-start;
		gap: 1.25rem;
		background: #1a1a1a;
		border: 1px solid #333;
		border-radius: 12px;
		padding: 1.5rem;
	}

	.step-number {
		width: 40px;
		height: 40px;
		background: rgba(70, 130, 180, 0.15);
		border: 2px solid #4682B4;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		font-weight: 700;
		color: #4682B4;
		font-size: 1.1rem;
		flex-shrink: 0;
	}

	.step-content {
		flex: 1;
	}

	.step-content h4 {
		color: #f5f5dc;
		margin: 0 0 0.5rem 0;
		font-size: 1.1rem;
	}

	.step-content p {
		color: #aaa;
		margin: 0.5rem 0 0 0;
		font-size: 0.95rem;
		line-height: 1.6;
	}

	/* Diagram */
	.why-section {
		margin-bottom: 3rem;
	}

	.diagram {
		margin-bottom: 2rem;
	}

	.diagram-row {
		display: grid;
		grid-template-columns: 1fr auto 1fr;
		gap: 1.5rem;
		align-items: center;
	}

	.diagram-box {
		background: #1a1a1a;
		border: 2px solid #333;
		border-radius: 12px;
		padding: 1.5rem;
		text-align: center;
	}

	.diagram-box.old {
		border-color: #555;
	}

	.diagram-box.new {
		border-color: #4682B4;
		background: rgba(70, 130, 180, 0.05);
	}

	.diagram-label {
		font-size: 0.8rem;
		color: #666;
		text-transform: uppercase;
		letter-spacing: 0.08em;
		margin-bottom: 0.5rem;
	}

	.diagram-content {
		font-weight: 700;
		color: #f5f5dc;
		font-size: 1.05rem;
		margin-bottom: 0.5rem;
	}

	.diagram-box.new .diagram-content {
		color: #4682B4;
	}

	.diagram-note {
		font-size: 0.85rem;
		color: #888;
		font-style: italic;
	}

	.diagram-arrow {
		font-size: 2rem;
		color: #00d4d4;
		font-weight: 700;
	}

	/* Key points */
	.key-points {
		display: flex;
		flex-direction: column;
		gap: 1.25rem;
	}

	.point {
		display: flex;
		gap: 1rem;
		align-items: flex-start;
	}

	.point-icon {
		font-size: 1.5rem;
		flex-shrink: 0;
		width: 32px;
		text-align: center;
	}

	.point-text {
		color: #aaa;
		font-size: 0.95rem;
		line-height: 1.6;
	}

	.point-text strong {
		color: #f5f5dc;
	}

	.point-text code {
		background: #1a1a1a;
		color: #00d4d4;
		padding: 0.1rem 0.4rem;
		border-radius: 4px;
		font-size: 0.85rem;
	}

	/* Also works */
	.also-section {
		margin-bottom: 3rem;
	}

	.providers {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 1rem;
		margin-bottom: 1.5rem;
	}

	.provider {
		background: #1a1a1a;
		border: 1px solid #333;
		border-radius: 8px;
		padding: 1rem;
		text-align: center;
		color: #aaa;
		font-weight: 600;
		font-size: 0.95rem;
	}

	.also-note {
		text-align: center;
		color: #888;
		font-size: 0.95rem;
		line-height: 1.6;
	}

	.also-note code {
		background: #1a1a1a;
		color: #00d4d4;
		padding: 0.1rem 0.4rem;
		border-radius: 4px;
		font-size: 0.85rem;
	}

	/* Try it */
	.try-section {
		margin-bottom: 2rem;
	}

	.try-note {
		text-align: center;
		color: #888;
		font-size: 0.95rem;
		font-style: italic;
		margin-bottom: 2rem;
	}

	.cta-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1.5rem;
	}

	.cta-box {
		background: #1a1a1a;
		border: 2px solid #4682B4;
		border-radius: 12px;
		padding: 1.5rem;
		text-align: center;
		text-decoration: none;
		transition: all 0.3s;
	}

	.cta-box:hover {
		border-color: #5A9AC8;
		transform: translateY(-2px);
		box-shadow: 0 4px 16px rgba(70, 130, 180, 0.2);
	}

	.cta-box h4 {
		color: #4682B4;
		margin: 0 0 0.5rem 0;
		font-size: 1.1rem;
	}

	.cta-box p {
		color: #888;
		margin: 0;
		font-size: 0.9rem;
	}

	/* Copy boxes */
	.copy-box {
		display: flex;
		align-items: center;
		gap: 1rem;
		padding: 1rem 1.5rem;
		background: #0a0a0a;
		border: 1px solid #333;
		border-radius: 8px;
		margin: 1rem 0;
		cursor: pointer;
		transition: border-color 0.2s;
	}
	.copy-box:hover { border-color: #555; }
	.copy-code {
		flex: 1;
		font-family: 'Monaco', 'Courier New', monospace;
		color: #00d4d4;
		background: transparent;
		padding: 0;
		font-size: 0.95rem;
		font-weight: 600;
		border-radius: 0;
	}
	.copy-btn {
		padding: 0.5rem 1rem;
		background: rgba(70, 130, 180, 0.2);
		border: 1px solid rgba(70, 130, 180, 0.4);
		color: #4682B4;
		border-radius: 6px;
		font-weight: 600;
		font-size: 0.8rem;
		cursor: pointer;
		transition: all 0.2s;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		white-space: nowrap;
	}
	.copy-btn:hover { background: rgba(70, 130, 180, 0.3); border-color: #4682B4; }
	.copy-btn:active { transform: scale(0.95); }

	/* Mobile */
	@media (max-width: 768px) {
		.content {
			padding: 1rem 1.25rem 3rem;
		}

		.title {
			font-size: 3rem;
		}

		.subtitle {
			font-size: 1.25rem;
		}

		.diagram-row {
			grid-template-columns: 1fr;
			gap: 1rem;
		}

		.diagram-arrow {
			transform: rotate(90deg);
			text-align: center;
		}

		.providers {
			grid-template-columns: 1fr;
		}

		.cta-grid {
			grid-template-columns: 1fr;
		}

		.step {
			flex-direction: column;
			align-items: center;
			text-align: center;
		}
	}
</style>
