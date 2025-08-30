"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import "./freeze.css";

const PuzzleGame = () => {
  const [tiles, setTiles] = useState([]);
  const [isSolved, setIsSolved] = useState(false);
  const [moveCount, setMoveCount] = useState(0);
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [leaderboard, setLeaderboard] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    shuffleTiles();
  }, []);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const moveTile = (index) => {
    if (isSolved) return;
    if (!isRunning) setIsRunning(true);

    const emptyIndex = tiles.indexOf(null);
    const diff = Math.abs(index - emptyIndex);
    if (diff === 1 || diff === 3) {
      const newTiles = [...tiles];
      [newTiles[index], newTiles[emptyIndex]] = [newTiles[emptyIndex], newTiles[index]];
      setTiles(newTiles);
      setMoveCount((prev) => prev + 1);
    }
  };

  const updateLeaderboard = () => {
    setLeaderboard((prev) => {
      const newEntry = { time, moves: moveCount };
      return [...prev, newEntry].sort((a, b) => a.time - b.time).slice(0, 5);
    });
  };

  const checkSolved = () => {
    const solved = JSON.stringify(tiles) === JSON.stringify([1, 3, 5, 7, 9, 11, 13, 15, null]);
    if (solved) {
      setIsSolved(true);
      setIsRunning(false);
      setMessage("🎉 Congratulations! You solved the puzzle! 🎉");
      updateLeaderboard();
    } else {
      setMessage("❌ Try again! The puzzle is not correct.");
    }
  };

  const shuffleTiles = () => {
    let shuffled;
    let isSolvable;
    do {
      shuffled = [1, 3, 5, 7, 9, 11, 13, 15, null].sort(() => Math.random() - 0.5);
      let inversions = 0;
      for (let i = 0; i < shuffled.length; i++) {
        for (let j = i + 1; j < shuffled.length; j++) {
          if (shuffled[i] && shuffled[j] && shuffled[i] > shuffled[j]) {
            inversions++;
          }
        }
      }
      isSolvable = inversions % 2 === 0;
    } while (!isSolvable);

    setTiles(shuffled);
    setIsSolved(false);
    setMessage("");
    setMoveCount(0);
    setTime(0);
    setIsRunning(false);
  };

  return (
    <div className="puzzle-container">
      <h1 className="number-title"> Free Wooden Number <br/>
      Puzzle Online </h1>
      <div className="tiles-grid">
        {tiles.map((tile, index) => (
          <div key={index} className="tile" onClick={() => moveTile(index)}>
            <span>{tile}</span>
          </div>
        ))}
      </div>

      <div className="info">
        <p>⏱️ Time: {time} seconds</p>
        <p>🧮 Moves: {moveCount}</p>
        <p>{message}</p>
      </div>

      <button className="btn success" onClick={checkSolved}>✅ I Have Completed</button>
      <button className="btn danger" onClick={shuffleTiles}>🔀 Shuffle</button>

      {isSolved && (
        <Link href="/woodenpuzzle">
          <button className="btn next">➡️ Next Level</button>
        </Link>
      )}

      <div className="leaderboard">
        <h3>🏆 Leaderboard</h3>
        <ul>
          {leaderboard.map((entry, index) => (
            <li key={index}>
              <span>⏱ {entry.time}s</span>
              <span>🧮 {entry.moves} moves</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PuzzleGame;
