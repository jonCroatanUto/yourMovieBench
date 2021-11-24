import initialState from "./state";
import { DISPLAY_MODAL } from "./types";
type Action = {
  payload: boolean;
  type: string;
};
const modalReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case DISPLAY_MODAL:
      return { ...state, display: action.payload };

    default:
      return state;
  }
};

export default modalReducer;
