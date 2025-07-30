import React from 'react';

export const metadata = {
  title: "JigsawPlanet Play Free Online Jigsaw Puzzles Now",
  keywords: "jigsaw,jp puzzle",
  description:
    "Explore JigsawPlanet and enjoy thousands of free jigsaw puzzles. Fun, relaxing, and perfect for puzzle lovers of every age!",
  openGraph: {
    title: "JigsawPlanet. Play Free Online Jigsaw Puzzles Now",
    description:
      "Explore JigsawPlanet and enjoy thousands of free jigsaw puzzles. Fun, relaxing, and perfect for puzzle lovers of every age!",
    url: "https://puzzlesplan.com/jigsawdark",
    images: [
      {
        url: "https://puzzlesplan.com/images/darkhistory.webp",
        width: 1200,
        height: 630,
        alt: "Play jigsaw on PuzzlesPlan",
      },
    ],
  },
  alternates: {
    canonical: "https://puzzlesplan.com/jigsawdark",
  },
};

export default function Layout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "JigsawPlanet. Play Free Online Jigsaw Puzzles Now",
    "description":
      "Explore JigsawPlanet and enjoy thousands of free jigsaw puzzles. Fun, relaxing, and perfect for puzzle lovers of every age!",
    "url": "https://puzzlesplan.com/jigsawdark",
    "mainEntity": {
      "@type": "OnlineGame",
      "name": "puzzle planet",
      "genre": "Action, Puzzle",
      "applicationCategory": "Game",
      "operatingSystem": "Web Browser",
      "playMode": "Double Player",
      "url": "https://puzzlesplan.com/jigsawdark",
      "image": {
        "@type": "ImageObject",
        "url": "https://puzzlesplan.com/images/darkhistory.webp",
        "width": 1200,
        "height": 630,
      },
      "publisher": {
        "@type": "Organization",
        "name": "PuzzlesPlan",
        "logo": {
          "@type": "ImageObject",
          "url": "https://puzzlesplan.com/images/darkhistory.webp",
          "width": 500,
          "height": 500,
        },
      }
    },
    "primaryImageOfPage": {
      "@type": "ImageObject",
      "url": "https://puzzlesplan.com/images/darkhistory.webp",
      "width": 1200,
      "height": 630,
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://puzzlesplan.com/jigsawdark"
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
