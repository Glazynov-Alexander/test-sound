import "./App.css";
import { map, mapPlay, play, stop } from "./utils";
import { useCallback, useEffect, useRef, useState } from "react";

function App({ keysWhite, values, keysBlack }) {
  const [elem, setELem] = useState(null);
  const press = useRef();

  useEffect(() => {
    press.current.focus();
  }, []);

  const clickPlay = useCallback(
    (note, element) => {
      element.classList.add("down");
      setELem({
        element,
        note,
      });
      play(values[note], note);
    },
    [values]
  );

  const clickStop = useCallback(() => {
    if (elem) {
      elem.element.classList.remove("down");
      stop(elem.note, 0);
      setELem(null);
    }
  }, [elem]);

  const onPlayDown = useCallback(
    (code, entity) => {
      if (
        !map.get(code) &&
        [...keysWhite, ...keysBlack].includes(code) &&
        values[code]
      ) {
        entity.currentTarget.querySelector(`.${code}`).classList.add("down");
        return play(values[code], code);
      }
    },
    [keysBlack, keysWhite, values]
  );

  const onStopUp = useCallback(
    (code, entity) => {
      if ([...keysWhite, ...keysBlack].includes(code) && mapPlay.get(code)) {
        entity.currentTarget.querySelector(`.${code}`).classList.remove("down");
        stop(code, 0.1);
      }
    },
    [keysBlack, keysWhite]
  );

  return (
    <div
      ref={press}
      tabIndex="0"
      onKeyUp={(e) => onStopUp(e.code, e)}
      onKeyDown={(e) => onPlayDown(e.code, e)}
      onMouseUp={clickStop}
      className={"main"}
    >
      <h2>work key [S, D, F, G, H, J, K, E, R, Y, U, I]</h2>
      <div className={"black"}>
        {keysBlack.map((note) => (
          <div
            className={note}
            onMouseDown={(entity) => clickPlay(note, entity.target)}
            key={note}
          />
        ))}
      </div>

      <div className={"piano"}>
        {keysWhite.map((note) => (
          <div
            className={note}
            onMouseDown={(entity) => clickPlay(note, entity.target)}
            key={note}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
