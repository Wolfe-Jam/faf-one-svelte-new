#!/bin/bash
# gen-grounding-card.sh — the shareable "Context Grounding" card (1200×630 PNG).
#
# THE FIND, not a page. A tribe-locked trophy the hunter posts to look smart +
# early. Only THEIR tool is in the room (Codex sees AGENTS.md, Claude sees
# CLAUDE.md, …). Designed as TERMINAL OUTPUT — native to the tribe, reads as a
# real tool's receipt, not a marketing banner. The score glow-up (cold→grounded)
# is the feel-good; ✪ is the earned seal; the host tool is the hero, faf is the
# quiet one-line fix.
#
# One engine, N fronts: `--model codex|claude|gemini|grok|cursor|warp` sets the
# file + accent + url; per-repo numbers come from `faf bench`. Override any field.
#
# Usage:
#   gen-grounding-card.sh --model codex --repo your-repo \
#     --cold 9/20 --warm 20/20 --look-cold 11 --look-warm 0 \
#     --out static/cards/codex-your-repo.png
#
# Requires Google Chrome (headless).

set -euo pipefail

MODEL="" REPO="your-repo" COLD="9/20" WARM="20/20" LOOKC="11" LOOKW="0"
FILE="" ACCENT="" URL="" CMD="faf export --agents" BENCH="npx faf-cli bench" OUT=""
COLDNOTE="" WARMNOTE="" RECEIPT="" MODELLABEL=""
while [ $# -gt 0 ]; do
  case "$1" in
    --model)     MODEL="$2"; shift 2;;
    --repo)      REPO="$2"; shift 2;;
    --cold)      COLD="$2"; shift 2;;
    --warm)      WARM="$2"; shift 2;;
    --look-cold) LOOKC="$2"; shift 2;;
    --look-warm) LOOKW="$2"; shift 2;;
    --cold-note) COLDNOTE="$2"; shift 2;;
    --warm-note) WARMNOTE="$2"; shift 2;;
    --receipt)   RECEIPT="$2"; shift 2;;
    --model-label) MODELLABEL="$2"; shift 2;;
    --file)      FILE="$2"; shift 2;;
    --accent)    ACCENT="$2"; shift 2;;
    --url)       URL="$2"; shift 2;;
    --cmd)       CMD="$2"; shift 2;;
    --out)       OUT="$2"; shift 2;;
    *) echo "unknown arg: $1"; exit 1;;
  esac
done
[ -z "$MODEL" ] || [ -z "$OUT" ] && { echo "need --model and --out"; exit 1; }

# Per-tribe presets — one engine, N fronts. "knows who they are."
MODEL_LC="$(echo "$MODEL" | tr '[:upper:]' '[:lower:]')"
case "$MODEL_LC" in
  codex)  MODEL="Codex";  DEFFILE="AGENTS.md"; DEFACC="#00D4D4";;
  claude) MODEL="Claude"; DEFFILE="CLAUDE.md"; DEFACC="#D97757";;
  gemini) MODEL="Gemini"; DEFFILE="GEMINI.md"; DEFACC="#4A90E2";;
  grok)   MODEL="Grok";   DEFFILE="AGENTS.md"; DEFACC="#FF6B35";;
  cursor) MODEL="Cursor"; DEFFILE="AGENTS.md"; DEFACC="#7DD3FC";;
  warp)   MODEL="Warp";   DEFFILE="AGENTS.md"; DEFACC="#01A4FF";;
  *)      DEFFILE="AGENTS.md"; DEFACC="#00D4D4";;
esac
[ -z "$FILE" ]   && FILE="$DEFFILE"
[ -z "$ACCENT" ] && ACCENT="$DEFACC"
[ -z "$URL" ]    && URL="faf.one/${MODEL_LC}"
# Sub-line notes: explicit --cold-note/--warm-note win; else fall back to lookups text.
[ -z "$COLDNOTE" ] && COLDNOTE="${MODEL} re-reads the repo &mdash; <b>${LOOKC} lookups</b> / task, answers drift"
[ -z "$WARMNOTE" ] && WARMNOTE="structured context in <b>${FILE}</b> &mdash; <b>${LOOKW} lookups</b>, same answer every time"
# Foot label: real ✪ receipt sha when provided, else the generic label.
FOOTLABEL="context grounding score"
[ -n "$RECEIPT" ] && FOOTLABEL="✪ ${RECEIPT}"

CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
[ -x "$CHROME" ] || CHROME="$(command -v chromium || command -v google-chrome || true)"
[ -z "$CHROME" ] && { echo "no Chrome/Chromium found"; exit 1; }

