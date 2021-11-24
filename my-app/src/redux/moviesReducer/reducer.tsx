import initialState from "./state";
import { FETCH_DATA_MOVIES, CHANGE_MOVIE_POSITION } from "./types";
interface ActionA {
  type: typeof FETCH_DATA_MOVIES;
  payload: [
    {
      id: number;
      vote_average: number;
      title: string;
      name: string;
      poster_path: string;
    }
  ];
}
interface ActionB {
  type: typeof CHANGE_MOVIE_POSITION;
  payload: number;
}
type Action = ActionA | ActionB;

const moviesReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case FETCH_DATA_MOVIES:
      return { ...state, movieData: action.payload };
    case CHANGE_MOVIE_POSITION:
      return { ...state, moviePosition: action.payload };
    default:
      return state;
  }
};

export default moviesReducer;
