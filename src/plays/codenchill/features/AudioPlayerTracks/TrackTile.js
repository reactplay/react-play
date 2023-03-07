import React, { useEffect, useState } from 'react';
import { FaPlayCircle, FaPauseCircle } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import {
  audioStatusAction,
  setCurrentTrackAction,
  setTrackIndexAction
} from '../DisplayTrackControls/TrackControlSlice';
import tracks from '../../data/track';

const TrackTile = ({ track, id }) => {
  // States from store
  const audioState = useSelector((state) => state.TrackControl.audioStatus);
  const currentTrack = useSelector((state) => state.TrackControl.currentTrack);
  const dispatch = useDispatch();

  // In-component state
  const [idplay, setIdplay] = useState(false);
  let trackId = id - 1;

  // Handles play/pause of individal tracks
  useEffect(() => {
    if (id === currentTrack?.id) {
      setIdplay(true);
    } else {
      setIdplay(false);
    }
  }, [currentTrack]);

  return (
    <div className="bg-white w-[90%] flex justify-between p-3 my-2 px-4 rounded-md drop-shadow-2xl ">
      <div className="flex justify-start items-center gap-5">
        <img
          alt="audio_image"
          className="w-[32px] h-[32px] rounded-full"
          src={track?.trackImg ?? ''}
        />
        <p>{track?.trackName}</p>
      </div>

      <div
        className="text-black "
        onClick={() => {
          dispatch(setTrackIndexAction(trackId));

          dispatch(setCurrentTrackAction(tracks[trackId]));

          if (id == currentTrack.id && audioState) {
            return dispatch(audioStatusAction(false));
          }

          return dispatch(audioStatusAction(true));
        }}
      >
        {idplay && audioState ? <FaPauseCircle size={28} /> : <FaPlayCircle size={28} />}
      </div>
    </div>
  );
};

export default TrackTile;
