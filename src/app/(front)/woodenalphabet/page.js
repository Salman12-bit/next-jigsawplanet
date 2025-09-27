"use client"

import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import './woodpuzzle.css';
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
  grid-template-columns: repeat(3, 110px);
  grid-gap: 14px;
  margin: 0 auto;
`;

const phonicData = {
  F: { word: "Fish", emoji: "🐟", sound: "/f/" },
  G: { word: "Grapes", emoji: "🍇", sound: "/g/" },
  H: { word: "Hat", emoji: "👒", sound: "/h/" },
  I: { word: "Igloo", emoji: "🏠", sound: "/ɪ/" },
  J: { word: "Juice", emoji: "🧃", sound: "/ʤ/" },
};

const generateNineCards = () => {
  const letters = ["F", "G", "H", "I", "J"];
  let id = 1;
  const pairs = letters.slice(0, 4).flatMap(l => [
    { id: id++, value: l },
    { id: id++, value: l },
  ]);
  pairs.push({ id: id++, value: letters[4] });
  return pairs;
};

const Woodenpuzzle = () => {
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
    setMessage('Match the Wooden Alphabet Puzzle cards!');
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
            setMessage("Match the Wooden Alphabet Puzzle cards!");
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
                  <h2 className="mb-4">Choose Your Wooden Alphabet Puzzle Mode</h2>
                  <button className="alphabutton m-2" onClick={() => setMode("kid")}>
                    👶 Kid Mode (Phonics + Wooden Puzzle)
                  </button>
                  <button className="alphabutton m-2" onClick={() => setMode("young")}>
                    🧑 Young Learner Mode (Wooden Puzzle)
                  </button>
                </div>
              )}

              {mode && (
                <>
                  <h3 className='alphalevel-color'>
                    Wooden Alphabet Puzzle – {mode === "kid" ? "Kid Mode" : "Young Mode"}
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
                  <button className="alphabutton" onClick={initializeGame}>Restart Puzzle</button>
                  <button className="alphabutton ms-2" onClick={() => setMode(null)}>🔙 Back to Modes</button>

                  {hasMatchedAll() && (
                    <div className="mt-3">
                      <p>🎉 You solved the Wooden Alphabet Puzzle! 🎉</p>
                      <Link href="/wooden-puzzle">
                        <button className="alphabutton ms-2">Next Puzzle</button>
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
          <h1 className="alphainstructions-title">Wooden Alphabet Puzzle – Learn and Play</h1>
          <p className="alphainstructions-description">
            The Wooden Alphabet Puzzle has a clean, modern wooden style that feels fresh on screen.
            It works like a digital alphabet matching game—you’ll see letters like F, G, H, I, and J mixed up across the board.
            Flip the tiles, match the pairs, and clear the set.
            In Kid Mode, each match comes with sounds, words, and fun emojis, while Young Learner Mode turns it into more of a memory puzzle.
          </p>

          <h2 className="alphainstruction-step">How to Play</h2>
          <p className="alphainstructions-description">
            Choose a mode and begin. In Kid Mode, every match shows the letter with a word and sound—for example, “G is for Grapes 🍇.”
            In Young Learner Mode, the cards stay face down—flip two, see if they match, and remember their spots for later.
            Clear the board to complete the round in this simple but clever letter learning puzzle.
          </p>

          <h2 className="alphainstruction-step">Why It’s Fun</h2>
          <p className="alphainstructions-description">
            The fun of this alphabet matching game comes from the flips—you never know what’s under a tile until you try.
            Kids enjoy the surprise and start picking up letters without even noticing.
            For older players, the memory challenge keeps things engaging and makes it feel like more than just practice.
          </p>

          <h2 className="alphainstruction-step">Who Can Play</h2>
          <p className="alphainstructions-description">
            It’s made for everyone. Kids love the sounds and matches, families can play together,
            and adults sometimes use it as a short brain exercise to reset their minds.
            The wooden design gives it a warm, classic feel that makes this letter puzzle stand out from regular apps.
          </p>

          <h2 className="alphainstruction-step">The Next Step</h2>
          <p className="alphainstructions-description">
            After the first few rounds, the puzzles don’t stop there.
            You’ll see bigger layouts, more letters, and matches that take a little more thought.
            Each level feels fresh, so whether you’re learning or just playing for a break, there’s always something new to try.
          </p>
        </div>
      </article>
    </div>
  );
};

export default Woodenpuzzle;
