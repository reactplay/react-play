import React from "react";

const Timer = ({ timer }) => {
  return (
    <div className=" h-[100px] w-[100px] bg-white rounded-full flex flex-col items-center justify-center">
      <h1 className="font-extrabold text-2xl">{timer}</h1>
      <p className="text-sm">seconds</p>
    </div>
  );
};

export default Timer;
