<script>
	/**
	 * Blog is light-by-design. Force light theme for this tree.
	 * Sitewide subscribe lives in root layout (above footer) — not duplicated here.
	 *
	 * Defense in depth (with root +layout + app.html FOUC):
	 * - onMount AND $effect both force light (parent onMount used to race $effect alone)
	 * - cream body inline so canvas never inherits dark page-bg mid-nav
	 */
	import { browser } from '$app/environment';
	import { onMount, onDestroy } from 'svelte';

	let { children } = $props();

	function freezeLight() {
		if (!browser) return;
		document.documentElement.setAttribute('data-theme', 'light');
		document.body.style.background = '#FEFCF8';
		document.body.style.color = '#1a1a1a';
	}

	onMount(() => {
		freezeLight();
	});

	$effect(() => {
		freezeLight();
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
		document.body.style.removeProperty('background');
		document.body.style.removeProperty('color');
	});
</script>

{@render children()}
