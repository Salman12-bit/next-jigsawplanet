import React from 'react';

export const metadata = {
  title: "Alphabet Sound Puzzle – Play Fun ABC Learning Game Online",
  description:
    "Play Alphabet Sound Puzzle online! Learn letters and sounds through fun interactive puzzles – start playing and learning today.",
  openGraph: {
    title: "Alphabet Sound Puzzle – Play Fun ABC Learning Game Online",
    description:
      "Play Alphabet Sound Puzzle online! Learn letters and sounds through fun interactive puzzles – start playing and learning today.",
    url: "https://puzzlesplan.com/wooden-puzzle",
    images: [
      {
        url: "https://puzzlesplan.com/images/puzzlesplan.webp",
        width: 1200,
        height: 630,
        alt: "Alphabet sound puzzle game teaching kids letters and ABC sounds",
      },
    ],
  },
  alternates: {
    canonical: "https://puzzlesplan.com/wooden-puzzle",
  },
};

export default function Layout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": ["OnlineGame", "WebApplication"],
    "name": "Alphabet Sound Puzzle – Play Fun ABC Learning Game Online",
    "description":
      "Play Alphabet Sound Puzzle online! Learn letters and sounds through fun interactive puzzles – start playing and learning today.",
    "url": "https://puzzlesplan.com/wooden-puzzle",
    "genre": ["Puzzle", "Educational", "Kids Game"],
    "applicationCategory": "Game",
    "operatingSystem": "Web",
    "browserRequirements": "HTML5",
    "playMode": "SinglePlayer",
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
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://puzzlesplan.com/wooden-puzzle"
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
