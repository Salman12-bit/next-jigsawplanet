import React from 'react';

export const metadata = {
  title: "Number Wooden Puzzle Learn Numbers Through Play",
  keywords: "wood number puzzle,number puzzle wood",
  description:
    "Make learning fun with a number wooden puzzle! Help kids explore counting, number order, and hands-on math with natural, playful pieces.",
  openGraph: {
    title: "Number Wooden Puzzle Learn Numbers Through Play",
    description:
      "Make learning fun with a number wooden puzzle! Help kids explore counting, number order, and hands-on math with natural, playful pieces.",
    url: "https://puzzlesplan.com/woodenpuzzle",
    images: [
      {
        url: "https://puzzlesplan.com/images/puzzlesplan.webp",
        width: 1200,
        height: 630,
        alt: "Play number puzzle wood on PuzzlesPlan",
      },
    ],
  },
  alternates: {
    canonical: "https://puzzlesplan.com/woodenpuzzle",
  },
};

export default function Layout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Number Wooden Puzzle Learn Numbers Through Play",
    "description":
      "Make learning fun with a number wooden puzzle! Help kids explore counting, number order, and hands-on math with natural, playful pieces.",
    "url": "https://puzzlesplan.com/woodenpuzzle",
    "mainEntity": {
      "@type": "OnlineGame",
      "name": "puzlesplan",
      "genre": "Puzzle, Number Game",
      "applicationCategory": "Game",
      "operatingSystem": "Web Browser",
      "playMode": "Single Player",
      "url": "https://puzzlesplan.com/woodenpuzzle",
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
      "@id": "https://puzzlesplan.com/woodenpuzzle"
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
