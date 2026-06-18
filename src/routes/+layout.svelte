<script>
	import '../app.css';
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import WolfejamGizmo from '$lib/components/WolfejamGizmo.svelte';
	import { page } from '$app/stores';

	let { children, data } = $props();
	let isDark = $state(true);
	let nearTop = $state(false);

	onMount(() => {
		const saved = localStorage.getItem('faf-theme');
		if (saved) {
			isDark = saved === 'dark';
		} else {
			isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
		}
		document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
	});

	// Auto-hide banner: reveal when the cursor nears the top of the viewport.
	// Only has a visible effect on pages that opt in (see .auto-hide below).
	onMount(() => {
		const onMove = (e) => { nearTop = e.clientY <= 64; };
		window.addEventListener('mousemove', onMove);
		return () => window.removeEventListener('mousemove', onMove);
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


{#if !$page.data?.hideThemeToggle}
	<div class="theme-toggle">
		<WolfejamGizmo {isDark} ontoggle={handleThemeToggle} size={24} />
	</div>
{/if}

<!-- Home badge (twin of the Foundation badge in app.html, top-left). On the
     homepage it's a filled white "you are home" dot; elsewhere a back arrow. -->
{#if $page.url.pathname === '/'}
	<span class="home-badge home-here" title="Home" aria-current="page">
		<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="18" fill="white" /></svg>
	</span>
{:else}
	<a href="/" class="home-badge" title="Back">
		<svg viewBox="0 0 100 100" fill="none">
			<path d="M60 25 L35 50 L60 75" stroke="white" stroke-width="10" fill="none" stroke-linecap="round" stroke-linejoin="round" />
		</svg>
	</a>
{/if}

<!-- Milestone banner -->
<div class="official-banner" class:auto-hide={!$page.data?.pinBanner} class:revealed={nearTop}>
	<a href="/downloads" class="banner-line">
		<strong class="banner-count">{data.downloadCount} downloads</strong><span class="banner-receipt"> · Anthropic-merged</span><span class="banner-receipt-extra"> #2759 · IANA-registered</span>
	</a>
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

	/* Auto-hide by DEFAULT, everywhere. Banner becomes a fixed overlay, slid up
	   out of view; the cursor nearing the top (nearTop) slides it down. A page
	   opts OUT (pins the banner visible) via load returning { pinBanner: true }. */
	.official-banner.auto-hide {
		position: fixed;
		left: 0;
		right: 0;
		transform: translateY(-100%);
		transition: transform 0.25s ease;
	}

	.official-banner.auto-hide.revealed {
		transform: translateY(0);
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

	.official-banner:hover {
		background: #0a0a0a;
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

	/* Home badge — black circle, thick white outline, white back-arrow.
	   On the homepage (.home-here) it's a filled white "you are home" dot. */
	.home-badge {
		position: fixed;
		top: 20px;
		left: 20px;
		width: 40px;
		height: 40px;
		background: #000;
		border: 2px solid #fff;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		transition: all 0.3s ease;
		z-index: 1000;
		text-decoration: none;
	}

	.home-badge svg {
		width: 20px;
		height: 20px;
	}

	/* Black always — only the inner glyph changes (arrow vs you-are-home dot). */
	.home-badge:not(.home-here):hover {
		transform: scale(1.1);
	}

	.home-here {
		cursor: default;
	}

	@media (max-width: 768px) {
		.home-badge {
			width: 36px;
			height: 36px;
			top: 15px;
			left: 15px;
		}

		.home-badge svg {
			width: 18px;
			height: 18px;
		}
	}
</style>
