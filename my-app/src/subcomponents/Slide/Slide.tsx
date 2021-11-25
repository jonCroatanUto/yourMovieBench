import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "../Button";
import { changeMoviePosAction } from "../../redux/moviesReducer/actions";
import { changeTVshowPosAction } from "../../redux/tvShowsReducer/actions";
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
  const { tvShowPosition } = useSelector(
    (state: RootState) => state.tvShowsReducer
  );

  function movieNextID() {
    let position: number = moviePosition + 1;
    dispatch(changeMoviePosAction(position));
  }
  function moviePreviousID() {
    let position: number = moviePosition - 1;
    if (position <= 0) {
      dispatch(changeMoviePosAction(0));
    } else {
      dispatch(changeMoviePosAction(position));
    }
  }
  function TVshowNextID() {
    let position: number = tvShowPosition + 1;
    dispatch(changeTVshowPosAction(position));
  }
  function TVshowPreviousID() {
    let position: number = tvShowPosition - 1;
    if (position < 0) {
      dispatch(changeTVshowPosAction(0));
    } else {
      dispatch(changeTVshowPosAction(position));
    }
  }
  return (
    <>
      {data.name === undefined ? (
        <div key={data.id}>
          <p key={data.id}>{data.title}</p>

          <Button key="nextMoviesButton" onClick={movieNextID} />
          <Button key="previousMoviesButton" onClick={moviePreviousID} />
        </div>
      ) : (
        <div key={data.name}>
          <p key={data.id}>{data.name}</p>
          <Button key="nextTvShowButton" onClick={TVshowNextID} />
          <Button key="previousTvShowButton" onClick={TVshowPreviousID} />
        </div>
      )}
    </>
  );
}
export default Slide;
