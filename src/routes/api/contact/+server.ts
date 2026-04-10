/**
 * 📧 Contact Form Endpoint
 *
 * Sends contact form submissions to team@faf.one via Resend
 */

import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { Resend } from 'resend';
import { env } from '$env/dynamic/private';

// Lazy-initialize to avoid build-time errors
let resend: Resend | null = null;
function getResend(): Resend | null {
	if (!resend && env.RESEND_API_KEY) {
		resend = new Resend(env.RESEND_API_KEY);
	}
	return resend;
}

interface ContactFormData {
	email: string;
	message: string;
	name?: string;
	category?: string;
	company?: string;
}

function generateContactEmailHTML(data: ContactFormData): string {
	const categoryLabel = data.category
		? {
			bug: '🐛 Bug Report',
			feature: '✨ Feature Request',
			question: '❓ Question',
			feedback: '💬 Feedback'
		}[data.category] || 'General'
		: 'General';

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
			background: linear-gradient(135deg, #FF6B35 0%, #FF8C42 100%);
			color: white;
			padding: 20px;
			border-radius: 8px 8px 0 0;
		}
		.content {
			background: #f9f9f9;
			padding: 20px;
			border-radius: 0 0 8px 8px;
		}
		.field {
			background: white;
			padding: 15px;
			margin: 10px 0;
			border-radius: 8px;
			border-left: 3px solid #FF6B35;
		}
		.label {
			color: #666;
			font-size: 0.875rem;
			font-weight: 600;
			text-transform: uppercase;
			letter-spacing: 0.05em;
			margin-bottom: 5px;
		}
		.value {
			color: #333;
			font-size: 1rem;
		}
		.message-box {
			background: white;
			padding: 20px;
			margin: 15px 0;
			border-radius: 8px;
			border: 2px solid #FF6B35;
		}
		.footer {
			text-align: center;
			color: #666;
			font-size: 0.875rem;
			margin-top: 20px;
			padding-top: 20px;
			border-top: 1px solid #ddd;
		}
	</style>
</head>
<body>
	<div class="header">
		<h2 style="margin: 0;">📧 New Contact Form Submission</h2>
	</div>

	<div class="content">
		<div class="field">
			<div class="label">From</div>
			<div class="value">${data.email}</div>
		</div>

		${data.name ? `
		<div class="field">
			<div class="label">Name</div>
			<div class="value">${data.name}</div>
		</div>
		` : ''}

		<div class="field">
			<div class="label">Category</div>
			<div class="value">${categoryLabel}</div>
		</div>

		${data.company ? `
		<div class="field">
			<div class="label">Company/Project</div>
			<div class="value">${data.company}</div>
		</div>
		` : ''}

		<div class="message-box">
			<div class="label">Message</div>
			<div class="value">${data.message.replace(/\n/g, '<br>')}</div>
		</div>

		<div class="footer">
			<p>Sent from faf.one contact form</p>
			<p>Reply directly to: <strong>${data.email}</strong></p>
		</div>
	</div>
</body>
</html>
	`.trim();
}

function generateContactEmailText(data: ContactFormData): string {
	const categoryLabel = data.category
		? {
			bug: 'Bug Report',
			feature: 'Feature Request',
			question: 'Question',
			feedback: 'Feedback'
		}[data.category] || 'General'
		: 'General';

	return `
New Contact Form Submission

From: ${data.email}
${data.name ? `Name: ${data.name}` : ''}
Category: ${categoryLabel}
${data.company ? `Company/Project: ${data.company}` : ''}

Message:
${data.message}

---
Sent from faf.one contact form
Reply to: ${data.email}
	`.trim();
}

export const POST: RequestHandler = async ({ request }) => {
	if (!env.RESEND_API_KEY) {
		console.error('❌ RESEND_API_KEY not set');
		return json({
			success: false,
			error: 'Email service not configured'
		}, { status: 500 });
	}

	try {
		const data: ContactFormData = await request.json();

		// Validate required fields
		if (!data.email || !data.message) {
			return json({
				success: false,
				error: 'Email and message are required'
			}, { status: 400 });
		}

		// Validate email format
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(data.email)) {
			return json({
				success: false,
				error: 'Invalid email address'
			}, { status: 400 });
		}

		// Send email via Resend
		const client = getResend();
		if (!client) {
			return json({
				success: false,
				error: 'Email service not configured'
			}, { status: 500 });
		}
		const { data: emailData, error } = await client.emails.send({
			from: 'FAF Contact <team@faf.one>',
			replyTo: data.email,
			to: 'team@faf.one',
			subject: `[Contact Form] ${data.category ? data.category.charAt(0).toUpperCase() + data.category.slice(1) : 'General'} - ${data.email}`,
			html: generateContactEmailHTML(data),
			text: generateContactEmailText(data)
		});

		if (error) {
			console.error('❌ Contact email send error:', error);
			return json({
				success: false,
				error: error.message
			}, { status: 500 });
		}

		console.log(`✅ Contact form email sent from ${data.email}, ID: ${emailData?.id}`);

		// Add to Resend Audience (fire-and-forget — don't block the response)
		const audienceId = env.RESEND_AUDIENCE_ID;
		if (audienceId) {
			client.contacts.create({ audienceId, email: data.email, unsubscribed: false })
				.catch((err: Error) => console.warn('⚠️ Audience add failed (non-critical):', err.message));
		}

		// Send auto-reply to submitter
		const firstName = data.name ? data.name.split(' ')[0] : null;
		const greeting = firstName ? `Hey ${firstName}` : 'Hey';
		client.emails.send({
			from: 'James @ FAF <team@faf.one>',
			to: data.email,
			subject: 'Got your message',
			html: `<!DOCTYPE html><html><body style="margin:0;padding:0;background:#fff;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 20px;">
  <tr><td align="center">
    <table width="560" cellpadding="0" cellspacing="0">
      <tr><td style="padding-bottom:24px;">
        <img src="https://faf.one/orange-smiley.svg" width="48" height="48" alt="FAF" style="display:block;" />
      </td></tr>
      <tr><td style="font-size:18px;font-weight:700;color:#111;padding-bottom:12px;">${greeting},</td></tr>
      <tr><td style="font-size:15px;color:#444;line-height:1.6;padding-bottom:20px;">
        Got your message — I'll get back to you shortly.<br><br>
        In the meantime, the latest is always at <a href="https://faf.one/blog" style="color:#FF6B35;text-decoration:none;">faf.one/blog</a>.
      </td></tr>
      <tr><td style="font-size:14px;color:#888;border-top:1px solid #eee;padding-top:16px;">
        — James<br>
        <span style="color:#bbb;font-size:12px;">faf.one</span>
      </td></tr>
    </table>
  </td></tr>
</table>
</body></html>`,
		}).catch((err: Error) => console.warn('⚠️ Auto-reply failed (non-critical):', err.message));

		return json({
			success: true,
			message: 'Message sent successfully'
		});

	} catch (error) {
		console.error('❌ Contact form error:', error);
		return json({
			success: false,
			error: error instanceof Error ? error.message : 'Unknown error'
		}, { status: 500 });
	}
};
