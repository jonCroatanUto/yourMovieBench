import initialState from "./state";
import { FETCH_DATA_MOVIES } from "./types";
type Action = {
  payload: [
    {
      id: number;
      vote_average: number;
      title: string;
      poster_path: string;
    }
  ];
  type: string;
};
const moviesReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case FETCH_DATA_MOVIES:
      return { ...state, movieData: action.payload };

    default:
      return state;
  }
};

export default moviesReducer;
