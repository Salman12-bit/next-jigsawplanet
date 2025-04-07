import React from 'react';

export const metadata = {
  title: "PuzzlesPlan Privacy Policy",
  keywords: "privacy policy, data protection, PuzzlesPlan privacy, user data policy",
  description:
    "Read the Privacy Policy for PuzzlesPlan. Learn how your data is handled while you enjoy interactive puzzles on PuzzlesPlan.",
  openGraph: {
    title: "PuzzlesPlan | Privacy Policy",
    description:
      "Understand the data privacy measures on PuzzlesPlan. Explore puzzles, solve challenges, and rest assured your privacy is protected.",
    url: "https://puzzlesplan.com/privacypolicy",
    images: [
      {
        url: "https://puzzlesplan.com/images/puzzlesplan.webp",
        width: 1200,
        height: 630,
        alt: "PuzzlesPlan Privacy Policy illustration",
      },
    ],
  },
  alternates: {
    canonical: "https://puzzlesplan.com/privacypolicy",
  },
};

export default function Layout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "PuzzlesPlan Privacy Policy",
    "description":
      "Read the Privacy Policy for PuzzlesPlan. Learn how your data is handled while you enjoy interactive puzzles on our platform.",
    "url": "https://puzzlesplan.com/privacypolicy",
    "mainEntity": {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What data does PuzzlesPlan collect?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "PuzzlesPlan collects data necessary to provide interactive puzzle features and enhance user experience. Please refer to the full Privacy Policy for details."
          }
        },
        {
          "@type": "Question",
          "name": "How does PuzzlesPlan use my data?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Your data is used to improve gameplay, personalize user experience, and ensure secure access to our platform."
          }
        },
        {
          "@type": "Question",
          "name": "Is my data shared with third parties?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "PuzzlesPlan does not sell your data. Limited sharing may occur with trusted partners as outlined in the Privacy Policy."
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
          "item": "https://puzzlesplan.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Privacy Policy",
          "item": "https://puzzlesplan.com/privacypolicy"
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
