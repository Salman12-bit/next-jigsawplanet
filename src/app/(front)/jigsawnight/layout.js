import React from 'react';

export const metadata = {
  title: "Puzzle Table Jigsaw | Play Free Online Puzzle Game",
  keywords: "jigsaw table puzzle, jigsaw puzzle table furniture",
  description:
    "Play Puzzle Table Jigsaw online for free! Enjoy fun levels, match pieces, and challenge your mind. Start playing now and join endless puzzle fun.",
  openGraph: {
    title: "Puzzle Table Jigsaw | Play Free Online Puzzle Game",
    description:
      "Play Puzzle Table Jigsaw online for free! Enjoy fun levels, match pieces, and challenge your mind. Start playing now and join endless puzzle fun.",
    url: "https://puzzlesplan.com/jigsawnight",
    images: [
      {
        url: "https://puzzlesplan.com/images/nightshift.webp",
        width: 1200,
        height: 630,
        alt: "Play Puzzle Table Jigsaw online free on PuzzlesPlan",
      },
    ],
  },
  alternates: {
    canonical: "https://puzzlesplan.com/jigsawnight",
  },
};

export default function Layout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": ["WebApplication", "VideoGame"],
    "name": "Puzzle Table Jigsaw | Play Free Online Puzzle Game",
    "description":
      "Play Puzzle Table Jigsaw online for free! Enjoy fun levels, match pieces, and challenge your mind. Start playing now and join endless puzzle fun.",
    "url": "https://puzzlesplan.com/jigsawnight",
    "applicationCategory": "GameApplication",
    "operatingSystem": "Web",
    "browserRequirements": "HTML5",
    "inLanguage": "en",
    "genre": "Puzzle",
    "gamePlatform": "Web browser",
    "playMode": "SinglePlayer",
    "image": "https://puzzlesplan.com/images/nightshift.webp",
    "offers": {
      "@type": "Offer",
      "price": 0,
      "priceCurrency": "USD"
    },
    "publisher": {
      "@type": "Organization",
      "name": "PuzzlesPlan",
      "url": "https://puzzlesplan.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://puzzlesplan.com/images/nightshift.webp",
        "width": 500,
        "height": 500
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://puzzlesplan.com/jigsawnight"
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
