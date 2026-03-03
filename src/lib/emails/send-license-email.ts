/**
 * 📧 Send License Key Email
 *
 * Sends FAF TURBO license key to customer after purchase
 */

import { Resend } from 'resend';
import type { License } from '../license-generator';

// Lazy-initialize to avoid build-time errors
let resend: Resend | null = null;
function getResend(): Resend | null {
    if (!resend && process.env.RESEND_API_KEY) {
        resend = new Resend(process.env.RESEND_API_KEY);
    }
    return resend;
}

/**
 * Generate license email HTML
 */
function generateLicenseEmailHTML(license: License): string {
    const tierName = license.tier === 'pro' ? 'FAF Pro' : license.tier === 'legends' ? '.FAF LEGENDS' : '.FAF TURBO';
    const tierEmoji = license.tier === 'pro' ? '⚡' : license.tier === 'legends' ? '👑' : '🏎️💨';
    const isPro = license.tier === 'pro';

    // Steel blue for Pro, orange for TURBO/LEGENDS
    const accentColor = isPro ? '#4682B4' : '#FF6B35';
    const accentLight = isPro ? '#5A9AC8' : '#FF8C42';
    // Pro header: dark-to-steel-blue fade (matches faf.one banner)
    const headerGradient = isPro
        ? 'linear-gradient(135deg, #0a0a0a 0%, #1a2a3a 40%, #4682B4 100%)'
        : `linear-gradient(135deg, ${accentColor} 0%, ${accentLight} 100%)`;

    return `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
        }
        .header {
            background: ${headerGradient};
            color: white;
            padding: 30px;
            border-radius: 8px 8px 0 0;
            text-align: center;
        }
        .content {
            background: #f9f9f9;
            padding: 30px;
            border-radius: 0 0 8px 8px;
        }
        .license-box {
            background: white;
            border: 2px solid ${accentColor};
            border-radius: 8px;
            padding: 20px;
            margin: 20px 0;
            text-align: center;
        }
        .license-key {
            font-family: 'Courier New', monospace;
            font-size: 18px;
            font-weight: bold;
            color: ${accentColor};
            letter-spacing: 1px;
            margin: 10px 0;
        }
        .code-block {
            background: #2d2d2d;
            color: #f8f8f2;
            padding: 20px;
            border-radius: 8px;
            font-family: 'Courier New', monospace;
            font-size: 14px;
            margin: 20px 0;
            overflow-x: auto;
        }
        .code-comment {
            color: #6272a4;
        }
        .button {
            display: inline-block;
            background: ${accentColor};
            color: white;
            padding: 12px 30px;
            text-decoration: none;
            border-radius: 5px;
            margin: 20px 0;
            font-weight: bold;
        }
        .footer {
            text-align: center;
            color: #666;
            font-size: 14px;
            margin-top: 30px;
            padding-top: 20px;
            border-top: 1px solid #ddd;
        }
        a {
            color: ${accentColor};
            text-decoration: none;
        }
        a:hover {
            text-decoration: underline;
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>${tierEmoji} Welcome to ${tierName}!</h1>
        <p>${isPro ? 'tri-sync is ready — define once, sync everywhere' : 'Your universal automation intelligence is ready'}</p>
    </div>

    <div class="content">
        <p>Hi there! 👋</p>

        <p>Thanks for subscribing to <strong>${tierName}</strong>!${isPro ? ' You now have access to tri-sync:' : ' You now have access to:'}</p>

        <ul>
            ${isPro ? `
            <li>☑️ tri-sync: .faf → CLAUDE.md + AGENTS.md + .cursorrules + GEMINI.md</li>
            <li>☑️ Automatic file watching and sync</li>
            <li>☑️ Early-adopter pricing locked in forever</li>
            ` : `
            <li>✅ Universal Intelligence Pattern</li>
            <li>✅ n8n workflow analysis</li>
            <li>✅ OpenAI Assistant parsing</li>
            <li>✅ Make.com scenario intelligence</li>
            <li>✅ Google Opal mini-app analysis</li>
            `}
        </ul>

        <div class="license-box">
            <h2>🔑 Your License Key</h2>
            <div class="license-key">${license.key}</div>
            <p style="color: #666; font-size: 14px;">Keep this safe - you'll need it to activate ${tierName}</p>
        </div>

        <h3>Quick Start (2 minutes)</h3>

        ${isPro ? `
        <p><strong>Step 1: Update faf-cli</strong></p>
        <div class="code-block">
<span class="code-comment"># Make sure you have the latest version</span>
npm install -g faf-cli@latest
        </div>

        <p><strong>Step 2: Activate Your License</strong></p>
        <div class="code-block">
<span class="code-comment"># Activate with your license key</span>
faf pro activate ${license.key}
        </div>

        <p><strong>Step 3: Run tri-sync</strong></p>
        <div class="code-block">
<span class="code-comment"># Generate and sync all AI context files</span>
faf tri-sync
        </div>

        <p>That's it! Your .faf file now syncs to CLAUDE.md, AGENTS.md, .cursorrules, and GEMINI.md automatically. 🏆</p>
        ` : `
        <p><strong>Step 1: Install .FAF TURBO</strong></p>
        <div class="code-block">
<span class="code-comment"># Install the CLI tool</span>
npm install -g faf-turbo
        </div>

        <p><strong>Step 2: Activate Your License</strong></p>
        <div class="code-block">
<span class="code-comment"># Activate with your license key</span>
faf-turbo activate ${license.key}
        </div>

        <p><strong>Step 3: Analyze Your First Workflow</strong></p>
        <div class="code-block">
<span class="code-comment"># Analyze an n8n workflow</span>
faf-turbo analyze my-workflow.json

<span class="code-comment"># Or OpenAI Assistant schema</span>
faf-turbo analyze my-assistant.json

<span class="code-comment"># Or Make.com blueprint</span>
faf-turbo analyze my-scenario.json
        </div>

        <p>That's it! TURBO will generate championship-grade .faf files with 85-100% AI readiness scores. 🏆</p>
        `}

        <a href="https://faf.one/docs" class="button">View Documentation</a>

        <h3>Need Help?</h3>
        <p>We're here for you:</p>
        <ul>
            <li>📖 <a href="https://faf.one/docs">Documentation</a></li>
            <li>💬 <a href="https://github.com/Wolfe-Jam/faf/discussions">Community Discussions</a></li>
            <li>📧 Reply to this email for support</li>
        </ul>

        <p>Happy building! 🏎️💨</p>

        <p>— The .FAF Team</p>
    </div>

    <div class="footer">
        <p>You're receiving this because you subscribed to ${tierName}</p>
        <p><a href="https://faf.one">faf.one</a> | <a href="${isPro ? 'https://faf.one/pro' : 'https://faf.one/pricing'}">Manage Subscription</a></p>
    </div>
</body>
</html>
    `.trim();
}

