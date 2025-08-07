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
          <h1 className="welcome-subtitle">Welcome to the Extreme Puzzle Challenge!</h1>
          <p className="welcome-text">
            Hey, Puzzle lover! Each level on our site is a modern experience, full of excitement and a chance to boost your aptitudes.
            Our platform isn’t about playing the game—it’s centered on challenging your intellect and celebrating each little triumph along the way.
          </p>
        </div>
        <div className="welcome-box center">
          <h2 className="welcome-title">Why Puzzles?</h2>
          <p className="welcome-text">
            Puzzles aren't just games; they're a powerful tool for improving your cognitive skills. They stimulate advancement,
            boost basic thinking, and energize tolerance. Whether you're matching cards or spotting patterns, every
            card that you open is part of a greater strategy. Dive in, focus your mind, and enjoy the procedure of discovery!
          </p>
        </div>
        <div className="welcome-box right">
          <h2 className="welcome-subtitle"> Your Challenge</h2>
          <p className="welcome-text">
            Are you ready to test your skills and boost your mental limits? The Ultimate Puzzle Challenge is designed to bring out
            your  strategy. With every completed puzzle, you’ll grow more confident. Step into a world of fun,
            logic, and excitement—your puzzle journey begins now!
          </p>
        </div>
      </div>

      <article className="game-instructions-container">
        <div className="game-instructions-content">
          <div className="game-instructions">
            <h2 className="instructions-title">
              How to Play Free ABC Puzzle Game – A Complete Beginner’s Guide
            </h2>
            <p className="instructions-description">
              The <strong>ABC Puzzle Game</strong> is a fun, engaging, and improved critical thinking activity designed to enhance memory
              and improve logical problem-solving. Whether you're playing the physical version or the
              <strong> ABC Puzzle Game online for free</strong>, this game gives a perfect mix of obstacles and relaxation.
              In these beginner-friendly instructions, you’ll learn how to get started on this puzzle level, understand the puzzle rules, and discover top tips to win consistently.
            </p>
            <h3 className="instruction-step">1. Explore Different Types of ABC Puzzle Games</h3>
            <p className="instructions-description">
              ABC Puzzle Games are accessible in different formats, like physical puzzles, mobile apps, and engaging
              <strong> online puzzles</strong>. Every version gives unique visuals and mechanics to keep your experience engaging and dynamic.
            </p>
            <h4 className="instruction-step">2. Learn the Game Rules</h4>
            <p className="instructions-description">
              Understanding the rules is necessary for mastering the ABC Puzzle Game. Before you play, take a minute to review how to play this game:
            </p>
            <ul className="instructions-list">
              <li>Every player gets three chances per game round.</li>
              <li>Match three ABC Puzzle cards correctly to win this level.</li>
              <li>If you can't match the cards, restart and try again.</li>
            </ul>
            <h6 className="tips-title">Top Tips to Win at ABC Puzzle Game</h6>
            <ul className="instructions-list">
              <li><strong>Stay Focused:</strong> Observe every puzzle card and think strategically before opening a new one.</li>
              <li><strong>Practice Makes Perfect:</strong> Puzzle game wants practice more you play, the better your skills become.</li>
              <li><strong>Learn from Mistakes:</strong> Analyze your previous actions, check your errors, and build a strategy according to them.</li>
            </ul>
            <p className="instruction-step">Conclusion</p>
            <p className="instructions-description">
              The <strong>ABC Puzzle Game</strong> is an easy and enjoyable way to challenge your thinking level. Understanding the puzzle rules and steady practice, you’ll be matching puzzle cards like a professional. Whether you’re modern or experienced, this puzzle diversion guarantees endless excitement.
              <strong> Start playing now!</strong>
            </p>

          </div>
        </div>
      </article>
    </div>
  );
};


export default Puzzle1;
