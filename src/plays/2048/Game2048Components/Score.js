import React from 'react';

function Score(props) {
  return (
    <>
      <div className="score score--current">{props.score}</div>
      <div className="score score--best">{props.best}</div>
    </>
  );
}

export default Score;
