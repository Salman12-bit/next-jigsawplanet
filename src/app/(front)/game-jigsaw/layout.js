import React from 'react';

export const metadata = {
  title: "Free Planet Puzzle Jigsaw Online – Start Playing Instantly",
  description:
    "Jump into Planet Puzzle Jigsaw and enjoy free online puzzles with exciting levels. Relax, challenge your brain, and play anywhere, anytime.",
  openGraph: {
    title: "Free Planet Puzzle Jigsaw Online – Start Playing Instantly",
    description:
      "Jump into Planet Puzzle Jigsaw and enjoy free online puzzles with exciting levels. Relax, challenge your brain, and play anywhere, anytime.",
    url: "https://puzzlesplan.com/game-jigsaw",
    images: [
      {
        url: "https://puzzlesplan.com/images/jigsawsnow.webp",
        width: 1200,
        height: 630,
        alt: "Planet Puzzle Jigsaw game screenshot with colorful puzzle pieces",
      },
    ],
  },
  alternates: {
    canonical: "https://puzzlesplan.com/game-jigsaw",
  },
};

export default function Layout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": ["WebApplication", "OnlineGame"],
    "name": "Free Planet Puzzle Jigsaw Online – Start Playing Instantly",
    "description":
      "Jump into Planet Puzzle Jigsaw and enjoy free online puzzles with exciting levels. Relax, challenge your brain, and play anywhere, anytime.",
    "url": "https://puzzlesplan.com/game-jigsaw",
    "applicationCategory": "Game",
    "operatingSystem": "Web",
    "browserRequirements": "HTML5",
    "inLanguage": "en",
    "genre": "Puzzle",
    "gamePlatform": "Web browser",
    "playMode": "SinglePlayer",
    "image": "https://puzzlesplan.com/images/jigsawsnow.webp",
    "offers": {
      "@type": "Offer",
      "price": 0,
      "priceCurrency": "USD"
    },
    "publisher": {
      "@type": "Organization",
      "name": "PuzzlesPlan",
      "url": "https://puzzlesplan.com",
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://puzzlesplan.com/game-jigsaw"
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
