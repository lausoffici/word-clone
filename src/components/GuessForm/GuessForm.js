import React from "react";
import { GUESS_LENGTH } from "../../constants";

function GuessForm({ guess, onGuessChange, handleSubmit, isGameOver }) {
  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        onChange={onGuessChange}
        pattern="\w{5,5}"
        maxLength={GUESS_LENGTH}
        disabled={isGameOver}
      />
    </form>
  );
}

export default GuessForm;
