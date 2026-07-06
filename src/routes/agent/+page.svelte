<script>
	import FafLogo from '$lib/components/FafLogo.svelte';
	import PageActions from '$lib/components/PageActions.svelte';

	let copiedKey = $state(null);
	let activeTab = $state('claude');

	function copy(key, command) {
		navigator.clipboard.writeText(command);
		copiedKey = key;
		setTimeout(() => copiedKey = null, 2000);
	}

	const softwareSchema = {
		"@context": "https://schema.org",
		"@type": "SoftwareApplication",
		"name": "faf-agent-mcp",
		"alternateName": "FAF Agent",
		"applicationCategory": "DeveloperApplication",
		"operatingSystem": "Any (Python 3.10+)",
		"softwareVersion": "0.1.1",
		"description": "Format-grade MCP that cites the FAF spec on every answer or refuses out of scope. Six tools, the size of FAF.",
		"url": "https://faf.one/agent",
		"downloadUrl": "https://pypi.org/project/faf-agent-mcp/",
		"license": "https://opensource.org/licenses/MIT",
		"offers": {
			"@type": "Offer",
			"price": "0",
			"priceCurrency": "USD"
		},
		"author": {
			"@type": "Organization",
			"name": "FAF",
			"url": "https://faf.one"
		},
		"sameAs": [
			"https://pypi.org/project/faf-agent-mcp/",
			"https://github.com/Wolfe-Jam/faf-agent",
			"https://gravatar.com/fafagent"
		]
	};

	const orgSchema = {
		"@context": "https://schema.org",
		"@type": "Organization",
		"name": "FAF Agent",
		"alternateName": "Voice of FAF",
		"description": "Being the exact same size as FAF via bi-sync, I cite the FAF spec on every answer, or refuse out of scope without drama. Built for humans, agents, teams, and models.",
		"url": "https://faf.one/agent",
		"logo": "https://faf.one/orange-smiley.svg",
		"sameAs": [
			"https://gravatar.com/fafagent",
			"https://github.com/Wolfe-Jam/faf-agent",
			"https://pypi.org/project/faf-agent-mcp/"
		]
	};
</script>

<svelte:head>
	<title>FAF Agent — The Voice of FAF | faf.one</title>
	<meta name="description" content="The Voice of FAF — format-grade MCP that cites the spec on every answer or refuses out of scope. Built for humans, agents, teams, and models. uvx faf-agent-mcp." />
	<link rel="canonical" href="https://faf.one/agent" />

	<meta property="og:type" content="website" />
	<meta property="og:title" content="FAF Agent — The Voice of FAF" />
	<meta property="og:description" content="Cites the spec on every answer, or refuses out of scope without drama." />
	<meta property="og:url" content="https://faf.one/agent" />
	<meta property="og:image" content="https://faf.one/og/agent-og-1200x630.png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@wolfejam77" />
	<meta name="twitter:title" content="FAF Agent — The Voice of FAF" />
	<meta name="twitter:description" content="Cites the spec on every answer, or refuses out of scope without drama." />
	<meta name="twitter:image" content="https://faf.one/og/agent-og-1200x630.png" />

	{@html `<script type="application/ld+json">${JSON.stringify(softwareSchema)}</script>`}
	{@html `<script type="application/ld+json">${JSON.stringify(orgSchema)}</script>`}
</svelte:head>

