import React from "react";

export const metadata = {
  title: "Block Game Play Free Online Puzzle & Block Challenges",
  description:
    "Play Block Game online for free! Move, fit, and clear blocks in this fun and addictive puzzle game. Challenge your brain, relax, and enjoy hours of gameplay today.",
  openGraph: {
    title: "Block Game Play Free Online Puzzle & Block Challenges",
    description:
      "Play Block Game online for free! Move, fit, and clear blocks in this fun and addictive puzzle game. Challenge your brain, relax, and enjoy hours of gameplay today.",
    url: "https://puzzlesplan.com/blockgame",
    images: [
      {
        url: "https://puzzlesplan.com/images/puzzlesplan.webp",
        width: 1200,
        height: 630,
        alt: "Block game online with awesome puzzle blocks",
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
    "@type": ["WebApplication", "OnlineGame"],
    "name": "Block Game",
    "description":
      "Play Block Game online for free! Move, fit, and clear blocks in this fun and addictive puzzle game. Challenge your brain, relax, and enjoy hours of gameplay today.",
    "url": "https://puzzlesplan.com/blockgame",
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
