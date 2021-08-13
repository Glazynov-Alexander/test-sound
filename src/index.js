import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

let context = new window.AudioContext();
const keys = [
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
]

const map = new Map();
let ids = [];
const mapPlay = new Map();

const play = (value, event, id) => {
  document.getElementById(event).className = "down";
  if (id) ids.push(id);

  map.set(event, true);
  let oscillator = context.createOscillator();
  let gain = context.createGain();

  oscillator.connect(gain);
  gain.connect(context.destination);
  oscillator.type = "sine";

  oscillator.frequency.value = value;
  gain.gain.setValueAtTime(0.1, 0);
  gain.gain.exponentialRampToValueAtTime(0.001, context.currentTime + 3);

  oscillator.start(context.currentTime);
  mapPlay.set(event, {
    oscillator: oscillator,
    context: context.currentTime,
  });
};

const stop = (event, time, id) => {
  if (id && ids.length && !mapPlay.get(event)) {
    event = ids[0];
    ids = [];
  }

  let { oscillator, context } = mapPlay.get(event);
  oscillator.stop(context + time);
  ids = [];
  setTimeout(() => {
    document.getElementById(event).className = "";
  }, time * 1000);
  map.set(event, "");
  mapPlay.set(event, "");
};

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

window.document.addEventListener("keydown", (event) => {
  //black
  if (!map.get(event.code) && event.code === "KeyE") {
    play(values[event.code], event.code);
  }
  if (!map.get(event.code) && event.code === "KeyR") {
    play(values[event.code], event.code);
  }
  if (!map.get(event.code) && event.code === "KeyY") {
    play(values[event.code], event.code);
  }
  if (!map.get(event.code) && event.code === "KeyU") {
    play(values[event.code], event.code);
  }
  if (!map.get(event.code) && event.code === "KeyI") {
    play(values[event.code], event.code);
  }
  //white
  if (!map.get(event.code) && event.code === "KeyS") {
    play(values[event.code], event.code);
  }
  if (!map.get(event.code) && event.code === "KeyD") {
    play(values[event.code], event.code);
  }
  if (!map.get(event.code) && event.code === "KeyF") {
    play(values[event.code], event.code);
  }
  if (!map.get(event.code) && event.code === "KeyG") {
    play(values[event.code], event.code);
  }
  if (!map.get(event.code) && event.code === "KeyH") {
    play(values[event.code], event.code);
  }
  if (!map.get(event.code) && event.code === "KeyJ") {
    play(values[event.code], event.code);
  }
  if (!map.get(event.code) && event.code === "KeyK") {
    play(values[event.code], event.code);
  }
});

window.document.addEventListener("keyup", (event) => {
  if ((keys.includes(event.code) || keysBlack.includes(event.code) ) && mapPlay.get(event.code)) {
    stop(event.code, 0.1);
  }
});

ReactDOM.render(
  <React.StrictMode>
    <App keys={keys} keysBlack={keysBlack} values={values} stop={stop} play={play} />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
