import React from 'react';

export const metadata = {
  title: "Free Number Crossword Puzzle Online – Test Your Brain",
  description:
    "Play Number Crossword Puzzle online for free! Solve number clues, fill in the crossword grid, and test your logic with this fun and addictive puzzle game today.",
  openGraph: {
    title: "Free Number Crossword Puzzle Online – Test Your Brain",
    description:
      "Play Number Crossword Puzzle online for free! Solve number clues, fill in the crossword grid, and test your logic with this fun and addictive puzzle game today.",
    url: "https://puzzlesplan.com/woodenpuzzle",
    images: [
      {
        url: "https://puzzlesplan.com/images/puzzlesplan.webp",
        width: 1200,
        height: 630,
        alt: "Number Crossword Puzzle free online game with crossword grid and numbers",
      },
    ],
  },
  alternates: {
    canonical: "https://puzzlesplan.com/woodenpuzzle",
  },
};

export default function Layout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": ["OnlineGame", "WebApplication"],
    "name": "Free Number Crossword Puzzle Online – Test Your Brain",
    "description":
      "Play Number Crossword Puzzle online for free! Solve number clues, fill in the crossword grid, and test your logic with this fun and addictive puzzle game today.",
    "url": "https://puzzlesplan.com/woodenpuzzle",
    "genre": ["Puzzle", "Number Game"],
    "applicationCategory": "Game",
    "operatingSystem": "Web",
    "browserRequirements": "HTML5",
    "playMode": "SinglePlayer",
    "image": {
      "@type": "ImageObject",
      "url": "https://puzzlesplan.com/images/puzzlesplan.webp",
      "width": 1200,
      "height": 630
    },
    "offers": {
      "@type": "Offer",
      "price": 0,
      "priceCurrency": "USD"
    },
    "publisher": {
      "@type": "Organization",
      "name": "PuzzlesPlan",
      "url": "https://puzzlesplan.com"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://puzzlesplan.com/woodenpuzzle"
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
