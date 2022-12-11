import { configureStore } from "@reduxjs/toolkit";
import historyIndex from "./modules/historyIndex/slice";
import { currentStroke } from "./modules/currentStroke/slice";
import strokes from "./modules/strokes/slice";
import { modalVisible } from "./modules/modals/slice";

export const store = configureStore({
  reducer: {
    historyIndex,
    currentStroke,
    strokes,
    modalVisible,
  },
});
