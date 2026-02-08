<svelte:head>
    <title>FAF Dogfooding Guide - Standard Workflow</title>
    <meta name="description" content="How to add project.faf to any project. README first, .faf second, code third.">
</svelte:head>

<div class="container">
    <div class="header">
        <h1>FAF Dogfooding Guide</h1>
        <p class="subtitle">Standard Workflow for Any Project</p>
        <p class="example">Works with TypeScript, Python, Rust, Go, and more</p>
    </div>

    <div class="philosophy">
        <h2>Philosophy</h2>
        <p class="quote">"README first, .faf second, code third."</p>
        <p>You can't generate meaningful AI context from an empty repository. Start with what you're building, then add context, then code.</p>
    </div>

    <h2>Quick Start</h2>

    <div class="info-box">
        <p><strong>Prerequisites:</strong> Install faf-cli</p>
        <pre><code>npm install -g faf-cli</code></pre>
    </div>

    <h2>The 8-Step Workflow</h2>

    <div class="step">
        <h3>Step 1: Create Your README</h3>
        <div class="step-meta">
            <div class="step-meta-item">
                <span class="step-meta-label">When:</span>
                <span class="step-meta-value">Day 1, before any code</span>
            </div>
            <div class="step-meta-item">
                <span class="step-meta-label">Time:</span>
                <span class="step-meta-value">5-10 minutes</span>
            </div>
        </div>

        <p>Write a README that answers:</p>
        <ul>
            <li><strong>WHAT</strong> - What does this project do?</li>
            <li><strong>WHY</strong> - Why does it exist? What problem does it solve?</li>
            <li><strong>WHO</strong> - Who is building it? Who is it for?</li>
            <li><strong>HOW</strong> - How do you install/use it?</li>
        </ul>

        <pre><code><span class="comment"># Example README.md</span>

<span class="comment"># My Awesome CLI</span>

A command-line tool for managing project tasks efficiently.

<span class="comment">## Why</span>

Tired of juggling multiple task managers? This CLI brings everything into your terminal.

<span class="comment">## Installation</span>

```bash
npm install -g my-awesome-cli
```

<span class="comment">## Usage</span>

```bash
my-cli add "Write documentation"
my-cli list
```</code></pre>

        <div class="result-box">
            <strong>Result:</strong> Human-readable project definition
        </div>
    </div>

    <div class="step">
        <h3>Step 2: Add Basic Project Structure</h3>
        <div class="step-meta">
            <div class="step-meta-item">
                <span class="step-meta-label">When:</span>
                <span class="step-meta-value">After README</span>
            </div>
        </div>

        <p>Create your language-specific configuration:</p>

        <pre><code><span class="comment"># For TypeScript/JavaScript:</span>
npm init -y

<span class="comment"># For Python:</span>
poetry init  <span class="comment"># or create pyproject.toml</span>

<span class="comment"># For Rust:</span>
cargo init

<span class="comment"># For Go:</span>
go mod init github.com/user/project</code></pre>

        <p>This gives faf-cli the context it needs to detect:</p>
        <ul>
            <li>Language (TypeScript, Python, Rust, Go)</li>
            <li>Package manager (npm, poetry, cargo, go modules)</li>
            <li>Project type (CLI, library, web-app)</li>
        </ul>
    </div>

    <div class="step">
        <h3>Step 3: Generate project.faf</h3>
        <div class="step-meta">
            <div class="step-meta-item">
                <span class="step-meta-label">Command:</span>
                <span class="step-meta-value">faf init</span>
            </div>
            <div class="step-meta-item">
                <span class="step-meta-label">Expected Score:</span>
                <span class="step-meta-value">30-50%</span>
            </div>
        </div>

        <pre><code>cd your-project
faf init</code></pre>

        <p><strong>What happens:</strong></p>
        <ul>
            <li>Reads your README (extracts WHO, WHAT, WHY, HOW)</li>
            <li>Detects project type from files (CLI, web-app, library, etc.)</li>
            <li>Detects stack from package.json/pyproject.toml/Cargo.toml</li>
            <li>Generates project.faf with honest initial score</li>
        </ul>

        <p><strong>Output:</strong></p>
        <pre><code>✓ Generated project.faf (42% - 9/21 slots filled)

