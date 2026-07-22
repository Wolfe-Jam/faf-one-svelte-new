<script>
	/**
	 * Blog is light-by-design. Force light theme for this tree.
	 * Subscribe box on EVERY blog page (index + posts like Memory Edition).
	 */
	import { browser } from '$app/environment';
	import { onDestroy } from 'svelte';
	import BlogSubscribe from '$lib/components/BlogSubscribe.svelte';

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

<!-- After post body / index list — elephant posts included -->
<div style="padding:0 1rem 2rem;background:#FEFCF8;">
	<BlogSubscribe />
</div>
