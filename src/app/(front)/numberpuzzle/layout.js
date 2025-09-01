import React from 'react';

export const metadata = {
  title: "Number Puzzle – Play Free Online Brain & Logic Game",
  description:
    "Play Number Puzzle online for free! Arrange numbers, solve tricky puzzles, and challenge your brain with this addictive math and logic game – start now.",
  openGraph: {
    title: "Number Puzzle – Play Free Online Brain & Logic Game",
    description:
      "Play Number Puzzle online for free! Arrange numbers, solve tricky puzzles, and challenge your brain with this addictive math and logic game – start now.",
    url: "https://puzzlesplan.com/numberpuzzle",
    images: [
      {
        url: "https://puzzlesplan.com/images/puzzlesplan.webp",
        width: 1200,
        height: 630,
        alt: "Number Puzzle free online game with tiles and brain teaser challenges",
      },
    ],
  },
  alternates: {
    canonical: "https://puzzlesplan.com/numberpuzzle",
  },
};

export default function Layout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Number Puzzle – Play Free Online Brain & Logic Game",
    "description":
      "Play Number Puzzle online for free! Arrange numbers, solve tricky puzzles, and challenge your brain with this addictive math and logic game – start now.",
    "url": "https://puzzlesplan.com/numberpuzzle",
    "mainEntity": {
      "@type": ["WebApplication", "OnlineGame"],
      "name": "Number Puzzle Game",
      "genre": ["Puzzle", "Logic", "Number Game"],
      "applicationCategory": "Game",
      "operatingSystem": "Web",
      "browserRequirements": "HTML5",
      "playMode": "SinglePlayer",
      "url": "https://puzzlesplan.com/numberpuzzle",
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
        "url": "https://puzzlesplan.com",
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://puzzlesplan.com/numberpuzzle"
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
