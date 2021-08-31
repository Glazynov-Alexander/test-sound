import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const keysWhite = [
  "KeyS",
  "KeyD",
  "KeyF",
  "KeyG",
  "KeyH",
  "KeyJ",
  "KeyK"
];

const keysBlack = [
    "KeyE",
    "KeyR",
    "KeyY",
    "KeyU",
    "KeyI"
];

const values = {
  KeyS: 130.81,
  KeyE: 138,
  KeyD: 146.83,
  KeyR: 154,
  KeyF: 164.81,
  KeyY: 172,
  KeyG: 174.61,
  KeyU: 184,
  KeyH: 196.0,
  KeyI: 205.0,
  KeyJ: 220.0,
  KeyK: 246.94,
};

ReactDOM.render(
  <React.StrictMode>
    <App keysWhite={keysWhite} keysBlack={keysBlack} values={values} />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
