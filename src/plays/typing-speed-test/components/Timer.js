const Timer = ({ timer }) => {
  return (
    <div className="h-[100px] w-[100px] mb-8 md:h-[110px] md:w-[110px] sm:mb-0 bg-white rounded-full flex flex-col items-center justify-center">
      <h1 className="font-extrabold text-3xl">{timer}</h1>
      <p className="text-xs md:text-sm">seconds</p>
    </div>
  );
};

export default Timer;
