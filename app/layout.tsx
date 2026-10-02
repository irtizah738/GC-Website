import type { Metadata, Viewport } from 'next';
import { Inter, JetBrains_Mono, Manrope } from 'next/font/google';
import Navbar from '@/src/components/Navbar';
import Footer from '@/src/components/Footer';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

const description =
  'ERP, healthcare, and enterprise systems engineered around operational workflows, data integrity, trusted authority boundaries, and resilient architecture.';

export const metadata: Metadata = {
  metadataBase: new URL('https://gothamcoders.com'),
  title: {
    default: 'Gotham Coders | Enterprise Systems for Complex Operations',
    template: '%s | Gotham Coders',
  },
  description,
  keywords: [
    'enterprise systems',
    'ERP systems',
    'healthcare software',
    'HMIS',
    'event-driven architecture',
    'offline-first systems',
    'systems engineering',
  ],
  authors: [{ name: 'Gotham Coders' }],
  creator: 'Gotham Coders',
  publisher: 'Gotham Coders',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    siteName: 'Gotham Coders',
    url: '/',
    title: 'Gotham Coders | Enterprise Systems for Complex Operations',
    description,
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Gotham Coders enterprise systems',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gotham Coders | Enterprise Systems for Complex Operations',
    description,
    images: ['/og-image.jpg'],
  },
  icons: {
    icon: '/favicon.svg',
  },
  manifest: '/site.webmanifest',
};

export const viewport: Viewport = {
  themeColor: '#0a0e17',
  colorScheme: 'dark',
};

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Gotham Coders',
  url: 'https://gothamcoders.com',
  description: 'Enterprise systems engineering company building ERP, healthcare, and domain-specific operational software',
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'help@gothamcoders.com',
    contactType: 'customer service',
    availableLanguage: ['English'],
  },
  sameAs: [
    'https://github.com/irtizah738',
    'https://www.linkedin.com/company/gotham-coders/',
  ],
  foundingDate: '2024',
  areaServed: 'Global',
  serviceType: [
    'Software Development',
    'Systems Engineering',
    'ERP Development',
    'Healthcare Software',
    'SaaS Development',
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`dark ${inter.variable} ${manrope.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <div className="gc-site relative min-h-screen bg-zinc-950 font-sans text-zinc-50">
          <a href="#main-content" className="skip-link">
            Skip to main content
          </a>
          <Navbar />
          <main id="main-content" className="relative z-10">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
