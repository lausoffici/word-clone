import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessForm from "../GuessForm/GuessForm";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guess, setGuess] = React.useState("");
  const [guesses, setGuesses] = React.useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    const newGuess = { label: guess, id: Math.random() };
    setGuesses([...guesses, newGuess]);
    setGuess("");
    console.log({ newGuess });
  }

  function handleGuessChange(event) {
    setGuess(event.target.value.toUpperCase());
  }

  return (
    <>
      <div className="guess-results">
        {guesses.map(({ label, id }) => (
          <p className="guess" key={id}>
            {label}
          </p>
        ))}
      </div>

      <GuessForm
        guess={guess}
        onGuessChange={handleGuessChange}
        handleSubmit={handleSubmit}
      />
    </>
  );
}

export default Game;