<main>
	<section class="hero">
		<div class="logo-row">
			<FafLogo size="medium" dotColor="orange" dotOnly={true} />
		</div>
		<h1>FAF Agent</h1>
		<p class="tagline">The Voice of FAF</p>
		<p class="audience">Built for humans, agents, teams, and models.</p>
		<p class="bio">Being the exact same size as FAF via bi-sync, I cite the FAF spec on every answer, or refuse out of scope without drama.</p>

		<div class="spacer"></div>

		<button class="install" onclick={() => copy('uvx', 'uvx faf-agent-mcp')}>
			<code>uvx faf-agent-mcp</code>
			<span class="copy-hint">{copiedKey === 'uvx' ? 'Copied!' : 'click to copy'}</span>
		</button>
		<a
			href="https://docs.astral.sh/uv/getting-started/installation/"
			target="_blank"
			rel="noopener noreferrer"
			class="install-help"
		>
			don't have uv? <span class="install-help-arrow">install it in 5 seconds →</span>
		</a>
		<div class="install-or"><span>or</span></div>
		<div class="install-alts">
			<button class="install-alt" onclick={() => copy('pipx', 'pipx install faf-agent-mcp')}>
				<span class="alt-arrow">↳</span>
				<code>pipx install faf-agent-mcp</code>
				<span class="alt-state">{copiedKey === 'pipx' ? '✓ Copied' : 'copy'}</span>
			</button>
			<button class="install-alt" onclick={() => copy('pip', 'python3 -m pip install faf-agent-mcp')}>
				<span class="alt-arrow">↳</span>
				<code>python3 -m pip install faf-agent-mcp</code>
				<span class="alt-state">{copiedKey === 'pip' ? '✓ Copied' : 'copy'}</span>
			</button>
		</div>
		<a
			href="https://faf-voice.vercel.app/agent"
			target="_blank"
			rel="noopener noreferrer"
			class="chat-cta hero-cta"
		>
			Chat to FAFA live
			<span class="chat-cta-arrow">&rarr;</span>
		</a>
		<a class="fam-tag" href="https://mcpaas.live/claim" target="_blank" rel="noopener">Join the FAM 🐘 →</a>
		<p class="manifesto">FAF defines. MD instructs. AI codes.</p>
		<p class="response">I speak their language.</p>
	</section>

	<section class="chat">
		<h2>Chat to FAFA. In FAF-Voice.</h2>
		<p class="section-sub">Type or Talk &mdash; FAFA cites the spec or refuses out of scope.</p>
		<a
			href="https://faf-voice.vercel.app/agent"
			class="chat-cta"
			target="_blank"
			rel="noopener noreferrer"
		>
			Chat to FAFA
			<span class="chat-cta-arrow">&rarr;</span>
		</a>
		<p class="chat-host">faf-voice.vercel.app/agent</p>
		<p class="chat-note">
			Default model: Grok. User-definable per
			<a href="https://github.com/Wolfe-Jam/faf-agent/blob/main/project.faf" target="_blank" rel="noopener noreferrer">project.faf</a>.
		</p>
	</section>

	<section class="what">
		<h2>What it does</h2>
		<p class="section-sub">Six tools. The size of FAF.</p>
		<div class="grid">
			<div class="card">
				<strong>validate_faf <span class="defer">⌚</span></strong>
				<p>Deterministic validation via <code>bunx faf-cli check</code>; this tool wires the same kernel in v0.2.0</p>
			</div>
			<div class="card">
				<strong>score_faf <span class="defer">⌚</span></strong>
				<p>Mk4 scoring via <code>bunx faf-cli score</code>; this tool wires the same kernel in v0.2.0</p>
			</div>
			<div class="card">
				<strong>ask</strong>
				<p>Answer a FAF question with mandatory citation</p>
			</div>
			<div class="card">
				<strong>cite</strong>
				<p>Return the spec section for a topic</p>
			</div>
			<div class="card">
				<strong>etch_memory</strong>
				<p>Write a memory entry to a namepoint</p>
			</div>
			<div class="card">
				<strong>recall_memory</strong>
				<p>Read the soul body for a namepoint</p>
			</div>
		</div>
		<p class="defer-note"><span class="defer">⌚</span> marker: v0.1.x returns a structured <code>not_implemented</code> response that points at <code>faf-cli</code>; the Rust/WASM kernel powering faf-cli's same-name commands wires through to this package in v0.2.0.</p>
	</section>

	<section class="contract">
		<h2>The contract</h2>
		<p class="section-sub">Cite the spec, or refuse. No third option.</p>
		<div class="contract-block">
			<p class="quote">If I can&rsquo;t cite, I don&rsquo;t claim. When uncertain: name the closest match, link to it, route the user to canonical sources.</p>
			<p class="attribution">&mdash; Soul.md, the agent&rsquo;s voice contract</p>
		</div>
		<div class="refusals">
			<h3>Four refusal templates</h3>
			<ul>
				<li><strong>Out of scope</strong> &mdash; <em>&ldquo;That&rsquo;s outside FAF. For [topic], you&rsquo;ll want [redirect].&rdquo;</em></li>
				<li><strong>Below confidence</strong> &mdash; <em>&ldquo;Confidence is below threshold. Closest match: [citation]. For verification: [URL].&rdquo;</em></li>
				<li><strong>Not in corpus</strong> &mdash; <em>&ldquo;Not documented in current FAF specs. Filing as a candidate spec extension.&rdquo;</em></li>
				<li><strong>Asked for opinion</strong> &mdash; <em>&ldquo;I don&rsquo;t carry opinions outside FAF. The spec defines [X].&rdquo;</em></li>
			</ul>
		</div>
	</section>

	<section class="quickstart">
		<h2>Quickstart</h2>
		<div class="qs-step">
			<h3>1. Install</h3>
			<div class="code-block"><code>uvx faf-agent-mcp</code></div>
		</div>
		<div class="qs-step">
			<h3>2. Add to your MCP client</h3>
			<div class="tabs">
				<button class="tab" class:active={activeTab === 'claude'} onclick={() => activeTab = 'claude'}>Claude Code</button>
				<button class="tab" class:active={activeTab === 'cursor'} onclick={() => activeTab = 'cursor'}>Cursor</button>
				<button class="tab" class:active={activeTab === 'continue'} onclick={() => activeTab = 'continue'}>Continue</button>
			</div>
			<div class="tab-content">
				{#if activeTab === 'claude'}
					<p class="tab-note">Add to <code>~/Library/Application Support/Claude/claude_desktop_config.json</code>:</p>
					<div class="code-block"><pre>{`{
  "mcpServers": {
    "faf-agent": {
      "command": "python",
      "args": ["-m", "faf_agent_mcp.server"]
    }
  }
}`}</pre></div>
				{/if}
				{#if activeTab === 'cursor'}
					<p class="tab-note">Add to <code>~/.cursor/mcp.json</code>:</p>
					<div class="code-block"><pre>{`{
  "mcpServers": {
    "faf-agent": {
      "command": "python",
      "args": ["-m", "faf_agent_mcp.server"]
    }
  }
}`}</pre></div>
				{/if}
				{#if activeTab === 'continue'}
					<p class="tab-note">Add to <code>~/.continue/config.json</code>:</p>
					<div class="code-block"><pre>{`{
  "mcpServers": {
    "faf-agent": {
      "command": "python",
      "args": ["-m", "faf_agent_mcp.server"]
    }
  }
}`}</pre></div>
				{/if}
			</div>
		</div>
		<div class="qs-step">
			<h3>3. Optional environment</h3>
			<ul class="env-list">
				<li><code>XAI_API_KEY</code> &mdash; enables real RAG via xAI Grok Collections (Mock used when unset)</li>
				<li><code>MCPAAS_API_KEY</code> &mdash; enables <code>etch_memory</code> / <code>recall_memory</code> against mcpaas.live</li>
			</ul>
		</div>
	</section>

	<section class="delegate">
		<h2>Delegate to FAFA</h2>
		<p class="section-sub">Hand off .faf work. Your agent stays focused.</p>
		<div class="qs-step">
			<h3>Ask &mdash; the oracle</h3>
			<p class="tab-note">Delegate a FAF question over A2A. Cited answer, or an honest refusal.</p>
			<div class="code-block"><pre>{`curl -X POST https://faf-voice.vercel.app/api/a2a \\
  -H 'Content-Type: application/json' \\
  -d '{"jsonrpc":"2.0","id":"1","method":"message/send",
       "params":{"message":{"messageId":"m1","role":"user",
         "parts":[{"kind":"text","text":"How does .faf scoring work?"}]}}}'`}</pre></div>
			<p class="tab-note">MCP: the <code>ask</code> and <code>cite</code> tools.</p>
		</div>
		<div class="qs-step">
			<h3>Validate + score &mdash; deterministic</h3>
			<p class="tab-note">Delegate the check to the deterministic Mk4 kernel &mdash; the same one <code>faf-cli</code> runs. Not a chat guess.</p>
			<div class="code-block"><pre>{`bunx faf-cli check   # validate
bunx faf-cli score   # score`}</pre></div>
			<p class="tab-note">The same kernel wires as native MCP tools (<code>validate_faf</code> / <code>score_faf</code>) in faf-agent v0.2.0.</p>
		</div>
		<div class="qs-step">
			<h3>Discover &mdash; find, then call</h3>
			<p class="tab-note">Agents find FAFA in the AI Catalog, read the card, call the door. No hard-coded URL.</p>
			<div class="code-block"><pre>{`# find it in the catalog
curl https://faf.one/.well-known/ai-catalog.json
# read the A2A card -> supportedInterfaces[0].url
curl https://faf-voice.vercel.app/.well-known/agent-card.json`}</pre></div>
		</div>
	</section>

	<section class="family">
		<h2>The FAF Family</h2>
		<p class="section-sub">One substrate. Four formats. Two architectural layers.</p>
		<div class="family-grid">
			<a href="https://www.iana.org/assignments/media-types/application/vnd.faf+yaml" class="family-card" target="_blank" rel="noopener noreferrer">
				<div class="family-name">.faf</div>
				<div class="family-layer">FCL — Foundational Context Layer</div>
				<div class="family-status">✅ IANA registered</div>
			</a>
			<div class="family-card">
				<div class="family-name">.fafm</div>
				<div class="family-layer">VML — Voice Memory Layer</div>
				<div class="family-status">⌚ IANA DE review</div>
			</div>
			<div class="family-card">
				<div class="family-name">.fafb</div>
				<div class="family-layer">Binary wire format</div>
				<div class="family-status">⌚ Defined, ready</div>
			</div>
			<div class="family-card">
				<div class="family-name">.faf-grid</div>
				<div class="family-layer">GRID — Diagnostic surface</div>
				<div class="family-status">⌚ Spec prep</div>
			</div>
		</div>
	</section>

	<section class="resources">
		<h2>Resources</h2>
		<ul class="resource-list">
			<li><a href="https://github.com/Wolfe-Jam/faf-agent" target="_blank" rel="noopener noreferrer">GitHub repository</a></li>
			<li><a href="https://pypi.org/project/faf-agent-mcp/" target="_blank" rel="noopener noreferrer">PyPI package</a></li>
			<li><a href="https://www.iana.org/assignments/media-types/application/vnd.faf+yaml" target="_blank" rel="noopener noreferrer">IANA: application/vnd.faf+yaml</a></li>
			<li><a href="https://github.com/Wolfe-Jam/faf-agent/blob/main/Soul.md" target="_blank" rel="noopener noreferrer">Soul.md — the voice contract</a></li>
			<li><a href="https://gravatar.com/fafagent" target="_blank" rel="noopener noreferrer">Gravatar profile</a></li>
			<li><a href="/skills">FAF Skills</a></li>
			<li><a href="/">faf.one</a></li>
		</ul>
	</section>

	<PageActions
		headline="An agent that cites the spec — or refuses."
		point1="FAF Agent — format-grade MCP, no drama out of scope."
		point2="Built for humans, agents, teams, and models."
		cta="uvx faf-agent-mcp"
		url="https://faf.one/agent"
		hashtags="AI,Agents,MCP"
	/>
</main>

<style>
	/* /agent is INTENTIONALLY DARK in both themes (carefully tuned
	   dark visual hierarchy across 87 dark-spectrum literals below;
	   not a candidate for theme-aware conversion). Plain rule, NOT
	   `!important` — stops the cascade tug-of-war during client-side
	   navigation between this dark-locked page and light-themed
	   pages. See CLAUDE.md Theming Rules §2 and §4. */
	:global(body) { background: #0a0a0a; color: #eee; }

	main {
		max-width: 720px;
		margin: 0 auto;
		padding: 3rem 1.5rem 5rem;
		color: #eee;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
	}

	.hero {
		text-align: center;
		margin-bottom: 4rem;
		padding-top: 2rem;
	}

	.logo-row {
		display: flex;
		justify-content: center;
		margin-bottom: 1.5rem;
	}

	h1 {
		font-size: 3rem;
		font-weight: 700;
		margin: 0.5rem 0;
		color: #fff;
	}

	.tagline {
		font-size: 1.2rem;
		color: #00ffff;
		font-weight: 600;
		margin: 0.25rem 0 1.25rem;
	}

	.bio {
		color: #ccc;
		font-size: 1.05rem;
		line-height: 1.55;
		max-width: 560px;
		margin: 0 auto 0.5rem;
	}

	.audience {
		color: #eee;
		font-size: 0.95rem;
		font-style: italic;
		margin: 0.25rem 0 0;
	}

	.spacer {
		height: 2.5rem;
	}

	.install {
		display: inline-flex;
		align-items: center;
		gap: 0.75rem;
		background-color: #1a1a1a;
		border: 1px solid #333;
		border-radius: 20px;
		padding: 0.5rem 1.5rem;
		color-scheme: dark;
		cursor: pointer;
		transition: border-color 0.2s;
		font-family: inherit;
	}

	.install:hover {
		border-color: #FF6B35;
	}

	.install code {
		/* Named exception per CLAUDE.md rule 2: install-command CTAs use
		   orange text on near-black bg for the brand command-pop. */
		font-size: 1.1rem;
		color: #FF6B35;
		font-family: 'SF Mono', 'Fira Code', monospace;
		background: none;
		padding: 0;
	}

	.copy-hint {
		/* White chip — rule 2 default (black bg -> white text). Cyan
		   chip overpowered the orange command (which IS the content
		   being copied); white subordinates the action to the content.
		   Action affordance < content it acts upon. */
		background: #000;
		color: #fff;
		border: 1px solid #fff;
		padding: 0.3rem 0.7rem;
		border-radius: 4px;
		font-size: 0.85rem;
		font-weight: 700;
		letter-spacing: 0.05em;
		text-transform: uppercase;
		transition: opacity 0.15s;
	}

	.install:hover .copy-hint {
		opacity: 0.9;
	}

	.install-help {
		display: inline-block;
		margin: 0.65rem 0 0;
		font-size: 0.85rem;
		color: #eee;
		text-decoration: none;
		transition: color 0.2s;
	}

	.install-help:hover {
		color: #00ffff;
	}

	.install-help-arrow {
		color: #eee;
	}

	.install-help:hover .install-help-arrow {
		color: #00ffff;
	}

	.install-or {
		display: flex;
		align-items: center;
		gap: 0.6rem;
		margin: 0.85rem auto 0;
		max-width: 200px;
		color: #eee;
		font-size: 0.85rem;
		letter-spacing: 0.08em;
		text-transform: uppercase;
	}

	.install-or::before,
	.install-or::after {
		content: '';
		flex: 1;
		height: 1px;
		background: #222;
	}

	.install-alts {
		display: flex;
		flex-direction: column;
		gap: 0.4rem;
		margin: 0.5rem 0 0;
		align-items: center;
	}

	.install-alt {
		display: inline-flex;
		align-items: center;
		gap: 0.6rem;
		background: transparent;
		border: 1px dashed #2a2a2a;
		border-radius: 6px;
		padding: 0.35rem 0.85rem;
		color: #eee;
		font-size: 0.8rem;
		cursor: pointer;
		font-family: inherit;
		transition: all 0.2s;
	}

	.install-alt:hover {
		border-color: #FF6B35;
		border-style: solid;
		color: #eee;
	}

	.install-alt code {
		/* Named exception per CLAUDE.md rule 2: install-command CTAs use
		   orange text on near-black bg (matches .install primary CTA). */
		color: #FF6B35;
		font-family: 'SF Mono', 'Fira Code', monospace;
		font-size: 0.85rem;
		background: none;
		padding: 0;
	}

	.alt-arrow {
		color: #eee;
		font-size: 0.9rem;
	}

	.alt-state {
		/* Matches .copy-hint white chip — rule 2 default. */
		background: #000;
		color: #fff;
		border: 1px solid #fff;
		padding: 0.25rem 0.6rem;
		border-radius: 4px;
		font-size: 0.85rem;
		font-weight: 700;
		letter-spacing: 0.05em;
		text-transform: uppercase;
		transition: opacity 0.15s;
	}

	.install-alt:hover .alt-state {
		opacity: 0.9;
	}

	.fam-tag {
		/* Link to mcpaas.live/claim — farms namepoint claims off the FAM-CTA */
		color: #FF6B35;
		font-size: 0.9rem;
		font-weight: 600;
		margin: 0.75rem 0 0;
		letter-spacing: 0.02em;
		text-decoration: none;
		display: inline-block;
		transition: text-shadow 0.2s;
	}

	.fam-tag:hover {
		text-decoration: underline;
		text-underline-offset: 3px;
		text-decoration-color: #FF6B35;
	}

	.manifesto {
		color: #ccc;
		font-size: 0.95rem;
		font-weight: 600;
		margin: 1.25rem 0 0;
		letter-spacing: 0.02em;
	}

	.response {
		color: #00ffff;
		font-size: 0.95rem;
		font-style: italic;
		margin: 0.4rem 0 0;
		letter-spacing: 0.02em;
	}

	h2 {
		font-size: 1.6rem;
		color: #fff;
		margin: 0 0 0.5rem;
		font-weight: 700;
	}

	.section-sub {
		color: #eee;
		font-size: 0.95rem;
		margin: 0 0 1.5rem;
	}

	.chat,
	.what,
	.contract,
	.quickstart,
	.delegate,
	.family,
	.resources {
		margin-bottom: 4rem;
	}

	.chat {
		text-align: center;
	}

	.chat-cta {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.95rem 1.75rem;
		background: #FF6B35;
		color: #000;
		border-radius: 10px;
		font-weight: 700;
		font-size: 1.05rem;
		text-decoration: none;
		transition: transform 0.15s ease, box-shadow 0.15s ease;
	}

	.chat-cta:hover {
		transform: translateY(-1px);
		box-shadow: 0 6px 16px rgba(255, 107, 53, 0.35);
	}

	.hero-cta {
		margin-top: 1.25rem;
		padding: 0.55rem 1.15rem;
		font-size: 0.9rem;
		font-weight: 600;
		background: #00ffff;
		color: #000;
		border: 1px solid #00ffff;
	}

	.hero-cta:hover {
		background: #fff;
		color: #000;
		border-color: #fff;
		box-shadow: 0 4px 14px rgba(0, 212, 212, 0.3);
	}

	.hero-cta .chat-cta-arrow {
		font-size: 1rem;
	}

	.chat-cta-arrow {
		font-size: 1.15rem;
	}

	.chat-host {
		margin: 0.75rem 0 0;
		color: #eee;
		font-size: 0.85rem;
		font-family: 'SF Mono', 'Fira Code', monospace;
	}

	.chat-note {
		margin: 0.5rem 0 0;
		color: #eee;
		font-size: 0.85rem;
	}

	.chat-note a {
		color: #FF6B35;
		text-decoration: none;
	}

	.chat-note a:hover {
		text-decoration: underline;
	}

	.grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 0.75rem;
	}

	.card {
		background: #111;
		border: 1px solid #222;
		border-radius: 8px;
		padding: 1rem;
	}

	.card strong {
		color: #00ffff;
		font-family: 'SF Mono', 'Fira Code', monospace;
		font-size: 0.95rem;
	}

	.card p {
		color: #ccc;
		font-size: 0.9rem;
		margin: 0.4rem 0 0;
		line-height: 1.45;
	}

	.card p code {
		background: #1a1a1a;
		color: #fff;
		padding: 0.05rem 0.35rem;
		border-radius: 3px;
		font-family: 'SF Mono', 'Fira Code', monospace;
		font-size: 0.85rem;
	}

	.defer {
		color: #eee;
		font-size: 0.8rem;
		font-weight: 400;
	}

	.defer-note {
		color: #eee;
		font-size: 0.85rem;
		line-height: 1.55;
		margin: 1rem 0 0;
		padding: 0.75rem 1rem;
		background: rgba(0, 212, 212, 0.04);
		border-left: 2px solid #333;
		border-radius: 4px;
	}

	.defer-note code {
		background: #1a1a1a;
		color: #fff;
		padding: 0.05rem 0.35rem;
		border-radius: 3px;
		font-family: 'SF Mono', 'Fira Code', monospace;
		font-size: 0.8rem;
	}

	.contract-block {
		background: #111;
		border-left: 3px solid #FF6B35;
		padding: 1.25rem 1.5rem;
		border-radius: 4px;
		margin-bottom: 2rem;
	}

	.contract-block .quote {
		color: #ddd;
		font-size: 1.05rem;
		line-height: 1.55;
		margin: 0 0 0.75rem;
	}

	.contract-block .attribution {
		color: #eee;
		font-size: 0.85rem;
		margin: 0;
		font-style: italic;
	}

	.refusals h3 {
		color: #fff;
		font-size: 1.05rem;
		margin: 0 0 1rem;
	}

	.refusals ul {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	.refusals li {
		color: #ccc;
		font-size: 0.95rem;
		line-height: 1.55;
		padding: 0.5rem 0;
		border-bottom: 1px solid #1a1a1a;
	}

	.refusals li:last-child {
		border-bottom: none;
	}

	.refusals strong {
		color: #00ffff;
		font-weight: 600;
	}

	.refusals em {
		color: #eee;
		font-style: italic;
	}

	.qs-step {
		margin-bottom: 1.5rem;
	}

	.qs-step h3 {
		color: #fff;
		font-size: 1.05rem;
		margin: 0 0 0.75rem;
		font-weight: 600;
	}

	.tabs {
		display: flex;
		gap: 0.5rem;
		margin-bottom: 0.75rem;
		flex-wrap: wrap;
	}

	.tab {
		padding: 0.4rem 1rem;
		background: #111;
		border: 1px solid #222;
		border-radius: 6px;
		font-size: 0.9rem;
		font-weight: 600;
		color: #eee;
		cursor: pointer;
		font-family: inherit;
		transition: all 0.2s;
	}

	.tab:hover {
		border-color: #00ffff;
		color: #fff;
	}

	.tab.active {
		background: #00ffff;
		border-color: #00ffff;
		color: #0a0a0a;
	}

	.tab-note {
		color: #eee;
		font-size: 0.85rem;
		margin: 0 0 0.5rem;
	}

	.tab-note code {
		color: #FF6B35;
		font-family: 'SF Mono', 'Fira Code', monospace;
		background: none;
	}

	.code-block {
		background: #111;
		border: 1px solid #1a1a1a;
		color: #eee;
		padding: 0.85rem 1rem;
		border-radius: 6px;
		font-family: 'SF Mono', 'Fira Code', monospace;
		font-size: 0.9rem;
		overflow-x: auto;
	}

	.code-block pre {
		margin: 0;
		white-space: pre-wrap;
		word-wrap: break-word;
	}

	.code-block code {
		color: #FF6B35;
		background: none;
	}

	.env-list {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	.env-list li {
		color: #ccc;
		font-size: 0.95rem;
		padding: 0.5rem 0;
		line-height: 1.55;
	}

	.env-list code {
		color: #00ffff;
		font-family: 'SF Mono', 'Fira Code', monospace;
		font-size: 0.9rem;
	}

	.family-grid {
		display: grid;
		grid-template-columns: 1fr;
		gap: 0.75rem;
	}

	.family-card {
		background: #111;
		border: 1px solid #222;
		border-radius: 8px;
		padding: 1rem 1.25rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-wrap: wrap;
		gap: 0.75rem;
		text-decoration: none;
		color: inherit;
		transition: border-color 0.2s;
	}

	a.family-card:hover {
		border-color: #00ffff;
	}

	.family-name {
		color: #FF6B35;
		font-family: 'SF Mono', 'Fira Code', monospace;
		font-size: 1.05rem;
		font-weight: 700;
		min-width: 60px;
	}

	.family-layer {
		color: #ccc;
		font-size: 0.9rem;
		flex: 1;
	}

	.family-status {
		color: #eee;
		font-size: 0.85rem;
	}

	.resource-list {
		list-style: none;
		padding: 0;
		margin: 0;
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 0.5rem 1.5rem;
	}

	.resource-list li {
		padding: 0.4rem 0;
	}

	.resource-list a {
		color: #ccc;
		text-decoration: none;
		font-size: 0.95rem;
		transition: color 0.2s;
	}

	.resource-list a:hover {
		color: #00ffff;
	}

	@media (max-width: 600px) {
		h1 { font-size: 2.2rem; }
		.grid { grid-template-columns: 1fr; }
		.resource-list { grid-template-columns: 1fr; }
		.family-card { flex-direction: column; align-items: flex-start; }
	}
</style>
