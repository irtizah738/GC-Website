# Gotham Coders website

Enterprise product website for Gotham Coders, GC-ERP, and G-HIMS.

## Runtime

- Next.js App Router
- React 19
- TypeScript
- Tailwind CSS 4
- Resend contact delivery
- Browser-only ERP and healthcare workflow simulations

## Local development

```sh
npm ci
npm run dev
```

The development server uses Next.js on port 3000 by default.

## Quality gate

```sh
npm run lint
npm test
npm run build
```

GitHub Actions runs the same checks for pull requests and pushes to `main`.

## Routing and rendering

Public routes are native App Router routes. Metadata is generated server-side and unknown routes return a real HTTP 404 through `app/not-found.tsx`.

The ERP and G-HIMS sandboxes are Client Components because they maintain interactive browser-only simulation state. Their surrounding route boundaries and metadata remain server-rendered.

## Contact delivery

POST `/api/send-email` is implemented as a Next.js Node.js Route Handler.

Set these server-only variables:

- `RESEND_API_KEY`
- `CONTACT_FROM_EMAIL`
- `CONTACT_TO_EMAIL` (defaults to `help@gothamcoders.com`)
- `SITE_ORIGIN` (defaults to `https://gothamcoders.com`)

The handler validates input, rejects unrelated browser origins, disables caching, and never exposes Resend credentials to the client.

Before enabling high-volume public traffic, configure Vercel Firewall / rate limiting or another edge abuse-control layer for the contact endpoint.

## Deployment

The repository is structured for native Vercel Next.js detection. No SPA rewrite or custom Express/Vite server is required.
