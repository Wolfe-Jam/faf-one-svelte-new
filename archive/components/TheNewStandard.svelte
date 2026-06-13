<script lang="ts">
	// The New Standard - Positioning as format authority
</script>

<section class="new-standard">
	<div class="container">
		<div class="standard-content">
			<div class="standard-header">
				<h2>The New Standard</h2>
				<p class="subtitle">Format-Driven Architecture for the AI Era</p>
			</div>

			<div class="positioning-grid">
				<!-- Persistent Context -->
				<div class="positioning-card">
					<div class="icon">🏆</div>
					<h3>Persistent Project Context</h3>
					<p>
						The first and only AI Context MCP introducing Persistent Project Context.
						Your project DNA survives across sessions, tools, and AIs.
					</p>
				</div>

				<!-- Format-First -->
				<div class="positioning-card">
					<div class="icon">⚡️</div>
					<h3>Format-Driven Architecture</h3>
					<p>
						Not tool-locked. Not platform-specific. The .faf file works anywhere —
						Claude, ChatGPT, Gemini, Cursor, any AI assistant.
					</p>
				</div>

				<!-- Universal Standard -->
				<div class="positioning-card">
					<div class="icon">🌍</div>
					<h3>Universal Standard</h3>
					<p>
						Works with any MCP client, CLI, workflow automation (n8n, Make),
						or AI assistant. The only true format-first architecture.
					</p>
				</div>

				<!-- Stack-Agnostic -->
				<div class="positioning-card">
					<div class="icon">🔧</div>
					<h3>Stack-Agnostic</h3>
					<p>
						Any language, framework, or setup. React, Next.js, Svelte, TypeScript,
						Vite, Python, Go — 153+ formats validated.
					</p>
				</div>
			</div>

			<div class="standard-statement">
				<blockquote>
					<p>
						<strong>.faf is THE official format authority for AI context.</strong>
					</p>
					<p>
						We created .faf — the universal format that brings Project DNA ✨ to ANY AI
						in &lt;50ms. From Claude to ChatGPT to Gemini, from CLI to MCP to Chrome Extension,
						we make AI understand your project instantly.
					</p>
					<cite>— The Format Authority</cite>
				</blockquote>
			</div>

			<div class="limits-statement">
				<p class="no-limits">
					No limits. No restrictions. No boundaries.
					<br />
					<strong>The only true format-first architecture for the AI era.</strong>
				</p>
			</div>
		</div>
	</div>
</section>

<style>
	.new-standard {
		background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
		color: white;
		padding: 5rem 2rem;
		position: relative;
		overflow: hidden;
	}

	.new-standard::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		height: 2px;
		background: linear-gradient(90deg,
			var(--faf-orange) 0%,
			var(--faf-cyan-dark) 50%,
			var(--faf-orange) 100%
		);
	}

	.container {
		max-width: 1200px;
		margin: 0 auto;
	}

	.standard-header {
		text-align: center;
		margin-bottom: 4rem;
	}

	.standard-header h2 {
		font-size: 3rem;
		font-weight: 800;
		margin-bottom: 1rem;
		background: linear-gradient(135deg, var(--faf-orange) 0%, var(--faf-cyan-dark) 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
	}

	.subtitle {
		font-size: 1.5rem;
		color: rgba(255, 255, 255, 0.8);
		font-weight: 500;
	}

	.positioning-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		gap: 2rem;
		margin-bottom: 4rem;
	}

	.positioning-card {
		background: rgba(255, 255, 255, 0.05);
		border: 1px solid rgba(255, 255, 255, 0.1);
		border-radius: 12px;
		padding: 2rem;
		transition: all 0.3s ease;
	}

	.positioning-card:hover {
		background: rgba(255, 255, 255, 0.08);
		border-color: var(--faf-cyan-dark);
		transform: translateY(-4px);
	}

	.icon {
		font-size: 3rem;
		margin-bottom: 1rem;
	}

	.positioning-card h3 {
		font-size: 1.5rem;
		font-weight: 700;
		margin-bottom: 1rem;
		color: white;
	}

	.positioning-card p {
		color: rgba(255, 255, 255, 0.8);
		line-height: 1.6;
	}

	.standard-statement {
		background: rgba(0, 229, 229, 0.1);
		border-left: 4px solid var(--faf-cyan-dark);
		border-radius: 8px;
		padding: 2rem;
		margin-bottom: 3rem;
	}

	.standard-statement blockquote {
		margin: 0;
	}

	.standard-statement p {
		font-size: 1.125rem;
		line-height: 1.8;
		color: rgba(255, 255, 255, 0.9);
		margin-bottom: 1rem;
	}

	.standard-statement strong {
		color: white;
		font-weight: 700;
	}

	.standard-statement cite {
		display: block;
		margin-top: 1.5rem;
		font-style: italic;
		color: var(--faf-cyan-dark);
		font-weight: 600;
	}

	.limits-statement {
		text-align: center;
		padding: 2rem;
		background: rgba(255, 107, 53, 0.1);
		border-radius: 12px;
	}

	.no-limits {
		font-size: 1.5rem;
		line-height: 1.6;
		color: rgba(255, 255, 255, 0.9);
		margin: 0;
	}

	.no-limits strong {
		color: var(--faf-orange);
		font-weight: 800;
	}

	@media (max-width: 768px) {
		.new-standard {
			padding: 3rem 1rem;
		}

		.standard-header h2 {
			font-size: 2rem;
		}

		.subtitle {
			font-size: 1.125rem;
		}

		.positioning-grid {
			grid-template-columns: 1fr;
		}

		.positioning-card {
			padding: 1.5rem;
		}

		.standard-statement {
			padding: 1.5rem;
		}

		.standard-statement p {
			font-size: 1rem;
		}

		.no-limits {
			font-size: 1.125rem;
		}
	}
</style>
