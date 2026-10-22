<script>
	import { posts } from '#lib/blog-posts.js';

	let view = $state('list');
	let sortBy = $state('newest');

	// Compact hero subscribe — list page is too long for footer-only capture
	let subEmail = $state('');
	/** @type {'idle' | 'loading' | 'success' | 'error'} */
	let subStatus = $state('idle');

	async function handleBlogSub(e) {
		e.preventDefault();
		if (!subEmail || subStatus === 'loading') return;
		subStatus = 'loading';
		try {
			const res = await fetch('/api/subscribe', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
				body: JSON.stringify({ email: subEmail.trim(), source: 'faf.one/blog' })
			});
			const data = await res.json().catch(() => ({}));
			if (!res.ok || data?.subscribed === false) throw new Error(data?.error || 'fail');
			subStatus = 'success';
			subEmail = '';
		} catch {
			subStatus = 'error';
			setTimeout(() => {
				subStatus = 'idle';
			}, 4000);
		}
	}


	// Custom = rare one-off black pill + white single word via post.label (e.g. MEMORY).
	// Not part of the permanent 11-category ladder — use when the post needs a bespoke tag.
	const categoryOrder = ['Release', 'Launch', 'Custom', 'Foundation', 'Research', 'Milestone', 'Interop', 'Story', 'Grok', 'WJTTC', 'Engineering', 'Press Release'];

	const categoryColor = {
		'Release': '#00B8B8',
		'Launch': 'var(--faf-orange)',
		'Custom': '#1a1a1a',
		'Foundation': '#1D8348',
		'Research': '#4A90E2',
		'Press Release': '#666',
		'Milestone': '#FFD700',
		'WJTTC': '#E74C3C',
		'Grok': 'var(--faf-locked-dark-hover)',
		'Story': '#8B5A2B',
		'Interop': '#7D3C98',
		'Engineering': '#4A5568'
	};

	function categoryStyle(post) {
		const bg = categoryColor[post.category] ?? '#1a1a1a';
		if (post.category === 'Milestone') return `background: ${bg}; color: var(--faf-locked-dark-hover)`;
		if (post.category === 'Custom') return `background: #1a1a1a; color: #fff`;
		return `background: ${bg}; color: #fff`;
	}

	function categoryText(post) {
		if (post.category === 'Custom' && post.label) return post.label;
		return post.category;
	}

	let sortedPosts = $derived(
		sortBy === 'oldest'
			? [...posts].reverse()
			: sortBy === 'category'
				? [...posts].sort((a, b) => categoryOrder.indexOf(a.category) - categoryOrder.indexOf(b.category))
				: posts
	);
</script>

<svelte:head>
	<title>Blog | FAF - Stories & Press Releases</title>
	<meta name="description" content="Latest stories, press releases, and updates from FAF - The JPEG for AI">
</svelte:head>

