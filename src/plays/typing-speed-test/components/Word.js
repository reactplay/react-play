import React from "react";

const Word = React.memo(({ text, isActive, correct }) => {
  let active = isActive ? "text-violet-600 font-medium" : "text-slate-500";

  console.log("hello");
  if (correct === true) {
    return <span className="active">{text} </span>;
  }

  if (correct === false) {
    return <span className="text-red-500 font-medium">{text} </span>;
  }

  if (active) {
    return <span className={active}>{text} </span>;
  }

  return <span>{text} </span>;
});

export default Word;
