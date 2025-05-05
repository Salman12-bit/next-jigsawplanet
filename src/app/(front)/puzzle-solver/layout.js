import React from 'react';

export const metadata = {
  title: "Block Puzzle. Addictive Game to Train Your Brain",
  keywords: "brick block puzzle,block puzzle solver",
  description:
    "Play block puzzle games that test your logic and keep you thinking! A relaxing yet challenging way to boost focus and pass the time.",
  openGraph: {
    title: "Block Puzzle. Addictive Game to Train Your Brain",
    description:
      "Play block puzzle games that test your logic and keep you thinking! A relaxing yet challenging way to boost focus and pass the time.",
    url: "https://puzzlesplan.com/puzzle-solver",
    images: [
      {
        url: "https://puzzlesplan.com/images/puzzlesplan.webp",
        width: 1200,
        height: 630,
        alt: "Play block puzzle solver on PuzzlesPlan",
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
    "name": "Block Puzzle. Addictive Game to Train Your Brain",
    "description":
      "Play block puzzle games that test your logic and keep you thinking! A relaxing yet challenging way to boost focus and pass the time.",
    "url": "https://puzzlesplan.com/puzzle-solver",
    "mainEntity": {
      "@type": "OnlineGame",
      "name": "puzzlesplan",
      "genre": "Action, Puzzle",
      "applicationCategory": "Game",
      "operatingSystem": "Web Browser",
      "playMode": "Single Player",
      "url": "https://puzzlesplan.com/puzzle-solver",
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
