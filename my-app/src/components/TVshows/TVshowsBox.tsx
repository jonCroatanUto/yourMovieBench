import React from "react";
import { useSelector } from "react-redux";
import Slide from "../../subcomponents/Slide";
import Modal from "../../subcomponents/Modal";
import { RootState } from "../../redux/reducers";

function TVshowsBox() {
  const { tvShowData } = useSelector(
    (state: RootState) => state.tvShowsReducer
  );
  return (
    <div>
      <div>I'm a tvBox</div>
      <Slide key="TvShowSlide" data={tvShowData[0]} />
      {/* <Modal /> */}
    </div>
  );
}
export default TVshowsBox;
