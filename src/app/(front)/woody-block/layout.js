import React from 'react';

export const metadata = {
  title: "Unblocked Game Websites – Play Free Online Games Anywhere",
  description:
    "Discover the best unblocked game websites online. Play free puzzle, arcade, and action games anytime, anywhere. Start gaming instantly with no restrictions.",
  openGraph: {
    title: "Unblocked Game Websites – Play Free Online Games Anywhere",
    description:
      "Discover the best unblocked game websites online. Play free puzzle, arcade, and action games anytime, anywhere. Start gaming instantly with no restrictions.",
    url: "https://puzzlesplan.com/woody-block",
    images: [
      {
        url: "https://puzzlesplan.com/images/puzzlesplan.webp",
        width: 1200,
        height: 630,
        alt: "Unblocked game websites with free online puzzle and arcade games",
      },
    ],
  },
  alternates: {
    canonical: "https://puzzlesplan.com/woody-block",
  },
};

export default function Layout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": ["WebApplication", "OnlineGame"],
    "name": "Unblocked Game Websites – Play Free Online Games Anywhere",
    "description":
      "Discover the best unblocked game websites online. Play free puzzle, arcade, and action games anytime, anywhere. Start gaming instantly with no restrictions.",
    "url": "https://puzzlesplan.com/woody-block",
    "genre": ["Puzzle", "Arcade", "Action"],
    "applicationCategory": "Game",
    "operatingSystem": "Web",
    "browserRequirements": "HTML5",
    "playMode": "SinglePlayer",
    "image": {
      "@type": "ImageObject",
      "url": "https://puzzlesplan.com/images/puzzlesplan.webp",
      "width": 1200,
      "height": 630
    },
    "offers": {
      "@type": "Offer",
      "price": 0,
      "priceCurrency": "USD"
    },
    "publisher": {
      "@type": "Organization",
      "name": "PuzzlesPlan",
      "url": "https://puzzlesplan.com"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://puzzlesplan.com/woody-block"
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
