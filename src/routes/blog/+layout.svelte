<script>
	/**
	 * Blog is light-by-design. Force light theme for this tree so OS-dark
	 * never paints black-on-black. Restore on leave.
	 */
	import { browser } from '$app/environment';
	import { onDestroy } from 'svelte';

	let { children } = $props();

	$effect(() => {
		if (!browser) return;
		document.documentElement.setAttribute('data-theme', 'light');
		document.body.style.background = '#FEFCF8';
		document.body.style.color = '#1a1a1a';
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
