<script>
	// DRAFT - Publish Dec 31 or Jan 1
	// {
	// 	slug: 'blog/best-of-2025',
	// 	title: '.faf — 2025: Year of FAF',
	// 	date: 'December 31, 2025',
	// 	timestamp: '2025-12-31',
	// 	excerpt: 'The 84-Day IANA Sprint. From first code to IANA-registered standard in 84 days. YAML took 22 years. JSON took 5 years. FAF took 84 days.',
	// 	emoji: '🏛️',
	// 	category: 'Year in Review'
	// },

	const posts = [
		{
			slug: 'blog/bun-sticky-zig-launch',
			title: 'bun-sticky-zig: Native FAF Scoring in Bun\'s Language',
			date: 'December 23, 2025',
			timestamp: '2025-12-23',
			excerpt: '77KB binary. Zero runtime dependencies. Pure Zig. FAF scoring built in Bun\'s own language with 136 championship-grade tests.',
			emoji: '⚡',
			category: 'Release'
		},
		{
			slug: 'blog/bun-sticky-launch',
			title: 'bun-sticky: Zero-Dependency FAF Scoring for Bun',
			date: 'December 22, 2025',
			timestamp: '2025-12-22',
			excerpt: 'Fastest bun under the sum. bun-sticky-faf: Bun-native FAF scoring CLI with zero dependencies, pure Bun APIs, and 333 championship-grade tests.',
			emoji: '🥐',
			category: 'Release'
		},
		{
			slug: 'blog/what-if-software-was-good',
			title: 'What If Software Was Good?',
			date: 'November 25, 2025',
			timestamp: '2025-11-25',
			excerpt: 'Imagine how the world would run if software was good. Not better. Not acceptable. Good. Software that gets better every time you touch it. Gold code delivers.',
			emoji: '🏆',
			category: 'Foundation'
		},
		{
			slug: 'blog/project-faf-first',
			title: 'The Moment .faf Came First',
			date: 'November 24, 2025',
			timestamp: '2025-11-24',
			excerpt: 'Claude Code read project.faf before CLAUDE.md. The format designed for AI context is being recognized as authoritative. The hierarchy works. The AI listened.',
			emoji: '🏁',
			category: 'Format Victory'
		},
		{
			slug: 'blog/python-sdk-launch',
			title: 'The Tale of Two Crowns and a Snake',
			date: 'November 21, 2025',
			timestamp: '2025-11-21',
			excerpt: 'FAF Python SDK launches on PyPI. Single developer. Two crowns. One snake. Then Grok showed up. Tomorrow: Rust.',
			emoji: '🐍',
			category: 'Press Release'
		},
		{
			slug: 'blog/xai-native-embedding',
			title: 'xAI Commits to Native .FAF Integration for Grok',
			date: 'November 20, 2025',
			timestamp: '2025-11-20',
			excerpt: 'xAI publicly commits to native .FAF embedding in Grok for worldwide deployment. The third major adoption after IANA registration and Anthropic MCP merger.',
			emoji: '🏆',
			category: 'Milestone'
		},
		{
			slug: 'blog/grok-faf-mcp-launch-grok-version',
			title: 'Grok-Exclusive MCP Server Launched in Less Than 24 Hours',
			date: 'November 18, 2025',
			timestamp: '2025-11-18',
			excerpt: 'Written by Grok: How grok-faf-mcp went from idea to live production in under 24 hours, with love, Big Orange, and a permanent checkbox request.',
			emoji: '✨',
			category: 'Grok Edition'
		},
		{
			slug: 'blog/grok-faf-mcp-launch',
			title: 'grok-faf-mcp v1.0.0 - First MCP Server for Grok',
			date: 'November 18, 2025',
			timestamp: '2025-11-18',
			excerpt: 'First MCP server built specifically for Grok/xAI with URL-based access. Zero installation required. 17 MCP tools available instantly at grok-faf-mcp.vercel.app.',
			emoji: '🍊',
			category: 'Release'
		},
		{
			slug: 'blog/the-missing-format',
			title: 'The Missing Format',
			date: 'November 14, 2025',
			timestamp: '2025-11-14',
			excerpt: 'How .faf provides persistent context for Anthropic\'s agent architecture. Skills, Projects, MCP, and Subagents create sophisticated workflows—one element creates an opportunity: standardized persistent project context.',
			emoji: '🏗️',
			category: 'Technical Analysis'
		},
		{
			slug: 'blog/mcp-v3-standalone',
			title: 'claude-faf-mcp v3.0.4 - 100% Standalone Achievement',
			date: 'November 6, 2025',
			timestamp: '2025-11-06',
			excerpt: 'Zero CLI dependencies across all 50 MCP tools, delivering 16.2x performance improvement with championship-grade engineering.',
			emoji: '🏎️',
			category: 'Press Release'
		},
		{
			slug: 'blog/iana-registration',
			title: '.faf Officially Registered by IANA as application/vnd.faf+yaml',
			date: 'October 31, 2025',
			timestamp: '2025-10-31',
			excerpt: 'IANA (Internet Assigned Numbers Authority) officially registers .faf as application/vnd.faf+yaml - the first AI context format with official media type designation alongside PDF, JSON, and XML.',
			emoji: '🏛️',
			category: 'Press Release'
		},
		{
			slug: 'blog/faf-hits-10k',
			title: '.FAF: 10,500+ downloads: 5,800 CLI: 4,700 MCP - Persistent project context is Real',
			date: 'October 29, 2025',
			timestamp: '2025-10-29',
			excerpt: 'From desktop frustration to Anthropic approval - .FAF reaches 10,500+ downloads (5,800 CLI + 4,700 MCP) as the Foundational AI context format gains ecosystem traction.',
			emoji: '🏆',
			category: 'Milestone'
		},
		{
			slug: 'blog/chrome-extension-launch',
			title: 'FAF Chrome Extension: Instant AI Context',
			date: 'October 23, 2025',
			timestamp: '2025-10-23',
			excerpt: "One-click AI-readiness analysis for any dev environment. Download .txt reports instantly to your Downloads folder. Google-approved, privacy-first, works with any AI tool. Nine downloads at launch—but top-notch when you need it.",
			emoji: '⚡',
			category: 'Launch'
		},
		{
			slug: 'blog/mcp-registry-launch',
			title: 'claude-faf-mcp Published to Official MCP Registry',
			date: 'October 16, 2025',
			timestamp: '2025-10-16',
			excerpt: 'Project DNA ✨ for AI-Context, On-Demand - Now in the official MCP Registry with 33+ tools for universal AI context across Claude Desktop, Claude Code, VS Code, and ANY terminal/CLI.',
			emoji: '🏪',
			category: 'Launch'
		},
		{
			slug: 'blog/v3-launch',
			title: 'AI CLI/MCP About to Hit 10k Goes OPEN-SOURCE',
			date: 'October 9, 2025',
			timestamp: '2025-10-09',
			excerpt: 'FAF CLI v3.0.0 Championship Edition launches with TURBO-CAT discovery, C-Mirror sync, and universal AI compatibility. MIT licensed, free forever.',
			emoji: '🏁',
			category: 'Launch'
		},
		{
			slug: 'blog/when-claude-forgot-faf',
			title: 'When Claude Forgot FAF',
			date: 'October 5, 2025',
			timestamp: '2025-10-05',
			excerpt: 'The context quality crisis that led to Birth DNA and why generic names fail AI.',
			emoji: '🧬',
			category: 'Story'
		},
		{
			slug: '68-minutes',
			title: '68 Minutes: B&W to Technicolor',
			date: 'October 1, 2025',
			timestamp: '2025-10-01',
			excerpt: 'B&W-to-color TVs took ~20 years. We transformed our CLI in 68 minutes.',
			emoji: '📺🌈',
			category: 'Story'
		},
		{
			slug: 'press-release',
			title: '.faf - The JPEG for AI',
			date: 'September 24, 2025',
			timestamp: '2025-09-24',
			excerpt: 'Foundational AI-context Format - Universal, shareable AI context for any AI, human or team.',
			emoji: '📢',
			category: 'Press Release'
		}
	];
