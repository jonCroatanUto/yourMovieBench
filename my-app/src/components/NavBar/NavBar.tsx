import React, { useState } from "react";
import "./navBar.css";
import { useDispatch, useSelector } from "react-redux";
import { switchSliderAction } from "../../redux/modalReducer/actons";
function NavBar() {
  const dispatch = useDispatch();
  const [silderLocation, setSliderLocation] = useState("movies");

  function change() {
    if (silderLocation === "tvShow") {
      dispatch(switchSliderAction("tvShow"));
      setSliderLocation("movies");
    } else {
      dispatch(switchSliderAction("movies"));
      setSliderLocation("tvShow");
    }
  }
  return (
    <div className="navBar">
      <h1 className="navBarTitle">Movies Banch</h1>
      <button onClick={change} type="button" className="button btn btn-warning">
        {silderLocation}
      </button>
    </div>
  );
}
export default NavBar;
