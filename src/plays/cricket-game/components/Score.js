export default function Score({ gameState }) {
  const overNo = Math.floor(gameState.balls / 6) + '.' + (gameState.balls % 6);

  return (
    <div className="score w-[30%] md:w-[22%] h-4/5 bg-slate-200 rounded-[10px] md:rounded-[20px] flex justify-evenly items-center text-center opacity-0">
      <div className="runs-wickets h-[95%] text-2xl md:text-3xl flex items-center justify-center font-cricket-game">
        {gameState.runs + ' - ' + gameState.wickets}
      </div>

      <div className="overs-counter h-[95%] text-lg flex flex-col items-center justify-center">
        <div className="w-full h-auto text-xs md:text-sm font-cricket-game">OVER</div>
        <div className="w-full h-auto text-sm md:text-base font-cricket-game">{overNo}</div>
      </div>
    </div>
  );
}
