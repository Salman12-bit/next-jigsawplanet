"use client";

import { useState, useEffect } from 'react';
import './elment.css';

const ElementBlockPuzzle = () => {
  const [grid, setGrid] = useState([]);
  const [score, setScore] = useState(0);
  const [isGameActive, setIsGameActive] = useState(false);
  const [leaderboard, setLeaderboard] = useState([]);
  const [draggingBlock, setDraggingBlock] = useState(null);

  const gridSize = 8;
  const elements = ['🌞', '🌙', '⭐', '🌌'];

  const initializeGrid = () => {
    let newGrid;
    do {
      newGrid = Array.from({ length: gridSize }, () =>
        Array.from({ length: gridSize }, () => elements[Math.floor(Math.random() * elements.length)])
      );
    } while (checkInitialMatches(newGrid));
    setGrid(newGrid);
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
    setIsGameActive(true);
  };

  const handleDrop = (e, targetRow, targetCol) => {
    e.preventDefault();
    if (!draggingBlock) return;

    const { row: sourceRow, col: sourceCol } = draggingBlock;
    const newGrid = [...grid];

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

  const checkForMatches = (grid) => {
    let newGrid = [...grid];
    let matched = [];

    for (let r = 0; r < gridSize; r++) {
      for (let c = 0; c < gridSize; c++) {
        if (
          c < gridSize - 2 &&
          grid[r][c] !== null &&
          grid[r][c] === grid[r][c + 1] &&
          grid[r][c] === grid[r][c + 2]
        ) {
          matched.push([r, c], [r, c + 1], [r, c + 2]);
        }
        if (
          r < gridSize - 2 &&
          grid[r][c] !== null &&
          grid[r][c] === grid[r + 1][c] &&
          grid[r][c] === grid[r + 2][c]
        ) {
          matched.push([r, c], [r + 1, c], [r + 2, c]);
        }
      }
    }

    if (matched.length > 0) {
      matched.forEach(([r, c]) => (newGrid[r][c] = null));
      applyGravity(newGrid);
      setGrid(newGrid);
      setScore((prev) => prev + 15);
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

  useEffect(() => {
    let savedLeaderboard = JSON.parse(localStorage.getItem('leaderboard')) || [];
    savedLeaderboard = savedLeaderboard.slice(0, 5); 
    setLeaderboard(savedLeaderboard);
  }, []);
  
  const completeGame = () => {
    setIsGameActive(false);
  
    const newLeaderboard = [...leaderboard, { score, date: new Date().toLocaleString() }];
    newLeaderboard.sort((a, b) => b.score - a.score); 
  
    const top5Leaderboard = newLeaderboard.slice(0, 5); 
    setLeaderboard(top5Leaderboard);
    localStorage.setItem('leaderboard', JSON.stringify(top5Leaderboard));
  };
   
  return (
    <div className="puzzle-container">
      <h1>Element Block Puzzle Level 2</h1>
      <p className="score">Score: {score}</p>
      {!isGameActive && <button className="start-button" onClick={startGame}>Start Game</button>}
      {isGameActive && <button className="complete-button" onClick={completeGame}>Complete Game</button>}
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
      <h2 className='leaderboardcolor'>Leaderboard</h2>
      <ul className='board'>
        {leaderboard.map((entry, index) => (
          <li className='scoreofboard' key={index}>{entry.score} points on {entry.date}</li>
        ))}
      </ul>
    </div>
  );
};

export default ElementBlockPuzzle;
