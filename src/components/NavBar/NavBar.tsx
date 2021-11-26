import React, { useState } from "react";
import "./navBar.css";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router";
import { useDispatch } from "react-redux";
import { switchSliderAction } from "../../redux/modalReducer/actons";
import { showMovieDetailsAction } from "../../redux/moviesReducer/actions";
import { showTvShowDetailsAction } from "../../redux/tvShowsReducer/actions";

function NavBar() {
  const dispatch = useDispatch();
  const [silderLocation, setSliderLocation] = useState("movies");
  let navegate = useNavigate();
  const location = useLocation();

  function change() {
    if (silderLocation === "tvShow") {
      dispatch(switchSliderAction("tvShow"));
      setSliderLocation("movies");
    } else {
      dispatch(switchSliderAction("movies"));
      setSliderLocation("tvShow");
    }
  }
  function backHome() {
    dispatch(showMovieDetailsAction(false));
    dispatch(showTvShowDetailsAction(false));
    navegate("/");
  }
  return (
    <div className="navBar">
      <h1 className="navBarTitle">Movies Banch</h1>
      {location.pathname === "/" ? (
        <button
          onClick={change}
          type="button"
          className="button btn btn-warning"
        >
          {silderLocation}
        </button>
      ) : (
        <button
          onClick={backHome}
          type="button"
          className="button btn btn-warning"
        >
          back to home
        </button>
      )}
    </div>
  );
}
export default NavBar;
