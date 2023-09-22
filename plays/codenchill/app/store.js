import { configureStore } from '@reduxjs/toolkit';
import TrackControlReducer from '../features/DisplayTrackControls/TrackControlSlice';
import TimerControlReducer from '../features/Timer/TimerControlSlice';

const store = configureStore({
  reducer: {
    TrackControl: TrackControlReducer,
    TimerControl: TimerControlReducer
  }
});

export default store;
