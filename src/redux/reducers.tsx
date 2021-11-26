import { combineReducers } from "redux";
import moviesReducer from "./moviesReducer/reducer";
import tvShowsReducer from "./tvShowsReducer/reducer";
import switchReducer from "./modalReducer/reducer";

export const reducers = combineReducers({
  moviesReducer: moviesReducer,
  tvShowsReducer: tvShowsReducer,
  switchReducer: switchReducer,
});
export type RootState = ReturnType<typeof reducers>;
