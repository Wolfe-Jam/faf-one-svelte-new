<script>
  import { onMount } from 'svelte';

  let isVisible = $state(false);
  let isDismissed = $state(false);

  onMount(() => {
    // Check if user has dismissed before
    const dismissed = sessionStorage.getItem('github-snackbar-dismissed');
    if (dismissed) {
      return;
    }

    // Show after a short delay
    setTimeout(() => {
      isVisible = true;
    }, 1000);
  });

  function dismiss() {
    isVisible = false;
    isDismissed = true;
    sessionStorage.setItem('github-snackbar-dismissed', 'true');
  }
</script>

{#if isVisible && !isDismissed}
<div class="snackbar" class:visible={isVisible}>
  <div class="snackbar-content">
    <svg class="github-logo" width="24" height="24" viewBox="0 0 16 16" fill="currentColor">
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
    </svg>
    <span class="snackbar-text">
      <strong>New:</strong> Instant GitHub Repo Scoring
    </span>
    <a href="/docs#github-scoring" class="snackbar-link">Try it →</a>
  </div>
  <button class="dismiss-btn" onclick={dismiss} aria-label="Dismiss">✕</button>
</div>
{/if}

<style>
  .snackbar {
    position: fixed;
    top: 10px;
    left: 50%;
    transform: translateX(-50%) translateY(-20px);
    background: linear-gradient(135deg, #24292e 0%, #1a1e22 100%);
    color: white;
    padding: 0.75rem 1.5rem;
    border-radius: 999px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
    z-index: 1100;
    display: flex;
    align-items: center;
    gap: 1rem;
    opacity: 0;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  .snackbar.visible {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }

  .snackbar-content {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  .github-logo {
    width: 24px;
    height: 24px;
    color: white;
    flex-shrink: 0;
  }

  .snackbar-text {
    font-size: 0.95rem;
    font-weight: 500;
    white-space: nowrap;
  }

  .snackbar-text strong {
    color: var(--faf-orange);
    font-weight: 700;
  }

  .snackbar-link {
    color: var(--faf-cyan-dark);
    text-decoration: none;
    font-weight: 600;
    transition: color 0.2s;
    white-space: nowrap;
  }

  .snackbar-link:hover {
    color: var(--faf-cyan);
  }

  .dismiss-btn {
    background: none;
    border: none;
    color: rgba(255, 255, 255, 0.6);
    cursor: pointer;
    padding: 0.25rem 0.5rem;
    font-size: 1.2rem;
    transition: color 0.2s;
    margin-left: 0.5rem;
  }

  .dismiss-btn:hover {
    color: white;
  }

  @media (max-width: 640px) {
    .snackbar {
      left: 1rem;
      right: 1rem;
      transform: translateX(0) translateY(-20px);
      padding: 0.75rem 1rem;
    }

    .snackbar.visible {
      transform: translateX(0) translateY(0);
    }

    .snackbar-text {
      font-size: 0.85rem;
    }

    .snackbar-link {
      font-size: 0.85rem;
    }
  }
</style>
