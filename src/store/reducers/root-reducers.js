import { combineReducers } from "redux";
import PlayReducer from "./play.reducer";

const RootReducers = combineReducers({ PlayReducer });

export default RootReducers;