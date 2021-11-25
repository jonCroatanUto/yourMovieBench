import initialState from "./state";
import { SLIDER_SWITCH } from "./types";
type Action = {
  payload: string;
  type: string;
};
const modalReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case SLIDER_SWITCH:
      return { ...state, slider_switch: action.payload };

    default:
      return state;
  }
};

export default modalReducer;
