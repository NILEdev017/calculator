import React from "react";

export default function NumberButton({ handleClick, num }) {
  return (
    <button onClick={() => handleClick(num)} className="number-button">
      {num}
    </button>
  );
}
