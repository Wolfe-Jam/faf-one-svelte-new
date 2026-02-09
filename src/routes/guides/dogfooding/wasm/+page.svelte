<svelte:head>
    <title>FAF Dogfooding Guide - The Right Way to Add AI Context</title>
    <meta name="description" content="How to add project.faf + CLAUDE.md to a new project. README first, .faf second, code third.">
</svelte:head>

<div class="container">
    <div class="header">
        <h1>FAF Dogfooding Guide</h1>
        <p class="subtitle">The Right Way to Add AI Context</p>
        <p class="example">Example: faf-generator-wasm</p>
    </div>

    <div class="philosophy">
        <h2>Philosophy</h2>
        <p class="quote">"README first, .faf second, code third."</p>
        <p>Foundation doesn't mean empty. Foundation means you know WHAT you're building.</p>
    </div>

    <h2>The Workflow</h2>

    <div class="step">
        <h3>Step 1: Define Your Project (README.md)</h3>
        <div class="step-meta">
            <div class="step-meta-item">
                <span class="step-meta-label">When:</span>
                <span class="step-meta-value">Day 1, before any code</span>
            </div>
        </div>

        <p><strong>What:</strong></p>
        <pre><code><span class="comment"># Create repo</span>
git init

<span class="comment"># Write README</span>
cat > README.md &lt;&lt; <span class="string">'EOF'</span>
<span class="comment"># faf-generator-wasm</span>

Rust WASM generator for FAF (Foundational AI-context Format).

Generate project.faf files in the browser or at the edge.

<span class="comment">## Mission</span>

Build a Rust WASM generator that matches faf-cli v4.2.1 output exactly.
<span class="string">EOF</span></code></pre>

        <p><strong>Why:</strong></p>
        <ul>
            <li>Defines WHO, WHAT, WHY</li>
            <li>Gives AI context to extract from</li>
            <li>Can't generate meaningful .faf from empty repo</li>
        </ul>

        <div class="result-box">
            <strong>Result:</strong> Foundation in prose (human-readable)
        </div>
    </div>

    <div class="step">
        <h3>Step 2: Add Basic Structure</h3>
        <div class="step-meta">
            <div class="step-meta-item">
                <span class="step-meta-label">When:</span>
                <span class="step-meta-value">After README, before implementation</span>
            </div>
        </div>

        <pre><code><span class="comment"># Add language-specific structure</span>
Cargo.toml          <span class="comment"># For Rust</span>
<span class="comment"># OR</span>
package.json        <span class="comment"># For JavaScript/TypeScript</span>
<span class="comment"># OR</span>
pyproject.toml      <span class="comment"># For Python</span></code></pre>

        <p><strong>Why:</strong></p>
        <ul>
            <li>Detects project type (cli, web-app, ml-research, etc.)</li>
            <li>Detects stack (Rust, TypeScript, Python, etc.)</li>
            <li>Detects package manager (cargo, npm, poetry, etc.)</li>
        </ul>

        <div class="result-box">
            <strong>Result:</strong> Structure reveals intent
        </div>
    </div>

    <div class="step">
        <h3>Step 3: Generate project.faf</h3>
        <div class="step-meta">
            <div class="step-meta-item">
                <span class="step-meta-label">When:</span>
                <span class="step-meta-value">After README + structure, before implementation</span>
            </div>
            <div class="step-meta-item">
                <span class="step-meta-label">Score:</span>
                <span class="step-meta-value">30-50% (honest starting point)</span>
            </div>
        </div>

        <p><strong>Command:</strong></p>
        <pre><code>faf init</code></pre>

        <p><strong>What it does:</strong></p>
        <ul>
            <li>Reads README.md (extracts 6 Ws)</li>
            <li>Reads package files (detects stack)</li>
            <li>Generates project.faf (YAML)</li>
        </ul>

        <div class="result-box">
            <strong>Result:</strong> AI-readable context file (30-50% score)
        </div>
    </div>

    <div class="step">
        <h3>Step 4: Generate CLAUDE.md<span class="badge optional">Optional</span></h3>
        <div class="step-meta">
            <div class="step-meta-item">
                <span class="step-meta-label">When:</span>
                <span class="step-meta-value">After project.faf exists</span>
            </div>
        </div>

        <p><strong>Command:</strong></p>
        <pre><code>faf bi-sync</code></pre>

        <p><strong>What it does:</strong></p>
        <ul>
            <li>Reads project.faf</li>
            <li>Generates CLAUDE.md (prose version)</li>
            <li>Establishes bi-directional sync</li>
        </ul>

        <p><strong>Why optional:</strong></p>
        <ul>
            <li>Only needed if working primarily with Claude</li>
            <li>project.faf alone works with ALL AIs</li>
            <li>CLAUDE.md is human-readable version</li>
        </ul>
    </div>

    <div class="step">
        <h3>Step 5: Commit the Foundation</h3>
        <div class="step-meta">
            <div class="step-meta-item">
                <span class="step-meta-label">When:</span>
                <span class="step-meta-value">After .faf (and optionally CLAUDE.md) generated</span>
            </div>
        </div>

        <pre><code>git add README.md Cargo.toml project.faf CLAUDE.md
