import React from "react";

export const Scroll = props => {
  return <div style={myStyle}>{props.children}</div>;
};

const myStyle = {
  overflowY: "scroll",
  border: "5px solid black",
  height: "500px"
};

export default Scroll;
