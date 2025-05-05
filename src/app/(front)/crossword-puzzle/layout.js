import React from 'react';

export const metadata = {
  title: "Number Crossword Puzzle Sharpen Math Skills Playfully",
  keywords: "number puzzle crossword,number fill in puzzle",
  description:
    "Try number crossword puzzles for a smart twist on classic word games! Solve clues with numbers and boost logical thinking the fun way.",
  openGraph: {
    title: "Number Crossword Puzzle Sharpen Math Skills Playfully",
    description:
      "Try number crossword puzzles for a smart twist on classic word games! Solve clues with numbers and boost logical thinking the fun way.",
    url: "https://puzzlesplan.com/crossword-puzzle",
    images: [
      {
        url: "https://puzzlesplan.com/images/puzzlesplan.webp",
        width: 1200,
        height: 630,
        alt: "Play number puzzle crossword on PuzzlesPlan",
      },
    ],
  },
  alternates: {
    canonical: "https://puzzlesplan.com/crossword-puzzle",
  },
};

export default function Layout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Number Crossword Puzzle Sharpen Math Skills Playfully",
    "description":
      "Try number crossword puzzles for a smart twist on classic word games! Solve clues with numbers and boost logical thinking the fun way.",
    "url": "https://puzzlesplan.com/crossword-puzzle",
    "mainEntity": {
      "@type": "OnlineGame",
      "name": "Number Puzzle Game",
      "genre": "Puzzle, Number Game",
      "applicationCategory": "Game",
      "operatingSystem": "Web Browser",
      "playMode": "Single Player",
      "url": "https://puzzlesplan.com/crossword-puzzle",
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
      "@id": "https://puzzlesplan.com/crossword-puzzle"
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
