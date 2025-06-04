import React from 'react';

export const metadata = {
  title: "Jisaw Planet Escape into Beautiful Puzzle Worlds",
  keywords: "days of our lives puzzles,zoroxtv puzzle",
  description:
    "Dive into Jisaw Planet—where every piece brings peace! Discover heartwarming, calming puzzles to spark joy and soothe your mind.",
  openGraph: {
    title: "Jisaw Planet Escape into Beautiful Puzzle Worlds",
    description:
      "Dive into Jisaw Planet—where every piece brings peace! Discover heartwarming, calming puzzles to spark joy and soothe your mind.",
    url: "https://puzzlesplan.com/jisawplanet",
    images: [
      {
        url: "https://puzzlesplan.com/images/treeriver.webp",
        width: 1200,
        height: 630,
        alt: "Play jigsaw planet puzzle on PuzzlesPlan",
      },
    ],
  },
  alternates: {
    canonical: "https://puzzlesplan.com/jisawplanet",
  },
};

export default function Layout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Jisaw Planet Escape into Beautiful Puzzle Worlds",
    "description":
      "Dive into Jisaw Planet—where every piece brings peace! Discover heartwarming, calming puzzles to spark joy and soothe your mind.",
    "url": "https://puzzlesplan.com/jisawplanet",
    "mainEntity": {
      "@type": "OnlineGame",
      "name": "puzel",
      "genre": "Action, Puzzle",
      "applicationCategory": "Game",
      "operatingSystem": "Web Browser",
      "playMode": "Double Player",
      "url": "https://puzzlesplan.com/jisawplanet",
      "image": {
        "@type": "ImageObject",
        "url": "https://puzzlesplan.com/images/treeriver.webp",
        "width": 1200,
        "height": 630,
      },
      "publisher": {
        "@type": "Organization",
        "name": "PuzzlesPlan",
        "logo": {
          "@type": "ImageObject",
          "url": "https://puzzlesplan.com/images/treeriver.webp",
          "width": 500,
          "height": 500,
        },
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://puzzlesplan.com/jisawplanet"
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
