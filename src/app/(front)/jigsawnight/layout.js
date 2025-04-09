import React from 'react';

export const metadata = {
  title: "Puzzles Jigsaw: Relaxing Fun for Every Age",
  keywords: "easy jigsaw puzzles,games and jigsaw puzzles,game",
  description:
    "Enjoy puzzles jigsaw for stress-free fun and brain-boosting play. Great for kids, adults, and anyone who loves a good challenge!",
  openGraph: {
    title: "Puzzles Jigsaw: Relaxing Fun for Every Age",
    description:
      "Enjoy puzzles jigsaw for stress-free fun and brain-boosting play. Great for kids, adults, and anyone who loves a good challenge!",
    url: "https://puzzlesplan.com/jigsawnight",
    images: [
      {
        url: "https://puzzlesplan.com/images/nightshift.webp",
        width: 1200,
        height: 630,
        alt: "Play puzzle planet on PuzzlesPlan",
      },
    ],
  },
  alternates: {
    canonical: "https://puzzlesplan.com/jigsawnight",
  },
};

export default function Layout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Puzzles Jigsaw: Relaxing Fun for Every Age",
    "description":
      "Enjoy puzzles jigsaw for stress-free fun and brain-boosting play. Great for kids, adults, and anyone who loves a good challenge!",
    "url": "https://puzzlesplan.com/jigsawnight",
    "mainEntity": {
      "@type": "OnlineGame",
      "name": "puzzle planet",
      "genre": "Action, Puzzle",
      "applicationCategory": "Game",
      "operatingSystem": "Web Browser",
      "playMode": "Double Player",
      "url": "https://puzzlesplan.com/jigsawnight",
      "image": {
        "@type": "ImageObject",
        "url": "https://puzzlesplan.com/images/nightshift.webp",
        "width": 1200,
        "height": 630,
      },
      "publisher": {
        "@type": "Organization",
        "name": "PuzzlesPlan",
        "logo": {
          "@type": "ImageObject",
          "url": "https://puzzlesplan.com/images/nightshift.webp",
          "width": 500,
          "height": 500,
        },
      }
    },
    "primaryImageOfPage": {
      "@type": "ImageObject",
      "url": "https://puzzlesplan.com/images/nightshift.webp",
      "width": 1200,
      "height": 630,
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://puzzlesplan.com/jigsawnight"
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
