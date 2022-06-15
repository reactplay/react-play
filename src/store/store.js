import { createStore } from "redux";
import RootReducers from "./reducers/root-reducers";

// const intitalState = {};

export const store = createStore(RootReducers, {});