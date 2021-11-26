import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Button from "../Button";
import {
  changeMoviePosAction,
  showMovieDetailsAction,
  fetchMoviesDataDetailsAction,
} from "../../redux/moviesReducer/actions";
import {
  changeTVshowPosAction,
  showTvShowDetailsAction,
  fetchTvShowDataDetailsAction,
} from "../../redux/tvShowsReducer/actions";
import { RootState } from "../../redux/reducers";
import { movieDetails, tvShowDetails } from "../../apiCalls";

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
  let navegate = useNavigate();

  const { REACT_APP_API_IMAGE_URL } = process.env;
  const { data } = props;
  const dispatch = useDispatch();
  const { moviePosition } = useSelector(
    (state: RootState) => state.moviesReducer
  );
  const { tvShowPosition } = useSelector(
    (state: RootState) => state.tvShowsReducer
  );

  function seeDetailMovies() {
    movieDetails(data.id).then((res) => {
      const objectMovieDetailsToReducer = {
        adult: res.data.adult,
        poster_path: res.data.poster_path,
        overview: res.data.overview,
        genres: res.data.genres.map((genre: { id: number; name: string }) => {
          return genre.name;
        }),
        release_date: res.data.release_date,
        runtime: res.data.runtime,
        spoken_languages: res.data.spoken_languages.map(
          (languatge: { id: number; name: string }) => {
            return languatge.name;
          }
        ),
        production_companies: res.data.production_companies.map(
          (company: { id: number; name: string }) => {
            return company.name;
          }
        ),
        production_countries: res.data.production_countries.map(
          (country: { id: number; name: string }) => {
            return country.name;
          }
        ),
        name: data.name,
      };

      dispatch(fetchMoviesDataDetailsAction(objectMovieDetailsToReducer));
      dispatch(showMovieDetailsAction(true));
      navegate("./details");
    });
  }

  function seeDetailTvShow() {
    tvShowDetails(data.id).then((res) => {
      const objectTvShowDetailsToReducer: any = {
        in_production: res.data.in_production,
        poster_path: res.data.poster_path,
        overview: res.data.overview,
        created_by: res.data.created_by.map(
          (genre: { id: number; name: string }) => {
            return genre.name;
          }
        ),
        next_episode_to_air: {
          air_date: res.data.next_episode_to_air.air_date,
          episode_number: res.data.next_episode_to_air.episode_number,
          name: res.data.next_episode_to_air.name,
          season_number: res.data.next_episode_to_air.season_number,
        },

        spoken_languages: res.data.spoken_languages.map(
          (lenguatge: { id: number; name: string }) => {
            return lenguatge.name;
          }
        ),
        seasons: res.data.seasons.map(
          (season: { id: number; name: string }) => {
            return season.name;
          }
        ),
        production_companies: res.data.production_companies.map(
          (production_companies: { id: number; name: string }) => {
            return production_companies.name;
          }
        ),
        name: res.data.name,
      };
      dispatch(fetchTvShowDataDetailsAction(objectTvShowDetailsToReducer));
      dispatch(showTvShowDetailsAction(true));
      navegate("./details");
    });
  }
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
                    <div className="container">
                      <div className="row">
                        <div className="col-10">
                          <p>Title: {data.title}</p>
                          <p>Vote_average: {data.vote_average}</p>
                        </div>
                        <div className="col-2 align-self-center">
                          <button
                            onClick={seeDetailMovies}
                            type="button"
                            className="button btn btn-warning"
                          >
                            details
                          </button>
                        </div>
                      </div>
                    </div>
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
                    <div className="container">
                      <div className="row">
                        <div className="col-10">
                          <p>Title: {data.name}</p>
                          <p>Vote_average: {data.vote_average}</p>
                        </div>
                        <div className="col-2 align-self-center">
                          <button
                            onClick={seeDetailTvShow}
                            type="button"
                            className="button btn btn-warning"
                          >
                            details
                          </button>
                        </div>
                      </div>
                    </div>
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
