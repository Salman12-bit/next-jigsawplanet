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

const Puzzle1 = () => {
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
          <h1 className="instructions-title">ABC Puzzles</h1>
          <p className="instructions-description">
            ABC puzzles are more than just playful deviations — they’re tools that introduce young learners to the alphabet through immersive engagement. The combination of physical letters and thoughtful structure changes letter recognition into a hands-on experience. Unlike passive learning ways, these puzzles involve repetition and exploration, which naturally help early cognitive development and literacy readiness.
          </p>
          <h2 className="instruction-step">Learning Through Letter and Placement</h2>
          <p className="instructions-description">
          The physical design of the puzzle encourages spatial awareness by challenging learners to match the alphabet letters with their corresponding slots. This simple act of fitting a letter in place or matching a card activates visual processing and letter differentiation — foundational skills for recognizing and distinguishing between letters and cards. When letters are presented in uppercase, lowercase, or varied fonts, the process becomes even more enriching, promoting flexible thinking and expanding visual familiarity with the alphabet.
          </p>
          <h3 className="instruction-step">Supporting Memory Retention Through Repetition</h3>
          <p className="instructions-description">
            Repetition is a key element in building memory, and ABC puzzles provide that naturally through replay. Every attempt to complete the puzzle reinforces recognition patterns, helping children recall the sequence of letters. This isn’t rote memorization — it’s active learning that gives true benefits to the children. The act of picking up a letter, turning it over, and carefully opening it engages muscle memory, reinforcing auditory and visual learning to enhance retention.
          </p>
          <h4 className="instruction-step">Foundations for Spelling and Vocabulary Growth</h4>
          <p className="instructions-description">
            Stimulating with the alphabet early on creates a pathway toward spelling and vocabulary development. Alphabet puzzles provide the groundwork by familiarizing learners with the order of letters, individual letter names like A, B, and the idea of combining letters into meaningful words. As children become more conscious in recognizing the alphabet, they're better prepared to decode words, syllables, and understand word structure — these components help children to read and descriptive writing.
          </p>
          <h5 className="instruction-step">An Inviting Entry Point Into Independent Discovery</h5>
          <p className="instructions-description">
            ABC puzzles provide a learner-led experience where exploration and success come through trial, not instruction. This autonomy improves interest and self-correction — two traits that lead to deeper interaction. Without the pressure of right or wrong answers on the first try, learners are confident to experiment and enjoy the satisfaction of completion.
          </p>
        </div>
      </div>
    </div>
  );
};


export default Puzzle1;
