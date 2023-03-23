import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessForm from "../GuessForm/GuessForm";
import GuessResults from "../GuessResults";
import GameOverBanner from "../GameOverBanner/GameOverBanner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guess, setGuess] = React.useState("");
  const [guessList, setGuessList] = React.useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    setGuessList([...guessList, { label: guess, id: Math.random() }]);
    setGuess("");
  }

  function handleGuessChange(event) {
    setGuess(event.target.value.toUpperCase());
  }

  const isWinner = React.useMemo(
    () => guessList.some((guess) => guess.label === answer),
    [guessList]
  );

  const isGameOver = React.useMemo(
    () => guessList.length === 6 || isWinner,
    [guessList.length, isWinner]
  );

  return (
    <>
      <GuessResults guessList={guessList} answer={answer} />
      <GuessForm
        guess={guess}
        onGuessChange={handleGuessChange}
        handleSubmit={handleSubmit}
        isGameOver={isGameOver}
      />
      {isGameOver && <GameOverBanner isWinner={isWinner} answer={answer} />}
    </>
  );
}

export default Game;
