import React from "react";
import NavBar from "../../components/NavBar";
import TVshowsBox from "../../components/TVshows";
import MoviesBox from "../../components/Movies";
function Home() {
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
