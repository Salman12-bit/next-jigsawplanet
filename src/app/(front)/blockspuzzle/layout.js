import React from "react";

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
    "@type": ["WebApplication", "OnlineGame"],
    "name": "Blocks Puzzle",
    "description":
      "Play Blocks Puzzle online for free! Move, fit, and match colorful blocks in this addictive puzzle game. Challenge your brain, relax, and start playing now.",
    "url": "https://puzzlesplan.com/blockspuzzle",
    "applicationCategory": "Game",
    "operatingSystem": "Web",
    "browserRequirements": "HTML5",
    "inLanguage": "en",
    "genre": ["Puzzle", "Block", "Brain Teaser"],
    "gamePlatform": "Web browser",
    "playMode": "SinglePlayer",
    "image": "https://puzzlesplan.com/images/puzzlesplan.webp",
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
