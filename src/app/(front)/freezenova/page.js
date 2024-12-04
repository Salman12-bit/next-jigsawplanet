"use client"

import React, { useState } from 'react';
import styled from 'styled-components';
import "./freeze.css"
import Link from 'next/link';
import Image from 'next/image';



const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Board = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 100px); 
  gap: 10px;
  align-items: center;
  justify-content: center;
`;

const Tile = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${props => {
    if (props.player1Selected) return '#00f'; // Player 1 color
    if (props.player2Selected) return '#f00'; // Player 2 color
    return '#374151'; // Default background color
  }};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 24px;
  cursor: pointer;
  border-radius: 5px;
`;





const Game = () => {
  const [tiles, setTiles] = useState(Array(9).fill(null)); // null for unselected, 1 for player 1, 2 for player 2
  const [selectedCountPlayer1, setSelectedCountPlayer1] = useState(0);
  const [selectedCountPlayer2, setSelectedCountPlayer2] = useState(0);
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [player1Wins, setPlayer1Wins] = useState(false);
  const maxSelections = 4;

  const checkWinCondition = (player) => {
    const winPatterns = [
      [0, 1, 2], // horizontal top
      [3, 4, 5], // horizontal middle
      [6, 7, 8], // horizontal bottom
      [0, 3, 6], // vertical left
      [1, 4, 7], // vertical center
      [2, 5, 8], // vertical right
    ];

    return winPatterns.some(pattern =>
      pattern.every(index => tiles[index] === player)
    );
  };


  const toggleTile = index => {
    if (tiles[index] === null && ((currentPlayer === 1 && selectedCountPlayer1 < maxSelections) || (currentPlayer === 2 && selectedCountPlayer2 < maxSelections))) {
      const newTiles = [...tiles];
      newTiles[index] = currentPlayer;

      if (currentPlayer === 1) {
        setSelectedCountPlayer1(selectedCountPlayer1 + 1);
        if (checkWinCondition(1)) {
          setPlayer1Wins(true);
        }
      } else {
        setSelectedCountPlayer2(selectedCountPlayer2 + 1);
      }

      setTiles(newTiles);
      setCurrentPlayer(currentPlayer === 1 ? 2 : 1); // Switch to the other player
    }
  };

  return (
    <main className='text-conainer' style={{
      backgroundImage: 'url("/village.jpg")',
      backgroundSize: "cover",
      backgroundPosition: "center",
      padding: "20px"
    }}>
      <div className='des'>Level One</div>
      <header>
        <h1 className='info-player'>Player {currentPlayer}'s Turn</h1>
      </header>
      <section className='jigsaw-container' >
        <div className='row'>
          <GameContainer className='image' >


            <div>
              <Board>
                {tiles.map((player, index) => (
                  <Tile
                    key={index}
                    player1Selected={player === 1}
                    player2Selected={player === 2}
                    onClick={() => toggleTile(index)}
                  >
                    {player === 1 ? '❄️' : player === 2 ? '🔥' : ''}
                  </Tile>
                ))}
              </Board>
            </div>
            <h4 className='info'>Player 1 Selected: {selectedCountPlayer1} / {maxSelections}</h4>
            <h4 className='info'>Player 2 Selected: {selectedCountPlayer2} / {maxSelections}</h4>

            {player1Wins && (
              <div className='level'>
                <button className='button1'>
                  <Link href="/">Next Level</Link>
                </button>
              </div>
            )}
          </GameContainer>
        </div>
      </section>
      <section className="welcome-container">
        <h2 className="welcome-title">🧩 Welcome to the Ultimate Puzzle Challenge for every weeks! 🧩</h2>
        <p className="welcome-text">
          Hey there, puzzle solver! 🌟 Every puzzle is a new adventure, and every piece is a chance to unlock your potential.
          This is more than just a game—it's your journey to sharpen your mind, test your skills that increase your thinking, and celebrate every small victory.
        </p>
        <ul className="welcome-list">
          <li>🔍 Every piece counts: Take your time, explore the possibilities that increase your patience, and watch how everything falls into place.</li>
          <li>🧠 Sharpen your mind: Solve puzzles to grow stronger, one piece at a time that you solve accuratly.</li>
          <li>🎯 Embrace the challenge: Don’t give up if you give up your lose your thinking! The best moments are when everything clicks, and you can say, "I did it!"</li>
        </ul>
        <p className="welcome-text">
          Keep pushing forward, trust your instincts, and most of all—enjoy the journey. You’ve got the mind of a champion this thinking never lose you, and every puzzle you conquer is a victory worth celebrating! Get ready to piece it all together! 🎉
        </p>
      </section>
      <section className="game-instructions-container">
        <div className="game-instructions-content">
          <div className="game-instructions">
            <h2 className="instructions-title">🧩 How to Play Free Jigsaw Planet Game 🧩</h2>
            <p className="instructions-description">Free Jigsaw planet games are a delightful way to challenge your mind, improve cognitive skills, improve your picking power, and enjoy some leisure time. Jigsawplanet come in various forms, with unique content from traditional paper jigsawplanet to sophisticated digital games. The jigsawplanet guide will walk you through the basic principles of playing different types of jigsawplanet games, offering tips and strategies to enhance your experience.</p>
            <h3 className="instruction-step">1. Different Types of Jigsaw Planet Free:</h3>
            <p className="instructions-description">Jigsawplanet games come in many varieties, each with unique mechanics and objectives.</p>
            <h3 className="instruction-step">2. Understand the Rules:</h3>
            <p className="instructions-description">Each jigsaw planet puzzles has specific rules and objectives. Read the instructions carefully before starting.</p>
            <ul className="instructions-list">
              <li>In this game players have 3 chances.</li>
              <li>If 3 jigsaw planet puzzle game cards are matched to each other.</li>
              <li>Player wins this game.</li>
              <li>Otherwise, Restart the jigsaw planet game again and try to match again 3 cards.</li>
            </ul>
            <h3 className="instruction-step">3. Set up Your Space:</h3>
            <p className="instructions-description">For physical jigsaw puzzle, ensure you have a comfortable and well-lit workspace. For digital jigsawplanet, adjust your device's brightness and volume settings to suit your environment and mind.</p>
            <h2 className="tips-title">Tips for Success</h2>
            <ul className="instructions-list">
              <li>Stay Calm: Jigsawplanet puzzle games should be enjoyable; take breaks if you feel frustrated.</li>
              <li>Practice Regularly: The more you play, the better you get.</li>
              <li>Learn from Mistakes: Analyze what went wrong and try different approaches.</li>
              <li>Challenge Yourself: Gradually increase the difficulty level to keep improving your skills and thinking process.</li>
            </ul>
            <h3 className="instruction-step">Conclusion:</h3>
            <p className="instructions-description">Jigsaw planet games offer endless opportunities to test your mental acuity, relax, and have fun. By understanding the rules, using effective strategies, and practicing regularly, you can enhance your jigsawplanet-solving skills and enjoy the satisfying feeling of cracking even the toughest jigsawplanet. So, choose your game, set up your space, and dive into the fascinating world of jigsawplanet!</p>
          </div>
          <div className="game-image-container">
            <Link href="/freezenova">
              <Image
                className="game-image"
                src="/images/Freezenova1.jpeg"
                alt="Freezenova game on jigsaw planet"
                width={240} // Replace with the actual width
                height={192} // Replace with the actual height
                priority // Ensures this critical image loads quickly
              />
            </Link>

            <Link href="/freezenova">
              <Image
                className="game-image"
                src="/images/Freezenova2.jpeg"
                alt="Jigsaw planet puzzle - Freezenova"
                width={240}
                height={192}
                loading="lazy"
              />
            </Link>

            <Link href="/freezenova">
              <Image
                className="game-image"
                src="/images/Freezenova3.jpeg"
                alt="Free jigsaw planet game"
                width={240}
                height={192}
                loading="lazy"
              />
            </Link>

            <Link href="/freezenova">
              <Image
                className="game-image"
                src="/images/Freezenova4.jpeg"
                alt="Jigsaw puzzle on jigsaw planet"
                width={240}
                height={192}
                loading="lazy"
              />
            </Link>

            <Link href="/freezenova">
              <Image
                className="game-image"
                src="/images/Freezenova5.jpeg"
                alt="Free puzzle game on jigsaw planet"
                width={240}
                height={192}
                loading="lazy"
              />
            </Link>

            <Link href="/freezenova">
              <Image
                className="game-image"
                src="/images/Freezenova6.jpeg"
                alt="Freezenova puzzle on jigsaw planet"
                width={240}
                height={192}
                loading="lazy"
              />
            </Link>

            <Link href="/freezenova">
              <Image
                className="game-image"
                src="/images/Freezenova7.jpeg"
                alt="Play free puzzles on jigsaw planet"
                width={240}
                height={192}
                loading="lazy"
              />
            </Link>

            <Link href="/freezenova">
              <Image
                className="game-image"
                src="/images/Freezenova8.jpeg"
                alt="Jigsaw planet puzzle - Freezenova"
                width={240}
                height={192}
                loading="lazy"
              />
            </Link>

            <Link href="/jigsaw-planet">
              <Image
                className="game-image"
                src="/images/Puzzle1.jpeg"
                alt="Jigsaw planet adventure"
                width={240}
                height={192}
                loading="lazy"
              />
            </Link>

            <Link href="/jigsaw-planet1">
              <Image
                className="game-image"
                src="/images/Puzzle2.jpeg"
                alt="Play puzzles on jigsaw planet"
                width={240}
                height={192}
                loading="lazy"
              />
            </Link>

            <Link href="/puzzle3">
              <Image
                className="game-image"
                src="/images/Puzzle3.jpeg"
                alt="Explore jigsaw planet puzzles"
                width={240}
                height={192}
                loading="lazy"
              />
            </Link>

            <Link href="/jigsaw-planet">
              <Image
                className="game-image"
                src="/images/Puzzle5.jpeg"
                alt="Online jigsaw planet game"
                width={240}
                height={192}
                loading="lazy"
              />
            </Link>
          </div>

        </div>
      </section>
    </main>
  );
};

export default Game;


