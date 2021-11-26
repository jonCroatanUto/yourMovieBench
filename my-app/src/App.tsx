import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import Details from "./pages/Detail/Details";
import { useDispatch, useSelector } from "react-redux";
import { moviesFetch, tvShowsFetch } from "./apiCalls";
import { fetchMoviesDataAction } from "./redux/moviesReducer/actions";
import { fetchTvshowsDataAction } from "./redux/tvShowsReducer/actions";
import { RootState } from "./redux/reducers";
function App() {
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
          <NavBar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/details" element={<Details />} />
          </Routes>
        </>
      )}
    </>
  );
}
export default App;
