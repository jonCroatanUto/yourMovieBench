import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import NavBar from "../../components/NavBar";
import TVshowsBox from "../../components/TVshows";
import MoviesBox from "../../components/Movies";
import { moviesFetch, tvShowsFetch } from "../../apiCalls";
import { fetchMoviesDataAction } from "../../redux/moviesReducer/actions";
import { fetchTvshowsDataAction } from "../../redux/tvShowsReducer/actions";

function Home() {
  //const { movieData } = useSelector((state: RootState) => state.moviesReducer);
  const [isLodaingMovies, setIsLoadingMovies] = useState(true);
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
        }) => {
          return {
            id: movie.id,
            vote_average: movie.vote_average,
            title: movie.title,
            poster_path: movie.poster_path,
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
        }) => {
          return {
            id: TVshow.id,
            vote_average: TVshow.vote_average,
            name: TVshow.name,
            poster_path: TVshow.poster_path,
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
          <div>I'm home</div>
          <NavBar />
          <TVshowsBox />
          <MoviesBox />
        </>
      )}
    </>
  );
}
export default Home;
