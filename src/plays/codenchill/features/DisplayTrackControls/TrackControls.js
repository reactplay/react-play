import React, { useEffect, useRef, useState } from 'react';
import { FaPlayCircle, FaPauseCircle, FaVolumeMute, FaVolumeUp } from 'react-icons/fa';
import { MdSkipNext, MdSkipPrevious } from 'react-icons/md';
import { useSelector, useDispatch } from 'react-redux';
import {
  audioStatusAction,
  setTrackIndexNextAction,
  setTrackIndexPreviousAction,
  setCurrentTrackAction
} from './TrackControlSlice';
import tracks from '../../data/track';
import musicGif from '../../assets/playing.gif';
const TrackControls = () => {
  const audioEl = useRef(null);

  // States from store

  const dispatch = useDispatch();
  const audioState = useSelector((state) => state.TrackControl.audioStatus);
  const trackIndex = useSelector((state) => state.TrackControl.trackIndex);
  const currentTrack = useSelector((state) => state.TrackControl.currentTrack);

  // In-component states
  const [timeProgress, setTimeProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(60);
  const [muteVolume, setMuteVolume] = useState(false);

  const onLoadedMetadata = () => {
    const seconds = audioEl.current.duration;
    setDuration(seconds);
  };

  const handleTimeUpate = () => {
    setTimeProgress(audioEl.current.currentTime);
    if (audioEl.current.currentTime == duration) {
      handleNext();
    }
  };

  // Handles play/pause functionality
  useEffect(() => {
    if (audioState) {
      audioEl.current.play();
    } else {
      audioEl.current.pause();
    }
  }, [audioState, audioEl, trackIndex]);

  const handlePlayPause = () => {
    if (audioState) {
      dispatch(audioStatusAction(false));
    } else {
      dispatch(audioStatusAction(true));
    }
  };

  window.addEventListener('keydown', (e) => {
    if (e.key === ' ') {
      handlePlayPause();
    }
  });

  const formatTime = (time) => {
    if (time && !isNaN(time)) {
      const minutes = Math.floor(time / 60);
      const formatMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
      const seconds = Math.floor(time % 60);
      const formatSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;

      return `${formatMinutes}:${formatSeconds}`;
    }

    return '00:00';
  };

  // Handles volume up/down and mute functionality
  useEffect(() => {
    if (audioEl) {
      audioEl.current.volume = volume / 100;

      audioEl.current.muted = muteVolume;
    }
  }, [volume, audioEl, muteVolume]);

  window.addEventListener('keydown', (e) => {
    if (e.key === 'm') {
      setMuteVolume(!muteVolume);
    }
  });

  const handleNext = () => {
    if (trackIndex >= tracks.length - 1) {
      dispatch(setTrackIndexNextAction(0));
      dispatch(setCurrentTrackAction(tracks[0]));
      dispatch(audioStatusAction(true));
    } else {
      dispatch(setTrackIndexNextAction(1));
      dispatch(setCurrentTrackAction(tracks[trackIndex + 1]));
      dispatch(audioStatusAction(true));
    }
  };

  window.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') {
      handleNext();
    }
  });

  const handlePrevious = () => {
    if (trackIndex === 0) {
      let lastTrackIndex = tracks.length - 1;
      dispatch(setTrackIndexPreviousAction({ rev: true, index: lastTrackIndex }));
      dispatch(setCurrentTrackAction(tracks[lastTrackIndex]));
      dispatch(audioStatusAction(true));
    } else {
      dispatch(setTrackIndexPreviousAction({ rev: false, index: 1 }));
      dispatch(setCurrentTrackAction(tracks[trackIndex - 1]));
      dispatch(audioStatusAction(true));
    }
  };

  window.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
      handlePrevious();
    }
  });

  return (
    <>
      {/* Display Track Image and name */}
      <div className="track-display flex gap-2 sm:gap-5 items-center w-1/3 justify-aroud">
        <img
          alt="audio_image"
          className="w-[30px] h-[30px] rounded-full hidden sm:block"
          src={currentTrack?.trackImg ?? ''}
        />
        <h3 className="text-white text-sm sm:text-base">
          {currentTrack?.trackName ?? '...Loading'}{' '}
        </h3>
        <img
          className={` ${
            audioState ? 'opacity-100' : 'opacity-0'
          } w-[30px] h-[20px] sm:w-[40px] sm:h-[30px]`}
          src={musicGif}
        />
      </div>

      {/* Player controls */}

      <div className="controls relative flex justify-center items-center w-1/3">
        <div className="flex absolute justify-center gap-1 sm:gap-5 items-center">
          {' '}
          <div className="text-white cursor-pointer" onClick={() => handlePrevious()}>
            <MdSkipPrevious className=" h-[28px] sm:h-[40px] w-[28px] sm:w-[40px]" />
          </div>
          <div className="text-white cursor-pointer" onClick={() => handlePlayPause()}>
            {audioState ? (
              <FaPauseCircle className=" h-[28px] sm:h-[40px] w-[28px] sm:w-[40px]" />
            ) : (
              <FaPlayCircle className=" h-[28px] sm:h-[40px] w-[28px] sm:w-[40px]" />
            )}
          </div>
          <div className="text-white cursor-pointer" onClick={() => handleNext()}>
            <MdSkipNext className=" h-[28px] sm:h-[40px] w-[28px] sm:w-[40px]" />
          </div>
        </div>
        <audio
          className="hidden"
          ref={audioEl}
          src={currentTrack?.src}
          onLoadedMetadata={() => onLoadedMetadata()}
          onTimeUpdate={() => handleTimeUpate()}
        />
      </div>

      {/* Volume */}
      <div className="volume w-1/3 flex justify-end items-center gap-2 sm:gap-7 sm:flex-row flex-col-reverse">
        <div className="flex gap-2 sm:gap-7 items-center ">
          <span className="time current text-white text-[14px] w-[75px] sm:w-[100px] sm:text-base">{`${formatTime(
            timeProgress
          )}/${formatTime(duration)}`}</span>
          <div
            className="text-white border p-2 rounded-full cursor-pointer"
            onClick={() => setMuteVolume(!muteVolume)}
          >
            {muteVolume ? <FaVolumeMute /> : <FaVolumeUp />}
          </div>
        </div>
        <input
          className="accent-[#ffcd70] w-[80%] cursor-pointer"
          max={100}
          min={0}
          type="range"
          value={volume}
          onChange={(e) => setVolume(e.target.value)}
        />
      </div>
    </>
  );
};

export default TrackControls;
