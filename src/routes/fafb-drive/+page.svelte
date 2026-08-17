<script>
	let { data } = $props();
	let authed = $state(data.authed);
	let gateEmail = $state(data.email || '');
	let gatePassword = $state('');
	let gateStatus = $state('');
	let gateBusy = $state(false);
	let sentPw = $state(false);
	const scales = [
		['Q11', 'In the first 10 minutes I knew what to do'],
		['Q12', 'faf status made the score feel honest'],
		['Q13', 'faf export produced something I would keep'],
		['Q14', 'faf compile felt like a product step. Not a demo'],
		['Q15', 'Memory first, then Ask, made sense (fafm → fafa)'],
		['Q16', 'I would use this on a real project this month']
	];

	const ran = [
		'faf --help',
		'faf init',
		'faf git',
		'faf auto',
		'faf status',
		'faf check',
		'faf export',
		'faf compile',
		'faf show',
		'fafm / faf memory',
		'fafa / faf ask',
		'faf pro'
	];

	const tools = ['Claude Code', 'Cursor', 'Grok Build', 'Gemini', 'Copilot', 'other'];

	let Q01 = $state('');
	let Q02 = $state('');
	let Q03 = $state('');
	let Q04 = $state('');
	let Q05 = $state([]);
	let Q06 = $state('');
	let Q07 = $state('');
	let Q08 = $state('');
	let Q09 = $state('');
	let Q10 = $state([]);
	let Q11 = $state('');
	let Q12 = $state('');
	let Q13 = $state('');
	let Q14 = $state('');
	let Q15 = $state('');
	let Q16 = $state('');
	let Q17 = $state('');
	let Q18 = $state('');
	let Q19 = $state('');
	let Q20 = $state('');
	let Q21 = $state('');
	let Q22 = $state('');
	let website = $state('');
	let status = $state('');
	let sending = $state(false);
	let sent = $state(false);

	async function requestPassword() {
		gateBusy = true;
		gateStatus = '';
		try {
			const res = await fetch('/api/fafb-drive/request', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ email: gateEmail, website: '' })
			});
			const result = await res.json();
			if (!res.ok) throw new Error(result.error || 'Could not send.');
			sentPw = true;
			gateStatus = 'Check your inbox. Password is on its way.';
		} catch (e) {
			gateStatus = e instanceof Error ? e.message : 'Could not send.';
		} finally {
			gateBusy = false;
		}
	}

	async function login() {
		gateBusy = true;
		gateStatus = '';
		try {
			const res = await fetch('/api/fafb-drive/login', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ email: gateEmail, password: gatePassword })
			});
			const result = await res.json();
			if (!res.ok) throw new Error(result.error || 'That did not match.');
			authed = true;
		} catch (e) {
			gateStatus = e instanceof Error ? e.message : 'That did not match.';
		} finally {
			gateBusy = false;
		}
	}

	async function logout() {
		await fetch('/api/fafb-drive/logout', { method: 'POST' });
		authed = false;
		gatePassword = '';
		sentPw = false;
		gateStatus = '';
	}

	function payload() {
		return {
			Q01, Q02, Q03, Q04, Q05, Q06, Q07, Q08, Q09, Q10,
			Q11, Q12, Q13, Q14, Q15, Q16, Q17, Q18, Q19, Q20, Q21, Q22,
			website
		};
	}

	function missing() {
		if (!Q01.trim()) return 'Q01 name is required.';
		if (!Q03) return 'Q03 seat is required.';
		if (!Q06) return 'Q06 cargo/npm is required.';
		if (!Q19.trim()) return 'Q19 (what broke) is required.';
		if (!Q20.trim()) return 'Q20 (refuse to lose) is required.';
		if (!Q21.trim()) return 'Q21 (should not exist) is required.';
		return '';
	}

	function answersMd() {
		const handle = Q01.trim() || 'anon';
		const ids = ['Q01','Q02','Q03','Q04','Q05','Q06','Q07','Q08','Q09','Q10','Q11','Q12','Q13','Q14','Q15','Q16','Q17','Q18','Q19','Q20','Q21','Q22'];
		const data = payload();
		const lines = [
			'# FAFb 0.9 answers',
			'',
			`- handle: ${handle}`,
			`- date: ${new Date().toISOString().slice(0, 10)}`,
			`- set: QUESTIONS.md (locked cohort)`,
			''
		];
		for (const id of ids) {
			const v = data[id];
			const text = Array.isArray(v) ? v.join(', ') : String(v || '').trim();
			lines.push(`## ${id}`, '', text || '_(blank)_', '');
		}
		return { handle, md: lines.join('\n') };
	}

	async function submit() {
		const miss = missing();
		if (miss) {
			status = miss;
			return;
		}
		sending = true;
		status = '';
		try {
			const res = await fetch('/api/fafb-drive', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(payload())
			});
			const result = await res.json();
			if (!res.ok) throw new Error(result.error || 'Send failed');
			sent = true;
			status = 'Sent to James.';
		} catch (e) {
			status = e instanceof Error ? e.message : 'Send failed. Download instead.';
		} finally {
			sending = false;
		}
	}

	function download() {
		const miss = missing();
		if (miss) {
			status = miss;
			return;
		}
		const { handle, md } = answersMd();
		const blob = new Blob([md], { type: 'text/markdown' });
		const a = document.createElement('a');
		const slug = handle.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'anon';
		a.href = URL.createObjectURL(blob);
		a.download = `answers-${slug}.md`;
		a.click();
		URL.revokeObjectURL(a.href);
		status = 'Downloaded. Send that file to James if submit failed.';
	}

	async function copy() {
		const miss = missing();
		if (miss) {
			status = miss;
			return;
		}
		try {
			await navigator.clipboard.writeText(answersMd().md);
			status = 'Copied. Paste to James if submit failed.';
		} catch {
			status = 'Copy blocked. Use Download.';
		}
	}
