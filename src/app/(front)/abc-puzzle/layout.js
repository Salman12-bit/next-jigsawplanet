import React from 'react';

export const metadata = {
  title: "ABC Puzzle Fun Way to Learn Letters Through Play",
  keywords: "abc puzzles,abc animal puzzle",
  description:
    "Boost letter recognition and fine motor skills with an ABC puzzle! A playful, hands-on way to help young learners explore the alphabet.",
  openGraph: {
    title: "ABC Puzzle Fun Way to Learn Letters Through Play",
    description:
      "Boost letter recognition and fine motor skills with an ABC puzzle! A playful, hands-on way to help young learners explore the alphabet.",
    url: "https://puzzlesplan.com/abc-puzzle",
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
    canonical: "https://puzzlesplan.com/abc-puzzle",
  },
};

export default function Layout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "ABC Puzzle Fun Way to Learn Letters Through Play",
    "description":
      "Boost letter recognition and fine motor skills with an ABC puzzle! A playful, hands-on way to help young learners explore the alphabet.",
    "url": "https://puzzlesplan.com/abc-puzzle",
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
      "@id": "https://puzzlesplan.com/abc-puzzle",
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
