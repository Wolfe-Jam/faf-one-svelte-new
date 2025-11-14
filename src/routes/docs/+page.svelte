<script>
	import { marked } from 'marked';
	import { onMount } from 'svelte';

	// Data from server
	let { data } = $props();

	let activeSection = $state('quickstart');

	// Configure marked for safe rendering
	marked.setOptions({
		gfm: true,
		breaks: true
	});

	function scrollToSection(id) {
		activeSection = id;
		document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
	}
</script>

<svelte:head>
	<title>FAF MCP Documentation</title>
	<meta
		name="description"
		content="Complete documentation for claude-faf-mcp - IANA-registered AI context format"
	/>
</svelte:head>

<div class="back-nav">
	<a href="/" class="back-button">← Back to Home</a>
</div>

<div class="docs-layout">
	<aside class="docs-sidebar">
		<div class="sidebar-header">
			<h3>MCP Docs</h3>
			<span class="version">v3.0.5</span>
		</div>

		<nav class="sidebar-nav">
			{#each data.docs as doc}
				<button
					class="nav-item"
					class:active={activeSection === doc.id}
					onclick={() => scrollToSection(doc.id)}
				>
					{doc.title}
				</button>
			{/each}
		</nav>

		<div class="sidebar-footer">
			<p class="source-note">
				📖 Docs from
				<a
					href="https://github.com/Wolfe-Jam/claude-faf-mcp"
					target="_blank"
					rel="noopener noreferrer"
				>
					GitHub
				</a>
			</p>
			<p class="update-time">Updated: {new Date(data.lastUpdated).toLocaleString()}</p>
		</div>
	</aside>

	<main class="docs-content">
		{#if data.error}
			<div class="error-message">
				<h2>Error Loading Documentation</h2>
				<p>{data.error}</p>
				<a href="https://github.com/Wolfe-Jam/claude-faf-mcp/blob/main/docs" target="_blank">
					View docs on GitHub →
				</a>
			</div>
		{:else}
			{#each data.docs as doc}
				<section id={doc.id} class="doc-section">
					{@html marked(doc.content)}
				</section>
			{/each}
		{/if}
	</main>
</div>

<style>
	.back-nav {
		padding: 1rem 2rem;
		background: #0a0a0a;
	}

	.back-button {
		color: #ff6b35;
		text-decoration: none;
		font-weight: 500;
		transition: opacity 0.2s;
	}

	.back-button:hover {
		opacity: 0.8;
	}

	.docs-layout {
		display: grid;
		grid-template-columns: 250px 1fr;
		min-height: calc(100vh - 60px);
		background: #0a0a0a;
		color: #f5f5dc;
	}

	.docs-sidebar {
		position: sticky;
		top: 0;
		height: 100vh;
		background: #111;
		padding: 2rem 1rem;
		border-right: 1px solid #333;
		display: flex;
		flex-direction: column;
	}

	.sidebar-header {
		margin-bottom: 2rem;
	}

	.sidebar-header h3 {
		margin: 0 0 0.5rem 0;
		color: #ff6b35;
		font-size: 1.25rem;
	}

	.version {
		color: #888;
		font-size: 0.875rem;
	}

	.sidebar-nav {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		flex: 1;
	}

	.nav-item {
		background: none;
		border: none;
		color: #f5f5dc;
		padding: 0.75rem 1rem;
		text-align: left;
		cursor: pointer;
		border-radius: 6px;
		transition: all 0.2s;
		font-size: 0.95rem;
	}

	.nav-item:hover {
		background: rgba(255, 107, 53, 0.1);
	}

	.nav-item.active {
		background: rgba(255, 107, 53, 0.2);
		color: #ff6b35;
		font-weight: 500;
	}

	.sidebar-footer {
		margin-top: auto;
		padding-top: 1rem;
		border-top: 1px solid #333;
		font-size: 0.75rem;
		color: #888;
	}

	.source-note {
		margin: 0 0 0.5rem 0;
	}

	.source-note a {
		color: #ff6b35;
		text-decoration: none;
	}

	.update-time {
		margin: 0;
		font-size: 0.7rem;
	}

	.docs-content {
		max-width: 900px;
		padding: 3rem;
		overflow-y: auto;
	}

	.doc-section {
		margin-bottom: 4rem;
	}

	/* Markdown styling */
	.docs-content :global(h1) {
		color: #ff6b35;
		font-size: 2rem;
		margin: 2rem 0 1rem 0;
		border-bottom: 2px solid #333;
		padding-bottom: 0.5rem;
	}

	.docs-content :global(h2) {
		color: #ff8c5a;
		font-size: 1.5rem;
		margin: 1.5rem 0 1rem 0;
	}

	.docs-content :global(h3) {
		color: #ffa86e;
		font-size: 1.25rem;
		margin: 1.25rem 0 0.75rem 0;
	}

	.docs-content :global(p) {
		line-height: 1.7;
		margin: 1rem 0;
	}

	.docs-content :global(a) {
		color: #ff6b35;
		text-decoration: none;
	}

	.docs-content :global(a:hover) {
		text-decoration: underline;
	}

	.docs-content :global(code) {
		background: #1a1a1a;
		padding: 0.2rem 0.4rem;
		border-radius: 3px;
		font-family: 'Courier New', monospace;
		font-size: 0.9em;
		color: #ff8c5a;
	}

	.docs-content :global(pre) {
		background: #1a1a1a;
		padding: 1rem;
		border-radius: 6px;
		overflow-x: auto;
		border-left: 3px solid #ff6b35;
	}

	.docs-content :global(pre code) {
		background: none;
		padding: 0;
		color: #f5f5dc;
	}

	.docs-content :global(ul),
	.docs-content :global(ol) {
		margin: 1rem 0;
		padding-left: 2rem;
	}

	.docs-content :global(li) {
		margin: 0.5rem 0;
		line-height: 1.6;
	}

	.docs-content :global(table) {
		width: 100%;
		border-collapse: collapse;
		margin: 1.5rem 0;
	}

	.docs-content :global(th),
	.docs-content :global(td) {
		border: 1px solid #333;
		padding: 0.75rem;
		text-align: left;
	}

	.docs-content :global(th) {
		background: #1a1a1a;
		color: #ff6b35;
		font-weight: 600;
	}

	.docs-content :global(blockquote) {
		border-left: 4px solid #ff6b35;
		margin: 1.5rem 0;
		padding: 1rem 1.5rem;
		background: #1a1a1a;
	}

	.error-message {
		padding: 2rem;
		background: #1a1a1a;
		border-radius: 8px;
		border-left: 4px solid #ff6b35;
	}

	.error-message h2 {
		color: #ff6b35;
		margin-top: 0;
	}

	.error-message a {
		color: #ff6b35;
		text-decoration: none;
	}

	@media (max-width: 768px) {
		.docs-layout {
			grid-template-columns: 1fr;
		}

		.docs-sidebar {
			position: relative;
			height: auto;
			border-right: none;
			border-bottom: 1px solid #333;
		}

		.docs-content {
			padding: 1.5rem;
		}
	}
</style>
