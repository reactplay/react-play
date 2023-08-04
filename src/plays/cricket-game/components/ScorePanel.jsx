import classNames from 'classnames';
import Score from './Score';
import InfoBox from './InfoBox';
import CommentaryTimeline from './CommentaryTimeline';

export default function ScorePanel(props) {
  const { userLevel, gameState, matchInProgress, commentary } = props;

  return (
    <div className="score-panel absolute h-[11%] md:h-[8.5%] bottom-[-20%] rounded-[20px] flex flex-col md:flex-row items-center justify-evenly bg-white overflow-hidden z-[60]">
      <div className="w-full md:w-3/5 h-1/2 md:h-full flex flex-row items-center justify-evenly space-x-4 md:ml-5 ml-8">
        <div
          className={classNames(
            'level-info w-[3rem] md:w-[4.365rem] h-full bg-[#6096B4] absolute left-0 shadow-md text-slate-100',
            'font-semibold flex items-center justify-center opacity-0 text-xs md:text-base',
            '[border-bottom-right-radius:50px] font-cricket-game'
          )}
        >
          LEVEL
          <br />
          {userLevel}
        </div>

        <Score gameState={gameState} />

        <InfoBox gameState={gameState} matchInProgress={matchInProgress} />
      </div>

      <CommentaryTimeline commentary={commentary} prevActions={gameState.timeline} />
    </div>
  );
}
