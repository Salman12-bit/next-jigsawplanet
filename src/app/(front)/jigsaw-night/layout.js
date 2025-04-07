import React from 'react';

export const metadata = {
  title: "Jigsaw Puzzle Planet: Your Ultimate Puzzle Destination",
  keywords: "puzzle planet, jigsaw planet puzzle, game",
  description:
    "Discover Jigsaw Puzzle Planet, the perfect place to solve, create, and share puzzles online. Fun and engaging for puzzle lovers of all ages!",
  openGraph: {
    title: "Jigsaw Puzzle Planet: Your Ultimate Puzzle Destination",
    description:
      "Discover Jigsaw Puzzle Planet, the perfect place to solve, create, and share puzzles online. Fun and engaging for puzzle lovers of all ages!",
    url: "https://puzzlesplan.com/jigsaw-night",
    images: [
      {
        url: "https://puzzlesplan.com/images/nightshift.webp",
        width: 1200,
        height: 630,
        alt: "Play puzzle planet on PuzzlesPlan",
      },
    ],
  },
  alternates: {
    canonical: "https://puzzlesplan.com/jigsaw-night",
  },
};

export default function Layout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Jigsaw Puzzle Planet: Your Ultimate Puzzle Destination",
    "description":
      "Discover Jigsaw Puzzle Planet, the perfect place to solve, create, and share puzzles online. Fun and engaging for puzzle lovers of all ages!",
    "url": "https://puzzlesplan.com/jigsaw-night",
    "mainEntity": {
      "@type": "OnlineGame",
      "name": "puzzle planet",
      "genre": "Action, Puzzle",
      "applicationCategory": "Game",
      "operatingSystem": "Web Browser",
      "playMode": "Double Player",
      "url": "https://puzzlesplan.com/jigsaw-night",
      "image": {
        "@type": "ImageObject",
        "url": "https://puzzlesplan.com/images/nightshift.webp",
        "width": 1200,
        "height": 630,
      },
      "publisher": {
        "@type": "Organization",
        "name": "PuzzlesPlan",
        "logo": {
          "@type": "ImageObject",
          "url": "https://puzzlesplan.com/images/nightshift.webp",
          "width": 500,
          "height": 500,
        },
      }
    },
    "primaryImageOfPage": {
      "@type": "ImageObject",
      "url": "https://puzzlesplan.com/images/nightshift.webp",
      "width": 1200,
      "height": 630,
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://puzzlesplan.com/jigsaw-night"
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
