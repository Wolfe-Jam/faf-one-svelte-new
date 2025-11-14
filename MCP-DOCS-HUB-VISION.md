# faf.one/mcp - MCP Documentation Hub Vision

**Status:** Design document for championship-grade MCP docs
**Goal:** Become THE authoritative MCP resource for .faf format (like Anthropic's MCP docs)
**Created:** 2025-11-13

---

## 🎯 Strategic Position

**Vision:** faf.one/mcp becomes the definitive resource for MCP + .faf integration across ALL platforms

**Why this matters:**
- IANA-registered format needs authoritative documentation
- Platforms link to us (not us to them)
- Establishes .faf as THE context format for MCP
- Community hub for all MCP implementations

**Inspiration:** Anthropic's MCP documentation
- Comprehensive but organized
- Platform-agnostic overview
- Platform-specific guides
- Developer-focused, technical, trusted

---

## 📋 Page Structure

### Hero Section
```
🧡 Model Context Protocol + .faf

Universal AI Context • IANA-Registered Format • 12K+ Downloads

The official MCP documentation for .faf - persistent project context
across Claude Desktop, Cursor, Windsurf, Cline, VS Code, and all
MCP-compatible platforms.
```

### Section 1: What is MCP + .faf?

**Content:**
- Brief MCP explanation (open protocol for AI context)
- .faf's role: IANA-registered context format (`application/vnd.faf+yaml`)
- The trinity: Model → Context (.faf) → Protocol (MCP)
- Visual: Table showing Claude/Gemini/Codex/Any LLM → .faf → MCP

**Key message:** .faf is the universal Context layer that makes MCP work across all platforms

### Section 2: MCP Packages

**Universal Package (Featured)**
```
📦 faf-mcp (Universal MCP Server)
├── Supports: Cursor, Windsurf, Cline, VS Code, all MCP platforms
├── Tools: 50 MCP tools bundled
├── Install: npm install -g faf-mcp
├── Status: v1.0.6 (Latest)
└── Docs: Full installation guide →
```

**Claude-Specific Package**
```
📦 claude-faf-mcp (Claude Desktop Optimized)
├── Supports: Claude Desktop (dedicated)
├── Tools: 51 MCP tools (Claude-optimized)
├── Install: npm install -g claude-faf-mcp
├── Status: v3.3.0 (Stable)
└── Docs: Claude-specific guide →
```

**Future Packages (On Demand)**
```
📦 cursor-faf-mcp, windsurf-faf-mcp, gemini-faf-mcp
Request via GitHub issues based on platform-specific needs
```

### Section 3: Installation by Platform

**Tabbed interface or expandable sections:**

**Tab: Cursor IDE**
```bash
npm install -g faf-mcp

# Add to ~/.cursor/mcp.json
{
  "mcpServers": {
    "faf": {
      "command": "npx",
      "args": ["-y", "faf-mcp"]
    }
  }
}

# Restart Cursor
# Start prompting: "Use FAF to initialize your project"
```

**Tab: Windsurf Editor**
```bash
npm install -g faf-mcp

# Add to ~/.codeium/windsurf/mcp_config.json
{
  "mcpServers": {
    "faf": {
      "command": "npx",
      "args": ["-y", "faf-mcp"]
    }
  }
}

# Restart Windsurf
# Start prompting: "Use FAF to initialize your project"
```

**Tab: Cline**
```bash
npm install -g faf-mcp

# Add via Cline's MCP settings UI
# Or manually in Cline config

# Start prompting: "Use FAF to initialize your project"
```

**Tab: VS Code**
```bash
npm install -g faf-mcp

# Install MCP extension for VS Code
# Add faf-mcp server via extension settings

# Start prompting: "Use FAF to initialize your project"
```

**Tab: Claude Desktop**
```bash
npm install -g claude-faf-mcp

# Add to claude_desktop_config.json
{
  "mcpServers": {
    "faf": {
      "command": "npx",
      "args": ["-y", "claude-faf-mcp"]
    }
  }
}

# Restart Claude Desktop
# Full guide: claude-faf-mcp docs →
```

### Section 4: MCP Tools Reference

**All 50 tools documented:**

**Project Initialization**
- `faf_init` - Create project.faf from project structure
- `faf_auto` - Fully automated .faf creation with scoring
- `faf_enhance` - AI-powered enhancement suggestions

**Context Management**
- `faf_sync` - Bi-directional sync (project.faf ↔ platform files)
- `faf_read` - Read and validate .faf files
- `faf_formats` - Detect frameworks and formats

**Scoring & Quality**
- `faf_score` - AI-readiness scoring (0-100%)
- `faf_dna` - Birth DNA tracking and versioning
- `faf_validate` - Format validation

**Git Integration**
- `faf_git_init` - .faf-aware git initialization
- `faf_git_sync` - Keep .faf in sync with git changes

**Platform-Aware Sync**
- `faf_bi_sync` - Context-Mirroring to all platforms
  - Creates .cursorrules (Cursor)
  - Creates .clinerules (Cline)
  - Creates .windsurfrules (Windsurf)
  - Creates CLAUDE.md (Claude Desktop)

[Full tool reference with parameters and examples →]

### Section 5: The "Use FAF" Pattern

**The universal onboarding:**

```
Instead of:
"Can you help me set up AI context for my React TypeScript project?"

Just say:
"Use FAF to initialize my project"
```

**Why it works:**
- MCP tools handle everything
- No web searches needed
- No manual file creation
- Works across ALL platforms
- Consistent experience

**Examples:**
- "Use FAF to initialize your project"
- "Use FAF to sync my project.faf to all platforms"
- "Use FAF to score my AI-readiness"
- "Use FAF to enhance my context"

### Section 6: Context-Mirroring Explained

**Single source of truth:**

```
project.faf (IANA-registered)
    ↓
Bi-sync creates:
    ├── .cursorrules (Cursor native)
    ├── .clinerules (Cline native)
    ├── .windsurfrules (Windsurf native)
    └── CLAUDE.md (Claude Desktop native)
```

**Benefits:**
- Edit any file, changes sync back
- One .faf file → native files for all platforms
- No platform lock-in
- Version control friendly

### Section 7: Performance & Architecture

**Championship engineering:**
- 16.2x faster than CLI alternatives
- 19ms average execution
- Zero dependencies (bundled engine)
- 100% TypeScript strict mode
- Zero runtime errors
- Standalone operation

**Technical details:**
- Direct function calls (not CLI spawning)
- MCP-native implementation
- IANA-registered MIME type
- Open source (MIT License)

### Section 8: Examples & Use Cases

**Real-world examples:**

**1. React + TypeScript SPA**
```bash
# In your project root
npx faf-mcp

# In your AI chat
Use FAF to initialize my project

# Result: Instant AI-readiness with full context
```

**2. Monorepo with multiple packages**
```bash
# Coming in Phase 1: Monorepo support
# One project.faf per package.json
# Enterprise scan for massive codebases
```

**3. Migrating from manual context files**
```bash
# Existing .cursorrules? No problem
Use FAF to sync my project.faf

# Bi-sync creates .faf from existing files
```

### Section 9: Developer Resources

**Links:**
- GitHub: faf-mcp repository
- npm: faf-mcp package
- Discord: Join community
- Changelog: Version history
- Contributing: How to contribute
- Security: Report vulnerabilities

**For platform developers:**
- MCP specification compliance
- IANA format documentation
- Tool development guide
- Integration examples

### Section 10: FAQ

**Common questions:**

Q: What's the difference between faf-mcp and claude-faf-mcp?
A: faf-mcp is universal (all platforms), claude-faf-mcp is optimized for Claude Desktop. Both use the same .faf format.

Q: Can I use .faf without MCP?
A: Yes! .faf files are YAML and work standalone. MCP adds AI integration.

Q: Which package should I use?
A:
- Cursor/Windsurf/Cline/VS Code → faf-mcp (universal)
- Claude Desktop only → claude-faf-mcp (optimized)

Q: How do I migrate from claude-faf-mcp to faf-mcp?
A: Same format, same tools. Just reinstall. Your .faf files work with both.

---

## 🎨 Design Principles

**Visual style:**
- FAF orange (#FF6B35) for branding
- Clean, technical, authoritative
- Code examples prominent
- Tabbed navigation for platforms
- Expandable tool reference
- Mobile-responsive

**Tone:**
- Technical but approachable
- Facts only (NO BS ZONE applies)
- Trust-driven
- Championship performance messaging
- F1-inspired language where appropriate

**Trust elements:**
- Real download stats (12K+)
- IANA registration prominent
- Link to official specs
- Open source transparency
- Community-driven development

---

## 📊 Success Metrics

**Page goals:**
- Primary hub for .faf MCP documentation
- Platforms link to us for integration guides
- Developers choose .faf as their context format
- Community contributions increase
- Marketplace submissions reference this page

**Traffic expectations:**
- Week 1: 500+ visits
- Month 1: 2,000+ visits
- Month 3: Ranked #1 for "MCP context format"

---

## 🚀 Implementation Plan

**Phase 1: Core Content** (This week)
- Update hero section
- Add faf-mcp universal positioning
- Platform installation tabs
- Link to both packages

**Phase 2: Tool Documentation** (Next week)
- Full 50-tool reference
- Parameter documentation
- Code examples
- Search functionality

**Phase 3: Advanced Guides** (Week 3)
- Context-Mirroring deep dive
- Performance optimization
- Monorepo support (when ready)
- Enterprise features

**Phase 4: Community** (Ongoing)
- User examples
- Case studies
- Video tutorials
- Integration showcases

---

## 📝 Content Guidelines (NO BS ZONE)

**Must follow:**
- All stats must be verifiable (12K+ downloads from npm)
- No marketing fluff
- Technical accuracy paramount
- Link to actual documentation
- Real examples only

**Cannot claim:**
- "Best" or "fastest" without benchmarks
- Platform partnerships without written agreements
- Future features as current
- Testimonials without permission

**Can claim:**
- IANA-registered format (official)
- 12K+ total downloads (npm stats)
- 16.2x performance improvement (benchmarked)
- Open source MIT License (GitHub)
- Anthropic MCP compatible (tested)

---

## 🔗 Integration Points

**Links TO this page:**
- faf.one homepage (MCP section)
- npm package READMEs (both packages)
- GitHub repositories
- Marketplace submissions
- Social media

**Links FROM this page:**
- npm packages (faf-mcp, claude-faf-mcp)
- GitHub repositories
- Platform documentation (Cursor, Windsurf, etc.)
- MCP specification
- Discord community

---

**Built with F1-inspired engineering principles** 🏎️⚡

**Trust-driven. Championship performance. Universal context.**
