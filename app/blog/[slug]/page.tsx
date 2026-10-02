import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import BlogArticle from '@/src/views/BlogArticle';
import { posts } from '@/src/views/Blog';

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((item) => item.slug === slug);

  if (!post) {
    return {
      title: 'Engineering Note Not Found',
      robots: { index: false, follow: false },
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.excerpt,
      url: `/blog/${post.slug}`,
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  if (!posts.some((post) => post.slug === slug)) notFound();

  return <BlogArticle slug={slug} />;
}
