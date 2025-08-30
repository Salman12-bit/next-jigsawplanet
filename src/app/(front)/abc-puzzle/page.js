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
  { id: 1, value: 'C' }, { id: 2, value: 'B' },
  { id: 3, value: 'B' }, { id: 4, value: 'E' },
  { id: 5, value: 'E' }, { id: 6, value: 'B' },
  { id: 7, value: 'A' }, { id: 8, value: 'F' },
  { id: 9, value: 'B' },
];

const Puzzle4 = () => {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [attempts, setAttempts] = useState(0);
  const [message, setMessage] = useState('Attempts left: 2');
  const [level, setLevel] = useState(4);
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
                <Link href="/puzzle-abc">
                  <button className="button ms-2">Next Level</button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="game-instructions-container">
        <div className="game-instructions">
          <h1 className="instructions-title">How ABC Puzzles Turn Alphabet Learning Into Play</h1>
          <p className="instructions-description">
            ABC puzzles are more than just playful deviations — they’re interactive tools that introduce young learners to the alphabet through immersive online engagement. The combination of on-screen letters and thoughtful structure turns letter recognition into a fun digital experience. Unlike passive learning methods, these online puzzles involve repetition and exploration, which naturally support early cognitive development and literacy readiness.
          </p>

          <h2 className="instruction-step">Learning Through Letter and Placement</h2>
          <p className="instructions-description">
            The digital layout of the puzzle encourages spatial awareness by challenging learners to drag and drop letters into their correct positions or match a card with one alphabet letter like A or B. This simple act of moving a letter into place activates visual processing and letter differentiation — foundational skills for recognizing and distinguishing between alphabet shapes. When letters appear in uppercase, lowercase, or varied fonts, the process becomes even more enriching, promoting flexible thinking and expanding visual familiarity with the alphabet.
          </p>

          <h3 className="instruction-step">Supporting Memory Retention Through Repetition</h3>
          <p className="instructions-description">
            Repetition is a key element in building memory, and ABC puzzles give that naturally through replay. Every attempt to complete the game reinforces recognition patterns, helping children recall the sequence of letters. This isn’t rote memorization — it’s active learning that provides true benefits to the children. The act of dragging, rotating, and placing letters engages visual and motor memory, reinforcing auditory and visual learning to enhance retention.
          </p>

          <h4 className="instruction-step">Foundations for Spelling and Vocabulary Growth</h4>
          <p className="instructions-description">
            Playing with the alphabet early on creates a pathway toward spelling and vocabulary development. Online alphabet puzzles give the groundwork by familiarizing learners with the order of letters, individual letter names like A, B, and the idea of combining letters into meaningful words. As children become more confident in recognizing the alphabet, they're better prepared to decode words, and understand word structure — all of which support early reading and writing skills.
          </p>

          <h5 className="instruction-step">An Inviting Entry Point Into Independent Discovery</h5>
          <p className="instructions-description">
            This platform offers a learner-led experience where exploration and success come through trial, not instruction. This autonomy boosts interest and self-correction — two traits that lead to deeper interaction. Without the pressure of getting it right on the first try, learners are confident to experiment and enjoy the satisfaction of completing the puzzle on their own, which gives them benefits in the future.
          </p>
        </div>

      </div>
    </div>
  );
};


export default Puzzle4;
