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
    "@type": ["OnlineGame", "WebApplication"],
    "name": "Best Wooden Alphabet Puzzle Game – Play & Learn Letters Online",
    "description":
      "Play the best Wooden Alphabet Puzzle online! Learn letters, enjoy interactive fun, and challenge kids’ minds – start playing today.",
    "url": "https://puzzlesplan.com/woodenalphabet",
    "genre": ["Puzzle", "Educational", "Kids Game"],
    "applicationCategory": "Game",
    "operatingSystem": "Web",
    "browserRequirements": "HTML5",
    "playMode": "SinglePlayer",
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
    },
    
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://puzzlesplan.com/woodenalphabet"
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
