import {
  FETCH_DATA_MOVIES,
  CHANGE_MOVIE_POSITION,
  MOVIES_DETAILS,
} from "./types";

export const fetchMoviesDataAction = (
  value: [
    {
      id: number;
      vote_average: number;
      title: string;
      poster_path: string;
      backdrop_path: string;
    }
  ]
) => ({
  type: FETCH_DATA_MOVIES,
  payload: value,
});
export const fetchMoviesDataDetailsAction = (value: {
  adult: boolean;
  poster_path: string;
  overview: string;
  genres: [{ name: string }];
  release_date: string;
  runtime: number;
  spoken_languages: [{ name: string }];
  production_companies: [{ name: string }];
  production_countries: [{ name: string }];
}) => ({
  type: MOVIES_DETAILS,
  payload: value,
});

export const changeMoviePosAction = (value: number) => ({
  type: CHANGE_MOVIE_POSITION,
  payload: value,
});
