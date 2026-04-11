import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  pathname?: string;
  image?: string;
  type?: string;
}

export function SEO({ 
  title, 
  description, 
  pathname = '',
  image = 'https://gothamcoders.com/og-image.jpg',
  type = 'website'
}: SEOProps) {
  const siteUrl = 'https://gothamcoders.com';
  const fullUrl = `${siteUrl}${pathname}`;
  
  return (
    <Helmet>
      {/* Standard Meta */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullUrl} />
      
      {/* Open Graph */}
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      
      {/* Twitter */}
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}
