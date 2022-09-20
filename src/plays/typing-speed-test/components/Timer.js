import React from "react";

const Timer = ({ timer }) => {
  return (
    <div className=" h-[110px] w-[110px] bg-white rounded-full flex flex-col items-center justify-center">
      <h1 className="font-extrabold text-3xl">{timer}</h1>
      <p className="text-sm">seconds</p>
    </div>
  );
};

export default Timer;
