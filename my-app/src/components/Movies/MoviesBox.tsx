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
    <div className="container">
      <div className="row">
        <h1>Popular movies</h1>
      </div>
      <div className="row">
        <Slide key="moviesSlide" data={movieData[moviePosition]} />
      </div>
    </div>
  );
}
export default MoviesBox;
