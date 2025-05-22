import React from 'react';

export const metadata = {
  title: "Older Jigsaw Puzzles Classic Pieces to Enjoy Again",
  keywords: "adult zigsaw puzzles,zigsaw puzzles",
  description:
    "Revisit older jigsaw puzzles with timeless charm. Perfect for collectors or anyone who loves vintage puzzle designs and quiet moments.",
  openGraph: {
    title: "Older Jigsaw Puzzles Classic Pieces to Enjoy Again",
    description:
      "Revisit older jigsaw puzzles with timeless charm. Perfect for collectors or anyone who loves vintage puzzle designs and quiet moments.",
    url: "https://puzzlesplan.com/older-puzzles",
    images: [
      {
        url: "https://puzzlesplan.com/images/eiffeltower.webp",
        width: 1200,
        height: 630,
        alt: "Play jigsaw planet puzzle on PuzzlesPlan",
      },
    ],
  },
  alternates: {
    canonical: "https://puzzlesplan.com/older-puzzles",
  },
};

export default function Layout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Older Jigsaw Puzzles Classic Pieces to Enjoy Again",
    "description":
      "Revisit older jigsaw puzzles with timeless charm. Perfect for collectors or anyone who loves vintage puzzle designs and quiet moments.",
    "url": "https://puzzlesplan.com/older-puzzles",
    "mainEntity": {
      "@type": "OnlineGame",
      "name": "puzel",
      "genre": "Action, Puzzle",
      "applicationCategory": "Game",
      "operatingSystem": "Web Browser",
      "playMode": "Double Player",
      "url": "https://puzzlesplan.com/older-puzzles",
      "image": {
        "@type": "ImageObject",
        "url": "https://puzzlesplan.com/images/eiffeltower.webp",
        "width": 1200,
        "height": 630,
      },
      "publisher": {
        "@type": "Organization",
        "name": "PuzzlesPlan",
        "logo": {
          "@type": "ImageObject",
          "url": "https://puzzlesplan.com/images/eiffeltower.webp",
          "width": 500,
          "height": 500,
        },
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://puzzlesplan.com/older-puzzles"
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
