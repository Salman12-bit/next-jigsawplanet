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
  { id: 3, value: 'F' }, { id: 4, value: 'E' },
  { id: 5, value: 'E' }, { id: 6, value: 'S' },
  { id: 7, value: 'A' }, { id: 8, value: 'F' },
  { id: 9, value: 'E' },
];

const Puzzle1 = () => {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [attempts, setAttempts] = useState(0);
  const [message, setMessage] = useState('Attempts left: 2');
  const [level, setLevel] = useState(3);
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
            <h2 className="instructions-title">How to Play Free Alphabet Sound Puzzle – A Complete Beginner’s Guide</h2>
            <p className="instructions-description">
              The <strong>Alphabet Sound Puzzle</strong> is an exciting educational toy designed to help children learn letters and their sounds, improve listening skills, and develop early phonics awareness. Whether you're using a traditional physical puzzle with sound effects or a modern digital version, this interactive activity blends learning and play beautifully. In this easy guide, you’ll discover how to play with the Alphabet Sound Puzzle, understand the rules, and pick up helpful tips to make the most of every learning session.
            </p>
            <h3 className="instruction-step">1. Explore Different Types of Alphabet Sound Puzzles</h3>
            <p className="instructions-description">
              Alphabet sound puzzles come in various styles—from simple sound-activated letter boards to advanced versions with full-word pronunciation and games. Some puzzles play a letter's sound when a piece is placed correctly, while others might include songs or word associations. Choose the version that fits your child’s age, interests, and learning goals.
            </p>
            <h4 className="instruction-step">2. Learn the Puzzle Rules</h4>
            <p className="instructions-description">
              Alphabet sound puzzles are intuitive and beginner-friendly, but understanding the basic rules and goals can make playtime even more beneficial. Here’s how it works:
            </p>
            <ul className="instructions-list">
              <li>Match each letter piece to its corresponding slot or picture on the board.</li>
              <li>When the piece fits correctly, the puzzle plays the letter’s name or phonetic sound.</li>
              <li>Encourage your child to repeat the sound aloud to reinforce phonics skills.</li>
              <li>Continue matching all the letters while practicing pronunciation and recognition.</li>
            </ul>

            <h5 className="instruction-step">3. Set Up for a Better Puzzle Experience</h5>
            <p className="instructions-description">
              Create a fun and supportive environment for learning:
              <ul>
                <li>Use a stable, flat surface like a play table or a clean floor area.</li>
                <li>Ensure the space is well-lit and free from too many distractions.</li>
                <li>Keep all puzzle pieces organized and within easy reach to maintain focus.</li>
              </ul>
            </p>

            <h6 className="tips-title">Top Tips for Teaching with Alphabet Sound Puzzle</h6>
            <ul className="instructions-list">
              <li><strong>Start Small:</strong> Introduce a few letters at a time, focusing on their sounds, before expanding to the whole alphabet.</li>
              <li><strong>Make It Fun:</strong> Use real-life examples (like “A is for Apple” or “B is for Ball”) when practicing sounds.</li>
              <li><strong>Repeat and Reinforce:</strong> Regular play helps children remember letters and sounds more quickly.</li>
              <li><strong>Celebrate Effort:</strong> Offer lots of positive encouragement to keep children motivated and confident.</li>
            </ul>

            <p className="instruction-step">Conclusion</p>
            <p className="instructions-description">
              The <strong>Alphabet Sound Puzzle</strong> is a fantastic tool for introducing children to phonics in a playful, hands-on way. It’s interactive, educational, and perfect for toddlers, preschoolers, and early learners. Whether you’re a parent, teacher, or caregiver, this puzzle helps children connect letters with their sounds, building a strong foundation for reading and language skills. <strong>Start your child’s phonics adventure today with a fun and engaging Alphabet Sound Puzzle – where learning comes alive through sound!</strong>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};


export default Puzzle1;
