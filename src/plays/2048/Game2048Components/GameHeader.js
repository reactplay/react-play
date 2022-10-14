import React from 'react'
import Score from './Score'
import { FiRefreshCcw } from "react-icons/fi";

function GameHeader(props) {
  return (
    <div className="twentyFourtyEight-header">
    <div className="twentyFourtyEight-header__row">
      <h1 className="twentyFourtyEight-header__title">2048
      </h1>
      <Score score={props.score} best={props.best} />
    </div>
    <div className="twentyFourtyEight-header__row">
      <button className="twentyFourtyEight-restart" onClick={props.resetGame}>
        <FiRefreshCcw />
      </button>
    </div>
  </div>
  )
}

export default GameHeader