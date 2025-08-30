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
        setTime((prevTime) => prevTime + 1);
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
      setMoveCount((prevCount) => prevCount + 1);
    }
  };

  const updateLeaderboard = () => {
    setLeaderboard((prev) => {
      const newEntry = { time, moves: moveCount };
      return [...prev, newEntry].sort((a, b) => a.time - b.time).slice(0, 5);
    });
  };

  const checkSolved = () => {
    const solved = JSON.stringify(tiles) === JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, null]);
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
      shuffled = [1, 2, 3, 4, 5, 6, 7, 8, null].sort(() => Math.random() - 0.5);
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
    <div className="Puzzle-container">
      <h1 className="puzzle-title"> Play Free Number <br/>
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
      <button className="btn" onClick={checkSolved}>✅ I Have Completed</button>
      <button className="btn" onClick={shuffleTiles}>🔀 Shuffle</button>
      {isSolved && (
        <Link href="/puzzlenumbers">
          <button className="btn">➡️ Next Level</button>
        </Link>
      )}
      <div className="leaderboard">
        <h3>🏆 Leaderboard</h3>
        <ul>
          {leaderboard.map((entry, index) => (
            <li key={index}><span>Time: {entry.time}s</span><span>Moves: {entry.moves}</span></li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PuzzleGame;
