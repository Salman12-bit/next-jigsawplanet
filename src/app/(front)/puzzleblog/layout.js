import React from 'react';

export const metadata = {
  title: "Jigsaw Puzzle Blog – Tips, Guides & News for Puzzle Lovers",
  keywords: "jigsaw player,jigsaw lover,jigsaw creator",
  description:
    "Explore the ultimate jigsaw puzzle blog! Find tips, solving guides, latest puzzle trends, and expert insights for jigsaw players and puzzle lovers.",
  openGraph: {
    title: "Jigsaw Puzzle Blog – Tips, Guides & News for Puzzle Lovers",
    description:
      "Explore the ultimate jigsaw puzzle blog! Find tips, solving guides, latest puzzle trends, and expert insights for jigsaw players and puzzle lovers.",
    url: "https://puzzlesplan.com/puzzleblog",
    images: [
      {
        url: "https://puzzlesplan.com/images/lagerpuzzle.webp",
        width: 1200,
        height: 630,
        alt: "Read this article on puzzlesplan",
      },
    ],
  },
  alternates: {
    canonical: "https://puzzlesplan.com/puzzleblog",
  },
};

export default function Layout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": ["WebPage", "Blog"],
    "name": "Jigsaw Puzzle Blog – Tips, Guides & News for Puzzle Lovers",
    "description":
      "Explore the ultimate jigsaw puzzle blog! Find tips, solving guides, latest puzzle trends, and expert insights for jigsaw players and puzzle lovers.",
    "url": "https://puzzlesplan.com/puzzleblog",
    "publisher": {
      "@type": "Organization",
      "name": "PuzzlesPlan",
      "url": "https://puzzlesplan.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://puzzlesplan.com/images/lagerpuzzle.webp",
        "width": 500,
        "height": 500
      }
    },
    "image": {
      "@type": "ImageObject",
      "url": "https://puzzlesplan.com/images/lagerpuzzle.webp",
      "width": 1200,
      "height": 630
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://puzzlesplan.com/puzzleblog"
    }
  };

  return (
    <>
      {children}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
    </>
  );
}
