import React from 'react';

export const metadata = {
  title: "Block Puzzle Games Relaxing Brain Boosters to Play",
  keywords: "blue block puzzle,block sudoku woody puzzle game",
  description:
    "Enjoy block puzzle games that challenge your logic and keep your mind sharp. A perfect mix of fun, focus, and satisfying gameplay.",
  openGraph: {
    title: "Block Puzzle Games Relaxing Brain Boosters to Play",
    description:
      "Enjoy block puzzle games that challenge your logic and keep your mind sharp. A perfect mix of fun, focus, and satisfying gameplay.",
    url: "https://puzzlesplan.com/woody-block",
    images: [
      {
        url: "https://puzzlesplan.com/images/puzzlesplan.webp",
        width: 1200,
        height: 630,
        alt: "Play blue block puzzle on PuzzlesPlan",
      },
    ],
  },
  alternates: {
    canonical: "https://puzzlesplan.com/woody-block",
  },
};

export default function Layout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Block Puzzle Games Relaxing Brain Boosters to Play",
    "description":
      "Enjoy block puzzle games that challenge your logic and keep your mind sharp. A perfect mix of fun, focus, and satisfying gameplay.",
    "url": "https://puzzlesplan.com/woody-block",
    "mainEntity": {
      "@type": "OnlineGame",
      "name": "puzzlesplan",
      "genre": "Action, Puzzle",
      "applicationCategory": "Game",
      "operatingSystem": "Web Browser",
      "playMode": "Single Player",
      "url": "https://puzzlesplan.com/woody-block",
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
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://puzzlesplan.com/woody-block"
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
