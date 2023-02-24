export default function Modal({ userLevel, levelInfo, startGame, modalRef }) {
  return (
    <div
      className="modal absolute w-[70%] md:w-[50%] h-[25%] md:h-[45%] rounded-xl z-[60] mb-[5%] flex flex-col items-center justify-evenly"
      ref={modalRef}
    >
      <div className="w-[50%] h-[20%] text-center flex items-center justify-center font-medium text-2xl md:text-4xl text-slate-100 font-cricket-game">
        LEVEL {userLevel}
      </div>

      <div className="target-info w-[90%] h-[50%] flex items-center justify-center font-medium text-base md:text-3xl text-slate-100 p-2 text-center font-cricket-game">
        Target: Chase {levelInfo.target} Runs with {Number(levelInfo.totalBalls / 6)} Overs and{' '}
        {levelInfo.totalWickets} Wickets in hand
      </div>

      <button
        className="start-match-button w-32 h-8 md:w-40 md:h-10 rounded-full font-semibold text-lg md:text-xl font-cricket-game"
        onClick={(event) => startGame()}
      >
        START!
      </button>
    </div>
  );
}
