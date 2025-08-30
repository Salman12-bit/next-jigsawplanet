import React from 'react';

export const metadata = {
  title: "Wooden Number Puzzle – Play Free Online Brain Game",
  description:
    "lay Wooden Number Puzzle online for free! Slide the wooden tiles, arrange numbers in order, and challenge your brain with this addictive classic puzzle game.",
  openGraph: {
    title: "Wooden Number Puzzle – Play Free Online Brain Game",
    description:
      "lay Wooden Number Puzzle online for free! Slide the wooden tiles, arrange numbers in order, and challenge your brain with this addictive classic puzzle game.",
    url: "https://puzzlesplan.com/wooden-number",
    images: [
      {
        url: "https://puzzlesplan.com/images/puzzlesplan.webp",
        width: 1200,
        height: 630,
        alt: "Wooden Number Puzzle free online sliding game with numbered tiles",
      },
    ],
  },
  alternates: {
    canonical: "https://puzzlesplan.com/wooden-number",
  },
};

export default function Layout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Wooden Number Puzzle – Play Free Online Brain Game",
    "description":
      "lay Wooden Number Puzzle online for free! Slide the wooden tiles, arrange numbers in order, and challenge your brain with this addictive classic puzzle game.",
    "url": "https://puzzlesplan.com/wooden-number",
    "mainEntity": {
      "@type": "OnlineGame",
      "name": "binary number puzzles",
      "genre": "Puzzle, Number Game",
      "applicationCategory": "Game",
      "operatingSystem": "Web Browser",
      "playMode": "Single Player",
      "url": "https://puzzlesplan.com/wooden-number",
      "image": {
        "@type": "ImageObject",
        "url": "https://puzzlesplan.com/images/puzzlesplan.webp",
        "width": 1200,
        "height": 630,
      },
      "publisher": {
        "@type": "Organization",
        "name": "PuzzlesPlan",
        "logo": {
          "@type": "ImageObject",
          "url": "https://puzzlesplan.com/images/puzzlesplan.webp",
          "width": 500,
          "height": 500,
        },
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://puzzlesplan.com/wooden-number"
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
