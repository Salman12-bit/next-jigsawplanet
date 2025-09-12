"use client"

import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import './woodpuzzle.css';
import Link from 'next/link';
import Card from '@/app/Card/page';

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
    <div className='text-container' style={{ padding: "20px" }}>
      <div className='planet-container'>
        <div className='row'>
          <div className="upper-container" style={containerStyle1}>
            <div className="game-container">
              {!mode && (
                <div className="mode-select text-center p-6">
                  <h2 className="mb-4">Choose Your Wooden Alphabet Puzzle Mode</h2>
                  <button className="button m-2" onClick={() => setMode("kid")}>
                    👶 Kid Mode (Phonics + Wooden Puzzle)
                  </button>
                  <button className="button m-2" onClick={() => setMode("young")}>
                    🧑 Young Learner Mode (Wooden Puzzle)
                  </button>
                </div>
              )}

              {mode && (
                <>
                  <h3 className='level-color'>
                    Wooden Alphabet Puzzle – {mode === "kid" ? "Kid Mode" : "Young Mode"}
                  </h3>
                  <Board className='game-board'>
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
                  <div className="message">{message}</div>
                  <div className="stats">Attempts: {attempts}</div>
                  <button className="button" onClick={initializeGame}>Restart Puzzle</button>
                  <button className="button ms-2" onClick={() => setMode(null)}>🔙 Back to Modes</button>

                  {hasMatchedAll() && (
                    <div className="mt-3">
                      <p>🎉 You solved the Wooden Alphabet Puzzle! 🎉</p>
                      <Link href="/wooden-puzzle">
                        <button className="button ms-2">Next Puzzle</button>
                      </Link>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <article className="game-instructions-container">
        <div className="game-instructions-content">
          <div className="game-instructions">
            <h1 className="instructions-title">Wooden Alphabet Puzzle – Learn While You Play</h1>
            <p className="instructions-description">
              The Wooden Alphabet Puzzle brings the charm of old-school wooden toys into a fun digital game. Kids get to flip, match, and explore letters like F, G, H, I, and J in two different modes. Kid Mode adds a playful phonics twist with words, sounds, and even emojis, while Young Learner Mode is all about testing memory and matching skills. It’s simple, fun, and sneaks in a bit of learning along the way.
            </p>

            <h2 className="instruction-step">How to Play</h2>
            <p className="instructions-description">
              Getting started is easy. First, choose your mode. In Kid Mode, every match shows the letter with a word and sound—for example, G is for Grapes 🍇. It feels like a mini phonics lesson without the boring part. In Young Learner Mode, the challenge is remembering where the letters are and matching them all before the board is cleared. Just flip, remember, and match until every letter has a home.
            </p>

            <h2 className="instruction-step">Benefits of Playing</h2>
            <p className="instructions-description">
              What makes this puzzle so good is that kids don’t even realize they’re learning while they play. They’re flipping tiles, laughing, and having fun—but at the same time, they’re picking up letters and sounds without it feeling like homework. The matching part sneaks in memory and focus practice, and moving the tiles around is great for coordination too. Parents love it because it feels like pure playtime for the kids, but underneath it all, there’s a lot of real learning going on.
            </p>

            <h2 className="instruction-step">Who Can Enjoy It?</h2>
            <p className="instructions-description">
              The Wooden Alphabet Puzzle works for pretty much anyone. Young children love the surprise of flipping and finding letters, older kids enjoy the challenge of remembering card positions, and families can turn it into a group game. Even adults sometimes use it as a light brain exercise—something quick to keep the mind sharp without feeling like “work.”
            </p>

            <h2 className="instruction-step">Next Challenge Awaits</h2>
            <p className="instructions-description">
              The fun doesn’t stop once you finish the first round. As you move forward, the puzzle introduces new twists, bigger layouts, and trickier patterns. Each level feels a little tougher but also more rewarding. With every stage, players keep improving memory, logic, and alphabet skills—while still having a good time.
            </p>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Woodenpuzzle;
