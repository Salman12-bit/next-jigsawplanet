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
  { id: 1, value: 'C' }, { id: 2, value: 'A' },
  { id: 3, value: 'F' }, { id: 4, value: 'C' },
  { id: 5, value: 'C' }, { id: 6, value: 'E' },
  { id: 7, value: 'E' }, { id: 8, value: 'F' },
  { id: 9, value: 'C' },
];

const Puzzle1 = () => {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [attempts, setAttempts] = useState(0);
  const [message, setMessage] = useState('Attempts left: 2');
  const [level, setLevel] = useState(2);
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
            <h2 className="instructions-title">How to Play Free Wood Alphabet Puzzle – A Complete Beginner’s Guide</h2>

            <p className="instructions-description">
              The <strong>Wood Alphabet Puzzle</strong> is a classic educational toy designed to help children learn letters, improve hand-eye coordination, and develop fine motor skills. Whether you're using a traditional wooden puzzle set or a modern digital version, this interactive activity combines fun and learning in the best way. In this easy guide, you’ll discover how to play with the Wood Alphabet Puzzle, learn the rules, and pick up helpful tips to make the most of every session.
            </p>

            <h3 className="instruction-step">1. Explore Different Types of Wood Alphabet Puzzles</h3>
            <p className="instructions-description">
              Wood alphabet puzzles come in many styles—from simple letter cutouts to advanced sets that include pictures, sounds, or spelling challenges. Some are flat board puzzles, while others are 3D blocks or Montessori-style toys. Choose the version that suits your child’s age and learning level.
            </p>

            <h4 className="instruction-step">2. Learn the Puzzle Rules</h4>
            <p className="instructions-description">
              While wood alphabet puzzles are intuitive and beginner-friendly, understanding the basic rules and goals makes the activity more rewarding. Here's how it works:
            </p>
            <ul className="instructions-list">
              <li>Match each wooden letter to its corresponding cutout or image.</li>
              <li>Help your child pronounce the letter and associate it with a letter.</li>
              <li>If the letter doesn’t fit, rotate it gently and try again.</li>
              <li>Repeat until the full alphabet is matched correctly.</li>
            </ul>

            <h5 className="instruction-step">3. Set Up for a Better Puzzle Experience</h5>
            <p className="instructions-description">
              Create a comfortable and distraction-free space for learning and play:
              <ul>
                <li>Use a flat, child-friendly surface like a play table or mat.</li>
                <li>Ensure the area has good lighting and a quiet atmosphere.</li>
                <li>Keep all puzzle pieces in one place to avoid losing letters.</li>
              </ul>
            </p>

            <h6 className="tips-title">Top Tips for Teaching with Wood Alphabet Puzzle</h6>
            <ul className="instructions-list">
              <li><strong>Start with a Few Letters:</strong> Introduce 3–5 letters at a time to avoid overwhelming young learners.</li>
              <li><strong>Make It Interactive:</strong> Say each letter aloud and use fun examples (like animal names or toys).</li>
              <li><strong>Repeat Often:</strong> Daily play helps reinforce letter recognition and phonics.</li>
              <li><strong>Use Positive Encouragement:</strong> Praise effort, not just accuracy, to build confidence.</li>
            </ul>

            <p className="instruction-step">Conclusion</p>
            <p className="instructions-description">
              The <strong>Wood Alphabet Puzzle</strong> is a wonderful hands-on learning tool that supports early childhood development through play. It's fun, engaging, and educational—perfect for toddlers, preschoolers, and kindergarteners. Whether you’re a parent, teacher, or caregiver, using this puzzle is a great way to introduce the alphabet in an interactive and memorable way. <strong>Start exploring the alphabet today with a high-quality wood alphabet puzzle – where learning meets play!</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Puzzle1;
