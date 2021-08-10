import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

let context = new (window.AudioContext || window.webkitAudioContext)();
let oscillator = context.createOscillator();
let up = false;
let canvas = document.getElementById("animate");

const play = (value) => {
  context = new (window.AudioContext || window.webkitAudioContext)();
  oscillator = context.createOscillator();
  let gain = context.createGain();

  oscillator.connect(gain);
  gain.connect(context.destination);
  oscillator.type = "square";

  oscillator.frequency.value = value;
  gain.gain.setValueAtTime(1, context.currentTime);
  oscillator.start(context.currentTime);
};

const animations = (x, y, radius, color, value) => {
  up = true;
  canvas = document.getElementById("animate");
  let ctx = canvas.getContext("2d");

  const draw = () => {
    ctx.beginPath();
    ctx.lineWidth = 6;
    ctx.arc(x, y, radius, 0, Math.PI * 2, true);
    ctx.lineTo(x, y);
    ctx.closePath();
    ctx.fillStyle = color;
    ctx.fill();
  };

  draw();
  play(value);
};

const stop = () => {
  let can = canvas?.getContext("2d");
  oscillator.stop(context.currentTime);
  can.clearRect(0, 0, 1620, 1008);
  up = false;
};

window.document.addEventListener("keydown", (event) => {
  if (event.code === "KeyE" && !up) {
    animations(600, 600, 200, "#f78047", 100);
  }
  if (event.code === "KeyF" && !up) {
    animations(600, 600, 100, "#70dce191", 300);
  }
  if (event.code === "KeyW" && !up) {
    animations(600, 600, 300, "#83ef81", 200);
  }
  if (event.code === "KeyG" && !up) {
    animations(600, 600, 400, "#efdf1c", 150);
  }
});

window.document.addEventListener("keyup", (event) => {
    const keys = [ "KeyW", "KeyE", "KeyF", "KeyG" ];
    if(keys.includes(event.code) || up) {
        stop();
    }
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
