<script>
	let currentIndex = $state(0);

	const posts = [
		{ slug: '/blog/grok-skeptic-to-evangelist', title: 'Grok: Skeptic → Evangelist in One Session', emoji: '🍊', isNew: true },
		{ slug: '/blog/bun-sticky-zig-launch', title: 'bun-sticky-zig: Native FAF Scoring in Zig', emoji: '⚡', isNew: false },
		{ slug: '/blog/what-if-software-was-good', title: 'What If Software Was Good?', emoji: '🏆', isNew: false },
		{ slug: '/blog/xai-native-embedding', title: 'xAI Commits to Native .FAF for Grok', emoji: '🏆', isNew: false },
		{ slug: '/blog/grok-faf-mcp-launch', title: 'First MCP Server for Grok', emoji: '🍊', isNew: false },
		{ slug: '/blog/iana-registration', title: '.faf Officially Registered by IANA', emoji: '🏛️', isNew: false },
	];

	function prev() {
		currentIndex = currentIndex === 0 ? posts.length - 1 : currentIndex - 1;
	}

	function next() {
		currentIndex = currentIndex === posts.length - 1 ? 0 : currentIndex + 1;
	}

	$effect(() => {
		const post = posts[currentIndex];
	});
</script>

<div class="latest-story">
	<button class="nav-btn prev" onclick={prev} aria-label="Previous story">&lt;</button>

	<a href={posts[currentIndex].slug} class="story-link">
		<span class="latest-label">
			{#if posts[currentIndex].isNew}
				<span class="new-badge">NEW</span>
			{/if}
			<span class="counter">{currentIndex + 1}/{posts.length}</span>
		</span>
		<span class="latest-title">
			<span class="emoji">{posts[currentIndex].emoji}</span>
			{posts[currentIndex].title}
		</span>
	</a>

	<button class="nav-btn next" onclick={next} aria-label="Next story">&gt;</button>
</div>

<style>
	.latest-story {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
		padding: 0.6rem 1rem;
		background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%);
		color: white;
		font-size: 0.95rem;
		border-bottom: 1px solid rgba(255, 107, 53, 0.3);
	}

	.nav-btn {
		background: rgba(255, 255, 255, 0.1);
		border: 1px solid rgba(255, 255, 255, 0.3);
		color: rgba(255, 255, 255, 0.9);
		width: 30px;
		height: 30px;
		border-radius: 4px;
		cursor: pointer;
		font-size: 1.1rem;
		font-weight: 700;
		transition: all 0.2s ease;
		display: flex;
		align-items: center;
		justify-content: center;
		font-family: system-ui, sans-serif;
	}

	.nav-btn:hover {
		background: var(--faf-orange);
		border-color: var(--faf-orange);
		color: white;
	}

	.story-link {
		display: flex;
		align-items: center;
		gap: 1rem;
		padding: 0.4rem 1rem;
		text-decoration: none;
		color: white;
		border-radius: 4px;
		transition: all 0.2s ease;
		flex: 1;
		justify-content: center;
		max-width: 700px;
	}

	.story-link:hover {
		background: rgba(255, 107, 53, 0.15);
	}

	.latest-label {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		color: rgba(255, 255, 255, 0.5);
		font-weight: 500;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}

	.counter {
		font-family: var(--font-mono, monospace);
		font-size: 0.75rem;
	}

	.new-badge {
		background: var(--faf-orange);
		color: white;
		padding: 0.1rem 0.35rem;
		border-radius: 3px;
		font-size: 0.65rem;
		font-weight: 700;
		animation: pulse 2s ease-in-out infinite;
	}

	@keyframes pulse {
		0%, 100% { opacity: 1; }
		50% { opacity: 0.7; }
	}

	.latest-title {
		color: white;
		font-weight: 600;
		display: flex;
		align-items: center;
		gap: 0.5rem;
		font-size: 0.95rem;
	}

	.emoji {
		font-size: 1rem;
	}

	@media (max-width: 768px) {
		.latest-story {
			padding: 0.5rem 0.75rem;
			gap: 0.25rem;
		}

		.story-link {
			padding: 0.3rem 0.5rem;
			gap: 0.5rem;
		}

		.latest-title {
			font-size: 0.8rem;
		}

		.latest-label {
			display: none;
		}

		.nav-btn {
			width: 24px;
			height: 24px;
			font-size: 0.8rem;
		}
	}
</style>
