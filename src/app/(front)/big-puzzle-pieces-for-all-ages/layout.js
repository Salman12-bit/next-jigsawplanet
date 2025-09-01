import React from 'react';

export const metadata = {
  title: "Explore Big Puzzle Pieces for Kids, Adults & Seniors",
  description:
    "Explore the joy of big puzzle pieces and larger puzzles! Perfect for seniors, kids, and adults. Learn about online jigsaw puzzles, educational puzzles, and relaxing games for mindful play.",
  openGraph: {
    title: "Explore Big Puzzle Pieces for Kids, Adults & Seniors",
    description:
      "Explore the joy of big puzzle pieces and larger puzzles! Perfect for seniors, kids, and adults. Learn about online jigsaw puzzles, educational puzzles, and relaxing games for mindful play.",
    url: "https://puzzlesplan.com/big-puzzle-pieces-for-all-ages",
    images: [
      {
        url: "https://puzzlesplan.com/images/lagerpuzzle.webp",
        width: 1200,
        height: 630,
        alt: "Family enjoying oversized jigsaw puzzle pieces together",
      },
    ],
  },
  alternates: {
    canonical: "https://puzzlesplan.com/big-puzzle-pieces-for-all-ages",
  },
};

export default function Layout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://puzzlesplan.com/big-puzzle-pieces-for-all-ages"
    },
    "headline": "Explore Big Puzzle Pieces for Kids, Adults & Seniors",
    "description":
      "Explore the joy of big puzzle pieces and larger puzzles! Perfect for seniors, kids, and adults. Learn about online jigsaw puzzles, educational puzzles, and relaxing games for mindful play.",
    "image": {
      "@type": "ImageObject",
      "url": "https://puzzlesplan.com/images/lagerpuzzle.webp",
      "width": 1200,
      "height": 630
    },
    "author": {
      "@type": "Person",
      "name": "Puzzle Author",
      "url": "https://puzzlesplan.com/",
    },
    "publisher": {
      "@type": "Organization",
      "name": "Puzzles Plan",
    },
    "datePublished": "2025-09-01",
    "dateModified": "2025-09-01",
    "isAccessibleForFree": true,
    "keywords": [
      "big puzzle pieces",
      "larger puzzles",
      "oversized puzzles",
      "puzzles for seniors",
      "puzzles for adults",
      "puzzles for kids",
      "toddler learning games",
      "educational puzzles",
      "online jigsaw puzzles",
      "Virtual Villagers 6 puzzles",
      "mindfulness puzzles"
    ],
    "articleSection": [
      "Puzzle Games",
      "Educational Activities",
      "Relaxation & Mindfulness",
      "Family Entertainment",
      "Online Jigsaw Puzzles"
    ],
    "about": [
      { "@type": "Thing", "name": "Jigsaw Puzzles" },
      { "@type": "Thing", "name": "Big Puzzle Pieces" },
      { "@type": "Thing", "name": "Puzzle Games for Seniors" },
      { "@type": "Thing", "name": "Educational Puzzle Games" }
    ]
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
