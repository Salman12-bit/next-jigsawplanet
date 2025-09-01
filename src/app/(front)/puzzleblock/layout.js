import React from 'react';

export const metadata = {
  title: "Block Blast Unblocked – Play Free Online Puzzle Game",
  keywords: "sliding block puzzle game free, block puzzle - brain test game",
  description:
    "Play Block Blast Unblocked online for free! Fit the blocks, clear rows, and challenge your brain with this addictive puzzle game. Start playing instantly today.",
  openGraph: {
    title: "Block Blast Unblocked – Play Free Online Puzzle Game",
    description:
      "Play Block Blast Unblocked online for free! Fit the blocks, clear rows, and challenge your brain with this addictive puzzle game. Start playing instantly today.",
    url: "https://puzzlesplan.com/puzzleblock",
    images: [
      {
        url: "https://puzzlesplan.com/images/puzzlesplan.webp",
        width: 1200,
        height: 630,
        alt: "Block Blast Unblocked free online puzzle game with colorful blocks",
      },
    ],
  },
  alternates: {
    canonical: "https://puzzlesplan.com/puzzleblock",
  },
};

export default function Layout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Block Blast Unblocked – Play Free Online Puzzle Game",
    "description":
      "Play Block Blast Unblocked online for free! Fit the blocks, clear rows, and challenge your brain with this addictive puzzle game. Start playing instantly today.",
    "url": "https://puzzlesplan.com/puzzleblock",
    "mainEntity": {
      "@type": ["WebApplication", "OnlineGame"],
      "name": "Block Blast Unblocked",
      "genre": ["Puzzle", "Block", "Logic"],
      "applicationCategory": "Game",
      "operatingSystem": "Web",
      "browserRequirements": "HTML5",
      "playMode": "SinglePlayer",
      "url": "https://puzzlesplan.com/puzzleblock",
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
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://puzzlesplan.com/puzzleblock"
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
