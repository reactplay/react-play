import { createSlice } from '@reduxjs/toolkit';

const appSlice = createSlice({
  name: 'app',
  initialState: {
    isMenuOpen: true,
    isWatchPage: false,
    videoId: {}
  },
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    toggleWatchPage: (state) => {
      state.isWatchPage = !state.isWatchPage;
    },
    setVideoId: (state, action) => {
      state.videoId = action.payload;
    }
  }
});

export const { toggleMenu, toggleWatchPage, setVideoId } = appSlice.actions;
export default appSlice.reducer;
