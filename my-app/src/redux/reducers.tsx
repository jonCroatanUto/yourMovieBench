import { combineReducers } from "redux";
import moviesReducer from "./moviesReducer/reducer";
import tvShowsReducer from "./tvShowsReducer/reducer";
import modalReducer from "./modalReducer/reducer";

export const reducers = combineReducers({
  moviesReducer: moviesReducer,
  tvShowsReducer: tvShowsReducer,
  modalReducer: modalReducer,
});
export type RootState = ReturnType<typeof reducers>;
