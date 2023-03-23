import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessForm from "../GuessForm/GuessForm";
import GuessResults from "../GuessResults";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guess, setGuess] = React.useState("");
  const [guessList, setGuessList] = React.useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    const newGuess = { label: guess, id: Math.random() };
    setGuessList([...guessList, newGuess]);
    setGuess("");
    console.log({ newGuess });
  }

  function handleGuessChange(event) {
    setGuess(event.target.value.toUpperCase());
  }

  return (
    <>
      <GuessResults guessList={guessList} answer={answer} />
      <GuessForm
        guess={guess}
        onGuessChange={handleGuessChange}
        handleSubmit={handleSubmit}
      />
    </>
  );
}

export default Game;
