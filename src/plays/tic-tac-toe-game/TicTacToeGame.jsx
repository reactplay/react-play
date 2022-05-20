import { getPlayById } from 'meta/play-meta-util';

import PlayHeader from 'common/playlists/PlayHeader';

import React from "react";

import "./tic.css";

function TicTacToeGame(props) {
  // Do not remove the below lines. 
  // The following code is to fetch the current play from the URL
  const { id } = props;
  const play = getPlayById(id);

  // Your Code Start below.

  function Square(props) {
    return (
      <button
        className={"squareButton " + (props.isWinning ? "bg-yellow-500" : null)}
        onClick={props.onClick}
      >
        {props.value}
      </button>
    );
  }

  class Board extends React.Component {
    renderSquare(i) {
      return (
        <Square
          key={"square" + i}
          isWinning={this.props.winningSquare.includes(i)}
          value={this.props.squares[i]}
          onClick={() => this.props.onClick(i)}
        />
      );
    }
    renderSquares(n) {
      let squares = [];
      for (let i = n; i < n + 3; i++) {
        squares.push(this.renderSquare(i));
      }
      return squares;
    }
    renderRow(i) {
      return <div className="row ">{this.renderSquares(i)}</div>;
    }
    render() {
      return (
        <div className="boardMain">
          {this.renderRow(0)}
          {this.renderRow(3)}
          {this.renderRow(6)}
        </div>
      );
    }
  }
  class Game extends React.Component {
    constructor(props) {
      super(props);
      this.initialState = {
        history: [
          {
            squares: Array(9).fill(null),
          },
        ],
        xIsNext: true,
        stepNumber: 0,
      };
      this.state = this.initialState;
    }
    onResetClick(e) {
      e.preventDefault();
      this.setState(this.initialState);
      console.log(this.state);
    }

    handleClick(i) {
      const history = this.state.history;
      const current = history[history.length - 1];
      const squares = current.squares.slice();
      if (calculateWinner(squares) || squares[i]) {
        return;
      }

      squares[i] = this.state.xIsNext ? "X" : "O";

      this.setState({
        history: history.concat([
          {
            squares: squares,
          },
        ]),
        xIsNext: !this.state.xIsNext,
      });
    }

    render() {
      const history = this.state.history;
      const current = history[history.length - 1];
      const winner = calculateWinner(current.squares);
      let status;

      if (winner) {
        status = "Winner: " + winner.player;
      } else if (!current.squares.includes(null)) {
        status = "Match Draw";
      } else {
        status = current.squares.every((value) => value === null)
          ? "First Turn : X"
          : "Next Player : " + (this.state.xIsNext ? "X" : "O");
      }
      return (
        <div class="container">
          <header>Tic Tac Toe Game</header>
            <Board
              winningSquare={winner ? winner.line : []}
              squares={current.squares}
              onClick={(i) => this.handleClick(i)}
            />
            <div className="status mt-8 text-2xl">{status}</div>
            <button
              className="jumpButton"
              onClick={this.onResetClick.bind(this)}
            >
              Reset Game
            </button>
        </div>
      );
    }
  }

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [2, 4, 6],
      [0, 4, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return { player: squares[a], line: [a, b, c] };
      }
    }
    return null;
  }


  return (
    <>
      <div className="play-details">
        <PlayHeader play={play} />
        <div className="play-details-body">
        {/* Your Code Starts Here */}
           <Game />
        {/* Your Code Ends Here */}
        </div>
      </div>
    </>
  );
}

export default TicTacToeGame;