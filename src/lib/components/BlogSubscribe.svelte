<script>
	/**
	 * Sitewide one-line capture — above footer on every page.
	 * "Stay in the loop: [email] [Subscribe]"
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
				body: JSON.stringify({ email: email.trim(), source: 'faf.one/site' })
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

<div class="loop">
	{#if status === 'success'}
		<p class="ok">You're on the list.</p>
	{:else}
		<form class="row" onsubmit={handleSubmit}>
			<label class="label" for="site-loop-email">Stay in the loop:</label>
			<input
				id="site-loop-email"
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
	/* Sits above locked-dark footer — muted chrome, left-aligned one line */
	.loop {
		max-width: 700px;
		margin: 0 auto;
		padding: 0.85rem 1.5rem 0.25rem;
		text-align: left;
	}
	.row {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		flex-wrap: wrap;
	}
	.label {
		font-size: 0.8rem;
		font-weight: 500;
		color: #999;
		white-space: nowrap;
		flex-shrink: 0;
	}
	.input {
		width: 10.5rem;
		max-width: 100%;
		padding: 0.35rem 0.6rem;
		font-size: 0.8rem;
		background: #1a1a1a;
		color: #e5e5e5;
		border: 1px solid #333;
		border-radius: 4px;
	}
	.input::placeholder {
		color: #666;
	}
	.input:focus {
		outline: none;
		border-color: #ff6b35;
	}
	.btn {
		padding: 0.35rem 0.75rem;
		background: transparent;
		color: #bbb;
		border: 1px solid #444;
		border-radius: 4px;
		font-weight: 600;
		font-size: 0.8rem;
		cursor: pointer;
		white-space: nowrap;
	}
	.btn:hover:not(:disabled) {
		color: #ff6b35;
		border-color: #ff6b35;
	}
	.btn:disabled {
		opacity: 0.4;
		cursor: not-allowed;
	}
	.ok {
		margin: 0;
		font-size: 0.8rem;
		color: #999;
	}
	.err {
		margin: 0.3rem 0 0;
		font-size: 0.75rem;
		color: #e53e3e;
	}
</style>
