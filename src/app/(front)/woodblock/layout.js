import React from 'react';

export const metadata = {
  title: "Wood Block Puzzle Relaxing Brain Game for All",
  keywords: "wooden block puzzle,block wood puzzle",
  description:
    " Enjoy the wood block puzzle game! A simple yet addictive way to relax, think smart, and sharpen your brain with every move.",
  openGraph: {
    title: "Wood Block Puzzle Relaxing Brain Game for All",
    description:
      " Enjoy the wood block puzzle game! A simple yet addictive way to relax, think smart, and sharpen your brain with every move.",
    url: "https://puzzlesplan.com/woodblock",
    images: [
      {
        url: "https://puzzlesplan.com/images/puzzlesplan.webp",
        width: 1200,
        height: 630,
        alt: "Play block wood puzzle on PuzzlesPlan",
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
    "name": "Wood Block Puzzle Relaxing Brain Game for All",
    "description":
      " Enjoy the wood block puzzle game! A simple yet addictive way to relax, think smart, and sharpen your brain with every move.",
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
