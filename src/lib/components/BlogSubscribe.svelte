<script>
	/**
	 * Quiet blog email capture — index + every post (via blog layout).
	 */
	let email = $state('');
	/** @type {'idle' | 'loading' | 'success' | 'error'} */
	let status = $state('idle');

	/** @param {Event} e */
	async function handleSubmit(e) {
		e.preventDefault();
		if (!email || status === 'loading') return;
		status = 'loading';
		try {
			const res = await fetch('/api/subscribe', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
				body: JSON.stringify({ email: email.trim(), source: 'faf.one/blog' })
			});
			const data = await res.json().catch(() => ({}));
			if (!res.ok || data?.subscribed === false) throw new Error(data?.error || 'fail');
			status = 'success';
			email = '';
		} catch {
			status = 'error';
			setTimeout(() => {
				status = 'idle';
			}, 4000);
		}
	}
</script>

<div class="sub">
	{#if status === 'success'}
		<p class="ok">You're on the list.</p>
	{:else}
		<p class="label">Never miss a post.</p>
		<form class="row" onsubmit={handleSubmit}>
			<input
				type="email"
				bind:value={email}
				placeholder="your@email.com"
				required
				disabled={status === 'loading'}
				class="input"
			/>
			<button type="submit" disabled={!email || status === 'loading'} class="btn">
				{status === 'loading' ? '…' : 'Subscribe'}
			</button>
		</form>
		{#if status === 'error'}
			<p class="err">Something went wrong — try again.</p>
		{/if}
	{/if}
</div>

<style>
	/* Hard light colors — no theme tokens (avoids dark-mode wipe) */
	.sub {
		max-width: 400px;
		margin: 1.5rem auto;
		padding: 0;
		text-align: center;
	}
	.label {
		margin: 0 0 0.6rem;
		font-size: 0.9rem;
		font-weight: 600;
		color: #1a1a1a;
	}
	.row {
		display: flex;
		gap: 0.4rem;
		justify-content: center;
	}
	.input {
		flex: 1;
		min-width: 0;
		padding: 0.5rem 0.75rem;
		font-size: 0.875rem;
		background: #fff;
		color: #1a1a1a;
		border: 1px solid #ccc;
		border-radius: 6px;
	}
	.input::placeholder {
		color: #888;
	}
	.input:focus {
		outline: none;
		border-color: #ff6b35;
	}
	.btn {
		padding: 0.5rem 1rem;
		background: #ff6b35;
		color: #fff;
		border: none;
		border-radius: 6px;
		font-weight: 600;
		font-size: 0.875rem;
		cursor: pointer;
		white-space: nowrap;
	}
	.btn:hover:not(:disabled) {
		background: #ff5722;
	}
	.btn:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}
	.ok {
		margin: 0;
		font-size: 0.9rem;
		color: #1a1a1a;
	}
	.err {
		margin: 0.4rem 0 0;
		font-size: 0.8rem;
		color: #c53030;
	}
</style>
