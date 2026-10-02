import type { Request, Response } from 'express';
import { Resend } from 'resend';

export function validateInquiry(body: unknown) {
  if (!body || typeof body !== 'object' || Array.isArray(body)) return null;
  const input = body as Record<string, unknown>;
  const limits = { name: 120, email: 254, company: 160, projectDetails: 5000 };
  const values: Record<string, string> = {};
  for (const [key, limit] of Object.entries(limits)) {
    if (typeof input[key] !== 'string') return null;
    const value = input[key].trim();
    if (!value || value.length > limit || (key !== 'projectDetails' && /[\r\n]/.test(value))) return null;
    values[key] = value;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) return null;
  return values;
}

export default async function sendEmail(req: Request, res: Response) {
  res.setHeader('Cache-Control', 'no-store');
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed.' });
  }
  // Browser submissions must come from this site; non-browser callers still need abuse controls at the edge.
  const origin = req.headers.origin;
  const allowedOrigin = process.env.SITE_ORIGIN || 'https://gothamcoders.com';
  if (origin && origin !== allowedOrigin && !(process.env.NODE_ENV !== 'production' && /^http:\/\/localhost:\d+$/.test(origin))) {
    return res.status(403).json({ error: 'Request origin not allowed.' });
  }
  const inquiry = validateInquiry(req.body);
  if (!inquiry) return res.status(400).json({ error: 'Please provide valid contact details and project requirements.' });
  if (!process.env.RESEND_API_KEY || !process.env.CONTACT_FROM_EMAIL) {
    return res.status(503).json({ error: 'Message delivery is unavailable. Please email help@gothamcoders.com directly.' });
  }
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL,
      to: [process.env.CONTACT_TO_EMAIL || 'help@gothamcoders.com'],
      replyTo: inquiry.email,
      subject: `System Inquiry: ${inquiry.company} - ${inquiry.name}`,
      text: `Name: ${inquiry.name}\nEmail: ${inquiry.email}\nCompany: ${inquiry.company}\n\nProject Details:\n${inquiry.projectDetails}`,
    });
    if (error) return res.status(502).json({ error: 'Message delivery failed. Please try again later or email us directly.' });
    return res.status(200).json({ success: true });
  } catch {
    return res.status(502).json({ error: 'Message delivery failed. Please try again later or email us directly.' });
  }
}
