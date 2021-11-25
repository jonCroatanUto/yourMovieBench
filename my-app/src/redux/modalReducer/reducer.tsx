import initialState from "./state";
import { SLIDER_SWITCH, DETAILS_PAGE } from "./types";
type ActionA = {
  payload: string;
  type: typeof SLIDER_SWITCH;
};
type ActionB = {
  payload: number;
  type: typeof DETAILS_PAGE;
};
type Action = ActionA | ActionB;
const modalReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case SLIDER_SWITCH:
      return { ...state, slider_switch: action.payload };
    case DETAILS_PAGE:
      return { ...state, details_page_id: action.payload };

    default:
      return state;
  }
};

export default modalReducer;
