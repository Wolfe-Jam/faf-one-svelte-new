<script lang="ts">
	// Static reference page — content is verifiable against the linked artifacts.
</script>

<svelte:head>
	<title>FAF and the AI Catalog specification — a timeline | FAF</title>
	<meta
		name="description"
		content="Design decisions FAF made, and the dates they were merged into the AI Catalog specification. Every date links to a verifiable artifact."
	/>
	<meta property="og:title" content="FAF and the AI Catalog specification — a timeline" />
	<meta
		property="og:description"
		content="Design decisions and dates, each linked to a verifiable artifact."
	/>
	<meta property="og:type" content="article" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="proof-page">
	<header class="proof-header">
		<p class="archive-banner">
			Reference page. Canonical format authority: <a href="/spec">Spec</a>
			· <a href="/context">Context layer</a>
			· <a href="/mcp">MCP</a>
		</p>
		<div class="breadcrumb">
			<a href="/">Home</a> / AI Catalog
		</div>
		<h1>FAF and the AI Catalog specification</h1>
		<p class="lead">
			The <a href="https://ai-catalog.io/" target="_blank" rel="noopener">AI Catalog</a> is a
			cross-protocol specification (pre-release) for making AI artifacts discoverable — a typed, nestable JSON
			container where each entry declares its type by media type. FAF publishes into it. This page
			records the design decisions FAF made, and the dates they were merged into the specification. Every
			date links to something you can check.
		</p>
		<div class="meta">
			<time datetime="2026-10-06">Updated 6 October 2026</time>
		</div>
	</header>

	<article class="proof-content">
		<section>
			<h2>Registrations</h2>
			<p>FAF holds IANA-registered media types for its three formats.</p>
			<table>
				<thead>
					<tr>
						<th>Format</th>
						<th>Media type</th>
						<th>Role</th>
						<th>Registered</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td><code>.faf</code></td>
						<td>
							<a
								href="https://www.iana.org/assignments/media-types/application/vnd.faf+yaml"
								target="_blank"
								rel="noopener">application/vnd.faf+yaml</a
							>
						</td>
						<td>Context</td>
						<td>2025-10-30</td>
					</tr>
					<tr>
						<td><code>.fafm</code></td>
						<td>
							<a
								href="https://www.iana.org/assignments/media-types/application/vnd.fafm+yaml"
								target="_blank"
								rel="noopener">application/vnd.fafm+yaml</a
							>
						</td>
						<td>Memory</td>
						<td>2026-05-13</td>
					</tr>
					<tr>
						<td><code>.fafa</code></td>
						<td>
							<a
								href="https://www.iana.org/assignments/media-types/application/vnd.fafa+yaml"
								target="_blank"
								rel="noopener">application/vnd.fafa+yaml</a
							>
						</td>
						<td>Agent</td>
						<td>2026-06-26</td>
					</tr>
				</tbody>
			</table>
			<p class="note">
				<code>claude-faf-mcp</code> is listed in the Model Context Protocol server registry
				(<a
					href="https://github.com/modelcontextprotocol/servers/pull/2759"
					target="_blank"
					rel="noopener">PR #2759</a
				>, merged 2025-10-17) and uses <code>application/vnd.faf+yaml</code> as its context type.
			</p>
		</section>

		<section>
			<h2>Design decisions and the specification</h2>
			<p>
				Each row: the design choice FAF shipped, and the AI Catalog specification change that
				matches it. Where the FAF date is earlier, the deployment predated the rule.
			</p>
			<div class="table-scroll">
				<table>
					<thead>
						<tr>
							<th>Decision</th>
							<th>FAF</th>
							<th>Specification</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Media type as the artifact identifier</td>
							<td><code>vnd.faf+yaml</code> registered <strong>2025-10-30</strong></td>
							<td>
								<code>type</code> field + known-types list —
								<a
									href="https://github.com/Agent-Card/ai-catalog/pull/37"
									target="_blank"
									rel="noopener">PR #37</a
								>, merged <strong>2026-06-25</strong>
							</td>
						</tr>
						<tr>
							<td>Conformant catalog at <code>/.well-known/ai-catalog.json</code></td>
							<td>
								<a href="/.well-known/ai-catalog.json">published</a>
								<strong>2026-06-19</strong>
							</td>
							<td>the discovery mechanism the specification recommends</td>
						</tr>
						<tr>
							<td>
								<code>extensions</code> namespace map, not a nested <code>metadata</code> object
							</td>
							<td>re-conformed <strong>2026-09-13</strong></td>
							<td>
								ADR-0017 /
								<a
									href="https://github.com/Agent-Card/ai-catalog/pull/77"
									target="_blank"
									rel="noopener">PR #77</a
								>, merged <strong>2026-07-30</strong>
							</td>
						</tr>
						<tr>
							<td>
								Trust-manifest identity as <code>https://&lt;domain&gt;</code>, on
								<code>urn:air</code> identifiers
							</td>
							<td>deployed <strong>2026-08-24</strong></td>
							<td>
								<code>identity</code> is any URI; signed manifests verify only
								<code>did:web</code> —
								<a
									href="https://github.com/Agent-Card/ai-catalog/pull/110"
									target="_blank"
									rel="noopener">PR #110</a
								>, merged <strong>2026-10-01</strong>
							</td>
						</tr>
						<tr>
							<td>
								MCP Server Card at <code>&lt;streamable-http-url&gt;/server-card</code>, listed as
								an <code>application/mcp-server-card+json</code> entry
							</td>
							<td>
								<a href="https://context.faf.one/mcp/server-card">listed</a>
								<strong>2026-06-19</strong>
							</td>
							<td>
								<a
									href="https://github.com/modelcontextprotocol/modelcontextprotocol/pull/2127"
									target="_blank"
									rel="noopener">SEP-2127</a
								>, merged as Final <strong>2026-10-06</strong>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
			<p class="note">
				On the last row: FAF's catalog has used <code>https://faf.one</code> as the trust-manifest
				identity since the 2026-08-24 build-out, on <code>urn:air:faf.one:&hellip;</code>
				identifiers. The earlier alignment proposal (PR #107) closed unmerged. Of the four
				trust-layer changes merged on 2026-10-01 (PRs
				<a href="https://github.com/Agent-Card/ai-catalog/pull/105" target="_blank" rel="noopener">#105</a>,
				<a href="https://github.com/Agent-Card/ai-catalog/pull/108" target="_blank" rel="noopener">#108</a>,
				<a href="https://github.com/Agent-Card/ai-catalog/pull/109" target="_blank" rel="noopener">#109</a>,
				<a href="https://github.com/Agent-Card/ai-catalog/pull/110" target="_blank" rel="noopener">#110</a>),
				#110 defines signature verification for <code>did:web</code> identities only. FAF's
				manifests are unsigned, carry provenance, and remain valid; a signed version would use
				<code>did:web:faf.one</code>. Verified against the live endpoint.
			</p>
		</section>

		<section>
			<h2>Contribution to the specification</h2>
			<p>
				<a
					href="https://github.com/Agent-Card/ai-catalog/pull/56"
					target="_blank"
					rel="noopener">PR #56</a
				>
				&mdash; <em>make <code>displayName</code> optional in the CatalogEntry CDDL, aligning it with
				ADR-0016</em>. Opened and merged <strong>2026-06-30</strong>. The same change was mirrored
				downstream into the MCP Server Card schema
				(<a
					href="https://github.com/modelcontextprotocol/experimental-ext-server-card/pull/14"
					target="_blank"
					rel="noopener">ext-server-card #14</a
				>).
			</p>
		</section>

		<section>
			<h2>Agentic Resource Discovery</h2>
			<p>
				<a href="https://github.com/ards-project/ard-spec" target="_blank" rel="noopener">ARD</a>
				v0.91 (status: Proposal) discovers entries at <code>/.well-known/ard.json</code>. Its
				predecessor used the AI Catalog path, <code>/.well-known/ai-catalog.json</code>. FAF serves
				one document for both: on faf.one and mcpaas.live, <code>ard.json</code> redirects to the AI
				Catalog.
			</p>
			<div class="table-scroll">
				<table>
					<thead>
						<tr>
							<th>Decision</th>
							<th>FAF</th>
							<th>ARD v0.91</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td><code>/.well-known/ard.json</code> redirects (301) to the AI Catalog</td>
							<td>deployed <strong>2026-09-15</strong></td>
							<td>§5.1: consumers MUST fetch <code>ard.json</code></td>
						</tr>
						<tr>
							<td>
								<code>displayName</code> on every MCP Server Card entry, set to the card's own title
							</td>
							<td>deployed <strong>2026-09-15</strong></td>
							<td>§4.2: <code>displayName</code> is required</td>
						</tr>
					</tbody>
				</table>
			</div>
			<p class="note">
				ARD requires <code>displayName</code>. The AI Catalog makes it optional (PR #56 above) and
				says it SHOULD be omitted when the artifact names itself, as a Server Card does with its
				<code>title</code>. FAF keeps it on the MCP entry for ARD, a deliberate departure from that
				SHOULD; the A2A entry omits it. ARD's own conformance tester reports PASS for faf.one and mcpaas.live.
			</p>
		</section>

		<section>
			<h2>Verify</h2>
			<ul class="verify-list">
				<li>
					<code>curl https://faf.one/.well-known/ai-catalog.json</code> &mdash; 8 entries,
					<code>.faf</code>/<code>.fafm</code>/<code>.fafa</code> plus an MCP Server Card, an A2A
					Agent Card, and a nested sub-catalog
				</li>
				<li>
					<code>curl https://mcpaas.live/.well-known/ai-catalog.json</code> &mdash; three MCP
					Server Cards, Ed25519-signed (public key at
					<code>mcpaas.live/.well-known/jwks.json</code>)
				</li>
				<li>
					<code>curl -I https://faf.one/.well-known/ard.json</code> &mdash; 301 to
					<code>/.well-known/ai-catalog.json</code> (the same on mcpaas.live)
				</li>
				<li>
					ARD:
					<a
						href="https://github.com/ards-project/ard-spec/tree/main/conformance"
						target="_blank"
						rel="noopener">conformance-test</a
					>
					<code>publisher faf.one</code> and <code>publisher mcpaas.live</code> &mdash; PASS
				</li>
				<li>
					IANA:
					<a
						href="https://www.iana.org/assignments/media-types/application/vnd.faf+yaml"
						target="_blank"
						rel="noopener">vnd.faf+yaml</a
					>
					·
					<a
						href="https://www.iana.org/assignments/media-types/application/vnd.fafm+yaml"
						target="_blank"
						rel="noopener">vnd.fafm+yaml</a
					>
					·
					<a
						href="https://www.iana.org/assignments/media-types/application/vnd.fafa+yaml"
						target="_blank"
						rel="noopener">vnd.fafa+yaml</a
					>
				</li>
				<li>
					Specification: <a href="https://ai-catalog.io/" target="_blank" rel="noopener"
						>ai-catalog.io</a
					>
					·
					<a href="https://github.com/Agent-Card/ai-catalog" target="_blank" rel="noopener"
						>Agent-Card/ai-catalog</a
					>
				</li>
			</ul>
		</section>

		<footer class="proof-footer">
			<p>Updated 15 September 2026. Every claim on this page links to a public artifact.</p>
			<p>Format authority and canonical wording: <a href="/spec">the Spec page</a>.</p>
		</footer>
	</article>
</div>

<style>
	.proof-page {
		max-width: 820px;
		margin: 0 auto;
		padding: 2rem 1.5rem;
	}

	.proof-header {
		margin-bottom: 2.5rem;
		border-bottom: 3px solid var(--faf-orange);
		padding-bottom: 1.75rem;
	}

	.archive-banner {
		font-size: 0.9rem;
		color: var(--faf-dark);
		background: var(--faf-cream);
		border: 1px solid var(--faf-light-gray);
		border-left: 4px solid var(--faf-orange);
		border-radius: 8px;
		padding: 0.85rem 1rem;
		margin: 0 0 1.25rem;
		line-height: 1.5;
	}

	.archive-banner a {
		color: var(--faf-orange);
		font-weight: 600;
		text-decoration: none;
	}

	.breadcrumb {
		font-size: 0.9rem;
		margin-bottom: 1rem;
		color: var(--faf-dark);
	}

	.breadcrumb a {
		color: var(--faf-orange);
		text-decoration: none;
	}

	.breadcrumb a:hover {
		text-decoration: underline;
	}

	h1 {
		font-size: 2.3rem;
		margin: 0 0 1rem;
		color: var(--faf-black);
		line-height: 1.25;
		font-weight: 800;
	}

	.lead {
		font-size: 1.05rem;
		line-height: 1.7;
		color: var(--faf-dark);
		margin: 0 0 1.25rem;
	}

	.lead a {
		color: var(--faf-cyan-text);
		font-weight: 600;
	}

	.meta {
		font-size: 0.9rem;
		color: var(--faf-dark);
	}

	.proof-content {
		color: var(--faf-dark);
		line-height: 1.7;
	}

	/* override the global `section { padding: var(--space-2xl) 0 }` — too large here */
	.proof-content section {
		padding: 0;
		margin-bottom: 2.5rem;
	}

	h2 {
		font-size: 1.5rem;
		margin: 0 0 1rem;
		color: var(--faf-black);
		font-weight: 800;
		border-bottom: 2px solid var(--faf-light-gray);
		padding-bottom: 0.4rem;
	}

	.proof-content p {
		margin: 0 0 1rem;
	}

	.proof-content a {
		color: var(--faf-cyan-text);
		font-weight: 600;
	}

	.table-scroll {
		overflow-x: auto;
	}

	table {
		width: 100%;
		border-collapse: collapse;
		margin: 1rem 0;
		font-size: 0.95rem;
	}

	th {
		text-align: left;
		padding: 0.5rem 0.75rem;
		font-weight: 700;
		color: var(--faf-black);
		border-bottom: 2px solid var(--faf-orange);
	}

	td {
		padding: 0.65rem 0.75rem;
		border-bottom: 1px solid var(--faf-light-gray);
		vertical-align: top;
	}

	tbody tr:last-child td {
		border-bottom: none;
	}

	.note {
		font-size: 0.9rem;
		color: var(--faf-dark);
		line-height: 1.6;
		border-left: 3px solid var(--faf-light-gray);
		padding-left: 0.9rem;
		margin: 0.75rem 0 0;
	}

	.verify-list {
		margin: 0;
		padding-left: 1.25rem;
	}

	.verify-list li {
		margin: 0.6rem 0;
		line-height: 1.6;
	}

	.proof-footer {
		border-top: 2px solid var(--faf-light-gray);
		padding-top: 1.5rem;
		margin-top: 2.5rem;
		font-size: 0.9rem;
		color: var(--faf-dark);
	}

	.proof-footer p {
		margin: 0.35rem 0;
	}

	@media (max-width: 768px) {
		.proof-page {
			padding: 1rem;
		}

		h1 {
			font-size: 1.75rem;
		}

		h2 {
			font-size: 1.3rem;
		}

		table {
			font-size: 0.88rem;
		}
	}
</style>
