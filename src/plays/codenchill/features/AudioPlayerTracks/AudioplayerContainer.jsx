import React from 'react';
import TrackTile from './TrackTile';
import tracks from '../../data/track';
import { BiShuffle } from 'react-icons/bi';
import { useDispatch } from 'react-redux';
import {
  audioStatusAction,
  setCurrentTrackAction,
  setTrackIndexAction
} from '../DisplayTrackControls/TrackControlSlice';

const AudioplayerContainer = () => {
  const dispatch = useDispatch();

  function generateRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const handleShuffel = () => {
    const randomId = generateRandomInteger(1, tracks?.length);

    dispatch(setTrackIndexAction(randomId));

    dispatch(setCurrentTrackAction(tracks[randomId]));

    dispatch(audioStatusAction(true));
  };

  window.addEventListener('keydown', (e) => {
    if (e.key === 's') {
      handleShuffel();
    }
  });

  return (
    <div className=" w-full sm:w-1/2 h-[50%]  sm:h-[100%] border-t-2 border-light-50 sm:border-transparent pt-6 sm:pt-0 flex flex-col justify-around ">
      <div className="shuffel w-full flex justify-center ">
        <div
          className="border bg-white rounded-full py-2 px-8 hover:opacity-100 sm:hover:opacity-60 cursor-pointer"
          onClick={() => handleShuffel()}
        >
          <BiShuffle className="text-black hover:animate" />
        </div>
      </div>
      <div className="overflow-y-scroll h-[80%] flex flex-col  items-center scrollbar scrollbar-rounded-full scrollbar-thin scrollbar-thumb-sky-700/80 scrollbar-corner-black scrollbar-track-white/60  ">
        {tracks.map((track) => {
          return <TrackTile id={track?.id} key={track?.id} track={track} />;
        })}
      </div>
    </div>
  );
};

export default AudioplayerContainer;
