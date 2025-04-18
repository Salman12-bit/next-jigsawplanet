import React from 'react';

export const metadata = {
  title: "Block Puzzle Game Fun & Addictive Brain Challenge",
  keywords: "block puzzle games free,block puzzle high score",
  description:
    "Play the block puzzle game to relax and train your brain! Fit blocks, clear rows, and enjoy endless fun for kids and adults alike.",
  openGraph: {
    title: "Block Puzzle Game Fun & Addictive Brain Challenge",
    description:
      "Play the block puzzle game to relax and train your brain! Fit blocks, clear rows, and enjoy endless fun for kids and adults alike.",
    url: "https://puzzlesplan.com/blockgame",
    images: [
      {
        url: "https://puzzlesplan.com/images/puzzlesplan.webp",
        width: 1200,
        height: 630,
        alt: "Play block puzzle high score on PuzzlesPlan",
      },
    ],
  },
  alternates: {
    canonical: "https://puzzlesplan.com/blockgame",
  },
};

export default function Layout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Block Puzzle Game Fun & Addictive Brain Challenge",
    "description":
      "Play the block puzzle game to relax and train your brain! Fit blocks, clear rows, and enjoy endless fun for kids and adults alike.",
    "url": "https://puzzlesplan.com/blockgame",
    "mainEntity": {
      "@type": "OnlineGame",
      "name": "puzzlesplan",
      "genre": "Action, Puzzle",
      "applicationCategory": "Game",
      "operatingSystem": "Web Browser",
      "playMode": "Single Player",
      "url": "https://puzzlesplan.com/blockgame",
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
      "@id": "https://puzzlesplan.com/blockgame"
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
