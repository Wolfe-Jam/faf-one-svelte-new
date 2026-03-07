/**
 * FAF Ecosystem Packages — Single Source of Truth
 *
 * 16 packages, 3 registries. Edit this ONE file when numbers change.
 * Verified: 2026-03-06 (all registries updated)
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

// ── npm packages (9) ──────────────────────────────────────────────

export const npmPackages: Package[] = [
	{
		name: 'faf-cli',
		description: 'Universal CLI for .faf management',
		downloads: 15_808,
		install: 'npm i -g faf-cli',
		registryUrl: 'https://npmjs.com/package/faf-cli',
		githubUrl: 'https://github.com/Wolfe-Jam/faf-cli',
		registry: 'npm',
		icon: '🏎️'
	},
	{
		name: 'claude-faf-mcp',
		description: 'Anthropic-approved MCP server (#2759)',
		downloads: 10_368,
		install: 'npx claude-faf-mcp',
		registryUrl: 'https://npmjs.com/package/claude-faf-mcp',
		githubUrl: 'https://github.com/Wolfe-Jam/claude-faf-mcp',
		registry: 'npm',
		icon: '🤖'
	},
	{
		name: 'faf-mcp',
		description: 'Universal MCP server',
		downloads: 2_886,
		install: 'npx faf-mcp',
		registryUrl: 'https://npmjs.com/package/faf-mcp',
		githubUrl: 'https://github.com/Wolfe-Jam/faf-mcp',
		registry: 'npm',
		icon: '🔌'
	},
	{
		name: 'bun-sticky',
		description: 'Bun-native FAF runtime',
		downloads: 1_008,
		install: 'bun add bun-sticky',
		registryUrl: 'https://npmjs.com/package/bun-sticky',
		githubUrl: 'https://github.com/Wolfe-Jam/bun-sticky',
		registry: 'npm',
		icon: '🥟'
	},
	{
		name: 'wjttc',
		description: 'Championship-grade MCP testing',
		downloads: 945,
		install: 'npx wjttc',
		registryUrl: 'https://npmjs.com/package/wjttc',
		githubUrl: 'https://github.com/Wolfe-Jam/wjttc',
		registry: 'npm',
		icon: '🍊'
	},
	{
		name: 'grok-faf-mcp',
		description: 'MCP server for xAI Grok',
		downloads: 1_182,
		install: 'npx grok-faf-mcp',
		registryUrl: 'https://npmjs.com/package/grok-faf-mcp',
		githubUrl: 'https://github.com/Wolfe-Jam/grok-faf-mcp',
		registry: 'npm',
		icon: '🚀'
	},
	{
		name: 'faf-wasm-sdk',
		description: 'Browser/Edge WASM runtime (211KB)',
		downloads: 334,
		install: 'npm i faf-wasm-sdk',
		registryUrl: 'https://npmjs.com/package/faf-wasm-sdk',
		githubUrl: 'https://github.com/Wolfe-Jam/faf-wasm-sdk',
		registry: 'npm',
		icon: '🌐'
	},
	{
		name: 'faf-wasm',
		description: 'WASM SDK for browser scoring',
		downloads: 223,
		install: 'npm i faf-wasm',
		registryUrl: 'https://npmjs.com/package/faf-wasm',
		githubUrl: 'https://github.com/Wolfe-Jam/faf-wasm',
		registry: 'npm',
		icon: '⚡'
	},
	{
		name: 'bun-sticky-faf',
		description: 'Fastest Bun FAF CLI',
		downloads: 218,
		install: 'bun add bun-sticky-faf',
		registryUrl: 'https://npmjs.com/package/bun-sticky-faf',
		githubUrl: 'https://github.com/Wolfe-Jam/bun-sticky-faf',
		registry: 'npm',
		icon: '🥟'
	},
];

// ── PyPI packages (2) ─────────────────────────────────────────────

export const pypiPackages: Package[] = [
	{
		name: 'faf-python-sdk',
		description: 'Python SDK for .faf files',
		downloads: 1_972,
		install: 'pip install faf-python-sdk',
		registryUrl: 'https://pypi.org/project/faf-python-sdk/',
		githubUrl: 'https://github.com/Wolfe-Jam/faf-python-sdk',
		registry: 'pypi',
		icon: '🐍'
	},
	{
		name: 'gemini-faf-mcp',
		description: 'Google Gemini MCP server',
		downloads: 1_196,
		install: 'pip install gemini-faf-mcp',
		registryUrl: 'https://pypi.org/project/gemini-faf-mcp/',
		githubUrl: 'https://github.com/Wolfe-Jam/gemini-faf-mcp',
		registry: 'pypi',
		icon: '💎'
	}
];

// ── crates.io packages (5) ────────────────────────────────────────

export const cratesPackages: Package[] = [
	{
		name: 'faf',
		description: 'Meta-crate — one install, full ecosystem',
		downloads: 20,
		install: 'cargo add faf',
		registryUrl: 'https://crates.io/crates/faf',
		githubUrl: 'https://github.com/Wolfe-Jam/faf-crate',
		registry: 'crates',
		icon: '🏎️'
	},
	{
		name: 'faf-rust-sdk',
		description: 'Rust SDK for .faf files',
		downloads: 124,
		install: 'cargo add faf-rust-sdk',
		registryUrl: 'https://crates.io/crates/faf-rust-sdk',
		githubUrl: 'https://github.com/Wolfe-Jam/faf-rust-sdk',
		registry: 'crates',
		icon: '🦀'
	},
	{
		name: 'faf-radio-rust',
		description: 'Radio Protocol client — tune, listen, broadcast',
		downloads: 12,
		install: 'cargo add faf-radio-rust',
		registryUrl: 'https://crates.io/crates/faf-radio-rust',
		githubUrl: 'https://github.com/Wolfe-Jam/faf-radio-rust',
		registry: 'crates',
		icon: '📻'
	},
	{
		name: 'mcpaas',
		description: 'Radio Protocol (parked — see faf-radio-rust)',
		downloads: 31,
		install: 'cargo add mcpaas',
		registryUrl: 'https://crates.io/crates/mcpaas',
		githubUrl: 'https://github.com/Wolfe-Jam/faf-radio-rust',
		registry: 'crates',
		icon: '📻'
	},
	{
		name: 'rust-faf-mcp',
		description: 'Rust MCP server for .faf',
		downloads: 11,
		install: 'cargo add rust-faf-mcp',
		registryUrl: 'https://crates.io/crates/rust-faf-mcp',
		githubUrl: 'https://github.com/Wolfe-Jam/rust-faf-mcp',
		registry: 'crates',
		icon: '🔌'
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
