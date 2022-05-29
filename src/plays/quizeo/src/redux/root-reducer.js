import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import directoryReducer from "./directory/directory-reducer";
import movieReducer from './movie/movie-reducer';
// import questionReducer from "./questions/question-reducer";
const persistConfig = {
    key:'root',
    storage
}

const rootReducer = combineReducers({
    directory:directoryReducer,
    movie: movieReducer
})

export default persistReducer(persistConfig, rootReducer);