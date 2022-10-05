const EmojiCard = ({ emoji }) => {
  // {
  //     "slug": "grinning-face",
  //     "character": "😀",
  //     "unicodeName": "grinning face",
  //     "codePoint": "1F600",
  //     "group": "smileys-emotion",
  //     "subGroup": "face-smiling"
  // }
  return (
    <div className="bg-[#333f53] py-7 px-4 rounded-lg cursor-pointer transform transition duration-200 hover:scale-110 hover:shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px]">
      <p className="text-5xl mb-5">
        {String.fromCodePoint(parseInt(emoji?.codePoint, 16))}
      </p>
      <span className="text-[14px]">{emoji?.unicodeName}</span>
    </div>
  );
};

export default EmojiCard;
