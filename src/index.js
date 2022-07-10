import React from "react";
import ReactDOM from "react-dom";

function DisplayList() {
  const names = [
    "John",
    "David",
    "Samuel",
    "Mathew",
    "Carl",
    "Stacie",
    "Kelly",
    "Tom",
  ];

  return names.map((nam) => <li>{nam}</li>);
}

ReactDOM.render(
  <h1>
    <DisplayList />
  </h1>,
  document.getElementById("root")
);
