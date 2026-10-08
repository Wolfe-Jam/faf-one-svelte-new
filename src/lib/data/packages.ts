/**
 * FAF Ecosystem Packages — Single Source of Truth
 *
 * Used by:
 *   • /routes/+layout.server.ts (header banner — formatTotal(grandTotal))
 *   • /routes/downloads/+page.svelte (full table)
 *
 * HARD FLOOR METER (locked 2026-08-01):
 *   npm + crates.io as reported · PyPI = pypistats without_mirrors only.
 *   Banner and public totals use this meter only — no mirror inflation.
 *
 * Verified: 2026-10-08 (refreshed via /downloads skill — all 3 registries live)
 *
 * COVERAGE STEP 2026-10-04: +10 entries for packages already shipping
 * (npm: rust-faf-mcp, mcp-context-card, mcp-better, faf-taf-git, mcpaas,
 * agents-md-facts · crates: faf-fafb, faf-kernel, mcp-better, faf-wasm-sdk)
 * = +9,319 all-time on the day. A labelled step, not growth. Name holders,
 * utils and fringe packages stay out.
 * Auto-refresh: scripts/refresh-downloads.mjs (run daily via GH Actions)
 *
 * To add a new package: edit this file manually, keeping descriptions/icons
 * curated. The auto-refresh script ONLY updates `downloads: N` values; it
 * never adds or removes packages.
 */

export type Registry = 'npm' | 'pypi' | 'crates';

export interface Package {
	name: string;
	description: string;
	downloads: number;
	install: string;
	registryUrl: string;
	githubUrl: string;
	registry: Registry;
	icon: string;
}

// ── npm packages (20) ─────────────────────────────────────────────

