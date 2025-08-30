"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import './elment.css';

const ElementBlockPuzzle = () => {
  const [grid, setGrid] = useState([]);
  const [score, setScore] = useState(0);
  const [isGameActive, setIsGameActive] = useState(false);
  const [userName, setUserName] = useState("");
  const [showNamePrompt, setShowNamePrompt] = useState(true);
  const [leaderboard, setLeaderboard] = useState([]);
  const [draggingBlock, setDraggingBlock] = useState(null);
  const [gameCompleted, setGameCompleted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [movesLeft, setMovesLeft] = useState(32);


  const gridSize = 8;
  const elements = ['🌍', '🌬️', '⚡', '🌟', '🌑', '💎'];
  
  const requiredScore = 220;

  const initializeGrid = () => {
    let newGrid;
    do {
      newGrid = Array.from({ length: gridSize }, () =>
        Array.from({ length: gridSize }, () => elements[Math.floor(Math.random() * elements.length)])
      );
    } while (hasAnyMatch(newGrid));

    setGrid(newGrid);
  };

  const hasAnyMatch = (grid) => {
    for (let r = 0; r < gridSize; r++) {
      for (let c = 0; c < gridSize; c++) {
        if (
          c < gridSize - 2 &&
          grid[r][c] &&
          grid[r][c] === grid[r][c + 1] &&
          grid[r][c] === grid[r][c + 2]
        ) {
          return true;
        }
        if (
          r < gridSize - 2 &&
          grid[r][c] &&
          grid[r][c] === grid[r + 1][c] &&
          grid[r][c] === grid[r + 2][c]
        ) {
          return true;
        }
      }
    }
    return false;
  };


  const checkInitialMatches = (grid) => {
    for (let r = 0; r < gridSize; r++) {
      for (let c = 0; c < gridSize; c++) {
        if (
          (c < gridSize - 2 && grid[r][c] === grid[r][c + 1] && grid[r][c] === grid[r][c + 2]) ||
          (r < gridSize - 2 && grid[r][c] === grid[r + 1][c] && grid[r][c] === grid[r + 2][c])
        ) {
          return true;
        }
      }
    }
    return false;
  };

  useEffect(() => {
    const savedLeaderboard = JSON.parse(localStorage.getItem('leaderboard')) || [];
    setLeaderboard(savedLeaderboard);
  }, []);

  const startGame = () => {
    initializeGrid();
    setScore(0);
    setMovesLeft(32);
    setIsGameActive(true);
    setGameCompleted(false);
    setErrorMessage("");
  };

  const handleDrop = (e, targetRow, targetCol) => {
    e.preventDefault();
    if (!draggingBlock || movesLeft <= 0) return;
    setMovesLeft(prev => Math.max(prev - 1, 0));


    const { row: sourceRow, col: sourceCol } = draggingBlock;
    const newGrid = [...grid];

    if (movesLeft - 1 <= 0) {
      setIsGameActive(false);
    }

    if (
      (Math.abs(sourceRow - targetRow) === 1 && sourceCol === targetCol) ||
      (Math.abs(sourceCol - targetCol) === 1 && sourceRow === targetRow)
    ) {
      [newGrid[sourceRow][sourceCol], newGrid[targetRow][targetCol]] = [newGrid[targetRow][targetCol], newGrid[sourceRow][sourceCol]];
      setGrid(newGrid);
      checkForMatches(newGrid);
    }
    setDraggingBlock(null);
  };

  const checkForMatches = (grid, isCascade = false) => {
    let newGrid = [...grid];
    let matched = [];
    let scoreToAdd = 0;

    for (let r = 0; r < gridSize; r++) {
      for (let c = 0; c < gridSize; c++) {

        if (
          c < gridSize - 2 &&
          grid[r][c] &&
          grid[r][c] === grid[r][c + 1] &&
          grid[r][c] === grid[r][c + 2]
        ) {
          let length = 3;
          while (c + length < gridSize && grid[r][c] === grid[r][c + length]) {
            length++;
          }
          for (let k = 0; k < length; k++) matched.push([r, c + k]);

          if (length === 3) scoreToAdd += 15;
          else if (length === 4) scoreToAdd += 20;
          else scoreToAdd += 30;
        }

        if (
          r < gridSize - 2 &&
          grid[r][c] &&
          grid[r][c] === grid[r + 1][c] &&
          grid[r][c] === grid[r + 2][c]
        ) {
          let length = 3;
          while (r + length < gridSize && grid[r][c] === grid[r + length][c]) {
            length++;
          }
          for (let k = 0; k < length; k++) matched.push([r + k, c]);

          if (length === 3) scoreToAdd += 15;
          else if (length === 4) scoreToAdd += 20;
          else scoreToAdd += 30;
        }
      }
    }

    if (matched.length > 0) {
      matched.forEach(([r, c]) => (newGrid[r][c] = null));
      applyGravity(newGrid);
      setGrid(newGrid);

      if (isCascade) scoreToAdd = Math.floor(scoreToAdd / 2);

      setScore((prev) => prev + scoreToAdd);

      checkForMatches(newGrid, true);
    }
  };



  const applyGravity = (grid) => {
    for (let c = 0; c < gridSize; c++) {
      let emptySpots = [];
      for (let r = gridSize - 1; r >= 0; r--) {
        if (grid[r][c] === null) {
          emptySpots.push(r);
        } else if (emptySpots.length > 0) {
          let newR = emptySpots.shift();
          grid[newR][c] = grid[r][c];
          grid[r][c] = null;
          emptySpots.push(r);
        }
      }
    }
  };

  const updateLeaderboard = (name, score) => {
    const newEntry = { name, score, date: new Date().toLocaleString() };

    let currentLeaderboard = JSON.parse(localStorage.getItem("blockLeaderboard")) || [];

    const existingIndex = currentLeaderboard.findIndex((entry) => entry.name === name);

    if (existingIndex !== -1) {
      if (score > currentLeaderboard[existingIndex].score) {
        currentLeaderboard[existingIndex] = newEntry;
      }
    } else {
      currentLeaderboard.push(newEntry);
    }

    currentLeaderboard.sort((a, b) => b.score - a.score);

    const top5 = currentLeaderboard.slice(0, 5);

    localStorage.setItem("blockLeaderboard", JSON.stringify(top5));
    setLeaderboard(top5);
  };


  const completeGame = () => {
    if (score >= requiredScore) {
      setIsGameActive(false);
      setGameCompleted(true);
      setErrorMessage("");

      updateLeaderboard(userName || "Anonymous", score);
    } else {
      setErrorMessage(`You must score at least ${requiredScore} points to complete the game!`);
    }
  };


  return (
    <div className="puzzle-container">
      <h1>Best Blocks Puzzle Game Online</h1>
      <p className="score">Score: {score}</p>
      {!isGameActive && !gameCompleted && (
        <button className="start-button" onClick={startGame}>Start Game</button>
      )}
      {isGameActive && (
        <button className="complete-button" onClick={completeGame}>Complete Game</button>
      )}
      {errorMessage && <p className="error-message">{errorMessage}</p>}

      {showNamePrompt && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Enter Your Name</h2>
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="Your name"
            />
            <button
              onClick={() => setShowNamePrompt(false)}
              disabled={!userName.trim()}
            >
              Continue
            </button>
          </div>
        </div>
      )}

      <div className="grid">
        {grid.map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {row.map((block, colIndex) => (
              <div
                key={`${rowIndex}-${colIndex}`}
                onDragStart={() => setDraggingBlock({ row: rowIndex, col: colIndex })}
                onDragOver={(e) => e.preventDefault()}
                onDrop={(e) => handleDrop(e, rowIndex, colIndex)}
                draggable={block !== null}
                className={`block ${block ? 'filled' : 'empty'}`}
              >
                {block}
              </div>
            ))}
          </div>
        ))}
      </div>
      <p className="moves">Moves Left: {movesLeft}</p>


      {gameCompleted && (
        <Link href="/blockgame">
          <button className="next-level-button">Next Level</button>
        </Link>
      )}
      <h2 className="leaderboardcolor">Leaderboard</h2>
      <ul className="board">
        {leaderboard.map((entry, index) => (
          <li className="scoreofboard" key={index}>
            <span className="player-section">Name : {entry.name}</span> <br />
            <span className="player-section">Score : {entry.score}</span> <br />
            <span className="player-section">Points On : {entry.date}</span>
          </li>
        ))}
      </ul>

    </div>
  );
};

export default ElementBlockPuzzle;
