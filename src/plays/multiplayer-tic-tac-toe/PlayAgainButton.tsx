import React from 'react';

type PlayAgainButtonProps = {
  onClick: () => void;
};

const PlayAgainButton = ({ onClick }: PlayAgainButtonProps) => {
  return (
    <button className="game-button" onClick={onClick}>
      Play Again!
    </button>
  );
};

export default PlayAgainButton;
