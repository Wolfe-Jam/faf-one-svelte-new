<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	let { isOpen = $bindable(false) } = $props();

	const dispatch = createEventDispatcher();

	let email = $state('');
	let message = $state('');
	let name = $state('');
	let category = $state('');
	let company = $state('');
	let showDetails = $state(false);
	let sending = $state(false);
	let success = $state(false);
	let error = $state('');

	function close() {
		isOpen = false;
		// Reset form after close animation
		setTimeout(() => {
			email = '';
			message = '';
			name = '';
			category = '';
			company = '';
			showDetails = false;
			success = false;
			error = '';
		}, 300);
	}

	async function handleSubmit() {
		if (!email || !message) return;

		sending = true;
		error = '';

		try {
			const response = await fetch('/api/contact', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					email,
					message,
					name: name || undefined,
					category: category || undefined,
					company: company || undefined
				})
			});

			const result = await response.json();

			if (!response.ok) {
				throw new Error(result.error || 'Failed to send message');
			}

			success = true;
			setTimeout(() => close(), 2000);

		} catch (err) {
			error = err instanceof Error ? err.message : 'Failed to send message';
		} finally {
			sending = false;
		}
	}

	function handleBackdropClick(e: MouseEvent) {
		if (e.target === e.currentTarget) {
			close();
		}
	}
</script>

