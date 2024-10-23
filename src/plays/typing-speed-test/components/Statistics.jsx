import React from 'react';

const Statistics = ({ wpm, cpm, accuracy, timeLeft }) => {
  return (
    <div className="statistics flex justify-center w-3/5 mx-auto gap-4">
      <div
        className="rounded-[50%] bg-white border-2   w-20 md:w-28 md:h-28 h-20 p-4  flex justify-center items-center flex-col"
        style={{ border: '1px solid var(--color-brand-primary)', borderWidth: '3px' }}
      >
        <p className="text-2xl md:text-4xl font-bold">{timeLeft}</p>
        <p className="text-sm">Seconds</p>
      </div>

      <div
        className="rounded-[50%] bg-white border-2 w-20 md:w-28 md:h-28 h-20 p-4  flex justify-center items-center flex-col"
        style={{ border: '1px solid var(--color-brand-primary)', borderWidth: '3px' }}
      >
        <p className="text-2xl md:text-4xl font-bold">{Math.round(wpm)}</p>
        <p className="text-sm">WPM</p>
      </div>

      <div
        className="rounded-[50%] bg-white border-2   w-20 md:w-28 md:h-28 h-20 p-4  flex justify-center items-center flex-col"
        style={{ border: '1px solid var(--color-brand-primary)', borderWidth: '3px' }}
      >
        <p className="text-2xl md:text-4xl font-bold">{Math.round(cpm)}</p>
        <p className="text-sm">CPM</p>
      </div>

      <div
        className="rounded-[50%] bg-white border-2  w-20 md:w-28 md:h-28 h-20 p-4  flex justify-center items-center flex-col"
        style={{ border: '1px solid var(--color-brand-primary)', borderWidth: '3px' }}
      >
        <p className="text-2xl md:text-4xl font-bold">{Math.round(accuracy)}</p>
        <p className="text-sm"> accuracy</p>
      </div>
    </div>
  );
};

export default Statistics;
