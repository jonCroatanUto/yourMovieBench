import React from "react";
import { useDispatch } from "react-redux";
import NavBar from "../../components/NavBar";
import TVshowsBox from "../../components/TVshows";
import MoviesBox from "../../components/Movies";
import { moviesFetch, tvShowsFetch } from "../../apiCalls";
import { fetchMoviesDataAction } from "../../redux/moviesReducer/actions";
import { fetchTvshowsDataAction } from "../../redux/tvShowsReducer/actions";

function Home() {
  const dispatch = useDispatch();
  moviesFetch().then((res) =>
    dispatch(fetchMoviesDataAction(res.data.results))
  );
  tvShowsFetch().then((res) =>
    dispatch(fetchTvshowsDataAction(res.data.results))
  );
  return (
    <>
      <div>I'm home</div>
      <NavBar />
      <TVshowsBox />
      <MoviesBox />
    </>
  );
}
export default Home;
