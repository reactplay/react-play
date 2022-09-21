import React from "react";

const Word = ({ text, isActive, correct }) => {
  // if word is correct
  if (correct === true)
    return <span className="text-green-500 text-[1.2rem]">{text} </span>;

  // if word is incorrect
  if (correct === false)
    return <span className="text-red-500 text-[1.2rem]">{text} </span>;

  // if word is active
  if (isActive)
    return <span className="font-medium text-[1.2rem]">{text} </span>;

  // else return light grey text
  return <span className="text-gray-500 text-[1.2rem]">{text} </span>;
};

export default Word;

// index === activeWordIndex ? (
//     <span className="font-medium text-[1.2rem] tracking-[.08rem]">
//       {word}{" "}
//     </span>
//   ) : (
//     <span className="text-gray-500 text-[1.2rem] tracking-[.08rem]">
//       {word}{" "}
//     </span>
//   )
