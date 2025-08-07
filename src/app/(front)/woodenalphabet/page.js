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
                <Link href="/wooden-puzzle">
                  <button className="button ms-2">Next Level</button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="game-instructions-container">
        <div className="game-instructions">
          <h1 className="instructions-title">Wood Alphabet Puzzle</h1>
          <p className="instructions-description">
            A wood alphabet puzzle offers natural texture and tactile interaction in a single, classic product. Handmade with simplicity and purpose, these puzzles combine early literacy with tactile development in a process that digital tools often can’t copy. Whether a wooden puzzle is placed in a learning corner, on a table, or within a children's playroom, this wooden design continues to hold its place as a quiet yet powerful educational staple.
          </p>
          <h2 className="instruction-step">Material Integrity and Lasting Appeal</h2>
          <p className="instructions-description">
            The charm of a wood alphabet puzzle lies in the material itself. Unlike plastic or digital alternatives, wood adds warmth and physical connection. Its grain patterns, gentle weight, and smooth edges offer a sensory depth that invites touch and focus. The versatility of wooden cards guarantees they can be handled and extended without wearing down, making them perfect for repeated use over different learning stages. More than just a toy, they serve as a tangible connection between design and education, merging functionality with a characteristic stylish.
          </p>
          <h3 className="instruction-step">Letter Recognition With Hands-On Precision</h3>
          <p className="instructions-description">
            Letter recognition becomes more memorable when it’s experienced through physical interaction. A wood alphabet puzzle creates this opportunity by allowing children to pick up, rotate, and fit letters into specific slots — actions that strengthen both literacy and fine motor coordination. This guided movement deepens neural associations between shapes and sounds, making the alphabet easier to understand, not just to memorize. Each piece becomes a familiar symbol, processed not just by sight, but by feel and action.
          </p>
          <h4 className="instruction-step">Sustainable Design That Supports Learning</h4>
          <p className="instructions-description">
            In a time when sustainability and intentional living are growing problems, wooden puzzles give a conscious alternative to mass-produced, single-use objects. Various are crafted from responsibly sourced wood and completed with non-toxic paints or natural oils — providing peace of mind to parents and caregivers. But beyond their eco-friendly qualities, the quiet style of wood boosts the learning space. These puzzles promote slower, more centered interaction, diminishing sensory overburden, and encouraging a calm, grounded learning design.
          </p>
          <h5 className="instruction-step">A Multi-Sensory Approach to Early Literacy</h5>
          <p className="instructions-description">
            Language development flourishes on repetition and sensory variety. Wood alphabet puzzles naturally support this model. The distinct textures, weights, and spacing of every letter piece give a multisensory technique that aligns with how young minds pick up new information. Sound-symbol association, letter recognition, and shape identification all become part of a playful, self-directed experience. This holistic method enables learners to acquire knowledge but also confidence, developing a strong foundation for future language skills.
          </p>
        </div>
      </div>
    </div>
  );
};


export default Puzzle1;
