import React from 'react';

export const metadata = {
  title: "PuzzlesPlan Account Information",
  description: "This is the sign-up page for PuzzlesPlan.",
  openGraph: {
    title: "PuzzlesPlan Account",
    description: "Sign up to access PuzzlesPlan and start your puzzle journey.",
    url: "https://puzzlesplan.com/register",
    images: [
      {
        url: "https://puzzlesplan.com/images/puzzlesplan.webp",
        width: 1200,
        height: 630,
        alt: "Sign up to PuzzlesPlan and start your puzzle journey",
      },
    ],
  },
  alternates: {
    canonical: "https://puzzlesplan.com/register",
  },
};

export default function Layout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "PuzzlesPlan Account",
    "description":
      "Sign up to access PuzzlesPlan and start your puzzle journey. Create an account to manage puzzles, track progress, and customize your profile.",
    "url": "https://puzzlesplan.com/register",
    "mainEntity": {
      "@type": "WebApplication",
      "name": "PuzzlesPlan Registration",
      "description":
        "The registration portal for creating your PuzzlesPlan account to manage puzzles and track progress.",
      "applicationCategory": "Game",
      "operatingSystem": "All",
      "offers": {
        "@type": "Offer",
        "price": "0.00",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "url": "https://puzzlesplan.com/register",
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
          "name": "Register",
          "item": "https://puzzlesplan.com/register",
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
