#!/usr/bin/env bash
# style-check.sh — the faf.one style checker. Any added content runs through it.
# Colours come from the site tokens (CLAUDE.md, "Site rules" + token table), never hex.
#
# Usage: bash scripts/style-check.sh            # the lines this branch ADDS to .svelte/.css vs origin/main
#        bash scripts/style-check.sh <file> ... # whole files (e.g. a new page, before it's committed)
#
# Fails on a line that has:
#   1. a hex colour in color/background/border/fill/stroke/outline, unless the line carries
#      /* literal-ok: <reason> */  (the #00ff88 terminal-green carve-out needs no marker)
#   2. a gradient (rule #10)
#   3. mid-gray text #555–#bbb (rule #6)
#   4. cyan text from var(--faf-cyan) / var(--faf-cyan-dark): bright cyan on light — use var(--faf-cyan-text)
#   5. :global(body) with !important — the light/dark switching flash (CLAUDE.md, Architectural rules)
# The two historic faults: cyan text on light, dark text on dark (hex text that doesn't flip).
# Exit 0 = clean, 1 = violations.
set -u
cd "$(dirname "$0")/.." || exit 1

HEX='(^|[^-])(color|background(-color)?|border[a-z-]*|fill|stroke|outline[a-z-]*)[[:space:]]*:[^;]*#[0-9a-fA-F][0-9a-fA-F][0-9a-fA-F]'
GRAD='(linear|radial|conic)-gradient'
CYAN='(^|[^-])color[[:space:]]*:[[:space:]]*var[(]--faf-cyan(-dark)?[)]'
DARKTXT='(^|[^-])color[[:space:]]*:[[:space:]]*#(000|000000|111|111111|1a1a1a|1A1A1A|222|222222|333|333333)([^0-9a-fA-F]|$)'
GRAY='(^|[^-])color[[:space:]]*:[[:space:]]*#(555|666|777|888|999|aaa|bbb|AAA|BBB)([^0-9a-fA-F]|$)'
LAYOUT='src/routes/\+layout\.svelte'   # locked-dark banner, documented exception (CLAUDE.md)

# Emit "file:line:text" for the lines under check.
lines() {
  if [ "$#" -gt 0 ]; then
    for f in "$@"; do grep -nH '' "$f"; done
  else
    base=$(git merge-base HEAD origin/main 2>/dev/null || echo origin/main)
    git diff -U0 "$base" -- '*.svelte' '*.css' ':!src/app.css' | awk '
      /^\+\+\+ b\// { file = substr($0, 7); next }
      /^@@/ { split($3, a, ","); n = substr(a[1], 2) + 0; next }
      /^\+/ && file != "" { print file ":" n ":" substr($0, 2); n++ }
    '
  fi
}

out=$(lines "$@" | grep -vE "^$LAYOUT:" | awk -v hex="$HEX" -v grad="$GRAD" -v gray="$GRAY" -v cyan="$CYAN" -v dark="$DARKTXT" '
  {
    t = $0; sub(/^[^:]*:[0-9]+:/, "", t)
    why = ""
    if (t ~ grad) why = "gradient (flat colours only)"
    else if (t ~ gray) why = "mid-gray text (use weight/size)"
    else if (t ~ /(^|[^-])color[[:space:]]*:[[:space:]]*#(00d4d4|00D4D4|00ffff|00FFFF|0ff|0FF)/) why = "bright cyan text on light: use var(--faf-cyan-text)"
    else if (t ~ cyan) why = "bright cyan text on light: use var(--faf-cyan-text)"
    else if (t ~ /:global\(body\)/ && t ~ /!important/) why = ":global(body) !important: theme-switch flash"
    else if (t ~ dark && t !~ /literal-ok:/) why = "hex dark text: stays dark on the dark theme, use var(--faf-black) / var(--faf-dark)"
    else if (t ~ hex && t !~ /literal-ok:/ && t !~ /:[ \t]*#00ff88[ \t]*;/) why = "hex colour (use a site token, or mark /* literal-ok: reason */)"
    if (why != "") print "  " $0 "\n      -> " why
  }')

checked=$( [ "$#" -gt 0 ] && echo "$# file(s)" || echo "added lines vs origin/main" )
if [ -z "$out" ]; then
  echo "✅ style-check: clean ($checked)"
  exit 0
fi
echo "$out"
echo
echo "❌ style-check: fix the lines above ($checked). Tokens: CLAUDE.md token table / src/app.css"
exit 1
