<script>
	import { onMount } from 'svelte';
	import Navigation from '$lib/components/Navigation.svelte';
	import Footer from '$lib/components/Footer.svelte';

	const RELEASES_URL =
		'https://raw.githubusercontent.com/Wolfe-Jam/faf-cli/main/website/releases.json';

	let releases = $state([]);
	let loading = $state(true);
	let error = $state(null);

	onMount(async () => {
		try {
			const res = await fetch(RELEASES_URL);
			if (!res.ok) throw new Error('Failed to fetch releases');
			releases = await res.json();
		} catch (err) {
			error = err.message;
		} finally {
			loading = false;
		}
	});

	function formatDate(dateString) {
		const date = new Date(dateString);
		return date.toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		});
	}
</script>

<svelte:head>
	<title>Updates - FAF CLI Releases</title>
	<meta name="description" content="Latest FAF CLI releases and updates" />
</svelte:head>

<Navigation />

<main class="updates-page">
	<div class="container">
		<header class="page-header">
			<h1>⚡️ FAF CLI Updates</h1>
			<p class="subtitle">Latest releases and announcements</p>
		</header>

		{#if loading}
			<div class="loading">Loading releases...</div>
		{:else if error}
			<div class="error">
				<p>Error loading releases: {error}</p>
			</div>
		{:else if releases.length === 0}
			<div class="empty">
				<p>No releases yet. Check back soon!</p>
			</div>
		{:else}
			<div class="releases">
				{#each releases as release}
					<article class="release">
						<header class="release-header">
							<div class="release-title">
								<h2>{release.version}</h2>
								{#if release.prerelease}
									<span class="badge beta">BETA</span>
								{/if}
							</div>
							<p class="release-name">{release.name}</p>
							<p class="release-meta">
								{formatDate(release.date)}
							</p>
						</header>

						<div class="release-content">
							{#if release.changelog}
								<div class="changelog">
									<h3>What Changed</h3>
									<pre>{release.changelog.trim()}</pre>
								</div>
							{/if}

							<div class="install">
								<h3>Install</h3>
								<div class="install-commands">
									<code class="command">
										<span class="prompt">$</span> {release.install.npm}
									</code>
									<code class="command">
										<span class="prompt">$</span> {release.install.brew}
									</code>
								</div>
							</div>

							<div class="links">
								<a href={release.urls.github} target="_blank" rel="noopener">
									GitHub Release
								</a>
								<a href={release.urls.npm} target="_blank" rel="noopener"> npm Package </a>
								<a href={release.urls.discord} target="_blank" rel="noopener">
									Discord Community
								</a>
							</div>
						</div>
					</article>
				{/each}
			</div>
		{/if}
	</div>
</main>

<Footer />

<style>
	.updates-page {
		min-height: 100vh;
		background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
		padding: 2rem 0;
		color: #fff;
	}

	.container {
		max-width: 900px;
		margin: 0 auto;
		padding: 0 2rem;
	}

	.page-header {
		text-align: center;
		margin-bottom: 4rem;
		padding-top: 6rem;
	}

	.page-header h1 {
		font-size: 3rem;
		margin-bottom: 1rem;
		background: linear-gradient(135deg, #00D4D4 0%, #00ffff 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
	}

	.subtitle {
		font-size: 1.2rem;
		color: #999;
	}

	.loading,
	.error,
	.empty {
		text-align: center;
		padding: 4rem 2rem;
		font-size: 1.2rem;
	}

	.error {
		color: #ff6b6b;
	}

	.releases {
		display: flex;
		flex-direction: column;
		gap: 3rem;
	}

	.release {
		background: rgba(255, 255, 255, 0.05);
		border: 1px solid rgba(255, 107, 53, 0.2);
		border-radius: 12px;
		padding: 2rem;
		transition: all 0.3s ease;
	}

	.release:hover {
		transform: translateY(-4px);
		border-color: rgba(255, 107, 53, 0.5);
		box-shadow: 0 8px 24px rgba(255, 107, 53, 0.15);
	}

	.release-header {
		border-bottom: 1px solid rgba(255, 255, 255, 0.1);
		padding-bottom: 1.5rem;
		margin-bottom: 1.5rem;
	}

	.release-title {
		display: flex;
		align-items: center;
		gap: 1rem;
		margin-bottom: 0.5rem;
	}

	.release-title h2 {
		font-size: 2rem;
		color: #ff6b35;
		margin: 0;
	}

	.badge {
		display: inline-block;
		padding: 0.25rem 0.75rem;
		border-radius: 4px;
		font-size: 0.85rem;
		font-weight: 600;
		text-transform: uppercase;
	}

	.badge.beta {
		background: #ffaa70;
		color: #1a1a1a;
	}

	.release-name {
		font-size: 1.25rem;
		color: #fff;
		margin: 0.5rem 0;
		font-weight: 500;
	}

	.release-meta {
		color: #999;
		font-size: 0.95rem;
		margin: 0;
	}

	.release-content h3 {
		font-size: 1.1rem;
		color: #ff6b35;
		margin-bottom: 1rem;
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}

	.changelog {
		margin-bottom: 2rem;
	}

	.changelog pre {
		background: rgba(0, 0, 0, 0.3);
		padding: 1.5rem;
		border-radius: 8px;
		border-left: 3px solid #ff6b35;
		color: #ffffff;
		font-weight: 500;
		font-family: 'Courier New', monospace;
		font-size: 0.95rem;
		line-height: 1.6;
		white-space: pre-wrap;
		overflow-x: auto;
	}

	.install {
		margin-bottom: 2rem;
	}

	.install-commands {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}

	.command {
		background: rgba(0, 0, 0, 0.5);
		border: 1px solid rgba(255, 107, 53, 0.3);
		padding: 1rem 1.5rem;
		border-radius: 6px;
		font-family: 'Courier New', monospace;
		font-size: 0.95rem;
		color: #00ff00;
		display: block;
	}

	.command .prompt {
		color: #ff6b35;
		margin-right: 0.5rem;
	}

	.links {
		display: flex;
		gap: 1rem;
		flex-wrap: wrap;
	}

	.links a {
		color: #ff6b35;
		text-decoration: none;
		padding: 0.75rem 1.5rem;
		border: 1px solid #ff6b35;
		border-radius: 6px;
		transition: all 0.2s ease;
		font-weight: 500;
	}

	.links a:hover {
		background: #ff6b35;
		color: #fff;
		transform: translateY(-2px);
		box-shadow: 0 4px 12px rgba(255, 107, 53, 0.3);
	}

	@media (max-width: 768px) {
		.page-header h1 {
			font-size: 2rem;
		}

		.release {
			padding: 1.5rem;
		}

		.release-title h2 {
			font-size: 1.5rem;
		}

		.links {
			flex-direction: column;
		}

		.links a {
			text-align: center;
		}
	}
</style>
