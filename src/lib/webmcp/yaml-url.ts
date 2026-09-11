import { ToolError } from './errors';

export const MAX_YAML_BYTES = 256 * 1024;

/** Exact hostnames only — `ide.faf.one` is not `faf.one`. */
export const ALLOWED_HOSTS = new Set(['faf.one', 'raw.githubusercontent.com']);

export function assertAllowedUrl(urlString: string): URL {
	let url: URL;
	try {
		url = new URL(urlString);
	} catch {
		throw new ToolError('invalid_url', 'url is not a valid absolute URL');
	}
	if (url.protocol !== 'https:') {
		throw new ToolError('invalid_url', 'url must use https');
	}
	if (!ALLOWED_HOSTS.has(url.hostname)) {
		throw new ToolError('invalid_url', `host not allowlisted: ${url.hostname}`);
	}
	if (url.pathname.includes('/mcp')) {
		throw new ToolError('invalid_url', 'mcp endpoints are not allowed');
	}
	return url;
}

export function assertYamlSize(text: string): void {
	const bytes = new TextEncoder().encode(text).length;
	if (bytes > MAX_YAML_BYTES) {
		throw new ToolError('too_large', `YAML exceeds ${MAX_YAML_BYTES} bytes`);
	}
}

export type FetchText = (url: URL, signal?: AbortSignal) => Promise<string>;

/** Browser fetch. Re-checks the final URL after redirects. */
export async function fetchAllowedYaml(url: URL, signal?: AbortSignal): Promise<string> {
	const res = await fetch(url.href, { redirect: 'follow', signal });
	if (!res.ok) {
		throw new ToolError('fetch_failed', `fetch failed: HTTP ${res.status}`);
	}
	let finalUrl: URL;
	try {
		finalUrl = new URL(res.url);
	} catch {
		throw new ToolError('fetch_failed', 'fetch returned an invalid final URL');
	}
	assertAllowedUrl(finalUrl.href);
	const declared = res.headers.get('content-length');
	if (declared && Number(declared) > MAX_YAML_BYTES) {
		throw new ToolError('too_large', `YAML exceeds ${MAX_YAML_BYTES} bytes`);
	}
	const text = await res.text();
	assertYamlSize(text);
	if (!text.trim()) {
		throw new ToolError('invalid_yaml', 'fetched document was empty');
	}
	return text;
}
