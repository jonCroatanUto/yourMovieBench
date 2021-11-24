import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "../Button";
import { changeMoviePosAction } from "../../redux/moviesReducer/actions";
import { RootState } from "../../redux/reducers";

function Slide(props: {
  data: {
    id: number;
    vote_average: number;
    title: string;
    name: string;
    poster_path: string;
  };
}) {
  const { data } = props;
  const dispatch = useDispatch();
  const { moviePosition } = useSelector(
    (state: RootState) => state.moviesReducer
  );

  function nextMovie() {
    let position: number = moviePosition + 1;
    dispatch(changeMoviePosAction(position));
  }
  return (
    <div>
      <div>{data.title}</div>
      <div>{data.name}</div>
      <Button onClick={nextMovie} />
    </div>
  );
}
export default Slide;