export const npmPackages: Package[] = [
	{
		name: 'faf-cli',
		description: 'CLI for .faf management',
		downloads: 56_966,
		install: 'npm i -g faf-cli',
		registryUrl: 'https://npmjs.com/package/faf-cli',
		githubUrl: 'https://github.com/Wolfe-Jam/faf-cli',
		registry: 'npm',
		icon: '🏎️'
	},
	{
		name: 'claude-faf-mcp',
		description: 'Anthropic-merged MCP server (#2759)',
		downloads: 24_832,
		install: 'npx claude-faf-mcp',
		registryUrl: 'https://npmjs.com/package/claude-faf-mcp',
		githubUrl: 'https://github.com/Wolfe-Jam/claude-faf-mcp',
		registry: 'npm',
		icon: '🤖'
	},
	{
		name: 'faf-mcp',
		description: 'Cursor / VS Code / IDE MCP server',
		downloads: 11_841,
		install: 'npx faf-mcp',
		registryUrl: 'https://npmjs.com/package/faf-mcp',
		githubUrl: 'https://github.com/Wolfe-Jam/faf-mcp',
		registry: 'npm',
		icon: '🔌'
	},
	{
		name: 'faf-scoring-kernel',
		description: 'Mk4 WASM scoring engine',
		downloads: 13_910,
		install: 'npm i faf-scoring-kernel',
		registryUrl: 'https://npmjs.com/package/faf-scoring-kernel',
		githubUrl: 'https://github.com/Wolfe-Jam/faf-wasm-sdk',
		registry: 'npm',
		icon: '⚡'
	},
	{
		name: 'grok-faf-mcp',
		description: 'MCP server for xAI Grok',
		downloads: 10_361,
		install: 'npx grok-faf-mcp',
		registryUrl: 'https://npmjs.com/package/grok-faf-mcp',
		githubUrl: 'https://github.com/Wolfe-Jam/grok-faf-mcp',
		registry: 'npm',
		icon: '🚀'
	},
	{
		name: 'slash-tokens',
		description: 'Token Optimization for Context Engineers',
		downloads: 5_860,
		install: 'npm i slash-tokens',
		registryUrl: 'https://npmjs.com/package/slash-tokens',
		githubUrl: 'https://github.com/Wolfe-Jam/slash-tokens',
		registry: 'npm',
		icon: '⚡'
	},
	{
		name: 'bun-sticky',
		description: 'Bun-native FAF runtime',
		downloads: 2_500,
		install: 'bun add bun-sticky',
		registryUrl: 'https://npmjs.com/package/bun-sticky',
		githubUrl: 'https://github.com/Wolfe-Jam/bun-sticky',
		registry: 'npm',
		icon: '🥟'
	},
	{
		name: 'wjttc',
		description: 'Championship-grade MCP testing',
		downloads: 3_334,
		install: 'npx wjttc',
		registryUrl: 'https://npmjs.com/package/wjttc',
		githubUrl: 'https://github.com/Wolfe-Jam/wjttc',
		registry: 'npm',
		icon: '🍊'
	},
	{
		name: 'faf-wasm-sdk',
		description: 'Browser/Edge WASM runtime',
		downloads: 864,
		install: 'npm i faf-wasm-sdk',
		registryUrl: 'https://npmjs.com/package/faf-wasm-sdk',
		githubUrl: 'https://github.com/Wolfe-Jam/faf-wasm-sdk',
		registry: 'npm',
		icon: '🌐'
	},
	{
		name: 'faf',
		description: 'CLI alias (bunx faf → faf-cli)',
		downloads: 15_087,
		install: 'bunx faf',
		registryUrl: 'https://npmjs.com/package/faf',
		githubUrl: 'https://github.com/Wolfe-Jam/faf-cli',
		registry: 'npm',
		icon: '🏎️'
	},
	{
		name: 'faf-wasm-core',
		description: 'Zig WASM kernel — foundational',
		downloads: 554,
		install: 'npm i faf-wasm-core',
		registryUrl: 'https://npmjs.com/package/faf-wasm-core',
		githubUrl: 'https://github.com/Wolfe-Jam/faf-wasm-core',
		registry: 'npm',
		icon: '⚡'
	},
	{
		name: 'bun-sticky-faf',
		description: 'Fastest Bun FAF CLI',
		downloads: 408,
		install: 'bun add bun-sticky-faf',
		registryUrl: 'https://npmjs.com/package/bun-sticky-faf',
		githubUrl: 'https://github.com/Wolfe-Jam/bun-sticky-faf',
		registry: 'npm',
		icon: '🥟'
	},
	{
		name: 'faf-wasm',
		description: 'WASM SDK for browser scoring',
		downloads: 355,
		install: 'npm i faf-wasm',
		registryUrl: 'https://npmjs.com/package/faf-wasm',
		githubUrl: 'https://github.com/Wolfe-Jam/faf-wasm',
		registry: 'npm',
		icon: '⚡'
	},
	{
		name: 'faf-wasm-gen',
		description: 'Rust→WASM .faf generator — the generate sibling of faf-wasm-sdk',
		downloads: 98,
		install: 'npm i faf-wasm-gen',
		registryUrl: 'https://npmjs.com/package/faf-wasm-gen',
		githubUrl: 'https://github.com/Wolfe-Jam/faf-wasm-gen',
		registry: 'npm',
		icon: '⚡'
	},
	{
		name: 'rust-faf-mcp',
		description: 'Rust MCP server for .faf (npm)',
		downloads: 2_748,
		install: 'npx rust-faf-mcp',
		registryUrl: 'https://npmjs.com/package/rust-faf-mcp',
		githubUrl: 'https://github.com/Wolfe-Jam/rust-faf-mcp',
		registry: 'npm',
		icon: '🔌'
	},
	{
		name: 'mcp-context-card',
		description: 'Context, memory & identity MCP server',
		downloads: 2_401,
		install: 'npx -y mcp-context-card',
		registryUrl: 'https://npmjs.com/package/mcp-context-card',
		githubUrl: 'https://github.com/Wolfe-Jam/mcp-context-card',
		registry: 'npm',
		icon: '🪪'
	},
	{
		name: 'mcp-better',
		description: 'Modern MCP setup (2026-07-28 model)',
		downloads: 1_414,
		install: 'npx mcp-better',
		registryUrl: 'https://npmjs.com/package/mcp-better',
		githubUrl: 'https://github.com/Wolfe-Jam/mcp-better',
		registry: 'npm',
		icon: '✅'
	},
	{
		name: 'faf-taf-git',
		description: 'Test Receipt Printer for git (TAF)',
		downloads: 789,
		install: 'npx faf-taf-git',
		registryUrl: 'https://npmjs.com/package/faf-taf-git',
		githubUrl: 'https://github.com/Wolfe-Jam/faf-taf-git',
		registry: 'npm',
		icon: '🧾'
	},
	{
		name: 'mcpaas',
		description: 'MCPaaS SDK — context on demand',
		downloads: 681,
		install: 'npm i mcpaas',
		registryUrl: 'https://npmjs.com/package/mcpaas',
		githubUrl: 'https://github.com/Wolfe-Jam/mcpaas-sdk',
		registry: 'npm',
		icon: '📡'
	},
	{
		name: 'agents-md-facts',
		description: 'AGENTS.md authored from the repo facts',
		downloads: 665,
		install: 'npx agents-md-facts',
		registryUrl: 'https://npmjs.com/package/agents-md-facts',
		githubUrl: 'https://github.com/Wolfe-Jam/agents-md-facts',
		registry: 'npm',
		icon: '📋'
	}
];