<article class="blog">
	<div class="container">
		<h1><span class="blog-text">Blog</span> <span class="ampersand">&</span> <span class="press-text">Press</span></h1>
		<div class="subtitle">Stories, press releases, and updates from the FAF team</div>

		<!-- Hero subscribe: long page — footer strip is wrong place for /blog index -->
		<div class="blog-hero-sub">
			{#if subStatus === 'success'}
				<p class="blog-hero-ok">You're on the list.</p>
			{:else}
				<form class="blog-hero-row" onsubmit={handleBlogSub}>
					<input
						type="email"
						bind:value={subEmail}
						placeholder="your@email.com"
						required
						disabled={subStatus === 'loading'}
						class="blog-hero-input"
						aria-label="Email for newsletter"
					/>
					<button type="submit" disabled={!subEmail || subStatus === 'loading'} class="blog-hero-btn">
						{subStatus === 'loading' ? '…' : 'Subscribe'}
					</button>
				</form>
				{#if subStatus === 'error'}
					<p class="blog-hero-err">Something went wrong — try again.</p>
				{/if}
			{/if}
		</div>

		<div class="toolbar">
			<div class="toggle-group">
				<button class="toggle-btn" class:active={sortBy === 'newest'} onclick={() => sortBy = 'newest'}>Newest</button>
				<button class="toggle-btn" class:active={sortBy === 'oldest'} onclick={() => sortBy = 'oldest'}>Oldest</button>
				<button class="toggle-btn" class:active={sortBy === 'category'} onclick={() => sortBy = 'category'}>Category</button>
			</div>
			<div class="toggle-group">
				<button class="toggle-btn" class:active={view === 'list'} onclick={() => view = 'list'}>List</button>
				<button class="toggle-btn" class:active={view === 'cards'} onclick={() => view = 'cards'}>Cards</button>
			</div>
			<span class="post-count">{posts.length} posts</span>
		</div>

		{#if view === 'cards'}
		<div class="posts-grid">
			{#each sortedPosts as post}
				<a href="/{post.slug}" class="post-card" class:academic-card={post.theme === 'academic'} data-category={post.category}>
					<div class="post-emoji">
						{#if post.icon}
							<img src={post.icon} alt="" class="post-emoji-icon" width="28" height="28" />
						{:else}
							{post.emoji}
						{/if}
					</div>
					<div class="post-category" style={categoryStyle(post)}>{categoryText(post)}</div>
					<h2>{post.title}</h2>
					{#if post.version}<div class="post-version">{post.version}</div>{/if}
					<p class="post-excerpt">{post.excerpt}</p>
					<div class="post-date">{post.date}</div>
				</a>
			{/each}
		</div>
		{:else}
		<div class="posts-list">
			{#each sortedPosts as post}
				<a href="/{post.slug}" class="list-row" data-category={post.category}>
					<span class="list-dot"></span>
					<span class="list-date">{post.timestamp}</span>
					<span class="list-emoji">
						{#if post.icon}
							<img src={post.icon} alt="" class="list-emoji-icon" width="20" height="20" />
						{:else}
							{post.emoji}
						{/if}
					</span>
					<span class="list-title">{post.title}</span>
					{#if post.version}<span class="list-version">{post.version}</span>{/if}
					<span class="list-category" style={categoryStyle(post)}>{categoryText(post)}</span>
				</a>
			{/each}
		</div>
		{/if}
	</div>
</article>

<style>
	/* Blog index is light-locked. Prefer #1a1a1a / #FEFCF8 / #e5e5e5 LITERALS over
	   --faf-dark / --faf-black / --faf-cream — those flip under [data-theme=dark] and
	   were the white-text-on-cream failure when root onMount raced the light freeze. */

	/* Hard cream canvas — index must stay readable even if data-theme is wrong */
	.blog {
		padding: 3rem 0;
		background: #FEFCF8;
		color: #1a1a1a;
		min-height: 80vh;
	}

	/* Compact left-aligned hero subscribe (no label) */
	.blog-hero-sub {
		margin: 0 0 1.25rem;
		text-align: left;
	}
	.blog-hero-row {
		display: flex;
		align-items: center;
		gap: 0.45rem;
		flex-wrap: wrap;
	}
	.blog-hero-input {
		width: 12rem;
		max-width: 100%;
		padding: 0.4rem 0.65rem;
		font-size: 0.85rem;
		background: #fff;
		color: #1a1a1a;
		border: 1px solid #bbb;
		border-radius: 4px;
	}
	.blog-hero-input::placeholder {
		color: #888;
	}
	.blog-hero-input:focus {
		outline: none;
		border-color: #1a1a1a;
	}
	.blog-hero-btn {
		padding: 0.4rem 0.85rem;
		background: #1a1a1a;
		color: #fff;
		border: 1px solid #1a1a1a;
		border-radius: 4px;
		font-weight: 600;
		font-size: 0.85rem;
		cursor: pointer;
	}
	.blog-hero-btn:hover:not(:disabled) {
		background: #000;
	}
	.blog-hero-btn:disabled {
		opacity: 0.45;
		cursor: not-allowed;
	}
	.blog-hero-ok {
		margin: 0;
		font-size: 0.85rem;
		color: #1a1a1a;
	}
	.blog-hero-err {
		margin: 0.35rem 0 0;
		font-size: 0.8rem;
		color: #c53030;
	}

	.container {
		max-width: 1000px;
		margin: 0 auto;
		padding: 0 2rem;
	}

	h1 {
		font-size: 2.5rem;
		margin-bottom: 0.5rem;
		color: #1a1a1a;
		font-weight: 900;
	}

	.blog-text {
		color: var(--faf-orange);
	}

	.ampersand {
		color: #1a1a1a;
	}

	.press-text {
		color: #1a1a1a;
	}

	.subtitle {
		font-size: 1.2rem;
		color: #555555;
		margin-bottom: 3rem;
		font-weight: 500;
	}

	.posts-grid {
		display: grid;
		gap: 1rem;
		margin-bottom: 3rem;
	}

	.post-card {
		background: #e5e5e5;
		padding: 1.25rem 1.5rem;
		border-radius: 12px;
		border: 1px solid #e5e5e5;
		border-left: 4px solid var(--faf-orange);
		text-decoration: none;
		color: #1a1a1a;
		transition: all 0.3s ease;
		display: block;
	}

	.post-card:hover {
		transform: translateY(-4px);
		box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
		border-color: var(--faf-orange);
		border-left-width: 4px;
	}

	/* Category border colours (11 consolidated) */
	.post-card[data-category="Release"] { border-color: #00B8B8; }
	.post-card[data-category="Launch"] { border-color: var(--faf-orange); }
	.post-card[data-category="Custom"] { border-color: #1a1a1a; }
	.post-card[data-category="Foundation"] { border-color: #1D8348; }
	.post-card[data-category="Research"] { border-color: #4A90E2; }
	.post-card[data-category="Press Release"] { border-color: #666; }
	.post-card[data-category="Milestone"] { border-color: #FFD700; }
	.post-card[data-category="WJTTC"] { border-color: #E74C3C; }
	.post-card[data-category="Grok"] { border-color: var(--faf-locked-dark-hover); }
	.post-card[data-category="Story"] { border-color: #8B5A2B; }
	.post-card[data-category="Interop"] { border-color: #7D3C98; }
	.post-card[data-category="Engineering"] { border-color: #4A5568; }

	.post-emoji {
		font-size: 1.5rem;
		margin-bottom: 0.5rem;
		line-height: 1;
		min-height: 1.5rem;
	}
	.post-emoji-icon {
		display: block;
		width: 1.75rem;
		height: 1.75rem;
		border-radius: 50%;
		background: transparent;
	}

	.post-category {
		display: inline-block;
		color: white;
		padding: 0.15rem 0.5rem;
		border-radius: 4px;
		font-size: 0.7rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		margin-bottom: 0.5rem;
	}

	/* Version stamp — black mono, shown on cards/list when post.version is set */
	.post-version {
		display: inline-block;
		font-family: 'SF Mono', 'Fira Code', Consolas, monospace;
		font-size: 0.72rem;
		font-weight: 700;
		color: #1a1a1a;
		margin: -0.1rem 0 0.55rem;
		letter-spacing: 0.02em;
	}

	.list-version {
		font-family: 'SF Mono', 'Fira Code', Consolas, monospace;
		font-size: 0.72rem;
		font-weight: 700;
		color: #1a1a1a;
		flex-shrink: 0;
		letter-spacing: 0.02em;
	}

	.post-card[href*="the-missing-format"] .post-category {
		background: var(--faf-green);
	}

	.post-card[href*="faf-hits-10k"] .post-category {
		background: #FFD700;
	}

	.post-card[href*="mcp-registry-launch"] .post-category {
		background: #4A90E2;
	}

	.post-card[href*="v3-launch"] .post-category {
		background: var(--faf-cyan-dark);
	}

	.post-card[href*="stop-explaining-start-jamming"] .post-category,
	.post-card[href*="philosophy"] .post-category {
		background: #9B59B6;
	}

	.post-card[href*="68-minutes"] .post-category,
	.post-card[href*="story"] .post-category {
		background: var(--faf-orange);
	}

	.post-card[href*="press-release"] .post-category {
		background: #1a1a1a;
	}

	.post-card[data-category="Custom"] .post-category {
		background: #1a1a1a;
		color: #fff;
	}

	.post-card h2 {
		font-size: 1.25rem;
		margin: 0 0 0.5rem;
		color: #1a1a1a;
		font-weight: 700;
	}

	.post-excerpt {
		color: #333333;
		line-height: 1.5;
		margin: 0 0 0.75rem;
		font-size: 0.9rem;
	}

	.post-date {
		color: #555555;
		font-size: 0.9rem;
		font-style: italic;
	}

	/* Toolbar */
	.toolbar {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		margin-bottom: 2rem;
	}

	.toggle-group {
		display: flex;
		gap: 0.25rem;
	}

	.toggle-btn {
		padding: 0.4rem 1rem;
		border: none;
		background: transparent;
		border-radius: 6px;
		font-size: 0.8rem;
		font-weight: 600;
		color: #555555;
		cursor: pointer;
		transition: all 0.2s;
		text-transform: uppercase;
		letter-spacing: 0.04em;
	}

	.toggle-btn.active {
		background: #333;
		color: #fff;
	}

	.post-count {
		font-size: 0.8rem;
		color: #555555;
		margin-left: auto;
	}

	/* List view */
	.posts-list {
		display: flex;
		flex-direction: column;
		margin-bottom: 3rem;
	}

	.list-row {
		display: flex;
		align-items: center;
		gap: 1rem;
		padding: 0.75rem 1rem;
		text-decoration: none;
		color: #1a1a1a;
		border-bottom: 2px solid #e5e5e5;
		transition: background 0.15s;
	}

	.list-row:first-child {
		border-top: 2px solid #e5e5e5;
	}

	.list-row:hover {
		background: #f5f2ed;
	}

	.list-dot {
		width: 8px;
		height: 8px;
		border-radius: 50%;
		flex-shrink: 0;
		background: #333;
	}

	.list-date {
		font-family: 'SF Mono', 'Fira Code', Consolas, monospace;
		font-size: 0.8rem;
		color: #555555;
		flex-shrink: 0;
		width: 6.5rem;
	}

	.list-emoji {
		font-size: 1.2rem;
		flex-shrink: 0;
		width: 1.5rem;
		height: 1.5rem;
		text-align: center;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		line-height: 1;
	}
	.list-emoji-icon {
		display: block;
		width: 1.25rem;
		height: 1.25rem;
		border-radius: 50%;
		background: transparent;
	}

	.list-title {
		flex: 1;
		font-weight: 600;
		color: #1a1a1a;
		font-size: 0.95rem;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.list-row:hover .list-title {
		color: var(--faf-orange);
	}

	.list-category {
		font-size: 0.65rem;
		color: #fff;
		flex-shrink: 0;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		font-weight: 600;
		padding: 0.2rem 0.5rem;
		border-radius: 4px;
		min-width: 4.5rem;
		text-align: center;
	}

	.archive-note {
		text-align: center;
		padding: 2rem;
		color: #555555;
		font-style: italic;
	}

	.academic-card {
		background: #fdfdf8;
		border-color: #00BC61;
		border-left: 4px solid #00BC61;
	}

	.academic-card .post-category {
		background: #00aa55;
	}

	.academic-card:hover {
		box-shadow: 0 8px 24px rgba(39, 201, 63, 0.15);
		border-color: #00aa55;
	}

	@media (max-width: 768px) {
		h1 {
			font-size: 2rem;
		}

		.post-card {
			padding: 1.5rem;
		}

		.post-card h2 {
			font-size: 1.5rem;
		}

		.container {
			padding: 0 1rem;
		}

		.list-category {
			display: none;
		}

		.list-title {
			white-space: normal;
		}

		.list-date {
			width: 5.5rem;
			font-size: 0.75rem;
		}

		.list-version {
			flex-shrink: 1;
			min-width: 0;
			overflow-wrap: anywhere;
		}
	}
</style>
