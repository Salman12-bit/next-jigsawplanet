import React from 'react';

export const metadata = {
  title: "PuzzlesPlan post-article",
  description:
    "Access your personal post-article on PuzzlesPlan. Manage puzzles, track progress, and customize your profile.",
  openGraph: {
    title: "PuzzlesPlan post-article",
    description:
      "Explore your PuzzlesPlan post-article to manage puzzles, view progress, and customize your experience.",
    url: "https://puzzlesplan.com/dashboard",
    images: [
      {
        url: "https://puzzlesplan.com/images/puzzlesplan.webp",
        width: 1200,
        height: 630,
        alt: "View your personalized post-article on PuzzlesPlan to track and manage puzzles",
      },
    ],
  },
  alternates: {
    canonical: "https://puzzlesplan.com/dashboard",
  },
};

export default function Layout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "PuzzlesPlan post-article",
    "description":
      "Access your personal post-article on PuzzlesPlan. Manage puzzles, track progress, and customize your profile.",
    "url": "https://puzzlesplan.com/dashboard",
    "mainEntity": {
      "@type": "CollectionPage",
      "name": "User post-article",
      "about": "A personalized area for managing puzzles, tracking achievements, and customizing the PuzzlesPlan experience.",
      "hasPart": [
        {
          "@type": "CreativeWork",
          "name": "Profile Customization",
          "description": "Customize your user profile for a tailored experience.",
          "url": "https://puzzlesplan.com/images/puzzlesplan.webp",
        },
      ],
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
          "name": "dashboard",
          "item": "https://puzzlesplan.com/dashboard",
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
