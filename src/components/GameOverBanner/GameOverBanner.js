import React from "react";

function GameOverBanner({ isWinner, answer, guessList, restart }) {
  const restartBtn = (
    <button className="restart" onClick={restart}>
      Restart Game
    </button>
  );

  return isWinner ? (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong> {guessList.length} guesses</strong>.
      </p>
      {restartBtn}
    </div>
  ) : (
    <div className="sad banner">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
      {restartBtn}
    </div>
  );
}

export default GameOverBanner;
