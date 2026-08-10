<!-- agents:from-facts:start -->
<!-- authored by agents-md-facts — from your repo's facts, never guessed · re-run to refresh -->

# AGENTS.md — faf-one-svelte

TypeScript · Node.js · npm package manager · v1.0.4

## Setup & build

```bash
npm install    # install dependencies
npm run build    # build
npm run dev    # dev
```

## Where things live

- `package.json`
- `README.md`
- `tsconfig.json`
- `wrangler.toml`

## Conventions

- TypeScript strict mode (tsconfig.json)
- ESM modules (`type: module`)

## Guardrails

- **Always OK:** read files, build the project.
- **Ask first:** dependency installs, deletions, migrations / schema changes.
- **Never:** force-push, push to `main`, commit secrets.

## Definition of Done

Done when: committed with a clear message.

## Commit & PR

- Write a clear, descriptive commit message.
- Branch off `main`; never commit to `main` directly — open a PR for review.
- If build/test scripts or layout change, refresh this file in the **same PR** (`npx agents-md-facts`).
<!-- agents:from-facts:end -->
