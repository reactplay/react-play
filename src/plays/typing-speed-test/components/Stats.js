import React from "react";

const Stats = ({ wordsPerMinute, accuracy }) => {
  return (
    <div className="flex justify-center items-center space-x-8">
      <div className="h-[100px] w-[110px] bg-white flex flex-col justify-center items-center rounded-lg">
        <p className="font-extrabold text-2xl">{wordsPerMinute}</p>
        <span className="text-sm mt-2">Words/min</span>
      </div>
      <div className="h-[100px] w-[110px] bg-white flex flex-col justify-center items-center rounded-lg">
        <p className="font-extrabold text-2xl">0</p>
        <span className="text-sm mt-2">Chars/min</span>
      </div>
      <div className="h-[100px] w-[110px] bg-white flex flex-col justify-center items-center rounded-lg">
        <p className="font-extrabold text-2xl">
          {isNaN(accuracy) ? 0 : accuracy}
        </p>
        <span className="text-sm mt-2">% accuracy</span>
      </div>
    </div>
  );
};

export default Stats;
