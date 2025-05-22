import React from 'react';

export const metadata = {
  title: "Wooden Number Puzzle Hands-On Math Fun for Kids",
  keywords: "binary number puzzles,number search puzzle",
  description:
    "Explore numbers the fun way with a wooden number puzzle! Boost counting skills, number recognition, and fine motor play through touch.",
  openGraph: {
    title: "Wooden Number Puzzle Hands-On Math Fun for Kids",
    description:
      "Explore numbers the fun way with a wooden number puzzle! Boost counting skills, number recognition, and fine motor play through touch.",
    url: "https://puzzlesplan.com/wooden-number",
    images: [
      {
        url: "https://puzzlesplan.com/images/puzzlesplan.webp",
        width: 1200,
        height: 630,
        alt: "Play binary number puzzles on PuzzlesPlan",
      },
    ],
  },
  alternates: {
    canonical: "https://puzzlesplan.com/wooden-number",
  },
};

export default function Layout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Wooden Number Puzzle Hands-On Math Fun for Kids",
    "description":
      "Explore numbers the fun way with a wooden number puzzle! Boost counting skills, number recognition, and fine motor play through touch.",
    "url": "https://puzzlesplan.com/wooden-number",
    "mainEntity": {
      "@type": "OnlineGame",
      "name": "binary number puzzles",
      "genre": "Puzzle, Number Game",
      "applicationCategory": "Game",
      "operatingSystem": "Web Browser",
      "playMode": "Single Player",
      "url": "https://puzzlesplan.com/wooden-number",
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
      "@id": "https://puzzlesplan.com/wooden-number"
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
