import { describe, expect, it } from 'vitest';
import { emitAgentsMd } from './emit-agents';
import { toToolError, ToolError } from './errors';
import { fill6wsYaml, sixWsFromForm } from './fill-6ws';
import { FIXTURE_YAML } from './fixture';
import { mapScoreResult } from './map-score';
import { registerFafWebmcpTools } from './register';
import { runScoreFaf, runScoreFafSafe } from './score-faf';
import { assertAllowedUrl, MAX_YAML_BYTES } from './yaml-url';

const KERNEL_OK = JSON.stringify({
	score: 72,
	tier: '●',
	populated: 15,
	empty: 6,
	ignored: 0,
	active: 21,
	total: 21,
	slots: {
		'project.name': 'populated',
		'human_context.why': 'empty',
		'stack.db': 'empty'
	}
});

describe('assertAllowedUrl', () => {
	it('accepts https faf.one', () => {
		expect(assertAllowedUrl('https://faf.one/.well-known/project.faf').hostname).toBe('faf.one');
	});

	it('accepts raw.githubusercontent.com', () => {
		const u = assertAllowedUrl(
			'https://raw.githubusercontent.com/Wolfe-Jam/faf-cli/main/project.faf'
		);
		expect(u.hostname).toBe('raw.githubusercontent.com');
	});

	it('rejects http', () => {
		try {
			assertAllowedUrl('http://faf.one/project.faf');
			expect.unreachable();
		} catch (err) {
			expect(err).toBeInstanceOf(ToolError);
			expect((err as ToolError).error).toBe('invalid_url');
		}
	});

	it('rejects ide.faf.one', () => {
		try {
			assertAllowedUrl('https://ide.faf.one/mcp/v1');
			expect.unreachable();
		} catch (err) {
			expect((err as ToolError).error).toBe('invalid_url');
			expect((err as ToolError).message).toMatch(/not allowlisted/);
		}
	});

	it('rejects /mcp paths on an allowlisted host', () => {
		try {
			assertAllowedUrl('https://faf.one/mcp');
			expect.unreachable();
		} catch (err) {
			expect((err as ToolError).message).toMatch(/mcp endpoints/);
		}
	});

	it('rejects other hosts', () => {
		try {
			assertAllowedUrl('https://evil.example/project.faf');
			expect.unreachable();
		} catch (err) {
			expect((err as ToolError).error).toBe('invalid_url');
		}
	});
});

describe('runScoreFaf', () => {
	it('scores fixture YAML through the mapped kernel shape', async () => {
		const result = await runScoreFaf(
			{ yaml: FIXTURE_YAML },
			{ scoreYaml: () => KERNEL_OK, fetchText: async () => '' }
		);
		expect(result.score).toBe(72);
		expect(result.tier).toBe('●');
		expect(result.populated).toBe(15);
		expect(result.total).toBe(21);
		expect(result.active).toBe(21);
		expect(result.faf_version).toBe('3.0');
		expect(result.gaps).toEqual(['human_context.why', 'stack.db']);
	});

	it('returns a numeric score on the fixture', async () => {
		const result = await runScoreFaf(
			{ yaml: FIXTURE_YAML },
			{
				scoreYaml: () =>
					JSON.stringify({
						score: 100,
						tier: '✪',
						populated: 13,
						active: 13,
						total: 21,
						slots: {}
					}),
				fetchText: async () => ''
			}
		);
		expect(typeof result.score).toBe('number');
		expect(result.score).toBe(100);
		expect(result.gaps).toBeUndefined();
	});

	it('returns a structured error for bad YAML from the kernel', async () => {
		const result = await runScoreFafSafe(
			{ yaml: '{ this is not: yaml: [[[' },
			{
				scoreYaml: () => {
					throw 'YAML parse error: mapping values are not allowed here';
				},
				fetchText: async () => ''
			}
		);
		expect(result).toEqual({
			error: 'invalid_yaml',
			message: 'YAML parse error: mapping values are not allowed here'
		});
	});

	it('requires yaml or url', async () => {
		const result = await runScoreFafSafe(
			{},
			{ scoreYaml: () => KERNEL_OK, fetchText: async () => '' }
		);
		expect(result).toEqual({ error: 'invalid_input', message: 'require yaml or url' });
	});

	it('fetches allowlisted https YAML', async () => {
		const result = await runScoreFaf(
			{ url: 'https://faf.one/.well-known/project.faf' },
			{
				scoreYaml: (yaml) => {
					expect(yaml).toContain('faf_version');
					return KERNEL_OK;
				},
				fetchText: async (url) => {
					expect(url.hostname).toBe('faf.one');
					return FIXTURE_YAML;
				}
			}
		);
		expect(result.score).toBe(72);
	});

	it('does not call fetch when yaml is provided', async () => {
		let fetched = false;
		await runScoreFaf(
			{ yaml: FIXTURE_YAML },
			{
				scoreYaml: () => KERNEL_OK,
				fetchText: async () => {
					fetched = true;
					return '';
				}
			}
		);
		expect(fetched).toBe(false);
	});

	it('rejects oversize YAML', async () => {
		const huge = 'x'.repeat(MAX_YAML_BYTES + 1);
		const result = await runScoreFafSafe(
			{ yaml: huge },
			{ scoreYaml: () => KERNEL_OK, fetchText: async () => '' }
		);
		expect(result).toMatchObject({ error: 'too_large' });
	});
});

