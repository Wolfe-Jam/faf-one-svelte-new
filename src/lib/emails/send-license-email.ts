/**
 * 📧 Send License Key Email
 *
 * Sends FAF TURBO license key to customer after purchase
 */

import { Resend } from 'resend';
import { env } from '$env/dynamic/private';
import type { License } from '../license-generator';

// Lazy-initialize to avoid build-time errors
let resend: Resend | null = null;
function getResend(): Resend | null {
    if (!resend && env.RESEND_API_KEY) {
        resend = new Resend(env.RESEND_API_KEY);
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
    const isFriend = license.licenseNumber != null;
    const friendLabel = isFriend ? `Friend of FAF #${String(license.licenseNumber).padStart(4, '0')}` : '';

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
        .cmd-box {
            background: #0a0a0a;
            border: 1px solid #333;
            border-left: 3px solid ${accentColor};
            border-radius: 6px;
            padding: 14px 18px;
            margin: 8px 0 20px 0;
            font-family: 'Courier New', monospace;
            font-size: 15px;
            font-weight: bold;
            color: #00D4D4;
            letter-spacing: 0.3px;
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
        <p>${isPro ? 'Define once. Remember forever.' : 'Your universal automation intelligence is ready'}</p>
    </div>

    <div class="content">
        <p>Hi there! 👋</p>

        <p>Thanks for subscribing to <strong>${tierName}</strong>!${isPro ? ' You just unlocked:' : ' You now have access to:'}</p>

        <ul>
            ${isFriend ? `
            <li>⚡ <strong>tri-sync</strong> — persistent project context (ROM → BUS → RAM) across every AI session</li>
            <li>☑️ <strong>Rust compiler Pro</strong> — Glass Hood, SVG scorecards, FAFb compilation</li>
            <li>☑️ <strong>MCP server Pro</strong> — full tool access</li>
            <li>☑️ <strong>One key, all CLIs</strong> — same license works everywhere</li>
            <li>☑️ Early-adopter pricing locked in forever</li>
            ` : isPro ? `
            <li>⚡ <strong>Session memory (RAM)</strong> — your AI remembers project context, decisions, and conventions across every session</li>
            <li>☑️ Persistent context synced to CLAUDE.md, AGENTS.md, .cursorrules, and GEMINI.md</li>
            <li>☑️ No more re-explaining. Your project DNA travels with you.</li>
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
            ${isFriend ? `
            <div style="font-size: 24px; font-weight: bold; color: #4682B4; margin-bottom: 4px;">
                🧡 ${friendLabel}
            </div>
            <div style="font-size: 12px; color: #666; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 12px;">
                ${license.licenseNumber} of 100 — All Areas License
            </div>
            ` : ''}
            <h2>🔑 Your License Key</h2>
            <div class="license-key">${license.key}</div>
            <p style="color: #666; font-size: 14px;">Keep this safe - you'll need it to activate ${tierName}</p>
        </div>

        <h3>Quick Start (2 minutes)</h3>

        ${isPro ? `
        <p><strong>Step 1:</strong> Update faf-cli</p>
        <div class="cmd-box">npm install -g faf-cli@latest</div>

        <p><strong>Step 2:</strong> Activate your license</p>
        <div class="cmd-box">faf pro activate ${license.key}</div>

        <p><strong>Step 3:</strong> Run tri-sync</p>
        <div class="cmd-box">faf tri-sync</div>

        <p>That's it! Your project context is now persistent — ROM (.faf) + RAM (session memory) across every AI session. No more re-explaining. 🏆</p>
        ${isFriend ? `
        <p style="color: #666; font-size: 0.95em; margin-top: 1.5em; padding: 12px 16px; background: #f5f5f5; border-radius: 6px;">
            <strong>Rust compiler too:</strong> This key also unlocks rust-faf-cli Pro. Same key, same command:<br/>
            <code style="background: #0a0a0a; color: #E8956A; padding: 2px 6px; border-radius: 4px; font-size: 0.9em;">faf pro activate ${license.key}</code>
        </p>
        ` : ''}
        ` : `
        <p><strong>Step 1:</strong> Install .FAF TURBO</p>
        <div class="cmd-box">npm install -g faf-turbo</div>

        <p><strong>Step 2:</strong> Activate your license</p>
        <div class="cmd-box">faf-turbo activate ${license.key}</div>

        <p><strong>Step 3:</strong> Analyze your first workflow</p>
        <div class="cmd-box">faf-turbo analyze my-workflow.json</div>

        <p>That's it! TURBO will generate championship-grade .faf files with 85-100% AI readiness scores. 🏆</p>
        `}

        <a href="${isPro ? 'https://faf.one/pro' : 'https://docs.faf.one'}" class="button">${isPro ? 'FAF Pro' : 'View Documentation'}</a>

        <h3>Need Help?</h3>
        <p>We're here for you:</p>
        <ul>
            <li>📖 <a href="${isPro ? 'https://github.com/Wolfe-Jam/faf-cli/blob/main/docs/PRO.md' : 'https://github.com/Wolfe-Jam/faf-cli#readme'}">Documentation</a></li>
            <li>💬 <a href="https://github.com/Wolfe-Jam/faf-cli/discussions">Community Discussions</a></li>
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
    if (!env.RESEND_API_KEY) {
        console.error('❌ RESEND_API_KEY not set');
        return { success: false, error: 'Email service not configured' };
    }

    try {
        const tierName = license.tier === 'pro' ? 'FAF Pro' : license.tier === 'legends' ? '.FAF LEGENDS' : '.FAF TURBO';
        const tierEmoji = license.tier === 'pro' ? '⚡' : license.tier === 'legends' ? '👑' : '🏎️💨';

        // Friends of FAF get a special subject line
        const isFriend = license.licenseNumber != null;
        const subject = isFriend
            ? `🧡 Friend of FAF #${String(license.licenseNumber).padStart(4, '0')} — Your All Areas License`
            : `${tierEmoji} Your ${tierName} License Key`;

        const client = getResend();
        if (!client) {
            return { success: false, error: 'Email service not configured' };
        }
        const { data, error } = await client.emails.send({
            from: 'FAF <team@faf.one>',
            replyTo: 'team@faf.one',
            to: license.email,
            subject,
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

Documentation: https://docs.faf.one
Support: Reply to this email

— The .FAF Team
    `.trim();
}
