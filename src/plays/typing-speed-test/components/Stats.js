import React from "react";

const Stats = ({ wordsPerMinute, accuracy, charactersPerMinute }) => {
  let statsCard =
    "h-[100px] w-[110px] bg-white flex flex-col justify-center items-center rounded-xl";
  return (
    <div className="flex justify-center items-center space-x-8">
      <div className={statsCard}>
        <p className="font-extrabold text-3xl">{wordsPerMinute}</p>
        <span className="text-sm mt-2">Words/min</span>
      </div>
      <div className={statsCard}>
        <p className="font-extrabold text-3xl">{charactersPerMinute}</p>
        <span className="text-sm mt-2">Chars/min</span>
      </div>
      <div className={statsCard}>
        <p className="font-extrabold text-3xl">
          {isNaN(accuracy) ? 0 : accuracy}
        </p>
        <span className="text-sm mt-2">% accuracy</span>
      </div>
    </div>
  );
};

export default Stats;
