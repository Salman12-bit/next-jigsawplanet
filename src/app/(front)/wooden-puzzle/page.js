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
            Alphabet Sound Puzzle is simple at heart—you flip cards and look for pairs.
            The twist is that each match talks back.
            Find K, and you’ll hear “K is for Kite 🪁.” Match L, and it goes “L is for Lion 🦁.”
            It feels playful, almost like a toy, and kids end up learning the sounds without even noticing.
          </p>

          <h2 className="alphainstruction-step">How to Play</h2>
          <p className="alphainstructions-description">
            Just pick a mode and start. In <strong>Kid Mode</strong>, every match gives you the letter, a word, and a sound to go with it.
            In <strong>Young Learner Mode</strong>, the board is face down—you flip two cards, check for a match, and try to remember the spots.
            Clear the board and you’re done. No tricky rules, just match and learn.
          </p>

          <h2 className="alphainstruction-step">Why It’s Fun</h2>
          <p className="alphainstructions-description">
            The fun is in the flipping. You don’t know what’s under the card until it turns,
            and hearing the sounds makes it feel alive.
            Kids laugh at the emojis, older players enjoy the memory part, and the mix keeps it from feeling like homework.
          </p>

          <h2 className="alphainstruction-step">Who Can Play</h2>
          <p className="alphainstructions-description">
            Small kids pick it up fast, older kids treat it like a challenge, and families often play together for fun.
            Adults join in sometimes, too—not to learn letters again, but as a quick memory warm-up.
            It’s simple enough for anyone, which is what makes this alphabet sound puzzle for kids and families so easy to enjoy.
          </p>

          <h2 className="alphainstruction-step">Next Challenges</h2>
          <p className="alphainstructions-description">
            Once you finish the first few rounds, it doesn’t stop there.
            New boards bring more letters, larger grids, and matches that take more focus.
            Each stage feels a bit tougher, so there’s always something fresh to try in the alphabet sound puzzle for kids.
          </p>
        </div>

      </article>

    </div>
  );
};

export default SoundPuzzle;
