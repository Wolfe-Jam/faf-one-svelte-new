<!-- WolfejamGizmo.svelte - Your signature half-moon design -->
<script lang="ts">
  type Props = {
    isDark?: boolean;
    size?: number;
    tooltipText?: string | null;
    className?: string;
    ontoggle?: (event: { isDark: boolean }) => void;
  };

  let {
    isDark = false,
    size = 28,
    tooltipText = null,
    className = '',
    ontoggle = () => {}
  }: Props = $props();

  // Component state
  let showTooltip = $state(false);

  // Handle click
  function handleClick() {
    ontoggle({ isDark: !isDark });
  }

  // Handle hover states
  function handleMouseEnter() {
    showTooltip = true;
  }

  function handleMouseLeave() {
    showTooltip = false;
  }
</script>

<button
  class="wolfejam-gizmo {className}"
  onclick={handleClick}
  onmouseenter={handleMouseEnter}
  onmouseleave={handleMouseLeave}
  aria-label={tooltipText || (isDark ? "Switch to Light Mode" : "Switch to Dark Mode")}
  style="--size: {size}px;"
  title={tooltipText || (isDark ? "Switch to Light Mode" : "Switch to Dark Mode")}
>
  <div
    class="wolfejam-gizmo__gradient"
    class:wolfejam-gizmo__gradient--dark={isDark}
  ></div>

  {#if showTooltip}
    <div class="wolfejam-gizmo__tooltip" role="tooltip">
      {tooltipText || (isDark ? "Light Mode" : "Dark Mode")}
    </div>
  {/if}
</button>

<style>
  /* Your signature half-moon CSS - exactly as specified */
  .wolfejam-gizmo {
    position: relative;
    width: var(--size);
    height: var(--size);
    padding: 0;
    background: transparent;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    outline: none;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  }

  .wolfejam-gizmo__gradient {
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, #FFF 50%, #121212 50%);
    transition: transform 0.3s ease;
    border-radius: 50%;
  }

  .wolfejam-gizmo__gradient--dark {
    transform: rotate(180deg);
  }

  .wolfejam-gizmo:hover {
    transform: scale(1.1);
    box-shadow: 0 4px 16px rgba(0, 255, 255, 0.3);
  }

  .wolfejam-gizmo:active {
    transform: scale(0.95);
  }

  .wolfejam-gizmo:focus {
    outline: 2px solid #00FFFF;
    outline-offset: 2px;
  }

  .wolfejam-gizmo:focus:not(:focus-visible) {
    outline: none;
  }

  .wolfejam-gizmo__tooltip {
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    margin-bottom: 8px;
    background: rgba(0, 0, 0, 0.9);
    color: white;
    padding: 6px 10px;
    border-radius: 6px;
    font-size: 12px;
    white-space: nowrap;
    pointer-events: none;
    z-index: 1000;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  }

  .wolfejam-gizmo__tooltip::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 4px solid rgba(0, 0, 0, 0.9);
  }

  /* Accessibility - reduced motion */
  @media (prefers-reduced-motion: reduce) {
    .wolfejam-gizmo,
    .wolfejam-gizmo * {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }
</style>
