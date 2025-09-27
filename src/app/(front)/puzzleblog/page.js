"use client"

import React from 'react';
import './jigsaw.css';
import Link from 'next/link';

const puzzleGames = [
  {
    image: "/images/lagerpuzzle.webp",
    link: '/big-puzzle-pieces-for-all-ages',
    text: "A few years back, I decided to take on a thousand-piece jigsaw of Van Gogh’s Starry Night. In my head,I pictured myself sipping tea, listening to soft music, and calmly puzzling away.",
  },
];


const Jigsaw1 = () => {
  return (
    <div>
      <div className="puzzle-blog">
        {puzzleGames.map((item, index) => (
          <div key={index} className="puzzle-blog-card fade-in">
            <Link href={item.link} className="puzzle-image-wrapper">
              <img src={item.image} alt={`Puzzle ${index + 1}`} className="puzzle-blog-image" />
            </Link>
            <p className="puzzle-blog-title">{item.text}</p>
            <Link href={item.link}>
              <button className="read-more-button">Read More</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Jigsaw1;
