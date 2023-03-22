import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import Guess from "../Guess/Guess";
import { range } from "../../utils";

function GuessResults({ guessList }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((_, rowIndex) => (
        <Guess key={rowIndex} label={guessList[rowIndex]?.label} />
      ))}
    </div>
  );
}

export default GuessResults;