</script>

<svelte:head>
	<title>FAFb 0.9 test-drive</title>
	<meta name="robots" content="noindex, nofollow, noarchive" />
	<meta name="description" content="Private FAFb 0.9 test-drive. Not public." />
</svelte:head>

<main class="drive">
	<p class="mark">FAFb · private 0.9 test-drive</p>
	<h1>Drive it. Same questions for everyone.</h1>
	<div class="lede lines">
		<p>Not 1.0. Not public.</p>
		<p>A handful of seats. Same form.</p>
		<p>About 30–60 minutes. Cargo first.</p>
	</div>

	{#if !authed}
		<div class="card lines">
			<p>Email in. Password sent out.</p>
			<p>Then you can drive.</p>
		</div>
		<form
			class="gate"
			onsubmit={(e) => {
				e.preventDefault();
				if (sentPw) login();
				else requestPassword();
			}}
		>
			<label>Email</label>
			<input type="email" bind:value={gateEmail} required autocomplete="email" />
			{#if sentPw}
				<label>Password</label>
				<input type="text" bind:value={gatePassword} required autocomplete="one-time-code" />
			{/if}
			<div class="actions">
				<button type="submit" class="faf-solid" disabled={gateBusy}>
					{gateBusy ? 'Working…' : sentPw ? 'Enter' : 'Send password'}
				</button>
				{#if sentPw}
					<button type="button" class="secondary" disabled={gateBusy} onclick={requestPassword}>
						Send again
					</button>
				{/if}
			</div>
			<p class="ok">{gateStatus}</p>
		</form>
	{:else}

	<div class="card lines">
		<p>What this is. FAF is context. FAFb is context, compiled.</p>
		<p>Command <code>faf</code>. 33 slots. Not <a href="https://www.npmjs.com/package/faf-cli">FAF-CLI</a> 21 slots (MIT).</p>
		<p>Grok Build and Cursor load <code>AGENTS.md</code>. So does FAFb.</p>
	</div>
	<div class="card lines">
		<p>What this is not. A launch. A survey about FAF-CLI.</p>
		<p>You will not be asked how the score is calculated.</p>
	</div>

	<h2>1. Setup</h2>
	<div class="lines">
		<p>One line. No Rust. No GitHub. No keys.</p>
		<p>It puts FAFb on this machine and makes <code>~/fafb-drive</code>.</p>
	</div>
	<pre>curl -fsSL https://faf.one/fafb/install.sh | bash</pre>
	<div class="lines">
		<p>Windows: <code>irm https://faf.one/fafb/install.ps1 | iex</code>.</p>
		<p>Then:</p>
	</div>
	<pre>hash -r
which faf
cd ~/fafb-drive
faf --help</pre>
	<div class="lines">
		<p><code>which faf</code> must be <code>~/.local/bin/faf</code>. Not bun. Not Homebrew.</p>
	</div>
	<div class="lines">
		<p>First gated Pro use starts a 14-day trial.</p>
		<p>That is <code>compile</code>, <code>sync</code>, <code>gaps</code>, <code>bench</code>, <code>embed</code>, <code>status -v</code>.</p>
		<p>No card.</p>
	</div>

	<h2>2. Drive</h2>
	<div class="lines">
		<p>Stay in <code>~/fafb-drive</code>. Already inited.</p>
		<p>Context first. Then memory. Then ask.</p>
	</div>
	<ol class="steps">
		<li><code>faf --help</code></li>
		<li><code>faf status</code>. Then <code>faf auto</code> if you want the tree to fill.</li>
		<li><code>faf check</code></li>
		<li><code>faf export</code>. Look at <code>AGENTS.md</code>.</li>
		<li><code>faf compile</code>. Starts trial. Writes <code>.fafb</code>.</li>
		<li><code>faf show</code>. Optional. HTML card.</li>
		<li><code>fafm add testers to users</code>. Then <code>fafa does context cover the build stack?</code></li>
	</ol>
	<div class="lines">
		<p>If something fails, keep going. Write it in Q19.</p>
		<p>Do not fix the product for us.</p>
	</div>

	<h2>3. Same form</h2>
	<div class="lines">
		<p>Every seat gets these questions.</p>
		<p>Submit on this page. James gets the file.</p>
		<p>Do not start a second thread. Use Q22 if you need more.</p>
	</div>

	<form onsubmit={(e) => { e.preventDefault(); submit(); }}>
		<div class="hp" aria-hidden="true">
			<label>Website <input type="text" bind:value={website} tabindex="-1" autocomplete="off" /></label>
		</div>

		<h3>Who</h3>
		<label><span class="id">Q01</span> Name or handle <span class="hint">required</span></label>
		<input type="text" bind:value={Q01} required autocomplete="nickname" />

		<label><span class="id">Q02</span> How you found this seat</label>
		<input type="text" bind:value={Q02} placeholder="James asked" />

		<label><span class="id">Q03</span> Your seat</label>
		<div class="row">
			{#each ['faf-cli daily', 'used .faf a little', 'FAF by name only', 'AAIF / MCP / agents', 'other'] as opt}
				<label><input type="radio" name="Q03" value={opt} bind:group={Q03} required /> {opt}</label>
			{/each}
		</div>

		<label><span class="id">Q04</span> If other, one line</label>
		<input type="text" bind:value={Q04} />

		<label><span class="id">Q05</span> Tools you actually use</label>
		<div class="row">
			{#each tools as opt}
				<label><input type="checkbox" value={opt} bind:group={Q05} /> {opt}</label>
			{/each}
		</div>

		<label><span class="id">Q06</span> You are comfortable with</label>
		<div class="row">
			{#each ['cargo', 'npm', 'both', 'neither'] as opt}
				<label><input type="radio" name="Q06" value={opt} bind:group={Q06} required /> {opt}</label>
			{/each}
		</div>

		<h3>Setup</h3>
		<label><span class="id">Q07</span> Setup time. Minutes from invite to a working <code>faf</code>.</label>
		<p class="hint line">The install. Clone, build, path. Until <code>faf</code> ran.</p>
		<input type="number" min="0" step="1" placeholder="e.g. 2" bind:value={Q07} />

		<label><span class="id">Q08</span> What blocked the install?</label>
		<div class="row">
			{#each ['nothing', 'repo access', 'Rust toolchain', 'unclear instructions', 'other'] as opt}
				<label><input type="radio" name="Q08" value={opt} bind:group={Q08} /> {opt}</label>
			{/each}
		</div>

		<label><span class="id">Q09</span> If other block, one line</label>
		<input type="text" bind:value={Q09} />

		<h3>Drive — what you ran</h3>
		<label><span class="id">Q10</span> Tick only what you personally ran</label>
		<div class="row">
			{#each ran as opt}
				<label><input type="checkbox" value={opt} bind:group={Q10} /> {opt}</label>
			{/each}
		</div>

		<h3>Same scale</h3>
		<div class="lines"><p>1 disagree. 3 mixed. 5 agree.</p></div>
		{#each scales as [id, prompt]}
			<label><span class="id">{id}</span> {prompt}</label>
			<div class="scale">
				{#each [1, 2, 3, 4, 5] as n}
					<label>
						{#if id === 'Q11'}<input type="radio" name="Q11" value={String(n)} bind:group={Q11} />
						{:else if id === 'Q12'}<input type="radio" name="Q12" value={String(n)} bind:group={Q12} />
						{:else if id === 'Q13'}<input type="radio" name="Q13" value={String(n)} bind:group={Q13} />
						{:else if id === 'Q14'}<input type="radio" name="Q14" value={String(n)} bind:group={Q14} />
						{:else if id === 'Q15'}<input type="radio" name="Q15" value={String(n)} bind:group={Q15} />
						{:else}<input type="radio" name="Q16" value={String(n)} bind:group={Q16} />
						{/if}
						{n}<span>{n === 1 ? 'disagree' : n === 3 ? 'mixed' : n === 5 ? 'agree' : ''}</span>
					</label>
				{/each}
			</div>
		{/each}

		<h3>Contrast</h3>
		<label><span class="id">Q17</span> If you know FAF-CLI: how is this different? One sentence. <span class="hint">n/a if you do not know it</span></label>
		<input type="text" bind:value={Q17} />

		<label><span class="id">Q18</span> If you do not know FAF-CLI: what did you think this was? One sentence. <span class="hint">n/a if you know it</span></label>
		<input type="text" bind:value={Q18} />

		<h3>Open — feedback</h3>
		<label><span class="id">Q19</span> What broke or confused you? <span class="hint">required</span></label>
		<textarea bind:value={Q19} required></textarea>

		<label><span class="id">Q20</span> What would you refuse to lose? One thing. <span class="hint">required</span></label>
		<input type="text" bind:value={Q20} required />

		<label><span class="id">Q21</span> What should not exist? One thing. <span class="hint">required</span></label>
		<input type="text" bind:value={Q21} required />

		<label><span class="id">Q22</span> Anything else</label>
		<textarea bind:value={Q22}></textarea>

		<div class="actions">
			<button type="submit" class="faf-solid" disabled={sending || sent}>{sent ? 'Sent' : sending ? 'Sending…' : 'Submit to James'}</button>
			<button type="button" class="secondary" onclick={download}>Download answers.md</button>
			<button type="button" class="secondary" onclick={copy}>Copy answers</button>
		</div>
		<p class="ok">{status}</p>
	</form>

	<hr />
	<footer class="lines">
		<p>Private 0.9. Not indexed.</p>
		<p>Questions locked for this cohort.</p>
		<p>Help to guide what we build.</p>
		<p>Comments · suggestions welcome.</p>
		<p><button type="button" class="secondary" onclick={logout}>Sign out</button></p>
	</footer>
	{/if}
</main>

<style>
	.drive {
		max-width: 40rem;
		margin: 0 auto;
		padding: 2.5rem 1.25rem 5rem;
	}
	h1 {
		font-size: 1.75rem;
		letter-spacing: -0.03em;
		margin: 0 0 0.35rem;
	}
	h2 { font-size: 1.15rem; margin: 2.25rem 0 0.6rem; }
	h3 { font-size: 1rem; margin: 1.4rem 0 0.4rem; }
	.mark {
		color: var(--faf-orange);
		font-weight: 700;
		margin: 0 0 0.4rem;
	}
	.lede { color: var(--faf-gray); }
	.lines { margin: 0 0 1rem; }
	.lines p, .card p { margin: 0; }
	.card {
		background: var(--faf-surface);
		border: 2px solid var(--faf-ink);
		border-radius: 10px;
		padding: 1rem 1.1rem;
		margin: 0.8rem 0;
	}
	code, pre {
		font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
		font-size: 0.86rem;
	}
	/* Locked chrome — do not use --faf-black/--faf-white (they invert). */
	pre {
		background: var(--faf-locked-dark);
		color: var(--faf-locked-dark-text);
		border: 1px solid var(--faf-locked-dark-muted);
		padding: 0.9rem 1rem;
		border-radius: 8px;
		overflow-x: auto;
	}
	pre code {
		background: none;
		color: inherit;
		border: none;
		padding: 0;
	}
	:not(pre) > code {
		background: var(--faf-code-bg);
		color: var(--faf-ink);
		padding: 0.1em 0.35em;
		border-radius: 4px;
	}
	.steps { padding-left: 1.2rem; }
	.steps li { margin: 0.35rem 0; }
	label {
		display: block;
		font-weight: 600;
		margin: 1.1rem 0 0.35rem;
	}
	.hint { font-weight: 400; color: var(--faf-gray); font-size: 0.9rem; }
	.hint.line { margin: 0 0 0.35rem; }
	input[type='text'],
	input[type='email'],
	input[type='number'],
	textarea {
		width: 100%;
		padding: 0.55rem 0.65rem;
		border: 2px solid var(--faf-ink);
		border-radius: 8px;
		background: var(--faf-surface);
		font: inherit;
		color: var(--faf-ink);
	}
	textarea { min-height: 5.5rem; resize: vertical; }
	.row {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem 1rem;
		margin: 0.3rem 0 0.2rem;
	}
	.row label { font-weight: 400; margin: 0; }
	.scale {
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		gap: 0.35rem;
		max-width: 22rem;
	}
	.scale label {
		font-weight: 400;
		text-align: center;
		border: 2px solid var(--faf-ink);
		border-radius: 8px;
		padding: 0.4rem 0;
		cursor: pointer;
		background: var(--faf-surface);
		margin: 0;
	}
	.scale span { display: block; font-size: 0.75rem; color: var(--faf-gray); }
	.actions { display: flex; flex-wrap: wrap; gap: 0.6rem; margin-top: 1.4rem; }
	button {
		appearance: none;
		border-radius: 8px;
		padding: 0.6rem 1rem;
		font: inherit;
		font-weight: 650;
		cursor: pointer;
	}
	/* Suggested action — orange reads as a button on cream and on near-black. */
	button.faf-solid {
		background: var(--faf-orange);
		color: #1a1a1a;
		border: 2px solid var(--faf-orange);
	}
	button.secondary {
		background: transparent;
		border: 1px solid var(--faf-ink);
		color: var(--faf-ink);
		font-weight: 500;
	}
	button:disabled { opacity: 0.5; cursor: not-allowed; }
	.ok { color: var(--faf-cyan-text); font-size: 0.9rem; min-height: 1.2rem; }
	.gate { margin-top: 0.5rem; }
	footer { margin-top: 3rem; color: var(--faf-gray); font-size: 0.85rem; }
	.id { color: var(--faf-gray); font-weight: 500; font-size: 0.8rem; margin-right: 0.35rem; }
	hr { border: 0; border-top: 1px solid var(--faf-hairline); margin: 2rem 0; }
	.hp {
		position: absolute;
		left: -9999px;
		height: 0;
		overflow: hidden;
	}
</style>
