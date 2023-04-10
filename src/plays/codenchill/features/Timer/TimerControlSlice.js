import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  speakStatus: false,
  timerMode: 'rest'
};

const TimerControlSlice = createSlice({
  name: 'Timer',
  initialState,
  reducers: {
    setSpeakStatusAction: (state, action) => {
      state.speakStatus = action.payload;
    },
    setTimerModeAction: (state, action) => {
      state.timerMode = action.payload;
    }
  }
});

export default TimerControlSlice.reducer;
export const { setSpeakStatusAction, setTimerModeAction } = TimerControlSlice.actions;
