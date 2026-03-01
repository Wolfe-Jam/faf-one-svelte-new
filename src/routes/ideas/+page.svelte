<script>
  import { onMount } from 'svelte';

  // Real apps described in Who/What/Why format
  const examples = [
    {
      who: 'Anyone who needs a ride across town',
      what: 'Tap a button, a car shows up in minutes, pay without cash',
      why: 'Hailing taxis was broken — no pricing, no tracking, no reliability',
      name: 'Uber'
    },
    {
      who: 'Travelers who can\'t afford hotels',
      what: 'Stay in someone\'s spare room or rent out yours',
      why: 'Hotels are expensive and impersonal — millions of empty rooms exist worldwide',
      name: 'Airbnb'
    },
    {
      who: 'People who hate cooking after a long day',
      what: 'Browse local restaurants, order food, get it delivered to your door',
      why: 'Calling restaurants, waiting on hold, and driving to pick up food wastes everyone\'s time',
      name: 'DoorDash'
    },
    {
      who: 'Teams that drown in email',
      what: 'Organized group messaging with channels, search, and integrations',
      why: 'Important decisions get buried in email threads nobody can find later',
      name: 'Slack'
    },
    {
      who: 'Friends who split bills at dinner',
      what: 'Send money to anyone instantly — no bank details, no cash',
      why: 'Splitting a check means someone always forgets to pay you back',
      name: 'Venmo'
    },
    {
      who: 'Small business owners who need a website today',
      what: 'Beautiful online store up and running in an afternoon, no code needed',
      why: 'Building an e-commerce site used to take months and cost thousands',
      name: 'Shopify'
    },
    {
      who: 'People learning a new language on their commute',
      what: '5-minute daily lessons that feel like a game, not a textbook',
      why: 'Language classes are expensive, inconvenient, and most people quit',
      name: 'Duolingo'
    },
    {
      who: 'Anyone with a smartphone and a story to tell',
      what: 'Record short videos, add music, and share with millions',
      why: 'YouTube was too long, Instagram was too polished — people wanted raw and fast',
      name: 'TikTok'
    },
    {
      who: 'Remote teams spread across time zones',
      what: 'Video meetings that actually work — screen share, record, join from anywhere',
      why: 'Conference call systems were overpriced, unreliable, and required IT setup',
      name: 'Zoom'
    },
    {
      who: 'Designers and developers collaborating on UI',
      what: 'Design in the browser, share a link, get feedback in real time',
      why: 'Design files lived on one person\'s laptop — nobody else could see or edit them',
      name: 'Figma'
    }
  ];

  let who = $state('');
  let what = $state('');
  let why = $state('');
  let copied = $state(false);
  let exampleIndex = $state(0);
  let submitted = $state(false);

  // Demo animation state
  let demoActive = $state(false);
  let demoStep = $state(0); // 0=idle, 1=typing who, 2=typing what, 3=typing why, 4=done
  let demoTimer = $state(null);
  let idleTimer = $state(null);

  let step = $derived(
    !who ? 1 : !what ? 2 : !why ? 3 : 4
  );

  let currentExample = $derived(examples[exampleIndex]);
  let brief = $derived(generateBrief(who, what, why));
  let allDone = $derived(!!who && !!what && !!why);

  function generateBrief(w, wh, wy) {
    if (!w || !wh || !wy) return '';
    return `**1W (WHO):** ${w}
**2W (WHAT):** ${wh}
**3W (WHY):** ${wy}

---
*Generated with FAF (https://faf.one) - 3 of 6Ws complete*`;
  }

  function nextExample() {
    if (demoActive) {
      // During demo: skip to next animated example
      stopDemo();
      who = '';
      what = '';
      why = '';
      exampleIndex = (exampleIndex + 1) % examples.length;
      runDemo();
    } else {
      // In write mode: just cycle the placeholder examples
      exampleIndex = (exampleIndex + 1) % examples.length;
    }
  }

  function replayDemo() {
    who = '';
    what = '';
    why = '';
    submitted = false;
    runDemo();
  }

  function typeText(fullText, field, charIndex, callback) {
    if (!demoActive) return;
    if (charIndex > fullText.length) {
      demoTimer = setTimeout(() => { if (demoActive) callback(); }, 600);
      return;
    }
    if (field === 'who') who = fullText.slice(0, charIndex);
    if (field === 'what') what = fullText.slice(0, charIndex);
    if (field === 'why') why = fullText.slice(0, charIndex);

    demoTimer = setTimeout(() => {
      typeText(fullText, field, charIndex + 1, callback);
    }, 28);
  }

  function runDemo() {
    demoActive = true;
    who = '';
    what = '';
    why = '';
    submitted = false;
    demoStep = 1;

    const ex = examples[exampleIndex];

    typeText(ex.who, 'who', 0, () => {
      demoStep = 2;
      typeText(ex.what, 'what', 0, () => {
        demoStep = 3;
        typeText(ex.why, 'why', 0, () => {
          demoStep = 4;
          // Hold, then cycle to next example
          demoTimer = setTimeout(() => {
            exampleIndex = (exampleIndex + 1) % examples.length;
            runDemo();
          }, 3000);
        });
      });
    });
  }

  function stopDemo() {
    demoActive = false;
    demoStep = 0;
    if (demoTimer) {
      clearTimeout(demoTimer);
      demoTimer = null;
    }
    // Text stays in who/what/why for editing
  }

  function handleFocus() {
    if (demoActive) startFresh();
    else resetIdleTimer();
  }

  function handleInput() {
    resetIdleTimer();
  }

  function resetIdleTimer() {
    if (idleTimer) clearTimeout(idleTimer);
    idleTimer = setTimeout(() => {
      if (!demoActive) {
        runDemo();
      }
    }, 10000);
  }

  function startFresh() {
    stopDemo();
    who = '';
    what = '';
    why = '';
    submitted = false;
    resetIdleTimer();
    setTimeout(() => document.getElementById('who')?.focus(), 10);
  }

  function handlePageClick() {
    if (demoActive) startFresh();
  }

  function handleSubmit() {
    if (demoActive) stopDemo();
    submitted = true;
  }

  onMount(() => {
    runDemo();
    return () => {
      stopDemo();
      if (idleTimer) clearTimeout(idleTimer);
    };
  });

  async function copyBrief() {
    if (!brief) return;
    await navigator.clipboard.writeText(brief);
    copied = true;
    setTimeout(() => copied = false, 2000);
  }

  function reset() {
    who = '';
    what = '';
    why = '';
    submitted = false;
    runDemo();
  }
