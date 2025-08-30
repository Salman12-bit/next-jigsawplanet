import React from 'react';

export const metadata = {
  title: "Letter Puzzles – Play Fun Alphabet Learning Games Online",
  description:
    "Play Letter Puzzles online and make learning the alphabet fun! Solve interactive puzzles, match letters, and enjoy an educational game designed to boost kids’ ABC skills – start playing today.",
  openGraph: {
    title: "Letter Puzzles – Play Fun Alphabet Learning Games Online",
    description:
      "Play Letter Puzzles online and make learning the alphabet fun! Solve interactive puzzles, match letters, and enjoy an educational game designed to boost kids’ ABC skills – start playing today.",
    url: "https://puzzlesplan.com/letterpuzzles",
    images: [
      {
        url: "https://puzzlesplan.com/images/puzzlesplan.webp",
        width: 1200,
        height: 630,
        alt: "Play puzzle letter on PuzzlesPlan",
      },
    ],
  },
  alternates: {
    canonical: "https://puzzlesplan.com/letterpuzzles",
  },
};

export default function Layout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Letter Puzzles – Play Fun Alphabet Learning Games Online",
    "description":
      "Play Letter Puzzles online and make learning the alphabet fun! Solve interactive puzzles, match letters, and enjoy an educational game designed to boost kids’ ABC skills – start playing today.",
    "url": "https://puzzlesplan.com/letterpuzzles",
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
      "@id": "https://puzzlesplan.com/letterpuzzles",
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
