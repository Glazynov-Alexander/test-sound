import "./App.css";

function App({ keys, play, stop, values, keysBlack }) {
  return (
    <div className={"App"}>
      <h2>work key [S, D, F, G, H, J, K, E, R, Y, U, I]</h2>
      <div className={"black"}>
        {keysBlack.map((note, ind) => {
          return (
            <div
              id={note}
              onMouseDown={() => play(values[note], note, note)}
              onMouseUp={() => stop(note, 0, note)}
              key={note}
            >
            </div>
          );
        })}
      </div>
      <div className={"piano"}>
        {keys.map((note, ind) => {
          return (
            <div
              id={note}
              onMouseDown={(e) => play(values[note], note, note)}
              onMouseUp={() => stop(note, 0, note)}
              key={note}
            >
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
