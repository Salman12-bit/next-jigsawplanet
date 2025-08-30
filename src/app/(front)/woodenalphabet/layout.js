import React from "react";

export const metadata = {
  title: "Best Wooden Alphabet Puzzle Game – Play & Learn Letters Online",
  description:
    "Play the best Wooden Alphabet Puzzle online! Learn letters, enjoy interactive fun, and challenge kids’ minds – start playing today.",
  openGraph: {
    title: "Best Wooden Alphabet Puzzle Game – Play & Learn Letters Online",
    description:
      "Play the best Wooden Alphabet Puzzle online! Learn letters, enjoy interactive fun, and challenge kids’ minds – start playing today.",
    url: "https://puzzlesplan.com/woodenalphabet",
    images: [
      {
        url: "https://puzzlesplan.com/images/puzzlesplan.webp",
        width: 1200,
        height: 630,
        alt: "Play Wooden Alphabet Puzzle Game Online on PuzzlesPlan",
      },
    ],
  },
  alternates: {
    canonical: "https://puzzlesplan.com/woodenalphabet",
  },
};

export default function Layout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    "name": "Wooden Alphabet Puzzle Online",
    "applicationCategory": "EducationalGame",
    "operatingSystem": "Web Browser",
    "playMode": "SinglePlayer",
    "url": "https://puzzlesplan.com/woodenalphabet",
    "description":
      "Play the best Wooden Alphabet Puzzle online! Learn letters, enjoy interactive fun, and challenge kids’ minds – start playing today.",
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
    "image": "https://puzzlesplan.com/images/puzzlesplan.webp",
    "genre": ["Puzzle", "Educational"],
    "audience": {
      "@type": "Audience",
      "audienceType": "Kids, Students, Parents, Teachers",
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://puzzlesplan.com/woodenalphabet",
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
