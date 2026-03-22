<script lang="ts">
	import { onMount } from 'svelte';
	let mounted = false;
	onMount(() => { mounted = true; });
</script>

<svelte:head>
	<title>It's Official — FAF is Awesome (x4) | FAF</title>
	<meta name="description" content="FAF has been accepted into 4 curated awesome lists: AI DevTools, MCP Servers, DevOps MCP, and Claude Skills. Like waiting for a London bus..." />
	<meta property="og:title" content="It's Official — FAF is Awesome (x4)" />
	<meta property="og:description" content="Accepted into 4 curated awesome lists. Like waiting for a London bus — then 4 turn up at once." />
	<meta property="og:type" content="article" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta property="og:image" content="https://faf.one/blog/its-official-hero.png" />
	<meta name="twitter:image" content="https://faf.one/blog/its-official-hero.png" />
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/blog">Blog</a> / It's Official
		</div>

		<h1>It's Official</h1>
		<p class="subtitle">FAF is Awesome. In 4 categories.</p>
		<div class="meta">
			<time datetime="2026-03-22">March 22, 2026</time>
			<span class="separator">•</span>
			<span class="category milestone">Milestone</span>
		</div>
	</header>

	<div class="hero-image">
		<img src="/blog/its-official-hero.png" alt="Developer at a London bus stop as four red double-decker buses arrive — AI DevTools, MCP Servers, DevOps, Skills" />
	</div>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				<strong>TL;DR:</strong> Being listed on a curated awesome list is like waiting for a London bus. You're stood there, glancing at your watch, wondering if it's ever coming. Then when you least expect it — 4 buses turn up at once.
			</p>
		</section>

		<section>
			<h2>The Four Lists</h2>

			<p>Each of these is community-curated, PR-reviewed, and merged by maintainers who said "yes, this belongs here." That's not marketing. That's peer validation.</p>

			<div class="list-card">
				<div class="list-emoji">🛠️</div>
				<div class="list-content">
					<h3>awesome-ai-devtools</h3>
					<p class="list-desc">The go-to directory for AI-powered developer tools. faf-cli is listed under <strong>Command-line Assistants</strong> — alongside the tools developers actually reach for daily.</p>
					<p class="list-meta">Maintained by <a href="https://github.com/jamesmurdza" target="_blank" rel="noopener">James Murdza</a></p>
					<a href="https://github.com/jamesmurdza/awesome-ai-devtools" target="_blank" rel="noopener" class="list-link">View the list ☑️</a>
				</div>
			</div>

			<div class="list-card">
				<div class="list-emoji">🔌</div>
				<div class="list-content">
					<h3>awesome-mcp-servers</h3>
					<p class="list-desc">The largest MCP server directory on GitHub. <strong>claude-faf-mcp</strong> and <strong>faf-mcp</strong> are both listed — two of the five FAF ecosystem servers powering Claude, Grok, and Gemini.</p>
					<p class="list-meta">Maintained by <a href="https://github.com/punkpeye" target="_blank" rel="noopener">punkpeye</a></p>
					<a href="https://github.com/punkpeye/awesome-mcp-servers" target="_blank" rel="noopener" class="list-link">View the list ☑️</a>
				</div>
			</div>

			<div class="list-card">
				<div class="list-emoji">🚀</div>
				<div class="list-content">
					<h3>awesome-devops-mcp-servers</h3>
					<p class="list-desc">MCP servers for the DevOps and infrastructure crowd. <strong>faf-mcp</strong> is listed as the universal MCP server that works across all AI platforms and IDEs — not just Claude.</p>
					<p class="list-meta">Maintained by <a href="https://github.com/rohitg00" target="_blank" rel="noopener">Rohit Ghumare</a></p>
					<a href="https://github.com/rohitg00/awesome-devops-mcp-servers" target="_blank" rel="noopener" class="list-link">View the list ☑️</a>
				</div>
			</div>

			<div class="list-card">
				<div class="list-emoji">⚡</div>
				<div class="list-content">
					<h3>antigravity-awesome-skills</h3>
					<p class="list-desc">Curated Claude Code skills that extend what Claude can do. <strong>faf-skills</strong> — 17 skills covering AI-context generation, testing, publishing, and MCP server creation — listed under Community Contributors.</p>
					<p class="list-meta">Maintained by <a href="https://github.com/sickn33" target="_blank" rel="noopener">sickn33</a></p>
					<a href="https://github.com/sickn33/antigravity-awesome-skills" target="_blank" rel="noopener" class="list-link">View the list ☑️</a>
				</div>
			</div>
		</section>

		<section>
			<h2>Why This Matters</h2>

			<p>Anyone can publish a package. Getting accepted into a curated list means someone else looked at your work, evaluated it, and decided it belongs alongside the best in the category.</p>

			<p>Four categories. Four different audiences. Four maintainers who independently said yes:</p>

			<ul>
				<li><strong>DevTools</strong> — developers building with AI</li>
				<li><strong>MCP Servers</strong> — the Claude/MCP ecosystem</li>
				<li><strong>DevOps</strong> — infrastructure and operations teams</li>
				<li><strong>Skills</strong> — Claude Code power users</li>
			</ul>

			<p>That's not a niche. That's a cross-section of the entire AI development landscape.</p>
		</section>

		<section>
			<h2>More Buses Due</h2>

			<p>Four more PRs are open and waiting on maintainers right now. Watch this space — FAF is growing, and the lists are catching up.</p>

			<p>If you maintain a curated list and want to add FAF, or you'd like to request a listing:</p>

			<ul>
				<li>Email: <a href="mailto:team@faf.one">team@faf.one</a></li>
				<li>X: <a href="https://x.com/wolfe_jam" target="_blank" rel="noopener">@wolfe_jam</a> — follow and DM</li>
			</ul>
		</section>

		<section>
			<h2>The Numbers</h2>

			<ul>
				<li><strong>4</strong> — Curated lists (merged)</li>
				<li><strong>4</strong> — More pending</li>
				<li><strong>36,000+</strong> — npm downloads across 16 packages</li>
				<li><strong>IANA registered</strong> — <code>application/vnd.faf+yaml</code></li>
				<li><strong>3 registries</strong> — npm, PyPI, crates.io</li>
			</ul>
		</section>

		<section class="share-section">
			<a href="https://twitter.com/intent/tweet?text=FAF%20is%20now%20listed%20on%204%20curated%20awesome%20lists%20%E2%80%94%20AI%20DevTools%2C%20MCP%20Servers%2C%20DevOps%2C%20and%20Claude%20Skills.%20Like%20waiting%20for%20a%20London%20bus...%20%F0%9F%9A%8C&url=https://faf.one/blog/its-official" target="_blank" rel="noopener" class="share-btn">Post on X</a>
		</section>

		<section class="footer-note">
			<p>Built with .faf ☑️ Four buses. Same stop. 🏎️</p>
		</section>
	</article>
