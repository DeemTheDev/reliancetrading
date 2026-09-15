/**
 * Contact-form endpoint. Rendered on demand (Vercel serverless function) while
 * the rest of the site is static. Sends the enquiry by email over SMTP using the
 * credentials in the environment (see .env.example).
 */
export const prerender = false;

import type { APIRoute } from 'astro';
import nodemailer from 'nodemailer';
import { site } from '../../config/site';

const env = (key: string): string | undefined =>
  (import.meta.env as Record<string, string | undefined>)[key] ?? process.env[key];

const wantsJson = (req: Request) => (req.headers.get('accept') || '').includes('application/json');

function respond(req: Request, status: number, body: { ok: boolean; message?: string; error?: string }) {
  if (wantsJson(req)) {
    return new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json' } });
  }
  // Plain (no-JavaScript) form post: bounce back to the contact page with a flag.
  return new Response(null, { status: 303, headers: { Location: body.ok ? '/contact-us/?sent=1#message' : '/contact-us/?error=1#message' } });
}

const clean = (v: FormDataEntryValue | null, max = 500) => String(v ?? '').trim().slice(0, max);
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const POST: APIRoute = async ({ request }) => {
  let data: FormData;
  try {
    data = await request.formData();
  } catch {
    return respond(request, 400, { ok: false, error: 'Invalid form submission.' });
  }

  const name = clean(data.get('name'), 120);
  const email = clean(data.get('email'), 200);
  const phone = clean(data.get('phone'), 60);
  const subject = clean(data.get('subject'), 80) || 'General enquiry';
  const message = clean(data.get('message'), 5000);
  const honeypot = clean(data.get('company'), 50);

  // Bots fill the hidden "company" field; pretend success and drop it.
  if (honeypot) return respond(request, 200, { ok: true, message: 'Thank you.' });

  if (!name || !email || !message) {
    return respond(request, 400, { ok: false, error: 'Please complete your name, email address and message.' });
  }
  if (!EMAIL_RE.test(email)) {
    return respond(request, 400, { ok: false, error: 'Please enter a valid email address.' });
  }

  const host = env('SMTP_HOST');
  const user = env('SMTP_USER');
  const pass = env('SMTP_PASS');
  if (!host || !user || !pass) {
    console.warn('[contact] SMTP is not configured - enquiry NOT sent:', { name, email, phone, subject });
    return respond(request, 503, {
      ok: false,
      error: `Email sending is not set up yet. Please email us directly at ${site.email}.`,
    });
  }

  const port = Number(env('SMTP_PORT') || 465);
  const secure = (env('SMTP_SECURE') ?? String(port === 465)).toLowerCase() !== 'false';
  const to = env('CONTACT_TO') || site.email;
  const from = env('CONTACT_FROM') || user;

  const transporter = nodemailer.createTransport({ host, port, secure, auth: { user, pass } });

  const text = [
    'New enquiry from the website contact form',
    '',
    `Name:    ${name}`,
    `Email:   ${email}`,
    `Phone:   ${phone || '-'}`,
    `Enquiry: ${subject}`,
    '',
    'Message:',
    message,
    '',
    `-- Sent from ${site.url}`,
  ].join('\n');

  try {
    await transporter.sendMail({
      from: `"${site.name} website" <${from}>`,
      to,
      replyTo: `"${name.replace(/["<>]/g, '')}" <${email}>`,
      subject: `[Website enquiry] ${subject} - ${name}`,
      text,
    });
  } catch (err) {
    console.error('[contact] sendMail failed', err);
    return respond(request, 502, {
      ok: false,
      error: `Sorry, the message could not be sent right now. Please email us directly at ${site.email}.`,
    });
  }

  return respond(request, 200, { ok: true, message: 'Thank you - your message has been sent. We will be in touch shortly.' });
};

export const GET: APIRoute = () => new Response('Method not allowed', { status: 405 });
