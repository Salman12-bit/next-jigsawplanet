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

const Puzzle2 = () => {
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
              <h3 className='level-color'>Match The Letter {level}</h3>
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
          <h1 className="instructions-title">Play Wooden Alphabet Puzzle Online</h1>
          <p className="instructions-description">
            A wooden alphabet puzzle experience is now available in digital form, combining natural charm with interactive play.
            Instead of physical pieces, this online version recreates the same focus and engagement, helping young children practice
            early literacy through fun, hands-on gameplay. Whether played in a classroom or online through different devices, this classic puzzle
            continues to hold its place as a quiet yet powerful educational staple.
          </p>

          <h2 className="instruction-step">Interactive Appeal That Lasts</h2>
          <p className="instructions-description">
            The charm of the wooden alphabet puzzle has been reimagined for the screen. Unlike passive learning tools, this online
            puzzle invites children to drag, drop, and match letters with accuracy. The simple yet versatile design makes it perfect
            for repeated play across different learning stages. More than just a game, it serves as a bridge between design and
            education, merging functionality with a classic style in digital form.
          </p>

          <h3 className="instruction-step">Letter Recognition With Hands-On Precision</h3>
          <p className="instructions-description">
            Letter recognition becomes more memorable when experienced through active interaction. The online puzzle creates this
            opportunity by allowing children to move letters, rotate them, and fit them into matching slots — actions that strengthen
            both literacy and fine motor coordination. This guided movement deepens associations between shapes and sounds, making
            the alphabet easier to understand, not just memorize.
          </p>

          <h4 className="instruction-step">A Focused and Supportive Design</h4>
          <p className="instructions-description">
            In a time when children face constant digital distractions, this puzzle offers a calm and intentional alternative.
            The game is created to encourage slower, more centered interaction, reducing sensory overload while boosting focus.
            It provides peace of mind for parents and caregivers who want screen time to remain purposeful and educational.
          </p>

          <h5 className="instruction-step">A Multi-Sensory Approach to Early Literacy</h5>
          <p className="instructions-description">
            Language development flourishes on repetition and sensory variety. The online wooden alphabet puzzle naturally supports
            this model. The distinct visuals, movement, and spacing of every letter piece give a multisensory technique that aligns
            with how young minds absorb new information. Sound-symbol association, letter recognition, and shape identification all
            become part of a playful, self-directed experience. This holistic method builds both knowledge and confidence, creating
            a strong foundation for future language skills.
          </p>
        </div>

      </div>
    </div>
  );
};


export default Puzzle2;