</div>

<style>
	:global(body) {
		background: #FEFCF8;
	}

	.hero-image {
		margin: -1rem -1rem 2rem -1rem;
		border-radius: 12px;
		overflow: hidden;
	}
	.hero-image img {
		width: 100%;
		height: auto;
		display: block;
	}

	.blog-post {
		max-width: 800px;
		margin: 0 auto;
		padding: 2rem 1rem;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
		line-height: 1.7;
		color: #333;
	}

	.post-header {
		margin-bottom: 3rem;
		border-bottom: 3px solid #FFD700;
		padding-bottom: 2rem;
	}

	.breadcrumb {
		font-size: 0.9rem;
		margin-bottom: 1rem;
		color: #666;
	}

	.breadcrumb a {
		color: #FF6B35;
		text-decoration: none;
	}

	.breadcrumb a:hover {
		text-decoration: underline;
	}

	h1 {
		font-size: 2.5rem;
		margin: 0.5rem 0;
		color: #000;
		line-height: 1.2;
	}

	.subtitle {
		font-size: 1.3rem;
		color: #666;
		margin: 0.5rem 0 1rem 0;
	}

	.meta {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		font-size: 0.9rem;
		color: #666;
	}

	.separator {
		color: #ccc;
	}

	.category {
		padding: 0.25rem 0.75rem;
		border-radius: 4px;
		font-size: 0.85rem;
		font-weight: 600;
	}

	.category.milestone {
		background: #FFD700;
		color: #000;
	}

	.post-content {
		font-size: 1.1rem;
	}

	.lead {
		font-size: 1.2rem;
		line-height: 1.7;
		margin-bottom: 2rem;
		padding: 1.5rem;
		background: #fff5f0;
		border-radius: 8px;
		border-left: 4px solid #FFD700;
	}

	h2 {
		font-size: 1.8rem;
		margin: 3rem 0 1.5rem 0;
		color: #000;
		border-bottom: 1px solid #eee;
		padding-bottom: 0.5rem;
	}

	h3 {
		font-size: 1.3rem;
		margin: 0 0 0.5rem 0;
		color: #000;
	}

	p {
		margin-bottom: 1.25rem;
	}

	ul, ol {
		margin: 1rem 0 1.5rem 1.5rem;
	}

	li {
		margin-bottom: 0.5rem;
	}

	code {
		font-family: 'SF Mono', 'Fira Code', Consolas, monospace;
		background: #f0f0f0;
		padding: 0.2rem 0.4rem;
		border-radius: 4px;
		font-size: 0.9em;
	}

	a {
		color: #FF6B35;
	}

	a:hover {
		text-decoration: none;
	}

	.list-card {
		display: flex;
		gap: 1.25rem;
		padding: 1.5rem;
		background: #fff;
		border: 2px solid #f0f0f0;
		border-left: 4px solid #FFD700;
		border-radius: 8px;
		margin: 1.5rem 0;
		transition: border-color 0.2s;
	}

	.list-card:hover {
		border-color: #FFD700;
	}

	.list-emoji {
		font-size: 2rem;
		line-height: 1;
		flex-shrink: 0;
	}

	.list-content {
		flex: 1;
	}

	.list-content h3 {
		font-family: 'SF Mono', 'Fira Code', Consolas, monospace;
		font-size: 1.1rem;
		color: #000;
		margin: 0 0 0.5rem 0;
	}

	.list-desc {
		font-size: 1rem;
		color: #444;
		margin-bottom: 0.5rem;
	}

	.list-meta {
		font-size: 0.85rem;
		color: #888;
		margin-bottom: 0.75rem;
	}

	.list-link {
		display: inline-block;
		font-size: 0.9rem;
		font-weight: 600;
		color: #FF6B35;
		text-decoration: none;
	}

	.list-link:hover {
		text-decoration: underline;
	}

	.share-section {
		margin-top: 3rem;
		text-align: center;
	}

	.share-btn {
		display: inline-flex;
		align-items: center;
		padding: 0.6rem 1.25rem;
		border-radius: 6px;
		font-size: 0.9rem;
		font-weight: 600;
		text-decoration: none;
		background: #000;
		color: #fff;
		transition: opacity 0.2s;
	}

	.share-btn:hover {
		opacity: 0.85;
		text-decoration: none;
		color: #fff;
	}

	.footer-note {
		margin-top: 4rem;
		padding-top: 2rem;
		border-top: 1px solid #eee;
		font-size: 0.95rem;
		color: #666;
		text-align: center;
	}

	@media (max-width: 768px) {
		h1 {
			font-size: 2rem;
		}

		.list-card {
			flex-direction: column;
			gap: 0.75rem;
		}

		.list-emoji {
			font-size: 1.5rem;
		}

		.blog-post {
			padding: 1rem;
		}
	}
</style>
