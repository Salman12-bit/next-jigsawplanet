import React from 'react';
import './about.css';

const About = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About PuzzlesPlan",
    "description": "Discover PuzzlesPlan, a dynamic platform offering engaging jigsaw puzzles for all skill levels. Designed to provide an interactive and seamless puzzle-solving experience.",
    "url": "https://puzzlesplan.com/about-us", 
    "publisher": {
      "@type": "Organization",
      "name": "PuzzlesPlan",
      "logo": {
        "@type": "ImageObject",
        "url": "https://puzzlesplan.com/images/puzzlesplan.webp", 
        "width": 500,
        "height": 500
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://puzzlesplan.com/about-us"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Support",
      "email": "support@puzzlesplan.com", 
      "telephone": "+92-336-389-1016", 
      "url": "https://puzzlesplan.com/about-us"
    }
  };

  return (
    <div className='about-container'>
      <div className='about-content'>
        <h1 className='welcome-content'>Welcome to PuzzlesPlan</h1>
        <p>
          At PuzzlesPlan, we are dedicated to bringing the joy of puzzles to enthusiasts worldwide. Whether you're a casual solver or a puzzle master, our platform offers an extensive collection of engaging jigsaw puzzles designed to challenge and entertain.
        </p>
        <p>
          PuzzlesPlan is built with a seamless, user-friendly experience in mind, leveraging cutting-edge technology to ensure smooth gameplay and customization options. Our goal is to create a thriving community where puzzle lovers can connect, compete, and share their passion.
        </p>
        <p>
          Join us in exploring a world of creativity, logic, and fun. Start your puzzle journey today with PuzzlesPlan – where every piece brings a new adventure!
        </p>
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

export default About;
