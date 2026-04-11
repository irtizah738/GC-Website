import { SEO } from '../components/SEO';
import { ArrowRight, BookOpen, Calendar, Clock, Tag } from 'lucide-react';
import Section from '../components/Section';
import { Heading } from '../components/ui/Heading';
import { Text } from '../components/ui/Text';
import { Link } from 'react-router-dom';
import { SectionReveal } from '../components/animations/SectionReveal';
import { InteractiveCard } from '../components/animations/InteractiveCard';

const posts = [
  {
    title: 'Event-Driven Architecture: A Practical Guide',
    excerpt: 'How to build resilient systems that scale by decoupling components through asynchronous message patterns.',
    date: 'April 10, 2024',
    readTime: '12 min read',
    category: 'Architecture',
    slug: 'event-driven-architecture-guide'
  },
  {
    title: 'Building HIPAA-Compliant Healthcare Systems',
    excerpt: 'A deep dive into the technical and administrative safeguards required for modern health information systems.',
    date: 'March 28, 2024',
    readTime: '15 min read',
    category: 'Healthcare',
    slug: 'hipaa-compliant-systems'
  },
  {
    title: 'ERP System Design: Lessons from the Trenches',
    excerpt: 'Common pitfalls in enterprise resource planning development and how to avoid them through better data modeling.',
    date: 'March 15, 2024',
    readTime: '10 min read',
    category: 'Enterprise',
    slug: 'erp-system-design-lessons'
  }
];

export default function Blog() {
  return (
    <div className="pt-20">
      <SEO 
        title="Blog | Gotham Coders"
        description="Technical insights, engineering guides, and deep dives into mission-critical systems engineering."
        pathname="/blog"
      />

      {/* Hero */}
      <Section className="bg-zinc-50 dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-zinc opacity-20 -z-10" />
        <div className="max-w-4xl space-y-8">
          <Text variant="caption">Engineering Journal // Blog</Text>
          <Heading level={1}>
            Technical <span className="text-zinc-400 italic font-light">Insights</span>
          </Heading>
          <Text className="text-xl">
            Deep dives into architecture, security, and systems engineering from our lead architects.
          </Text>
        </div>
      </Section>

      {/* Blog Posts */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, idx) => (
            <SectionReveal key={post.slug} delay={idx * 0.1}>
              <InteractiveCard className="h-full flex flex-col p-8 group">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2 px-3 py-1 bg-zinc-100 dark:bg-zinc-900 rounded-full border border-zinc-200 dark:border-zinc-800">
                    <Tag className="w-3 h-3 text-zinc-500" />
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-zinc-500">{post.category}</span>
                  </div>
                  <div className="flex items-center gap-2 text-zinc-400">
                    <Clock className="w-3 h-3" />
                    <span className="text-[10px] font-mono uppercase tracking-widest">{post.readTime}</span>
                  </div>
                </div>
                
                <div className="flex-1 space-y-4">
                  <Heading level={3} className="group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors">
                    {post.title}
                  </Heading>
                  <Text variant="small" className="line-clamp-3">
                    {post.excerpt}
                  </Text>
                </div>

                <div className="mt-8 pt-6 border-t border-zinc-100 dark:border-zinc-900 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-zinc-400">
                    <Calendar className="w-3 h-3" />
                    <span className="text-[10px] font-mono uppercase tracking-widest">{post.date}</span>
                  </div>
                  <Link 
                    to={`/blog/${post.slug}`}
                    className="flex items-center gap-2 text-[10px] font-mono font-bold uppercase tracking-widest text-zinc-900 dark:text-white group-hover:translate-x-1 transition-transform"
                  >
                    Read Article <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </InteractiveCard>
            </SectionReveal>
          ))}
        </div>
      </Section>

      {/* Newsletter CTA */}
      <Section variant="muted" className="border-y border-zinc-100 dark:border-zinc-900">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="w-16 h-16 bg-zinc-900 dark:bg-white rounded-2xl flex items-center justify-center mx-auto shadow-xl">
            <BookOpen className="w-8 h-8 text-white dark:text-zinc-900" />
          </div>
          <div className="space-y-4">
            <Heading level={2}>Stay Updated</Heading>
            <Text className="text-lg">
              Get our latest technical articles and engineering guides delivered to your inbox.
            </Text>
          </div>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="engineer@company.com"
              className="flex-1 px-6 py-4 bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-white transition-all"
            />
            <button className="px-8 py-4 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-xl font-bold hover:scale-[1.02] transition-transform">
              Subscribe
            </button>
          </form>
          <Text variant="caption">No spam. Only high-signal technical content.</Text>
        </div>
      </Section>
    </div>
  );
}
