import React from 'react';

export const metadata = {
  title: "PuzzlesPlan Log-In Information",
  keywords: "puzzle journey, login, account access",
  description: "This is the Log-In page for PuzzlesPlan.",
  openGraph: {
    title: "PuzzlesPlan Log-In",
    description: "Log in to access PuzzlesPlan and start your puzzle journey.",
    url: "https://puzzlesplan.com/login",
    images: [
      {
        url: "https://puzzlesplan.com/images/puzzlesplan.webp",
        width: 1200,
        height: 630,
        alt: "Log in to PuzzlesPlan and start your puzzle journey",
      },
    ],
  },
  alternates: {
    canonical: "https://puzzlesplan.com/login",
  },
};

export default function Layout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "PuzzlesPlan Login",
    "description":
      "Log in to access PuzzlesPlan and start your puzzle journey. Manage your puzzles, track progress, and customize your profile.",
    "url": "https://puzzlesplan.com/login",
    "mainEntity": {
      "@type": "WebApplication",
      "name": "PuzzlesPlan Login",
      "description": "The login portal for accessing your PuzzlesPlan account to manage puzzles and track progress.",
      "applicationCategory": "Game",
      "operatingSystem": "All",
      "offers": {
        "@type": "Offer",
        "price": "0.00",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "url": "https://puzzlesplan.com/login",
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
          "name": "Login",
          "item": "https://puzzlesplan.com/login",
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
