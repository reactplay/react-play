import React from 'react';
import Score from './Score';
import { FiRefreshCcw } from 'react-icons/fi';

function GameHeader(props) {
  return (
    <div className="twenty-forty-eight-header">
      <div className="twenty-forty-eight-header__row">
        <h1 className="twenty-forty-eight-header__title">2048</h1>
        <Score best={props.best} score={props.score} />
      </div>
      <div className="twenty-forty-eight-header__row">
        <button className="twenty-forty-eight-restart" onClick={props.resetGame}>
          <FiRefreshCcw />
        </button>
      </div>
    </div>
  );
}

export default GameHeader;
