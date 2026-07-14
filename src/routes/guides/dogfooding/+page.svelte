<svelte:head>
    <title>FAF Dogfooding Guides | FAF</title>
    <meta name="description" content="Learn how to add project.faf to your projects. README first, .faf second, code third.">
</svelte:head>

<div class="guides-container">
    <div class="header">
        <h1>FAF Dogfooding Guides</h1>
        <p class="tagline">"README first, .faf second, code third."</p>
    </div>

    <div class="guides-grid">
        <a href="/guides/dogfooding/standard" class="guide-card">
            <div class="card-header">
                <h2>Standard Workflow</h2>
                <span class="badge recommended">Recommended</span>
            </div>
            <p class="description">
                Complete guide for any project type. Works with TypeScript, Python, Rust, Go, and more.
            </p>
            <ul class="features">
                <li>8-step workflow</li>
                <li>Language-specific examples</li>
                <li>FAQ section</li>
                <li>Quick reference table</li>
            </ul>
            <div class="cta">
                Read Standard Guide →
            </div>
        </a>

        <a href="/guides/dogfooding/wasm" class="guide-card">
            <div class="card-header">
                <h2>WASM-Specific Workflow</h2>
                <span class="badge advanced">Advanced</span>
            </div>
            <p class="description">
                Specialized guide for Rust WASM projects. Example: faf-wasm-gen
            </p>
            <ul class="features">
                <li>WASM project focus</li>
                <li>Rust-specific setup</li>
                <li>Browser/Edge context</li>
                <li>Timing optimization</li>
            </ul>
            <div class="cta">
                Read WASM Guide →
            </div>
        </a>
    </div>

    <div class="philosophy-box">
        <h3>Philosophy</h3>
        <p>
            You can't generate meaningful AI context from an empty repository.
            <strong>Foundation doesn't mean empty. Foundation means you know what you're building.</strong>
        </p>
    </div>

    <div class="quick-start">
        <h3>Quick Start</h3>
        <div class="code-block">
            <code>npm install -g faf-cli</code>
        </div>
        <p>Then follow the Standard Workflow guide to add .faf to your project.</p>
    </div>
</div>

<style>
    .guides-container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 3rem 1.5rem;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', sans-serif;
    }

    .header {
        text-align: center;
        margin-bottom: 3rem;
    }

    h1 {
        font-size: 2.5rem;
        color: #1a1a1a;
        margin-bottom: 1rem;
    }

    .tagline {
        font-size: 1.25rem;
        color: #FF6B35;
        font-style: italic;
        font-weight: 600;
    }

    .guides-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 2rem;
        margin-bottom: 3rem;
    }

    .guide-card {
        background: var(--faf-surface);
        border-radius: 16px;
        padding: 2rem;
        box-shadow: 0 4px 20px rgba(0,0,0,0.08);
        text-decoration: none;
        color: inherit;
        transition: all 0.3s ease;
        border: 2px solid transparent;
    }

    .guide-card:hover {
        transform: translateY(-4px);
        box-shadow: 0 8px 30px rgba(0,0,0,0.12);
        border-color: #FF6B35;
    }

    .card-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1rem;
    }

    .guide-card h2 {
        font-size: 1.5rem;
        color: #1a1a1a;
        margin: 0;
    }

    .badge {
        padding: 0.25rem 0.75rem;
        border-radius: 12px;
        font-size: 0.75rem;
        font-weight: 600;
        text-transform: uppercase;
    }

    .badge.recommended {
        background: #f0fdf4;
        color: #16a34a;
        border: 1px solid #bbf7d0;
    }

    .badge.advanced {
        background: #eff6ff;
        color: #2563eb;
        border: 1px solid #bfdbfe;
    }

    .description {
        color: #666;
        line-height: 1.6;
        margin-bottom: 1.5rem;
    }

    .features {
        list-style: none;
        padding: 0;
        margin: 0 0 1.5rem 0;
    }

    .features li {
        padding: 0.5rem 0;
        color: #1a1a1a;
        position: relative;
        padding-left: 1.5rem;
    }

    .features li:before {
        content: "☑️";
        position: absolute;
        left: 0;
    }

    .cta {
        color: #FF6B35;
        font-weight: 600;
        padding-top: 1rem;
        border-top: 1px solid #e5e7eb;
    }

    .philosophy-box {
        background: linear-gradient(135deg, #FF6B35 0%, #ff8555 100%);
        color: white;
        padding: 2rem;
        border-radius: 16px;
        text-align: center;
        margin-bottom: 2rem;
    }

    .philosophy-box h3 {
        margin: 0 0 1rem 0;
        font-size: 1.5rem;
    }

    .philosophy-box p {
        font-size: 1.1rem;
        line-height: 1.6;
        margin: 0;
    }

    .quick-start {
        background: #f8f9fa;
        padding: 2rem;
        border-radius: 16px;
        text-align: center;
    }

    .quick-start h3 {
        margin: 0 0 1rem 0;
        color: #1a1a1a;
        font-size: 1.5rem;
    }

    .code-block {
        background: #1a1a1a;
        color: #f5f5f5;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        margin: 1rem 0;
        font-family: 'SF Mono', 'Monaco', 'Consolas', monospace;
    }

    .code-block code {
        font-size: 1rem;
    }

    .quick-start p {
        color: #666;
        margin: 0;
    }

    @media (max-width: 768px) {
        h1 {
            font-size: 2rem;
        }

        .guides-grid {
            grid-template-columns: 1fr;
        }

        .guide-card {
            padding: 1.5rem;
        }
    }
</style>