</script>

<svelte:head>
	<title>Blog | FAF - Stories & Press Releases</title>
	<meta name="description" content="Latest stories, press releases, and updates from FAF - The JPEG for AI">
</svelte:head>

<div class="back-nav">
	<a href="/" class="back-button">← Back to Home</a>
</div>

<article class="blog">
	<div class="container">
		<h1><span class="blog-text">Blog</span> <span class="ampersand">&</span> <span class="press-text">Press</span></h1>
		<div class="subtitle">Stories, press releases, and updates from the FAF team</div>

		<div class="posts-grid">
			{#each posts as post}
				<a href="/{post.slug}" class="post-card">
					<div class="post-emoji">{post.emoji}</div>
					<div class="post-category">{post.category}</div>
					<h2>{post.title}</h2>
					<p class="post-excerpt">{post.excerpt}</p>
					<div class="post-date">{post.date}</div>
				</a>
			{/each}
		</div>

		<div class="archive-note">
			<p>More stories coming soon...</p>
		</div>
	</div>
</article>

<style>
	.back-nav {
		padding: 1rem 2rem;
		background: var(--faf-white);
		border-bottom: 1px solid var(--faf-light-gray);
	}

	.back-button {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		color: var(--faf-dark);
		text-decoration: none;
		font-weight: 600;
		padding: 0.5rem 1rem;
		border-radius: 8px;
		transition: all 0.3s ease;
	}

	.back-button:hover {
		background: var(--faf-cream);
		color: var(--faf-orange);
		transform: translateX(-2px);
	}

	.blog {
		padding: 3rem 0;
		background: white;
		min-height: 80vh;
	}

	.container {
		max-width: 1000px;
		margin: 0 auto;
		padding: 0 2rem;
	}

	h1 {
		font-size: 2.5rem;
		margin-bottom: 0.5rem;
		color: var(--faf-black);
		font-weight: 900;
	}

	.blog-text {
		color: var(--faf-orange);
	}

	.ampersand {
		color: var(--faf-black);
	}

	.press-text {
		color: var(--faf-black);
	}

	.subtitle {
		font-size: 1.2rem;
		color: #666;
		margin-bottom: 3rem;
		font-weight: 500;
	}

	.posts-grid {
		display: grid;
		gap: 2rem;
		margin-bottom: 3rem;
	}

	.post-card {
		background: #f9f9f9;
		padding: 2.5rem;
		border-radius: 12px;
		border: 2px solid var(--faf-cream);
		text-decoration: none;
		color: inherit;
		transition: all 0.3s ease;
		display: block;
	}

	.post-card:hover {
		transform: translateY(-4px);
		box-shadow: 0 8px 24px rgba(255, 107, 53, 0.15);
		border-color: var(--faf-orange);
	}

	.post-emoji {
		font-size: 3rem;
		margin-bottom: 1rem;
	}

	.post-category {
		display: inline-block;
		color: white;
		padding: 0.25rem 0.75rem;
		border-radius: 20px;
		font-size: 0.875rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		margin-bottom: 1rem;
	}

	.post-card[href*="the-missing-format"] .post-category {
		background: #00bf63;
	}

	.post-card[href*="faf-hits-10k"] .post-category {
		background: linear-gradient(135deg, #FFD700 0%, #FFA500 100%);
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
		background: var(--faf-black);
	}

	.post-card h2 {
		font-size: 1.75rem;
		margin: 0 0 1rem;
		color: var(--faf-black);
		font-weight: 700;
	}

	.post-excerpt {
		color: #666;
		line-height: 1.6;
		margin: 0 0 1.5rem;
		font-size: 1.0625rem;
	}

	.post-date {
		color: #888;
		font-size: 0.9rem;
		font-style: italic;
	}

	.archive-note {
		text-align: center;
		padding: 2rem;
		color: #888;
		font-style: italic;
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
	}
</style>
