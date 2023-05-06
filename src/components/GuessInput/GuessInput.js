import React, { useState } from "react";

function GuessInput() {
  const [guessInput, setGuessInput] = useState("");

  const handleInputChange = (e) => {
    const newGuess = e.target.value.toUpperCase();
    setGuessInput(newGuess);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log({ guessInput });
    if (guessInput.length === 5) {
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
      />
    </form>
  );
}

export default GuessInput;
