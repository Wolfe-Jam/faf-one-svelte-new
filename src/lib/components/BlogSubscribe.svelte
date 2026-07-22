<script>
	/**
	 * Quiet one-line blog email capture — index + every post (via layout).
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
		<form class="row" onsubmit={handleSubmit}>
			<span class="label">Never miss a post.</span>
			<input
				type="email"
				bind:value={email}
				placeholder="your@email.com"
				required
				disabled={status === 'loading'}
				class="input"
				aria-label="Email"
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
	/* Hard light colors — no theme tokens */
	.sub {
		max-width: 760px;
		margin: 1.25rem auto 0;
		padding: 0 0.25rem;
	}
	.row {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		flex-wrap: wrap;
	}
	.label {
		font-size: 0.85rem;
		font-weight: 500;
		color: #444;
		white-space: nowrap;
		flex-shrink: 0;
	}
	.input {
		width: 11rem;
		max-width: 100%;
		padding: 0.4rem 0.65rem;
		font-size: 0.85rem;
		background: #fff;
		color: #1a1a1a;
		border: 1px solid #ddd;
		border-radius: 5px;
	}
	.input::placeholder {
		color: #999;
	}
	.input:focus {
		outline: none;
		border-color: #ff6b35;
	}
	.btn {
		padding: 0.4rem 0.85rem;
		background: transparent;
		color: #ff6b35;
		border: 1px solid #ff6b35;
		border-radius: 5px;
		font-weight: 600;
		font-size: 0.85rem;
		cursor: pointer;
		white-space: nowrap;
	}
	.btn:hover:not(:disabled) {
		background: #ff6b35;
		color: #fff;
	}
	.btn:disabled {
		opacity: 0.45;
		cursor: not-allowed;
	}
	.ok {
		margin: 0;
		font-size: 0.85rem;
		color: #444;
	}
	.err {
		margin: 0.35rem 0 0;
		font-size: 0.8rem;
		color: #c53030;
	}
</style>
