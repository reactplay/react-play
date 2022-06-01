import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { FaTimes, FaRegCircle } from "react-icons/fa";
import PlayAgainButton from "./PlayAgainButton";
import Icon from "./Icon";

import "./Game.css";

/*
 * Declaring an array to store the game state.
 * Initializing it with 9 empty strings.
 */
const gameArray = new Array(9).fill("");

const Game = () => {
  let [isCross, setIsCross] = useState(true);
  let [finalMessage, setFinalMessage] = useState("");
  let count = 0;

  // Game Logic
  const findWinner = () => {
    if (
      gameArray[0] === gameArray[1] &&
      gameArray[0] === gameArray[2] &&
      gameArray[0] !== ""
    ) {
      setFinalMessage(`${gameArray[0]} has won!`);
    } else if (
      gameArray[3] === gameArray[4] &&
      gameArray[3] === gameArray[5] &&
      gameArray[3] !== ""
    ) {
      setFinalMessage(`${gameArray[3]} has won!`);
    } else if (
      gameArray[6] === gameArray[7] &&
      gameArray[6] === gameArray[8] &&
      gameArray[6] !== ""
    ) {
      setFinalMessage(`${gameArray[6]} has won!`);
    } else if (
      gameArray[0] === gameArray[3] &&
      gameArray[0] === gameArray[6] &&
      gameArray[0] !== ""
    ) {
      setFinalMessage(`${gameArray[0]} has won!`);
    } else if (
      gameArray[1] === gameArray[4] &&
      gameArray[1] === gameArray[7] &&
      gameArray[1] !== ""
    ) {
      setFinalMessage(`${gameArray[1]} has won!`);
    } else if (
      gameArray[2] === gameArray[5] &&
      gameArray[2] === gameArray[8] &&
      gameArray[2] !== ""
    ) {
      setFinalMessage(`${gameArray[2]} has won!`);
    } else if (
      gameArray[0] === gameArray[4] &&
      gameArray[0] === gameArray[8] &&
      gameArray[0] !== ""
    ) {
      setFinalMessage(`${gameArray[0]} has won!`);
    } else if (
      gameArray[2] === gameArray[4] &&
      gameArray[2] === gameArray[6] &&
      gameArray[2] !== ""
    ) {
      setFinalMessage(`${gameArray[2]} has won!`);
    }
  };

  // Play Again button click event
  const onPlayAgainClick = () => {
    setIsCross(true);
    setFinalMessage("");
    gameArray.fill("");
  };

  // Draw
  const checkDraw = () => {
    gameArray.forEach((pos) => {
      if (pos === "cross" || pos === "circle") {
        count++;
      }
      if (count === 9) {
        setFinalMessage("Game Draw!");
      }
    });

    <div className="center">
      <PlayAgainButton onClick={onPlayAgainClick} />
    </div>;
  };

  // Card on click
  const changeItem = (index) => {
    if (finalMessage) {
      return toast("Game is already finished!", { type: "success" });
    }

    if (gameArray[index] === "") {
      gameArray[index] = isCross ? "cross" : "circle";
      setIsCross(!isCross);
    } else {
      return toast("This place is already occupied!", { type: "error" });
    }
    findWinner();
    checkDraw();
  };

  return (
    <>
      <h2 className="text-center">Choose Your Side</h2>
      <section className="buttonGroup">
        <button className="gameButton" onClick={() => setIsCross(true)}>
          <FaTimes className="icon" />
        </button>
        <button className="gameButton" onClick={() => setIsCross(false)}>
          <FaRegCircle className="icon" />
        </button>
      </section>

      <section className="center">
        <ToastContainer position="bottom-center"> </ToastContainer>
        <main>
          <div>
            {finalMessage ? (
              <div>
                <h3 className="text-center">{finalMessage}</h3>
                <div className="center">
                  <PlayAgainButton onClick={onPlayAgainClick} />
                </div>
              </div>
            ) : (
              <h3>{isCross ? "Turn : Cross" : "Turn : Circle"}</h3>
            )}

            <div className="grid">
              {gameArray.map((value, index) => (
                <div
                  className="gameCard center"
                  onClick={() => changeItem(index)}
                >
                  <Icon choice={gameArray[index]} />
                </div>
              ))}
            </div>
          </div>
        </main>
      </section>
    </>
  );
};

export default Game;
