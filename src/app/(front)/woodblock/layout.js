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
      "@type": "OnlineGame",
      "name": "puzzlesplan",
      "genre": "Action, Puzzle",
      "applicationCategory": "Game",
      "operatingSystem": "Web Browser",
      "playMode": "Single Player",
      "url": "https://puzzlesplan.com/woodblock",
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
