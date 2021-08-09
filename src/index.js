import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

let play = (value, time) => {
  let context = new (window.AudioContext || window.webkitAudioContext)();
  let oscillator = context.createOscillator();
  let gain = context.createGain();

  oscillator.connect(gain);
  gain.connect(context.destination);
  oscillator.type = "square";

  oscillator.frequency.value = value;
  gain.gain.setValueAtTime(0.01, context.currentTime);
  oscillator.start(context.currentTime);

  gain.gain.exponentialRampToValueAtTime(0.001, time + 2);
  oscillator.stop(time + 0.05);
};

let up = false;

const animations = (x, y, radius, color, value) => {
  let context = new (window.AudioContext || window.webkitAudioContext)();
  let canvas = document.getElementById("animate");
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
  play(value, context.currentTime);
    up = false;

    // setTimeout(() => {
    // ctx.clearRect(0, 0, canvas.width, canvas.height);
  // }, 100);
};

window.document.addEventListener("keydown", (event) => {
  if (event.code === "KeyE" && !up) {
    up = true;
    animations(600, 600, 200, "red", 100);
  }
  if (event.code === "KeyF" && !up) {
    up = true;
    animations(600, 600, 300, "blue", 150);
  }
  if (event.code === "KeyW" && !up) {
    up = true;
    animations(600, 600, 300, "green", 150);
  }
  if (event.code === "KeyG" && !up) {
    up = true;
    animations(600, 600, 300, "yellow", 150);
  }
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
