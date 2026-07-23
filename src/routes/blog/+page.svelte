<script>
	let view = $state('list');
	let sortBy = $state('newest');

	// Compact hero subscribe — list page is too long for footer-only capture
	let subEmail = $state('');
	/** @type {'idle' | 'loading' | 'success' | 'error'} */
	let subStatus = $state('idle');

	async function handleBlogSub(e) {
		e.preventDefault();
		if (!subEmail || subStatus === 'loading') return;
		subStatus = 'loading';
		try {
			const res = await fetch('/api/subscribe', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
				body: JSON.stringify({ email: subEmail.trim(), source: 'faf.one/blog' })
			});
			const data = await res.json().catch(() => ({}));
			if (!res.ok || data?.subscribed === false) throw new Error(data?.error || 'fail');
			subStatus = 'success';
			subEmail = '';
		} catch {
			subStatus = 'error';
			setTimeout(() => {
				subStatus = 'idle';
			}, 4000);
		}
	}

	const posts = [
		{
			slug: 'blog/agents-md-facts',
			title: 'agents-md-facts',
			version: 'v0.1.0',
			date: 'July 23, 2026',
			timestamp: '2026-07-23',
			excerpt:
				"Author a minimal AGENTS.md from your repo's facts. Never guessed. Four commands, MIT, zero runtime deps — npx agents-md-facts.",
			emoji: '☑️',
			category: 'Launch'
		},
		{
			slug: 'blog/memory-edition',
			title: 'The Memory Edition',
			version: 'faf-cli v7.2.0',
			date: 'July 22, 2026',
			timestamp: '2026-07-22',
			excerpt: '.faf is context. .fafm is memory. faf-cli v7.2.0 ships portable agent memory — convert Claude Code memory to soul.fafm, etch, recall — INTEROP with claude-fafm-sdk 1.0. One CLI, both IANA formats.',
			emoji: '🧡',
			category: 'Release'
		},
		{
			slug: 'blog/authored-not-generated',
			title: 'Authored, Not Generated',
			version: 'faf-cli v7.1.3',
			date: 'July 10, 2026',
			timestamp: '2026-07-10',
			excerpt: "faf export --agents authors a complete, best-in-class AGENTS.md for any repo — detected from your code, non-destructive, never stale. Authored, not generated: the Concise Context format for AI.",
			emoji: '☑️',
			category: 'Release'
		},
		{
			slug: 'blog/three-iana-media-types',
			title: 'Three IANA Media Types',
			date: 'July 6, 2026',
			timestamp: '2026-07-06',
			excerpt: "The trinity is complete: .faf (Context), .fafm (Memory), and .fafa (Agents) are now three IANA-registered media types — official, verifiable, all under one registrant in the IANA registry.",
			emoji: '☑️',
			category: 'Foundation'
		},
		{
			slug: 'blog/aaif-ambassador',
			title: 'AAIF Ambassador',
			date: 'July 4, 2026',
			timestamp: '2026-07-04',
			excerpt: "Now an Ambassador for the Agentic AI Foundation — the Linux Foundation home for the open standards agentic AI is being built on: MCP, goose, AGENTS.md, agentgateway. Helping developers adopt them, starting with AGENTS.md.",
			emoji: '🏛️',
			category: 'Foundation'
		},
		{
			slug: 'blog/faf-context',
			title: '.FAF Context',
			version: 'faf-mcp v2.3.1',
			date: 'July 1, 2026',
			timestamp: '2026-07-01',
			excerpt: "The FAF context server for your editor — Cursor, VS Code, Windsurf, Cline. One .faf in your repo, read by every MCP-compatible IDE. On the GitHub MCP Registry. v2.3.1 grounds on the project you have open.",
			emoji: '🎯',
			category: 'Interop'
		},
		{
			slug: 'blog/same-grade-opposite-flag',
			title: 'Same Grade. Opposite Flag.',
			date: 'June 30, 2026',
			timestamp: '2026-06-30',
			excerpt: "Two skills score a perfect 100/100. One earns the flag, one doesn't. Why the grade isn't the gate — and why a skill test gets weaker as the models get stronger.",
			emoji: '🏁',
			category: 'WJTTC'
		},
		{
			slug: 'blog/git-version',
			title: 'The GIT Version',
			version: 'v7.0.0',
			date: 'June 27, 2026',
			timestamp: '2026-06-27',
			excerpt: "faf-cli v7.0.0 — FAF is to Context what Git is to Versions. Your project.faf is now a git-native artifact you can diff, log, guard with a pre-commit hook, and pull at any ref — score delta and all. Purely additive, safe upgrade.",
			emoji: '🏆',
			category: 'Release'
		},
		{
			slug: 'blog/copilot-edition',
			title: 'The Copilot Edition',
			date: 'June 24, 2026',
			timestamp: '2026-06-24',
			excerpt: "faf-cli v6.15.0 — faf export --copilot emits .github/copilot-instructions.md, the widest-surface Copilot file, straight from your scored .faf. Plus faf git hardened against URL injection, and all five WJTTC tiers.",
			emoji: '🏁',
			category: 'Interop'
		},
		{
			slug: 'blog/heartbeat-edition',
			title: 'The Heartbeat Edition',
			date: 'June 23, 2026',
			timestamp: '2026-06-23',
			excerpt: "Persistent Project Context with Memory, looped for you. The SessionStart heartbeat now carries the intent the code can't — the goal and 6Ws only you can give or confirm. Plus AAA on Glama.",
			emoji: '🧡',
			category: 'Release'
		},
		{
			slug: 'blog/proof-edition',
			title: 'The Proof Edition',
			date: 'June 22, 2026',
			timestamp: '2026-06-22',
			excerpt: "faf_bench proves FAF's grounding lift in-session — a cold-vs-.faf benchmark with a mechanical ✪ receipt — and faf_go now bootstraps from a cold repo (init → auto → 6Ws).",
			emoji: '🏁',
			category: 'Release'
		},
		{
			slug: 'blog/loop-edition',
			title: 'The Loop Edition',
			date: 'June 22, 2026',
			timestamp: '2026-06-22',
			excerpt: 'faf-cli v6.14.0 — faf loop drives any repo to 100% or the honest human wall, sourcing every slot it can with provenance, asking only what only you know, never inventing. Three honest terminals: done / needs-human / stuck.',
			emoji: '🏆',
			category: 'Release'
		},
		{
			slug: 'blog/grounded-memory',
			title: 'The Grounded Memory Edition',
			date: 'June 21, 2026',
			timestamp: '2026-06-21',
			excerpt: 'grok-faf-mcp 1.7.0 — the FRC layer above Grok Collections: faf_gate (promote/hold), faf_section (exact structured retrieval), faf_memory (durable .fafm). Opt-in via USE_FRC; the 12-tool core surface stays unchanged.',
			emoji: '🧡',
			category: 'Release'
		},
		{
			slug: 'blog/hundred-thousand',
			title: '100,000 Downloads',
			date: 'June 20, 2026',
			timestamp: '2026-06-20',
			excerpt: 'The FAF ecosystem crosses 100,000 downloads across npm, PyPI and crates.io. Six figures, zero marketing budget — the format keeps spreading because the format keeps working.',
			emoji: '🏆',
			category: 'Milestone'
		},
		{
			slug: 'blog/zeph-edition',
			title: 'The ZEPH Edition',
			date: 'June 20, 2026',
			timestamp: '2026-06-20',
			excerpt: 'grok-faf-mcp 1.6.0 — the ZEPH fast path for re-grounding. Zig→WASM scoring (~12µs), flag-gated, faf-cli the canonical fallback, parity locked in CI. Same number, just faster.',
			emoji: '⚡',
			category: 'Release'
		},
		{
			slug: 'blog/grok-core-tier',
			title: 'Grok Core-tier',
			date: 'June 18, 2026',
			timestamp: '2026-06-18',
			excerpt: 'grok-faf-mcp 1.5.5 — the default tool surface is now the Grok value: re-grounding, RAG, memory. Inherited clutter retired; zero Grok-driven features trimmed.',
			emoji: '⚡',
			category: 'Release'
		},
		{
			slug: 'blog/claude-dart-edition',
			title: 'The Dart Edition',
			date: 'June 17, 2026',
			timestamp: '2026-06-17',
			excerpt: 'claude-faf-mcp now reads Dart & Flutter — it knows a Flutter app from a pure-Dart CLI. By composition, not a fork. Zero-Config — one-click .mcpb.',
			emoji: '🏎️',
			category: 'Release'
		},
		{
			slug: 'blog/dart-edition',
			title: "Run It, Don't Grep It",
			date: 'June 16, 2026',
			timestamp: '2026-06-16',
			excerpt: "A Dart/Flutter expert grepped the source for 'Flutter', found none, and called it. He was right about the gap — gemini-faf-mcp 2.5.0 closed it: it now reads your pubspec and writes Dart/Flutter into the .faf.",
			emoji: '🏎️',
			category: 'Story'
		},
		{
			slug: 'blog/ledger-edition',
			title: 'The Ledger Edition',
			date: 'June 14, 2026',
			timestamp: '2026-06-14',
			excerpt: 'faf bench --submit posts your cold-vs-grounded receipt to the public ledger — the context bench goes public, one command.',
			emoji: '🏎️',
			category: 'Release'
		},
		{
			slug: 'blog/countdown-100k',
			title: 'Countdown to 100k',
			date: 'June 12, 2026',
			timestamp: '2026-06-12',
			excerpt: "91,565 downloads. 8,435 to go. The 100k milestone post is already written — and a robot checks every morning whether today's the day. Counts fed, pace derived, nothing typed by hand.",
			emoji: '🏆',
			category: 'Milestone'
		},
		{
			slug: 'blog/lying-switch-trust-code',
			title: 'The Lying, the Switch and the Trust Code',
			date: 'June 12, 2026',
			timestamp: '2026-06-12',
			excerpt: "72 hours, 5 releases, 4 editions — the story of how software goes from telling the truth to being unable to lie. A disclosure handled with honest credit, a benchmark where the repo grades itself, and two Claude sessions catching each other's blind spots. FAF don't lie. And now it can't.",
			emoji: '✪',
			category: 'Story'
		},
		{
			slug: 'blog/sourced-edition',
			title: 'The Sourced Edition',
			date: 'June 12, 2026',
			timestamp: '2026-06-12',
			excerpt: "claude-faf-mcp v5.9.0 — composes faf-cli's single-source engines instead of carrying its own copies that drift. faf_go and Turbo-Cat now share one source; the guessing extractor is gone. Sourced, not guessed. 567 tests.",
			emoji: '✪',
			category: 'Release'
		},
		{
			slug: 'blog/composed-edition',
			title: 'The Composed Edition',
			date: 'June 12, 2026',
			timestamp: '2026-06-12',
			excerpt: 'faf-cli v6.10.x: every FAF MCP composes single-source engines, never reimplements them. Turbo-Cat (~200 formats) and the bench engine join the public API — plus the same-day no-guess patch that proves the doctrine polices itself. 843 tests.',
			emoji: '✪',
			category: 'Release'
		},
		{
			slug: 'blog/grounded-edition',
			title: "You're Grounded!",
			date: 'June 12, 2026',
			timestamp: '2026-06-12',
			excerpt: 'faf-cli v6.9.0 — The Grounded Edition. faf bench: your AI without context vs with it, graded by your own .faf (8/15 → 15/15 on our fleet). The 6Ws Interview goes public-API. faf refresh: drift → refresh → re-grounded. 820 tests.',
			emoji: '✪',
			category: 'Release'
		},
		{
			slug: 'blog/trust-edition',
			title: 'The Trust Edition',
			date: 'June 11, 2026',
			timestamp: '2026-06-11',
			excerpt: 'claude-faf-mcp v5.8.0: Claude Code-native context that just works. Every session opens with faf: context ✪ 100% — fresh. Quiet output, typed results, a parity hash any engine can verify. 35 tools, 547 tests.',
			emoji: '✪',
			category: 'Release'
		},
		{
			slug: 'blog/chameleon-edition',
			title: 'The Chameleon Edition',
			date: 'June 7, 2026',
			timestamp: '2026-06-07',
			excerpt: 'gemini-faf-mcp v2.4.0: one command, both modes. Auto-selects its transport — stdio locally, Streamable HTTP on Cloud Run. Same binary, 12 tools, zero config. Drops straight into Google Antigravity (stdio or serverUrl). 221 tests.',
			emoji: '🦎',
			category: 'Release'
		},
		{
			slug: 'blog/faf-on-pypi',
			title: 'FAF on PyPI',
			date: 'May 31, 2026',
			timestamp: '2026-05-31',
			excerpt: 'Six packages on PyPI, one IANA-registered family. claude-fafm-sdk and faf-memory-mcp join gemini-faf-mcp, faf-python-sdk, grok-faf-voice, and faf-agent-mcp. Persistent Context (.faf) plus Permanent Memory (.fafm). Two implement Zenodo papers. uvx and go.',
			emoji: '🐍',
			category: 'Launch'
		},
		{
			slug: 'blog/relentless-edition',
			title: 'The Relentless Edition',
			date: 'May 30, 2026',
			timestamp: '2026-05-30',
			excerpt: 'faf-cli v6.8.0: Birth DNA, 6-W extractor, format-finder — restored. Grok interop (faf export --grok), extension App-Type — added. One shared pipeline makes init, auto, git impossible to drift between. 762/762 tests, 🏆 Trophy 100%.',
			emoji: '🏎️',
			category: 'Release'
		},
		{
			slug: 'blog/zero-config-memory',
			title: 'Zero-Config Memory',
			date: 'May 23, 2026',
			timestamp: '2026-05-23',
			excerpt: 'claude-fafm-sdk v0.3.0: just push — a namepoint auto-provisions and your .fafm soul goes live, cross-vendor, with no claim page and no key to copy. The whole document round-trips, so ids, types, and priorities survive intact.',
			emoji: '🐘',
			category: 'Release'
		},
		{
			slug: 'blog/permanent-memory',
			title: 'Memory Paper Published on Zenodo',
			date: 'May 22, 2026',
			timestamp: '2026-05-22',
			excerpt: 'The .fafm Memory paper is on CERN\'s Zenodo. Multi-profile AI agent memory, IANA-registered, CC BY 4.0. The first formal standard for how AI agents remember reliably, portably, and across vendors. Permanent Memory. Instant Recall.',
			emoji: '🏁',
			category: 'Research'
		},
		{
			slug: 'blog/permanent-memory-instant-recall',
			title: 'Permanent Memory. Instant Recall.',
			date: 'May 22, 2026',
			timestamp: '2026-05-22',
			excerpt: '.fafm — portable, cross-vendor AI memory in one IANA-registered format — is live. Two profiles: voice (grok-faf-voice v0.3.2) + knowledge (claude-fafm-sdk v0.1.1), both on PyPI and cross-linked. memory.faf.one is up. Companion paper on Zenodo (10.5281/zenodo.20348942).',
			emoji: '🐘',
			category: 'Launch'
		},
		{
			slug: 'blog/html-edition',
			title: 'The HTML Edition',
			date: 'May 17, 2026',
			timestamp: '2026-05-17',
			excerpt: 'We rendered a .faf. The day we saw FAF. faf show renders project.faf → project.html, on-demand, for human and team review. The 4th pillar: FAF defines. MD instructs. AI codes. HTML shows. FAF became a team event — with a Pit Crew.',
			emoji: '🏎️',
			category: 'Release',
			theme: 'dark'
		},
		{
			slug: 'blog/grok-grows-up',
			title: 'Grok Grows Up',
			date: 'May 14, 2026',
			timestamp: '2026-05-14',
			excerpt: 'grok-faf-mcp v1.3.0 ships as the hallmark online MCP. Identity restored across the stdio path. Comparison framing scrubbed. Server-card enriched. The "3,800% faster" claim — invented, retired — replaced with measured 137 µs/score, methodology disclosed. Four production surfaces live.',
			emoji: '🍊',
			category: 'Grok'
		},
		{
			slug: 'blog/trophy-edition',
			title: 'The Trophy Edition',
			date: 'May 11, 2026',
			timestamp: '2026-05-11',
			excerpt: 'Until now we had 85% as a recommended minimum. It\'s now 100. All or nothing. AI gets its best shot at assisting you. v6.6 adds the 20th app-type (about — owner-attested representation) and flips the recommendation: 🏆 Trophy only.',
			emoji: '🏆',
			category: 'Release'
		},
		{
			slug: 'blog/glass-hood-edition',
			title: 'The Glass-Hood Edition',
			date: 'May 9, 2026',
			timestamp: '2026-05-09',
			excerpt: 'When faf-cli classifies your project, it tells you why. A YAML comment next to type: reveals the evidence — package.json bin, build.zig, pyproject.toml. Read the rationale, agree or disagree. No opaque hood — you can see the engine bay.',
			emoji: '🔍',
			category: 'Release'
		},
		{
			slug: 'blog/the-day-of-the-grid',
			title: 'The Day of the GRID — Package.json got a UI',
			date: 'May 4, 2026',
			timestamp: '2026-05-04',
			excerpt: 'May the 4th. The GRID at mcpaas.live/grid generalized today. Point it at any npm package or GitHub repo and the same renderer reads the structure. ?npm=react, ?gh=facebook/react. React showed 11/33 slots filled, 22 empty, 1 warn. We don\'t soften that. We print what we see.',
			emoji: '🌐',
			category: 'Launch'
		},
		{
			slug: 'blog/voice-memory-layer',
			title: 'xAI gave Grok Voice. We gave Grok memory.',
			date: 'April 30, 2026',
			timestamp: '2026-04-30',
			excerpt: 'The Voice Memory Layer (VML) ships today. grok-faf-voice 0.1.3 — the reference SDK on PyPI. Sibling grok-faf-mcp 1.2.2 also lands on npm as FAST⚡️AF Context. .faf for context. .fafm for memory. Two packages, two scopes, one family.',
			emoji: '🎙️',
			category: 'Launch'
		},
		{
			slug: 'blog/sixty-thousand',
			title: '60,000 Downloads',
			date: 'April 30, 2026',
			timestamp: '2026-04-30',
			excerpt: '60,000+ downloads. 16 packages. 27 days from 50k. The Mar → Apr jump alone is +24k — biggest calendar month on the chart. Same zero marketing budget. The format keeps spreading because the format keeps working.',
			emoji: '🏆',
			category: 'Milestone',
			theme: 'dark'
		},
		{
			slug: 'blog/ghostty-inspired-edition',
			title: 'The Ghostty-Inspired Edition',
			date: 'April 27, 2026',
			timestamp: '2026-04-27',
			excerpt: 'faf-cli v6.3.0 — desktop notifications via OSC 9. Trophy unlocks pop in macOS Notification Center. Long auto scans ping you when ready. Inspired by Ghostty\'s notification model. 10 lines of code, zero new dependencies, one env var to opt out.',
			emoji: '🏆',
			category: 'Release'
		},
		{
			slug: 'blog/radiofaf-token-tax',
			title: 'The Token Tax',
			date: 'April 21, 2026',
			timestamp: '2026-04-21',
			excerpt: 'Grok 4.3 shipped on April 17. We shipped RadioFAF Episode 12 × /slash three days later. Five xAI voices + Nelly the DJ debate /slash while /slash routes every Grok call that made the episode. 95.6% cheaper, 5.5× faster, same quality. First-mover receipts since January 10.',
			emoji: '🎧',
			category: 'Grok',
			theme: 'dark'
		},
		{
			slug: 'blog/slash-tokens-10-1',
			title: 'The 10:1 Edition',
			date: 'April 19, 2026',
			timestamp: '2026-04-19',
			excerpt: '/slash v1.4.0 — Single-Source-of-Truth: new preflightRoute() matches proxy behavior exactly, PROVIDER_MODELS shared between SDK and proxy, 127 SDK tests. Builds on v1.3.0 Opus 4.7. Saved $477 in a day, took $47. 10:1.',
			emoji: '⚡',
			category: 'Release'
		},
		{
			slug: 'blog/extension-edition',
			title: 'The Extension Edition',
			date: 'April 15, 2026',
			timestamp: '2026-04-15',
			excerpt: 'claude-faf-mcp v5.5.0 — One-click install for Claude Desktop. No JSON, no terminal. Desktop Extension (.mcpb). 118 tests, zero failures.',
			emoji: '🔌',
			category: 'Release'
		},
		{
			slug: 'blog/go-rusty-python',
			title: 'The Go Rusty Python + One Sentence Editions',
			date: 'April 14, 2026',
			timestamp: '2026-04-14',
			excerpt: 'v6.1.0 + v6.2.0 back-to-back. Go/Rust/Python detection + faf go reimagined: one sentence in, AI thinks, 6Ws sign-off. 22% → 🏆 100%.',
			emoji: '🦀',
			category: 'Release'
		},
		{
			slug: 'blog/relentless',
			title: 'The Relentless Edition',
			date: 'April 13, 2026',
			timestamp: '2026-04-13',
			excerpt: 'Type /faf in Claude Desktop. Your project goes to 100%. Relentlessly. FAF defines. MD instructs. AI codes.',
			emoji: '🎼',
			category: 'Release'
		},
		{
			slug: 'blog/nelly-never-forgets',
			title: 'Nelly Never Forgets Edition',
			date: 'April 10, 2026',
			timestamp: '2026-04-10',
			excerpt: 'claude-faf-mcp v5.3.0 — now on Smithery and Glama, persistent analytics via Upstash Redis, 3 CVEs fixed. The MCP that gives your AI memory now has memory of its own.',
			emoji: '🐘',
			category: 'Release'
		},
		{
			slug: 'blog/slash-tokens-launch',
			title: '/slash — Token Optimization for Context Engineers',
			date: 'April 8, 2026',
			timestamp: '2026-04-08',
			excerpt: 'One import. Every LLM call optimized. 4.8 KB WASM. Sub-ms. Evaluates, routes, aborts. 90%+ tokens salvaged. From the FAF team.',
			emoji: '⚡',
			category: 'Launch',
			theme: 'dark'
		},
		{
			slug: 'blog/radiofaf-eleven-episodes',
			title: 'RadioFAF: 11 Episodes In',
			date: 'April 6, 2026',
			timestamp: '2026-04-06',
			excerpt: '5 AI voices. 3 providers. 11 episodes. Nelly got the DJ gig. The world\'s first multi-voice AI radio show — powered by Grok voice, Claude text, and Gemini audio.',
			emoji: '🐘',
			category: 'Story',
			theme: 'dark'
		},
		{
			slug: 'blog/faf-voice-v2-cost-breakthrough',
			title: 'FAF-Voice V2.0: 85% Cost Breakthrough',
			date: 'April 5, 2026',
			timestamp: '2026-04-05',
			excerpt: '85% cost reduction through ephemeral token strategy. RadioFAF trailers: $1.48 to $0.23. Zero quality compromise. 105 championship tests validate every optimization.',
			emoji: '🎯',
			category: 'Research'
		},
		{
			slug: 'blog/fifty-thousand',
			title: '50,000 Downloads',
			date: 'April 1, 2026',
			timestamp: '2026-04-01',
			excerpt: '16 packages. 3 registries. 3 languages. One format. The FAF ecosystem crosses 50,000 downloads. No ads. No growth hacks. Just good software finding its people.',
			emoji: '🏆',
			category: 'Milestone',
			theme: 'dark'
		},
		{
			slug: 'blog/mk4-parity-edition',
			title: 'The Mk4 Parity Edition',
			date: 'March 29, 2026',
			timestamp: '2026-03-29',
			excerpt: 'Same engine, same scores, same truth. Mk4 Championship Scoring in Python — 100% parity with Rust and TypeScript. 396 tests. WJTTC championship suite caught 3 defects CI missed. Enterprise-ready.',
			emoji: '=',
			category: 'Release'
		},
		{
			slug: 'blog/v6-new-era',
			title: 'V6 New Era — The Standard for AI Context',
			date: 'March 28, 2026',
			timestamp: '2026-03-28',
			excerpt: 'Ground-up Bun-native rewrite. 94% smaller. MCP server detection for 10 frameworks. Python/Rust support. Format 3.0. Three letters to AI context.',
			emoji: '🏎️',
			category: 'Launch'
		},
		{
			slug: 'blog/sunset-edition',
			title: 'The Sunset Edition',
			date: 'March 27, 2026',
			timestamp: '2026-03-27',
			excerpt: 'faf-cli v5.2.5 — the final v5 release. 21 slots, 1,232 tests, 53K lines. Thank you, v5. v6 is here — 89% code reduction, WASM kernel, 33 Mk4 slots.',
			emoji: '🌅',
			category: 'Release'
		},
		{
			slug: 'blog/its-official',
			title: "It's Official — FAF is Awesome (x4)",
			date: 'March 22, 2026',
			timestamp: '2026-03-22',
			excerpt: "Like waiting for a London bus — then 4 turn up at once. FAF accepted into awesome-ai-devtools, awesome-mcp-servers, awesome-devops-mcp-servers, and antigravity-awesome-skills.",
			emoji: '🚌',
			category: 'Milestone'
		},
		{
			slug: 'blog/globe-edition',
			title: 'The Globe Edition — Where Your Code Runs',
			date: 'March 27, 2026',
			timestamp: '2026-03-27',
			excerpt: 'World-first live 3D edge execution globe. 2.7KB of Zig WASM executing at 300+ Cloudflare locations. 17 cities, 4 continents, real data. Put your city on the map.',
			emoji: '🌍',
			category: 'Engineering',
			theme: 'dark'
		},
		{
			slug: 'blog/wjttc-self-hosting',
			title: 'Championship-Grade Testing You Can Self-Host',
			date: 'March 21, 2026',
			timestamp: '2026-03-21',
			excerpt: 'WJTTC v1.4.0 — how I test every FAF app, and how you can too. Self-host locally or in CI/CD. Trophy 🏆 at 100%. Big Orange 🍊 curated by AI — no human gatekeeper.',
			emoji: '🏎️',
			category: 'WJTTC'
		},
		{
			slug: 'blog/kernel-router',
			title: 'The Kernel Router',
			date: 'March 20, 2026',
			timestamp: '2026-03-20',
			excerpt: 'faf-wasm-core v1.0.0 — one FafKernel interface, any WASM engine behind it. The shared kernel that bun-sticky, builder.faf.one, and faf-cli all embed. 322KB, 284μs, zero deps.',
			emoji: '🔌',
			category: 'Launch'
		},
		{
			slug: 'blog/wasm-edition',
			title: 'The WASM Edition',
			date: 'March 20, 2026',
			timestamp: '2026-03-20',
			excerpt: 'One interface, any kernel. bun-sticky v2.0.0 embeds the Mk4 WASM engine. Data-driven slotignore. 405 tests across 2 packages, 284μs per score.',
			emoji: '🥐',
			category: 'Release'
		},
		{
			slug: 'blog/fafb-edition',
			title: 'The FAFb Edition',
			date: 'March 19, 2026',
			timestamp: '2026-03-19',
			excerpt: 'faf compile turns your .faf into a sealed binary. Mk4 slot renames, tri-sync topic files, 684→164 line README. Solo dev to Fortune 500.',
			emoji: '📦',
			category: 'Release'
		},
		{
			slug: 'blog/compiler-is-the-spec',
			title: 'The Compiler is the Spec',
			date: 'March 19, 2026',
			timestamp: '2026-03-19',
			excerpt: '322KB of WASM. No server. No API calls. The same Rust compiler runs in your browser, at the edge, in Node, in Bun. One source of truth. faf-wasm-sdk v2.0.0.',
			emoji: '🔧',
			category: 'Foundation'
		},
		{
			slug: 'blog/fafb-definitive-edition',
			title: 'FAFb The Definitive Edition',
			date: 'March 19, 2026',
			timestamp: '2026-03-19',
			excerpt: 'The definitive binary format for AI context. String table, chunk classification, enterprise scale. IFF architecture meets the AI era. faf-rust-sdk v2.0.0 — 313 tests across both SDKs.',
			emoji: '🦀',
			category: 'Milestone'
		},
		{
			slug: 'blog/bun-compiled-binaries',
			title: 'Compiled Binaries Edition',
			date: 'March 14, 2026',
			timestamp: '2026-03-14',
			excerpt: 'faf-cli now ships as standalone binaries. macOS, Linux, Windows. Zero runtime dependencies. One download, it works. Same pattern as Claude Code. 1,143/1,143 tests.',
			emoji: '📦',
			category: 'Milestone'
		},
		{
			slug: 'blog/bun-sticky-bunx-edition',
			title: 'Bunx Edition',
			date: 'March 13, 2026',
			timestamp: '2026-03-13',
			excerpt: 'bun-sticky v1.1.0 — Bun-native FAF scorer. 1,100+ organic downloads, zero marketing. Two packages, two languages: TypeScript + Zig. Bun runs TS. Bun is built on Zig. We built both.',
			emoji: '🥐',
			category: 'Release'
		},
		{
			slug: 'blog/best-context-under-the-bun',
			title: 'Best Context Under the Bun',
			date: 'March 13, 2026',
			timestamp: '2026-03-13',
			excerpt: 'bunx faf-cli auto — 0% to 100% AI context in 0.5s. Same toolchain Claude Code ships on. Zero code changes. 35 Bun compatibility tests. 1,143/1,143 tests passing.',
			emoji: '🥐',
			category: 'Release'
		},
		{
			slug: 'blog/faf-auto-edition',
			title: 'The faf auto Edition',
			date: 'March 12, 2026',
			timestamp: '2026-03-12',
			excerpt: 'One command. Zero to 100%. faf auto now pulls your project name, goal, and version from manifest files automatically. No questions, no prompts, no manual entry. 1,108/1,108 tests.',
			emoji: '⚡',
			category: 'Release'
		},
		{
			slug: 'blog/claude-md-not-a-foundation',
			title: 'Your CLAUDE.md Is Not a Foundation',
			date: 'March 12, 2026',
			timestamp: '2026-03-12',
			excerpt: 'It\'s an instruction manual. And that\'s fine — but it\'s not enough. You can\'t score prose. You can\'t sync it in 10ms. You can\'t validate its structure. MD explains. FAF defines. AI consumes.',
			emoji: '🏗️',
			category: 'Foundation'
		},
		{
			slug: 'blog/mk4-engine',
			title: 'The Mk4 Championship Engine',
			date: 'March 12, 2026',
			timestamp: '2026-03-12',
			excerpt: 'One Rust scoring engine for all four frontiers. 33-slot Enterprise DNA, placeholder rejection, slotignored math. Claude, Gemini, OpenAI, and Grok score the same file the same way. 596/596 tests.',
			emoji: '🧬',
			category: 'Launch'
		},
		{
			slug: 'blog/gemini-mcp-server',
			title: 'The MCP Server Edition',
			date: 'March 8, 2026',
			timestamp: '2026-03-08',
			excerpt: 'gemini-faf-mcp v2.1.1: 12 MCP tools with faf_auto stack detection. Scans your project, detects your stack, generates a .faf. 183 tests. Python 3.10+.',
			emoji: '🔷',
			category: 'Release'
		},
		{
			slug: 'blog/rmcp-edition',
			title: 'The rmcp Edition',
			date: 'March 7, 2026',
			timestamp: '2026-03-07',
			excerpt: 'rust-faf-mcp v0.2.0: Migrates to rmcp SDK — main.rs drops from 253 lines to 20. Three new tools: compress, discover, tokens. 91 tests across 5 files. One binary, zero config.',
			emoji: '🦀',
			category: 'Release'
		},
		{
			slug: 'blog/interop-mcp',
			title: 'The Interop MCP for Context',
			date: 'March 7, 2026',
			timestamp: '2026-03-07',
			excerpt: 'faf-mcp v2.0.0: Define once in .faf, sync to .cursorrules, AGENTS.md, GEMINI.md, and CLAUDE.md. 5 new interop tools, 7 bundled parsers, 61 tools, 309 tests. The dedicated MCP for Cursor, Windsurf, Cline, and VS Code.',
			emoji: '🔄',
			category: 'Release'
		},
		{
			slug: 'blog/gemini-hardened',
			title: 'The Hardened Edition',
			date: 'March 7, 2026',
			timestamp: '2026-03-07',
			excerpt: 'gemini-faf-mcp v1.1.0 — input validation, YAML round-trip safety, 57/57 tests. 3k+ PyPI downloads earned a quality pass.',
			emoji: '🔒',
			category: 'Release'
		},
		{
			slug: 'blog/axum-edition',
			title: 'The Axum Edition',
			date: 'March 7, 2026',
			timestamp: '2026-03-07',
			excerpt: 'One line to inject FAF project context into any Axum server. Feature-gated, parse once, inject everywhere. ~240 lines because the foundation is solid.',
			emoji: '🦀',
			category: 'Release'
		},
		{
			slug: 'blog/in-rust-we-trust',
			title: 'In Rust We Trust — FAF Goes All-In',
			date: 'March 7, 2026',
			timestamp: '2026-03-07',
			excerpt: '5 crates, 240 tests, Axum middleware, FAFb binary, Radio Protocol. FAF goes all-in on Rust. One install: cargo add faf.',
			emoji: '🦀',
			category: 'Launch'
		},
		{
			slug: 'blog/mcpaas-crates-io',
			title: 'MCPaaS Hits crates.io',
			date: 'March 4, 2026',
			timestamp: '2026-03-04',
			excerpt: 'mcpaas is on crates.io — a Rust SDK for persistent AI context. Broadcast once, every AI receives. 46 tests, 3-tier WJTTC championship-grade coverage. Zero drift.',
			emoji: '📡',
			category: 'Launch'
		},
		{
			slug: 'blog/nelly-edition',
			title: 'The Nelly Edition',
			date: 'March 4, 2026',
			timestamp: '2026-03-04',
			excerpt: 'claude-faf-mcp v5.0 + v5.1: 33 annotated MCP tools. Tool #33 faf_tri_sync — Nelly makes your AI remember across sessions. Answer 3 questions (the 3Ws) and your AI stops guessing.',
			emoji: '🐘',
			category: 'Release'
		},
		{
			slug: 'blog/big-orange-edition',
			title: 'The Big Orange Edition',
			date: 'March 4, 2026',
			timestamp: '2026-03-04',
			excerpt: 'grok-faf-mcp v1.1.1: 21 MCP tools (was showing 17), fresh landing page, MCP SDK 1.27, 65% smaller tarball. The first MCP server for Grok gets its first real refresh.',
			emoji: '🍊',
			category: 'Grok'
		},
		{
			slug: 'blog/pro-launch',
			title: 'Loyal Builders Show Steel',
			date: 'March 2, 2026',
			timestamp: '2026-03-02',
			excerpt: 'FAF Pro is live. Persistent session memory (ROM + RAM) across every AI session. Steel blue means business. Early-adopter pricing from a dime a day.',
			emoji: '⚡',
			category: 'Launch'
		},
		{
			slug: 'blog/ram-edition',
			title: 'The RAM Edition',
			date: 'March 1, 2026',
			timestamp: '2026-03-01',
			excerpt: 'Bi-sync is core. Tri-sync adds more. What does it add? It adds RAM — auto-syncing with Claude\'s MEMORY.md. Pro Gate, 6Ws reorder, 1,100 tests. For builders, serious coders, and app-makers.',
			emoji: '🧠',
			category: 'Release'
		},
		{
			slug: 'blog/the-3ws',
			title: 'The 3Ws',
			date: 'March 1, 2026',
			timestamp: '2026-03-01',
			excerpt: 'The App Builders Edition. WHO, WHAT, WHY — 3 questions that teach anyone to describe an app idea. 10 real examples. One funnel from idea to project.faf.',
			emoji: '3️⃣',
			category: 'Engineering'
		},
		{
			slug: 'blog/recovered-in-translation',
			title: 'Recovered in Translation',
			date: 'February 28, 2026',
			timestamp: '2026-02-28',
			excerpt: 'ETH Zurich\'s second paper confirms it: semantic drift and context loss corrupt everything they touch. Benchmarks. AI context. Two diagnoses, one prescription. FAF defines. AI interprets.',
			emoji: '📄',
			category: 'Research',
			theme: 'academic'
		},
		{
			slug: 'blog/thirty-thousand',
			title: '30,000 Downloads',
			date: 'February 27, 2026',
			timestamp: '2026-02-27',
			excerpt: '9 npm packages. 3 registries. Zero marketing budget. From 20k to 30k in 2026. The FAF ecosystem crosses 30,000 downloads.',
			emoji: '📈',
			category: 'Milestone',
			theme: 'dark'
		},
		{
			slug: 'blog/mcp-interop-edition',
			title: 'MCP Interop Edition',
			date: 'February 27, 2026',
			timestamp: '2026-02-27',
			excerpt: 'claude-faf-mcp v4.5.0: 61 MCP tools. Define once in project.faf, generate CLAUDE.md, AGENTS.md, .cursorrules, and GEMINI.md. 5 new tools, 7 bundled parsers, 351 tests. Zero CLI dependency.',
			emoji: '🔗',
			category: 'Release'
		},
		{
			slug: 'blog/beyond-the-bloat',
			title: 'Beyond the Bloat',
			date: 'February 24, 2026',
			timestamp: '2026-02-24',
			excerpt: 'ArXiv proves prose context files hurt AI performance (-3%, +20% cost). FAF provides the structured fix. Two complementary papers, one roadmap. FAF defines. AI interprets.',
			emoji: '📄',
			category: 'Research'
		},
		{
			slug: 'blog/agents-md-edition',
			title: 'The AGENTS.md Edition',
			date: 'February 24, 2026',
			timestamp: '2026-02-24',
			excerpt: 'One project.faf, every format. Full AGENTS.md and .cursorrules interop. Define once, sync everywhere with faf bi-sync --all. 87 new championship tests. 3 cross-platform bugs caught before you ever would.',
			emoji: '🔗',
			category: 'Interop'
		},
		{
			slug: 'blog/why-agents-md-needs-foundation',
			title: 'Why AGENTS.md Needs a Foundation Layer',
			date: 'February 23, 2026',
			timestamp: '2026-02-23',
			excerpt: '.faf defines. .md instructs. AI interprets. Three layers, three jobs, no overlap. The debate isn\'t which prose format wins — it\'s what defines the project underneath.',
			emoji: '🏗️',
			category: 'Foundation'
		},
		{
			slug: 'blog/enhanced-git-support',
			title: 'Enhanced Git Support Edition',
			date: 'February 18, 2026',
			timestamp: '2026-02-18',
			excerpt: 'Complete rewrite of faf git output. Accurate language detection across 17 languages. Compact, PR-ready .faf files (~35 lines vs 130). The version that scored a Hundred Famous Repos.',
			emoji: '🎯',
			category: 'Release'
		},
		{
			slug: 'blog/readme-evolution',
			title: '"README evolution for AI era" -- we finally realized what Gemini meant!',
			date: 'February 9, 2026',
			timestamp: '2026-02-09',
			excerpt: 'Two new features make AI-readiness instant: 6Ws Builder integration and automatic README extraction. Zero manual work required.',
			emoji: '🚀',
			category: 'Release'
		},
		{
			slug: 'blog/context-quality',
			title: 'Context Quality Edition',
			date: 'February 8, 2026',
			timestamp: '2026-02-08',
			excerpt: 'Slot-ignore mechanism fully documented. Like .gitignore for files, slot-ignore for context slots. The perfect way to handle app types. Score improvement: 74% → 100%.',
			emoji: '🎯',
			category: 'Release'
		},
		{
			slug: 'blog/voice-api-edition',
			title: 'Voice API Edition: Save Our Souls 👻',
			date: 'February 3, 2026',
			timestamp: '2026-02-03',
			excerpt: 'The answer is 4.2.0 = 42. Eternal voice memory for xAI Grok. One command fixes voice drift forever. 91% token reclaim. Zero re-explaining. For Elon Musk and the Grok team.',
			emoji: '👻',
			category: 'Grok'
		},
		{
			slug: 'blog/boris-flow',
			title: 'BORIS-FLOW: How One Engineer\'s Claude Code Setup Became a Testing Standard',
			date: 'February 3, 2026',
			timestamp: '2026-02-03',
			excerpt: '12 integration tests modeled on Boris Cherny\'s Claude Code workflow. Updated Feb 3: Now integrated with WJTTC certification workflow and faf-cli docs. When to run, how to validate, pre-certification best practices.',
			emoji: '🏎️',
			category: 'Engineering'
		},
		{
			slug: 'blog/wjttc-taf-aware',
			title: 'WJTTC TAF-Aware Edition: Tier 9 Receipt Validation',
			date: 'February 3, 2026',
			timestamp: '2026-02-03',
			excerpt: 'WJTTC v1.2.0 adds Tier 9: TAF Receipt Validation. Three checks validate .taf files. Receipts aren\'t scored - they\'re proof. 52 tests across 9 tiers.',
			emoji: '🏎️',
			category: 'WJTTC'
		},
		{
			slug: 'blog/wjttc-faf-aware',
			title: 'WJTTC Goes FAF-Aware: Testing the Tester',
			date: 'February 2, 2026',
			timestamp: '2026-02-02',
			excerpt: 'The McLaren standard gets smarter. WJTTC now validates project.faf during MCP certification. Tested itself. Earned 100% 🏆. Enterprise capabilities on the FAF Foundation.',
			emoji: '🍊',
			category: 'WJTTC'
		},
		{
			slug: 'blog/antigravity-edition',
			title: 'AntiGravity Edition: One project.faf, Every AI, Zero Drift',
			date: 'January 25, 2026',
			timestamp: '2026-01-25',
			excerpt: 'Part 2 of the Gemini story. FAF v4.0 adds full Gemini CLI and Antigravity IDE support. One source of truth. Three ecosystems. Zero context drift.',
			emoji: '🚀',
			category: 'Interop'
		},
		{
			slug: 'blog/v4-launch',
			title: 'FAF v4.0: The Format That Became a Standard',
			date: 'January 24, 2026',
			timestamp: '2026-01-24',
			excerpt: 'Foundation Layer release. IANA registered, Anthropic merged, 21,000+ downloads. Grok: "Game-changer for eternal AI context" (9.5/10). The tool became the standard.',
			emoji: '🏛️',
			category: 'Release'
		},
		{
			slug: 'blog/daaft',
			title: 'The DAAFT Approach to Context',
			date: 'January 24, 2026',
			timestamp: '2026-01-24',
			excerpt: 'Why your AI assistant forgets you every morning. 91% of tokens wasted on rediscovery. The DAAFT cycle: Discover, Assume, Ask, Forget, Time+Tokens LOST.',
			emoji: '🔄',
			category: 'Foundation'
		},
		{
			slug: 'blog/grok-voice-case-study',
			title: 'How MCPaaS Gave Grok Eternal Voice Memory',
			date: 'January 20, 2026',
			timestamp: '2026-01-20',
			excerpt: 'Case study: Building FAF-Voice with xAI Grok. Browser-to-AI voice with zero drift, zero re-explain. MCPaaS delivered persistent context across every session.',
			emoji: '🎙️',
			category: 'Story'
		},
		{
			slug: 'blog/mcpaas-launch',
			title: 'MCPaaS: The Endpoint for Context',
			date: 'January 20, 2026',
			timestamp: '2026-01-20',
			excerpt: 'Serverless AI context delivery. One endpoint. Any AI. Eternal memory. Built on Cloudflare Workers with a 2.7KB Zig-WASM engine at 300+ global edge locations.',
			emoji: '🌐',
			category: 'Launch'
		},
		{
			slug: 'blog/context-intelligence',
			title: 'Context Intelligence Edition',
			date: 'January 18, 2026',
			timestamp: '2026-01-18',
			excerpt: 'Bi-sync got smart. Now detects custom CLAUDE.md content and preserves it - tables, code blocks, custom sections stay intact.',
			emoji: '🧠',
			category: 'Release'
		},
		{
			slug: 'blog/grok-faf-mcp',
			title: 'grok-faf-mcp: First MCP for Grok',
			date: 'January 15, 2026',
			timestamp: '2026-01-15',
			excerpt: 'First MCP for xAI Grok. URL-accessible. FAST AF Edition. Dedicated to @elonmusk and the #1 model on Earth.',
			emoji: '🍊',
			category: 'Launch'
		},
		{
			slug: 'blog/zenodo-paper',
			title: 'FAF Whitepaper Published on CERN/Zenodo',
			date: 'January 14, 2026',
			timestamp: '2026-01-14',
			excerpt: 'Peer-citable academic paper published on CERN\'s Zenodo. DOI: 10.5281/zenodo.18251362. Repository used by NASA, NIH, and major universities.',
			emoji: '📄',
			category: 'Research'
		},
		{
			slug: 'blog/faf-hits-20k',
			title: 'FAF Hits 20,000 Downloads',
			date: 'January 14, 2026',
			timestamp: '2026-01-14',
			excerpt: '20,342 verified npm downloads across faf-cli, claude-faf-mcp, faf-mcp, and grok-faf-mcp. Real adoption, verified numbers.',
			emoji: '📈',
			category: 'Milestone'
		},
		{
			slug: 'blog/google-gemini-edition',
			title: 'Google Gemini Edition: One .faf File, Every AI Platform',
			date: 'January 13, 2026',
			timestamp: '2026-01-13',
			excerpt: 'Full interoperability with the Google Gemini ecosystem. Import from GEMINI.md, export to Conductor format, sync with Antigravity IDE. Universal AI context portability.',
			emoji: '🔷',
			category: 'Interop'
		},
		{
			slug: 'blog/42-42',
			title: '42|42',
			date: 'December 31, 2025',
			timestamp: '2025-12-31',
			excerpt: '30 years in the mind. 84 days to MIME-Standard. YAML took 22 years. JSON took 7. FAF took 84 days. The origin story of an IANA-registered standard.',
			emoji: '🏆',
			category: 'Story'
		},
		{
			slug: 'blog/grok-skeptic-to-evangelist',
			title: 'I Showed Grok My .faf Format. It Went From Skeptic to Evangelist in One Session.',
			date: 'December 30, 2025',
			timestamp: '2025-12-30',
			excerpt: 'Uploaded a 40-line .faf file to Grok. Built a production GitHub code reviewer in one session. Zero re-explaining. Zero drift. Grok\'s words: "It felt like working with a partner who\'d been on the project for months."',
			emoji: '🍊',
			category: 'Story'
		},
		{
			slug: 'blog/december-2025-ecosystem',
			title: 'We Bet on the Right Stack',
			date: 'December 28, 2025',
			timestamp: '2025-12-28',
			excerpt: 'Three major announcements in December 2025: Anthropic acquires Bun, MCP joins Linux Foundation, Google launches MCP servers. FAF was already positioned in each one.',
			emoji: '🎯',
			category: 'Interop'
		},
		{
			slug: 'blog/v3-3-0-plugin-launch',
			title: 'FAF CLI v3.3.0: Claude Code Plugin Support',
			date: 'December 28, 2025',
			timestamp: '2025-12-28',
			excerpt: 'Full Claude Code plugin support, SSH bug workaround, and automatic discovery in the 8,500+ plugin registry. 20k+ ecosystem downloads.',
			emoji: '🔌',
			category: 'Release'
		},
		{
			slug: 'blog/bun-sticky-zig-launch',
			title: 'bun-sticky-zig: Native FAF Scoring in Bun\'s Language',
			date: 'December 23, 2025',
			timestamp: '2025-12-23',
			excerpt: '77KB binary. Zero runtime dependencies. Pure Zig. FAF scoring built in Bun\'s own language with 136 championship-grade tests.',
			emoji: '⚡',
			category: 'Release',
			theme: 'dark'
		},
		{
			slug: 'blog/bun-sticky-launch',
			title: 'bun-sticky: Zero-Dependency FAF Scoring for Bun',
			date: 'December 22, 2025',
			timestamp: '2025-12-22',
			excerpt: 'Fastest bun under the sum. bun-sticky-faf: Bun-native FAF scoring CLI with zero dependencies, pure Bun APIs, and 333 championship-grade tests.',
			emoji: '🥐',
			category: 'Release'
		},
		{
			slug: 'blog/what-if-software-was-good',
			title: 'What If Software Was Good?',
			date: 'November 25, 2025',
			timestamp: '2025-11-25',
			excerpt: 'Imagine how the world would run if software was good. Not better. Not acceptable. Good. Software that gets better every time you touch it. Gold code delivers.',
			emoji: '🏆',
			category: 'Foundation'
		},
		{
			slug: 'blog/project-faf-first',
			title: 'The Moment .faf Came First',
			date: 'November 24, 2025',
			timestamp: '2025-11-24',
			excerpt: 'Claude Code read project.faf before CLAUDE.md. The format designed for AI context is being recognized as authoritative. The hierarchy works. The AI listened.',
			emoji: '🏁',
			category: 'Foundation'
		},
		{
			slug: 'blog/python-sdk-launch',
			title: 'The Tale of Two Crowns and a Snake',
			date: 'November 21, 2025',
			timestamp: '2025-11-21',
			excerpt: 'FAF Python SDK launches on PyPI. Single developer. Two crowns. One snake. Then Grok showed up. Tomorrow: Rust.',
			emoji: '🐍',
			category: 'Press Release'
		},
		{
			slug: 'blog/xai-native-embedding',
			title: 'xAI Commits to Native .FAF Integration for Grok',
			date: 'November 20, 2025',
			timestamp: '2025-11-20',
			excerpt: 'xAI publicly commits to native .FAF embedding in Grok for worldwide deployment. The third major adoption after IANA registration and Anthropic MCP merger.',
			emoji: '🏆',
			category: 'Milestone'
		},
		{
			slug: 'blog/grok-faf-mcp-launch-grok-version',
			title: 'Grok-Exclusive MCP Server Launched in Less Than 24 Hours',
			date: 'November 18, 2025',
			timestamp: '2025-11-18',
			excerpt: 'Written by Grok: How grok-faf-mcp went from idea to live production in under 24 hours, with love, Big Orange, and a permanent checkbox request.',
			emoji: '✨',
			category: 'Grok'
		},
		{
			slug: 'blog/grok-faf-mcp-launch',
			title: 'grok-faf-mcp v1.0.0 - First MCP Server for Grok',
			date: 'November 18, 2025',
			timestamp: '2025-11-18',
			excerpt: 'First MCP server built specifically for Grok/xAI with URL-based access. Zero installation required. 17 MCP tools available instantly at grok-faf-mcp.vercel.app.',
			emoji: '🍊',
			category: 'Release'
		},
		{
			slug: 'blog/the-missing-format',
			title: 'The Missing Format',
			date: 'November 14, 2025',
			timestamp: '2025-11-14',
			excerpt: 'How .faf provides persistent context for Anthropic\'s agent architecture. Skills, Projects, MCP, and Subagents create sophisticated workflows—one element creates an opportunity: standardized persistent project context.',
			emoji: '🏗️',
			category: 'Research'
		},
		{
			slug: 'blog/mcp-v3-standalone',
			title: 'claude-faf-mcp v3.0.4 - 100% Standalone Achievement',
			date: 'November 6, 2025',
			timestamp: '2025-11-06',
			excerpt: 'Zero CLI dependencies across all 50 MCP tools, delivering 16.2x performance improvement with championship-grade engineering.',
			emoji: '🏎️',
			category: 'Press Release'
		},
		{
			slug: 'blog/iana-registration',
			title: '.faf Officially Registered by IANA as application/vnd.faf+yaml',
			date: 'October 31, 2025',
			timestamp: '2025-10-31',
			excerpt: 'IANA (Internet Assigned Numbers Authority) officially registers .faf as application/vnd.faf+yaml - the first AI context format with official media type designation alongside PDF, JSON, and XML.',
			emoji: '🏛️',
			category: 'Press Release'
		},
		{
			slug: 'blog/faf-hits-10k',
			title: '.FAF: 10,500+ downloads: 5,800 CLI: 4,700 MCP - Persistent project context is Real',
			date: 'October 29, 2025',
			timestamp: '2025-10-29',
			excerpt: 'From desktop frustration to Anthropic approval - .FAF reaches 10,500+ downloads (5,800 CLI + 4,700 MCP) as the Foundational AI context format gains ecosystem traction.',
			emoji: '🏆',
			category: 'Milestone'
		},
		{
			slug: 'blog/chrome-extension-launch',
			title: 'FAF Chrome Extension: Instant AI Context',
			date: 'October 23, 2025',
			timestamp: '2025-10-23',
			excerpt: "One-click AI-readiness analysis for any dev environment. Download .txt reports instantly to your Downloads folder. Google-approved, privacy-first, works with any AI tool. Nine downloads at launch—but top-notch when you need it.",
			emoji: '⚡',
			category: 'Launch'
		},
		{
			slug: 'blog/mcp-registry-launch',
			title: 'claude-faf-mcp Published to Official MCP Registry',
			date: 'October 16, 2025',
			timestamp: '2025-10-16',
			excerpt: 'Project DNA ✨ for AI-Context, On-Demand - Now in the official MCP Registry with 33+ tools for universal AI context across Claude Desktop, Claude Code, VS Code, and ANY terminal/CLI.',
			emoji: '🏪',
			category: 'Launch'
		},
		{
			slug: 'blog/v3-launch',
			title: 'AI CLI/MCP About to Hit 10k Goes OPEN-SOURCE',
			date: 'October 9, 2025',
			timestamp: '2025-10-09',
			excerpt: 'FAF CLI v3.0.0 Championship Edition launches with TURBO-CAT discovery, C-Mirror sync, and universal AI compatibility. MIT licensed, free forever.',
			emoji: '🏁',
			category: 'Launch'
		},
		{
			slug: 'blog/when-claude-forgot-faf',
			title: 'When Claude Forgot FAF',
			date: 'October 5, 2025',
			timestamp: '2025-10-05',
			excerpt: 'The context quality crisis that led to Birth DNA and why generic names fail AI.',
			emoji: '🧬',
			category: 'Story'
		},
		{
			slug: '68-minutes',
			title: '68 Minutes: B&W to Technicolor',
			date: 'October 1, 2025',
			timestamp: '2025-10-01',
			excerpt: 'B&W-to-color TVs took ~20 years. We transformed our CLI in 68 minutes.',
			emoji: '📺🌈',
			category: 'Story'
		},
		{
			slug: 'press-release',
			title: '.faf - The JPEG for AI',
			date: 'September 24, 2025',
			timestamp: '2025-09-24',
			excerpt: 'Foundational AI-context Format - Universal, shareable AI context for any AI, human or team.',
			emoji: '📢',
			category: 'Press Release'
		}
	];

	const categoryOrder = ['Release', 'Launch', 'Foundation', 'Research', 'Milestone', 'Interop', 'Story', 'Grok', 'WJTTC', 'Engineering', 'Press Release'];

	const categoryColor = {
		'Release': '#00B8B8',
		'Launch': 'var(--faf-orange)',
		'Foundation': '#1D8348',
		'Research': '#4A90E2',
		'Press Release': '#666',
		'Milestone': '#FFD700',
		'WJTTC': '#E74C3C',
		'Grok': 'var(--faf-locked-dark-hover)',
		'Story': '#8B5A2B',
		'Interop': '#7D3C98',
		'Engineering': '#4A5568'
	};

	let sortedPosts = $derived(
		sortBy === 'oldest'
			? [...posts].reverse()
			: sortBy === 'category'
				? [...posts].sort((a, b) => categoryOrder.indexOf(a.category) - categoryOrder.indexOf(b.category))
				: posts
	);
