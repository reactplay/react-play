import React from 'react';
import AudioplayerContainer from './features/AudioPlayerTracks/AudioplayerContainer';
import TrackControls from './features/DisplayTrackControls/TrackControls';
import TimerContainer from './features/Timer/TimerContainer';

const Main = () => {
  return (
    <div className="h-[100%] relative flex flex-col justify-between items-center">
      <div className=" bg-black  opacity-60 shadow-xl p-4 px-1 sm:px-4 mt-4 top-8 mb-4 sm:mb-0  flex  flex-col-reverse sm:flex-row justify-center items-center gap-6 z-50 w-[90vw]  sm:w-[70vw] h-[800px]  sm:h-[80%]  rounded-lg  ">
        <AudioplayerContainer />
        <TimerContainer />
      </div>
      <div className=" bg-black opacity-60 relative bottom-0 shadow-xl p-4 flex flex-row justify-around items-center gap-6  w-full h-[10vh]  px-4 sm:px-32">
        <TrackControls />
      </div>
    </div>
  );
};

export default Main;
