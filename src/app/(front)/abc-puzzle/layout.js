import React from 'react';

export const metadata = {
  title: "ABC Puzzle – Play Fun & Educational Letter Games Online",
  description:
    "Play ABC Puzzle online and make learning letters fun! Solve interactive puzzles, match ABCs, and enjoy an educational game designed to boost kids’ learning skills – start playing today.",
  openGraph: {
    title: "ABC Puzzle – Play Fun & Educational Letter Games Online",
    description:
      "Play ABC Puzzle online and make learning letters fun! Solve interactive puzzles, match ABCs, and enjoy an educational game designed to boost kids’ learning skills – start playing today.",
    url: "https://puzzlesplan.com/abc-puzzle",
    images: [
      {
        url: "https://puzzlesplan.com/images/puzzlesplan.webp",
        width: 1200,
        height: 630,
        alt: "ABC puzzle game with colorful letters for kids learning online",
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
    "name": "ABC Puzzle – Play Fun & Educational Letter Games Online",
    "description":
      "Play ABC Puzzle online and make learning letters fun! Solve interactive puzzles, match ABCs, and enjoy an educational game designed to boost kids’ learning skills – start playing today.",
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
