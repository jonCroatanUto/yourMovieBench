import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import TVshowsBox from "../../components/TVshows";
import MoviesBox from "../../components/Movies";
import { moviesFetch, tvShowsFetch } from "../../apiCalls";
import { fetchMoviesDataAction } from "../../redux/moviesReducer/actions";
import { fetchTvshowsDataAction } from "../../redux/tvShowsReducer/actions";
import { RootState } from "../../redux/reducers";
import "./home.css";
function Home() {
  //const { movieData } = useSelector((state: RootState) => state.moviesReducer);
  const [isLodaingMovies, setIsLoadingMovies] = useState(true);
  const { slider_switch } = useSelector(
    (state: RootState) => state.switchReducer
  );
  const dispatch = useDispatch();
  useEffect(() => {
    moviesFetch().then((res) => {
      const { data } = res;
      const dataMoviesToReducer = data.results.map(
        (movie: {
          id: number;
          vote_average: number;
          title: string;
          poster_path: string;
          backdrop_path: string;
        }) => {
          return {
            id: movie.id,
            vote_average: movie.vote_average,
            title: movie.title,
            poster_path: movie.poster_path,
            backdrop_path: movie.backdrop_path,
          };
        }
      );
      dispatch(fetchMoviesDataAction(dataMoviesToReducer));
    });
    tvShowsFetch().then((res) => {
      const { data } = res;
      const dataTVshowsToReducer = data.results.map(
        (TVshow: {
          id: number;
          vote_average: number;
          name: string;
          poster_path: string;
          backdrop_path: string;
        }) => {
          return {
            id: TVshow.id,
            vote_average: TVshow.vote_average,
            name: TVshow.name,
            poster_path: TVshow.poster_path,
            backdrop_path: TVshow.backdrop_path,
          };
        }
      );
      dispatch(fetchTvshowsDataAction(dataTVshowsToReducer));
      setIsLoadingMovies(false);
    });
  }, []);
  return (
    <>
      {isLodaingMovies ? (
        <div>...Loading</div>
      ) : (
        <>
          {/* <NavBar /> */}

          <div className="sliderBox">
            {slider_switch === "movies" ? (
              <MoviesBox key="movies" />
            ) : (
              <TVshowsBox key="tvShow" />
            )}
          </div>
        </>
      )}
    </>
  );
}
export default Home;
