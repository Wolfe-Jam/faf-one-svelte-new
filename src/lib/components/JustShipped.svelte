<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	// Just Shipped - Latest releases showcase as dismissable popup that stays on page
	let showAsPopup = $state(false);
	let showOnPage = $state(false);

	onMount(() => {
		// Check if user has dismissed the popup before
		const dismissed = browser && sessionStorage.getItem('just-shipped-dismissed');

		if (!dismissed) {
			// Show popup after a brief delay
			setTimeout(() => {
				showAsPopup = true;
			}, 1000);
		} else {
			// Already dismissed, just show on page
			showOnPage = true;
		}
	});

	function closePopup() {
		showAsPopup = false;
		showOnPage = true; // Now show it on the page
		if (browser) {
			sessionStorage.setItem('just-shipped-dismissed', 'true');
		}
	}
</script>

{#if showAsPopup}
<div class="popup-overlay" onclick={closePopup}>
	<div class="popup-content" onclick={(e) => e.stopPropagation()}>
		<button class="close-button" onclick={closePopup} aria-label="Close">✕</button>

<section class="just-shipped popup-mode">
	<div class="container">
		<h2 class="section-title">🏁 Just Shipped</h2>

		<div class="total-stats stats-top">
			<p>
				<strong>13,000+ Total Downloads</strong> •
				<strong>208/208 Tests Passing</strong> •
				<strong>MIT License, FREE FOREVER</strong>
			</p>
		</div>

		<!-- New Blog Article Featured -->
		<div class="chrome-featured">
			<div class="chrome-header">
				<div class="chrome-icon">🏗️</div>
				<div class="chrome-title">
					<h3>The Missing Format</h3>
					<span class="chrome-badge">New Article</span>
				</div>
			</div>
			<p class="chrome-description">How .faf provides persistent context for Anthropic's agent architecture. Skills, Projects, MCP, and Subagents needed one thing: standardized persistent project context.</p>
			<a href="/blog/the-missing-format" class="chrome-install">
				🏗️ Read the Article
			</a>
		</div>

		<div class="releases-grid">
			<!-- CLI v3.0.4 -->
			<div class="release-card">
				<div class="release-header">
					<h3>🩵⚡️ faf-cli v3.0.4</h3>
					<span class="badge">Championship Edition</span>
				</div>
				<p class="release-description">
					Powered by Anthropic-Approved code featuring Turbo Cat 😽 Rapid Catalytic Converter
				</p>
				<ul class="release-features">
					<li>☑️ 6.5k downloads (npm)</li>
					<li>☑️ 173/173 tests passing</li>
					<li>☑️ 100% TypeScript strict mode</li>
					<li>☑️ &lt;50ms championship performance</li>
					<li>☑️ 41 commands including FAF Family</li>
				</ul>
				<div class="release-links">
					<a href="https://npmjs.com/package/faf-cli" target="_blank" rel="noopener" class="link-button">
						View on npm
					</a>
					<a href="https://github.com/Wolfe-Jam/faf-cli" target="_blank" rel="noopener" class="link-button secondary">
						GitHub
					</a>
				</div>
			</div>

			<!-- MCP v2.6.3 -->
			<div class="release-card">
				<div class="release-header">
					<h3>🧡⚡️ claude-faf-mcp v2.6.3</h3>
					<span class="badge anthropic">Anthropic-Approved</span>
				</div>
				<p class="release-description">
					1st Persistent Project AI Context MCP Server. Official Anthropic MCP Registry.
				</p>
				<ul class="release-features">
					<li>☑️ 6.5k downloads (npm)</li>
					<li>☑️ 35/35 tests passing</li>
					<li>☑️ PR #2759 MERGED</li>
					<li>☑️ 33+ MCP tools</li>
					<li>☑️ Format-Driven Architecture</li>
				</ul>
				<div class="release-links">
					<a href="https://npmjs.com/package/claude-faf-mcp" target="_blank" rel="noopener" class="link-button">
						View on npm
					</a>
					<a href="https://github.com/modelcontextprotocol/servers/pull/2759" target="_blank" rel="noopener" class="link-button secondary">
						PR #2759
					</a>
				</div>
			</div>

		</div>

		<div class="total-stats">
			<p>
				<strong>13,000+ Total Downloads</strong> •
				<strong>208/208 Tests Passing</strong> •
				<strong>MIT License, FREE Forever</strong>
			</p>
		</div>
	</div>
</section>

	</div>
</div>
{/if}

{#if showOnPage}
<section class="just-shipped page-mode">
	<div class="container">
		<h2 class="section-title">🏁 Just Shipped</h2>

		<!-- NEW: Blog Article One-Liner -->
		<div class="featured-release">
			<div class="featured-content">
				<span class="featured-emoji">🏗️</span>
				<div class="featured-text">
					<strong>The Missing Format</strong> — How .faf provides persistent context for Anthropic's agent architecture. The foundation is non-negotiable.
					<span class="badge-inline new-article">New Article</span>
				</div>
			</div>
			<div class="featured-actions">
				<a href="/blog/the-missing-format" class="btn-install">
					Read Article →
				</a>
			</div>
		</div>

		<div class="releases-grid">
			<!-- CLI v3.0.4 -->
			<div class="release-card">
				<div class="release-header">
					<h3>🩵⚡️ faf-cli v3.0.4</h3>
					<span class="badge">Championship Edition</span>
				</div>
				<p class="release-description">
					Powered by Anthropic-Approved code featuring Turbo Cat 😽 Rapid Catalytic Converter
				</p>
				<ul class="release-features">
					<li>☑️ 6.5k downloads (npm)</li>
					<li>☑️ 173/173 tests passing</li>
					<li>☑️ 100% TypeScript strict mode</li>
					<li>☑️ &lt;50ms championship performance</li>
					<li>☑️ 41 commands including FAF Family</li>
				</ul>
				<div class="release-links">
					<a href="https://npmjs.com/package/faf-cli" target="_blank" rel="noopener" class="link-button">
						View on npm
					</a>
					<a href="https://github.com/Wolfe-Jam/faf-cli" target="_blank" rel="noopener" class="link-button secondary">
						GitHub
					</a>
				</div>
			</div>

			<!-- MCP v2.6.3 -->
			<div class="release-card">
				<div class="release-header">
					<h3>🧡⚡️ claude-faf-mcp v2.6.3</h3>
					<span class="badge anthropic">Anthropic-Approved</span>
				</div>
				<p class="release-description">
					1st Persistent Project AI Context MCP Server. Official Anthropic MCP Registry.
				</p>
				<ul class="release-features">
					<li>☑️ 6.5k downloads (npm)</li>
					<li>☑️ 35/35 tests passing</li>
					<li>☑️ PR #2759 MERGED</li>
					<li>☑️ 33+ MCP tools</li>
					<li>☑️ Format-Driven Architecture</li>
				</ul>
				<div class="release-links">
					<a href="https://npmjs.com/package/claude-faf-mcp" target="_blank" rel="noopener" class="link-button">
						View on npm
					</a>
					<a href="https://github.com/modelcontextprotocol/servers/pull/2759" target="_blank" rel="noopener" class="link-button secondary">
						PR #2759
					</a>
				</div>
			</div>

		</div>

		<div class="total-stats">
			<p>
				<strong>13,000+ Total Downloads</strong> •
				<strong>208/208 Tests Passing</strong> •
				<strong>MIT License, FREE Forever</strong>
			</p>
		</div>
	</div>
</section>
{/if}

<style>
	.popup-overlay {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.8);
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 9999;
		padding: 2rem;
		animation: fadeIn 0.3s ease;
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	.popup-content {
		position: relative;
		max-width: 900px;
		max-height: 90vh;
		overflow-y: auto;
		background: var(--faf-cream);
		border-radius: 16px;
		box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
		animation: slideUp 0.3s ease;
	}

	@keyframes slideUp {
		from {
			transform: translateY(50px);
			opacity: 0;
		}
		to {
			transform: translateY(0);
			opacity: 1;
		}
	}

	.close-button {
		position: absolute;
		top: 1rem;
		right: 1rem;
		width: 40px;
		height: 40px;
		border: none;
		background: rgba(0, 0, 0, 0.1);
		color: var(--faf-black);
		font-size: 1.5rem;
		border-radius: 50%;
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: all 0.2s ease;
		z-index: 10;
	}

	.close-button:hover {
		background: var(--faf-orange);
		color: white;
		transform: scale(1.1);
	}

	.just-shipped {
		background: var(--faf-cream);
		padding: 4rem 2rem;
	}

	.container {
		max-width: 1200px;
		margin: 0 auto;
	}

	.section-title {
		font-size: 2.5rem;
		font-weight: 800;
		text-align: center;
		margin-bottom: 3rem;
		color: var(--faf-black);
	}

	.releases-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
		gap: 2rem;
		margin-bottom: 2rem;
	}

	.release-card {
		background: white;
		border-radius: 12px;
		padding: 2rem;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
		transition: transform 0.2s ease, box-shadow 0.2s ease;
	}

	.release-card:hover {
		transform: translateY(-4px);
		box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
	}

	.release-header {
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
		margin-bottom: 1rem;
		gap: 1rem;
		flex-wrap: wrap;
	}

	.release-header h3 {
		font-size: 1.5rem;
		font-weight: 700;
		color: var(--faf-black);
		margin: 0;
	}

	.badge {
		background: linear-gradient(135deg, var(--faf-orange) 0%, #FF914D 100%);
		color: white;
		padding: 0.25rem 0.75rem;
		border-radius: 999px;
		font-size: 0.75rem;
		font-weight: 700;
		white-space: nowrap;
	}

	.badge.anthropic {
		background: linear-gradient(135deg, var(--faf-cyan-dark) 0%, #00E5E5 100%);
	}

	.badge.google {
		background: linear-gradient(135deg, #4285F4 0%, #34A853 50%, #FBBC05 75%, #EA4335 100%);
	}

	/* Chrome Extension Featured Card (Steel Gray + Cyan) */
	.chrome-featured {
		background: linear-gradient(135deg, #2a2d35 0%, #1a1d25 100%);
		border: 2px solid #00D4D4;
		border-radius: 12px;
		padding: 2rem;
		margin-bottom: 2rem;
		box-shadow: 0 10px 40px rgba(0, 212, 212, 0.3), 0 0 60px rgba(0, 212, 212, 0.1);
		transition: all 0.3s ease;
	}

	.chrome-featured:hover {
		transform: translateY(-4px);
		box-shadow: 0 15px 50px rgba(0, 212, 212, 0.4), 0 0 80px rgba(0, 212, 212, 0.15);
	}

	.chrome-header {
		display: flex;
		align-items: center;
		gap: 1rem;
		margin-bottom: 1rem;
	}

	.chrome-icon {
		font-size: 2.5rem;
		line-height: 1;
		animation: pulse-glow 2s ease infinite;
	}

	@keyframes pulse-glow {
		0%, 100% {
			text-shadow: 0 0 10px rgba(0, 212, 212, 0.5);
		}
		50% {
			text-shadow: 0 0 20px rgba(0, 212, 212, 0.8);
		}
	}

	.chrome-title {
		flex: 1;
		display: flex;
		align-items: center;
		gap: 1rem;
		flex-wrap: wrap;
	}

	.chrome-title h3 {
		margin: 0;
		font-size: 1.5rem;
		font-weight: 700;
		color: #ffffff;
	}

	.chrome-badge {
		background: linear-gradient(135deg, #4285F4 0%, #34A853 50%, #FBBC05 75%, #EA4335 100%);
		color: white;
		padding: 0.25rem 0.75rem;
		border-radius: 999px;
		font-size: 0.75rem;
		font-weight: 700;
		white-space: nowrap;
	}

	.chrome-description {
		color: #00D4D4;
		margin: 0 0 1.5rem 0;
		font-size: 1.05rem;
		font-weight: 600;
		line-height: 1.5;
	}

	.chrome-install {
		display: inline-block;
		padding: 1rem 2rem;
		background: linear-gradient(135deg, #00D4D4 0%, #00a8a8 100%);
		color: #1a1d25;
		text-decoration: none;
		border-radius: 8px;
		font-size: 1.125rem;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		transition: all 0.3s ease;
		position: relative;
		overflow: hidden;
	}

	.chrome-install::before {
		content: '';
		position: absolute;
		top: 50%;
		left: 50%;
		width: 0;
		height: 0;
		border-radius: 50%;
		background: rgba(255, 255, 255, 0.3);
		transform: translate(-50%, -50%);
		transition: width 0.6s, height 0.6s;
	}

	.chrome-install:hover::before {
		width: 300px;
		height: 300px;
	}

	.chrome-install:hover {
		transform: translateY(-2px);
		box-shadow: 0 5px 20px rgba(0, 212, 212, 0.5), 0 0 40px rgba(0, 212, 212, 0.3);
	}

	/* Featured Release One-Liner */
	.featured-release {
		background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
		border-radius: 12px;
		padding: 1.5rem 2rem;
		margin-bottom: 2rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 2rem;
		box-shadow: 0 4px 20px rgba(44, 62, 80, 0.3);
	}

	.featured-content {
		display: flex;
		align-items: center;
		gap: 1rem;
		flex: 1;
	}

	.featured-emoji {
		font-size: 2rem;
		line-height: 1;
	}

	.featured-text {
		color: white;
		font-size: 1.1rem;
		line-height: 1.4;
	}

	.featured-text strong {
		display: block;
		margin-bottom: 0.25rem;
	}

	.badge-inline {
		display: inline-block;
		padding: 0.25rem 0.75rem;
		border-radius: 20px;
		font-size: 0.75rem;
		font-weight: 700;
		margin-left: 0.5rem;
		vertical-align: middle;
	}

	.badge-inline.google {
		background: white;
		background: linear-gradient(135deg, #4285F4 0%, #34A853 50%, #FBBC05 75%, #EA4335 100%);
		color: white;
	}

	.badge-inline.new-article {
		background: #00bf63;
		color: white;
	}

	.featured-actions {
		display: flex;
		gap: 1rem;
		align-items: center;
	}

	.btn-install {
		background: white;
		color: #FF6B35;
		padding: 0.75rem 1.5rem;
		border-radius: 8px;
		text-decoration: none;
		font-weight: 700;
		white-space: nowrap;
		transition: all 0.2s;
	}

	.btn-install:hover {
		transform: translateY(-2px);
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
	}

	.btn-learn {
		color: white;
		text-decoration: none;
		font-weight: 600;
		white-space: nowrap;
		border-bottom: 2px solid transparent;
		transition: border-color 0.2s;
	}

	.btn-learn:hover {
		border-bottom-color: white;
	}

	.release-description {
		color: #555;
		margin-bottom: 1.5rem;
		line-height: 1.6;
	}

	.release-features {
		list-style: none;
		padding: 0;
		margin: 0 0 1.5rem 0;
	}

	.release-features li {
		padding: 0.5rem 0;
		color: var(--faf-black);
		font-weight: 500;
		border-bottom: 1px solid rgba(0, 0, 0, 0.05);
	}

	.release-features li:last-child {
		border-bottom: none;
	}

	.release-links {
		display: flex;
		gap: 1rem;
		flex-wrap: wrap;
	}

	.link-button {
		display: inline-block;
		padding: 0.75rem 1.5rem;
		background: linear-gradient(135deg, var(--faf-orange) 0%, #FF914D 100%);
		color: white;
		text-decoration: none;
		border-radius: 8px;
		font-weight: 600;
		transition: all 0.2s ease;
		text-align: center;
	}

	.link-button:hover {
		transform: scale(1.05);
		box-shadow: 0 4px 12px rgba(255, 107, 53, 0.4);
	}

	.link-button.secondary {
		background: linear-gradient(135deg, #4a4a4a 0%, #2c3e50 100%);
	}

	.link-button.secondary:hover {
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
	}

	.total-stats {
		text-align: center;
		padding: 2rem;
		background: rgba(0, 229, 229, 0.1);
		border-radius: 12px;
		margin-top: 2rem;
	}

	.stats-top {
		margin-top: 0;
		margin-bottom: 2rem;
		background: linear-gradient(135deg, var(--faf-orange) 0%, #FF914D 100%);
	}

	.stats-top p {
		color: white;
		font-size: 1.25rem;
		font-weight: 700;
	}

	.stats-top strong {
		color: white;
	}

	.total-stats p {
		font-size: 1.125rem;
		color: var(--faf-black);
		margin: 0;
	}

	.total-stats strong {
		font-weight: 700;
		color: var(--faf-black);
	}

	@media (max-width: 768px) {
		.just-shipped {
			padding: 3rem 1rem;
		}

		.section-title {
			font-size: 2rem;
		}

		.releases-grid {
			grid-template-columns: 1fr;
		}

		.release-card {
			padding: 1.5rem;
		}

		.release-header h3 {
			font-size: 1.25rem;
		}

		.total-stats p {
			font-size: 1rem;
		}

		.featured-release {
			flex-direction: column;
			align-items: flex-start;
			padding: 1.25rem;
		}

		.featured-content {
			flex-direction: column;
			align-items: flex-start;
			gap: 0.75rem;
		}

		.featured-emoji {
			font-size: 1.5rem;
		}

		.featured-text {
			font-size: 1rem;
		}

		.featured-actions {
			width: 100%;
			flex-direction: column;
		}

		.btn-install,
		.btn-learn {
			width: 100%;
			text-align: center;
		}

		.btn-install {
			padding: 0.75rem 1rem;
		}

		.chrome-featured {
			padding: 1.5rem;
		}

		.chrome-header {
			flex-direction: column;
			align-items: flex-start;
			gap: 0.75rem;
		}

		.chrome-icon {
			font-size: 2rem;
		}

		.chrome-title h3 {
			font-size: 1.25rem;
		}

		.chrome-description {
			font-size: 1rem;
		}

		.chrome-install {
			width: 100%;
			text-align: center;
			padding: 0.875rem 1.5rem;
			font-size: 1rem;
		}
	}
</style>