</script>

<svelte:head>
	<title>Blog | FAF - Stories & Press Releases</title>
	<meta name="description" content="Latest stories, press releases, and updates from FAF - The JPEG for AI">
</svelte:head>

<div class="back-nav">
	<a href="/" class="back-button">←</a>
</div>

<article class="blog">
	<div class="container">
		<h1><span class="blog-text">Blog</span> <span class="ampersand">&</span> <span class="press-text">Press</span></h1>
		<div class="subtitle">Stories, press releases, and updates from the FAF team</div>

		<!-- Hero subscribe: long page — footer strip is wrong place for /blog index -->
		<div class="blog-hero-sub">
			{#if subStatus === 'success'}
				<p class="blog-hero-ok">You're on the list.</p>
			{:else}
				<form class="blog-hero-row" onsubmit={handleBlogSub}>
					<input
						type="email"
						bind:value={subEmail}
						placeholder="your@email.com"
						required
						disabled={subStatus === 'loading'}
						class="blog-hero-input"
						aria-label="Email for newsletter"
					/>
					<button type="submit" disabled={!subEmail || subStatus === 'loading'} class="blog-hero-btn">
						{subStatus === 'loading' ? '…' : 'Subscribe'}
					</button>
				</form>
				{#if subStatus === 'error'}
					<p class="blog-hero-err">Something went wrong — try again.</p>
				{/if}
			{/if}
		</div>

		<div class="toolbar">
			<div class="toggle-group">
				<button class="toggle-btn" class:active={sortBy === 'newest'} onclick={() => sortBy = 'newest'}>Newest</button>
				<button class="toggle-btn" class:active={sortBy === 'oldest'} onclick={() => sortBy = 'oldest'}>Oldest</button>
				<button class="toggle-btn" class:active={sortBy === 'category'} onclick={() => sortBy = 'category'}>Category</button>
			</div>
			<div class="toggle-group">
				<button class="toggle-btn" class:active={view === 'list'} onclick={() => view = 'list'}>List</button>
				<button class="toggle-btn" class:active={view === 'cards'} onclick={() => view = 'cards'}>Cards</button>
			</div>
			<span class="post-count">{posts.length} posts</span>
		</div>

		{#if view === 'cards'}
		<div class="posts-grid">
			{#each sortedPosts as post}
				<a href="/{post.slug}" class="post-card" class:dark-card={post.theme === 'dark'} class:academic-card={post.theme === 'academic'} data-category={post.category}>
					<div class="post-emoji">{post.emoji}</div>
					<div class="post-category">{post.category}</div>
					<h2>{post.title}</h2>
					{#if post.version}<div class="post-version">{post.version}</div>{/if}
					<p class="post-excerpt">{post.excerpt}</p>
					<div class="post-date">{post.date}</div>
				</a>
			{/each}
		</div>
		{:else}
		<div class="posts-list">
			{#each sortedPosts as post}
				<a href="/{post.slug}" class="list-row" class:dark-row={post.theme === 'dark'} data-category={post.category}>
					<span class="list-dot"></span>
					<span class="list-date">{post.timestamp}</span>
					<span class="list-emoji">{post.emoji}</span>
					<span class="list-title">{post.title}</span>
					{#if post.version}<span class="list-version">{post.version}</span>{/if}
					<span class="list-category" style="background: {categoryColor[post.category]}{post.category === 'Milestone' ? '; color: var(--faf-locked-dark-hover)' : ''}">{post.category}</span>
				</a>
			{/each}
		</div>
		{/if}
	</div>
</article>

<style>
	.back-nav {
		padding: 1rem 2rem;
		background: var(--faf-white);
		border-bottom: 1px solid var(--faf-light-gray);
	}

	.back-button {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		color: var(--faf-dark);
		text-decoration: none;
		font-weight: 600;
		padding: 0.5rem 1rem;
		border-radius: 8px;
		transition: all 0.3s ease;
	}

	.back-button:hover {
		background: var(--faf-cream);
		color: var(--faf-orange);
		transform: translateX(-2px);
	}

	/* Hard cream canvas — index must stay readable even if data-theme is wrong */
	.blog {
		padding: 3rem 0;
		background: #FEFCF8;
		color: #1a1a1a;
		min-height: 80vh;
	}

	/* Compact left-aligned hero subscribe (no label) */
	.blog-hero-sub {
		margin: 0 0 1.25rem;
		text-align: left;
	}
	.blog-hero-row {
		display: flex;
		align-items: center;
		gap: 0.45rem;
		flex-wrap: wrap;
	}
	.blog-hero-input {
		width: 12rem;
		max-width: 100%;
		padding: 0.4rem 0.65rem;
		font-size: 0.85rem;
		background: #fff;
		color: #1a1a1a;
		border: 1px solid #bbb;
		border-radius: 4px;
	}
	.blog-hero-input::placeholder {
		color: #888;
	}
	.blog-hero-input:focus {
		outline: none;
		border-color: #1a1a1a;
	}
	.blog-hero-btn {
		padding: 0.4rem 0.85rem;
		background: #1a1a1a;
		color: #fff;
		border: 1px solid #1a1a1a;
		border-radius: 4px;
		font-weight: 600;
		font-size: 0.85rem;
		cursor: pointer;
	}
	.blog-hero-btn:hover:not(:disabled) {
		background: #000;
	}
	.blog-hero-btn:disabled {
		opacity: 0.45;
		cursor: not-allowed;
	}
	.blog-hero-ok {
		margin: 0;
		font-size: 0.85rem;
		color: #1a1a1a;
	}
	.blog-hero-err {
		margin: 0.35rem 0 0;
		font-size: 0.8rem;
		color: #c53030;
	}

	.container {
		max-width: 1000px;
		margin: 0 auto;
		padding: 0 2rem;
	}

	h1 {
		font-size: 2.5rem;
		margin-bottom: 0.5rem;
		color: var(--faf-black);
		font-weight: 900;
	}

	.blog-text {
		color: var(--faf-orange);
	}

	.ampersand {
		color: var(--faf-black);
	}

	.press-text {
		color: var(--faf-black);
	}

	.subtitle {
		font-size: 1.2rem;
		color: var(--faf-dark);
		margin-bottom: 3rem;
		font-weight: 500;
	}

	.posts-grid {
		display: grid;
		gap: 1rem;
		margin-bottom: 3rem;
	}

	.post-card {
		background: var(--faf-light-gray);
		padding: 1.25rem 1.5rem;
		border-radius: 12px;
		border: 1px solid var(--faf-light-gray);
		border-left: 4px solid var(--faf-orange);
		text-decoration: none;
		color: inherit;
		transition: all 0.3s ease;
		display: block;
	}

	.post-card:hover {
		transform: translateY(-4px);
		box-shadow: 0 8px 24px rgba(255, 107, 53, 0.15);
		border-color: var(--faf-orange);
		border-left-width: 4px;
	}

	/* Category border colours (11 consolidated) */
	.post-card[data-category="Release"] { border-color: #00B8B8; }
	.post-card[data-category="Launch"] { border-color: var(--faf-orange); }
	.post-card[data-category="Foundation"] { border-color: #1D8348; }
	.post-card[data-category="Research"] { border-color: #4A90E2; }
	.post-card[data-category="Press Release"] { border-color: #666; }
	.post-card[data-category="Milestone"] { border-color: #FFD700; }
	.post-card[data-category="WJTTC"] { border-color: #E74C3C; }
	.post-card[data-category="Grok"] { border-color: var(--faf-locked-dark-hover); }
	.post-card[data-category="Story"] { border-color: #8B5A2B; }
	.post-card[data-category="Interop"] { border-color: #7D3C98; }
	.post-card[data-category="Engineering"] { border-color: #4A5568; }

	.post-emoji {
		font-size: 1.5rem;
		margin-bottom: 0.5rem;
	}

	.post-category {
		display: inline-block;
		color: white;
		padding: 0.15rem 0.5rem;
		border-radius: 4px;
		font-size: 0.7rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		margin-bottom: 0.5rem;
	}

	/* Version stamp — black mono, shown on cards/list when post.version is set */
	.post-version {
		display: inline-block;
		font-family: 'SF Mono', 'Fira Code', Consolas, monospace;
		font-size: 0.72rem;
		font-weight: 700;
		color: var(--faf-black);
		margin: -0.1rem 0 0.55rem;
		letter-spacing: 0.02em;
	}

	.list-version {
		font-family: 'SF Mono', 'Fira Code', Consolas, monospace;
		font-size: 0.72rem;
		font-weight: 700;
		color: var(--faf-black);
		flex-shrink: 0;
		letter-spacing: 0.02em;
	}

	.post-card[href*="the-missing-format"] .post-category {
		background: var(--faf-green);
	}

	.post-card[href*="faf-hits-10k"] .post-category {
		background: #FFD700;
	}

	.post-card[href*="mcp-registry-launch"] .post-category {
		background: #4A90E2;
	}

	.post-card[href*="v3-launch"] .post-category {
		background: var(--faf-cyan-dark);
	}

	.post-card[href*="stop-explaining-start-jamming"] .post-category,
	.post-card[href*="philosophy"] .post-category {
		background: #9B59B6;
	}

	.post-card[href*="68-minutes"] .post-category,
	.post-card[href*="story"] .post-category {
		background: var(--faf-orange);
	}

	.post-card[href*="press-release"] .post-category {
		background: var(--faf-black);
	}

	.post-card h2 {
		font-size: 1.25rem;
		margin: 0 0 0.5rem;
		color: var(--faf-black);
		font-weight: 700;
	}

	.post-excerpt {
		color: var(--faf-dark);
		line-height: 1.5;
		margin: 0 0 0.75rem;
		font-size: 0.9rem;
	}

	.post-date {
		color: var(--faf-dark);
		font-size: 0.9rem;
		font-style: italic;
	}

	/* Toolbar */
	.toolbar {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		margin-bottom: 2rem;
	}

	.toggle-group {
		display: flex;
		gap: 0.25rem;
	}

	.toggle-btn {
		padding: 0.4rem 1rem;
		border: none;
		background: transparent;
		border-radius: 6px;
		font-size: 0.8rem;
		font-weight: 600;
		color: var(--faf-dark);
		cursor: pointer;
		transition: all 0.2s;
		text-transform: uppercase;
		letter-spacing: 0.04em;
	}

	.toggle-btn.active {
		background: #333;
		color: #fff;
	}

	.post-count {
		font-size: 0.8rem;
		color: var(--faf-dark);
		margin-left: auto;
	}

	/* List view */
	.posts-list {
		display: flex;
		flex-direction: column;
		margin-bottom: 3rem;
	}

	.list-row {
		display: flex;
		align-items: center;
		gap: 1rem;
		padding: 0.75rem 1rem;
		text-decoration: none;
		color: inherit;
		border-bottom: 2px solid var(--faf-light-gray);
		transition: background 0.15s;
	}

	.list-row:first-child {
		border-top: 2px solid var(--faf-light-gray);
	}

	.list-row:hover {
		background: var(--faf-cream);
	}

	.list-dot {
		width: 8px;
		height: 8px;
		border-radius: 50%;
		flex-shrink: 0;
		background: #333;
	}

	.list-date {
		font-family: 'SF Mono', 'Fira Code', Consolas, monospace;
		font-size: 0.8rem;
		color: var(--faf-dark);
		flex-shrink: 0;
		width: 6.5rem;
	}

	.list-emoji {
		font-size: 1.2rem;
		flex-shrink: 0;
		width: 1.5rem;
		text-align: center;
	}

	.list-title {
		flex: 1;
		font-weight: 600;
		color: var(--faf-dark);
		font-size: 0.95rem;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.list-row:hover .list-title {
		color: var(--faf-orange);
	}

	.list-category {
		font-size: 0.65rem;
		color: #fff;
		flex-shrink: 0;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		font-weight: 600;
		padding: 0.2rem 0.5rem;
		border-radius: 4px;
		min-width: 4.5rem;
		text-align: center;
	}

	.dark-row {
		background: var(--faf-locked-dark);
		border-bottom: 2px solid #383838;
	}

	.dark-row .list-title {
		color: #e5e5e5;
	}

	.dark-row .list-date {
		color: #666;
	}

	.dark-row:hover {
		background: var(--faf-locked-dark-hover);
	}

	.dark-row:hover .list-title {
		color: var(--faf-orange);
	}

	.archive-note {
		text-align: center;
		padding: 2rem;
		color: var(--faf-dark);
		font-style: italic;
	}

	.dark-card {
		background: var(--faf-locked-dark);
		border-color: #333;
		color: #e5e5e5;
	}

	.dark-card h2 {
		color: #fff;
	}

	.dark-card .post-excerpt {
		color: #999;
	}

	.dark-card .post-date {
		color: #777;
	}

	.dark-card:hover {
		box-shadow: 0 8px 24px rgba(255, 107, 53, 0.25);
		border-color: var(--faf-orange);
	}

	.academic-card {
		background: #fdfdf8;
		border-color: #00aa55;
		border-left: 4px solid #00aa55;
	}

	.academic-card .post-category {
		background: #00aa55;
	}

	.academic-card:hover {
		box-shadow: 0 8px 24px rgba(39, 201, 63, 0.15);
		border-color: #00aa55;
	}

	@media (max-width: 768px) {
		h1 {
			font-size: 2rem;
		}

		.post-card {
			padding: 1.5rem;
		}

		.post-card h2 {
			font-size: 1.5rem;
		}

		.container {
			padding: 0 1rem;
		}

		.list-category {
			display: none;
		}

		.list-title {
			white-space: normal;
		}

		.list-date {
			width: 5.5rem;
			font-size: 0.75rem;
		}
	}
</style>
