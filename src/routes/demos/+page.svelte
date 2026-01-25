<script>
	const demos = [
		{
			file: 'hope-vs-trust.gif',
			title: 'Hope vs Trust',
			description: 'The Token Tax - 91% fewer tokens, zero drift'
		},
		{
			file: 'faf-go-showcase.gif',
			title: 'faf go',
			description: 'Guided path to Gold Code (100%)'
		},
		{
			file: 'crate-binary.gif',
			title: 'Rust FAFB',
			description: '288x faster with binary .fafb format'
		},
		{
			file: 'boris-flow.gif',
			title: 'Boris Flow',
			description: 'Engineering workflow validation'
		},
		{
			file: 'faf-quick-demo.gif',
			title: 'Quick Demo',
			description: 'faf score in action'
		}
	];
</script>

<svelte:head>
	<title>Demos | FAF</title>
</svelte:head>

<div class="demos-page">
	<header>
		<h1>FAF Demos</h1>
		<p>See FAF in action. Click any demo to view full size.</p>
	</header>

	<div class="grid">
		{#each demos as demo}
			<a href="/blog-assets/{demo.file}" target="_blank" class="card">
				<div class="gif-container">
					<img src="/blog-assets/{demo.file}" alt={demo.title} loading="lazy" />
				</div>
				<div class="info">
					<h3>{demo.title}</h3>
					<p>{demo.description}</p>
				</div>
			</a>
		{/each}
	</div>

	<footer>
		<p>Built with <a href="https://github.com/charmbracelet/vhs">VHS</a> by Charmbracelet</p>
	</footer>
</div>

<style>
	.demos-page {
		max-width: 1200px;
		margin: 0 auto;
		padding: 2rem;
	}

	header {
		text-align: center;
		margin-bottom: 3rem;
	}

	header h1 {
		font-size: 2.5rem;
		color: #00d4d4;
		margin-bottom: 0.5rem;
	}

	header p {
		color: #888;
	}

	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
		gap: 2rem;
	}

	.card {
		background: #1a1a1a;
		border: 1px solid #333;
		border-radius: 12px;
		overflow: hidden;
		text-decoration: none;
		transition: transform 0.2s, border-color 0.2s;
	}

	.card:hover {
		transform: translateY(-4px);
		border-color: #00d4d4;
	}

	.gif-container {
		width: 100%;
		aspect-ratio: 16/10;
		overflow: hidden;
		background: #000;
	}

	.gif-container img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.info {
		padding: 1rem 1.25rem;
	}

	.info h3 {
		color: #fff;
		margin: 0 0 0.5rem 0;
		font-size: 1.1rem;
	}

	.info p {
		color: #888;
		margin: 0;
		font-size: 0.9rem;
	}

	footer {
		text-align: center;
		margin-top: 3rem;
		padding-top: 2rem;
		border-top: 1px solid #333;
		color: #666;
	}

	footer a {
		color: #00d4d4;
	}
</style>
