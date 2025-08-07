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
                <Link href="/abc-puzzle">
                  <button className="button ms-2">Next Level</button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="game-instructions-container">
        <div className="game-instructions">
          <h1 className="instructions-title">Alphabet Sound Puzzle</h1>
          <p className="instructions-description">
          In early years, alphabet sound puzzles introduce a meaningful way to connect letters with their corresponding phonetic sounds. Designed to support early reading development, this tool brings sound and symbol together in a way that’s both tangible and interactive. Every card typically represents a letter and is matched with a related sound, permitting learners to shape solid sound-related and visual links. As a result, this format has become a valuable resource in language acquisition and early phonics instruction.
          </p>
          <h2 className="instruction-step">Sound Association Through Letter Interaction</h2>
          <p className="instructions-description">
            Understanding the link between letters and their sounds is a core milestone in literacy. This learning tool supports this association by creating opportunities to match letters to audio or phonetic prompts. Each letter represents more than just a shape on a board — it changes into a gateway for pronunciation, recognition, and early learning skills. When a learner listens to a sound and connects it to the right letter, the letter set becomes a useful code or a memorable mental image.
          </p>
          <h3 className="instruction-step">Building Phonemic Awareness at an Early Stage</h3>
          <p className="instructions-description">
            Phonemic awareness is the ability to hear and manipulate individual sounds in spoken words. Alphabet puzzles help this basic literacy skill by allowing children to isolate letter sounds and relate them directly to visual representations of those sounds. This tactile coordination deepens understanding of how words are formed and broken down. It’s a designed, low-pressure format that improves early reading readiness by connecting physical pieces with phonological awareness in a developmentally proper way.
          </p>
          <h4 className="instruction-step">A Multisensory Experience for Language Development</h4>
          <p className="instructions-description">
            The more senses involved in the learning process, the more likely information is to stick. The alphabet sound puzzle combines tactile exploration and visual identification into a single experience. Learners can hear the sound, see the alphabetic letters, and physically move the card into place or open — reinforcing comprehension from multiple angles. This multisensory support is helpful for early learners, young children with language delays, or those who benefit  from varied approaches to concept maintenance.
          </p>
          <h5 className="instruction-step">Practical Applications in Literacy Environments</h5>
          <p className="instructions-description">
            In both classroom and home environments, these puzzles help as practical learning tools that fit naturally into early literacy programs. Their straightforward design and focused functionality make them ideal for repeated practice, individual exploration, or guided guidance. They boost self-correction, experimentation, and sound discovery — all necessary elements of learning how language works. Whether used during free choice time or as part of structured phonics guidance, they give ongoing opportunities for language growth.
          </p>
        </div>
      </div>
    </div>
  );
};


export default Puzzle1;