// ── PyPI packages (6) ─────────────────────────────────────────────

export const pypiPackages: Package[] = [
	{
		name: 'gemini-faf-mcp',
		description: 'Google Gemini MCP server',
		downloads: 5_141,
		install: 'pip install gemini-faf-mcp',
		registryUrl: 'https://pypi.org/project/gemini-faf-mcp/',
		githubUrl: 'https://github.com/Wolfe-Jam/gemini-faf-mcp',
		registry: 'pypi',
		icon: '💎'
	},
	{
		name: 'claude-fafm-sdk',
		description: 'Claude .fafm Memory SDK — portable agent memory',
		downloads: 2_608,
		install: 'pip install claude-fafm-sdk',
		registryUrl: 'https://pypi.org/project/claude-fafm-sdk/',
		githubUrl: 'https://github.com/Wolfe-Jam/claude-fafm-sdk',
		registry: 'pypi',
		icon: '🧡'
	},
	{
		name: 'faf-python-sdk',
		description: 'Python SDK for .faf files',
		downloads: 2_836,
		install: 'pip install faf-python-sdk',
		registryUrl: 'https://pypi.org/project/faf-python-sdk/',
		githubUrl: 'https://github.com/Wolfe-Jam/faf-python-sdk',
		registry: 'pypi',
		icon: '🐍'
	},
	{
		name: 'faf-agent-mcp',
		description: 'Voice of FAF — MCP server',
		downloads: 893,
		install: 'uvx faf-agent-mcp',
		registryUrl: 'https://pypi.org/project/faf-agent-mcp/',
		githubUrl: 'https://github.com/Wolfe-Jam/faf-agent',
		registry: 'pypi',
		icon: '🤖'
	},
	{
		name: 'grok-faf-voice',
		description: 'Voice Memory Layer — LiveKit + xAI Grok',
		downloads: 1_285,
		install: 'pip install grok-faf-voice',
		registryUrl: 'https://pypi.org/project/grok-faf-voice/',
		githubUrl: 'https://github.com/Wolfe-Jam/grok-faf-voice',
		registry: 'pypi',
		icon: '🎤'
	},
	{
		name: 'slash-tokens',
		description: 'Token Optimization (Python placeholder)',
		downloads: 274,
		install: 'pip install slash-tokens',
		registryUrl: 'https://pypi.org/project/slash-tokens/',
		githubUrl: 'https://github.com/Wolfe-Jam/slash-tokens',
		registry: 'pypi',
		icon: '⚡'
	}
];

// ── crates.io packages (10) ────────────────────────────────────────

