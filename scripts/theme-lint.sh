#!/usr/bin/env bash
# theme-lint.sh — enforce the faf.one theming contract (see CLAUDE.md "The 11 Rules").
# Catches the recurring light/dark + gradient regressions that manual sweeps keep missing.
# Usage: bash scripts/theme-lint.sh [path]   (default: src/routes)
# Exit 0 = clean, 1 = violations found.
set -u
cd "$(dirname "$0")/.." || exit 1
SCAN="${1:-src/routes}"
fail=0

# The layout banner is a documented locked-dark exception (metallic shimmer). Nothing else.
EXEMPT='src/routes/\+layout\.svelte'

section() { printf '\n\033[1m── %s ──\033[0m\n' "$1"; }

section "Rule #10 — gradients (flat colors only; layout banner exempt)"
g=$(grep -rnE 'linear-gradient|radial-gradient' "$SCAN" --include='*.svelte' 2>/dev/null | grep -vE "$EXEMPT")
if [ -n "$g" ]; then echo "$g"; fail=1; else echo "  clean"; fi

section "Rule #6 — retired mid-gray TEXT (#555–#aaa)"
m=$(grep -rniE 'color:\s*#(555|666|777|888|999|aaa|bbb)\b' "$SCAN" --include='*.svelte' 2>/dev/null | grep -vE "$EXEMPT")
if [ -n "$m" ]; then echo "$m"; fail=1; else echo "  clean"; fi

section "Rule #2 — fixed light BACKGROUND not using a theme token (won't flip with theme)"
b=$(grep -rniE 'background(-color)?:\s*(white|#fff|#f[0-9a-f]{2}|#f[0-9a-f]{5})\b' "$SCAN" --include='*.svelte' 2>/dev/null | grep -viE 'var\(' | grep -vE "$EXEMPT")
if [ -n "$b" ]; then echo "$b"; fail=1; else echo "  clean"; fi

printf '\n'
if [ "$fail" = 0 ]; then echo "✅ theme-lint: clean"; else echo "❌ theme-lint: violations above"; fi
exit $fail
