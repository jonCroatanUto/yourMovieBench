import React from "react";
import { useSelector } from "react-redux";

import TVshowsBox from "../../components/TVshows";
import MoviesBox from "../../components/Movies";

import "./home.css";
import { RootState } from "../../redux/reducers";
function Home() {
  const { slider_switch } = useSelector(
    (state: RootState) => state.switchReducer
  );

  return (
    <>
      <div className="sliderBox">
        {slider_switch === "movies" ? (
          <MoviesBox key="movies" />
        ) : (
          <TVshowsBox key="tvShow" />
        )}
      </div>
    </>
  );
}
export default Home;
