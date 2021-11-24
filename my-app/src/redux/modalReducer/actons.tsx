import { DISPLAY_MODAL } from "./types";

export const displayModalAction = (value: boolean) => ({
  type: DISPLAY_MODAL,
  payload: value,
});
