import { writable } from 'svelte/store';
import { browser } from '$app/environment';

// Initialize theme from localStorage or default to light
function getInitialTheme(): boolean {
  if (!browser) return false;

  const stored = localStorage.getItem('faf-theme');
  if (stored !== null) {
    return stored === 'dark';
  }

  // Check system preference
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

// Create writable store for theme
export const isDarkMode = writable<boolean>(getInitialTheme());

// Subscribe to changes and persist to localStorage
if (browser) {
  isDarkMode.subscribe((value) => {
    localStorage.setItem('faf-theme', value ? 'dark' : 'light');

    // Update document class for global styling
    if (value) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  });
}

// Toggle function
export function toggleTheme() {
  isDarkMode.update(value => !value);
}
