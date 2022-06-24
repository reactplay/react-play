import React, { useState } from "react";

function Square(props) {
  return (
    <button className={`squareButton ${props.winningSquare?.includes(props.index) && "bg-yellow-500"}`} onClick={props.onClick}>
      {props.value}
    </button>
  );
}
function Restart({ onClick }) {
  return (
    <button className="jumpButton" onClick={onClick}>
      Play again
    </button>
  );
}

function Game() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const nextSymbol = isXNext ? "X" : "O";

  const winner = calculateWinner(squares);


  function renderSquare(i) {
    return (
      <Square
        key={i}
        index={i}
        winningSquare={winner ? winner.line : null}
        value={squares[i]}
        onClick={() => {
          const nextSquares = squares.slice();
          if (squares[i] != null || winner != null) {
            return;
          }
          nextSquares[i] = nextSymbol;
          setSquares(nextSquares);
          setIsXNext(!isXNext);
        }}
      />
    );
  }
  function getStatus() {
    if (winner) {
      return `Winner:   ${winner.player}`;
    } else if (isBoardFull(squares)) {
      return "Draw!";
    } else {
      return `Next player:   ${nextSymbol}`;
    }
  }
  function renderRestartButton() {
    return (
      <Restart
        onClick={() => {
          setSquares(Array(9).fill(null));
          setIsXNext(true);
        }}
      />
    );
  }
  function renderSquares(n) {
    let squares = [];
    for (let i = n; i < n + 3; i++) {
      squares.push(renderSquare(i));
    }
    return squares;
  }

  function renderRow(i) {
    return <div className="row ">{renderSquares(i)}</div>;
  }

  return (
    <div className="container">
        <header className="header">Tic Tac Toe Game</header>
        <div className="boardMain">
          {renderRow(0)}
          {renderRow(3)}
          {renderRow(6)}
        </div>
      <div className="status">{getStatus()}</div>
      <div>{renderRestartButton()}</div>
    </div>
  );
}

function calculateWinner(squares) {
  const possibleLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < possibleLines.length; i++) {
    const [a, b, c] = possibleLines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return  {player:squares[a], line:[a, b, c]};
    }
  }
  return null;
}

function isBoardFull(squares) {
  for (let i = 0; i < squares.length; i++) {
    if (squares[i] == null) {
      return false;
    }
  }
  return true;
}

export default Game;
