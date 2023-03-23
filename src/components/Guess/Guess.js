import React from "react";
import { GUESS_LENGTH } from "../../constants";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Guess({ label = "", answer }) {
  const checkedGuess = React.useMemo(
    () => checkGuess(label, answer),
    [label, answer]
  );

  return (
    <p className="guess">
      {range(GUESS_LENGTH).map((_, colIndex) => (
        <span
          key={colIndex}
          className={`cell ${checkedGuess?.[colIndex]?.status || ""}`}
        >
          {label?.[colIndex] || ""}
        </span>
      ))}
    </p>
  );
}

export default Guess;
