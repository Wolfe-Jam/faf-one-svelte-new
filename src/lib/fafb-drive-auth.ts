import { env } from '$env/dynamic/private';

const COOKIE = 'fafb_drive';
const enc = new TextEncoder();

function secret(): string {
	return env.FAFB_DRIVE_SECRET || env.RESEND_API_KEY || '';
}

function allowed(email: string): boolean {
	const raw = (env.FAFB_DRIVE_ALLOW || '').trim();
	if (!raw) return true;
	const want = email.toLowerCase();
	return raw
		.split(',')
		.map((s) => s.trim().toLowerCase())
		.filter(Boolean)
		.includes(want);
}

async function hmac(msg: string): Promise<Uint8Array> {
	const s = secret();
	if (!s) throw new Error('no secret');
	const key = await crypto.subtle.importKey(
		'raw',
		enc.encode(s),
		{ name: 'HMAC', hash: 'SHA-256' },
		false,
		['sign']
	);
	const buf = await crypto.subtle.sign('HMAC', key, enc.encode(msg));
	return new Uint8Array(buf);
}

function b64url(bytes: Uint8Array): string {
	let bin = '';
	for (const b of bytes) bin += String.fromCharCode(b);
	return btoa(bin).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

function timingEqual(a: string, b: string): boolean {
	if (a.length !== b.length) return false;
	let x = 0;
	for (let i = 0; i < a.length; i++) x |= a.charCodeAt(i) ^ b.charCodeAt(i);
	return x === 0;
}

export function normEmail(raw: string): string | null {
	const e = raw.trim().toLowerCase();
	if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)) return null;
	return e;
}

export function isAllowed(email: string): boolean {
	return allowed(email);
}

export async function passwordFor(email: string): Promise<string> {
	const bytes = await hmac(`pw:${email}`);
	return b64url(bytes)
		.replace(/[-_]/g, '')
		.slice(0, 8)
		.toUpperCase();
}

export async function checkPassword(email: string, given: string): Promise<boolean> {
	const expect = await passwordFor(email);
	return timingEqual(expect, given.trim().toUpperCase());
}

export async function makeSession(email: string): Promise<string> {
	const exp = Date.now() + 14 * 24 * 60 * 60 * 1000;
	const payload = `${email}|${exp}`;
	const sig = b64url(await hmac(`sess:${payload}`));
	return `${b64url(enc.encode(payload))}.${sig}`;
}

export async function readSession(token: string | undefined): Promise<string | null> {
	if (!token || !token.includes('.')) return null;
	const [p, sig] = token.split('.');
	if (!p || !sig) return null;
	let payload: string;
	try {
		payload = atob(p.replace(/-/g, '+').replace(/_/g, '/'));
	} catch {
		return null;
	}
	const expect = b64url(await hmac(`sess:${payload}`));
	if (!timingEqual(expect, sig)) return null;
	const [email, exp] = payload.split('|');
	if (!email || !exp || Date.now() > Number(exp)) return null;
	if (!allowed(email)) return null;
	return email;
}

export function cookieName(): string {
	return COOKIE;
}

export function cookieOpts() {
	return {
		path: '/',
		httpOnly: true,
		secure: true,
		sameSite: 'lax' as const,
		maxAge: 14 * 24 * 60 * 60
	};
}
