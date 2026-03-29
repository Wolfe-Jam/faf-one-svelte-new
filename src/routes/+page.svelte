<script>
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	onMount(() => {
		if (browser) {
			window.location.href = 'https://github.com/Wolfe-Jam/faf-cli';
		}
	});
</script>

<svelte:head>
	<title>FAF — The Context Standard for AI</title>
	<meta name="description" content="project.faf — persistent AI context for any tool. IANA registered. 47k+ downloads." />
	<meta http-equiv="refresh" content="0;url=https://github.com/Wolfe-Jam/faf-cli" />
</svelte:head>

<div style="display:flex;align-items:center;justify-content:center;height:100vh;background:#0a0a0a;color:#fff;font-family:-apple-system,sans-serif;">
	<p>Redirecting to <a href="https://github.com/Wolfe-Jam/faf-cli" style="color:#00D4D4;">github.com/Wolfe-Jam/faf-cli</a>...</p>
</div>