git commit -m <span class="string">"Add project foundation

- README defines purpose
- Cargo.toml defines structure
- project.faf provides AI context
- CLAUDE.md provides Claude-specific prose

AI-ready before first line of code."</span></code></pre>

        <p><strong>Why:</strong></p>
        <ul>
            <li>Foundation is committed before implementation</li>
            <li>Shows AI context is first-class, not afterthought</li>
            <li>Birth DNA recorded (starting score)</li>
        </ul>
    </div>

    <div class="step">
        <h3>Step 6: Build (Implementation)</h3>
        <div class="step-meta">
            <div class="step-meta-item">
                <span class="step-meta-label">When:</span>
                <span class="step-meta-value">After foundation committed</span>
            </div>
        </div>

        <pre><code><span class="comment"># Now write actual code</span>
src/lib.rs
tests/
<span class="comment"># etc.</span></code></pre>

        <p><strong>Why:</strong></p>
        <ul>
            <li>Definition before implementation</li>
            <li>AI has context from day 1 of coding</li>
            <li>No "add docs later" technical debt</li>
        </ul>
    </div>

    <div class="step">
        <h3>Step 7: Grow Context (During Development)</h3>
        <div class="step-meta">
            <div class="step-meta-item">
                <span class="step-meta-label">When:</span>
                <span class="step-meta-value">After significant progress</span>
            </div>
            <div class="step-meta-item">
                <span class="step-meta-label">Score:</span>
                <span class="step-meta-value">30% → 80%</span>
            </div>
        </div>

        <p><strong>Command:</strong></p>
        <pre><code>faf auto</code></pre>

        <p><strong>What it does:</strong></p>
        <ul>
            <li>Turbo-Cat discovers formats (153 types)</li>
            <li>Fills detected stack slots</li>
            <li>Grows score from 30% → 80%</li>
        </ul>
    </div>

    <div class="step">
        <h3>Step 8: Refine (Before Release)</h3>
        <div class="step-meta">
            <div class="step-meta-item">
                <span class="step-meta-label">When:</span>
                <span class="step-meta-value">Before v1.0.0</span>
            </div>
            <div class="step-meta-item">
                <span class="step-meta-label">Score:</span>
                <span class="step-meta-value">85%+ (Bronze) or 100% (Trophy)</span>
            </div>
        </div>

        <p><strong>Command:</strong></p>
        <pre><code>faf go</code></pre>

        <p><strong>What it does:</strong></p>
        <ul>
            <li>Interactive questions</li>
            <li>Fill remaining gaps</li>
            <li>Human refinement</li>
            <li>Reaches 85%+ 🥉 or 100% 🏆</li>
        </ul>
    </div>

    <h2>Timing Summary</h2>

    <table>
        <thead>
            <tr>
                <th>Step</th>
                <th>File</th>
                <th>When</th>
                <th>Score</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>README.md</td>
                <td>Day 1</td>
                <td>-</td>
            </tr>
            <tr>
                <td>2</td>
                <td>Cargo.toml</td>
                <td>Day 1-2</td>
                <td>-</td>
            </tr>
            <tr>
                <td>3</td>
                <td>project.faf</td>
                <td>After docs</td>
                <td>30-50%</td>
            </tr>
            <tr>
                <td>4</td>
                <td>CLAUDE.md</td>
                <td>Optional</td>
                <td>-</td>
            </tr>
            <tr>
                <td>5</td>
                <td>Git commit</td>
                <td>Before code</td>
                <td>-</td>
            </tr>
            <tr>
                <td>6</td>
                <td>src/lib.rs</td>
                <td>Implementation</td>
                <td>-</td>
            </tr>
            <tr>
                <td>7</td>
                <td>faf auto</td>
                <td>Mid-dev</td>
                <td>80%</td>
            </tr>
            <tr>
                <td>8</td>
                <td>faf go</td>
                <td>Pre-release</td>
                <td>100%</td>
            </tr>
        </tbody>
    </table>

    <h2>Common Mistakes</h2>

    <div class="mistake">
        <h4>❌ Wrong: Code First, Docs Later</h4>
        <pre><code><span class="comment"># Write all the code</span>
