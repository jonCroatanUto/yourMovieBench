import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "../Button";
import { changeMoviePosAction } from "../../redux/moviesReducer/actions";
import { changeTVshowPosAction } from "../../redux/tvShowsReducer/actions";
import { RootState } from "../../redux/reducers";
import { movieImage } from "../../apiCalls";

function Slide(props: {
  data: {
    id: number;
    vote_average: number;
    title: string;
    name: string;
    poster_path: string;
    backdrop_path: string;
  };
}) {
  const [loadingImage, setLoadingImage] = useState(true);
  const { REACT_APP_API_IMAGE_URL } = process.env;
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
      setLoadingImage(false);
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
      setLoadingImage(false);
    }
  }
  return (
    <>
      {data.name === undefined ? (
        <>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-2 align-self-center">
                <div className="row justify-content-center">
                  <Button
                    key="previousMoviesButton"
                    onClick={moviePreviousID}
                    side="iconPevious"
                  />
                </div>
              </div>
              <div className="col-8 align-self-center">
                <div className="card" key={data.id}>
                  <img
                    className="card-img-top"
                    src={`${REACT_APP_API_IMAGE_URL}${data.backdrop_path}`}
                  />
                  <div className="card-body">
                    <p key={data.id}>Title:{data.title}</p>
                    <p>vote_average:{data.vote_average}</p>
                  </div>
                </div>
              </div>
              <div className="col-2 align-self-center">
                <div className="row justify-content-center">
                  <Button
                    key="nextMoviesButton"
                    onClick={movieNextID}
                    side="iconNext"
                  />
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-2 align-self-center">
                <div className="row justify-content-center">
                  <Button
                    key="previousMoviesButton"
                    onClick={TVshowPreviousID}
                    side="iconPevious"
                  />
                </div>
              </div>
              <div className="col-8 align-self-center">
                <div className="card" key={data.id}>
                  <img
                    className="card-img-top"
                    src={`${REACT_APP_API_IMAGE_URL}${data.backdrop_path}`}
                  />
                  <div className="card-body">
                    <p>Title: {data.name}</p>
                    <p>Vote_average: {data.vote_average}</p>
                  </div>
                </div>
              </div>
              <div className="col-2 align-self-center">
                <div className="row justify-content-center">
                  <Button
                    key="nextMoviesButton"
                    onClick={TVshowNextID}
                    side="iconNext"
                  />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
export default Slide;
