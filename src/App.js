import "./App.css";

function App({ keys, play, stop, values }) {
  const notes = ["c", "d", "e", "f", "g", "a", "h"];

  return (
    <div className={"App"}>
      <h2>work key [S, D, F, G, H, J, K]</h2>
      <div className={"piano"}>
        {notes.map((note, ind) => {
          const key = keys[ind];
          return (
            <div
              id={key}
              onMouseDown={(e) => play(values[key], key, key)}
              onMouseUp={() => stop(key, 0, key)}
              key={note}
            >
              {note}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
