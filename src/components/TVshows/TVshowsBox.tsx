import React from "react";
import { useSelector } from "react-redux";
import Slide from "../../subcomponents/Slide";

import { RootState } from "../../redux/reducers";

function TVshowsBox() {
  const { tvShowData, tvShowPosition } = useSelector(
    (state: RootState) => state.tvShowsReducer
  );
  return (
    <div>
      <h1 className="titles">Popular TVshows</h1>
      <Slide key="TvShowSlide" data={tvShowData[tvShowPosition]} />
    </div>
  );
}
export default TVshowsBox;
