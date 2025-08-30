import React from 'react';

export const metadata = {
  title: "Play Free Jigsaw Puzzles Online | Fun Puzzle Games Now",
  description:
    "Play free Jigsaw Puzzles online and enjoy endless fun! Solve beautiful puzzle pieces, challenge your brain, and start playing instantly with no download required.",
  openGraph: {
    title: "Play Free Jigsaw Puzzles Online | Fun Puzzle Games Now",
    description:
      "Play free Jigsaw Puzzles online and enjoy endless fun! Solve beautiful puzzle pieces, challenge your brain, and start playing instantly with no download required.",
    url: "https://puzzlesplan.com/jigsawplace",
    images: [
      {
        url: "https://puzzlesplan.com/images/beautifulplace.webp",
        width: 1200,
        height: 630,
        alt: "Colorful jigsaw puzzle pieces forming a complete picture",
      },
    ],
  },
  alternates: {
    canonical: "https://puzzlesplan.com/jigsawplace",
  },
};

export default function Layout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": ["WebApplication", "VideoGame"],
    "name": "Play Free Jigsaw Puzzles Online | Fun Puzzle Games Now",
    "description":
      "Play free Jigsaw Puzzles online and enjoy endless fun! Solve beautiful puzzle pieces, challenge your brain, and start playing instantly with no download required.",
    "url": "https://puzzlesplan.com/jigsawplace",
    "applicationCategory": "GameApplication",
    "operatingSystem": "Web",
    "browserRequirements": "HTML5",
    "inLanguage": "en",
    "genre": "Puzzle",
    "gamePlatform": "Web browser",
    "playMode": "SinglePlayer",
    "image": "https://puzzlesplan.com/images/beautifulplace.webp",
    "offers": {
      "@type": "Offer",
      "price": 0,
      "priceCurrency": "USD"
    },
    "publisher": {
      "@type": "Organization",
      "name": "PuzzlesPlan",
      "url": "https://puzzlesplan.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://puzzlesplan.com/images/beautifulplace.webp",
        "width": 500,
        "height": 500
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://puzzlesplan.com/jigsawplace"
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
