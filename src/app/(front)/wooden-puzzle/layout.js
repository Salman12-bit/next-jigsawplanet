import React from 'react';

export const metadata = {
  title: "Alphabet Wooden Puzzle Fun Learning for Kids ",
  keywords: "alphabet sound puzzle,children's word puzzles",
  description:
    "Help kids learn letters with an alphabet wooden puzzle! Safe, hands-on play that builds early reading and fine motor skills easily.",
  openGraph: {
    title: "Alphabet Wooden Puzzle Fun Learning for Kids",
    description:
      "Help kids learn letters with an alphabet wooden puzzle! Safe, hands-on play that builds early reading and fine motor skills easily.",
    url: "https://puzzlesplan.com/wooden-puzzle",
    images: [
      {
        url: "https://puzzlesplan.com/images/puzzlesplan.webp",
        width: 1200,
        height: 630,
        alt: "Play children's word puzzles on PuzzlesPlan",
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
    "@type": "WebPage",
    "name": "Alphabet Wooden Puzzle Fun Learning for Kids ",
    "description":
      "Help kids learn letters with an alphabet wooden puzzle! Safe, hands-on play that builds early reading and fine motor skills easily.",
    "url": "https://puzzlesplan.com/wooden-puzzle",
    "publisher": {
      "@type": "Organization",
      "name": "PuzzlesPlan",
      "logo": {
        "@type": "ImageObject",
        "url": "https://puzzlesplan.com/images/puzzlesplan.webp",
        "width": 500,
        "height": 500,
      },
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://puzzlesplan.com/wooden-puzzle",
    },
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
