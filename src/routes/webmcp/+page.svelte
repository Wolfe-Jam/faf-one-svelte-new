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
		SCORE_FAF_DESCRIPTION,
		SCORE_FAF_SCHEMA,
		TOOL_NAMES
	} from '$lib/webmcp/register';
	import { contextCardText, readContext } from '$lib/webmcp/read-context';
	import { DEFAULT_REPO, DEMO_REPOS, fafUrlsFromInput } from '$lib/webmcp/repo-url';
	import { runScoreFafSafe } from '$lib/webmcp/score-faf';
	import { fetchAllowedYaml } from '$lib/webmcp/yaml-url';

	const INSPECTOR =
		'https://chromewebstore.google.com/detail/model-context-tool-inspec/gbpdfapgefenggkahomfgkhfehlcenpd';
	const FLAG = 'chrome://flags/#enable-webmcp-testing';
	const SOURCE = 'https://github.com/Wolfe-Jam/faf-one-svelte-new/tree/main/src/routes/webmcp';
	const KNOWN_TOOLS = /** @type {readonly string[]} */ (TOOL_NAMES);
	/** @type {Array<keyof import('$lib/webmcp/read-context').SixView>} */
	const SIX_KEYS = ['who', 'what', 'why', 'where', 'when', 'how'];

	/** Hero sample, built from the constants register.ts actually registers — it cannot drift. */
	const SNIPPET_PROPS = Object.entries(SCORE_FAF_SCHEMA.properties)
		.map(([key, p]) => `      ${key}: { type: '${p.type}', description: '${p.description}' }`)
		.join(',\n');
	const SNIPPET = `await document.modelContext.registerTool({
  name: 'score_faf',
  description: ${JSON.stringify(SCORE_FAF_DESCRIPTION)},
  inputSchema: {
    type: '${SCORE_FAF_SCHEMA.type}',
    properties: {
${SNIPPET_PROPS}
    }
  },
  annotations: { readOnlyHint: true },
  execute: async (input) => scoreFaf(input)
});`;

	/** Visitor one-liners — the code name is for the agent; this column is for humans. */
	/** @type {Record<string, string>} */
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
	let kernelError = $state('');
	/** @type {string[]} */
	let listedTools = $state([...KNOWN_TOOLS]);
	let displayTools = $derived(
		KNOWN_TOOLS.filter((n) => listedTools.includes(n)).concat(
			listedTools.filter((n) => !KNOWN_TOOLS.includes(n))
		)
	);
	/** @type {'agents' | 'card' | 'score'} */
	let view = $state('agents');
	let contextView = $derived(readContext(yamlText));
	/** AGENTS.md follows the box, like the Context Card, so the first tab is never empty. */
	let agentsView = $derived.by(() => {
		if (!yamlText.trim()) return { markdown: '', error: '' };
		try {
			return { markdown: emitAgentsMd(yamlText).markdown, error: '' };
		} catch (err) {
			return { markdown: '', error: JSON.stringify(toToolError(err), null, 2) };
		}
	});
	/** @type {null | { score: number, tier?: string, populated?: number, active?: number, total?: number, ignored?: number, gaps?: string[], faf_version?: string }} */
	let scoreCard = $state(null);
	let scoreError = $state('');
	let sixYaml = $state('');
	let busy = $state('');
	let copied = $state(false);
	/** @type {ReturnType<typeof setTimeout> | null} */
	let copiedTimer = $state(null);

	/** @type {null | { scoreYaml: (yaml: string) => string, fetchText: typeof fetchAllowedYaml }} */
	let deps = $state(null);

	// The 6Ws form mirrors the loaded file, so a 100% project shows its own six answers.
	$effect(() => {
		const six = contextView?.six;
		if (!six) return;
		who = six.who;
		what = six.what;
		why = six.why;
		where = six.where;
		when = six.when;
		how = six.how;
		sixYaml = '';
	});

	onMount(() => {
		let cancelled = false;
		(async () => {
			try {
				const { initKernel, scoreYaml } = await import('$lib/webmcp/kernel');
				await initKernel();
				if (cancelled) return;
				deps = { scoreYaml, fetchText: fetchAllowedYaml };
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
			if ('error' in result) {
				scoreCard = null;
				scoreError = JSON.stringify(result, null, 2);
			} else {
				scoreCard = result;
				scoreError = '';
			}
		} finally {
			busy = '';
		}
	}

	/** @param {'agents' | 'card' | 'score'} next */
	async function selectView(next) {
		view = next;
		if (next === 'score') await runScore();
		jumpToBox();
	}

	/** @param {string} name */
	function jumpTool(name) {
		if (name === 'score_faf') selectView('score');
		else if (name === 'emit_agents_md') selectView('agents');
		else if (name === 'fill_6ws') {
			document.getElementById('sixws')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
		} else {
			selectView('card');
		}
	}

	/**
	 * @param {string} href
	 * @param {string} id
	 */
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
					view = 'agents';
					return;
				} catch (err) {
					last = err;
				}
			}
			repoNote =
				messageOf(last) +
				' This page reads a project.faf that is already there — it does not clone.';
		} catch (err) {
			repoNote = messageOf(err);
		} finally {
			repoLoading = false;
		}
	}

	/** @param {import('$lib/webmcp/repo-url').DemoRepo} repo */
	function onPickRepo(repo) {
		loadFromHref(repo.href, repo.id);
	}

	/** @param {SubmitEvent} event */
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
			lines.push(
				`${scoreCard.populated} / ${scoreCard.active ?? scoreCard.total} project context slots (fields) filled`
			);
		}
		if (scoreCard.gaps?.length) lines.push(`missing: ${scoreCard.gaps.join(', ')}`);
		return lines.join('\n');
	}

	function paneText() {
		if (view === 'card') return contextView ? contextCardText(contextView) : '';
		if (view === 'agents') return agentsView.error || agentsView.markdown;
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

	/**
	 * @param {string} filename
	 * @param {string} body
	 */
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
		const body = [
			'# AGENTS.md',
			'',
			agentsView.markdown || agentsView.error || '(none)',
			'',
			'# Context Card',
			'',
			(contextView ? contextCardText(contextView) : '') || '(none)',
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
		if (typeof event.respondWith === 'function') {
			event.respondWith(Promise.resolve({ yaml }));
		}
	}

	/** @param {string} source */
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
		content="Paste your project.faf. See AGENTS.md, the Context Card, and the score in the browser. Try the sample, then use yours."
	/>
	<meta property="og:type" content="website" />
	<meta property="og:title" content="WebMCP playground — Score Context in the tab" />
	<meta
		property="og:description"
		content="Paste your project.faf. See AGENTS.md, the Context Card, and the score in the browser."
	/>
	<meta property="og:url" content="https://faf.one/webmcp" />
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content="WebMCP playground — Score Context in the tab" />
	<meta
		name="twitter:description"
		content="Paste your project.faf. See AGENTS.md, the Context Card, and the score in the browser."
	/>
</svelte:head>

<main class="page">
	<header class="hero">
		<p class="kicker">WebMCP demo</p>
		<h1>Score Context in the tab.</h1>
		<p class="sub">
			This page reads a <code>project.faf</code> (a small YAML file of context to boost AGENTS.md) from a
			public repo that already has one — no clone.
			AGENTS.md, Context Card, and Score run on that file.
		</p>
		<div class="btn-row">
			<a class="primary" href="#try">Try it</a>
			<a class="ghost" href={SOURCE} target="_blank" rel="noopener noreferrer">View source</a>
		</div>
		<pre class="output snippet"><code>{SNIPPET}</code></pre>
	</header>

	<section class="plain" aria-labelledby="why-heading">
		<h2 id="why-heading">Why in the tab?</h2>
		<p>
			WebMCP lets a web page give an agent named tools with typed inputs. This page already holds the
			file and the scorer, so an agent calls <code>score_faf</code> instead of clicking through the UI.
			No local MCP server.
		</p>
	</section>

	<section class="tools" aria-labelledby="tools-heading">
		<h2 id="tools-heading">WebMCP tools</h2>
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

	<h2 id="try" class="section-title">Try it</h2>
	<section id="box" class="work-box" aria-labelledby="score-heading">
		<div class="row-head">
			<h2 id="score-heading"><code>project.faf</code></h2>
		</div>
		<p class="hint">Loaded from a repo that already has the file. AGENTS.md, Context Card, and Score read this box.</p>
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
				id="tab-agents"
				aria-selected={view === 'agents'}
				aria-controls="pane-agents"
				onclick={() => selectView('agents')}
			>
				AGENTS.md
			</button>
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
						{#each SIX_KEYS as key}
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
			<pre class="output">{agentsView.error || agentsView.markdown || 'Paste a project.faf to write AGENTS.md.'}</pre>
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
					<div class="card-score">
						{scoreCard.score}
						{#if scoreCard.score === 100}
							<img class="trophy" src="/faf-trophy.png" alt="Trophy" width="44" height="44" />
						{/if}
					</div>
					<div class="card-meta">
						{#if scoreCard.tier && scoreCard.score !== 100}<span>{scoreCard.tier}</span>{/if}
						{#if scoreCard.populated != null && (scoreCard.active != null || scoreCard.total != null)}
							<span>{scoreCard.populated} / {scoreCard.active ?? scoreCard.total} project context slots (fields) filled</span>
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
		<p class="hint">This file's six human-context slots. Edit any, then Return YAML. Nothing is saved.</p>
		<form
			class="ws-form"
			toolname="fill_6ws"
			tooldescription={FILL_6WS_DESCRIPTION}
			toolautosubmit
			onsubmit={onFill6ws}
		>
			<label>
				<span>who</span>
				<input name="who" bind:value={who} toolparamdescription="Who is this for?" placeholder="Who is this for?" />
			</label>
			<label>
				<span>what</span>
				<input name="what" bind:value={what} toolparamdescription="What does it do?" placeholder="What does it do?" />
			</label>
			<label>
				<span>why</span>
				<input name="why" bind:value={why} toolparamdescription="Why does it exist?" placeholder="Why does it exist?" />
			</label>
			<label>
				<span>where</span>
				<input name="where" bind:value={where} toolparamdescription="Where does it run?" placeholder="Where does it run?" />
			</label>
			<label>
				<span>when</span>
				<input name="when" bind:value={when} toolparamdescription="When is it happening?" placeholder="When is it happening?" />
			</label>
			<label>
				<span>how</span>
				<input name="how" bind:value={how} toolparamdescription="How is it delivered?" placeholder="How is it delivered?" />
			</label>
			<button type="submit" class="primary">Return YAML</button>
		</form>
		{#if sixYaml}
			<pre class="output six-output">{sixYaml}</pre>
		{/if}
	</section>

	<section class="plain" aria-labelledby="use-heading">
		<h2 id="use-heading">How to use</h2>
		<ol class="steps">
			<li>
				<h3>Turn on WebMCP</h3>
				<p>
					Enable <code>{FLAG}</code> and relaunch Chrome, or use the
					<a href={INSPECTOR} target="_blank" rel="noopener noreferrer">Model Context Tool Inspector</a>.
				</p>
			</li>
			<li>
				<h3>Open this page</h3>
				<p>It registers the tools on load. Now: <span class="val">{sourceLabel(webmcpSource)}</span>.</p>
			</li>
			<li>
				<h3>Ask your agent</h3>
				<p>Ask a WebMCP-aware agent to score the project, or run <code>score_faf</code> from the Inspector.</p>
			</li>
			<li>
				<h3>Change the file</h3>
				<p>
					Delete a line in the box, like <code>why:</code>, and score again. The score drops and names
					the missing slot.
				</p>
			</li>
		</ol>
	</section>

	<section class="plain" aria-labelledby="dev-heading">
		<h2 id="dev-heading">How it works</h2>
		<ul class="dev-list">
			<li>
				<code>score_faf</code> and <code>emit_agents_md</code> are registered with
				<code>document.modelContext.registerTool()</code>, <code>readOnlyHint: true</code>.
			</li>
			<li>
				<code>fill_6ws</code> is a plain form with <code>toolname</code>,
				<code>tooldescription</code>, and <code>toolautosubmit</code>. It answers with
				<code>respondWith()</code> and does not navigate.
			</li>
			<li>
				Native <code>document.modelContext</code> first. <code>@mcp-b/webmcp-polyfill</code> only as a
				fallback.
			</li>
			<li>
				Scoring runs as WASM in the tab. The tools' only network call is fetching a
				<code>project.faf</code> over https from <code>raw.githubusercontent.com</code> or
				<code>faf.one</code>, capped at 256 KB.
			</li>
		</ul>
		<p class="hint"><a href={SOURCE} target="_blank" rel="noopener noreferrer">Source and README</a> · MIT</p>
	</section>

	<p class="foot-note">
		Read-only. Three tools. Origin-isolated. Help guide what we build —
		<a
			href="https://twitter.com/intent/tweet?text=Help%20guide%20what%20we%20build%20%E2%80%94%20Comments%20%C2%B7%20suggestions%20welcome.&url=https%3A%2F%2Ffaf.one%2Fwebmcp"
			target="_blank"
			rel="noopener noreferrer">comments · suggestions welcome</a
		>.
	</p>
	<p class="foot-note">
		<a href={SOURCE} target="_blank" rel="noopener noreferrer">Source</a> · <a href="/privacy">Privacy</a>
	</p>

	<PageActions
		headline="Score Context in the tab."
		point1="Three read-only tools. WASM in the page. No local MCP process."
		point2="Help guide what we build — comments · suggestions welcome."
		url="https://faf.one/webmcp"
		cta="faf.one/webmcp"
		ctaPrefix="Open →"
		hashtags="FAF,WebMCP"
		sponsor={false}
	/>
</main>

<style>
	.page {
		max-width: 52rem;
		margin: 0 auto;
		padding: 2.5rem 1.25rem 3rem;
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
		color: var(--faf-dark);
	}

	.sub,
	.hint,
	.foot-note {
		color: var(--faf-dark);
		line-height: 1.55;
	}

	.sub {
		margin: 0 0 1.25rem;
		font-size: 1.05rem;
		color: var(--faf-ink);
	}

	.btn-row {
		display: flex;
		flex-wrap: wrap;
		gap: 0.6rem;
		margin: 0 0 1.25rem;
	}

	.btn-row a {
		display: inline-block;
		text-decoration: none;
	}

	.hero {
		margin: 0 0 2.5rem;
	}

	.output.snippet {
		min-height: 0;
		font-size: 0.8rem;
	}

	section.plain {
		background: transparent;
		border: 0;
		padding: 0;
		margin: 0 0 2.5rem;
	}

	.plain h2,
	.section-title {
		font-size: 1.35rem;
		margin: 0 0 0.6rem;
	}

	.section-title {
		scroll-margin-top: 1rem;
	}

	.plain p {
		margin: 0;
		line-height: 1.6;
	}

	.steps {
		margin: 0.5rem 0 0;
		padding-left: 1.3rem;
		display: grid;
		gap: 0.9rem;
	}

	.steps h3 {
		margin: 0 0 0.2rem;
		font-size: 1rem;
	}

	.steps a,
	.hint a,
	.foot-note a {
		color: var(--faf-cyan-text);
	}

	:global([data-theme='dark']) .steps a,
	:global([data-theme='dark']) .hint a,
	:global([data-theme='dark']) .foot-note a {
		color: var(--faf-cyan-dark);
	}

	code {
		font-family: var(--font-mono);
		font-size: 0.9em;
	}

	.val {
		color: var(--faf-dark);
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
		color: var(--faf-dark);
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
		color: var(--faf-dark);
		font-size: 0.9rem;
		line-height: 1.45;
	}

	#box,
	#sixws {
		scroll-margin-top: 1rem;
	}

	.dev-list {
		margin: 0.5rem 0 0.75rem;
		padding-left: 1.2rem;
		line-height: 1.55;
	}

	.dev-list li {
		padding: 0.15rem 0;
	}

	.six-output {
		min-height: 0;
		margin-top: 0.85rem;
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
		color: var(--faf-dark);
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
		color: var(--faf-dark);
	}

	.card-six dd {
		margin: 0.1rem 0 0;
	}

	.card-stack {
		margin: 1rem 0 0;
		padding: 0;
		list-style: none;
		color: var(--faf-dark);
		font-size: 0.9rem;
	}

	.card-stack span {
		font-weight: 700;
		color: var(--faf-ink);
		margin-right: 0.35rem;
	}

	.card-score {
		display: flex;
		align-items: center;
		gap: 0.6rem;
		font-size: 3rem;
		font-weight: 800;
		letter-spacing: -0.04em;
		line-height: 1;
		color: var(--faf-orange);
	}

	.trophy {
		width: 2.75rem;
		height: 2.75rem;
	}

	.card-meta {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem 1rem;
		margin-top: 0.75rem;
		color: var(--faf-dark);
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
