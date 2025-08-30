import React from 'react';

export const metadata = {
  title: "Play Planet Jigsaws Online – Explore the Galaxy in Puzzle Fun",
  description:
    "Play Planet Jigsaws online and explore space through fun puzzles. Unlock levels, challenge your mind, and enjoy galaxy-themed jigsaw adventures today!",
  openGraph: {
    title: "Play Planet Jigsaws Online – Explore the Galaxy in Puzzle Fun",
    description:
      "Play Planet Jigsaws online and explore space through fun puzzles. Unlock levels, challenge your mind, and enjoy galaxy-themed jigsaw adventures today!",
    url: "https://puzzlesplan.com/older-puzzles",
    images: [
      {
        url: "https://puzzlesplan.com/images/eiffeltower.webp",
        width: 1200,
        height: 630,
        alt: "Planet jigsaw puzzle game with space and galaxy pieces",
      },
    ],
  },
  alternates: {
    canonical: "https://puzzlesplan.com/older-puzzles",
  },
};

export default function Layout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Play Planet Jigsaws Online – Explore the Galaxy in Puzzle Fun",
    "description":
      "Play Planet Jigsaws online and explore space through fun puzzles. Unlock levels, challenge your mind, and enjoy galaxy-themed jigsaw adventures today!",
    "url": "https://puzzlesplan.com/older-puzzles",
    "mainEntity": {
      "@type": "OnlineGame",
      "name": "puzel",
      "genre": "Action, Puzzle",
      "applicationCategory": "Game",
      "operatingSystem": "Web Browser",
      "playMode": "Double Player",
      "url": "https://puzzlesplan.com/older-puzzles",
      "image": {
        "@type": "ImageObject",
        "url": "https://puzzlesplan.com/images/eiffeltower.webp",
        "width": 1200,
        "height": 630,
      },
      "publisher": {
        "@type": "Organization",
        "name": "PuzzlesPlan",
        "logo": {
          "@type": "ImageObject",
          "url": "https://puzzlesplan.com/images/eiffeltower.webp",
          "width": 500,
          "height": 500,
        },
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://puzzlesplan.com/older-puzzles"
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
