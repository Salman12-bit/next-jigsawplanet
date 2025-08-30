import React from 'react';

export const metadata = {
  title: "Puzzle ABC – Play Fun & Educational Letter Games Online",
  description:
    "Play Puzzle ABC online and make learning the alphabet fun! Solve interactive letter puzzles, boost memory, and enjoy an educational game designed to help kids learn ABCs – start playing today.",
  openGraph: {
    title: "Puzzle ABC – Play Fun & Educational Letter Games Online",
    description:
      "Play Puzzle ABC online and make learning the alphabet fun! Solve interactive letter puzzles, boost memory, and enjoy an educational game designed to help kids learn ABCs – start playing today.",
    url: "https://puzzlesplan.com/puzzle-abc",
    images: [
      {
        url: "https://puzzlesplan.com/images/puzzlesplan.webp",
        width: 1200,
        height: 630,
        alt: "Puzzle ABC game with colorful alphabet letters for kids learning online",
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
    "name": "Puzzle ABC – Play Fun & Educational Letter Games Online",
    "description":
      "Play Puzzle ABC online and make learning the alphabet fun! Solve interactive letter puzzles, boost memory, and enjoy an educational game designed to help kids learn ABCs – start playing today.",
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
