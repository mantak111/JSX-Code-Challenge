import React from "react";
import ReactDOM from "react-dom";

const fName = "Mantas";
const lName = "Samaitis";
const lnum = 7;

ReactDOM.render(
  <div>
    <h1>
      Labas, {fName} {lName}!
    </h1>
    <p>Jūsų sėkmingas skaičius yra {3 + 4}</p>
  </div>,
  document.getElementById("root")
);
