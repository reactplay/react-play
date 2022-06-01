import React from "react";

const PlayAgainButton = ({ onClick }) => {
  return (
    <button className="gameButton" onClick={onClick}>
      Play Again!
    </button>
  );
};

export default PlayAgainButton;
