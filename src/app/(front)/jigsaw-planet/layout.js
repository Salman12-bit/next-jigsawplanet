import React from "react";

export const metadata = {
  title: "Play Barbie Puzzle Games Online | Free Jigsaw & Fun Challenges",
  description:
    "Play Barbie Puzzle Games online for free! Solve fun jigsaw puzzles, enjoy beautiful Barbie themes, and start playing instantly without downloads.",
  openGraph: {
    title: "Play Barbie Puzzle Games Online | Free Jigsaw & Fun Challenges",
    description:
      "Play Barbie Puzzle Games online for free! Solve fun jigsaw puzzles, enjoy beautiful Barbie themes, and start playing instantly without downloads.",
    url: "https://puzzlesplan.com/jigsaw-planet",
    images: [
      {
        url: "https://puzzlesplan.com/images/jigsawengine.webp",
        width: 1200,
        height: 630,
        alt: "Colorful Barbie puzzle game screenshot with jigsaw pieces being solved online",
      },
    ],
  },
  alternates: {
    canonical: "https://puzzlesplan.com/jigsaw-planet",
  },
};

export default function Layout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": ["WebApplication", "OnlineGame"],
    "name": "Barbie Puzzle Game",
    "description":
      "Play Barbie Puzzle Games online for free! Solve fun jigsaw puzzles, enjoy beautiful Barbie themes, and start playing instantly without downloads.",
    "url": "https://puzzlesplan.com/jigsaw-planet",
    "applicationCategory": "Game",
    "operatingSystem": "Web",
    "browserRequirements": "HTML5",
    "inLanguage": "en",
    "genre": ["Puzzle", "Jigsaw", "Kids"],
    "gamePlatform": "Web browser",
    "playMode": "SinglePlayer",
    "image": "https://puzzlesplan.com/images/jigsawengine.webp",
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
      "@id": "https://puzzlesplan.com/jigsaw-planet"
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
