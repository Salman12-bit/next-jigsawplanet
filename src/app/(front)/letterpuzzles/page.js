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

const Puzzle6 = () => {
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
        <div className="game-instructions">
          <h1 className="instructions-title">Victorian Puzzle Letters: Art, Secrecy, and Sentiment</h1>
          <p className="instructions-description">
            In the mid-19th century, when handwriting was both a personal signature and an art form, a curious convention emerged: the Victorian puzzle letter. Far from ordinary correspondence, these letters were part message and part keepsake. They invited the recipient to unfold a secret world — one where love and craftsmanship met in a single piece of paper.
          </p>
          <h2 className="instruction-step">When Letters Became Works of Art</h2>
          <p className="instructions-description">
            Puzzle letters turned communication into a hands-on experience. Writers didn’t simply send words; they developed them. Paper was folded into hearts, flowers, or complex geometric patterns, and often, writer messages are hidden in layers. Each crease carried intention — sometimes protecting a private joke or coded poem. In 1848, a London suitor sent his beloved a collapsed rose-shaped letter that, when opened petal by petal, revealed a sonnet and a bolt of his hair — an ardent motion that was both lively and intensely emotional.
          </p>
          <h3 className="instruction-step">A Language Beyond Every Word</h3>
          <p className="instructions-description">
            These letters offered a form of expression that was multi-dimensional. Messages were often inserted with rebuses, or symbolic colors, inviting the reader to unveil not just the words but the emotions between them. These layered techniques reflected a society that valued subtlety, emotional intelligence, and the art of excitement. A puzzle letter was as much an emotional performance as a written note.
          </p>
          <h4 className="instruction-step">A Delicate Legacy</h4>
          <p className="instructions-description">
            Real Victorian letters are rare today, their fragility matched only by the intimacy of their purpose. Museums and collectors treasure them not only for their beauty but as glimpses into a slower, more considered era of human connection. To preserve one is to maintain an act of love, creativity, and tangible storytelling — a reminder that communication was once as much about the journey as the message.
          </p>
          <h5 className="instruction-step">Modern Inspirations</h5>
          <p className="instructions-description">
            Modern artists and paper crafters are rediscovering the attraction of puzzle letters. Wedding invitations and digital art have borrowed from their folded narratives and symbolic layout, bringing the puzzle spirit into modern hands. In renewing this tradition of puzzles, today’s creators honor the balance of beauty and meaning that once changed simple letters into treasured heirlooms.
          </p>
        </div>
      </div>
    </div>
  );
};


export default Puzzle6;
