import { createSlice, current } from '@reduxjs/toolkit';
import tracks from '../../data/track';

const initialState = {
  audioStatus: false,
  trackIndex: 0,
  currentTrack: tracks[0]
};

const TrackControlSlice = createSlice({
  name: 'item',
  initialState,
  reducers: {
    audioStatusAction: (state, action) => {
      state.audioStatus = action.payload;
    },
    setTrackIndexNextAction: (state, action) => {
      if (action.payload) {
        state.trackIndex++;
      } else {
        state.trackIndex = 0;
      }
    },
    setTrackIndexAction: (state, action) => {
      if (action.payload) {
        state.trackIndex = action.payload;
      } else {
        state.trackIndex = 0;
      }
    },
    setTrackIndexPreviousAction: (state, action) => {
      if (!action.payload.rev) {
        state.trackIndex--;
      } else {
        state.trackIndex = action.payload.index;
      }
    },
    setCurrentTrackAction: (state, action) => {
      state.currentTrack = action.payload;
    }
  }
});

export default TrackControlSlice.reducer;
export const {
  audioStatusAction,
  setTrackIndexNextAction,
  setTrackIndexAction,
  setTrackIndexPreviousAction,
  setCurrentTrackAction
} = TrackControlSlice.actions;
