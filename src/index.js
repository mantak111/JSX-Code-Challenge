//Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.

import React from "react";
import ReactDOM, { render } from "react-dom";

ReactDOM.render(
  <div>
    <h1>My favourite fruits</h1>
    <ul>
      <li>Apple</li>
      <li>Mango</li>
      <li>Avocado</li>
    </ul>
  </div>,
  document.getElementById("root")
);
