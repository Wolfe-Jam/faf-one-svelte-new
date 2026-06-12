<script>
    let { data } = $props();

    const tools = [
        {
            name: 'FAF CLI',
            tagline: 'Championship Edition with TURBO-CAT 😽',
            description: 'The original. FREE FOREVER. Powered by TURBO-CAT - The Catalytic Converter for your projects.',
            features: [
                'TURBO-CAT 😽 - The .faf Representative',
                'Catalytic Converter: Raw files → AI context',
                '154 formats (1 .faf + 153 in pyramid)',
                '41 championship commands',
                '100% Strict TypeScript'
            ],
            github: 'https://github.com/Wolfe-Jam/faf-cli',
            npm: 'https://www.npmjs.com/package/faf-cli',
            install: 'npm install -g faf-cli',
            brewInstall: 'brew install wolfe-jam/faf/faf-cli',
            status: 'v4.5.0',
            icon: '🏎️'
        },
        {
            name: 'FAF Dev Tools',
            tagline: 'Mk1 Engine',
            description: 'Browser-based FAF context generator. No install required.',
            features: [
                'Zero install, runs in browser',
                'First FAF engine implementation',
                'Drag-and-drop interface',
                'Instant .faf generation',
                'Built with Svelte'
            ],
            github: 'https://github.com/Wolfe-Jam/faf-dev-tools',
            live: 'https://fafdev.tools',
            status: 'Beta',
            icon: '🛠️'
        },
        {
            name: 'Chrome Extension',
            tagline: 'Browser Integration',
            description: 'Generate .faf context directly from your browser.',
            features: [
                'One-click context extraction',
                'Works on any webpage',
                'Instant clipboard copy',
                'Approved by Google',
                'Built with Svelte'
            ],
            github: 'https://github.com/Wolfe-Jam/faf-chrome-extension',
            store: 'https://chromewebstore.google.com/detail/lnecebepmpjpilldfmndnaofbfjkjlkm',
            status: 'Live',
            icon: '🌐'
        },
        {
            name: 'Claude FAF MCP',
            tagline: 'Anthropic-Approved #2759',
            description: 'Seamless FAF integration for Claude Desktop. Official Anthropic MCP registry.',
            features: [
                'Native Claude Desktop integration',
                'Auto-context loading',
                `${(data.packageStats['claude-faf-mcp'] || 0).toLocaleString()}+ downloads last month`,
                'MCP protocol compliant',
                'Instant project understanding'
            ],
            github: 'https://github.com/Wolfe-Jam/claude-faf-mcp',
            npm: 'https://www.npmjs.com/package/claude-faf-mcp',
            install: 'npx claude-faf-mcp',
            status: 'v3.3.7',
            icon: '🤖'
        },
        {
            name: 'FAF MCP',
            tagline: 'Universal MCP Server',
            description: 'Universal FAF MCP server — works with any MCP-compatible AI.',
            features: [
                'Works with Claude, Cursor, Windsurf',
                'Universal MCP protocol',
                `${(data.packageStats['faf-mcp'] || 0).toLocaleString()}+ downloads last month`,
                'Official MCP registry listed',
                '100% Strict TypeScript'
            ],
            github: 'https://github.com/Wolfe-Jam/faf-mcp',
            npm: 'https://www.npmjs.com/package/faf-mcp',
            install: 'npx faf-mcp',
            status: 'v1.2.1',
            icon: '🔌'
        },
        {
            name: 'rust-faf-mcp',
            tagline: 'Rust MCP Server',
            description: 'MCP server for .faf built in Rust with rmcp SDK. Native performance.',
            features: [
                'Built with Rust + rmcp SDK',
                '8 tools for .faf operations',
                'Native compiled performance',
                'crates.io published',
                'Zero runtime overhead'
            ],
            github: 'https://github.com/Wolfe-Jam/rust-faf-mcp',
            crates: 'https://crates.io/crates/rust-faf-mcp',
            install: 'cargo install rust-faf-mcp',
            status: 'v0.1.0',
            icon: '🦀'
        },
        {
            name: 'WJTTC',
            tagline: 'MCP Testing Certification',
            description: 'Championship-grade MCP testing framework. If it passes WJTTC, it works.',
            features: [
                'Championship-grade test suite',
                'GitHub Action included',
                'MCP registry listed',
                'Homebrew installable',
                '103/103 beacon tests'
            ],
            github: 'https://github.com/Wolfe-Jam/wjttc',
            npm: 'https://www.npmjs.com/package/wjttc',
            install: 'npx wjttc',
            status: 'v1.1.0',
            icon: '🍊'
        },
        {
            name: 'FAF Specification',
            tagline: 'The Standard',
            description: 'Official .faf format specification — IANA registered, IETF draft active.',
            features: [
                'IANA registered: application/vnd.faf+yaml',
                'IETF Internet-Draft active',
                'CERN/Zenodo paper published',
                'Community contributions',
                'Format authority'
            ],
            github: 'https://github.com/Wolfe-Jam/FAF',
            docs: 'https://faf.one/docs',
            status: 'v1.1.0',
            icon: '📋'
        },
        {
            name: 'FAF Website',
            tagline: 'faf.one',
            description: 'The official FAF format authority and documentation hub.',
            features: [
                'Complete documentation',
                'Automation calculator',
                'Format examples',
                'Community resources',
                'Trust-first messaging'
            ],
            github: 'https://github.com/Wolfe-Jam/faf-one-svelte-new',
            live: 'https://faf.one',
            status: 'Live',
            icon: '🧡'
        }
    ];

    const builtDate = new Date(data.builtAt).toLocaleDateString('en-US', {
        month: 'short', day: 'numeric', year: 'numeric'
    });
