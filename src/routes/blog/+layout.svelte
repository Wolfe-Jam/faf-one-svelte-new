<script>
	/**
	 * Blog is light-by-design (posts hardcode #1a1a1a). OS/saved dark theme
	 * must not flip tokens here or text vanishes. Force light ASAP + on nav.
	 */
	import { browser } from '$app/environment';
	import { onDestroy } from 'svelte';

	let { children } = $props();

	function forceBlogLight() {
		if (!browser) return;
		document.documentElement.setAttribute('data-theme', 'light');
		const s = document.body.style;
		s.background = '#FEFCF8';
		s.color = '#1a1a1a';
	}

	$effect(() => {
		forceBlogLight();
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

<!-- Runs before paint when this layout hydrates; pairs with app.html FOUC override below -->
<svelte:head>
	{@html `<script>(function(){try{document.documentElement.setAttribute('data-theme','light');}catch(e){}})();</script>`}
</svelte:head>

{@render children()}