WORK=$(mktemp -d)
trap 'rm -rf "$WORK"' EXIT

cat > "$WORK/card.html" <<EOF
<!doctype html><html><head><meta charset="utf-8"><style>
  * { margin:0; padding:0; box-sizing:border-box; }
  body { width:1200px; height:630px; background:#0a0a0a; overflow:hidden;
         font-family:'SF Mono',Menlo,Monaco,monospace;
         display:flex; align-items:center; justify-content:center; }
  .win { width:1056px; background:#141414; border:1px solid #262626;
         border-radius:14px; overflow:hidden; box-shadow:0 24px 80px rgba(0,0,0,.6); }
  .bar { height:52px; background:#1c1c1c; border-bottom:1px solid #262626;
         display:flex; align-items:center; padding:0 22px; gap:9px; }
  .dot { width:13px; height:13px; border-radius:50%; }
  .r{background:#ff5f57;} .y{background:#febc2e;} .g{background:#28c840;}
  .bartitle { color:#8a8a8a; font-size:18px; margin-left:14px; letter-spacing:.01em; }
  .bartitle b { color:#cfcfcf; }
  .body { padding:34px 44px 30px; }
  .cmd { color:#dcdcdc; font-size:21px; margin-bottom:26px; }
  .cmd .p { color:${ACCENT}; }
  .row { display:flex; align-items:baseline; gap:18px; }
  .label { font-size:23px; width:230px; }
  .muted { color:#ffffff; }
  .bigscore { font-size:58px; font-weight:700; font-family:Menlo,monospace; line-height:1; }
  .cold .bigscore { color:#ffffff; }
  .warm .bigscore { color:${ACCENT}; }
  .tag { font-size:22px; font-weight:600; margin-left:10px; }
  .cold .tag { color:#c2603f; }
  .warm .tag { color:${ACCENT}; }
  .sub { color:#666; font-size:19px; margin:8px 0 0 0; }
  .sub b { color:#9a9a9a; }
  .seal { font-size:46px; margin-left:8px; }
  .fix { margin:26px 0; display:flex; align-items:center; gap:16px; }
  .fixlabel { color:#555; font-size:18px; text-transform:uppercase; letter-spacing:.14em; }
  .fixcmd { background:#0a0a0a; border:1px solid #ffffff; border-radius:9px;
            color:#ffffff; font-size:24px; font-weight:600; padding:11px 20px; }
  .arrow { color:#3a3a3a; font-size:30px; margin:2px 0 0 248px; }
  .foot { display:flex; justify-content:space-between; align-items:center;
          margin-top:22px; padding-top:20px; border-top:1px solid #242424; }
  .foot .what { color:#ffffff; font-size:18px; }
  .foot .url { color:#e8e8e8; font-size:21px; font-weight:600; }
  .foot .url b { color:${ACCENT}; }
</style></head><body>
  <div class="win">
    <div class="bar">
      <span class="dot r"></span><span class="dot y"></span><span class="dot g"></span>
      <span class="bartitle">~/<b>${REPO}</b> &middot; ${MODEL_LC} grounding</span>
    </div>
    <div class="body">
      <div class="cmd"><span class="p">\$</span> ${BENCH}</div>

      <div class="row cold">
        <span class="label muted">without context</span>
        <span class="bigscore">${COLD}</span>
        <span class="tag">guessing</span>
      </div>
      <div class="sub">${COLDNOTE}</div>

      <div class="arrow">&darr;</div>
      <div class="fix">
        <span class="fixlabel">one line</span>
        <span class="fixcmd">${CMD}</span>
      </div>

      <div class="row warm">
        <span class="label" style="color:#cfcfcf">with context</span>
        <span class="bigscore">${WARM}</span>
        <span class="seal">✪</span>
        <span class="tag">grounded</span>
      </div>
      <div class="sub">${WARMNOTE}</div>

      <div class="foot">
        <span class="what">${FOOTLABEL}</span>
        <span class="url"><b>${URL}</b></span>
      </div>
    </div>
  </div>
</body></html>
EOF

"$CHROME" --headless --disable-gpu --hide-scrollbars \
  --window-size=1200,630 --screenshot="$WORK/card.png" \
  "file://$WORK/card.html" 2>/dev/null

mkdir -p "$(dirname "$OUT")"
cp "$WORK/card.png" "$OUT"
echo "card written: $OUT ($(stat -f%z "$OUT" 2>/dev/null || stat -c%s "$OUT") bytes)"
