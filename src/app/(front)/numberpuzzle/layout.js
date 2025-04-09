import React from 'react';

export const metadata = {
  title: "Number Puzzle: Fun Math Game to Train Your Brain",
  keywords: "numberpuzzle,block number puzzle",
  description:
    "Challenge your mind with a number puzzle! Solve logic-based math games that boost focus, memory, and problem-solving skills for all ages.",
  openGraph: {
    title: "Number Puzzle: Fun Math Game to Train Your Brain",
    description:
      "Challenge your mind with a number puzzle! Solve logic-based math games that boost focus, memory, and problem-solving skills for all ages.",
    url: "https://puzzlesplan.com/numberpuzzle",
    images: [
      {
        url: "https://puzzlesplan.com/images/puzzlesplan.webp",
        width: 1200,
        height: 630,
        alt: "Play number puzzle game on PuzzlesPlan",
      },
    ],
  },
  alternates: {
    canonical: "https://puzzlesplan.com/numberpuzzle",
  },
};

export default function Layout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Number Puzzle: Fun Math Game to Train Your Brain",
    "description":
      "Challenge your mind with a number puzzle! Solve logic-based math games that boost focus, memory, and problem-solving skills for all ages.",
    "url": "https://puzzlesplan.com/numberpuzzle",
    "mainEntity": {
      "@type": "OnlineGame",
      "name": "Number Puzzle Game",
      "genre": "Puzzle, Number Game",
      "applicationCategory": "Game",
      "operatingSystem": "Web Browser",
      "playMode": "Single Player",
      "url": "https://puzzlesplan.com/numberpuzzle",
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
      "@id": "https://puzzlesplan.com/numberpuzzle"
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
