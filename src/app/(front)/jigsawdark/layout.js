import React from 'react';

export const metadata = {
  title: "Disney Puzzle | Play Free Online Puzzle Game Now",
  description:
    "Play Disney Puzzle online for free! Solve fun jigsaw puzzles, enjoy magical themes, and start playing instantly with no download required.",
  openGraph: {
    title: "Disney Puzzle | Play Free Online Puzzle Game Now",
    description:
      "Play Disney Puzzle online for free! Solve fun jigsaw puzzles, enjoy magical themes, and start playing instantly with no download required.",
    url: "https://puzzlesplan.com/jigsawdark",
    images: [
      {
        url: "https://puzzlesplan.com/images/darkhistory.webp",
        width: 1200,
        height: 630,
        alt: "Play Disney Puzzle online free on PuzzlesPlan",
      },
    ],
  },
  alternates: {
    canonical: "https://puzzlesplan.com/jigsawdark",
  },
};

export default function Layout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": ["WebApplication", "VideoGame"],
    "name": "Disney Puzzle | Play Free Online Puzzle Game Now",
    "description":
      "Play Disney Puzzle online for free! Solve fun jigsaw puzzles, enjoy magical themes, and start playing instantly with no download required.",
    "url": "https://puzzlesplan.com/jigsawdark",
    "applicationCategory": "GameApplication",
    "operatingSystem": "Web",
    "browserRequirements": "HTML5",
    "inLanguage": "en",
    "genre": "Puzzle",
    "gamePlatform": "Web browser",
    "playMode": "SinglePlayer",
    "image": "https://puzzlesplan.com/images/darkhistory.webp",
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
        "url": "https://puzzlesplan.com/images/darkhistory.webp",
        "width": 500,
        "height": 500
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://puzzlesplan.com/jigsawdark"
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
