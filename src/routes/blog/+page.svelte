<script>
	const posts = [
		{
			slug: 'blog/recovered-in-translation',
			title: 'Recovered in Translation',
			date: 'February 28, 2026',
			timestamp: '2026-02-28',
			excerpt: 'ETH Zurich\'s second paper confirms it: semantic drift and context loss corrupt everything they touch. Benchmarks. AI context. Two diagnoses, one prescription. FAF defines. AI interprets.',
			emoji: '📄',
			category: 'Research'
		},
		{
			slug: 'blog/thirty-thousand',
			title: '30,000 Downloads',
			date: 'February 27, 2026',
			timestamp: '2026-02-27',
			excerpt: '9 npm packages. 3 registries. Zero marketing budget. From 20k to 30k in 2026. The FAF ecosystem crosses 30,000 downloads.',
			emoji: '📈',
			category: 'Milestone',
			theme: 'dark'
		},
		{
			slug: 'blog/mcp-interop-edition',
			title: 'MCP Interop Edition',
			date: 'February 27, 2026',
			timestamp: '2026-02-27',
			excerpt: 'claude-faf-mcp v4.5.0: 61 MCP tools. Define once in project.faf, generate CLAUDE.md, AGENTS.md, .cursorrules, and GEMINI.md. 5 new tools, 7 bundled parsers, 351 tests. Zero CLI dependency.',
			emoji: '🔗',
			category: 'MCP Release'
		},
		{
			slug: 'blog/beyond-the-bloat',
			title: 'Beyond the Bloat',
			date: 'February 24, 2026',
			timestamp: '2026-02-24',
			excerpt: 'ArXiv proves prose context files hurt AI performance (-3%, +20% cost). FAF provides the structured fix. Two complementary papers, one roadmap. FAF defines. AI interprets.',
			emoji: '📄',
			category: 'Research'
		},
		{
			slug: 'blog/agents-md-edition',
			title: 'The AGENTS.md Edition',
			date: 'February 24, 2026',
			timestamp: '2026-02-24',
			excerpt: 'One project.faf, every format. Full AGENTS.md and .cursorrules interop. Define once, sync everywhere with faf bi-sync --all. 87 new championship tests. 3 cross-platform bugs caught before you ever would.',
			emoji: '🔗',
			category: 'Interop'
		},
		{
			slug: 'blog/why-agents-md-needs-foundation',
			title: 'Why AGENTS.md Needs a Foundation Layer',
			date: 'February 23, 2026',
			timestamp: '2026-02-23',
			excerpt: '.faf defines. .md instructs. AI interprets. Three layers, three jobs, no overlap. The debate isn\'t which prose format wins — it\'s what defines the project underneath.',
			emoji: '🏗️',
			category: 'Foundation'
		},
		{
			slug: 'blog/enhanced-git-support',
			title: 'Enhanced Git Support Edition',
			date: 'February 18, 2026',
			timestamp: '2026-02-18',
			excerpt: 'Complete rewrite of faf git output. Accurate language detection across 17 languages. Compact, PR-ready .faf files (~35 lines vs 130). The version that scored a Hundred Famous Repos.',
			emoji: '🎯',
			category: 'Release'
		},
		{
			slug: 'blog/wjttc-self-hosting',
			title: 'Championship Testing for Everyone',
			date: 'February 17, 2026',
			timestamp: '2026-02-17',
			excerpt: 'WJTTC v1.3.0 adds wjttc init—one command sets up championship-grade testing infrastructure in any project. Service to the army of free devs.',
			emoji: '🏎️',
			category: 'WJTTC Ecosystem'
		},
		{
			slug: 'blog/readme-evolution',
			title: '"README evolution for AI era" -- we finally realized what Gemini meant!',
			date: 'February 9, 2026',
			timestamp: '2026-02-09',
			excerpt: 'Two new features make AI-readiness instant: 6Ws Builder integration and automatic README extraction. Zero manual work required.',
			emoji: '🚀',
			category: 'Release'
		},
		{
			slug: 'blog/context-quality',
			title: 'Context Quality Edition',
			date: 'February 8, 2026',
			timestamp: '2026-02-08',
			excerpt: 'Slot-ignore mechanism fully documented. Like .gitignore for files, slot-ignore for context slots. The perfect way to handle app types. Score improvement: 74% → 100%.',
			emoji: '🎯',
			category: 'Release'
		},
		{
			slug: 'blog/voice-api-edition',
			title: 'Voice API Edition: Save Our Souls 👻',
			date: 'February 3, 2026',
			timestamp: '2026-02-03',
			excerpt: 'The answer is 4.2.0 = 42. Eternal voice memory for xAI Grok. One command fixes voice drift forever. 91% token reclaim. Zero re-explaining. For Elon Musk and the Grok team.',
			emoji: '👻',
			category: 'xAI Edition'
		},
		{
			slug: 'blog/boris-flow',
			title: 'BORIS-FLOW: How One Engineer\'s Claude Code Setup Became a Testing Standard',
			date: 'February 3, 2026',
			timestamp: '2026-02-03',
			excerpt: '12 integration tests modeled on Boris Cherny\'s Claude Code workflow. Updated Feb 3: Now integrated with WJTTC certification workflow and faf-cli docs. When to run, how to validate, pre-certification best practices.',
			emoji: '🏎️',
			category: 'Engineering'
		},
		{
			slug: 'blog/wjttc-taf-aware',
			title: 'WJTTC TAF-Aware Edition: Tier 9 Receipt Validation',
			date: 'February 3, 2026',
			timestamp: '2026-02-03',
			excerpt: 'WJTTC v1.2.0 adds Tier 9: TAF Receipt Validation. Three checks validate .taf files. Receipts aren\'t scored - they\'re proof. 52 tests across 9 tiers.',
			emoji: '🏎️',
			category: 'WJTTC Ecosystem'
		},
		{
			slug: 'blog/wjttc-faf-aware',
			title: 'WJTTC Goes FAF-Aware: Testing the Tester',
			date: 'February 2, 2026',
			timestamp: '2026-02-02',
			excerpt: 'The McLaren standard gets smarter. WJTTC now validates project.faf during MCP certification. Tested itself. Earned 100% 🏆. Enterprise capabilities on the FAF Foundation.',
			emoji: '🍊',
			category: 'WJTTC Ecosystem'
		},
		{
			slug: 'blog/antigravity-edition',
			title: 'AntiGravity Edition: One project.faf, Every AI, Zero Drift',
			date: 'January 25, 2026',
			timestamp: '2026-01-25',
			excerpt: 'Part 2 of the Gemini story. FAF v4.0 adds full Gemini CLI and Antigravity IDE support. One source of truth. Three ecosystems. Zero context drift.',
			emoji: '🚀',
			category: 'IDE Integration'
		},
		{
			slug: 'blog/v4-launch',
			title: 'FAF v4.0: The Format That Became a Standard',
			date: 'January 24, 2026',
			timestamp: '2026-01-24',
			excerpt: 'Foundation Layer release. IANA registered, Anthropic approved, 21,000+ downloads. Grok: "Game-changer for eternal AI context" (9.5/10). The tool became the standard.',
			emoji: '🏛️',
			category: 'Release'
		},
		{
			slug: 'blog/daaft',
			title: 'The DAAFT Approach to Context',
			date: 'January 24, 2026',
			timestamp: '2026-01-24',
			excerpt: 'Why your AI assistant forgets you every morning. 91% of tokens wasted on rediscovery. The DAAFT cycle: Discover, Assume, Ask, Forget, Time+Tokens LOST.',
			emoji: '🔄',
			category: 'Foundation'
		},
		{
			slug: 'blog/grok-voice-case-study',
			title: 'How MCPaaS Gave Grok Eternal Voice Memory',
			date: 'January 20, 2026',
			timestamp: '2026-01-20',
			excerpt: 'Case study: Building FAF-Voice with xAI Grok. Browser-to-AI voice with zero drift, zero re-explain. MCPaaS delivered persistent context across every session.',
			emoji: '🎙️',
			category: 'Case Study'
		},
		{
			slug: 'blog/mcpaas-launch',
			title: 'MCPaaS: The Endpoint for Context',
			date: 'January 20, 2026',
			timestamp: '2026-01-20',
			excerpt: 'Serverless AI context delivery. One endpoint. Any AI. Eternal memory. Built on Cloudflare Workers with a 2.7KB Zig-WASM engine at 300+ global edge locations.',
			emoji: '🌐',
			category: 'Launch'
		},
		{
			slug: 'blog/context-intelligence',
			title: 'Context Intelligence Edition',
			date: 'January 18, 2026',
			timestamp: '2026-01-18',
			excerpt: 'Bi-sync got smart. Now detects custom CLAUDE.md content and preserves it - tables, code blocks, custom sections stay intact.',
			emoji: '🧠',
			category: 'Enhancement'
		},
		{
			slug: 'blog/grok-faf-mcp',
			title: 'grok-faf-mcp: First MCP for Grok',
			date: 'January 15, 2026',
			timestamp: '2026-01-15',
			excerpt: 'First MCP for xAI Grok. URL-accessible. FAST AF Edition. Dedicated to @elonmusk and the #1 model on Earth.',
			emoji: '🍊',
			category: 'First'
		},
		{
			slug: 'blog/zenodo-paper',
			title: 'FAF Whitepaper Published on CERN/Zenodo',
			date: 'January 14, 2026',
			timestamp: '2026-01-14',
			excerpt: 'Peer-citable academic paper published on CERN\'s Zenodo. DOI: 10.5281/zenodo.18251362. Repository used by NASA, NIH, and major universities.',
			emoji: '📄',
			category: 'Research'
		},
		{
			slug: 'blog/faf-hits-20k',
			title: 'FAF Hits 20,000 Downloads',
			date: 'January 14, 2026',
			timestamp: '2026-01-14',
			excerpt: '20,342 verified npm downloads across faf-cli, claude-faf-mcp, faf-mcp, and grok-faf-mcp. Real adoption, verified numbers.',
			emoji: '📈',
			category: 'Milestone'
		},
		{
			slug: 'blog/google-gemini-edition',
			title: 'Google Gemini Edition: One .faf File, Every AI Platform',
			date: 'January 13, 2026',
			timestamp: '2026-01-13',
			excerpt: 'Full interoperability with the Google Gemini ecosystem. Import from GEMINI.md, export to Conductor format, sync with Antigravity IDE. Universal AI context portability.',
			emoji: '🔷',
			category: 'Interop'
		},
		{
			slug: 'blog/42-42',
			title: '42|42',
			date: 'December 31, 2025',
			timestamp: '2025-12-31',
			excerpt: '30 years in the mind. 84 days to MIME-Standard. YAML took 22 years. JSON took 7. FAF took 84 days. The origin story of an IANA-registered standard.',
			emoji: '🏆',
			category: 'Origin Story'
		},
		{
			slug: 'blog/grok-skeptic-to-evangelist',
			title: 'I Showed Grok My .faf Format. It Went From Skeptic to Evangelist in One Session.',
			date: 'December 30, 2025',
			timestamp: '2025-12-30',
			excerpt: 'Uploaded a 40-line .faf file to Grok. Built a production GitHub code reviewer in one session. Zero re-explaining. Zero drift. Grok\'s words: "It felt like working with a partner who\'d been on the project for months."',
			emoji: '🍊',
			category: 'Case Study'
		},
		{
			slug: 'blog/december-2025-ecosystem',
			title: 'We Bet on the Right Stack',
			date: 'December 28, 2025',
			timestamp: '2025-12-28',
			excerpt: 'Three major announcements in December 2025: Anthropic acquires Bun, MCP joins Linux Foundation, Google launches MCP servers. FAF was already positioned in each one.',
			emoji: '🎯',
			category: 'Ecosystem'
		},
		{
			slug: 'blog/v3-3-0-plugin-launch',
			title: 'FAF CLI v3.3.0: Claude Code Plugin Support',
			date: 'December 28, 2025',
			timestamp: '2025-12-28',
			excerpt: 'Full Claude Code plugin support, SSH bug workaround, and automatic discovery in the 8,500+ plugin registry. 20k+ ecosystem downloads.',
			emoji: '🔌',
			category: 'Release'
		},
		{
			slug: 'blog/bun-sticky-zig-launch',
			title: 'bun-sticky-zig: Native FAF Scoring in Bun\'s Language',
			date: 'December 23, 2025',
			timestamp: '2025-12-23',
			excerpt: '77KB binary. Zero runtime dependencies. Pure Zig. FAF scoring built in Bun\'s own language with 136 championship-grade tests.',
			emoji: '⚡',
			category: 'Release',
			theme: 'dark'
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
				<a href="/{post.slug}" class="post-card" class:dark-card={post.theme === 'dark'}>
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

	.dark-card {
		background: #0a0a0a;
		border-color: #333;
		color: #e5e5e5;
	}

	.dark-card h2 {
		color: #fff;
	}

	.dark-card .post-excerpt {
		color: #999;
	}

	.dark-card .post-date {
		color: #777;
	}

	.dark-card:hover {
		box-shadow: 0 8px 24px rgba(255, 107, 53, 0.25);
		border-color: var(--faf-orange);
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
