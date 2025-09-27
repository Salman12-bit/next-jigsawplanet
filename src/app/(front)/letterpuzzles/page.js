"use client"

import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import './puzzle.css';
import Link from 'next/link'
import Card from '@/app/LetterCard/page';

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
  { id: 3, value: 'B' }, { id: 4, value: 'E' },
  { id: 5, value: 'A' }, { id: 6, value: 'D' },
  { id: 7, value: 'A' }, { id: 8, value: 'F' },
  { id: 9, value: 'D' },
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
    <div className='lettertext-conainer' style={{
      padding: "20px"
    }}>
      <div className='letterplanet-container'>
        <div className='letterrow'>
          <div className="letterupper-container" style={containerStyle1}>
            <div className="lettergame-container">
              <h3 className='letterlevel-color'>Match The Pairs Level {level}</h3>
              <div>
                <Board1 className='lettergame-board'>
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
              <div className="lettermessage">{message}</div>
              <button className="letterbutton" onClick={initializeGame}>Restart Game</button>
              {hasMatchedThree() && (
                <Link href="/abc-puzzle">
                  <button className="letterbutton ms-2">Next Level</button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="letter-instructions-container">
        <div className="letter-instructions">
          <h1 className="letter-title">Letter Puzzle – A Fun and Challenging Memory Game</h1>

          <p className="letter-description">
            The Letter Puzzle is easy to get into. The cards are face down, each hiding a letter. Flip one, see what’s there, and try to remember it. Match the letters before your turns run out. It’s quick, simple, and works for kids, families, or adults who just want a short challenge.
          </p>

          <h2 className="letter-step">How to Play</h2>
          <p className="letter-description">
            You start by flipping a card to see the letter. Then pick another card and hope it matches. When you’re right, the pair stays open. If not, they flip back, and you’ll need to remember where they were. Since you only get limited tries, every move counts. Some levels even shake things up by asking you to match three of the same letter instead of just two.
          </p>

          <h2 className="letter-step">Why It’s Fun</h2>
          <p className="letter-description">
            The fun part is the guessing. You flip a card and hope it’s the one you need. Sometimes it works out, sometimes it doesn’t—but either way, you remember more for the next turn. When you finally land a match, it gives you a nice little win. And the hidden letters keep it from feeling like just another puzzle game.
          </p>

          <h2 className="letter-step">Who Can Play</h2>
          <p className="letter-description">
            Really, anyone can play. Kids like the surprise of finding letters. Families can make a game night out of it. Adults might use it as a quick brain break during the day. The rules don’t take long to learn, the colors are fun, and finishing a round is always satisfying.
          </p>

          <h2 className="letter-step">The Next Step</h2>
          <p className="letter-description">
            After you get used to the basics, new levels keep things interesting. Some are tougher, some add twists, but they all test your memory. Keep flipping, keep matching, and see how far you can go.
          </p>
        </div>
      </div>
    </div>
  );
};


export default Puzzle1;
