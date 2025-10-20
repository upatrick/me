import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: "website" | "article";
  keywords?: string[];
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
}

export default function SEO({
  title = "Patrick Dutra - Desenvolvedor Fullstack",
  description = "Desenvolvedor fullstack focado em desenvolvimento fullstack para criar experiências elegantes que fazem a diferença. Especialista em React, TypeScript, Three.js e design moderno.",
  image = "/sparkles-gradient.svg",
  url = "https://patrickdutra.com",
  type = "website",
  keywords = [
    "desenvolvedor",
    "fullstack",
    "react",
    "typescript",
    "javascript",
    "web",
    "portfolio",
  ],
  author = "Patrick Dutra",
  publishedTime,
  modifiedTime,
}: SEOProps) {
  const siteName = "Patrick Dutra - Portfolio";

  return (
    <Helmet>
      {/* Preload critical resources */}
      <link rel="preload" href="/sparkles-gradient.svg" as="image" />
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        rel="preload"
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
        as="style"
        onload="this.onload=null;this.rel='stylesheet'"
      />
      <noscript>{`
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
        />
      `}</noscript>

      {/* Basic meta tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(", ")} />
      <meta name="author" content={author} />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={siteName} />

      {/* Article specific */}
      {type === "article" && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {type === "article" && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}

      {/* Additional meta tags */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="Portuguese" />
      <meta name="revisit-after" content="7 days" />
      <meta name="theme-color" content="#000000" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: author,
          url: url,
          image: image,
          description: description,
          sameAs: [
            "https://github.com/upatrick",
            "https://www.linkedin.com/feed/update/urn:li:activity:7027077877246377984",
          ],
          knowsAbout: keywords,
          hasOccupation: {
            "@type": "Occupation",
            name: "Desenvolvedor Fullstack",
            occupationLocation: {
              "@type": "City",
              name: "São Paulo",
              addressCountry: "BR",
            },
          },
        })}
      </script>
    </Helmet>
  );
}