Missing context:
  - Database (if applicable)
  - CI/CD pipeline
  - Hosting platform

Run `faf go` to improve your score!</code></pre>

        <div class="result-box">
            <strong>Result:</strong> project.faf created with 30-50% score (honest baseline)
        </div>
    </div>

    <div class="step">
        <h3>Step 4: Commit the Foundation</h3>
        <div class="step-meta">
            <div class="step-meta-item">
                <span class="step-meta-label">When:</span>
                <span class="step-meta-value">Before writing implementation code</span>
            </div>
        </div>

        <pre><code>git add README.md package.json project.faf
git commit -m <span class="string">"Add project foundation

- README defines purpose and usage
- package.json defines dependencies
- project.faf provides AI context (42%)

AI-ready before first line of code."</span></code></pre>

        <p><strong>Why commit now:</strong></p>
        <ul>
            <li>Records "birth DNA" (starting score)</li>
            <li>Shows AI context is first-class, not afterthought</li>
            <li>Foundation committed before implementation</li>
        </ul>
    </div>

    <div class="step">
        <h3>Step 5: Build Your Project</h3>
        <div class="step-meta">
            <div class="step-meta-item">
                <span class="step-meta-label">When:</span>
                <span class="step-meta-value">After foundation committed</span>
            </div>
        </div>

        <p>Now write your actual implementation:</p>

        <pre><code>src/
  index.ts
  cli.ts
  commands/
tests/
  cli.test.ts</code></pre>

        <p><strong>Benefits:</strong></p>
        <ul>
            <li>AI assistants (Claude, Copilot, etc.) have context from day 1</li>
            <li>No "add docs later" technical debt</li>
            <li>Clear definition before implementation</li>
        </ul>
    </div>

    <div class="step">
        <h3>Step 6: Auto-Detect New Context</h3>
        <div class="step-meta">
            <div class="step-meta-item">
                <span class="step-meta-label">Command:</span>
                <span class="step-meta-value">faf auto</span>
            </div>
            <div class="step-meta-item">
                <span class="step-meta-label">Expected Score:</span>
                <span class="step-meta-value">70-85%</span>
            </div>
        </div>

        <p>After significant development, let Turbo-Cat discover what you've built:</p>

        <pre><code>faf auto</code></pre>

        <p><strong>What it does:</strong></p>
        <ul>
            <li>Turbo-Cat scans your codebase (153 format types)</li>
            <li>Detects test frameworks, build tools, config files</li>
            <li>Updates project.faf with discovered context</li>
            <li>Grows score from 42% → 78%</li>
        </ul>

        <p><strong>Example discoveries:</strong></p>
        <pre><code>✓ Found: vitest.config.ts → Testing: Vitest
✓ Found: .github/workflows → CI/CD: GitHub Actions
✓ Found: vercel.json → Hosting: Vercel

Updated project.faf (78% - 16/21 slots filled)</code></pre>
    </div>

    <div class="step">
        <h3>Step 7: Refine to 100%</h3>
        <div class="step-meta">
            <div class="step-meta-item">
                <span class="step-meta-label">Command:</span>
                <span class="step-meta-value">faf go</span>
            </div>
            <div class="step-meta-item">
                <span class="step-meta-label">Target Score:</span>
                <span class="step-meta-value">85%+ (Bronze) or 100% (Trophy)</span>
            </div>
        </div>

        <p>Before release, fill remaining gaps through interactive Q&A:</p>

        <pre><code>faf go</code></pre>

        <p><strong>Interactive questions:</strong></p>
        <pre><code>? What database does this project use?
  › PostgreSQL
    MongoDB
    None

? Where is this deployed?
  › Vercel
    AWS
    Self-hosted

