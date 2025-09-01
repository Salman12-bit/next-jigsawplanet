import React from 'react';

export const metadata = {
  title: "PuzzlesPlan Theme Gallery: Explore Creative Puzzle Themes",
  keywords: "puzzle themes, theme gallery, customizable jigsaw, puzzlesplan",
  description:
    "Explore PuzzlesPlan’s theme gallery! Discover beautifully crafted puzzle themes and personalize your gaming experience with unique visual styles.",
  openGraph: {
    title: "PuzzlesPlan Theme Gallery: Explore Creative Puzzle Themes",
    description:
      "Explore PuzzlesPlan’s theme gallery! Discover beautifully crafted puzzle themes and personalize your gaming experience with unique visual styles.",
    url: "https://puzzlesplan.com/themegallery",
    images: [
      {
        url: "https://puzzlesplan.com/images/puzzlesplan.webp",
        width: 1200,
        height: 630,
        alt: "Explore puzzle themes on PuzzlesPlan and personalize your experience",
      },
    ],
  },
  alternates: {
    canonical: "https://puzzlesplan.com/themegallery",
  },
};

export default function Layout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "PuzzlesPlan Theme Gallery: Explore Creative Puzzle Themes",
    "description":
      "Explore PuzzlesPlan’s theme gallery! Discover beautifully crafted puzzle themes and personalize your gaming experience with unique visual styles.",
    "url": "https://puzzlesplan.com/themegallery",
    "mainEntity": {
      "@type": "CollectionPage",
      "name": "Theme Gallery Collection",
      "hasPart": [
        {
          "@type": "CreativeWork",
          "name": "Classic Puzzle Theme",
          "description": "Elegant and timeless design for puzzle lovers.",
          "url": "https://puzzlesplan.com/images/puzzlesplan.webp",
        },
        {
          "@type": "CreativeWork",
          "name": "Modern Puzzle Theme",
          "description": "A vibrant and sleek style for a fresh puzzle-solving feel.",
          "url": "https://puzzlesplan.com/images/puzzlesplan.webp",
        },
        {
          "@type": "CreativeWork",
          "name": "Custom Puzzle Theme",
          "description": "Customize your own look with unique backgrounds and frames.",
          "url": "https://puzzlesplan.com/images/puzzlesplan.webp",
        },
      ],
    },
    "publisher": {
      "@type": "Organization",
      "name": "PuzzlesPlan",
    },
    "primaryImageOfPage": {
      "@type": "ImageObject",
      "url": "https://puzzlesplan.com/images/puzzlesplan.webp",
      "width": 1200,
      "height": 630,
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
