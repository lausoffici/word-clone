import React from "react";

import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { sample } from "../../utils";
import { WORDS } from "../../data";

import GuessForm from "../GuessForm";
import GuessResults from "../GuessResults";
import GameOverBanner from "../GameOverBanner";
import Keyboard from "../Keyboard";

function Game() {
  const [guessList, setGuessList] = React.useState([]);
  const [answer, setAnswer] = React.useState(() => sample(WORDS));

  function handleSubmitGuess(guess) {
    const newGuess = { label: guess, id: Math.random() };
    setGuessList([...guessList, newGuess]);
  }

  function handleRestart() {
    setGuessList([]);
    setAnswer(sample(WORDS));
  }

  const isWinner = React.useMemo(
    () => guessList.some((guess) => guess.label === answer),
    [answer, guessList]
  );

  const isGameOver = React.useMemo(
    () => guessList.length === NUM_OF_GUESSES_ALLOWED || isWinner,
    [guessList.length, isWinner]
  );

  return (
    <>
      <GuessResults guessList={guessList} answer={answer} />
      <GuessForm
        handleSubmitGuess={handleSubmitGuess}
        isGameOver={isGameOver}
      />
      <Keyboard guessList={guessList} answer={answer} />
      {isGameOver && (
        <GameOverBanner
          isWinner={isWinner}
          answer={answer}
          guessList={guessList}
          restart={handleRestart}
        />
      )}
    </>
  );
}

export default Game;
