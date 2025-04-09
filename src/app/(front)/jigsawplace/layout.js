import React from 'react';

export const metadata = {
  title: " Jigsaw Planet: Play Free Online Jigsaw Puzzles",
  keywords: "childrens jigsaw costume,jigsaw puzzle planet",
  description:
    "Explore Jigsaw Planet for thousands of free jigsaw puzzles. Relax, play, and challenge your brain with fun puzzles for all skill levels!",
  openGraph: {
    title: " Jigsaw Planet: Play Free Online Jigsaw Puzzles",
    description:
      "Explore Jigsaw Planet for thousands of free jigsaw puzzles. Relax, play, and challenge your brain with fun puzzles for all skill levels!",
    url: "https://puzzlesplan.com/jigsawplace",
    images: [
      {
        url: "https://puzzlesplan.com/images/beautifulplace.webp",
        width: 1200,
        height: 630,
        alt: "Play puzzle planet on PuzzlesPlan",
      },
    ],
  },
  alternates: {
    canonical: "https://puzzlesplan.com/jigsawplace",
  },
};

export default function Layout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": " Jigsaw Planet: Play Free Online Jigsaw Puzzles",
    "description":
      "Explore Jigsaw Planet for thousands of free jigsaw puzzles. Relax, play, and challenge your brain with fun puzzles for all skill levels!",
    "url": "https://puzzlesplan.com/jigsawplace",
    "mainEntity": {
      "@type": "OnlineGame",
      "name": "puzzle planet",
      "genre": "Action, Puzzle",
      "applicationCategory": "Game",
      "operatingSystem": "Web Browser",
      "playMode": "Double Player",
      "url": "https://puzzlesplan.com/jigsawplace",
      "image": {
        "@type": "ImageObject",
        "url": "https://puzzlesplan.com/images/beautifulplace.webp",
        "width": 1200,
        "height": 630,
      },
      "publisher": {
        "@type": "Organization",
        "name": "PuzzlesPlan",
        "logo": {
          "@type": "ImageObject",
          "url": "https://puzzlesplan.com/images/beautifulplace.webp",
          "width": 500,
          "height": 500,
        },
      }
    },
    "primaryImageOfPage": {
      "@type": "ImageObject",
      "url": "https://puzzlesplan.com/images/beautifulplace.webp",
      "width": 1200,
      "height": 630,
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://puzzlesplan.com/jigsawplace"
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
