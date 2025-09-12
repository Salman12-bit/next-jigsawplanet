"use client";

import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import "./puzzle.css";
import Link from "next/link";

const containerStyle1 = {
  display: "flex",
  justifyContent: "space-between",
  gap: "10px",
  width: "100%",
  maxWidth: "1000px",
  margin: "0 auto",
};

const Board1 = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 90px);
  grid-gap: 8px;
`;

const initialCards = [
  { id: 1, value: "A" },
  { id: 2, value: "A" },
  { id: 3, value: "A" },
  { id: 4, value: "B" },
  { id: 5, value: "B" },
  { id: 6, value: "B" },
  { id: 7, value: "C" },
  { id: 8, value: "C" },
  { id: 9, value: "C" },
];

const ABCPuzzle = () => {
  const [cards, setCards] = useState([]);
  const [message, setMessage] = useState("Arrange letters into ABC order!");
  const [level, setLevel] = useState(1);

  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const initializeGame = useCallback(() => {
    setCards(shuffle([...initialCards]));
    setMessage("Arrange letters into ABC order!");
  }, []);

  useEffect(() => {
    initializeGame();
  }, [level, initializeGame]);

  const handleDragStart = (e, index) => {
    e.dataTransfer.setData("cardIndex", index);
  };

  const handleDrop = (e, dropIndex) => {
    const dragIndex = e.dataTransfer.getData("cardIndex");
    if (dragIndex === "") return;

    const newCards = [...cards];
    const [dragged] = newCards.splice(dragIndex, 1);
    newCards.splice(dropIndex, 0, dragged);

    setCards(newCards);


    const isSolved =
      newCards[0].value === "A" &&
      newCards[1].value === "B" &&
      newCards[2].value === "C" &&
      newCards[3].value === "A" &&
      newCards[4].value === "B" &&
      newCards[5].value === "C" &&
      newCards[6].value === "A" &&
      newCards[7].value === "B" &&
      newCards[8].value === "C";

    if (isSolved) {
      setMessage("🎉 You solved the ABC Puzzle!");
    }
  };

  return (
    <div className="text-conainer" style={{ padding: "20px" }}>
      <div className="planet-container">
        <div className="row">
          <div className="upper-container" style={containerStyle1}>
            <div className="game-container">
              <h3 className="level-color">ABC Puzzle – Level {level}</h3>
              <Board1 className="game-board">
                {cards.map((card, index) => (
                  <div
                    key={card.id}
                    className="card-tile"
                    draggable
                    onDragStart={(e) => handleDragStart(e, index)}
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={(e) => handleDrop(e, index)}
                  >
                    {card.value}
                  </div>
                ))}
              </Board1>
              <div className="message">{message}</div>
              <button className="button" onClick={initializeGame}>
                Restart ABC Puzzle
              </button>
              {message.includes("🎉") && (
                <Link href="/puzzle-abc">
                  <button className="button ms-2">Next Puzzle</button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="game-instructions-container">
        <div className="game-instructions">
          <h1 className="instructions-title">ABC Puzzle – Arrange, Learn, and Play</h1>
          <p className="instructions-description">
            The ABC Puzzle is an engaging drag-and-drop puzzle that helps players practice sequencing letters in the ABC order. By organizing tiles marked A, B, and C into the correct pattern, learners strengthen memory, logic, and letter recognition in a fun way.
          </p>

          <h2 className="instruction-step">How to Play</h2>
          <p className="instructions-description">
            At the start of the game, the letters are shuffled across the board. Your job is to drag and drop each letter into its proper position to form the repeating ABC sequence. Setting up the letters until the order is correct, and once completed, the puzzle rewards you with a success message.
          </p>

          <h2 className="instruction-step">Why It’s Engaging</h2>
          <p className="instructions-description">
            This game sequencing puzzle mixes learning with play. The drag-and-drop of letters keeps players actively engaged, testing both recognition and problem-solving skills. It’s a hands-on style to practice patterns and logical thinking while having fun.
          </p>

          <h2 className="instruction-step">Who Can Enjoy It?</h2>
          <p className="instructions-description">
            This puzzle is designed for all ages. Kids will love organizing the letters in the correct pattern, families can solve it together with love and happiness, and adults can use it as a quick mental break. Its simple rules create it easy to pick up, while completing the pattern still feels rewarding.
          </p>

          <h2 className="instruction-step">Next Challenges Await</h2>
          <p className="instructions-description">
            After solving the first level, new puzzles introduce fresh twists—more letters, tougher design, and advanced sequencing challenges. Keep arranging and see how far your logic and memory can take you.
          </p>
        </div>

      </div>
    </div>
  );
};

export default ABCPuzzle;