? Who is the primary audience?
  › Developers
    End users
    Internal team</code></pre>

        <div class="result-box">
            <strong>Result:</strong> 85%+ 🥉 Bronze (production-ready) or 100% 🏆 Trophy (perfect)
        </div>
    </div>

    <div class="step">
        <h3>Step 8: Keep Context Fresh</h3>
        <div class="step-meta">
            <div class="step-meta-item">
                <span class="step-meta-label">Frequency:</span>
                <span class="step-meta-value">Before major releases</span>
            </div>
        </div>

        <p>Periodically update as your project evolves:</p>

        <pre><code><span class="comment"># After adding new features</span>
faf auto

<span class="comment"># Before releases</span>
faf go</code></pre>

        <p>Your project.faf stays synchronized with your codebase.</p>
    </div>

    <h2>Score Progression</h2>

    <table>
        <thead>
            <tr>
                <th>Stage</th>
                <th>Score</th>
                <th>Tier</th>
                <th>Meaning</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>After <code>faf init</code></td>
                <td>30-50%</td>
                <td>🟡 Yellow</td>
                <td>Honest baseline</td>
            </tr>
            <tr>
                <td>After <code>faf auto</code></td>
                <td>70-85%</td>
                <td>🥉 Bronze</td>
                <td>Production-ready</td>
            </tr>
            <tr>
                <td>After <code>faf go</code></td>
                <td>85-100%</td>
                <td>🥇 Gold / 🏆 Trophy</td>
                <td>Excellent / Perfect</td>
            </tr>
        </tbody>
    </table>

    <h2>Common Mistakes</h2>

    <div class="mistake">
        <h4>❌ Mistake #1: Code First, Docs Later</h4>
        <pre><code><span class="comment"># Write 1000 lines of code...</span>
git commit -m <span class="string">"Initial implementation"</span>

<span class="comment"># Then try to add docs</span>
echo <span class="string">"# Project"</span> > README.md
faf init  <span class="comment"># Score: 15% 😞</span></code></pre>
        <p><strong>Problem:</strong> Low score, missed context during development</p>
    </div>

    <div class="mistake">
        <h4>❌ Mistake #2: Empty Repo Init</h4>
        <pre><code>mkdir new-project && cd new-project
git init
faf init  <span class="comment"># Score: 0% - Nothing to extract!</span></code></pre>
        <p><strong>Problem:</strong> Can't extract WHO/WHAT/WHY from empty repo</p>
    </div>

    <div class="mistake">
        <h4>❌ Mistake #3: Never Update</h4>
        <pre><code>faf init  <span class="comment"># 6 months ago...</span>
<span class="comment"># Add Vite, Vitest, Vercel, tests...</span>
<span class="comment"># Never run faf auto</span>
<span class="comment"># project.faf still shows 42% (outdated!)</span></code></pre>
        <p><strong>Problem:</strong> Stale context doesn't reflect current project</p>
    </div>

    <div class="correct">
        <h4>✅ Correct Workflow</h4>
        <pre><code><span class="comment"># 1. README (WHO/WHAT/WHY)</span>
echo <span class="string">"# My CLI Tool\n\nManages tasks efficiently..."</span> > README.md

<span class="comment"># 2. Structure</span>
npm init -y

<span class="comment"># 3. Generate .faf (42%)</span>
faf init

<span class="comment"># 4. Commit foundation</span>
git commit -m <span class="string">"Add project foundation"</span>

<span class="comment"># 5. Build (weeks of work...)</span>
<span class="comment"># ...code, tests, configs...</span>

<span class="comment"># 6. Update context (78%)</span>
faf auto

<span class="comment"># 7. Refine before v1.0 (100%)</span>
faf go</code></pre>
        <p><strong>Result:</strong> Perfect context from day 1, grows with your project</p>
    </div>

    <h2>Language-Specific Examples</h2>

    <div class="step">
        <h3>TypeScript/Node.js</h3>
        <pre><code><span class="comment"># Setup</span>
npm init -y
npm install typescript @types/node

<span class="comment"># Generate</span>
faf init

<span class="comment"># Detects: TypeScript, npm, Node.js</span></code></pre>
    </div>

    <div class="step">
        <h3>Python</h3>
        <pre><code><span class="comment"># Setup</span>
