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
            The Letter Puzzle is an interactive mix of memory, strategy, and learning for lovers. Players see a grid of hidden cards, each one holding a letter. Every new player's challenge is to flip the cards, find the hidden letters, and match letters correctly before you run out of attempts. This exclusive blend of a matching puzzle and alphabet memory game makes it interactive and educational for kids, families, and adults alike.
          </p>
          <h2 className="letter-step">How to Play</h2>
          <p className="letter-description">
            Playing this game is simple but never boring. You start by flipping a card to show its hidden letter, then try another card to find a match. If the two letters are the same, they stay open; if not, they turn back over, testing your memory. With limited attempts, every move matters and gives you a strategy to complete this. Some rounds even need matching three identical letters, adding a clever twist that makes the puzzle more challenging as you progress.
          </p>
          <h2 className="letter-step">Why It’s Engaging</h2>
          <p className="letter-description">
            What makes the game stand out is the suspense of each flip. If cards match, then good, if cards are not matched, then keep in mind their place for later? This card puzzle gives excitement, enhances concentration, and supports problem-solving skills. The theme of hidden letters keeps players hooked while gradually testing memory and logic skills in a fun way.
          </p>
          <h2 className="letter-step">Who Can Enjoy It?</h2>
          <p className="letter-description">
            The game is designed for everyone. Kids enjoy the surprise of finding or matching letters, families can play together, and adults can take it as a quick mental exercise. Its simple rules, colorful theme, and rewarding progress craft it suitable for all ages and skill levels.
          </p>
          <h2 className="letter-step">Next Challenge Awaits</h2>
          <p className="letter-description">
            Once you’ve mastered the Letter Puzzle, you can move on to the next challenge, where new puzzles and fresh twists are waiting. Keep flipping, keep matching, and see how far your memory and strategy can take you.
          </p>
        </div>
      </div>
    </div>
  );
};


export default Puzzle1;
