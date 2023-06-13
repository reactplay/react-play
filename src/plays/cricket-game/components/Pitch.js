import classNames from 'classnames';

import wicket from '../assets/wicket.svg';
import batsman from '../assets/batsman.png';
import pitch from '../assets/pitch.svg';
import ball from '../assets/ball.svg';

export default function Pitch(props) {
  const { ballRef, hitBoxRef, pitchRef, shotBallRef, wicketRef, onBatSwing } = props;

  return (
    <div className="pitch w-[25rem] h-[26rem] md:w-[37rem] md:h-[29.25rem] relative" ref={pitchRef}>
      <img
        alt=""
        className="wicket w-[70px] h-[70px] md:w-[84px] md:h-[84px] absolute top-[2%] left-[41%] md:top-[-4%] md:left-[43%]"
        ref={wicketRef}
        src={wicket}
      />

      <img
        alt=""
        className="batsman w-auto h-28 md:h-36 absolute top-[-2%] left-[38%] md:top-[-4%] md:left-[40%]"
        src={batsman}
        onMouseDown={(e) => e.preventDefault()}
      />

      <div
        // className="hit-box w-[35%] h-[12%] absolute top-[8%] md:top-[6%] left-[16%] rounded-[10px] z-30"
        className="hit-box w-[35%] h-[15%] absolute top-[8%] md:top-[6%] left-[16%] rounded-[10px] z-30"
        ref={hitBoxRef}
        onMouseDown={(e) => onBatSwing(e)}
      />

      <img alt="" className="batting-pitch w-full h-full" src={pitch} />

      <img
        alt=""
        className={classNames(
          'ball w-[22px] h-[22px] absolute bottom-[10%] left-[15%] invisible z-10',
          '[--bounce-left:26%] [--end-left:40%] [--shot-left:0px] [--shot-top:0px]'
        )}
        ref={ballRef}
        src={ball}
      />

      <img
        alt=""
        className={classNames(
          'ball w-[22px] h-[22px] absolute bottom-[10%] left-[15%] invisible z-40',
          '[--bounce-left:26%] [--end-left:40%] [--shot-left:0px] [--shot-top:0px]'
        )}
        ref={shotBallRef}
        src={ball}
      />
    </div>
  );
}
