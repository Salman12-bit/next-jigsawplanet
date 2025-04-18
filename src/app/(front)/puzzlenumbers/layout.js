import React from 'react';

export const metadata = {
  title: "Puzzle Numbers Fun Games to Boost Your Brainpower",
  keywords: "puzzle number games,numbers puzzle",
  description:
    "Enjoy puzzle numbers that challenge your logic and sharpen your mind! Great for all ages to build focus, memory, and problem-solving skills.",
  openGraph: {
    title: "Puzzle Numbers Fun Games to Boost Your Brainpower",
    description:
      "Enjoy puzzle numbers that challenge your logic and sharpen your mind! Great for all ages to build focus, memory, and problem-solving skills.",
    url: "https://puzzlesplan.com/puzzlenumbers",
    images: [
      {
        url: "https://puzzlesplan.com/images/puzzlesplan.webp",
        width: 1200,
        height: 630,
        alt: "Play puzzle number games on PuzzlesPlan",
      },
    ],
  },
  alternates: {
    canonical: "https://puzzlesplan.com/puzzlenumbers",
  },
};

export default function Layout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Puzzle Numbers Fun Games to Boost Your Brainpower",
    "description":
      "Enjoy puzzle numbers that challenge your logic and sharpen your mind! Great for all ages to build focus, memory, and problem-solving skills.",
    "url": "https://puzzlesplan.com/puzzlenumbers",
    "mainEntity": {
      "@type": "OnlineGame",
      "name": "Number Puzzle Game",
      "genre": "Puzzle, Number Game",
      "applicationCategory": "Game",
      "operatingSystem": "Web Browser",
      "playMode": "Single Player",
      "url": "https://puzzlesplan.com/puzzlenumbers",
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
      "@id": "https://puzzlesplan.com/puzzlenumbers"
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
