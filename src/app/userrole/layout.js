import React from 'react';

export const metadata = {
  title: "User Role - PuzzlesPlan",
  description:
    "Welcome to PuzzlesPlan - the ultimate platform for puzzle lovers! Explore, play, and enjoy our vast selection of online jigsaw puzzles.",
  openGraph: {
    title: "User Role - PuzzlesPlan",
    description:
      "Discover a world of puzzles on PuzzlesPlan! Start solving and sharing puzzles today, and join a community of puzzle enthusiasts.",
    url: "https://puzzlesplan.com/userrole",
    images: [
      {
        url: "https://puzzlesplan.com/images/puzzlesplan.webp",
        width: 1200,
        height: 630,
        alt: "Explore and play puzzles on PuzzlesPlan",
      },
    ],
  },
  alternates: {
    canonical: "https://puzzlesplan.com/userrole",
  },
};

export default function Layout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "User Role - PuzzlesPlan",
    "description":
      "Change your role on PuzzlesPlan to enjoy different features and manage your puzzle preferences.",
    "url": "https://puzzlesplan.com/userrole",
    "mainEntity": {
      "@type": "WebApplication",
      "name": "PuzzlesPlan User Role",
      "description":
        "A page where you can change your role to access different features on PuzzlesPlan.",
      "applicationCategory": "Game",
      "operatingSystem": "All",
      "offers": {
        "@type": "Offer",
        "price": "0.00",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "url": "https://puzzlesplan.com/userrole",
      },
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
    },
    "primaryImageOfPage": {
      "@type": "ImageObject",
      "url": "https://puzzlesplan.com/images/puzzlesplan.webp",
      "width": 1200,
      "height": 630,
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://puzzlesplan.com",
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "User Role",
          "item": "https://puzzlesplan.com/userrole",
        },
      ],
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
