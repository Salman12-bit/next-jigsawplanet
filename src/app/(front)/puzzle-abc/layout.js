import React from 'react';

export const metadata = {
  title: "ABC Puzzle Wooden – Play Fun & Educational Letter Games Online",
  description:
    "Play ABC Puzzle Wooden online and make learning the alphabet fun! Solve interactive letter puzzles, boost memory, and enjoy an educational game designed to help kids learn ABCs – start playing today.",
  openGraph: {
    title: "ABC Puzzle Wooden – Play Fun & Educational Letter Games Online",
    description:
      "Play ABC Puzzle Wooden online and make learning the alphabet fun! Solve interactive letter puzzles, boost memory, and enjoy an educational game designed to help kids learn ABCs – start playing today.",
    url: "https://puzzlesplan.com/puzzle-abc",
    images: [
      {
        url: "https://puzzlesplan.com/images/puzzlesplan.webp",
        width: 1200,
        height: 630,
        alt: "ABC Puzzle Wooden game with colorful alphabet letters for kids learning online",
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
    "name": "ABC Puzzle Wooden – Play Fun & Educational Letter Games Online",
    "description":
      "Play ABC Puzzle Wooden online and make learning the alphabet fun! Solve interactive letter puzzles, boost memory, and enjoy an educational game designed to help kids learn ABCs – start playing today.",
    "url": "https://puzzlesplan.com/puzzle-abc",
    "mainEntity": {
      "@type": ["WebApplication", "OnlineGame"],
      "name": "Puzzle ABC",
      "genre": ["Puzzle", "Educational", "Alphabet"],
      "applicationCategory": "Game",
      "operatingSystem": "Web",
      "browserRequirements": "HTML5",
      "playMode": "SinglePlayer",
      "url": "https://puzzlesplan.com/puzzle-abc",
      "image": {
        "@type": "ImageObject",
        "url": "https://puzzlesplan.com/images/puzzlesplan.webp",
        "width": 1200,
        "height": 630
      },
      "offers": {
        "@type": "Offer",
        "price": 0,
        "priceCurrency": "USD"
      },
      "publisher": {
        "@type": "Organization",
        "name": "PuzzlesPlan",
        "url": "https://puzzlesplan.com"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://puzzlesplan.com/puzzle-abc"
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
