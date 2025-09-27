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
  { id: 1, value: "D" },
  { id: 2, value: "D" },
  { id: 3, value: "D" },
  { id: 4, value: "E" },
  { id: 5, value: "E" },
  { id: 6, value: "E" },
  { id: 7, value: "F" },
  { id: 8, value: "F" },
  { id: 9, value: "F" },
];

const PuzzleABC = () => {
  const [cards, setCards] = useState([]);
  const [message, setMessage] = useState("Arrange letters into Alphabet order!");
  const [level, setLevel] = useState(2);

  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const initializeGame = useCallback(() => {
    setCards(shuffle([...initialCards]));
    setMessage("Arrange letters into Alphabet order!");
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
      newCards[0].value === "D" &&
      newCards[1].value === "E" &&
      newCards[2].value === "F" &&
      newCards[3].value === "D" &&
      newCards[4].value === "E" &&
      newCards[5].value === "F" &&
      newCards[6].value === "D" &&
      newCards[7].value === "E" &&
      newCards[8].value === "F";

    if (isSolved) {
      setMessage("🎉 You solved the this Puzzle!");
    }
  };

  return (
    <div className="main-container" style={{ padding: "20px" }}>
      <div className="content-center">
        <div className="row">
          <div className="section-wrapper" style={containerStyle1}>
            <div className="board-section">
              <h3 className="section-title">ABC Puzzle Wooden – Level {level}</h3>
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
                Restart Game
              </button>
              {message.includes("🎉") && (
                <Link href="/alphabetpuzzle">
                  <button className="action-button ms-2">Next Puzzle</button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="info-container">
        <div className="info-content">
          <h1 className="info-title">ABC Puzzle Wooden – A Fun Way to Learn and Play</h1>
          <p className="info-text">
            If you’ve ever messed around with fridge magnets, this game will feel familiar.
            You get these chunky wooden-style tiles with the letters D, E, and F, all scrambled on a little board.
            The whole point is just to drag them around until the pattern looks right. Super simple, no instructions needed—you figure it out as you go, and that’s part of the fun.
          </p>

          <h2 className="info-heading">How to Play</h2>
          <p className="info-text">
            When you start, everything’s kind of a mess. You just grab a tile, move it, drop it, and slowly the pattern starts to come together.
            Once the whole thing lines up, the game pops up a little “well done” message, which feels pretty satisfying even though it’s simple.
          </p>

          <h2 className="info-heading">Why It’s Beneficial</h2>
          <p className="info-text">
            It’s good for kids because it sneaks in some letter practice without feeling like schoolwork.
            For adults, it’s more of a quick brain exercise—something light you can play when you don’t want to overthink.
          </p>

          <h2 className="info-heading">Who Can Enjoy</h2>
          <p className="info-text">
            This one works for everyone. Kids like moving the tiles and watching the order fall into place. Parents enjoy it because it mixes learning with play. Adults can use it as a quick break—just a couple of minutes to reset without anything too serious. The wooden style gives it a warm, old-school feel that’s different from the usual flashy apps.
          </p>

          <h2 className="info-heading">Next Challenges</h2>
          <p className="info-text">
            And if you get bored with the basics, harder levels are waiting—more letters, trickier layouts,
            stuff that makes you pause for a second before dragging the next piece.
          </p>
        </div>
      </div>
    </div>

  );
};

export default PuzzleABC;






