import { combineReducers } from "redux";
// import moviesReducer from "./moviesReducer/reducer";
import tvShowsReducer from "./tvShowsReducer/reducer";
import modalReducer from "./modalReducer/reducer";

const reducers = combineReducers({
  //   moviesReducer: moviesReducer,
  tvShowsReducer: tvShowsReducer,
  modalReducer: modalReducer,
});

export default reducers;
