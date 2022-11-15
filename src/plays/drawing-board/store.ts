import { composeWithDevTools } from "redux-devtools-extension";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { applyMiddleware, createStore, combineReducers } from "redux";
import { logger } from "redux-logger";
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

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
