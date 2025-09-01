import React from 'react';

export const metadata = {
  title: "Play Number Slider Online – Fun Free Puzzle Challenge",
  description:
    "Play Number Slider online for free! Move tiles, arrange numbers in order, and test your logic with this classic sliding puzzle game – start playing instantly.",
  openGraph: {
    title: "Play Number Slider Online – Fun Free Puzzle Challenge",
    description:
      "Play Number Slider online for free! Move tiles, arrange numbers in order, and test your logic with this classic sliding puzzle game – start playing instantly.",
    url: "https://puzzlesplan.com/puzzlenumbers",
    images: [
      {
        url: "https://puzzlesplan.com/images/puzzlesplan.webp",
        width: 1200,
        height: 630,
        alt: "Number Slider free online sliding puzzle game with numbered tiles",
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
    "name": "Play Number Slider Online – Fun Free Puzzle Challenge",
    "description":
      "Play Number Slider online for free! Move tiles, arrange numbers in order, and test your logic with this classic sliding puzzle game – start playing instantly.",
    "url": "https://puzzlesplan.com/puzzlenumbers",
    "mainEntity": {
      "@type": ["WebApplication", "OnlineGame"],
      "name": "Number Slider",
      "genre": ["Puzzle", "Sliding", "Number"],
      "applicationCategory": "Game",
      "operatingSystem": "Web",
      "browserRequirements": "HTML5",
      "playMode": "SinglePlayer",
      "url": "https://puzzlesplan.com/puzzlenumbers",
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
