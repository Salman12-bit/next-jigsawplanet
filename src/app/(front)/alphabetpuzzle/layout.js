import React from 'react';

export const metadata = {
  title: "Alphabet Puzzle – Play Fun Learning Games Online",
  description:
    "Play Alphabet Puzzle online! Learn letters, solve fun challenges, and enjoy an engaging educational puzzle game – start playing now.",
  openGraph: {
    title: "Alphabet Puzzle – Play Fun Learning Games Online",
    description:
      "Play Alphabet Puzzle online! Learn letters, solve fun challenges, and enjoy an engaging educational puzzle game – start playing now.",
    url: "https://puzzlesplan.com/alphabetpuzzle",
    images: [
      {
        url: "https://puzzlesplan.com/images/puzzlesplan.webp",
        width: 1200,
        height: 630,
        alt: "Alphabet puzzle game with colorful letters and pieces",
      },
    ],
  },
  alternates: {
    canonical: "https://puzzlesplan.com/alphabetpuzzle",
  },
};

export default function Layout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Alphabet Puzzle – Play Fun Learning Games Online",
    "description":
      "Play Alphabet Puzzle online! Learn letters, solve fun challenges, and enjoy an engaging educational puzzle game – start playing now.",
    "url": "https://puzzlesplan.com/alphabetpuzzle",
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
    "mainEntity": {
      "@type": "EducationalGame",
      "name": "Alphabet Puzzle",
      "operatingSystem": "Web Browser",
      "applicationCategory": "EducationalGame",
      "genre": "Puzzle, Kids, Learning",
      "audience": {
        "@type": "Audience",
        "audienceType": "Children",
      },
      "url": "https://puzzlesplan.com/alphabetpuzzle",
      "image": "https://puzzlesplan.com/images/puzzlesplan.webp",
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