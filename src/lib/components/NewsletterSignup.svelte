<script lang="ts">
	interface Props {
		variant?: 'footer' | 'blog';
	}
	let { variant = 'footer' }: Props = $props();

	let email = $state('');
	let status = $state<'idle' | 'loading' | 'success' | 'error'>('idle');

	async function handleSubmit(e: Event) {
		e.preventDefault();
		if (!email || status === 'loading') return;

		status = 'loading';
		try {
			const res = await fetch('/api/subscribe', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ email, source: `faf.one/${variant}` })
			});

			if (!res.ok) throw new Error('Failed');
			status = 'success';
			email = '';
		} catch {
			status = 'error';
			setTimeout(() => { status = 'idle'; }, 3000);
		}
	}
</script>

{#if variant === 'blog'}
	<div class="blog-signup">
		<p class="blog-label">Never miss a post.</p>
		{#if status === 'success'}
			<p class="blog-success">🧡 You're in. New posts will land in your inbox.</p>
		{:else}
			<form class="blog-form" onsubmit={handleSubmit}>
				<input
					type="email"
					bind:value={email}
					placeholder="your@email.com"
					required
					disabled={status === 'loading'}
					class="blog-input"
				/>
				<button type="submit" disabled={!email || status === 'loading'} class="blog-btn">
					{status === 'loading' ? '...' : 'Subscribe'}
				</button>
			</form>
			{#if status === 'error'}
				<p class="blog-error">Something went wrong — try again.</p>
			{/if}
		{/if}
	</div>
{:else}
	<div class="footer-signup">
		<p class="footer-label">New posts to your inbox</p>
		{#if status === 'success'}
			<p class="footer-success">🧡 Subscribed!</p>
		{:else}
			<form class="footer-form" onsubmit={handleSubmit}>
				<input
					type="email"
					bind:value={email}
					placeholder="your@email.com"
					required
					disabled={status === 'loading'}
					class="footer-input"
				/>
				<button type="submit" disabled={!email || status === 'loading'} class="footer-btn">
					{status === 'loading' ? '...' : '→'}
				</button>
			</form>
			{#if status === 'error'}
				<p class="footer-error">Try again.</p>
			{/if}
		{/if}
	</div>
{/if}

<style>
	/* Blog variant */
	.blog-signup {
		margin: 3rem 0 1rem;
		padding: 2rem;
		border: 1px solid var(--faf-light-gray);
		border-radius: 10px;
		text-align: center;
		background: var(--faf-white);
	}

	.blog-label {
		margin: 0 0 1rem;
		font-size: 1rem;
		color: var(--faf-dark);
		font-weight: 600;
	}

	.blog-form {
		display: flex;
		gap: 0.5rem;
		justify-content: center;
		max-width: 400px;
		margin: 0 auto;
	}

	.blog-input {
		flex: 1;
		padding: 0.75rem 1rem;
		font-size: 0.9rem;
		background: var(--faf-cream);
		color: var(--faf-dark);
		border: 2px solid var(--faf-light-gray);
		border-radius: 6px;
		outline: none;
		transition: border-color 0.2s;
	}

	.blog-input:focus {
		border-color: #FF6B35;
	}

	.blog-btn {
		padding: 0.75rem 1.5rem;
		background: #FF6B35;
		color: #fff;
		border: none;
		border-radius: 6px;
		font-weight: 700;
		cursor: pointer;
		white-space: nowrap;
		transition: background 0.2s;
	}

	.blog-btn:hover:not(:disabled) {
		background: #ff5722;
	}

	.blog-btn:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}

	.blog-success {
		margin: 0;
		color: var(--faf-dark);
		font-size: 0.95rem;
	}

	.blog-error {
		margin: 0.5rem 0 0;
		color: #e53e3e;
		font-size: 0.85rem;
	}

	/* Footer variant */
	.footer-signup {
		margin-top: 1rem;
	}

	.footer-label {
		margin: 0 0 0.5rem;
		font-size: 0.8rem;
		color: #666;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		font-weight: 600;
	}

	.footer-form {
		display: flex;
		gap: 0.4rem;
	}

	.footer-input {
		flex: 1;
		padding: 0.5rem 0.75rem;
		font-size: 0.85rem;
		background: #1a1a1a;
		border: 1px solid #333;
		border-radius: 5px;
		color: #fff;
		outline: none;
		transition: border-color 0.2s;
		min-width: 0;
	}

	.footer-input::placeholder {
		color: #aaa;
	}

	.footer-input:focus {
		border-color: #FF6B35;
	}

	.footer-btn {
		padding: 0.5rem 0.85rem;
		background: #FF6B35;
		color: #fff;
		border: none;
		border-radius: 5px;
		font-weight: 700;
		cursor: pointer;
		font-size: 1rem;
		transition: background 0.2s;
		flex-shrink: 0;
	}

	.footer-btn:hover:not(:disabled) {
		background: #ff5722;
	}

	.footer-btn:disabled {
		opacity: 0.4;
		cursor: not-allowed;
	}

	.footer-success {
		margin: 0;
		color: #999;
		font-size: 0.85rem;
	}

	.footer-error {
		margin: 0.25rem 0 0;
		color: #e53e3e;
		font-size: 0.8rem;
	}
</style>
