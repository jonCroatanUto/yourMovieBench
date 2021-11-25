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
  // console.log("id", data.id);
  // console.log("name", data.name);
  // console.log("title", data.id);
  function nextMovie() {
    let position: number = moviePosition + 1;
    dispatch(changeMoviePosAction(position));
  }
  return (
    <>
      {data.name === undefined ? (
        <div key={data.id}>
          <p key={data.id}>{data.title}</p>

          <Button key="moviesButton" onClick={nextMovie} />
        </div>
      ) : (
        <div key={data.name}>
          <p key={data.id}>{data.name}</p>
          <Button key="tvShowButton" onClick={nextMovie} />
        </div>
      )}
    </>
  );
}
export default Slide;
