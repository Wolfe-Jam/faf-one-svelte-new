<script>
  import { fade } from 'svelte/transition';
  import { onMount } from 'svelte';
  import { page } from '$app/state';

  // Form state (Svelte 5 runes)
  let formData = $state({
    who: '',
    what: '',
    where: '',
    why: '',
    when: '',
    how: ''
  });

  // Pre-fill from /ideas (3Ws) URL params
  onMount(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('who')) formData.who = params.get('who');
    if (params.get('what')) formData.what = params.get('what');
    if (params.get('why')) formData.why = params.get('why');
  });

  let activeTab = $state('preview'); // 'readme' | 'faf' | 'preview'
  let copied = $state({
    readme: false,
    faf: false,
    who: false,
    what: false,
    where: false,
    why: false,
    when: false,
    how: false
  });

  // Placeholder suggestions for tab-completion
  const placeholders = {
    who: 'creators, builders',
    what: 'app for...',
    where: 'web, mobile',
    why: 'gap in market for...',
    when: 'within a month',
    how: 'SaaS, downloads'
  };

  // Computed outputs
  let readmeContent = $derived(generateReadmeSection(formData));
  let fafContent = $derived(generateFafYaml(formData));
  let isComplete = $derived(
    formData.who && formData.what && formData.where &&
    formData.why && formData.when && formData.how
  );

  // Tab-completion handler
  function handleTabComplete(event, field) {
    if (event.key === 'Tab' && !formData[field]) {
      event.preventDefault();
      formData[field] = placeholders[field];
    }
  }

  function generateReadmeSection(data) {
    return `## 📋 Project Context

**1W (WHO):** ${data.who || '_________'}

**2W (WHAT):** ${data.what || '_________'}

**3W (WHY):** ${data.why || '_________'}

**4W (WHERE):** ${data.where || '_________'}

**5W (WHEN):** ${data.when || '_________'}

**6W (HOW):** ${data.how || '_________'}

---
*Authored with [FAF](https://faf.one) - AI-ready project context*`;
  }

  function generateFafYaml(data) {
    const complete = data.who && data.what && data.where && data.why && data.when && data.how;
    return `human_context:
  who: "${data.who || 'TODO'}"
  what: "${data.what || 'TODO'}"
  why: "${data.why || 'TODO'}"
  where: "${data.where || 'TODO'}"
  when: "${data.when || 'TODO'}"
  how: "${data.how || 'TODO'}"
  context_score: ${complete ? 100 : 0}
  success_rate: "${complete ? '100%' : '0%'}"`;
  }

  function generateFafYamlHighlighted(data) {
    const complete = data.who && data.what && data.where && data.why && data.when && data.how;
    return `<span class="yaml-key">human_context</span><span class="yaml-punct">:</span>
  <span class="yaml-key">who</span><span class="yaml-punct">:</span> <span class="yaml-string">"${data.who || 'TODO'}"</span>
  <span class="yaml-key">what</span><span class="yaml-punct">:</span> <span class="yaml-string">"${data.what || 'TODO'}"</span>
  <span class="yaml-key">why</span><span class="yaml-punct">:</span> <span class="yaml-string">"${data.why || 'TODO'}"</span>
  <span class="yaml-key">where</span><span class="yaml-punct">:</span> <span class="yaml-string">"${data.where || 'TODO'}"</span>
  <span class="yaml-key">when</span><span class="yaml-punct">:</span> <span class="yaml-string">"${data.when || 'TODO'}"</span>
  <span class="yaml-key">how</span><span class="yaml-punct">:</span> <span class="yaml-string">"${data.how || 'TODO'}"</span>
  <span class="yaml-key">context_score</span><span class="yaml-punct">:</span> <span class="yaml-number">${complete ? 100 : 0}</span>
  <span class="yaml-key">success_rate</span><span class="yaml-punct">:</span> <span class="yaml-string">"${complete ? '100%' : '0%'}"</span>`;
  }

  async function downloadFile(type) {
    const content = type === 'readme' ? readmeContent : fafContent;
    const filename = type === 'readme' ? 'README-6ws.md' : 'project.faf';
    const mimeType = type === 'readme' ? 'text/markdown' : 'text/yaml';

    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
  }

  async function copyToClipboard(type) {
    const content = type === 'readme' ? readmeContent : fafContent;
    await navigator.clipboard.writeText(content);
    copied[type] = true;
    setTimeout(() => copied[type] = false, 2000);
  }

  async function copyField(field) {
    await navigator.clipboard.writeText(formData[field] || '');
    copied[field] = true;
    setTimeout(() => copied[field] = false, 1500);
  }

  async function downloadBothFiles() {
    // Download README
    const readmeBlob = new Blob([readmeContent], { type: 'text/markdown' });
    const readmeUrl = URL.createObjectURL(readmeBlob);
    const readmeLink = document.createElement('a');
    readmeLink.href = readmeUrl;
    readmeLink.download = 'README-6ws.md';
    readmeLink.click();
    URL.revokeObjectURL(readmeUrl);

    // Small delay between downloads
    await new Promise(resolve => setTimeout(resolve, 100));

    // Download project.faf
    const fafBlob = new Blob([fafContent], { type: 'text/yaml' });
    const fafUrl = URL.createObjectURL(fafBlob);
    const fafLink = document.createElement('a');
    fafLink.href = fafUrl;
    fafLink.download = 'project.faf';
    fafLink.click();
    URL.revokeObjectURL(fafUrl);
  }
