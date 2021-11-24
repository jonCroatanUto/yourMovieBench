import { FETCH_DATA_TVSHOW } from "./types";

export const fetchTvshowsDataAction = (
  value: [
    {
      id: number;
      vote_average: number;
      title: string;
      poster_path: string;
    }
  ]
) => ({
  type: FETCH_DATA_TVSHOW,
  payload: value,
});
