<script>
	import '../app.css';
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import WolfejamGizmo from '$lib/components/WolfejamGizmo.svelte';
	import Footer from '$lib/components/Footer.svelte';
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

	// Central body-theme guard. SvelteKit keeps every visited route's CSS in the
	// document, so any page's `:global(body){...}` bleeds onto later pages and wins
	// by source order — that's the recurring "dark-on-dark on a clean page" bug.
	// Fix: set the body background/color INLINE on every navigation. Inline beats
	// any stylesheet rule, so leaks can never win. Each page declares intent via
	// load → `data.bg`:  'dark' | 'light' (locked) · 'self' (page paints its own
	// body) · anything else / undefined (flip — the immune default).
	$effect(() => {
		if (!browser) return;
		const bg = $page.data?.bg;
		const s = document.body.style;
		if (bg === 'dark') {
			s.background = 'var(--faf-locked-dark)';
			s.color = 'var(--faf-locked-dark-text)';
		} else if (bg === 'light') {
			s.background = 'var(--faf-page-bg)';
			s.color = 'var(--faf-dark)';
		} else if (bg === 'self') {
			s.removeProperty('background');
			s.removeProperty('color');
		} else {
			s.background = 'var(--faf-page-bg)';
			s.color = 'var(--faf-dark)';
		}
	});
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


<!-- Home badge (twin of the Foundation badge in app.html, top-left). On the
     homepage it's a filled white "you are home" dot; elsewhere a back arrow. -->
{#if $page.url.pathname === '/'}
	<span class="chrome-badge home-badge home-here" aria-label="Home" aria-current="page">
		<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="34" fill="white" /></svg>
	</span>
{:else}
	<a href="/" class="chrome-badge home-badge" aria-label="Back">
		<svg viewBox="0 0 100 100" fill="none">
			<path d="M60 25 L35 50 L60 75" stroke="white" stroke-width="10" fill="none" stroke-linecap="round" stroke-linejoin="round" />
		</svg>
	</a>
{/if}

<!-- Chrome badges — fixed top-left family (Home · Map · Blog · Skills).
     Fast CSS tooltips on hover; no text pill (was mini-nav). -->
<a href="/map" class="chrome-badge map-badge" aria-label="Site map">
	<svg viewBox="0 0 100 100" fill="none" aria-hidden="true">
		<circle cx="50" cy="50" r="36" stroke="white" stroke-width="8" />
		<ellipse cx="50" cy="50" rx="17" ry="36" stroke="white" stroke-width="6" />
		<line x1="14" y1="50" x2="86" y2="50" stroke="white" stroke-width="6" />
	</svg>
</a>

<a href="/blog" class="chrome-badge blog-badge" aria-label="Blog">
	<svg viewBox="0 0 100 100" fill="none" aria-hidden="true">
		<rect x="22" y="20" width="56" height="60" rx="6" stroke="white" stroke-width="8" />
		<line x1="32" y1="38" x2="68" y2="38" stroke="white" stroke-width="6" stroke-linecap="round" />
		<line x1="32" y1="52" x2="68" y2="52" stroke="white" stroke-width="6" stroke-linecap="round" />
		<line x1="32" y1="66" x2="54" y2="66" stroke="white" stroke-width="6" stroke-linecap="round" />
	</svg>
</a>

<a href="https://skills.faf.one" class="chrome-badge skills-badge" aria-label="Skills" target="_blank" rel="noopener noreferrer">
	<svg viewBox="0 0 100 100" fill="none" aria-hidden="true">
		<path d="M50 12 L58 38 L86 38 L64 54 L72 80 L50 64 L28 80 L36 54 L14 38 L42 38 Z" stroke="white" stroke-width="7" stroke-linejoin="round" />
	</svg>
</a>

<!-- Milestone banner -->
<div class="official-banner" class:auto-hide={!$page.data?.pinBanner} class:revealed={nearTop}>
	<a href="/downloads" class="banner-line">
		<span class="banner-receipt">Anthropic-merged<span class="banner-receipt-extra"> #2759</span></span><span class="banner-sep"> · </span><strong class="banner-count">{data.downloadCount} downloads</strong><span class="banner-tail"> · IANA-registered</span>
	</a>
</div>

{@render children?.()}

{#if !$page.data?.hideThemeToggle}
	<div class="theme-toggle">
		<WolfejamGizmo {isDark} ontoggle={handleThemeToggle} size={24} />
	</div>
{/if}

<div class="footer-chrome">
	<Footer />
</div>

<style>
	/* LOCKED-DARK — banner stays dark over any page below it, regardless
	   of theme toggle. Use --faf-locked-* / --faf-chrome-* (defined in
	   :root only; they do NOT flip in [data-theme="dark"]). */
	.official-banner {
		background: var(--faf-locked-dark);
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
		background: var(--faf-locked-dark);
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

		.banner-receipt-extra,
		.banner-tail {
			display: none;
		}
	}

	.footer-chrome {
		margin-top: 3rem;
	}

	/* Theme gizmo — viewport bottom-left (mirror of .home-badge top-left). */
	.theme-toggle {
		position: fixed;
		left: 20px;
		bottom: 1.5rem;
		z-index: 9998;
	}

	/* Chrome badges — fixed top-left row (Home · Map · Blog · Skills).
	   Fast CSS tooltips (0.08s); native title lags ~1s. */
	.chrome-badge {
		position: fixed;
		top: 5px;
		width: 40px;
		height: 40px;
		background: var(--faf-chrome-bg);
		border: 2px solid var(--faf-chrome-fg);
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		text-decoration: none;
		z-index: 1000;
		transition: transform 0.3s ease;
		cursor: pointer;
	}

	.chrome-badge svg {
		width: 20px;
		height: 20px;
	}

	.chrome-badge:not(.home-here):hover {
		transform: scale(1.1);
	}

	.home-here {
		cursor: default;
	}

	.chrome-badge::after {
		position: absolute;
		top: calc(100% + 6px);
		left: 0;
		background: var(--faf-chrome-bg);
		color: var(--faf-chrome-fg);
		font: 600 12px/1 -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
		padding: 5px 8px;
		border-radius: 6px;
		white-space: nowrap;
		opacity: 0;
		pointer-events: none;
		transition: opacity 0.08s ease;
		z-index: 1001;
	}

	.chrome-badge:hover::after {
		opacity: 1;
	}

	.home-badge {
		left: 20px;
	}

	.home-badge:not(.home-here)::after {
		content: 'Back';
	}

	.home-here::after {
		content: 'Home';
	}

	.map-badge {
		left: 70px;
	}

	.map-badge::after {
		content: 'Site map';
	}

	.blog-badge {
		left: 120px;
	}

	.blog-badge::after {
		content: 'Blog';
	}

	.skills-badge {
		left: 170px;
	}

	.skills-badge::after {
		content: 'Skills';
	}

	@media (max-width: 768px) {
		.chrome-badge {
			width: 36px;
			height: 36px;
		}

		.chrome-badge svg {
			width: 18px;
			height: 18px;
		}

		.home-badge {
			left: 15px;
		}

		.map-badge {
			left: 59px;
		}

		.blog-badge {
			left: 103px;
		}

		.skills-badge {
			left: 147px;
		}

		.theme-toggle {
			left: 15px;
			bottom: 1.25rem;
		}
	}
</style>
