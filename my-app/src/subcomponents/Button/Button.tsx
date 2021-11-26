import React from "react";
import "./button.css";
import { IoIosPlay } from "react-icons/io";
function Button(props: { onClick: () => void; side: string }) {
  return (
    <button
      type="button"
      data-testid="ButtonToTest"
      className="buttonStyle"
      onClick={props.onClick}
    >
      <IoIosPlay className={props.side} />
    </button>
  );
}
export default Button;
