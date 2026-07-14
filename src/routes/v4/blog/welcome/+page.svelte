<script lang="ts">
	import { onMount } from 'svelte';

	let mounted = false;

	onMount(() => {
		mounted = true;
	});
</script>

<svelte:head>
	<title>Welcome to the FAF Foundation</title>
	<meta name="description" content="The Foundation for better software. One repo at a time." />
	<meta property="og:title" content="Welcome to the FAF Foundation" />
	<meta property="og:description" content="The Foundation for better software. One repo at a time." />
	<meta property="og:type" content="article" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="blog-post">
	<header class="post-header">
		<div class="breadcrumb">
			<a href="/">Home</a> / <a href="/v4">Foundation</a> / <a href="/v4/blog">Blog</a> / Welcome
		</div>
		<h1>Welcome to the FAF Foundation</h1>
		<p class="subtitle">The Foundation for better software. One repo at a time.</p>
		<div class="meta">
			<time datetime="2025-11-25">November 25, 2025</time>
			<span class="separator">•</span>
			<span class="category">Foundation</span>
		</div>
	</header>

	<article class="post-content">
		<section class="intro">
			<p class="lead">
				The FAF Foundation exists to make software better.
			</p>
			<p>
				Not through manifestos. Not through frameworks that disappear in 18 months. Not through certification programs that measure everything except quality.
			</p>
			<p class="lead">
				Through <strong>infrastructure.</strong>
			</p>
		</section>

		<section class="problem">
			<h2>The Problem We Solve</h2>
			<p>
				Every software project has DNA - the core knowledge, architectural decisions, patterns, and context that make it work.
			</p>
			<p>
				Right now, that DNA lives in:
			</p>
			<ul>
				<li>Scattered documentation (mostly out of date)</li>
				<li>Tribal knowledge (leaves when people leave)</li>
				<li>Code comments (if you're lucky)</li>
				<li>Developer brains (fragile, unreliable storage)</li>
			</ul>
			<p>
				When developers leave, knowledge disappears. When new people join, they spend months trying to understand what the previous team built. When AI tries to help, it hallucinates because it lacks accurate context.
			</p>
			<p class="highlight">
				<strong>The cost: $2 trillion annually in lost productivity, failed projects, and technical debt.</strong>
			</p>
		</section>

		<section class="solution">
			<h2>Our Solution: Persistent Project Context</h2>
			<p>
				The FAF (Foundational AI-context Format) is an IANA-registered standard for project DNA.
			</p>
			<p>
				Like .json standardized data interchange and .pdf standardized documents, .faf standardizes AI context.
			</p>
			<div class="feature-grid">
				<div class="feature">
					<h3>☑️ Persistent</h3>
					<p>Project DNA lives in a standard format that survives team changes, framework migrations, and decades of evolution.</p>
				</div>
				<div class="feature">
					<h3>☑️ Synchronized</h3>
					<p>Bi-directional sync between CLAUDE.md and project.faf keeps context fresh with &lt;10ms performance and zero data loss.</p>
				</div>
				<div class="feature">
					<h3>☑️ Validated</h3>
					<p>AI-readiness scoring (0-100%) shows exactly how understandable your codebase is to any AI.</p>
				</div>
				<div class="feature">
					<h3>☑️ Universal</h3>
					<p>Works with Claude, Grok, ChatGPT, Gemini, Cursor, WARP, or any AI tool - model-portable by design.</p>
				</div>
			</div>
		</section>

		<section class="foundation">
			<h2>What the Foundation Provides</h2>
			<p>
				The FAF Foundation is a standards body, like W3C for the web or IETF for internet protocols.
			</p>
			<p>
				We maintain:
			</p>
			<ul>
				<li><strong>The FAF Specification</strong> - Official format standard registered with IANA</li>
				<li><strong>Reference Implementations</strong> - Open-source tools (CLI, MCP servers, SDKs)</li>
				<li><strong>Validation Tools</strong> - AI-readiness scoring and compliance testing</li>
				<li><strong>Educational Resources</strong> - Documentation, guides, and research</li>
				<li><strong>Ecosystem Support</strong> - Integration patterns for frameworks and AI platforms</li>
			</ul>
			<p>
				Annual membership supports this infrastructure and grants access to:
			</p>
			<ul>
				<li>Foundation tools and resources</li>
				<li>Priority support channels</li>
				<li>Educational content and research</li>
				<li>Ecosystem development funding</li>
			</ul>
		</section>

		<section class="philosophy">
			<h2>The Gold Code Philosophy</h2>
			<p>
				We believe software should get <em>better</em> over time, not worse.
			</p>
			<p class="lead">
				<strong>Gold code isn't just bug-free. Gold code is self-improving.</strong>
			</p>
			<p>
				When you add FAF to a project:
			</p>
			<ul>
				<li>Context becomes living documentation</li>
				<li>AI collaboration becomes reliable</li>
				<li>Knowledge persists across team changes</li>
				<li>Quality compounds over time</li>
			</ul>
			<p>
				One commit at a time, one repo at a time, the codebase improves.
			</p>
			<p class="highlight">
				<strong>This is infrastructure for software that heals itself.</strong>
			</p>
		</section>

		<section class="values">
			<h2>Our Values</h2>
			<div class="values-list">
				<div class="value">
					<h3>🏎️ Speed</h3>
					<p>F1-inspired velocity without compromise on quality. Championship-grade engineering at production pace.</p>
				</div>
				<div class="value">
					<h3>🎯 Precision</h3>
					<p>Strict standards, rigorous testing, zero-error contracts. Infrastructure you can trust.</p>
				</div>
				<div class="value">
					<h3>🌍 Universality</h3>
					<p>Works everywhere, for everyone. No vendor lock-in, no platform restrictions.</p>
				</div>
				<div class="value">
					<h3>🔓 Openness</h3>
					<p>Open standards, open source, open access. The specification belongs to everyone.</p>
				</div>
			</div>
		</section>

		<section class="roadmap">
			<h2>What We're Building</h2>
			<p>
				The Foundation's current focus areas:
			</p>
			<ul>
				<li><strong>Ecosystem Expansion</strong> - SDKs for Python, Rust, Go, and more languages</li>
				<li><strong>Framework Integration</strong> - Native FAF support in popular development tools</li>
				<li><strong>AI Platform Adoption</strong> - Working with Claude, Grok, ChatGPT, and Gemini for native .faf recognition</li>
				<li><strong>Educational Content</strong> - Research, guides, and documentation for better software</li>
				<li><strong>Validation Standards</strong> - AI-readiness benchmarks and compliance certification</li>
			</ul>
		</section>

		<section class="join">
			<h2>Join the Foundation</h2>
			<p>
				We're building infrastructure for the next 40 years of software development.
			</p>
			<p>
				If you believe software should get better over time, if you're tired of knowledge disappearing when developers leave, if you want AI collaboration that actually works - the Foundation is for you.
			</p>
			<p class="lead">
				<strong>Better code. Better teams. Better world.</strong>
			</p>
			<p>
				One repo at a time.
			</p>
		</section>

		<section class="cta">
			<h2>Get Started</h2>
			<p>
				Learn more: <a href="https://v4.faf.one" class="link-primary">foundation.faf.one</a>
			</p>
			<p>
				Tools: <a href="https://faf.one" class="link-primary">faf.one</a>
			</p>
			<p class="signature">
				🏛️ The FAF Foundation
			</p>
		</section>
	</article>
</div>

<style>
	.blog-post {
		max-width: 48rem;
		margin: 0 auto;
		padding: 2rem 1rem;
		color: var(--faf-dark);
		background: var(--faf-cream);
	}

	.post-header {
		margin-bottom: 3rem;
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
		line-height: 1.2;
	}

	.subtitle {
		font-size: 1.25rem;
		color: var(--faf-dark);
		margin: 0 0 1rem 0;
		opacity: 0.8;
	}

	.meta {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		font-size: 0.875rem;
		color: var(--faf-gray);
	}

	.separator {
		color: var(--faf-light-gray);
	}

	.category {
		color: var(--faf-green);
		font-weight: 600;
	}

	.post-content {
		line-height: 1.8;
	}

	.post-content section {
		margin-bottom: 3rem;
	}

	.post-content h2 {
		font-size: 1.75rem;
		font-weight: 700;
		margin: 2rem 0 1rem 0;
		color: var(--faf-green);
	}

	.post-content h3 {
		font-size: 1.25rem;
		font-weight: 600;
		margin: 1rem 0 0.5rem 0;
		color: var(--faf-dark);
	}

	.post-content p {
		margin-bottom: 1rem;
	}

	.lead {
		font-size: 1.25rem;
		font-weight: 500;
		line-height: 1.6;
		margin-bottom: 1.5rem;
	}

	.highlight {
		background: rgba(0, 191, 99, 0.1);
		border-left: 4px solid var(--faf-green);
		padding: 1rem 1.5rem;
		margin: 1.5rem 0;
	}

	.feature-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 1.5rem;
		margin: 2rem 0;
	}

	.feature {
		background: var(--faf-surface);
		border: 2px solid var(--faf-light-gray);
		border-radius: 8px;
		padding: 1.5rem;
	}

	.feature h3 {
		margin-top: 0;
		color: var(--faf-dark);
	}

	.values-list {
		display: grid;
		gap: 1.5rem;
		margin: 2rem 0;
	}

	.value h3 {
		margin-top: 0;
	}

	ul {
		margin: 1rem 0;
		padding-left: 1.5rem;
	}

	li {
		margin-bottom: 0.5rem;
	}

	.link-primary {
		color: var(--faf-green);
		text-decoration: none;
		font-weight: 600;
	}

	.link-primary:hover {
		text-decoration: underline;
	}

	.signature {
		font-size: 0.875rem;
		color: var(--faf-gray);
		margin-top: 2rem;
	}

	.cta {
		background: rgba(0, 191, 99, 0.05);
		border: 2px solid rgba(0, 191, 99, 0.2);
		border-radius: 8px;
		padding: 2rem;
		text-align: center;
		margin-top: 3rem;
	}

	.cta h2 {
		color: var(--faf-dark);
		margin-top: 0;
	}

	@media (max-width: 640px) {
		h1 {
			font-size: 2rem;
		}

		.post-content h2 {
			font-size: 1.5rem;
		}

		.lead {
			font-size: 1.125rem;
		}

		.feature-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
