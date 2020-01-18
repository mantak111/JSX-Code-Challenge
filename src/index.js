import React from "react";
import ReactDOM from "react-dom";

const name = "Mantas";
const lnum = 7;

ReactDOM.render(
  <div>
    <h1>Labas, {name}!</h1>
    <p>Jūsų sėkmingas skaičius yra {lnum}</p>
  </div>,
  document.getElementById("root")
);