git add src/
git commit -m <span class="string">"Initial implementation"</span>

<span class="comment"># Oh yeah, should add docs</span>
echo <span class="string">"# Project"</span> > README.md
faf init  <span class="comment"># Low score, missed context</span></code></pre>
        <p><strong>Problem:</strong> AI has no context during development</p>
    </div>

    <div class="mistake">
        <h4>❌ Wrong: Empty Repo .faf</h4>
        <pre><code>git init
faf init  <span class="comment"># Nothing to extract from!</span>
<span class="comment"># Score: 5% (basically empty)</span></code></pre>
        <p><strong>Problem:</strong> Can't extract 6 Ws from empty repo</p>
    </div>

    <div class="correct">
        <h4>✅ Right: Definition → Documentation → Implementation</h4>
        <pre><code><span class="comment"># 1. Define</span>
README.md (WHO/WHAT/WHY)

<span class="comment"># 2. Document for AI</span>
faf init → project.faf (30-50%)

<span class="comment"># 3. Build</span>
src/lib.rs (code)

<span class="comment"># 4. Grow</span>
faf auto → 80%</code></pre>
        <p><strong>Result:</strong> AI context available from day 1</p>
    </div>

    <h2>Why This Order Matters</h2>

    <p><strong>README first:</strong></p>
    <ul>
        <li>Forces you to articulate purpose</li>
        <li>Human-readable definition</li>
        <li>Can't fake it (you must know what you're building)</li>
    </ul>

    <p><strong>project.faf second:</strong></p>
    <ul>
        <li>AI-readable version of README context</li>
        <li>Structured format (YAML)</li>
        <li>Machine-parseable</li>
    </ul>

    <p><strong>Code third:</strong></p>
    <ul>
        <li>Implementation follows definition</li>
        <li>AI has context to help from start</li>
        <li>No documentation debt</li>
    </ul>

    <div class="key-takeaways">
        <h2>Key Takeaways</h2>
        <ol>
            <li><strong>Foundation ≠ Empty</strong> - You must know what you're building</li>
            <li><strong>README defines for humans</strong> - Write this first, always</li>
            <li><strong>project.faf defines for AI</strong> - Auto-extracted from README</li>
            <li><strong>CLAUDE.md is optional</strong> - Only if working with Claude primarily</li>
            <li><strong>Code comes last</strong> - Implementation follows definition</li>
            <li><strong>Context grows</strong> - 30% → 80% → 100% over time</li>
            <li><strong>Bi-sync keeps prose in sync</strong> - Edit either, both update</li>
        </ol>
    </div>

    <div class="footer">
        <p><strong>Status:</strong> Championship workflow documented</p>
        <p><strong>Tested on:</strong> faf-generator-wasm (Feb 7, 2026)</p>
        <p><strong>Owner:</strong> wolfejam 🏎️⚡️</p>
        <p style="margin-top: 1rem; font-style: italic; color: #FF6B35;">"AI needed a format, it got one — .faf"</p>
    </div>
</div>

