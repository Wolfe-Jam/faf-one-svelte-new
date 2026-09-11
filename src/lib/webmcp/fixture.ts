/** Small valid project.faf used by the fixture button and tests. */

export const FIXTURE_YAML = `faf_version: "3.0"
project:
  name: webmcp-fixture
  goal: Score a .faf inside the browser tab
  main_language: TypeScript
human_context:
  who: Builders using in-browser agents
  what: A read-only WebMCP playground for .faf
  why: Page-local scoring without a local MCP process
  where: https://faf.one/webmcp
  when: "2026"
  how: Three WebMCP tools plus WASM in the page
stack:
  framework: HTML
  css: slotignored
  ui_library: slotignored
  state: slotignored
  backend: slotignored
  api: slotignored
  runtime: browser
  db: slotignored
  connection: slotignored
  hosting: Cloudflare Pages
  build: Vite
  cicd: slotignored
`;
