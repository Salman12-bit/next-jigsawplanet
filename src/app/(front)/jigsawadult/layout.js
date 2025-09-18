import React from "react";

export const metadata = {
  title: "Puzzles for Adults – Relax & Challenge Your Mind Online",
  description:
    "Discover puzzles for adults online! Challenge your mind, relax, and enjoy hours of fun with our brain-boosting puzzle games – play now!",
  openGraph: {
    title: "Puzzles for Adults – Relax & Challenge Your Mind Online",
    description:
      "Discover puzzles for adults online! Challenge your mind, relax, and enjoy hours of fun with our brain-boosting puzzle games – play now!",
    url: "https://puzzlesplan.com/jigsawadult",
    images: [
      {
        url: "https://puzzlesplan.com/images/treeriver.webp",
        width: 1200,
        height: 630,
        alt: "Adult puzzle game with challenging brain-teasing pieces",
      },
    ],
  },
  alternates: {
    canonical: "https://puzzlesplan.com/jigsawadult",
  },
};

export default function Layout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": ["WebApplication", "OnlineGame"],
    "name": "Puzzles for Adults",
    "description":
      "Discover puzzles for adults online! Challenge your mind, relax, and enjoy hours of fun with our brain-boosting puzzle games – play now!",
    "url": "https://puzzlesplan.com/jigsawadult",
    "applicationCategory": "Game",
    "operatingSystem": "Web",
    "browserRequirements": "HTML5",
    "inLanguage": "en",
    "genre": ["Puzzle", "Brain Training", "Adults"],
    "gamePlatform": "Web browser",
    "playMode": "SinglePlayer",
    "image": "https://puzzlesplan.com/images/treeriver.webp",
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
      "@id": "https://puzzlesplan.com/jigsawadult"
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