poetry init

<span class="comment"># Generate</span>
faf init

<span class="comment"># Detects: Python, poetry</span></code></pre>
    </div>

    <div class="step">
        <h3>Rust</h3>
        <pre><code><span class="comment"># Setup</span>
cargo init

<span class="comment"># Generate</span>
faf init

<span class="comment"># Detects: Rust, cargo, Native runtime</span></code></pre>
    </div>

    <div class="step">
        <h3>Go</h3>
        <pre><code><span class="comment"># Setup</span>
go mod init github.com/user/project

<span class="comment"># Generate</span>
faf init

<span class="comment"># Detects: Go, go modules</span></code></pre>
    </div>

    <h2>FAQ</h2>

    <div class="info-box">
        <p><strong>Q: When exactly should I run <code>faf init</code>?</strong></p>
        <p>A: After you have a README and basic structure (package.json, Cargo.toml, etc.), but before writing implementation code. This gives you 30-50% initial context.</p>
    </div>

    <div class="info-box">
        <p><strong>Q: Can I edit project.faf manually?</strong></p>
        <p>A: Yes! It's just YAML. But <code>faf go</code> provides a nicer interactive UI.</p>
    </div>

    <div class="info-box">
        <p><strong>Q: Do I need CLAUDE.md?</strong></p>
        <p>A: No. project.faf works with ALL AIs. CLAUDE.md is optional for Claude-specific prose.</p>
    </div>

    <div class="info-box">
        <p><strong>Q: How often should I run <code>faf auto</code>?</strong></p>
        <p>A: After significant changes (new frameworks, deployment setup, testing added). Usually once mid-development and before releases.</p>
    </div>

    <div class="key-takeaways">
        <h2>Key Takeaways</h2>
        <ol>
            <li><strong>README first</strong> - Define what you're building (WHO/WHAT/WHY)</li>
            <li><strong>project.faf second</strong> - Generate AI context with <code>faf init</code></li>
            <li><strong>Code third</strong> - Build with AI context from day 1</li>
            <li><strong>Let it grow</strong> - Use <code>faf auto</code> to detect new context</li>
            <li><strong>Refine before release</strong> - Use <code>faf go</code> to reach 85%+</li>
            <li><strong>Honest scores</strong> - 30% → 70% → 100% is normal progression</li>
            <li><strong>Keep it fresh</strong> - Update as your project evolves</li>
        </ol>
    </div>

    <h2>Quick Reference</h2>

    <table>
        <thead>
            <tr>
                <th>Command</th>
                <th>When</th>
                <th>Purpose</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><code>faf init</code></td>
                <td>After README + structure</td>
                <td>Generate initial project.faf (30-50%)</td>
            </tr>
            <tr>
                <td><code>faf auto</code></td>
                <td>Mid-development</td>
                <td>Auto-detect new context (→ 70-85%)</td>
            </tr>
            <tr>
                <td><code>faf go</code></td>
                <td>Before release</td>
                <td>Interactive refinement (→ 100%)</td>
            </tr>
            <tr>
                <td><code>faf score</code></td>
                <td>Anytime</td>
                <td>Check current score</td>
            </tr>
            <tr>
                <td><code>faf bi-sync</code></td>
                <td>Optional</td>
                <td>Generate CLAUDE.md</td>
            </tr>
        </tbody>
    </table>

    <div class="footer">
        <p><strong>Install:</strong> <code>npm install -g faf-cli</code></p>
        <p><strong>Docs:</strong> <a href="https://faf.one" style="color: #FF6B35; text-decoration: none;">faf.one</a></p>
        <p style="margin-top: 1rem; font-style: italic; color: #FF6B35;">"README first, .faf second, code third."</p>
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

    .info-box {
        background: #eff6ff;
        border-left: 4px solid #3b82f6;
        padding: 1rem;
        margin: 1rem 0;
        border-radius: 0 8px 8px 0;
    }

    .info-box strong {
        color: #1e40af;
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
</style>
