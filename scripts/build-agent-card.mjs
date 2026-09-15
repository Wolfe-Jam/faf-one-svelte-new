// Builds FAFA's two public identity files before every `vite build`, so faf.one
// never serves a hand-kept copy of either:
//   static/.well-known/fafa             FAFA's .fafa (passport), as published
//   static/.well-known/agent-card.json  the A2A card built from it
//
// Sources are public: agent.fafa and project.faf in faf-agent-public. faf-agent
// (private) is where agent.fafa is edited; its mirror workflow publishes each
// change there. The card generator is faf-cli's `faf cards` (buildA2ACard),
// pinned below. It runs through npx because the site's own `faf-cli`
// dependency (3.x) is used at runtime by src/lib/turbo. Any failed fetch or
// generation fails the build, so a stale file is never deployed. Both outputs
// are gitignored; this script is their only source.
import { execFileSync } from 'node:child_process';
import { mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

const FAF_CLI = 'faf-cli@7.14.0';
const PUBLIC_RAW = 'https://raw.githubusercontent.com/Wolfe-Jam/faf-agent-public/main';
const PROVENANCE_URL = 'https://github.com/Wolfe-Jam/faf-agent-public/blob/main/project.faf';
const FAFA_OUT = 'static/.well-known/fafa';
const CARD_OUT = 'static/.well-known/agent-card.json';

async function fetchText(name) {
  const res = await fetch(`${PUBLIC_RAW}/${name}`);
  if (!res.ok) throw new Error(`agent files: ${name} returned HTTP ${res.status} from ${PUBLIC_RAW}`);
  return res.text();
}

const [fafa, projectFaf] = await Promise.all([fetchText('agent.fafa'), fetchText('project.faf')]);

const work = mkdtempSync(join(tmpdir(), 'faf-agent-card-'));
try {
  writeFileSync(join(work, 'agent.fafa'), fafa);
  writeFileSync(join(work, 'project.faf'), projectFaf);
  const stdout = execFileSync(
    'npx',
    ['--yes', FAF_CLI, 'cards', '--target', 'a2a', '--check', '--dir', work, '--faf-pointer', PROVENANCE_URL],
    { encoding: 'utf8', stdio: ['ignore', 'pipe', 'inherit'] },
  );
  const { a2a } = JSON.parse(stdout);
  if (!a2a?.name || !a2a?.supportedInterfaces?.length) {
    throw new Error('agent files: faf cards returned no usable A2A card');
  }
  writeFileSync(FAFA_OUT, fafa);
  writeFileSync(CARD_OUT, JSON.stringify(a2a, null, 2) + '\n');
  console.log(`agent files: .fafa + ${a2a.name} ${a2a.version} (${FAF_CLI})`);
} finally {
  rmSync(work, { recursive: true, force: true });
}
