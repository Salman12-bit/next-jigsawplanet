import React from "react";

export const metadata = {
  title: "ABC Puzzle – Play Fun & Educational Letter Games Online",
  description:
    "Play ABC Puzzle online and make learning letters fun! Solve interactive puzzles, match ABCs, and enjoy an educational game designed to boost kids’ learning skills – start playing today.",
  openGraph: {
    title: "ABC Puzzle – Play Fun & Educational Letter Games Online",
    description:
      "Play ABC Puzzle online and make learning letters fun! Solve interactive puzzles, match ABCs, and enjoy an educational game designed to boost kids’ learning skills – start playing today.",
    url: "https://puzzlesplan.com/abc-puzzle",
    images: [
      {
        url: "https://puzzlesplan.com/images/puzzlesplan.webp",
        width: 1200,
        height: 630,
        alt: "ABC puzzle game with colorful letters for kids learning online",
      },
    ],
  },
  alternates: {
    canonical: "https://puzzlesplan.com/abc-puzzle",
  },
};

export default function Layout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": ["WebApplication", "OnlineGame"],
    "name": "ABC Puzzle",
    "description":
      "Play ABC Puzzle online and make learning letters fun! Solve interactive puzzles, match ABCs, and enjoy an educational game designed to boost kids’ learning skills – start playing today.",
    "url": "https://puzzlesplan.com/abc-puzzle",
    "applicationCategory": "Game",
    "operatingSystem": "Web",
    "browserRequirements": "HTML5",
    "inLanguage": "en",
    "genre": ["Puzzle", "Educational", "Kids"],
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
      "@id": "https://puzzlesplan.com/abc-puzzle"
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
