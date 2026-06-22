<script>
	import ProjectSurvival from '$lib/components/ProjectSurvival.svelte';
</script>

<svelte:head>
	<title>Project Survival | FAF</title>
</svelte:head>

<div class="back-nav">
	<a href="/daaft" class="back-button">←</a>
</div>

<div class="page-container">
	<ProjectSurvival />
</div>

<style>
	.back-nav {
		padding: 1rem 2rem;
		background: #1a1a1a;
		border-bottom: 1px solid #333;
	}

	.back-button {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		color: #fff;
		text-decoration: none;
		font-weight: 600;
		padding: 0.5rem 1rem;
		border-radius: 8px;
		transition: all 0.3s ease;
	}

	.back-button:hover {
		background: #333;
		color: var(--faf-orange);
	}

	.page-container {
		min-height: 100vh;
		background: #111;
		padding: 2rem;
	}
</style>
