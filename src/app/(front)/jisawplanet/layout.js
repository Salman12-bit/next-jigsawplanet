import React from 'react';

export const metadata = {
  title: "Puzzles for Adults – Relax & Challenge Your Mind Online",
  keywords: "days of our lives puzzles,zoroxtv puzzle",
  description:
    "Discover puzzles for adults online! Challenge your mind, relax, and enjoy hours of fun with our brain-boosting puzzle games – play now!",
  openGraph: {
    title: "Puzzles for Adults – Relax & Challenge Your Mind Online",
    description:
      "Discover puzzles for adults online! Challenge your mind, relax, and enjoy hours of fun with our brain-boosting puzzle games – play now!",
    url: "https://puzzlesplan.com/jisawplanet",
    images: [
      {
        url: "https://puzzlesplan.com/images/treeriver.webp",
        width: 1200,
        height: 630,
        alt: "Adult puzzle game with challenging brain-teasing pieces",
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
    "name": "Puzzles for Adults – Relax & Challenge Your Mind Online",
    "description":
      "Discover puzzles for adults online! Challenge your mind, relax, and enjoy hours of fun with our brain-boosting puzzle games – play now!",
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