{#if isOpen}
	<div class="modal-backdrop" onclick={handleBackdropClick}>
		<div class="modal-content">
			<button class="modal-close" onclick={close} aria-label="Close">&times;</button>

			{#if success}
				<div class="success-message">
					<div class="success-icon">⚡️</div>
					<h3>You're In! ✨</h3>
					<p>Welcome to the FAF movement. We'll respond within 24 hours.</p>
				</div>
			{:else}
				<h2>⚡️ Join the FAF Movement</h2>
				<p class="modal-subtitle">Be part of the AI-context revolution ✨</p>

				<form onsubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
					<!-- Quick Fields -->
					<div class="form-group">
						<label for="email">Your Email *</label>
						<input
							type="email"
							id="email"
							bind:value={email}
							required
							placeholder="your@email.com"
							disabled={sending}
						/>
					</div>

					<div class="form-group">
						<label for="message">Message *</label>
						<textarea
							id="message"
							bind:value={message}
							required
							rows="4"
							placeholder="What can we help with?"
							disabled={sending}
						></textarea>
					</div>

					<!-- More Details Expander -->
					<button
						type="button"
						class="expander"
						onclick={() => showDetails = !showDetails}
					>
						{showDetails ? '▲' : '▼'} More Details (optional)
					</button>

					{#if showDetails}
						<div class="expandable-fields">
							<div class="form-group">
								<label for="name">Name</label>
								<input
									type="text"
									id="name"
									bind:value={name}
									placeholder="Your name"
									disabled={sending}
								/>
							</div>

							<div class="form-group">
								<label for="category">Category</label>
								<select id="category" bind:value={category} disabled={sending}>
									<option value="">General</option>
									<option value="bug">🐛 Bug Report</option>
									<option value="feature">✨ Feature Request</option>
									<option value="question">❓ Question</option>
									<option value="feedback">💬 Feedback</option>
								</select>
							</div>

							<div class="form-group">
								<label for="company">Company/Project</label>
								<input
									type="text"
									id="company"
									bind:value={company}
									placeholder="Optional"
									disabled={sending}
								/>
							</div>
						</div>
					{/if}

					{#if error}
						<div class="error-message">{error}</div>
					{/if}

					<button type="submit" class="btn-submit" disabled={sending || !email || !message}>
						{sending ? '⚡️ Sending...' : '⚡️ Join the Movement'}
					</button>
				</form>
			{/if}
		</div>
	</div>
{/if}

<style>
	.modal-backdrop {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(0, 0, 0, 0.7);
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 9999;
		padding: 1rem;
		animation: fadeIn 0.2s ease;
	}

	@keyframes fadeIn {
		from { opacity: 0; }
		to { opacity: 1; }
	}

	.modal-content {
		background: linear-gradient(135deg, #2a2d35 0%, #1a1d25 100%);
		border: 2px solid #00D4D4;
		border-radius: 12px;
		padding: 2rem;
		max-width: 500px;
		width: 100%;
		max-height: 90vh;
		overflow-y: auto;
		position: relative;
		animation: slideUp 0.3s ease;
		box-shadow: 0 10px 40px rgba(0, 212, 212, 0.3), 0 0 60px rgba(0, 212, 212, 0.1);
	}

	@keyframes slideUp {
		from {
			transform: translateY(20px);
			opacity: 0;
		}
		to {
			transform: translateY(0);
			opacity: 1;
		}
	}

	.modal-close {
		position: absolute;
		top: 1rem;
		right: 1rem;
		background: none;
		border: none;
		font-size: 2rem;
		line-height: 1;
		color: rgba(255, 255, 255, 0.5);
		cursor: pointer;
		padding: 0;
		width: 32px;
		height: 32px;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: all 0.2s ease;
	}

	.modal-close:hover {
		color: #00D4D4;
		transform: rotate(90deg);
	}

	h2 {
		margin: 0 0 0.5rem 0;
		color: #ffffff;
		font-size: 1.75rem;
		font-weight: 700;
	}

	.modal-subtitle {
		margin: 0 0 1.5rem 0;
		color: #00D4D4;
		font-size: 0.9rem;
		font-weight: 600;
	}

	.form-group {
		margin-bottom: 1rem;
	}

	label {
		display: block;
		margin-bottom: 0.5rem;
		font-weight: 600;
		color: #ffffff;
		font-size: 0.9rem;
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}

	input,
	textarea,
	select {
		width: 100%;
		padding: 0.75rem;
		border: 2px solid rgba(0, 212, 212, 0.3);
		border-radius: 8px;
		font-size: 1rem;
		transition: all 0.2s ease;
		font-family: inherit;
		background: rgba(255, 255, 255, 0.05);
		color: #ffffff;
	}

	input:focus,
	textarea:focus,
	select:focus {
		outline: none;
		border-color: #00D4D4;
		background: rgba(0, 212, 212, 0.1);
		box-shadow: 0 0 20px rgba(0, 212, 212, 0.2);
	}

	input::placeholder,
	textarea::placeholder {
		color: rgba(255, 255, 255, 0.4);
	}

	select option {
		background: #1a1d25;
		color: #ffffff;
	}

	input:disabled,
	textarea:disabled,
	select:disabled {
		opacity: 0.6;
		cursor: not-allowed;
	}

	textarea {
		resize: vertical;
		min-height: 100px;
	}

	.expander {
		background: none;
		border: none;
		color: #00D4D4;
		cursor: pointer;
		padding: 0.5rem 0;
		font-size: 0.9rem;
		font-weight: 600;
		margin: 0.5rem 0 1rem 0;
		transition: all 0.2s ease;
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}

	.expander:hover {
		color: #ffffff;
		text-shadow: 0 0 10px rgba(0, 212, 212, 0.5);
	}

	.expandable-fields {
		animation: expandDown 0.3s ease;
		overflow: hidden;
	}

	@keyframes expandDown {
		from {
			opacity: 0;
			max-height: 0;
		}
		to {
			opacity: 1;
			max-height: 500px;
		}
	}

	.btn-submit {
		width: 100%;
		padding: 1rem;
		background: linear-gradient(135deg, #00D4D4 0%, #00a8a8 100%);
		color: #1a1d25;
		border: none;
		border-radius: 8px;
		font-size: 1.125rem;
		font-weight: 700;
		cursor: pointer;
		transition: all 0.3s ease;
		margin-top: 0.5rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		position: relative;
		overflow: hidden;
	}

	.btn-submit::before {
		content: '';
		position: absolute;
		top: 50%;
		left: 50%;
		width: 0;
		height: 0;
		border-radius: 50%;
		background: rgba(255, 255, 255, 0.3);
		transform: translate(-50%, -50%);
		transition: width 0.6s, height 0.6s;
	}

	.btn-submit:hover:not(:disabled)::before {
		width: 300px;
		height: 300px;
	}

	.btn-submit:hover:not(:disabled) {
		transform: translateY(-2px);
		box-shadow: 0 5px 20px rgba(0, 212, 212, 0.5), 0 0 40px rgba(0, 212, 212, 0.3);
	}

	.btn-submit:disabled {
		opacity: 0.4;
		cursor: not-allowed;
		transform: none;
	}

	.error-message {
		background: rgba(255, 77, 77, 0.1);
		border: 1px solid rgba(255, 77, 77, 0.5);
		color: #ff9999;
		padding: 0.75rem;
		border-radius: 8px;
		margin: 1rem 0;
		font-size: 0.9rem;
	}

	.success-message {
		text-align: center;
		padding: 2rem 0;
	}

	.success-icon {
		width: 80px;
		height: 80px;
		border-radius: 50%;
		background: linear-gradient(135deg, #00D4D4 0%, #00a8a8 100%);
		color: #1a1d25;
		font-size: 3rem;
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 0 auto 1rem;
		animation: scaleIn 0.4s ease, pulse 2s ease infinite;
		box-shadow: 0 0 30px rgba(0, 212, 212, 0.5);
	}

	@keyframes scaleIn {
		from {
			transform: scale(0) rotate(-180deg);
		}
		to {
			transform: scale(1) rotate(0);
		}
	}

	@keyframes pulse {
		0%, 100% {
			box-shadow: 0 0 30px rgba(0, 212, 212, 0.5);
		}
		50% {
			box-shadow: 0 0 50px rgba(0, 212, 212, 0.8);
		}
	}

	.success-message h3 {
		margin: 0 0 0.5rem 0;
		color: #ffffff;
		font-weight: 700;
		font-size: 1.5rem;
	}

	.success-message p {
		margin: 0;
		color: #00D4D4;
		font-weight: 600;
	}

	@media (max-width: 600px) {
		.modal-content {
			padding: 1.5rem;
		}

		h2 {
			font-size: 1.5rem;
		}
	}
</style>