</script>

<svelte:head>
  <title>6Ws Builder - Author AI-Ready Context | FAF</title>
  <meta name="description" content="Answer 6 questions to author AI-ready context. Works with Claude, Gemini, Grok, Cursor, Codex, WARP, any AI assistant." />
</svelte:head>

<div class="page">
  <!-- Hero Section -->
  <div class="hero">
    <h1>6Ws Builder</h1>
    <p class="subtitle">Answer 6 questions → Copy → Paste to AI</p>
    <p class="description">
      Works with Claude, Gemini, Grok, Cursor, Codex, WARP, any AI assistant.
    </p>
  </div>

  <!-- 3Ws Callout -->
  <div class="callout-3ws">
    🆕 New to this? Start with just 3 questions → <a href="/ideas">faf.one/ideas</a>
  </div>

  <!-- Main Content Grid -->
  <div class="content-wrapper">
    <div class="content-grid">
      <!-- Left: Form -->
      <div class="form-section">
        <h2>📋 Fill the 6 Ws</h2>
        <p class="tip">💡 Tip: Press <kbd>Tab</kbd> to use suggestions</p>

        <form class="questions-form">
          <div class="question-group">
            <label for="who">
              <span class="q-number">1W</span>
              <span class="q-label">WHO</span>
              <span class="q-prompt">Who is this for?</span>
            </label>
            <div class="input-with-copy">
              <input
                type="text"
                id="who"
                bind:value={formData.who}
                placeholder="creators, builders"
                onkeydown={(e) => handleTabComplete(e, 'who')}
              />
              <button
                class="copy-field-btn"
                onclick={() => copyField('who')}
                title="Copy this answer"
              >
                {copied.who ? '✓' : '📋'}
              </button>
            </div>
          </div>

          <div class="question-group">
            <label for="what">
              <span class="q-number">2W</span>
              <span class="q-label">WHAT</span>
              <span class="q-prompt">What does it do?</span>
            </label>
            <div class="input-with-copy">
              <input
                type="text"
                id="what"
                bind:value={formData.what}
                placeholder="app for..."
                onkeydown={(e) => handleTabComplete(e, 'what')}
              />
              <button
                class="copy-field-btn"
                onclick={() => copyField('what')}
                title="Copy this answer"
              >
                {copied.what ? '✓' : '📋'}
              </button>
            </div>
          </div>

          <div class="question-group">
            <label for="why">
              <span class="q-number">3W</span>
              <span class="q-label">WHY</span>
              <span class="q-prompt">Why does it exist?</span>
            </label>
            <div class="input-with-copy">
              <input
                type="text"
                id="why"
                bind:value={formData.why}
                placeholder="gap in market for..."
                onkeydown={(e) => handleTabComplete(e, 'why')}
              />
              <button
                class="copy-field-btn"
                onclick={() => copyField('why')}
                title="Copy this answer"
              >
                {copied.why ? '✓' : '📋'}
              </button>
            </div>
          </div>

          <div class="question-group">
            <label for="where">
              <span class="q-number">4W</span>
              <span class="q-label">WHERE</span>
              <span class="q-prompt">Where does it run?</span>
            </label>
            <div class="input-with-copy">
              <input
                type="text"
                id="where"
                bind:value={formData.where}
                placeholder="web, mobile"
                onkeydown={(e) => handleTabComplete(e, 'where')}
              />
              <button
                class="copy-field-btn"
                onclick={() => copyField('where')}
                title="Copy this answer"
              >
                {copied.where ? '✓' : '📋'}
              </button>
            </div>
          </div>

          <div class="question-group">
            <label for="when">
              <span class="q-number">5W</span>
              <span class="q-label">WHEN</span>
              <span class="q-prompt">When to use it?</span>
            </label>
            <div class="input-with-copy">
              <input
                type="text"
                id="when"
                bind:value={formData.when}
                placeholder="within a month"
                onkeydown={(e) => handleTabComplete(e, 'when')}
              />
              <button
                class="copy-field-btn"
                onclick={() => copyField('when')}
                title="Copy this answer"
              >
                {copied.when ? '✓' : '📋'}
              </button>
            </div>
          </div>

          <div class="question-group">
            <label for="how">
              <span class="q-number">6W</span>
              <span class="q-label">HOW</span>
              <span class="q-prompt">How to get started?</span>
            </label>
            <div class="input-with-copy">
              <input
                type="text"
                id="how"
                bind:value={formData.how}
                placeholder="SaaS, downloads"
                onkeydown={(e) => handleTabComplete(e, 'how')}
              />
              <button
                class="copy-field-btn"
                onclick={() => copyField('how')}
                title="Copy this answer"
              >
                {copied.how ? '✓' : '📋'}
              </button>
            </div>
          </div>
        </form>

        {#if isComplete}
          <button class="completion-button" transition:fade onclick={() => copyToClipboard('faf')}>
            <span class="completion-icon">🎉</span>
            <span class="completion-text">
              <strong>{copied.faf ? '✓ Copied!' : 'Copy human_context'}</strong>
              <small>Paste into Claude, Gemini, Grok, Cursor, Codex, WARP, any AI</small>
            </span>
          </button>
          <div class="secondary-action">
            <button class="download-link" onclick={downloadBothFiles}>
              📥 Or download files (README-6ws.md + project.faf)
            </button>
          </div>
        {:else}
          <div class="progress-hint">
            Fill all 6 questions to get started
          </div>
        {/if}
      </div>

      <!-- Right: Live Preview & Downloads -->
      <div class="preview-section">
        <h2>📥 Your Files</h2>

        <!-- Tab Switcher -->
        <div class="tabs">
          <button
            class="tab"
            class:active={activeTab === 'preview'}
            onclick={() => activeTab = 'preview'}
          >
            Preview
          </button>
          <button
            class="tab"
            class:active={activeTab === 'readme'}
            onclick={() => activeTab = 'readme'}
          >
            README.md
          </button>
          <button
            class="tab"
            class:active={activeTab === 'faf'}
            onclick={() => activeTab = 'faf'}
          >
            project.faf
          </button>
        </div>

        <!-- Content Display -->
        <div class="preview-content">
          {#if activeTab === 'preview'}
            <div class="preview-display">
              <h3>📄 README Section</h3>
              <div class="preview-box">
                <pre>{readmeContent}</pre>
              </div>

              <h3>📦 project.faf</h3>
              <div class="preview-box yaml-preview">
                <pre>{@html generateFafYamlHighlighted(formData)}</pre>
              </div>
            </div>
          {:else if activeTab === 'readme'}
            <div class="code-display">
              <pre><code>{readmeContent}</code></pre>
            </div>
            <div class="actions">
              <button
                onclick={() => copyToClipboard('readme')}
              >
                {copied.readme ? '✓ Copied!' : '📋 Copy'}
              </button>
              <button
                onclick={() => downloadFile('readme')}
                disabled={!isComplete}
                class="primary"
              >
                📥 Download README-6ws.md
              </button>
            </div>
          {:else}
            <div class="code-display yaml-preview">
              <pre>{@html generateFafYamlHighlighted(formData)}</pre>
            </div>
            <div class="actions">
              <button
                onclick={() => copyToClipboard('faf')}
              >
                {copied.faf ? '✓ Copied!' : '📋 Copy'}
              </button>
              <button
                onclick={() => downloadFile('faf')}
                disabled={!isComplete}
                class="primary"
              >
                📥 Download project.faf
              </button>
            </div>
          {/if}
        </div>
      </div>
    </div>
  </div>

  <!-- Next Steps -->
  <div class="next-steps">
    <h2>How to Use This</h2>
    <div class="steps-grid">
      <div class="step primary-step">
        <div class="step-icon">🤖</div>
        <h3>1. Share with AI (Most Common)</h3>
        <p>Click the big green button, then paste the human_context into any AI chat. Works with Claude, Gemini, Grok, Cursor, Codex, WARP, any AI assistant.</p>
      </div>
      <div class="step">
        <div class="step-icon">📦</div>
        <h3>2. Save to project.faf (Optional)</h3>
        <p>Download project.faf and save to your project root for persistent context across all AI tools.</p>
      </div>
      <div class="step">
        <div class="step-icon">📄</div>
        <h3>3. Add to README (Optional)</h3>
        <p>Download README-6ws.md section and paste into your project documentation.</p>
      </div>
    </div>
  </div>
</div>

<style>
  /* Page Layout */
  .page {
    background: var(--faf-cream);
    min-height: 100vh;
  }

  /* 3Ws Callout */
  .callout-3ws {
    max-width: 600px;
    margin: 0 auto 1rem auto;
    padding: 0.75rem 1.25rem;
    background: var(--faf-surface);
    border: 1px solid var(--faf-orange);
    border-left: 4px solid var(--faf-orange);
    border-radius: 8px;
    font-size: 0.95rem;
    color: var(--faf-dark);
    text-align: center;
  }

  .callout-3ws a {
    color: var(--faf-orange);
    font-weight: 700;
    text-decoration: none;
  }

  .callout-3ws a:hover {
    text-decoration: underline;
  }

  /* Hero */
  .hero {
    text-align: center;
    padding: 4rem 2rem 2rem 2rem;
    max-width: 800px;
    margin: 0 auto;
  }

  .hero h1 {
    font-size: clamp(2.5rem, 8vw, 4rem);
    color: var(--faf-dark);
    margin: 0 0 1rem 0;
  }

  .subtitle {
    font-size: 1.5rem;
    color: var(--faf-orange);
    margin: 0 0 0.5rem 0;
    font-weight: 600;
  }

  .description {
    color: var(--faf-dark);
    font-size: 1.1rem;
  }

  /* Content Grid */
  .content-wrapper {
    max-width: 1400px;
    margin: 0 auto;
    padding: 2rem;
  }

  .content-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    align-items: start;
  }

  @media (max-width: 1024px) {
    .content-grid {
      grid-template-columns: 1fr;
      gap: 2rem;
    }
  }

  /* Form Section */
  .form-section h2,
  .preview-section h2 {
    font-size: 1.5rem;
    margin: 0 0 0.5rem 0;
    color: var(--faf-dark);
  }

  .tip {
    color: var(--faf-dark);
    font-size: 0.9rem;
    margin: 0 0 1.5rem 0;
  }

  .tip kbd {
    background: var(--faf-light-gray);
    border: 1px solid var(--faf-border);
    border-radius: 4px;
    padding: 0.2rem 0.5rem;
    font-family: 'SF Mono', monospace;
    font-size: 0.85rem;
    color: var(--faf-dark);
    box-shadow: 0 1px 2px rgba(0,0,0,0.1);
  }

  .questions-form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .question-group {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .question-group label {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-weight: 600;
    color: var(--faf-dark);
  }

  .q-number {
    background: var(--faf-orange);
    color: white;
    padding: 0.25rem 0.6rem;
    border-radius: 4px;
    font-size: 0.85rem;
    font-family: 'SF Mono', monospace;
  }

  .q-label {
    font-family: 'SF Mono', monospace;
    color: var(--faf-orange);
  }

  .q-prompt {
    color: var(--faf-dark);
    font-weight: 400;
  }

  .input-with-copy {
    display: flex;
    gap: 0.5rem;
    align-items: center;
  }

  .input-with-copy input {
    flex: 1;
    padding: 0.75rem 1rem;
    border: 2px solid var(--faf-border);
    border-radius: 8px;
    font-size: 1rem;
    transition: border-color 0.2s;
    background: var(--faf-surface);
    color: var(--faf-dark);
  }

  .input-with-copy input:focus {
    outline: none;
    border-color: var(--faf-orange);
  }

  .input-with-copy input::placeholder {
    color: #bbb;
  }

  .copy-field-btn {
    padding: 0.75rem 1rem;
    background: var(--faf-light-gray);
    border: 2px solid var(--faf-border);
    border-radius: 8px;
    cursor: pointer;
    font-size: 1rem;
    transition: all 0.2s;
    min-width: 48px;
  }

  .copy-field-btn:hover {
    background: var(--faf-orange);
    border-color: var(--faf-orange);
    transform: scale(1.05);
  }

  /* Completion Button */
  .completion-button {
    background: var(--faf-green);
    color: white;
    padding: 1.5rem 2rem;
    border-radius: 12px;
    text-align: center;
    font-weight: 700;
    margin-top: 1.5rem;
    border: none;
    cursor: pointer;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    font-size: 1.1rem;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(0, 191, 99, 0.3);
  }

  .completion-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 25px rgba(0, 191, 99, 0.5);
    background: var(--faf-green-hover);
  }

  .completion-button:active {
    transform: translateY(0);
  }

  .completion-icon {
    font-size: 2rem;
    animation: pulse 2s ease-in-out infinite;
  }

  @keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.1); }
  }

  .completion-text {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    align-items: flex-start;
  }

  .completion-text strong {
    font-size: 1.2rem;
  }

  .completion-text small {
    font-size: 0.85rem;
    opacity: 0.9;
    font-weight: 400;
  }

  .secondary-action {
    text-align: center;
    margin-top: 1rem;
  }

  .download-link {
    background: none;
    border: none;
    color: var(--faf-dark);
    font-size: 0.9rem;
    cursor: pointer;
    padding: 0.5rem;
    text-decoration: underline;
    transition: color 0.2s;
  }

  .download-link:hover {
    color: var(--faf-orange);
  }

  .progress-hint {
    color: var(--faf-dark);
    text-align: center;
    padding: 1rem;
    margin-top: 1rem;
    font-size: 0.95rem;
  }

  /* Preview Section */
  .tabs {
    display: flex;
    gap: 0.5rem;
    margin-bottom: 1rem;
  }

  .tab {
    padding: 0.75rem 1.5rem;
    border: none;
    background: var(--faf-light-gray);
    border-radius: 8px 8px 0 0;
    cursor: pointer;
    font-weight: 600;
    color: var(--faf-dark);
    transition: all 0.2s;
  }

  .tab:hover {
    background: var(--faf-border);
  }

  .tab.active {
    background: var(--faf-surface);
    color: var(--faf-orange);
  }

  .preview-content {
    background: var(--faf-surface);
    border-radius: 0 8px 8px 8px;
    padding: 1.5rem;
    min-height: 400px;
  }

  .preview-display h3 {
    color: var(--faf-dark);
    margin: 0 0 0.75rem 0;
    font-size: 1.1rem;
  }

  .preview-box {
    background: var(--faf-solid-bg);
    border: 1px solid var(--faf-locked-dark-muted);
    border-radius: 6px;
    padding: 1rem;
    margin-bottom: 1.5rem;
  }

  .preview-box pre {
    margin: 0;
    white-space: pre-wrap;
    word-wrap: break-word;
    font-family: 'SF Mono', monospace;
    font-size: 0.9rem;
    line-height: 1.6;
    color: var(--faf-solid-fg);
  }

  .code-display {
    background: var(--faf-solid-bg);
    border: 1px solid var(--faf-locked-dark-muted);
    border-radius: 6px;
    padding: 1rem;
    margin-bottom: 1rem;
    max-height: 500px;
    overflow-y: auto;
  }

  .code-display pre {
    margin: 0;
    white-space: pre-wrap;
    word-wrap: break-word;
  }

  .code-display code {
    font-family: 'SF Mono', monospace;
    font-size: 0.9rem;
    line-height: 1.6;
    color: var(--faf-solid-fg);
  }

  .actions {
    display: flex;
    gap: 1rem;
    justify-content: flex-end;
  }

  .actions button {
    padding: 0.75rem 1.5rem;
    border: 2px solid var(--faf-orange);
    background: var(--faf-surface);
    color: var(--faf-orange);
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s;
  }

  .actions button:hover:not(:disabled) {
    background: var(--faf-orange);
    color: white;
  }

  .actions button.primary {
    background: var(--faf-orange);
    color: white;
  }

  .actions button.primary:hover:not(:disabled) {
    background: #ff5520;
  }

  .actions button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* Next Steps */
  .next-steps {
    max-width: 1200px;
    margin: 4rem auto 0 auto;
    padding: 0 2rem 4rem 2rem;
  }

  .next-steps h2 {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 2rem;
    color: var(--faf-dark);
  }

  .steps-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }

  @media (max-width: 768px) {
    .steps-grid {
      grid-template-columns: 1fr;
    }
  }

  .step {
    text-align: center;
    padding: 2rem;
    background: var(--faf-surface);
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  }

  .step.primary-step {
    border: 3px solid var(--faf-green);
    background: var(--faf-surface);
    position: relative;
  }

  .step.primary-step::before {
    content: '⭐ START HERE';
    position: absolute;
    top: -12px;
    left: 50%;
    transform: translateX(-50%);
    background: var(--faf-green);
    color: white;
    padding: 0.25rem 0.75rem;
    border-radius: 999px;
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.05em;
  }

  .step-icon {
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  .step h3 {
    color: var(--faf-dark);
    margin: 0 0 0.5rem 0;
  }

  .step p {
    color: var(--faf-dark);
    margin: 0;
    font-size: 0.95rem;
  }

  /* YAML Syntax Highlighting */
  .yaml-preview :global(.yaml-key) {
    color: var(--faf-cyan-dark);
    font-weight: 600;
  }

  .yaml-preview :global(.yaml-string) {
    color: var(--faf-orange);
  }

  .yaml-preview :global(.yaml-number) {
    color: #ffa500;
  }

  .yaml-preview :global(.yaml-punct) {
    color: var(--faf-solid-fg);
    opacity: 0.7;
  }
</style>
