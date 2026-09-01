<script>
    import PageActions from '$lib/components/PageActions.svelte';

    let { data } = $props();

    const tools = [
        {
            name: 'faf-cli',
            tagline: 'The CLI',
            description: 'Detects your stack, fills project.faf, scores context, authors AGENTS.md / CLAUDE.md / GEMINI.md from one source.',
            features: [
                'Stack and format detection',
                'Raw project files to structured context',
                'Core loop: init, auto, go',
                'Bi-sync and tri-sync, no drift',
                'Bun-native, strict TypeScript'
            ],
            github: 'https://github.com/Wolfe-Jam/faf-cli',
            npm: 'https://www.npmjs.com/package/faf-cli',
            live: 'https://faf-cli.vercel.app',
            install: 'npm install -g faf-cli',
            brewInstall: 'brew install wolfe-jam/faf/faf-cli',
            status: data.versions?.['faf-cli'] || 'npm'
        },
        {
            name: 'FAF Specification',
            tagline: 'The standard',
            description: 'The .faf format specification. IANA-registered, IETF Internet-Draft, Zenodo papers.',
            features: [
                '3 IANA media types: .faf, .fafm, .fafa',
                'IETF Internet-Draft active',
                'Zenodo papers published',
                'Open, community-contributable'
            ],
            github: 'https://github.com/Wolfe-Jam/faf',
            docs: 'https://docs.faf.one',
            status: 'IANA'
        },
        {
            name: 'claude-faf-mcp',
            tagline: 'Anthropic-merged (#2759)',
            description: 'MCP server for Claude Desktop and Claude Code. Loads project.faf context every session.',
            features: [
                'In the official Anthropic MCP registry',
                'Loads project.faf context',
                `${(data.packageStats['claude-faf-mcp'] || 0).toLocaleString()}+ downloads / month`,
                'stdio and Streamable HTTP'
            ],
            github: 'https://github.com/Wolfe-Jam/claude-faf-mcp',
            npm: 'https://www.npmjs.com/package/claude-faf-mcp',
            install: 'npx claude-faf-mcp',
            status: data.versions?.['claude-faf-mcp'] || 'npm'
        },
        {
            name: 'faf-mcp',
            tagline: 'Cursor, IDEs, VS Code',
            description: 'Universal FAF MCP server. Works with any MCP-compatible AI client.',
            features: [
                'Cursor, Windsurf, VS Code',
                'Universal MCP protocol',
                `${(data.packageStats['faf-mcp'] || 0).toLocaleString()}+ downloads / month`,
                'In the official MCP registry'
            ],
            github: 'https://github.com/Wolfe-Jam/faf-mcp',
            npm: 'https://www.npmjs.com/package/faf-mcp',
            install: 'npx faf-mcp',
            status: data.versions?.['faf-mcp'] || 'npm'
        },
        {
            name: 'grok-faf-mcp',
            tagline: 'xAI Grok',
            description: 'Persistent project context for xAI Grok. MCP server on a URL.',
            features: [
                'Built for xAI Grok',
                'MCP server on a URL',
                'In the official MCP registry',
                'IANA-registered .faf format'
            ],
            github: 'https://github.com/Wolfe-Jam/grok-faf-mcp',
            npm: 'https://www.npmjs.com/package/grok-faf-mcp',
            live: 'https://grok.faf.one',
            install: 'npx grok-faf-mcp',
            status: data.versions?.['grok-faf-mcp'] || 'npm'
        },
        {
            name: 'gemini-faf-mcp',
            tagline: 'Google Gemini',
            description: 'Persistent project context for Google Gemini. MCP server plus a Cloud Run REST API.',
            features: [
                'Built for Google Gemini',
                'Unifies CLAUDE.md, GEMINI.md, AGENTS.md',
                'IANA-registered .faf format',
                'Published on PyPI'
            ],
            github: 'https://github.com/Wolfe-Jam/gemini-faf-mcp',
            pypi: 'https://pypi.org/project/gemini-faf-mcp/',
            install: 'pip install gemini-faf-mcp',
            status: 'PyPI'
        },
        {
            name: 'rust-faf-mcp',
            tagline: 'Rust MCP clients',
            description: 'MCP server for .faf built in Rust with the rmcp SDK.',
            features: [
                'Rust plus the rmcp SDK',
                'MCP tools for .faf operations',
                'IANA-registered .faf format',
                'Published on crates.io'
            ],
            github: 'https://github.com/Wolfe-Jam/rust-faf-mcp',
            crates: 'https://crates.io/crates/rust-faf-mcp',
            install: 'cargo install rust-faf-mcp',
            status: 'crates.io'
        },
        {
            name: 'faf-agent-mcp',
            tagline: 'Voice of FAF',
            description: 'FAF Agent, the Voice of FAF. MCP server and a live A2A peer.',
            features: [
                'MCP server (uvx / PyPI)',
                'Live A2A peer, protocol 1.0',
                'Discoverable from the Agent Card',
                'Listed on the A2A partners page'
            ],
            github: 'https://github.com/Wolfe-Jam/faf-agent',
            pypi: 'https://pypi.org/project/faf-agent-mcp/',
            live: 'https://faf.one/agent',
            install: 'uvx faf-agent-mcp',
            status: 'PyPI'
        },
        {
            name: 'faf-python-sdk',
            tagline: 'Python SDK',
            description: 'Parse, validate, and score .faf files in Python. The foundation for Python FAF tools.',
            features: [
                'Parse, validate, score .faf',
                'Foundation for Python FAF tools',
                'IANA-registered .faf format',
                'Published on PyPI'
            ],
            github: 'https://github.com/Wolfe-Jam/faf-python-sdk',
            pypi: 'https://pypi.org/project/faf-python-sdk/',
            install: 'pip install faf-python-sdk',
            status: 'PyPI'
        },
        {
            name: 'faf-rust-sdk',
            tagline: 'Rust SDK',
            description: 'The facade over faf-kernel (parse, validate, score) plus the FAFb binary format.',
            features: [
                'Parse, validate, score .faf',
                'FAFb binary format (v2)',
                'IANA-registered .faf format',
                'Published on crates.io'
            ],
            github: 'https://github.com/Wolfe-Jam/faf-rust-sdk',
            crates: 'https://crates.io/crates/faf-rust-sdk',
            install: 'cargo add faf-rust-sdk',
            status: 'crates.io'
        },
        {
            name: 'faf-wasm-sdk',
            tagline: 'Browser and edge',
            description: 'Persistent project context in the browser. IANA-registered .faf format, WASM runtime.',
            features: [
                'Runs in the browser and at the edge',
                'WASM runtime for .faf scoring',
                'IANA-registered .faf format',
                'Published on npm'
            ],
            github: 'https://github.com/Wolfe-Jam/faf-wasm-sdk',
            npm: 'https://www.npmjs.com/package/faf-wasm-sdk',
            install: 'npm i faf-wasm-sdk',
            status: 'npm'
        },
        {
            name: 'claude-fafm-sdk',
            tagline: 'Portable memory',
            description: 'Portable, cross-vendor AI memory in .fafm. Offline-first, your file, your soul.',
            features: [
                '.fafm Permanent Memory Layer',
                'Cross-vendor and offline-first',
                'IANA-registered .fafm format',
                'Published on PyPI'
            ],
            github: 'https://github.com/Wolfe-Jam/claude-fafm-sdk',
            pypi: 'https://pypi.org/project/claude-fafm-sdk/',
            install: 'pip install claude-fafm-sdk',
            status: 'PyPI'
        },
        {
            name: 'faf-plugins',
            tagline: 'Claude Code marketplace',
            description: 'The FAF Foundation plugin marketplace for Claude Code. The faf and faf-memory plugins.',
            features: [
                'One-command install via /plugin',
                'faf: persistent project context',
                'faf-memory: Permanent Memory Layer',
                'Wraps the FAF MCP servers'
            ],
            github: 'https://github.com/Wolfe-Jam/faf-plugins',
            status: 'Marketplace'
        },
        {
            name: 'WJTTC',
            tagline: 'MCP test certification',
            description: 'Championship-grade test certification for MCP servers. Pass WJTTC, ship with receipts.',
            features: [
                'MCP test suite plus a GitHub Action',
                'In the official MCP registry',
                'Homebrew installable',
                'Beacon tests'
            ],
            github: 'https://github.com/Wolfe-Jam/wjttc',
            npm: 'https://www.npmjs.com/package/wjttc',
            install: 'npx wjttc',
            status: data.versions?.['wjttc'] || 'npm'
        },
        {
            name: 'FAF Dev Tools',
            tagline: 'Browser authoring',
            description: 'Browser-based .faf context authoring. No install. The first FAF engine.',
            features: [
                'Zero install, runs in the browser',
                'Drag-and-drop interface',
                'Authors .faf in the browser',
                'The Mk1 engine'
            ],
            github: 'https://github.com/Wolfe-Jam/faf-dev-tools',
            live: 'https://devtools.faf.one',
            status: 'Beta'
        },
        {
            name: 'Chrome Extension',
            tagline: 'Browser integration',
            description: 'Author .faf context directly from your browser. Approved by Google.',
            features: [
                'One-click context extraction',
                'Works on any GitHub repo',
                'Copy context to clipboard',
                'Approved by Google, live in the Web Store'
            ],
            github: 'https://github.com/Wolfe-Jam/faf-chrome-extension',
            store: 'https://chromewebstore.google.com/detail/lnecebepmpjpilldfmndnaofbfjkjlkm',
            status: 'Live'
        },
        {
            name: 'faf.one',
            tagline: 'The format authority',
            description: 'The official FAF format authority. Docs, blog, downloads, format examples.',
            features: [
                'Complete documentation',
                'Format examples',
                'Live download counter',
                'The canonical home for .faf'
            ],
            github: 'https://github.com/Wolfe-Jam/faf-one-svelte-new',
            live: 'https://faf.one',
            status: 'Live'
        }
    ];

    const builtDate = new Date(data.builtAt).toLocaleDateString('en-US', {
        month: 'short', day: 'numeric', year: 'numeric'
    });
