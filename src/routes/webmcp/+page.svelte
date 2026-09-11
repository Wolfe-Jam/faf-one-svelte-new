<script>
	import { onMount } from 'svelte';
	import PageActions from '$lib/components/PageActions.svelte';
	import { emitAgentsMd } from '$lib/webmcp/emit-agents';
	import { messageOf, toToolError } from '$lib/webmcp/errors';
	import { fill6wsYaml } from '$lib/webmcp/fill-6ws';
	import { FIXTURE_YAML } from '$lib/webmcp/fixture';
	import {
		ensureModelContext,
		FILL_6WS_DESCRIPTION,
		registerFafWebmcpTools,
		TOOL_NAMES
	} from '$lib/webmcp/register';
	import { contextCardText, readContext } from '$lib/webmcp/read-context';
	import { DEFAULT_REPO, DEMO_REPOS, fafUrlsFromInput } from '$lib/webmcp/repo-url';
	import { runScoreFafSafe } from '$lib/webmcp/score-faf';
	import { fetchAllowedYaml } from '$lib/webmcp/yaml-url';

	const INSPECTOR =
		'https://chromewebstore.google.com/detail/model-context-tool-inspec/gbpdfapgefenggkahomfgkhfehlcenpd';
	const FLAG = 'chrome://flags/#enable-webmcp-testing';

	/** Visitor one-liners — the code name is for the agent; this column is for humans. */
	const TOOL_BLURB = {
		score_faf: 'Score this project’s context, 0–100',
		fill_6ws: 'Who / What / Why / Where / When / How',
		emit_agents_md: 'Write an AGENTS.md from that context'
	};

	let yamlText = $state('');
	let repoInput = $state(DEFAULT_REPO.href);
	let activeRepo = $state(DEFAULT_REPO.id);
	let repoNote = $state('');
	let repoLoading = $state(false);
	let who = $state('');
	let what = $state('');
	let why = $state('');
	let where = $state('');
	let when = $state('');
	let how = $state('');

	let webmcpSource = $state('loading');
	let kernelReady = $state(false);
	let kernelError = $state('');
	let listedTools = $state([...TOOL_NAMES]);
	let displayTools = $derived(
		TOOL_NAMES.filter((n) => listedTools.includes(n)).concat(
			listedTools.filter((n) => !TOOL_NAMES.includes(n))
		)
	);
	/** @type {'card' | 'agents' | 'score'} */
	let view = $state('card');
	let contextView = $derived(readContext(yamlText));
	/** @type {null | { score: number, tier?: string, populated?: number, active?: number, total?: number, ignored?: number, gaps?: string[], faf_version?: string }} */
	let scoreCard = $state(null);
	let scoreError = $state('');
	let agentsMd = $state('');
	let agentsError = $state('');
	let sixYaml = $state('');
	let busy = $state('');
	let copied = $state(false);
	/** @type {ReturnType<typeof setTimeout> | null} */
	let copiedTimer = $state(null);

	/** @type {null | { scoreYaml: (yaml: string) => string, fetchText: typeof fetchAllowedYaml }} */
	let deps = $state(null);

	onMount(() => {
		let cancelled = false;
		(async () => {
			try {
				const { initKernel, scoreYaml } = await import('$lib/webmcp/kernel');
				await initKernel();
				if (cancelled) return;
				deps = { scoreYaml, fetchText: fetchAllowedYaml };
				kernelReady = true;
			} catch (err) {
				if (cancelled) return;
				kernelError = err instanceof Error ? err.message : String(err);
			}

			try {
				const { context, source } = await ensureModelContext();
				if (cancelled) return;
				webmcpSource = source;
				if (context && deps) {
					listedTools = await registerFafWebmcpTools(context, deps);
				}
			} catch (err) {
				if (cancelled) return;
				webmcpSource = 'none';
				kernelError = kernelError || (err instanceof Error ? err.message : String(err));
			}

			if (!cancelled) await loadFromHref(DEFAULT_REPO.href, DEFAULT_REPO.id);
			if (!cancelled && !yamlText.trim()) yamlText = FIXTURE_YAML;
		})();
		return () => {
			cancelled = true;
			if (copiedTimer) clearTimeout(copiedTimer);
		};
	});

	function jumpToBox() {
		document.getElementById('box')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
	}

	async function runScore() {
		if (!deps) {
			scoreCard = null;
			scoreError = JSON.stringify(
				{ error: 'kernel_not_ready', message: kernelError || 'WASM not ready' },
				null,
				2
			);
			return;
		}
		busy = 'score';
		try {
			const result = await runScoreFafSafe({ yaml: yamlText }, deps);
			if (result && typeof result === 'object' && typeof result.score === 'number' && !result.error) {
				scoreCard = result;
				scoreError = '';
			} else {
				scoreCard = null;
				scoreError = JSON.stringify(result, null, 2);
			}
		} finally {
			busy = '';
		}
	}

	function runEmit() {
		busy = 'emit';
		try {
			agentsMd = emitAgentsMd(yamlText).markdown;
			agentsError = '';
		} catch (err) {
			agentsMd = '';
			agentsError = JSON.stringify(toToolError(err), null, 2);
		} finally {
			busy = '';
		}
	}

	async function selectView(next) {
		view = next;
		if (next === 'score') await runScore();
		if (next === 'agents') runEmit();
		jumpToBox();
	}

	function jumpTool(name) {
		if (name === 'score_faf') selectView('score');
		else if (name === 'emit_agents_md') selectView('agents');
		else if (name === 'fill_6ws') {
			document.getElementById('sixws')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
		} else {
			selectView('card');
		}
	}

	async function loadFromHref(href, id) {
		repoLoading = true;
		repoNote = '';
		try {
			const urls = fafUrlsFromInput(href);
			/** @type {unknown} */
			let last = null;
			for (const candidate of urls) {
				try {
					const text = await fetchAllowedYaml(new URL(candidate));
					yamlText = text;
					repoInput = href;
					activeRepo = id || '';
					repoNote = '';
					view = 'card';
					return;
				} catch (err) {
					last = err;
				}
			}
			repoNote =
				messageOf(last) +
				' This page reads a project.faf that is already there — it does not clone. No file in that repo yet? Make one on /try.';
		} catch (err) {
			repoNote = messageOf(err);
		} finally {
			repoLoading = false;
		}
	}

	function onPickRepo(repo) {
		loadFromHref(repo.href, repo.id);
	}

	function onLoadRepo(event) {
		event.preventDefault();
		loadFromHref(repoInput, '');
	}

	function scoreText() {
		if (scoreError) return scoreError;
		if (!scoreCard) return '';
		const lines = [`score: ${scoreCard.score}`];
		if (scoreCard.tier) lines.push(`tier: ${scoreCard.tier}`);
		if (scoreCard.populated != null && (scoreCard.active != null || scoreCard.total != null)) {
			lines.push(`${scoreCard.populated} / ${scoreCard.active ?? scoreCard.total}`);
		}
		if (scoreCard.gaps?.length) lines.push(`missing: ${scoreCard.gaps.join(', ')}`);
		return lines.join('\n');
	}

	function paneText() {
		if (view === 'card') return contextView ? contextCardText(contextView) : '';
		if (view === 'agents') return agentsError || agentsMd;
		return scoreText();
	}

	async function copyView() {
		const text = paneText();
		if (!text) return;
		try {
			await navigator.clipboard.writeText(text);
		} catch {
			return;
		}
		copied = true;
		if (copiedTimer) clearTimeout(copiedTimer);
		copiedTimer = setTimeout(() => {
			copied = false;
			copiedTimer = null;
		}, 1500);
	}

	function downloadBlob(filename, body) {
		const blob = new Blob([body], { type: 'text/markdown;charset=utf-8' });
		const url = URL.createObjectURL(blob);
		const a = document.createElement('a');
		a.href = url;
		a.download = filename;
		a.click();
		URL.revokeObjectURL(url);
	}

	async function downloadAll() {
		await runScore();
		runEmit();
		const body = [
			'# Context Card',
			'',
			(contextView ? contextCardText(contextView) : '') || '(none)',
			'',
			'# AGENTS.md',
			'',
			agentsMd || agentsError || '(none)',
			'',
			'# Score',
			'',
			scoreText() || '(none)',
			''
		].join('\n');
		downloadBlob('context.md', body);
	}

	/** @param {SubmitEvent} event */
	function onFill6ws(event) {
		event.preventDefault();
		const yaml = fill6wsYaml({ who, what, why, where, when, how });
		sixYaml = yaml;
		view = 'card';
		jumpToBox();
		if (typeof event.respondWith === 'function') {
			event.respondWith(Promise.resolve({ yaml }));
		}
	}

	function sourceLabel(source) {
		if (source === 'native') return 'native document.modelContext';
		if (source === 'polyfill') return 'polyfill (@mcp-b/webmcp-polyfill)';
		if (source === 'loading') return 'detecting…';
		return 'not available — human UI still works';
	}
