import {
  FETCH_DATA_TVSHOW,
  CHANGE_TVSHOW_POSITION,
  TVSHOW_DETAILS,
  TVSHOW_DETAILS_SHOW,
} from "./types";

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

export const fetchTvShowDataDetailsAction = (value: {
  in_production: boolean;
  poster_path: string;
  overview: string;
  created_by: string[];
  next_episode_to_air: {
    air_date: string;
    episode_number: number;
    name: string;
    overview: string;
    season_number: number;
  };

  spoken_languages: string[];
  seasons: string[];
  production_companies: string[];
  name: string;
}) => ({
  type: TVSHOW_DETAILS,
  payload: value,
});
export const showTvShowDetailsAction = (value: boolean) => ({
  type: TVSHOW_DETAILS_SHOW,
  payload: value,
});
