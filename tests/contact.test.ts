import { test } from 'node:test';
import assert from 'node:assert/strict';
import { GET, POST } from '../app/api/send-email/route';
import { validateInquiry } from '../src/lib/contact';

const valid = {
  name: 'Alex',
  email: 'alex@example.com',
  company: 'Example',
  projectDetails: 'Architecture review',
};

test('accepts valid trimmed inquiry', () => {
  assert.equal(validateInquiry({ ...valid, name: ' Alex ' })?.name, 'Alex');
});

test('rejects missing fields and non-object input', () => {
  for (const value of [null, [], 'test', {}, { ...valid, company: 123 }]) {
    assert.equal(validateInquiry(value), null);
  }
});

test('rejects malformed email, header injection and oversized input', () => {
  for (const value of [
    { ...valid, email: 'invalid' },
    { ...valid, name: 'Alex\r\nBcc: injected' },
    { ...valid, projectDetails: 'a'.repeat(5001) },
  ]) {
    assert.equal(validateInquiry(value), null);
  }
});

function postRequest(body: unknown, origin?: string) {
  const headers = new Headers({ 'Content-Type': 'application/json' });
  if (origin) headers.set('Origin', origin);

  return new Request('http://localhost/api/send-email', {
    method: 'POST',
    headers,
    body: JSON.stringify(body),
  });
}

test('rejects unsupported method', async () => {
  const response = await GET();
  assert.equal(response.status, 405);
  assert.equal(response.headers.get('Allow'), 'POST');
  assert.equal(response.headers.get('Cache-Control'), 'no-store');
});

test('rejects foreign browser origin', async () => {
  const response = await POST(postRequest(valid, 'https://untrusted.example'));
  assert.equal(response.status, 403);
});

test('rejects invalid payload before invoking email service', async () => {
  const response = await POST(postRequest({}));
  assert.equal(response.status, 400);
});

test('reports missing email configuration without false success', async () => {
  const savedApiKey = process.env.RESEND_API_KEY;
  const savedFrom = process.env.CONTACT_FROM_EMAIL;

  delete process.env.RESEND_API_KEY;
  delete process.env.CONTACT_FROM_EMAIL;

  try {
    const response = await POST(postRequest(valid));
    assert.equal(response.status, 503);
    assert.equal(response.headers.get('Cache-Control'), 'no-store');
  } finally {
    if (savedApiKey !== undefined) process.env.RESEND_API_KEY = savedApiKey;
    if (savedFrom !== undefined) process.env.CONTACT_FROM_EMAIL = savedFrom;
  }
});
