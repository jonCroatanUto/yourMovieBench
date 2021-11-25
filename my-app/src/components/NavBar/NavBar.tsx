import React from "react";
import "./navBar.css";

function NavBar() {
  const destination = "TVshows";
  return (
    <div className="navBar">
      <h1 className="navBarTitle">Movies Banch</h1>
      <button type="button" className="button btn btn-warning">
        {destination}
      </button>
    </div>
  );
}
export default NavBar;
