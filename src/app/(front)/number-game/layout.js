import React from 'react';

export const metadata = {
  title: "Number Board Game Fun Math Play for All Ages",
  keywords: "number puzzle game,123 puzzle",
  description:
    "Play a number board game that makes math fun! Great for kids and families to learn numbers, count, and boost thinking skills together.",
  openGraph: {
    title: "Number Board Game Fun Math Play for All Ages",
    description:
      "Play a number board game that makes math fun! Great for kids and families to learn numbers, count, and boost thinking skills together.",
    url: "https://puzzlesplan.com/number-game",
    images: [
      {
        url: "https://puzzlesplan.com/images/puzzlesplan.webp",
        width: 1200,
        height: 630,
        alt: "Play number puzzle game on PuzzlesPlan",
      },
    ],
  },
  alternates: {
    canonical: "https://puzzlesplan.com/number-game",
  },
};

export default function Layout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Number Board Game Fun Math Play for All Ages",
    "description":
      "Play a number board game that makes math fun! Great for kids and families to learn numbers, count, and boost thinking skills together.",
    "url": "https://puzzlesplan.com/number-game",
    "mainEntity": {
      "@type": "OnlineGame",
      "name": "Number Puzzle Game",
      "genre": "Puzzle, Number Game",
      "applicationCategory": "Game",
      "operatingSystem": "Web Browser",
      "playMode": "Single Player",
      "url": "https://puzzlesplan.com/number-game",
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
      "@id": "https://puzzlesplan.com/number-game"
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
