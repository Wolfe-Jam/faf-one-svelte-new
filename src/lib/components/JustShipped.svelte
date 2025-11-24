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
				<strong>14,200+ Total Downloads</strong> •
				<strong>208/208 Tests Passing</strong> •
				<strong>MIT License, FREE FOREVER</strong>
			</p>
		</div>

		<!-- Rust SDK Announcement - Two Angles -->
		<div class="chrome-featured rust-featured">
			<div class="chrome-header">
				<div class="chrome-icon">🦀</div>
				<div class="chrome-title">
					<h3>Rust SDK Ships to crates.io</h3>
					<span class="chrome-badge rust-badge">Just Shipped</span>
				</div>
			</div>
			<p class="chrome-description">First SDK for AI context in Rust. 650 lines. Created 'ai-context' keyword on crates.io. Built for xAI/Grok infrastructure.</p>
			<a href="https://crates.io/crates/faf-rust-sdk" target="_blank" rel="noopener" class="chrome-install rust-cta">
				Get Started →
			</a>
		</div>

		<div class="chrome-featured grok-featured">
			<div class="chrome-header">
				<div class="chrome-icon">🍊</div>
				<div class="chrome-title">
					<h3>grok-faf-mcp Ships to npm</h3>
					<span class="chrome-badge grok-badge">Grok Native</span>
				</div>
			</div>
			<p class="chrome-description">First MCP server for Grok. URL-based access. Zero installation. Dedicated to @elonmusk and the #1 model on Earth.</p>
			<a href="https://npmjs.com/package/grok-faf-mcp" target="_blank" rel="noopener" class="chrome-install grok-cta">
				Get Started →
			</a>
		</div>

		<div class="chrome-featured wjttc-featured">
			<div class="chrome-header">
				<div class="chrome-icon">🏎️</div>
				<div class="chrome-title">
					<h3>64 Tests. Zero Failures.</h3>
					<span class="chrome-badge wjttc-badge">WJTTC Certified</span>
				</div>
			</div>
			<p class="chrome-description">Championship-grade testing. Bi-sync corruption recovery. 9 self-healing tests. 100/100 rapid modification resilience.</p>
			<a href="https://github.com/Wolfe-Jam/faf-rust-sdk/blob/main/WJTTC-TESTING-CENTER.md" target="_blank" rel="noopener" class="chrome-install wjttc-cta">
				See the Proof →
			</a>
		</div>

		<div class="releases-grid">
			<!-- CLI v3.0.4 -->
			<div class="release-card">
				<div class="release-header">
					<h3>🩵⚡️ faf-cli v3.1.6</h3>
					<span class="badge">Championship Edition</span>
				</div>
				<p class="release-description">
					Powered by Anthropic-Approved code featuring Turbo Cat 😽 Rapid Catalytic Converter
				</p>
				<ul class="release-features">
					<li>☑️ 6.7k downloads (npm)</li>
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

			<!-- MCP v3.3.1 -->
			<div class="release-card">
				<div class="release-header">
					<h3>🧡⚡️ claude-faf-mcp v3.3.2</h3>
					<span class="badge anthropic">Anthropic-Approved</span>
				</div>
				<p class="release-description">
					1st Persistent Project AI Context MCP Server. 100% Standalone, Zero CLI Dependencies.
				</p>
				<ul class="release-features">
					<li>☑️ 6.8k downloads (npm)</li>
					<li>☑️ 50/50 tests passing</li>
					<li>☑️ PR #2759 MERGED</li>
					<li>☑️ 52 MCP tools</li>
					<li>☑️ TypeScript Built-in Types</li>
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
				<strong>14,200+ Total Downloads</strong> •
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

		<!-- Rust SDK One-Liner -->
		<div class="featured-release rust-release">
			<div class="featured-content">
				<span class="featured-emoji">🦀</span>
				<div class="featured-text">
					<strong>Rust SDK Ships to crates.io</strong> — First AI context SDK in Rust. 650 lines. 64 tests. Built for xAI/Grok.
					<span class="badge-inline rust-badge">Just Shipped</span>
				</div>
			</div>
			<div class="featured-actions">
				<a href="https://crates.io/crates/faf-rust-sdk" target="_blank" rel="noopener" class="btn-install rust-btn">
					Rust SDK →
				</a>
				<a href="https://github.com/Wolfe-Jam/faf-rust-sdk/blob/main/WJTTC-TESTING-CENTER.md" target="_blank" rel="noopener" class="btn-install wjttc-btn">
					Testing →
				</a>
			</div>
		</div>

		<div class="releases-grid">
			<!-- CLI v3.0.4 -->
			<div class="release-card">
				<div class="release-header">
					<h3>🩵⚡️ faf-cli v3.1.6</h3>
					<span class="badge">Championship Edition</span>
				</div>
				<p class="release-description">
					Powered by Anthropic-Approved code featuring Turbo Cat 😽 Rapid Catalytic Converter
				</p>
				<ul class="release-features">
					<li>☑️ 6.7k downloads (npm)</li>
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

			<!-- MCP v3.3.1 -->
			<div class="release-card">
				<div class="release-header">
					<h3>🧡⚡️ claude-faf-mcp v3.3.2</h3>
					<span class="badge anthropic">Anthropic-Approved</span>
				</div>
				<p class="release-description">
					1st Persistent Project AI Context MCP Server. 100% Standalone, Zero CLI Dependencies.
				</p>
				<ul class="release-features">
					<li>☑️ 6.8k downloads (npm)</li>
					<li>☑️ 50/50 tests passing</li>
					<li>☑️ PR #2759 MERGED</li>
					<li>☑️ 52 MCP tools</li>
					<li>☑️ TypeScript Built-in Types</li>
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
				<strong>14,200+ Total Downloads</strong> •
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

	/* Article-specific styling - light, clean aesthetic */
	.article-featured {
		background: linear-gradient(135deg, #F9F9F9 0%, #F0F0F0 100%);
		border-left: 4px solid #00bf63;
	}

	.article-featured .chrome-title h3 {
		color: #000;
	}

	.article-featured .chrome-description {
		color: #333;
	}

	.article-badge {
		background: #00bf63 !important;
		color: white;
	}

	.article-cta {
		background: linear-gradient(135deg, #00bf63 0%, #00a854 100%);
		color: white;
	}

	.article-cta:hover {
		box-shadow: 0 5px 20px rgba(0, 191, 99, 0.4);
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

	.badge-inline.xai-badge,
	.xai-badge {
		background: linear-gradient(135deg, #FF6B35 0%, #FF8C00 100%) !important;
		color: white;
	}

	/* xAI Featured Card - Orange theme */
	.xai-featured {
		background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%);
		border: 2px solid #FF6B35;
		box-shadow: 0 10px 40px rgba(255, 107, 53, 0.3), 0 0 60px rgba(255, 107, 53, 0.1);
	}

	.xai-featured:hover {
		box-shadow: 0 15px 50px rgba(255, 107, 53, 0.4), 0 0 80px rgba(255, 107, 53, 0.15);
	}

	.xai-featured .chrome-description {
		color: #FF8C00;
	}

	.xai-cta {
		background: linear-gradient(135deg, #FF6B35 0%, #FF8C00 100%);
		color: white;
	}

	.xai-cta:hover {
		box-shadow: 0 5px 20px rgba(255, 107, 53, 0.5), 0 0 40px rgba(255, 107, 53, 0.3);
	}

	.xai-release {
		background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%);
		border: 2px solid #FF6B35;
	}

	/* Rust Featured Card - Rust orange theme */
	.rust-featured {
		background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%);
		border: 2px solid #CE422B;
		box-shadow: 0 10px 40px rgba(206, 66, 43, 0.3), 0 0 60px rgba(206, 66, 43, 0.1);
	}

	.rust-featured:hover {
		box-shadow: 0 15px 50px rgba(206, 66, 43, 0.4), 0 0 80px rgba(206, 66, 43, 0.15);
	}

	.rust-featured .chrome-description {
		color: #F46623;
	}

	.rust-cta {
		background: linear-gradient(135deg, #CE422B 0%, #F46623 100%);
		color: white;
	}

	.rust-cta:hover {
		box-shadow: 0 5px 20px rgba(206, 66, 43, 0.5), 0 0 40px rgba(206, 66, 43, 0.3);
	}

	.rust-release {
		background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%);
		border: 2px solid #CE422B;
	}

	.rust-badge {
		background: linear-gradient(135deg, #CE422B 0%, #F46623 100%) !important;
		color: white;
	}

	.rust-btn {
		background: linear-gradient(135deg, #CE422B 0%, #F46623 100%) !important;
		color: white !important;
	}

	/* WJTTC Featured Card - F1 racing theme */
	.wjttc-featured {
		background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%);
		border: 2px solid #E10600;
		box-shadow: 0 10px 40px rgba(225, 6, 0, 0.3), 0 0 60px rgba(225, 6, 0, 0.1);
	}

	.wjttc-featured:hover {
		box-shadow: 0 15px 50px rgba(225, 6, 0, 0.4), 0 0 80px rgba(225, 6, 0, 0.15);
	}

	.wjttc-featured .chrome-description {
		color: #FF1E00;
	}

	.wjttc-cta {
		background: linear-gradient(135deg, #E10600 0%, #FF1E00 100%);
		color: white;
	}

	.wjttc-cta:hover {
		box-shadow: 0 5px 20px rgba(225, 6, 0, 0.5), 0 0 40px rgba(225, 6, 0, 0.3);
	}

	.wjttc-badge {
		background: linear-gradient(135deg, #E10600 0%, #FF1E00 100%) !important;
		color: white;
	}

	.wjttc-btn {
		background: linear-gradient(135deg, #E10600 0%, #FF1E00 100%) !important;
		color: white !important;
	}

	/* Grok Featured Card - Green theme for xAI */
	.grok-featured {
		background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%);
		border: 2px solid #4ade80;
		box-shadow: 0 10px 40px rgba(74, 222, 128, 0.3), 0 0 60px rgba(74, 222, 128, 0.1);
	}

	.grok-featured:hover {
		box-shadow: 0 15px 50px rgba(74, 222, 128, 0.4), 0 0 80px rgba(74, 222, 128, 0.15);
	}

	.grok-featured .chrome-description {
		color: #4ade80;
	}

	.grok-cta {
		background: linear-gradient(135deg, #4ade80 0%, #22c55e 100%);
		color: #1a1a1a;
	}

	.grok-cta:hover {
		box-shadow: 0 5px 20px rgba(74, 222, 128, 0.5), 0 0 40px rgba(74, 222, 128, 0.3);
	}

	.grok-badge {
		background: linear-gradient(135deg, #4ade80 0%, #22c55e 100%) !important;
		color: #1a1a1a;
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
