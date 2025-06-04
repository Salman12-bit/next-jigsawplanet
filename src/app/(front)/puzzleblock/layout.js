import React from 'react';

export const metadata = {
  title: "Puzzle Block Game Addictive Fun to Train Your Brain",
  keywords: "sliding block puzzle game free,block puzzle - brain test game",
  description:
    "Challenge your mind with a puzzle block game! Easy to play, hard to master—perfect for relaxing or sharpening your thinking skills.",
  openGraph: {
    title: "Puzzle Block Game Addictive Fun to Train Your Brain",
    description:
      "Challenge your mind with a puzzle block game! Easy to play, hard to master—perfect for relaxing or sharpening your thinking skills.",
    url: "https://puzzlesplan.com/puzzleblock",
    images: [
      {
        url: "https://puzzlesplan.com/images/puzzlesplan.webp",
        width: 1200,
        height: 630,
        alt: "Play brain test game on PuzzlesPlan",
      },
    ],
  },
  alternates: {
    canonical: "https://puzzlesplan.com/puzzleblock",
  },
};

export default function Layout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Puzzle Block Game Addictive Fun to Train Your Brain",
    "description":
      "Challenge your mind with a puzzle block game! Easy to play, hard to master—perfect for relaxing or sharpening your thinking skills.",
    "url": "https://puzzlesplan.com/puzzleblock",
    "mainEntity": {
      "@type": "OnlineGame",
      "name": "puzzlesplan",
      "genre": "Action, Puzzle",
      "applicationCategory": "Game",
      "operatingSystem": "Web Browser",
      "playMode": "Single Player",
      "url": "https://puzzlesplan.com/puzzleblock",
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
      "@id": "https://puzzlesplan.com/puzzleblock"
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
