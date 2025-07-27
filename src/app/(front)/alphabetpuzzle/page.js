"use client"

import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import './puzzle.css';
import Link from 'next/link'
import Card from '@/app/Card/page';

const containerStyle1 = {
  display: 'flex',
  justifyContent: 'space-between',
  gap: '10px',
  width: '100%',
  maxWidth: '1000px',
  margin: '0 auto',
};

const Board1 = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 90px);
  grid-gap: 8px;
`;

const initialCards = [
  { id: 1, value: 'A' }, { id: 2, value: 'A' },
  { id: 3, value: 'F' }, { id: 4, value: 'A' },
  { id: 5, value: 'E' }, { id: 6, value: 'E' },
  { id: 7, value: 'A' }, { id: 8, value: 'F' },
  { id: 9, value: 'B' },
];

const Puzzle1 = () => {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [attempts, setAttempts] = useState(0);
  const [message, setMessage] = useState('Attempts left: 2');
  const [level, setLevel] = useState(1);
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setTimeout(() => setFadeIn(true), 300);
  }, []);

  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const initializeGame = useCallback(() => {
    setCards(shuffle([...initialCards]));
    setFlippedCards([]);
    setMatchedCards([]);
    setAttempts(0);
    setMessage('Attempts left: 3');
  }, []);

  useEffect(() => {
    initializeGame();
  }, [level, initializeGame]);

  const handleCardClick = (id, value) => {
    if (flippedCards.length < 3 && !flippedCards.some(card => card.id === id)) {
      setFlippedCards(prev => [...prev, { id, value }]);

      if (flippedCards.length === 2) {
        setAttempts(prev => prev + 1);

        const [firstCard, secondCard] = flippedCards;

        if (firstCard.value === value && secondCard.value === value) {
          setMatchedCards(prev => [...prev, firstCard.id, secondCard.id, id]);
          setFlippedCards([]);
          if (matchedCards.length + 3 === initialCards.length) {
            setMessage('You won this game!');
            setTimeout(() => {
              setLevel(prev => prev + 1);
            }, 1000);
          }
        } else {
          setTimeout(() => {
            setFlippedCards([]);
          }, 1000);
        }

        if (attempts >= 2) {
          setTimeout(() => {
            setMessage('Game over! Restarting...');
            setTimeout(initializeGame, 2000);
          }, 1000);
        } else {
          setMessage(`Attempts left: ${2 - attempts}`);
        }
      }
    }
  };

  const hasMatchedThree = () => {
    const valueCount = matchedCards.reduce((count, cardId) => {
      const card = cards.find(card => card.id === cardId);
      if (card) {
        count[card.value] = (count[card.value] || 0) + 1;
      }
      return count;
    }, {});
    return Object.values(valueCount).some(count => count === 3);
  };

  return (
    <div className='text-conainer' style={{
      padding: "20px"
    }}>
      <div className='planet-container'>
        <div className='row'>
          <div className="upper-container" style={containerStyle1}>
            <div className="game-container">
              <h3 className='level-color'>Match The Pairs Level {level}</h3>
              <div>
                <Board1 className='game-board'>
                  {cards.map(card => (
                    <Card
                      key={card.id}
                      id={card.id}
                      value={card.value}
                      isFlipped={flippedCards.some(flippedCard => flippedCard.id === card.id) || matchedCards.includes(card.id)}
                      handleClick={handleCardClick}
                    />
                  ))}
                </Board1>
              </div>
              <div className="message">{message}</div>
              <button className="button" onClick={initializeGame}>Restart Game</button>
              {hasMatchedThree() && (
                <Link href="/woodenalphabet">
                  <button className="button ms-2">Next Level</button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className={`welcome-container ${fadeIn ? "fade-in" : ""}`}>
        <div className="welcome-box left">
          <h2 className="welcome-subtitle">💡 Why Puzzles?</h2>
          <p>Puzzles enhance creativity, problem-solving, and patience. Every piece matters!  Left Box</p>
        </div>
        <div className="welcome-box center">
          <h1 className="welcome-title">🧩 Welcome to the Ultimate Puzzle Challenge! 🧩</h1>
          <p className="welcome-text">
            Hey there, puzzle solver! 🌟 Every puzzle is a new adventure, and every piece is a chance to unlock your potential.
            This is more than just a game—it's your journey to sharpen your mind, test your skills, and celebrate every small victory.
          </p>
          <ul className="welcome-list">
            <li>🔍 Every piece counts: Take your time and explore the possibilities.</li>
            <li>🧠 Sharpen your mind: Solve puzzles to grow stronger.</li>
            <li>🎯 Embrace the challenge: Enjoy the thrill of completing each puzzle!</li>
          </ul>
        </div>
        <div className="welcome-box right">
          <h2 className="welcome-subtitle">🏆 Your Challenge</h2>
          <p>Are you ready to test your skills? Get started and unlock new levels of fun!</p>
        </div>
      </div>
      <div className="game-instructions-container">
        <div className="game-instructions-content">
          <div className="game-instructions">
            <h2 className="instructions-title">How to Play Free ABC Puzzle Game – A Complete Beginner’s Guide</h2>

            <p className="instructions-description">
              The <strong>ABC Puzzle Game</strong> is a fun, interactive, and brain-boosting activity that helps sharpen your mind, improve memory, and enhance problem-solving skills. Whether you're playing a physical version or enjoying the <strong>ABC Puzzle Game online for free</strong>, this engaging game offers a perfect balance of challenge and relaxation. In this step-by-step guide, you’ll learn how to play the ABC Puzzle Game, understand its rules, and pick up expert tips to win more often.
            </p>

            <h3 className="instruction-step">1. Explore Different Types of ABC Puzzle Games</h3>
            <p className="instructions-description">
              The ABC Puzzle Game comes in many forms, including physical puzzles, mobile apps, and <strong>online puzzle games</strong>. Each version offers unique gameplay mechanics and visuals, keeping the experience fresh and exciting.
            </p>

            <h4 className="instruction-step">2. Learn the Game Rules</h4>
            <p className="instructions-description">
              Understanding the rules of the ABC Puzzle Game is key to winning. Before you begin, take a moment to read through the game instructions. Here’s how it works:
            </p>
            <ul className="instructions-list">
              <li>Each player gets 3 chances per game round.</li>
              <li>Match 3 ABC Puzzle Game cards correctly to win the game.</li>
              <li>If the match fails, restart the game and try again.</li>
            </ul>

            <h5 className="instruction-step">3. Set Up for a Better Gaming Experience</h5>
            <p className="instructions-description">
              Whether you’re playing the ABC Puzzle Game on your phone, tablet, or using a traditional board, make sure your environment is set up for comfort:
              <ul>
                <li>Use a clean, flat surface with good lighting for physical puzzles.</li>
                <li>For digital play, adjust brightness and volume settings to create a focused atmosphere.</li>
              </ul>
            </p>

            <h6 className="tips-title">Top Tips to Win at ABC Puzzle Game</h6>
            <ul className="instructions-list">
              <li><strong>Stay Focused:</strong> Take your time and analyze each puzzle piece carefully.</li>
              <li><strong>Practice Makes Perfect:</strong> Regular practice will boost your skills over time.</li>
              <li><strong>Learn from Mistakes:</strong> Missed a match? Think about what went wrong and improve your strategy.</li>
              <li><strong>Increase Difficulty Gradually:</strong> Challenge yourself with harder puzzles as you improve.</li>
            </ul>

            <p className="instruction-step">Conclusion</p>
            <p className="instructions-description">
              The <strong>ABC Puzzle Game</strong> is more than just a way to pass the time – it's a powerful tool for boosting brainpower and having fun. With a clear understanding of the rules and some smart strategies, you'll be matching puzzle cards like a pro in no time. Whether you're new to puzzle games or a seasoned player, the ABC Puzzle Game offers endless hours of entertainment. <strong>Start playing now and enjoy one of the best free puzzle games online!</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Puzzle1;
