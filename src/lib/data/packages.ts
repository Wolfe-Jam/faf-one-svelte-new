/**
 * FAF Ecosystem Packages — Single Source of Truth
 *
 * Used by:
 *   • /routes/+layout.server.ts (header banner — formatTotal(grandTotal))
 *   • /routes/downloads/+page.svelte (full table)
 *
 * Verified: 2026-07-16 (refreshed via /downloads skill — all 3 registries live)
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

// ── npm packages (13) ─────────────────────────────────────────────

export const npmPackages: Package[] = [
	{
		name: 'faf-cli',
		description: 'Universal CLI for .faf management',
		downloads: 36_147,
		install: 'npm i -g faf-cli',
		registryUrl: 'https://npmjs.com/package/faf-cli',
		githubUrl: 'https://github.com/Wolfe-Jam/faf-cli',
		registry: 'npm',
		icon: '🏎️'
	},
	{
		name: 'claude-faf-mcp',
		description: 'Anthropic-merged MCP server (#2759)',
		downloads: 18_216,
		install: 'npx claude-faf-mcp',
		registryUrl: 'https://npmjs.com/package/claude-faf-mcp',
		githubUrl: 'https://github.com/Wolfe-Jam/claude-faf-mcp',
		registry: 'npm',
		icon: '🤖'
	},
	{
		name: 'faf-mcp',
		description: 'Universal MCP server',
		downloads: 7_147,
		install: 'npx faf-mcp',
		registryUrl: 'https://npmjs.com/package/faf-mcp',
		githubUrl: 'https://github.com/Wolfe-Jam/faf-mcp',
		registry: 'npm',
		icon: '🔌'
	},
	{
		name: 'faf-scoring-kernel',
		description: 'Mk4 WASM scoring engine',
		downloads: 6_287,
		install: 'npm i faf-scoring-kernel',
		registryUrl: 'https://npmjs.com/package/faf-scoring-kernel',
		githubUrl: 'https://github.com/Wolfe-Jam/faf-wasm-sdk',
		registry: 'npm',
		icon: '⚡'
	},
	{
		name: 'grok-faf-mcp',
		description: 'MCP server for xAI Grok',
		downloads: 7_042,
		install: 'npx grok-faf-mcp',
		registryUrl: 'https://npmjs.com/package/grok-faf-mcp',
		githubUrl: 'https://github.com/Wolfe-Jam/grok-faf-mcp',
		registry: 'npm',
		icon: '🚀'
	},
	{
		name: 'slash-tokens',
		description: 'Token Optimization for Context Engineers',
		downloads: 2_298,
		install: 'npm i slash-tokens',
		registryUrl: 'https://npmjs.com/package/slash-tokens',
		githubUrl: 'https://github.com/Wolfe-Jam/slash-tokens',
		registry: 'npm',
		icon: '⚡'
	},
	{
		name: 'bun-sticky',
		description: 'Bun-native FAF runtime',
		downloads: 2_028,
		install: 'bun add bun-sticky',
		registryUrl: 'https://npmjs.com/package/bun-sticky',
		githubUrl: 'https://github.com/Wolfe-Jam/bun-sticky',
		registry: 'npm',
		icon: '🥟'
	},
	{
		name: 'wjttc',
		description: 'Championship-grade MCP testing',
		downloads: 1_936,
		install: 'npx wjttc',
		registryUrl: 'https://npmjs.com/package/wjttc',
		githubUrl: 'https://github.com/Wolfe-Jam/wjttc',
		registry: 'npm',
		icon: '🍊'
	},
	{
		name: 'faf-wasm-sdk',
		description: 'Browser/Edge WASM runtime',
		downloads: 794,
		install: 'npm i faf-wasm-sdk',
		registryUrl: 'https://npmjs.com/package/faf-wasm-sdk',
		githubUrl: 'https://github.com/Wolfe-Jam/faf-wasm-sdk',
		registry: 'npm',
		icon: '🌐'
	},
	{
		name: 'faf',
		description: 'Universal CLI alias (bunx faf → faf-cli)',
		downloads: 4_414,
		install: 'bunx faf',
		registryUrl: 'https://npmjs.com/package/faf',
		githubUrl: 'https://github.com/Wolfe-Jam/faf-cli',
		registry: 'npm',
		icon: '🏎️'
	},
	{
		name: 'faf-wasm-core',
		description: 'Zig WASM kernel — foundational',
		downloads: 488,
		install: 'npm i faf-wasm-core',
		registryUrl: 'https://npmjs.com/package/faf-wasm-core',
		githubUrl: 'https://github.com/Wolfe-Jam/faf-wasm-core',
		registry: 'npm',
		icon: '⚡'
	},
	{
		name: 'bun-sticky-faf',
		description: 'Fastest Bun FAF CLI',
		downloads: 256,
		install: 'bun add bun-sticky-faf',
		registryUrl: 'https://npmjs.com/package/bun-sticky-faf',
		githubUrl: 'https://github.com/Wolfe-Jam/bun-sticky-faf',
		registry: 'npm',
		icon: '🥟'
	},
	{
		name: 'faf-wasm',
		description: 'WASM SDK for browser scoring',
		downloads: 295,
		install: 'npm i faf-wasm',
		registryUrl: 'https://npmjs.com/package/faf-wasm',
		githubUrl: 'https://github.com/Wolfe-Jam/faf-wasm',
		registry: 'npm',
		icon: '⚡'
	}
];

// ── PyPI packages (5) ─────────────────────────────────────────────

export const pypiPackages: Package[] = [
	{
		name: 'gemini-faf-mcp',
		description: 'Google Gemini MCP server',
		downloads: 14_927,
		install: 'pip install gemini-faf-mcp',
		registryUrl: 'https://pypi.org/project/gemini-faf-mcp/',
		githubUrl: 'https://github.com/Wolfe-Jam/gemini-faf-mcp',
		registry: 'pypi',
		icon: '💎'
	},
	{
		name: 'faf-python-sdk',
		description: 'Python SDK for .faf files',
		downloads: 6_496,
		install: 'pip install faf-python-sdk',
		registryUrl: 'https://pypi.org/project/faf-python-sdk/',
		githubUrl: 'https://github.com/Wolfe-Jam/faf-python-sdk',
		registry: 'pypi',
		icon: '🐍'
	},
	{
		name: 'faf-agent-mcp',
		description: 'Voice of FAF — MCP server',
		downloads: 3_549,
		install: 'uvx faf-agent-mcp',
		registryUrl: 'https://pypi.org/project/faf-agent-mcp/',
		githubUrl: 'https://github.com/Wolfe-Jam/faf-agent',
		registry: 'pypi',
		icon: '🤖'
	},
	{
		name: 'grok-faf-voice',
		description: 'Voice Memory Layer — LiveKit + xAI Grok',
		downloads: 4_101,
		install: 'pip install grok-faf-voice',
		registryUrl: 'https://pypi.org/project/grok-faf-voice/',
		githubUrl: 'https://github.com/Wolfe-Jam/grok-faf-voice',
		registry: 'pypi',
		icon: '🎤'
	},
	{
		name: 'slash-tokens',
		description: 'Token Optimization (Python placeholder)',
		downloads: 1_953,
		install: 'pip install slash-tokens',
		registryUrl: 'https://pypi.org/project/slash-tokens/',
		githubUrl: 'https://github.com/Wolfe-Jam/slash-tokens',
		registry: 'pypi',
		icon: '⚡'
	}
];

// ── crates.io packages (6) ────────────────────────────────────────

export const cratesPackages: Package[] = [
	{
		name: 'faf-rust-sdk',
		description: 'Rust SDK for .faf files',
		downloads: 601,
		install: 'cargo add faf-rust-sdk',
		registryUrl: 'https://crates.io/crates/faf-rust-sdk',
		githubUrl: 'https://github.com/Wolfe-Jam/faf-rust-sdk',
		registry: 'crates',
		icon: '🦀'
	},
	{
		name: 'faf-radio-rust',
		description: 'Radio Protocol client — tune, listen, broadcast',
		downloads: 174,
		install: 'cargo add faf-radio-rust',
		registryUrl: 'https://crates.io/crates/faf-radio-rust',
		githubUrl: 'https://github.com/Wolfe-Jam/faf-radio-rust',
		registry: 'crates',
		icon: '📻'
	},
	{
		name: 'rust-faf-mcp',
		description: 'Rust MCP server for .faf',
		downloads: 116,
		install: 'cargo add rust-faf-mcp',
		registryUrl: 'https://crates.io/crates/rust-faf-mcp',
		githubUrl: 'https://github.com/Wolfe-Jam/rust-faf-mcp',
		registry: 'crates',
		icon: '🔌'
	},
	{
		name: 'faf',
		description: 'Meta-crate — one install, full ecosystem',
		downloads: 62,
		install: 'cargo add faf',
		registryUrl: 'https://crates.io/crates/faf',
		githubUrl: 'https://github.com/Wolfe-Jam/faf-crate',
		registry: 'crates',
		icon: '🏎️'
	},
	{
		name: 'mcpaas',
		description: 'Radio Protocol (parked — see faf-radio-rust)',
		downloads: 53,
		install: 'cargo add mcpaas',
		registryUrl: 'https://crates.io/crates/mcpaas',
		githubUrl: 'https://github.com/Wolfe-Jam/faf-radio-rust',
		registry: 'crates',
		icon: '📻'
	},
	{
		name: 'slash-tokens',
		description: 'Token Optimization (Rust)',
		downloads: 22,
		install: 'cargo add slash-tokens',
		registryUrl: 'https://crates.io/crates/slash-tokens',
		githubUrl: 'https://github.com/Wolfe-Jam/slash-tokens',
		registry: 'crates',
		icon: '⚡'
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
