import { ToolError } from './errors';
import { assertAllowedUrl } from './yaml-url';

export type DemoRepo = {
	id: string;
	label: string;
	href: string;
};

/** Repos that already publish a project.faf — this page reads the file, it does not clone. */
export const DEMO_REPOS: DemoRepo[] = [
	{
		id: 'faf-cli',
		label: 'faf-cli',
		href: 'https://github.com/Wolfe-Jam/faf-cli'
	},
	{
		id: 'faf-one',
		label: 'faf.one',
		href: 'https://faf.one'
	}
];

export const DEFAULT_REPO = DEMO_REPOS[0];

/**
 * Turn a pasted repo or file URL into allowlisted fetch URLs for a project.faf.
 * github.com is rewritten to raw.githubusercontent.com — we never fetch HTML.
 */
export function fafUrlsFromInput(input: string): string[] {
	const raw = input.trim();
	if (!raw) throw new ToolError('invalid_url', 'url is empty');

	let href = raw;
	if (!/^https?:\/\//i.test(href)) {
		href = `https://github.com/${href.replace(/^github\.com\//i, '')}`;
	}

	let url: URL;
	try {
		url = new URL(href);
	} catch {
		throw new ToolError('invalid_url', 'url is not a valid absolute URL');
	}

	if (url.hostname === 'faf.one' || url.hostname === 'www.faf.one') {
		if (url.pathname === '/' || url.pathname === '') {
			return ['https://faf.one/.well-known/project.faf'];
		}
		return [assertAllowedUrl(`https://faf.one${url.pathname}`).href];
	}

	if (url.hostname === 'raw.githubusercontent.com') {
		return [assertAllowedUrl(url.href).href];
	}

	if (url.hostname === 'github.com' || url.hostname === 'www.github.com') {
		const parts = url.pathname.split('/').filter(Boolean);
		if (parts.length < 2) {
			throw new ToolError('invalid_url', 'GitHub URL must be owner/repo');
		}
		const owner = parts[0];
		const repo = parts[1];
		if (parts[2] === 'blob' && parts.length >= 5) {
			const branch = parts[3];
			const filePath = parts.slice(4).join('/');
			return [
				assertAllowedUrl(
					`https://raw.githubusercontent.com/${owner}/${repo}/${branch}/${filePath}`
				).href
			];
		}
		const branches = ['main', 'master'];
		const files = ['project.faf', '.faf'];
		const out: string[] = [];
		for (const branch of branches) {
			for (const file of files) {
				out.push(`https://raw.githubusercontent.com/${owner}/${repo}/${branch}/${file}`);
			}
		}
		return out.map((u) => assertAllowedUrl(u).href);
	}

	throw new ToolError('invalid_url', `host not allowlisted: ${url.hostname}`);
}
