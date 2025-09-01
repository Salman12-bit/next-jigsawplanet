import React from 'react';

export const metadata = {
  title: "Wooden Number Puzzle – Play Free Online Brain Game",
  description:
    "Play Wooden Number Puzzle online for free! Slide the wooden tiles, arrange numbers in order, and challenge your brain with this addictive classic puzzle game.",
  openGraph: {
    title: "Wooden Number Puzzle – Play Free Online Brain Game",
    description:
      "Play Wooden Number Puzzle online for free! Slide the wooden tiles, arrange numbers in order, and challenge your brain with this addictive classic puzzle game.",
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
      "Play Wooden Number Puzzle online for free! Slide the wooden tiles, arrange numbers in order, and challenge your brain with this addictive classic puzzle game.",
    "url": "https://puzzlesplan.com/wooden-number",
    "mainEntity": {
      "@type": ["WebApplication", "OnlineGame"],
      "name": "Wooden Number Puzzle",
      "genre": ["Puzzle", "Number Game", "Brain Training"],
      "applicationCategory": "Game",
      "operatingSystem": "Web",
      "browserRequirements": "HTML5",
      "playMode": "SinglePlayer",
      "url": "https://puzzlesplan.com/wooden-number",
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
        "url": "https://puzzlesplan.com",
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
