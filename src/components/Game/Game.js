import React, { useEffect, useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/";
import GuessResults from "../GuessResults/";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import ResultBanner from "../ResultBanner/ResultBanner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([]);
  const [status, setStatus] = useState("running");
  // running, won or lost

  useEffect(() => {
    if (guesses.includes(answer)) {
      setStatus("won");
      return;
    }

    if (guesses.length === NUM_OF_GUESSES_ALLOWED) {
      setStatus("lost");
    }
  }, [guesses]);

  const isInputDisabled = status !== "running";

  function handleSubmitGuess(guess) {
    setGuesses([...guesses, guess]);
  }

  function renderResultBanner() {
    if (status === "running") return null;
    return (
      <ResultBanner
        gameResult={status}
        numberOfAttempts={guesses.length}
        answer={answer}
      />
    );
  }

  return (
    <>
      {renderResultBanner()}
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput
        handleSubmitGuess={handleSubmitGuess}
        disabled={isInputDisabled}
      />
    </>
  );
}

export default Game;
