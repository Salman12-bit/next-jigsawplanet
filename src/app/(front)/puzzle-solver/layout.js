import React from 'react';

export const metadata = {
  title: "Free New Block Game – Play Online & Test Puzzle Skills",
  description:
    "Play New Block Game free online and experience hours of puzzle fun. Arrange blocks, test your logic, and challenge yourself in this addictive block puzzle game.",
  openGraph: {
    title: "Free New Block Game – Play Online & Test Puzzle Skills",
    description:
      "Play New Block Game free online and experience hours of puzzle fun. Arrange blocks, test your logic, and challenge yourself in this addictive block puzzle game.",
    url: "https://puzzlesplan.com/puzzle-solver",
    images: [
      {
        url: "https://puzzlesplan.com/images/puzzlesplan.webp",
        width: 1200,
        height: 630,
        alt: "New block game online with colorful puzzle blocks",
      },
    ],
  },
  alternates: {
    canonical: "https://puzzlesplan.com/puzzle-solver",
  },
};

export default function Layout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Free New Block Game – Play Online & Test Puzzle Skills",
    "description":
      "Play New Block Game free online and experience hours of puzzle fun. Arrange blocks, test your logic, and challenge yourself in this addictive block puzzle game.",
    "url": "https://puzzlesplan.com/puzzle-solver",
    "mainEntity": {
      "@type": ["WebApplication", "OnlineGame"],
      "name": "New Block Game",
      "genre": ["Puzzle", "Block", "Logic"],
      "applicationCategory": "Game",
      "operatingSystem": "Web",
      "browserRequirements": "HTML5",
      "playMode": "SinglePlayer",
      "url": "https://puzzlesplan.com/puzzle-solver",
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
      "@id": "https://puzzlesplan.com/puzzle-solver"
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
