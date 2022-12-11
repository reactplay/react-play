import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import { logger } from "redux-logger";
import historyIndex from "./modules/historyIndex/slice";
import { currentStroke } from "./modules/currentStroke/slice";
import strokes from "./modules/strokes/slice";
import { modalVisible } from "./modules/modals/slice";

// const middleware = [...getDefaultMiddleware(), logger];

export const store = configureStore({
  reducer: combineReducers({
    historyIndex,
    currentStroke,
    strokes,
    modalVisible,
  }),

  //middleware,
});
