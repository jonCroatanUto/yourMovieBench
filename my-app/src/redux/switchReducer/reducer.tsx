import initialState from "./state";
import { SLIDER_SWITCH } from "./types";
type Action = {
  payload: string;
  type: typeof SLIDER_SWITCH;
};

const switchReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case SLIDER_SWITCH:
      return { ...state, slider_switch: action.payload };

    default:
      return state;
  }
};

export default switchReducer;
