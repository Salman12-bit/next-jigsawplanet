"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styled, { keyframes } from "styled-components";

const slideAnimation = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
  background-color: #f0f0f0;
  font-family: Arial, sans-serif;
`;

const TilesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 100px);
  grid-auto-rows: 100px;
  gap: 10px;
  width: max-content;
  margin: 0 auto;
`;

const Tile = styled.div`
  width: 100%;
  padding-top: 100%;
  position: relative;
  background-color: rgb(53, 56, 56);
  color: white;
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
  border-radius: 10px;
  animation: ${slideAnimation} 0.3s ease;

  &:hover {
    background-color: rgb(158, 160, 161);
  }

  & > span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const Button = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  background-color: rgb(74, 75, 75);
  color: white;

  &:hover {
    background-color: rgb(149, 152, 153);
  }
`;

const Info = styled.div`
  margin-top: 20px;
  font-size: 18px;
  color: #333;
  text-align: center;
`;

const Leaderboard = styled.div`
  margin-top: 20px;
  width: 100%;
  max-width: 320px;
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  h3 {
    margin-bottom: 10px;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    display: flex;
    justify-content: space-between;
    padding: 5px 0;
  }
`;

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
    const solved = JSON.stringify(tiles) === JSON.stringify([2, 4, 6, 8, 10, 12, 14, 16, null]);
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
      shuffled = [2, 4, 6, 8, 10, 12, 14, 16, null].sort(() => Math.random() - 0.5);
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
    setIsRunning(false); // ✅ Don't start timer here
  };

  return (
    <Container>
      <TilesGrid className='number-board'>
        {tiles.map((tile, index) => (
          <Tile key={index} onClick={() => moveTile(index)}>
            <span>{tile}</span>
          </Tile>
        ))}
      </TilesGrid>

      <Info>
        <p>⏱️ Time: {time} seconds</p>
        <p>🧮 Moves: {moveCount}</p>
        <p>{message}</p>
      </Info>
      <Button onClick={checkSolved}>I Have Completed</Button>
      <Button onClick={shuffleTiles}>Shuffle</Button>
      {isSolved && (
        <Link href="/wooden-number">
          <Button>Next Level</Button>
        </Link>
      )}
      <Leaderboard>
        <h3>🏆 Leaderboard</h3>
        <ul>
          {leaderboard.map((entry, index) => (
            <li key={index}><span>Time: {entry.time}s</span><span>Moves: {entry.moves}</span></li>
          ))}
        </ul>
      </Leaderboard>
    </Container>
  );
};

export default PuzzleGame;
