<script>
	// Reusable directory/index skeleton. Same primitive behind /map, /links, /blog:
	// a grouped list of entries with a view toggle. Entry contract:
	//   { title, url, description?, category, emoji?, meta?, external? }
	// config: { defaultView?: 'section'|'az', categoryOrder?: string[], categoryEmoji?: Record<string,string>, unit?: string }
	let { entries = [], config = {} } = $props();

	let view = $state(config.defaultView ?? 'section');

	const order = config.categoryOrder ?? [];
	const catEmoji = config.categoryEmoji ?? {};
	const unit = config.unit ?? 'pages';
	const rank = (c) => { const i = order.indexOf(c); return i === -1 ? order.length + 1 : i; };

	const grouped = $derived.by(() => {
		const m = new Map();
		for (const e of entries) {
			const c = e.category ?? 'More';
			if (!m.has(c)) m.set(c, []);
			m.get(c).push(e);
		}
		return [...m.entries()]
			.sort((a, b) => rank(a[0]) - rank(b[0]) || a[0].localeCompare(b[0]))
			.map(([cat, list]) => [cat, [...list].sort((x, y) => x.title.localeCompare(y.title))]);
	});
	const az = $derived([...entries].sort((a, b) => a.title.localeCompare(b.title)));
</script>

<div class="dir-controls">
	<div class="toggle-group">
		<button class="toggle-btn" class:active={view === 'section'} onclick={() => (view = 'section')}>By Section</button>
		<button class="toggle-btn" class:active={view === 'az'} onclick={() => (view = 'az')}>A–Z</button>
	</div>
	<span class="dir-count">{entries.length} {unit}</span>
</div>

{#snippet card(e)}
	<a
		href={e.url}
		class="dir-card"
		target={e.external ? '_blank' : null}
		rel={e.external ? 'noopener' : null}
	>
		<span class="dir-emoji" aria-hidden="true">{e.emoji ?? '📄'}</span>
		<span class="dir-body">
			<span class="dir-title">{e.title}{#if e.external}&nbsp;↗{/if}</span>
			{#if e.description}<span class="dir-desc">{e.description}</span>{/if}
		</span>
		{#if e.meta}<span class="dir-meta">{e.meta}</span>{/if}
	</a>
{/snippet}

{#if view === 'section'}
	{#each grouped as [cat, list]}
		<section class="dir-section">
			<h2 class="dir-cat">{catEmoji[cat] ?? '📂'} {cat} <span class="cat-count">{list.length}</span></h2>
			<div class="dir-grid">
				{#each list as e (e.url)}{@render card(e)}{/each}
			</div>
		</section>
	{/each}
{:else}
	<div class="dir-grid">
		{#each az as e (e.url)}{@render card(e)}{/each}
	</div>
{/if}

<style>
	/* All colors are flipping tokens → high contrast in BOTH themes (Rule 1). */
	.dir-controls {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
		flex-wrap: wrap;
		margin: 0 0 2rem;
	}
	.toggle-group {
		display: inline-flex;
		border: 2px solid var(--faf-light-gray);
		border-radius: 10px;
		overflow: hidden;
	}
	.toggle-btn {
		background: var(--faf-white);
		color: var(--faf-black);
		border: none;
		padding: 0.5rem 1.1rem;
		font-weight: 700;
		font-size: 0.9rem;
		font-family: inherit;
		cursor: pointer;
	}
	.toggle-btn.active {
		background: var(--faf-black);
		color: var(--faf-white);
	}
	.dir-count {
		color: var(--faf-dark);
		font-weight: 600;
		font-size: 0.9rem;
	}
	.dir-section {
		margin: 0 0 2.5rem;
	}
	.dir-cat {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		font-size: 1.25rem;
		font-weight: 800;
		color: var(--faf-black);
		margin: 0 0 1rem;
	}
	.cat-count {
		font-size: 0.8rem;
		font-weight: 600;
		color: var(--faf-dark);
	}
	.dir-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
		gap: 0.75rem;
	}
	.dir-card {
		display: flex;
		align-items: flex-start;
		gap: 0.75rem;
		padding: 0.9rem 1rem;
		background: var(--faf-gray-light);
		border: 2px solid var(--faf-light-gray);
		border-radius: 10px;
		text-decoration: none;
		transition: transform 0.15s ease, border-color 0.15s ease;
	}
	.dir-card:hover {
		transform: translateY(-2px);
		border-color: var(--faf-orange);
	}
	.dir-emoji {
		font-size: 1.3rem;
		line-height: 1.2;
		flex-shrink: 0;
	}
	.dir-body {
		display: flex;
		flex-direction: column;
		gap: 0.15rem;
		min-width: 0;
	}
	.dir-title {
		font-weight: 700;
		color: var(--faf-black);
	}
	.dir-desc {
		font-size: 0.85rem;
		line-height: 1.4;
		color: var(--faf-dark);
	}
	.dir-meta {
		margin-left: auto;
		font-size: 0.72rem;
		font-weight: 600;
		color: var(--faf-dark);
		white-space: nowrap;
	}
</style>
