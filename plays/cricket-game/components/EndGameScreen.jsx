import { Result } from '../game/gameLogic';

export default function EndGameScreen({ endScreenRef, resultTitle, resultDesc, result }) {
  return (
    <div
      className="absolute w-[70%] h-[25%] md:w-[45%] md:h-[50%] rounded-xl z-[60] mb-[5%] flex flex-col items-center justify-evenly hidden bg-slate-400"
      ref={endScreenRef}
    >
      <div className="end-screen-title w-[50%] h-[20%] text-center flex items-center justify-center font-medium text-2xl md:text-3xl text-slate-100 font-cricket-game">
        {resultTitle}
      </div>

      <div className="end-screen-result w-[90%] h-[50%] flex items-center justify-center font-medium text-base md:text-2xl text-slate-100 p-2 text-center font-cricket-game">
        {resultDesc}
      </div>

      <button
        className="start-match-button w-32 h-8 md:w-40 md:h-10 rounded-full font-semibold text-base md:text-xl font-cricket-game"
        onClick={(event) => {
          window.location.reload();
        }}
      >
        {result === Result.WON ? 'NEXT LEVEL' : 'PLAY AGAIN'}
      </button>
    </div>
  );
}
