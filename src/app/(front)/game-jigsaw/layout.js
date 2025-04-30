import React from 'react';

export const metadata = {
  title: "Games Jigsaw Puzzles Relaxing Fun for Everyone",
  keywords: "barbie puzzle games,puzel",
  description:
    " Discover games jigsaw puzzles for all ages! Solve relaxing and brain-boosting puzzles anytime—great for kids, adults, and families.",
  openGraph: {
    title: "Games Jigsaw Puzzles Relaxing Fun for Everyone",
    description:
      " Discover games jigsaw puzzles for all ages! Solve relaxing and brain-boosting puzzles anytime—great for kids, adults, and families.",
    url: "https://puzzlesplan.com/game-jigsaw",
    images: [
      {
        url: "https://puzzlesplan.com/images/jigsawsnow.webp",
        width: 1200,
        height: 630,
        alt: "Play puzel on PuzzlesPlan",
      },
    ],
  },
  alternates: {
    canonical: "https://puzzlesplan.com/game-jigsaw",
  },
};

export default function Layout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Games Jigsaw Puzzles Relaxing Fun for Everyone",
    "description":
      " Discover games jigsaw puzzles for all ages! Solve relaxing and brain-boosting puzzles anytime—great for kids, adults, and families.",
    "url": "https://puzzlesplan.com/game-jigsaw",
    "mainEntity": {
      "@type": "OnlineGame",
      "name": "puzel",
      "genre": "Action, Puzzle",
      "applicationCategory": "Game",
      "operatingSystem": "Web Browser",
      "playMode": "Double Player",
      "url": "https://puzzlesplan.com/game-jigsaw",
      "image": {
        "@type": "ImageObject",
        "url": "https://puzzlesplan.com/images/jigsawsnow.webp",
        "width": 1200,
        "height": 630,
      },
      "publisher": {
        "@type": "Organization",
        "name": "PuzzlesPlan",
        "logo": {
          "@type": "ImageObject",
          "url": "https://puzzlesplan.com/images/jigsawsnow.webp",
          "width": 500,
          "height": 500,
        },
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://puzzlesplan.com/game-jigsaw"
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
