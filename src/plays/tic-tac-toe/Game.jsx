import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Button,
  Container,
  Card,
  CardBody,
  Row,
  Col,
  ButtonGroup,
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";

import { FaTimes, FaRegCircle } from "react-icons/fa";
import Icon from "./Icon";

import "./Game.css";

const gameArray = new Array(9).fill("");

const Game = () => {
  let [isCross, setIsCross] = useState(true);
  let [winMessage, setWinMessage] = useState("");
  let count = 0;

  // New Game
  const PlayAgain = () => {
    return (
      <div className="center">
        <Button
          className="button"
          onClick={() => {
            setIsCross(true);
            setWinMessage("");
            gameArray.fill("");
          }}
        >
          Play Again!
        </Button>
      </div>
    );
  };

  // Game Logic
  const findWinner = () => {
    if (
      gameArray[0] === gameArray[1] &&
      gameArray[0] === gameArray[2] &&
      gameArray[0] !== ""
    ) {
      setWinMessage(`${gameArray[0]} has won!`);
    } else if (
      gameArray[3] === gameArray[4] &&
      gameArray[3] === gameArray[5] &&
      gameArray[3] !== ""
    ) {
      setWinMessage(`${gameArray[3]} has won!`);
    } else if (
      gameArray[6] === gameArray[7] &&
      gameArray[6] === gameArray[8] &&
      gameArray[6] !== ""
    ) {
      setWinMessage(`${gameArray[6]} has won!`);
    } else if (
      gameArray[0] === gameArray[3] &&
      gameArray[0] === gameArray[6] &&
      gameArray[0] !== ""
    ) {
      setWinMessage(`${gameArray[0]} has won!`);
    } else if (
      gameArray[1] === gameArray[4] &&
      gameArray[1] === gameArray[7] &&
      gameArray[1] !== ""
    ) {
      setWinMessage(`${gameArray[1]} has won!`);
    } else if (
      gameArray[2] === gameArray[5] &&
      gameArray[2] === gameArray[8] &&
      gameArray[2] !== ""
    ) {
      setWinMessage(`${gameArray[2]} has won!`);
    } else if (
      gameArray[0] === gameArray[4] &&
      gameArray[0] === gameArray[8] &&
      gameArray[0] !== ""
    ) {
      setWinMessage(`${gameArray[0]} has won!`);
    } else if (
      gameArray[2] === gameArray[4] &&
      gameArray[2] === gameArray[6] &&
      gameArray[2] !== ""
    ) {
      setWinMessage(`${gameArray[2]} has won!`);
    }
  };

  // Draw
  const checkDraw = () => {
    gameArray.forEach((pos) => {
      if (pos === "cross" || pos === "circle") {
        count++;
      }
      if (count === 9) {
        setWinMessage("Game Draw!");
      }
    });
    <PlayAgain />;
  };

  // Card on click
  const changeItem = (index) => {
    if (winMessage) {
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
      <h3> Choose Your Side</h3>
      <div className="buttonGroup">
        <ButtonGroup>
          <Button id="button" onClick={() => setIsCross(true)}>
            <FaTimes className="icon" />
          </Button>
          <Button id="button" onClick={() => setIsCross(false)}>
            <FaRegCircle className="icon" />
          </Button>
        </ButtonGroup>
      </div>

      <Container className="p-3">
        <ToastContainer position="bottom-center"> </ToastContainer>
        <Row>
          <Col md={6} className="offset-md-3">
            {winMessage ? (
              <div>
                <h3 className="text-center">{winMessage}</h3>
                <PlayAgain />
              </div>
            ) : (
              <h3>{isCross ? "Turn : Cross" : "Turn : Circle"}</h3>
            )}

            <div className="grid">
              {gameArray.map((value, index) => (
                <Card onClick={() => changeItem(index)}>
                  <CardBody className="box">
                    <Icon choice={gameArray[index]} />
                  </CardBody>
                </Card>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Game;
