import React from "react";
import ReactDOM from "react-dom";

const customStyle = {
  color: "blue",
  border: "2px solid green",
  borderRadius: "5px",
  fontSize: "80px",
  padding: "20px",
  cursor: "pointer",
  backgroundColor: "hotpink"
};
customStyle.border = "5px dotted yellow";
customStyle.backgroundColor = "tomato";
ReactDOM.render(
  <h1 style={customStyle}>Hello World!</h1>,
  document.getElementById("root")
);
