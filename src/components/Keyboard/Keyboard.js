import React, { useCallback } from "react";
import {
  KEYBOARD_FIRST_ROW_LETTERS,
  KEYBOARD_SECOND_ROW_LETTERS,
  KEYBOARD_THIRD_ROW_LETTERS,
} from "../../constants";
import { checkGuess } from "../../game-helpers";

function Keyboard({ guessList, answer }) {
  const checkedGuesses = React.useMemo(
    () => guessList.map((guess) => checkGuess(guess.label, answer)),
    [guessList, answer]
  );

  const getLetterStatus = useCallback(
    (letter) => {
      const letterStatuses = {};

      checkedGuesses.forEach((guess) => {
        guess.forEach(({ status, letter }) => {
          // correct should override anyways
          if (status === "correct") {
            letterStatuses[letter] = status;
          }
          // misplaced should override an incorrect and unused letter
          if (status === "misplaced" && letterStatuses[letter] !== "correct") {
            letterStatuses[letter] = status;
          }
          // incorrect should override an unused letter
          if (status === "incorrect" && !letterStatuses[letter]) {
            letterStatuses[letter] = status;
          }
        });
      });

      return letterStatuses[letter];
    },
    [checkedGuesses]
  );

  return (
    <div className="keyboard">
      <div className="keyboard-row">
        {KEYBOARD_FIRST_ROW_LETTERS.split("").map((letter) => (
          <div className={`key ${getLetterStatus(letter) || ""}`} key={letter}>
            {letter}
          </div>
        ))}
      </div>
      <div className="keyboard-row">
        {KEYBOARD_SECOND_ROW_LETTERS.split("").map((letter) => (
          <div className={`key ${getLetterStatus(letter) || ""}`} key={letter}>
            {letter}
          </div>
        ))}
      </div>
      <div className="keyboard-row">
        {KEYBOARD_THIRD_ROW_LETTERS.split("").map((letter) => (
          <div className={`key ${getLetterStatus(letter) || ""}`} key={letter}>
            {letter}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Keyboard;