</script>

<svelte:head>
  <title>Describe Your App Idea | FAF</title>
  <meta name="description" content="Answer 3 questions. Get a brief any developer can build from." />
</svelte:head>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div class="page" onclick={handlePageClick}>
  <div class="container">

    <div class="hero">
      <h1>Describe your app idea</h1>
      <p class="subtitle">Answer 3 questions. That's all a developer needs to start.</p>
    </div>

    <div class="example-bar">
      <span class="example-label">This is how <strong>{currentExample.name}</strong> started:</span>
      <button class="example-cycle" onclick={nextExample}>show me another &rarr;</button>
    </div>

    <div class="questions">

      <!-- Q1: Who -->
      <div class="question" class:active={demoActive ? demoStep === 1 : step === 1} class:done={demoActive ? demoStep > 1 : !!who}>
        <div class="q-number">{(demoActive ? demoStep > 1 : !!who) ? '✓' : '1'}</div>
        <div class="q-content">
          <label for="who"><span class="w-tag" title="The 1st W in the 6W FAF system">1W</span> Who is it for?</label>
          <p class="q-hint">The people who will use this app. Not you — them.</p>
          <textarea
            id="who"
            bind:value={who}
            placeholder="e.g. {currentExample.who}"
            rows="2"
            onfocus={handleFocus}
            oninput={handleInput}
            class:demo-typing={demoActive && demoStep === 1}
          ></textarea>
        </div>
      </div>

      <!-- Q2: What -->
      <div class="question" class:active={demoActive ? demoStep === 2 : step === 2} class:done={demoActive ? demoStep > 2 : !!what} class:locked={demoActive ? demoStep < 2 : step < 2}>
        <div class="q-number">{(demoActive ? demoStep > 2 : !!what) ? '✓' : '2'}</div>
        <div class="q-content">
          <label for="what"><span class="w-tag" title="The 2nd W in the 6W FAF system">2W</span> What does it do for them?</label>
          <p class="q-hint">The value they get. Not features — the outcome.</p>
          <textarea
            id="what"
            bind:value={what}
            placeholder="e.g. {currentExample.what}"
            rows="2"
            disabled={!demoActive && step < 2}
            onfocus={handleFocus}
            oninput={handleInput}
            class:demo-typing={demoActive && demoStep === 2}
          ></textarea>
        </div>
      </div>

      <!-- Q3: Why -->
      <div class="question" class:active={demoActive ? demoStep === 3 : step === 3} class:done={demoActive ? demoStep > 3 : !!why} class:locked={demoActive ? demoStep < 3 : step < 3}>
        <div class="q-number">{(demoActive ? demoStep > 3 : !!why) ? '✓' : '3'}</div>
        <div class="q-content">
          <label for="why"><span class="w-tag" title="The 3rd W in the 6W FAF system">3W</span> Why should we build it?</label>
          <p class="q-hint">What's broken today? Why does this need to exist?</p>
          <textarea
            id="why"
            bind:value={why}
            placeholder="e.g. {currentExample.why}"
            rows="2"
            disabled={!demoActive && step < 3}
            onfocus={handleFocus}
            oninput={handleInput}
            class:demo-typing={demoActive && demoStep === 3}
          ></textarea>
        </div>
      </div>

    </div>

    {#if !demoActive && !allDone}
      <p class="start-prompt">Click any box to start writing your idea</p>
    {/if}

    <!-- Submit Button (only when user writes their own idea, not during demo) -->
    {#if allDone && !demoActive}
      <div class="submit-row">
        <button class="submit-btn" class:go={submitted} onclick={handleSubmit}>
          {submitted ? 'GO!' : 'SUBMIT'}
        </button>
      </div>
    {/if}

    <!-- Output -->
    {#if submitted && brief}
      <div class="output">
        <div class="output-header">
          <h2>Your Brief</h2>
          <div class="output-actions">
            <button class="copy-btn" onclick={copyBrief}>
              {copied ? 'Copied!' : 'Copy'}
            </button>
            <button class="reset-btn" onclick={reset}>Start over</button>
          </div>
        </div>
        <pre class="brief">{brief}</pre>
      </div>

      <div class="next-steps">
        <p>3 of 6Ws complete. That's enough to start building.</p>
        <div class="destinations">
          <a href="/6ws?who={encodeURIComponent(who)}&what={encodeURIComponent(what)}&why={encodeURIComponent(why)}" class="dest dest-primary">Continue to 6Ws</a>
          <a href="https://lovable.dev" target="_blank" rel="noopener" class="dest">Paste into Lovable</a>
          <a href="https://base44.com" target="_blank" rel="noopener" class="dest">Paste into Base44</a>
        </div>
        <p class="or-text">or send to your developer</p>
      </div>
    {/if}

  </div>
</div>

<style>
  .page {
    height: 100vh;
    background: #fafafa;
    padding: 1.25rem 1rem 1rem;
    overflow: hidden;
    box-sizing: border-box;
  }

  .container {
    max-width: 600px;
    margin: 0 auto;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  /* Hero */
  .hero {
    text-align: center;
    margin-bottom: 0.75rem;
  }

  .hero h1 {
    font-size: 1.8rem;
    font-weight: 700;
    color: #111;
    margin: 0 0 0.25rem;
  }

  .subtitle {
    font-size: 1rem;
    color: #666;
    margin: 0;
  }

  /* Example bar */
  .example-bar {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    padding: 0.5rem 1rem;
    background: #f0f0f0;
    border-radius: 8px;
    margin-bottom: 0.75rem;
    flex-wrap: wrap;
    font-size: 0.95rem;
  }

  .example-label {
    color: #333;
    font-weight: 500;
    font-size: 1rem;
  }

  .example-label strong {
    color: #111;
    font-weight: 700;
  }

  .example-cycle {
    background: none;
    border: none;
    color: #FF6B35;
    font-size: 1.1rem;
    font-weight: 600;
    cursor: pointer;
    padding: 0;
    font-family: inherit;
  }

  .example-cycle:hover {
    text-decoration: underline;
  }


  /* Questions */
  .questions {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-bottom: 0.75rem;
    flex: 1;
  }

  .question {
    display: flex;
    gap: 0.75rem;
    padding: 0.75rem;
    background: white;
    border: 2px solid #e8e8e8;
    border-radius: 10px;
    transition: all 0.3s;
    flex: 1;
  }

  .question.active {
    border-color: #FF6B35;
    box-shadow: 0 0 0 3px rgba(255, 107, 53, 0.1);
  }

  .question.done {
    border-color: #27c93f;
    background: #f8fdf8;
  }

  .question.locked {
    opacity: 0.35;
  }

  .q-number {
    width: 30px;
    height: 30px;
    min-width: 30px;
    border-radius: 50%;
    background: #f0f0f0;
    color: #999;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 0.85rem;
    margin-top: 2px;
    transition: all 0.3s;
  }

  .question.active .q-number {
    background: #FF6B35;
    color: white;
  }

  .question.done .q-number {
    background: #27c93f;
    color: white;
  }

  .q-content {
    flex: 1;
  }

  .w-tag {
    display: inline-block;
    background: #FF6B35;
    color: white;
    font-size: 0.65rem;
    font-weight: 700;
    padding: 0.1rem 0.35rem;
    border-radius: 4px;
    vertical-align: middle;
    margin-right: 0.3rem;
    cursor: help;
    letter-spacing: 0.02em;
  }

  .question.done .w-tag {
    background: #27c93f;
  }

  .q-content label {
    display: block;
    font-size: 1.05rem;
    font-weight: 700;
    color: #111;
    margin-bottom: 0.15rem;
  }

  .q-hint {
    font-size: 0.85rem;
    color: #999;
    margin: 0 0 0.4rem;
  }

  .q-content textarea {
    width: 100%;
    padding: 0.5rem 0.7rem;
    font-size: 1rem;
    border: 1.5px solid #ddd;
    border-radius: 8px;
    font-family: inherit;
    resize: none;
    box-sizing: border-box;
    line-height: 1.4;
    flex: 1;
  }

  .q-content textarea:focus {
    outline: none;
    border-color: #FF6B35;
  }

  .q-content textarea:disabled {
    background: #f5f5f5;
    cursor: not-allowed;
  }

  /* Demo typing indicator */
  .q-content textarea.demo-typing {
    border-color: #FF6B35;
  }

  /* Submit button */
  .submit-row {
    text-align: center;
    margin-bottom: 0.75rem;
  }

  .submit-btn {
    padding: 0.7rem 2.5rem;
    font-size: 1.15rem;
    font-weight: 700;
    font-family: inherit;
    background: #FF6B35;
    color: white;
    border: none;
    border-radius: 12px;
    cursor: pointer;
    transition: all 0.3s;
    letter-spacing: 0.05em;
  }

  .submit-btn:hover {
    background: #e55a2b;
    transform: scale(1.05);
  }

  .submit-btn.go {
    background: #27c93f;
    transform: scale(1.1);
    letter-spacing: 0.1em;
  }

  .start-prompt {
    text-align: center;
    color: #999;
    font-size: 1rem;
  }

  /* Output */
  .output {
    background: white;
    border: 2px solid #27c93f;
    border-radius: 10px;
    overflow: hidden;
    margin-bottom: 0.75rem;
  }

  .output-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 1rem;
    border-bottom: 1px solid #eee;
  }

  .output-header h2 {
    margin: 0;
    font-size: 1rem;
    font-weight: 700;
    color: #111;
  }

  .output-actions {
    display: flex;
    gap: 0.5rem;
  }

  .copy-btn {
    padding: 0.4rem 1rem;
    font-size: 0.85rem;
    font-weight: 600;
    background: #FF6B35;
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
  }

  .copy-btn:hover { background: #e55a2b; }

  .reset-btn {
    padding: 0.4rem 1rem;
    font-size: 0.85rem;
    background: transparent;
    color: #999;
    border: 1px solid #ddd;
    border-radius: 6px;
    cursor: pointer;
  }

  .reset-btn:hover {
    color: #666;
    border-color: #bbb;
  }

  .brief {
    margin: 0;
    padding: 0.75rem 1rem;
    font-family: inherit;
    font-size: 0.85rem;
    line-height: 1.5;
    color: #333;
    white-space: pre-wrap;
    background: #fafafa;
  }

  /* Next steps */
  .next-steps {
    text-align: center;
  }

  .next-steps > p {
    font-size: 0.95rem;
    color: #666;
    margin: 0 0 1.25rem;
  }

  .destinations {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.75rem;
    margin-bottom: 0.75rem;
  }

  .dest {
    padding: 0.6rem 1.5rem;
    background: #111;
    color: white;
    text-decoration: none;
    border-radius: 8px;
    font-size: 0.9rem;
    font-weight: 500;
  }

  .dest:hover { background: #333; }

  .dest-primary {
    background: #FF6B35;
  }

  .dest-primary:hover {
    background: #e55a2b;
  }

  .or-text {
    font-size: 0.85rem;
    color: #aaa;
  }

  @media (max-width: 600px) {
    .hero h1 { font-size: 1.5rem; }
    .example-bar { font-size: 0.8rem; }
    .question { padding: 0.6rem; }
  }
</style>