<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :global(body) {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', sans-serif;
        line-height: 1.6;
        color: #1a1a1a;
        background: #f8f9fa;
        padding: 2rem 1rem;
    }

    .container {
        max-width: 900px;
        margin: 0 auto;
        background: white;
        border-radius: 16px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.08);
        padding: 3rem;
    }

    .header {
        text-align: center;
        margin-bottom: 3rem;
        padding-bottom: 2rem;
        border-bottom: 3px solid #FF6B35;
    }

    h1 {
        font-size: 2.5rem;
        color: #1a1a1a;
        margin-bottom: 0.5rem;
    }

    .subtitle {
        font-size: 1.25rem;
        color: #666;
        margin-bottom: 0.5rem;
    }

    .example {
        font-style: italic;
        color: #888;
        font-size: 0.95rem;
    }

    .philosophy {
        background: linear-gradient(135deg, #FF6B35 0%, #ff8555 100%);
        color: white;
        padding: 2rem;
        border-radius: 12px;
        margin: 2rem 0;
        text-align: center;
    }

    .philosophy h2 {
        font-size: 1.8rem;
        margin-bottom: 1rem;
    }

    .philosophy p {
        font-size: 1.1rem;
        font-weight: 500;
    }

    .philosophy .quote {
        font-size: 1.5rem;
        font-weight: 700;
        margin: 1rem 0;
    }

    h2 {
        color: #FF6B35;
        font-size: 1.8rem;
        margin: 2.5rem 0 1rem 0;
        padding-bottom: 0.5rem;
        border-bottom: 2px solid #FFE5DC;
    }

    h3 {
        color: #1a1a1a;
        font-size: 1.3rem;
        margin: 2rem 0 1rem 0;
    }

    .step {
        background: #f8f9fa;
        border-left: 4px solid #FF6B35;
        padding: 1.5rem;
        margin: 1.5rem 0;
        border-radius: 0 8px 8px 0;
    }

    .step h3 {
        margin-top: 0;
        color: #FF6B35;
    }

    .step-meta {
        display: flex;
        gap: 2rem;
        margin: 1rem 0;
        flex-wrap: wrap;
    }

    .step-meta-item {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }

    .step-meta-label {
        font-weight: 600;
        color: #666;
    }

    .step-meta-value {
        color: #1a1a1a;
    }

    pre {
        background: #1a1a1a;
        color: #f5f5f5;
        padding: 1.5rem;
        border-radius: 8px;
        overflow-x: auto;
        margin: 1rem 0;
        font-family: 'SF Mono', 'Monaco', 'Consolas', monospace;
        font-size: 0.9rem;
        line-height: 1.5;
    }

    code {
        background: #f0f0f0;
        padding: 0.2rem 0.4rem;
        border-radius: 4px;
        font-family: 'SF Mono', 'Monaco', 'Consolas', monospace;
        font-size: 0.9em;
        color: #FF6B35;
    }

    pre code {
        background: none;
        padding: 0;
        color: #f5f5f5;
    }

    .result-box {
        background: #f0fdf4;
        border: 2px solid #bbf7d0;
        border-radius: 8px;
        padding: 1rem;
        margin: 1rem 0;
    }

    .result-box strong {
        color: #16a34a;
    }

    table {
        width: 100%;
        border-collapse: collapse;
        margin: 1.5rem 0;
    }

    th, td {
        padding: 0.75rem;
        text-align: left;
        border-bottom: 1px solid #e5e7eb;
    }

    th {
        background: #FF6B35;
        color: white;
        font-weight: 600;
    }

    tr:hover {
        background: #f9fafb;
    }

    .mistake {
        background: #fef2f2;
        border-left: 4px solid #dc2626;
        padding: 1.5rem;
        margin: 1rem 0;
        border-radius: 0 8px 8px 0;
    }

    .mistake h4 {
        color: #dc2626;
        margin-bottom: 0.5rem;
    }

    .correct {
        background: #f0fdf4;
        border-left: 4px solid #16a34a;
        padding: 1.5rem;
        margin: 1rem 0;
        border-radius: 0 8px 8px 0;
    }

    .correct h4 {
        color: #16a34a;
        margin-bottom: 0.5rem;
    }

    .key-takeaways {
        background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%);
        color: white;
        padding: 2rem;
        border-radius: 12px;
        margin: 2rem 0;
    }

    .key-takeaways h2 {
        color: #FF6B35;
        border-bottom: 2px solid #FF6B35;
        margin-top: 0;
    }

    .key-takeaways ol {
        margin-left: 1.5rem;
        margin-top: 1rem;
    }

    .key-takeaways li {
        margin: 0.75rem 0;
        line-height: 1.8;
    }

    .footer {
        text-align: center;
        margin-top: 3rem;
        padding-top: 2rem;
        border-top: 2px solid #e5e7eb;
        color: #666;
    }

    .footer strong {
        color: #FF6B35;
    }

    .badge {
        display: inline-block;
        background: #FF6B35;
        color: white;
        padding: 0.25rem 0.75rem;
        border-radius: 12px;
        font-size: 0.85rem;
        font-weight: 600;
        margin-left: 0.5rem;
    }

    .badge.optional {
        background: #94a3b8;
    }

    .badge.score {
        background: #16a34a;
    }

    @media (max-width: 768px) {
        .container {
            padding: 1.5rem;
        }

        h1 {
            font-size: 2rem;
        }

        .step-meta {
            flex-direction: column;
            gap: 0.5rem;
        }
    }

    .comment {
        color: #10b981;
    }

    .string {
        color: #fbbf24;
    }

    .keyword {
        color: #60a5fa;
    }
</style>
