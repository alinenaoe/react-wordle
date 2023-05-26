import React, { useState } from "react";

function GuessInput({ handleSubmitGuess, disabled }) {
  const [guessInput, setGuessInput] = useState("");

  const handleInputChange = (e) => {
    const newGuess = e.target.value.toUpperCase();
    setGuessInput(newGuess);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (guessInput.length === 5) {
      handleSubmitGuess(guessInput);
      setGuessInput("");
    }
  };

  return (
    <form className="guess-input-wrapper" onSubmit={handleOnSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        type="text"
        id="guess-input"
        value={guessInput}
        onChange={handleInputChange}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        minLength={5}
        maxLength={5}
        required
        disabled={disabled}
      />
    </form>
  );
}

export default GuessInput;
