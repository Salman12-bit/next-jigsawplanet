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
  { id: 1, value: 'C' }, { id: 2, value: 'F' },
  { id: 3, value: 'B' }, { id: 4, value: 'E' },
  { id: 5, value: 'F' }, { id: 6, value: 'D' },
  { id: 7, value: 'A' }, { id: 8, value: 'F' },
  { id: 9, value: 'D' },
];

const Puzzle1 = () => {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [attempts, setAttempts] = useState(0);
  const [message, setMessage] = useState('Attempts left: 2');
  const [level, setLevel] = useState(6);
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
                <Link href="/">
                  <button className="button ms-2">Next Level</button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="game-instructions-container">
        <div className="game-instructions-content">
          <div className="game-instructions">
            <h2 className="instructions-title">How to Play Victorian Puzzle Letter Games</h2>
            <p className="instructions-description">
              <strong>Victorian Puzzle Letter</strong> games are a fun and educational way to help children learn the alphabet with a touch of historical charm. These games support early literacy by strengthening letter recognition and phonics skills in an interactive setting. Perfect for preschoolers and early learners, Victorian Puzzle Letter activities combine play and learning to build confidence in reading.
            </p>
            <h3 className="instruction-step">1. Learn the Puzzle Basics</h3>
            <p className="instructions-description">
              Victorian Puzzle Letter games are simple to play and highly effective. Here’s how to get started:
            </p>
            <ul className="instructions-list">
              <li>Let your child explore each alphabet piece on their own first.</li>
              <li>Help them match each letter to its correct position or outline.</li>
              <li>Say the letter name aloud and ask your child to repeat it.</li>
              <li>Use the letters to form simple words as they progress.</li>
            </ul>
            <h4 className="instruction-step">2. Create a Positive Puzzle Space</h4>
            <p className="instructions-description">
              A well-prepared space helps kids focus and enjoy the experience:
            </p>
            <ul className="instructions-list">
              <li>Use a soft surface or mat to keep puzzle pieces from sliding.</li>
              <li>Make sure the area is well-lit and free from distractions.</li>
              <li>Keep all puzzle parts organized in one place for easy setup and cleanup.</li>
            </ul>
            <h5 className="tips-title">Helpful Tips for Victorian Puzzle Letter Learning</h5>
            <ul className="instructions-list">
              <li><strong>Start with Familiar Letters:</strong> Begin with the letters in your child’s name.</li>
              <li><strong>Use the ABC Song:</strong> Reinforce letter order with music and rhymes.</li>
              <li><strong>Keep Sessions Short:</strong> Focused, 10-minute sessions work best for young kids.</li>
              <li><strong>Combine with Stories:</strong> Connect letters to words and books your child enjoys.</li>
            </ul>
            <p className="instruction-step">Conclusion</p>
            <p className="instructions-description">
              <strong>Victorian Puzzle Letter</strong> games are a great way to introduce letters and phonics in a playful, hands-on way. With a blend of classic style and educational value, they help children develop essential literacy skills while keeping them engaged. Start your child’s learning adventure today with the timeless fun of Victorian Puzzle Letters!
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};


export default Puzzle1;
