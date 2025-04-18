import React from 'react';

export const metadata = {
  title: "Alphabet Puzzle Fun Learning for Kids & Toddlers",
  keywords: "abc puzzle game,alphabet slider,alphabet",
  description:
    "Make learning letters fun with an alphabet puzzle! Perfect for kids to boost letter recognition and early reading skills through play.",
  openGraph: {
    title: "Alphabet Puzzle Fun Learning for Kids & Toddlers",
    description:
      "Make learning letters fun with an alphabet puzzle! Perfect for kids to boost letter recognition and early reading skills through play.",
    url: "https://puzzlesplan.com/alphabetpuzzle",
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
    canonical: "https://puzzlesplan.com/alphabetpuzzle",
  },
};

export default function Layout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Alphabet Puzzle Fun Learning for Kids & Toddlers",
    "description":
      "Make learning letters fun with an alphabet puzzle! Perfect for kids to boost letter recognition and early reading skills through play.",
    "url": "https://puzzlesplan.com/alphabetpuzzle",
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
      "@id": "https://puzzlesplan.com/alphabetpuzzle",
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
