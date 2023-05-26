import React from "react";

function ResultBanner({ gameResult, numberOfAttempts, answer }) {
  const bannerClass = `${gameResult === "won" ? "happy" : "sad"} banner`;
  const attempts =
    numberOfAttempts === 1 ? "1 guess" : `${numberOfAttempts} guesses`;

  const wonGameMessage = () => (
    <p>
      <strong>Congratulations!</strong> Got it in <strong>{attempts}</strong>.
    </p>
  );

  const lostGameMessage = () => (
    <p>
      Sorry, the correct answer is <strong>{answer}</strong>.
    </p>
  );

  return (
    <div className={bannerClass}>
      {gameResult === "won" && wonGameMessage()}
      {gameResult === "lost" && lostGameMessage()}
    </div>
  );
}

export default ResultBanner;
