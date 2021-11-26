import initialState from "./state";
import {
  FETCH_DATA_MOVIES,
  CHANGE_MOVIE_POSITION,
  MOVIES_DETAILS,
  MOVIES_DETAILS_SHOW,
} from "./types";
interface ActionA {
  type: typeof FETCH_DATA_MOVIES;
  payload: [
    {
      id: number;
      vote_average: number;
      title: string;
      name: string;
      poster_path: string;
      backdrop_path: string;
    }
  ];
}
interface ActionC {
  type: typeof MOVIES_DETAILS;
  payload: {
    adult: boolean;
    poster_path: string;
    overview: string;
    genres: string[];
    release_date: string;
    runtime: number;
    spoken_languages: string[];
    production_companies: string[];
    production_countries: string[];
  };
}
interface ActionB {
  type: typeof CHANGE_MOVIE_POSITION;
  payload: number;
}
interface ActionD {
  type: typeof MOVIES_DETAILS_SHOW;
  payload: boolean;
}
type Action = ActionA | ActionB | ActionC | ActionD;

const moviesReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case FETCH_DATA_MOVIES:
      return { ...state, movieData: action.payload };
    case CHANGE_MOVIE_POSITION:
      return { ...state, moviePosition: action.payload };
    case MOVIES_DETAILS:
      return { ...state, movieDetails: action.payload };
    case MOVIES_DETAILS_SHOW:
      return { ...state, movieDetailsShow: action.payload };
    default:
      return state;
  }
};

export default moviesReducer;
