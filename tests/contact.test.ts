import { test } from 'node:test';
import assert from 'node:assert/strict';
import type { Request, Response } from 'express';
import sendEmail, { validateInquiry } from '../api/send-email';

const valid = { name: 'Alex', email: 'alex@example.com', company: 'Example', projectDetails: 'Architecture review' };
test('accepts valid trimmed inquiry', () => {
  assert.equal(validateInquiry({ ...valid, name: ' Alex ' })?.name, 'Alex');
});
test('rejects missing fields and non-object input', () => {
  for (const value of [null, [], 'test', {}, { ...valid, company: 123 }]) assert.equal(validateInquiry(value), null);
});
test('rejects malformed email, header injection and oversized input', () => {
  for (const value of [{ ...valid, email: 'invalid' }, { ...valid, name: 'Alex\r\nBcc: injected' }, { ...valid, projectDetails: 'a'.repeat(5001) }]) assert.equal(validateInquiry(value), null);
});

async function invoke(method: string, body: unknown, origin?: string) {
  let code = 200;
  let payload: unknown;
  const headers: Record<string, string> = {};
  const response = {
    setHeader(key: string, value: string) { headers[key] = value; },
    status(value: number) { code = value; return this; },
    json(value: unknown) { payload = value; return this; },
  } as unknown as Response;
  await sendEmail({ method, body, headers: { origin } } as Request, response);
  return { code, payload, headers };
}
test('rejects unsupported method', async () => {
  const result = await invoke('GET', valid);
  assert.equal(result.code, 405);
  assert.equal(result.headers.Allow, 'POST');
});
test('rejects foreign browser origin', async () => {
  assert.equal((await invoke('POST', valid, 'https://untrusted.example')).code, 403);
});
test('rejects invalid payload before invoking email service', async () => {
  assert.equal((await invoke('POST', {})).code, 400);
});
test('reports missing email configuration without false success', async () => {
  const saved = process.env.RESEND_API_KEY;
  delete process.env.RESEND_API_KEY;
  try {
    const result = await invoke('POST', valid);
    assert.equal(result.code, 503);
    assert.equal(result.headers['Cache-Control'], 'no-store');
  } finally {
    if (saved !== undefined) process.env.RESEND_API_KEY = saved;
  }
});