export const cratesPackages: Package[] = [
	{
		name: 'faf-rust-sdk',
		description: 'Rust SDK for .faf files',
		downloads: 1_255,
		install: 'cargo add faf-rust-sdk',
		registryUrl: 'https://crates.io/crates/faf-rust-sdk',
		githubUrl: 'https://github.com/Wolfe-Jam/faf-rust-sdk',
		registry: 'crates',
		icon: '🦀'
	},
	{
		name: 'faf-radio-rust',
		description: 'Radio Protocol client — tune, listen, broadcast',
		downloads: 320,
		install: 'cargo add faf-radio-rust',
		registryUrl: 'https://crates.io/crates/faf-radio-rust',
		githubUrl: 'https://github.com/Wolfe-Jam/faf-radio-rust',
		registry: 'crates',
		icon: '📻'
	},
	{
		name: 'rust-faf-mcp',
		description: 'Rust MCP server for .faf',
		downloads: 337,
		install: 'cargo add rust-faf-mcp',
		registryUrl: 'https://crates.io/crates/rust-faf-mcp',
		githubUrl: 'https://github.com/Wolfe-Jam/rust-faf-mcp',
		registry: 'crates',
		icon: '🔌'
	},
	{
		name: 'faf',
		description: 'Meta-crate — one install, full ecosystem',
		downloads: 81,
		install: 'cargo add faf',
		registryUrl: 'https://crates.io/crates/faf',
		githubUrl: 'https://github.com/Wolfe-Jam/faf-crate',
		registry: 'crates',
		icon: '🏎️'
	},
	{
		name: 'mcpaas',
		description: 'Radio Protocol (parked — see faf-radio-rust)',
		downloads: 60,
		install: 'cargo add mcpaas',
		registryUrl: 'https://crates.io/crates/mcpaas',
		githubUrl: 'https://github.com/Wolfe-Jam/faf-radio-rust',
		registry: 'crates',
		icon: '📻'
	},
	{
		name: 'slash-tokens',
		description: 'Token Optimization (Rust)',
		downloads: 39,
		install: 'cargo add slash-tokens',
		registryUrl: 'https://crates.io/crates/slash-tokens',
		githubUrl: 'https://github.com/Wolfe-Jam/slash-tokens',
		registry: 'crates',
		icon: '⚡'
	},
	{
		name: 'faf-fafb',
		description: 'FAFb v2 — the compiled binary form of .faf',
		downloads: 427,
		install: 'cargo add faf-fafb',
		registryUrl: 'https://crates.io/crates/faf-fafb',
		githubUrl: 'https://github.com/Wolfe-Jam/faf-rust',
		registry: 'crates',
		icon: '📦'
	},
	{
		name: 'faf-kernel',
		description: 'The FAF kernel — parse, validate, score',
		downloads: 411,
		install: 'cargo add faf-kernel',
		registryUrl: 'https://crates.io/crates/faf-kernel',
		githubUrl: 'https://github.com/Wolfe-Jam/faf-rust',
		registry: 'crates',
		icon: '⚙️'
	},
	{
		name: 'mcp-better',
		description: 'Modern MCP setup (Rust)',
		downloads: 202,
		install: 'cargo add mcp-better',
		registryUrl: 'https://crates.io/crates/mcp-better',
		githubUrl: 'https://github.com/Wolfe-Jam/mcp-better',
		registry: 'crates',
		icon: '✅'
	},
	{
		name: 'faf-wasm-sdk',
		description: 'WASM SDK — the kernel for the edge',
		downloads: 52,
		install: 'cargo add faf-wasm-sdk',
		registryUrl: 'https://crates.io/crates/faf-wasm-sdk',
		githubUrl: 'https://github.com/Wolfe-Jam/faf-rust',
		registry: 'crates',
		icon: '🕸️'
	}
];

// ── Computed totals ───────────────────────────────────────────────

export const allPackages = [...npmPackages, ...pypiPackages, ...cratesPackages];

export const npmTotal = npmPackages.reduce((s, p) => s + p.downloads, 0);
export const pypiTotal = pypiPackages.reduce((s, p) => s + p.downloads, 0);
export const cratesTotal = cratesPackages.reduce((s, p) => s + p.downloads, 0);
export const grandTotal = npmTotal + pypiTotal + cratesTotal;

// ── Formatters ────────────────────────────────────────────────────

export function formatNumber(n: number): string {
	if (n >= 1_000) {
		const k = n / 1_000;
		return k % 1 === 0 ? `${k}k` : `${k.toFixed(1)}k`;
	}
	return n.toLocaleString();
}

export function formatTotal(n: number): string {
	if (n >= 1_000) {
		const k = Math.floor(n / 100) / 10;
		return `${k}k+`;
	}
	return `${n}+`;
}
