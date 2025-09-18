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
  grid-template-columns: repeat(3, 110px);
  grid-gap: 14px;
  margin: 0 auto;
`;

const phonicData = {
  K: { word: "Kite", emoji: "🪁", sound: "/k/" },
  L: { word: "Lion", emoji: "🦁", sound: "/l/" },
  M: { word: "Moon", emoji: "🌙", sound: "/m/" },
  N: { word: "Nest", emoji: "🐦", sound: "/n/" },
  O: { word: "Orange", emoji: "🍊", sound: "/ɒ/" },
};


const generateNineCards = () => {
  const letters = ["K", "L", "M", "N", "O"];
  let id = 1;
  const pairs = letters.slice(0, 4).flatMap(l => [
    { id: id++, value: l },
    { id: id++, value: l },
  ]);
  pairs.push({ id: id++, value: letters[4] });
  return pairs;
};

const SoundPuzzle = () => {
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
    setMessage('Match the Alphabet Sound Puzzle cards!');
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
            setMessage("Match the Alphabet Sound Puzzle cards!");
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
                <div className="mode-select text-center p-6">
                  <h2 className="mb-4">Choose Your Alphabet Sound Puzzle Mode</h2>
                  <button className="alphabutton m-2" onClick={() => setMode("kid")}>
                    👶 Kid Mode (Phonics + Sounds)
                  </button>
                  <button className="alphabutton m-2" onClick={() => setMode("young")}>
                    🧑 Young Learner Mode (Memory)
                  </button>
                </div>
              )}

              {mode && (
                <>
                  <h3 className='alphalevel-color'>
                    Alphabet Sound Puzzle – {mode === "kid" ? "Kid Mode" : "Young Mode"}
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
                      <p>🎉 You solved the Alphabet Sound Puzzle! 🎉</p>
                      <Link href="/">
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
          <h1 className="alphainstructions-title">Alphabet Sound Puzzle – Learn Letters the Fun Way</h1>
          <p className="alphainstructions-description">
            The Alphabet Sound Puzzle takes the idea of a classic letter game and makes it more exciting.
            Instead of just looking at wooden tiles, kids get to flip digital cards, match pairs, and hear fun sounds like
            “K is for Kite 🪁” or “L is for Lion 🦁.” It feels more like playtime than study time, which is exactly what makes it stick.
          </p>

          <h2 className="alphainstruction-step">How to Play</h2>
          <p className="alphainstructions-description">
            Getting started is super simple. Just pick a mode and dive in. In <strong>Kid Mode</strong>,
            every time kids find a match, the game says the letter out loud, shows a word, and even adds a fun emoji to go with it.
            In <strong>Young Learner Mode</strong>, things get a little trickier—it’s all about memory.
            Flip a card, try to remember where you saw its match, and keep going until the board is cleared.
            Easy to learn, but it keeps you thinking the whole time.
          </p>

          <h2 className="alphainstruction-step">Benefits of Playing</h2>
          <p className="alphainstructions-description">
            You know how kids usually groan when something feels like homework? This puzzle flips that on its head.
            They’re busy turning cards, laughing at the emojis, and suddenly—bam—they’ve learned a new letter sound without
            even trying. The cool part is, while they’re having fun, their brain is secretly working hard: memory, focus,
            problem-solving, all of it. Parents usually catch on quickly and go, “Wait, this is actually teaching them something,”
            which makes it a rare win-win for both sides.
          </p>

          <h2 className="alphainstruction-step">Who Can Enjoy It?</h2>
          <p className="alphainstructions-description">
            Honestly, it’s not just for little kids. Sure, the toddlers love shouting out the letters, but older kids treat it
            like a challenge—“I bet I can remember faster than you.” Families end up turning it into a mini game night, and yep,
            even adults sneak in a round here and there. Not because they need to learn the letters again, but because it’s a nice little
            brain stretch when you’re bored or just need a quick mental break.
          </p>


          <h2 className="alphainstruction-step">Next Challenges Await</h2>
          <p className="alphainstructions-description">
            Once you’ve mastered the first round, the puzzle doesn’t just stop there.
            New levels bring in fresh letters, trickier matches, and more sounds to keep things interesting.
            Each stage feels like a small step up, so players keep learning while still enjoying the game.
            There’s always something new waiting, which makes coming back to play feel rewarding every time.
          </p>
        </div>

      </article>

    </div>
  );
};

export default SoundPuzzle;
