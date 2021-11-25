import React from "react";
import { useSelector } from "react-redux";
import Slide from "../../subcomponents/Slide";
import Modal from "../../subcomponents/Modal";
import { RootState } from "../../redux/reducers";

function MoviesBox() {
  const { movieData, moviePosition } = useSelector(
    (state: RootState) => state.moviesReducer
  );

  return (
    <div>
      <h1>I'm a MoviesBox</h1>

      <Slide key="moviesSlide" data={movieData[moviePosition]} />

      {/* <Modal /> */}
    </div>
  );
}
export default MoviesBox;
