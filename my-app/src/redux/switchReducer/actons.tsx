import { SLIDER_SWITCH } from "./types";

export const switchSliderAction = (value: string) => ({
  type: SLIDER_SWITCH,
  payload: value,
});
// export const detailsPageIdAction = (value: number) => ({
//   type: DETAILS_PAGE,
//   payload: value,
// });