/**
 * Send license email to customer
 */
export async function sendLicenseEmail(license: License): Promise<{ success: boolean; error?: string }> {
    if (!process.env.RESEND_API_KEY) {
        console.error('❌ RESEND_API_KEY not set');
        return { success: false, error: 'Email service not configured' };
    }

    try {
        const tierName = license.tier === 'pro' ? 'FAF Pro' : license.tier === 'legends' ? '.FAF LEGENDS' : '.FAF TURBO';
        const tierEmoji = license.tier === 'pro' ? '⚡' : license.tier === 'legends' ? '👑' : '🏎️💨';

        const client = getResend();
        if (!client) {
            return { success: false, error: 'Email service not configured' };
        }
        const { data, error } = await client.emails.send({
            from: 'FAF <team@faf.one>',
            replyTo: 'team@faf.one',
            to: license.email,
            subject: `${tierEmoji} Your ${tierName} License Key`,
            html: generateLicenseEmailHTML(license)
        });

        if (error) {
            console.error('❌ Email send error:', error);
            return { success: false, error: error.message };
        }

        console.log(`✅ License email sent to ${license.email}, ID: ${data?.id}`);
        return { success: true };

    } catch (error) {
        console.error('❌ Unexpected email error:', error);
        return {
            success: false,
            error: error instanceof Error ? error.message : 'Unknown error'
        };
    }
}

/**
 * Plain text version (fallback)
 */
function generateLicenseEmailText(license: License): string {
    const tierName = license.tier === 'pro' ? 'FAF Pro' : license.tier === 'legends' ? '.FAF LEGENDS' : '.FAF TURBO';
    const isPro = license.tier === 'pro';

    return `
Welcome to ${tierName}!

Your License Key: ${license.key}

Quick Start:

${isPro ? `1. Update:
   npm install -g faf-cli@latest

2. Activate:
   faf pro activate ${license.key}

3. Sync:
   faf tri-sync` : `1. Install:
   npm install -g faf-turbo

2. Activate:
   faf-turbo activate ${license.key}

3. Analyze:
   faf-turbo analyze my-workflow.json`}

Documentation: https://faf.one/docs
Support: Reply to this email

— The .FAF Team
    `.trim();
}
