<script>
	const posts = [
		{
			slug: 'foundation/blog/what-if-software-was-good',
			title: 'What If Software Was Good?',
			date: 'November 25, 2025',
			timestamp: '2025-11-25',
			excerpt: 'Imagine how the world would run if software was good. Not better. Not acceptable. Good. Software that gets better every time you touch it. Gold code delivers.',
			emoji: '🏆',
			category: 'Vision',
			featured: true
		},
		{
			slug: 'foundation/blog/welcome',
			title: 'Welcome to the FAF Foundation',
			date: 'November 25, 2025',
			timestamp: '2025-11-25',
			excerpt: 'The Foundation for better software. One repo at a time.',
			emoji: '🏛️',
			category: 'Foundation'
		}
	];
</script>

<svelte:head>
	<title>FAF Foundation Blog</title>
	<meta name="description" content="Educational content and research from the FAF Foundation. Better code, better teams, better world." />
</svelte:head>

<div class="foundation-blog">
	<header class="blog-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/v4">Foundation</a> / Blog
		</div>
		<h1>FAF Foundation Blog</h1>
		<p class="tagline">Educational content and research for better software</p>
	</header>

	<div class="posts-grid">
		{#each posts as post}
			<article class="post-card" class:featured={post.featured}>
				<a href="/{post.slug}" class="post-link">
					<div class="post-emoji">{post.emoji}</div>
					<div class="post-meta">
						<time datetime={post.timestamp}>{post.date}</time>
						<span class="separator">•</span>
						<span class="category">{post.category}</span>
					</div>
					<h2 class="post-title">{post.title}</h2>
					<p class="post-excerpt">{post.excerpt}</p>
					{#if post.featured}
						<span class="featured-badge">Featured</span>
					{/if}
				</a>
			</article>
		{/each}
	</div>
</div>

<style>
	.foundation-blog {
		max-width: 72rem;
		margin: 0 auto;
		padding: 2rem 1rem;
		background: var(--faf-cream);
		color: var(--faf-dark);
	}

	.blog-header {
		margin-bottom: 3rem;
		text-align: center;
	}

	.breadcrumb {
		font-size: 0.875rem;
		color: var(--faf-gray);
		margin-bottom: 1rem;
	}

	.breadcrumb a {
		color: var(--faf-green);
		text-decoration: none;
	}

	.breadcrumb a:hover {
		text-decoration: underline;
	}

	h1 {
		font-size: 2.5rem;
		font-weight: 700;
		margin: 0 0 0.5rem 0;
		color: var(--faf-dark);
	}

	.tagline {
		font-size: 1.125rem;
		color: var(--faf-gray);
	}

	.posts-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
		gap: 2rem;
	}

	.post-card {
		background: var(--faf-surface);
		border: 2px solid var(--faf-light-gray);
		border-radius: 8px;
		padding: 2rem;
		transition: all 0.3s ease;
		position: relative;
	}

	.post-card:hover {
		border-color: var(--faf-green);
		transform: translateY(-4px);
		box-shadow: 0 8px 24px rgba(0, 191, 99, 0.15);
	}

	.post-card.featured {
		border-color: var(--faf-green);
		border-width: 3px;
	}

	.post-link {
		text-decoration: none;
		color: inherit;
		display: block;
	}

	.post-emoji {
		font-size: 2.5rem;
		margin-bottom: 1rem;
	}

	.post-meta {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		font-size: 0.875rem;
		color: var(--faf-gray);
		margin-bottom: 1rem;
	}

	.separator {
		color: var(--faf-light-gray);
	}

	.category {
		color: var(--faf-green);
		font-weight: 600;
	}

	.post-title {
		font-size: 1.5rem;
		font-weight: 700;
		margin: 0 0 1rem 0;
		color: var(--faf-dark);
	}

	.post-excerpt {
		color: var(--faf-gray);
		line-height: 1.6;
		margin: 0;
	}

	.featured-badge {
		position: absolute;
		top: 1rem;
		right: 1rem;
		background: var(--faf-green);
		color: white;
		padding: 0.25rem 0.75rem;
		border-radius: 4px;
		font-size: 0.75rem;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}

	@media (max-width: 640px) {
		h1 {
			font-size: 2rem;
		}

		.posts-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