</script>

<svelte:head>
    <title>FAF Ecosystem - All FAF Tools & Resources</title>
    <meta name="description" content="Complete FAF ecosystem: CLI, MCP servers, Dev Tools, Chrome Extension, WJTTC testing. IANA registered. Universal AI context for developers.">
</svelte:head>

<div class="back-nav">
    <a href="/" class="back-button">← Back to Home</a>
</div>

<main class="ecosystem-page">
    <header class="page-header">
        <h1>🏎️ The FAF Ecosystem</h1>
        <p class="lead">Powered by TURBO-CAT 😽 - The Catalytic Converter</p>
        <p class="subtitle">9 tools, one mission: Transform raw projects into clean AI context</p>
        <div class="turbo-cat-intro">
            <p><strong>Meet TURBO-CAT 😽</strong> - The .faf representative. Just like a catalytic converter transforms exhaust into clean emissions, TURBO-CAT transforms raw project files into clean, AI-ready context.</p>
            <p class="purr-line"><strong>CATs keep themselves clean.</strong> He can make your Stack positively <strong>PURR</strong>. 😽</p>
            <p class="pyramid-note"><strong>154 formats validated:</strong> 1 .faf at apex + 153 in the 17-level pyramid.</p>
        </div>
    </header>

    <div class="tools-grid">
        {#each tools as tool}
            <article class="tool-card">
                <div class="tool-header">
                    <div class="tool-icon">{tool.icon}</div>
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
                    <a href={tool.github} class="link-primary" target="_blank" rel="noopener">⭐ GitHub</a>
                    {#if tool.npm}
                        <a href={tool.npm} class="link-secondary" target="_blank" rel="noopener">📦 npm</a>
                    {/if}
                    {#if tool.crates}
                        <a href={tool.crates} class="link-secondary" target="_blank" rel="noopener">📦 crates.io</a>
                    {/if}
                    {#if tool.live}
                        <a href={tool.live} class="link-secondary" target="_blank" rel="noopener">🚀 Live Demo</a>
                    {/if}
                    {#if tool.store}
                        <a href={tool.store} class="link-secondary" target="_blank" rel="noopener">🌐 Chrome Store</a>
                    {/if}
                    {#if tool.docs}
                        <a href={tool.docs} class="link-secondary">📚 Docs</a>
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
        <h2>☑️ Real Numbers, Real Impact</h2>
        <p class="stats-updated">Live npm data · Built {builtDate}</p>
        <div class="stats-grid">
            <div class="stat">
                <div class="stat-value">{data.totalDownloads.toLocaleString()}+</div>
                <div class="stat-label">npm Downloads (last 30 days)</div>
            </div>
            <div class="stat">
                <div class="stat-value">{(data.packageStats['claude-faf-mcp'] || 0).toLocaleString()}+</div>
                <div class="stat-label">Claude MCP Downloads</div>
            </div>
            <div class="stat">
                <div class="stat-value">154</div>
                <div class="stat-label">Formats (1+153 Pyramid)</div>
            </div>
            <div class="stat">
                <div class="stat-value">9</div>
                <div class="stat-label">Active Tools</div>
            </div>
            <div class="stat">
                <div class="stat-value">100%</div>
                <div class="stat-label">Strict TypeScript</div>
            </div>
            <div class="stat">
                <div class="stat-value">&lt;50ms</div>
                <div class="stat-label">Processing Time</div>
            </div>
            <div class="stat">
                <div class="stat-value">IANA</div>
                <div class="stat-label">Registered Standard</div>
            </div>
            <div class="stat">
                <div class="stat-value">100%</div>
                <div class="stat-label">Open Source & Free</div>
            </div>
        </div>
    </section>

    <section class="get-started">
        <h2>🚀 Get Started</h2>
        <div class="quick-start-options">
            <div class="option">
                <h3>For Developers</h3>
                <p>Install the CLI and initialize your project</p>
                <div class="code-block"><code>npm install -g faf-cli<br/>faf init</code></div>
            </div>
            <div class="option">
                <h3>For Claude Users</h3>
                <p>Install MCP server for Claude Desktop</p>
                <div class="code-block"><code>npx claude-faf-mcp</code></div>
            </div>
            <div class="option">
                <h3>Try Online</h3>
                <p>No install required, works in browser</p>
                <a href="https://fafdev.tools" class="btn-primary" target="_blank" rel="noopener">Open Dev Tools →</a>
            </div>
        </div>
    </section>

    <footer class="ecosystem-footer">
        <p>All tools are <strong>FREE FOREVER</strong> and <strong>open source</strong> (MIT License)</p>
        <p>Built with 🧡 by <a href="https://github.com/Wolfe-Jam" target="_blank" rel="noopener">WolfeJam</a></p>
        <p class="topics-link">
            <a href="https://github.com/topics/faf" target="_blank" rel="noopener">View all FAF projects on GitHub →</a>
        </p>
    </footer>
</main>

<style>
    .back-nav { padding: 1rem 2rem; background: var(--faf-white); border-bottom: 1px solid #e0e0e0; }
    .back-button { display: inline-flex; align-items: center; gap: 0.5rem; color: var(--faf-dark); text-decoration: none; font-weight: 600; padding: 0.5rem 1rem; border-radius: 8px; transition: all 0.3s ease; }
    .back-button:hover { background: var(--faf-cream); color: var(--faf-orange); transform: translateX(-2px); }
    .ecosystem-page { background: var(--faf-white); min-height: 100vh; padding: 3rem 2rem; }
    .page-header { max-width: 1200px; margin: 0 auto 4rem; text-align: center; }
    .page-header h1 { font-size: 3rem; color: var(--faf-black); margin-bottom: 1rem; }
    .lead { font-size: 1.5rem; color: #666; margin: 0.5rem 0; }
    .subtitle { font-size: 1.125rem; color: #888; margin: 0.5rem 0 1.5rem 0; }
    .turbo-cat-intro { background: linear-gradient(135deg, #fff5f0 0%, white 100%); border: 2px solid var(--faf-orange); border-radius: 12px; padding: 1.5rem 2rem; margin: 1.5rem auto 0; max-width: 800px; }
    .turbo-cat-intro p { font-size: 1.125rem; line-height: 1.7; color: #333; margin: 0 0 1rem 0; }
    .turbo-cat-intro p:last-child { margin-bottom: 0; }
    .turbo-cat-intro strong { color: var(--faf-orange); }
    .purr-line { font-size: 1.25rem; text-align: center; font-style: italic; background: rgba(255, 107, 53, 0.1); padding: 1rem; border-radius: 8px; margin: 1rem 0 !important; }
    .pyramid-note { font-size: 1rem; color: #666; border-top: 1px solid rgba(255, 107, 53, 0.2); padding-top: 1rem; margin-top: 1rem !important; }
    .tools-grid { max-width: 1200px; margin: 0 auto 4rem; display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 2rem; }
    .tool-card { background: white; border: 2px solid #e0e0e0; border-radius: 12px; padding: 2rem; transition: all 0.3s ease; }
    .tool-card:hover { border-color: var(--faf-orange); box-shadow: 0 8px 24px rgba(255, 107, 53, 0.15); transform: translateY(-4px); }
    .tool-header { display: flex; align-items: flex-start; gap: 1rem; margin-bottom: 1rem; }
    .tool-icon { font-size: 2.5rem; line-height: 1; }
    .tool-title { flex: 1; }
    .tool-title h2 { font-size: 1.5rem; color: var(--faf-black); margin: 0 0 0.25rem 0; }
    .tool-tagline { font-size: 0.875rem; color: #666; margin: 0; font-weight: 600; }
    .tool-status { background: var(--faf-orange); color: white; padding: 0.25rem 0.75rem; border-radius: 4px; font-size: 0.75rem; font-weight: 700; }
    .tool-description { color: #444; line-height: 1.6; margin-bottom: 1.5rem; }
    .tool-features { list-style: none; padding: 0; margin: 0 0 1.5rem 0; }
    .tool-features li { padding: 0.5rem 0 0.5rem 1.5rem; position: relative; color: #666; font-size: 0.925rem; }
    .tool-features li:before { content: "☑️"; position: absolute; left: 0; }
    .tool-links { display: flex; flex-wrap: wrap; gap: 0.75rem; margin-bottom: 1rem; }
    .link-primary { background: var(--faf-orange); color: white; padding: 0.5rem 1rem; border-radius: 6px; text-decoration: none; font-weight: 600; font-size: 0.925rem; transition: all 0.2s ease; }
    .link-primary:hover { transform: translateY(-2px); box-shadow: 0 4px 8px rgba(0,0,0,0.2); }
    .link-secondary { background: #f0f0f0; color: #1a1a1a; padding: 0.5rem 1rem; border-radius: 6px; text-decoration: none; font-weight: 600; font-size: 0.925rem; transition: all 0.2s ease; }
    .link-secondary:hover { background: #e0e0e0; }
    .install-box { background: #1a1a1a; color: white; padding: 1rem; border-radius: 6px; margin-top: 0.5rem; }
    .install-box code { font-family: var(--font-mono); font-size: 0.875rem; color: white; }
    .ecosystem-stats { max-width: 1200px; margin: 4rem auto; text-align: center; padding: 3rem 2rem; background: linear-gradient(135deg, #fff5f0 0%, white 100%); border-radius: 12px; border: 2px solid var(--faf-orange); }
    .ecosystem-stats h2 { font-size: 2rem; color: var(--faf-black); margin-bottom: 0.5rem; }
    .stats-updated { font-size: 0.85rem; color: #999; margin-bottom: 2rem; }
    .stats-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 2rem; }
    .stat { text-align: center; }
    .stat-value { font-size: 2.5rem; font-weight: 700; color: var(--faf-orange); margin-bottom: 0.5rem; }
    .stat-label { font-size: 0.925rem; color: #666; font-weight: 600; }
    .get-started { max-width: 1200px; margin: 4rem auto; text-align: center; }
    .get-started h2 { font-size: 2rem; color: var(--faf-black); margin-bottom: 2rem; }
    .quick-start-options { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; }
    .option { background: white; border: 2px solid #e0e0e0; border-radius: 12px; padding: 2rem; }
    .option h3 { font-size: 1.25rem; color: var(--faf-black); margin: 0 0 0.5rem 0; }
    .option p { color: #666; margin: 0 0 1rem 0; }
    .code-block { background: #1a1a1a; color: white; padding: 1rem; border-radius: 6px; margin-top: 1rem; }
    .code-block code { font-family: var(--font-mono); font-size: 0.875rem; color: white; }
    .btn-primary { display: inline-block; background: var(--faf-orange); color: white; padding: 0.75rem 1.5rem; border-radius: 6px; text-decoration: none; font-weight: 600; transition: all 0.2s ease; margin-top: 1rem; }
    .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 4px 8px rgba(0,0,0,0.2); }
    .ecosystem-footer { max-width: 1200px; margin: 4rem auto 0; text-align: center; padding: 2rem 0; border-top: 1px solid #e0e0e0; color: #666; }
    .ecosystem-footer p { margin: 0.5rem 0; }
    .ecosystem-footer a { color: var(--faf-orange); text-decoration: none; font-weight: 600; }
    .ecosystem-footer a:hover { text-decoration: underline; }
    .topics-link { margin-top: 1.5rem; }
    @media (max-width: 768px) {
        .ecosystem-page { padding: 2rem 1rem; }
        .page-header h1 { font-size: 2rem; }
        .lead { font-size: 1.25rem; }
        .tools-grid { grid-template-columns: 1fr; }
        .stats-grid { grid-template-columns: repeat(2, 1fr); }
        .quick-start-options { grid-template-columns: 1fr; }
    }
</style>
