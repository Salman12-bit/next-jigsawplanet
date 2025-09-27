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
    <div className="main-container" style={{ padding: "20px" }}>
      <div className="content-center">
        <div className="row">
          <div className="section-wrapper" style={containerStyle1}>
            <div className="board-section">
              <h3 className="section-title">ABC Puzzle – Level {level}</h3>
              <Board1 className="board-grid">
                {cards.map((card, index) => (
                  <div
                    key={card.id}
                    className="card-item"
                    draggable
                    onDragStart={(e) => handleDragStart(e, index)}
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={(e) => handleDrop(e, index)}
                  >
                    {card.value}
                  </div>
                ))}
              </Board1>
              <div className="status-message">{message}</div>
              <button className="action-button" onClick={initializeGame}>
                Restart ABC Puzzle
              </button>
              {message.includes("🎉") && (
                <Link href="/puzzle-abc">
                  <button className="action-button ms-2">Next Puzzle</button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="info-container">
        <div className="info-content">
          <h1 className="info-title">ABC Puzzle – Arrange, Learn, and Play</h1>
          <p className="info-text">
            ABC Puzzle is easy to pick up and doesn’t take long to get into. The board shows tiles with A, B, and C, but they’re all mixed up. Your job is to drag them into place and set the right order. It’s simple, but it gets your memory and logic working while still feeling playful.
          </p>

          <h2 className="info-heading">How to Play</h2>
          <p className="info-text">
            The letters show up scrambled on the board. Your job is to drag each one into the right spot until the ABC order is set. Keep shifting them around until the line is correct. When you’re done, the puzzle gives you a success message.
          </p>

          <h2 className="info-heading">Why It’s Fun</h2>
          <p className="info-text">
            The fun comes from moving the tiles and figuring out where they go. Every drag feels like progress, even if you need to adjust again. It keeps your brain working without feeling heavy, and lining up the letters gives a nice little win at the end.
          </p>

          <h2 className="info-heading">Who Can Play</h2>
          <p className="info-text">
            Anyone can give it a try. Kids enjoy putting the letters in order, families can play a round together, and adults might use it as a brief mental break. The rules are simple, the colors are bright, and finishing the sequence always feels satisfying.
          </p>

          <h2 className="info-heading">The Next Step</h2>
          <p className="info-text">
            Once you’ve got the first puzzle done, things get trickier. More letters, harder setups, and tougher sequences keep the game fresh. Keep dragging, keep arranging, and see how far you can go.
          </p>
        </div>
      </div>
    </div>

  );
};

export default ABCPuzzle;






