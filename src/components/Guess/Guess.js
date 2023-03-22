import React from "react";
import { GUESS_LENGTH } from "../../constants";
import { range } from "../../utils";

function Guess({ label }) {
  return (
    <p className="guess">
      {range(GUESS_LENGTH).map((_, colIndex) => (
        <span key={colIndex} className="cell">
          {label?.[colIndex] || ""}
        </span>
      ))}
    </p>
  );
}

export default Guess;
