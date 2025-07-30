import React from 'react';

export const metadata = {
  title: "Explore JigsawPlanet Free Online Puzzles for Fun",
  keywords: "jicsaw planet, online piece,jigsaw,online jigsaw puzzles, free jigsaw puzzle games, play puzzles online, digital puzzle games, brain games 2025, relaxing online games, mindfulness puzzles, educational jigsaw puzzles, interactive puzzle platform, puzzle games for kids and adults,",
  description:
    "Dive into JigsawPlanet and solve free jigsaw puzzles anytime! Enjoy relaxing, brain-boosting fun with thousands of puzzles to explore.",
  openGraph: {
    title: "Explore JigsawPlanet Free Online Puzzles for Fun",
    description:
      "Dive into JigsawPlanet and solve free jigsaw puzzles anytime! Enjoy relaxing, brain-boosting fun with thousands of puzzles to explore.",
    url: "https://puzzlesplan.com/",
    images: [
      {
        url: "https://puzzlesplan.com/images/puzzlesplan.webp",
        width: 1200,
        height: 630,
        alt: "Explore and play puzzles on PuzzlesPlan",
      },
    ],
  },
  alternates: {
    canonical: "https://puzzlesplan.com",
  },
};

export default function Layout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Explore JigsawPlanet Free Online Puzzles for Fun",
    "url": "https://puzzlesplan.com",
    "description":
      "Dive into JigsawPlanet and solve free jigsaw puzzles anytime! Enjoy relaxing, brain-boosting fun with thousands of puzzles to explore.",
    "publisher": {
      "@type": "Organization",
      "name": "PuzzlesPlan",
      "logo": {
        "@type": "ImageObject",
        "url": "https://puzzlesplan.com/images/puzzlesplan.webp",
        "width": 500,
        "height": 500
      }
    },
    "image": {
      "@type": "ImageObject",
      "url": "https://puzzlesplan.com/images/puzzlesplan.webp",
      "width": 1200,
      "height": 630
    },
    "primaryImageOfPage": {
      "@type": "ImageObject",
      "url": "https://puzzlesplan.com/images/puzzlesplan.webp",
      "width": 1200,
      "height": 630
    },
    "mainEntity": {
      "@type": "OnlineGame",
      "name": "Free Online Jigsaw Puzzle Game",
      "applicationCategory": "Game",
      "operatingSystem": "Web Browser",
      "playMode": "Single Player",
      "url": "https://puzzlesplan.com"
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
