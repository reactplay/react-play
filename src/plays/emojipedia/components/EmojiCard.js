import React from "react";

const EmojiCard = ({ emoji, handleCopyEmoji }) => {
  return (
    <div
      onClick={() => handleCopyEmoji(emoji?.character)}
      className="bg-[#333f53] py-7 px-4 rounded-lg cursor-pointer transform transition duration-200 hover:scale-110 hover:shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px]"
    >
      <p className="text-5xl mb-5">
        {String.fromCodePoint(parseInt(emoji?.codePoint, 16))}
      </p>
      <span className="text-[14px]">{emoji?.unicodeName}</span>
    </div>
  );
};

export default React.memo(EmojiCard);
