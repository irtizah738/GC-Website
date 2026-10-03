import { Resend } from 'resend';
import { validateInquiry } from '@/src/lib/contact';

export const runtime = 'nodejs';

const noStoreHeaders = {
  'Cache-Control': 'no-store',
};

function json(body: unknown, status: number, extraHeaders?: HeadersInit) {
  return Response.json(body, {
    status,
    headers: {
      ...noStoreHeaders,
      ...extraHeaders,
    },
  });
}

function allowedOrigins() {
  const configured = (process.env.SITE_ORIGIN || '')
    .split(',')
    .map((value) => value.trim())
    .filter(Boolean);

  const defaults = [
    'https://gothamcoders.com',
    'https://www.gothamcoders.com',
  ];

  return new Set(configured.length > 0 ? configured : defaults);
}

function isAllowedOrigin(origin: string | null) {
  if (!origin) return true;
  if (allowedOrigins().has(origin)) return true;

  return process.env.NODE_ENV !== 'production' && /^http:\/\/localhost:\d+$/.test(origin);
}

export async function POST(request: Request) {
  if (!isAllowedOrigin(request.headers.get('origin'))) {
    return json({ error: 'Request origin not allowed.' }, 403);
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return json({ error: 'Please provide valid contact details and project requirements.' }, 400);
  }

  const inquiry = validateInquiry(body);
  if (!inquiry) {
    return json({ error: 'Please provide valid contact details and project requirements.' }, 400);
  }

  if (!process.env.RESEND_API_KEY || !process.env.CONTACT_FROM_EMAIL) {
    return json(
      { error: 'Message delivery is unavailable. Please email help@gothamcoders.com directly.' },
      503,
    );
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

    if (error) {
      return json(
        { error: 'Message delivery failed. Please try again later or email us directly.' },
        502,
      );
    }

    return json({ success: true }, 200);
  } catch {
    return json(
      { error: 'Message delivery failed. Please try again later or email us directly.' },
      502,
    );
  }
}

export async function GET() {
  return json({ error: 'Method not allowed.' }, 405, { Allow: 'POST' });
}
