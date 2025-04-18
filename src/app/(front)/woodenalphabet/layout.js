import React from 'react';

export const metadata = {
  title: "Wooden Alphabet Puzzle Fun Learning for Kids",
  keywords: "wood alphabet puzzle,alphabet wooden puzzles",
  description:
    "Teach letters the fun way with a wooden alphabet puzzle! Safe, hands-on learning that helps kids recognize letters and build early skills.",
  openGraph: {
    title: "Wooden Alphabet Puzzle Fun Learning for Kids",
    description:
      "Teach letters the fun way with a wooden alphabet puzzle! Safe, hands-on learning that helps kids recognize letters and build early skills.",
    url: "https://puzzlesplan.com/woodenalphabet",
    images: [
      {
        url: "https://puzzlesplan.com/images/puzzlesplan.webp",
        width: 1200,
        height: 630,
        alt: "Play alphabet wooden puzzles on PuzzlesPlan",
      },
    ],
  },
  alternates: {
    canonical: "https://puzzlesplan.com/woodenalphabet",
  },
};

export default function Layout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Wooden Alphabet Puzzle Fun Learning for Kids",
    "description":
      "Teach letters the fun way with a wooden alphabet puzzle! Safe, hands-on learning that helps kids recognize letters and build early skills.",
    "url": "https://puzzlesplan.com/woodenalphabet",
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
      "@id": "https://puzzlesplan.com/woodenalphabet",
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
