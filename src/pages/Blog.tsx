import Section from '../components/Section';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock, User } from 'lucide-react';

const blogPosts = [
  {
    id: 'scaling-healthcare-systems',
    title: 'Scaling Healthcare Systems: Lessons from the Field',
    excerpt: 'How we approached the modernization of a legacy EMR system for a multi-clinic network.',
    author: 'Sarah Chen',
    date: 'March 15, 2026',
    readTime: '8 min read',
    category: 'Engineering',
    imageUrl: 'https://picsum.photos/seed/healthcare-blog/800/500'
  },
  {
    id: 'event-driven-architectures',
    title: 'Why Event-Driven Architectures are the Future of Enterprise Software',
    excerpt: 'Exploring the benefits of decoupling systems using Kafka and event-driven patterns.',
    author: 'Marcus Thorne',
    date: 'March 10, 2026',
    readTime: '12 min read',
    category: 'Architecture',
    imageUrl: 'https://picsum.photos/seed/architecture-blog/800/500'
  },
  {
    id: 'offline-first-apps',
    title: 'Building Offline-First Applications for Remote Operations',
    excerpt: 'Strategies for data synchronization and conflict resolution in low-connectivity environments.',
    author: 'Elena Vance',
    date: 'March 5, 2026',
    readTime: '10 min read',
    category: 'Development',
    imageUrl: 'https://picsum.photos/seed/offline-blog/800/500'
  }
];

export default function Blog() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <Section className="bg-zinc-50 dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-900">
        <div className="max-w-3xl space-y-6">
          <h1 className="text-sm font-bold uppercase tracking-[0.3em] text-zinc-500">Blog</h1>
          <h2 className="text-5xl md:text-7xl font-bold text-zinc-900 dark:text-white leading-tight">
            Engineering <span className="text-zinc-500 italic">Insights</span>
          </h2>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Deep dives into system architecture, healthcare technology, and 
            the future of enterprise software development.
          </p>
        </div>
      </Section>

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {blogPosts.map((post) => (
            <article key={post.id} className="group space-y-6">
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-900">
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-sm rounded-full text-[10px] font-bold uppercase tracking-widest text-zinc-900 dark:text-white border border-white/20">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-xs text-zinc-500 font-medium">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {post.readTime}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-white group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors leading-tight">
                  {post.title}
                </h3>
                <p className="text-zinc-500 dark:text-zinc-400 line-clamp-3 text-sm leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-zinc-100 dark:border-zinc-900">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center">
                      <User className="w-3 h-3 text-zinc-500" />
                    </div>
                    <span className="text-xs font-bold text-zinc-900 dark:text-white">{post.author}</span>
                  </div>
                  <Link
                    to={`/blog/${post.id}`}
                    className="text-xs font-bold uppercase tracking-widest text-zinc-900 dark:text-white flex items-center gap-1 group/link"
                  >
                    Read More <ArrowRight className="w-3 h-3 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* Newsletter */}
      <Section variant="muted" className="text-center">
        <div className="max-w-2xl mx-auto space-y-8">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">Subscribe to Engineering Insights</h2>
          <p className="text-zinc-500 dark:text-zinc-400">
            Get our latest articles on system architecture and enterprise software delivered to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-4 py-3 bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-white transition-all"
            />
            <button className="px-6 py-3 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-xl font-bold hover:opacity-90 transition-opacity">
              Subscribe
            </button>
          </form>
        </div>
      </Section>
    </div>
  );
}
