import React from "react";

const PlayAgainButton = ({ onClick }) => {
  return (
    <button className="game-button" onClick={onClick}>
      Play Again!
    </button>
  );
};

export default PlayAgainButton;
