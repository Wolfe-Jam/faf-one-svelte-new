#!/usr/bin/env bash
# FAFb 0.9 testdrive — no Rust, no GitHub account, no token.
# Makes ~/fafb-drive. Puts faf on PATH via env.sh.
set -euo pipefail

VERSION="${FAFB_BINARY_VERSION:-0.9.0}"
DEST="${FAFB_DRIVE_HOME:-$HOME/fafb-drive}"
CACHE="${FAFB_CACHE_DIR:-$HOME/.cache/fafb}"
BASE="${FAFB_DIST_BASE:-https://github.com/Wolfe-Jam/fafb-dist/releases/download/v${VERSION}}"

os="$(uname -s)"
arch="$(uname -m)"
case "${os}-${arch}" in
  Darwin-arm64)  triple="aarch64-apple-darwin" ;;
  Darwin-x86_64) triple="x86_64-apple-darwin" ;;
  Linux-x86_64)  triple="x86_64-unknown-linux-gnu" ;;
  *)
    echo "Need macOS arm64/intel or Linux x86_64. Got ${os}-${arch}."
    echo "Windows: irm https://faf.one/fafb/install.ps1 | iex"
    exit 1
    ;;
esac

asset="fafb-${VERSION}-${triple}.tar.gz"
url="${BASE%/}/${asset}"
dir="${CACHE}/${VERSION}/${triple}"
mkdir -p "$dir"

if [[ ! -x "${dir}/faf" ]]; then
  echo "Downloading FAFb…"
  tmp="$(mktemp -d)"
  trap 'rm -rf "$tmp"' EXIT
  if command -v curl >/dev/null 2>&1; then
    curl -fsSL "$url" -o "${tmp}/${asset}"
  elif command -v wget >/dev/null 2>&1; then
    wget -qO "${tmp}/${asset}" "$url"
  else
    echo "Need curl or wget."
    exit 1
  fi
  tar -xzf "${tmp}/${asset}" -C "$tmp"
  found="$(find "$tmp" -type f -name faf -perm -111 | head -1)"
  if [[ -z "$found" ]]; then
    echo "Archive did not contain faf."
    exit 1
  fi
  bindir="$(dirname "$found")"
  for bin in faf fafm fafa; do
    if [[ -f "${bindir}/${bin}" ]]; then
      cp "${bindir}/${bin}" "${dir}/${bin}"
      chmod 755 "${dir}/${bin}"
    fi
  done
fi

mkdir -p "$DEST"
cat > "${DEST}/env.sh" <<EOF
# FAFb 0.9 testdrive — this machine
export PATH="${dir}:\$PATH"
EOF

if [[ ! -f "${DEST}/project.faf" ]]; then
  echo "Creating ${DEST} …"
  (cd "$DEST" && "${dir}/faf" init fafb-drive)
fi

echo
echo "Ready. Your folder is ${DEST}"
echo "A clean project. Not the compiler."
echo
echo "  cd ${DEST}"
echo "  source env.sh"
echo "  faf --help"
echo "  faf status"
echo
echo "Then the rest of the drive on https://faf.one/fafb-drive"
