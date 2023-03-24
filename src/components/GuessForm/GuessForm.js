import React from "react";
import { GUESS_LENGTH } from "../../constants";

function GuessForm({ handleSubmitGuess, isGameOver }) {
  const [guess, setGuess] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();

    handleSubmitGuess(guess);
    setGuess("");
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        autoFocus
        id="guess-input"
        type="text"
        required
        minLength={GUESS_LENGTH}
        maxLength={GUESS_LENGTH}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        value={guess}
        onChange={(event) => setGuess(event.target.value.toUpperCase())}
        disabled={isGameOver}
      />
    </form>
  );
}

export default GuessForm;
