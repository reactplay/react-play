import cricketLogo from '../assets/cricket-logo.png';

export default function TopBar({ hitBoxRef, gameTrack }) {
  const toggleMusicPlay = () => {
    gameTrack.muted ? (gameTrack.muted = false) : (gameTrack.muted = true);
  };
  const helpContent = `Click on the ball as precisely as possible. Click from your mouse on the animation of Ball, the more precise click you will get, the higher the chance of scoring runs and hitting a shot! Good luck!`;

  return (
    <div className="w-[97%] h-10 md:h-14 absolute top-[35%] md:top-[15%] flex justify-between items-center px-2 mt-2 z-[70] md:z-10">
      <div className="logo w-1/3 md:w-auto h-full flex items-center justify-evenly">
        <img alt="cricket" className="h-full w-auto" src={cricketLogo} />
        <img
          alt=""
          className="h-1/2 w-auto"
          src="https://images.vexels.com/media/users/3/240056/isolated/preview/3b1c6162c16257872c3ed26620f4d77f-cricket-ball-sport.png"
        />
      </div>

      <div className="h-full flex items-center justify-evenly space-x-1 md:space-x-3">
        <button className="top-bar-button help-tool-tip-btn w-6 md:w-8 h-8 rounded-lg bg-orange-200 text-sm opacity-80 hover:opacity-90 active:opacity-100 relative">
          ❓
          <p className="help-tool-tip-content absolute top-10 w-44 h-28 md:w-52 md:h-32 bg-slate-700 text-slate-100 rounded-lg font-light text-xs md:text-sm text-center flex items-center justify-center opacity-100 left-[-12px] md:left-0 invisible font-cricket-game">
            {helpContent}
          </p>
        </button>
        <button
          className="top-bar-button w-6 md:w-8 h-8 rounded-lg bg-orange-200 text-sm opacity-80 hover:opacity-90 active:opacity-100"
          onClick={(event) => toggleMusicPlay()}
        >
          🎵
        </button>
        <button
          className="top-bar-button w-24 md:w-28 h-8 rounded-lg bg-orange-200 text-[0.80rem] md:text-sm opacity-80 hover:opacity-90 active:opacity-100 font-cricket-game"
          onClick={(event) => hitBoxRef.current.classList.toggle('hit-box-blink')}
        >
          Toggle Hit Box
        </button>
      </div>
    </div>
  );
}
