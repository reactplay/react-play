import React from 'react';

type ScoreProps = {
  guessCount: number;
};

const Score = (props: ScoreProps) => {
  return (
    <div>
      <h3>It took you {props.guessCount} guesses to guess the number</h3>
    </div>
  );
};

export default Score;
