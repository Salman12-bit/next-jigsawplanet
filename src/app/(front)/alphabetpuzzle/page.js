"use client"

import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import './puzzle.css';
import Link from 'next/link';
import Card from '@/app/LetterCard/page';

const containerStyle1 = {
  display: 'flex',
  justifyContent: 'space-between',
  gap: '10px',
  width: '100%',
  maxWidth: '1000px',
  margin: '0 auto',
};

const Board = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 100px);
  grid-gap: 12px;
  margin: 0 auto;
`;

const phonicData = {
  A: { word: "Apple", emoji: "🍎", sound: "/æ/" },
  B: { word: "Bee", emoji: "🐝", sound: "/b/" },
  C: { word: "Cat", emoji: "🐱", sound: "/k/" },
  D: { word: "Dog", emoji: "🐶", sound: "/d/" },
  E: { word: "Elephant", emoji: "🐘", sound: "/ɛ/" },
};

const generateNineCards = () => {
  const letters = ["A", "B", "C", "D", "E"];
  let id = 1;
  const pairs = letters.slice(0, 4).flatMap(l => [
    { id: id++, value: l },
    { id: id++, value: l },
  ]);
  pairs.push({ id: id++, value: letters[4] });
  return pairs;
};

const Alphabetpuzzle = () => {
  const [mode, setMode] = useState(null);
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [message, setMessage] = useState('');
  const [attempts, setAttempts] = useState(0);

  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const initializeGame = useCallback(() => {
    setCards(shuffle(generateNineCards()));
    setFlippedCards([]);
    setMatchedCards([]);
    setAttempts(0);
    setMessage('Match the cards!');
  }, []);

  useEffect(() => {
    if (mode) initializeGame();
  }, [mode, initializeGame]);

  const handleCardClick = (id, value) => {
    if (flippedCards.length < 2 && !flippedCards.some(c => c.id === id)) {
      const newFlipped = [...flippedCards, { id, value }];
      setFlippedCards(newFlipped);

      if (newFlipped.length === 2) {
        setAttempts(prev => prev + 1);
        const [first, second] = newFlipped;

        if (first.value === second.value) {
          setMatchedCards(prev => [...prev, first.id, second.id]);
          setFlippedCards([]);

          if (mode === "kid" && phonicData[value]) {
            const { word, emoji, sound } = phonicData[value];
            setMessage(`🎉 ${value} is for ${word} ${emoji} (sound: ${sound})`);
          } else {
            setMessage(`✅ Matched ${value}!`);
          }
        } else {
          setMessage("❌ Try again!");
          setTimeout(() => {
            setFlippedCards([]);
            setMessage("Match the cards!");
          }, 1000);
        }
      }
    }
  };

  const hasMatchedAll = () => matchedCards.length >= cards.length - 1;

  return (
    <div className='alphatext-container' style={{ padding: "20px" }}>
      <div className='alphaplanet-container'>
        <div className='alpharow'>
          <div className="alphaupper-container" style={containerStyle1}>
            <div className="alphagame-container">
              {!mode && (
                <div className="alphamode-select text-center p-6">
                  <h2 className="mb-4">Choose Your Game Mode</h2>
                  <button className="alphabutton m-2" onClick={() => setMode("kid")}>
                    👶 Kid Mode (Phonics)
                  </button>
                  <button className="alphabutton m-2" onClick={() => setMode("young")}>
                    🧑 Young Learner Mode
                  </button>
                </div>
              )}

              {mode && (
                <>
                  <h3 className='alphalevel-color'>
                    Alphabet Puzzle – {mode === "kid" ? "Kid Mode (Phonics)" : "Young Mode"}
                  </h3>
                  <Board className='alphagame-board'>
                    {cards.map(card => (
                      <Card
                        key={card.id}
                        id={card.id}
                        value={card.value}
                        isFlipped={
                          flippedCards.some(f => f.id === card.id) ||
                          matchedCards.includes(card.id)
                        }
                        handleClick={handleCardClick}
                      />
                    ))}
                  </Board>
                  <div className="alphamessage">{message}</div>
                  <div className="alphastats">Attempts: {attempts}</div>
                  <button className="alphabutton" onClick={initializeGame}>Restart Game</button>
                  <button className="alphabutton ms-2" onClick={() => setMode(null)}>🔙 Back to Modes</button>

                  {hasMatchedAll() && (
                    <div className="mt-3">
                      <p>🎉 You matched all pairs! 🎉</p>
                      <Link href="/woodenalphabet">
                        <button className="alphabutton ms-2">Next Level</button>
                      </Link>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <article className="alphagame-instructions-container">
        <div className="alphagame-instructions">
          <h1 className="alphainstructions-title">Alphabet Puzzle – Fun Learning Through Play</h1>
          <p className="alphainstructions-description">
            Alphabet Puzzle isn’t hard to get into. You flip a few cards, drag a few tiles, and you’re already playing. Kids use it to explore letters and sounds, while older players sometimes treat it as a quick memory boost. With two modes—Kid Mode and Young Learner Mode—it works for just about anyone.
          </p>

          <h2 className="alphainstruction-step">How to Play</h2>
          <p className="alphainstructions-description">
            Start by picking a mode. In Kid Mode, every match shows a little extra—maybe a sound, a word, or even a small emoji (A for Apple 🍎). It feels playful without looking like homework. Young Learner Mode plays more like a memory game. The cards start face down, you flip two, and if they match, they stay open. If not, you just need to remember where they were. It’s simple to pick up, but it makes you think as you go.
          </p>

          <h2 className="alphainstruction-step">Why It’s Helpful</h2>
          <p className="alphainstructions-description">
            For kids, it’s a fun way to pick up letters and sounds without sitting through lessons. Young learners get to practice focus and problem-solving while they play. Adults can use it as a short mental break—something quick that sharpens memory without feeling like work.
          </p>

          <h2 className="alphainstruction-step">Who Can Play</h2>
          <p className="alphainstructions-description">
            Anyone can jump in. Kids love flipping the cards and shouting out the matches. Parents like that it mixes fun with learning. Families can play together for a light challenge, and adults sometimes just use it as a brain warm-up. Since it blends phonics, memory, and strategy, it works for all ages.
          </p>

          <h2 className="alphainstruction-step">What’s Next</h2>
          <p className="alphainstructions-description">
            The first few levels are easy, but new twists show up fast. Extra cards, harder layouts, and trickier matches keep you thinking. Each round feels a little different, so there’s always something new to try.
          </p>
        </div>
      </article>
    </div>
  );
};

export default Alphabetpuzzle;
