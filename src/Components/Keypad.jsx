import React, { useState } from "react";
import NumberButton from "./Number-Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDivide,
  faTimes,
  faSuperscript,
  faPlus,
  faMinus,
  faBackspace
} from "@fortawesome/free-solid-svg-icons";

export default function Keypad() {
  const [output, setOutput] = useState([]);

  function clear() {
    setOutput([]);
  }
  function backspace() {
    setOutput((prev) => [...prev].slice(0, -1));
  }

  function handleOperation(e, op) {
    e.preventDefault();
    setOutput([...output, op]);
  }

  function handleClick(num) {
    setOutput((prev) => [...prev, num]);
  }
  function calculate(e) {
    e.preventDefault();
    const result = eval(output.join(""));
    setOutput([result]);
  }

  const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3];

  const divider = <FontAwesomeIcon icon={faDivide} />;
  const multiplier = <FontAwesomeIcon icon={faTimes} />;
  const subtracter = <FontAwesomeIcon icon={faMinus} />;
  const adder = <FontAwesomeIcon icon={faPlus} />;
  const exp = <FontAwesomeIcon icon={faSuperscript} />;
  const backup = <FontAwesomeIcon icon={faBackspace} />;

  return (
    <div>
      <div className="display">
        <form>
          <input
            disabled
            type="text"
            value={output.join("")}
            readOnly={true}
            style={{ textAlign: "right" }}
          />
        </form>
      </div>

      <div className="keypad">
        <div className="one">
          {/**/}
          <div className="two">
            <div className="clear-buttons">
              <button className="special-button" id="clear-all" onClick={clear}>
                CLEAR
              </button>
              <button
                onClick={backspace}
                className="special-button"
                id="backspace">{backup}</button>
            </div>
            <div className="the-numbers">
              {numbers.map((x) => {
                return (
                  <NumberButton
                    handleClick={handleClick}
                    setOutput={setOutput}
                    num={x}
                  />
                );
              })}
              <NumberButton
                handleClick={handleClick}
                setOutput={setOutput}
                num={0}
              />
              <NumberButton
                handleClick={handleClick}
                setOutput={setOutput}
                num={"."}
              />
              <button className="special-button" onClick={calculate}>=</button>
            </div>
            {/**/}
          </div>

          <div className="the-operators">
            <button onClick={e => handleOperation(e, '/')}>{divider}</button>
            <button onClick={e => handleOperation(e, '*')}>{multiplier}</button>
            <button onClick={e => handleOperation(e, '-')}>{subtracter}</button>
            <button onClick={e => handleOperation(e, '+')}>{adder}</button>
            <button
              onClick={() => {
                console.log(typeof +output.join(""));
              }}
            >
              {exp}
            </button>
          </div>

          {/**/}
        </div>
      </div>
    </div>
  );
}
