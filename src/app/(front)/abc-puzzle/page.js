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
            <h2 className="instructions-title">How to Play ABC Puzzles</h2>
            <p className="instructions-description">
              <strong>ABC Puzzles</strong> are fun and educational activities designed to help young children learn the alphabet, build letter recognition skills, and develop early literacy in a playful way. Whether you’re using wooden puzzles, foam letters, or interactive digital versions, ABC puzzles are perfect for toddlers and preschoolers. This guide will show you how to play with ABC puzzles, explain the rules, and offer helpful tips to get the most out of each learning session.
            </p>

            <h3 className="instruction-step">1. Discover Different Types of ABC Puzzles</h3>
            <p className="instructions-description">
              ABC puzzles come in many forms to suit different learning styles and age groups:
              <ul>
                <li><strong>Wooden Letter Boards:</strong> Durable puzzles with individual slots for each letter.</li>
                <li><strong>Foam or Magnetic Letters:</strong> Great for sticking on boards, fridges, or bathtubs.</li>
                <li><strong>Interactive Digital Puzzles:</strong> Touch-based or app-based puzzles with visual and sound feedback.</li>
                <li><strong>Themed Puzzles:</strong> ABC puzzles with animals, food, or colors to link letters with real-world objects.</li>
              </ul>
              Choose a style that matches your child’s developmental level and interests.
            </p>

            <h4 className="instruction-step">2. Learn the Puzzle Basics</h4>
            <p className="instructions-description">
              ABC puzzles are easy to understand and great for learning through play. Here’s how to play:
            </p>
            <ul className="instructions-list">
              <li>Let your child explore the letter pieces and the board freely at first.</li>
              <li>Help them match each alphabet to its correct spot or picture outline.</li>
              <li>Say the alphabet name aloud and encourage your child to repeat it.</li>
              <li>Use associated alphabet to build early word recognition.</li>
            </ul>

            <h5 className="instruction-step">3. Create a Positive Puzzle Space</h5>
            <p className="instructions-description">
              A comfortable setup helps children focus and enjoy the experience:
              <ul>
                <li>Play on a clean table, play mat, or rug where pieces won’t get lost.</li>
                <li>Ensure good lighting so letters and pictures are easy to see.</li>
                <li>Keep the full puzzle set in one place for easy access and cleanup.</li>
              </ul>
            </p>

            <h6 className="tips-title">Helpful Tips for Teaching with ABC Puzzles</h6>
            <ul className="instructions-list">
              <li><strong>Start with Name Letters:</strong> Begin with the letters in your child’s name for a personal connection.</li>
              <li><strong>Use Songs and Rhymes:</strong> Sing the ABC song to reinforce the alphabet order.</li>
              <li><strong>Practice Daily:</strong> Short, regular sessions help boost memory and recognition.</li>
              <li><strong>Mix and Match:</strong> Combine puzzles with books, flashcards, or drawing for a full alphabet learning experience.</li>
              <li><strong>Celebrate Progress:</strong> Praise every attempt and success to keep motivation high.</li>
            </ul>

            <p className="instruction-step">Conclusion</p>
            <p className="instructions-description">
              <strong>ABC Puzzles</strong> offer a simple yet powerful way to introduce young learners to letters and early reading skills. By making learning fun and interactive, these puzzles help children build confidence, vocabulary, and literacy foundations. Whether used at home or in the classroom, ABC puzzles are an excellent first step on the path to reading. <strong>Grab an ABC puzzle and let your child’s learning adventure begin today!</strong>
            </p>
          </div>


        </div>
      </div>
    </div>
  );
};


export default Puzzle1;
