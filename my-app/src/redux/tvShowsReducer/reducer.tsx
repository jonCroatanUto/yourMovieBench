import initialState from "./state";
import {
  FETCH_DATA_TVSHOW,
  CHANGE_TVSHOW_POSITION,
  TVSHOW_DETAILS,
  TVSHOW_DETAILS_SHOW,
} from "./types";
interface ActionA {
  type: typeof FETCH_DATA_TVSHOW;
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
  type: typeof TVSHOW_DETAILS;
  payload: {
    in_production: boolean;
    poster_path: string;
    overview: string;
    created_by: string[];

    spoken_languages: string[];
    seasons: string[];
    production_companies: string[];
    name: string;
  };
}
interface ActionB {
  type: typeof CHANGE_TVSHOW_POSITION;
  payload: number;
}
interface ActionD {
  type: typeof TVSHOW_DETAILS_SHOW;
  payload: boolean;
}
type Action = ActionA | ActionB | ActionC | ActionD;

const TVshowsReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case FETCH_DATA_TVSHOW:
      return { ...state, tvShowData: action.payload };
    case CHANGE_TVSHOW_POSITION:
      return { ...state, tvShowPosition: action.payload };
    case TVSHOW_DETAILS:
      return { ...state, tvShowDetails: action.payload };
    case TVSHOW_DETAILS_SHOW:
      return { ...state, TVshowDetailsShow: action.payload };
    default:
      return state;
  }
};

export default TVshowsReducer;
