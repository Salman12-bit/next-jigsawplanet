import React from 'react';

export const metadata = {
  title: "Letter Puzzles Fun Way to Learn and Play with Words",
  keywords: "missing letter crossword puzzle,victorian puzzle letter",
  description:
    "Enjoy letter puzzles that make learning the alphabet exciting! Boost spelling, memory, and word skills with fun challenges for all ages.",
  openGraph: {
    title: "Letter Puzzles Fun Way to Learn and Play with Words",
    description:
      "Enjoy letter puzzles that make learning the alphabet exciting! Boost spelling, memory, and word skills with fun challenges for all ages.",
    url: "https://puzzlesplan.com/letterpuzzles",
    images: [
      {
        url: "https://puzzlesplan.com/images/puzzlesplan.webp",
        width: 1200,
        height: 630,
        alt: "Play puzzle letter on PuzzlesPlan",
      },
    ],
  },
  alternates: {
    canonical: "https://puzzlesplan.com/letterpuzzles",
  },
};

export default function Layout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Letter Puzzles Fun Way to Learn and Play with Words",
    "description":
      "Enjoy letter puzzles that make learning the alphabet exciting! Boost spelling, memory, and word skills with fun challenges for all ages.",
    "url": "https://puzzlesplan.com/letterpuzzles",
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
      "@id": "https://puzzlesplan.com/letterpuzzles",
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
