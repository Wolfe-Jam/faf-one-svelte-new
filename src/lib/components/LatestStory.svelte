<script>
	const latestPost = {
		slug: '/blog/grok-skeptic-to-evangelist',
		title: 'Grok: Skeptic → Evangelist in One Session',
		emoji: '🍊',
		isNew: true
	};
</script>

<a href={latestPost.slug} class="latest-story">
	<span class="latest-label">
		{#if latestPost.isNew}
			<span class="new-badge">NEW</span>
		{/if}
		Latest Story
	</span>
	<span class="latest-title">
		<span class="emoji">{latestPost.emoji}</span>
		{latestPost.title}
	</span>
	<span class="arrow">→</span>
</a>

<style>
	.latest-story {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 1rem;
		padding: 0.75rem 1.5rem;
		background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%);
		color: white;
		text-decoration: none;
		font-size: 0.95rem;
		transition: all 0.3s ease;
		border-bottom: 1px solid rgba(255, 107, 53, 0.3);
	}

	.latest-story:hover {
		background: linear-gradient(135deg, #2a2a2a 0%, #3a3a3a 100%);
		border-bottom-color: var(--faf-orange);
	}

	.latest-label {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		color: rgba(255, 255, 255, 0.6);
		font-weight: 500;
		font-size: 0.85rem;
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}

	.new-badge {
		background: var(--faf-orange);
		color: white;
		padding: 0.15rem 0.4rem;
		border-radius: 3px;
		font-size: 0.7rem;
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
	}

	.emoji {
		font-size: 1.1rem;
	}

	.arrow {
		color: var(--faf-orange);
		font-weight: 700;
		transition: transform 0.2s ease;
	}

	.latest-story:hover .arrow {
		transform: translateX(4px);
	}

	@media (max-width: 768px) {
		.latest-story {
			flex-wrap: wrap;
			gap: 0.5rem;
			padding: 0.6rem 1rem;
			font-size: 0.85rem;
		}

		.latest-label {
			width: 100%;
			justify-content: center;
		}

		.latest-title {
			font-size: 0.9rem;
		}
	}
</style>
