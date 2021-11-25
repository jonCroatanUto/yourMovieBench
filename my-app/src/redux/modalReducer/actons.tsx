import { SLIDER_SWITCH } from "./types";

export const switchSliderAction = (value: string) => ({
  type: SLIDER_SWITCH,
  payload: value,
});
