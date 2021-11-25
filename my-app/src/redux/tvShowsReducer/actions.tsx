import { FETCH_DATA_TVSHOW, CHANGE_TVSHOW_POSITION } from "./types";

export const fetchTvshowsDataAction = (
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
  type: FETCH_DATA_TVSHOW,
  payload: value,
});

export const changeTVshowPosAction = (value: number) => ({
  type: CHANGE_TVSHOW_POSITION,
  payload: value,
});
