import React from "react";

function Button(props: { onClick: () => void }) {
  return <button onClick={props.onClick}>next</button>;
}
export default Button;
