import React from 'react';

export const metadata = {
  title: "Blocks Puzzle – Play Free Online Block Game & Challenge Your Mind",
  description:
    "Play Blocks Puzzle online for free! Move, fit, and match colorful blocks in this addictive puzzle game. Challenge your brain, relax, and start playing now.",
  openGraph: {
    title: "Blocks Puzzle – Play Free Online Block Game & Challenge Your Mind",
    description:
      "Play Blocks Puzzle online for free! Move, fit, and match colorful blocks in this addictive puzzle game. Challenge your brain, relax, and start playing now.",
    url: "https://puzzlesplan.com/blockspuzzle",
    images: [
      {
        url: "https://puzzlesplan.com/images/puzzlesplan.webp",
        width: 1200,
        height: 630,
        alt: "Blocks puzzle online game with colorful blocks and addictive gameplay",
      },
    ],
  },
  alternates: {
    canonical: "https://puzzlesplan.com/blockspuzzle",
  },
};

export default function Layout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Blocks Puzzle – Play Free Online Block Game & Challenge Your Mind",
    "description":
      "Play Blocks Puzzle online for free! Move, fit, and match colorful blocks in this addictive puzzle game. Challenge your brain, relax, and start playing now.",
    "url": "https://puzzlesplan.com/blockspuzzle",
    "mainEntity": {
      "@type": "OnlineGame",
      "name": "Blocks Puzzle Fun Brain Game for All Ages",
      "genre": "Action, Puzzle",
      "applicationCategory": "Game",
      "operatingSystem": "Web Browser",
      "playMode": "Single Player",
      "url": "https://puzzlesplan.com/blockspuzzle",
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
      "@id": "https://puzzlesplan.com/blockspuzzle"
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
