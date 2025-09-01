import React from 'react';

export const metadata = {
  title: "Play Wood Block Puzzle – Free Online Puzzle Game Now",
  description:
    "Wood Block Puzzle is a free online game where you place wooden blocks and solve fun challenges. Train your brain, relax, and enjoy endless puzzle fun now.",
  openGraph: {
    title: "Play Wood Block Puzzle – Free Online Puzzle Game Now",
    description:
      "Wood Block Puzzle is a free online game where you place wooden blocks and solve fun challenges. Train your brain, relax, and enjoy endless puzzle fun now.",
    url: "https://puzzlesplan.com/woodblock",
    images: [
      {
        url: "https://puzzlesplan.com/images/puzzlesplan.webp",
        width: 1200,
        height: 630,
        alt: "Wood block puzzle online game with wooden blocks and addictive gameplay",
      },
    ],
  },
  alternates: {
    canonical: "https://puzzlesplan.com/woodblock",
  },
};

export default function Layout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Play Wood Block Puzzle – Free Online Puzzle Game Now",
    "description":
      "Wood Block Puzzle is a free online game where you place wooden blocks and solve fun challenges. Train your brain, relax, and enjoy endless puzzle fun now.",
    "url": "https://puzzlesplan.com/woodblock",
    "mainEntity": {
      "@type": ["WebApplication", "OnlineGame"],
      "name": "Wood Block Puzzle",
      "genre": ["Puzzle", "Block", "Brain Training"],
      "applicationCategory": "Game",
      "operatingSystem": "Web",
      "browserRequirements": "HTML5",
      "playMode": "SinglePlayer",
      "url": "https://puzzlesplan.com/woodblock",
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
      "@id": "https://puzzlesplan.com/woodblock"
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
