<script>
	import '../app.css';
	import SideNav from '$lib/components/SideNav.svelte';

	let { children, data } = $props();

	// function handleThemeToggle() {
	// 	toggleTheme();
	// }
</script>

<SideNav />

<!-- 3-Section Banner -->
<div class="official-banner">
	<a href="https://github.com/Wolfe-Jam/faf-cli" target="_blank" rel="noopener" class="banner-section github-star">
		<svg class="github-icon" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
			<path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
		</svg>
		⭐ Star
	</a>
	<a href="/downloads" class="banner-section-center">
		{data.downloadCount} Downloads • <span class="anthropic-approved">Anthropic-Approved</span>
	</a>
	<a href="https://npmjs.com/package/claude-faf-mcp" target="_blank" rel="noopener" class="banner-section">
		⚡️ MCP #2759 MERGED ⚡️
	</a>
	<div class="banner-shine"></div>
</div>

{@render children?.()}

<!-- WolfejamGizmo Theme Toggle - Hidden until full theme implementation -->
<!-- <div class="theme-toggle-container">
	<WolfejamGizmo
		isDark={$isDarkMode}
		size={48}
		ontoggle={handleThemeToggle}
	/>
</div> -->

<style>
	/* .theme-toggle-container {
		position: fixed;
		bottom: 24px;
		right: 24px;
		z-index: 1000;
	}

	@media (max-width: 640px) {
		.theme-toggle-container {
			bottom: 16px;
			right: 16px;
		}
	} */

	.official-banner {
		background: #0a0a0a;
		backdrop-filter: blur(10px);
		-webkit-backdrop-filter: blur(10px);
		color: white;
		padding: 12px 20px;
		font-weight: 600;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
		position: sticky;
		top: 0;
		z-index: 900;
		overflow: hidden;
		border-bottom: 1px solid rgba(255, 255, 255, 0.1);
		transition: none;
		display: grid;
		grid-template-columns: 1fr 2fr 1fr;
		align-items: center;
		text-align: center;
		min-width: fit-content;
		will-change: transform;
		transform: translateZ(0);
	}

	.banner-section {
		color: white;
		text-decoration: none;
		padding: 8px;
		transition: opacity 0.3s ease;
		font-size: 0.9em;
	}

	.banner-section:hover {
		opacity: 0.8;
	}

	.github-star {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
		font-weight: 700;
	}

	.github-icon {
		width: 16px;
		height: 16px;
		color: white;
		flex-shrink: 0;
	}

	.banner-section-center {
		font-size: 1em;
		font-weight: 700;
		color: white;
		text-decoration: none;
	}

	.anthropic-approved {
		color: var(--faf-orange);
		font-weight: 800;
		text-shadow: 0 0 10px rgba(255, 107, 53, 0.5);
	}

	.banner-home-link {
		text-decoration: none;
		color: inherit;
		display: flex;
		align-items: center;
		cursor: pointer;
		flex: 1;
		justify-content: center;
	}

	.official-banner::before {
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
		animation: shimmer 3s linear infinite;
	}

	@keyframes shimmer {
		0% { transform: translateX(-100%); }
		100% { transform: translateX(100%); }
	}

	.official-banner:hover {
		background: linear-gradient(135deg,
			#5a5a5a 0%,
			#3c4e60 20%,
			#1a1a1a 50%,
			#3c4e60 80%,
			#5a5a5a 100%
		);
		transform: translateY(-1px);
	}

	.banner-content {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		transition: transform 0.2s ease;
	}

	.banner-home-link:hover .banner-content {
		transform: scale(1.02);
	}

	.banner-emoji {
		font-size: 1.25rem;
		animation: bounce 2s ease-in-out infinite;
	}

	@keyframes bounce {
		0%, 100% { transform: translateY(0); }
		50% { transform: translateY(-3px); }
	}

	.banner-text {
		font-size: 0.95rem;
		letter-spacing: 0.02em;
	}

	.faf-text {
		color: var(--faf-orange);
		font-weight: 700;
		text-shadow: 0 0 10px rgba(255, 107, 53, 0.5);
	}

	.banner-cta {
		display: inline-flex;
		align-items: center;
		padding: 6px 14px;
		background: linear-gradient(135deg, var(--faf-orange) 0%, #FF914D 100%);
		border-radius: 999px;
		font-size: 0.85rem;
		font-weight: 600;
		white-space: nowrap;
		transition: all 0.3s ease;
		text-decoration: none;
		color: white;
		position: relative;
		z-index: 1;
	}

	.banner-cta:hover {
		background: linear-gradient(135deg, var(--faf-cyan-dark) 0%, #00E5E5 100%);
		transform: scale(1.05);
		box-shadow: 0 0 15px rgba(0, 229, 229, 0.4);
	}

	.banner-shine {
		position: absolute;
		top: 0;
		left: -100%;
		width: 100%;
		height: 100%;
		background: linear-gradient(90deg,
			transparent 0%,
			rgba(255, 255, 255, 0.03) 50%,
			transparent 100%
		);
		animation: steelSheen 4s ease-in-out infinite;
		pointer-events: none;
	}

	@keyframes steelSheen {
		0% { left: -100%; }
		100% { left: 100%; }
	}

	@media (max-width: 640px) {
		.official-banner {
			flex-direction: column;
			padding: 10px 15px;
			gap: 0.5rem;
		}

		.banner-home-link {
			width: 100%;
		}

		.banner-content {
			font-size: 0.85rem;
		}

		.banner-emoji {
			font-size: 1rem;
		}

		.banner-cta {
			font-size: 0.75rem;
			padding: 4px 10px;
		}
	}
</style>
