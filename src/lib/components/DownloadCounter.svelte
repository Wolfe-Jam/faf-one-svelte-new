<script>
	// Standardized ecosystem messaging - no maintenance needed
</script>

<div class="npm-stats">
	<div class="stats-container">
		<div class="npm-badge total-badge">
			<span class="badge-icon">📦</span>
			<div class="badge-content">
				<span class="badge-number">43k+</span>
				<span class="badge-label">Ecosystem Downloads</span>
			</div>
		</div>
	</div>
</div>

<style>
	.npm-stats {
		margin: 2rem 0;
	}

	.stats-container {
		display: flex;
		justify-content: center;
	}

	.npm-badge {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		padding: 1rem 2rem;
		border-radius: 999px;
		transition: all 0.3s ease;
		box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
	}

	.npm-badge:hover {
		transform: translateY(-2px);
		box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
	}

	.total-badge {
		background: linear-gradient(135deg, var(--faf-orange) 0%, #FF914D 100%);
		color: white;
		border: 2px solid var(--faf-orange);
		font-weight: 700;
	}

	.badge-icon {
		font-size: 1.75rem;
	}

	.badge-content {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}

	.badge-number {
		font-size: 1.5rem;
		font-weight: 900;
		line-height: 1;
	}

	.badge-label {
		font-size: 0.8rem;
		opacity: 1;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		margin-top: 0.25rem;
		font-weight: 600;
	}
</style>
