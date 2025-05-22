import React from 'react';

export const metadata = {
  title: "Puzzle ABC Learn the Alphabet Through Play",
  keywords: "a b c puzzle,abc foam puzzle",
  description:
    "Puzzle ABC turns learning into fun! Help kids explore letters, sounds, and spelling with colorful, hands-on alphabet puzzles.",
  openGraph: {
    title: "Puzzle ABC Learn the Alphabet Through Play",
    description:
      "Puzzle ABC turns learning into fun! Help kids explore letters, sounds, and spelling with colorful, hands-on alphabet puzzles.",
    url: "https://puzzlesplan.com/puzzle-abc",
    images: [
      {
        url: "https://puzzlesplan.com/images/puzzlesplan.webp",
        width: 1200,
        height: 630,
        alt: "Play abc animal puzzle on PuzzlesPlan",
      },
    ],
  },
  alternates: {
    canonical: "https://puzzlesplan.com/puzzle-abc",
  },
};

export default function Layout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Puzzle ABC Learn the Alphabet Through Play",
    "description":
      "Puzzle ABC turns learning into fun! Help kids explore letters, sounds, and spelling with colorful, hands-on alphabet puzzles.",
    "url": "https://puzzlesplan.com/puzzle-abc",
    "publisher": {
      "@type": "Organization",
      "name": "PuzzlesPlan",
      "logo": {
        "@type": "ImageObject",
        "url": "https://puzzlesplan.com/images/puzzlesplan.webp",
        "width": 500,
        "height": 500,
      },
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://puzzlesplan.com/puzzle-abc",
    },
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
