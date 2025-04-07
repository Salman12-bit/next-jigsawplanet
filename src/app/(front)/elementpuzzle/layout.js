import React from 'react';

export const metadata = {
  title: "Explore Alphabet Puzzles: Unlock Your Word Skills",
  keywords: "alphabet slider puzzle, alphabet sliders, puzzles",
  description:
    "Discover the fun of alphabet puzzles that boost vocabulary and challenge your brain. Enjoy creative word games for all ages!",
  openGraph: {
    title: "Explore Alphabet Puzzles: Unlock Your Word Skills",
    description:
      "Discover the fun of alphabet puzzles that boost vocabulary and challenge your brain. Enjoy creative word games for all ages!",
    url: "https://puzzlesplan.com/elementpuzzle",
    images: [
      {
        url: "https://puzzlesplan.com/images/puzzlesplan.webp",
        width: 1200,
        height: 630,
        alt: "Play alphabet slider puzzle game on PuzzlesPlan",
      },
    ],
  },
  alternates: {
    canonical: "https://puzzlesplan.com/elementpuzzle",
  },
};

export default function Layout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Explore Alphabet Puzzles: Unlock Your Word Skills",
    "description":
      "Discover the fun of alphabet puzzles that boost vocabulary and challenge your brain. Enjoy creative word games for all ages!",
    "url": "https://puzzlesplan.com/elementpuzzle",
    "mainEntity": {
      "@type": "OnlineGame",
      "name": "Explore Alphabet Puzzles: Unlock Your Word Skills",
      "genre": "Action, Puzzle",
      "applicationCategory": "Game",
      "operatingSystem": "Web Browser",
      "playMode": "Single Player",
      "url": "https://puzzlesplan.com/elementpuzzle",
      "image": {
        "@type": "ImageObject",
        "url": "https://puzzlesplan.com/images/puzzlesplan.webp",
        "width": 1200,
        "height": 630,
      },
      "publisher": {
        "@type": "Organization",
        "name": "PuzzlesPlan",
        "logo": {
          "@type": "ImageObject",
          "url": "https://puzzlesplan.com/images/puzzlesplan.webp",
          "width": 500,
          "height": 500,
        },
      }
    },
    "primaryImageOfPage": {
      "@type": "ImageObject",
      "url": "https://puzzlesplan.com/images/puzzlesplan.webp",
      "width": 1200,
      "height": 630,
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://puzzlesplan.com/elementpuzzle"
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
