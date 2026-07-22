<script>
	/**
	 * Blog chrome: hide theme flip for this section (see +layout.ts).
	 * Light-authored posts hardcode dark text (#1a1a1a). If data-theme stays
	 * "dark" (incognito + OS dark, or saved preference), --faf-page-bg goes
	 * near-black while text stays #1a1a1a → unreadable. Freeze light tokens
	 * for the whole /blog tree; dark posts lock body with !important + light text.
	 */
	import { browser } from '$app/environment';
	import { onDestroy } from 'svelte';

	let { children } = $props();

	$effect(() => {
		if (!browser) return;
		document.documentElement.setAttribute('data-theme', 'light');
		// Match central body guard so bg:'self' pages still get a cream canvas
		// even when a prior route left inline styles or leaked :global(body).
		const s = document.body.style;
		s.background = '#FEFCF8';
		s.color = '#1a1a1a';
	});

	onDestroy(() => {
		if (!browser) return;
		try {
			const saved = localStorage.getItem('faf-theme');
			const dark = saved
				? saved === 'dark'
				: window.matchMedia('(prefers-color-scheme: dark)').matches;
			document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
		} catch {
			document.documentElement.removeAttribute('data-theme');
		}
		// Let root layout $effect re-apply body on next navigation
		document.body.style.removeProperty('background');
		document.body.style.removeProperty('color');
	});
</script>

{@render children()}
