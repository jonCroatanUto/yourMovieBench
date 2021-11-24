import initialState from "./state";
import { FETCH_DATA_TVSHOW } from "./types";
type Action = {
  payload: [
    {
      id: number;
      vote_average: number;
      title: string;
      name: string;
      poster_path: string;
    }
  ];
  type: string;
};
const TVshowsReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case FETCH_DATA_TVSHOW:
      return { ...state, tvShowData: action.payload };

    default:
      return state;
  }
};

export default TVshowsReducer;
