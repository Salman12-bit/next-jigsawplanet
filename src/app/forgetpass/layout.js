import React from 'react';

export const metadata = {
  title: "PuzzlesPlan Password Recovery",
  description:
    "Easily recover access to your PuzzlesPlan account. Reset your password securely and continue managing puzzles and tracking progress.",
  openGraph: {
    title: "PuzzlesPlan Password Recovery",
    description:
      "Regain access to your PuzzlesPlan account by resetting your password through our secure recovery process.",
    url: "https://puzzlesplan.com/forgetpass",
    images: [
      {
        url: "https://puzzlesplan.com/images/puzzlesplan.webp",
        width: 1200,
        height: 630,
        alt: "Reset your password on PuzzlesPlan to regain access to your account.",
      },
    ],
  },
  alternates: {
    canonical: "https://puzzlesplan.com/forgetpass",
  },
};

export default function Layout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "PuzzlesPlan Password Recovery",
    "description":
      "Easily recover access to your PuzzlesPlan account. Reset your password securely and continue managing puzzles and tracking progress.",
    "url": "https://puzzlesplan.com/forgetpass",
    "mainEntity": {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How can I reset my PuzzlesPlan password?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "To reset your password, visit the password recovery page, enter your registered email, and follow the instructions sent to your email.",
          },
        },
        {
          "@type": "Question",
          "name": "Can I change my password after logging in?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, after logging in, you can go to your account settings to change your password for enhanced security.",
          },
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
          "name": "Password Recovery",
          "item": "https://puzzlesplan.com/forgetpass",
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
