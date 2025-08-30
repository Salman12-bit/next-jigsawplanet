import React from 'react';

export const metadata = {
  title: "Block Game Play Free Online Puzzle & Block Challenges",
  description:
    "Play Block Game online for free! Move, fit, and clear blocks in this fun and addictive puzzle game. Challenge your brain, relax, and enjoy hours of gameplay today.",
  openGraph: {
    title: "Block Game Play Free Online Puzzle & Block Challenges",
    description:
      "Play Block Game online for free! Move, fit, and clear blocks in this fun and addictive puzzle game. Challenge your brain, relax, and enjoy hours of gameplay today.",
    url: "https://puzzlesplan.com/blockgame",
    images: [
      {
        url: "https://puzzlesplan.com/images/puzzlesplan.webp",
        width: 1200,
        height: 630,
        alt: "Block game online with awesome puzzle blocks",
      },
    ],
  },
  alternates: {
    canonical: "https://puzzlesplan.com/blockgame",
  },
};

export default function Layout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Block Game Play Free Online Puzzle & Block Challenges",
    "description":
      "Play Block Game online for free! Move, fit, and clear blocks in this fun and addictive puzzle game. Challenge your brain, relax, and enjoy hours of gameplay today.",
    "url": "https://puzzlesplan.com/blockgame",
    "mainEntity": {
      "@type": "OnlineGame",
      "name": "puzzlesplan",
      "genre": "Action, Puzzle",
      "applicationCategory": "Game",
      "operatingSystem": "Web Browser",
      "playMode": "Single Player",
      "url": "https://puzzlesplan.com/blockgame",
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
      "@id": "https://puzzlesplan.com/blockgame"
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
