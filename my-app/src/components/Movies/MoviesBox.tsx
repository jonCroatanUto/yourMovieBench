import React from "react";
import { useSelector } from "react-redux";
import Slide from "../../subcomponents/Slide";

import { RootState } from "../../redux/reducers";

function MoviesBox() {
  const { movieData, moviePosition } = useSelector(
    (state: RootState) => state.moviesReducer
  );

  return (
    <>
      <h1 className="titles">Popular movies</h1>
      <Slide key="moviesSlide" data={movieData[moviePosition]} />
    </>
  );
}
export default MoviesBox;
