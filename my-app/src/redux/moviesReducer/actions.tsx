import { FETCH_DATA_MOVIES } from "./types";

export const fetchTvshowsDataAction = (value: {
  id: number;
  vote_average: number;
  title: string;
  poster_path: string;
}) => ({
  type: FETCH_DATA_MOVIES,
  payload: value,
});