</script>

<svelte:head>
    <title>The FAF Ecosystem — All FAF Tools</title>
    <meta name="description" content="The FAF ecosystem: CLI, MCP servers for Claude / Cursor / Grok / Gemini, SDKs, the plugin marketplace, WJTTC. IANA-registered AI project context.">
</svelte:head>

<main class="ecosystem-page">
    <header class="page-header">
        <h1>The FAF Ecosystem</h1>
        <p class="subtitle">One standard. The tools that implement it.</p>
        <p class="lead">
            <code>.faf</code> is the IANA-registered format. Everything below reads or writes it.
        </p>
    </header>

    <div class="tools-grid">
        {#each tools as tool}
            <article class="tool-card">
                <div class="tool-header">
                    <div class="tool-title">
                        <h2>{tool.name}</h2>
                        <p class="tool-tagline">{tool.tagline}</p>
                    </div>
                    <span class="tool-status">{tool.status}</span>
                </div>
                <p class="tool-description">{tool.description}</p>
                <ul class="tool-features">
                    {#each tool.features as feature}
                        <li>{feature}</li>
                    {/each}
                </ul>
                <div class="tool-links">
                    <a href={tool.github} class="link-primary" target="_blank" rel="noopener">GitHub</a>
                    {#if tool.npm}
                        <a href={tool.npm} class="link-secondary" target="_blank" rel="noopener">npm</a>
                    {/if}
                    {#if tool.crates}
                        <a href={tool.crates} class="link-secondary" target="_blank" rel="noopener">crates.io</a>
                    {/if}
                    {#if tool.pypi}
                        <a href={tool.pypi} class="link-secondary" target="_blank" rel="noopener">PyPI</a>
                    {/if}
                    {#if tool.live}
                        <a href={tool.live} class="link-secondary" target="_blank" rel="noopener">Live</a>
                    {/if}
                    {#if tool.store}
                        <a href={tool.store} class="link-secondary" target="_blank" rel="noopener">Chrome Store</a>
                    {/if}
                    {#if tool.docs}
                        <a href={tool.docs} class="link-secondary">Docs</a>
                    {/if}
                </div>
                {#if tool.install}
                    <div class="install-box"><code>{tool.install}</code></div>
                {/if}
                {#if tool.brewInstall}
                    <div class="install-box"><code>{tool.brewInstall}</code></div>
                {/if}
            </article>
        {/each}
    </div>

    <section class="ecosystem-stats">
        <h2>By the numbers</h2>
        <p class="stats-updated">Live npm downloads and versions. Built {builtDate}.</p>
        <div class="stats-grid">
            <div class="stat">
                <div class="stat-value">{data.totalDownloads.toLocaleString()}+</div>
                <div class="stat-label">npm downloads, last 30 days</div>
            </div>
            <div class="stat">
                <div class="stat-value">{tools.length}</div>
                <div class="stat-label">tools in this list</div>
            </div>
            <div class="stat">
                <div class="stat-value">3</div>
                <div class="stat-label">IANA media types</div>
            </div>
            <div class="stat">
                <div class="stat-value">100%</div>
                <div class="stat-label">open source</div>
            </div>
        </div>
    </section>

    <section class="get-started">
        <h2>Get started</h2>
        <div class="quick-start-options">
            <div class="option">
                <h3>Developers</h3>
                <p>Install the CLI and initialize your project.</p>
                <div class="code-block"><code>npm install -g faf-cli<br/>faf init</code></div>
            </div>
            <div class="option">
                <h3>Claude users</h3>
                <p>Run the MCP server for Claude Desktop.</p>
                <div class="code-block"><code>npx claude-faf-mcp</code></div>
            </div>
            <div class="option">
                <h3>Try it first</h3>
                <p>Score any public GitHub repo. No install.</p>
                <a href="/try" class="btn-primary">Try FAF</a>
            </div>
        </div>
    </section>

    <footer class="ecosystem-footer">
        <p>All tools listed here are open source (MIT).</p>
        <p><a href="https://github.com/topics/faf" target="_blank" rel="noopener">View the faf topic on GitHub</a></p>
        <PageActions
            headline="One standard. A whole ecosystem."
            point1="CLI, MCP servers, SDKs, plugins, testing."
            point2="IANA-registered. Universal AI context."
            url="https://faf.one/ecosystem"
            hashtags="AI,MCP,faf"
        />
    </footer>
</main>

<style>
    .ecosystem-page { background: var(--faf-page-bg); min-height: 100vh; padding: 3rem 2rem; }
    .page-header { max-width: 1200px; margin: 0 auto 3.5rem; text-align: center; }
    .page-header h1 { font-size: clamp(2.5rem, 6vw, 3.5rem); font-weight: 900; letter-spacing: -0.02em; color: var(--faf-black); margin-bottom: 0.75rem; }
    .subtitle { font-size: 1.35rem; color: var(--faf-dark); font-weight: 500; margin: 0 0 1rem 0; }
    .lead { font-size: 1rem; color: var(--faf-dark); margin: 0; }
    .lead code, .tool-description code { background: var(--faf-code-bg); color: var(--faf-black); padding: 0.1rem 0.4rem; border-radius: 4px; font-family: var(--font-mono); font-size: 0.9em; border: 1px solid var(--faf-hairline); }

    .tools-grid { max-width: 1200px; margin: 0 auto 4rem; display: grid; grid-template-columns: repeat(auto-fit, minmax(340px, 1fr)); gap: 1.5rem; }
    .tool-card { background: var(--faf-surface); border: 1px solid var(--faf-surface-border); border-radius: 12px; padding: 1.75rem; transition: border-color 0.2s ease, transform 0.2s ease; }
    .tool-card:hover { border-color: var(--faf-orange); transform: translateY(-3px); }
    .tool-header { display: flex; align-items: flex-start; justify-content: space-between; gap: 1rem; margin-bottom: 0.75rem; }
    .tool-title h2 { font-size: 1.3rem; color: var(--faf-black); margin: 0 0 0.2rem 0; font-family: var(--font-mono); }
    .tool-tagline { font-size: 0.85rem; color: var(--faf-dark); margin: 0; font-weight: 600; }
    .tool-status { background: var(--faf-orange); color: var(--faf-on-accent); padding: 0.2rem 0.6rem; border-radius: 4px; font-size: 0.7rem; font-weight: 700; white-space: nowrap; text-transform: lowercase; }
    .tool-description { color: var(--faf-dark); line-height: 1.6; margin-bottom: 1.25rem; font-size: 0.95rem; }

    .tool-features { list-style: none; padding: 0; margin: 0 0 1.25rem 0; }
    .tool-features li { padding: 0.4rem 0 0.4rem 1.4rem; position: relative; color: var(--faf-dark); font-size: 0.9rem; }
    .tool-features li:before { content: '\2713'; position: absolute; left: 0; color: var(--faf-cyan-text); font-weight: 700; }

    .tool-links { display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 0.75rem; }
    .link-primary, .link-secondary { padding: 0.4rem 0.9rem; border-radius: 6px; text-decoration: none; font-weight: 600; font-size: 0.85rem; transition: all 0.15s ease; }
    .link-primary { background: var(--faf-orange); color: var(--faf-on-accent); }
    .link-primary:hover { transform: translateY(-1px); }
    .link-secondary { background: var(--faf-gray-light); color: var(--faf-black); border: 1px solid var(--faf-hairline); }
    .link-secondary:hover { border-color: var(--faf-border-strong); }

    .install-box { background: var(--faf-solid-bg); color: var(--faf-solid-fg); padding: 0.7rem 1rem; border-radius: 6px; margin-top: 0.5rem; }
    .install-box code { font-family: var(--font-mono); font-size: 0.8rem; color: var(--faf-solid-fg); }

    .ecosystem-stats { max-width: 1000px; margin: 4rem auto; text-align: center; padding: 3rem 2rem; background: var(--faf-surface); border-radius: 12px; border: 1px solid var(--faf-orange); }
    .ecosystem-stats h2 { font-size: 1.75rem; color: var(--faf-black); margin-bottom: 0.5rem; }
    .stats-updated { font-size: 0.85rem; color: var(--faf-dark); margin-bottom: 2rem; }
    .stats-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 2rem; }
    .stat-value { font-size: 2.25rem; font-weight: 800; color: var(--faf-orange); margin-bottom: 0.4rem; }
    .stat-label { font-size: 0.9rem; color: var(--faf-dark); font-weight: 600; }

    .get-started { max-width: 1000px; margin: 4rem auto; text-align: center; }
    .get-started h2 { font-size: 1.75rem; color: var(--faf-black); margin-bottom: 2rem; }
    .quick-start-options { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; }
    .option { background: var(--faf-surface); border: 1px solid var(--faf-surface-border); border-radius: 12px; padding: 1.75rem; }
    .option h3 { font-size: 1.15rem; color: var(--faf-black); margin: 0 0 0.5rem 0; }
    .option p { color: var(--faf-dark); margin: 0 0 1rem 0; font-size: 0.95rem; }
    .code-block { background: var(--faf-solid-bg); color: var(--faf-solid-fg); padding: 0.9rem 1rem; border-radius: 6px; margin-top: 1rem; text-align: left; }
    .code-block code { font-family: var(--font-mono); font-size: 0.85rem; color: var(--faf-solid-fg); }
    .btn-primary { display: inline-block; background: var(--faf-orange); color: var(--faf-on-accent); padding: 0.7rem 1.5rem; border-radius: 6px; text-decoration: none; font-weight: 600; margin-top: 1rem; transition: transform 0.15s ease; }
    .btn-primary:hover { transform: translateY(-1px); }

    .ecosystem-footer { max-width: 1200px; margin: 4rem auto 0; text-align: center; padding: 2rem 0; border-top: 1px solid var(--faf-surface-border); color: var(--faf-dark); }
    .ecosystem-footer p { margin: 0.5rem 0; font-size: 0.95rem; }
    .ecosystem-footer a { color: var(--faf-orange); text-decoration: none; font-weight: 600; }
    .ecosystem-footer a:hover { text-decoration: underline; }

    @media (max-width: 768px) {
        .ecosystem-page { padding: 2rem 1rem; }
        .tools-grid { grid-template-columns: 1fr; }
        .stats-grid { grid-template-columns: repeat(2, 1fr); }
    }
</style>
