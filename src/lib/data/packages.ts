/**
 * FAF Ecosystem Packages — Single Source of Truth
 *
 * 14 packages, 3 registries. Edit this ONE file when numbers change.
 * Verified: 2026-03-06
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
		downloads: 14_148,
		install: 'npm i -g faf-cli',
		registryUrl: 'https://npmjs.com/package/faf-cli',
		githubUrl: 'https://github.com/Wolfe-Jam/faf-cli',
		registry: 'npm',
		icon: '🏎️'
	},
	{
		name: 'claude-faf-mcp',
		description: 'Anthropic-approved MCP server (#2759)',
		downloads: 9_868,
		install: 'npx claude-faf-mcp',
		registryUrl: 'https://npmjs.com/package/claude-faf-mcp',
		githubUrl: 'https://github.com/Wolfe-Jam/claude-faf-mcp',
		registry: 'npm',
		icon: '🤖'
	},
	{
		name: 'faf-mcp',
		description: 'Universal MCP server',
		downloads: 2_849,
		install: 'npx faf-mcp',
		registryUrl: 'https://npmjs.com/package/faf-mcp',
		githubUrl: 'https://github.com/Wolfe-Jam/faf-mcp',
		registry: 'npm',
		icon: '🔌'
	},
	{
		name: 'bun-sticky',
		description: 'Bun-native FAF runtime',
		downloads: 980,
		install: 'bun add bun-sticky',
		registryUrl: 'https://npmjs.com/package/bun-sticky',
		githubUrl: 'https://github.com/Wolfe-Jam/bun-sticky',
		registry: 'npm',
		icon: '🥟'
	},
	{
		name: 'wjttc',
		description: 'Championship-grade MCP testing',
		downloads: 934,
		install: 'npx wjttc',
		registryUrl: 'https://npmjs.com/package/wjttc',
		githubUrl: 'https://github.com/Wolfe-Jam/wjttc',
		registry: 'npm',
		icon: '🍊'
	},
	{
		name: 'grok-faf-mcp',
		description: 'MCP server for xAI Grok',
		downloads: 887,
		install: 'npx grok-faf-mcp',
		registryUrl: 'https://npmjs.com/package/grok-faf-mcp',
		githubUrl: 'https://github.com/Wolfe-Jam/grok-faf-mcp',
		registry: 'npm',
		icon: '🚀'
	},
	{
		name: 'faf-wasm-sdk',
		description: 'Browser/Edge WASM runtime (211KB)',
		downloads: 328,
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
		downloads: 1_936,
		install: 'pip install faf-python-sdk',
		registryUrl: 'https://pypi.org/project/faf-python-sdk/',
		githubUrl: 'https://github.com/Wolfe-Jam/faf-python-sdk',
		registry: 'pypi',
		icon: '🐍'
	},
	{
		name: 'gemini-faf-mcp',
		description: 'Google Gemini MCP server',
		downloads: 1_137,
		install: 'pip install gemini-faf-mcp',
		registryUrl: 'https://pypi.org/project/gemini-faf-mcp/',
		githubUrl: 'https://github.com/Wolfe-Jam/gemini-faf-mcp',
		registry: 'pypi',
		icon: '💎'
	}
];

// ── crates.io packages (3) ────────────────────────────────────────

export const cratesPackages: Package[] = [
	{
		name: 'faf-rust-sdk',
		description: 'Rust SDK for .faf files',
		downloads: 108,
		install: 'cargo add faf-rust-sdk',
		registryUrl: 'https://crates.io/crates/faf-rust-sdk',
		githubUrl: 'https://github.com/Wolfe-Jam/faf-rust-sdk',
		registry: 'crates',
		icon: '🦀'
	},
	{
		name: 'faf-radio-rust',
		description: 'Radio Protocol client for MCPaaS',
		downloads: 22,
		install: 'cargo add faf-radio-rust',
		registryUrl: 'https://crates.io/crates/faf-radio-rust',
		githubUrl: 'https://github.com/Wolfe-Jam/faf-radio-rust',
		registry: 'crates',
		icon: '📻'
	},
	{
		name: 'rust-faf-mcp',
		description: 'Rust MCP server for .faf',
		downloads: 10,
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
