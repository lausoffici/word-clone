import React from "react";

function GuessForm({ guess, onGuessChange, handleSubmit }) {
  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        onChange={onGuessChange}
        pattern="\w{5,5}"
      />
    </form>
  );
}

export default GuessForm;