describe('mapScoreResult', () => {
	it('omits gaps when every slot is populated or ignored', () => {
		const mapped = mapScoreResult(
			{
				score: 100,
				tier: '✪',
				populated: 13,
				total: 21,
				slots: { 'project.name': 'populated', 'stack.css': 'slotignored' }
			},
			'project:\n  name: x\n'
		);
		expect(mapped.gaps).toBeUndefined();
		expect(mapped.faf_version).toBeUndefined();
	});
});

describe('fill_6ws', () => {
	it('returns a human_context YAML fragment and does not navigate', () => {
		const yaml = fill6wsYaml({
			who: 'builders',
			what: 'playground',
			why: 'in-page score',
			where: 'faf.one',
			when: '2026',
			how: 'WebMCP'
		});
		expect(yaml).toMatch(/^human_context:\n/);
		expect(yaml).toContain('who: "builders"');
		expect(yaml).toContain('how: "WebMCP"');
		expect(yaml).not.toContain('context_score');
	});

	it('escapes YAML-special characters', () => {
		const yaml = fill6wsYaml({ who: 'a: b # c', what: 'say "hi"' });
		expect(yaml).toContain('who: "a: b # c"');
		expect(yaml).toContain('what: "say \\"hi\\""');
	});

	it('reads a FormData payload', () => {
		const fd = new FormData();
		fd.set('who', 'devs');
		fd.set('what', 'tool');
		expect(sixWsFromForm(fd).who).toBe('devs');
		expect(sixWsFromForm(fd).why).toBe('');
	});
});

describe('emit_agents_md', () => {
	it('renders a minimal AGENTS.md from the fixture', () => {
		const { markdown } = emitAgentsMd(FIXTURE_YAML);
		expect(markdown).toContain('# AGENTS.md — webmcp-fixture');
		expect(markdown).toContain('Score a .faf inside the browser tab');
		expect(markdown).toContain('Language: TypeScript');
		expect(markdown).toContain('- hosting: Cloudflare Pages');
		expect(markdown).not.toContain('slotignored');
		expect(markdown).toContain('- why: Page-local scoring without a local MCP process');
		expect(markdown).toContain('compiled from application/vnd.faf+yaml');
	});

	it('returns a structured invalid_yaml error on broken YAML', () => {
		try {
			emitAgentsMd('{ this is not: yaml: [[[' );
			expect.unreachable();
		} catch (err) {
			expect(toToolError(err).error).toBe('invalid_yaml');
		}
	});
});

describe('registerFafWebmcpTools', () => {
	it('registers exactly the three playground tools', async () => {
		const names: string[] = [];
		const tools = new Map<string, { execute: Function; schema: object }>();
		const context = {
			registerTool: async (tool: {
				name: string;
				inputSchema: object;
				execute: (input: Record<string, unknown>) => Promise<unknown>;
			}) => {
				names.push(tool.name);
				tools.set(tool.name, { execute: tool.execute, schema: tool.inputSchema });
			},
			getTools: async () => names.map((name) => ({ name }))
		};
		const listed = await registerFafWebmcpTools(context, {
			scoreYaml: (yaml) => {
				if (yaml.includes('{') || yaml.includes(': :')) {
					throw 'YAML parse error: mapping values are not allowed here';
				}
				return KERNEL_OK;
			},
			fetchText: async () => FIXTURE_YAML
		});
		expect(listed.sort()).toEqual(['emit_agents_md', 'fill_6ws', 'score_faf']);
		expect(names.filter((n) => n === 'fill_6ws')).toHaveLength(1);

		const scored = await tools.get('score_faf')!.execute({ yaml: FIXTURE_YAML });
		expect(scored).toMatchObject({ score: 72, faf_version: '3.0' });

		const bad = await tools.get('score_faf')!.execute({ yaml: ': : :' });
		expect(bad).toMatchObject({ error: 'invalid_yaml' });

		const agents = await tools.get('emit_agents_md')!.execute({ yaml: FIXTURE_YAML });
		expect(agents).toMatchObject({ markdown: expect.stringContaining('compiled from') });
	});

	it('does not register a fourth fill_6ws when the form already did', async () => {
		const names: string[] = ['fill_6ws'];
		const context = {
			registerTool: async (tool: { name: string }) => {
				names.push(tool.name);
			},
			getTools: async () => names.map((name) => ({ name }))
		};
		await registerFafWebmcpTools(context, {
			scoreYaml: () => KERNEL_OK,
			fetchText: async () => ''
		});
		expect(names.filter((n) => n === 'fill_6ws')).toHaveLength(1);
		expect(names).toContain('score_faf');
		expect(names).toContain('emit_agents_md');
	});
});
