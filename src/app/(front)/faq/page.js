import React from 'react';
import './faq.css';

const FAQ = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "name": "PuzzlesPlan FAQ",
    "description": "Find answers to the most frequently asked questions about PuzzlesPlan. Learn how to play, manage your account, and troubleshoot common issues.",
    "url": "https://puzzlesplan.com/faq",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do I play puzzles on PuzzlesPlan?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Simply select a puzzle, choose your difficulty level, and start arranging the pieces. You can drag and drop pieces to complete the puzzle."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need to create an account to play?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, you can play as a guest. However, creating an account allows you to save progress, track achievements, and join the community."
        }
      },
      {
        "@type": "Question",
        "name": "Can I upload my own images to create puzzles?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! Registered users can upload their own images and turn them into custom puzzles to play and share with friends."
        }
      },
      {
        "@type": "Question",
        "name": "What devices are supported?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "PuzzlesPlan works on desktops, tablets, and mobile devices. You can enjoy puzzles anywhere with an internet connection."
        }
      },
      {
        "@type": "Question",
        "name": "Is PuzzlesPlan free to use?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, PuzzlesPlan is free to use. We may offer premium features in the future, but core gameplay is always free."
        }
      },
      {
        "@type": "Question",
        "name": "How can I contact support?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "If you need help, you can reach out to our support team at support@puzzlesplan.com."
        }
      }
    ],
    "publisher": {
      "@type": "Organization",
      "name": "PuzzlesPlan",
      "logo": {
        "@type": "ImageObject",
        "url": "https://puzzlesplan.com/images/puzzlesplan.webp",
        "width": 500,
        "height": 500
      }
    }
  };

  return (
    <div className='faq-container'>
      <div className='faq-content'>
        <h1 className='faq-title'>Frequently Asked Questions</h1>
        <div className='faq-item'>
          <h2>How do I play puzzles on PuzzlesPlan?</h2>
          <p>Simply select a puzzle, choose your difficulty level, and start arranging the pieces. Drag and drop to complete the puzzle.</p>
        </div>
        <div className='faq-item'>
          <h2>Do I need to create an account to play?</h2>
          <p>No, you can play as a guest. However, an account lets you save progress, track achievements, and join the community.</p>
        </div>
        <div className='faq-item'>
          <h2>Can I upload my own images to create puzzles?</h2>
          <p>Yes! Registered users can upload images and turn them into custom puzzles to share with friends.</p>
        </div>
        <div className='faq-item'>
          <h2>What devices are supported?</h2>
          <p>PuzzlesPlan works on desktops, tablets, and mobile devices. Enjoy puzzles anywhere with an internet connection.</p>
        </div>
        <div className='faq-item'>
          <h2>Is PuzzlesPlan free to use?</h2>
          <p>Yes, PuzzlesPlan is free to use. We may introduce premium features in the future, but core gameplay remains free.</p>
        </div>
        <div className='faq-item'>
          <h2>How can I contact support?</h2>
          <p>If you need help, contact our support team at support@puzzlesplan.com.</p>
        </div>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
    </div>
  );
};

export default FAQ;
