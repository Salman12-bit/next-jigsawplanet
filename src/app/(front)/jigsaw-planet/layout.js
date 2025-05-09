import React from 'react';

export const metadata = {
  title: "jogsaw puzzles Explore, Solve & Share Online Puzzles",
  keywords: "interactive puzzles,jigsaw planet puzzle",
  description:
    "Visit jogsaw puzzles to play stunning online puzzles, create your own, and challenge friends. A relaxing, interactive puzzle world awaits!",
  openGraph: {
    title: "jogsaw puzzles Explore, Solve & Share Online Puzzles",
    description:
      "Visit jogsaw puzzles to play stunning online puzzles, create your own, and challenge friends. A relaxing, interactive puzzle world awaits!",
    url: "https://puzzlesplan.com/jigsaw-planet",
    images: [
      {
        url: "https://puzzlesplan.com/images/jigsawengine.webp",
        width: 1200,
        height: 630,
        alt: "Play jigsaw planet puzzle on PuzzlesPlan",
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
    "@type": "WebPage",
    "name": "jogsaw puzzles Explore, Solve & Share Online Puzzles",
    "description":
      "Visit jogsaw puzzles to play stunning online puzzles, create your own, and challenge friends. A relaxing, interactive puzzle world awaits!",
    "url": "https://puzzlesplan.com/jigsaw-planet",
    "mainEntity": {
      "@type": "OnlineGame",
      "name": "puzel",
      "genre": "Action, Puzzle",
      "applicationCategory": "Game",
      "operatingSystem": "Web Browser",
      "playMode": "Double Player",
      "url": "https://puzzlesplan.com/jigsaw-planet",
      "image": {
        "@type": "ImageObject",
        "url": "https://puzzlesplan.com/images/jigsawengine.webp",
        "width": 1200,
        "height": 630,
      },
      "publisher": {
        "@type": "Organization",
        "name": "PuzzlesPlan",
        "logo": {
          "@type": "ImageObject",
          "url": "https://puzzlesplan.com/images/jigsawengine.webp",
          "width": 500,
          "height": 500,
        },
      }
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
