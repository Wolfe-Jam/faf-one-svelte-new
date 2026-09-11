# FAF WebMCP playground

In-page demo at [https://faf.one/webmcp](https://faf.one/webmcp).

A stranger with Chrome WebMCP (or the Inspector) opens the page, asks an agent to score a `.faf`, and gets a number. Scoring is WASM in the browser. No local MCP process.

Three read-only tools:

| Tool | Kind | What it returns |
|---|---|---|
| `score_faf` | imperative | `{ score, tier, populated, total, … }` |
| `fill_6ws` | declarative form | YAML fragment under `human_context:` |
| `emit_agents_md` | imperative | `{ markdown }` — minimal renderer, not the full CLI |

Code: [`src/lib/webmcp/`](../../lib/webmcp/). `register.ts` registers the imperative tools; the `fill_6ws` form is in `+page.svelte`.

## Run locally

From `faf-one-svelte-new`:

```sh
npm install
npm run dev
```

Open [http://localhost:5173/webmcp](http://localhost:5173/webmcp).

Production preview:

```sh
npm run build
npm run preview
```

Tests (parse / score mapping / URL allowlist / 6Ws / AGENTS.md / tool register):

```sh
npm run test:webmcp
```

## Chrome flag

1. Open `chrome://flags/#enable-webmcp-testing`
2. Enable **WebMCP testing**
3. Relaunch Chrome
4. Load `/webmcp` over HTTPS (production) or localhost

Native `document.modelContext.registerTool` is used when it exists. The `@mcp-b/webmcp-polyfill` loads only as a fallback.

## Inspector

[Model Context Tool Inspector](https://chromewebstore.google.com/detail/model-context-tool-inspec/gbpdfapgefenggkahomfgkhfehlcenpd)

The box loads `project.faf` from a public repo that already has one (default: agents-md-facts). It does not clone.

Receipt when all five are true:

1. Inspector (or `document.modelContext.getTools()`) lists `score_faf`, `fill_6ws`, `emit_agents_md`
2. Manual `score_faf` on the fixture returns a numeric score
3. Bad YAML returns a structured `{ error, message }` object
4. 6Ws form returns YAML and does not navigate
5. Network tab shows no call to `ide.faf.one` or any `/mcp` URL (url-fetch of a `.faf` file is the only allowed network)

## Notes

- MIT, same as this site
- URL fetch allowlist: `faf.one`, `raw.githubusercontent.com` (https only, 256 KB cap)
- Do not add a fourth tool. Do not write files. Do not set `document.domain`
