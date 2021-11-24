import React from "react";
import { useSelector } from "react-redux";
import Button from "../Button";
function Slide(props: {
  data: {
    id: number;
    vote_average: number;
    title: string;
    name: string;
    poster_path: string;
  };
}) {
  let pos: number = 0;

  function nextMovie() {
    pos = pos + 1;
    console.log(pos);
  }
  const { data } = props;
  return (
    <div>
      <div>{data.title}</div>
      <div>{data.name}</div>
      <Button onClick={nextMovie} />
    </div>
  );
}
export default Slide;
