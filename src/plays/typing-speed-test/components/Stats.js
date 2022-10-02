const Stats = ({ stats: { wpm, cpm, accuracy } }) => {
  const statsCard =
    "h-[85px] w-[85px] md:h-[100px] md:w-[110px] bg-white flex flex-col justify-center items-center rounded-xl";

  return (
    <div className="flex justify-center items-center space-x-8">
      <div className={statsCard}>
        <p className="font-extrabold text-2xl md:text-3xl">{wpm}</p>
        <span className="text-xs md:text-sm mt-2">Words/min</span>
      </div>
      <div className={statsCard}>
        <p className="font-extrabold text-2xl md:text-3xl">{cpm}</p>
        <span className="text-xs md:text-sm mt-2">Chars/min</span>
      </div>
      <div className={statsCard}>
        <p className="font-extrabold text-2xl md:text-3xl">
          {isNaN(accuracy) ? 0 : accuracy}
        </p>
        <span className="text-xs md:text-sm mt-2">% accuracy</span>
      </div>
    </div>
  );
};

export default Stats;
