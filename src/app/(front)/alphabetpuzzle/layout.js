import React from "react";

export const metadata = {
  title: "Alphabet Puzzle – Play Fun Learning Games Online",
  description:
    "Play Alphabet Puzzle online! Learn letters, solve fun challenges, and enjoy an engaging educational puzzle game – start playing now.",
  openGraph: {
    title: "Alphabet Puzzle – Play Fun Learning Games Online",
    description:
      "Play Alphabet Puzzle online! Learn letters, solve fun challenges, and enjoy an engaging educational puzzle game – start playing now.",
    url: "https://puzzlesplan.com/alphabetpuzzle",
    images: [
      {
        url: "https://puzzlesplan.com/images/puzzlesplan.webp",
        width: 1200,
        height: 630,
        alt: "Alphabet puzzle game with colorful letters and pieces",
      },
    ],
  },
  alternates: {
    canonical: "https://puzzlesplan.com/alphabetpuzzle",
  },
};

export default function Layout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": ["WebApplication", "OnlineGame"],
    "name": "Alphabet Puzzle",
    "description":
      "Play Alphabet Puzzle online! Learn letters, solve fun challenges, and enjoy an engaging educational puzzle game – start playing now.",
    "url": "https://puzzlesplan.com/alphabetpuzzle",
    "applicationCategory": "Game",
    "operatingSystem": "Web",
    "browserRequirements": "HTML5",
    "inLanguage": "en",
    "genre": ["Puzzle", "Educational", "Kids", "Learning"],
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
      "@id": "https://puzzlesplan.com/alphabetpuzzle"
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
