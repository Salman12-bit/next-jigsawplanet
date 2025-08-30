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
    "@type": "Game",
    "name": "Alphabet Sound Puzzle",
    "description":
      "Play Alphabet Sound Puzzle online! Learn letters and sounds through fun interactive puzzles – start playing and learning today.",
    "url": "https://puzzlesplan.com/wooden-puzzle",
    "applicationCategory": "Game",
    "operatingSystem": "Web Browser",
    "playMode": "SinglePlayer",
    "image": "https://puzzlesplan.com/images/puzzlesplan.webp",
    "publisher": {
      "@type": "Organization",
      "name": "PuzzlesPlan",
      "logo": {
        "@type": "ImageObject",
        "url": "https://puzzlesplan.com/images/puzzlesplan.webp",
        "width": 500,
        "height": 500
      }
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
