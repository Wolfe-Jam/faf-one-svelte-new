<script>
	import '../app.css';
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import WolfejamGizmo from '$lib/components/WolfejamGizmo.svelte';

	let { children, data } = $props();
	let isDark = $state(true);

	onMount(() => {
		const saved = localStorage.getItem('faf-theme');
		if (saved) {
			isDark = saved === 'dark';
		} else {
			isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
		}
		document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
	});

	function handleThemeToggle(e) {
		isDark = e.isDark;
		document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
		localStorage.setItem('faf-theme', isDark ? 'dark' : 'light');
	}
</script>

<!-- Site-wide default <title> ONLY. Svelte head-management dedups <title>
     (page-level overrides layout-level cleanly), so routes that set their own
     title win. Routes without one (/3ws, /rust) fall back to this default.

     Do NOT add <meta name="description"> here: Svelte does NOT dedup <meta>
     tags (they're additive by design), so a layout-level description would
     render FIRST in the document, and Google + many parsers pick the FIRST
     <meta description> they encounter — silently overriding every route's
     own description in search snippets. Each route sets its own. -->
<svelte:head>
	<title>.faf = Project DNA ✨ for ANY AI | IANA-Registered Format</title>
</svelte:head>


<div class="theme-toggle">
	<WolfejamGizmo {isDark} ontoggle={handleThemeToggle} size={24} />
</div>

<!-- Milestone banner -->
<div class="official-banner">
	<a href="/downloads" class="banner-line">
		<strong class="banner-count">{data.downloadCount} downloads</strong><span class="banner-receipt"> · Anthropic-merged</span><span class="banner-receipt-extra"> #2759 · IANA-registered</span>
	</a>
	<div class="banner-shine"></div>
</div>

{@render children?.()}

<style>
	/* LOCKED-DARK by design (wolfejam 2026-05-22) — banner stays
	   dark over any page below it, regardless of theme toggle. Do
	   NOT convert these literals to brand vars. See CLAUDE.md
	   "Theming Rules" §4 for the intent. */
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
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
		will-change: transform;
		transform: translateZ(0);
	}

	.banner-line {
		color: white;
		text-decoration: none;
		font-weight: 700;
		font-size: 0.95em;
		padding: 4px 8px;
		transition: opacity 0.3s ease;
	}

	.banner-line:hover {
		opacity: 0.85;
	}

	.banner-count {
		color: var(--faf-orange);
		font-weight: 800;
		text-shadow: 0 0 10px rgba(255, 107, 53, 0.5);
	}

	.banner-receipt,
	.banner-receipt-extra {
		color: white;
		font-weight: 600;
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
			padding: 10px 15px;
		}

		.banner-line {
			font-size: 0.82em;
		}

		.banner-receipt-extra {
			display: none;
		}
	}

	.theme-toggle {
		position: fixed;
		bottom: 1.5rem;
		left: 1.5rem;
		z-index: 9998;
	}
</style>
