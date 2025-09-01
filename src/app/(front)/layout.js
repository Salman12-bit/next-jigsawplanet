import React from 'react';

export const metadata = {
  title: "Best Jigsaw Puzzles – Play Free Online Puzzle Games",
  description:
    "Play the best Jigsaw Puzzles online for free! Explore relaxing or challenging puzzles, choose from thousands of designs, and enjoy hours of mindful gameplay – play instantly in your browser.",
  keywords: [
    "best jigsaw puzzles", "free online jigsaw puzzle game", "play puzzles online", "mindfulness puzzle games", "puzzles for brain training"
  ],
  openGraph: {
    title: "Best Jigsaw Puzzles – Play Free Online Puzzle Games",
    description:
      "Play the best Jigsaw Puzzles online for free! Explore relaxing or challenging puzzles, choose from thousands of designs, and enjoy hours of mindful gameplay – play instantly in your browser.",
    url: "https://puzzlesplan.com/",
    images: [
      {
        url: "https://puzzlesplan.com/images/puzzlesplan.webp",
        width: 1200,
        height: 630,
        alt: "Play free jigsaw puzzles online at PuzzlesPlan",
      },
    ],
  },
  alternates: {
    canonical: "https://puzzlesplan.com",
  },
};

export default function Layout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Best Jigsaw Puzzles – Play Free Online Puzzle Games",
    "url": "https://puzzlesplan.com",
    "description":
      "Play the best Jigsaw Puzzles online for free! Explore relaxing or challenging puzzles, choose from thousands of designs, and enjoy hours of mindful gameplay – play instantly in your browser.",
    "publisher": {
      "@type": "Organization",
      "name": "PuzzlesPlan",
      "logo": {
        "@type": "ImageObject",
        "url": "https://puzzlesplan.com/images/puzzlesplan.webp",
        "width": 500,
        "height": 500
      }
    },
    "image": {
      "@type": "ImageObject",
      "url": "https://puzzlesplan.com/images/puzzlesplan.webp",
      "width": 1200,
      "height": 630
    },
    "primaryImageOfPage": {
      "@type": "ImageObject",
      "url": "https://puzzlesplan.com/images/puzzlesplan.webp",
      "width": 1200,
      "height": 630
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://puzzlesplan.com"
        }
      ]
    },
    "mainEntity": {
      "@type": "OnlineGame",
      "name": "Free Online Jigsaw Puzzle Game",
      "applicationCategory": "Game",
      "operatingSystem": "Web Browser",
      "playMode": "Single Player",
      "url": "https://puzzlesplan.com",
      "image": "https://puzzlesplan.com/images/puzzlesplan.webp",
      "inLanguage": "en",
      "genre": ["Puzzle", "Mindfulness", "Brain Training"],
      "offers": {
        "@type": "Offer",
        "url": "https://puzzlesplan.com",
        "price": "0",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock"
      },
      "potentialAction": {
        "@type": "PlayAction",
        "target": "https://puzzlesplan.com",
        "name": "Play Jigsaw Puzzle Online"
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
