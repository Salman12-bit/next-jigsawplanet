import React from 'react';

export const metadata = {
  title: "Blocks Puzzle: Fun Brain Game for All Ages",
  keywords: "alphabet slider puzzle, alphabet sliders, puzzles",
  description:
    " Enjoy the blocks puzzle game that sharpens your mind! Fit the pieces, solve the challenge, and have hours of relaxing, brain-boosting fun.",
  openGraph: {
    title: "Blocks Puzzle: Fun Brain Game for All Ages",
    description:
      " Enjoy the blocks puzzle game that sharpens your mind! Fit the pieces, solve the challenge, and have hours of relaxing, brain-boosting fun.",
    url: "https://puzzlesplan.com/elementpuzzle",
    images: [
      {
        url: "https://puzzlesplan.com/images/puzzlesplan.webp",
        width: 1200,
        height: 630,
        alt: "Play alphabet slider puzzle game on PuzzlesPlan",
      },
    ],
  },
  alternates: {
    canonical: "https://puzzlesplan.com/elementpuzzle",
  },
};

export default function Layout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Blocks Puzzle: Fun Brain Game for All Ages",
    "description":
      " Enjoy the blocks puzzle game that sharpens your mind! Fit the pieces, solve the challenge, and have hours of relaxing, brain-boosting fun.",
    "url": "https://puzzlesplan.com/elementpuzzle",
    "mainEntity": {
      "@type": "OnlineGame",
      "name": "Blocks Puzzle: Fun Brain Game for All Ages",
      "genre": "Action, Puzzle",
      "applicationCategory": "Game",
      "operatingSystem": "Web Browser",
      "playMode": "Single Player",
      "url": "https://puzzlesplan.com/elementpuzzle",
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
      "@id": "https://puzzlesplan.com/elementpuzzle"
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
