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
  { id: 1, value: 'C' }, { id: 2, value: 'D' },
  { id: 3, value: 'B' }, { id: 4, value: 'E' },
  { id: 5, value: 'E' }, { id: 6, value: 'D' },
  { id: 7, value: 'A' }, { id: 8, value: 'F' },
  { id: 9, value: 'D' },
];

const Puzzle5 = () => {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [attempts, setAttempts] = useState(0);
  const [message, setMessage] = useState('Attempts left: 2');
  const [level, setLevel] = useState(5);
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
                <Link href="/letterpuzzles">
                  <button className="button ms-2">Next Level</button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="game-instructions-container">
        <div className="game-instructions">
          <h1 className="instructions-title">Puzzle ABC Games: Learning Letters Through Play</h1>
          <p className="instructions-description">
          Puzzle ABC games change alphabet learning into an adventure of problem-solving and creativity. Instead of rote memorization, learners are invited to explore letters as part of engaging challenges — opening cards, forming sequences, and solving visual arrangements. This hands-on interaction strengthens both literacy skills and cognitive thinking, changing the alphabet into a puzzle that’s as satisfying as it is educational.
          </p>
          <h2 className="instruction-step">Enhancing Literacy With Strategic Play</h2>
          <p className="instructions-description">
          Don't like flashcards or repetitive drills, Puzzle ABC games motivate learners to approach letters as part of a structured game. Matching, sequencing, and sorting every piece in a specific time helps children to recognize letters and their order while refining attention and focus. By treating the alphabet like a game board, learners actively participate in the process, completing puzzles — seeing letters not as abstract symbols, but as tools that form the foundation of words and communication for young children.
          </p>
          <h3 className="instruction-step">Building Visual Sequencing Skills</h3>
          <p className="instructions-description">
          Sequencing is necessary for reading fluency and everyday problem-solving that children face. Puzzle ABC naturally strengthens this skill by giving instructions to the players to arrange letters in which order, spot progressions, or scan for missing pieces. These exercises enhance left-to-right tracking, spatial organization, and visual memory — all of which help early literacy and give motivation to the learners for the structured thinking needed in future academic tasks.
          </p>
          <h4 className="instruction-step">Developing Pattern Recognition Through Letters</h4>
          <p className="instructions-description">
          Patterns are everywhere in language, from vowel-consonant groupings to repeated letter shapes. Puzzle ABC fosters pattern recognition by inviting learners to notice relationships between letters — whether identifying vowels or completing thematic grids. Players can recognize these patterns. These patterns not only accelerate reading development but also boost the analytical mindset necessary for problem-solving.
          </p>
          <h5 className="instruction-step">Balancing Structure With Imagination</h5>
          <p className="instructions-description">
          While puzzle abc games promote accuracy and logic, they also leave room for playful exploration. Children may experiment with innovative arrangements or set their own rules, blending design with free-form discovery. This balance develops interest in young learners and a sense of achievement that is beneficial in both early learning and lifelong problem-solving skills.
          </p>
        </div>
      </div>
    </div>
  );
};


export default Puzzle5;