</script>

<svelte:head>
	<title>WebMCP playground — Score Context in the tab | FAF</title>
	<meta
		name="description"
		content="Paste your project.faf. See the Context Card, AGENTS.md, and the score in the browser. Try the sample, then use yours."
	/>
	<meta property="og:type" content="website" />
	<meta property="og:title" content="WebMCP playground — Score Context in the tab" />
	<meta
		property="og:description"
		content="Paste your project.faf. See the Context Card, AGENTS.md, and the score in the browser."
	/>
	<meta property="og:url" content="https://faf.one/webmcp" />
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content="WebMCP playground — Score Context in the tab" />
	<meta
		name="twitter:description"
		content="Paste your project.faf. See the Context Card, AGENTS.md, and the score in the browser."
	/>
</svelte:head>

<main class="page">
	<header class="hero">
		<p class="kicker">Demo · IANA <code>application/vnd.faf+yaml</code></p>
		<h1>Score Context in the tab.</h1>
		<p class="sub">
			This page reads a <code>project.faf</code> from a public repo that already has one — no clone.
			Context Card, AGENTS.md, and Score run on that file. Famous repos without a
			<code>project.faf</code> need <a href="/try"><code>faf git</code></a> first.
		</p>
		<ol class="how">
			<li>The box loads from a real repo so it always has data.</li>
			<li>Pick ours, or paste a GitHub URL whose repo already has <code>project.faf</code>.</li>
			<li>
				No file in that repo yet? That’s a clone —
				<a href="/try">make one in one line</a>.
			</li>
		</ol>
		<p class="enable">
			An agent can call the same tools. Enable <code>{FLAG}</code>
			or the
			<a href={INSPECTOR} target="_blank" rel="noopener noreferrer">Model Context Tool Inspector</a>.
			<span class="val"> · {sourceLabel(webmcpSource)}</span>
		</p>
	</header>

	<section class="tools" aria-labelledby="tools-heading">
		<h2 id="tools-heading">Tools this page exposes</h2>
		<p class="hint">Same names an agent sees — plus what each one does.</p>
		<ol class="tool-list">
			{#each displayTools as name}
				<li>
					<button type="button" class="tool-jump" onclick={() => jumpTool(name)}>
						<code>{name}</code>
						<span class="blurb">{TOOL_BLURB[name] ?? ''}</span>
					</button>
				</li>
			{/each}
		</ol>
	</section>

	<section id="box" class="work-box" aria-labelledby="score-heading">
		<div class="row-head">
			<h2 id="score-heading"><code>project.faf</code></h2>
		</div>
		<p class="hint">Loaded from a repo that already has the file. Context Card, AGENTS.md, and Score read this box.</p>
		<div class="repo-row" role="group" aria-label="Demo repos">
			{#each DEMO_REPOS as repo}
				<button
					type="button"
					class="ghost"
					class:active={activeRepo === repo.id}
					onclick={() => onPickRepo(repo)}
					disabled={repoLoading}
				>
					{repo.label}
				</button>
			{/each}
		</div>
		<form class="repo-form" onsubmit={onLoadRepo}>
			<label class="sr-only" for="repo-url">Repo URL</label>
			<input
				id="repo-url"
				type="url"
				bind:value={repoInput}
				placeholder="https://github.com/owner/repo"
				spellcheck="false"
			/>
			<button type="submit" class="ghost" disabled={repoLoading}>Load repo</button>
		</form>
		{#if repoNote}
			<p class="repo-note">{repoNote}</p>
		{/if}
		<label class="sr-only" for="faf-yaml">project.faf</label>
		<textarea
			id="faf-yaml"
			bind:value={yamlText}
			spellcheck="false"
			placeholder="Loads from a repo. Or paste a project.faf."
		></textarea>

		<div class="tabs" role="tablist" aria-label="View">
			<button
				type="button"
				role="tab"
				id="tab-card"
				aria-selected={view === 'card'}
				aria-controls="pane-card"
				onclick={() => selectView('card')}
			>
				Context Card
			</button>
			<button
				type="button"
				role="tab"
				id="tab-agents"
				aria-selected={view === 'agents'}
				aria-controls="pane-agents"
				onclick={() => selectView('agents')}
				disabled={busy === 'emit'}
			>
				AGENTS.md
			</button>
			<button
				type="button"
				role="tab"
				id="tab-score"
				aria-selected={view === 'score'}
				aria-controls="pane-score"
				onclick={() => selectView('score')}
				disabled={busy === 'score'}
			>
				Score
			</button>
		</div>
		<div class="view-actions">
			<button type="button" class="ghost" onclick={copyView} disabled={!paneText()}>
				{copied ? 'Copied' : 'Copy'}
			</button>
			<button type="button" class="ghost" onclick={downloadAll} disabled={!!busy}>
				Download all 3
			</button>
		</div>

		<div
			id="pane-card"
			class="pane"
			role="tabpanel"
			aria-labelledby="tab-card"
			hidden={view !== 'card'}
		>
			{#if contextView && (contextView.name || contextView.goal || contextView.six.who)}
				<div class="context-card">
					{#if contextView.name}<h3 class="card-name">{contextView.name}</h3>{/if}
					{#if contextView.goal}<p class="card-goal">{contextView.goal}</p>{/if}
					<div class="card-meta">
						{#if contextView.language}<span>{contextView.language}</span>{/if}
						{#if contextView.version}<span>project.faf {contextView.version}</span>{/if}
					</div>
					<dl class="card-six">
						{#each ['who', 'what', 'why', 'where', 'when', 'how'] as key}
							{#if contextView.six[key]}
								<div>
									<dt>{key}</dt>
									<dd>{contextView.six[key]}</dd>
								</div>
							{/if}
						{/each}
					</dl>
					{#if contextView.stack.length}
						<ul class="card-stack">
							{#each contextView.stack as row}
								<li><span>{row.key}</span> {row.value}</li>
							{/each}
						</ul>
					{/if}
				</div>
			{:else}
				<pre class="output">Paste a project.faf to view the Context Card.</pre>
			{/if}
		</div>

		<div
			id="pane-agents"
			class="pane"
			role="tabpanel"
			aria-labelledby="tab-agents"
			hidden={view !== 'agents'}
		>
			<pre class="output">{agentsError || agentsMd || 'Open AGENTS.md to write it from the file.'}</pre>
		</div>

		<div
			id="pane-score"
			class="pane"
			role="tabpanel"
			aria-labelledby="tab-score"
			hidden={view !== 'score'}
		>
			{#if scoreCard}
				<div class="score-view">
					<div class="card-score">{scoreCard.score}</div>
					<div class="card-meta">
						{#if scoreCard.tier}<span>{scoreCard.tier}</span>{/if}
						{#if scoreCard.populated != null && (scoreCard.active != null || scoreCard.total != null)}
							<span>{scoreCard.populated} / {scoreCard.active ?? scoreCard.total}</span>
						{/if}
					</div>
					{#if scoreCard.gaps?.length}
						<p class="card-gaps">Missing: {scoreCard.gaps.join(', ')}</p>
					{/if}
				</div>
			{:else}
				<pre class="output">{scoreError || 'Open Score to get the number.'}</pre>
			{/if}
		</div>
	</section>

	<section id="sixws" class="ws-block" aria-labelledby="ws-heading">
		<h2 id="ws-heading">Who / What / Why / Where / When / How</h2>
		<p class="hint">Returns YAML slots only — no file is saved, no navigation.</p>
		<form
			class="ws-form"
			toolname="fill_6ws"
			tooldescription={FILL_6WS_DESCRIPTION}
			toolautosubmit
			onsubmit={onFill6ws}
		>
			<label>
				<span>who</span>
				<input name="who" bind:value={who} toolparamdescription="Who is this for?" />
			</label>
			<label>
				<span>what</span>
				<input name="what" bind:value={what} toolparamdescription="What does it do?" />
			</label>
			<label>
				<span>why</span>
				<input name="why" bind:value={why} toolparamdescription="Why does it exist?" />
			</label>
			<label>
				<span>where</span>
				<input name="where" bind:value={where} toolparamdescription="Where does it run?" />
			</label>
			<label>
				<span>when</span>
				<input name="when" bind:value={when} toolparamdescription="When is it happening?" />
			</label>
			<label>
				<span>how</span>
				<input name="how" bind:value={how} toolparamdescription="How is it delivered?" />
			</label>
			<button type="submit" class="primary">Return YAML</button>
		</form>
	</section>

	<p class="foot-note">
		Read-only. Three tools. Origin-isolated. Help guide what we build —
		<a
			href="https://twitter.com/intent/tweet?text=Help%20guide%20what%20we%20build%20%E2%80%94%20Comments%20%C2%B7%20suggestions%20welcome.&url=https%3A%2F%2Ffaf.one%2Fwebmcp"
			target="_blank"
			rel="noopener noreferrer">comments · suggestions welcome</a
		>.
	</p>

	<PageActions
		headline="Score Context in the tab."
		point1="Three read-only tools. WASM in the page. No local MCP process."
		point2="Help guide what we build — comments · suggestions welcome."
		url="https://faf.one/webmcp"
		cta="faf.one/webmcp"
		ctaPrefix="Open →"
		hashtags="FAF,WebMCP"
	/>
</main>

<style>
	.page {
		max-width: 52rem;
		margin: 0 auto;
		padding: 4.5rem 1.25rem 3rem;
	}

	.hero h1 {
		font-size: clamp(1.8rem, 4vw, 2.6rem);
		line-height: 1.15;
		margin: 0.35rem 0 0.75rem;
		letter-spacing: -0.03em;
	}

	.kicker {
		margin: 0;
		font-size: 0.8rem;
		font-weight: 600;
		letter-spacing: 0.04em;
		text-transform: uppercase;
		color: var(--faf-gray);
	}

	.sub,
	.enable,
	.hint,
	.how,
	.foot-note {
		color: var(--faf-gray);
		line-height: 1.55;
	}

	.how {
		margin: 0 0 1.15rem;
		padding-left: 1.2rem;
		color: var(--faf-ink);
	}

	.how a {
		color: var(--faf-cyan-text);
	}

	:global([data-theme='dark']) .how a {
		color: var(--faf-cyan-dark);
	}

	.sub {
		margin: 0 0 1rem;
		font-size: 1.05rem;
		color: var(--faf-ink);
	}

	.enable {
		margin: 0 0 1.25rem;
		font-size: 0.95rem;
	}

	.enable a,
	.foot-note a {
		color: var(--faf-cyan-text);
	}

	:global([data-theme='dark']) .enable a,
	:global([data-theme='dark']) .foot-note a {
		color: var(--faf-cyan-dark);
	}

	code {
		font-family: var(--font-mono);
		font-size: 0.9em;
	}

	.status {
		list-style: none;
		padding: 0;
		margin: 0 0 2rem;
		display: grid;
		gap: 0.4rem;
	}

	.status li {
		display: flex;
		gap: 0.75rem;
		flex-wrap: wrap;
		font-size: 0.9rem;
	}

	.key {
		font-weight: 700;
		min-width: 4.5rem;
	}

	.val {
		color: var(--faf-gray);
	}

	section {
		margin: 0 0 2rem;
		padding: 1.25rem 1.2rem 1.35rem;
		background: var(--faf-surface);
		border: 1px solid var(--faf-hairline);
		border-radius: 12px;
	}

	h2 {
		margin: 0 0 0.5rem;
		font-size: 1.05rem;
	}

	.tool-list {
		margin: 0.5rem 0 0;
		padding-left: 1.35rem;
	}

	.tool-list li {
		padding: 0.12rem 0;
	}

	.tool-jump {
		display: grid;
		grid-template-columns: minmax(10.5rem, 13rem) 1fr;
		gap: 0.35rem 1.15rem;
		align-items: baseline;
		width: 100%;
		text-align: left;
		font: inherit;
		background: transparent;
		border: 0;
		padding: 0.28rem 0.15rem;
		cursor: pointer;
		border-radius: 6px;
	}

	.tool-jump:hover {
		background: var(--faf-code-bg);
	}

	.tool-list code {
		font-family: var(--font-mono);
	}

	.tool-list .blurb {
		color: var(--faf-gray);
		font-size: 0.92rem;
		line-height: 1.4;
	}

	.row-head {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 0.75rem;
		flex-wrap: wrap;
		margin-bottom: 0.75rem;
	}

	.row-head h2 {
		margin: 0;
	}

	.repo-row {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		margin: 0 0 0.65rem;
	}

	.repo-row .active {
		background: var(--faf-orange);
		color: var(--faf-on-accent);
		border-color: var(--faf-orange);
	}

	.repo-form {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		margin: 0 0 0.65rem;
	}

	.repo-form input {
		flex: 1 1 16rem;
	}

	.repo-note {
		margin: 0 0 0.75rem;
		color: var(--faf-gray);
		font-size: 0.9rem;
		line-height: 1.45;
	}

	#box {
		scroll-margin-top: 4.5rem;
	}

	#sixws {
		scroll-margin-top: 4.5rem;
	}

	.tabs {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		gap: 0.35rem;
		margin: 0 0 0.85rem;
	}

	.tabs button {
		font: inherit;
		font-weight: 700;
		font-size: 0.9rem;
		padding: 0.55rem 0.4rem;
		border-radius: 8px;
		cursor: pointer;
		background: transparent;
		color: var(--faf-ink);
		border: 2px solid var(--faf-border-strong);
	}

	.tabs button[aria-selected='true'] {
		background: var(--faf-orange);
		color: var(--faf-on-accent);
		border-color: var(--faf-orange);
	}

	.tabs button:disabled {
		opacity: 0.55;
		cursor: wait;
	}

	.pane {
		min-height: 10rem;
	}

	.view-actions {
		display: flex;
		justify-content: flex-end;
		flex-wrap: wrap;
		gap: 0.5rem;
		margin: 0 0 0.75rem;
	}

	textarea,
	input,
	.output {
		width: 100%;
		font-family: var(--font-mono);
		font-size: 0.85rem;
		background: var(--faf-code-bg);
		color: var(--faf-ink);
		border: 1px solid var(--faf-hairline);
		border-radius: 8px;
		padding: 0.75rem;
	}

	textarea {
		min-height: 11rem;
		resize: vertical;
	}

	.ws-form {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 0.75rem 1rem;
	}

	.ws-form label {
		display: flex;
		flex-direction: column;
		gap: 0.3rem;
		font-size: 0.8rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.04em;
		color: var(--faf-gray);
	}

	.ws-form button {
		grid-column: 1 / -1;
		justify-self: start;
		margin-top: 0.25rem;
	}

	.primary,
	.ghost {
		font: inherit;
		font-weight: 700;
		border-radius: 8px;
		padding: 0.55rem 0.95rem;
		cursor: pointer;
	}

	.primary {
		background: var(--faf-orange);
		color: var(--faf-on-accent);
		border: 2px solid var(--faf-orange);
	}

	.primary:hover {
		background: var(--faf-orange-dark);
		border-color: var(--faf-orange-dark);
	}

	.ghost {
		background: transparent;
		color: var(--faf-ink);
		border: 2px solid var(--faf-border-strong);
	}

	.primary:disabled,
	.ghost:disabled {
		opacity: 0.55;
		cursor: wait;
	}

	.output {
		min-height: 10rem;
		white-space: pre-wrap;
		overflow: auto;
		margin: 0;
	}

	.context-card,
	.score-view {
		padding: 1.25rem 1.1rem 1.15rem;
		background: var(--faf-code-bg);
		border: 1px solid var(--faf-hairline);
		border-radius: 8px;
		min-height: 10rem;
	}

	.card-name {
		margin: 0 0 0.4rem;
		font-size: 1.35rem;
		letter-spacing: -0.02em;
	}

	.card-goal {
		margin: 0 0 0.75rem;
		line-height: 1.45;
	}

	.card-six {
		margin: 0.9rem 0 0;
		display: grid;
		gap: 0.45rem 1rem;
	}

	.card-six dt {
		font-size: 0.72rem;
		font-weight: 700;
		letter-spacing: 0.04em;
		text-transform: uppercase;
		color: var(--faf-gray);
	}

	.card-six dd {
		margin: 0.1rem 0 0;
	}

	.card-stack {
		margin: 1rem 0 0;
		padding: 0;
		list-style: none;
		color: var(--faf-gray);
		font-size: 0.9rem;
	}

	.card-stack span {
		font-weight: 700;
		color: var(--faf-ink);
		margin-right: 0.35rem;
	}

	.card-score {
		font-size: 3rem;
		font-weight: 800;
		letter-spacing: -0.04em;
		line-height: 1;
		color: var(--faf-orange);
	}

	.card-meta {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem 1rem;
		margin-top: 0.75rem;
		color: var(--faf-gray);
		font-size: 0.92rem;
	}

	.card-gaps {
		margin: 0.9rem 0 0;
		color: var(--faf-ink);
		font-size: 0.9rem;
		line-height: 1.45;
	}

	.foot-note {
		font-size: 0.9rem;
		margin: 0 0 0.5rem;
	}

	.sr-only {
		position: absolute;
		width: 1px;
		height: 1px;
		padding: 0;
		margin: -1px;
		overflow: hidden;
		clip: rect(0, 0, 0, 0);
		white-space: nowrap;
		border: 0;
	}

	@media (max-width: 640px) {
		.ws-form {
			grid-template-columns: 1fr;
		}
		.tool-jump {
			grid-template-columns: 1fr;
		}
		.tabs {
			grid-template-columns: 1fr;
		}
		textarea {
			min-height: 9rem;
		}
	}
</style>
