import { FETCH_DATA_MOVIES, CHANGE_MOVIE_POSITION } from "./types";

export const fetchMoviesDataAction = (
  value: [
    {
      id: number;
      vote_average: number;
      title: string;
      poster_path: string;
    }
  ]
) => ({
  type: FETCH_DATA_MOVIES,
  payload: value,
});

export const changeMoviePosAction = (value: number) => ({
  type: CHANGE_MOVIE_POSITION,
  payload: value,
});
