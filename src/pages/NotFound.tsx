import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Section from '../components/Section';
import { Heading } from '../components/ui/Heading';
import { Text } from '../components/ui/Text';

export default function NotFound() {
  return <Section className="pt-40 min-h-[70vh] space-y-6">
    <Helmet><title>Page Not Found | Gotham Coders</title><meta name="robots" content="noindex" /></Helmet>
    <Text variant="caption">404</Text>
    <Heading level={1}>Page not found</Heading>
    <Text>The page may have moved. Explore our systems or return to the homepage.</Text>
    <Link to="/" className="inline-flex px-6 py-3 bg-white text-zinc-950 rounded-xl font-bold">Return Home</Link>
  </Section>;
}
