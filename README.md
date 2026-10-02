# Gotham Coders website

React, TypeScript and Vite marketing site, with browser-only ERP and healthcare simulations.

## Local development

```sh
npm ci
npm run dev
```

The Express development server runs on port 3000 (or `PORT`) and serves the same contact handler as Vercel. If the tsx CLI cannot create its IPC socket in a restricted environment, use `node --import tsx server.ts`.

## Checks

```sh
npm run lint
npm test
npm run build
```

## Deployment and contact delivery

Vercel builds `dist` and deploys `api/send-email.ts` separately as a serverless function. SPA routes are rewritten to `index.html`; API requests must remain outside the SPA fallback. A static-only host cannot deliver contact emails without a separately hosted API.

Set server-only `RESEND_API_KEY` and `CONTACT_FROM_EMAIL` to a sender verified in Resend. `CONTACT_TO_EMAIL` defaults to `help@gothamcoders.com`. Set `SITE_ORIGIN` to the exact website origin, including `https://`; it defaults to `https://gothamcoders.com`. Preview deployments need their own matching origin. See `.env.example`.

Before enabling public delivery, configure edge rate limiting or bot protection for POST `/api/send-email`. The origin check rejects unrelated browser origins but is not authentication or a distributed spam limit. Confirm a real message reaches the inbox after deployment; provider acceptance does not prove inbox delivery. Tests do not send emails.

Do not put Gemini, Resend or other secret keys in Vite defines or `VITE_*` variables. Public Firebase variables are optional; the marketing simulations do not connect to Firebase and their sample state disappears on navigation or reload.

Unknown routes show a not-found page; because this is a static SPA, the host still returns its fallback document with HTTP 200. For true HTTP 404 responses and server-rendered SEO, introduce a server-rendered routing layer.
