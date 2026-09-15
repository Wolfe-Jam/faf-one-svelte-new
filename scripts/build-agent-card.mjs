// Builds static/.well-known/agent-card.json (FAFA's A2A card) before every
// `vite build`, so faf.one never serves a hand-kept copy.
//
// Inputs are public: this site's own .fafa (static/.well-known/fafa) and
// FAFA's project.faf in faf-agent-public. The generator is faf-cli's
// `faf cards` (buildA2ACard), pinned below. It runs through npx because the
// site's own `faf-cli` dependency (3.x) is used at runtime by src/lib/turbo.
// Any failed fetch or generation fails the build, so a stale card is never
// deployed. The output file is gitignored; this script is its only source.
import { execFileSync } from 'node:child_process';
import { copyFileSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

const FAF_CLI = 'faf-cli@7.14.0';
const FAFA = 'static/.well-known/fafa';
const PROJECT_FAF_URL = 'https://raw.githubusercontent.com/Wolfe-Jam/faf-agent-public/main/project.faf';
const PROVENANCE_URL = 'https://github.com/Wolfe-Jam/faf-agent-public/blob/main/project.faf';
const OUT = 'static/.well-known/agent-card.json';

const res = await fetch(PROJECT_FAF_URL);
if (!res.ok) throw new Error(`agent-card: project.faf returned HTTP ${res.status} from ${PROJECT_FAF_URL}`);

const work = mkdtempSync(join(tmpdir(), 'faf-agent-card-'));
try {
  writeFileSync(join(work, 'project.faf'), await res.text());
  copyFileSync(FAFA, join(work, 'agent.fafa'));
  const stdout = execFileSync(
    'npx',
    ['--yes', FAF_CLI, 'cards', '--target', 'a2a', '--check', '--dir', work, '--faf-pointer', PROVENANCE_URL],
    { encoding: 'utf8', stdio: ['ignore', 'pipe', 'inherit'] },
  );
  const { a2a } = JSON.parse(stdout);
  if (!a2a?.name || !a2a?.supportedInterfaces?.length) {
    throw new Error('agent-card: faf cards returned no usable A2A card');
  }
  writeFileSync(OUT, JSON.stringify(a2a, null, 2) + '\n');
  console.log(`agent-card: ${a2a.name} ${a2a.version} (${FAF_CLI})`);
} finally {
  rmSync(work, { recursive: true, force: true });
}
