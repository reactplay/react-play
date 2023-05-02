import React from 'react';

type PlayAgainButtonProps = {
  onClick: () => void;
};

const PlayAgainButton = ({ onClick }: PlayAgainButtonProps) => {
  return (
    <button
      className="flex justify-center items-center w-28 h-16 m-3 cursor-pointer border rounded-lg bg-[#00f2fe] hover:border-black"
      onClick={onClick}
    >
      Play Again!
    </button>
  );
};

export default PlayAgainButton;
