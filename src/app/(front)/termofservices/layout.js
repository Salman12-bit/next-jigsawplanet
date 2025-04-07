import React from 'react';

export const metadata = {
  title: "PuzzlesPlan Terms of Service",
  description:
    "Review the Terms of Service for PuzzlesPlan. Learn the rules and guidelines for using PuzzlesPlan's interactive puzzles and services.",
  openGraph: {
    title: "PuzzlesPlan | Terms of Service",
    description:
      "Understand the terms and policies for using PuzzlesPlan. Solve puzzles, enjoy interactive games, and abide by our service rules.",
    url: "https://puzzlesplan.com/termofservices",
    images: [
      {
        url: "https://puzzlesplan.com/images/puzzlesplan.webp",
        width: 600,
        height: 400,
        alt: "PuzzlesPlan Terms of Service illustration",
      },
    ],
  },
  alternates: {
    canonical: "https://puzzlesplan.com/termofservices",
  },
};

export default function Layout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "PuzzlesPlan Terms of Service",
    "description":
      "Review the Terms of Service for PuzzlesPlan. Learn the rules and guidelines for using PuzzlesPlan's interactive puzzles and services.",
    "url": "https://puzzlesplan.com/termofservices",
    "mainEntity": {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What are the rules for using PuzzlesPlan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Users must comply with the guidelines provided in the Terms of Service, ensuring respectful and fair usage of the platform."
          }
        },
        {
          "@type": "Question",
          "name": "Can I use PuzzlesPlan for commercial purposes?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "PuzzlesPlan is primarily for personal and non-commercial use unless explicitly stated otherwise in the Terms of Service."
          }
        },
        {
          "@type": "Question",
          "name": "What happens if I violate the Terms of Service?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Violating the Terms of Service may lead to the suspension or termination of your account. Please review the full Terms for detailed consequences."
          }
        }
      ]
    },
    "publisher": {
      "@type": "Organization",
      "name": "PuzzlesPlan",
      "logo": {
        "@type": "ImageObject",
        "url": "https://puzzlesplan.com/images/puzzlesplan.webp",
        "width": 600,
        "height": 400,
      },
    },
    "primaryImageOfPage": {
      "@type": "ImageObject",
      "url": "https://puzzlesplan.com/images/puzzlesplan.webp",
      "width": 600,
      "height": 400,
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://puzzlesplan.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Terms of Service",
          "item": "https://puzzlesplan.com/termofservices"
        }
      ]
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
