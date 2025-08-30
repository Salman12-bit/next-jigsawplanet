import React from 'react';

export const metadata = {
  title: "Number Board Game – Play Free Online Puzzle Game",
  description:
    "Play Number Board Game online for free! Arrange numbers on the board, solve fun puzzles, and challenge your brain with this addictive logic game – start now.",
  openGraph: {
    title: "Number Board Game – Play Free Online Puzzle Game",
    description:
      "Play Number Board Game online for free! Arrange numbers on the board, solve fun puzzles, and challenge your brain with this addictive logic game – start now.",
    url: "https://puzzlesplan.com/number-game",
    images: [
      {
        url: "https://puzzlesplan.com/images/puzzlesplan.webp",
        width: 1200,
        height: 630,
        alt: "Number Board Game free online puzzle with numbered tiles on a board",
      },
    ],
  },
  alternates: {
    canonical: "https://puzzlesplan.com/number-game",
  },
};

export default function Layout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Number Board Game – Play Free Online Puzzle Game",
    "description":
      "Play Number Board Game online for free! Arrange numbers on the board, solve fun puzzles, and challenge your brain with this addictive logic game – start now.",
    "url": "https://puzzlesplan.com/number-game",
    "mainEntity": {
      "@type": "OnlineGame",
      "name": "Number Puzzle Game",
      "genre": "Puzzle, Number Game",
      "applicationCategory": "Game",
      "operatingSystem": "Web Browser",
      "playMode": "Single Player",
      "url": "https://puzzlesplan.com/number-game",
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
      "@id": "https://puzzlesplan.com/number-game"
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
