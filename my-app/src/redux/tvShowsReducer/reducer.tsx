import initialState from "./state";
import { FETCH_DATA_TVSHOW, CHANGE_TVSHOW_POSITION } from "./types";
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
interface ActionB {
  type: typeof CHANGE_TVSHOW_POSITION;
  payload: number;
}
type Action = ActionA | ActionB;

const TVshowsReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case FETCH_DATA_TVSHOW:
      return { ...state, tvShowData: action.payload };
    case CHANGE_TVSHOW_POSITION:
      return { ...state, tvShowPosition: action.payload };

    default:
      return state;
  }
};

export default TVshowsReducer;
